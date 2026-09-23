import { useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Globe2, Search, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { LanguageMeta, Language } from "../translations";

export default function LanguageModal() {
  const {
    language,
    setLanguage,
    showLanguageModal,
    setShowLanguageModal,
    languages,
    t,
  } = useLanguage();

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "regional" | "global">("all");

  const isFirstVisit = useMemo(() => {
    try {
      return localStorage.getItem("arssa_language_selected") !== "true";
    } catch {
      return false;
    }
  }, [showLanguageModal]);

  // Handle ESC key press (allowed when closed manually, or on first visit)
  useEffect(() => {
    if (!showLanguageModal) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isFirstVisit) {
        setShowLanguageModal(false);
      }
    };

    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [showLanguageModal, isFirstVisit, setShowLanguageModal]);

  const filteredLanguages = useMemo(() => {
    return languages.filter((l) => {
      if (activeTab === "regional" && l.category !== "regional") return false;
      if (activeTab === "global" && l.category !== "global") return false;

      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q) ||
        l.region.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
      );
    });
  }, [languages, search, activeTab]);

  if (!showLanguageModal) return null;

  const handleSelect = (code: Language) => {
    setLanguage(code);
  };

  const modalContent = (
    <div
      className="lang-modal__backdrop"
      role="presentation"
      onClick={() => {
        if (!isFirstVisit) setShowLanguageModal(false);
      }}
    >
      <motion.div
        className="lang-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {!isFirstVisit && (
          <button
            type="button"
            className="lang-modal__close"
            onClick={() => setShowLanguageModal(false)}
            aria-label={t.nav.close}
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}

        <div className="lang-modal__header">
          <div className="lang-modal__badge">
            <Globe2 size={18} className="lang-modal__globe-icon" aria-hidden="true" />
            <span>ARSSA Global &amp; Regional Access</span>
          </div>

          <h2 id="lang-modal-title" className="lang-modal__title">
            {t.modal.title}
          </h2>
          <p className="lang-modal__subtitle">{t.modal.subtitle}</p>

          <div className="lang-modal__notice" translate="no">
            <strong>ARSSA · ARS S.A.R.L.</strong>
            <span>{t.modal.preserveNotice}</span>
          </div>
        </div>

        <div className="lang-modal__controls">
          <div className="lang-modal__search-box">
            <Search size={16} className="lang-modal__search-icon" aria-hidden="true" />
            <input
              type="text"
              className="lang-modal__search-input"
              placeholder={t.modal.searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus={!isFirstVisit}
            />
            {search && (
              <button
                type="button"
                className="lang-modal__search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="lang-modal__tabs" role="tablist" aria-label="Language Categories">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              className={`lang-modal__tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All ({languages.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "regional"}
              className={`lang-modal__tab ${activeTab === "regional" ? "active" : ""}`}
              onClick={() => setActiveTab("regional")}
            >
              {t.modal.regionalTab}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "global"}
              className={`lang-modal__tab ${activeTab === "global" ? "active" : ""}`}
              onClick={() => setActiveTab("global")}
            >
              {t.modal.globalTab}
            </button>
          </div>
        </div>

        <div className="lang-modal__grid" role="radiogroup" aria-labelledby="lang-modal-title">
          {filteredLanguages.map((l: LanguageMeta) => {
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`lang-card ${isSelected ? "lang-card--active" : ""}`}
                onClick={() => handleSelect(l.code)}
                dir={l.dir}
              >
                <div className="lang-card__flag" aria-hidden="true">
                  {l.flag}
                </div>
                <div className="lang-card__info">
                  <div className="lang-card__native">{l.nativeName}</div>
                  <div className="lang-card__meta">
                    <span className="lang-card__name">{l.name}</span>
                    <span className="lang-card__bullet">·</span>
                    <span className="lang-card__region">{l.region}</span>
                  </div>
                </div>
                <div className="lang-card__check">
                  {isSelected ? (
                    <Check size={16} className="lang-card__check-icon" aria-hidden="true" />
                  ) : (
                    <span className="lang-card__radio-circle" aria-hidden="true" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {filteredLanguages.length === 0 && (
          <div className="lang-modal__empty">
            <p>No matching languages found for &ldquo;{search}&rdquo;</p>
            <button
              type="button"
              className="btn btn--outline btn--sm"
              onClick={() => setSearch("")}
            >
              Reset Search
            </button>
          </div>
        )}

        <div className="lang-modal__footer">
          <div className="lang-modal__footer-left">
            <span>
              Current: <strong>{languages.find((l) => l.code === language)?.nativeName}</strong> ({language.toUpperCase()})
            </span>
          </div>
          <button
            type="button"
            className="btn btn--accent btn--md"
            onClick={() => handleSelect(language)}
          >
            {t.modal.continueBtn} {languages.find((l) => l.code === language)?.nativeName} &rarr;
          </button>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
