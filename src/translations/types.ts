export interface DivisionTranslation {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  preview: string[];
}

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    markets: string;
    why: string;
    legacy: string;
    enquiry: string;
    contact: string;
    appearance: string;
    divisions: string;
    allServices: string;
    open: string;
    close: string;
    loading: string;
    skip: string;
    selectLanguage: string;
    language: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headlineGold: string;
    sub: string;
    exploreServices: string;
    startEnquiry: string;
    compliance: string;
    execution: string;
    support: string;
    planetCaption: string;
  };
  stats: {
    coreDivisions: string;
    countriesBridged: string;
    operatingPresence: string;
    sectorsSupported: string;
  };
  divisionsSection: {
    badge: string;
    title: string;
    subtitle: string;
  };
  divisions: DivisionTranslation[];
  corridor: {
    eyebrow: string;
    title: string;
    lead: string;
    desc: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
  };
  cta: {
    headline: string;
    text: string;
    primary: string;
    secondary: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    services: string;
    contact: string;
    location: string;
    terms: string;
    privacy: string;
    cookies: string;
    rights: string;
    changeLang: string;
  };
  modal: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    regionalTab: string;
    globalTab: string;
    continueBtn: string;
    preserveNotice: string;
  };
  cookie: {
    text: string;
    accept: string;
    policy: string;
  };
  forms: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    industry: string;
    service: string;
    source: string;
    submit: string;
    send: string;
    submitting: string;
    successTitle: string;
    contactSuccessMsg: string;
    enquirySuccessMsg: string;
    close: string;
  };
}
