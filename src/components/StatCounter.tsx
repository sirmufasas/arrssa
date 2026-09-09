import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  variant?: "default" | "red" | "gold" | "green";
  /** When provided, the value area renders this text instead of the animated number. */
  displayText?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  variant = "default",
  displayText,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  // Keep the real value visible immediately. This prevents the language translator
  // or a delayed viewport observer from leaving a misleading zero on screen.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    // Numbers are content, not animation state: always restore the actual value.
    if (!displayText) setDisplay(value);
  }, [value, displayText]);

  const variantClass =
    variant === "red"
      ? "stat__value--red"
      : variant === "gold"
      ? "stat__value--gold"
      : variant === "green"
      ? "stat__value--green"
      : "";

  return (
    <div className="stat" ref={ref}>
      {displayText ? (
        <div className={`stat__value ${variantClass}`} style={{ fontSize: "clamp(26px, 3.4vw, 40px)" }}>
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
  );
}
