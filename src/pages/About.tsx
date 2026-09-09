import { Link } from "react-router-dom";
import { ArrowRight, Compass, Eye, Handshake, Target } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import GoogleReviews from "../components/GoogleReviews";
import { FeatureItem } from "../components/AboutSections";

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
  return (
    <>
      <SEO
        title="About ARSSA | South Africa–DRC Business Facilitation"
        description="Learn about ARSSA — the South African extension of ARS S.A.R.L. Our approach, vision, mission and core values for cross-border business between South Africa and the DRC."
        path="/about"
      />

      <PageHero
        eyebrow="Who We Are"
        title="About ARSSA"
        subtitle="Agence Rebi Service South Africa — the South African extension of ARS S.A.R.L. in the DRC, built to simplify and strengthen cross-border business."
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
                <span className="showcase-media__tag">Strategic Partnership</span>
                <h3 className="showcase-media__title">Bridging Realities</h3>
                <p className="showcase-media__desc">
                  Providing corporate entities with direct access, regulatory clarity, and dependable on-the-ground support.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Who We Are"
                title="The South African extension of ARS S.A.R.L."
                description="ARSSA is the South African extension of ARS S.A.R.L. in the Democratic Republic of Congo. We exist to give South African businesses a structured, experienced, and accountable partner for operating across the corridor."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>What We Do</h3>
              <p className="lead" style={{ fontSize: 16, marginBottom: 24 }}>
                We help businesses navigate the practical challenges of entering and operating
                in the DRC — from feasibility, registration, and regulatory mapping through
                workforce mobility, distributor placement, and cross-border trade facilitation.
              </p>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, marginBottom: 28, lineHeight: 1.65 }}>
                Rather than managing a fragmented chain of separate consultants, freight agents,
                and local facilitators, our clients work with one integrated partner that
                coordinates the full expansion lifecycle.
              </p>
              <Link to="/services" className="btn btn--primary">
                Explore Our Services
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
              eyebrow="Our Approach"
              title="How We Deliver Results"
              description="Disciplined, practical, and relationship-driven — our approach is built specifically for the realities of cross-border commerce."
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="divisions-grid">
            {APPROACH.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.05}>
                <div className="card" style={{ padding: 28, height: "100%" }}>
                  <FeatureItem icon={a.icon} title={a.title} text={a.text} />
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
                <p className="eyebrow eyebrow--light">Vision</p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 22,
                    lineHeight: 1.6,
                    color: "#ffffff",
                  }}
                >
                  “To be the leading partner that simplifies and strengthens cross-border
                  business between South Africa and the DRC, empowering pharmaceutical,
                  cosmetic, and agri-food companies to expand with confidence.”
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
                <p className="eyebrow eyebrow--light">Mission</p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 22,
                    lineHeight: 1.6,
                    color: "#ffffff",
                  }}
                >
                  “To provide structured, ethical, practical, and results-driven solutions
                  helping SA companies establish, operate, and grow in the DRC through
                  compliant facilitation, strategic market development, and integrated trade
                  support.”
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
              eyebrow="Core Values"
              title="The Principles Behind Every Engagement"
              description="These values govern our operations, client relationships, and cross-border integrity."
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
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
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
        headline="Ready to discuss your cross-border strategy?"
        text="Whether you are assessing market entry or expanding existing operations in the DRC, ARSSA provides the structure and execution you need."
        primaryLabel="Start an Enquiry"
        secondaryLabel="Explore Our Services"
        secondaryPath="/services"
      />
    </>
  );
}
