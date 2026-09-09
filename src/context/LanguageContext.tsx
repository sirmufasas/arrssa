import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "fr";
const STORAGE_KEY = "arssa_language";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });

export const translations = {
  en: { home: "Home", about: "About", services: "Services", markets: "Markets", why: "Why ARSSA", legacy: "Legacy", enquiry: "Request an Enquiry", contact: "Contact ARSSA", appearance: "Appearance", divisions: "Our Divisions", allServices: "All Services Overview", open: "Open menu", close: "Close menu", loading: "Loading", skip: "Skip to main content" },
  fr: { home: "Accueil", about: "À propos", services: "Services", markets: "Marchés", why: "Pourquoi ARSSA", legacy: "Héritage", enquiry: "Demander un devis", contact: "Contacter ARSSA", appearance: "Apparence", divisions: "Nos divisions", allServices: "Vue d'ensemble des services", open: "Ouvrir le menu", close: "Fermer le menu", loading: "Chargement", skip: "Aller au contenu principal" },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en"; } catch { return "en"; }
  });
  useEffect(() => { document.documentElement.lang = language; try { localStorage.setItem(STORAGE_KEY, language); } catch {} }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
export function useT() { const { language } = useLanguage(); return translations[language]; }
