import { ctas } from "@/content/site";
import { hero } from "@/content/home";
import { CtaLink } from "@/components/ui/cta-link";
import { HeroComposition } from "@/components/mockups/hero-composition";

/** Splits the headline so the middle phrase can carry the brand blue without changing the copy. */
function Headline({ text }: { text: string }) {
  const match = text.match(/^(.*?)(Intelligent Software)(.*)$/);
  if (!match) return <>{text}</>;
  const [, before, accent, after] = match;
  return (
    <>
      {before}
      <span className="bg-[linear-gradient(92deg,#1e62a3,#2f7cc4)] bg-clip-text text-transparent">
        {accent}
      </span>
      {after}
    </>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden pt-header">
      {/* Ground: white with a blue wash rising behind the product, and a faint engineering grid. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(70rem_36rem_at_88%_-6%,#dce8f5_0%,rgb(220_232_245/0.55)_35%,transparent_70%),radial-gradient(40rem_28rem_at_-10%_100%,rgb(237_243_250/0.9),transparent_60%),#ffffff]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-strong [mask-image:radial-gradient(ellipse_90%_80%_at_55%_15%,black_30%,transparent_92%)]"
      />

      <div className="relative container-page grid items-center gap-16 pt-14 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-32">
        <div className="lg:col-span-6">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-brand/15 bg-[linear-gradient(90deg,#edf3fa,#ffffff)] py-1.5 pr-3.5 pl-2 text-small font-medium text-brand-deep shadow-[0_1px_2px_rgb(21_57_111/0.06),inset_0_1px_0_#fff]">
            <span aria-hidden className="relative grid size-5 place-items-center">
              <span className="absolute size-3 animate-ping rounded-full bg-brand/30 motion-reduce:hidden" />
              <span className="size-1.5 rounded-full bg-brand" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="hero-in mt-7 text-display font-semibold text-pretty text-ink [animation-delay:60ms]"
          >
            <Headline text={hero.heading} />
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
                  className="rounded-full border border-border bg-surface/80 px-3 py-1 shadow-[inset_0_1px_0_#fff]"
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
          <div className="relative lg:pl-6">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-12 -bottom-4 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgb(30_98_163/0.22),transparent)] blur-2xl"
            />
            <HeroComposition />
          </div>
          <p className="mt-14 text-center text-[0.75rem] text-ink-subtle md:mt-16 lg:mt-20 lg:text-right">
            {hero.mockupNote}
          </p>
        </div>
      </div>
    </section>
  );
}
