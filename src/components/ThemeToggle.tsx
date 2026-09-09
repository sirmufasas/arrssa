import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${isDark ? "theme-toggle--dark" : "theme-toggle--light"} ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        className="theme-toggle__icon-wrap"
        initial={false}
        animate={{
          rotate: isDark ? 360 : 0,
          scale: [0.9, 1],
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? (
          <Moon size={16} className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true" />
        ) : (
          <Sun size={16} className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true" />
        )}
      </motion.div>
      {showLabel ? (
        <span className="theme-toggle__label">{isDark ? "Dark Mode" : "Light Mode"}</span>
      ) : (
        <span className="theme-toggle__label">{isDark ? "Dark" : "Light"}</span>
      )}
    </button>
  );
}
