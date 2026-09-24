import { describe, expect, it } from "vitest";
import app from "../src/index";

const post = (body: unknown, ip = "203.0.113.1") =>
  app.request("/api/consultation", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });

const valid = {
  name: "Test Person",
  email: "person@test.co.ke",
  message: "We need a booking system for two clinics.",
  consent: true,
};

describe("POST /api/consultation", () => {
  it("rejects invalid input with field names", async () => {
    const res = await post({ name: "A" }, "203.0.113.2");
    expect(res.status).toBe(400);
    const body = (await res.json()) as { fields: string[] };
    expect(body.fields).toContain("email");
    expect(body.fields).toContain("consent");
  });

  it("swallows honeypot submissions as success", async () => {
    const res = await post({ ...valid, website: "spam" }, "203.0.113.3");
    expect(res.status).toBe(200);
  });

  it("reports missing email configuration rather than failing silently", async () => {
    delete process.env.RESEND_API_KEY;
    const res = await post(valid, "203.0.113.4");
    expect(res.status).toBe(503);
  });

  it("rate limits repeated posts from one address", async () => {
    let last = 0;
    for (let i = 0; i < 7; i++) last = (await post(valid, "203.0.113.5")).status;
    expect(last).toBe(429);
  });

  it("answers the health check", async () => {
    const res = await app.request("/api/health");
    expect(res.status).toBe(200);
  });
});
