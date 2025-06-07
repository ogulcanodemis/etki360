import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './RestaurantWebsite.css';

const RestaurantWebsite = () => {
  return (
    <div className="restaurant-website-page">
      <Helmet>
        <title>Profesyonel Restoran Web Sitesi Tasarımı | QR Menü ve Online Sipariş</title>
        <meta name="description" content="Restoranınız için modern, SEO uyumlu ve mobil dostu web sitesi çözümleri. Online rezervasyon, dijital menü (QR menü) ve paket servis entegrasyonları ile müşteri potansiyelinizi artırın." />
        <meta name="keywords" content="restoran web sitesi, kafe web sitesi, online sipariş sitesi, qr menü, dijital menü, restoran web tasarım, paket servis sistemi" />
      </Helmet>

      <section className="restaurant-hero">
        <div className="container">
          <div className="restaurant-breadcrumb">
            <Link to="/">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Ana Sayfa
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Sektörel Çözümler
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler/yiyecek">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Yiyecek & İçecek
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Restoran Web Sitesi</span>
          </div>

          <div className="restaurant-hero-content">
            <div className="restaurant-hero-text">
              <h1 className="restaurant-hero-title">
                <strong>Restoranınız</strong> <span style={{color: "#D2691E", fontWeight: "bold"}}><strong>Dijitalleşiyor:</strong></span> <strong>Profesyonel Web Çözümleri</strong>
              </h1>
              <p className="restaurant-hero-description">
                <strong>Müşterilerinize bir tık uzakta olun</strong>, lezzetlerinizi daha <em>geniş kitlelere</em> ulaştırın. <strong>Online rezervasyon</strong>, <em>dijital menü</em> ve <strong>paket servis entegrasyonları</strong> ile müşteri potansiyelinizi artırın.
              </p>
              <div className="restaurant-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy/restoran" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="restaurant-content">
        <section className="restaurant-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Neden Restoranınız İçin</strong> Bir Web Sitesi Şart?</h2>
            </div>
            <p>
              Gelişen teknolojiyle birlikte müşteriler, restoranları ve menüleri öncelikle internet üzerinden araştırıyor. Profesyonel bir web sitesi, markanızın dijital vitrinidir ve potansiyel müşterileriniz üzerinde ilk izlenimi bırakır. Etkileyici bir web sitesi ile;
            </p>
            <ul className="restaurant-features-list">
              <li>Marka bilinirliğinizi ve prestijinizi artırırsınız.</li>
              <li>Menünüzü, görsellerle zenginleştirerek online olarak sergilersiniz.</li>
              <li>Online rezervasyon alarak masa yönetiminizi kolaylaştırırsınız.</li>
              <li>Paket servis ve online sipariş sistemleri ile gelirinizi katlarsınız.</li>
              <li>SEO (Arama Motoru Optimizasyonu) ile yerel aramalarda üst sıralara çıkarsınız.</li>
            </ul>
          </div>
        </section>

        <section className="restaurant-solutions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Sunduğumuz Web Sitesi</strong> ve Entegrasyon Çözümleri</h2>
            </div>
            <p>
              İşletmenizin ihtiyaçlarına özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.
            </p>
            <div className="restaurant-solutions-grid">
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>Göz Alıcı Tasarım</strong></h3>
                <p className="restaurant-solution-description">Restoranınızın konseptine uygun, iştah açan ve estetik web tasarımları.</p>
              </div>
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M9 9h6v6H9z"></path>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>Dijital ve QR Menü</strong></h3>
                <p className="restaurant-solution-description">Kolayca güncelleyebileceğiniz, müşterilerinizin telefonlarından anında erişebileceği pratik QR menü çözümleri.</p>
              </div>
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>Online Rezervasyon Sistemi</strong></h3>
                <p className="restaurant-solution-description">Web siteniz üzerinden 7/24 rezervasyon almanızı sağlayan entegre modüller.</p>
              </div>
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8h16z"></path>
                    <path d="M18 10 L18 15 C18 16.1 17.1 17 16 17 L8 17 C6.9 17 6 16.1 6 15 L6 10"></path>
                    <line x1="15" y1="17" x2="15" y2="20"></line>
                    <line x1="9" y1="17" x2="9" y2="20"></line>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>Online Sipariş ve Paket Servis</strong></h3>
                <p className="restaurant-solution-description">Kendi komisyonsuz sipariş sisteminizi kurun, müşterilerinize doğrudan ulaşın.</p>
              </div>
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>Market ve Süpermarket Entegrasyonu</strong></h3>
                <p className="restaurant-solution-description">Anlaşmalı market platformları ile entegre çalışabilen altyapı seçenekleri.</p>
              </div>
              <div className="restaurant-solution-card">
                <div className="restaurant-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="restaurant-solution-title"><strong>SEO ve Yerel Pazarlama</strong></h3>
                <p className="restaurant-solution-description">Google Haritalar kaydı ve yerel arama optimizasyonu ile bölgenizdeki müşterilere kolayca ulaşın.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="restaurant-cta">
          <div className="container">
            <div className="restaurant-cta-content">
              <h2 className="restaurant-cta-title">
                <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
              </h2>
              <p className="restaurant-cta-description">
                <strong>İstanbul'daki restoranlar</strong> ve <em>kafeler</em> için <strong>profesyonel web sitesi</strong> çözümlerimiz ile potansiyel müşterilerinize <em>hızla</em> ulaşın. <strong>Dijital varlığınızı</strong> oluşturmak, <strong>menünüzü sergilemek</strong> ve <em>rezervasyon almanızı</em> kolaylaştırmak için hemen <strong>ücretsiz danışmanlık</strong> alın.
              </p>
              <div className="restaurant-cta-buttons">
                <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
                <Link to="/ornekler/restoran" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
              <p className="restaurant-cta-note">
                * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RestaurantWebsite; 