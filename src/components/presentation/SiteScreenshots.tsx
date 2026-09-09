import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { SERVICES } from "../../data/site";

export const SITE_SCREENS = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  ...SERVICES.map((s) => ({ title: s.title, path: s.path })),
  { title: "Markets", path: "/markets" },
  { title: "Why ARSSA", path: "/why-arssa" },
  { title: "Legacy", path: "/legacy" },
  { title: "Enquiry", path: "/enquiry" },
  { title: "Contact", path: "/contact" },
  { title: "Terms & Conditions", path: "/terms" },
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Cookie Policy", path: "/cookies" },
];

const WIDTH = 1280;

function embedUrl(path: string) {
  return `${path}${path.includes("?") ? "&" : "?"}embed=1`;
}

function canvasLooksEmpty(canvas: HTMLCanvasElement): boolean {
  const ctx = canvas.getContext("2d");
  if (!ctx) return true;
  const w = Math.min(canvas.width, 80);
  const h = Math.min(canvas.height, 80);
  const data = ctx.getImageData(0, 0, w, h).data;
  let painted = 0;
  for (let i = 0; i < data.length; i += 16) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a > 8 && (r < 248 || g < 248 || b < 248)) painted += 1;
  }
  return painted < 4;
}

export default function SiteScreenshots({ watermark }: { watermark: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [index, setIndex] = useState(0);
  const [shots, setShots] = useState<{ title: string; path: string; src: string }[]>([]);
  const capturing = index < SITE_SCREENS.length;

  useEffect(() => {
    if (!capturing) return;
    const iframe = iframeRef.current;
    if (!iframe) return;
    let cancelled = false;

    const snap = async () => {
      const screen = SITE_SCREENS[index];
      const win = iframe.contentWindow;
      const doc = iframe.contentDocument;
      if (!screen || !win || !doc?.documentElement) {
        if (!cancelled) setIndex((i) => i + 1);
        return;
      }

      try {
        await doc.fonts?.ready;
      } catch {
        /* ignore */
      }

      const height = Math.max(doc.documentElement.scrollHeight, doc.body?.scrollHeight ?? 0, 800);
      iframe.style.width = `${WIDTH}px`;
      iframe.style.height = `${height}px`;
      win.scrollTo(0, 0);

      await new Promise((r) => window.setTimeout(r, 1200));
      if (cancelled) return;

      try {
        const canvas = await html2canvas(doc.body, {
          useCORS: true,
          allowTaint: true,
          scale: 0.75,
          width: WIDTH,
          windowWidth: WIDTH,
          windowHeight: Math.min(height, 4000),
          height: Math.min(height, 4000),
          scrollX: 0,
          scrollY: 0,
          backgroundColor: "#070c18",
          logging: false,
          imageTimeout: 4000,
        });

        if (cancelled) return;

        if (!canvasLooksEmpty(canvas)) {
          const src = canvas.toDataURL("image/jpeg", 0.84);
          setShots((prev) =>
            prev.some((s) => s.path === screen.path)
              ? prev
              : [...prev, { title: screen.title, path: screen.path, src }]
          );
        }
      } catch {
        /* continue */
      }

      if (!cancelled) setIndex((i) => i + 1);
    };

    const onLoad = () => {
      void snap();
    };

    iframe.addEventListener("load", onLoad);
    iframe.src = embedUrl(SITE_SCREENS[index].path);

    return () => {
      cancelled = true;
      iframe.removeEventListener("load", onLoad);
    };
  }, [capturing, index]);

  const total = SITE_SCREENS.length;

  return (
    <>
      {capturing && (
        <div className="shot-progress no-print" role="status">
          Taking screenshot {index + 1} of {total}: {SITE_SCREENS[index]?.title}
        </div>
      )}

      <iframe
        ref={iframeRef}
        title="Page capture"
        className={`shot-capture-iframe ${capturing ? "is-on" : ""}`}
        tabIndex={-1}
        aria-hidden="true"
      />

      {shots.map((shot, i) => (
        <section key={shot.path} className="pres-preview">
          <div className="pres-watermark" aria-hidden="true">
            {watermark}
          </div>
          <header className="pres-preview__head">
            <div>
              <p className="pres-kicker">
                Screenshot {String(i + 1).padStart(2, "0")} of {total}
              </p>
              <h2>{shot.title}</h2>
              <p>
                <code>{shot.path}</code>
              </p>
            </div>
          </header>
          <div className="shot-photo-wrap">
            <img src={shot.src} alt={`Screenshot of ${shot.title}`} />
          </div>
        </section>
      ))}
    </>
  );
}
