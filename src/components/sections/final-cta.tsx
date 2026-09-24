import { ctas } from "@/content/site";
import { finalCta } from "@/content/home";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="section-y">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-brand-deep px-6 py-16 text-center sm:px-12 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-deep [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent_75%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/50 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-8 bottom-0 hidden items-end gap-2 opacity-30 lg:flex"
          >
            {[36, 58, 84, 112].map((h) => (
              <span
                key={h}
                className="w-4 rounded-t-sm bg-on-deep-muted/50"
                style={{ height: h }}
              />
            ))}
          </div>
          <div className="relative mx-auto max-w-3xl">
            <h2 id="final-cta-heading" className="text-h1 font-semibold text-balance text-white">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lead text-pretty text-on-deep">
              {finalCta.body}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <CtaLink cta={ctas.consultation} variant="inverse" size="lg" arrow />
              <CtaLink cta={ctas.discovery} variant="outline-inverse" size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
