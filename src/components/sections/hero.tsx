import { ctas } from "@/content/site";
import { hero } from "@/content/home";
import { CtaLink } from "@/components/ui/cta-link";

const { image } = hero;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[min(46rem,100svh)] overflow-hidden bg-brand-deep text-white"
    >
      {/* Photograph. Decorative: the headline carries the message. */}
      <picture aria-hidden className="absolute inset-0 -z-20">
        <source
          type="image/webp"
          srcSet={`${image.base}-800.webp 800w, ${image.base}-1200.webp 1200w, ${image.base}-2000.webp 2000w`}
          sizes="100vw"
        />
        <img
          src={`${image.base}-1200.jpg`}
          srcSet={`${image.base}-800.jpg 800w, ${image.base}-1200.jpg 1200w, ${image.base}-2000.jpg 2000w`}
          sizes="100vw"
          alt=""
          width={2000}
          height={1333}
          fetchPriority="high"
          decoding="async"
          className="hero-photo h-full w-full object-cover object-[68%_40%] sm:object-[62%_center]"
          style={{ backgroundImage: `url(${image.lqip})`, backgroundSize: "cover" }}
        />
      </picture>

      {/* Navy wash: opaque behind the copy, opening up over the people, fading into the page below. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(14_38_74/0.96)_0%,rgb(14_38_74/0.88)_34%,rgb(21_57_111/0.55)_58%,rgb(21_57_111/0.25)_100%)] sm:bg-[linear-gradient(100deg,rgb(14_38_74/0.97)_0%,rgb(14_38_74/0.9)_30%,rgb(21_57_111/0.45)_55%,rgb(21_57_111/0.12)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(180deg,transparent,#ffffff)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-deep [mask-image:linear-gradient(90deg,black_20%,transparent_70%)] opacity-60"
      />

      <div className="relative container-page flex min-h-[min(46rem,100svh)] flex-col justify-center pt-[calc(var(--spacing-header)+2.5rem)] pb-28 sm:pb-32 lg:pb-36">
        <div className="max-w-2xl">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pr-3.5 pl-2 text-small font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.15)] backdrop-blur-md">
            <span aria-hidden className="relative grid size-5 place-items-center">
              <span className="absolute size-3 animate-ping rounded-full bg-white/40 motion-reduce:hidden" />
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="hero-in mt-7 text-display font-semibold text-pretty text-white [animation-delay:60ms] [text-shadow:0_2px_24px_rgb(0_0_0/0.25)]"
          >
            {hero.heading}
          </h1>

          <p className="hero-in mt-6 max-w-xl text-lead text-pretty text-on-deep [animation-delay:120ms]">
            {hero.intro}
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row">
            <CtaLink cta={ctas.consultation} size="lg" arrow />
            <CtaLink cta={ctas.solutions} variant="outline-inverse" size="lg" />
          </div>

          <div className="hero-in mt-12 border-t border-white/15 pt-6 [animation-delay:240ms]">
            <p className="eyebrow text-on-deep-muted">Who we work with</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-small font-medium text-white/90">
              {hero.audiences.map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
