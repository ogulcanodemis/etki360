import React from 'react';
import { Link } from 'react-router-dom';
import './CorporateWeb.css';

const CorporateWeb = () => {
  // Schema markup for Corporate Web Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kurumsal Web Sitesi Geliştirme",
    "alternateName": "Corporate Website Development",
    "description": "İşletmenizin dijitaldeki profesyonel yüzü. Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri ile markanızı güçlendirin.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com",
      "logo": "https://etki360.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-542-155-33-15",
        "contactType": "customer service",
        "availableLanguage": "Turkish"
      }
    },
    "serviceType": "Web Development",
    "category": "Kurumsal Web Sitesi",
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kurumsal Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Yeni kurulan küçük işletmeler ve bireysel girişimciler için",
          "price": "9500",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "9500",
            "priceCurrency": "TRY",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Temel Kurumsal Web Sitesi",
            "description": "4-5 sayfalık kurumsal web sitesi, mobil uyumlu tasarım, temel SEO ayarları"
          }
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "Gelişmekte olan firmalar ve hizmet sektöründeki işletmeler için",
          "price": "17500",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "17500",
            "priceCurrency": "TRY",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Gelişmiş Kurumsal Web Sitesi",
            "description": "8+ sayfalık özel tasarım web sitesi, yönetim paneli, gelişmiş SEO"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "9500",
      "highPrice": "25000",
      "priceCurrency": "TRY",
      "offerCount": "3"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Küçük ve Orta Ölçekli İşletmeler"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kurumsal Web Sitesi Geliştirme - etki360",
    "description": "İşletmenizin dijitaldeki profesyonel yüzü. Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri ile markanızı güçlendirin.",
    "url": "https://etki360.com/hizmetler/kurumsal-web",
    "inLanguage": "tr-TR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "about": {
      "@type": "Service",
      "name": "Kurumsal Web Sitesi Geliştirme"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Kurumsal Web Sitesi Geliştirme"
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
          "name": "Hizmetler",
          "item": "https://etki360.com/hizmetler"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kurumsal Web Sitesi",
          "item": "https://etki360.com/hizmetler/kurumsal-web"
        }
      ]
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Kurumsal Web Sitesi Geliştirme Süreci",
    "description": "Kurumsal web siteniz nasıl hayata geçiyor? 4 adımda profesyonel web sitesi geliştirme süreci.",
    "image": "https://etki360.com/images/corporate-web-process.jpg",
    "totalTime": "PT4W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "TRY",
      "value": "9500-25000"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "İhtiyaç Analizi Formu"
      },
      {
        "@type": "HowToSupply",
        "name": "Marka Kimlik Dosyaları"
      },
      {
        "@type": "HowToSupply",
        "name": "İçerik Materyalleri"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "React"
      },
      {
        "@type": "HowToTool",
        "name": "Laravel"
      },
      {
        "@type": "HowToTool",
        "name": "WordPress"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Analiz & Planlama",
        "text": "İhtiyaçlarınızı analiz ediyor, hedef kitlenizi belirliyoruz. Site haritası ve teknik gereksinimler çıkarılıyor.",
        "image": "https://etki360.com/images/analysis-planning.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Tasarım & Prototyping",
        "text": "Markanıza özel tasarım konsepti oluşturuyor, kullanıcı deneyimi odaklı arayüz tasarlıyoruz.",
        "image": "https://etki360.com/images/design-prototyping.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Geliştirme & Kodlama",
        "text": "Modern teknolojilerle responsive, hızlı ve güvenli web sitesi geliştirme süreci başlıyor.",
        "image": "https://etki360.com/images/development-coding.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Test & Yayınlama",
        "text": "Kapsamlı testler sonrası sitenizi yayına alıyor, eğitim ve destek hizmeti sunuyoruz.",
        "image": "https://etki360.com/images/test-launch.jpg"
      }
    ]
  };

  return (
    <div className="corporate-web-page">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>

      {/* Hero Section */}
      <section className="corporate-service-hero">
        <div className="container">
          <div className="corporate-hero-content">
            <div className="corporate-hero-text">
              <nav className="corporate-breadcrumb">
                <Link to="/">Ana Sayfa</Link>
                <span>/</span>
                <Link to="/hizmetler">Hizmetler</Link>
                <span>/</span>
                <span>Kurumsal Web Sitesi</span>
              </nav>
              <h1 className="corporate-hero-title">
                <span className="corporate-highlight">Kurumsal Web Sitesi</span> Geliştirme
              </h1>
              <p className="corporate-hero-description">
                İşletmenizin dijitaldeki profesyonel yüzü. Modern, mobil uyumlu ve 
                SEO optimizasyonlu kurumsal web siteleri ile markanızı güçlendirin.
              </p>
              <div className="corporate-hero-buttons">
                <Link to="/iletisim" className="corporate-btn-primary">
                  Teklif Al
                </Link>
                <Link to="/portfoy" className="corporate-btn-secondary">
                  Örnekleri İncele
                </Link>
              </div>
            </div>
            <div className="corporate-hero-visual">
              <div className="corporate-service-card">
                <div className="corporate-card-header">
                  <div className="corporate-card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="corporate-card-title">etki360.com</span>
                </div>
                <div className="corporate-card-content">
                  <div className="corporate-content-block corporate-header-block"></div>
                  <div className="corporate-content-block corporate-nav-block"></div>
                  <div className="corporate-content-block corporate-main-block"></div>
                  <div className="corporate-content-block corporate-sidebar-block"></div>
                  <div className="corporate-content-block corporate-footer-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Kurumsal Web Sitesi Özellikleri</h2>
            <p className="section-description">
              Modern teknolojiler ve en iyi uygulamalarla geliştirilen özellikler
            </p>
          </header>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="feature-title">Profesyonel Tasarım</h3>
              <p className="feature-description">
                Markanıza özel, modern ve kullanıcı dostu arayüz tasarımı
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="feature-title">Mobil Uyumlu</h3>
              <p className="feature-description">
                Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="feature-title">Hızlı Performans</h3>
              <p className="feature-description">
                Optimize edilmiş kod yapısı ile yüksek hız performansı
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="feature-title">SEO Optimizasyonu</h3>
              <p className="feature-description">
                Google'da üst sıralarda yer almanız için teknik SEO
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="feature-title">Güvenlik</h3>
              <p className="feature-description">
                SSL sertifikası ve güvenlik önlemleri ile korumalı site
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="feature-title">Yönetim Paneli</h3>
              <p className="feature-description">
                Kolay içerik yönetimi için kullanıcı dostu admin paneli
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Kurumsal Web Sitesi Paketleri</h2>
            <p className="section-description">
              İhtiyaçlarınıza uygun paket seçenekleri
            </p>
          </header>
          <div className="packages-grid">
            <article className="package-card">
              <div className="package-header">
                <h3 className="package-title">Başlangıç Paketi</h3>
                <div className="package-price">
                  <span className="price">₺9.500</span>
                  <span className="price-note">+ KDV</span>
                </div>
              </div>
              <div className="package-content">
                <p className="package-description">
                  Yeni kurulan küçük işletmeler ve bireysel girişimciler için
                </p>
                <ul className="package-features">
                  <li>4-5 sayfalık kurumsal web sitesi</li>
                  <li>Mobil uyumlu tasarım</li>
                  <li>Temel SEO ayarları</li>
                  <li>İletişim formu</li>
                  <li>1 yıllık hosting & SSL kurulumu</li>
                  <li>1 hafta destek</li>
                </ul>
                <Link to="/iletisim" className="package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>

            <article className="package-card featured">
              <div className="package-badge">Popüler</div>
              <div className="package-header">
                <h3 className="package-title">Kurumsal Paket</h3>
                <div className="package-price">
                  <span className="price">₺17.500</span>
                  <span className="price-note">+ KDV</span>
                </div>
              </div>
              <div className="package-content">
                <p className="package-description">
                  Gelişmekte olan firmalar ve hizmet sektöründeki işletmeler için
                </p>
                <ul className="package-features">
                  <li>8+ sayfalık özel tasarım web sitesi</li>
                  <li>Yönetim paneli (Laravel/WordPress)</li>
                  <li>Gelişmiş SEO & hız optimizasyonu</li>
                  <li>Google Analytics + Search Console</li>
                  <li>Canlı destek entegrasyonu</li>
                  <li>1 yıllık destek</li>
                </ul>
                <Link to="/iletisim" className="package-btn primary">
                  Paket Seç
                </Link>
              </div>
            </article>

            <article className="package-card">
              <div className="package-header">
                <h3 className="package-title">Özel Geliştirme</h3>
                <div className="package-price">
                  <span className="price">Proje Bazlı</span>
                  <span className="price-note">Fiyatlandırma</span>
                </div>
              </div>
              <div className="package-content">
                <p className="package-description">
                  Entegre sistemler ve özel yazılım çözümleri isteyenler için
                </p>
                <ul className="package-features">
                  <li>Mikroservis mimarisi</li>
                  <li>API geliştirme ve entegrasyonlar</li>
                  <li>Mobil uygulama / PWA desteği</li>
                  <li>Kapsamlı teknik analiz</li>
                  <li>Özel fiyatlandırma</li>
                  <li>Devamlı destek anlaşması</li>
                </ul>
                <Link to="/iletisim" className="package-btn">
                  Teklif Al
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Geliştirme Süreci</h2>
            <p className="section-description">
              Kurumsal web siteniz nasıl hayata geçiyor?
            </p>
          </header>
          <div className="process-timeline">
            <article className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Analiz & Planlama</h3>
                <p className="step-description">
                  İhtiyaçlarınızı analiz ediyor, hedef kitlenizi belirliyoruz. 
                  Site haritası ve teknik gereksinimler çıkarılıyor.
                </p>
                <ul className="step-details">
                  <li>İhtiyaç analizi toplantısı</li>
                  <li>Hedef kitle belirleme</li>
                  <li>Site haritası oluşturma</li>
                  <li>Teknik gereksinimler</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Tasarım & Prototyping</h3>
                <p className="step-description">
                  Markanıza özel tasarım konsepti oluşturuyor, 
                  kullanıcı deneyimi odaklı arayüz tasarlıyoruz.
                </p>
                <ul className="step-details">
                  <li>Wireframe oluşturma</li>
                  <li>Görsel tasarım</li>
                  <li>Prototip geliştirme</li>
                  <li>Onay süreci</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Geliştirme & Kodlama</h3>
                <p className="step-description">
                  Modern teknolojilerle responsive, hızlı ve güvenli 
                  web sitesi geliştirme süreci başlıyor.
                </p>
                <ul className="step-details">
                  <li>Frontend geliştirme</li>
                  <li>Backend entegrasyonu</li>
                  <li>Yönetim paneli</li>
                  <li>SEO optimizasyonu</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Test & Yayınlama</h3>
                <p className="step-description">
                  Kapsamlı testler sonrası sitenizi yayına alıyor, 
                  eğitim ve destek hizmeti sunuyoruz.
                </p>
                <ul className="step-details">
                  <li>Kalite testleri</li>
                  <li>Performans optimizasyonu</li>
                  <li>Yayına alma</li>
                  <li>Eğitim ve destek</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Kullandığımız Teknolojiler</h2>
            <p className="section-description">
              Modern ve güvenilir teknolojilerle geliştirme
            </p>
          </header>
          <div className="tech-grid">
            <div className="tech-category">
              <h3 className="tech-title">Frontend</h3>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">HTML5</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">JavaScript</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-title">Backend</h3>
              <div className="tech-items">
                <span className="tech-item">PHP</span>
                <span className="tech-item">Laravel</span>
                <span className="tech-item">MySQL</span>
                <span className="tech-item">WordPress</span>
                <span className="tech-item">Node.js</span>
              </div>
            </div>
            <div className="tech-category">
              <h3 className="tech-title">Araçlar</h3>
              <div className="tech-items">
                <span className="tech-item">Git</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Figma</span>
                <span className="tech-item">Google Analytics</span>
                <span className="tech-item">Search Console</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Kurumsal Web Sitenizi Hayata Geçirin</h2>
            <p className="cta-description">
              Profesyonel bir dijital varlık oluşturmak için hemen başlayın. 
              Size özel çözümler geliştiriyoruz.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Teklif Al
              </Link>
              <Link to="/portfoy" className="btn-secondary">
                Örnekleri İncele
              </Link>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Hızlı Teslimat</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>1 Yıl Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWeb; 