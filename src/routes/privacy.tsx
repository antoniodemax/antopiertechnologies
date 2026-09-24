import { LegalDocumentView } from "@/components/sections/legal-document";
import { privacyPolicy } from "@/content/legal";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.privacy);

export default function Privacy() {
  return <LegalDocumentView doc={privacyPolicy} />;
}
