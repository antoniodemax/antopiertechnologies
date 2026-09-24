import { consultationSchema, type ConsultationData } from "@antopier/shared";

// Best-effort limit per process. Serverless instances are short-lived, so this only slows bursts.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function rateLimited(ip: string, now = Date.now()) {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

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

export function summary(d: ConsultationData) {
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

export type ConsultationResult =
  | { status: 200; body: { ok: true } }
  | { status: 400 | 429 | 502 | 503; body: { error: string; fields?: string[] } };

export async function handleConsultation(raw: unknown, ip: string): Promise<ConsultationResult> {
  if (rateLimited(ip)) return { status: 429, body: { error: "rate_limited" } };

  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: 400,
      body: { error: "invalid", fields: parsed.error.issues.map((i) => i.path.join(".")) },
    };
  }
  const data = parsed.data;

  // Honeypot filled in: pretend success so bots learn nothing.
  if (data.website) return { status: 200, body: { ok: true } };

  if (!(await verifyTurnstile(data.turnstileToken, ip))) {
    return { status: 400, body: { error: "captcha" } };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL;
  if (!apiKey || !to || !from) return { status: 503, body: { error: "not_configured" } };

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
    return { status: 502, body: { error: "send_failed" } };
  }

  return { status: 200, body: { ok: true } };
}
