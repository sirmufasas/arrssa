import type { ComponentType } from "react";
import { Check, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface ServiceBlock {
  icon: ComponentType<{ size?: number | string }>;
  title: string;
  items: string[];
}

export function ServiceBlocks({ blocks, accent = "#1a3160" }: { blocks: ServiceBlock[]; accent?: string }) {
  return (
    <div className="svc-grid">
      {blocks.map((block, i) => {
        const Icon = block.icon;
        return (
          <ScrollReveal key={block.title} delay={i * 0.06}>
            <div className="svc-card" style={{ ["--accent" as string]: accent }}>
              <div className="svc-card__head">
                <span className="svc-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{block.title}</h3>
              </div>
              <ul className="check-list">
                {block.items.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function PurposeCallout({
  title = "Our Purpose",
  text,
  gold = false,
}: {
  title?: string;
  text: string;
  gold?: boolean;
}) {
  return (
    <ScrollReveal>
      <div className={`callout ${gold ? "callout--gold" : ""}`}>
        <span className="callout__icon">
          <Target size={22} aria-hidden="true" />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function SectorBadges({ title, items }: { title?: string; items: string[] }) {
  return (
    <ScrollReveal>
      <div style={{ marginTop: 40 }}>
        {title && <h3 style={{ fontSize: 18, marginBottom: 16 }}>{title}</h3>}
        <div className="badge-row">
          {items.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
