import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router";
import { services } from "@/content/services";
import { solutionAreas } from "@/content/solutions";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

const areaTitle = (slug: string) => solutionAreas.find((a) => a.slug === slug)?.title ?? slug;

export function ServiceDetailList() {
  return (
    <section aria-label="Our services" className="section-y">
      <div className="container-page">
        <nav aria-label="Jump to a service" className="mb-16 flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-border px-4 py-2 text-small font-medium text-ink-muted transition-colors hover:border-brand/40 hover:text-brand"
            >
              {service.title}
            </a>
          ))}
        </nav>
        <div className="divide-y divide-border border-y border-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            const related: readonly string[] =
              "relatedSolutionAreas" in service ? service.relatedSolutionAreas : [];
            return (
              <article
                key={service.slug}
                id={service.slug}
                aria-labelledby={`${service.slug}-heading`}
                className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-12 lg:py-16"
              >
                <Reveal className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-control bg-brand text-white shadow-[0_8px_20px_-8px_rgb(30_98_163/0.6)]">
                      <Icon aria-hidden className="size-5.5" />
                    </span>
                    <span className="eyebrow text-ink-subtle tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2
                    id={`${service.slug}-heading`}
                    className="mt-6 text-h2 font-semibold text-balance"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lead font-medium text-ink">{service.summary}</p>
                </Reveal>
                <Reveal delay={80} className="lg:col-span-7">
                  <p className="text-lead text-ink-muted">{service.description}</p>
                  <h3 className="mt-9 eyebrow text-ink-subtle">What you get</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex gap-3 rounded-control border border-border bg-surface p-4 text-small font-medium text-ink"
                      >
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    {related.length > 0 ? (
                      <p className="text-small text-ink-muted">
                        Often used in{" "}
                        {related.map((slug, i) => (
                          <span key={slug}>
                            {i > 0 ? (i === related.length - 1 ? " and " : ", ") : null}
                            <Link
                              to={`/solutions#${slug}`}
                              className="font-medium text-brand hover:underline"
                            >
                              {areaTitle(slug)}
                            </Link>
                          </span>
                        ))}
                        .
                      </p>
                    ) : (
                      <span />
                    )}
                    <Link
                      to={`/contact?service=${service.slug}#consultation`}
                      className={cn(buttonVariants({ variant: "secondary" }), "self-start")}
                    >
                      Discuss this service
                      <span className="sr-only">: {service.title}</span>
                      <ArrowRight aria-hidden />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
