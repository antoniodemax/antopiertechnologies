import { ArrowRight, Check } from "lucide-react";
import { Tabs } from "radix-ui";
import { Link } from "react-router";
import { sectionCopy } from "@/content/home";
import { solutionAreas } from "@/content/solutions";
import { SolutionMockup } from "@/components/mockups/solution-mockup";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/cn";

/** Home page summary: pick a sector, see Problem → Solution → Value. */
export function SolutionsExplorer() {
  return (
    <Section aria-labelledby="solutions-heading">
      <SectionHeader id="solutions-heading" {...sectionCopy.solutions} />
      <Reveal>
        <Tabs.Root
          defaultValue={solutionAreas[0].slug}
          className="grid gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <Tabs.List
            aria-label="Choose a sector"
            className="-mx-5 flex [scrollbar-width:none] gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:gap-1 lg:overflow-visible"
          >
            {solutionAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Tabs.Trigger
                  key={area.slug}
                  value={area.slug}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 rounded-control border px-4 py-3 text-left text-small font-medium transition-[background-color,border-color,color] duration-200",
                    "border-border text-ink-muted hover:border-brand/30 hover:text-ink",
                    "data-[state=active]:border-brand/25 data-[state=active]:bg-brand-subtle data-[state=active]:text-brand-deep",
                    "lg:border-transparent lg:py-3.5 lg:text-body lg:data-[state=active]:border-brand/20",
                  )}
                >
                  <Icon
                    aria-hidden
                    className="size-4.5 shrink-0 text-ink-subtle group-data-[state=active]:text-brand"
                  />
                  <span className="flex-1">{area.title}</span>
                  <ArrowRight
                    aria-hidden
                    className="hidden size-4 -translate-x-1 opacity-0 transition-[opacity,transform] duration-200 group-data-[state=active]:translate-x-0 group-data-[state=active]:opacity-100 lg:block"
                  />
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {solutionAreas.map((area) => (
            <Tabs.Content
              key={area.slug}
              value={area.slug}
              forceMount
              className="rounded-media border border-border bg-surface-muted/60 p-6 data-[state=inactive]:hidden sm:p-8 lg:col-span-8 lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-[1fr_15rem] sm:items-start lg:gap-8 xl:grid-cols-[1fr_17rem]">
                <p className="text-lead font-medium text-balance text-ink">{area.summary}</p>
                <SolutionMockup kind={area.mockup} className="hidden sm:block" />
              </div>
              <dl className="mt-8 grid gap-7 border-t border-border pt-8 sm:grid-cols-2 sm:gap-10">
                <div>
                  <dt className="eyebrow text-ink-subtle">The problem</dt>
                  <dd className="mt-3">
                    <ul className="space-y-2.5 text-small text-ink-muted">
                      {area.problems.map((p) => (
                        <li key={p} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className="mt-2 size-1 shrink-0 rounded-full bg-border-strong"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-brand">What we build</dt>
                  <dd className="mt-3">
                    <ul className="space-y-2.5 text-small">
                      {area.solutions.map((s) => (
                        <li key={s.name} className="flex gap-2.5 font-medium text-ink">
                          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-5 rounded-card border border-brand/15 bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="eyebrow text-brand-deep">The value</p>
                  <p className="mt-1.5 text-ink">{area.value}</p>
                </div>
                <Link
                  to={`/solutions#${area.slug}`}
                  className="group inline-flex shrink-0 items-center gap-1.5 text-small font-medium text-brand"
                >
                  Explore {area.title}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Reveal>
    </Section>
  );
}
