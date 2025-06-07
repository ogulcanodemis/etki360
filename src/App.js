import React, { useEffect } from 'react';
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
import PsychologistWebsite from './pages/sectoralSolutions/health/PsychologistWebsite';
import HairdresserWebsite from './pages/sectoralSolutions/beauty/HairdresserWebsite';
import BeautySalonWebsite from './pages/sectoralSolutions/beauty/BeautySalonWebsite';
import ProstheticNailWebsite from './pages/sectoralSolutions/beauty/ProstheticNailWebsite';
import EpilationWebsite from './pages/sectoralSolutions/beauty/EpilationWebsite';
import TransportCompany from './pages/sectoralSolutions/transport/TransportCompany';
import CargoCompany from './pages/sectoralSolutions/transport/CargoCompany';
import VehicleTrackingSystem from './pages/sectoralSolutions/transport/VehicleTrackingSystem';
import StorageAndLogisticsWebsite from './pages/sectoralSolutions/transport/StorageAndLogisticsWebsite';
import PrivateSchoolWebsite from './pages/sectoralSolutions/education/PrivateSchoolWebsite';
import CourseCenterWebsite from './pages/sectoralSolutions/education/CourseCenterWebsite';
import LanguageSchoolWebsite from './pages/sectoralSolutions/education/LanguageSchoolWebsite';
import PreschoolWebsite from './pages/sectoralSolutions/education/PreschoolWebsite';
import RestaurantWebsite from './pages/sectoralSolutions/food/RestaurantWebsite';
import CafeWebsite from './pages/sectoralSolutions/food/CafeWebsite';
import CateringWebsite from './pages/sectoralSolutions/food/CateringWebsite';
import OnlineOrderingWebsite from './pages/sectoralSolutions/food/OnlineOrderingWebsite';
import Architect from './pages/sectoralSolutions/construction/Architect';
import PaintingService from './pages/sectoralSolutions/construction/PaintingService';
import DecorationService from './pages/sectoralSolutions/construction/DecorationService';
import ConstructionCompany from './pages/sectoralSolutions/construction/ConstructionCompany';
import Locksmith from './pages/sectoralSolutions/service/Locksmith';
import TowService from './pages/sectoralSolutions/service/TowService';
import RepairService from './pages/sectoralSolutions/service/RepairService';
import CleaningCompany from './pages/sectoralSolutions/service/CleaningCompany';
import LawyerWebsite from './pages/sectoralSolutions/law/LawyerWebsite';
import CorporateLawWebsite from './pages/sectoralSolutions/law/CorporateLawWebsite';
import LaborLawConsultingWebsite from './pages/sectoralSolutions/law/LaborLawConsultingWebsite';
import IntellectualPropertyLawWebsite from './pages/sectoralSolutions/law/IntellectualPropertyLawWebsite';
import CriminalLawWebsite from './pages/sectoralSolutions/law/CriminalLawWebsite';
import ConsultingFirmWebsite from './pages/sectoralSolutions/consulting/ConsultingFirmWebsite';
import CorporateConsultingWebsite from './pages/sectoralSolutions/consulting/CorporateConsultingWebsite';
import ManagementConsultingWebsite from './pages/sectoralSolutions/consulting/ManagementConsultingWebsite';
import FinancialConsultingWebsite from './pages/sectoralSolutions/consulting/FinancialConsultingWebsite';
import HospitalWebsite from './pages/sectoralSolutions/health/HospitalWebsite';
import DentalClinicWebsite from './pages/sectoralSolutions/health/DentalClinicWebsite';
import HomeToHomeMoving from './pages/sectoralSolutions/transport/HomeToHomeMoving';
import LogisticsCompany from './pages/sectoralSolutions/transport/LogisticsCompany';

