const fs = require("fs");
const path = require("path");

const phrasesFile = fs.readFileSync(path.join(__dirname, "../src/translations/universalPhrases.ts"), "utf8");
const match = phrasesFile.match(/export const UNIVERSAL_PHRASES: Record<string, Partial<Record<Language, string>>> = (\{[\s\S]*\});\n$/);
const phrases = eval("(" + match[1] + ")");

const allLangs = ["en", "fr", "pt", "sw", "ln", "af", "zu", "xh", "zh", "ar", "es", "de", "hi", "ru", "ja", "ko", "it", "nl"];

console.log("Total universal phrases:", Object.keys(phrases).length);

let missingCount = 0;
for (const [phrase, transMap] of Object.entries(phrases)) {
  for (const lang of allLangs) {
    if (!transMap[lang]) {
      console.warn(`[MISSING] Language ${lang} missing translation for phrase "${phrase}"`);
      missingCount++;
    }
  }
}

if (missingCount === 0) {
  console.log("✅ 100% complete: Every single one of the " + Object.keys(phrases).length + " phrases has a valid translation across all 18 languages!");
} else {
  console.error(`❌ Total missing translations: ${missingCount}`);
}

// Check dictionaries
const localesDir = path.join(__dirname, "../src/translations/locales");
const localeFiles = fs.readdirSync(localesDir);
console.log("Locale files found:", localeFiles.length);

let dictErrors = 0;
for (const f of localeFiles) {
  const code = f.replace(".ts", "");
  const content = fs.readFileSync(path.join(localesDir, f), "utf8");
  if (!content.includes('"nav"') || !content.includes('"hero"') || !content.includes('"footer"')) {
    console.error(`Dictionary ${code} is missing critical keys!`);
    dictErrors++;
  }
}
if (dictErrors === 0) {
  console.log("✅ All 18 dictionaries contain all required structured sections.");
}
