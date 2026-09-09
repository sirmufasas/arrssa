import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Instantly scrolls the window to the top on every route change.
 * Temporarily disables the global `scroll-behavior: smooth` so the
 * reset is immediate rather than animating from the previous position.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Restore smooth scrolling for in-page anchor links
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previous;
    });
  }, [pathname]);

  return null;
}
