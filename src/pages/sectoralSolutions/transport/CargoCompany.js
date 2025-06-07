import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CargoCompany.css';

const CargoCompany = () => {
  useEffect(() => {
    document.body.classList.add('cargo-page');
    return () => {
      document.body.classList.remove('cargo-page');
    };
  }, []);
  // SEO için Schema Markup - Service Schema
  const cargoServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kargo Firması Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Kargo Web Sitesi", "Kurye Firması Web Sitesi", "Kargo Takip Sistemli Web Sitesi"],
    "description": "Kargo ve kurye firmaları için kargo takip sistemi, online sipariş formu ve e-ticaret entegrasyonu içeren profesyonel web sitesi tasarımı ve geliştirme hizmetleri. 8.900₺'den başlayan fiyatlarla SEO uyumlu kargo firması web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kargo Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Temel kargo takip sistemi ve şube bulucu içeren web sitesi paketi",
          "price": "8900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Premium Paket",
          "description": "Gelişmiş kargo takip sistemi ve online sipariş sistemi içeren web sitesi paketi",
          "price": "17900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "İleri düzey kargo takip sistemi, e-ticaret entegrasyonu ve API desteği içeren web sitesi paketi",
          "price": "29900",
          "priceCurrency": "TRY"
        }
      ]
    }
  };

  // Sık Sorulan Sorular Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kargo takip sistemi nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kargo takip sistemi, firmanızın mevcut takip altyapısına entegre çalışır. Müşteriler, web sitesi üzerinden kargo takip numaralarını girerek gönderilerinin güncel durumunu anlık olarak görüntüleyebilirler. Premium ve Kurumsal paketlerde harita entegrasyonu sayesinde kargonun fiziksel konumu da gösterilir."
        }
      },
      {
        "@type": "Question",
        "name": "Online sipariş sistemi kurmak için ne gerekli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online sipariş sistemi için Premium veya Kurumsal paketlerimizi tercih etmeniz gerekir. Sistem, müşterilerinizin gönderici ve alıcı bilgilerini girerek, kargo boyutlarını ve ağırlığını belirterek online sipariş oluşturmasına olanak tanır. Ödeme sistemi entegrasyonu ile sipariş tamamlandıktan sonra, sistem otomatik olarak bir kargo takip numarası oluşturur."
        }
      },
      {
        "@type": "Question",
        "name": "E-ticaret entegrasyonu hangi platformları destekler?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kurumsal paketimizde yer alan e-ticaret entegrasyonu; WooCommerce, Shopify, Magento, Opencart, Trendyol, Hepsiburada gibi popüler platformlar ile uyumlu çalışır. API desteği sayesinde özel geliştirilen e-ticaret sistemleri ile de entegrasyon mümkündür. Bu entegrasyon sayesinde, e-ticaret sitelerinden gelen siparişler otomatik olarak kargo sistemine aktarılır."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kargo Firması Web Sitesi Tasarımı | Kargo Takip Sistemli Web Sitesi | etki360",
    "description": "Kargo ve kurye firmaları için kargo takip sistemi, online sipariş formu ve e-ticaret entegrasyonu içeren profesyonel web sitesi tasarımı. 8.900₺'den başlayan fiyatlarla.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://etki360.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sektörel Çözümler",
          "item": "https://etki360.com/sektorel-cozumler"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Nakliyat",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Kargo Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat/kargo-firmasi"
        }
      ]
    }
  };

  return (
    <div className="sectoral-page cargo-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Kargo Firması Web Sitesi Tasarımı | Kargo Takip Sistemli Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Kargo ve kurye firmanız için kargo takip sistemi, online sipariş formu ve şube bulucu içeren profesyonel web sitesi çözümleri. E-ticaret entegrasyonu ve API desteği ile tam entegre kargo web sitesi. 8.900₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="kargo firması web sitesi, kargo takip sistemi, online sipariş sistemi, kurye firması web sitesi, e-ticaret entegrasyonu, şube bulucu, kargo web tasarım, kargo api entegrasyonu" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/nakliyat/kargo-firmasi" />
        <meta property="og:title" content="Kargo Firması Web Sitesi Tasarımı | Kargo Takip Sistemli Web Sitesi | etki360" />
        <meta property="og:description" content="Kargo ve kurye firmanız için kargo takip sistemi, online sipariş formu ve şube bulucu içeren profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/kargo-firmasi-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kargo Firması Web Sitesi Tasarımı | Kargo Takip Sistemli Web Sitesi | etki360" />
        <meta name="twitter:description" content="Kargo ve kurye firmanız için kargo takip sistemi, online sipariş formu ve şube bulucu içeren profesyonel web sitesi çözümleri." />
        <meta name="twitter:image" content="https://etki360.com/images/og/kargo-firmasi-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/nakliyat/kargo-firmasi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(cargoServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Breadcrumb Bölümü */}
      <section className="cargo-breadcrumb-section">
        <div className="container">
          <div className="cargo-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Kargo Firması Web Sitesi</span>
          </div>
        </div>
      </section>

      <section className="cargo-hero">
        <div className="container">
          <div className="cargo-hero-content">
            <div className="cargo-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Kargo Firması Web Sitesi</strong> - <span className="sectoral-highlight">Kargo Takip Sistemli</span> Çözümler
              </h1>
              <p className="sectoral-hero-description">
                <strong>Kargo ve kurye firmanız</strong> için müşterilerinizin <em>kargolarını takip edebileceği</em>, <strong>online sipariş oluşturabileceği</strong> ve <strong>e-ticaret entegrasyonu</strong> sunan <strong>profesyonel web sitesi</strong> çözümleri. <strong>8.900₺</strong>'den başlayan fiyatlarla <em>müşteri memnuniyetini %40 artıran</em> sistemler.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="cargo-hero-visual">
              <div className="cargo-mockup">
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
                  <div className="mockup-tracking">
                    <div className="mockup-search-bar"></div>
                    <div className="mockup-result"></div>
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
            <h2 className="sectoral-section-title"><strong>Kargo Firması Web Sitesi</strong> Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              <strong>Kargo sektöründe</strong> müşterilerin <strong>%89'u</strong> bir <em>kargo firmasının web sitesini</em>, <strong>kargolarını takip etmek</strong> ve <strong>hizmet kalitesini değerlendirmek</strong> için kullanıyor. <strong>Online sipariş sistemi</strong> ile verimliliğinizi <strong>%85 artırın</strong>.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3 className="sectoral-card-title">Kargo Takip Sistemi</h3>
              <p className="sectoral-card-text">
                <strong>Müşterilerin en çok ihtiyaç duyduğu</strong> özellik olan <em>kargo takip sistemi</em> ile <strong>müşteri memnuniyetini %40 artırın</strong> ve <strong>müşteri hizmetleri çağrılarını %60 azaltın</strong>. <strong>Harita entegrasyonu</strong> ile kargo konumunu gerçek zamanlı görüntüleyin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="sectoral-card-title">Online Kargo Sipariş Sistemi</h3>
              <p className="sectoral-card-text">
                <strong>Müşterilerinizin online sipariş oluşturabilmeleri</strong> sayesinde <em>iş süreçlerinizi hızlandırın</em> ve <strong>manuel veri girişi hatalarını %85 azaltın</strong>. <strong>Kargo firmanız</strong> için <em>operasyonel verimliliği artıran</em> sipariş formu.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Bölge Bazlı Fiyatlandırma</h3>
              <p className="sectoral-card-text">
                Farklı bölgeler için özel fiyat hesaplama sistemi ile müşterilerinize anlık ve şeffaf fiyat bilgisi sunun.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="sectoral-card-title">Müşteri Hizmetleri Entegrasyonu</h3>
              <p className="sectoral-card-text">
                Canlı destek ve bildirim sistemleri ile müşterilerinize hızlı yanıt verin, müşteri memnuniyetini artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Kargo Firması Web Sitesi</strong> Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Kargo ve kurye firmanızın</strong> ihtiyaçlarına özel, <em>müşteri odaklı</em> ve <strong>müşteri memnuniyetini artıran</strong> <strong>kargo takip sistemli</strong> web sitesi çözümleri. <strong>E-ticaret entegrasyonu</strong> ve <strong>API desteği</strong>.
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Gelişmiş Kargo Takip Sistemi</h3>
                <p className="sectoral-feature-text">
                  <strong>Kargo takip numarası</strong> veya <strong>sipariş numarası</strong> ile <em>anlık takip imkanı</em>. <strong>Google Haritalar</strong> üzerinde gösterim ve <strong>teslimat sürecindeki tüm aşamaları</strong> görüntüleme. <strong>Müşteri memnuniyetini %40 artıran</strong> kargo izleme sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">SMS ve E-posta Bildirim</h3>
                <p className="sectoral-feature-text">
                  Kargonun durumu değiştikçe otomatik SMS ve e-posta bildirimleri. Teslimat saati yaklaştığında ön bildirim sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Kargo Ücret Hesaplama</h3>
                <p className="sectoral-feature-text">
                  Ağırlık, boyut ve mesafe bilgilerine göre anlık fiyat hesaplama. Farklı hizmet tipleri için özel tarifeler.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Kargo Sipariş Formu</h3>
                <p className="sectoral-feature-text">
                  <strong>Kullanıcı dostu arayüz</strong> ile <em>kolay kargo siparişi</em>. <strong>Adres defteri</strong> oluşturma ve <strong>geçmiş gönderileri</strong> görüntüleme imkanı. <strong>Manuel veri girişi hatalarını %85 azaltan</strong> otomatik sipariş sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Müşteri Paneli</h3>
                <p className="sectoral-feature-text">
                  Kurumsal ve bireysel müşteriler için özel paneller. Fatura görüntüleme, raporlama ve kargo geçmişi izleme.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-store"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Şube Bulucu</h3>
                <p className="sectoral-feature-text">
                  Konum bazlı en yakın şube bulma. Şube çalışma saatleri, iletişim bilgileri ve yol tarifi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Çoklu Dil Desteği</h3>
                <p className="sectoral-feature-text">
                  Uluslararası hizmet veren kargo firmaları için çoklu dil desteği. Müşteri deneyimini iyileştiren lokalizasyon.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">E-ticaret Platformları Entegrasyonu</h3>
                <p className="sectoral-feature-text">
                  <strong>WooCommerce, Shopify, Trendyol, Hepsiburada</strong> gibi <em>popüler e-ticaret platformları</em> ile entegrasyon. <strong>API desteği</strong> ile <strong>otomatik sipariş işleme</strong> ve <strong>iş hacminizi genişleten</strong> entegrasyon çözümleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel <strong>Kargo Firması Web Sitesinin</strong> Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <strong>Kargo takip sistemli</strong> ve <em>online sipariş formlu</em> <strong>kargo web sitesi</strong>, <strong>müşteri memnuniyetinizi %40 artırır</strong> ve <strong>müşteri hizmetleri çağrılarını %60 azaltır</strong>
            </p>
          </div>

          <div className="cargo-benefits-content">
            <div className="cargo-benefits-mockup">
              <div className="benefits-mockup-container">
                <div className="benefits-mockup-header">
                  <div className="benefits-mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="benefits-mockup-content">
                  <div className="benefits-mockup-nav"></div>
                  <div className="benefits-mockup-title"></div>
                  <div className="benefits-mockup-tracking">
                    <div className="benefits-mockup-search"></div>
                    <div className="benefits-mockup-steps">
                      <div className="benefits-mockup-step active"></div>
                      <div className="benefits-mockup-step active"></div>
                      <div className="benefits-mockup-step"></div>
                      <div className="benefits-mockup-step"></div>
                    </div>
                    <div className="benefits-mockup-map"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cargo-benefits-list">
              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Müşteri Memnuniyeti Artışı</h3>
                  <p>Anlık kargo takibi ile müşteri memnuniyetinde %40'a varan artış sağlayabilirsiniz.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Operasyonel Verimlilik</h3>
                  <p>Online sipariş sistemi ile manuel veri girişinden kaynaklanan hataları %85 oranında azaltabilirsiniz.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Müşteri Hizmetleri Yükü Azalır</h3>
                  <p>Self-servis kargo takibi sayesinde müşteri hizmetleri çağrılarında %60'a varan azalma.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Kurumsal İmaj Güçlenir</h3>
                  <p>Profesyonel bir web sitesi ile kurumsal imajınızı güçlendirir, müşteri güvenini artırırsınız.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>E-ticaret İş Ortaklıkları</h3>
                  <p>API entegrasyonları ile e-ticaret siteleriyle iş ortaklığı kurabilir, iş hacminizi genişletebilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="cargo-pricing">
        <div className="container">
          <div className="cargo-section-header">
            <h2 className="cargo-section-title"><strong>Kargo Firması Web Sitesi</strong> Paketleri ve Fiyatları</h2>
            <p className="cargo-section-subtitle">
              <strong>Kargo ve kurye firmanız</strong> için <em>ihtiyaçlarınıza</em> uygun <strong>kargo takip sistemli web sitesi</strong> çözümleri. <strong>12.900₺</strong>'den başlayan fiyatlarla.
            </p>
          </div>

          <div className="cargo-pricing-grid">
            <div className="cargo-pricing-card">
              <div className="cargo-pricing-header">
                <div className="cargo-pricing-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="cargo-pricing-title">Temel Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">12.900 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik Ödeme</span>
                </div>
                <p className="cargo-pricing-description">Küçük kargo firmaları için ideal başlangıç paketi</p>
              </div>
              <div className="cargo-pricing-features">
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Kargo Takip Sistemi</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Responsive Tasarım</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>5 Sayfa Web Sitesi</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>SEO Optimizasyonu</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>1 Yıl Destek</span>
                </div>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Paketi Seç</Link>
              </div>
            </div>

            <div className="cargo-pricing-card featured">
              <div className="cargo-pricing-badge">En Popüler</div>
              <div className="cargo-pricing-header">
                <div className="cargo-pricing-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <h3 className="cargo-pricing-title">Profesyonel Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">24.900 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik Ödeme</span>
                </div>
                <p className="cargo-pricing-description">Büyüyen kargo firmaları için kapsamlı çözüm</p>
              </div>
              <div className="cargo-pricing-features">
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Gelişmiş Kargo Takip</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Online Sipariş Sistemi</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Müşteri Paneli</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>SMS/E-posta Bildirim</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>API Entegrasyonu</span>
                </div>
                <div className="cargo-feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>2 Yıl Destek</span>
                </div>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Paketi Seç</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Kargo Firması Web Sitesi</strong> - Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              <strong>Kargo firması web sitesi</strong> hakkında merak ettiğiniz tüm bilgiler, <em>kargo takip sistemi</em>, <em>online sipariş formu</em>, <em>e-ticaret entegrasyonu</em> ve <em>API desteği</em>
            </p>
          </div>

          <div className="cargo-faq-grid">
            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Kargo takip sistemi nasıl çalışır?</h3>
              <p className="cargo-faq-answer">
                Kargo takip sistemi, firmanızın mevcut takip altyapısına entegre çalışır. Müşteriler, web sitesi üzerinden kargo takip numaralarını girerek gönderilerinin güncel durumunu anlık olarak görüntüleyebilirler. Premium ve Kurumsal paketlerde harita entegrasyonu sayesinde kargonun fiziksel konumu da gösterilir.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Online sipariş sistemi kurmak için ne gerekli?</h3>
              <p className="cargo-faq-answer">
                Online sipariş sistemi için Premium veya Kurumsal paketlerimizi tercih etmeniz gerekir. Sistem, müşterilerinizin gönderici ve alıcı bilgilerini girerek, kargo boyutlarını ve ağırlığını belirterek online sipariş oluşturmasına olanak tanır. Ödeme sistemi entegrasyonu ile sipariş tamamlandıktan sonra, sistem otomatik olarak bir kargo takip numarası oluşturur.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">E-ticaret entegrasyonu hangi platformları destekler?</h3>
              <p className="cargo-faq-answer">
                Kurumsal paketimizde yer alan e-ticaret entegrasyonu; WooCommerce, Shopify, Magento, Opencart, Trendyol, Hepsiburada gibi popüler platformlar ile uyumlu çalışır. API desteği sayesinde özel geliştirilen e-ticaret sistemleri ile de entegrasyon mümkündür. Bu entegrasyon sayesinde, e-ticaret sitelerinden gelen siparişler otomatik olarak kargo sistemine aktarılır.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Kargo firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="cargo-faq-answer">
                Başlangıç paketi için ortalama 2-3 hafta, Premium paket için 3-4 hafta, Kurumsal paket için ise 6-8 haftalık bir geliştirme süreci öngörülmektedir. Kurumsal pakette yer alan özel entegrasyonlar ve API geliştirmeleri nedeniyle süreç daha uzun olabilir. Acil ihtiyaçlar için hızlandırılmış süreçlerimiz de mevcuttur.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Şube bulucu özelliği nasıl çalışır?</h3>
              <p className="cargo-faq-answer">
                Şube bulucu özelliği, müşterilerin adres veya konum bilgisini girerek en yakın kargo şubelerini bulmalarını sağlar. Premium ve Kurumsal paketlerde, Google Haritalar entegrasyonu ile şubelerin konumları harita üzerinde görüntülenir, çalışma saatleri ve iletişim bilgileri detaylı olarak listelenir. Ayrıca, müşteriler seçtikleri şubeye yol tarifi alabilirler.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">SMS ve e-posta bildirim sistemi nasıl entegre edilir?</h3>
              <p className="cargo-faq-answer">
                Premium ve Kurumsal paketlerimizde yer alan bildirim sistemleri, kargo durumu değiştiğinde müşterilere otomatik SMS veya e-posta gönderilebilmesini sağlar. Bu sistem, mevcut CRM ve kargo takip sisteminize entegre edilir. Müşteriler tercih ettikleri bildirim yöntemini seçebilir ve kargolarının hangi aşamalarında bildirim almak istediklerini belirleyebilirler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-cta">
        <div className="container">
          <div className="cargo-cta-content">
            <h2 className="cargo-cta-title">
              <strong>Kargo Firmanız</strong> İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Oluşturalım
            </h2>
            <p className="cargo-cta-text">
              <strong>12.900₺</strong>'den başlayan fiyatlarla <strong>kargo takip sistemli</strong>, <em>online sipariş formlu</em> ve <strong>e-ticaret entegrasyonlu</strong> <strong>kargo web sitesi</strong> için hemen iletişime geçin.
            </p>
            <div className="cargo-cta-buttons">
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

export default CargoCompany; 