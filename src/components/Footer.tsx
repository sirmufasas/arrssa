import { Link } from "react-router-dom";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SERVICES, SITE } from "../data/site";
import { useLanguage, useT } from "../context/LanguageContext";

export default function Footer() {
  const { currentLanguageMeta, setShowLanguageModal } = useLanguage();
  const t = useT();

  const navLabels: Record<string, string> = {
    Home: t.home,
    About: t.about,
    Services: t.services,
    Markets: t.markets,
    "Why ARSSA": t.why,
    Legacy: t.legacy,
    Enquiry: t.enquiry,
    Contact: t.contact,
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light asAnchor={false} />
            <p>{t.footer.desc}</p>
            <p className="footer__tagline" translate="no">&ldquo;{SITE.tagline}&rdquo;</p>

            <button
              type="button"
              className="footer__lang-btn"
              onClick={() => setShowLanguageModal(true)}
              aria-label={t.footer.changeLang}
            >
              <Globe size={15} aria-hidden="true" />
              <span>{currentLanguageMeta.flag} {currentLanguageMeta.nativeName} ({currentLanguageMeta.code.toUpperCase()})</span>
              <span className="footer__lang-badge">{t.footer.changeLang}</span>
            </button>
          </div>

          <nav aria-label="Quick links">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{navLabels[l.label] ?? l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4>{t.footer.services}</h4>
            <ul className="footer__links">
              {SERVICES.map((s) => {
                const divTrans = Array.isArray(t.divisions)
                  ? t.divisions.find((d) => d.slug === s.slug)
                  : undefined;
                const title = divTrans?.title || s.title;
                return (
                  <li key={s.slug}>
                    <Link to={s.path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h4>{t.footer.contact}</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={16} aria-hidden="true" />
                <a href={SITE.phoneHref} translate="no">{SITE.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={SITE.emailHref} translate="no">{SITE.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
            <Link to="/enquiry" className="btn btn--accent btn--sm" style={{ marginTop: 8 }}>
              {t.enquiry}
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t.footer.rights || SITE.copyright}</span>
          <nav className="footer__legal-links" aria-label="Legal">
            <Link to="/terms">{t.footer.terms}</Link>
            <Link to="/privacy">{t.footer.privacy}</Link>
            <Link to="/cookies">{t.footer.cookies}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
