import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { sectionCopy } from "@/content/home";
import { founder } from "@/content/founder";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { SocialIcon } from "@/components/ui/social-icon";

function Monogram() {
  return (
    <div
      aria-hidden
      className="relative grid aspect-square w-full max-w-[15rem] place-items-center overflow-hidden rounded-media bg-brand-deep"
    >
      <div className="absolute inset-0 bg-grid-deep" />
      <span className="relative text-[4.5rem] font-semibold tracking-tight text-white">AP</span>
      <span className="absolute right-5 bottom-5 flex items-end gap-1">
        {[10, 16, 22, 30].map((h) => (
          <span key={h} className="w-1.5 rounded-t-sm bg-on-deep-muted/60" style={{ height: h }} />
        ))}
      </span>
    </div>
  );
}

export function FounderIntro({ variant = "short" }: { variant?: "short" | "full" }) {
  const full = variant === "full";
  return (
    <Section tone={full ? "muted" : "default"} aria-labelledby="founder-heading">
      <SectionHeader id="founder-heading" {...sectionCopy.founder} />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <Monogram />
          <p className="mt-6 text-h3 font-semibold">{founder.name}</p>
          <p className="mt-1 text-small text-ink-muted">{founder.role.text}</p>
          <ul className="mt-5 flex gap-2">
            {founder.links.map((link) => (
              <li key={link.network}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-control border border-border text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <SocialIcon network={link.network} className="size-4" />
                  <span className="sr-only">
                    {founder.name} on {link.label} (opens in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-8">
          <div className="space-y-5 text-lead text-ink-muted">
            {(full ? founder.bio : founder.bio.slice(0, 1)).map((p) => (
              <p key={p.text}>{p.text}</p>
            ))}
          </div>

          <h3 className="mt-10 flex items-center gap-2 eyebrow text-ink-subtle">
            <Award aria-hidden className="size-4 text-brand" />
            Build record
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {founder.buildRecord.map((item) => (
              <li
                key={item.project}
                className="rounded-card border border-border bg-surface p-5 shadow-card"
              >
                <p className="text-small font-semibold text-brand-deep">{item.result}</p>
                <p className="mt-2 font-semibold text-ink">{item.project}</p>
                {full ? <p className="mt-2 text-small text-ink-muted">{item.text}</p> : null}
              </li>
            ))}
          </ul>

          {full ? (
            <>
              <h3 className="mt-10 flex items-center gap-2 eyebrow text-ink-subtle">
                <GraduationCap aria-hidden className="size-4 text-brand" />
                Education and training
              </h3>
              <ul className="mt-4 divide-y divide-border rounded-card border border-border bg-surface">
                {founder.education.map((e) => (
                  <li
                    key={e.text}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium text-ink">{e.text}</span>
                    <span className="text-small text-ink-muted">{e.institution}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-1.5 text-small font-medium text-brand"
            >
              More about Antopier and its founder
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
