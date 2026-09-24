import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServiceDetailList } from "@/components/sections/service-detail-list";
import { CtaLink } from "@/components/ui/cta-link";
import { faqsFor } from "@/content/faqs";
import { pages } from "@/content/pages";
import { ctas } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.services);

export default function Services() {
  return (
    <main id="main">
      <PageHero {...pages.services.hero}>
        <CtaLink cta={ctas.consultation} size="lg" arrow />
      </PageHero>
      <ServiceDetailList />
      <ProcessTimeline tone="muted" />
      <FaqSection items={faqsFor("services")} />
      <FinalCta />
    </main>
  );
}
