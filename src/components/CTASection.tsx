import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  headline?: string;
  text?: string;
  primaryLabel?: string;
  primaryPath?: string;
  secondaryLabel?: string;
  secondaryPath?: string;
}

export default function CTASection({
  headline = "Ready to explore the DRC market?",
  text = "ARSSA provides practical, integrated support for businesses seeking to establish, operate and grow across the South Africa–DRC corridor.",
  primaryLabel = "Start an Enquiry",
  primaryPath = "/enquiry",
  secondaryLabel = "Contact ARSSA",
  secondaryPath = "/contact",
}: CTASectionProps) {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="cta-band">
            <div className="cta-band__inner">
              <h2>{headline}</h2>
              <p>{text}</p>
              <div className="cta-band__actions">
                <Link to={primaryPath} className="btn btn--accent btn--lg">
                  {primaryLabel}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to={secondaryPath} className="btn btn--outline-light btn--lg">
                  {secondaryLabel}
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
