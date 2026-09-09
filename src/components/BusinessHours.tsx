import { useEffect, useState } from "react";
import { Clock, MessageCircle, Moon } from "lucide-react";
import { SITE } from "../data/site";

/** Business hours: Monday–Friday 08:30–17:00 SAST (UTC+2) */
const OPEN_MINUTES = 8 * 60 + 30; // 08:30
const CLOSE_MINUTES = 17 * 60; // 17:00

interface SastTime {
  day: number; // 0 = Sunday … 6 = Saturday
  minutes: number; // minutes since midnight
  formatted: string; // "14:32"
}

function getSastTime(): SastTime {
  const now = new Date();
  // SAST is UTC+2, no daylight saving
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const totalMinutes = (utcMinutes + 120) % (24 * 60);
  const utcDay = now.getUTCDay();
  // Handle day rollover when adding 2 hours pushes past midnight
  const day = utcMinutes + 120 >= 24 * 60 ? (utcDay + 1) % 7 : utcDay;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return {
    day,
    minutes: totalMinutes,
    formatted: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
  };
}

function isOpen(t: SastTime): boolean {
  const isWeekday = t.day >= 1 && t.day <= 5;
  return isWeekday && t.minutes >= OPEN_MINUTES && t.minutes < CLOSE_MINUTES;
}

const SCHEDULE = [
  { label: "Monday – Friday", hours: "08:30 – 17:00", days: [1, 2, 3, 4, 5] },
  { label: "Saturday – Sunday", hours: "Closed", days: [0, 6] },
];

export default function BusinessHours() {
  const [time, setTime] = useState<SastTime>(getSastTime);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getSastTime()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const open = isOpen(time);

  return (
    <div className="hours-panel">
      {/* Header with live status */}
      <div className="hours-panel__head">
        <div className="hours-panel__title">
          <Clock size={17} aria-hidden="true" />
          <span>Business Hours</span>
        </div>
        <span
          className={`hours-panel__status ${open ? "hours-panel__status--open" : "hours-panel__status--closed"}`}
          role="status"
        >
          <span className="hours-panel__status-dot" aria-hidden="true" />
          {open ? "Open Now" : "Closed"}
        </span>
      </div>

      {/* Live SAST clock */}
      <div className="hours-panel__clock" aria-label={`Current time in South Africa: ${time.formatted}`}>
        <span className="hours-panel__clock-time">{time.formatted}</span>
        <span className="hours-panel__clock-zone">SAST · South Africa (UTC+2)</span>
      </div>

      {/* Schedule */}
      <ul className="hours-panel__schedule">
        {SCHEDULE.map((row) => {
          const isToday = row.days.includes(time.day);
          return (
            <li
              key={row.label}
              className={`hours-panel__row ${isToday ? "hours-panel__row--today" : ""}`}
            >
              <span className="hours-panel__row-label">
                {row.label}
                {isToday && <span className="hours-panel__today-badge">Today</span>}
              </span>
              <span
                className={`hours-panel__row-hours ${
                  row.hours === "Closed" ? "hours-panel__row-hours--closed" : ""
                }`}
              >
                {row.hours}
              </span>
            </li>
          );
        })}
      </ul>

      {/* After-hours note / CTA */}
      <div className="hours-panel__foot">
        {open ? (
          <>
            <MessageCircle size={15} aria-hidden="true" />
            <span>
              Our team is available now —{" "}
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>{" "}
              for the fastest response.
            </span>
          </>
        ) : (
          <>
            <Moon size={15} aria-hidden="true" />
            <span>
              We're currently closed. Messages sent now are prioritised on the next
              business morning.
            </span>
          </>
        )}
      </div>
    </div>
  );
}
