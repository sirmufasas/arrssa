import {
  ClipboardCheck,
  FileCheck2,
  Plane,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import ScrollReveal from "../../components/ScrollReveal";
import CTASection from "../../components/CTASection";
import { PurposeCallout, ServiceBlocks, type ServiceBlock } from "../../components/ServiceSections";
import { useTranslate } from "../../context/LanguageContext";

const BLOCKS: ServiceBlock[] = [
  {
    icon: TrendingUp,
    title: "Investment & Market Entry Support",
    items: [
      "Feasibility studies",
      "Regulatory mapping",
      "Local partner & supplier verification",
      "Partnership facilitation",
    ],
  },
  {
    icon: FileCheck2,
    title: "Business Registration & Compliance",
    items: [
      "Company incorporation & registration",
      "Licensing & permits",
      "Regulatory filings",
      "Tax registration & compliance",
      "RCCM, National ID & sector-specific documentation",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Administrative & Operational Support",
    items: [
      "Government & administrative liaison",
      "Permit, licence & compliance follow-ups",
      "Document submission, certification & processing",
      "Local business representation & coordination",
      "Supplier, partner & stakeholder follow-ups",
    ],
  },
  {
    icon: Plane,
    title: "Visa, Immigration & Workforce Mobility",
    items: [
      "Business & work visa assistance",
      "Work permit application support",
      "Employee immigration & mobility documentation",
      "Cross-border workforce onboarding",
      "Permit renewals & compliance follow-ups",
    ],
  },
  {
    icon: Users,
    title: "Workforce Solutions & Placement",
    items: [
      "Talent sourcing & recruitment",
      "Technical & professional workforce placement",
      "Workforce mobilisation & deployment coordination",
      "Onboarding & workforce documentation",
      "Project-based staffing support",
    ],
  },
];

export default function BusinessFacilitation() {
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Business Facilitation | ARSSA"
        description="Facilitation, compliance, market entry and administrative support. ARSSA helps businesses across Southern Africa register, staff and operate compliantly in the DRC."
        path="/services/business-facilitation"
      />

      <PageHero
        eyebrow="Division 01 — Business Facilitation"
        title="Business Facilitation"
        subtitle="Facilitation, Compliance, Market Entry & Administrative Support"
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Business Facilitation" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 56 }}>
            <ScrollReveal>
              <div className="showcase-media">
                <img
                  src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Business facilitation and executive consulting"
                  loading="lazy"
                />
                <div className="showcase-media__overlay">
                  <span className="showcase-media__tag">{tr("Compliant Market Entry")}</span>
                  <h3 className="showcase-media__title">{tr("Clear Path to Market")}</h3>
                  <p className="showcase-media__desc">
                    {tr("Navigating corporate filings, licensing, and workforce mobility without delays.")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="eyebrow eyebrow--navy">{tr("Division Overview")}</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                  {tr("Establishing Your Operations Safely & Compliantly")}
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 20 }}>
                  {tr("Entering the Democratic Republic of Congo requires clear understanding of local administrative procedures, corporate governance statutes, immigration regulations, and licensing requirements.")}
                </p>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>
                  {tr("ARSSA’s Business Facilitation division acts as your on-the-ground administrative and regulatory compass — ensuring that from your initial feasibility study to your daily operations, your business is fully compliant and legally protected.")}
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#1a3160" />

          <PurposeCallout
            title={tr("Division Purpose")}
            text={tr("Reduce administrative friction and establish compliant, well-prepared operations in the DRC.")}
          />
        </div>
      </section>

      <CTASection
        headline="Plan your DRC market entry with confidence"
        text="From feasibility and licensing to workforce mobility and B2B matchmaking — ARSSA manages the complex details."
        primaryLabel="Discuss Your Expansion"
        secondaryLabel="View All Services"
        secondaryPath="/services"
      />
    </>
  );
}
