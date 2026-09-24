import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Link } from "react-router";
import type { Cta } from "@/content/types";
import { resolveCta } from "@/lib/booking";
import { cn } from "@/lib/cn";
import { buttonVariants } from "./button";

type CtaLinkProps = VariantProps<typeof buttonVariants> & {
  cta: Cta;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function CtaLink({ cta, variant, size, className, arrow = false, onClick }: CtaLinkProps) {
  const { href, external } = resolveCta(cta);
  const classes = cn(buttonVariants({ variant, size }), className);
  const icon = external ? (
    <ArrowUpRight
      aria-hidden
      className="transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
    />
  ) : arrow ? (
    <ArrowRight
      aria-hidden
      className="transition-transform duration-200 group-hover/button:translate-x-0.5"
    />
  ) : null;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {cta.label}
        {icon}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link to={href} className={classes} onClick={onClick}>
      {cta.label}
      {icon}
    </Link>
  );
}
