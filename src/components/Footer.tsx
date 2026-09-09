import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SERVICES, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light asAnchor={false} />
            <p>
              ARSSA is a South African-based business facilitation, market-growth and trade
              services company supporting enterprises operating between South Africa and the
              Democratic Republic of Congo.
            </p>
            <p className="footer__tagline">“{SITE.tagline}”</p>
          </div>

          <nav aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4>Services</h4>
            <ul className="footer__links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={SITE.emailHref}>{SITE.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>South Africa — serving the South Africa–DRC corridor</span>
              </li>
            </ul>
            <Link to="/enquiry" className="btn btn--accent btn--sm" style={{ marginTop: 8 }}>
              Request an Enquiry
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{SITE.copyright}</span>
          <nav className="footer__legal-links" aria-label="Legal">
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
