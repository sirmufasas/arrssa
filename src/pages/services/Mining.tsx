import { Pickaxe, Handshake, Truck, ClipboardCheck, Users } from "lucide-react";
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
