import { AlertTriangle, Award, Building2, HardHat, HeartPulse, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

const TIMELINE = [
  {
    icon: HardHat,
    tag: "Construction & Placement",
    title: "MMG Kinserver SARL",
    text: "Construction and placement work, including ongoing involvement in the Kep Project.",
  },
  {
    icon: HeartPulse,
    tag: "Medical Infrastructure",
    title: "ICAP / Columbia",
    text: "Deployment of ten medical incinerators across the Lubumbashi–Kipushi healthcare corridor.",
  },
  {
    icon: Building2,
    tag: "Financial Services",
    title: "Access Bank Lubumbashi Branch",
    text: "Experience delivered through the Triomphe Agency / MTA partnership.",
  },
  {
    icon: Award,
    tag: "Public & State Institutions",
    title: "GECAMINE / SOZACOM / CNSS",
    text: "Construction and conversion projects supporting major national and commercial entities.",
  },
  {
    icon: HardHat,
    tag: "Major Civil Infrastructure",
    title: "Everland Mining / Golden / Groupe Famuk",
    text: "Major civil works including community resettlement housing, health centres, schools, water supply systems and mining-related infrastructure.",
  },
];

export default function Legacy() {
  return (
    <>
      <SEO
        title="Legacy & Experience | ARSSA"
        description="The ARS Group legacy: construction, medical infrastructure, banking partnerships and major civil works experience across the DRC — the foundation behind ARSSA's confidence."
        path="/legacy"
      />

      <PageHero
        eyebrow="Proven Operational Foundation"
        title="Experience That Supports Confidence"
        subtitle="ARSSA is backed by the operational legacy of the ARS Group — years of complex, regulated and large-scale projects across the DRC."
        crumbs={[{ label: "Home", path: "/" }, { label: "Legacy" }]}
      />

      {/* Clarification Callout */}
      <section className="section--tight" style={{ background: "var(--bg-paper-subtle)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="callout callout--gold">
              <span className="callout__icon">
                <AlertTriangle size={24} aria-hidden="true" />
              </span>
              <div>
                <h3>Important Context Regarding This Track Record</h3>
                <p>
                  The historical projects showcased below reflect the <strong>ARS Group legacy and partnership
                  experience</strong> in the DRC — rather than claiming every historical project was directly
                  undertaken by ARSSA as a South African entity. This track record underpins the operational
                  capability, sector knowledge, and corporate relationships that ARSSA brings to South African clients today.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The ARS Group Legacy"
              title="Selected Track Record &amp; Partnership Experience"
              description="A representative selection of complex civil, medical, financial, and industrial projects executed in the DRC."
            />
          </ScrollReveal>

          <div className="timeline">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.05}>
                  <div className="timeline__item">
                    <span className="timeline__dot" aria-hidden="true" />
                    <div className="timeline__card">
                      <span
                        className="timeline__tag"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                      >
                        <Icon size={14} aria-hidden="true" />
                        {item.tag}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Credibility Callout */}
          <ScrollReveal delay={0.15}>
            <div
              className="card"
              style={{
                marginTop: 64,
                background: "var(--brand-navy)",
                color: "#ffffff",
                border: "none",
                padding: "48px 44px",
                textAlign: "center",
                boxShadow: "var(--shadow-navy)",
              }}
            >
              <div style={{ display: "inline-flex", padding: 12, borderRadius: "50%", background: "rgba(255,255,255,0.1)", marginBottom: 16 }}>
                <ShieldCheck size={32} color="var(--brand-gold)" aria-hidden="true" />
              </div>
              <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
                What This Demonstrates
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  lineHeight: 1.55,
                  maxWidth: 760,
                  margin: "0 auto",
                  color: "#ffffff",
                }}
              >
                This legacy demonstrates operational capacity, experience with complex and
                regulated projects, and long-standing trust with major corporate and
                government clients.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Work with experience you can verify"
        text="Ask us about the ARS Group's track record in your vertical — we are glad to discuss relevant project execution in detail."
        primaryLabel="Request a Discussion"
        secondaryLabel="About ARSSA"
        secondaryPath="/about"
      />
    </>
  );
}
