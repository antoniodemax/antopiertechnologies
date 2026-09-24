import { Check } from "lucide-react";
import { ctas } from "@/content/site";
import { solutionAreas } from "@/content/solutions";
import { SolutionMockup } from "@/components/mockups/solution-mockup";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Link } from "react-router";
import { cn } from "@/lib/cn";

/** Solutions page: every area in full, Problem → Solution → Value. */
export function SolutionAreaList() {
  return (
    <section aria-label="Solutions by sector" className="section-y">
      <div className="container-page">
        <nav aria-label="Jump to a sector" className="mb-16 flex flex-wrap gap-2">
          {solutionAreas.map((area) => (
            <a
              key={area.slug}
              href={`#${area.slug}`}
              className="rounded-full border border-border px-4 py-2 text-small font-medium text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
            >
              {area.title}
            </a>
          ))}
        </nav>
        <div className="divide-y divide-border border-y border-border">
          {solutionAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <article
                key={area.slug}
                id={area.slug}
                aria-labelledby={`${area.slug}-heading`}
                className="py-14 lg:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <Reveal
                    className={cn("lg:col-span-7", index % 2 === 1 && "lg:order-2 lg:col-start-6")}
                  >
                    <div className="flex items-center gap-3">
                      <span className="icon-tile size-11">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="eyebrow text-ink-subtle">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(solutionAreas.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 id={`${area.slug}-heading`} className="mt-6 text-h2 font-semibold">
                      {area.title}
                    </h2>
                    <p className="mt-4 max-w-prose text-lead text-ink-muted">{area.summary}</p>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                      <div>
                        <h3 className="eyebrow text-ink-subtle">The problem</h3>
                        <ul className="mt-4 space-y-3 text-ink-muted">
                          {area.problems.map((p) => (
                            <li key={p} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-2.5 size-1 shrink-0 rounded-full bg-border-strong"
                              />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="eyebrow text-brand">What we build</h3>
                        <ul className="mt-4 space-y-4">
                          {area.solutions.map((s) => (
                            <li key={s.name} className="flex gap-3">
                              <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand" />
                              <span>
                                <span className="block font-medium text-ink">{s.name}</span>
                                <span className="text-small text-ink-muted">{s.summary}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 rounded-card border border-brand/15 bg-[linear-gradient(90deg,#edf3fa,#ffffff_70%)] p-6">
                      <h3 className="eyebrow text-brand-deep">The value</h3>
                      <p className="mt-2 font-medium text-ink">{area.value}</p>
                    </div>

                    <Link
                      to={`/contact?sector=${area.slug}#consultation`}
                      className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
                    >
                      {ctas.consultation.label}
                      <span className="sr-only"> about {area.title}</span>
                    </Link>
                  </Reveal>
                  <Reveal
                    delay={100}
                    className={cn("lg:col-span-5", index % 2 === 1 && "lg:order-1 lg:col-start-1")}
                  >
                    <div className="rounded-media border border-border bg-[linear-gradient(180deg,#f4f7fb,#eef2f8)] p-5 sm:p-8 lg:sticky lg:top-28">
                      <SolutionMockup kind={area.mockup} />
                      <p className="mt-4 text-[0.75rem] text-ink-subtle">
                        Illustrative interface with sample data
                      </p>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
