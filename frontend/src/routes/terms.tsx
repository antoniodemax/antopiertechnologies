import { LegalDocumentView } from "@/components/sections/legal-document";
import { termsOfUse } from "@/content/legal";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.terms);

export default function Terms() {
  return <LegalDocumentView doc={termsOfUse} />;
}
