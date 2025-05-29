import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Google Analytics Hook
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import AdminLayout from './components/AdminLayout';

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
import SiteMap from './pages/SiteMap';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminContactForms from './pages/AdminContactForms';
import AdminBlogPosts from './pages/AdminBlogPosts';
import AdminBlogEditor from './pages/AdminBlogEditor';

// Service Pages
import CorporateWeb from './pages/services/CorporateWeb';
import ECommerce from './pages/services/ECommerce';
import LandingPage from './pages/services/LandingPage';
import SEOPerformance from './pages/services/SEOPerformance';
import MaintenanceSupport from './pages/services/MaintenanceSupport';

// App Content Component (Router içinde olması gerekiyor)
const AppContent = () => {
  // Google Analytics tracking
  useGoogleAnalytics();
  const location = useLocation(); // Mevcut rota bilgisini al

  // Admin rotasında mıyız kontrolü
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <div className="App">
        {/* Admin rotasında değilsek Header'ı göster */}
        {!isAdminRoute && <Header />}

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
            <Route path="/site-haritasi" element={<SiteMap />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminLayout />
                </PrivateRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="contact-forms" element={<AdminContactForms />} />
              <Route path="blog-posts" element={<AdminBlogPosts />} />
              <Route path="blog-posts/create" element={<AdminBlogEditor />} />
              <Route path="blog-posts/edit/:id" element={<AdminBlogEditor />} />
            </Route>
          </Routes>
        </main>

        {/* Admin rotasında değilsek Footer'ı göster */}
        {!isAdminRoute && <Footer />}

        <WhatsAppChat />
        <CookieConsent />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
