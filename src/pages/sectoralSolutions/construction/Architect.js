import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './Architect.css';

const Architect = () => {
  // SEO için Schema Markup - Service Schema
  const architectServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mimarlık Firması Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Mimar Web Sitesi", "Mimari Portföy Web Sitesi", "Mimarlık Ofisi Web Sitesi"],
    "description": "Mimarlık firmaları için özel tasarlanmış, portföy sergileme ve proje galeri özellikleriyle donatılmış profesyonel web sitesi tasarımı ve geliştirme hizmetleri. 15.000₺'den başlayan fiyatlarla SEO uyumlu mimarlık web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mimarlık Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Proje portföyü ve temel SEO optimizasyonu içeren web sitesi paketi",
          "price": "15000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Premium Paket",
          "description": "Gelişmiş proje portföyü ve blog yönetim sistemi içeren web sitesi paketi",
          "price": "28000",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "3D proje görselleştirme ve çoklu dil desteği içeren premium web sitesi çözümü",
          "price": "45000",
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
        "name": "Mimarlık firması web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, mimarlık firması web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde 3D görselleştirme ve özel tasarım özellikleri ekstra süre gerektirebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Web siteme kendim proje ekleyebilir miyim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Basit bir panel üzerinden yeni projeler, proje görselleri ve detayları ekleyip düzenleyebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "3D görselleştirme desteği nasıl çalışıyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kurumsal paketimizde bulunan 3D görselleştirme özelliği, projelerinizin 3D modellerini ve animasyonlarını web sitenizde sergilemenize olanak tanır. Bu görseller için özel bir medya oynatıcı entegrasyonu yapılır ve kullanıcılar projeleri 360 derece inceleyebilir."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mimarlık Firması Web Sitesi Tasarımı | Proje Portföylü Mimar Web Sitesi | etki360",
    "description": "Mimarlık firmaları için özel tasarlanmış, portföy sergileme ve proje galeri özellikleriyle donatılmış profesyonel web sitesi tasarımı. 15.000₺'den başlayan fiyatlarla.",
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
          "name": "İnşaat ve Dekorasyon",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mimarlık Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon/mimar"
        }
      ]
    }
  };

  return (
    <div className="sectoral-page architect-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Mimarlık Firması Web Sitesi Tasarımı | Proje Portföylü Mimar Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Mimarlık firmanız için proje portföyü sergileme, 3D görselleştirme ve çoklu dil desteği içeren profesyonel web sitesi çözümleri. Mimari projelerinizi en etkileyici şekilde sergileyebileceğiniz özel tasarımlar. 15.000₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="mimarlık firması web sitesi, mimar web sitesi, mimari portföy web sitesi, mimarlık ofisi web sitesi, mimari proje sergileme, 3d görselleştirme, mimarlık seo, mimar web tasarım, proje galerisi" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/mimar" />
        <meta property="og:title" content="Mimarlık Firması Web Sitesi Tasarımı | Proje Portföylü Mimar Web Sitesi | etki360" />
        <meta property="og:description" content="Mimarlık firmanız için proje portföyü sergileme, 3D görselleştirme ve çoklu dil desteği içeren profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/mimarlik-firmasi-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mimarlık Firması Web Sitesi Tasarımı | Proje Portföylü Mimar Web Sitesi | etki360" />
        <meta name="twitter:description" content="Mimarlık firmanız için proje portföyü sergileme, 3D görselleştirme ve çoklu dil desteği içeren profesyonel web sitesi çözümleri." />
        <meta name="twitter:image" content="https://etki360.com/images/og/mimarlik-firmasi-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/mimar" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(architectServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="architect-hero">
        <div className="container">
          <div className="architect-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat ve Dekorasyon</Link> / <span>Mimarlık Firması Web Sitesi</span>
          </div>
          <div className="architect-hero-content">
            <div className="architect-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Mimarlık Firmalarına Özel</strong> <span className="sectoral-highlight"><strong>Profesyonel Web Sitesi</strong></span> <strong>Tasarımı</strong>
              </h1>
              <p className="sectoral-hero-description">
                <strong>Mimarlık firmanız</strong> için <em>proje portföyünüzü etkileyici şekilde sergileyebileceğiniz</em>, müşterilerinizi profesyonel tasarımıyla etkileyecek ve <strong>mimari projelerinizi</strong> ön plana çıkaracak <em>modern web sitesi çözümleri</em> sunuyoruz. <strong>Google'da üst sıralarda</strong> yer almanızı sağlayacak <em>SEO optimizasyonları</em> ile <strong>15.000₺'den başlayan fiyatlarla</strong>.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="architect-hero-visual">
              <div className="architect-mockup">
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
                  <div className="mockup-portfolio">
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                  </div>
                  <div className="mockup-about"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Mimarlık Firması Web Sitesi</strong> Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              <em>Araştırmalara göre</em>, potansiyel müşterilerinizin <strong>%83'ü</strong>, bir <strong>mimarlık firmasıyla</strong> çalışmadan önce <em>web sitesini inceliyor</em> ve kararını buna göre veriyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Mimari Proje Portföyü</strong></h3>
              <p className="sectoral-card-text">
                Tamamladığınız <em>mimari projeleri</em> yüksek kaliteli <strong>3D görsellerle</strong> sergileyerek <em>mimari tarzınızı ve kalite anlayışınızı</em> potansiyel müşterilere etkileyici şekilde gösterin. <strong>Proje galerisi</strong> sayesinde çalışmalarınızı kategorize edin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Profesyonel Mimar İmajı</strong></h3>
              <p className="sectoral-card-text">
                <em>Modern ve etkileyici</em> bir <strong>mimar web sitesi</strong>, firmanızın profesyonel imajını <strong>%67 oranında</strong> güçlendirir ve <em>potansiyel müşterilerinize</em> güven verir. <strong>Çağdaş mimari</strong> anlayışınızı yansıtır.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Müşteri Etkileşimi ve Randevu</strong></h3>
              <p className="sectoral-card-text">
                <em>Online randevu ve iletişim formlarıyla</em> potansiyel müşterilerinizin <strong>mimarlık ofisi web siteniz</strong> üzerinden sizinle kolayca iletişime geçmesini sağlayın. <strong>Müşteri kazanım oranınızı %42</strong> artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Google'da Üst Sıralarda</strong></h3>
              <p className="sectoral-card-text">
                <em>SEO odaklı içeriklerle</em> <strong>"mimarlık firması"</strong>, <strong>"mimar ofisi"</strong> ve <strong>"mimari proje"</strong> gibi aramalarda <em>Google'da üst sıralarda</em> yer alın ve daha fazla potansiyel müşteriye ulaşın. <strong>Organik trafiğinizi %124</strong> artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Mimarlık Firması Web Sitesi</strong> Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Mimarlık firmanızın</strong> ihtiyaçlarına özel, <em>modern tasarım</em> ve <strong>SEO uyumlu</strong> etkileyici <em>web sitesi çözümleri</em>
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mimari Proje Portföyü</strong></h3>
                <p className="sectoral-feature-text">
                  Tamamladığınız <em>mimari projeleri</em> kategorilere göre <strong>filtrelenebilir galerilerde</strong> sergileyin. <em>Yüksek çözünürlüklü görsellerle</em> detaylı proje açıklamaları ekleyin. <strong>Öncesi-sonrası karşılaştırma</strong> özelliğiyle dönüşümleri vurgulayın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mimar Web Sitesi</strong> Özel Tasarımı</h3>
                <p className="sectoral-feature-text">
                  <em>Mimarlık firmanızın</em> kurumsal kimliğine uygun, <strong>minimal ve şık tasarım</strong>. <em>Çağdaş mimari anlayışınızı</em> yansıtan <strong>profesyonel görsel dil</strong>. <em>Mobil uyumlu</em> ve <strong>kullanıcı deneyimi odaklı</strong> arayüz.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>3D Görselleştirme</strong> ve Sanal Tur</h3>
                <p className="sectoral-feature-text">
                  <em>Mimari projelerinizin</em> <strong>3D görsellerini</strong> ve animasyonlarını sorunsuz bir şekilde sergileyebileceğiniz <em>özel medya galerisi</em>. <strong>Sanal tur teknolojisi</strong> ile müşterilerinize <em>projeleri 360° inceleme</em> imkanı.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mimar Ekip Profilleri</strong></h3>
                <p className="sectoral-feature-text">
                  <em>Mimari ekibinizi</em> tanıtan <strong>detaylı profil sayfaları</strong>. Mimarlarınızın uzmanlık alanları, eğitimleri ve <em>başarılı projelerini</em> vurgulayan <strong>profesyonel tanıtımlar</strong>. <em>Müşteri güvenini</em> artıran şeffaf yaklaşım.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comment-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mimari Proje</strong> Müşteri Yorumları</h3>
                <p className="sectoral-feature-text">
                  Tamamlanan <em>mimari projelerden</em> <strong>memnun müşteri yorumlarını</strong> sergileyen özel bölüm. <em>Güven oluşturan sosyal kanıtlar</em> ile <strong>dönüşüm oranınızı %73</strong> artırın. <em>Video testimonial</em> gösterimi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mobil Uyumlu</strong> Mimar Web Sitesi</h3>
                <p className="sectoral-feature-text">
                  Her cihazda <em>mükemmel görüntülenen</em> <strong>responsive tasarım</strong>. Mobil kullanıcılar için <em>optimize edilmiş arayüz</em>. <strong>Google mobil uyumluluk testlerinden</strong> tam puan alan <em>performans odaklı</em> tasarım.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mimarlık Blog</strong> ve İçerik Yönetimi</h3>
                <p className="sectoral-feature-text">
                  <em>Mimari trendler</em>, <strong>iç tasarım yaklaşımları</strong> ve <em>sürdürülebilir mimarlık</em> hakkında bilgilendirici içerikler. <strong>SEO dostu blog sayfaları</strong> ile <em>Google'da üst sıralarda</em> yer alın ve <strong>organik ziyaretçi trafiğinizi %156</strong> artırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Proje Teklif</strong> ve İletişim Sistemi</h3>
                <p className="sectoral-feature-text">
                  Potansiyel müşterilerin <em>mimari proje taleplerini</em> iletebileceği <strong>gelişmiş iletişim formları</strong>. <em>Otomatik e-posta bildirimleri</em> ve <strong>CRM entegrasyonu</strong> ile müşteri takibini kolaylaştırın. <em>WhatsApp ve canlı sohbet</em> desteği.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Profesyonel Mimar Web Sitesinin</strong> Mimarlık Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <em>Doğru tasarlanmış</em> bir <strong>mimarlık web sitesi</strong>, firmanızın <em>dijital varlığını güçlendirir</em> ve <strong>iş hacminizi %62</strong> artırabilir
            </p>
          </div>

          <div className="sectoral-benefits-content">
            <div className="architect-benefits-mockup">
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
                      <div className="benefits-mockup-item"></div>
                      <div className="benefits-mockup-item"></div>
                      <div className="benefits-mockup-item"></div>
                    </div>
                  </div>
                  <div className="benefits-mockup-info">
                    <div className="benefits-mockup-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectoral-benefits-list">
              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3><strong>Mimarlık Firmanızın</strong> Marka İtibarını Güçlendirir</h3>
                  <p><strong>Profesyonel bir mimar web sitesi</strong>, firmanızın <em>marka değerini %86 oranında artırır</em> ve <strong>mimari vizyonunuzu</strong> doğru şekilde yansıtır. <em>Rakiplerinizden</em> sizi ayrıştırır.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3><strong>Mimari Proje Portföyü</strong> Sergileme İmkanı</h3>
                  <p>Tamamladığınız <em>mimari projeleri</em> <strong>etkileyici bir şekilde sergileyerek</strong> potansiyel müşterileri ikna edebilirsiniz. <em>3D görselleştirme</em> ve <strong>öncesi-sonrası galerisi</strong> ile projelerinizin etkisini maksimize edin.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3><strong>Google'da Üst Sıralarda</strong> Yer Alarak Yeni Müşteri Kazanımı</h3>
                  <p><em>SEO odaklı içeriklerle</em> <strong>"mimarlık firması"</strong>, <strong>"mimar ofisi"</strong> ve <strong>"iç mimar"</strong> gibi aramalarda <em>Google'da üst sıralarda</em> yer alarak <strong>%138 daha fazla</strong> potansiyel müşteriye ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3><strong>Mimari Proje</strong> İş Süreçlerini Kolaylaştırır</h3>
                  <p><em>Online randevu, keşif talebi</em> ve <strong>proje talep formlarıyla</strong> müşteri kazanım süreçlerinizi otomatikleştirebilirsiniz. <em>E-posta bildirimleri</em> ve <strong>CRM entegrasyonu</strong> ile müşteri takibini kolaylaştırın.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3><strong>Mimari Tasarım</strong> Yaklaşımınızı Gösterir</h3>
                  <p><em>Tasarım anlayışınızı</em> ve <strong>mimari felsefenizi</strong> potansiyel müşterilere aktararak <em>doğru hedef kitleye</em> ulaşabilirsiniz. <strong>Minimalist, modern veya klasik</strong> yaklaşımınızı vurgulayarak <em>ideal müşterilerinizi</em> cezbedebilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="architect-pricing">
        <div className="container">
          <div className="architect-section-header">
            <h2 className="architect-section-title"><strong>Mimarlık Firması Web Sitesi</strong> Paketleri ve Fiyatları</h2>
            <p className="architect-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun <em>profesyonel mimar web sitesi</em> çözümleri - <strong>15.000₺'den başlayan fiyatlarla</strong>
            </p>
          </div>

          <div className="architect-pricing-grid">
            <div className="architect-pricing-card">
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Başlangıç Paketi</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">15.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 8 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Proje Portföyü (10 Proje)</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google Analytics</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> 3D Görselleştirme</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> Çoklu Dil Desteği</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> Blog Yönetimi</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="architect-pricing-card featured">
              <div className="architect-pricing-badge">Popüler</div>
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Premium Paket</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">28.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Portföyü (30 Proje)</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Detaylı Proje Filtreleme</li>
                  <li><i className="fas fa-check"></i> Blog Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Dil Desteği (TR/EN)</li>
                  <li><i className="fas fa-check"></i> Ekip Profil Sayfaları</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google İş Kaydı Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> 3D Görselleştirme</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="architect-pricing-card">
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Kurumsal Paket</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">45.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 3D Proje Görselleştirme</li>
                  <li><i className="fas fa-check"></i> Profesyonel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Proje Talep Modülü</li>
                  <li><i className="fas fa-check"></i> 4 Dil Desteği</li>
                  <li><i className="fas fa-check"></i> Müşteri Portali</li>
                  <li><i className="fas fa-check"></i> SMS ve E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Aylık SEO Raporu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Özel İçerik Oluşturma</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="architect-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Mimarlık firması web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="architect-faq-grid">
            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Mimarlık firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="architect-faq-answer">
                Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, mimarlık firması web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde 3D görselleştirme ve özel tasarım özellikleri ekstra süre gerektirebilir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Web siteme kendim proje ekleyebilir miyim?</h3>
              <p className="architect-faq-answer">
                Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Basit bir panel üzerinden yeni projeler, proje görselleri ve detayları ekleyip düzenleyebilirsiniz.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">3D görselleştirme desteği nasıl çalışıyor?</h3>
              <p className="architect-faq-answer">
                Kurumsal paketimizde bulunan 3D görselleştirme özelliği, projelerinizin 3D modellerini ve animasyonlarını web sitenizde sergilemenize olanak tanır. Bu görseller için özel bir medya oynatıcı entegrasyonu yapılır ve kullanıcılar projeleri 360 derece inceleyebilir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Web sitesi SEO çalışması içeriyor mu?</h3>
              <p className="architect-faq-answer">
                Evet, tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. Premium ve Kurumsal paketlerde ise "mimarlık firması", "iç mimarlık", "mimari tasarım" gibi anahtar kelimeler için detaylı SEO çalışması yapılmaktadır. Kurumsal pakette aylık SEO raporları ve düzenli içerik güncellemeleri de dahildir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Sitenin bakımı ve güncellemeleri nasıl yapılır?</h3>
              <p className="architect-faq-answer">
                Web sitenizin güvenlik güncellemeleri, yedeklemeleri ve teknik bakımı paket süreniz boyunca tarafımızca düzenli olarak yapılmaktadır. İçerik güncellemeleri için size kullanımı kolay bir panel sunulmaktadır. İhtiyaç duyduğunuzda teknik destek ekibimiz yardımcı olmaktadır.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Yabancı dil desteği nasıl sağlanıyor?</h3>
              <p className="architect-faq-answer">
                Premium pakette Türkçe ve İngilizce, Kurumsal pakette ise toplam 4 dil desteği sunuyoruz. Her dil için ayrı URL yapısı oluşturularak, o dilde arama yapan kullanıcıların sitenizi bulması sağlanıyor. İçerik çevirileri profesyonel çevirmenler tarafından yapılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="architect-cta">
        <div className="container">
          <div className="architect-cta-content">
            <h2 className="architect-cta-title">
              <strong>Mimarlık Firmanız İçin</strong> <span className="sectoral-highlight"><strong>Profesyonel Web Sitesi</strong></span> <strong>Oluşturalım</strong>
            </h2>
            <p className="architect-cta-text">
              <em>Mimari projelerinizi etkileyici şekilde sergileyen</em>, <strong>Google'da üst sıralarda</strong> yer alan ve <em>portföyünüzü</em> en iyi şekilde göstererek <strong>yeni müşteriler kazandıran</strong> bir <em>mimar web sitesi</em> için hemen iletişime geçin. <strong>15.000₺'den başlayan fiyatlarla</strong> özel çözümler sunuyoruz.
            </p>
            <div className="architect-cta-buttons">
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

export default Architect; 