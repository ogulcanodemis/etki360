import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './LogisticsCompany.css';

const LogisticsCompany = () => {
  // Lojistik Firması Servis Schema
  const logisticsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lojistik Firması Web Sitesi Tasarımı",
    "description": "Lojistik firmanız için özel tasarlanmış, profesyonel ve müşteri odaklı web sitesi çözümleri. Teslimat takibi, müşteri portalı ve online teklif altyapısı.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lojistik Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Lojistik firmaları için temel web sitesi çözümü",
          "price": "14000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Profesyonel Paket",
          "description": "Online teklif formu ve müşteri portalı içeren web sitesi paketi",
          "price": "24000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "Kapsamlı SEO çalışması ve teslimat takip sistemi içeren premium web sitesi çözümü",
          "price": "38000",
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
        "name": "Lojistik firması için web sitesi neden önemlidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profesyonel bir web sitesi, lojistik firmanızın güvenilirliğini artırır, hizmetlerinizi detaylı olarak tanıtmanızı sağlar ve yeni müşteriler kazanmanıza yardımcı olur. Teslimat takibi, teklif alma ve müşteri portalı gibi özellikler ile operasyonel verimliliğinizi artırabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Teslimat takip sistemi nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teslimat takip sistemi, firmanızın mevcut lojistik altyapısına entegre çalışır. Müşteriler, web sitesi üzerinden takip numaralarını girerek sevkiyatlarının güncel durumunu anlık olarak görüntüleyebilirler. Premium ve Kurumsal paketlerde harita entegrasyonu sayesinde teslimatın fiziksel konumu da gösterilir."
        }
      },
      {
        "@type": "Question",
        "name": "Müşteri portalı hangi özellikleri içerir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Müşteri portalı, kurumsal müşterilerinizin sevkiyat geçmişini görüntülemesine, yeni sipariş oluşturmasına, faturaları incelemesine ve ödemelerini yapmasına olanak tanır. Kullanıcı yetkilendirme sistemi ile farklı erişim seviyeleri tanımlayabilirsiniz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Lojistik Firması Web Sitesi Tasarımı | Teslimat Takip Sistemli Web Sitesi | etki360",
    "description": "Lojistik firmaları için teslimat takip sistemi, müşteri portalı ve online teklif formu içeren profesyonel web sitesi tasarımı. 14.000₺'den başlayan fiyatlarla.",
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
          "name": "Lojistik Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat/lojistik-firmasi"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Lojistik Firması Web Sitesi Tasarımı | Teslimat Takip Sistemli Web Site</title>
        <meta name="description" content="Lojistik firmaları için teslimat takip sistemi, müşteri portalı ve online teklif formu içeren profesyonel web sitesi tasarımı. 14.000₺'den başlayan fiyatlarla." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/nakliyat/lojistik-firmasi" />
        <meta property="og:title" content="Lojistik Firması Web Sitesi Tasarımı | Teslimat Takip Sistemli Web Sitesi" />
        <meta property="og:description" content="Lojistik firmaları için teslimat takip sistemi, müşteri portalı ve online teklif formu içeren profesyonel web sitesi tasarımı. 14.000₺'den başlayan fiyatlarla." />
        <meta property="og:image" content="https://etki360.com/images/og/lojistik-firmasi-web-sitesi.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://etki360.com/sektorel-cozumler/nakliyat/lojistik-firmasi" />
        <meta property="twitter:title" content="Lojistik Firması Web Sitesi Tasarımı | Teslimat Takip Sistemli Web Sitesi" />
        <meta property="twitter:description" content="Lojistik firmaları için teslimat takip sistemi, müşteri portalı ve online teklif formu içeren profesyonel web sitesi tasarımı. 14.000₺'den başlayan fiyatlarla." />
        <meta property="twitter:image" content="https://etki360.com/images/og/lojistik-firmasi-web-sitesi.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/nakliyat/lojistik-firmasi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(logisticsServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="logistics-hero">
        <div className="container">
          <div className="logistics-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Lojistik Firması Web Sitesi</span>
          </div>
          <div className="logistics-hero-content">
            <div className="logistics-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Lojistik Firması Web Sitesi</strong> ile <span className="sectoral-highlight-yellow">Müşteri Memnuniyetini Artırın</span>
              </h1>
              <p className="sectoral-hero-description">
                <strong>Lojistik ve tedarik zinciri</strong> firmanız için <em>müşteri odaklı</em>, <strong>teslimat takip sistemi</strong> barındıran ve <strong>kurumsal müşteri portalı</strong> içeren <strong>profesyonel web sitesi</strong> çözümleri. <strong>14.000₺</strong>'den başlayan fiyatlarla <em>SEO uyumlu</em> lojistik web sitesi.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="logistics-hero-visual">
              <div className="logistics-mockup">
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
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                  </div>
                  <div className="mockup-cta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="logistics-overview">
        <div className="container">
          <div className="logistics-section-header">
            <h2 className="logistics-section-title"><strong>Lojistik Firması Web Sitesi</strong> Neden Önemli?</h2>
            <p className="logistics-section-subtitle">
              <strong>Lojistik sektöründe</strong> müşterilerin <strong>%82'si</strong> bir <em>lojistik firmasını seçerken</em> <strong>online varlığına</strong> ve <strong>web sitesinin profesyonelliğine</strong> önem veriyor. <strong>Teslimat takip sistemi</strong> ile müşteri memnuniyetini <strong>%45 artırın</strong>.
            </p>
          </div>

          <div className="logistics-overview-grid">
            <div className="logistics-overview-card">
              <div className="logistics-card-icon">
                <i className="fas fa-truck-loading"></i>
              </div>
              <h3 className="logistics-card-title">Teslimat Takip Sistemi</h3>
              <p className="logistics-card-text">
                <strong>Müşterilerinizin en çok talep ettiği</strong> özellik olan <em>teslimat takip sistemi</em> ile <strong>müşteri memnuniyetini %45 artırın</strong> ve <strong>müşteri hizmetleri yükünü %65 azaltın</strong>. <strong>Harita entegrasyonu</strong> ile gerçek zamanlı konum takibi.
              </p>
            </div>

            <div className="logistics-overview-card">
              <div className="logistics-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="logistics-card-title">Kurumsal Müşteri Portalı</h3>
              <p className="logistics-card-text">
                <strong>Kurumsal müşterileriniz için</strong> özel olarak tasarlanmış <em>müşteri portalı</em> ile <strong>sipariş ve sevkiyat yönetimini kolaylaştırın</strong>. <strong>Yetkilendirme sistemi</strong> ile <em>farklı erişim seviyeleri</em> tanımlayabilirsiniz.
              </p>
            </div>

            <div className="logistics-overview-card">
              <div className="logistics-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="logistics-card-title">Online Teklif Sistemi</h3>
              <p className="logistics-card-text">
                <strong>Potansiyel müşterilerinizin</strong> sevkiyat detaylarını girerek <em>anında teklif alabilecekleri</em> <strong>online teklif sistemi</strong>. <strong>Dönüşüm oranınızı %70 artıran</strong> akıllı form yapısı.
              </p>
            </div>

            <div className="logistics-overview-card">
              <div className="logistics-card-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3 className="logistics-card-title">Tesis ve Filo Tanıtımı</h3>
              <p className="logistics-card-text">
                <strong>Depo, antrepo ve filonuzu</strong> etkileyici görsellerle tanıtarak <em>kurumsal güven</em> oluşturun. <strong>Sanal tur</strong> ile tesislerinizi potansiyel müşterilerinize gösterin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="logistics-features">
        <div className="container">
          <div className="logistics-section-header">
            <h2 className="logistics-section-title"><strong>Lojistik Firması Web Sitesi</strong> Özellikleri</h2>
            <p className="logistics-section-subtitle">
              <strong>Lojistik ve tedarik zinciri firmanızın</strong> ihtiyaçlarına özel, <em>müşteri odaklı</em> ve <strong>operasyonel verimliliği artıran</strong> <strong>teslimat takip sistemli</strong> web sitesi çözümleri. <strong>Müşteri portalı</strong> ve <strong>API desteği</strong>.
            </p>
          </div>

          <div className="logistics-features-grid">
            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Gelişmiş Teslimat Takip Sistemi</h3>
                <p className="logistics-feature-text">
                  <strong>Takip numarası</strong> veya <strong>sipariş numarası</strong> ile <em>anlık takip imkanı</em>. <strong>Google Haritalar</strong> üzerinde gösterim ve <strong>teslimat sürecindeki tüm aşamaları</strong> görüntüleme. <strong>Müşteri memnuniyetini %45 artıran</strong> sevkiyat izleme sistemi.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Kurumsal Müşteri Portalı</h3>
                <p className="logistics-feature-text">
                  <strong>Kurumsal müşterileriniz için</strong> özel olarak tasarlanmış <em>müşteri portalı</em>. <strong>Sipariş oluşturma</strong>, <strong>sevkiyat geçmişi</strong>, <strong>fatura görüntüleme</strong> ve <strong>ödeme yönetimi</strong> özellikleri. <strong>Yetkilendirme sistemi</strong> ile farklı erişim düzeyleri.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-file-invoice"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Online Teklif ve Sipariş Formu</h3>
                <p className="logistics-feature-text">
                  <strong>Müşterilerinizin sevkiyat bilgilerini</strong> ve <strong>teslimat adreslerini</strong> girerek <em>anında teklif alabilecekleri</em> <strong>online form</strong>. <strong>Operasyonel verimliliğinizi %70 artıran</strong> ve <strong>manuel veri girişi hatalarını %80 azaltan</strong> sipariş yönetimi.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Tesis ve Depo Tanıtım Sayfaları</h3>
                <p className="logistics-feature-text">
                  <strong>Depo ve antrepolarınızı</strong> etkileyici görsellerle tanıtarak <em>kurumsal güven</em> oluşturun. <strong>Sanal tur</strong> özelliği ile tesislerinizi potansiyel müşterilerinize gösterin. <strong>Kapasite</strong>, <strong>güvenlik</strong> ve <strong>teknolojik altyapı</strong> detayları.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Filo ve Araç Tanıtımı</h3>
                <p className="logistics-feature-text">
                  <strong>Lojistik filonuzu</strong> ve <strong>araç tiplerini</strong> detaylı olarak tanıtın. <strong>Araç özellikleri</strong>, <strong>kapasite bilgileri</strong> ve <strong>uygun yük tipleri</strong> hakkında bilgilendirici içerikler. <strong>Güvenilirlik algısını %60 artıran</strong> profesyonel görseller.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">Çoklu Dil Desteği</h3>
                <p className="logistics-feature-text">
                  <strong>Uluslararası hizmet veren</strong> lojistik firmaları için <em>çoklu dil desteği</em>. <strong>İngilizce</strong>, <strong>Almanca</strong>, <strong>Rusça</strong> ve <strong>Arapça</strong> gibi dillerde içerik yönetimi. <strong>Uluslararası müşteri potansiyelinizi %55 artıran</strong> lokalizasyon çözümleri.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">ERP ve TMS Entegrasyonu</h3>
                <p className="logistics-feature-text">
                  <strong>Kurumsal ERP sistemleriniz</strong> ve <strong>Taşıma Yönetim Sistemleriniz (TMS)</strong> ile <em>tam entegrasyon</em>. <strong>SAP</strong>, <strong>Oracle</strong>, <strong>Microsoft Dynamics</strong> ve özel geliştirilmiş sistemlerle uyumlu <strong>API desteği</strong>. <strong>Veri tutarlılığını sağlayan</strong> otomatik senkronizasyon.
                </p>
              </div>
            </div>

            <div className="logistics-feature-card">
              <div className="logistics-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="logistics-feature-content">
                <h3 className="logistics-feature-title">İstatistik ve Raporlama</h3>
                <p className="logistics-feature-text">
                  <strong>Kurumsal müşterileriniz için</strong> özel raporlama araçları. <strong>Sevkiyat performansı</strong>, <strong>teslimat süresi</strong>, <strong>maliyet analizi</strong> ve <strong>trend raporları</strong>. <strong>Karar verme süreçlerini %40 hızlandıran</strong> veri görselleştirme çözümleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="logistics-benefits">
        <div className="container">
          <div className="logistics-section-header">
            <h2 className="logistics-section-title">Profesyonel <strong>Lojistik Firması Web Sitesinin</strong> Faydaları</h2>
            <p className="logistics-section-subtitle">
              <strong>Teslimat takip sistemli</strong> ve <em>kurumsal müşteri portallı</em> <strong>lojistik web sitesi</strong>, <strong>müşteri memnuniyetinizi %45 artırır</strong> ve <strong>operasyonel verimliliğinizi %60 yükseltir</strong>
            </p>
          </div>

          <div className="logistics-benefits-content">
            <div className="logistics-benefits-mockup">
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
            
            <div className="benefits-list">
              <div className="benefits-item">
                <div className="benefits-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="benefits-content">
                  <h3>Kurumsal Müşteri Kazanımı</h3>
                  <p>
                    <strong>Profesyonel lojistik web siteniz</strong> ile potansiyel kurumsal müşterilerin <strong>%65'ini</strong> ikna ederek <em>uzun vadeli anlaşmalar</em> yapabilirsiniz. Güven oluşturan tasarım ve içerik stratejisi ile <strong>dönüşüm oranınızı %40 artırın</strong>.
                  </p>
                </div>
              </div>

              <div className="benefits-item">
                <div className="benefits-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="benefits-content">
                  <h3>Operasyonel Verimlilik</h3>
                  <p>
                    <strong>Online teklif formları</strong> ve <strong>müşteri portalı</strong> sayesinde <em>manuel işlemleri %80 azaltın</em>. <strong>Teslimat takip sistemi</strong> ile müşteri hizmetleri çağrılarını <strong>%65 düşürün</strong> ve personel verimliliğini artırın.
                  </p>
                </div>
              </div>

              <div className="benefits-item">
                <div className="benefits-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="benefits-content">
                  <h3>Müşteri Memnuniyeti</h3>
                  <p>
                    <strong>Teslimat takip sistemi</strong> ve <strong>7/24 erişilebilir müşteri portalı</strong> ile <em>müşteri memnuniyetini %45 artırın</em>. Şeffaf süreç yönetimi sayesinde <strong>müşteri sadakatini güçlendirin</strong> ve tekrarlayan iş potansiyelinizi yükseltin.
                  </p>
                </div>
              </div>

              <div className="benefits-item">
                <div className="benefits-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div className="benefits-content">
                  <h3>Google'da Üst Sıralarda Yer Alma</h3>
                  <p>
                    <strong>SEO uyumlu lojistik web siteniz</strong> ile <em>"lojistik firması", "sevkiyat hizmeti"</em> gibi aramalarda <strong>Google'da üst sıralarda yer alın</strong>. Organik trafiğinizi <strong>%200'e kadar artırarak</strong> reklam maliyetlerinizi düşürün.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="logistics-pricing">
        <div className="container">
          <div className="logistics-section-header">
            <h2 className="logistics-section-title"><strong>Lojistik Firması Web Sitesi</strong> Fiyatları</h2>
            <p className="logistics-section-subtitle">
              <strong>Lojistik firmanızın</strong> ihtiyaçlarına ve bütçenize uygun <em>esnek paketler</em>. <strong>Teslimat takip sistemi</strong>, <strong>müşteri portalı</strong> ve <strong>ERP entegrasyonu</strong> içeren <strong>profesyonel web sitesi çözümleri</strong>.
            </p>
          </div>

          <div className="logistics-pricing-grid">
            <div className="logistics-pricing-card">
              <h3 className="logistics-pricing-name">Başlangıç Paketi</h3>
              <p className="logistics-pricing-description">Lojistik firmanız için profesyonel kurumsal site</p>
              <div className="logistics-pricing-price">14.000₺ <span>+KDV</span></div>
              <ul className="logistics-pricing-features">
                <li>Responsive Mobil Uyumlu Tasarım</li>
                <li>5 Sayfalık Kurumsal Site (Ana Sayfa, Hakkımızda, Hizmetlerimiz, Filo, İletişim)</li>
                <li>Tesis ve Filo Tanıtım Sayfaları</li>
                <li>İletişim Formu</li>
                <li>Hizmet Bölgeleri Haritası</li>
                <li>Temel SEO Optimizasyonu</li>
                <li>Sosyal Medya Entegrasyonu</li>
                <li>Google Analytics Kurulumu</li>
                <li>Basit İçerik Yönetim Sistemi</li>
                <li>SSL Sertifikası</li>
                <li>1 Yıl Ücretsiz Hosting</li>
                <li>1 Yıl Ücretsiz Teknik Destek</li>
              </ul>
              <a href="/iletisim" className="logistics-pricing-button">Hemen Başvurun</a>
            </div>

            <div className="logistics-pricing-card featured">
              <h3 className="logistics-pricing-name">Profesyonel Paket</h3>
              <p className="logistics-pricing-description">Teslimat takip sistemi ve müşteri portalı</p>
              <div className="logistics-pricing-price">24.000₺ <span>+KDV</span></div>
              <ul className="logistics-pricing-features">
                <li>Başlangıç Paketindeki Tüm Özellikler</li>
                <li>10 Sayfalık Genişletilmiş Site Yapısı</li>
                <li>Teslimat Takip Sistemi</li>
                <li>Kurumsal Müşteri Portalı</li>
                <li>Online Teklif Formu</li>
                <li>Detaylı Hizmet Sayfaları</li>
                <li>Müşteri Yorumları Modülü</li>
                <li>Kapsamlı SEO Çalışması</li>
                <li>Google My Business Optimizasyonu</li>
                <li>Ücretsiz Site İçi Arama</li>
                <li>İki Dil Desteği (TR-EN)</li>
                <li>Gelişmiş İçerik Yönetim Paneli</li>
                <li>2 Yıl Ücretsiz Hosting</li>
                <li>2 Yıl Ücretsiz Teknik Destek</li>
              </ul>
              <a href="/iletisim" className="logistics-pricing-button">Hemen Başvurun</a>
            </div>

            <div className="logistics-pricing-card">
              <h3 className="logistics-pricing-name">Kurumsal Paket</h3>
              <p className="logistics-pricing-description">Tam entegrasyon ve özelleştirilmiş çözümler</p>
              <div className="logistics-pricing-price">38.000₺ <span>+KDV</span></div>
              <ul className="logistics-pricing-features">
                <li>Profesyonel Paketindeki Tüm Özellikler</li>
                <li>Sınırsız Sayfa Yapısı</li>
                <li>Gelişmiş Teslimat Takip Sistemi (Harita Entegrasyonlu)</li>
                <li>Kapsamlı Kurumsal Müşteri Portalı</li>
                <li>ERP/TMS Sistem Entegrasyonu</li>
                <li>Çoklu Dil Desteği (4 Dile Kadar)</li>
                <li>Özel API Geliştirme</li>
                <li>İstatistik ve Raporlama Modülü</li>
                <li>Ödeme Sistemi Entegrasyonu</li>
                <li>Detaylı Yetkilendirme Sistemi</li>
                <li>Şube/Acente Yönetim Sistemi</li>
                <li>Premium SEO Paketi</li>
                <li>Gelişmiş Güvenlik Önlemleri</li>
                <li>3 Yıl Ücretsiz Hosting</li>
                <li>3 Yıl Ücretsiz Teknik Destek</li>
              </ul>
              <a href="/iletisim" className="logistics-pricing-button">Hemen Başvurun</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="logistics-faq">
        <div className="container">
          <div className="logistics-section-header">
            <h2 className="logistics-section-title"><strong>Lojistik Firması Web Sitesi</strong> - Sık Sorulan Sorular</h2>
            <p className="logistics-section-subtitle">
              <strong>Lojistik firması web sitesi</strong> hakkında merak ettiğiniz tüm bilgiler, <em>teslimat takip sistemi</em>, <em>kurumsal müşteri portalı</em>, <em>ERP entegrasyonu</em> ve <em>API desteği</em>
            </p>
          </div>

          <div className="logistics-faq-grid">
            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">Lojistik firması için web sitesi neden önemlidir?</h3>
              <p className="logistics-faq-answer">
                Profesyonel bir web sitesi, lojistik firmanızın güvenilirliğini artırır, hizmetlerinizi detaylı olarak tanıtmanızı sağlar ve yeni müşteriler kazanmanıza yardımcı olur. Teslimat takibi, teklif alma ve müşteri portalı gibi özellikler ile operasyonel verimliliğinizi artırabilirsiniz. Özellikle kurumsal müşteriler, lojistik firması seçerken web sitesinin profesyonelliğine büyük önem veriyor.
              </p>
            </div>

            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">Teslimat takip sistemi nasıl çalışır?</h3>
              <p className="logistics-faq-answer">
                Teslimat takip sistemi, firmanızın mevcut lojistik altyapısına entegre çalışır. Müşteriler, web sitesi üzerinden takip numaralarını girerek sevkiyatlarının güncel durumunu anlık olarak görüntüleyebilirler. Premium ve Kurumsal paketlerde harita entegrasyonu sayesinde teslimatın fiziksel konumu da gösterilir. Sistem, teslimat durumlarında otomatik bildirimler göndererek müşteri iletişimini güçlendirir ve müşteri hizmetleri yükünü azaltır.
              </p>
            </div>

            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">Kurumsal müşteri portalı hangi özellikleri içerir?</h3>
              <p className="logistics-faq-answer">
                Kurumsal müşteri portalı, düzenli olarak hizmet alan müşterilerinize özel bir giriş alanı sunar. Bu portal üzerinden müşterileriniz sevkiyat geçmişini görüntüleyebilir, yeni siparişler oluşturabilir, faturaları inceleyebilir ve ödemelerini yapabilir. Ayrıca, yetkilendirme sistemi ile şirket içindeki farklı kullanıcılara farklı erişim seviyeleri tanımlayabilirsiniz. Böylece müşteri firma içindeki her departman, kendisiyle ilgili işlemleri kolayca yönetebilir.
              </p>
            </div>

            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">ERP veya TMS sistemleri ile entegrasyon mümkün mü?</h3>
              <p className="logistics-faq-answer">
                Evet, Kurumsal paketimizde SAP, Oracle, Microsoft Dynamics gibi yaygın ERP sistemleri ve çeşitli Taşıma Yönetim Sistemleri (TMS) ile entegrasyon imkanı sunuyoruz. API tabanlı entegrasyon sayesinde, web siteniz ve mevcut sistemleriniz arasında veri akışı sağlanır. Böylece sipariş, sevkiyat ve müşteri bilgileri otomatik olarak senkronize edilir, çift veri girişi önlenir ve operasyonel verimlilik artırılır.
              </p>
            </div>

            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">Lojistik firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="logistics-faq-answer">
                Web sitesinin tamamlanma süresi seçtiğiniz pakete ve özel isteklerinize bağlı olarak değişir. Başlangıç paketi için ortalama 3-4 hafta, Profesyonel paket için 5-6 hafta, Kurumsal paket için ise 8-10 haftalık bir geliştirme süreci öngörülmektedir. Kurumsal pakette yer alan özel entegrasyonlar ve API geliştirmeleri nedeniyle süreç daha uzun olabilir. Acil ihtiyaçlar için hızlandırılmış süreçlerimiz de mevcuttur.
              </p>
            </div>

            <div className="logistics-faq-item">
              <h3 className="logistics-faq-question">Web sitesi mobil cihazlarda nasıl görünecek?</h3>
              <p className="logistics-faq-answer">
                Tüm paketlerimizde responsive (duyarlı) tasarım standart olarak sunulmaktadır. Bu sayede web siteniz akıllı telefonlar, tabletler ve farklı ekran boyutlarına sahip tüm cihazlarda kusursuz şekilde görüntülenir. Mobil kullanıcıların oranının %60'ın üzerinde olduğu günümüzde, mobil uyumluluk hem kullanıcı deneyimi hem de Google sıralamalarında üst sıralarda yer almak için kritik öneme sahiptir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="logistics-cta">
        <div className="container">
          <h2 className="logistics-cta-title">Lojistik Firmanızı Dijitalleştirmeye Hazır mısınız?</h2>
          <p className="logistics-cta-subtitle">
            Profesyonel lojistik web sitesi çözümlerimiz ile müşteri memnuniyetini artırın, operasyonel verimliliği yükseltin ve rekabette öne geçin. Hemen ücretsiz demo talep edin!
          </p>
          <div className="logistics-cta-buttons">
            <a href="/iletisim" className="logistics-cta-primary">Ücretsiz Teklif Alın</a>
            <a href="tel:+902123222020" className="logistics-cta-secondary">Hemen Arayın</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsCompany; 