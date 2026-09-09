import { useMemo, useState } from "react";
import { Printer } from "lucide-react";
import SEO from "../components/SEO";
import { SITE } from "../data/site";
import SiteScreenshots, { SITE_SCREENS } from "../components/presentation/SiteScreenshots";
import OneTimeGate from "../components/presentation/OneTimeGate";

function todayLabel() {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Presentation() {
  const [clientName, setClientName] = useState("Confidential Client");
  const [issuedBy, setIssuedBy] = useState(SITE.fullName);
  const date = useMemo(() => todayLabel(), []);
  const watermarkText = `CONFIDENTIAL  ·  ${clientName}  ·  ${date}  ·  ${issuedBy}`;

  return (
    <OneTimeGate>
      <SEO
        title="Confidential site screenshots | ARSSA"
        description="Exact screenshots of every ARSSA website page for client review."
        path="/presentation"
      />

      <div className="pres-toolbar no-print">
        <div className="pres-toolbar__inner">
          <div className="pres-toolbar__brand">
            <strong>ARSSA</strong>
            <span>Exact screenshots · {SITE_SCREENS.length} pages</span>
          </div>
          <div className="pres-toolbar__fields">
            <label>
              Client name
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                maxLength={80}
              />
            </label>
            <label>
              Issued by
              <input
                type="text"
                value={issuedBy}
                onChange={(e) => setIssuedBy(e.target.value)}
                maxLength={80}
              />
            </label>
          </div>
          <button type="button" className="btn btn--accent" onClick={() => window.print()}>
            <Printer size={16} aria-hidden="true" />
            Save as PDF
          </button>
        </div>
        <p className="pres-toolbar__note">
          Screenshots of every real page are taken one by one (you may briefly see each page
          while it is captured). Wait until capturing finishes, then click{" "}
          <strong>Save as PDF</strong>. One viewing session in this browser.
        </p>
      </div>

      <div className="pres-doc pres-doc--preview">
        <section className="pres-page pres-page--cover">
          <div className="pres-watermark" aria-hidden="true">
            {watermarkText}
          </div>
          <header className="pres-meta">
            <span>CONFIDENTIAL SCREENSHOT DECK</span>
            <span>{date}</span>
          </header>
          <p className="pres-kicker">Prepared for {clientName}</p>
          <h1>
            <span className="pres-mark">
              <b>A</b>
              <b>R</b>
              <b>S</b>
            </span>
            <span className="pres-h1">Exact website screenshots</span>
          </h1>
          <p className="pres-tag">{SITE.fullName}</p>
          <p className="pres-lead" style={{ color: "rgba(255,255,255,0.78)" }}>
            Every screen below is a captured image of the live site. Issued by {issuedBy} on {date}.
          </p>
          <ol className="pres-toc">
            {SITE_SCREENS.map((p, i) => (
              <li key={p.path}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{p.title}</strong>
                <em>{p.path}</em>
              </li>
            ))}
          </ol>
          <footer className="pres-foot">
            <span>Cover</span>
            <span>{date}</span>
          </footer>
        </section>

        <SiteScreenshots watermark={watermarkText} />
      </div>
    </OneTimeGate>
  );
}
