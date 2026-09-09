import type { ComponentType } from "react";

export function FeatureItem({
  icon: Icon,
  title,
  text,
  accent = "#1a3160",
}: {
  icon: ComponentType<{ size?: number | string }>;
  title: string;
  text: string;
  accent?: string;
}) {
  return (
    <div className="feature-item" style={{ ["--accent" as string]: accent }}>
      <span className="feature-item__icon">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
