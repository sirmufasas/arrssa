const fs = require("fs");
const path = require("path");

// 1. Update src/data/site.ts
const siteTsPath = path.join(__dirname, "../src/data/site.ts");
let siteTs = fs.readFileSync(siteTsPath, "utf8");

siteTs = siteTs.replace(
  'description:\n      "Trade facilitation, compliance, logistics and cross-border movement for goods across the South Africa (SADAC)–DRC corridor."',
  'description:\n      "Trade facilitation, compliance, logistics and cross-border movement for goods across the DRC–Southern Africa trade corridor."'
);

siteTs = siteTs.replace(
  'description: "Practical support for mining-related sourcing, partnerships, supplies and commercial coordination across the South Africa (SADAC)–DRC corridor.",\n    accent: "#8b5e34",\n    icon: "globe",\n    preview: ["Mining support", "Sourcing", "Partnerships", "Supply coordination"],',
  'description: "Practical support for mining-related sourcing, workforce placement, partnerships, supplies and commercial coordination across the DRC–Southern Africa trade corridor.",\n    accent: "#8b5e34",\n    icon: "globe",\n    preview: ["Mining Support", "Sourcing", "Workforce Placement", "Partnerships", "Supply Coordination"],'
);

fs.writeFileSync(siteTsPath, siteTs, "utf8");
console.log("Updated src/data/site.ts");

// 2. Update src/pages/services/Mining.tsx
const miningTsxPath = path.join(__dirname, "../src/pages/services/Mining.tsx");
let miningTsx = fs.readFileSync(miningTsxPath, "utf8");

const newMiningContent = `import { Pickaxe, Handshake, Truck, ClipboardCheck, Users } from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import { ServiceBlocks, type ServiceBlock } from "../../components/ServiceSections";
import CTASection from "../../components/CTASection";
import { useTranslate } from "../../context/LanguageContext";

const BLOCKS: ServiceBlock[] = [
  {
    icon: Pickaxe,
    title: "Mining & Resources Support",
    items: ["Mining opportunity coordination", "Supplier and partner introductions", "Commercial and field support"],
  },
  {
    icon: Users,
    title: "Mining Workforce Placement",
    items: [
      "Technical, operational and professional recruitment",
      "Skilled workforce sourcing and deployment",
      "Contractor and service provider staffing",
    ],
  },
  {
    icon: Handshake,
    title: "Partnerships & Sourcing",
    items: ["DRC–Southern Africa business connections", "Equipment and input sourcing", "Stakeholder coordination"],
  },
  {
    icon: Truck,
    title: "Supply Coordination",
    items: ["Cross-border supply support", "Logistics coordination", "On-the-ground follow-through"],
  },
  {
    icon: ClipboardCheck,
    title: "Practical Execution",
    items: ["Structured introductions", "Compliance-aware coordination", "Clear reporting and next steps"],
  },
];

export default function Mining() {
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Mining & Resources | ARSSA"
        description="ARSSA supports mining-related sourcing, workforce placement, partnerships, supplies and commercial coordination across the DRC–Southern Africa trade corridor."
        path="/services/mining"
      />
      <PageHero
        eyebrow="Division 04 — Mining & Resources"
        title="Mining & Resources"
        subtitle="Practical support for mining-related sourcing, workforce placement, partnerships, supplies and commercial coordination across the DRC–Southern Africa trade corridor."
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Mining & Resources" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 48 }}>
            <div>
              <p className="eyebrow eyebrow--navy">{tr("Focused support")}</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                {tr("Connecting opportunity with dependable execution")}
              </h2>
              <p className="lead">
                {tr("ARSSA provides focused commercial and operational support for mining-related activity across the DRC–Southern Africa trade corridor.")}
              </p>
              <p style={{ color: "var(--ink-soft)", marginTop: 18 }}>
                {tr("We keep this support practical: helping identify the right partners, coordinate supply and introductions, and move opportunities toward clear next steps.")}
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: "36px 40px",
              marginBottom: 48,
              borderLeft: "4px solid #8b5e34",
              background: "var(--card-bg)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(139, 94, 52, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Users size={22} color="#8b5e34" aria-hidden="true" />
              </div>
              <h3 style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>{tr("Mining Workforce Placement")}</h3>
            </div>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65, margin: 0 }}>
              {tr(
                "Helping bridge workforce and skills gaps in the mining sector through targeted recruitment and placement of qualified technical, operational and professional personnel for mining companies, contractors and service providers."
              )}
            </p>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#8b5e34" />
        </div>
      </section>
      <CTASection
        headline="Discuss a mining-related opportunity"
        text="Tell us what you are looking to source, coordinate or develop and we will help map the next step."
      />
    </>
  );
}
`;
fs.writeFileSync(miningTsxPath, newMiningContent, "utf8");
console.log("Updated src/pages/services/Mining.tsx");

