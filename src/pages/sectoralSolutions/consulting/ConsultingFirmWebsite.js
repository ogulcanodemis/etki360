import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './ConsultingFirmWebsite.css';

const ConsultingFirmWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const consultingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Danışmanlık Firması Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["İş Danışmanlığı Web Sitesi", "Finansal Danışmanlık Web Sitesi", "Yönetim Danışmanlığı Web Sitesi"],
    "description": "Danışmanlık firmaları için özel tasarlanmış, profesyonel, güven verici ve müşteri odaklı web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi. İstanbul'da danışmanlık firmaları için SEO uyumlu web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "category": "Danışmanlık Sektörü Web Çözümleri",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "offers": {
      "@type": "Offer",
      "price": "9500",
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
        "name": "Danışmanlık firmalarının neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Danışmanlık firmaları için web sitesi, potansiyel müşterilerin sizi bulması, uzmanlık alanlarınızı görmesi, profesyonel kimliğinizi tanıması ve güven oluşturması açısından önemlidir. İstanbul'daki rekabetçi danışmanlık sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müşteriler kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Danışmanlık firması web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Danışmanlık firması web sitesi; profesyonel, güven verici, uzmanlık alanlarınızı vurgulayan, bilgilendirici içerikler sunan ve kolay iletişim sağlayan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile, belirli danışmanlık hizmetleri için arama yapan potansiyel müşterilere ulaşmanızı sağlamalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Danışmanlık firması web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak danışmanlık firması web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Danışmanlık firması web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'daki danışmanlık firmaları için web sitesi fiyatlarımız 9.500 TL'den başlamaktadır. Uzmanlık alanları sayfaları, vaka çalışmaları, müşteri referansları ve kurumsal blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Danışmanlık Firması Web Sitesi Tasarımı | Profesyonel Danışmanlık Web Sitesi | İstanbul",
    "description": "İstanbul'daki danışmanlık firmaları için profesyonel, güven verici ve müşteri odaklı web sitesi tasarımı. 9.500₺'den başlayan fiyatlarla 3 günde teslim.",
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
          "name": "Danışmanlık Sektörü",
          "item": "https://etki360.com/sektorel-cozumler/danismanlik"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Danışmanlık Firması Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/danismanlik/danismanlik-firmasi-web-sitesi"
        }
      ]
    }
  };

  // Danışmanlık Firması Web Sitesi Özellikleri
  const features = [
    {
      title: "Uzmanlık Alanları Sayfaları",
      description: "Danışmanlık hizmetlerinizi detaylı şekilde tanıtan, potansiyel müşterilere hitap eden içerik sayfaları",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    },
    {
      title: "Vaka Çalışmaları (Case Studies)",
      description: "Başarılı projelerinizi ve çözümlerinizi detaylı olarak sergileyen, sonuç odaklı vaka çalışmaları",
      icon: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"
    },
    {
      title: "Stratejik İçerik Blogu",
      description: "Uzmanlığınızı gösteren, SEO değeri yüksek ve potansiyel müşterilere değer sunan stratejik içerikler",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      title: "Müşteri Referansları",
      description: "Memnun müşteri yorumlarını ve referanslarını sergileyerek güven oluşturun",
      icon: "M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    },
    {
      title: "Ücretsiz Danışmanlık Formu",
      description: "Potansiyel müşterilerin ilk danışmanlık için başvuru yapabileceği online form",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
    },
    {
      title: "Lokasyon Bazlı SEO",
      description: "İstanbul içindeki semtinize özel SEO çalışması ile yakın çevrenizdeki potansiyel müşterilere ulaşın",
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z M12 11.5c1.38 0 2.5-1.12 2.5-2.5S13.38 6.5 12 6.5 9.5 7.62 9.5 9s1.12 2.5 2.5 2.5z"
    }
  ];

  // Danışmanlık Firması Web Sitesi Faydaları
  const benefits = [
    {
      title: "Profesyonel İmaj Oluşturma",
      description: "Web siteniz, danışmanlık kariyerinizin ve profesyonelliğinizin dijital vitrinidir"
    },
    {
      title: "Müşteri Güveni Kazanma",
      description: "Profesyonel web sitesi ile potansiyel müşterilerinizin güvenini kazanın"
    },
    {
      title: "Yeni Müşteriler Edinme",
      description: "İstanbul'da Google aramalarda üst sıralarda çıkarak yeni müşteriler edinebilirsiniz"
    },
    {
      title: "Uzmanlık Alanlarını Vurgulama",
      description: "Danışmanlık uzmanlık alanlarınızı etkili şekilde tanıtarak doğru müşterilerle eşleşin"
    },
    {
      title: "Stratejik İçeriklerle Değer Sunma",
      description: "Bilgilendirici makalelerle potansiyel müşterilere değer katarak güven oluşturun"
    },
    {
      title: "İstanbul'da Rekabet Avantajı",
      description: "Dijital varlığınızla rakiplerinizden bir adım öne geçin"
    }
  ];

  return (
    <div className="consulting-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Danışmanlık Firması Web Sitesi Tasarımı | Profesyonel Danışmanlık Web Sitesi | İstanbul</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="İstanbul'daki danışmanlık firmaları için profesyonel, güven verici ve müşteri odaklı web sitesi tasarımı. Vaka çalışmaları, uzmanlık alanları ve müşteri referansları. 9.500₺'den başlayan fiyatlarla 3 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="danışmanlık firması web sitesi, danışmanlık web sitesi tasarımı, yönetim danışmanlığı web sitesi, iş danışmanlığı web sitesi, finansal danışmanlık web sitesi, İstanbul danışmanlık web sitesi, danışmanlık seo, danışmanlık vaka çalışmaları, müşteri odaklı web sitesi" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/danismanlik/danismanlik-firmasi-web-sitesi" />
        <meta property="og:title" content="Danışmanlık Firması Web Sitesi Tasarımı | Profesyonel Danışmanlık Web Sitesi | İstanbul" />
        <meta property="og:description" content="İstanbul'daki danışmanlık firmaları için profesyonel, güven verici ve müşteri odaklı web sitesi tasarımı." />
        <meta property="og:image" content="https://etki360.com/images/og/danismanlik-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Danışmanlık Firması Web Sitesi Tasarımı | Profesyonel Danışmanlık Web Sitesi | İstanbul" />
        <meta name="twitter:description" content="İstanbul'daki danışmanlık firmaları için profesyonel, güven verici ve müşteri odaklı web sitesi tasarımı." />
        <meta name="twitter:image" content="https://etki360.com/images/og/danismanlik-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/danismanlik/danismanlik-firmasi-web-sitesi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(consultingServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="container">
          <div className="consulting-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/danismanlik">Danışmanlık Sektörü</Link> / <span>Danışmanlık Firması Web Sitesi</span>
          </div>
          <div className="consulting-hero-content">
            <div className="consulting-hero-text">
              <h1 className="consulting-hero-title">
                <strong>Danışmanlık Firmaları İçin</strong> <span className="highlight"><strong>Profesyonel Web Sitesi</strong></span> <strong>Tasarımı</strong>
              </h1>
              <p className="consulting-hero-description">
                <strong>İstanbul'daki danışmanlık firmaları</strong> için <em>müşteri odaklı</em>, <strong>profesyonel ve güven verici</strong> web sitesi çözümleri. <strong>Danışmanlık uzmanlık alanlarınızı</strong> etkili şekilde sergileyin, <em>vaka çalışmalarınızı sunun</em>, <em>potansiyel müşteriler kazanın</em>. <strong>Google'da üst sıralarda</strong> yer almanızı sağlayacak <em>SEO optimizasyonları</em> ile <strong>9.500₺'den başlayan</strong> fiyatlarla.
              </p>
              <div className="consulting-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
            <div className="consulting-hero-visual">
              <div className="consulting-mockup">
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
      <section className="consulting-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Danışmanlık Firması Web Sitesi</strong> Özellikleri</h2>
            <p className="section-description">
              <em>Müşteri odaklı</em> ve <strong>profesyonel danışmanlık web sitesi</strong> çözümlerimizin sunduğu özellikler
            </p>
          </div>

          <div className="consulting-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="consulting-feature-card">
                <div className="consulting-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="consulting-feature-title"><strong>{feature.title}</strong></h3>
                <p className="consulting-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="consulting-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Web Sitesinin</strong> Danışmanlık Firmaları İçin Faydaları</h2>
            <p className="section-description">
              <strong>İstanbul'daki profesyonel danışmanlık firmaları</strong> için <em>web sitesinin sunduğu avantajlar</em>
            </p>
          </div>

          <div className="consulting-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="consulting-benefit-card">
                <h3 className="consulting-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="consulting-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="consulting-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Danışmanlık Firması Web Sitesi</strong> Paketleri</h2>
            <p className="section-description">
              <em>İhtiyaçlarınıza ve bütçenize uygun</em> <strong>danışmanlık web sitesi</strong> çözümleri
            </p>
          </div>

          <div className="consulting-pricing-grid">
            <div className="consulting-pricing-card">
              <div className="consulting-pricing-header">
                <h3 className="consulting-pricing-title">Temel Paket</h3>
                <div className="consulting-pricing-price">
                  9.500 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="consulting-pricing-features">
                <ul>
                  <li>Profesyonel Tasarım</li>
                  <li>5 Sayfalık Web Sitesi</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>İletişim Formu</li>
                  <li>Uzmanlık Alanları Sayfası</li>
                  <li>2 Vaka Çalışması</li>
                  <li>Whatsapp Entegrasyonu</li>
                  <li>SSL Sertifikası</li>
                  <li>1 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="consulting-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="consulting-pricing-card">
              <div className="consulting-pricing-header">
                <h3 className="consulting-pricing-title">Profesyonel Paket</h3>
                <div className="consulting-pricing-price">
                  16.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="consulting-pricing-features">
                <ul>
                  <li>Özel Tasarım</li>
                  <li>10+ Sayfalık Web Sitesi</li>
                  <li>Kapsamlı SEO Optimizasyonu</li>
                  <li>Stratejik İçerik Blogu</li>
                  <li>Ekip Üyeleri Tanıtımı</li>
                  <li>5 Vaka Çalışması</li>
                  <li>Müşteri Referansları</li>
                  <li>Ücretsiz Danışmanlık Formu</li>
                  <li>İstanbul İçi Lokasyon Bazlı SEO</li>
                  <li>Sosyal Medya Entegrasyonu</li>
                  <li>2 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="consulting-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="consulting-pricing-card">
              <div className="consulting-pricing-header">
                <h3 className="consulting-pricing-title">Kurumsal Paket</h3>
                <div className="consulting-pricing-price">
                  26.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="consulting-pricing-features">
                <ul>
                  <li>Premium Özel Tasarım</li>
                  <li>Sınırsız Sayfa</li>
                  <li>Gelişmiş Vaka Yönetim Sistemi</li>
                  <li>Müşteri Portalı</li>
                  <li>Kapsamlı Stratejik Blog</li>
                  <li>Özel Alan Başvuru Formları</li>
                  <li>Çoklu Dil Desteği</li>
                  <li>SEO Danışmanlığı (6 Ay)</li>
                  <li>Google Ads Yönetimi (3 Ay)</li>
                  <li>İçerik Üretimi (10 Makale)</li>
                  <li>3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="consulting-pricing-button">Hemen Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="consulting-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <p className="section-description">
              <strong>Danışmanlık firması web sitesi</strong> hakkında merak edilenler
            </p>
          </div>

          <div className="consulting-faq-grid">
            <div className="consulting-faq-item">
              <h3 className="consulting-faq-question">Danışmanlık firmalarının neden web sitesi olmalı?</h3>
              <p className="consulting-faq-answer">
                Danışmanlık firmaları için web sitesi, potansiyel müşterilerin sizi bulması, uzmanlık alanlarınızı görmesi, profesyonel kimliğinizi tanıması ve güven oluşturması açısından önemlidir. İstanbul'daki rekabetçi danışmanlık sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müşteriler kazanmanıza yardımcı olur.
              </p>
            </div>

            <div className="consulting-faq-item">
              <h3 className="consulting-faq-question">Danışmanlık firması web sitesi nasıl olmalı?</h3>
              <p className="consulting-faq-answer">
                Danışmanlık firması web sitesi; profesyonel, güven verici, uzmanlık alanlarınızı vurgulayan, bilgilendirici içerikler sunan ve kolay iletişim sağlayan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile, belirli danışmanlık hizmetleri için arama yapan potansiyel müşterilere ulaşmanızı sağlamalıdır.
              </p>
            </div>

            <div className="consulting-faq-item">
              <h3 className="consulting-faq-question">Danışmanlık firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="consulting-faq-answer">
                etki360 olarak danışmanlık firması web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz.
              </p>
            </div>

            <div className="consulting-faq-item">
              <h3 className="consulting-faq-question">Danışmanlık firması web sitesi maliyeti nedir?</h3>
              <p className="consulting-faq-answer">
                İstanbul'daki danışmanlık firmaları için web sitesi fiyatlarımız 9.500 TL'den başlamaktadır. Uzmanlık alanları sayfaları, vaka çalışmaları, müşteri referansları ve kurumsal blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="consulting-cta">
        <div className="container">
          <div className="consulting-cta-content">
            <h2 className="consulting-cta-title">
              <strong>Profesyonel Danışmanlık Web Sitesi</strong> ile <span className="highlight">Müşterilerinize Ulaşın</span>
            </h2>
            <p className="consulting-cta-description">
              İstanbul'da danışmanlık firması olarak potansiyel müşterilerinize en iyi şekilde ulaşmak, profesyonel imajınızı güçlendirmek ve uzmanlığınızı sergilemek için web sitesi çözümlerimizden yararlanın.
            </p>
            <div className="consulting-cta-buttons">
              <Link to="/iletisim" className="btn-primary">Ücretsiz Keşif Toplantısı</Link>
              <a href="tel:+902125551234" className="btn-outline">Hemen Arayın</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingFirmWebsite;
 