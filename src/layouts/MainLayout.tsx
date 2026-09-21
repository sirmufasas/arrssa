import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import CookieConsent from "../components/CookieConsent";
import LanguageModal from "../components/LanguageModal";
import { useEmbed } from "../hooks/useEmbed";
import { useT } from "../context/LanguageContext";

export default function MainLayout() {
  const embed = useEmbed();
  const t = useT();

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
    </>
  );
}
