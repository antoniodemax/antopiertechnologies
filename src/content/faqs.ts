import type { Faq } from "./types";

export const faqs: Faq[] = [
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "It depends on scope, complexity, the integrations involved and how quickly feedback comes back. After discovery you receive a written plan with milestones and an estimated timeline, and we tell you early if anything changes it.",
    showOn: ["home", "services", "contact"],
    status: "draft",
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer:
      "Each project is scoped and quoted on its own requirements. We do not publish fixed packages, because two projects with the same name can differ a lot in effort. You receive a written proposal with scope, cost and payment milestones before any work begins.",
    showOn: ["home", "services", "contact"],
    status: "draft",
  },
  {
    id: "maintenance",
    question: "Do you provide maintenance?",
    answer:
      "Yes. Ongoing maintenance and support are available as a separate monthly plan, agreed with you in writing. A plan can cover updates, monitoring, security patches and small improvements.",
    showOn: ["services"],
    status: "draft",
  },
  {
    id: "ai",
    question: "Do you build AI solutions?",
    answer:
      "Yes, in two ways. AI consulting helps you decide where AI is worth using, with a clear view of cost and risk. AI integration builds those features into your systems, for example assistants that answer questions from your own documents, drafting and summarization, or automated steps with a person reviewing the result.",
    showOn: ["home", "services"],
    status: "draft",
  },
  {
    id: "security",
    question: "How do you approach security?",
    answer:
      "Security is part of the architecture from the start: authentication and access control, input validation, encrypted connections, careful handling of secrets and regular dependency updates. No system can be guaranteed completely secure, so we also plan monitoring and how issues are handled if they occur.",
    showOn: ["services"],
    status: "draft",
  },
  {
    id: "workflow",
    question: "What does the project workflow look like?",
    answer:
      "Discovery, strategy, UI/UX design, development, testing and quality assurance, deployment, then maintenance and continuous improvement. You review and approve the work at each milestone.",
    showOn: ["home", "contact"],
    status: "draft",
  },
  {
    id: "clients",
    question: "Do you work with startups and larger organizations?",
    answer:
      "Yes. Startups often need a first version built quickly on a sound footing. Larger organizations usually need integration with existing systems, access control and documentation. We scope each engagement to fit the organization in front of us.",
    showOn: ["home", "contact"],
    status: "draft",
  },
];

export const faqsFor = (page: Faq["showOn"][number]) => faqs.filter((f) => f.showOn.includes(page));
