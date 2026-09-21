import { useState } from "react";
import {
  ArrowDown,
  Briefcase,
  Building2,
  CheckCircle2,
  FileText,
  Globe,
  Handshake,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { FeatureItem } from "../components/AboutSections";
import { useT, useTranslate } from "../context/LanguageContext";

function DRCFlagBadge({ size = 48 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 0 16px rgba(0, 127, 255, 0.35)",
        flexShrink: 0,
      }}
      aria-label="Democratic Republic of Congo Flag"
    >
      <svg
        viewBox="0 0 800 600"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <rect width="800" height="600" fill="#007fff" />
        <polygon points="0,520 0,600 80,600 800,80 800,0 720,0" fill="#f7d618" />
        <polygon points="0,550 0,600 50,600 800,50 800,0 750,0" fill="#ce1021" />
        <polygon
          points="130,50 148,105 206,105 159,139 177,194 130,160 83,194 101,139 54,105 112,105"
          fill="#f7d618"
        />
      </svg>
    </div>
  );
}

function GlobeBadge({ size = 48 }: { size?: number }) {
  return (
    <div
      className="bridge-v2__icon-badge"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Globe size={24} color="#38bdf8" />
    </div>
  );
}

const TARGETS = [
  {
    icon: Building2,
    title: "South African (SADAC) Companies",
    text: "Businesses seeking to expand into the DRC — with structured support from initial market assessment through to day-to-day operations.",
    accent: "#1a3160",
  },
  {
    icon: Briefcase,
    title: "Manufacturers & Producers",
    text: "Especially pharmaceutical, cosmetic, agri-food, and agricultural-input manufacturers looking for verified distributor placement and off-take channels in the DRC.",
    accent: "#d40000",
  },
  {
    icon: Users,
    title: "Investors & Entrepreneurs",
    text: "Cross-border investors seeking structured due diligence, local regulatory mapping, and reliable corporate governance for their investments.",
    accent: "#b89200",
  },
  {
    icon: Handshake,
    title: "Businesses Requiring Local Support",
    text: "Companies already operating or trading across the corridor needing specialized compliance, document management, logistics, and on-site representation.",
    accent: "#009639",
  },
];

const BRIDGE_ROLE = [
  "Comprehensive market intelligence & feasibility studies",
  "Entity registration, licensing & regulatory filings",
  "Vetted distributor, wholesaler & buyer identification",
  "Cross-border customs clearing & multi-modal logistics",
  "Ongoing workforce mobility & operational compliance support",
];

const SECTORS_DETAILED = [
  {
    name: "Pharmaceutical & Medical",
    desc: "Import authorizations, sanitary registrations, temperature-controlled distribution, and medical-grade facility maintenance.",
  },
  {
    name: "Cosmetic & Personal Care",
    desc: "Retailer network placement, promotional campaigns, local brand registration, and consumer demand generation.",
  },
  {
    name: "Agri-Food & Perishables",
    desc: "Sanitary import clearances, cold chain logistics, bulk supply contracts, and wholesale grocery placement.",
  },
  {
    name: "Agricultural Inputs",
    desc: "Distribution of fertilizers, agro-chemicals, and farming supplies to commercial agricultural operations in the DRC.",
  },
];

