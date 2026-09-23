import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export type StatIconVariant = "blue" | "gold" | "green";

interface StatCounterProps {
  value?: number;
  suffix?: string;
  label: string;
  variant?: "default" | "red" | "gold" | "green" | "blue" | "white";
  iconVariant?: StatIconVariant;
  icon?: ReactNode;
  /** When provided, the value area renders this custom node instead of the number. */
  displayText?: ReactNode;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  variant = "default",
  iconVariant = "blue",
  icon,
  displayText,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value ?? 0);

  useEffect(() => {
    if (!displayText && value !== undefined) {
      setDisplay(value);
    }
  }, [value, displayText]);

  const variantClass =
    variant === "red"
      ? "stat__value--red"
      : variant === "gold"
      ? "stat__value--gold"
      : variant === "green"
      ? "stat__value--green"
      : variant === "blue"
      ? "stat__value--blue"
      : variant === "white"
      ? "stat__value--white"
      : "";

  return (
    <div className="stat" ref={ref}>
      {icon && (
        <div className={`stat__icon-box stat__icon-box--${iconVariant}`}>
          {icon}
        </div>
      )}
      <div className="stat__content">
        {displayText ? (
          <div className={`stat__value ${variantClass}`}>
            {displayText}
          </div>
        ) : (
          <div className={`stat__value ${variantClass}`} aria-label={String(value)}>
            {display}
            {suffix}
          </div>
        )}
        <div className="stat__label">{label}</div>
      </div>
    </div>
  );
}
