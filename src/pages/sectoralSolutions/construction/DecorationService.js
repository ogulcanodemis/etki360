import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './DecorationService.css';

const DecorationService = () => {
  // SEO için Schema Markup - Service Schema
  const decorationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dekorasyon Firması Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["İç Mimar Web Sitesi", "Dekorasyon Şirketi Web Sitesi", "İç Dizayn Web Sitesi"],
    "description": "Dekorasyon firmaları için özel tasarlanmış, proje portfolyosu, 3D görselleştirme ve mekan türleri filtrelemesi içeren profesyonel web sitesi tasarımı ve geliştirme hizmetleri. 7.900₺'den başlayan fiyatlarla SEO uyumlu dekorasyon web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dekorasyon Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Temel proje galerisi ve SEO optimizasyonu içeren web sitesi paketi",
          "price": "7900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Premium Paket",
          "description": "Filtrelenebilir portfolyo ve online randevu sistemi içeren web sitesi paketi",
          "price": "14900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "3D görsel entegrasyonu ve 360° mekan turu içeren premium web sitesi çözümü",
          "price": "24900",
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
        "name": "Dekorasyon web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seçtiğiniz pakete bağlı olarak, dekorasyon web sitesi genellikle 2-4 hafta içerisinde tamamlanır. Görsel ağırlıklı bir web sitesi olduğu için, proje görselleri ve içerik hazırlığı sürecin en önemli kısmıdır. Kurumsal paket için 3D entegrasyonlar ve özel sistemler nedeniyle 4-6 hafta gerekebilir."
        }
      },
      {
        "@type": "Question",
        "name": "360° mekan turu özelliği nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kurumsal paketimizde yer alan 360° mekan turu özelliği, tamamladığınız projelerin 360 derecelik fotoğraflarını çekerek interaktif bir şekilde sunmanızı sağlar. Ziyaretçiler sanal gerçeklik gözlükleriyle veya mouse/parmak hareketleriyle mekanı her açıdan inceleyebilirler."
        }
      },
      {
        "@type": "Question",
        "name": "Filtrelenebilir portfolyo sistemi ne sağlar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium ve Kurumsal paketlerimizde bulunan filtrelenebilir portfolyo sistemi, ziyaretçilerin projelerinizi çeşitli kriterlere göre filtrelemesini sağlar. Mekan tipi (ev, ofis, cafe vb.), stil (modern, klasik, endüstriyel vb.), metrekare, bütçe aralığı gibi filtreler kullanılabilir."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Dekorasyon Firması Web Sitesi | Görsel Portfolyo ve Stil Gösterimi | etki360",
    "description": "Dekorasyon firmanız için proje görselleri, mekan türü filtreleme ve 360° tur özellikleri içeren profesyonel web sitesi çözümleri. İç mimari, ev ve ofis dekorasyonu hizmetlerinizi en etkileyici şekilde sergileyebileceğiniz tasarımlar. 7.900₺'den başlayan fiyatlarla.",
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
          "name": "İnşaat & Dekorasyon",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dekorasyon Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon/dekorasyon"
        }
      ]
    }
  };

  return (
    <div className="sectoral-page decoration-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Dekorasyon Firması Web Sitesi | Görsel Portfolyo ve Stil Gösterimi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Dekorasyon firmanız için proje görselleri, mekan türü filtreleme ve 360° tur özellikleri içeren profesyonel web sitesi çözümleri. İç mimari, ev ve ofis dekorasyonu hizmetlerinizi en etkileyici şekilde sergileyebileceğiniz tasarımlar. 7.900₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="dekorasyon firması web sitesi, iç mimar web sitesi, dekorasyon şirketi web sitesi, iç dizayn web sitesi, dekorasyon proje galerisi, 3d görselleştirme, dekorasyon seo, ev dekorasyon, ofis dekorasyon, mobilya tasarım" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/dekorasyon" />
        <meta property="og:title" content="Dekorasyon Firması Web Sitesi | Görsel Portfolyo ve Stil Gösterimi | etki360" />
        <meta property="og:description" content="Dekorasyon firmanız için proje görselleri, mekan türü filtreleme ve 360° tur özellikleri içeren profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/dekorasyon-firmasi-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dekorasyon Firması Web Sitesi | Görsel Portfolyo ve Stil Gösterimi | etki360" />
        <meta name="twitter:description" content="Dekorasyon firmanız için proje görselleri, mekan türü filtreleme ve 360° tur özellikleri içeren profesyonel web sitesi çözümleri." />
        <meta name="twitter:image" content="https://etki360.com/images/og/dekorasyon-firmasi-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/dekorasyon" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(decorationServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="decoration-hero">
        <div className="container">
          <div className="decoration-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat & Dekorasyon</Link> / <span>Dekorasyon Web Sitesi</span>
          </div>
          <div className="decoration-hero-content">
            <div className="decoration-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Dekorasyon Firmanız</strong> İçin <span className="sectoral-highlight"><strong>Etkileyici</strong></span> <strong>Web Sitesi</strong>
              </h1>
              <p className="sectoral-hero-description">
                <strong>İç mimari</strong>, <strong>ev dekorasyonu</strong>, <em>ofis dekorasyonu</em> ve <strong>mobilya tasarımı</strong> hizmetleriniz için <em>müşteri kazandıran</em>, <strong>profesyonel dekorasyon web sitesi</strong> çözümleri sunuyoruz. <em>Görsel portfolyo</em>, <strong>stil gösterimi</strong> ve <em>filtreli galeri</em> özellikleriyle <strong>7.900₺'den başlayan</strong> fiyatlarla <em>Google'da üst sıralarda</em> yer alın. <strong>Müşterilerinizin %78'i</strong> satın alma kararı vermeden önce web sitenizi inceliyor!
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="decoration-hero-visual">
              <div className="decoration-mockup">
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
                  <div className="mockup-gallery">
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                  </div>
                  <div className="mockup-services">
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
            <h2 className="sectoral-section-title"><strong>Dekorasyon Web Sitesi</strong> Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              <em>Dekorasyon hizmeti</em> almak isteyen müşterilerin <strong>%85'i</strong> ilk olarak internette araştırma yapıyor ve <strong>görsellere göre karar veriyor</strong>. Profesyonel bir web sitesi ile <em>dönüşüm oranınızı %62 artırabilirsiniz</em>.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-images"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Görsel Portfolyo</strong></h3>
              <p className="sectoral-card-text">
                Tamamladığınız <em>dekorasyon projelerini</em> etkileyici görsellerle sergileyerek potansiyel müşterilere <strong>stil ve kalite anlayışınızı</strong> gösterin. <em>Zengin görseller</em> site ziyaretçilerinin sayfada kalma süresini <strong>%43 artırır</strong>.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Stil Gösterimi</strong></h3>
              <p className="sectoral-card-text">
                <em>Modern, klasik, minimalist</em> gibi farklı <strong>dekorasyon stillerinizi</strong> kategorize ederek müşterilerin ilgili projelere hızlıca erişmesini sağlayın. <strong>Stil bazlı filtreleme</strong> sayesinde dönüşüm oranlarında <em>%38 artış</em> elde edin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-ruler-combined"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Proje Planlama</strong></h3>
              <p className="sectoral-card-text">
                Online <em>dekorasyon proje planlama</em> araçları ile müşterilerinizin ihtiyaçlarını belirleyip <strong>ön teklifler sunarak</strong> süreçleri hızlandırın. Bu özellik potansiyel müşteri dönüşümünü <em>%54 artırır</em>.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Müşteri Referansları</strong></h3>
              <p className="sectoral-card-text">
                <em>Memnun müşterilerinizin yorumları</em> ve başarılı projeleriniz, yeni müşteriler kazanmanızda en etkili <strong>dekorasyon pazarlama</strong> aracınızdır. Güçlü referanslar müşteri güvenini <strong>%72 oranında</strong> artırır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Dekorasyon Web Sitesi</strong> Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <em>Dekorasyon firmanızın</em> ihtiyaçlarına özel, <strong>görsel odaklı web sitesi</strong> çözümleri ile <em>rakiplerinizden ayrışın</em>
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-th"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>İlham Verici Galeri</strong></h3>
                <p className="sectoral-feature-text">
                  Farklı mekanlar, stiller ve <em>dekorasyon projeleri</em> için <strong>filtreli galeri</strong> ile tüm çalışmalarınızı etkileyici şekilde sergileyebilirsiniz. <em>Kullanıcı dostu arayüz</em> ile projeleriniz parlasın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-couch"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mekan Türleri</strong> Filtreleme</h3>
                <p className="sectoral-feature-text">
                  <em>Oturma odası</em>, <em>yatak odası</em>, <strong>ofis dekorasyonu</strong>, cafe gibi farklı mekan türlerine göre kategorize edilmiş <strong>dekorasyon portfolyo</strong> sistemi ile müşterilere kolaylık sağlayın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>3D Görseller</strong> ve Renderlar</h3>
                <p className="sectoral-feature-text">
                  <em>3D tasarım</em> ve <strong>render çalışmalarınızı</strong> interaktif gösterme imkanı sunan modern teknolojik altyapı ile <em>dekorasyon projelerinizi</em> hayata geçirmeden sergileyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Online Randevu</strong> Sistemi</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin <em>dekorasyon danışmanlığı</em> veya <strong>ev/ofis ziyareti</strong> için online konsültasyon randevusu alabileceği entegre takvim ve <em>randevu sistemi</em>.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Dekorasyon Proje</strong> Formu</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin ihtiyaçlarını, <em>bütçe ve stil tercihlerini</em> detaylı olarak belirtebilecekleri <strong>özel dekorasyon proje talep formu</strong> ile müşteri beklentilerini daha iyi anlayın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Tasarım Süreci</strong> Açıklaması</h3>
                <p className="sectoral-feature-text">
                  <em>Dekorasyon tasarım</em> ve uygulama sürecinizi adım adım anlatan, <strong>şeffaflık sağlayan</strong> bilgilendirici bölüm ile müşteri güvenini artırın ve projelerinizi profesyonelce sunun.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-box-open"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Ürün ve Mobilya</strong> Kataloğu</h3>
                <p className="sectoral-feature-text">
                  Kullandığınız <em>mobilya, aydınlatma ve aksesuar</em> ürünlerini sergileyebileceğiniz <strong>entegre dekorasyon ürün kataloğu</strong> sistemi ile satış potansiyelinizi artırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mobil Uyumlu</strong> Dekorasyon Sitesi</h3>
                <p className="sectoral-feature-text">
                  Her cihazda mükemmel görüntülenen, <em>hızlı yüklenen</em> ve kolay kullanılabilen <strong>responsive tasarım</strong> ile mobil kullanıcılardan gelen <em>dekorasyon müşterilerini</em> kaçırmayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin <strong>Dekorasyon Firmanıza</strong> Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <strong>Görsel odaklı</strong> bir web sitesi, <em>dekorasyon firmanıza</em> nasıl değer katar? <strong>Dijital dönüşüm</strong> ile işinizi büyütün.
            </p>
          </div>

          <div className="decoration-benefits-content">
            <div className="decoration-benefits-mockup">
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
                  <div className="benefits-mockup-gallery">
                    <div className="benefits-mockup-projects">
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                    </div>
                  </div>
                  <div className="benefits-mockup-info"></div>
                </div>
              </div>
            </div>
            <div className="decoration-benefits-list">
              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3><strong>Güçlü İlk İzlenim</strong></h3>
                  <p>Profesyonel tasarım ve <em>dekorasyon görselleriyle</em> dolu bir web sitesi, müşterilerinizin sizinle çalışma kararını <strong>%70 oranında</strong> etkiler. <em>İç mimari ve dekorasyon</em> alanında güven oluşturur.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3><strong>Nitelikli Dekorasyon Müşterileri</strong></h3>
                  <p><em>Dekorasyon stilinizi</em>, süreçlerinizi ve projelerinizi açıkça gösteren web siteniz, sizinle uyumlu <strong>kaliteli müşterileri</strong> çekecektir. Müşteri kalitesi satış döngüsünü <em>%45 kısaltır</em>.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3><strong>Zaman ve Kaynak Tasarrufu</strong></h3>
                  <p>Online <em>dekorasyon randevu</em> ve proje bilgi formları ile telefon trafiğini azaltıp, <strong>daha verimli müşteri görüşmeleri</strong> yapabilirsiniz. Bu özellikler operasyonel verimliliği <em>%35 artırır</em>.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3><strong>Dijital Dekorasyon Portföyü</strong></h3>
                  <p>Tamamladığınız <em>iç mimari projelerinizi</em> arşivleyerek potansiyel müşterilere her an gösterilebilecek <strong>zengin bir dekorasyon portfolyosu</strong> oluşturursunuz. Bu satış görüşmelerini <em>%58 daha etkili</em> hale getirir.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3><strong>SEO ile Sürekli Müşteri Akışı</strong></h3>
                  <p><em>"İç mimar"</em>, <em>"ev dekorasyon"</em>, <em>"ofis tasarım"</em> gibi aramalarda <strong>Google'da üst sıralarda</strong> çıkarak sürekli yeni müşteri akışı sağlarsınız. SEO uyumlu web sitesi <strong>organik trafiği %138</strong> artırabilir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="decoration-pricing">
        <div className="container">
          <div className="decoration-section-header">
            <h2 className="decoration-section-title"><strong>Dekorasyon Web Sitesi</strong> Paketleri ve Fiyatları</h2>
            <p className="decoration-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun <em>dekorasyon firması web sitesi</em> çözümleri ile <strong>online varlığınızı güçlendirin</strong>
            </p>
          </div>

          <div className="decoration-pricing-grid">
            <div className="decoration-pricing-card">
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Başlangıç Paketi</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">7.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Temel Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> 3D Görsel Entegrasyonu</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> Online Randevu Sistemi</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> Proje Takip Sistemi</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="decoration-pricing-card featured">
              <div className="decoration-pricing-badge">Popüler</div>
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Premium Paket</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">14.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Filtrelenebilir Portfolyo</li>
                  <li><i className="fas fa-check"></i> Proje Detay Sayfaları</li>
                  <li><i className="fas fa-check"></i> Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Müşteri Referans Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog & İçerik Yönetimi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> 3D Görsel Entegrasyonu</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="decoration-pricing-card">
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Kurumsal Paket</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">24.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 3D Görsel Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 360° Mekan Turu</li>
                  <li><i className="fas fa-check"></i> Özel Proje Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Detaylı Müşteri Paneli</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Ekip Tanıtım Sayfaları</li>
                  <li><i className="fas fa-check"></i> Entegre Satış Sistemi</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Dekorasyon web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="decoration-faq-grid">
            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Dekorasyon web sitesi ne kadar sürede hazır olur?</h3>
              <p className="decoration-faq-answer">
                Seçtiğiniz pakete bağlı olarak, dekorasyon web sitesi genellikle 2-4 hafta içerisinde tamamlanır. Görsel ağırlıklı bir web sitesi olduğu için, proje görselleri ve içerik hazırlığı sürecin en önemli kısmıdır. Kurumsal paket için 3D entegrasyonlar ve özel sistemler nedeniyle 4-6 hafta gerekebilir.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">360° mekan turu özelliği nasıl çalışır?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizde yer alan 360° mekan turu özelliği, tamamladığınız projelerin 360 derecelik fotoğraflarını çekerek interaktif bir şekilde sunmanızı sağlar. Ziyaretçiler sanal gerçeklik gözlükleriyle veya mouse/parmak hareketleriyle mekanı her açıdan inceleyebilirler. Bu teknoloji, özellikle uzak lokasyonlardaki müşterilerinize projelerinizi etkileyici bir şekilde göstermenizi sağlar.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Proje takip sistemi hangi özellikleri içerir?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizde sunulan proje takip sistemi, her müşterinize özel bir panel sunar. Bu panelde müşteriler projenin aşamalarını (konsept tasarım, revizyon, uygulama, mobilya seçimleri vb.) takip edebilir, onaylarını verebilir, görüşlerini bildirebilir ve dosya paylaşımı yapabilir. Ayrıca sistem üzerinden ödeme planı takibi, sözleşme yönetimi ve takvim paylaşımı da yapılabilir.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Web sitesi için profesyonel fotoğraf çekimi hizmeti sunuyor musunuz?</h3>
              <p className="decoration-faq-answer">
                Evet, Premium ve Kurumsal paketlerimizde İstanbul içi lokasyonlar için profesyonel iç mekan fotoğraf çekimi hizmeti sunuyoruz. Dekorasyon projeleri için görsel kalitesi son derece önemlidir. Profesyonel ekipmanlar ve geniş açı lenslerle yapılan çekimler, projenizin tüm detaylarını ve atmosferini yansıtacak şekilde düzenlenir. İstanbul dışı lokasyonlar için ek ücret talep edilebilir veya kendi fotoğraflarınızı kullanabilirsiniz.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Filtrelenebilir portfolyo sistemi ne sağlar?</h3>
              <p className="decoration-faq-answer">
                Premium ve Kurumsal paketlerimizde bulunan filtrelenebilir portfolyo sistemi, ziyaretçilerin projelerinizi çeşitli kriterlere göre filtrelemesini sağlar. Mekan tipi (ev, ofis, cafe vb.), stil (modern, klasik, endüstriyel vb.), metrekare, bütçe aralığı gibi filtreler kullanılabilir. Bu sistem, müşterilerin kendi ihtiyaçlarına benzer projeleri hızlıca bulabilmelerini sağlayarak ilgili projelere odaklanmalarını sağlar.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Entegre satış sistemi ile ne satılabilir?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizdeki entegre satış sistemi, aksesuar, mobilya, aydınlatma gibi ürünleri satmanıza veya tasarım danışmanlığı gibi dijital hizmetleri paket halinde sunmanıza olanak tanır. Özellikle kendi mobilya veya dekoratif ürün koleksiyonunuz varsa, bu sistem üzerinden ürünlerinizi sergileyip satabilirsiniz. Ayrıca online danışmanlık paketleri, mekan planlama çizimleri veya moodboard hazırlama gibi dijital hizmetlerinizi de satışa sunabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-cta">
        <div className="container">
          <div className="decoration-cta-content">
            <h2 className="decoration-cta-title">
              <strong>Dekorasyon Firmanız</strong> İçin <span className="sectoral-highlight"><strong>Etkileyici</strong></span> <strong>Web Sitesi</strong> Oluşturalım
            </h2>
            <p className="decoration-cta-text">
              <em>İç mimari projelerinizi</em> en iyi şekilde sergileyecek, <strong>potansiyel müşterilerinizi</strong> etkileyecek ve <em>dekorasyon işinizi</em> büyütecek bir web sitesi için hemen <strong>ücretsiz keşif toplantısı</strong> talep edin.
            </p>
            <div className="decoration-cta-buttons">
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

export default DecorationService; 