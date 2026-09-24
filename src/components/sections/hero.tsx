import { ctas } from "@/content/site";
import { hero } from "@/content/home";
import { CtaLink } from "@/components/ui/cta-link";
import { HeroComposition } from "@/components/mockups/hero-composition";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-header">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_60%_20%,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-tint/60 blur-3xl"
      />
      <div className="relative container-page grid items-center gap-16 pt-12 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-6">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 py-1.5 pr-3.5 pl-2 text-small font-medium text-ink-muted shadow-card backdrop-blur">
            <span
              aria-hidden
              className="grid size-5 place-items-center rounded-full bg-brand-subtle"
            >
              <span className="size-1.5 rounded-full bg-brand" />
            </span>
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="hero-in mt-7 text-display font-semibold text-pretty text-ink [animation-delay:60ms]"
          >
            {hero.heading}
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lead text-pretty text-ink-muted [animation-delay:120ms]">
            {hero.intro}
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row">
            <CtaLink cta={ctas.consultation} size="lg" arrow />
            <CtaLink cta={ctas.solutions} variant="secondary" size="lg" />
          </div>
          <div className="hero-in mt-12 border-t border-border pt-6 [animation-delay:240ms]">
            <p className="eyebrow text-ink-subtle">Who we work with</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-small font-medium text-ink-muted">
              {hero.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-border bg-surface/70 px-3 py-1"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hero-in [animation-delay:200ms] lg:col-span-6">
          <p className="sr-only">
            Illustration: an operations dashboard, a mobile approvals screen and a report workflow
            with a human review step, showing the kind of software Antopier builds. The data shown
            is sample data.
          </p>
          <HeroComposition className="lg:ml-6" />
          <p className="mt-14 text-center text-[0.75rem] text-ink-subtle md:mt-16 lg:text-right">
            {hero.mockupNote}
          </p>
        </div>
      </div>
    </section>
  );
}