export default function Markets() {
  const [selectedRole, setSelectedRole] = useState(0);
  const t = useT();
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Target Markets | ARSSA"
        description="Who we serve: South African (SADAC) companies, manufacturers, investors and businesses requiring local support — with ARSSA as the bridge between South Africa and the DRC."
        path="/markets"
      />

      <PageHero
        eyebrow="Who We Serve"
        title="Target Markets"
        subtitle="ARSSA is built for organisations that need more than reports — they need dependable, on-the-ground execution across the South Africa (SADAC)–DRC corridor."
        crumbs={[{ label: "Home", path: "/" }, { label: "Markets" }]}
      />

      {/* Target Segments */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow={tr("Market Profiles")}
              title={tr("Four Core Target Segments")}
              description={tr("Each client segment faces unique regulatory, logistical, and commercial hurdles. Our five divisions coordinate to provide the exact solution needed.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="divisions-grid">
            {TARGETS.map((target, i) => (
              <ScrollReveal key={target.title} delay={i * 0.06}>
                <div className="card" style={{ padding: 36, height: "100%" }}>
                  <FeatureItem icon={target.icon} title={tr(target.title)} text={tr(target.text)} accent={target.accent} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Corridor Bridge Visual (Redesigned per image-2.jpeg) */}
      <section className="section section--bridge">
        <div className="container">
          <ScrollReveal>
            <div className="bridge-v2__header">
              <div className="bridge-v2__eyebrow">
                <span aria-hidden="true">—</span>
                <span>{tr("The Cross-Border Bridge")}</span>
              </div>
              <h2 className="bridge-v2__title">
                <span>{tr("Regional & International Markets")}</span>
                <span className="bridge-v2__title-arrow" aria-hidden="true"> → </span>
                <span translate="no" data-no-translate="true">ARSSA</span>
                <span className="bridge-v2__title-arrow" aria-hidden="true"> → </span>
                <span>{tr("DRC")}</span>
              </h2>
              <p className="bridge-v2__description">
                {tr(
                  "ARSSA acts as an integrated bridge connecting businesses, suppliers, investors and commercial opportunities with the DRC, while facilitating trade and market access across regional and international markets."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="bridge-v2__container">
            {/* Card 1: Regional & International Markets */}
            <ScrollReveal>
              <div className="bridge-v2__card">
                <div className="bridge-v2__card-head">
                  <GlobeBadge size={52} />
                  <div className="bridge-v2__card-info">
                    <h3>{tr("Regional & International Markets")}</h3>
                    <p>
                      {tr(
                        "Businesses, investors, manufacturers, suppliers and strategic partners seeking access to the DRC market."
                      )}
                    </p>
                  </div>
                </div>
                <div className="bridge-v2__pills">
                  {["AFRICA", "EUROPE", "ASIA", "MIDDLE EAST", "AMERICAS"].map((reg) => (
                    <span key={reg} className="bridge-v2__pill">
                      {tr(reg)}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Down Connector 1 */}
            <div className="bridge-v2__arrow-divider" aria-hidden="true">
              <ArrowDown size={30} />
            </div>

            {/* Card 2: ARSSA Featured Centerpiece */}
            <ScrollReveal>
              <div className="bridge-v2__card bridge-v2__card--center">
                <div className="bridge-v2__center-head">
                  <div className="bridge-v2__center-logo-wrap" translate="no" data-no-translate="true">
                    <img
                      src="/arssa-logo.png"
                      alt="ARSSA"
                      className="bridge-v2__center-logo"
                      draggable="false"
                      translate="no"
                    />
                  </div>
                  <div className="bridge-v2__center-info">
                    <h3 translate="no" data-no-translate="true" className="bridge-v2__center-title">
                      ARSSA
                    </h3>
                    <p className="bridge-v2__center-sub">
                      {tr("Your integrated cross-border facilitation partner.")}
                    </p>
                  </div>
                </div>

                <div className="bridge-v2__grid">
                  {[
                    { icon: TrendingUp, label: "Market Access" },
                    { icon: FileText, label: "Regulatory Coordination" },
                    { icon: Truck, label: "Trade & Logistics" },
                    { icon: Users, label: "Workforce Solutions" },
                    { icon: Handshake, label: "Local Execution" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bridge-v2__grid-item">
                      <div className="bridge-v2__grid-icon" aria-hidden="true">
                        <Icon size={24} />
                      </div>
                      <span className="bridge-v2__grid-label">{tr(label)}</span>
                    </div>
                  ))}
                </div>

                <div className="bridge-v2__badge-strip">
                  {tr(
                    "DRC-HEADQUARTERED • ESTABLISHED SOUTH AFRICAN PRESENCE • REGIONAL & INTERNATIONAL REACH"
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Down Connector 2 */}
            <div className="bridge-v2__arrow-divider" aria-hidden="true">
              <ArrowDown size={30} />
            </div>

            {/* Card 3: Democratic Republic of Congo */}
            <ScrollReveal>
              <div className="bridge-v2__card">
                <div className="bridge-v2__card-head">
                  <DRCFlagBadge size={52} />
                  <div className="bridge-v2__card-info">
                    <h3>{tr("Democratic Republic of Congo")}</h3>
                    <p>
                      {tr(
                        "Local market access, commercial opportunities, regulatory navigation and on-the-ground coordination."
                      )}
                    </p>
                  </div>
                </div>
                <div className="bridge-v2__pills">
                  {["INVEST", "TRADE", "PARTNER", "GROW"].map((action) => (
                    <span key={action} className="bridge-v2__pill">
                      {tr(action)}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Footer Tagline */}
            <ScrollReveal delay={0.08}>
              <div className="bridge-v2__footer-tagline">
                <div className="bridge-v2__rule-line">
                  <span className="bridge-v2__rule-dash" aria-hidden="true" />
                  <span>{tr("SOUTH AFRICA TO A WIDER TOMORROW")}</span>
                  <span className="bridge-v2__rule-dash" aria-hidden="true" />
                </div>
                <p className="bridge-v2__motto">
                  {tr("A South African base. A regional perspective. A stronger DRC.")}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.12}>
            <div
              className="card"
              style={{
                marginTop: 56,
                padding: "36px 40px",
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div style={{ maxWidth: 480 }}>
                <h3 style={{ fontSize: 21, marginBottom: 10, color: "#ffffff" }}>
                  {tr("What ARSSA Coordinates for You")}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: 15.5, lineHeight: 1.6 }}>
                  {tr(
                    "From market validation and regulatory licensing to customs clearance and retailer shelf presence, one partner handles the full workflow."
                  )}
                </p>
              </div>
              <ul style={{ display: "grid", gap: 12, flex: 1, minWidth: 280 }}>
                {BRIDGE_ROLE.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "center",
                      fontSize: 15,
                      color: "#f1f5f9",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="var(--green, #22c55e)"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span>{tr(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector Details Explorer */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow={tr("Sector Focus")}
              title={tr("Specialised Sector Profiles")}
              description={tr("Explore how ARSSA addresses the specific commercial dynamics of each key industry.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="divisions-grid">
            {SECTORS_DETAILED.map((s, idx) => (
              <ScrollReveal key={s.name} delay={idx * 0.06}>
                <div
                  className="card"
                  style={{
                    padding: 32,
                    cursor: "pointer",
                    border: selectedRole === idx ? "2px solid var(--gold)" : undefined,
                  }}
                  onClick={() => setSelectedRole(idx)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <Sparkles size={18} color="var(--brand-gold)" aria-hidden="true" />
                    <h3 style={{ fontSize: 19 }}>{tr(s.name)}</h3>
                  </div>
                  <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>
                    {tr(s.desc)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={tr("Find out how ARSSA can support your market entry")}
        text={tr("Contact our team to discuss your target sector, volume projections, and timeline for the DRC.")}
        primaryLabel={t.cta.primary}
        secondaryLabel={t.nav.why}
        secondaryPath="/why-arssa"
      />
    </>
  );
}
