import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './ConstructionCompany.css';

const ConstructionCompany = () => {
  // SEO için Schema.org Markup - Service Schema
  const constructionServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "İnşaat Firması Web Sitesi Tasarımı",
    "alternateName": ["İnşaat Şirketi Web Sitesi", "Müteahhit Web Sitesi", "Yapı Firması Web Sitesi"],
    "description": "İnşaat firmaları için özel tasarlanmış, projeleri ve hizmetleri etkileyici şekilde sergileyen profesyonel web sitesi çözümleri. 15.000₺'den başlayan fiyatlarla SEO uyumlu inşaat web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Sitesi Tasarımı",
    "areaServed": "Türkiye",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "İnşaat Firması Web Sitesi Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Kurumsal İnşaat Paketi",
          "description": "Profesyonel kurumsal tasarım, proje portföyü ve SEO optimizasyonu içeren web sitesi paketi",
          "price": "15000",
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
        "name": "İnşaat firması web sitesinde hangi bilgiler bulunmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İnşaat firması web sitesinde firma hakkında kurumsal bilgiler, tamamlanan ve devam eden projeler (fotoğraflar ve videolar ile), sunulan hizmetler, ekip bilgileri, sertifikalar, referanslar ve iletişim bilgileri bulunmalıdır. Ayrıca konut projeleri için kat planları, teknik özellikler ve projelerin konum bilgilerini interaktif haritalarla desteklemeniz tavsiye edilir."
        }
      },
      {
        "@type": "Question",
        "name": "İnşaat firması web sitesi tasarımında en önemli unsurlar nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İnşaat firması web sitesi tasarımında en önemli unsurlar; profesyonel görsel bir tasarım, kolay kullanılabilir bir navigasyon, yüksek kaliteli proje görselleri ve videoları, mobil uyumluluk, hızlı sayfa yükleme süresi ve etkileyici bir proje portföyüdür. Ayrıca arama motoru optimizasyonu (SEO) da potansiyel müşterilerin sitenizi bulabilmesi için kritik öneme sahiptir."
        }
      },
      {
        "@type": "Question",
        "name": "İnşaat firması web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İnşaat firması web sitesi, içerik ve görsellerin hazırlanmasına bağlı olarak genellikle 3-5 hafta içerisinde tamamlanır. Projelerinizin profesyonel fotoğrafları, firma bilgileri ve diğer içerikler hazır ise süreç daha kısa sürebilir."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "İnşaat Firması Web Sitesi | Projeleri Etkili Sergileyen Tasarım | etki360",
    "description": "İnşaat firmaları için özel tasarlanmış, projeleri ve hizmetleri etkileyici şekilde sergileyen profesyonel web sitesi çözümleri. 15.000₺'den başlayan fiyatlarla.",
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
          "name": "İnşaat Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi"
        }
      ]
    }
  };

  const features = [
    { 
      title: "Etkileyici Proje Portföyü", 
      description: "Tamamlanan ve devam eden projelerinizi fotoğraf ve videolarla etkileyici bir şekilde sergileyin.", 
      icon: "M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10z" 
    },
    { 
      title: "Profesyonel Kurumsal Sayfa", 
      description: "Firmanızın deneyimini, vizyonunu ve değerlerini vurgulayan kurumsal bilgi sayfaları.", 
      icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z" 
    },
    { 
      title: "İnteraktif Proje Haritası", 
      description: "Projelerinizin konumlarını interaktif haritalar üzerinde gösterin.", 
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
    },
    { 
      title: "Hizmet Alanları Bölümü", 
      description: "Sunduğunuz tüm inşaat hizmetlerini detaylı açıklamalarla sergileyebileceğiniz bölüm.", 
      icon: "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" 
    },
    { 
      title: "Mobil Uyumlu Tasarım", 
      description: "Tüm mobil cihazlarda mükemmel görünen responsive tasarım.", 
      icon: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" 
    },
    { 
      title: "SEO Optimizasyonu", 
      description: "Google'da üst sıralarda yer almanızı sağlayacak SEO çalışmaları.", 
      icon: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" 
    }
  ];

  const benefits = [
    { 
      title: "Kurumsal İmaj Güçlendirme", 
      description: "Profesyonel web siteniz ile sektördeki kurumsal imajınızı güçlendirin ve güven oluşturun." 
    },
    { 
      title: "Yeni Proje Müşterileri", 
      description: "SEO çalışmalarıyla Google'da üst sıralarda çıkarak yeni proje talepleri alın." 
    },
    { 
      title: "Projelerinizi Etkili Sergileme", 
      description: "Tamamladığınız projelerin kalitesini ve estetiğini en iyi şekilde sergileyerek yeni işler kazanın." 
    },
    { 
      title: "7/24 Erişilebilirlik", 
      description: "Potansiyel müşterileriniz istedikleri zaman projelerinizi ve hizmetlerinizi inceleyebilir." 
    }
  ];
  
  return (
    <div className="sectoral-page construction-company-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        <title>İnşaat Firması Web Sitesi | Projeleri Etkili Sergileyen Tasarım | etki360</title>
        <meta 
          name="description" 
          content="İnşaat firmaları için özel tasarlanmış, projeleri ve hizmetleri etkileyici şekilde sergileyen profesyonel web sitesi çözümleri. Konut projeleri, ticari binalar ve diğer inşaat hizmetlerinizi en iyi şekilde sergileyebileceğiniz tasarımlar. 15.000₺'den başlayan fiyatlarla." 
        />
        <meta 
          name="keywords" 
          content="inşaat firması web sitesi, inşaat şirketi web sitesi, müteahhit web sitesi, yapı firması web sitesi, konut projeleri web sitesi, bina inşaat web sitesi" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi" />
        <meta property="og:title" content="İnşaat Firması Web Sitesi | Projeleri Etkili Sergileyen Tasarım | etki360" />
        <meta property="og:description" content="İnşaat firmaları için özel tasarlanmış, projeleri ve hizmetleri etkileyici şekilde sergileyen profesyonel web sitesi çözümleri." />
        <meta property="og:image" content="https://etki360.com/images/og/insaat-firmasi-web-sitesi.jpg" />
        <script type="application/ld+json">{JSON.stringify(constructionServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi" />
      </Helmet>

      <section className="construction-hero">
        <div className="container">
          <div className="construction-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat ve Dekorasyon</Link> / <span>İnşaat Firması Web Sitesi</span>
          </div>
          <div className="construction-hero-content">
            <div className="construction-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>İnşaat Firmanız İçin</strong> <span style={{color: "#ffffff", fontWeight: "bold"}}><strong>Profesyonel</strong></span> <strong>Web Sitesi</strong>
              </h1>
              <p className="sectoral-hero-description">
                <strong>Konut projeleri</strong>, <strong>ticari binalar</strong>, <em>altyapı projeleri</em> ve <strong>diğer inşaat hizmetlerinizi</strong> en etkileyici şekilde sergileyebileceğiniz, <em>müşteri kazandıran</em> web sitesi çözümleri sunuyoruz. <strong>Proje portföyü</strong>, <em>interaktif harita</em> ve <strong>kurumsal tanıtım</strong> özellikleriyle <strong>15.000₺'den başlayan</strong> fiyatlarla <em>Google'da üst sıralarda</em> yer alın.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="construction-hero-visual">
              <div className="construction-mockup">
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

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">İnşaat Firmanıza Özel Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">Projelerinizi ve hizmetlerinizi en iyi şekilde sergileyecek, kurumsal kimliğinizi güçlendirecek özellikler</p>
          </div>
          
          <div className="sectoral-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="sectoral-feature-card">
                <div className="sectoral-feature-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <div className="sectoral-feature-content">
                  <h3 className="sectoral-feature-title">{feature.title}</h3>
                  <p className="sectoral-feature-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectoral-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Web Sitenizin Firmanıza Sağlayacağı Avantajlar</h2>
            <p className="sectoral-section-subtitle">İnşaat sektöründe rekabette öne çıkmanızı sağlayacak dijital çözümler</p>
          </div>
          
          <div className="sectoral-benefits-content">
            <div className="construction-benefits-mockup">
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
                      <div className="benefits-mockup-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sectoral-benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="sectoral-benefit-item">
                  <div className="sectoral-benefit-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="sectoral-benefit-text">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="construction-pricing">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">İnşaat Firması Web Sitesi Paketi</h2>
            <p className="sectoral-section-subtitle">İhtiyaçlarınıza uygun, profesyonel web sitesi çözümü</p>
          </div>
          
          <div className="construction-pricing-grid">
            <div className="construction-pricing-card">
              <div className="construction-pricing-header">
                <h3 className="construction-pricing-title">Kurumsal İnşaat Paketi</h3>
                <div className="construction-pricing-price">
                  <span className="construction-price-amount">15.000 ₺</span>
                  <span className="construction-price-period">+ KDV</span>
                </div>
              </div>
              <div className="construction-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Profesyonel Kurumsal Tasarım</li>
                  <li><i className="fas fa-check"></i> Proje Portföyü ve Galeri</li>
                  <li><i className="fas fa-check"></i> İnteraktif Proje Haritası</li>
                  <li><i className="fas fa-check"></i> Hizmet Alanları Sayfası</li>
                  <li><i className="fas fa-check"></i> SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Google Analytics Kurulumu</li>
                </ul>
              </div>
              <div className="construction-pricing-footer">
                <Link to="/iletisim" className="construction-pricing-button">Hemen Başvurun</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sıkça Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">İnşaat firması web sitesi hakkında merak edilenler</p>
          </div>
          
          <div className="construction-faq-grid">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="construction-faq-item">
                <h3 className="construction-faq-question">{faq.name}</h3>
                <p className="construction-faq-answer">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-cta">
        <div className="container">
          <div className="construction-cta-content">
                          <h2 className="construction-cta-title">
                Projelerinizi <span style={{color: "#ffffff", fontWeight: "bold"}}>Dijital Dünyada</span> Sergileyin
              </h2>
            <p className="construction-cta-text">İnşaat sektöründe fark yaratarak projelerinize değer katın.</p>
            <div className="construction-cta-buttons">
              <Link to="/iletisim" className="primary-button">Hemen İletişime Geçin</Link>
              <a href="#features" className="secondary-button">Özellikleri İnceleyin <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionCompany; 