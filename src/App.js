import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Service Pages
import CorporateWeb from './pages/services/CorporateWeb';
import ECommerce from './pages/services/ECommerce';
import LandingPage from './pages/services/LandingPage';
import SEOPerformance from './pages/services/SEOPerformance';
import MaintenanceSupport from './pages/services/MaintenanceSupport';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/hizmetler/kurumsal-web" element={<CorporateWeb />} />
            <Route path="/hizmetler/e-ticaret" element={<ECommerce />} />
            <Route path="/hizmetler/landing-page" element={<LandingPage />} />
            <Route path="/hizmetler/seo" element={<SEOPerformance />} />
            <Route path="/hizmetler/bakim" element={<MaintenanceSupport />} />
            <Route path="/portfoy" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/gizlilik" element={<PrivacyPolicy />} />
            <Route path="/kullanim-sartlari" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppChat />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
