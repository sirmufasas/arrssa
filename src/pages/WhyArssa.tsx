import {
  CheckCircle2,
  FileCheck2,
  Landmark,
  Layers,
  Network,
  ShieldCheck,
  Timer,
  XCircle,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { FeatureItem } from "../components/AboutSections";
import { useT, useTranslate } from "../context/LanguageContext";

const REASONS = [
  {
    icon: Layers,
    title: "Integrated Model",
    text: "Facilitation + Compliance + Marketing + Distribution + Trade Execution — coordinated under one accountable partner, not five disconnected vendors.",
    accent: "#1a3160",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Market Entry Risk",
    text: "Structured support identifies regulatory and operational pitfalls before they become costly liabilities.",
    accent: "#d40000",
  },
  {
    icon: Timer,
    title: "Faster Operational Setup",
    text: "Vetted local relationships and streamlined documentation help businesses establish operations months faster than going alone.",
    accent: "#b89200",
  },
  {
    icon: Network,
    title: "Reliable Local Networks",
    text: "Direct access to pre-qualified buyers, wholesalers, corporate stakeholders, and administrative contacts.",
    accent: "#009639",
  },
  {
    icon: FileCheck2,
    title: "Harmonised Documentation",
    text: "Structured compliance, permits, and tax filings so your records remain audit-ready and legally compliant.",
    accent: "#1a3160",
  },
  {
    icon: Landmark,
    title: "Long-Term Ground Commitment",
    text: "We are not remote advisors — we operate on the ground in Lubumbashi, Kinshasa, Kolwezi and Johannesburg.",
    accent: "#d40000",
  },
];

const COMPARISON = [
  {
    factor: "Accountability",
    typical: "Fragmented across multiple independent agencies and consultants",
    arssa: "Single point of accountability across all five core disciplines",
  },
  {
    factor: "Local Ground Presence",
    typical: "Often remote or reliant on ad-hoc third-party local agents",
    arssa: "Permanent operational presence in Lubumbashi, Kinshasa, Kolwezi and Johannesburg",
  },
  {
    factor: "Regulatory Navigation",
    typical: "Theoretical advice without active on-the-ground administrative processing",
    arssa: "Active filing, license management, tax compliance, and regulatory liaison",
  },
  {
    factor: "Distribution Channels",
    typical: "Client left to find, vet, and manage distributors independently",
    arssa: "Direct access to vetted distributor networks and active field placement",
  },
  {
    factor: "Cost Predictability",
    typical: "Unpredictable costs from managing multiple uncoordinated fee structures",
    arssa: "Transparent, scoped project milestones and coordinated cost management",
  },
];

export default function WhyArssa() {
  const t = useT();
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Why ARSSA | One Integrated Partner for the DRC"
        description="Discover why businesses choose ARSSA: one accountable partner, reduced risk, faster setup, vetted local networks, and permanent ground presence across the DRC–Southern Africa trade corridor."
        path="/why-arssa"
      />

      <PageHero
        eyebrow="The ARSSA Value Proposition"
        title="Why ARSSA"
        subtitle="One integrated partner instead of a chain of disconnected service providers — built specifically for the DRC–Southern Africa trade corridor."
        crumbs={[{ label: "Home", path: "/" }, { label: "Why ARSSA" }]}
      />

      {/* Six Reasons */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow={tr("Core Advantages")}
              title={tr("Six Reasons Enterprises Choose ARSSA")}
              description={tr("Our model eliminates the friction, delays, and risk of managing multiple independent vendors across two countries.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="divisions-grid">
            {REASONS.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.05}>
                <div className="card" style={{ padding: 36, height: "100%" }}>
                  <FeatureItem icon={r.icon} title={tr(r.title)} text={tr(r.text)} accent={r.accent} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow={tr("Clear Comparison")}
              title={tr("ARSSA vs. Traditional Approaches")}
              description={tr("See the difference between integrated corridor coordination and fragmented vendor management.")}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>{tr("Capability / Approach")}</th>
                    <th>{tr("Fragmented Agencies / Consultants")}</th>
                    <th className="highlight-col">{tr("The ARSSA Integrated Solution")}</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((c) => (
                    <tr key={c.factor}>
                      <td style={{ fontWeight: 600 }}>{tr(c.factor)}</td>
                      <td>
                        <span style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <XCircle size={16} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                          <span>{tr(c.typical)}</span>
                        </span>
                      </td>
                      <td className="highlight-col">
                        <span style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <CheckCircle2 size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                          <span style={{ fontWeight: 500 }}>{tr(c.arssa)}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline={tr("Let's discuss your market strategy")}
        text={tr("Schedule an introductory consultation to discuss your expansion timeline, compliance requirements, and commercial goals.")}
        primaryLabel={t.cta.primary}
        secondaryLabel={t.nav.contact}
        secondaryPath="/contact"
      />
    </>
  );
}
