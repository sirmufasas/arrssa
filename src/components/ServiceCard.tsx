import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Globe, TrendingUp, Wrench } from "lucide-react";
import type { ServiceDef } from "../data/site";

const ICONS = {
  briefcase: Briefcase,
  trend: TrendingUp,
  globe: Globe,
  wrench: Wrench,
};

export default function ServiceCard({ service }: { service: ServiceDef }) {
  const Icon = ICONS[service.icon];

  return (
    <Link
      to={service.path}
      className="card card--service"
      style={{ ["--accent" as string]: service.accent }}
      aria-label={`${service.title} — view division`}
    >
      <span className="card__num" aria-hidden="true">
        {service.number}
      </span>
      <span className="card__icon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3 className="card__title">{service.title}</h3>
      <p className="card__desc">{service.description}</p>
      <div className="card__list" aria-label="Service areas">
        {service.preview.map((p) => (
          <span key={p} className="card__tag">
            {p}
          </span>
        ))}
      </div>
      <span className="card__cta">
        View Division
        <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
