import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './TransportCompany.css';

const TransportCompany = () => {
  // SEO için Schema Markup
  const transportWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nakliyat Firması Web Sitesi Tasarımı - etki360",
    "description": "Nakliyat firmanız için Google'da üst sıralarda yer alan, müşteri güveni oluşturan ve online teklif sistemi barındıran profesyonel web sitesi çözümleri.",
    "url": "https://etki360.com/sektorel-cozumler/nakliyat/nakliye-firmasi",
    "inLanguage": "tr-TR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360",
      "url": "https://etki360.com"
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
          "name": "Nakliyat Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat/nakliye-firmasi"
        }
      ]
    }
  };

  // Nakliyat Hizmetleri için Servis Schema Markup
  const transportServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nakliyat Firması Web Sitesi Tasarımı",
    "description": "Nakliyat firmanız için özel tasarlanmış, SEO odaklı ve müşteri güveni oluşturan profesyonel web sitesi çözümleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nakliyat Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Nakliyat firmaları için temel web sitesi çözümü",
          "price": "12000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Profesyonel Paket",
          "description": "Online teklif formu ve SEO çalışması içeren web sitesi paketi",
          "price": "22000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "Kapsamlı SEO çalışması ve müşteri takip sistemi içeren premium web sitesi çözümü",
          "price": "35000",
          "priceCurrency": "TRY"
        }
      ]
    }
  };
  
  // SEO meta etiketlerini document.head'e eklemek için useEffect kullanabiliriz
  React.useEffect(() => {
    // Sayfa başlığını değiştir
    document.title = "Nakliyat Firması Web Sitesi Tasarımı | SEO Odaklı Web Çözümleri";
    
    // Meta etiketleri
    const metaTags = [
      { name: "description", content: "Nakliyat firmanız için Google'da üst sıralarda yer alan, müşteri güveni oluşturan ve online teklif sistemi barındıran profesyonel web sitesi çözümleri." },
      { name: "keywords", content: "nakliyat firması web sitesi, evden eve nakliyat web sitesi, nakliyat web tasarım, nakliye firma sitesi, şehirlerarası nakliyat web sitesi, taşıma firması sitesi, lojistik web tasarım" },
      { property: "og:title", content: "Nakliyat Firması Web Sitesi Tasarımı | SEO Odaklı Web Çözümleri" },
      { property: "og:description", content: "Nakliyat firmanız için müşteri güveni oluşturan, online teklif sistemi barındıran ve Google'da üst sıralarda yer alan modern web sitesi çözümleri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://etki360.com/sektorel-cozumler/nakliyat/nakliye-firmasi" },
      { property: "og:image", content: "https://etki360.com/images/og/nakliyat-firmasi-web-sitesi.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nakliyat Firması Web Sitesi Tasarımı | SEO Odaklı Web Çözümleri" },
      { name: "twitter:description", content: "Nakliyat firmanız için müşteri güveni oluşturan, online teklif sistemi barındıran ve Google'da üst sıralarda yer alan modern web sitesi çözümleri." },
      { name: "twitter:image", content: "https://etki360.com/images/og/nakliyat-firmasi-web-sitesi.jpg" },
    ];
    
    // Önceki meta etiketlerini temizle
    const oldMetaTags = document.querySelectorAll('meta[data-transport-meta="true"]');
    oldMetaTags.forEach(tag => tag.remove());
    
    // Yeni meta etiketleri ekle
    metaTags.forEach(tagInfo => {
      const metaTag = document.createElement('meta');
      
      // Name veya property ekleme
      if (tagInfo.name) {
        metaTag.setAttribute('name', tagInfo.name);
      } else if (tagInfo.property) {
        metaTag.setAttribute('property', tagInfo.property);
      }
      
      metaTag.setAttribute('content', tagInfo.content);
      metaTag.setAttribute('data-transport-meta', 'true');
      document.head.appendChild(metaTag);
    });
    
    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://etki360.com/sektorel-cozumler/nakliyat/nakliye-firmasi');
    
    // Schema.org data
    const existingScripts = document.querySelectorAll('script[data-transport-schema="true"]');
    existingScripts.forEach(script => script.remove());
    
    const websiteSchemaScript = document.createElement('script');
    websiteSchemaScript.setAttribute('type', 'application/ld+json');
    websiteSchemaScript.setAttribute('data-transport-schema', 'true');
    websiteSchemaScript.textContent = JSON.stringify(transportWebsiteSchema);
    document.head.appendChild(websiteSchemaScript);
    
    const serviceSchemaScript = document.createElement('script');
    serviceSchemaScript.setAttribute('type', 'application/ld+json');
    serviceSchemaScript.setAttribute('data-transport-schema', 'true');
    serviceSchemaScript.textContent = JSON.stringify(transportServiceSchema);
    document.head.appendChild(serviceSchemaScript);
    
    // Component unmount olduğunda temizlik
    return () => {
      oldMetaTags.forEach(tag => tag.remove());
      existingScripts.forEach(script => script.remove());
      document.title = "etki360"; // Varsayılan başlığa geri dön
    };
  }, []);

  return (
    <div className="sectoral-page transport-company-page">
      {/* Hero Section */}
      <section className="transport-hero">
        <div className="container">
          <div className="transport-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Nakliyat Firması Web Sitesi</span>
          </div>
          <div className="transport-hero-content">
            <div className="transport-hero-text">
              <h1 className="sectoral-hero-title">
                Nakliyat Firmanız İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Tasarımı
              </h1>
              <p className="sectoral-hero-description">
                Nakliyat firmanız için müşteri güveni oluşturan, online teklif sistemi barındıran ve Google'da üst sıralarda yer alan modern web sitesi çözümleri sunuyoruz.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="transport-hero-visual">
              <div className="transport-mockup">
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
                  <div className="mockup-services">
                    <div className="mockup-service-item"></div>
                    <div className="mockup-service-item"></div>
                    <div className="mockup-service-item"></div>
                  </div>
                  <div className="mockup-cta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="transport-overview">
        <div className="container">
          <div className="transport-section-header">
            <h2 className="transport-section-title">Nakliyat Firması Web Sitesi Neden Önemli?</h2>
            <p className="transport-section-subtitle">
              Potansiyel müşterilerinizin %78'i, bir nakliyat firmasını tercih etmeden önce web sitesini inceliyor.
            </p>
          </div>

          <div className="transport-overview-grid">
            <div className="transport-overview-card">
              <div className="transport-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="transport-card-title">Güven Oluşturma</h3>
              <p className="transport-card-text">
                Nakliyat, müşterilerin eşyalarını emanet ettiği hassas bir hizmettir. Profesyonel bir web sitesi ile güvenilirliğinizi ve kurumsal kimliğinizi vurgulayın.
              </p>
            </div>

            <div className="transport-overview-card">
              <div className="transport-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="transport-card-title">Online Teklif Sistemi</h3>
              <p className="transport-card-text">
                Müşterilerinizin anında fiyat teklifi alabilecekleri online teklif formu ile satış sürecinizi hızlandırın ve dönüşüm oranınızı artırın.
              </p>
            </div>

            <div className="transport-overview-card">
              <div className="transport-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="transport-card-title">Google'da Üst Sıralarda</h3>
              <p className="transport-card-text">
                SEO odaklı web sitesi ile "nakliyat firması", "evden eve nakliyat" gibi aramalarda üst sıralarda yer alın ve yeni müşteriler kazanın.
              </p>
            </div>

            <div className="transport-overview-card">
              <div className="transport-card-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="transport-card-title">Mobil Uyumluluk</h3>
              <p className="transport-card-text">
                Mobil cihazlarda mükemmel görüntülenen responsive tasarım ile taşınma planlamasını yapan tüm potansiyel müşterilere ulaşın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="transport-features">
        <div className="container">
          <div className="transport-section-header">
            <h2 className="transport-section-title">Nakliyat Firması Web Sitesi Özellikleri</h2>
            <p className="transport-section-subtitle">
              Nakliyat firmanızın ihtiyaçlarına özel, müşteri odaklı web sitesi çözümleri
            </p>
          </div>

          <div className="transport-features-grid">
            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Hizmet Sayfaları</h3>
                <p className="transport-feature-text">
                  Şehirlerarası nakliyat, evden eve nakliyat, ofis taşıma gibi tüm hizmetleriniz için detaylı ve SEO uyumlu sayfalar.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Online Teklif Formu</h3>
                <p className="transport-feature-text">
                  Müşterilerinizin eşya bilgilerini ve adres detaylarını girerek anında teklif alabilecekleri akıllı form sistemi.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Referans Galerisi</h3>
                <p className="transport-feature-text">
                  Başarılı taşıma projelerinizi sergileyebileceğiniz görsel odaklı referans galerisi.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Müşteri Yorumları</h3>
                <p className="transport-feature-text">
                  Memnun müşterilerinizin yorumlarını sergileyerek güven oluşturabilirsiniz.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Hizmet Bölgeleri</h3>
                <p className="transport-feature-text">
                  Hizmet verdiğiniz şehir ve bölgeleri gösteren interaktif harita ve bölge sayfaları.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-blog"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Taşınma Rehberi Blog</h3>
                <p className="transport-feature-text">
                  Taşınma ipuçları, paketleme tavsiyeleri gibi faydalı içeriklerle SEO çalışmanızı güçlendirin.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Tek Tıkla Arama</h3>
                <p className="transport-feature-text">
                  Mobil kullanıcıların tek tıkla sizi arayabilecekleri hızlı erişim butonu.
                </p>
              </div>
            </div>

            <div className="transport-feature-card">
              <div className="transport-feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <div className="transport-feature-content">
                <h3 className="transport-feature-title">Çoklu Dil Desteği</h3>
                <p className="transport-feature-text">
                  Uluslararası nakliyat hizmeti veriyorsanız, çoklu dil desteği ile yabancı müşterilere hitap edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="transport-benefits">
        <div className="container">
          <div className="transport-section-header">
            <h2 className="transport-section-title">Profesyonel Web Sitesinin Nakliyat Firmanıza Faydaları</h2>
            <p className="transport-section-subtitle">
              Doğru tasarlanmış bir web sitesi, nakliyat firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="transport-benefits-content">
            <div className="transport-benefits-mockup">
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
                  <div className="benefits-mockup-form">
                    <div className="benefits-mockup-form-row"></div>
                    <div className="benefits-mockup-form-row"></div>
                    <div className="benefits-mockup-form-row"></div>
                    <div className="benefits-mockup-button"></div>
                  </div>
                  <div className="benefits-mockup-testimonial">
                    <div className="benefits-mockup-avatar"></div>
                    <div className="benefits-mockup-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transport-benefits-list">
              <div className="transport-benefit-item">
                <div className="transport-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="transport-benefit-text">
                  <h3>Müşteri Güvenini Artırır</h3>
                  <p>Profesyonel bir web sitesi, potansiyel müşterilerin firmanıza güven duymasını sağlar.</p>
                </div>
              </div>

              <div className="transport-benefit-item">
                <div className="transport-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="transport-benefit-text">
                  <h3>Teklif Sürecini Hızlandırır</h3>
                  <p>Online teklif formu ile müşterileriniz anında fiyat alabilir, satış süreciniz hızlanır.</p>
                </div>
              </div>

              <div className="transport-benefit-item">
                <div className="transport-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="transport-benefit-text">
                  <h3>Google'da Daha Fazla Görünürlük</h3>
                  <p>SEO odaklı içerikler ile nakliyat aramaları yapan potansiyel müşterilere ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="transport-benefit-item">
                <div className="transport-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="transport-benefit-text">
                  <h3>İş Süreçlerini Dijitalleştirir</h3>
                  <p>Online teklif ve müşteri takip sistemleri ile iş süreçlerinizi dijitalleştirin.</p>
                </div>
              </div>

              <div className="transport-benefit-item">
                <div className="transport-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="transport-benefit-text">
                  <h3>Rekabet Avantajı Sağlar</h3>
                  <p>Web sitesi olmayan veya zayıf web sitesine sahip rakiplerinizin önüne geçebilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="transport-pricing">
        <div className="container">
          <div className="transport-section-header">
            <h2 className="transport-section-title">Nakliyat Firması Web Sitesi Paketleri</h2>
            <p className="transport-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="transport-pricing-grid">
            <div className="transport-pricing-card">
              <div className="transport-pricing-header">
                <h3 className="transport-pricing-title">Başlangıç Paketi</h3>
                <div className="transport-pricing-price">
                  <span className="transport-price-amount">12.000 ₺</span>
                  <span className="transport-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="transport-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Google Harita Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="transport-pricing-disabled"><i className="fas fa-times"></i> Online Teklif Formu</li>
                  <li className="transport-pricing-disabled"><i className="fas fa-times"></i> Şehir Bazlı SEO Çalışması</li>
                  <li className="transport-pricing-disabled"><i className="fas fa-times"></i> Blog Yönetim Sistemi</li>
                </ul>
              </div>
              <div className="transport-pricing-footer">
                <Link to="/iletisim" className="transport-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="transport-pricing-card featured">
              <div className="transport-pricing-badge">Popüler</div>
              <div className="transport-pricing-header">
                <h3 className="transport-pricing-title">Profesyonel Paket</h3>
                <div className="transport-pricing-price">
                  <span className="transport-price-amount">22.000 ₺</span>
                  <span className="transport-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="transport-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 10+ Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Online Teklif Formu</li>
                  <li><i className="fas fa-check"></i> 5 Şehir için SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Blog Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> Referans Galerisi</li>
                  <li><i className="fas fa-check"></i> Müşteri Yorumları Sistemi</li>
                  <li><i className="fas fa-check"></i> Google Analytics Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="transport-pricing-disabled"><i className="fas fa-times"></i> Çoklu Dil Desteği</li>
                </ul>
              </div>
              <div className="transport-pricing-footer">
                <Link to="/iletisim" className="transport-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="transport-pricing-card">
              <div className="transport-pricing-header">
                <h3 className="transport-pricing-title">Kurumsal Paket</h3>
                <div className="transport-pricing-price">
                  <span className="transport-price-amount">35.000 ₺</span>
                  <span className="transport-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="transport-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Premium SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Online Teklif Sistemi</li>
                  <li><i className="fas fa-check"></i> 20 Şehir için SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Müşteri Takip Paneli</li>
                  <li><i className="fas fa-check"></i> Taşınma Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Çoklu Dil Desteği</li>
                  <li><i className="fas fa-check"></i> Aylık SEO Raporu</li>
                  <li><i className="fas fa-check"></i> Canlı Destek Sistemi</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Özel İçerik Oluşturma</li>
                </ul>
              </div>
              <div className="transport-pricing-footer">
                <Link to="/iletisim" className="transport-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="transport-faq">
        <div className="container">
          <div className="transport-section-header">
            <h2 className="transport-section-title">Sık Sorulan Sorular</h2>
            <p className="transport-section-subtitle">
              Nakliyat firması web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="transport-faq-grid">
            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Nakliyat firmam için web sitesi neden önemli?</h3>
              <p className="transport-faq-answer">
                Günümüzde insanlar bir nakliyat firması aramadan önce çoğunlukla internette araştırma yaparlar. Profesyonel bir web sitesi, firmanızın güvenilirliğini artırır, hizmetlerinizi detaylı olarak tanıtmanızı sağlar ve yeni müşteriler kazanmanıza yardımcı olur. Ayrıca, Google'da "nakliyat firması" gibi aramalarda üst sıralarda çıkmanız için bir web sitesi olmazsa olmazdır.
              </p>
            </div>

            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Online teklif formu nasıl çalışır?</h3>
              <p className="transport-faq-answer">
                Online teklif formu, müşterilerinizin taşınacak eşyalarını, çıkış ve varış adreslerini, tarih tercihlerini girebilecekleri bir form sunar. Bu bilgiler size e-posta olarak iletilir veya admin panelinizde görüntülenir. İsterseniz, form üzerinden alınan bilgilere göre otomatik fiyat hesaplama özelliği de ekleyebiliriz.
              </p>
            </div>

            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Web sitesi ne kadar sürede hazır olur?</h3>
              <p className="transport-faq-answer">
                Nakliyat firması web sitesi, seçtiğiniz pakete bağlı olarak genellikle 2-4 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha hızlı olabilirken, Kurumsal paket gibi daha kapsamlı çözümler için biraz daha uzun sürebilir. Ancak, acil durumlarda hızlı teslimat için özel çözümler de sunuyoruz.
              </p>
            </div>

            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Şehir bazlı SEO çalışması ne demek?</h3>
              <p className="transport-faq-answer">
                Şehir bazlı SEO çalışması, hizmet verdiğiniz her şehir için özel içerik ve optimizasyon yapılması anlamına gelir. Örneğin, "İstanbul evden eve nakliyat", "Ankara evden eve nakliyat" gibi aramalar için web sitenizin üst sıralarda çıkmasını sağlayacak özel sayfalar ve içerikler oluşturulur. Bu, yerel aramalarda firmanızın bulunabilirliğini büyük ölçüde artırır.
              </p>
            </div>

            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Sitenin bakımı ve güncellemeleri nasıl yapılır?</h3>
              <p className="transport-faq-answer">
                Web sitenizin güvenlik güncellemeleri, yedeklemeleri ve teknik bakımı paket süreniz boyunca tarafımızca düzenli olarak yapılmaktadır. İçerik güncellemeleri için size kullanımı kolay bir panel sunulmaktadır. Yeni şehirler, hizmetler eklemek veya fiyatları güncellemek gibi işlemleri bu panel üzerinden kolayca yapabilirsiniz.
              </p>
            </div>

            <div className="transport-faq-item">
              <h3 className="transport-faq-question">Web sitesi SEO çalışması içeriyor mu?</h3>
              <p className="transport-faq-answer">
                Evet, tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. Profesyonel ve Kurumsal paketlerde ise "nakliyat firması", "evden eve nakliyat", "ofis taşıma" gibi anahtar kelimeler için detaylı SEO çalışması ve şehir bazlı SEO optimizasyonu yapılmaktadır. Kurumsal pakette aylık SEO raporları ve düzenli içerik güncellemeleri de dahildir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="transport-cta">
        <div className="container">
          <div className="transport-cta-content">
            <h2 className="transport-cta-title">
              Nakliyat Firmanız İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Oluşturalım
            </h2>
            <p className="transport-cta-text">
              Firmanızın ihtiyaçlarına özel, müşteri odaklı ve dönüşüm oranı yüksek bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="transport-cta-buttons">
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

export default TransportCompany; 