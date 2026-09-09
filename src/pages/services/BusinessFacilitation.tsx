import {
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Plane,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import SEO from "../../components/SEO";
import ScrollReveal from "../../components/ScrollReveal";
import CTASection from "../../components/CTASection";
import { PurposeCallout, ServiceBlocks, type ServiceBlock } from "../../components/ServiceSections";

const BLOCKS: ServiceBlock[] = [
  {
    icon: TrendingUp,
    title: "Investment & Market Entry Support",
    items: [
      "Feasibility studies",
      "Regulatory mapping",
      "Due diligence",
      "Partnership facilitation",
    ],
  },
  {
    icon: FileCheck2,
    title: "Business Registration & Compliance",
    items: [
      "Registration",
      "Licensing",
      "Regulatory filings",
      "Tax compliance",
      "Documentation",
    ],
  },
  {
    icon: Plane,
    title: "Visa, Immigration & Workforce Mobility",
    items: [
      "Work permits",
      "Business visas",
      "Cross-border staff documentation",
    ],
  },
  {
    icon: Users,
    title: "Workforce Management",
    items: [
      "Recruitment",
      "Staffing",
      "Training",
      "Deployment",
      "On-site management",
    ],
  },
  {
    icon: Handshake,
    title: "Market Access & Networking",
    items: [
      "B2B introductions",
      "Partnership sourcing",
      "Distributor identification",
      "Buyer identification",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Administrative Support",
    items: [
      "Local operational support",
      "Document management",
      "Regional representation",
    ],
  },
];

export default function BusinessFacilitation() {
  return (
    <>
      <SEO
        title="Business Facilitation | ARSSA"
        description="Facilitation, compliance, market entry and administrative support. ARSSA helps South African businesses register, staff and operate compliantly in the DRC."
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
                  <span className="showcase-media__tag">Compliant Market Entry</span>
                  <h3 className="showcase-media__title">Clear Path to Market</h3>
                  <p className="showcase-media__desc">
                    Navigating corporate filings, licensing, and workforce mobility without delays.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="eyebrow eyebrow--navy">Division Overview</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                  Establishing Your Operations Safely &amp; Compliantly
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 20 }}>
                  Entering the Democratic Republic of Congo requires clear understanding of local
                  administrative procedures, corporate governance statutes, immigration regulations,
                  and licensing requirements.
                </p>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>
                  ARSSA’s Business Facilitation division acts as your on-the-ground administrative
                  and regulatory compass — ensuring that from your initial feasibility study to
                  your daily operations, your business is fully compliant and legally protected.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#1a3160" />

          <PurposeCallout
            title="Division Purpose"
            text="Reduce administrative friction and establish compliant, well-prepared operations in the DRC."
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
