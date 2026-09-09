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
    title: "Practical Market Understanding",
    text: "Decisions grounded in real commercial realities and pricing structures — not textbook assumptions.",
    accent: "#d40000",
  },
];

export default function WhyArssa() {
  return (
    <>
      <SEO
        title="Why ARSSA | One Integrated Partner for the DRC"
        description="Why businesses choose ARSSA: an integrated model, reduced market-entry risk, faster operational setup, reliable local networks and practical market understanding."
        path="/why-arssa"
      />

      <PageHero
        eyebrow="The ARSSA Value Proposition"
        title="Why ARSSA"
        subtitle="One integrated partner instead of a chain of disconnected service providers — built specifically for the South Africa–DRC corridor."
        crumbs={[{ label: "Home", path: "/" }, { label: "Why ARSSA" }]}
      />

      {/* Six Reasons */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Core Advantages"
              title="Six Reasons Enterprises Choose ARSSA"
              description="Every advantage below addresses a critical point of failure that cross-border businesses encounter — providing a reliable, structured path to success."
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="divisions-grid">
            {REASONS.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.05}>
                <div className="card" style={{ padding: 34, height: "100%" }}>
                  <FeatureItem icon={r.icon} title={r.title} text={r.text} accent={r.accent} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Comparison Matrix: Fragmented Model vs ARSSA Integrated Model */}
          <ScrollReveal delay={0.15}>
            <div
              className="card"
              style={{
                marginTop: 56,
                padding: "44px 40px",
                background: "var(--card-bg)",
              }}
            >
              <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
                <p className="eyebrow eyebrow--navy" style={{ justifyContent: "center" }}>Comparison</p>
                <h3 style={{ fontSize: 24, marginBottom: 10 }}>The Fragmented Approach vs. ARSSA</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
                  See how an integrated partner protects your time, capital, and compliance posture.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="divisions-grid">
                <div
                  style={{
                    padding: 28,
                    borderRadius: "var(--radius)",
                    background: "var(--bg-paper-subtle)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h4 style={{ fontSize: 17, marginBottom: 16, color: "var(--brand-red)", display: "flex", alignItems: "center", gap: 8 }}>
                    <XCircle size={18} aria-hidden="true" />
                    Traditional Fragmented Model
                  </h4>
                  <ul style={{ display: "grid", gap: 12, fontSize: 14.5, color: "var(--ink-soft)" }}>
                    <li>• Managing 4–6 separate legal, freight, and marketing vendors</li>
                    <li>• Finger-pointing when customs or regulatory delays occur</li>
                    <li>• Uncoordinated timelines leading to demurrage &amp; missed sales</li>
                    <li>• Multiple markup fees and opaque cost structures</li>
                  </ul>
                </div>

                <div
                  style={{
                    padding: 28,
                    borderRadius: "var(--radius)",
                    background: "var(--bg-paper-2)",
                    border: "1.5px solid var(--gold)",
                  }}
                >
                  <h4 style={{ fontSize: 17, marginBottom: 16, color: "var(--green)", display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    The ARSSA Integrated Model
                  </h4>
                  <ul style={{ display: "grid", gap: 12, fontSize: 14.5, color: "var(--ink)" }}>
                    <li>• Single accountable partner from market entry to distribution</li>
                    <li>• Harmonised documentation preventing clearing hold-ups</li>
                    <li>• Direct alignment between marketing campaigns &amp; stock placement</li>
                    <li>• Transparent, structured scoping with predictable milestones</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Let's discuss your market strategy"
        text="A brief scoping session is the fastest way to evaluate whether ARSSA is the right strategic partner for your DRC expansion."
        primaryLabel="Let's Discuss Your Market Strategy"
        primaryPath="/enquiry"
        secondaryLabel="View Our Services"
        secondaryPath="/services"
      />
    </>
  );
}
