import { Layers, LifeBuoy, ShieldCheck } from "lucide-react";
import { companyIntro } from "@/content/home";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const icons = [Layers, ShieldCheck, LifeBuoy];

export function CompanyIntro({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Section aria-labelledby="intro-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 flex items-center gap-2 eyebrow text-brand">
            <span aria-hidden className="size-1.5 rounded-[1px] bg-brand" />
            {companyIntro.eyebrow}
          </p>
          <Heading id="intro-heading" className="text-h2 font-semibold text-balance">
            {companyIntro.heading}
          </Heading>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <div className="space-y-5 text-lead text-ink-muted">
            {companyIntro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-10 border-l-2 border-brand pl-6">
            <p className="text-h3 font-semibold text-ink">{companyIntro.principle}</p>
          </blockquote>
        </Reveal>
      </div>
      <ul className="mt-16 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
        {companyIntro.points.map((point, i) => {
          const Icon = icons[i];
          return (
            <li key={point.title} className="bg-surface">
              <Reveal delay={i * 80} className="h-full p-7 lg:p-8">
                <Icon aria-hidden className="size-5 text-brand" />
                <h3 className="mt-5 text-[1.0625rem] font-semibold">{point.title}</h3>
                <p className="mt-2 text-small text-ink-muted">{point.body}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
