import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './LawyerWebsite.css';

const LawyerWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const lawyerServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Avukat Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Hukuk Bürosu Web Sitesi", "Avukatlık Bürosu Web Sitesi", "Hukuki Danışmanlık Web Sitesi"],
    "description": "Avukatlar için özel tasarlanmış, profesyonel, güven verici ve müvekkil odaklı web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi. İstanbul'da avukatlık büroları ve hukuk ofisleri için SEO uyumlu web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "category": "Hukuk Sektörü Web Çözümleri",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "offers": {
      "@type": "Offer",
      "price": "8500",
      "priceCurrency": "TRY"
    }
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Avukatların neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avukatlar için web sitesi, potansiyel müvekkillerin sizi bulması, uzmanlık alanlarınızı görmesi, profesyonel kimliğinizi tanıması ve güven oluşturması açısından önemlidir. İstanbul'daki rekabetçi hukuk sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müvekkiller kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Avukat web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avukat web sitesi; profesyonel, güven verici, uzmanlık alanlarınızı vurgulayan, bilgilendirici içerikler sunan ve kolay iletişim sağlayan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile, belirli hukuki konularda arama yapan potansiyel müvekkillere ulaşmanızı sağlamalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Avukat web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak avukat web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Avukat web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'daki avukatlar için web sitesi fiyatlarımız 8.500 TL'den başlamaktadır. Uzmanlık alanları sayfaları, hukuki makaleler, referanslar ve profesyonel özgeçmiş içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Avukat Web Sitesi Tasarımı | Profesyonel Hukuk Bürosu Web Sitesi | İstanbul",
    "description": "İstanbul'daki avukatlar için profesyonel, güven verici ve müvekkil odaklı web sitesi tasarımı. 8.500₺'den başlayan fiyatlarla 3 günde teslim.",
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
          "name": "Hukuk Sektörü",
          "item": "https://etki360.com/sektorel-cozumler/hukuk"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Avukat Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/hukuk/avukat-web-sitesi"
        }
      ]
    }
  };

  // Avukat Web Sitesi Özellikleri
  const features = [
    {
      title: "Uzmanlık Alanları Sayfaları",
      description: "Hukuki uzmanlık alanlarınızı detaylı şekilde tanıtan, potansiyel müvekkillere hitap eden içerik sayfaları",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    },
    {
      title: "Profesyonel Özgeçmiş",
      description: "Eğitim, kariyer ve başarılarınızı vurgulayan, güven oluşturan özgeçmiş sayfası",
      icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    },
    {
      title: "Hukuki Makaleler Blogu",
      description: "Uzmanlığınızı gösteren, SEO değeri yüksek ve potansiyel müvekkillere değer sunan hukuki içerikler",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      title: "Müvekkil Referansları",
      description: "Gizlilik ilkelerine uygun olarak memnun müvekkil yorumlarını sergileyerek güven oluşturun",
      icon: "M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    },
    {
      title: "Randevu Talep Formu",
      description: "Potansiyel müvekkillerin kolayca ilk görüşme randevusu talep edebileceği online form",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
    },
    {
      title: "Lokasyon Bazlı SEO",
      description: "İstanbul içindeki semtinize özel SEO çalışması ile yakın çevrenizdeki potansiyel müvekkillere ulaşın",
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z M12 11.5c1.38 0 2.5-1.12 2.5-2.5S13.38 6.5 12 6.5 9.5 7.62 9.5 9s1.12 2.5 2.5 2.5z"
    }
  ];

  // Avukat Web Sitesi Faydaları
  const benefits = [
    {
      title: "Profesyonel İmaj Oluşturma",
      description: "Web siteniz, hukuki kariyerinizin ve profesyonelliğinizin dijital vitrinidir"
    },
    {
      title: "Müvekkil Güveni Kazanma",
      description: "Profesyonel web sitesi ile potansiyel müvekkillerinizin güvenini kazanın"
    },
    {
      title: "Yeni Müvekkiller Edinme",
      description: "İstanbul'da Google aramalarda üst sıralarda çıkarak yeni müvekkiller edinebilirsiniz"
    },
    {
      title: "Uzmanlık Alanlarını Vurgulama",
      description: "Hukuki uzmanlık alanlarınızı etkili şekilde tanıtarak doğru müvekkillerle eşleşin"
    },
    {
      title: "Hukuki İçeriklerle Değer Sunma",
      description: "Bilgilendirici makalelerle potansiyel müvekkillere değer katarak güven oluşturun"
    },
    {
      title: "İstanbul'da Rekabet Avantajı",
      description: "Dijital varlığınızla rakiplerinizden bir adım öne geçin"
    }
  ];

  return (
    <div className="lawyer-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Avukat Web Sitesi Tasarımı | Profesyonel Hukuk Bürosu Web Sitesi | İstanbul</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="İstanbul'daki avukatlar için profesyonel, güven verici ve müvekkil odaklı web sitesi tasarımı. Uzmanlık alanları sayfaları, hukuki makaleler ve profesyonel özgeçmiş. 8.500₺'den başlayan fiyatlarla 3 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="avukat web sitesi, hukuk bürosu web sitesi, avukatlık bürosu web sitesi, hukuki danışmanlık web sitesi, avukat web tasarım, istanbul avukat web sitesi, hukuk ofisi web sitesi, avukat seo, avukat blog sayfası, müvekkil odaklı web sitesi" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/hukuk/avukat-web-sitesi" />
        <meta property="og:title" content="Avukat Web Sitesi Tasarımı | Profesyonel Hukuk Bürosu Web Sitesi | İstanbul" />
        <meta property="og:description" content="İstanbul'daki avukatlar için profesyonel, güven verici ve müvekkil odaklı web sitesi tasarımı." />
        <meta property="og:image" content="https://etki360.com/images/og/avukat-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avukat Web Sitesi Tasarımı | Profesyonel Hukuk Bürosu Web Sitesi | İstanbul" />
        <meta name="twitter:description" content="İstanbul'daki avukatlar için profesyonel, güven verici ve müvekkil odaklı web sitesi tasarımı." />
        <meta name="twitter:image" content="https://etki360.com/images/og/avukat-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hukuk/avukat-web-sitesi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(lawyerServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="lawyer-hero">
        <div className="container">
          <div className="lawyer-breadcrumb">
            <Link to="/">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Ana Sayfa
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Sektörel Çözümler
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler/hukuk">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M9 9h6v6H9z"></path>
              </svg>
              Hukuk Sektörü
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Avukat Web Sitesi</span>
          </div>
          <div className="lawyer-hero-content">
            <div className="lawyer-hero-text">
              <h1 className="lawyer-hero-title">
                <strong>Avukatlar İçin</strong> <span className="highlight"><strong>Profesyonel Web Sitesi</strong></span> <strong>Tasarımı</strong>
              </h1>
              <p className="lawyer-hero-description">
                <strong>İstanbul'daki avukatlar</strong> için <em>müvekkil odaklı</em>, <strong>profesyonel ve güven verici</strong> web sitesi çözümleri. <strong>Hukuki uzmanlık alanlarınızı</strong> etkili şekilde sergileyin, <em>potansiyel müvekkiller kazanın</em>. <strong>Google'da üst sıralarda</strong> yer almanızı sağlayacak <em>SEO optimizasyonları</em> ile <strong>8.500₺'den başlayan</strong> fiyatlarla.
              </p>
              <div className="lawyer-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
            <div className="lawyer-hero-visual">
              <div className="lawyer-mockup">
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
                  <div className="mockup-appointment"></div>
                  <div className="mockup-services">
                    <div className="mockup-service"></div>
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

      {/* Features Section */}
      <section className="lawyer-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Avukat Web Sitesi</strong> Özellikleri</h2>
            <p className="section-description">
              <em>Müvekkil odaklı</em> ve <strong>profesyonel avukat web sitesi</strong> çözümlerimizin sunduğu özellikler
            </p>
          </div>

          <div className="lawyer-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="lawyer-feature-card">
                <div className="lawyer-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="lawyer-feature-title"><strong>{feature.title}</strong></h3>
                <p className="lawyer-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="lawyer-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Web Sitesinin</strong> Avukatlar İçin Faydaları</h2>
            <p className="section-description">
              <strong>İstanbul'daki profesyonel avukatlar</strong> için <em>web sitesinin sunduğu avantajlar</em>
            </p>
          </div>

          <div className="lawyer-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="lawyer-benefit-card">
                <h3 className="lawyer-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="lawyer-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="lawyer-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Avukat Web Sitesi</strong> Paketleri</h2>
            <p className="section-description">
              <em>İhtiyaçlarınıza ve bütçenize uygun</em> <strong>avukat web sitesi</strong> çözümleri
            </p>
          </div>

          <div className="lawyer-pricing-grid">
            <div className="lawyer-pricing-card">
              <div className="lawyer-pricing-header">
                <h3 className="lawyer-pricing-title">Bireysel Paket</h3>
                <div className="lawyer-pricing-price">
                  8.500 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="lawyer-pricing-features">
                <ul>
                  <li>Profesyonel Tasarım</li>
                  <li>5 Sayfalık Web Sitesi</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>İletişim Formu</li>
                  <li>Uzmanlık Alanları Sayfası</li>
                  <li>Profesyonel Özgeçmiş</li>
                  <li>Whatsapp Entegrasyonu</li>
                  <li>SSL Sertifikası</li>
                  <li>1 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="lawyer-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="lawyer-pricing-card">
              <div className="lawyer-pricing-header">
                <h3 className="lawyer-pricing-title">Hukuk Bürosu Paketi</h3>
                <div className="lawyer-pricing-price">
                  14.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="lawyer-pricing-features">
                <ul>
                  <li>Özel Tasarım</li>
                  <li>10+ Sayfalık Web Sitesi</li>
                  <li>Kapsamlı SEO Optimizasyonu</li>
                  <li>Hukuki İçerik Blogu</li>
                  <li>Ekip Üyeleri Tanıtımı</li>
                  <li>Müvekkil Referansları</li>
                  <li>Randevu Talep Formu</li>
                  <li>İstanbul İçi Lokasyon Bazlı SEO</li>
                  <li>Sosyal Medya Entegrasyonu</li>
                  <li>2 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="lawyer-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="lawyer-pricing-card">
              <div className="lawyer-pricing-header">
                <h3 className="lawyer-pricing-title">Kurumsal Hukuk Paketi</h3>
                <div className="lawyer-pricing-price">
                  23.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="lawyer-pricing-features">
                <ul>
                  <li>Premium Özel Tasarım</li>
                  <li>Sınırsız Sayfa</li>
                  <li>Gelişmiş Vaka Yönetim Sistemi</li>
                  <li>Müvekkil Portalı</li>
                  <li>Kapsamlı Hukuki Blog</li>
                  <li>Özel Alan Başvuru Formları</li>
                  <li>Çoklu Dil Desteği</li>
                  <li>SEO Danışmanlığı (6 Ay)</li>
                  <li>Google Ads Yönetimi (3 Ay)</li>
                  <li>Hukuki İçerik Üretimi (10 Makale)</li>
                  <li>3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="lawyer-pricing-button">Hemen Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="lawyer-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <p className="section-description">
              <strong>Avukat web sitesi</strong> hakkında merak edilenler
            </p>
          </div>

          <div className="lawyer-faq-grid">
            <div className="lawyer-faq-item">
              <h3 className="lawyer-faq-question">Avukatların neden web sitesi olmalı?</h3>
              <p className="lawyer-faq-answer">
                Avukatlar için web sitesi, potansiyel müvekkillerin sizi bulması, uzmanlık alanlarınızı görmesi, profesyonel kimliğinizi tanıması ve güven oluşturması açısından önemlidir. İstanbul'daki rekabetçi hukuk sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müvekkiller kazanmanıza yardımcı olur.
              </p>
            </div>

            <div className="lawyer-faq-item">
              <h3 className="lawyer-faq-question">Avukat web sitesi nasıl olmalı?</h3>
              <p className="lawyer-faq-answer">
                Avukat web sitesi; profesyonel, güven verici, uzmanlık alanlarınızı vurgulayan, bilgilendirici içerikler sunan ve kolay iletişim sağlayan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile, belirli hukuki konularda arama yapan potansiyel müvekkillere ulaşmanızı sağlamalıdır.
              </p>
            </div>

            <div className="lawyer-faq-item">
              <h3 className="lawyer-faq-question">Avukat web sitesi ne kadar sürede hazır olur?</h3>
              <p className="lawyer-faq-answer">
                etki360 olarak avukat web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz.
              </p>
            </div>

            <div className="lawyer-faq-item">
              <h3 className="lawyer-faq-question">Avukat web sitesi maliyeti nedir?</h3>
              <p className="lawyer-faq-answer">
                İstanbul'daki avukatlar için web sitesi fiyatlarımız 8.500 TL'den başlamaktadır. Uzmanlık alanları sayfaları, hukuki makaleler, referanslar ve profesyonel özgeçmiş içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lawyer-cta">
        <div className="container">
          <div className="lawyer-cta-content">
            <h2 className="lawyer-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="lawyer-cta-description">
              <strong>İstanbul'daki avukatlar</strong> ve <em>hukuk büroları</em> için <strong>profesyonel web sitesi</strong> çözümlerimiz ile potansiyel müvekkillerinize <em>güven</em> aşılayın. <strong>Dijital varlığınızı</strong> oluşturmak, <strong>uzmanlık alanlarınızı</strong> vurgulamak ve <em>hukuki kariyerinizi</em> güçlendirmek için hemen <strong>ücretsiz danışmanlık</strong> alın.
            </p>
            <div className="lawyer-cta-buttons">
              <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
              <Link to="/ornekler/hukuk" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
            </div>
            <p className="lawyer-cta-note">
              * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LawyerWebsite; 