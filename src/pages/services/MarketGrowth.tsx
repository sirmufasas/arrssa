import { Megaphone, Store } from "lucide-react";
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
    icon: Megaphone,
    title: "Strategic Marketing & Promotions",
    items: [
      "Market analysis & consumer insights",
      "Competitor analysis & price positioning",
      "KPI-driven commercial campaigns",
      "B2B corporate activation",
      "B2C brand & field activation",
    ],
  },
  {
    icon: Store,
    title: "Integrated Distribution Support",
    items: [
      "Wholesaler placement & relationship management",
      "Retailer placement & shelf visibility",
      "Distributor identification & qualification",
      "Demand creation & point-of-sale support",
      "Distribution-linked marketing execution",
    ],
  },
];

export default function MarketGrowth() {
  return (
    <>
      <SEO
        title="Market Growth & Distribution | ARSSA"
        description="Marketing, promotions, product visibility and field distribution. ARSSA converts brand presence into measurable, sustainable market growth across the DRC."
        path="/services/market-growth-distribution"
      />

      <PageHero
        eyebrow="Division 02 — Market Growth & Distribution"
        title="Market Growth & Distribution"
        subtitle="Marketing, Promotions, Product Visibility & Field Distribution"
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Market Growth & Distribution" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 56 }}>
            <ScrollReveal>
              <div className="showcase-media">
                <img
                  src="https://images.pexels.com/photos/38261992/pexels-photo-38261992.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Market growth, distribution channels and corporate brand expansion"
                  loading="lazy"
                />
                <div className="showcase-media__overlay">
                  <span className="showcase-media__tag">Commercial Traction</span>
                  <h3 className="showcase-media__title">From Placement to Offtake</h3>
                  <p className="showcase-media__desc">
                    Driving real consumer demand and dependable wholesale distribution pipelines.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="eyebrow eyebrow--navy">Division Overview</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 18 }}>
                  Transforming Brand Presence into Commercial Offtake
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 20 }}>
                  Gaining shelf presence is only half the battle. In competitive and fast-evolving
                  markets like Lubumbashi and Kinshasa, products need continuous brand resonance,
                  strong distributor alignment, and active demand generation.
                </p>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.65 }}>
                  ARSSA connects South African brands directly with vetted wholesalers, retailers,
                  and commercial buyers, orchestrating promotions and distribution channels that
                  deliver repeatable revenue.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <ServiceBlocks blocks={BLOCKS} accent="#d40000" />

          <SectorBadges
            title="Sector Capabilities"
            items={[
              "Pharmaceutical & Medical Supply",
              "Cosmetic Products",
              "Agri-Food Products",
              "Agricultural Inputs",
              "Office & Corporate Supply Chain Support",
            ]}
          />

          <PurposeCallout
            title="Division Purpose"
            text="Expand client brand visibility and convert it into measurable, sustainable market growth."
          />
        </div>
      </section>

      <CTASection
        headline="Turn market entry into sustainable market share"
        text="Let's build a commercial distribution and promotional roadmap tailored to your product line and target buyers."
        primaryLabel="Discuss Your Growth Plan"
        secondaryLabel="View All Services"
        secondaryPath="/services"
      />
    </>
  );
}
