import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useT } from "../context/LanguageContext";

interface CTASectionProps {
  headline?: string;
  text?: string;
  primaryLabel?: string;
  primaryPath?: string;
  secondaryLabel?: string;
  secondaryPath?: string;
}

export default function CTASection({
  headline,
  text,
  primaryLabel,
  primaryPath = "/enquiry",
  secondaryLabel,
  secondaryPath = "/contact",
}: CTASectionProps) {
  const t = useT();

  const finalHeadline = headline || t.cta?.headline || "Ready to explore the DRC market?";
  const finalText = text || t.cta?.text || "ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the South Africa (SADAC)–DRC corridor.";
  const finalPrimary = primaryLabel || t.cta?.primary || "Start an Enquiry";
  const finalSecondary = secondaryLabel || t.cta?.secondary || "Contact ARSSA";

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="cta-band">
            <div className="cta-band__inner">
              <h2>{finalHeadline}</h2>
              <p>{finalText}</p>
              <div className="cta-band__actions">
                <Link to={primaryPath} className="btn btn--accent btn--lg">
                  {finalPrimary}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to={secondaryPath} className="btn btn--outline-light btn--lg">
                  {finalSecondary}
                  <Phone size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
