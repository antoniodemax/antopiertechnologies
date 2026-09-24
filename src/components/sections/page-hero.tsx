import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  heading,
  intro,
  children,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative overflow-hidden border-b border-border pt-header"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-brand-tint/50 blur-3xl"
      />
      <div className="relative container-page pt-16 pb-16 sm:pt-20 lg:pt-24 lg:pb-20">
        <p className="hero-in flex items-center gap-2 eyebrow text-brand">
          <span aria-hidden className="size-1.5 rounded-[1px] bg-brand" />
          {eyebrow}
        </p>
        <h1
          id="page-heading"
          className="hero-in mt-5 max-w-4xl text-h1 font-semibold text-balance [animation-delay:60ms]"
        >
          {heading}
        </h1>
        <p className="hero-in mt-6 max-w-2xl text-lead text-pretty text-ink-muted [animation-delay:120ms]">
          {intro}
        </p>
        {children ? <div className="hero-in mt-9 [animation-delay:180ms]">{children}</div> : null}
      </div>
    </section>
  );
}
