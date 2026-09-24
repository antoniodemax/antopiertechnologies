import type { Founder } from "./types";

const PORTFOLIO_ABOUT = "antonypeter.vercel.app, About section, read 2026-09-24";
const PORTFOLIO_PROJECTS = "antonypeter.vercel.app, Projects section, read 2026-09-24";
const PORTFOLIO_CONTACT = "antonypeter.vercel.app, Contact section, read 2026-09-24";

export const founder: Founder = {
  name: "Antony Peter",
  role: {
    text: "Founder · Full-Stack Software Engineer & Cybersecurity Analyst",
    source:
      "antonypeter.vercel.app page title and meta description; founder role from design brief §16",
  },
  bio: [
    {
      text: "Antony works across the full development lifecycle, from interface design and application architecture to backend systems, databases and production deployment.",
      source: PORTFOLIO_ABOUT,
    },
    {
      text: "Antony's cybersecurity focus covers threat analysis, system safeguards, network defense and security resource management. That background is why security is part of every Antopier project from the architecture stage onward.",
      source: PORTFOLIO_ABOUT,
    },
  ],
  focus: [
    { text: "Software engineering", source: PORTFOLIO_ABOUT },
    { text: "Web application development", source: PORTFOLIO_ABOUT },
    { text: "Cybersecurity", source: PORTFOLIO_ABOUT },
    { text: "AI integrations", source: "antonypeter.vercel.app meta description" },
  ],
  education: [
    { text: "Software Engineering", institution: "Moringa School", source: PORTFOLIO_ABOUT },
    { text: "Cyber Security", institution: "Cisco Networking Academy", source: PORTFOLIO_ABOUT },
    {
      text: "AI Prompt Engineering",
      institution: "Cisco Networking Academy",
      source: PORTFOLIO_ABOUT,
    },
  ],
  buildRecord: [
    {
      project: "Elimu Mtaani",
      result: "1st place, Claude Hackathon",
      text: "Led development of an AI-assisted lesson-planning platform for Kenyan CBC classrooms. One curriculum source becomes a term timetable, narrated lessons, quizzes and an AI tutor, with no learner data stored.",
      source: PORTFOLIO_PROJECTS,
    },
    {
      project: "Kada Ya Moko",
      result: "4th overall and 2nd in the Everyday Track, Claude Hackathon in Nairobi",
      text: "Built with a team of five: an AI coworker that holds shared context across a developer's tools, triaging GitHub issues and posting summaries to Slack.",
      source: PORTFOLIO_PROJECTS,
    },
  ],
  photo: {
    src: "/brand/antony-peter.png",
    webp: "/brand/antony-peter.webp",
    alt: "Antony Peter, founder of Antopier Technologies, in a dark suit and red tie",
    width: 338,
    height: 693,
    source: "AntonyPeter.png supplied by Antony Peter on 2026-09-24",
  },
  links: [
    {
      network: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/antony-peter-96318a338",
      source: PORTFOLIO_CONTACT,
      status: "final",
    },
    {
      network: "github",
      label: "GitHub",
      url: "https://github.com/antoniodemax",
      source: PORTFOLIO_CONTACT,
      status: "final",
    },
  ],
  status: "draft",
};
