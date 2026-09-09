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
  const [language, setLanguageState] = useState<Language>(() => {
    try { return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en"; } catch { return "en"; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, language); } catch {}
    document.documentElement.lang = language;
    // Translate the complete rendered document, including paragraphs, forms, footer,
    // legal copy and content added later by React. The custom dictionary handles the
    // branded copy while Google Translate covers the remaining site text.
    translatePage(language);
    if (language === "fr") {
      document.cookie = "googtrans=/en/fr; path=/; max-age=31536000";
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=arssaGoogleTranslateInit";
        script.async = true;
        document.body.appendChild(script);
        (window as Window & { arssaGoogleTranslateInit?: () => void }).arssaGoogleTranslateInit = () => {
          const google = (window as Window & { google?: { translate?: { TranslateElement?: new (config: object, id: string) => unknown } } }).google;
          if (google?.translate?.TranslateElement && !document.getElementById("google_translate_element")?.children.length) {
            new google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "fr", autoDisplay: false }, "google_translate_element");
          }
        };
      }
    } else {
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    const observer = new MutationObserver(() => translatePage(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    // Google Translate reads its cookie on a fresh document; reload guarantees every
    // text node is translated consistently and lets French spacing flow naturally.
    window.setTimeout(() => window.location.reload(), 80);
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}<div id="google_translate_element" aria-hidden="true" /></LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
export function useT() { const { language } = useLanguage(); return translations[language]; }
