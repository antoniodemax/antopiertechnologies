import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

type Tone = "default" | "muted" | "deep";

export function Section({
  tone = "default",
  className,
  children,
  ...props
}: ComponentProps<"section"> & { tone?: Tone }) {
  return (
    <section
      className={cn(
        "relative section-y",
        tone === "muted" && "bg-surface-muted",
        tone === "deep" && "bg-brand-deep text-white",
        className,
      )}
      {...props}
    >
      <div className="relative container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  id,
  align = "left",
  tone = "default",
  action,
  className,
}: {
  eyebrow: string;
  heading: string;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: Tone;
  action?: ReactNode;
  className?: string;
}) {
  const deep = tone === "deep";
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-6 lg:mb-16",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "flex flex-col items-center")}>
        <p className={cn("mb-4 eyebrow-rule eyebrow", deep ? "text-on-deep-muted" : "text-brand")}>
          {eyebrow}
        </p>
        <h2
          id={id}
          className={cn("text-h2 font-semibold text-balance", deep ? "text-white" : "text-ink")}
        >
          {heading}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-5 max-w-prose text-lead text-pretty",
              deep ? "text-on-deep" : "text-ink-muted",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
