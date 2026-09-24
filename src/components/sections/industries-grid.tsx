import { sectionCopy } from "@/content/home";
import { industries } from "@/content/industries";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function IndustriesGrid({ tone = "muted" }: { tone?: "default" | "muted" }) {
  return (
    <Section tone={tone} aria-labelledby="industries-heading">
      <SectionHeader id="industries-heading" {...sectionCopy.industries} />
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <li
                key={industry.slug}
                className="flex items-center gap-3 rounded-control border border-border bg-surface px-4 py-4 transition-colors duration-200 hover:border-brand/30"
              >
                <Icon aria-hidden className="size-5 shrink-0 text-brand" strokeWidth={1.75} />
                <span className="text-small font-medium text-ink">{industry.name}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
