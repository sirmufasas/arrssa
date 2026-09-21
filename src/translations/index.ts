import { LANGUAGES, type Language, type LanguageMeta } from "./languages";
import type { TranslationDictionary, DivisionTranslation } from "./types";
import { UNIVERSAL_PHRASES } from "./universalPhrases";

import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { sw } from "./locales/sw";
import { ln } from "./locales/ln";
import { pt } from "./locales/pt";
import { af } from "./locales/af";
import { zu } from "./locales/zu";
import { xh } from "./locales/xh";
import { zh } from "./locales/zh";
import { ar } from "./locales/ar";
import { es } from "./locales/es";
import { de } from "./locales/de";
import { hi } from "./locales/hi";
import { ru } from "./locales/ru";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { it } from "./locales/it";
import { nl } from "./locales/nl";

export const DICTIONARIES: Record<Language, TranslationDictionary> = {
  en,
  fr,
  sw,
  ln,
  pt,
  af,
  zu,
  xh,
  zh,
  ar,
  es,
  de,
  hi,
  ru,
  ja,
  ko,
  it,
  nl,
};

export function getDictionary(lang: Language): TranslationDictionary {
  return DICTIONARIES[lang] || DICTIONARIES.en;
}

export { LANGUAGES, UNIVERSAL_PHRASES };
export type { Language, LanguageMeta, TranslationDictionary, DivisionTranslation };
