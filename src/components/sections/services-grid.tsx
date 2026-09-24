import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ctas } from "@/content/site";
import { sectionCopy } from "@/content/home";
import { services } from "@/content/services";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

export function ServicesGrid() {
  return (
    <Section tone="muted" aria-labelledby="services-heading">
      <SectionHeader
        id="services-heading"
        {...sectionCopy.services}
        action={<CtaLink cta={ctas.services} variant="secondary" arrow />}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <li key={service.slug}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <Link
                  to={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-7 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-raise motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-control bg-brand-subtle text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-6 text-h3 font-semibold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-ink-muted">{service.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-brand">
                    Learn more<span className="sr-only"> about {service.title}</span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
