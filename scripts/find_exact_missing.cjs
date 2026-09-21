const fs = require("fs");
const path = require("path");

const phrasesFile = fs.readFileSync(path.join(__dirname, "../src/translations/universalPhrases.ts"), "utf8");
const match = phrasesFile.match(/export const UNIVERSAL_PHRASES: Record<string, Partial<Record<Language, string>>> = (\{[\s\S]*\});\n$/);
const existing = eval("(" + match[1] + ")");

const pages = [
  "src/pages/Home.tsx",
  "src/pages/About.tsx",
  "src/pages/Services.tsx",
  "src/pages/Markets.tsx",
  "src/pages/WhyArssa.tsx",
  "src/pages/Legacy.tsx",
  "src/pages/Contact.tsx",
  "src/pages/Enquiry.tsx",
  "src/pages/Terms.tsx",
  "src/pages/Privacy.tsx",
  "src/pages/Cookies.tsx",
  "src/pages/services/BusinessFacilitation.tsx",
  "src/pages/services/MarketGrowth.tsx",
  "src/pages/services/ImportExport.tsx",
  "src/pages/services/Mining.tsx",
  "src/pages/services/MaintenanceCleaning.tsx",
  "src/components/Footer.tsx",
  "src/components/Navbar.tsx",
  "src/components/PageHero.tsx",
  "src/components/CTASection.tsx",
  "src/components/SectionHeading.tsx",
  "src/components/AboutSections.tsx",
  "src/components/ServiceSections.tsx",
  "src/components/BusinessHours.tsx",
  "src/components/ConfirmationModal.tsx",
  "src/components/form/ContactForm.tsx",
  "src/components/form/EnquiryForm.tsx"
];

const missingStrings = new Set();

pages.forEach(p => {
  const fullPath = path.join(__dirname, "..", p);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, "utf8");

  // Extract all tr("...") calls
  const trMatches = content.match(/tr\(\s*["'`](.*?)["'`]\s*\)/g) || [];
  trMatches.forEach(m => {
    const s = m.replace(/^tr\(\s*["'`]/, "").replace(/["'`]\s*\)$/, "").trim();
    if (s && !existing[s] && s !== "ARSSA" && s !== "ARS S.A.R.L.") {
      missingStrings.add(s);
    }
  });

  // Extract strong tags content
  const strongMatches = content.match(/<strong>(.*?)<\/strong>/g) || [];
  strongMatches.forEach(m => {
    const s = m.replace(/<\/?strong>/g, "").replace(/&amp;/g, "&").replace(/:$/, "").trim();
    if (s && !existing[s] && s !== "ARSSA" && s !== "ARS S.A.R.L.") {
      missingStrings.add(s);
    }
  });

  // Extract h1, h2, h3, h4 tags content
  const hMatches = content.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/g) || [];
  hMatches.forEach(m => {
    const s = m.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
    if (s && !existing[s] && s !== "ARSSA" && s !== "ARS S.A.R.L." && !s.includes("{") && s.length > 2) {
      missingStrings.add(s);
    }
  });

  // Extract p tags content if pure text
  const pMatches = content.match(/<p[^>]*>([^<{]+)<\/p>/g) || [];
  pMatches.forEach(m => {
    const s = m.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&ldquo;|&rdquo;/g, "").trim();
    if (s && !existing[s] && s !== "ARSSA" && s !== "ARS S.A.R.L." && s.length > 10) {
      missingStrings.add(s);
    }
  });
});

console.log("Remaining missing strings count:", missingStrings.size);
console.log(Array.from(missingStrings));
