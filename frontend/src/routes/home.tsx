import { CompanyIntro } from "@/components/sections/company-intro";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";
import { FounderIntro } from "@/components/sections/founder-intro";
import { Hero } from "@/components/sections/hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { FeaturedSolutions, Testimonials } from "@/components/sections/placeholder-sections";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SolutionsExplorer } from "@/components/sections/solutions-explorer";
import { WhyAntopier } from "@/components/sections/why-antopier";
import { faqsFor } from "@/content/faqs";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.home);

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <CompanyIntro />
      <ServicesGrid />
      <SolutionsExplorer />
      <WhyAntopier />
      <ProcessTimeline />
      <FeaturedSolutions />
      <IndustriesGrid />
      <FounderIntro />
      <Testimonials />
      <FaqSection items={faqsFor("home")} tone="muted" />
      <FinalCta />
    </main>
  );
}