// 3. Update src/pages/About.tsx
const aboutTsxPath = path.join(__dirname, "../src/pages/About.tsx");
let aboutTsx = fs.readFileSync(aboutTsxPath, "utf8");

aboutTsx = aboutTsx.replace(
  'title="About ARSSA | South Africa (SADAC)–DRC Business Facilitation"',
  'title="About ARSSA | Cross-Border Business Facilitation DRC & Southern Africa"'
);
aboutTsx = aboutTsx.replace(
  'description="Learn about ARSSA — the South African (SADAC) extension of ARS S.A.R.L. Our approach, vision, mission and core values for cross-border business between South Africa (SADAC) and the DRC."',
  'description="Learn about ARSSA — the Southern African extension of ARS S.A.R.L. Headquartered in the DRC with an established South African presence, connecting businesses across Southern Africa."'
);
aboutTsx = aboutTsx.replace(
  'subtitle="Agence Rebi Service South Africa — the South African (SADAC) extension of ARS S.A.R.L. in the DRC, built to simplify and strengthen cross-border business."',
  'subtitle="Headquartered in the Democratic Republic of Congo with an established South African presence, ARSSA connects businesses, suppliers and opportunities between the DRC and Southern Africa."'
);
aboutTsx = aboutTsx.replace(
  'title={tr("The South African (SADAC) extension of ARS S.A.R.L.")}',
  'title={tr("The Southern African extension of ARS S.A.R.L.")}'
);
aboutTsx = aboutTsx.replace(
  'description={tr("ARSSA is the South African (SADAC) extension of ARS S.A.R.L. in the Democratic Republic of Congo. We exist to give South African (SADAC) businesses a structured, experienced, and accountable partner for operating across the corridor.")}',
  'description={tr("ARSSA is the Southern African extension of ARS S.A.R.L., headquartered in the Democratic Republic of Congo, with an established operational presence in South Africa. We connect businesses across Southern Africa with opportunities in the DRC, providing a structured and accountable partner for navigating cross-border operations and market entry.")}'
);
aboutTsx = aboutTsx.replace(
  '&ldquo;{tr("To be the leading partner that simplifies and strengthens cross-border business between South Africa (SADAC) and the DRC, empowering pharmaceutical, cosmetic, and agri-food companies to expand with confidence.")}&rdquo;',
  '&ldquo;{tr("To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, and agri-food companies to expand with confidence.")}&rdquo;'
);
aboutTsx = aboutTsx.replace(
  '&ldquo;{tr("To provide structured, ethical, practical, and results-driven solutions helping SA companies establish, operate, and grow in the DRC through compliant facilitation, strategic market development, and integrated trade support.")}&rdquo;',
  '&ldquo;{tr("To provide structured, ethical, practical, and results-driven solutions helping businesses establish, operate, and grow in the DRC through compliant facilitation, strategic market development, and integrated trade support across Southern Africa.")}&rdquo;'
);

fs.writeFileSync(aboutTsxPath, aboutTsx, "utf8");
console.log("Updated src/pages/About.tsx");

// 4. Update src/pages/Home.tsx
const homeTsxPath = path.join(__dirname, "../src/pages/Home.tsx");
let homeTsx = fs.readFileSync(homeTsxPath, "utf8");

homeTsx = homeTsx.replace(
  'title="ARSSA | Business Facilitation & Trade Services South Africa (SADAC)–DRC"',
  'title="ARSSA | Business Facilitation & Trade Services DRC–Southern Africa"'
);
homeTsx = homeTsx.replace(
  'suffix="SADAC–DRC"\n                  label={t.operatingPresence}\n                  variant="green"\n                  displayText="SADAC–DRC"',
  'suffix="DRC–Southern Africa"\n                  label={t.operatingPresence}\n                  variant="green"\n                  displayText="DRC–Southern Africa"'
);
homeTsx = homeTsx.replace(
  '<span className="showcase-media__tag"><strong translate="no">ARS S.A.R.L.</strong> {tr("South African (SADAC) Extension")}</span>',
  '<span className="showcase-media__tag"><strong translate="no">ARS S.A.R.L.</strong> {tr("Southern African Extension")}</span>'
);
homeTsx = homeTsx.replace(
  'description="ARSSA is the South African (SADAC) extension of ARS S.A.R.L. in the DRC — one partner for marketing, facilitation, compliance, distribution and trade."',
  'description="Headquartered in the Democratic Republic of Congo with an established South African presence, ARSSA connects businesses, suppliers and opportunities between the DRC and Southern Africa, with South Africa serving as a key regional sourcing and commercial hub."'
);

