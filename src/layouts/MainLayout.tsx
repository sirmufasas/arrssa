import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import { useEmbed } from "../hooks/useEmbed";

export default function MainLayout() {
  const embed = useEmbed();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
      {!embed && <FloatingContact />}
    </>
  );
}
