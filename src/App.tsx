import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import PathNormalizer from "./components/PathNormalizer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BusinessFacilitation from "./pages/services/BusinessFacilitation";
import MarketGrowth from "./pages/services/MarketGrowth";
import ImportExport from "./pages/services/ImportExport";
import MaintenanceCleaning from "./pages/services/MaintenanceCleaning";
import Mining from "./pages/services/Mining";
import Markets from "./pages/Markets";
import WhyArssa from "./pages/WhyArssa";
import Legacy from "./pages/Legacy";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import Presentation from "./pages/Presentation";

export default function App() {
  return (
    <>
      <PathNormalizer />
      <PageLoader />
      <ScrollToTop />
      <Routes>
      <Route path="/presentation" element={<Presentation />} />
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/services/business-facilitation"
          element={
            <PageTransition>
              <BusinessFacilitation />
            </PageTransition>
          }
        />
        <Route
          path="/services/market-growth-distribution"
          element={
            <PageTransition>
              <MarketGrowth />
            </PageTransition>
          }
        />
        <Route
          path="/services/import-export"
          element={
            <PageTransition>
              <ImportExport />
            </PageTransition>
          }
        />
        <Route path="/services/mining" element={<PageTransition><Mining /></PageTransition>} />
        <Route
          path="/services/maintenance-cleaning"
          element={
            <PageTransition>
              <MaintenanceCleaning />
            </PageTransition>
          }
        />
        <Route
          path="/markets"
          element={
            <PageTransition>
              <Markets />
            </PageTransition>
          }
        />
        <Route
          path="/why-arssa"
          element={
            <PageTransition>
              <WhyArssa />
            </PageTransition>
          }
        />
        <Route
          path="/legacy"
          element={
            <PageTransition>
              <Legacy />
            </PageTransition>
          }
        />
        <Route
          path="/enquiry"
          element={
            <PageTransition>
              <Enquiry />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <Terms />
            </PageTransition>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <Privacy />
            </PageTransition>
          }
        />
        <Route
          path="/cookies"
          element={
            <PageTransition>
              <Cookies />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Route>
      </Routes>
    </>
  );
}
