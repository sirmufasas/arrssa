import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import CookieConsent from "../components/CookieConsent";
import LanguageModal from "../components/LanguageModal";
import LanguageToast from "../components/LanguageToast";
import { useEmbed } from "../hooks/useEmbed";
import { useLanguage, useT } from "../context/LanguageContext";

export default function MainLayout() {
  const embed = useEmbed();
  const t = useT();
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // When route changes, trigger translation pass on new page elements
    if (language === "en") return;
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("popstate"));
    }, 60);
    return () => clearTimeout(timer);
  }, [location.pathname, language]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
      {!embed && <FloatingContact />}
      {!embed && <CookieConsent />}
      {!embed && <LanguageModal />}
      {!embed && <LanguageToast />}
    </>
  );
}
