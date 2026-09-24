import { FinalCta } from "@/components/sections/final-cta";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { PageHero } from "@/components/sections/page-hero";
import { FeaturedSolutions } from "@/components/sections/placeholder-sections";
import { SolutionAreaList } from "@/components/sections/solution-area-list";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.solutions);

export default function Solutions() {
  return (
    <main id="main">
      <PageHero {...pages.solutions.hero} />
      <SolutionAreaList />
      <IndustriesGrid />
      <FeaturedSolutions />
      <FinalCta />
    </main>
  );
}
