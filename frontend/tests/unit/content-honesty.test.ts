import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { featuredSolutions } from "@/content/featured";
import { founder } from "@/content/founder";
import { pages } from "@/content/pages";
import { contactDetails } from "@/content/site";
import { testimonials } from "@/content/testimonials";

const BANNED = [
  /lorem ipsum/i,
  /example\.com/i,
  /\[[A-Z][a-z]+ ?[A-Za-z]*\]/,
  /award-winning/i,
  /world-class/i,
  /#1\b/,
  /100% secure/i,
];

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

describe("content honesty", () => {
  it("never marks a placeholder as publishable", () => {
    for (const item of [...featuredSolutions, ...testimonials]) {
      if (item.status === "placeholder") expect(item.todo, "placeholders need a todo").toBeTruthy();
      else expect(JSON.stringify(item)).not.toMatch(/TODO/);
    }
  });

  it("only publishes testimonials with written permission", () => {
    for (const t of testimonials.filter((t) => t.status === "final")) {
      expect(t.permissionConfirmed).toBe(true);
    }
  });

  it("only publishes featured impact with a source", () => {
    for (const f of featuredSolutions.filter((f) => f.status === "final")) {
      if (f.impact) expect(f.impact.source.length).toBeGreaterThan(0);
    }
  });

  it("gives every founder and contact claim a source", () => {
    const claims = [
      founder.role,
      ...founder.bio,
      ...founder.focus,
      ...founder.education,
      ...founder.buildRecord,
      ...founder.links,
      ...contactDetails,
    ];
    for (const c of claims) expect(c.source.trim().length, JSON.stringify(c)).toBeGreaterThan(0);
  });

  it("contains no banned claims or template filler in shipped content", () => {
    const files = walk("src").filter((f) => /\.(tsx?|css)$/.test(f) && !f.endsWith("types.ts"));
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      for (const pattern of BANNED) expect(text, `${file} matches ${pattern}`).not.toMatch(pattern);
    }
  });

  it("keeps page titles and descriptions within search limits and unique", () => {
    const list = Object.values(pages);
    for (const p of list) {
      expect(p.title.length, p.title).toBeLessThanOrEqual(60);
      if (!("noindex" in p && p.noindex)) {
        expect(p.description.length, p.path).toBeGreaterThanOrEqual(110);
        expect(p.description.length, p.path).toBeLessThanOrEqual(165);
      }
    }
    expect(new Set(list.map((p) => p.title)).size).toBe(list.length);
    expect(new Set(list.map((p) => p.description)).size).toBe(list.length);
  });
});
