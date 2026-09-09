import { useState } from "react";
import { ArrowRight, Briefcase, Building2, CheckCircle2, Handshake, Users, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { FeatureItem } from "../components/AboutSections";

const TARGETS = [
  {
    icon: Building2,
    title: "South African Companies",
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

  return (
    <>
      <SEO
        title="Target Markets | ARSSA"
        description="Who we serve: South African companies, manufacturers, investors and businesses requiring local support — with ARSSA as the bridge between South Africa and the DRC."
        path="/markets"
      />

      <PageHero
        eyebrow="Who We Serve"
        title="Target Markets"
        subtitle="ARSSA is built for organisations that need more than reports — they need dependable, on-the-ground execution across the South Africa–DRC corridor."
        crumbs={[{ label: "Home", path: "/" }, { label: "Markets" }]}
      />

      {/* Target Segments */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Market Profiles"
              title="Four Core Target Segments"
              description="Each client segment faces unique regulatory, logistical, and commercial hurdles. Our four divisions coordinate to provide the exact solution needed."
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="divisions-grid">
            {TARGETS.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.06}>
                <div className="card" style={{ padding: 36, height: "100%" }}>
                  <FeatureItem icon={t.icon} title={t.title} text={t.text} accent={t.accent} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Corridor Bridge Visual */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="The Cross-Border Bridge"
              title="South Africa → ARSSA → DRC"
              description="ARSSA acts as the single accountable bridge between where your business originates and where it creates commercial impact."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="bridge">
              <div className="bridge__node">
                <div className="bridge__flag" aria-hidden="true">🇿🇦</div>
                <h3>South Africa</h3>
                <p>Enterprise base — where capital, manufacturing, executive strategy, and product supply originate.</p>
              </div>

              <div className="bridge__flow" aria-hidden="true">
                <ArrowRight size={32} />
              </div>

              <div className="bridge__node bridge__node--center">
                <div className="bridge__flag" aria-hidden="true">
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 34,
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "#ffffff" }}>A</span>
                    <span style={{ color: "var(--brand-gold)" }}>R</span>
                    <span style={{ color: "#3ecf6f" }}>S</span>
                  </span>
                </div>
                <h3>ARSSA</h3>
                <p>Your integrated cross-border operational partner</p>
              </div>

              <div className="bridge__flow" aria-hidden="true">
                <ArrowRight size={32} />
              </div>

              <div className="bridge__node">
                <div className="bridge__flag" aria-hidden="true">🇨🇩</div>
                <h3>DRC</h3>
                <p>Growth market — Lubumbashi, Kinshasa and beyond, where local execution and distribution matter.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="card"
              style={{
                marginTop: 48,
                padding: "36px 40px",
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                background: "var(--card-bg)",
              }}
            >
              <div style={{ maxWidth: 480 }}>
                <h3 style={{ fontSize: 21, marginBottom: 10 }}>What ARSSA Coordinates for You</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15.5, lineHeight: 1.6 }}>
                  From market validation and regulatory licensing to customs clearance and retailer shelf presence, one partner handles the full workflow.
                </p>
              </div>
              <ul style={{ display: "grid", gap: 12, flex: 1, minWidth: 280 }}>
                {BRIDGE_ROLE.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "var(--ink)" }}>
                    <CheckCircle2 size={16} color="var(--green)" style={{ flexShrink: 0 }} aria-hidden="true" />
                    <span>{item}</span>
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
              eyebrow="Sector Focus"
              title="Specialised Sector Profiles"
              description="Explore how ARSSA addresses the specific commercial dynamics of each key industry."
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
                    <h3 style={{ fontSize: 19 }}>{s.name}</h3>
                  </div>
                  <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Find out how ARSSA can support your market entry"
        text="Contact our team to discuss your target sector, volume projections, and timeline for the DRC."
        primaryLabel="Start an Enquiry"
        secondaryLabel="Why ARSSA"
        secondaryPath="/why-arssa"
      />
    </>
  );
}
