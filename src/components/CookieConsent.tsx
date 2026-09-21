import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { useT } from "../context/LanguageContext";

const STORAGE_KEY = "arssa-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const t = useT();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <div className="cookie-banner__inner">
        <Cookie size={22} color="var(--brand-gold)" aria-hidden="true" />
        <p>
          {t.cookie?.text || "This website uses a minimal set of cookies to keep things running smoothly."}{" "}
          <Link to="/cookies">{t.cookie?.policy || "Cookie Policy"}</Link>
        </p>
        <button type="button" className="btn btn--primary btn--sm" onClick={accept}>
          {t.cookie?.accept || "Accept"}
        </button>
      </div>
    </div>
  );
}
