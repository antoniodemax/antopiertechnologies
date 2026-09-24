import { NotFoundContent } from "@/components/sections/not-found";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const meta = () => pageMeta(pages.notFound);

export default function NotFound() {
  return <NotFoundContent />;
}
