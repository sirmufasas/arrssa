import { Link } from "react-router-dom";
import { ArrowRight, Compass, Eye, Handshake, Target } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import GoogleReviews from "../components/GoogleReviews";
import { FeatureItem } from "../components/AboutSections";
import { useT, useTranslate } from "../context/LanguageContext";

const APPROACH = [
  {
    icon: Compass,
    title: "Practical execution",
    text: "Solutions designed around what actually works on the ground in the DRC — not theoretical models.",
  },
  {
    icon: Target,
    title: "Compliance",
    text: "Structured, documented and regulator-aware processes across every step of your engagement.",
  },
  {
    icon: Handshake,
    title: "Local understanding",
    text: "Deep working knowledge of commercial practices, authorities and business realities in the DRC.",
  },
  {
    icon: Eye,
    title: "Strategic partnerships",
    text: "Leveraging vetted local relationships and distribution networks to open doors and mitigate risks.",
  },
  {
    icon: Compass,
    title: "Market development",
    text: "Building enduring brand visibility, demand creation, and field placement that sustain expansion.",
  },
  {
    icon: Handshake,
    title: "Long-term relationships",
    text: "We measure our success by the durability and growth of the corporate relationships we build.",
  },
];

const VALUES = [
  {
    num: "01",
    title: "Integrity",
    text: "Ethical, compliant and transparent cross-border practices in everything we execute.",
  },
  {
    num: "02",
    title: "Transparency",
    text: "Clear processes, upfront cost structures and systematic documentation across all mandates.",
  },
  {
    num: "03",
    title: "Professionalism & Consistency",
    text: "High operational standards and disciplined project management delivered every time.",
  },
  {
    num: "04",
    title: "Responsiveness",
    text: "Agility and timely action — cross-border opportunities require swift, reliable execution.",
  },
  {
    num: "05",
    title: "Partner-Centric Commitment",
    text: "Long-term reliability and measurable impact tailored to your corporate expansion goals.",
  },
];

export default function About() {
  const t = useT();
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="About ARSSA | Cross-Border Business Facilitation DRC & Southern Africa"
        description="Learn about ARSSA — the Southern African extension of ARS S.A.R.L. Headquartered in the DRC with an established South African presence, connecting businesses across Southern Africa."
        path="/about"
      />

      <PageHero
        eyebrow="Who We Are"
        title="About ARSSA"
        subtitle="Headquartered in the Democratic Republic of Congo with an established South African presence, ARSSA connects businesses, suppliers and opportunities between the DRC and Southern Africa."
        crumbs={[{ label: "Home", path: "/" }, { label: "About" }]}
      />

      {/* Who we are & What we do */}
      <section className="section">
        <div className="container split">
          <ScrollReveal>
            <div className="showcase-media">
              <img
                src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Corporate advisory and strategic cross-border facilitation meeting"
                loading="lazy"
              />
              <div className="showcase-media__overlay">
                <span className="showcase-media__tag">{tr("Strategic Partnership")}</span>
                <h3 className="showcase-media__title">{tr("Bridging Realities")}</h3>
                <p className="showcase-media__desc">
                  {tr("Providing corporate entities with direct access, regulatory clarity, and dependable on-the-ground support.")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow={tr("Who We Are")}
                title={tr("The Southern African extension of ARS S.A.R.L.")}
                description={tr("ARSSA is the Southern African extension of ARS S.A.R.L., headquartered in the Democratic Republic of Congo, with an established operational presence in South Africa. We connect businesses across Southern Africa with opportunities in the DRC, providing a structured and accountable partner for navigating cross-border operations and market entry.")}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>{tr("What We Do")}</h3>
              <p className="lead" style={{ fontSize: 16, marginBottom: 24 }}>
                {tr("We help businesses navigate the practical challenges of entering and operating in the DRC — from feasibility, registration, and regulatory mapping through workforce mobility, distributor placement, and cross-border trade facilitation.")}
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, marginBottom: 28, lineHeight: 1.65 }}>
                {tr("Rather than managing a fragmented chain of separate consultants, freight agents, and local facilitators, our clients work with one integrated partner that coordinates the full expansion lifecycle.")}
              </p>
              <Link to="/services" className="btn btn--primary">
                {t.hero.exploreServices}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow={tr("Our Approach")}
              title={tr("How We Deliver Results")}
              description={tr("Disciplined, practical, and relationship-driven — our approach is built specifically for the realities of cross-border commerce.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="divisions-grid">
            {APPROACH.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.05}>
                <div className="card" style={{ padding: 28, height: "100%" }}>
                  <FeatureItem icon={a.icon} title={tr(a.title)} text={tr(a.text)} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--navy">
        <div className="container">
          <div className="split">
            <ScrollReveal>
              <div
                className="card"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  padding: 44,
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="eyebrow eyebrow--light">{tr("Vision")}</p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 22,
                    lineHeight: 1.6,
                    color: "#ffffff",
                  }}
                >
                  &ldquo;{tr("To be the leading partner that simplifies and strengthens cross-border business between the DRC and Southern Africa, empowering pharmaceutical, cosmetic, agri-food, and mining companies to expand with confidence.")}&rdquo;
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="card"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  padding: 44,
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="eyebrow eyebrow--light">{tr("Mission")}</p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 22,
                    lineHeight: 1.6,
                    color: "#ffffff",
                  }}
                >
                  &ldquo;{tr("To enable businesses to establish, operate and grow in the DRC through structured, compliant and results-driven facilitation, while strengthening trade and commercial connections between the DRC and regional and international markets.")}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow={tr("Core Values")}
              title={tr("The Principles Behind Every Engagement")}
              description={tr("These values govern our operations, client relationships, and cross-border integrity.")}
            />
          </ScrollReveal>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.05}>
                <div className="value-card">
                  <span className="value-card__num" aria-hidden="true">
                    {v.num}
                  </span>
                  <div>
                    <h3>{tr(v.title)}</h3>
                    <p>{tr(v.text)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      <CTASection
        headline={tr("Ready to discuss your cross-border strategy?")}
        text={tr("Whether you are assessing market entry or expanding existing operations in the DRC, ARSSA provides the structure and execution you need.")}
        primaryLabel={t.cta.primary}
        secondaryLabel={t.hero.exploreServices}
        secondaryPath="/services"
      />
    </>
  );
}
