import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { FeatureItem } from "../components/AboutSections";
import { SERVICES } from "../data/site";
import { useT, useTranslate } from "../context/LanguageContext";

const MODEL = [
  {
    icon: Layers,
    title: "One Integrated Model",
    text: "Facilitation, compliance, marketing, distribution, and trade execution — all coordinated under a single accountable partner.",
    accent: "#1a3160",
  },
  {
    icon: Zap,
    title: "Coordinated Execution",
    text: "Every division is built to seamlessly hand off work to the next, removing the friction and blame that happen between disparate agencies.",
    accent: "#d40000",
  },
  {
    icon: ShieldCheck,
    title: "Sectors Demanding Rigor",
    text: "Deep domain focus in pharmaceutical, medical, cosmetic, agri-food, agricultural inputs, and regulated corporate supply chains.",
    accent: "#009639",
  },
];

export default function Services() {
  const t = useT();
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="ARSSA Services | Business Facilitation, Trade & Market Growth"
        description="Explore ARSSA's five core divisions: Business Facilitation, Market Growth & Distribution, Import & Export, Mining & Resources, and Maintenance, Cleaning & Compliance — one integrated partner for the South Africa (SADAC)–DRC corridor."
        path="/services"
      />

      <PageHero
        eyebrow="Our Capabilities"
        title="Integrated Services for the Corridor"
        subtitle="Five specialised divisions operating in unison — covering everything from market entry and compliance to distribution and cross-border trade."
        crumbs={[{ label: "Home", path: "/" }, { label: "Services" }]}
      />

      {/* Integrated Model */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              eyebrow={tr("The Integrated Model")}
              title={tr("Why One Partner Outperforms Fragmented Agencies")}
              description={tr("Cross-border expansion commonly stalls when disconnected service providers drop the ball. ARSSA integrates the full value chain to protect your capital and accelerate your timeline.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="divisions-grid">
            {MODEL.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.06}>
                <div className="card" style={{ padding: 32, height: "100%" }}>
                  <FeatureItem icon={m.icon} title={tr(m.title)} text={tr(m.text)} accent={m.accent} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Five Divisions */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <SectionHeading
              center
              eyebrow={tr("Our Five Divisions")}
              title={tr("Comprehensive Cross-Border Solutions")}
              description={tr("Each division can be deployed individually or combined into an end-to-end operational roadmap.")}
            />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }} className="divisions-grid">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.slug} delay={i * 0.07}>
                <ServiceCard service={svc} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div
              className="card"
              style={{
                marginTop: 48,
                padding: "36px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
                background: "var(--card-bg)",
              }}
            >
              <div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>{tr("Need a tailored combination of divisions?")}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15, maxWidth: 540 }}>
                  {tr("We assess your exact project requirements and structure a scope that covers your specific regulatory, commercial, and trade needs.")}
                </p>
              </div>
              <Link to="/enquiry" className="btn btn--accent btn--lg">
                {tr("Request a Custom Scope")}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector Support */}
      <section className="section">
        <div className="container">
          <div className="split">
            <ScrollReveal>
              <div className="showcase-media">
                <img
                  src="https://images.pexels.com/photos/33401363/pexels-photo-33401363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Cross-border logistics and trade facilitation operations"
                  loading="lazy"
                />
                <div className="showcase-media__overlay">
                  <span className="showcase-media__tag">{tr("Corridor Execution")}</span>
                  <h3 className="showcase-media__title">{tr("From Port to Distribution")}</h3>
                  <p className="showcase-media__desc">
                    {tr("Comprehensive compliance, freight coordination, and last-mile placement in the DRC.")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <SectionHeading
                  eyebrow={tr("Target Sectors")}
                  title={tr("Sector Specialisation Across Key Industries")}
                  description={tr("We tailor each division's execution to the regulatory frameworks, channel structures, and storage requirements of your specific product vertical.")}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <ul className="check-list" style={{ marginTop: 24, gap: 16 }}>
                  <li>
                    <CheckCircle2 size={18} color="var(--green)" aria-hidden="true" />
                    <div>
                      <strong>Pharmaceutical &amp; Medical:</strong> {tr("Import authorizations, sanitary registrations, temperature-controlled distribution, and medical-grade facility maintenance.")}
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--green)" aria-hidden="true" />
                    <div>
                      <strong>Cosmetic &amp; Personal Care:</strong> {tr("Retailer network placement, promotional campaigns, local brand registration, and consumer demand generation.")}
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--green)" aria-hidden="true" />
                    <div>
                      <strong>Agri-Food &amp; Agricultural Inputs:</strong> {tr("Sanitary import clearances, cold chain logistics, bulk supply contracts, and wholesale grocery placement.")}
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--green)" aria-hidden="true" />
                    <div>
                      <strong>Corporate &amp; Industrial Supply:</strong> {tr("Document management, workforce mobility, and regional representative support.")}
                    </div>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={tr("Ready to discuss your expansion requirements?")}
        text={tr("Tell us about your products or operational goals, and our team will prepare a structured scoping review.")}
        primaryLabel={t.cta.primary}
        secondaryLabel={t.nav.contact}
        secondaryPath="/contact"
      />
    </>
  );
}
