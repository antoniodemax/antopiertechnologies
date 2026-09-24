import {
  Banknote,
  Building,
  Building2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Hotel,
  Landmark,
  Rocket,
  Scale,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react";
import type { Industry, OrganisationType } from "./types";

export const industries = [
  { slug: "education", name: "Education", icon: GraduationCap, group: "sector", status: "final" },
  { slug: "healthcare", name: "Healthcare", icon: HeartPulse, group: "sector", status: "final" },
  { slug: "finance", name: "Finance", icon: Banknote, group: "sector", status: "final" },
  { slug: "retail", name: "Retail", icon: ShoppingCart, group: "sector", status: "final" },
  { slug: "hospitality", name: "Hospitality", icon: Hotel, group: "sector", status: "final" },
  { slug: "real-estate", name: "Real Estate", icon: Building, group: "sector", status: "final" },
  { slug: "logistics", name: "Logistics", icon: Truck, group: "sector", status: "final" },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Scale,
    group: "sector",
    status: "final",
  },
  {
    slug: "government",
    name: "Government",
    icon: Landmark,
    group: "organisation",
    status: "final",
  },
  { slug: "ngos", name: "NGOs", icon: HandHeart, group: "organisation", status: "final" },
  { slug: "startups", name: "Startups", icon: Rocket, group: "organisation", status: "final" },
  { slug: "smes", name: "SMEs", icon: Store, group: "organisation", status: "final" },
  {
    slug: "corporations",
    name: "Corporations",
    icon: Building2,
    group: "organisation",
    status: "final",
  },
] as const satisfies readonly Industry[];

export const organisationTypes: { value: OrganisationType; label: string }[] = [
  { value: "startup", label: "Startup" },
  { value: "sme", label: "SME" },
  { value: "corporation", label: "Corporation" },
  { value: "ngo", label: "NGO" },
  { value: "government", label: "Government" },
  { value: "other", label: "Other" },
];
