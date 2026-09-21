import { Link } from "react-router-dom";
import { SITE } from "../data/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  light?: boolean;
  asAnchor?: boolean;
}

/**
 * ARS lettermark logo.
 * Brand Identity:
 * A — Navy (#1a3160) in Light Mode / Crisp White (#ffffff) in Dark Mode
 * R — Gold (#f2c200 / #f7ce26)
 * S — Green (#009639 / #22c55e)
 *
 * translate="no" ensures brand name and mark are never translated.
 */
export default function Logo({ size = "md", light = false, asAnchor = true }: LogoProps) {
  const content = (
    <span
      translate="no"
      data-no-translate="true"
      className={`brand-logo brand-logo--${size} ${light ? "brand-logo--light" : ""}`}
    >
      <img
        src="/arssa-logo.png"
        className="brand-logo__image"
        alt="ARSSA"
        draggable="false"
        translate="no"
      />
    </span>
  );

  if (asAnchor) {
    return (
      <Link
        to="/"
        aria-label={`${SITE.name} — Home`}
        className="navbar__brand"
        translate="no"
        data-no-translate="true"
      >
        {content}
      </Link>
    );
  }

  return (
    <span className="navbar__brand" translate="no" data-no-translate="true">
      {content}
    </span>
  );
}
