import type { ProcessStep } from "./types";

// Stage names and intent from the design brief (§13).
export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Discovery",
    description:
      "Understand the organization, its users, the business problem, goals and constraints.",
  },
  {
    order: 2,
    title: "Strategy",
    description: "Define the technical and product direction, scope and milestones.",
  },
  {
    order: 3,
    title: "UI/UX Design",
    description:
      "Translate requirements into intuitive, accessible experiences you can review before build.",
  },
  {
    order: 4,
    title: "Development",
    description: "Build the solution with modern technologies suited to the problem and your team.",
  },
  {
    order: 5,
    title: "Testing & QA",
    description: "Validate functionality, security, accessibility, performance and reliability.",
  },
  {
    order: 6,
    title: "Deployment",
    description: "Launch on production infrastructure that fits your scale and budget.",
  },
  {
    order: 7,
    title: "Maintenance",
    description: "Ongoing support, monitoring and improvement, where agreed.",
  },
];
