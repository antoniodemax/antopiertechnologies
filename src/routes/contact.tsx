import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { faqsFor } from "@/content/faqs";
import { pages } from "@/content/pages";
import { contactDetails, ctas } from "@/content/site";
import { resolveCta } from "@/lib/booking";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.contact);

const steps = [
  {
    title: "We read your request",
    body: "We review what you have shared, including the problem, the organization and any timeline.",
  },
  {
    title: "We reply by email",
    body: "We come back with questions or suggest a time for a call to understand the project properly.",
  },
  {
    title: "You receive a proposal",
    body: "After the conversation, you get a written proposal with scope, timeline and cost.",
  },
];

const icons = { email: Mail, phone: MessageCircle, location: MapPin } as const;

export default function Contact() {
  const discovery = resolveCta(ctas.discovery);
  return (
    <main id="main">
      <PageHero {...pages.contact.hero} />
      <section
        id="consultation"
        aria-label="Consultation request"
        className="bg-surface-muted section-y"
      >
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
          <aside className="space-y-10 lg:col-span-5 lg:pt-4">
            <Reveal>
              <h2 className="text-h3 font-semibold">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/25 bg-surface text-small font-semibold text-brand tabular-nums">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-small text-ink-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={80} className="rounded-card border border-border bg-surface p-6">
              <h2 className="font-semibold text-ink">Contact details</h2>
              <ul className="mt-5 space-y-4">
                {contactDetails
                  .filter((d) => d.status === "final")
                  .map((d) => {
                    const Icon = icons[d.kind];
                    return (
                      <li key={d.kind} className="flex gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-control bg-brand-subtle text-brand">
                          <Icon aria-hidden className="size-4" />
                        </span>
                        <span className="text-small">
                          <span className="block text-ink-subtle">{d.label}</span>
                          {d.href ? (
                            <a
                              href={d.href}
                              className="font-medium break-words text-ink hover:text-brand"
                              {...(d.href.startsWith("http")
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            >
                              {d.value}
                            </a>
                          ) : (
                            <span className="font-medium text-ink">{d.value}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </Reveal>

            {discovery.external ? (
              <Reveal delay={120} className="rounded-card bg-brand-deep p-6 text-white">
                <h2 className="font-semibold">Prefer to talk first?</h2>
                <p className="mt-2 text-small text-on-deep">
                  Book a short discovery call to introduce your organization and ask questions
                  before sharing details.
                </p>
                <CtaLink cta={ctas.discovery} variant="inverse" className="mt-5" />
              </Reveal>
            ) : null}
          </aside>
        </div>
      </section>
      <FaqSection items={faqsFor("contact")} />
    </main>
  );
}
