import { AppWindow, BrainCircuit, Compass, Globe, ShieldCheck, ShoppingBag } from "lucide-react";
import type { Service } from "./types";

export const services = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    summary: "Fast, accessible websites that explain what you do and turn visitors into inquiries.",
    description:
      "We design and build websites around your audience and goals, with performance, accessibility and search visibility built in. Content is structured so your team can update it without calling a developer.",
    deliverables: [
      "Information architecture and UX design",
      "Responsive, accessible front end",
      "Technical SEO and analytics setup",
      "Content structure your team can edit",
    ],
    icon: Globe,
    status: "draft",
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    summary: "Software built around the way your organization actually works.",
    description:
      "When off-the-shelf tools force your team into workarounds, we build applications around your workflows: portals, internal tools, dashboards and multi-user platforms with role-based access.",
    deliverables: [
      "Workflow and requirements mapping",
      "Web application design and build",
      "Role-based access and audit trails",
      "Integrations with the tools you already use",
    ],
    icon: AppWindow,
    relatedSolutionAreas: ["business-operations", "education", "healthcare"],
    status: "draft",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    summary: "Online stores that are easy to buy from and easy to run.",
    description:
      "We build commerce platforms that connect the storefront to everything behind it: product management, stock, orders, payments and customer communication.",
    deliverables: [
      "Storefront design focused on checkout",
      "Product, stock and order management",
      "Payment integration, including mobile money",
      "Sales and customer reporting",
    ],
    icon: ShoppingBag,
    relatedSolutionAreas: ["retail", "hospitality"],
    status: "draft",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    summary: "Find the parts of your operations where AI is worth the investment.",
    description:
      "We review your processes and data to find tasks where AI can save time or improve decisions. For each one we estimate the effort and flag the risks around accuracy, privacy and cost before anything is built.",
    deliverables: [
      "Process and data review",
      "Prioritized list of AI use cases",
      "Feasibility, cost and risk assessment",
      "Pilot scope for the strongest case",
    ],
    icon: Compass,
    status: "draft",
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    summary: "AI features built into the systems and workflows your team already uses.",
    description:
      "We add AI where it does a specific job: drafting documents, summarizing records, answering questions from your own data or routing requests. A person stays in control of the decisions that matter.",
    deliverables: [
      "Assistants grounded in your own documents and data",
      "Document drafting and summarization",
      "Workflow automation with human review",
      "Usage, cost and quality monitoring",
    ],
    icon: BrainCircuit,
    relatedSolutionAreas: ["education", "business-operations"],
    status: "draft",
  },
  {
    slug: "security-cloud",
    title: "Security & Cloud Solutions",
    summary: "Secure applications and reliable infrastructure, deployed and monitored.",
    description:
      "We secure applications and set up the infrastructure they run on, from authentication and API security to cloud deployment, performance tuning, monitoring and maintenance.",
    deliverables: [
      "Authentication and authorization",
      "API security review and hardening",
      "Cloud deployment and infrastructure architecture",
      "Monitoring, backups and maintenance",
    ],
    icon: ShieldCheck,
    relatedSolutionAreas: ["government-ngos", "healthcare"],
    status: "draft",
  },
] as const satisfies readonly Service[];
