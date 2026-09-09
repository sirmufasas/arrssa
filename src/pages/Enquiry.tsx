import { CheckCircle2, Clock, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import EnquiryForm from "../components/form/EnquiryForm";
import { SITE } from "../data/site";

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Submit your enquiry",
    text: "Share your expansion objectives, industry sector, and estimated project scope.",
  },
  {
    icon: ShieldCheck,
    title: "We assess the fit",
    text: "Our team reviews your regulatory and operational requirements against our capabilities.",
  },
  {
    icon: Clock,
    title: "You receive a structured roadmap",
    text: "We respond with a practical recommendation, clear deliverables, and next steps — with zero obligation.",
  },
];

export default function Enquiry() {
  return (
    <>
      <SEO
        title="Start Your Enquiry | ARSSA"
        description="Tell us what you need and our team will assess how ARSSA can support your objectives. Request a business facilitation, market growth, trade or compliance enquiry."
        path="/enquiry"
      />

      <PageHero
        eyebrow="Direct Engagement"
        title="Start Your Enquiry"
        subtitle="Tell us what you need and our team will assess how ARSSA can support your corporate objectives."
        crumbs={[{ label: "Home", path: "/" }, { label: "Enquiry" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid contact-grid--enquiry">
            <div className="contact-grid__aside">
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 30, marginBottom: 16 }}>
                  How We Work Together
                </h2>
                <p className="lead" style={{ fontSize: 16, marginBottom: 32 }}>
                  Every corporate enquiry is reviewed directly by our management team. We respond
                  with an honest evaluation of how ARSSA can de-risk and accelerate your goals.
                </p>
              </ScrollReveal>

              <div style={{ display: "grid", gap: 18 }}>
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <ScrollReveal key={s.title} delay={i * 0.06}>
                      <div className="card" style={{ padding: "24px 26px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                        <span
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "var(--radius-sm)",
                            background: "var(--bg-paper-2)",
                            color: "var(--navy)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            border: "1px solid var(--line)",
                          }}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 style={{ fontSize: 17, marginBottom: 6 }}>
                            {i + 1}. {s.title}
                          </h3>
                          <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              <ScrollReveal delay={0.15}>
                <div
                  className="card"
                  style={{
                    marginTop: 28,
                    padding: "26px 28px",
                    background: "var(--bg-paper)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <CheckCircle2 size={18} color="var(--green)" aria-hidden="true" />
                    <h3 style={{ fontSize: 16 }}>Prefer Direct Communication?</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 16, lineHeight: 1.5 }}>
                    You can contact our team directly via telephone, WhatsApp or email before submitting a formal scope.
                  </p>
                  <div style={{ display: "grid", gap: 8 }}>
                    <a
                      href={SITE.emailHref}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: "var(--brand-navy)",
                      }}
                    >
                      <Mail size={16} color="var(--gold)" aria-hidden="true" />
                      {SITE.email}
                    </a>
                    <a
                      href={SITE.phoneHref}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: "var(--brand-navy)",
                      }}
                    >
                      <Clock size={16} color="var(--green)" aria-hidden="true" />
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="contact-grid__form">
              <ScrollReveal delay={0.08}>
                <EnquiryForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
