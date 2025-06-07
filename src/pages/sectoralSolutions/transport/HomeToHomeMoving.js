import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './HomeToHomeMoving.css';

const HomeToHomeMoving = () => {
  // SEO için Schema Markup
  const homeToHomeWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Evden Eve Nakliyat Web Sitesi Tasarımı - Online Teklif Sistemli | etki360",
    "description": "Evden eve nakliyat firmanız için online teklif formu, müşteri güven unsurları ve yerel SEO çalışması ile Google'da üst sıralarda yer alan profesyonel web sitesi çözümleri.",
    "url": "https://etki360.com/sektorel-cozumler/nakliyat/evden-eve-nakliyat",
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
          "name": "Evden Eve Nakliyat Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat/evden-eve-nakliyat"
        }
      ]
    }
  };

  // Evden Eve Nakliyat için Servis Schema Markup
  const homeToHomeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Evden Eve Nakliyat Web Sitesi Tasarımı",
    "description": "Evden eve nakliyat firmanız için özel tasarlanmış, online teklif formlu ve yerel SEO odaklı profesyonel web sitesi çözümleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Evden Eve Nakliyat Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Evden eve nakliyat firmaları için temel web sitesi çözümü",
          "price": "12000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Profesyonel Paket",
          "description": "Online teklif formu, şehir bazlı SEO ve mobil uyumluluk içeren web sitesi paketi",
          "price": "22000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Premium Paket",
          "description": "Kapsamlı yerel SEO çalışması, müşteri takip sistemi ve 360° sanal tur içeren premium çözüm",
          "price": "35000",
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
        "name": "Evden eve nakliyat firmam için web sitesi neden önemli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Günümüzde müşteriler nakliyat firması ararken öncelikle internet üzerinden araştırma yapıyor. Profesyonel bir web sitesi, firmanızın güvenilirliğini artırır, hizmetlerinizi detaylı olarak göstermenizi sağlar ve Google'da yerel aramalarda üst sıralarda çıkmanıza yardımcı olur. Online teklif formu ile potansiyel müşterilerinizden 7/24 talep alabilir, rakiplerinizden bir adım öne geçebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Online teklif formu nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online teklif formu, müşterilerinizin taşınacak eşya bilgilerini, çıkış ve varış adreslerini, kat bilgilerini, asansör durumunu ve tarih tercihlerini girebilecekleri kapsamlı bir form sunar. Bu bilgiler anında size e-posta olarak iletilir ve admin panelinizde görüntülenir. İsterseniz, formdaki bilgilere göre otomatik fiyat hesaplaması yapan gelişmiş sistemler de entegre edebiliriz."
        }
      },
      {
        "@type": "Question",
        "name": "Şehir bazlı SEO çalışması ne avantaj sağlar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Şehir bazlı SEO çalışması, hizmet verdiğiniz her şehir ve ilçe için özel içerik ve optimizasyon yapılması anlamına gelir. Örneğin, 'Kadıköy evden eve nakliyat', 'Ankara Çankaya nakliyat' gibi yerel aramalar için web sitenizin üst sıralarda çıkmasını sağlar. Bu, hizmet verdiğiniz bölgelerdeki potansiyel müşterilere ulaşmanızı kolaylaştırır ve dönüşüm oranınızı artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Evden eve nakliyat web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak, evden eve nakliyat web sitenizi ortalama 7-10 iş günü içerisinde teslim ediyoruz. İçerik hazırlama, görsel seçimi ve şehir bazlı SEO çalışmaları için sizden alacağımız bilgiler doğrultusunda web sitenizi hızlıca hazırlıyor ve yayına alıyoruz."
        }
      }
    ]
  };

  return (
    <div className="sectoral-page home-to-home-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Evden Eve Nakliyat Web Sitesi Tasarımı | Teklif Formlu Nakliyat Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Evden eve nakliyat firmanız için online teklif formlu, müşteri güven unsurları içeren ve şehir bazlı SEO çalışması ile Google'da üst sıralarda yer alan profesyonel web sitesi çözümleri. 12.000₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="evden eve nakliyat web sitesi, evden eve taşıma sitesi, nakliyat web tasarım, şehirlerarası nakliyat sitesi, online teklif formu, nakliyat firma sitesi, yerel SEO, nakliyat web sitesi fiyatları" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/nakliyat/evden-eve-nakliyat" />
        <meta property="og:title" content="Evden Eve Nakliyat Web Sitesi Tasarımı | Teklif Formlu Nakliyat Sitesi" />
        <meta property="og:description" content="Evden eve nakliyat firmanız için online teklif formlu ve şehir bazlı SEO çalışması ile Google'da üst sıralarda yer alan profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/evden-eve-nakliyat-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evden Eve Nakliyat Web Sitesi Tasarımı | Teklif Formlu Nakliyat Sitesi" />
        <meta name="twitter:description" content="Evden eve nakliyat firmanız için online teklif formlu ve şehir bazlı SEO çalışması ile Google'da üst sıralarda yer alan profesyonel web sitesi çözümleri." />
        <meta name="twitter:image" content="https://etki360.com/images/og/evden-eve-nakliyat-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/nakliyat/evden-eve-nakliyat" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(homeToHomeWebsiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(homeToHomeServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="home-to-home-hero">
        <div className="container">
          <div className="home-to-home-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Evden Eve Nakliyat Sitesi</span>
          </div>
          <div className="home-to-home-hero-content">
            <div className="home-to-home-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Evden Eve Nakliyat Web Sitesi</strong> - <span className="sectoral-highlight">Online Teklif Formlu</span> Çözümler
              </h1>
              <p className="sectoral-hero-description">
                <strong>Evden eve nakliyat</strong> firmanız için <em>online teklif formu</em> içeren, <strong>şehir bazlı SEO</strong> çalışması ile <strong>Google'da üst sıralarda</strong> yer alan ve <strong>müşteri güveni</strong> oluşturan <strong>profesyonel web sitesi</strong> çözümleri. <strong>12.000₺</strong>'den başlayan fiyatlarla <em>müşteri kazanma oranınızı %35 artıran</em> modern web sitesi.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="home-to-home-hero-visual">
              <div className="home-to-home-mockup">
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

      {/* Genel Bakış Bölümü */}
      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Evden Eve Nakliyat Web Sitesi</strong> Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              <strong>Nakliyat sektöründe</strong> müşterilerin <strong>%82'si</strong> bir <em>evden eve nakliyat firmasını</em> seçmeden önce <strong>web sitelerini inceliyor</strong> ve <strong>online teklif almak istiyor</strong>. <strong>Şehir bazlı SEO</strong> ile potansiyel müşterilerinize <strong>%65 daha fazla</strong> ulaşın.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="sectoral-card-title">Online Teklif Formu</h3>
              <p className="sectoral-card-text">
                <strong>Potansiyel müşterilerinizin 7/24</strong> taşınma bilgilerini girerek <em>anında teklif almasını sağlayan</em> <strong>detaylı form sistemi</strong> ile <strong>telefon trafiğini %45 azaltın</strong> ve <strong>müşteri dönüşüm oranını %35 artırın</strong>.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Şehir Bazlı SEO</h3>
              <p className="sectoral-card-text">
                <strong>Hizmet verdiğiniz her şehir ve ilçe için</strong> özel içerikler ve <em>yerel aramalarda</em> <strong>Google'da üst sıralarda yer almanızı</strong> sağlayan <strong>SEO çalışması</strong>. <strong>Organik müşteri trafiğinizi %65 artırın</strong>.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Güven Unsurları</h3>
              <p className="sectoral-card-text">
                K1 belgesi, lisans gösterimleri, sigorta bilgileri ve müşteri yorumları ile potansiyel müşterilerinize güven veren profesyonel tasarım.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-images"></i>
              </div>
              <h3 className="sectoral-card-title">Hizmet Görselleri ve Sanal Tur</h3>
              <p className="sectoral-card-text">
                Nakliyat sürecinizi adım adım anlatan profesyonel görseller ve müşteri güvenini artıran 360° sanal tur teknolojisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Özellikler Bölümü */}
      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Evden Eve Nakliyat Web Sitesi</strong> Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Evden eve nakliyat firmanızın</strong> ihtiyaçlarına özel, <em>müşteri odaklı</em> ve <strong>dönüşüm oranı yüksek</strong> <strong>online teklif formlu</strong> web sitesi çözümleri. <strong>Yerel SEO</strong> ve <strong>müşteri güven unsurları</strong>.
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Detaylı Online Teklif Formu</h3>
                <p className="sectoral-feature-text">
                  <strong>Eşya listesi</strong>, <strong>kat bilgisi</strong>, <strong>asansör durumu</strong> ve <em>tercih edilen tarih</em> gibi <strong>detaylı bilgileri toplayan</strong> form sistemi. <strong>Müşteri dönüşüm oranını %35 artıran</strong> ve <strong>telefon trafiğini azaltan</strong> pratik çözüm.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Şehir ve İlçe Bazlı SEO</h3>
                <p className="sectoral-feature-text">
                  "İstanbul Kadıköy evden eve nakliyat", "Ankara Çankaya nakliyat" gibi yerel aramalarda üst sıralarda çıkmanızı sağlayan içerik ve optimizasyon çalışması.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Mobil Uyumlu Tasarım</h3>
                <p className="sectoral-feature-text">
                  Tüm mobil cihazlarda kusursuz çalışan ve hızlı yüklenen responsive tasarım. Google'da üst sıralarda çıkmanızı sağlayan mobil uyumluluk.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Güven Unsurları Vitrini</h3>
                <p className="sectoral-feature-text">
                  <strong>K1 belgesi</strong>, <strong>sigorta garantisi</strong>, <em>referanslar</em> ve <strong>müşteri yorumları</strong> ile <strong>güven oluşturan</strong> vitrin bölümü. <strong>Müşteri ikna oranını %55 artıran</strong> güven unsurları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Profesyonel Görsel Galeri</h3>
                <p className="sectoral-feature-text">
                  Araç filonuzu, depolama alanlarınızı ve nakliyat sürecinizi adım adım gösteren profesyonel görsel galeri ve 360° sanal tur.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-blog"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">SEO Odaklı Blog</h3>
                <p className="sectoral-feature-text">
                  Taşınma tavsiyeleri, paketleme ipuçları ve şehir rehberleri ile SEO'nuzu güçlendiren ve organik trafik sağlayan içerik bölümü.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">7/24 İletişim Kanalları</h3>
                <p className="sectoral-feature-text">
                  WhatsApp entegrasyonu, canlı sohbet ve geri arama talep formu ile müşterilerinize her an ulaşılabilir olun.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Analitik Raporlar</h3>
                <p className="sectoral-feature-text">
                  <strong>Ziyaretçi davranışlarını</strong> ve <em>teklif formundan gelen talepleri</em> <strong>analiz eden</strong> raporlama sistemi. <strong>Pazarlama stratejinizi güçlendiren</strong> ve <strong>dönüşüm oranını artıran</strong> analitik araçlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="cargo-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel <strong>Evden Eve Nakliyat Web Sitesinin</strong> Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <strong>Online teklif formlu</strong> ve <em>şehir bazlı SEO'lu</em> <strong>nakliyat web sitesi</strong>, <strong>müşteri kazanma oranınızı %35 artırır</strong> ve <strong>operasyonel verimliliğinizi yükseltir</strong>
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
                  <h3>Yerel Aramalarda Üst Sıralarda Yer Alma</h3>
                  <p>Şehir bazlı SEO çalışması ile yerel aramalarda üst sıralarda yer alarak %65 daha fazla potansiyel müşteriye ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Telefon Trafiğinde Azalma</h3>
                  <p>Online teklif formu sayesinde basit bilgi talepleri için gelen telefonlarda %45 azalma, personel verimliliğinde artış.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Müşteri Dönüşüm Oranında Artış</h3>
                  <p>Güven unsurları ve profesyonel tasarım sayesinde ziyaretçileri müşteriye dönüştürme oranında %35 artış.</p>
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
                  <h3>Rekabette Öne Çıkma</h3>
                  <p>Rakiplerinizin çoğunun profesyonel web sitesi olmadığı bir sektörde, modern web sitenizle fark yaratırsınız.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="cargo-pricing">
        <div className="container">
          <div className="cargo-section-header">
            <h2 className="cargo-section-title"><strong>Evden Eve Nakliyat Web Sitesi</strong> Paketleri ve Fiyatları</h2>
            <p className="cargo-section-subtitle">
              <strong>Evden eve nakliyat firmanız</strong> için <em>ihtiyaçlarınıza</em> ve <em>bütçenize</em> uygun <strong>online teklif formlu web sitesi</strong> çözümleri. <strong>12.000₺</strong>'den başlayan fiyatlarla.
            </p>
          </div>

          <div className="cargo-pricing-grid">
            <div className="cargo-pricing-card">
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Başlangıç Paketi</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">12.000 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Temel Online Teklif Formu</li>
                  <li><i className="fas fa-check"></i> Temel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Admin Paneli</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> Şehir Bazlı SEO</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> Detaylı Analitik</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> 360° Sanal Tur</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="cargo-pricing-card featured">
              <div className="cargo-pricing-badge">Popüler</div>
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Profesyonel Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">22.000 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Online Teklif Formu</li>
                  <li><i className="fas fa-check"></i> Şehir Bazlı SEO (5 Şehir)</li>
                  <li><i className="fas fa-check"></i> Referans ve Müşteri Yorumları</li>
                  <li><i className="fas fa-check"></i> Kurumsal Blog</li>
                  <li><i className="fas fa-check"></i> Google Analytics Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp ve Canlı Destek</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Aylık Performans Raporu</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> 360° Sanal Tur</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="cargo-pricing-card">
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Premium Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">35.000 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Otomatik Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Şehir Bazlı SEO (15+ Şehir)</li>
                  <li><i className="fas fa-check"></i> 360° Sanal Tur</li>
                  <li><i className="fas fa-check"></i> Müşteri Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Analitik Dashboard</li>
                  <li><i className="fas fa-check"></i> İleri Düzey SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Tüm İletişim Kanalları</li>
                  <li><i className="fas fa-check"></i> Google Ads Danışmanlığı</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cargo-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Evden Eve Nakliyat Web Sitesi</strong> - Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              <strong>Evden eve nakliyat web sitesi</strong> hakkında merak ettiğiniz tüm bilgiler, <em>online teklif formu</em>, <em>şehir bazlı SEO çalışması</em> ve <em>müşteri güven unsurları</em>
            </p>
          </div>

          <div className="cargo-faq-grid">
            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Evden eve nakliyat firmam için web sitesi neden önemli?</h3>
              <p className="cargo-faq-answer">
                Günümüzde müşteriler nakliyat firması ararken öncelikle internet üzerinden araştırma yapıyor. Profesyonel bir web sitesi, firmanızın güvenilirliğini artırır, hizmetlerinizi detaylı olarak göstermenizi sağlar ve Google'da yerel aramalarda üst sıralarda çıkmanıza yardımcı olur. Online teklif formu ile potansiyel müşterilerinizden 7/24 talep alabilir, rakiplerinizden bir adım öne geçebilirsiniz.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Online teklif formu nasıl çalışır?</h3>
              <p className="cargo-faq-answer">
                Online teklif formu, müşterilerinizin taşınacak eşya bilgilerini, çıkış ve varış adreslerini, kat bilgilerini, asansör durumunu ve tarih tercihlerini girebilecekleri kapsamlı bir form sunar. Bu bilgiler anında size e-posta olarak iletilir ve admin panelinizde görüntülenir. İsterseniz, formdaki bilgilere göre otomatik fiyat hesaplaması yapan gelişmiş sistemler de entegre edebiliriz.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Şehir bazlı SEO çalışması ne avantaj sağlar?</h3>
              <p className="cargo-faq-answer">
                Şehir bazlı SEO çalışması, hizmet verdiğiniz her şehir ve ilçe için özel içerik ve optimizasyon yapılması anlamına gelir. Örneğin, 'Kadıköy evden eve nakliyat', 'Ankara Çankaya nakliyat' gibi yerel aramalar için web sitenizin üst sıralarda çıkmasını sağlar. Bu, hizmet verdiğiniz bölgelerdeki potansiyel müşterilere ulaşmanızı kolaylaştırır ve dönüşüm oranınızı artırır.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Evden eve nakliyat web sitesi ne kadar sürede hazır olur?</h3>
              <p className="cargo-faq-answer">
                Başlangıç paketi için ortalama 1-2 hafta, Profesyonel paket için 2-3 hafta, Premium paket için ise 3-5 haftalık bir geliştirme süreci öngörülmektedir. Premium pakette yer alan özel entegrasyonlar ve detaylı SEO çalışmaları nedeniyle süreç daha uzun olabilir. Acil ihtiyaçlar için hızlandırılmış süreçlerimiz de mevcuttur.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Web sitesinde müşteri güvenini nasıl artırabilirsiniz?</h3>
              <p className="cargo-faq-answer">
                Evden eve nakliyat web sitenizde müşteri güvenini artırmak için; K1 belgesi, sigorta poliçesi gösterimi, gerçek müşteri yorumları, önceki taşıma işlerinizden profesyonel fotoğraflar, video içerikler ve 360° sanal turlar kullanıyoruz. Ayrıca şeffaf fiyatlandırma, kaliteli içerik ve profesyonel tasarım da güven artırıcı unsurlardır.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Web sitesi güncellemelerini kendimiz yapabilir miyiz?</h3>
              <p className="cargo-faq-answer">
                Evet, tüm paketlerimizde sunduğumuz kullanıcı dostu admin paneli ile içeriklerinizi, hizmet bölgelerinizi, fiyatlarınızı, referanslarınızı ve görsellerinizi kolayca güncelleyebilirsiniz. Teknik bilgi gerektirmeyen bu panel sayesinde web sitenizi sürekli güncel tutabilirsiniz. Premium pakette daha detaylı raporlama ve analiz araçları da sunulmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cargo-cta">
        <div className="container">
          <div className="cargo-cta-content">
            <h2 className="cargo-cta-title">
              <strong>Evden Eve Nakliyat Firmanız</strong> İçin <span className="sectoral-highlight">Müşteri Kazandıran</span> Web Sitesi Oluşturalım
            </h2>
            <p className="cargo-cta-text">
              <strong>12.000₺</strong>'den başlayan fiyatlarla <strong>online teklif formlu</strong>, <em>şehir bazlı SEO çalışmalı</em> ve <strong>müşteri güven unsurları içeren</strong> <strong>nakliyat web sitesi</strong> için hemen iletişime geçin.
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

export default HomeToHomeMoving; 