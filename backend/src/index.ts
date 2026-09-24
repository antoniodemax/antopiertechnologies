import { Hono } from "hono";
import { cors } from "hono/cors";
import { handleConsultation } from "./consultation";

const allowedOrigins = (process.env.ALLOWED_ORIGIN ?? "http://localhost:5173")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const app = new Hono();

app.use(
  "/api/*",
  cors({ origin: allowedOrigins, allowMethods: ["GET", "POST"], maxAge: 600 }),
);

app.get("/api/health", (c) => c.json({ ok: true }));

app.post("/api/consultation", async (c) => {
  const ip = c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  let raw: unknown;
  try {
    raw = await c.req.json();
  } catch {
    return c.json({ error: "invalid_json" }, 400);
  }
  const result = await handleConsultation(raw, ip);
  return c.json(result.body, result.status);
});

app.notFound((c) => c.json({ error: "not_found" }, 404));

export default app;
