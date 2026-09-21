import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES, type Language } from "../translations";

const VALID_LANGS = new Set(LANGUAGES.map((l) => l.code));

const SLUG_MAP: Record<string, string> = {
  // Localized route slugs mapped to canonical paths
  marches: "/markets",
  mercados: "/markets",
  marke: "/markets",
  bazando: "/markets",
  "a-propos": "/about",
  "oor-ons": "/about",
  sobre: "/about",
  diensten: "/services",
  servicios: "/services",
  servicos: "/services",
  misala: "/services",
  kontak: "/contact",
  contacto: "/contact",
  navrae: "/enquiry",
  consulta: "/enquiry",
};

/**
 * Handles:
 * 1. Accidental trailing spaces / encoded spaces (e.g. /presentation%20)
 * 2. Language prefixes in paths (e.g. /fr/markets, /sw/services, /af/about)
 * 3. URL language query params (e.g. ?lang=fr)
 * 4. Localized path aliases (e.g. /marches -> /markets)
 */
export default function PathNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Check URL query param ?lang=xx
    const params = new URLSearchParams(location.search);
    const queryLang = params.get("lang") as Language | null;
    if (queryLang && VALID_LANGS.has(queryLang) && queryLang !== language) {
      setLanguage(queryLang);
    }

    let decoded = location.pathname.replace(/%20/gi, " ");
    try {
      decoded = decodeURIComponent(decoded);
    } catch {
      /* keep raw */
    }

    let clean = decoded.replace(/[\s\u00a0]+/g, "").replace(/\/{2,}/g, "/");
    if (clean.length > 1 && clean.endsWith("/")) {
      clean = clean.slice(0, -1);
    }
    if (!clean.startsWith("/")) clean = `/${clean}`;

    // Check if path starts with language prefix e.g. /fr/markets or /fr
    const segments = clean.split("/").filter(Boolean);
    if (segments.length > 0 && VALID_LANGS.has(segments[0] as Language)) {
      const pathLang = segments[0] as Language;
      if (pathLang !== language) {
        setLanguage(pathLang);
      }
      const remaining = "/" + segments.slice(1).join("/");
      clean = remaining === "/" ? "/" : remaining;
    }

    // Check localized path aliases
    const pureSlug = clean.replace(/^\//, "").toLowerCase();
    if (SLUG_MAP[pureSlug]) {
      clean = SLUG_MAP[pureSlug];
    }

    if (clean !== location.pathname) {
      navigate(`${clean}${location.search}${location.hash}`, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate, language, setLanguage]);

  return null;
}
