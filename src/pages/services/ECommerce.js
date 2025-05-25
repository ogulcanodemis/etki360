import React from 'react';
import { Link } from 'react-router-dom';
import './ECommerce.css';

const ECommerce = () => {
  // Schema markup for E-Commerce Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Ticaret Çözümleri",
    "alternateName": "E-Commerce Solutions",
    "description": "Online satışa başlamak için ihtiyacınız olan her şey. Ödeme entegrasyonları, stok yönetimi ve kullanıcı dostu yönetim paneli ile eksiksiz e-ticaret siteleri.",
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
    "serviceType": "E-Commerce Development",
    "category": "E-Ticaret",
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-Ticaret Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Temel E-Ticaret",
          "description": "WordPress/WooCommerce veya Wix tabanlı başlangıç paketi",
          "price": "27999",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "27999",
            "priceCurrency": "TRY",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Temel E-Ticaret Sitesi",
            "description": "100 ürün limiti, 1 ödeme gateway, 2-3 hafta teslimat"
          }
        },
        {
          "@type": "Offer",
          "name": "Profesyonel E-Ticaret",
          "description": "Özel tasarım ve gelişmiş özelliklerle eksiksiz çözüm",
          "price": "39999",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "39999",
            "priceCurrency": "TRY",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Profesyonel E-Ticaret Sitesi",
            "description": "Sınırsız ürün, 3+ ödeme gateway, 3-4 hafta teslimat"
          }
        },
        {
          "@type": "Offer",
          "name": "Kurumsal E-Ticaret",
          "description": "Büyük ölçekli işletmeler için gelişmiş çözümler",
          "price": "59999",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "59999",
            "priceCurrency": "TRY",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Kurumsal E-Ticaret Sitesi",
            "description": "Sınırsız ürün, tüm ödeme sistemleri, 6-8 hafta teslimat"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "27999",
      "highPrice": "75000",
      "priceCurrency": "TRY",
      "offerCount": "3"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "E-Ticaret İşletmeleri, Online Mağazalar, Perakende Şirketleri"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "E-Ticaret Çözümleri - etki360",
    "description": "Online satışa başlamak için ihtiyacınız olan her şey. Ödeme entegrasyonları, stok yönetimi ve kullanıcı dostu yönetim paneli ile eksiksiz e-ticaret siteleri.",
    "url": "https://etki360.com/hizmetler/e-ticaret",
    "inLanguage": "tr-TR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "about": {
      "@type": "Service",
      "name": "E-Ticaret Çözümleri"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "E-Ticaret Çözümleri"
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
          "name": "E-Ticaret Çözümleri",
          "item": "https://etki360.com/hizmetler/e-ticaret"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "E-ticaret sitesi kurma maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E-ticaret sitesi maliyeti ihtiyaçlarınıza göre değişir. Temel paketimiz ₺27.999'dan başlar, profesyonel paket ₺39.999, kurumsal çözümler ise ₺59.999'dan başlamaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi ödeme sistemlerini entegre ediyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iyzico, PayTR, Sanal POS, mobil ödeme sistemleri ve tüm popüler ödeme gateway'lerini entegre ediyoruz. Paket türüne göre 1-3+ ödeme sistemi dahildir."
        }
      },
      {
        "@type": "Question",
        "name": "E-ticaret sitesi ne kadar sürede teslim edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temel paket 2-3 hafta, profesyonel paket 3-4 hafta, kurumsal çözümler 6-8 hafta içinde teslim edilir. Proje karmaşıklığına göre süre değişebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Stok yönetimi nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Otomatik stok takibi, düşük stok uyarıları, kategori bazlı yönetim ve kargo entegrasyonları ile kapsamlı stok yönetim sistemi sunuyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Mobil uyumlu mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm e-ticaret sitelerimiz mobil uyumlu (responsive) tasarım ile geliştirilir. Mobil cihazlarda mükemmel alışveriş deneyimi sunar."
        }
      },
      {
        "@type": "Question",
        "name": "Destek hizmeti var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temel pakette 1 ay, profesyonel pakette 3 ay, kurumsal pakette 6 ay destek ve bakım hizmeti dahildir. Sonrasında aylık destek paketlerimizden yararlanabilirsiniz."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "E-Ticaret Web Sitesi",
    "description": "Profesyonel e-ticaret çözümleri ile online satışa başlayın",
    "brand": {
      "@type": "Brand",
      "name": "etki360"
    },
    "category": "Web Development Services",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "27999",
      "highPrice": "75000",
      "priceCurrency": "TRY",
      "offerCount": "3",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmet Yılmaz"
        },
        "reviewBody": "E-ticaret sitemiz çok profesyonel oldu. Satışlarımız %200 arttı."
      }
    ]
  };

  return (
    <div className="ecommerce-page">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      {/* Hero Section */}
      <section className="ecommerce-service-hero">
        <div className="container">
          <div className="ecommerce-hero-content">
            <div className="ecommerce-hero-text">
              <nav className="ecommerce-breadcrumb">
                <Link to="/">Ana Sayfa</Link>
                <span>/</span>
                <Link to="/hizmetler">Hizmetler</Link>
                <span>/</span>
                <span>E-Ticaret Çözümleri</span>
              </nav>
              <h1 className="ecommerce-hero-title">
                <span className="ecommerce-highlight">E-Ticaret</span> Çözümleri
              </h1>
              <p className="ecommerce-hero-description">
                Online satışa başlamak için ihtiyacınız olan her şey. Ödeme entegrasyonları, 
                stok yönetimi ve kullanıcı dostu yönetim paneli ile eksiksiz e-ticaret siteleri.
              </p>
              <div className="ecommerce-hero-buttons">
                <Link to="/iletisim" className="ecommerce-btn-primary">
                  Demo İsteyin
                </Link>
                <Link to="/portfoy" className="ecommerce-btn-secondary">
                  E-Ticaret Örnekleri
                </Link>
              </div>
            </div>
            <div className="ecommerce-hero-visual">
              <div className="ecommerce-mockup">
                <div className="ecommerce-mockup-header">
                  <div className="ecommerce-mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="ecommerce-mockup-url">shop.etki360.com</span>
                </div>
                <div className="ecommerce-mockup-content">
                  <div className="ecommerce-product-grid">
                    <div className="ecommerce-product-card">
                      <div className="ecommerce-product-image"></div>
                      <div className="ecommerce-product-info">
                        <div className="ecommerce-product-title"></div>
                        <div className="ecommerce-product-price"></div>
                      </div>
                    </div>
                    <div className="ecommerce-product-card">
                      <div className="ecommerce-product-image"></div>
                      <div className="ecommerce-product-info">
                        <div className="ecommerce-product-title"></div>
                        <div className="ecommerce-product-price"></div>
                      </div>
                    </div>
                    <div className="ecommerce-product-card">
                      <div className="ecommerce-product-image"></div>
                      <div className="ecommerce-product-info">
                        <div className="ecommerce-product-title"></div>
                        <div className="ecommerce-product-price"></div>
                      </div>
                    </div>
                  </div>
                  <div className="ecommerce-cart-section">
                    <div className="ecommerce-cart-icon">🛒</div>
                    <div className="ecommerce-cart-total"></div>
                  </div>
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
            <h2 className="section-title">E-Ticaret Özellikleri</h2>
            <p className="section-description">
              Online satış için ihtiyacınız olan tüm özellikler tek platformda
            </p>
          </header>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <h3 className="feature-title">Sepet & Ödeme Sistemi</h3>
              <p className="feature-description">
                Güvenli ödeme entegrasyonları (iyzico, PayTR) ile sorunsuz alışveriş deneyimi
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="7.5,12 12,16.5 16.5,12"/>
                  <line x1="12" y1="8" x2="12" y2="16.5"/>
                </svg>
              </div>
              <h3 className="feature-title">Stok & Kargo Yönetimi</h3>
              <p className="feature-description">
                Otomatik stok takibi, kargo entegrasyonları ve sipariş yönetimi
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
                Ürün, sipariş ve müşteri yönetimi için kullanıcı dostu admin paneli
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <h3 className="feature-title">Müşteri Hesapları</h3>
              <p className="feature-description">
                Üyelik sistemi, sipariş geçmişi ve favori ürünler
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M13 8H7"/>
                  <path d="M17 12H7"/>
                </svg>
              </div>
              <h3 className="feature-title">Canlı Destek</h3>
              <p className="feature-description">
                WhatsApp ve canlı chat entegrasyonu ile müşteri desteği
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3 className="feature-title">Kupon & Kampanya</h3>
              <p className="feature-description">
                İndirim kuponları, kampanya yönetimi ve promosyon araçları
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="packages-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">E-Ticaret Paketleri</h2>
            <p className="section-description">
              İhtiyaçlarınıza uygun e-ticaret çözümü seçin
            </p>
          </header>
          <div className="packages-grid">
            {/* Temel Paket */}
            <article className="package-card">
              <div className="package-header">
                <h3 className="package-title">Temel E-Ticaret</h3>
                <div className="package-price">
                  <span className="price">₺27.999</span>
                  <span className="price-note">+ KDV</span>
                </div>
                <p className="package-subtitle">
                  WordPress/WooCommerce veya Wix tabanlı başlangıç paketi
                </p>
              </div>
              <div className="package-content">
                <div className="package-features-wrapper">
                  <h4 className="features-title">Paket İçeriği</h4>
                  <ul className="package-features">
                    <li>WordPress/WooCommerce veya Wix kurulumu</li>
                    <li>Hazır tema özelleştirmesi</li>
                    <li>Temel ürün yönetimi</li>
                    <li>Basit ödeme entegrasyonu</li>
                    <li>Mobil uyumlu tasarım</li>
                    <li>Temel SEO ayarları</li>
                    <li>SSL sertifikası</li>
                    <li>1 ay destek</li>
                  </ul>
                </div>
                <div className="package-specs">
                  <div className="spec-item">
                    <span className="spec-label">Ürün Limiti:</span>
                    <span className="spec-value">100 ürün</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Ödeme Yöntemi:</span>
                    <span className="spec-value">1 gateway</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Teslimat:</span>
                    <span className="spec-value">2-3 hafta</span>
                  </div>
                </div>
                <Link to="/iletisim" className="package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>

            {/* Profesyonel Paket */}
            <article className="package-card featured">
              <div className="package-badge">En Popüler</div>
              <div className="package-header">
                <h3 className="package-title">Profesyonel E-Ticaret</h3>
                <div className="package-price">
                  <span className="price">₺39.999</span>
                  <span className="price-note">+ KDV</span>
                </div>
                <p className="package-subtitle">
                  Özel tasarım ve gelişmiş özelliklerle eksiksiz çözüm
                </p>
              </div>
              <div className="package-content">
                <div className="package-features-wrapper">
                  <h4 className="features-title">Paket İçeriği</h4>
                  <ul className="package-features">
                    <li>Özel tasarım e-ticaret sitesi</li>
                    <li>Gelişmiş ürün yönetimi</li>
                    <li>Çoklu ödeme entegrasyonu</li>
                    <li>Kargo entegrasyonları</li>
                    <li>Stok yönetim sistemi</li>
                    <li>Kupon & kampanya sistemi</li>
                    <li>Müşteri hesap sistemi</li>
                    <li>Canlı destek entegrasyonu</li>
                    <li>Google Analytics & Search Console</li>
                    <li>3 ay destek & bakım</li>
                  </ul>
                </div>
                <div className="package-specs">
                  <div className="spec-item">
                    <span className="spec-label">Ürün Limiti:</span>
                    <span className="spec-value">Sınırsız</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Ödeme Yöntemi:</span>
                    <span className="spec-value">3+ gateway</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Teslimat:</span>
                    <span className="spec-value">3-4 hafta</span>
                  </div>
                </div>
                <Link to="/iletisim" className="package-btn primary">
                  Hemen Başla
                </Link>
              </div>
            </article>

            {/* Kurumsal Paket */}
            <article className="package-card">
              <div className="package-header">
                <h3 className="package-title">Kurumsal E-Ticaret</h3>
                <div className="package-price">
                  <span className="price">₺59.999</span>
                  <span className="price-note">+ KDV</span>
                </div>
                <p className="package-subtitle">
                  Büyük ölçekli işletmeler için gelişmiş çözümler
                </p>
              </div>
              <div className="package-content">
                <div className="package-features-wrapper">
                  <h4 className="features-title">Paket İçeriği</h4>
                  <ul className="package-features">
                    <li>Özel yazılım geliştirme</li>
                    <li>Çoklu mağaza yönetimi</li>
                    <li>B2B & B2C entegrasyonu</li>
                    <li>ERP/CRM entegrasyonları</li>
                    <li>Gelişmiş raporlama sistemi</li>
                    <li>Çoklu dil & para birimi</li>
                    <li>API geliştirme</li>
                    <li>Mobil uygulama (PWA)</li>
                    <li>Gelişmiş güvenlik önlemleri</li>
                    <li>6 ay destek & bakım</li>
                  </ul>
                </div>
                <div className="package-specs">
                  <div className="spec-item">
                    <span className="spec-label">Ürün Limiti:</span>
                    <span className="spec-value">Sınırsız</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Ödeme Yöntemi:</span>
                    <span className="spec-value">Tüm sistemler</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Teslimat:</span>
                    <span className="spec-value">6-8 hafta</span>
                  </div>
                </div>
                <Link to="/iletisim" className="package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>
          </div>

          {/* Özel Teklif Alanı */}
          <aside className="custom-quote-section">
            <div className="custom-quote-card">
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M13 8H7"/>
                  <path d="M17 12H7"/>
                </svg>
              </div>
              <div className="quote-content">
                <h3 className="quote-title">Özel İhtiyaçlarınız mı Var?</h3>
                <p className="quote-description">
                  Standart paketlerimiz ihtiyaçlarınızı karşılamıyorsa, size özel 
                  e-ticaret çözümü geliştirebiliriz. Proje detaylarınızı paylaşın, 
                  size özel teklif hazırlayalım.
                </p>
                <div className="quote-features">
                  <div className="quote-feature">
                    <span className="feature-icon">🎯</span>
                    <span>İhtiyaca Özel Çözüm</span>
                  </div>
                  <div className="quote-feature">
                    <span className="feature-icon">💡</span>
                    <span>Ücretsiz Danışmanlık</span>
                  </div>
                  <div className="quote-feature">
                    <span className="feature-icon">📊</span>
                    <span>Detaylı Analiz</span>
                  </div>
                </div>
                <Link to="/iletisim" className="quote-btn">
                  Özel Teklif İste
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">E-Ticaret Geliştirme Süreci</h2>
            <p className="section-description">
              Online mağazanız nasıl hayata geçiyor?
            </p>
          </header>
          <div className="process-timeline">
            <article className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">İş Analizi & Planlama</h3>
                <p className="step-description">
                  Ürün kategorilerinizi, hedef kitlenizi ve satış stratejinizi analiz ediyoruz. 
                  E-ticaret site haritası ve teknik gereksinimler belirleniyor.
                </p>
                <ul className="step-details">
                  <li>Ürün katalog analizi</li>
                  <li>Ödeme yöntemleri belirleme</li>
                  <li>Kargo entegrasyonları</li>
                  <li>Güvenlik gereksinimleri</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Tasarım & UX/UI</h3>
                <p className="step-description">
                  Kullanıcı deneyimi odaklı e-ticaret tasarımı. Kolay alışveriş akışı 
                  ve dönüşüm odaklı sayfa tasarımları oluşturuyoruz.
                </p>
                <ul className="step-details">
                  <li>Ürün sayfası tasarımı</li>
                  <li>Sepet & ödeme akışı</li>
                  <li>Mobil optimizasyon</li>
                  <li>Marka kimliği entegrasyonu</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Geliştirme & Entegrasyonlar</h3>
                <p className="step-description">
                  E-ticaret platformu geliştirme, ödeme sistemleri ve kargo 
                  entegrasyonları. Güvenlik önlemleri ve performans optimizasyonu.
                </p>
                <ul className="step-details">
                  <li>WordPress/WooCommerce kurulumu</li>
                  <li>Ödeme gateway entegrasyonu</li>
                  <li>Kargo API entegrasyonları</li>
                  <li>Güvenlik sertifikaları</li>
                </ul>
              </div>
            </article>

            <article className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Test & Yayınlama</h3>
                <p className="step-description">
                  Kapsamlı e-ticaret testleri, ödeme simülasyonları ve güvenlik 
                  testleri sonrası canlı yayına alma ve eğitim.
                </p>
                <ul className="step-details">
                  <li>Ödeme sistemi testleri</li>
                  <li>Güvenlik penetrasyon testleri</li>
                  <li>Performans optimizasyonu</li>
                  <li>Admin paneli eğitimi</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Entegrasyonlar & Özellikler</h2>
            <p className="section-description">
              E-ticaret sitenizde kullanabileceğiniz entegrasyonlar
            </p>
          </header>
          <div className="integrations-grid">
            <div className="integration-category">
              <h3 className="category-title">Ödeme Sistemleri</h3>
              <div className="integration-items">
                <div className="integration-item">
                  <span className="integration-logo">💳</span>
                  <span>iyzico</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">💰</span>
                  <span>PayTR</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">🏦</span>
                  <span>Sanal POS</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">📱</span>
                  <span>Mobil Ödeme</span>
                </div>
              </div>
            </div>

            <div className="integration-category">
              <h3 className="category-title">Kargo Firmaları</h3>
              <div className="integration-items">
                <div className="integration-item">
                  <span className="integration-logo">📦</span>
                  <span>MNG Kargo</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">🚚</span>
                  <span>Yurtiçi Kargo</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">📮</span>
                  <span>PTT Kargo</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">🏃</span>
                  <span>Getir</span>
                </div>
              </div>
            </div>

            <div className="integration-category">
              <h3 className="category-title">Pazarlama Araçları</h3>
              <div className="integration-items">
                <div className="integration-item">
                  <span className="integration-logo">📊</span>
                  <span>Google Analytics</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">📧</span>
                  <span>Email Marketing</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">💬</span>
                  <span>WhatsApp Business</span>
                </div>
                <div className="integration-item">
                  <span className="integration-logo">🎯</span>
                  <span>Facebook Pixel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">E-Ticaret Mağazanızı Kurmaya Hazır mısınız?</h2>
            <p className="cta-description">
              Online satışa başlamak için ihtiyacınız olan her şey burada. 
              Profesyonel e-ticaret çözümü ile satışlarınızı artırın.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Demo İsteyin
              </Link>
              <Link to="/portfoy" className="btn-secondary">
                E-Ticaret Örnekleri
              </Link>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Ücretsiz Demo</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>3 Ay Ücretsiz Destek</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✓</span>
                <span>Güvenli Ödeme</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce; 