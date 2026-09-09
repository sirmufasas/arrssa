import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "../data/site";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="float-actions"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="complementary"
          aria-label="Quick contact"
        >
          <a
            className="float-btn float-btn--wa"
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ARSSA on WhatsApp: ${SITE.phoneDisplay}`}
          >
            <MessageCircle size={24} aria-hidden="true" />
            <span className="tooltip">WhatsApp us</span>
          </a>
          <a
            className="float-btn float-btn--phone"
            href={SITE.phoneHref}
            aria-label={`Call ARSSA: ${SITE.phoneDisplay}`}
          >
            <Phone size={22} aria-hidden="true" />
            <span className="tooltip">Call us</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
