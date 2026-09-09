import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const BOOT_DURATION = 3200 // first load — longer
const NAV_DURATION = 2800;   // between pages — brief

function isEmbed(search: string, pathname: string): boolean {
  if (pathname === "/presentation") return true;
  const params = new URLSearchParams(search);
  if (params.get("embed") === "1") return true;
  try {
    if (window.self !== window.top) return true;
  } catch {
    return true;
  }
  return false;
}

/**
 * Shows on:
 *  • First load / hard`refresh  (2.8 s, full branded loader)
 *  • Every page navigation       (0.7 s, quick overlay)
 * Hidden on /presentation and inside iframes.
 */
export default function PageLoader() {
  const { pathname, search } = useLocation();
  const reduced = useReducedMotion();
  const embed = isEmbed(search, pathname);

  const isBoot = useRef(true);
  const [visible, setVisible] = useState(!embed);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear any running timer
  const clear = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // On route change: flash the loader again (except on /presentation or iframes)
  useEffect(() => {
    if (embed) {
      setVisible(false);
      return;
    }

    const boot = isBoot.current;
    isBoot.current = false;

    const duration = reduced ? 250 : boot ? BOOT_DURATION : NAV_DURATION;

    clear();
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), duration);

    return clear;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          className="page-loader"
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="page-loader__center">
            <div className="page-loader__ring" aria-hidden="true" />
            <div className="page-loader__ring page-loader__ring--outer" aria-hidden="true" />
            <span className="page-loader__mark" aria-hidden="true">
              <span>A</span>
              <span>R</span>
              <span>S</span>
            </span>
          </div>
          <span className="page-loader__label">Agence Rebi Service South Africa</span>
          <div className="page-loader__bar" aria-hidden="true">
            <span />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
