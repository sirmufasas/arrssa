import { Boxes, FileSearch, Network, Ship } from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import ScrollReveal from "../../components/ScrollReveal";
import CTASection from "../../components/CTASection";
import {
  PurposeCallout,
  SectorBadges,
  ServiceBlocks,
  type ServiceBlock,
} from "../../components/ServiceSections";

const BLOCKS: ServiceBlock[] = [
  {
    icon: FileSearch,
    title: "Customs & Documentation",
    items: [
      "Import/export permits & clearing",
      "Sanitary & regulatory compliance documentation",
      "Harmonised System (HS) tariff classification",
      "Cross-border tax & duty optimisation",
    ],
  },
  {
    icon: Ship,
    title: "Freight & Logistics Coordination",
    items: [
      "Air freight for urgent & high-value consignments",
      "Sea freight consolidation & port handling",
      "Road freight corridor transport",
      "Shipping schedule management & tracking",
      "Last-mile delivery and warehousing in the DRC",
    ],
  },
  {
    icon: Network,
    title: "Supplier & Buyer Network Development",
    items: [
      "Connecting South African producers with DRC buyers",
      "Connecting DRC producers with South African buyers",
      "Structured commercial introductions & vetting",
      "Supply contract facilitation & escrow coordination",
    ],
  },
  {
    icon: Boxes,
    title: "Goods Supply & Trade Advisory",
    items: [
      "Pharmaceutical & medical goods movement",
      "Agri-food & agricultural inputs trade",
      "Mining-related goods — supply-chain and trade facilitation only",
      "Fuel, energy & industrial fluids supply coordination",
      "Landed-cost modelling, tariff guidance & compliance consulting",
    ],
  },
];

export default function ImportExport() {
  return (
    <>
      <SEO
        title="Import & Export | ARSSA"
        description="Trade facilitation, compliance, logistics and cross-border movement. ARSSA ensures goods move efficiently and legally across the South Africa–DRC corridor."
        path="/services/import-export"
      />

      <PageHero
        eyebrow="Division 03 — Import & Export"
        title="Import & Export"
        subtitle="Trade Facilitation, Compliance, Logistics & Cross-Border Movement"
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Import & Export" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 56 }}>
            <ScrollReveal>
              <div className="showcase-media">
                <img
                  src="https://images.pexels.com/photos/33401363/pexels-photo-33401363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="International freight logistics and cargo container terminal"
                  loading="lazy"
                />
                <div className="showcase-media__overlay">
                  <span className="showcase-media__tag">Corridor Trade</span>
                  <h3 className="showcase-media__title">Compliant Cargo Movement</h3>
                  <p className="showcase-media__desc">
                    Eliminating customs bottlenecks, demurrage costs, and documentation errors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="eyebrow eyebrow--navy">Division Overview</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                  End-to-End Trade Execution Across Borders
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 20 }}>
                  Moving goods between South Africa and the DRC involves complex customs
                  regulations, multi-modal transport handoffs, import certifications, and strict
                  documentary checks.
                </p>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>
                  ARSSA oversees the entire supply chain — managing tariff classifications,
                  freight forwarding, customs clearance, and local receiving to ensure your
                  shipments arrive on schedule, fully compliant, and within budget.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#b89200" />

          <SectorBadges
            title="Goods Categories We Support"
            items={[
              "Pharmaceutical & Medical",
              "Agri-Food",
              "Agricultural Inputs",
              "Mining-related Goods (supply-chain & trade facilitation only)",
              "Fuel / Energy / Industrial Fluids",
            ]}
          />

          <PurposeCallout
            title="Division Purpose"
            text="Ensure goods move efficiently and legally across borders while reducing operational barriers and risk."
          />
        </div>
      </section>

      <CTASection
        headline="Keep your cross-border supply chain moving"
        text="Whether you need single-shipment customs support or ongoing multi-modal logistics management, ARSSA delivers."
        primaryLabel="Discuss Your Trade Requirements"
        secondaryLabel="View All Services"
        secondaryPath="/services"
      />
    </>
  );
}
