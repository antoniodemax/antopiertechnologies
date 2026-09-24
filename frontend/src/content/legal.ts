import type { LegalDocument } from "./types";

// Reproduced verbatim from "ANTOPIER LEGAL DOCUMENT.pdf" (Legal Documents v1.0, July 2026),
// supplied by Antony Peter on 2026-09-24. Do not edit wording here; change the source document.
const SOURCE = "ANTOPIER LEGAL DOCUMENT.pdf, Legal Documents v1.0, July 2026";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "July 2026",
  source: SOURCE,
  intro: [
    "At Antopier Technologies, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information obtained through our website, consultation requests, project inquiries, and software development services.",
    "By using our website or engaging our services, you agree to the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: ["We may collect the following information:"],
      list: [
        "Full Name",
        "Email Address",
        "Phone Number",
        "Company or Organization Name",
        "Job Title (where applicable)",
        "Project Requirements",
        "Budget Information (if voluntarily provided)",
        "Documents or files submitted during consultations",
        "Website usage analytics",
        "Device and browser information",
        "IP address",
        "Cookies and similar technologies",
      ],
      after: ["We only collect information necessary to provide our services effectively."],
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: ["Your information may be used to:"],
      list: [
        "Respond to project inquiries",
        "Schedule consultations",
        "Prepare quotations and proposals",
        "Deliver software development services",
        "Improve our website and services",
        "Communicate project updates",
        "Process invoices and payments",
        "Meet legal and regulatory obligations",
      ],
      after: ["We will never sell or rent your personal information to third parties."],
    },
    {
      heading: "3. Cookies and Analytics",
      paragraphs: ["Our website may use cookies and analytics tools to:"],
      list: [
        "Understand visitor behavior",
        "Improve website performance",
        "Enhance user experience",
        "Monitor website security",
      ],
      after: [
        "You may disable cookies through your browser settings, although some website functionality may be affected.",
      ],
    },
    {
      heading: "4. Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.",
        "While we strive to maintain the highest security standards, no online transmission or storage system can be guaranteed to be completely secure.",
      ],
    },
    {
      heading: "5. Third-Party Services",
      paragraphs: [
        "Our services may integrate with trusted third-party providers including, but not limited to:",
      ],
      list: [
        "Payment gateways",
        "Cloud hosting providers",
        "Email service providers",
        "Analytics platforms",
        "AI service providers",
        "Domain registrars",
      ],
      after: ["These providers operate under their own privacy policies."],
    },
    {
      heading: "6. Data Retention",
      paragraphs: ["We retain client information only for as long as necessary to:"],
      list: [
        "Complete projects",
        "Meet legal obligations",
        "Resolve disputes",
        "Maintain business records",
      ],
      after: ["After this period, information may be securely deleted."],
    },
    {
      heading: "7. Your Rights",
      paragraphs: ["Depending on applicable law, you may request to:"],
      list: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your data",
        "Restrict certain processing activities",
        "Withdraw consent where applicable",
      ],
      after: ["Requests may be submitted using the contact information below."],
    },
    {
      heading: "8. International Clients",
      paragraphs: [
        "Antopier Technologies works with clients both within Kenya and internationally.",
        "By engaging our services, you acknowledge that information may be processed where necessary to provide contracted services while maintaining appropriate security measures.",
      ],
    },
    {
      heading: "9. Changes to this Policy",
      paragraphs: [
        "This Privacy Policy may be updated periodically.",
        "Any changes become effective immediately upon publication on our website.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: [
        "For privacy-related questions, please contact:",
        "Antopier Technologies",
        "Website: antonypeter.vercel.app",
        "Email: antonypeter.dev@gmail.com",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Terms of Use",
  lastUpdated: "July 2026",
  source: SOURCE,
  intro: [
    "These Terms of Use govern your access to and use of the Antopier Technologies website.",
    "By accessing this website, you agree to these Terms.",
  ],
  sections: [
    {
      heading: "1. Website Purpose",
      paragraphs: [
        "This website provides information about Antopier Technologies, our services, expertise, and completed work.",
        "Information presented on this website does not constitute legal, financial, or business advice.",
      ],
    },
    {
      heading: "2. Intellectual Property",
      paragraphs: ["Unless otherwise stated, all content on this website, including:"],
      list: [
        "Logos",
        "Branding",
        "Website design",
        "Graphics",
        "Software demonstrations",
        "Case studies",
        "Articles",
        "Source code examples",
        "Documentation",
      ],
      after: [
        "is the intellectual property of Antopier Technologies.",
        "Unauthorized copying, reproduction, or redistribution is prohibited without prior written permission.",
      ],
    },
    {
      heading: "3. Acceptable Use",
      paragraphs: ["You agree not to:"],
      list: [
        "Attempt unauthorized access",
        "Disrupt website functionality",
        "Introduce malicious software",
        "Misrepresent your identity",
        "Copy or reuse content without permission",
        "Use this website for unlawful purposes",
      ],
    },
    {
      heading: "4. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites.",
        "Antopier Technologies is not responsible for the content, privacy practices, or availability of external websites.",
      ],
    },
    {
      heading: "5. Service Availability",
      paragraphs: [
        "While we strive to maintain uninterrupted website availability, we do not guarantee that the website will always remain available or free from technical interruptions.",
      ],
    },
    {
      heading: "6. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Antopier Technologies shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.",
      ],
    },
    {
      heading: "7. Governing Law",
      paragraphs: ["These Terms shall be governed by the laws of the Republic of Kenya."],
    },
  ],
};
