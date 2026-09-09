import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/** Standard page enter/exit transition + instant scroll-to-top on mount. */
export default function PageTransition({ children }: PageTransitionProps) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previous;
    });
  }, []);

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}
