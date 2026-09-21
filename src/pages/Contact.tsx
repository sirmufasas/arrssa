import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/form/ContactForm";
import BusinessHours from "../components/BusinessHours";
import { SITE } from "../data/site";
import { useT, useTranslate } from "../context/LanguageContext";

export default function Contact() {
  const t = useT();
  const tr = useTranslate();

  return (
    <>
      <SEO
        title="Contact ARSSA | Phone, WhatsApp & Email"
        description="Get in touch with ARSSA — call or WhatsApp +27 672 794 750, or email info@agencerebiservicesa.co.za. We respond to all business enquiries."
        path="/contact"
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact ARSSA"
        subtitle="Reach our executive team by phone, WhatsApp or email — or send us a direct message below."
        crumbs={[{ label: "Home", path: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-grid__aside">
              <ScrollReveal>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 30, marginBottom: 24 }}>
                  {tr("Connect Directly")}
                </h2>
              </ScrollReveal>

              <div className="contact-cards">
                <ScrollReveal delay={0.04}>
                  <a href={SITE.phoneHref} className="contact-card contact-card--phone">
                    <span className="contact-card__icon">
                      <Phone size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <h4>{tr("Direct Telephone")}</h4>
                      <p translate="no">{SITE.phoneDisplay}</p>
                    </span>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.08}>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <span className="contact-card__icon">
                      <MessageCircle size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <h4>{tr("WhatsApp Corporate Desk")}</h4>
                      <p translate="no">{SITE.phoneDisplay}</p>
                    </span>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <a href={SITE.emailHref} className="contact-card contact-card--email">
                    <span className="contact-card__icon">
                      <Mail size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <h4>{tr("Email Correspondence")}</h4>
                      <p style={{ fontSize: 14.5, wordBreak: "break-all" }} translate="no">{SITE.email}</p>
                    </span>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.16}>
                  <BusinessHours />
                </ScrollReveal>
              </div>

              {/* Google Maps */}
              <ScrollReveal delay={0.2}>
                <div className="map-embed">
                  <div className="map-embed__header">
                    <MapPin size={18} aria-hidden="true" />
                    <div>
                      <h4>{tr("Where We Operate")}</h4>
                      <p>{t.footer.location}</p>
                    </div>
                  </div>
                  <iframe
                    title="ARSSA — South African operations map"
                    src="https://maps.google.com/maps?q=Johannesburg,+South+Africa&z=6&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="contact-grid__form">
              <ScrollReveal delay={0.1}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
