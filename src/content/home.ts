export const hero = {
  eyebrow: "Software consultancy · Nairobi, Kenya",
  // Headline and supporting copy are the design brief's (§8), kept verbatim until rewrites are approved.
  heading: "Building Intelligent Software for Modern Organizations",
  intro:
    "We design, develop, and scale enterprise software, AI-powered applications, secure web platforms, and digital solutions that help organizations operate smarter, grow faster, and innovate with confidence.",
  audiences: ["Startups", "SMEs", "Corporations", "NGOs", "Government"],
  mockupNote: "Illustrative interface with sample data",
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
