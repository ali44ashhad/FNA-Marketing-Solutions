import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import PortfolioPage from "./pages/PortfolioPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import FrontendDevelopment from "./pages/services/FrontendDevelopment.jsx";
import BackendDevelopment from "./pages/services/BackendDevelopment.jsx";
import SEODigitalMarketing from "./pages/services/SEODigitalMarketing.jsx";
import EmailMarketing from "./pages/services/EmailMarketing.jsx";
import WebHosting from "./pages/services/WebHosting.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/services/website-development"
              element={<WebsiteDevelopment />}
            />
            <Route
              path="/services/frontend-development"
              element={<FrontendDevelopment />}
            />
            <Route
              path="/services/backend-development"
              element={<BackendDevelopment />}
            />
            <Route
              path="/services/seo-digital-marketing"
              element={<SEODigitalMarketing />}
            />
            <Route
              path="/services/email-marketing"
              element={<EmailMarketing />}
            />
            <Route path="/services/web-hosting" element={<WebHosting />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
