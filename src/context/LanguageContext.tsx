import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "fr";
const STORAGE_KEY = "arssa_language";
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "en", setLanguage: () => {} });

export const translations = {
  en: { home: "Home", about: "About", services: "Services", markets: "Markets", why: "Why ARSSA", legacy: "Legacy", enquiry: "Request an Enquiry", contact: "Contact ARSSA", appearance: "Appearance", divisions: "Our Divisions", allServices: "All Services Overview", open: "Open menu", close: "Close menu", loading: "Loading", skip: "Skip to main content" },
  fr: { home: "Accueil", about: "À propos", services: "Services", markets: "Marchés", why: "Pourquoi ARSSA", legacy: "Héritage", enquiry: "Demander un devis", contact: "Contacter ARSSA", appearance: "Apparence", divisions: "Nos divisions", allServices: "Vue d'ensemble des services", open: "Ouvrir le menu", close: "Fermer le menu", loading: "Chargement", skip: "Aller au contenu principal" },
} as const;

// Site copy is kept here so one language switch updates page content, forms and shared UI.
const COPY: Record<string, string> = {
  "South Africa ↔ DRC Commercial Corridor": "Corridor commercial Afrique du Sud ↔ RDC",
  "Your solution,": "Votre solution,", "right at your finger tips": "à portée de main",
  "Origin & Enterprise Base": "Base d'origine et d'entreprise", "Target Growth Market": "Marché de croissance cible",
  "South Africa": "Afrique du Sud", "Democratic Republic of Congo": "République démocratique du Congo",
  "Four Core Divisions. One Integrated Partner.": "Quatre divisions clés. Un partenaire intégré.",
  "Explore what each division delivers": "Découvrez les services de chaque division",
  "Business Facilitation": "Facilitation des affaires", "Market Growth & Distribution": "Croissance des marchés et distribution",
  "Import & Export": "Importation et exportation", "Maintenance & Cleaning": "Maintenance et nettoyage",
  "About ARSSA": "À propos d'ARSSA", "Target Markets": "Marchés cibles", "Why ARSSA": "Pourquoi ARSSA",
  "Experience That Supports Confidence": "Une expérience qui inspire confiance", "Start Your Enquiry": "Commencez votre demande",
  "Contact ARSSA": "Contacter ARSSA", "Direct Telephone": "Téléphone direct", "Email Correspondence": "Correspondance par e-mail",
  "Where We Operate": "Où nous opérons", "Prefer Direct Communication?": "Vous préférez communiquer directement ?",
  "Our Divisions": "Nos divisions", "All Services Overview": "Vue d'ensemble des services",
  "Request an Enquiry": "Demander un devis", "Loading": "Chargement",
  "South Africa — serving the South Africa–DRC corridor": "Afrique du Sud — au service du corridor Afrique du Sud–RDC",
  "Strategic Partnership": "Partenariat stratégique", "Bridging Realities": "Relier les réalités",
  "What We Do": "Ce que nous faisons", "How We Deliver Results": "Comment nous obtenons des résultats",
  "Vision": "Vision", "Mission": "Mission", "The Principles Behind Every Engagement": "Les principes qui guident chaque mission",
  "Cookie Policy": "Politique relative aux cookies", "Privacy Policy": "Politique de confidentialité", "Terms of Service": "Conditions d'utilisation",
};
const REVERSE = Object.fromEntries(Object.entries(COPY).map(([en, fr]) => [fr, en]));

function translatePage(language: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = language;
  const map = language === "fr" ? COPY : REVERSE;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) nodes.push(node as Text);
  nodes.forEach((text) => {
    const value = text.nodeValue || "";
    const trimmed = value.trim();
    if (!trimmed || text.parentElement?.closest("script,style,svg")) return;
    const replacement = map[trimmed];
    if (replacement) text.nodeValue = value.replace(trimmed, replacement);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en"; } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, language); } catch {}
    translatePage(language);
    const observer = new MutationObserver(() => translatePage(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
export function useT() { const { language } = useLanguage(); return translations[language]; }
