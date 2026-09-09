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
 */
export default function Logo({ size = "md", light = false, asAnchor = true }: LogoProps) {
  const fontSizes = {
    sm: { mark: 20, sub: 9 },
    md: { mark: 24, sub: 9.5 },
    lg: { mark: 30, sub: 10.5 },
  }[size];

  const content = (
    <span className={`brand-logo ${light ? "brand-logo--light" : ""}`}>
      <span
        className="brand-logo__mark"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          letterSpacing: "0.02em",
          fontSize: fontSizes.mark,
          lineHeight: 1,
        }}
      >
        <span className="brand-logo__a">A</span>
        <span className="brand-logo__r">R</span>
        <span className="brand-logo__s">S</span>
      </span>
      <span
        className="brand-logo__sub"
        style={{
          fontSize: fontSizes.sub,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          lineHeight: 1,
          marginTop: 3,
        }}
      >
        South Africa
      </span>
    </span>
  );

  if (asAnchor) {
    return (
      <Link to="/" aria-label={`${SITE.name} — Home`} className="navbar__brand">
        {content}
      </Link>
    );
  }

  return <span className="navbar__brand">{content}</span>;
}
