import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; path?: string }[];
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, subtitle, crumbs, children }: PageHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {crumbs && crumbs.length > 0 && (
            <nav className="page-hero__crumbs" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={c.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {i > 0 && <span className="sep">/</span>}
                  {c.path ? (
                    <Link to={c.path}>{c.label}</Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
          <h1>{title}</h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function PageHeroActions({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }} className="page-hero__crumbs-chevron">
      {children}
    </div>
  );
}

export function BreadcrumbArrow() {
  return <ChevronRight size={12} aria-hidden="true" />;
}
