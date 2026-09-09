import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  Globe,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SERVICES } from "../data/site";
import { useLanguage, useT } from "../context/LanguageContext";

const ICONS: Record<string, React.ComponentType<{ size?: number | string }>> = {
  briefcase: Briefcase,
  trend: TrendingUp,
  globe: Globe,
  wrench: Wrench,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const reduced = useReducedMotion();
  const { language, setLanguage } = useLanguage();
  const t = useT();
  const navLabels: Record<string, string> = { Home: t.home, About: t.about, Services: t.services, Markets: t.markets, "Why ARSSA": t.why, Legacy: t.legacy };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const servicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <Logo size="md" light={false} />

          <nav className="navbar__links" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.path} className="nav-dropdown">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive || servicesActive ? "active" : ""}`
                    }
                    aria-haspopup="true"
                  >
                    {navLabels[link.label] ?? link.label}
                    <ChevronDown size={13} className="nav-link__chevron" aria-hidden="true" />
                  </NavLink>
                  <div className="nav-dropdown__menu" role="menu" aria-label="Services Menu">
                    <div className="nav-dropdown__header">
                      <span>Our Divisions</span>
                    </div>
                    {SERVICES.map((svc) => {
                      const Icon = ICONS[svc.icon];
                      return (
                        <Link
                          key={svc.slug}
                          to={svc.path}
                          className="nav-dropdown__item"
                          role="menuitem"
                        >
                          <span
                            className="nav-dropdown__icon"
                            style={{ ["--icon-accent" as string]: svc.accent }}
                          >
                            <Icon size={16} />
                          </span>
                          <span className="nav-dropdown__text">
                            <span className="nav-dropdown__label">{svc.title}</span>
                            <span className="nav-dropdown__sub">{svc.subtitle}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                >
                  {navLabels[link.label] ?? link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="navbar__actions">
            <div className="language-toggle" role="group" aria-label="Language">
              <button type="button" className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
              <span>/</span>
              <button type="button" className={language === "fr" ? "active" : ""} onClick={() => setLanguage("fr")} aria-pressed={language === "fr"}>FR</button>
            </div>
            <ThemeToggle />
            <Link to="/enquiry" className="btn btn--accent btn--sm navbar__cta-desktop">
              {t.enquiry}
            </Link>
            <button
              className={`navbar__burger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile Navigation"
            initial={reduced ? { opacity: 0 } : { y: -16, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: -16, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu__header">
              <span className="mobile-menu__theme-label">Appearance</span>
              <ThemeToggle showLabel />
            </div>

            <ul className="mobile-menu__list">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <li key={link.path} className="mobile-menu__item">
                    <button
                      type="button"
                      className={`mobile-menu__link ${servicesActive ? "active" : ""}`}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services"
                    >
                      <span>{navLabels[link.label] ?? link.label}</span>
                      <ChevronRight
                        size={17}
                        style={{
                          transform: servicesOpen ? "rotate(90deg)" : "none",
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="mobile-services"
                          className="mobile-menu__sub"
                          initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link to={link.path} className="mobile-menu__sublink mobile-menu__sublink--all">
                            All Services Overview
                          </Link>
                          {SERVICES.map((svc) => (
                            <Link key={svc.slug} to={svc.path} className="mobile-menu__sublink">
                              <span className="mobile-menu__sub-num">{svc.number}</span>
                              <span>{svc.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.path} className="mobile-menu__item">
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `mobile-menu__link ${isActive ? "active" : ""}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {navLabels[link.label] ?? link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <div className="mobile-menu__cta">
              <Link to="/enquiry" className="btn btn--accent btn--lg" onClick={() => setMobileOpen(false)}>
                Request an Enquiry
              </Link>
              <Link to="/contact" className="btn btn--ghost" onClick={() => setMobileOpen(false)}>
                Contact ARSSA
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
