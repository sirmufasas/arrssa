export const SITE = {
  name: "ARSSA",
  fullName: "Agence Rebi Service South Africa",
  legalName: "Agence Rebi Service South Africa (ARSSA)",
  tagline: "Your solution, right at your finger tips",
  url: "https://agencerebiservicesa.co.za",
  phoneDisplay: "+27 672 794 750",
  phoneHref: "tel:+27672794750",
  whatsappHref: "https://wa.me/27672794750",
  email: "info@agencerebiservicesa.co.za",
  emailHref: "mailto:info@agencerebiservicesa.co.za",
  copyright: "© 2026 Agence Rebi Service South Africa. All rights reserved.",
};

export interface ServiceDef {
  slug: string;
  path: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  accent: string;
  icon: "briefcase" | "trend" | "globe" | "wrench";
  preview: string[];
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "business-facilitation",
    path: "/services/business-facilitation",
    number: "01",
    title: "Business Facilitation",
    shortTitle: "Business Facilitation",
    subtitle: "Facilitation, Compliance, Market Entry & Administrative Support",
    description:
      "Facilitation, compliance, market entry and administrative support for businesses establishing operations in the DRC.",
    accent: "#1a3160",
    icon: "briefcase",
    preview: ["Market entry", "Compliance", "Registration", "Workforce"],
  },
  {
    slug: "market-growth-distribution",
    path: "/services/market-growth-distribution",
    number: "02",
    title: "Market Growth & Distribution",
    shortTitle: "Market Growth",
    subtitle: "Marketing, Promotions, Product Visibility & Field Distribution",
    description:
      "Marketing, promotions, product visibility and field distribution that convert brand presence into measurable growth.",
    accent: "#d40000",
    icon: "trend",
    preview: ["Marketing", "Promotions", "Distribution", "B2B activation"],
  },
  {
    slug: "import-export",
    path: "/services/import-export",
    number: "03",
    title: "Import & Export",
    shortTitle: "Import & Export",
    subtitle: "Trade Facilitation, Compliance, Logistics & Cross-Border Movement",
    description:
      "Trade facilitation, compliance, logistics and cross-border movement for goods across the South Africa–DRC corridor.",
    accent: "#b89200",
    icon: "globe",
    preview: ["Customs", "Logistics", "Trade advisory", "Goods supply"],
  },
  {
    slug: "mining",
    path: "/services/mining",
    number: "04",
    title: "Mining & Resources",
    shortTitle: "Mining",
    subtitle: "Mining Support, Sourcing & Cross-Border Commercial Coordination",
    description: "Practical support for mining-related sourcing, partnerships, supplies and commercial coordination across the South Africa–DRC corridor.",
    accent: "#8b5e34",
    icon: "globe",
    preview: ["Mining support", "Sourcing", "Partnerships", "Supply coordination"],
  },
  {
    slug: "maintenance-cleaning",
    path: "/services/maintenance-cleaning",
    number: "05",
    title: "Maintenance, Cleaning & Compliance",
    shortTitle: "Maintenance & Cleaning",
    subtitle: "Specialised Operational Support for Regulated Industries",
    description:
      "Specialised maintenance, cleaning, disinfection and compliance support for regulated operational environments.",
    accent: "#009639",
    icon: "wrench",
    preview: ["Maintenance", "Cleaning", "Disinfection", "Compliance"],
  },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", dropdown: true },
  { label: "Markets", path: "/markets" },
  { label: "Why ARSSA", path: "/why-arssa" },
  { label: "Legacy", path: "/legacy" },
  { label: "Enquiry", path: "/enquiry" },
  { label: "Contact", path: "/contact" },
];

export const INDUSTRIES = [
  "Pharmaceutical",
  "Medical",
  "Cosmetic",
  "Agri-food",
  "Agricultural",
  "Corporate Supply",
  "Other",
];

export const ENQUIRY_SERVICES = [
  "Business Facilitation",
  "Market Growth & Distribution",
  "Import & Export",
  "Maintenance, Cleaning & Compliance",
  "Mining & Resources",
  "General Business Enquiry",
  "Other",
];

export const HEARING_SOURCES = [
  "Referral / Partner introduction",
  "Search engine",
  "Social media",
  "Industry event",
  "Web search (other)",
  "Other",
];
