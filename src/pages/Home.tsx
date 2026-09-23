import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Layers,
  MapPin,
  Share2,
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
import { useLanguage, useT, useTranslate } from "../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

function CorridorVisual({ caption }: { caption: string }) {
  return (
    <div className="corridor corridor--planet" role="img" aria-label="Africa globe with ARSSA branding">
      <div className="planet-glow" aria-hidden="true" />
      <img
        className="planet-photo planet-photo--unity"
        src="/arssa-unity-globe.jpg"
        alt="Hands from many nations holding a map of Africa bearing the ARSSA logo"
      />
      <div className="planet-caption">
        <strong translate="no">ARSSA</strong>
        <small>{caption}</small>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedDivision, setSelectedDivision] = useState(SERVICES[0].slug);
  const t = useT();
  const tr = useTranslate();

  const currentSvc = SERVICES.find((s) => s.slug === selectedDivision) || SERVICES[0];
  const currentDivTrans = Array.isArray(t.divisions)
    ? t.divisions.find((d) => d.slug === selectedDivision)
    : undefined;

  const displayTitle = currentDivTrans?.title || currentSvc.title;
  const displaySubtitle = currentDivTrans?.subtitle || currentSvc.subtitle;
  const displayDesc = currentDivTrans?.description || currentSvc.description;
  const displayPreview = currentDivTrans?.preview || currentSvc.preview;

  return (
    <>
      <SEO
        title="ARSSA | Business Facilitation & Trade Services DRC–Southern Africa"
        description={t.hero.sub}
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
              <span>{t.hero.badge}</span>
            </div>

            <h1>
              {t.hero.headline1} <br />
              <span className="highlight-gold">{t.hero.headlineGold}</span>
            </h1>

            <p className="home-hero__sub">{t.hero.sub}</p>

            <div className="home-hero__actions">
              <Link to="/services" className="btn btn--accent btn--lg">
                {t.hero.exploreServices}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/enquiry" className="btn btn--outline-light btn--lg">
                {t.hero.startEnquiry}
              </Link>
            </div>

            <div className="home-hero__trust-strip">
              <div className="home-hero__trust-item">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>{t.hero.compliance}</span>
              </div>
              <div className="home-hero__trust-item">
                <Globe2 size={18} aria-hidden="true" />
                <span>{t.hero.execution}</span>
              </div>
              <div className="home-hero__trust-item">
                <Zap size={18} aria-hidden="true" />
                <span>{t.hero.support}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <CorridorVisual caption={t.hero.planetCaption} />
          </motion.div>
        </div>
      </section>

      {/* ---------- ANIMATED STATS ---------- */}
      <section className="section" style={{ padding: "70px 0", background: "var(--bg-paper-subtle)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="stats" role="list" aria-label="ARSSA at a glance">
              <div role="listitem">
                <StatCounter
                  value={5}
                  label={tr("Core Divisions")}
                  variant="blue"
                  iconVariant="blue"
                  icon={<Layers size={26} strokeWidth={1.8} />}
                />
              </div>
              <div role="listitem">
                <StatCounter
                  displayText={
                    <>
                      <span>DRC</span>
                      <span className="stat__val-plus">+</span>
                      <span>SA</span>
                    </>
                  }
                  label={tr("Established Presence")}
                  variant="white"
                  iconVariant="gold"
                  icon={<MapPin size={26} strokeWidth={1.8} />}
                />
              </div>
              <div role="listitem">
                <StatCounter
                  displayText="SADC"
                  label={tr("Regional Reach")}
                  variant="white"
                  iconVariant="green"
                  icon={<Share2 size={26} strokeWidth={1.8} />}
                />
              </div>
              <div role="listitem">
                <StatCounter
                  displayText="B2B"
                  label={tr("Cross-Border Facilitation")}
                  variant="white"
                  iconVariant="blue"
                  icon={<Handshake size={26} strokeWidth={1.8} />}
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
                src="/arssa-boardroom.jpg"
                alt="A cross-border business meeting in a modern boardroom overlooking the city"
                loading="lazy"
              />
              <div className="showcase-media__overlay">
                <span className="showcase-media__tag"><strong translate="no">ARS S.A.R.L.</strong> {tr("Southern African Extension")}</span>
                <h3 className="showcase-media__title">{t.corridor.lead}</h3>
                <p className="showcase-media__desc">{t.corridor.desc}</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow={t.nav.about}
                title={t.corridor.lead}
                description="Headquartered in the Democratic Republic of Congo with an established South African presence, ARSSA connects businesses, suppliers and opportunities between the DRC and Southern Africa, with South Africa serving as a key regional sourcing and commercial hub."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="badge-row" style={{ marginTop: 20, marginBottom: 32 }}>
                {[
                  "Pharmaceutical",
                  "Medical",
                  "Cosmetic",
                  "Agri-food",
                  "Agricultural",
                  "Mining",
                  "Corporate Supply",
                ].map((s) => (
                  <span key={s} className="badge">
                    <CheckCircle2 size={14} color="var(--green)" aria-hidden="true" />
                    {tr(s)}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn--primary">
                  {t.nav.about}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/why-arssa" className="btn btn--ghost">
                  {t.nav.why}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------- FIVE CORE DIVISIONS CARDS ---------- */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow={t.divisionsSection.badge}
              title={t.divisionsSection.title}
              description={t.divisionsSection.subtitle}
            />
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
            className="divisions-grid"
          >
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
              eyebrow={t.divisionsSection.badge}
              title={t.divisionsSection.title}
              description={t.divisionsSection.subtitle}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="capability-tabs">
              <div className="tab-nav" role="tablist" aria-label="Division tabs">
                {SERVICES.map((s) => {
                  const divT = Array.isArray(t.divisions)
                    ? t.divisions.find((d) => d.slug === s.slug)
                    : undefined;
                  const short = divT?.shortTitle || s.shortTitle;
                  return (
                    <button
                      key={s.slug}
                      type="button"
                      role="tab"
                      aria-selected={selectedDivision === s.slug}
                      className={`tab-btn ${selectedDivision === s.slug ? "active" : ""}`}
                      onClick={() => setSelectedDivision(s.slug)}
                    >
                      {s.number} — {short}
                    </button>
                  );
                })}
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
                      {currentSvc.number} · {displayTitle}
                    </span>
                    <h3 style={{ fontSize: 26, marginBottom: 12 }}>{displayTitle}</h3>
                    <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
                      {displaySubtitle}
                    </p>
                    <p style={{ color: "var(--ink)", fontSize: 15.5, lineHeight: 1.6, marginBottom: 28 }}>
                      {displayDesc}
                    </p>
                    <Link to={currentSvc.path} className="btn btn--primary">
                      {t.hero.exploreServices}
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
                    <h4
                      style={{
                        fontSize: 16,
                        marginBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Sparkles size={16} color="var(--brand-gold)" aria-hidden="true" />
                      {tr("Key Capabilities & Focus Areas")}
                    </h4>
                    <ul className="check-list">
                      {displayPreview.map((p) => (
                        <li key={p}>
                          <CheckCircle2 size={16} color="var(--green)" aria-hidden="true" />
                          <span style={{ fontWeight: 500 }}>{tr(p)}</span>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <ScrollReveal>
              <div>
                <p className="eyebrow eyebrow--light">{t.corridor.eyebrow}</p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px, 3.2vw, 36px)",
                    fontWeight: 600,
                    maxWidth: 540,
                  }}
                >
                  {t.corridor.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 480, marginTop: 12 }}>
                  {t.corridor.desc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="badge-row">
                <span className="badge">
                  <Building2 size={15} color="var(--gold)" aria-hidden="true" /> {tr("Pharmaceutical & Medical")}
                </span>
                <span className="badge">
                  <BarChart3 size={15} color="var(--gold)" aria-hidden="true" /> {tr("Cosmetic Products")}
                </span>
                <span className="badge">
                  <Globe2 size={15} color="var(--gold)" aria-hidden="true" /> {tr("Agri-Food & Agricultural")}
                </span>
                <span className="badge">
                  <Layers size={15} color="var(--gold)" aria-hidden="true" /> {tr("Mining & Resources")}
                </span>
                <span className="badge">
                  <Layers size={15} color="var(--gold)" aria-hidden="true" /> {tr("Corporate Supply Chain")}
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
        headline={t.cta.headline}
        text={t.cta.text}
        primaryLabel={t.cta.primary}
        secondaryLabel={t.cta.secondary}
      />
    </>
  );
}
