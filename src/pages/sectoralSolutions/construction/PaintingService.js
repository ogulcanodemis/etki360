import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './PaintingService.css';

const PaintingService = () => {
  // SEO için Schema Markup - Service Schema
  const paintingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Boya Badana Web Sitesi Tasarım ve Geliştirme Hizmeti",
    "alternateName": ["Boya Badana Firma Web Sitesi", "Boya Ustası Web Sitesi", "Boyacı Web Sitesi"],
    "description": "Boya badana firmaları için özel tasarlanmış, öncesi-sonrası galeri ve fiyat hesaplama özellikleriyle donatılmış profesyonel web sitesi tasarımı ve geliştirme hizmetleri. 4.900₺'den başlayan fiyatlarla SEO uyumlu boya badana web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Boya Badana Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Başlangıç Paketi",
          "description": "Proje galerisi ve temel SEO optimizasyonu içeren web sitesi paketi",
          "price": "4900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Premium Paket",
          "description": "Öncesi-sonrası karşılaştırma ve online fiyat hesaplama içeren web sitesi paketi",
          "price": "8900",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "name": "Kurumsal Paket",
          "description": "Renk simülatörü ve iş takip sistemi içeren premium web sitesi çözümü",
          "price": "13900",
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
        "name": "Boya badana web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seçtiğiniz pakete bağlı olarak, boya badana web sitesi genellikle 1-3 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha kısa olabilirken, Kurumsal paket için renk simülatörü gibi özel geliştirmeler sebebiyle 3-4 hafta gerekebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Renk simülatörü nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kurumsal paketimizde yer alan renk simülatörü, müşterilerinizin kendi evlerinin fotoğraflarını yükleyip farklı renk ve doku seçeneklerini deneyebilmelerini sağlar. Yapay zeka destekli sistem, duvarları otomatik olarak tespit ederek seçilen rengi uygular ve gerçekçi bir önizleme sunar. Bu özellik, müşterilerin karar verme sürecini hızlandırarak dönüşüm oranlarını artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Mahalle bazlı SEO çalışması nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium paketimizde yer alan mahalle bazlı SEO çalışması, hizmet verdiğiniz her mahalle için özel içerik ve anahtar kelime optimizasyonu yapılmasını içerir. Örneğin 'Ataşehir boya badana', 'Beylikdüzü duvar boyama' gibi yerel aramalarda üst sıralarda çıkmanızı sağlar. Google Haritalar entegrasyonu ile birlikte, yakın çevrenizdeki potansiyel müşterilerin sizi bulma olasılığını önemli ölçüde artırır."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Boya Badana Web Sitesi | Öncesi-Sonrası Galeri ve Fiyat Hesaplama | etki360",
    "description": "Boya badana firmaları için özel tasarlanmış, öncesi-sonrası görseller ve fiyat hesaplama özellikleriyle donatılmış profesyonel web sitesi tasarımı. 4.900₺'den başlayan fiyatlarla.",
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
          "name": "Boya Badana Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon/boya-badana"
        }
      ]
    }
  };

  return (
    <div className="sectoral-page painting-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Boya Badana Web Sitesi | Öncesi-Sonrası Galeri ve Fiyat Hesaplama | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Boya badana firmanız için öncesi-sonrası görseller, renk simülatörü ve fiyat hesaplama içeren profesyonel web sitesi çözümleri. İç-dış cephe, dekoratif boya ve duvar kağıdı hizmetlerinizi en etkili şekilde sergileyebileceğiniz tasarımlar. 4.900₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="boya badana web sitesi, boyacı web sitesi, boya firma web sitesi, öncesi sonrası galeri, renk simülatörü, fiyat hesaplama, boya badana seo, iç cephe boya, dış cephe boya, dekoratif boya, duvar kağıdı" 
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/boya-badana" />
        <meta property="og:title" content="Boya Badana Web Sitesi | Öncesi-Sonrası Galeri ve Fiyat Hesaplama | etki360" />
        <meta property="og:description" content="Boya badana firmanız için öncesi-sonrası görseller, renk simülatörü ve fiyat hesaplama içeren profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/boya-badana-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boya Badana Web Sitesi | Öncesi-Sonrası Galeri ve Fiyat Hesaplama | etki360" />
        <meta name="twitter:description" content="Boya badana firmanız için öncesi-sonrası görseller, renk simülatörü ve fiyat hesaplama içeren profesyonel web sitesi çözümleri." />
        <meta name="twitter:image" content="https://etki360.com/images/og/boya-badana-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/boya-badana" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(paintingServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="painting-hero">
        <div className="container">
          <div className="painting-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat & Dekorasyon</Link> / <span>Boya Badana Web Sitesi</span>
          </div>
          <div className="painting-hero-content">
            <div className="painting-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Boya Badana Firmanız</strong> İçin <span className="sectoral-highlight"><strong>Modern</strong></span> <strong>Web Sitesi</strong>
              </h1>
              <p className="sectoral-hero-description">
                <strong>İç cephe</strong>, <strong>dış cephe boya</strong>, <em>dekoratif boya uygulamaları</em> ve <strong>duvar kağıdı</strong> hizmetleri sunan firmanız için <em>müşteri kazandıran</em>, <strong>profesyonel boya badana web sitesi</strong> çözümleri. <em>Öncesi-sonrası galeri</em> ve <strong>fiyat hesaplama</strong> özellikleriyle <strong>4.900₺'den başlayan</strong> fiyatlarla <em>Google'da üst sıralarda</em> yer alın.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="painting-hero-visual">
              <div className="painting-mockup">
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
                    <div className="mockup-before-after">
                      <div className="mockup-before"></div>
                      <div className="mockup-after"></div>
                    </div>
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
            <h2 className="sectoral-section-title"><strong>Boya Badana Web Sitesi</strong> Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              <em>Araştırmalara göre</em>, ev ve işyeri sahiplerinin <strong>%87'si</strong> <strong>boya badana hizmeti</strong> almadan önce <em>internet üzerinden araştırma</em> yapıyor ve fiyat karşılaştırması yapıyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-images"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Öncesi-Sonrası</strong> Görsel Sunum</h3>
              <p className="sectoral-card-text">
                <em>Öncesi-sonrası görseller</em> ve <strong>tamamlanmış boya projeleri</strong> ile hizmet kalitenizi potansiyel müşterilere <em>etkileyici şekilde</em> gösterin. <strong>Dönüşüm oranınızı %73</strong> artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Boya Badana</strong> Online Fiyat Hesaplama</h3>
              <p className="sectoral-card-text">
                Müşterilerinizin <em>metrekare</em> ve <strong>boya tipleri</strong> doğrultusunda <em>yaklaşık maliyet hesaplayabilecekleri</em> araçlar sunun. <strong>İç-dış cephe boya fiyatlarını</strong> şeffaf şekilde gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Google'da Üst Sıralarda</strong> Yerel SEO</h3>
              <p className="sectoral-card-text">
                <em>"Yakınımda boya badana"</em>, <strong>"[mahalle adı] boya ustası"</strong> araması yapan potansiyel müşterilerin karşısına çıkarak, <em>bölgenizdeki işleri</em> kapın. <strong>Yerel müşteri sayınızı %112</strong> artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="sectoral-card-title"><strong>Boya Badana</strong> Müşteri Yorumları</h3>
              <p className="sectoral-card-text">
                <em>Memnun müşterilerinizin</em> olumlu yorumları ve <strong>boya işleri referansları</strong>, yeni müşterileri ikna etmenizde <em>en büyük yardımcınız</em> olacaktır. <strong>Güven oranını %61</strong> artırır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Boya Badana Web Sitesi</strong> Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Boya badana firmanızın</strong> ihtiyaçlarına özel, <em>müşteri çekmeye odaklı</em> ve <strong>Google'da üst sıralarda</strong> yer alacak web sitesi çözümleri - <strong>4.900₺'den başlayan</strong> fiyatlarla
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-paint-roller"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Boya Badana</strong> Hizmet Galerisi</h3>
                <p className="sectoral-feature-text">
                  <strong>İç cephe</strong>, <strong>dış cephe boya</strong>, <em>dekoratif boya</em> ve <strong>duvar kağıdı</strong> uygulamalarınızı <em>kategorize edilmiş galeri</em> ile sergileyin. <strong>Müşteri karar verme sürecini %65</strong> hızlandırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Yapay Zeka Destekli</strong> Renk Simülatörü</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin <em>evlerinin fotoğraflarını</em> yükleyip <strong>farklı renk seçeneklerini</strong> deneyebilecekleri <em>interaktif simülatör</em>. <strong>Marshall, Filli Boya, Dyo</strong> gibi markaların renk kataloğuyla uyumlu.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Boya Badana</strong> Fiyat Hesaplama Aracı</h3>
                <p className="sectoral-feature-text">
                  <em>Alan, boya tipi</em> ve <strong>ek hizmetlere göre</strong> otomatik fiyat hesaplayan, <em>müşterilerinize şeffaf bilgi</em> sunan araç. <strong>İç cephe ve dış cephe boya fiyatlarını</strong> metrekare bazında gösterin.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Ücretsiz Keşif</strong> Online Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin <em>ücretsiz boya keşfi</em> için <strong>online randevu alabilecekleri</strong>, takvim entegrasyonlu rezervasyon sistemi. <em>Operasyonel verimliliği %48</em> artırın ve <strong>telefon trafiğini azaltın</strong>.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Boya Badana</strong> Öncesi-Sonrası Galerisi</h3>
                <p className="sectoral-feature-text">
                  <em>Çarpıcı öncesi-sonrası</em> karşılaştırma fotoğrafları ile <strong>boya kalitesi ve ustalığınızı</strong> gösteren <em>interaktif galeri</em>. <strong>Kaydırmalı karşılaştırma</strong> özelliği ile <em>etkileyici sunum</em>.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Boya Ustası</strong> Müşteri Referansları</h3>
                <p className="sectoral-feature-text">
                  <em>Memnun müşterilerinizin</em> fotoğraflı ve videolu <strong>boya işi referanslarını</strong> paylaşabileceğiniz güven artırıcı bölüm. <strong>Google değerlendirmelerinizi</strong> web sitenizde <em>otomatik gösterme</em>.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Boya Teknikleri</strong> Blog ve İçerik</h3>
                <p className="sectoral-feature-text">
                  <strong>Boya teknikleri</strong>, <em>renk seçimleri</em>, <strong>duvar kağıdı uygulamaları</strong> ve bakım önerileri hakkında <em>bilgilendirici içerikler</em> paylaşarak <strong>Google'da üst sıralarda</strong> yer alın ve <em>SEO desteği</em> sağlayın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title"><strong>Mobil Uyumlu</strong> Boya Badana Web Sitesi</h3>
                <p className="sectoral-feature-text">
                  Her cihazda <em>mükemmel görüntülenen</em>, <strong>hızlı yüklenen</strong> responsive tasarım ile tüm müşterilere ulaşın. <strong>Google mobil testlerinden</strong> tam puan alan <em>performans odaklı</em> tasarım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title"><strong>Profesyonel Boya Badana Web Sitesinin</strong> Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <em>Doğru tasarlanmış</em> bir <strong>boya badana web sitesi</strong>, firmanızın <strong>müşteri sayısını %65'e kadar</strong> artırabilir ve <em>profesyonel imajınızı güçlendirir</em>
            </p>
          </div>

          <div className="painting-benefits-content">
            <div className="painting-benefits-mockup">
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
                    <div className="benefits-mockup-before-after">
                      <div className="benefits-mockup-item">
                        <div className="benefits-mockup-label">Öncesi</div>
                      </div>
                      <div className="benefits-mockup-item">
                        <div className="benefits-mockup-label">Sonrası</div>
                      </div>
                    </div>
                  </div>
                  <div className="benefits-mockup-calculator"></div>
                </div>
              </div>
            </div>
            <div className="painting-benefits-list">
              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3><strong>Google'da Üst Sıralarda</strong> Yer Alarak Daha Fazla Müşteri</h3>
                  <p><em>SEO odaklı web sitesi</em> ile <strong>"boya badana"</strong>, <strong>"duvar boyama"</strong>, <strong>"iç cephe boya"</strong> gibi aramalarda <em>üst sıralarda çıkarak</em> müşteri sayınızı <strong>%65'e kadar artırabilirsiniz</strong>. <em>Yerel aramalarda</em> daha görünür olun.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3><strong>Boya Badana Firması</strong> Profesyonel İmajı</h3>
                  <p><em>Kaliteli öncesi-sonrası görseller</em> ve <strong>profesyonel tasarım</strong> ile müşterilerinizin gözünde <em>güvenilir bir boya ustası</em> imajı oluşturun. <strong>Rakiplerinizden %72 daha profesyonel</strong> görünün.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3><strong>Boya Badana</strong> Operasyonel Verimliliği</h3>
                  <p><em>Online fiyat hesaplama</em> ve <strong>keşif randevu sistemi</strong> ile telefon trafiğini azaltarak <em>operasyonel verimliliği %48 artırın</em>. <strong>Zaman tasarrufu</strong> sağlayarak daha fazla <em>işe odaklanın</em>.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3><strong>Boya Ustası</strong> Rekabet Avantajı</h3>
                  <p><em>Rakiplerinizin çoğunun</em> profesyonel web sitesi olmadığı bu sektörde, <strong>kaliteli bir boya badana web sitesi</strong> sizi <em>rekabette %89 öne çıkaracaktır</em>. <strong>İlk izlenim avantajı</strong> kazanın.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3><strong>Mahalle Bazlı</strong> Hedefli Pazarlama</h3>
                  <p><em>Google Ads</em> ve <strong>sosyal medya entegrasyonları</strong> ile hizmet bölgenizdeki <em>potansiyel müşterilere</em> hedefli reklam yapabilirsiniz. <strong>Her mahalle için özel içeriklerle</strong> yerel aramalarda üst sıralarda çıkın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="painting-pricing">
        <div className="container">
          <div className="painting-section-header">
            <h2 className="painting-section-title"><strong>Boya Badana Web Sitesi</strong> Paketleri ve Fiyatları</h2>
            <p className="painting-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun <em>profesyonel boya badana web sitesi</em> çözümleri - <strong>4.900₺'den başlayan</strong> fiyatlarla
            </p>
          </div>

          <div className="painting-pricing-grid">
            <div className="painting-pricing-card">
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Başlangıç Paketi</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">4.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Renk Simülatörü</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Online Fiyat Hesaplama</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Keşif Randevu Sistemi</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="painting-pricing-card featured">
              <div className="painting-pricing-badge">Popüler</div>
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Premium Paket</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">8.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 10 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Öncesi-Sonrası Karşılaştırma</li>
                  <li><i className="fas fa-check"></i> Online Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Keşif Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Müşteri Referans Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog & İçerik Yönetimi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Renk Simülatörü</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="painting-pricing-card">
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Kurumsal Paket</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">13.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Renk Simülatörü</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Altyapısı</li>
                  <li><i className="fas fa-check"></i> İş Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> İlçe Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Ekip Tanıtım Sayfaları</li>
                  <li><i className="fas fa-check"></i> Düzenli SEO Raporlaması</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Boya badana web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="painting-faq-grid">
            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Boya badana web sitesi ne kadar sürede hazır olur?</h3>
              <p className="painting-faq-answer">
                Seçtiğiniz pakete bağlı olarak, boya badana web sitesi genellikle 1-3 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha kısa olabilirken, Kurumsal paket için renk simülatörü gibi özel geliştirmeler sebebiyle 3-4 hafta gerekebilir.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Renk simülatörü nasıl çalışır?</h3>
              <p className="painting-faq-answer">
                Kurumsal paketimizde yer alan renk simülatörü, müşterilerinizin kendi evlerinin fotoğraflarını yükleyip farklı renk ve doku seçeneklerini deneyebilmelerini sağlar. Yapay zeka destekli sistem, duvarları otomatik olarak tespit ederek seçilen rengi uygular ve gerçekçi bir önizleme sunar. Bu özellik, müşterilerin karar verme sürecini hızlandırarak dönüşüm oranlarını artırır.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Online fiyat hesaplama aracı ne kadar doğru sonuçlar verir?</h3>
              <p className="painting-faq-answer">
                Online fiyat hesaplama aracı, belirlediğiniz birim fiyatlar üzerinden metrekare, boya tipi, kat sayısı, alçı/sıva ihtiyacı gibi faktörleri dikkate alarak yaklaşık bir fiyat hesaplar. Genellikle %85-90 oranında doğru sonuçlar verir. Kesin fiyat için yine de yerinde keşif gerektiğini belirten bir not otomatik olarak gösterilir. Bu araç, müşterilere bir fikir vermek ve potansiyel müşterileri keşif randevusuna yönlendirmek için idealdir.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Mahalle bazlı SEO çalışması nedir?</h3>
              <p className="painting-faq-answer">
                Premium paketimizde yer alan mahalle bazlı SEO çalışması, hizmet verdiğiniz her mahalle için özel içerik ve anahtar kelime optimizasyonu yapılmasını içerir. Örneğin "Ataşehir boya badana", "Beylikdüzü duvar boyama" gibi yerel aramalarda üst sıralarda çıkmanızı sağlar. Google Haritalar entegrasyonu ile birlikte, yakın çevrenizdeki potansiyel müşterilerin sizi bulma olasılığını önemli ölçüde artırır.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">İş takip sistemi hangi özellikleri içerir?</h3>
              <p className="painting-faq-answer">
                Kurumsal paketimizde sunulan iş takip sistemi, devam eden projelerinizi, ekip görevlendirmelerini ve malzeme planlamasını tek bir panel üzerinden yönetmenizi sağlar. Sistem, müşterilerinize özel şifre ile giriş yapabilecekleri bir alan sunarak proje ilerlemesini takip etmelerini sağlar. Ayrıca, otomatik bildirimler ile müşterilerinizi süreç hakkında bilgilendirebilir, iş tamamlandığında değerlendirme talep edebilirsiniz.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Web sitesi içerikleri için fotoğraf çekimi hizmeti sunuyor musunuz?</h3>
              <p className="painting-faq-answer">
                Evet, Premium ve Kurumsal paketlerimizde İstanbul içi lokasyonlar için profesyonel fotoğraf çekimi hizmeti sunuyoruz. Tamamladığınız projelerin öncesi-sonrası fotoğraflarının profesyonel ekipmanlarla çekilmesi, web sitenizin etkileyiciliğini önemli ölçüde artıracaktır. İstanbul dışı lokasyonlar için ek ücret talep edilebilir veya sizin sağlayacağınız yüksek kaliteli görseller kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-cta">
        <div className="container">
          <div className="painting-cta-content">
            <h2 className="painting-cta-title">
              <strong>Boya Badana Firmanız İçin</strong> <span className="sectoral-highlight"><strong>Modern</strong></span> <strong>Web Sitesi Oluşturalım</strong>
            </h2>
            <p className="painting-cta-text">
              <em>Sektörünüzde fark yaratacak</em>, <strong>Google'da üst sıralarda</strong> yer alan ve <em>profesyonel imajınızı</em> güçlendirecek bir <strong>boya badana web sitesi</strong> için hemen iletişime geçin. <strong>4.900₺'den başlayan fiyatlarla</strong>, <em>öncesi-sonrası galeri</em> ve <strong>fiyat hesaplama</strong> özellikleriyle donatılmış çözümler sunuyoruz.
            </p>
            <div className="painting-cta-buttons">
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

export default PaintingService; 