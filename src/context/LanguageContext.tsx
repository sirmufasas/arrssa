import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  LANGUAGES,
  UNIVERSAL_PHRASES,
  getDictionary,
  type Language,
  type LanguageMeta,
  type TranslationDictionary,
} from "../translations";

const STORAGE_LANG_KEY = "arssa_language";
const STORAGE_SELECTED_KEY = "arssa_language_selected";

const VALID_LANGS: Language[] = LANGUAGES.map((l) => l.code);

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_LANG_KEY) as Language;
    if (saved && VALID_LANGS.includes(saved)) {
      return saved;
    }
  } catch {
    /* ignore */
  }
  return "en";
}

function getInitialFirstVisit(): boolean {
  try {
    const selected = localStorage.getItem(STORAGE_SELECTED_KEY);
    return selected !== "true";
  } catch {
    return false;
  }
}

// Flat legacy compatibility mapping + full structured dictionary
export type AugmentedTranslation = TranslationDictionary & {
  home: string;
  about: string;
  services: string;
  markets: string;
  why: string;
  legacy: string;
  enquiry: string;
  contact: string;
  appearance: string;
  divisionsLabel: string;
  allServices: string;
  open: string;
  close: string;
  loading: string;
  skip: string;
  coreDivisions: string;
  countriesBridged: string;
  operatingPresence: string;
  sectorsSupported: string;
  crossBorder: string;
  businessSupport: string;
  integrated: string;
  marketSolutions: string;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  showLanguageModal: boolean;
  setShowLanguageModal: (open: boolean) => void;
  languages: LanguageMeta[];
  currentLanguageMeta: LanguageMeta;
  t: AugmentedTranslation;
  translate: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function augmentDictionary(dict: TranslationDictionary): AugmentedTranslation {
  return {
    ...dict,
    divisions: Array.isArray(dict.divisions) ? dict.divisions : [],
    divisionsLabel: dict.nav?.divisions || "Our Divisions",
    home: dict.nav?.home || "Home",
    about: dict.nav?.about || "About",
    services: dict.nav?.services || "Services",
    markets: dict.nav?.markets || "Markets",
    why: dict.nav?.why || "Why ARSSA",
    legacy: dict.nav?.legacy || "Legacy",
    enquiry: dict.nav?.enquiry || "Request an Enquiry",
    contact: dict.nav?.contact || "Contact ARSSA",
    appearance: dict.nav?.appearance || "Appearance",
    allServices: dict.nav?.allServices || "All Services Overview",
    open: dict.nav?.open || "Open menu",
    close: dict.nav?.close || "Close menu",
    loading: dict.nav?.loading || "Loading",
    skip: dict.nav?.skip || "Skip to main content",
    coreDivisions: dict.stats?.coreDivisions || "Core Divisions",
    countriesBridged: dict.stats?.countriesBridged || "Countries Bridged",
    operatingPresence: dict.stats?.operatingPresence || "Operating Presence",
    sectorsSupported: dict.stats?.sectorsSupported || "Sectors Supported",
    crossBorder: dict.stats?.operatingPresence || "Cross-Border",
    businessSupport: dict.stats?.sectorsSupported || "Business Support",
    integrated: dict.stats?.coreDivisions || "Integrated",
    marketSolutions: dict.stats?.countriesBridged || "Market Solutions",
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(() => {
    // Check if running inside iframe or embed presentation
    try {
      if (window.self !== window.top) return false;
      if (window.location.pathname.startsWith("/presentation")) return false;
    } catch {
      /* ignore */
    }
    return getInitialFirstVisit();
  });

  const currentLanguageMeta =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const setLanguage = useCallback((next: Language) => {
    if (!VALID_LANGS.includes(next)) return;
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, next);
      localStorage.setItem(STORAGE_SELECTED_KEY, "true");
      sessionStorage.setItem("arssa_lang_changed", next);
    } catch {
      /* ignore */
    }
    setShowLanguageModal(false);
    window.location.reload();
  }, []);

  const translate = useCallback(
    (text: string): string => {
      if (!text || language === "en") return text;

      const trimmed = text.trim();
      if (
        trimmed === "ARSSA" ||
        trimmed === "ARS S.A.R.L." ||
        trimmed === "ARS" ||
        trimmed.startsWith("ARSSA ·") ||
        trimmed.endsWith("· ARSSA")
      ) {
        return text;
      }

      // 1. Exact match
      if (UNIVERSAL_PHRASES[text]?.[language]) {
        return UNIVERSAL_PHRASES[text]![language]!;
      }

      // 2. Normalized match (collapse whitespace)
      const norm = normalize(text);
      if (UNIVERSAL_PHRASES[norm]?.[language]) {
        return UNIVERSAL_PHRASES[norm]![language]!;
      }

      // 3. Match without surrounding quotation marks
      const unquoted = norm.replace(/^[“"']+|[”"']+$/g, "").trim();
      if (UNIVERSAL_PHRASES[unquoted]?.[language]) {
        const trans = UNIVERSAL_PHRASES[unquoted]![language]!;
        if (norm.startsWith("“") || norm.startsWith('"')) {
          return `“${trans}”`;
        }
        return trans;
      }

      return text;
    },
    [language]
  );

  // Sync document lang, dir, and class
  useEffect(() => {
    const isRtl = currentLanguageMeta.dir === "rtl";
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    if (isRtl) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [language, currentLanguageMeta]);

  // Universal native DOM translation safety net for static content inside #main
  useEffect(() => {
    if (language === "en") return;

    const translateNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const raw = node.nodeValue?.trim();
        if (!raw || raw.length < 2) return;

        // Strictly preserve brand identifiers and codes
        if (
          raw === "ARSSA" ||
          raw === "ARS S.A.R.L." ||
          raw === "ARS" ||
          raw.startsWith("ARSSA ·") ||
          raw.endsWith("· ARSSA") ||
          raw.startsWith("© 2026")
        ) {
          return;
        }

        const match = UNIVERSAL_PHRASES[raw];
        if (match && match[language]) {
          node.nodeValue = node.nodeValue!.replace(raw, match[language]!);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        // Never translate protected brand elements, inputs, codes, or SVGs
        if (
          el.getAttribute("translate") === "no" ||
          el.getAttribute("data-no-translate") === "true" ||
          el.classList.contains("brand-logo") ||
          el.classList.contains("navbar__brand") ||
          el.classList.contains("no-translate") ||
          ["INPUT", "TEXTAREA", "SELECT", "SCRIPT", "STYLE", "CODE", "PRE", "SVG"].includes(
            el.tagName
          )
        ) {
          return;
        }

        el.childNodes.forEach(translateNode);
      }
    };

    const container = document.getElementById("main");
    if (!container) return;

    translateNode(container);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach(translateNode);
      }
    });

    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const dict = getDictionary(language);
  const augmentedT = augmentDictionary(dict);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        showLanguageModal,
        setShowLanguageModal,
        languages: LANGUAGES,
        currentLanguageMeta,
        t: augmentedT,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useT(): AugmentedTranslation {
  const { t } = useLanguage();
  return t;
}

export function useTranslate() {
  const { translate } = useLanguage();
  return translate;
}
