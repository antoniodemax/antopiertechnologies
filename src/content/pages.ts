import type { PageMeta } from "./types";

const og = "/og-default.png";

export const pages = {
  home: {
    path: "/",
    title: "Antopier Technologies | Software Consultancy in Nairobi",
    description:
      "Antopier Technologies designs, builds and supports custom web applications, business systems, AI integrations and secure cloud platforms for organizations.",
    ogImage: og,
  },
  services: {
    path: "/services",
    title: "Services | Antopier Technologies",
    description:
      "Web design and development, custom web applications, e-commerce, AI consulting, AI integration, and security and cloud solutions from Antopier Technologies.",
    ogImage: og,
    hero: {
      eyebrow: "Services",
      heading: "Six ways we help organizations build and run better software",
      intro:
        "Each service starts from the business problem and ends with software your team can rely on. Most engagements combine two or three of them.",
    },
  },
  solutions: {
    path: "/solutions",
    title: "Solutions by Industry | Antopier Technologies",
    description:
      "Software for education, healthcare, retail, hospitality, business operations, government and NGOs, organized around the problems each sector faces.",
    ogImage: og,
    hero: {
      eyebrow: "Solutions",
      heading: "Software shaped around the problems each sector faces",
      intro:
        "Every sector loses time in its own places. Start with the problem you recognize, and we will work out the system that fixes it.",
    },
  },
  about: {
    path: "/about",
    title: "About | Antopier Technologies",
    description:
      "Antopier Technologies is a Nairobi software consultancy that puts business problems first and stays on as a long-term technology partner after launch.",
    ogImage: og,
    hero: {
      eyebrow: "About Antopier",
      heading: "A long-term technology partner, based in Nairobi",
      intro:
        "How we work, the principles behind every project, and the founder who leads the company.",
    },
  },
  contact: {
    path: "/contact",
    title: "Contact | Antopier Technologies",
    description:
      "Book a consultation with Antopier Technologies. Tell us about the problem you want to solve and we will reply with next steps for your project.",
    ogImage: og,
    hero: {
      eyebrow: "Contact",
      heading: "Tell us about the problem you want to solve",
      intro:
        "A consultation is a conversation about your project: what you need, what it involves and how we would approach it. Share a few details below and we will come back to you with next steps.",
    },
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Antopier Technologies",
    description:
      "How Antopier Technologies collects, uses, stores and protects information from our website, consultation requests, project inquiries and services.",
    ogImage: og,
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Antopier Technologies",
    description:
      "The terms that govern your access to and use of the Antopier Technologies website, including intellectual property, acceptable use and liability.",
    ogImage: og,
  },
  projectTerms: {
    path: "/project-terms",
    title: "Project Terms | Antopier Technologies",
    description:
      "How project terms work at Antopier Technologies: the terms for each engagement are set out in the proposal and client agreement before work begins.",
    ogImage: og,
  },
  notFound: {
    path: "/404",
    title: "Page not found | Antopier Technologies",
    description:
      "The page you were looking for could not be found on the Antopier Technologies website.",
    ogImage: og,
    noindex: true,
  },
} satisfies Record<string, PageMeta>;
