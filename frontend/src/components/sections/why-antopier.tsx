import { sectionCopy } from "@/content/home";
import { pillars } from "@/content/pillars";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function WhyAntopier() {
  return (
    <Section tone="deep" aria-labelledby="why-heading" className="overflow-hidden bg-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-[50vw] -inset-y-24 bg-grid-deep [mask-image:radial-gradient(ellipse_60%_70%_at_80%_0%,black,transparent_70%)]"
      />
      <SectionHeader id="why-heading" tone="deep" {...sectionCopy.why} />
      <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <li key={pillar.title}>
              <Reveal
                delay={(i % 3) * 70}
                className="group h-full rounded-card border border-white/10 bg-[linear-gradient(180deg,rgb(255_255_255/0.06),rgb(255_255_255/0.02))] p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-[border-color,background,transform] duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[linear-gradient(180deg,rgb(255_255_255/0.09),rgb(255_255_255/0.03))] motion-reduce:hover:translate-y-0 lg:p-8"
              >
                <span className="grid size-11 place-items-center rounded-control border border-white/15 bg-white/5 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.1)]">
                  <Icon aria-hidden className="size-5" strokeWidth={1.7} />
                </span>
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
