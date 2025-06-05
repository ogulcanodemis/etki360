import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from './components/AdminLayout';
import PrivateRoute from './components/PrivateRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SiteMap from './pages/SiteMap';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminContactForms from './pages/AdminContactForms';
import AdminBlogPosts from './pages/AdminBlogPosts';
import AdminBlogEditor from './pages/AdminBlogEditor';
import AdminBulkEmail from './pages/AdminBulkEmail';
import AdminEmailList from './pages/AdminEmailList';

// Service Pages
import Services from './pages/Services';
import CorporateWeb from './pages/services/CorporateWeb';
import ECommerce from './pages/services/ECommerce';
import SEOPerformance from './pages/services/SEOPerformance';
import SocialMedia from './pages/services/SocialMedia';
import ContentCreation from './pages/services/ContentCreation';
import GraphicDesign from './pages/services/GraphicDesign';
import MobileApp from './pages/services/MobileApp';
import MaintenanceSupport from './pages/services/MaintenanceSupport';

// Sektörel Çözümler Sayfaları
import SectoralSolutions from './pages/sectoralSolutions/SectoralSolutions';
import ClinicWebsite from './pages/sectoralSolutions/health/ClinicWebsite';
import HairTransplantClinic from './pages/sectoralSolutions/health/HairTransplantClinic';
import TransportCompany from './pages/sectoralSolutions/transport/TransportCompany';
import CargoCompany from './pages/sectoralSolutions/transport/CargoCompany';
import Architect from './pages/sectoralSolutions/construction/Architect';
import PaintingService from './pages/sectoralSolutions/construction/PaintingService';
import DecorationService from './pages/sectoralSolutions/construction/DecorationService';
import Locksmith from './pages/sectoralSolutions/service/Locksmith';
import TowService from './pages/sectoralSolutions/service/TowService';
import RepairService from './pages/sectoralSolutions/service/RepairService';

// Google Analytics
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

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
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/hizmetlerimiz/web-tasarim" element={<CorporateWeb />} />
            <Route path="/hizmetlerimiz/e-ticaret" element={<ECommerce />} />
            <Route path="/hizmetlerimiz/seo" element={<SEOPerformance />} />
            <Route path="/hizmetlerimiz/sosyal-medya" element={<SocialMedia />} />
            <Route path="/hizmetlerimiz/icerik-uretimi" element={<ContentCreation />} />
            <Route path="/hizmetlerimiz/grafik-tasarim" element={<GraphicDesign />} />
            <Route path="/hizmetlerimiz/mobil-uygulama" element={<MobileApp />} />
            <Route path="/hizmetlerimiz/bakim-destek" element={<MaintenanceSupport />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/portfoy" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
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
              <Route path="bulk-email" element={<AdminBulkEmail />} />
              <Route path="email-list" element={<AdminEmailList />} />
            </Route>
            
            {/* Sektörel Çözümler Rotaları */}
            <Route path="/sektorel-cozumler" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/saglik/klinik-web-sitesi" element={<ClinicWebsite />} />
            <Route path="/sektorel-cozumler/saglik/sac-ekim-klinigi" element={<HairTransplantClinic />} />
            <Route path="/sektorel-cozumler/nakliyat/nakliye-firmasi" element={<TransportCompany />} />
            <Route path="/sektorel-cozumler/nakliyat/kargo-firmasi" element={<CargoCompany />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/mimar" element={<Architect />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/boya-badana" element={<PaintingService />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/dekorasyon" element={<DecorationService />} />
            <Route path="/sektorel-cozumler/hizmet/cilingir" element={<Locksmith />} />
            <Route path="/sektorel-cozumler/hizmet/cekici-hizmeti" element={<TowService />} />
            <Route path="/sektorel-cozumler/hizmet/tamir-servisi" element={<RepairService />} />
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