// App Content Component (Router içinde olması gerekiyor)
const AppContent = () => {
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
            <Route path="/sektorel-cozumler/saglik" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/nakliyat" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/hizmet" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/guzellik" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/hukuk" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/egitim" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/yiyecek" element={<SectoralSolutions />} />
            <Route path="/sektorel-cozumler/saglik/klinik-web-sitesi" element={<ClinicWebsite />} />
            <Route path="/sektorel-cozumler/saglik/sac-ekim-klinigi" element={<HairTransplantClinic />} />
            <Route path="/sektorel-cozumler/saglik/psikolog-web-sitesi" element={<PsychologistWebsite />} />
            <Route path="/sektorel-cozumler/saglik/hastane-web-sitesi" element={<HospitalWebsite />} />
            <Route path="/sektorel-cozumler/saglik/dis-klinigi-web-sitesi" element={<DentalClinicWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/kuafor-web-sitesi" element={<HairdresserWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/kuafor-salonu-web-sitesi" element={<HairdresserWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi" element={<BeautySalonWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/protez-tirnak-web-sitesi" element={<ProstheticNailWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/epilasyon-web-sitesi" element={<EpilationWebsite />} />
            <Route path="/sektorel-cozumler/guzellik/epilasyon-merkezi-web-sitesi" element={<EpilationWebsite />} />
            <Route path="/sektorel-cozumler/nakliyat/nakliye-firmasi" element={<TransportCompany />} />
            <Route path="/sektorel-cozumler/nakliyat/kargo-firmasi" element={<CargoCompany />} />
            <Route path="/sektorel-cozumler/nakliyat/arac-takip-yonetim-sistemi" element={<VehicleTrackingSystem />} />
            <Route path="/sektorel-cozumler/nakliyat/depolama-lojistik-web-sitesi" element={<StorageAndLogisticsWebsite />} />
            <Route path="/sektorel-cozumler/nakliyat/evden-eve-nakliyat" element={<HomeToHomeMoving />} />
            <Route path="/sektorel-cozumler/nakliyat/lojistik-firmasi" element={<LogisticsCompany />} />
            <Route path="/sektorel-cozumler/egitim/ozel-okul-web-sitesi" element={<PrivateSchoolWebsite />} />
            <Route path="/sektorel-cozumler/egitim/kurs-merkezi-web-sitesi" element={<CourseCenterWebsite />} />
            <Route path="/sektorel-cozumler/egitim/dil-okulu-web-sitesi" element={<LanguageSchoolWebsite />} />
            <Route path="/sektorel-cozumler/egitim/kres-ve-anaokulu-web-sitesi" element={<PreschoolWebsite />} />
            <Route path="/sektorel-cozumler/egitim/kres-anaokulu-web-sitesi" element={<PreschoolWebsite />} />
            <Route path="/sektorel-cozumler/yiyecek/restoran-web-sitesi" element={<RestaurantWebsite />} />
            <Route path="/sektorel-cozumler/yiyecek/kafe-ve-pastane-web-sitesi" element={<CafeWebsite />} />
            <Route path="/sektorel-cozumler/yiyecek/catering-web-sitesi" element={<CateringWebsite />} />
            <Route path="/sektorel-cozumler/yiyecek/online-yemek-siparisi-web-sitesi" element={<OnlineOrderingWebsite />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/mimar" element={<Architect />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/boya-badana" element={<PaintingService />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/dekorasyon" element={<DecorationService />} />
            <Route path="/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi" element={<ConstructionCompany />} />
            <Route path="/sektorel-cozumler/hizmet/cilingir" element={<Locksmith />} />
            <Route path="/sektorel-cozumler/hizmet/cekici-hizmeti" element={<TowService />} />
            <Route path="/sektorel-cozumler/hizmet/tamir-servisi" element={<RepairService />} />
            <Route path="/sektorel-cozumler/hizmet/temizlik-sirketi" element={<CleaningCompany />} />
            <Route path="/sektorel-cozumler/hukuk/avukat-web-sitesi" element={<LawyerWebsite />} />
            <Route path="/sektorel-cozumler/hukuk/kurumsal-hukuk-danismanligi" element={<CorporateLawWebsite />} />
            <Route path="/sektorel-cozumler/hukuk/is-hukuku-danismanligi" element={<LaborLawConsultingWebsite />} />
            <Route path="/sektorel-cozumler/hukuk/fikri-mulkiyet-danismanligi" element={<IntellectualPropertyLawWebsite />} />
            <Route path="/sektorel-cozumler/hukuk/ceza-hukuku-web-sitesi" element={<CriminalLawWebsite />} />
            <Route path="/sektorel-cozumler/danismanlik/danismanlik-firmasi-web-sitesi" element={<ConsultingFirmWebsite />} />
            <Route path="/sektorel-cozumler/danismanlik/kurumsal-danismanlik-web-sitesi" element={<CorporateConsultingWebsite />} />
            <Route path="/sektorel-cozumler/danismanlik/yonetim-danismanligi-web-sitesi" element={<ManagementConsultingWebsite />} />
            <Route path="/sektorel-cozumler/danismanlik/finansal-danismanlik-web-sitesi" element={<FinancialConsultingWebsite />} />
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
