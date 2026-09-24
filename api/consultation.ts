import { consultationSchema, type ConsultationData } from "../src/lib/consultation-schema";

// Best-effort limit per function instance. Instances are short-lived, so this only slows bursts.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

function summary(d: ConsultationData) {
  return [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    d.organisation ? `Organization: ${d.organisation}` : null,
    d.organisationType ? `Organization type: ${d.organisationType}` : null,
    d.sector ? `Sector: ${d.sector}` : null,
    d.services?.length ? `Services: ${d.services.join(", ")}` : null,
    d.timeline ? `Timeline: ${d.timeline}` : null,
    "",
    "Project:",
    d.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Email provider returned ${res.status}`);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  if (rateLimited(ip)) return json(429, { error: "rate_limited" });

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    return json(400, {
      error: "invalid",
      fields: parsed.error.issues.map((i) => i.path.join(".")),
    });
  }
  const data = parsed.data;

  // Honeypot filled in: pretend success so bots learn nothing.
  if (data.website) return json(200, { ok: true });

  if (!(await verifyTurnstile(data.turnstileToken, ip))) return json(400, { error: "captcha" });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL;
  if (!apiKey || !to || !from) return json(503, { error: "not_configured" });

  try {
    await sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: data.email,
      subject: `Consultation request from ${data.name}`,
      text: summary(data),
    });
    await sendEmail(apiKey, {
      from,
      to: [data.email],
      subject: "We received your consultation request",
      text: `Hello ${data.name},\n\nThank you for contacting Antopier Technologies. We have received your request and will reply by email with next steps.\n\nA copy of what you sent:\n\n${summary(data)}\n\nAntopier Technologies\nNairobi, Kenya`,
    });
  } catch {
    return json(502, { error: "send_failed" });
  }

  return json(200, { ok: true });
}
