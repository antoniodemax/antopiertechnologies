import { sectionCopy } from "@/content/home";
import { industries } from "@/content/industries";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function IndustriesGrid({ tone = "muted" }: { tone?: "default" | "muted" }) {
  return (
    <Section tone={tone} aria-labelledby="industries-heading">
      <SectionHeader id="industries-heading" {...sectionCopy.industries} />
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <li
                key={industry.slug}
                className="surface-card flex surface-card-hover items-center gap-3 rounded-card px-3.5 py-3"
              >
                <span className="icon-tile size-9 shrink-0">
                  <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
                <span className="text-small leading-tight font-medium text-ink">
                  {industry.name}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
