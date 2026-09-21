const fs = require("fs");
const path = require("path");

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // Replace case variations
  content = content.replace(/SADAC/g, "SADC");
  content = content.replace(/Sadac/g, "Sadc");
  content = content.replace(/sadac/g, "sadc");

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

// 1. Update all locales
const localesDir = path.join(__dirname, "../src/translations/locales");
fs.readdirSync(localesDir).forEach(file => {
  if (file.endsWith(".ts")) {
    replaceInFile(path.join(localesDir, file));
  }
});

// 2. Update all src files
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes("node_modules") && !file.includes(".git") && !file.includes("dist")) {
        results = results.concat(walk(file));
      }
    } else if (file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".html") || file.endsWith(".css")) {
      results.push(file);
    }
  });
  return results;
}

const allSrcFiles = walk(path.join(__dirname, "../src"));
allSrcFiles.forEach(f => {
  if (!f.endsWith("universalPhrases.ts")) {
    replaceInFile(f);
  }
});

// 3. Update universalPhrases.ts with both SADC keys and aliased SADAC keys
const phrasesPath = path.join(__dirname, "../src/translations/universalPhrases.ts");
let phrasesCode = fs.readFileSync(phrasesPath, "utf8");
const match = phrasesCode.match(/export const UNIVERSAL_PHRASES: Record<string, Partial<Record<Language, string>>> = (\{[\s\S]*\});\n$/);
if (!match) {
  console.error("Could not parse universalPhrases.ts");
  process.exit(1);
}

const phrases = eval("(" + match[1] + ")");
const newPhrases = {};

for (const [key, transMap] of Object.entries(phrases)) {
  // Replace SADAC in the translation map values
  const updatedTransMap = {};
  for (const [lang, val] of Object.entries(transMap)) {
    if (typeof val === "string") {
      updatedTransMap[lang] = val.replace(/SADAC/g, "SADC").replace(/Sadac/g, "Sadc").replace(/sadac/g, "sadc");
    } else {
      updatedTransMap[lang] = val;
    }
  }

  // Key with SADC
  const newKey = key.replace(/SADAC/g, "SADC").replace(/Sadac/g, "Sadc").replace(/sadac/g, "sadc");
  newPhrases[newKey] = updatedTransMap;

  // If the key had SADAC, keep an alias with the old key pointing to the new SADC translations
  if (newKey !== key) {
    newPhrases[key] = updatedTransMap;
  }
}

const finalCode =
  `import type { Language } from "./languages";\n\n` +
  `export const UNIVERSAL_PHRASES: Record<string, Partial<Record<Language, string>>> = ` +
  JSON.stringify(newPhrases, null, 2) +
  `;\n`;

fs.writeFileSync(phrasesPath, finalCode, "utf8");
console.log("Updated universalPhrases.ts with SADC replacements and aliases. Total keys:", Object.keys(newPhrases).length);
