import { Pickaxe, Handshake, Truck, ClipboardCheck } from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import { ServiceBlocks, type ServiceBlock } from "../../components/ServiceSections";
import CTASection from "../../components/CTASection";
import { useTranslate } from "../../context/LanguageContext";

const BLOCKS: ServiceBlock[] = [
  { icon: Pickaxe, title: "Mining & Resources Support", items: ["Mining opportunity coordination", "Supplier and partner introductions", "Commercial and field support"] },
  { icon: Handshake, title: "Partnerships & Sourcing", items: ["South Africa (SADAC)–DRC business connections", "Equipment and input sourcing", "Stakeholder coordination"] },
  { icon: Truck, title: "Supply Coordination", items: ["Cross-border supply support", "Logistics coordination", "On-the-ground follow-through"] },
  { icon: ClipboardCheck, title: "Practical Execution", items: ["Structured introductions", "Compliance-aware coordination", "Clear reporting and next steps"] },
];

export default function Mining() {
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Mining & Resources | ARSSA"
        description="ARSSA supports mining-related sourcing, partnerships and commercial coordination across the South Africa (SADAC)–DRC corridor."
        path="/services/mining"
      />
      <PageHero
        eyebrow="Division 04 — Mining & Resources"
        title="Mining & Resources"
        subtitle="Practical support for mining-related opportunities, sourcing and partnerships."
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
                {tr("ARSSA provides focused commercial and operational support for mining-related activity across the South Africa (SADAC)–DRC corridor.")}
              </p>
              <p style={{ color: "var(--ink-soft)", marginTop: 18 }}>
                {tr("We keep this support practical: helping identify the right partners, coordinate supply and introductions, and move opportunities toward clear next steps.")}
              </p>
            </div>
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
