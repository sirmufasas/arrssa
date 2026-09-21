import { Helmet } from "react-helmet-async";
import { SITE } from "../data/site";
import { useTranslate } from "../context/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = "/" }: SEOProps) {
  const tr = useTranslate();

  // Localize document title while preserving brand name
  let translatedTitle = title;
  if (title.includes(" | ")) {
    const parts = title.split(" | ");
    translatedTitle = parts
      .map((part) => (part === "ARSSA" ? part : tr(part)))
      .join(" | ");
  } else {
    translatedTitle = tr(title);
  }

  const translatedDesc = tr(description);
  const canonical = `${SITE.url}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{translatedTitle}</title>
      <meta name="description" content={translatedDesc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={translatedTitle} />
      <meta property="og:description" content={translatedDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={translatedTitle} />
      <meta name="twitter:description" content={translatedDesc} />
    </Helmet>
  );
}
