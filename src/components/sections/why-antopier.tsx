import { sectionCopy } from "@/content/home";
import { pillars } from "@/content/pillars";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function WhyAntopier() {
  return (
    <Section tone="deep" aria-labelledby="why-heading" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-[50vw] -inset-y-24 bg-grid-deep [mask-image:radial-gradient(ellipse_60%_70%_at_80%_0%,black,transparent_70%)]"
      />
      <SectionHeader id="why-heading" tone="deep" {...sectionCopy.why} />
      <ul className="relative grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <li key={pillar.title} className="bg-brand-deep">
              <Reveal
                delay={(i % 3) * 70}
                className="h-full p-7 transition-colors duration-300 hover:bg-white/[0.03] lg:p-9"
              >
                <Icon aria-hidden className="size-6 text-on-deep-muted" strokeWidth={1.6} />
                <h3 className="mt-6 text-h3 font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-small text-on-deep">{pillar.description}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
