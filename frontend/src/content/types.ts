import type { LucideIcon } from "lucide-react";

/** final: approved for production. draft: real but unapproved copy. placeholder: stand-in, never shipped. */
export type ContentStatus = "final" | "draft" | "placeholder";

export interface Tracked {
  status: ContentStatus;
  /** Required for placeholders. Says what real content is needed. Shown in dev/preview only. */
  todo?: string;
}

/** A checkable statement and where it came from. */
export interface SourcedText {
  text: string;
  source: string;
}

export type IndustrySlug =
  | "education"
  | "healthcare"
  | "finance"
  | "retail"
  | "hospitality"
  | "real-estate"
  | "logistics"
  | "professional-services"
  | "government"
  | "ngos"
  | "startups"
  | "smes"
  | "corporations";

export type SolutionAreaSlug =
  "education" | "healthcare" | "retail" | "hospitality" | "business-operations" | "government-ngos";

export type OrganisationType = "startup" | "sme" | "corporation" | "ngo" | "government" | "other";

export interface Cta {
  label: string;
  target: { kind: "route"; path: string } | { kind: "booking"; flow: "consultation" | "discovery" };
}

export interface Service extends Tracked {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
  relatedSolutionAreas?: SolutionAreaSlug[];
}

export interface Industry extends Tracked {
  slug: IndustrySlug;
  name: string;
  icon: LucideIcon;
  group: "sector" | "organisation";
}

export type MockupKind =
  | "school-fees"
  | "clinic-schedule"
  | "retail-stock"
  | "hotel-rooms"
  | "ops-pipeline"
  | "service-tracker";

export interface SolutionArea extends Tracked {
  slug: SolutionAreaSlug;
  title: string;
  icon: LucideIcon;
  summary: string;
  problems: string[];
  solutions: { name: string; summary: string }[];
  value: string;
  mockup: MockupKind;
}

export interface FeaturedSolution extends Tracked {
  industry: string;
  clientLabel: string;
  clientNamePermission: boolean;
  challenge: string;
  solutionDelivered: string;
  technologies: string[];
  impact: { statement: string; source: string } | null;
}

export interface Testimonial extends Tracked {
  quote: string;
  personName: string;
  role: string;
  organisation: string;
  permissionConfirmed: boolean;
}

export interface ProcessStep {
  order: number;
  title: string;
  description: string;
}

export interface Faq extends Tracked {
  id: string;
  question: string;
  answer: string;
  showOn: ("home" | "services" | "contact")[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink extends Tracked {
  network: "linkedin" | "github" | "instagram" | "whatsapp";
  label: string;
  url: string;
  source: string;
}

export interface Founder extends Tracked {
  name: string;
  role: SourcedText;
  bio: SourcedText[];
  focus: SourcedText[];
  education: (SourcedText & { institution: string })[];
  buildRecord: (SourcedText & { project: string; result: string; href?: string })[];
  links: SocialLink[];
  photo: { src: string; webp: string; alt: string; width: number; height: number; source: string };
}

export interface ContactDetail extends Tracked {
  kind: "email" | "phone" | "location";
  label: string;
  value: string;
  href?: string;
  source: string;
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  noindex?: boolean;
  hero?: { eyebrow: string; heading: string; intro: string };
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  after?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
  source: string;
}
