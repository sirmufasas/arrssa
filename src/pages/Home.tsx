import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";
import CTASection from "../components/CTASection";
import GoogleReviews from "../components/GoogleReviews";
import { SERVICES } from "../data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

function CorridorVisual() {
  return (
    <div className="corridor corridor--planet" role="img" aria-label="Africa globe with ARSSA branding">
      <div className="planet-glow" aria-hidden="true" />
      <img className="planet-photo" src="/africa-globe.png" alt="Africa seen on Earth from space" />
      <div className="planet-caption"><strong>ARSSA</strong><small>Africa in motion</small></div>
    </div>
  );
}

export default function Home() {
  const [selectedDivision, setSelectedDivision] = useState(SERVICES[0].slug);
  const currentSvc = SERVICES.find((s) => s.slug === selectedDivision) || SERVICES[0];

  return (
    <>
      <SEO
        title="ARSSA | Business Facilitation & Trade Services South Africa–DRC"
        description="ARSSA is a South African-based business facilitation, market-growth, and trade services company supporting enterprises operating between South Africa and the DRC."
        path="/"
      />

      {/* ---------- HERO SECTION (Immediate Rich Load) ---------- */}
      <section className="home-hero">
        <div className="home-hero__grid" aria-hidden="true" />
        <div className="home-hero__ambient-glow" aria-hidden="true" />

        <div className="container home-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="home-hero__tagline-badge">
              <span className="dot" />
              <span>South Africa ↔ DRC Commercial Corridor</span>
            </div>

            <h1>
              Your solution, <br />
              <span className="highlight-gold">right at your finger tips</span>
            </h1>

            <p className="home-hero__sub">
              ARSSA is a South African-based business facilitation, market-growth, and trade
              services company supporting enterprises operating between South Africa and the
              Democratic Republic of Congo.
            </p>

            <div className="home-hero__actions">
              <Link to="/services" className="btn btn--accent btn--lg">
                Explore Our Services
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/enquiry" className="btn btn--outline-light btn--lg">
                Start an Enquiry
              </Link>
            </div>

            <div className="home-hero__trust-strip">
              <div className="home-hero__trust-item">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Structured Compliance</span>
              </div>
              <div className="home-hero__trust-item">
                <Globe2 size={18} aria-hidden="true" />
                <span>Cross-Border Execution</span>
              </div>
              <div className="home-hero__trust-item">
                <Zap size={18} aria-hidden="true" />
                <span>Integrated Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <CorridorVisual />
          </motion.div>
        </div>
      </section>

      {/* ---------- ANIMATED STATS ---------- */}
      <section className="section" style={{ padding: "70px 0", background: "var(--bg-paper-subtle)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="stats" role="list" aria-label="ARSSA at a glance">
              <div role="listitem">
                <StatCounter value={4} label="Core Divisions" />
              </div>
              <div role="listitem">
                <StatCounter value={2} label="Countries Bridged" variant="gold" />
              </div>
              <div role="listitem">
                <StatCounter
                  value={1}
                  suffix=" Cross-Border"
                  label="Business Support"
                  variant="green"
                  displayText="Cross-Border"
                />
              </div>
              <div role="listitem">
                <StatCounter
                  value={1}
                  suffix=" Integrated"
                  label="Market Solutions"
                  variant="red"
                  displayText="Integrated"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- ABOUT ARSSA & SHOWCASE ---------- */}
      <section className="section section--paper">
        <div className="container split">
          <ScrollReveal>
            <div className="showcase-media">
              <img
                src="https://images.pexels.com/photos/33798862/pexels-photo-33798862.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Aerial view of the Sandton business district in Johannesburg, South Africa"
                loading="lazy"
              />
              <div className="showcase-media__overlay">
                <span className="showcase-media__tag">ARS S.A.R.L. South African Extension</span>
                <h3 className="showcase-media__title">Bridging Capital &amp; Opportunity</h3>
                <p className="showcase-media__desc">
                  Providing South African enterprises with deep local understanding and structured execution in the DRC.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow="About ARSSA"
                title="A structured partner for cross-border expansion"
                description="ARSSA is the South African extension of ARS S.A.R.L. in the DRC. The company integrates strategic marketing, business facilitation, compliance support, distribution, import/export support, and trade services."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="lead" style={{ fontSize: 16, marginBottom: 24 }}>
                With particular experience and focus across:
              </p>
              <div className="badge-row" style={{ marginBottom: 32 }}>
                {[
                  "Pharmaceutical",
                  "Medical",
                  "Cosmetic",
                  "Agri-food",
                  "Agricultural",
                  "Corporate Supply",
                ].map((s) => (
                  <span key={s} className="badge">
                    <CheckCircle2 size={14} color="var(--green)" aria-hidden="true" />
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn--primary">
                  Discover ARSSA
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/why-arssa" className="btn btn--ghost">
                  Why Choose Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- FOUR CORE DIVISIONS CARDS ---------- */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow="Our Divisions"
              title="Four Core Divisions. One Integrated Partner."
              description="Each division solves a distinct operational challenge across market entry, commercial growth, cross-border logistics, and operational compliance."
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }} className="divisions-grid">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.08}>
                <ServiceCard service={svc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTERACTIVE DIVISION EXPLORER ---------- */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Interactive Capability Explorer"
              title="Explore what each division delivers"
              description="Click through our service lines to see how ARSSA coordinates each phase of your cross-border journey."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="capability-tabs">
              <div className="tab-nav" role="tablist" aria-label="Division tabs">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    role="tab"
                    aria-selected={selectedDivision === s.slug}
                    className={`tab-btn ${selectedDivision === s.slug ? "active" : ""}`}
                    onClick={() => setSelectedDivision(s.slug)}
                  >
                    {s.number} — {s.shortTitle}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSvc.slug}
                  className="tab-panel"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: currentSvc.accent,
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      Division {currentSvc.number} Overview
                    </span>
                    <h3 style={{ fontSize: 26, marginBottom: 12 }}>{currentSvc.title}</h3>
                    <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
                      {currentSvc.subtitle}
                    </p>
                    <p style={{ color: "var(--ink)", fontSize: 15.5, lineHeight: 1.6, marginBottom: 28 }}>
                      {currentSvc.description}
                    </p>
                    <Link to={currentSvc.path} className="btn btn--primary">
                      Explore Division Details
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>

                  <div
                    style={{
                      background: "var(--bg-paper-2)",
                      borderRadius: "var(--radius)",
                      padding: 30,
                      border: "1px solid var(--line)",
                    }}
                  >
                    <h4 style={{ fontSize: 16, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                      <Sparkles size={16} color="var(--brand-gold)" aria-hidden="true" />
                      Key Capabilities &amp; Focus Areas
                    </h4>
                    <ul className="check-list">
                      {currentSvc.preview.map((p) => (
                        <li key={p}>
                          <CheckCircle2 size={16} color="var(--green)" aria-hidden="true" />
                          <span style={{ fontWeight: 500 }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- SECTORS HIGHLIGHT STRIP ---------- */}
      <section className="section--navy-deep section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
            <ScrollReveal>
              <div>
                <p className="eyebrow eyebrow--light">Regulated Sector Focus</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3.2vw, 36px)", fontWeight: 600, maxWidth: 540 }}>
                  Built for sectors where compliance &amp; precision are non-negotiable
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="badge-row">
                <span className="badge">
                  <Building2 size={15} color="var(--gold)" aria-hidden="true" /> Pharmaceutical &amp; Medical
                </span>
                <span className="badge">
                  <BarChart3 size={15} color="var(--gold)" aria-hidden="true" /> Cosmetic Products
                </span>
                <span className="badge">
                  <Globe2 size={15} color="var(--gold)" aria-hidden="true" /> Agri-Food &amp; Agricultural
                </span>
                <span className="badge">
                  <Layers size={15} color="var(--gold)" aria-hidden="true" /> Corporate Supply Chain
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- GOOGLE REVIEWS ---------- */}
      <GoogleReviews />

      {/* ---------- FINAL CTA ---------- */}
      <CTASection
        headline="Ready to explore the DRC market?"
        text="ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the South Africa–DRC corridor."
        primaryLabel="Start an Enquiry"
        secondaryLabel="Contact ARSSA"
      />
    </>
  );
}
