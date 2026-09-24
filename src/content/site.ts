import type { ContactDetail, Cta } from "./types";

const PORTFOLIO = "antonypeter.vercel.app (contact section), read 2026-09-24";
const LEGAL = "Antopier legal documents v1.0 (July 2026), Privacy Policy §10";

export const site = {
  name: "Antopier Technologies",
  shortName: "Antopier",
  tagline: "Building the Future, One Solution at a Time.",
  description:
    "Antopier Technologies is a software consultancy in Nairobi, Kenya. We design, build and support web platforms, business systems and AI integrations for organizations of every size.",
  location: "Nairobi, Kenya",
} as const;

export const nav = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Use", path: "/terms" },
  { label: "Project Terms", path: "/project-terms" },
] as const;

export const ctas = {
  consultation: {
    label: "Book a Consultation",
    target: { kind: "booking", flow: "consultation" },
  },
  discovery: {
    label: "Schedule a Discovery Call",
    target: { kind: "booking", flow: "discovery" },
  },
  solutions: { label: "Explore Our Solutions", target: { kind: "route", path: "/solutions" } },
  services: { label: "View all services", target: { kind: "route", path: "/services" } },
} as const satisfies Record<string, Cta>;

export const contactDetails: ContactDetail[] = [
  {
    kind: "email",
    label: "Email",
    value: "antonypeter.dev@gmail.com",
    href: "mailto:antonypeter.dev@gmail.com",
    source: `${LEGAL}; ${PORTFOLIO}`,
    status: "final",
  },
  {
    kind: "phone",
    label: "Phone / WhatsApp",
    value: "+254 741 052 614",
    href: "https://wa.me/254741052614",
    source: PORTFOLIO,
    status: "final",
  },
  {
    kind: "location",
    label: "Location",
    value: "Nairobi, Kenya",
    source: "Design brief §1",
    status: "final",
  },
];

export const primaryEmail = contactDetails[0];
