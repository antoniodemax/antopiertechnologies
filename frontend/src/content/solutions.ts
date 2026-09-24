import { BedDouble, Briefcase, GraduationCap, HeartPulse, Landmark, Store } from "lucide-react";
import type { SolutionArea } from "./types";

export const solutionAreas = [
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    summary: "Systems that connect school administration, teachers, students and parents.",
    problems: [
      "Administration split across spreadsheets, paper and separate tools",
      "Parents and students struggle to get timely information",
      "Fees, attendance and reporting handled manually",
    ],
    solutions: [
      {
        name: "School Management Systems",
        summary: "Admissions, fees, attendance and reports in one place",
      },
      { name: "Learning Platforms", summary: "Course content, assignments and progress tracking" },
      { name: "Student Portals", summary: "Results, timetables and notices on any device" },
    ],
    value: "Staff spend less time on paperwork, and everyone works from the same information.",
    mockup: "school-fees",
    status: "draft",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    summary: "Tools that keep clinics running smoothly and patients informed.",
    problems: [
      "Appointments managed by phone calls and paper diaries",
      "Patient records hard to find when they are needed",
      "Long waits caused by manual front-desk processes",
    ],
    solutions: [
      {
        name: "Hospital Management Systems",
        summary: "Patient records, billing and departments connected",
      },
      {
        name: "Clinic Management Platforms",
        summary: "Scheduling, records and invoicing for smaller practices",
      },
      {
        name: "Appointment Systems",
        summary: "Online booking with reminders to reduce missed visits",
      },
    ],
    value: "Staff find information faster, and patients spend less time waiting.",
    mockup: "clinic-schedule",
    status: "draft",
  },
  {
    slug: "retail",
    title: "Retail",
    icon: Store,
    summary: "Point of sale, stock and online sales working from the same numbers.",
    problems: [
      "No live view of sales across tills or branches",
      "Stock counts that drift from what is on the shelf",
      "Customer credit and payments tracked in notebooks",
    ],
    solutions: [
      { name: "POS Systems", summary: "Fast checkout across cash, card and mobile money" },
      {
        name: "Inventory Management",
        summary: "Stock levels, reorder alerts and supplier records",
      },
      { name: "E-commerce Platforms", summary: "An online store connected to the same stock" },
    ],
    value: "Owners see sales and stock clearly and make decisions on current numbers.",
    mockup: "retail-stock",
    status: "draft",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    icon: BedDouble,
    summary: "Booking and operations systems for hotels, restaurants and venues.",
    problems: [
      "Bookings arrive by call, message and walk-in with no single record",
      "Double bookings and unclear room or table availability",
      "Orders and billing handled on paper",
    ],
    solutions: [
      { name: "Hotel Management Systems", summary: "Rooms, reservations, check-in and billing" },
      { name: "Restaurant Systems", summary: "Orders, kitchen tickets and table management" },
      { name: "Online Booking Platforms", summary: "Direct bookings from your own website" },
    ],
    value: "One accurate view of availability, and more bookings taken directly.",
    mockup: "hotel-rooms",
    status: "draft",
  },
  {
    slug: "business-operations",
    title: "Business Operations",
    icon: Briefcase,
    summary: "Internal systems that give teams one place to work and one set of numbers.",
    problems: [
      "Customer, sales and HR data spread across disconnected tools",
      "Monthly reports assembled by hand",
      "Approvals that stall in email threads",
    ],
    solutions: [
      { name: "CRM Platforms", summary: "Leads, customers and follow-ups in one pipeline" },
      { name: "ERP Systems", summary: "Finance, inventory and operations connected" },
      { name: "HR Systems", summary: "Staff records, leave and approvals" },
      { name: "Internal Dashboards", summary: "Live reporting from the systems you already run" },
    ],
    value: "Managers get current figures without chasing them, and routine approvals move faster.",
    mockup: "ops-pipeline",
    status: "draft",
  },
  {
    slug: "government-ngos",
    title: "Government & NGOs",
    icon: Landmark,
    summary: "Digital services and data systems for public institutions and non-profits.",
    problems: [
      "Services that still require an in-person visit or a paper form",
      "Program data collected in formats that are hard to combine",
      "Reports for donors or oversight bodies compiled by hand",
    ],
    solutions: [
      {
        name: "Digital Service Platforms",
        summary: "Applications, payments and status tracking online",
      },
      {
        name: "Data Management Systems",
        summary: "Structured collection and reporting of program data",
      },
      {
        name: "Public Service Applications",
        summary: "Accessible tools for citizens and beneficiaries",
      },
    ],
    value: "Services reach more people, and reports draw on data that is already collected.",
    mockup: "service-tracker",
    status: "draft",
  },
] as const satisfies readonly SolutionArea[];
