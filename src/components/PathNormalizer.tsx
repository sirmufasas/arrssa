import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Fixes accidental trailing spaces / encoded spaces in the URL
 * (e.g. /presentation%20) so routes still resolve.
 */
export default function PathNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
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

    if (clean !== location.pathname) {
      navigate(`${clean}${location.search}${location.hash}`, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}
