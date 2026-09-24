import { z } from "zod";

export const organisationTypeValues = [
  "startup",
  "sme",
  "corporation",
  "ngo",
  "government",
  "other",
] as const;
export const timelineValues = [
  "asap",
  "1-3-months",
  "3-6-months",
  "6-plus-months",
  "not-sure",
] as const;

const optionalText = (max: number) =>
  z.string().trim().max(max, `Keep this under ${max} characters.`).optional().or(z.literal(""));

export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Keep your name under 100 characters."),
  email: z.email("Enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about the project (at least 10 characters).")
    .max(2000, "Keep this under 2,000 characters."),
  phone: z
    .string()
    .trim()
    .regex(
      /^\+?[0-9\s-]{7,20}$/,
      "Enter a phone number with digits, spaces or hyphens, including the country code.",
    )
    .optional()
    .or(z.literal("")),
  organisation: optionalText(120),
  organisationType: z.enum(organisationTypeValues).optional().or(z.literal("")),
  services: z.array(z.string()).max(10).optional(),
  sector: optionalText(60),
  timeline: z.enum(timelineValues).optional().or(z.literal("")),
  consent: z.literal(true, { error: "Please confirm you agree so we can reply to your request." }),
  website: z.string().max(0).optional(),
  turnstileToken: z.string().optional(),
});

export type ConsultationInput = z.input<typeof consultationSchema>;
export type ConsultationData = z.output<typeof consultationSchema>;

export const timelineOptions: { value: (typeof timelineValues)[number]; label: string }[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "3-6-months", label: "In 3–6 months" },
  { value: "6-plus-months", label: "In 6 months or more" },
  { value: "not-sure", label: "Not sure yet" },
];
