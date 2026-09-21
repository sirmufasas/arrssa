import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../translations";

const TOAST_MESSAGES: Record<Language, { title: string; subtitle: string }> = {
  en: { title: "Language Changed", subtitle: "Website updated to English" },
  fr: { title: "Langue modifiée", subtitle: "Site affiché en Français" },
  pt: { title: "Idioma alterado", subtitle: "Website atualizado para Português" },
  sw: { title: "Lugha imebadilishwa", subtitle: "Tovuti imesasishwa kuwa Kiswahili" },
  ln: { title: "Monoko ebongwani", subtitle: "Site ebalusami na Lingála" },
  af: { title: "Taal verander", subtitle: "Webwerf opgedateer na Afrikaans" },
  zu: { title: "Ulimi lushintshiwe", subtitle: "Iwebhusayithi ibuyekezwe ku-isiZulu" },
  xh: { title: "Ulwimi lutshintshiwe", subtitle: "Iwebhusayithi ihlaziywe nge-isiXhosa" },
  zh: { title: "语言已切换", subtitle: "网站语言已切换至 简体中文" },
  ar: { title: "تم تغيير اللغة", subtitle: "تم تحديث لغة الموقع إلى العربية" },
  es: { title: "Idioma cambiado", subtitle: "Sitio web actualizado a Español" },
  de: { title: "Sprache geändert", subtitle: "Website auf Deutsch aktualisiert" },
  hi: { title: "भाषा बदल दी गई", subtitle: "वेबसाइट हिंदी में अपडेट की गई" },
  ru: { title: "Язык изменен", subtitle: "Сайт переключен на Русский" },
  ja: { title: "言語を変更しました", subtitle: "ウェブサイトを日本語に切り替えました" },
  ko: { title: "언어가 변경되었습니다", subtitle: "웹사이트가 한국어로 전환되었습니다" },
  it: { title: "Lingua modificata", subtitle: "Sito web aggiornato in Italiano" },
  nl: { title: "Taal gewijzigd", subtitle: "Website bijgewerkt naar Nederlands" },
};

export default function LanguageToast() {
  const { language, languages } = useLanguage();
  const [toastInfo, setToastInfo] = useState<{
    code: Language;
    flag: string;
    nativeName: string;
    title: string;
    subtitle: string;
  } | null>(null);

  useEffect(() => {
    try {
      const changedLang = sessionStorage.getItem("arssa_lang_changed") as Language | null;
      if (changedLang) {
        sessionStorage.removeItem("arssa_lang_changed");
        const meta = languages.find((l) => l.code === changedLang) || languages.find((l) => l.code === language);
        const msg = TOAST_MESSAGES[changedLang] || TOAST_MESSAGES[language] || TOAST_MESSAGES.en;
        
        setToastInfo({
          code: changedLang,
          flag: meta?.flag || "🌐",
          nativeName: meta?.nativeName || changedLang.toUpperCase(),
          title: msg.title,
          subtitle: msg.subtitle,
        });

        const timer = setTimeout(() => {
          setToastInfo(null);
        }, 4500);

        return () => clearTimeout(timer);
      }
    } catch {
      /* ignore */
    }
  }, [language, languages]);

  return (
    <AnimatePresence>
      {toastInfo && (
        <motion.div
          key="language-toast"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -30, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.94 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10000,
            maxWidth: "calc(100vw - 32px)",
            width: "auto",
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 18px",
              background: "rgba(15, 23, 42, 0.94)",
              color: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 160, 23, 0.35)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(34, 197, 94, 0.16)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CheckCircle2 size={20} color="#22c55e" aria-hidden="true" />
            </div>

            <div style={{ display: "flex", flexDirection: "column", minWidth: 160 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 16 }} aria-hidden="true">
                  {toastInfo.flag}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#ffffff" }}>
                  {toastInfo.title}
                </span>
              </div>
              <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.78)", marginTop: 2 }}>
                {toastInfo.subtitle}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setToastInfo(null)}
              aria-label="Close notification"
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255, 255, 255, 0.6)",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 8,
                borderRadius: "6px",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")}
            >
              <X size={16} />
            </button>

            {/* Bottom Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4.5, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: 2,
                background: "var(--brand-gold, #d4a017)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
