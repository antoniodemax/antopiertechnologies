import { CompanyIntro } from "@/components/sections/company-intro";
import { FinalCta } from "@/components/sections/final-cta";
import { FounderIntro } from "@/components/sections/founder-intro";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WhyAntopier } from "@/components/sections/why-antopier";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.about);

export default function About() {
  return (
    <main id="main">
      <PageHero {...pages.about.hero} />
      <CompanyIntro />
      <WhyAntopier />
      <ProcessTimeline />
      <FounderIntro variant="full" />
      <FinalCta />
    </main>
  );
}