fs.writeFileSync(homeTsxPath, homeTsx, "utf8");
console.log("Updated src/pages/Home.tsx");

// 5. Update src/pages/Services.tsx
const servicesTsxPath = path.join(__dirname, "../src/pages/Services.tsx");
let servicesTsx = fs.readFileSync(servicesTsxPath, "utf8");

servicesTsx = servicesTsx.replace(
  'description="Explore ARSSA\'s five core divisions: Business Facilitation, Market Growth & Distribution, Import & Export, Mining & Resources, and Maintenance, Cleaning & Compliance — one integrated partner for the South Africa (SADAC)–DRC corridor."',
  'description="Explore ARSSA\'s five core divisions: Business Facilitation, Market Growth & Distribution, Import & Export, Mining & Resources, and Maintenance, Cleaning & Compliance — one integrated partner for the DRC–Southern Africa trade corridor."'
);

fs.writeFileSync(servicesTsxPath, servicesTsx, "utf8");
console.log("Updated src/pages/Services.tsx");

// 6. Update src/pages/Markets.tsx
const marketsTsxPath = path.join(__dirname, "../src/pages/Markets.tsx");
let marketsTsx = fs.readFileSync(marketsTsxPath, "utf8");

marketsTsx = marketsTsx.replace(
  'title: "South African (SADAC) Companies",\n    text: "Businesses seeking to expand into the DRC — with structured support from initial market assessment through to day-to-day operations."',
  'title: "Southern African & Regional Companies",\n    text: "Businesses across South Africa and the wider Southern African region seeking to expand into the DRC — with structured support from initial market assessment through to day-to-day operations."'
);

marketsTsx = marketsTsx.replace(
  'description="Who we serve: South African (SADAC) companies, manufacturers, investors and businesses requiring local support — with ARSSA as the bridge between South Africa and the DRC."',
  'description="Who we serve: Southern African businesses, manufacturers, investors and companies requiring local support — with ARSSA as the bridge connecting Southern Africa and the DRC."'
);

marketsTsx = marketsTsx.replace(
  'subtitle="ARSSA is built for organisations that need more than reports — they need dependable, on-the-ground execution across the South Africa (SADAC)–DRC corridor."',
  'subtitle="ARSSA is built for organisations that need more than reports — they need dependable, on-the-ground execution across the DRC–Southern Africa trade corridor."'
);

fs.writeFileSync(marketsTsxPath, marketsTsx, "utf8");
console.log("Updated src/pages/Markets.tsx");

// 7. Update src/pages/WhyArssa.tsx
const whyTsxPath = path.join(__dirname, "../src/pages/WhyArssa.tsx");
let whyTsx = fs.readFileSync(whyTsxPath, "utf8");

whyTsx = whyTsx.replace(
  'description="Discover why businesses choose ARSSA: one accountable partner, reduced risk, faster setup, vetted local networks, and permanent ground presence across the South Africa (SADAC)–DRC corridor."',
  'description="Discover why businesses choose ARSSA: one accountable partner, reduced risk, faster setup, vetted local networks, and permanent ground presence across the DRC–Southern Africa trade corridor."'
);

whyTsx = whyTsx.replace(
  'subtitle="One integrated partner instead of a chain of disconnected service providers — built specifically for the South Africa (SADAC)–DRC corridor."',
  'subtitle="One integrated partner instead of a chain of disconnected service providers — built specifically for the DRC–Southern Africa trade corridor."'
);

fs.writeFileSync(whyTsxPath, whyTsx, "utf8");
console.log("Updated src/pages/WhyArssa.tsx");

// 8. Update src/pages/Legacy.tsx
const legacyTsxPath = path.join(__dirname, "../src/pages/Legacy.tsx");
let legacyTsx = fs.readFileSync(legacyTsxPath, "utf8");

legacyTsx = legacyTsx.replace(
  '"The historical projects showcased below reflect the ARS Group legacy and partnership experience in the DRC — rather than claiming every historical project was directly undertaken by ARSSA as a South African (SADAC) entity. This track record underpins the operational capability, sector knowledge, and corporate relationships that ARSSA brings to South African (SADAC) clients today."',
  '"The historical projects showcased below reflect the ARS Group legacy and partnership experience in the DRC — rather than claiming every historical project was directly undertaken by ARSSA as a South African entity. This track record underpins the operational capability, sector knowledge, and corporate relationships that ARSSA brings to clients across Southern Africa today."'
);

fs.writeFileSync(legacyTsxPath, legacyTsx, "utf8");
console.log("Updated src/pages/Legacy.tsx");

