import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  const reduced = useReducedMotion();

  return (
    <>
      <SEO
        title="Page Not Found | ARSSA"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <div className="notfound">
        <div className="container">
          <motion.div
            className="notfound__inner"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="notfound__code" aria-hidden="true">
              4<span>0</span>4
            </div>
            <h1>Page Not Found</h1>
            <p>The page you're looking for may have moved or no longer exists.</p>
            <div className="notfound__actions">
              <Link to="/" className="btn btn--primary btn--lg">
                <Home size={18} aria-hidden="true" />
                Return Home
              </Link>
              <Link to="/contact" className="btn btn--ghost btn--lg">
                <Mail size={18} aria-hidden="true" />
                Contact ARSSA
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
