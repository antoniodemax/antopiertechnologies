import { sectionCopy } from "@/content/home";
import { processSteps } from "@/content/process";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function ProcessTimeline({ tone = "default" }: { tone?: "default" | "muted" }) {
  return (
    <Section tone={tone} aria-labelledby="process-heading">
      <SectionHeader id="process-heading" {...sectionCopy.process} />
      <ol className="relative grid gap-0 lg:grid-cols-7 lg:gap-4">
        <span
          aria-hidden
          className="absolute top-5 right-[7%] left-[7%] hidden h-px bg-[linear-gradient(90deg,transparent,rgb(30_98_163/0.35)_10%,rgb(30_98_163/0.35)_90%,transparent)] lg:block"
        />
        {processSteps.map((step, i) => (
          <li
            key={step.order}
            className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0"
          >
            {i < processSteps.length - 1 ? (
              <span
                aria-hidden
                className="absolute top-11 bottom-0 left-5 w-px bg-[linear-gradient(180deg,rgb(30_98_163/0.35),rgb(30_98_163/0.1))] lg:hidden"
              />
            ) : null}
            <Reveal delay={i * 60} className="contents lg:block">
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-brand/30 bg-[linear-gradient(180deg,#ffffff,#edf3fa)] text-small font-semibold text-brand tabular-nums shadow-[0_1px_2px_rgb(21_57_111/0.1),inset_0_1px_0_#fff] lg:mx-auto">
                {String(step.order).padStart(2, "0")}
              </span>
              <div className="pt-1.5 lg:mt-6 lg:pt-0 lg:text-center">
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-small text-ink-muted">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
