import { BrainCircuit, Handshake, Layers, ShieldCheck, Target, TrendingUp } from "lucide-react";
import type { Pillar } from "./types";

// Pillar titles are the design brief's (§12).
export const pillars: Pillar[] = [
  {
    title: "Enterprise Architecture",
    description:
      "Systems designed for scale, maintainability and future growth, and documented so your team can own them.",
    icon: Layers,
  },
  {
    title: "Scalable Solutions",
    description:
      "Technology that grows with your organization: more users, more data and new features without starting over.",
    icon: TrendingUp,
  },
  {
    title: "AI-Powered Innovation",
    description:
      "AI applied to specific tasks where it saves time or improves decisions, with people kept in control.",
    icon: BrainCircuit,
  },
  {
    title: "Security First",
    description:
      "Security is considered at every stage: architecture, development, deployment and maintenance.",
    icon: ShieldCheck,
  },
  {
    title: "Business-Centric Engineering",
    description:
      "Every technical decision is measured against the organizational problem it is meant to solve.",
    icon: Target,
  },
  {
    title: "Long-Term Technical Partnership",
    description: "We stay involved after launch to support, monitor and improve what we build.",
    icon: Handshake,
  },
];