// 9. Update src/pages/Contact.tsx
const contactTsxPath = path.join(__dirname, "../src/pages/Contact.tsx");
let contactTsx = fs.readFileSync(contactTsxPath, "utf8");
contactTsx = contactTsx.replace(
  'title="ARSSA — South Africa (SADAC) operations map"',
  'title="ARSSA — South African operations map"'
);
fs.writeFileSync(contactTsxPath, contactTsx, "utf8");
console.log("Updated src/pages/Contact.tsx");

// 10. Update src/components/CTASection.tsx
const ctaPath = path.join(__dirname, "../src/components/CTASection.tsx");
let cta = fs.readFileSync(ctaPath, "utf8");
cta = cta.replace(
  'ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the South Africa (SADAC)–DRC corridor.',
  'ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the DRC–Southern Africa trade corridor.'
);
fs.writeFileSync(ctaPath, cta, "utf8");
console.log("Updated src/components/CTASection.tsx");

// 11. Update src/components/GoogleReviews.tsx
const reviewsPath = path.join(__dirname, "../src/components/GoogleReviews.tsx");
let reviews = fs.readFileSync(reviewsPath, "utf8");
reviews = reviews.replace(
  'We\'re building our public track record on Google. If ARSSA has supported your business across the South Africa (SADAC)–DRC corridor, we\'d genuinely value a review — it helps other businesses make confident decisions.',
  'We\'re building our public track record on Google. If ARSSA has supported your business across the DRC–Southern Africa trade corridor, we\'d genuinely value a review — it helps other businesses make confident decisions.'
);
fs.writeFileSync(reviewsPath, reviews, "utf8");
console.log("Updated src/components/GoogleReviews.tsx");

// 12. Update service subpages
const bfPath = path.join(__dirname, "../src/pages/services/BusinessFacilitation.tsx");
let bf = fs.readFileSync(bfPath, "utf8");
bf = bf.replace(
  'ARSSA helps South African (SADAC) businesses register, staff and operate compliantly in the DRC.',
  'ARSSA helps businesses across Southern Africa register, staff and operate compliantly in the DRC.'
);
fs.writeFileSync(bfPath, bf, "utf8");

const iePath = path.join(__dirname, "../src/pages/services/ImportExport.tsx");
let ie = fs.readFileSync(iePath, "utf8");
ie = ie.replace(
  '"Connecting South African (SADAC) producers with DRC buyers",\n      "Connecting DRC producers with South African (SADAC) buyers",',
  '"Connecting Southern African producers with DRC buyers",\n      "Connecting DRC producers with Southern African buyers",'
);
ie = ie.replace(
  'ARSSA ensures goods move efficiently and legally across the South Africa (SADAC)–DRC corridor.',
  'ARSSA ensures goods move efficiently and legally across the DRC–Southern Africa trade corridor.'
);
ie = ie.replace(
  '{tr("Moving goods between South Africa (SADAC) and the DRC involves complex customs regulations, multi-modal transport handoffs, import certifications, and strict documentary checks.")}',
  '{tr("Moving goods between the DRC and Southern Africa involves complex customs regulations, multi-modal transport handoffs, import certifications, and strict documentary checks.")}'
);
fs.writeFileSync(iePath, ie, "utf8");

const mgPath = path.join(__dirname, "../src/pages/services/MarketGrowth.tsx");
let mg = fs.readFileSync(mgPath, "utf8");
mg = mg.replace(
  '{tr("ARSSA connects South African (SADAC) brands directly with vetted wholesalers, retailers, and commercial buyers, orchestrating promotions and distribution channels that deliver repeatable revenue.")}',
  '{tr("ARSSA connects Southern African brands directly with vetted wholesalers, retailers, and commercial buyers, orchestrating promotions and distribution channels that deliver repeatable revenue.")}'
);
fs.writeFileSync(mgPath, mg, "utf8");

// 13. Update src/translations/languages.ts
const langPath = path.join(__dirname, "../src/translations/languages.ts");
let langCode = fs.readFileSync(langPath, "utf8");
langCode = langCode.replace('Angola, Moçambique & SADC', 'Angola, Moçambique & África Austral');
langCode = langCode.replace('Suid-Afrika (SADAC)', 'Suid-Afrika');
langCode = langCode.replace('iNingizimu Afrika (SADAC)', 'iNingizimu Afrika');
langCode = langCode.replace('uMzantsi Afrika (SADAC)', 'uMzantsi Afrika');
fs.writeFileSync(langPath, langCode, "utf8");
console.log("Updated languages.ts");

console.log("All page and component files successfully updated.");
