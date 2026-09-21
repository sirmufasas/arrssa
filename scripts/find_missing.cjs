const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if ((file.endsWith(".tsx") || file.endsWith(".ts")) && !full.includes("translations") && !full.includes("scripts")) {
      results.push(full);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, "../src"));
console.log("Found files:", files.length);

const phrasesFile = fs.readFileSync(path.join(__dirname, "../src/translations/universalPhrases.ts"), "utf8");

// Parse existing UNIVERSAL_PHRASES keys
const match = phrasesFile.match(/export const UNIVERSAL_PHRASES: Record<string, Partial<Record<Language, string>>> = (\{[\s\S]*\});\n$/);
const existingPhrases = match ? eval("(" + match[1] + ")") : {};
const existingKeys = new Set(Object.keys(existingPhrases));

console.log("Existing phrases count:", existingKeys.size);

const candidateStrings = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, "utf8");
  
  // Match string literals
  const strMatches = content.match(/"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g) || [];
  strMatches.forEach(m => {
    const s = m.slice(1, -1).trim();
    if (s.length >= 3) candidateStrings.add(s);
  });

  // Match JSX text content >text<
  const jsxMatches = content.match(/>([^<>{}\r\n]+)</g) || [];
  jsxMatches.forEach(m => {
    const s = m.slice(1, -1).trim();
    if (s.length >= 3) candidateStrings.add(s);
  });
});

console.log("Total candidate strings extracted:", candidateStrings.size);

const missing = [];
candidateStrings.forEach(s => {
  // Filter out non-prose / code values
  if (
    s === "ARSSA" ||
    s === "ARS S.A.R.L." ||
    s === "ARS" ||
    s.startsWith("ARSSA ·") ||
    s.startsWith("http") ||
    s.startsWith("mailto:") ||
    s.startsWith("tel:") ||
    s.startsWith("#") ||
    s.startsWith("var(") ||
    s.startsWith("rgba(") ||
    s.startsWith("rgb(") ||
    s.startsWith("/") ||
    s.startsWith("./") ||
    s.startsWith("../") ||
    s.startsWith("display:") ||
    s.includes("px") && s.includes(" ") ||
    s.includes("grid-template-") ||
    s.includes("keyframes") ||
    s.includes("import ") ||
    s.includes("from ") ||
    s.includes("console.") ||
    /^[a-zA-Z0-9_\-\.\/]+$/.test(s) && !s.includes(" ") && s.length < 15 || // slug, identifier, filename
    /^\+?[0-9\s\-\(\)]+$/.test(s) // phone number
  ) {
    return;
  }

  if (!existingKeys.has(s)) {
    missing.push(s);
  }
});

console.log("Missing count:", missing.length);
fs.writeFileSync(path.join(__dirname, "../missing_strings.json"), JSON.stringify(missing, null, 2));
