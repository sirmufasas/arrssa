import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Globe, TrendingUp, Wrench } from "lucide-react";
import type { ServiceDef } from "../data/site";
import { useT } from "../context/LanguageContext";

const ICONS = {
  briefcase: Briefcase,
  trend: TrendingUp,
  globe: Globe,
  wrench: Wrench,
};

export default function ServiceCard({ service }: { service: ServiceDef }) {
  const Icon = ICONS[service.icon];
  const t = useT();

  const divTrans = t.divisions?.find((d) => d.slug === service.slug);
  const title = divTrans?.title || service.title;
  const description = divTrans?.description || service.description;
  const preview = divTrans?.preview || service.preview;

  return (
    <Link
      to={service.path}
      className="card card--service"
      style={{ ["--accent" as string]: service.accent }}
      aria-label={`${title} — ${service.number}`}
    >
      <span className="card__num" aria-hidden="true">
        {service.number}
      </span>
      <span className="card__icon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>
      <div className="card__list" aria-label="Service areas">
        {preview.map((p) => (
          <span key={p} className="card__tag">
            {p}
          </span>
        ))}
      </div>
      <span className="card__cta">
        {divTrans?.shortTitle || title}
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
