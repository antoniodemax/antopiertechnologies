import { featuredSolutions } from "@/content/featured";
import { sectionCopy } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { Placeholder } from "@/components/ui/placeholder";
import { Section, SectionHeader } from "@/components/ui/section";
import { showPlaceholders } from "@/lib/env";

/** Rendered only when real items exist, or as an outlined TODO outside production. */
export function FeaturedSolutions() {
  const real = featuredSolutions.filter((f) => f.status === "final");
  if (real.length === 0 && !showPlaceholders) return null;
  return (
    <Section aria-labelledby="featured-heading">
      <SectionHeader id="featured-heading" {...sectionCopy.featured} />
      {real.length === 0
        ? featuredSolutions.map((f, i) => (
            <Placeholder key={i} todo={f.todo ?? "Add a real project."} />
          ))
        : null}
    </Section>
  );
}

export function Testimonials() {
  const real = testimonials.filter((t) => t.status === "final" && t.permissionConfirmed);
  if (real.length === 0 && !showPlaceholders) return null;
  return (
    <Section tone="muted" aria-labelledby="testimonials-heading">
      <SectionHeader id="testimonials-heading" {...sectionCopy.testimonials} />
      {real.length === 0
        ? testimonials.map((t, i) => (
            <Placeholder key={i} todo={t.todo ?? "Add a real testimonial."} />
          ))
        : null}
    </Section>
  );
}
