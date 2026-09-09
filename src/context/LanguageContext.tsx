import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
export type Language = "en" | "fr";
const STORAGE_KEY = "arssa_language";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });
export const translations = {
  en: { home: "Home", about: "About", services: "Services", markets: "Markets", why: "Why ARSSA", legacy: "Legacy", enquiry: "Request an Enquiry", contact: "Contact ARSSA", appearance: "Appearance", divisions: "Our Divisions", allServices: "All Services Overview", open: "Open menu", close: "Close menu", loading: "Loading", skip: "Skip to main content", crossBorder: "Cross-Border", businessSupport: "Business Support", integrated: "Integrated", marketSolutions: "Market Solutions", coreDivisions: "Core Divisions", countriesBridged: "Countries Bridged" },
  fr: { home: "Accueil", about: "À propos", services: "Services", markets: "Marchés", why: "Pourquoi ARSSA", legacy: "Héritage", enquiry: "Demander un devis", contact: "Contacter ARSSA", appearance: "Apparence", divisions: "Nos divisions", allServices: "Vue d'ensemble des services", open: "Ouvrir le menu", close: "Fermer le menu", loading: "Chargement", skip: "Aller au contenu principal", crossBorder: "Transfrontalier", businessSupport: "Soutien aux entreprises", integrated: "Intégré", marketSolutions: "Solutions de marché", coreDivisions: "Divisions principales", countriesBridged: "Pays reliés" },
} as const;

declare global { interface Window { google?: any; arssaGoogleTranslateInit?: () => void; } }
function setTranslationCookie(language: Language) {
  document.cookie = language === "fr" ? "googtrans=/en/fr; path=/; max-age=31536000" : "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
function loadTranslator() {
  if (document.getElementById("google-translate-script")) return;
  window.arssaGoogleTranslateInit = () => {
    if (window.google?.translate?.TranslateElement && !document.getElementById("google_translate_element")?.children.length) {
      new window.google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "fr", autoDisplay: false }, "google_translate_element");
    }
  };
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=arssaGoogleTranslateInit";
  script.async = true;
  document.head.appendChild(script);
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => { try { return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en"; } catch { return "en"; } });
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem(STORAGE_KEY, language); } catch {}
    setTranslationCookie(language);
    if (language === "fr") loadTranslator();
  }, [language]);
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    setTranslationCookie(next);
    // Google Translate applies to the complete document on a fresh page, while React
    // state remains untouched. This avoids mutating React DOM nodes and preserves data.
    window.setTimeout(() => window.location.reload(), 50);
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}<div id="google_translate_element" aria-hidden="true" /></LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
export function useT() { const { language } = useLanguage(); return translations[language]; }
