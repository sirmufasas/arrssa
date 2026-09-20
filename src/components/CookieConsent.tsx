import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "arssa-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // If localStorage is unavailable, just show it once per page load.
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
          This website uses a minimal set of cookies to keep things running smoothly. See our{" "}
          <Link to="/cookies">Cookie Policy</Link> for details.
        </p>
        <button type="button" className="btn btn--primary btn--sm" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
