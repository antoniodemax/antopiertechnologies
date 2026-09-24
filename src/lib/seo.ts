import type { MetaDescriptor } from "react-router";
import type { PageMeta } from "@/content/types";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";

export function pageMeta(page: PageMeta): MetaDescriptor[] {
  const url = siteUrl ? `${siteUrl}${page.path === "/" ? "" : page.path}` : undefined;
  const image = siteUrl ? `${siteUrl}${page.ogImage}` : page.ogImage;
  const tags: MetaDescriptor[] = [
    { title: page.title },
    { name: "description", content: page.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${site.name} logo` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: image },
  ];
  if (url) {
    tags.push({ property: "og:url", content: url });
    tags.push({ tagName: "link", rel: "canonical", href: url });
  }
  if (page.noindex) tags.push({ name: "robots", content: "noindex" });
  return tags;
}
