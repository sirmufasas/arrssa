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
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || displayText) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value, displayText]);

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
