export const hero = {
  eyebrow: "Software consultancy · Nairobi, Kenya",
  // Headline and supporting copy are the design brief's (§8), kept verbatim until rewrites are approved.
  heading: "Building Intelligent Software for Modern Organizations",
  intro:
    "We design, develop, and scale enterprise software, AI-powered applications, secure web platforms, and digital solutions that help organizations operate smarter, grow faster, and innovate with confidence.",
  audiences: ["Startups", "SMEs", "Corporations", "NGOs", "Government"],
  image: {
    base: "/hero/consultation",
    lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAbACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDV6CoftCiYIetTfaonIDCq09r/AKQJ4zlM5xWRoaWQqcnAqFJEmB2HOKztUa5kX9w2EA5rN0m8uI5ysmSjGqFYreIJCbor2FFPvLL7RcySyyd+AKKOZFcjLbXQXmpkuvOiMZfbnoaz8kimg4bilYi5tRaNdzoG+15U1BfxLpqhC2W9au6PNJ5LDceKy/ELGRgXOaHqVF2ZmyXB5OetFROBsFFIttn/2Q==",
    credit: {
      photographer: "UK Black Tech",
      platform: "Unsplash",
      url: "https://unsplash.com/photos/LRn6do1x6tI",
    },
    licence:
      "Unsplash License (free for commercial use, no attribution required). Downloaded 2026-09-24.",
    note: "Editorial photograph of professionals in a meeting. Not Antopier staff or clients; never captioned as such.",
  },
} as const;

export const companyIntro = {
  eyebrow: "Who we are",
  heading: "A software partner that starts with the business problem",
  paragraphs: [
    "Antopier Technologies is a software consultancy based in Nairobi, Kenya. We work with startups, SMEs, corporations, NGOs and public institutions to design, build and support the systems they depend on.",
    "Every engagement starts with how your organization works today: who will use the system, where time and information get lost, and what has to be true for the project to succeed. The technology choices follow from that.",
  ],
  principle: "Business problems first. Technology second.",
  points: [
    {
      title: "Architecture planned for growth",
      body: "Data models, integrations and infrastructure are designed so the system can take on more users and features without a rewrite.",
    },
    {
      title: "Security from day one",
      body: "Authentication, access control and data protection are part of the architecture from the first sprint.",
    },
    {
      title: "Support after launch",
      body: "We stay on after release to monitor, maintain and improve what we built, on terms agreed with you.",
    },
  ],
} as const;

export const finalCta = {
  // Brief §19 copy, kept verbatim until rewrites are approved.
  heading: "Let's Build Something Exceptional Together",
  body: "Whether you're launching a startup, modernizing enterprise software, or exploring AI-powered solutions, Antopier Technologies is ready to help transform your vision into scalable digital products.",
} as const;

export const sectionCopy = {
  services: {
    eyebrow: "Services",
    heading: "What we build, and the problems it solves",
    intro: "Six services, each described by the result it gives your organization.",
  },
  solutions: {
    eyebrow: "Solutions",
    heading: "Built around the problems in your sector",
    intro:
      "Solutions are organized by industry and start with the problems people there deal with every day.",
  },
  why: {
    eyebrow: "Why Antopier",
    heading: "How we work, and why it holds up over time",
    intro:
      "Six principles that shape every system we design and every decision we make on your behalf.",
  },
  process: {
    eyebrow: "Process",
    heading: "A clear path from first conversation to long-term support",
    intro: "Seven stages, with your review and approval at each milestone.",
  },
  industries: {
    eyebrow: "Industries we serve",
    heading: "Sectors and organizations we build for",
    intro:
      "These are the sectors and types of organization our services are designed for. Tell us about yours and we will tell you how we would approach it.",
  },
  founder: {
    eyebrow: "Leadership",
    heading: "Meet the founder",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions organizations ask before starting",
  },
  featured: {
    eyebrow: "Featured solutions",
    heading: "Real projects, with the business context behind them",
  },
  testimonials: {
    eyebrow: "Client perspectives",
    heading: "What clients say",
  },
} as const;
