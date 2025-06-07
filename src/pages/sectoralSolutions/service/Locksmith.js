import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './Locksmith.css';

const Locksmith = () => {
  // SEO için Schema.org Markup - Service Schema
  const locksmithServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Çilingir Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Çilingir Firma Web Sitesi", "Çilingir Web Sitesi Kurma", "Acil Çilingir Web Sitesi"],
    "description": "Çilingir firmaları için 7/24 acil hizmet odaklı, tek tıkla arama özellikli, konum bazlı profesyonel web sitesi tasarımı ve geliştirme hizmetleri. Google'da üst sıralarda yer almanızı sağlayan SEO uyumlu çilingir web siteleri."
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Çilingir web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Çilingir web sitesi tasarımı seçtiğiniz pakete bağlı olarak 5-10 iş günü içerisinde tamamlanır. Başlangıç paketi için 5 gün, premium paket için 7 gün, kurumsal paket için 10 gün sürmektedir. Acil ihtiyaçlar için 48 saat içinde temel bir çilingir web sitesi kurulumu da mümkündür."
        }
      },
      {
        "@type": "Question",
        "name": "Çilingir web sitesi maliyeti ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Çilingir web sitesi fiyatları 4.900₺'den başlamaktadır. Başlangıç paketi 4.900₺, Premium paket 7.900₺, Kurumsal paket 12.900₺'dir. Tüm paketlerde tek tıkla arama, WhatsApp entegrasyonu ve mobil uyumlu tasarım bulunmaktadır."
        }
      }
    ]
  };

  return (
    <div className="sectoral-page locksmith-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Çilingir Web Sitesi Tasarımı | 7/24 Acil Hizmet Odaklı Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Çilingir web sitesi tasarımı ve kurma hizmetleri. Tek tıkla arama, konum bazlı hizmet, 7/24 acil çağrı sistemi. Ucuz çilingir web sitesi fiyatları 4.900₺'den başlar. Google'da üst sıralarda yer alan SEO uyumlu çilingir web siteleri." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="çilingir web sitesi, çilingir web sitesi tasarımı, çilingir web sitesi kurma, ucuz çilingir web sitesi, çilingir firma web sitesi, acil çilingir web sitesi, çilingir web sitesi fiyatları" 
        />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(locksmithServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="locksmith-hero">
        <div className="container">
          <div className="locksmith-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/hizmet">Hizmet</Link> / <span>Çilingir Web Sitesi</span>
          </div>
          <div className="locksmith-hero-content">
            <div className="locksmith-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Çilingir Web Sitesi Tasarımı</strong> - <span className="sectoral-highlight">7/24 Acil Hizmet Odaklı</span> Profesyonel Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                <strong>Çilingir firmanız</strong> için <em>acil durumlarda</em> müşterilerinizin size <strong>anında ulaşabileceği</strong>, 
                <strong>tek tıkla arama özellikli</strong>, <strong>konum bazlı hizmet</strong> sunan ve 
                <strong>Google'da üst sıralarda yer alan</strong> profesyonel <strong>çilingir web sitesi tasarımı</strong> hizmetleri. 
                <strong>Ucuz çilingir web sitesi</strong> fiyatlarıyla <strong>4.900₺</strong>'den başlayan paketler.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="locksmith-hero-visual">
              <div className="locksmith-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-nav"></div>
                  <div className="mockup-hero-img"></div>
                  <div className="mockup-emergency">
                    <div className="mockup-call-btn"></div>
                    <div className="mockup-location"></div>
                  </div>
                  <div className="mockup-services">
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Çilingir Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Acil <strong>anahtar, kapı ve kilit sorunlarında</strong> müşteriler <strong>%92 oranında</strong> önce internetten <strong>çilingir arayışına</strong> giriyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Anında Erişim</h3>
              <p className="sectoral-card-text">
                <strong>Tek tıkla arama</strong> özelliği sayesinde, <em>acil durumda olan müşteriler</em> size <strong>saniyeler içinde ulaşabilir</strong>. Kaçırılan her çağrı, kaybedilen bir müşteridir.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Konum Bazlı Hizmet</h3>
              <p className="sectoral-card-text">
                <strong>Mobil cihazların konum bilgisini</strong> kullanarak, müşterilerin bulunduğu yere <em>en hızlı şekilde ulaşmanızı</em> sağlayan <strong>çilingir web sitesi</strong> teknolojileri.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="sectoral-card-title">Güven Oluşturma</h3>
              <p className="sectoral-card-text">
                <strong>Profesyonel çilingir web sitesi</strong>, müşterilerde <em>güven duygusu oluşturur</em>. Müşteri yorumları ve lisanslarınızı göstererek <strong>güvenilirliğinizi kanıtlayın</strong>.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                <strong>"Yakınımda çilingir"</strong> araması yapan potansiyel müşterilerin karşısına çıkarak, <em>rakiplerinizden bir adım öne geçin</em>. <strong>Çilingir web sitesi SEO</strong> ile müşteri kazanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="locksmith-pricing">
        <div className="container">
          <div className="locksmith-section-header">
            <h2 className="locksmith-section-title">Çilingir Web Sitesi Paketleri</h2>
            <p className="locksmith-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun <strong>çilingir web sitesi çözümleri</strong>
            </p>
          </div>

          <div className="locksmith-pricing-grid">
            <div className="locksmith-pricing-card">
              <div className="locksmith-pricing-header">
                <h3 className="locksmith-pricing-title">Başlangıç Paketi</h3>
                <div className="locksmith-pricing-price">
                  <span className="locksmith-price-amount">4.900 ₺</span>
                  <span className="locksmith-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="locksmith-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> <strong>Tek Tıkla Arama Butonu</strong></li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Hizmet Bölgesi Haritası</li>
                  <li><i className="fas fa-check"></i> <strong>SEO Temel Optimizasyon</strong></li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Konum Bazlı Müşteri Yönlendirme</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Google Ads Yönetimi</li>
                </ul>
              </div>
              <div className="locksmith-pricing-footer">
                <Link to="/iletisim" className="locksmith-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locksmith-cta">
        <div className="container">
          <div className="locksmith-cta-content">
            <h2 className="locksmith-cta-title">
              Çilingir Firmanız İçin <span className="sectoral-highlight">Acil Hizmet Odaklı</span> Web Sitesi Oluşturalım
            </h2>
            <p className="locksmith-cta-text">
              <strong>7/24 hizmet veren çilingir firmanız</strong> için acil durumlarda müşterilerinizin sizi hemen bulabileceği, <em>konum bazlı ve SEO dostu</em> bir <strong>çilingir web sitesi</strong> için hemen iletişime geçin.
            </p>
            <div className="locksmith-cta-buttons">
              <Link to="/iletisim" className="primary-button">Ücretsiz Keşif Toplantısı</Link>
              <a href="tel:+905444882303" className="secondary-button">
                <i className="fas fa-phone-alt"></i> Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locksmith; 