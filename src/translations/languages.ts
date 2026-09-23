export type Language =
  | "en" // English
  | "fr" // Français (French - DRC official)
  | "sw" // Kiswahili (Swahili - DRC & East Africa)
  | "zh" // 简体中文 (Mandarin Chinese - Global Trade)
  // --- Commented out languages (re-enable as needed) ---
  | "ln" // Lingála (Lingala - DRC national language)
  | "pt" // Português (Portuguese - Angola, Mozambique, SADC)
  | "af" // Afrikaans (South Africa)
  | "zu" // isiZulu (South Africa)
  | "xh" // isiXhosa (South Africa)
  | "ar" // العربية (Arabic - MENA, RTL)
  | "es" // Español (Spanish)
  | "de" // Deutsch (German)
  | "hi" // हिन्दी (Hindi)
  | "ru" // Русский (Russian)
  | "ja" // 日本語 (Japanese)
  | "ko" // 한국어 (Korean)
  | "it" // Italiano (Italian)
  | "nl"; // Nederlands (Dutch)

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  region: string;
  category: "regional" | "global";
  flag: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageMeta[] = [
  // --- Active Languages: English, French, Swahili, Chinese ---
  {
    code: "en",
    name: "English",
    nativeName: "English",
    region: "South Africa & International",
    category: "regional",
    flag: "🇿🇦",
    dir: "ltr",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    region: "RDC Officiel & Francophonie",
    category: "regional",
    flag: "🇨🇩",
    dir: "ltr",
  },
  {
    code: "sw",
    name: "Swahili",
    nativeName: "Kiswahili",
    region: "RDC & Afrika Mashariki",
    category: "regional",
    flag: "🇹🇿",
    dir: "ltr",
  },
  {
    code: "zh",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    region: "中国 / 国际贸易",
    category: "global",
    flag: "🇨🇳",
    dir: "ltr",
  },

  /*
  // --- Commented out other languages ---
  {
    code: "ln",
    name: "Lingala",
    nativeName: "Lingála",
    region: "Republíki ya Kongó (RDC)",
    category: "regional",
    flag: "🇨🇩",
    dir: "ltr",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    region: "Angola, Moçambique & África Austral",
    category: "regional",
    flag: "🇦🇴",
    dir: "ltr",
  },
  {
    code: "af",
    name: "Afrikaans",
    nativeName: "Afrikaans",
    region: "Suid-Afrika",
    category: "regional",
    flag: "🇿🇦",
    dir: "ltr",
  },
  {
    code: "zu",
    name: "Zulu",
    nativeName: "isiZulu",
    region: "iNingizimu Afrika",
    category: "regional",
    flag: "🇿🇦",
    dir: "ltr",
  },
  {
    code: "xh",
    name: "Xhosa",
    nativeName: "isiXhosa",
    region: "uMzantsi Afrika",
    category: "regional",
    flag: "🇿🇦",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    region: "الشرق الأوسط وشمال إفريقيا",
    category: "global",
    flag: "🇦🇪",
    dir: "rtl",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    region: "España & América Latina",
    category: "global",
    flag: "🇪🇸",
    dir: "ltr",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    region: "Deutschland, Österreich, Schweiz",
    category: "global",
    flag: "🇩🇪",
    dir: "ltr",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    region: "भारत एवं वैश्विक व्यापार",
    category: "global",
    flag: "🇮🇳",
    dir: "ltr",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    region: "Евразия & Международная торговля",
    category: "global",
    flag: "🇷🇺",
    dir: "ltr",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    region: "日本 / グローバル貿易",
    category: "global",
    flag: "🇯🇵",
    dir: "ltr",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    region: "대한민국 / 글로벌 무역",
    category: "global",
    flag: "🇰🇷",
    dir: "ltr",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    region: "Italia & Commercio Globale",
    category: "global",
    flag: "🇮🇹",
    dir: "ltr",
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    region: "Nederland, België & Handel",
    category: "global",
    flag: "🇳🇱",
    dir: "ltr",
  },
  */
];
