import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { sectionCopy } from "@/content/home";
import type { Faq } from "@/content/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function FaqSection({
  items,
  tone = "default",
}: {
  items: Faq[];
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone} aria-labelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="mb-4 eyebrow-rule eyebrow text-brand">{sectionCopy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="text-h2 font-semibold text-balance">
            {sectionCopy.faq.heading}
          </h2>
          <p className="mt-5 text-ink-muted">
            Have a question that is not answered here?{" "}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1 font-medium text-brand"
            >
              Ask us directly
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </p>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8">
          <Accordion type="multiple" className="border-t border-border">
            {items.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
