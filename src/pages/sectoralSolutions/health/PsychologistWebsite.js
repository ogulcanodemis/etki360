import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './PsychologistWebsite.css';

const PsychologistWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const psychologistServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Psikolog Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Psikolog Web Tasarım", "Psikoterapi Web Sitesi", "Terapi Merkezi Web Sitesi"],
    "description": "Psikologlar için özel tasarlanmış, danışan odaklı, online randevu sistemi entegreli profesyonel web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi. İstanbul'da psikologlar ve psikoterapi merkezleri için SEO uyumlu web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "category": "Sağlık Sektörü Web Çözümleri",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "offers": {
      "@type": "Offer",
      "price": "7500",
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
        "name": "Psikologların neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Psikologlar için web sitesi, potansiyel danışanların sizin hakkınızda bilgi edinmesi, uzmanlık alanlarınızı tanıması, online randevu alması ve güven oluşturması için önemlidir. İstanbul'daki rekabetçi psikoloji sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni danışanlar kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Psikolog web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Psikolog web sitesi; mobil uyumlu, güven verici tasarıma sahip, SEO dostu, online randevu sistemi entegreli, mahremiyet odaklı, uzmanlık alanlarınızı detaylı anlatan ve danışanlarınıza yardımcı içerikler sunan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile semtinizdeki potansiyel danışanlara ulaşmanızı sağlamalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Psikolog web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak psikolog web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Psikolog web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'daki psikologlar için web sitesi fiyatlarımız 7.500 TL'den başlamaktadır. Online randevu sistemi, uzmanlık alanları sayfaları, blog ve danışan kaynakları içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Psikolog Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul",
    "description": "İstanbul'daki psikologlar için online randevu sistemli, danışan odaklı profesyonel web sitesi tasarımı. 7.500₺'den başlayan fiyatlarla 3 günde teslim.",
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
          "name": "Sağlık Sektörü",
          "item": "https://etki360.com/sektorel-cozumler/saglik"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Psikolog Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/saglik/psikolog-web-sitesi"
        }
      ]
    }
  };

  // Psikolog Web Sitesi Özellikleri
  const features = [
    {
      title: "Online Randevu Sistemi",
      description: "Danışanlarınızın kolayca online randevu alabilecekleri ve yönetebilecekleri entegre randevu sistemi",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
    },
    {
      title: "Uzmanlık Alanları Sayfaları",
      description: "Terapi yaklaşımlarınızı ve uzmanlık alanlarınızı detaylı anlatan, SEO odaklı içerik sayfaları",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    },
    {
      title: "Güven Oluşturan Tasarım",
      description: "Profesyonel, sakin ve güven veren tasarım ile danışanlarınızın kendilerini rahat hissetmelerini sağlayın",
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
    },
    {
      title: "Danışan Kaynakları",
      description: "Danışanlarınız için faydalı içerikler, makaleler ve mental sağlık kaynakları sunabileceğiniz blog bölümü",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      title: "Gizlilik ve Güvenlik",
      description: "Danışan bilgilerinin güvenliğini sağlayan SSL sertifikası ve KVKK uyumlu çözümler",
      icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
    },
    {
      title: "Lokasyon Bazlı SEO",
      description: "İstanbul içindeki semtinize özel SEO çalışması ile yakın çevrenizdeki danışanlara ulaşın",
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z M12 11.5c1.38 0 2.5-1.12 2.5-2.5S13.38 6.5 12 6.5 9.5 7.62 9.5 9s1.12 2.5 2.5 2.5z"
    }
  ];

  // Psikolog Web Sitesi Faydaları
  const benefits = [
    {
      title: "Danışan Güveni Oluşturma",
      description: "Profesyonel web sitesi ile potansiyel danışanlarınızın güvenini kazanın"
    },
    {
      title: "7/24 Erişilebilirlik",
      description: "Danışanlarınız her an sizin hakkınızda bilgi edinebilir ve randevu alabilir"
    },
    {
      title: "Yeni Danışanlar Kazanma",
      description: "İstanbul'da Google aramalarda üst sıralarda çıkarak yeni danışanlar edinebilirsiniz"
    },
    {
      title: "Zaman Tasarrufu",
      description: "Online randevu sistemi ile telefon trafiğini azaltın ve zamanınızı verimli kullanın"
    },
    {
      title: "Profesyonel İmaj",
      description: "Web siteniz, profesyonel kimliğinizin dijital dünyadaki yansımasıdır"
    },
    {
      title: "İstanbul'da Rekabet Avantajı",
      description: "Dijital varlığınızla rakiplerinizden bir adım öne geçin"
    }
  ];

  return (
    <div className="psychologist-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Psikolog Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="İstanbul'daki psikologlar için online randevu sistemli, danışan odaklı profesyonel web sitesi tasarımı. Uzmanlık alanları sayfaları, blog ve danışan kaynakları. 7.500₺'den başlayan fiyatlarla 3 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="psikolog web sitesi, psikolog web tasarım, psikoterapi web sitesi, psikolog randevu sistemi, psikolog seo, istanbul psikolog web sitesi, terapi merkezi web sitesi, klinik psikolog web sitesi, psikoloji web tasarım, danışan odaklı web sitesi" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/saglik/psikolog-web-sitesi" />
        <meta property="og:title" content="Psikolog Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul" />
        <meta property="og:description" content="İstanbul'daki psikologlar için online randevu sistemli, danışan odaklı profesyonel web sitesi tasarımı." />
        <meta property="og:image" content="https://etki360.com/images/og/psikolog-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psikolog Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul" />
        <meta name="twitter:description" content="İstanbul'daki psikologlar için online randevu sistemli, danışan odaklı profesyonel web sitesi tasarımı." />
        <meta name="twitter:image" content="https://etki360.com/images/og/psikolog-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/saglik/psikolog-web-sitesi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(psychologistServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="psychologist-hero">
        <div className="container">
          <div className="psychologist-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/saglik">Sağlık Sektörü</Link> / <span>Psikolog Web Sitesi</span>
          </div>
          <div className="psychologist-hero-content">
            <div className="psychologist-hero-text">
              <h1 className="psychologist-hero-title">
                <strong>Psikologlar İçin</strong> <span className="highlight"><strong>Profesyonel Web Sitesi</strong></span> <strong>Tasarımı</strong>
              </h1>
              <p className="psychologist-hero-description">
                <strong>İstanbul'daki psikologlar</strong> için <em>danışan odaklı</em>, <strong>online randevu sistemli</strong>, <em>güven verici tasarıma sahip</em> web sitesi çözümleri. <strong>Uzmanlık alanlarınızı</strong> etkili şekilde sergileyin, <em>potansiyel danışanlar kazanın</em>. <strong>Google'da üst sıralarda</strong> yer almanızı sağlayacak <em>SEO optimizasyonları</em> ile <strong>7.500₺'den başlayan</strong> fiyatlarla.
              </p>
              <div className="psychologist-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
            <div className="psychologist-hero-visual">
              <div className="psychologist-mockup">
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
      <section className="psychologist-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Psikolog Web Sitesi</strong> Özellikleri</h2>
            <p className="section-description">
              <em>Danışan odaklı</em> ve <strong>profesyonel psikolog web sitesi</strong> çözümlerimizin sunduğu özellikler
            </p>
          </div>

          <div className="psychologist-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="psychologist-feature-card">
                <div className="psychologist-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="psychologist-feature-title"><strong>{feature.title}</strong></h3>
                <p className="psychologist-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="psychologist-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Web Sitesinin</strong> Psikologlar İçin Faydaları</h2>
            <p className="section-description">
              <strong>İstanbul'daki profesyonel psikologlar</strong> için <em>web sitesinin sunduğu avantajlar</em>
            </p>
          </div>

          <div className="psychologist-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="psychologist-benefit-card">
                <h3 className="psychologist-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="psychologist-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="psychologist-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Psikolog Web Sitesi</strong> Paketleri</h2>
            <p className="section-description">
              <em>İhtiyaçlarınıza ve bütçenize uygun</em> <strong>psikolog web sitesi</strong> çözümleri
            </p>
          </div>

          <div className="psychologist-pricing-grid">
            <div className="psychologist-pricing-card">
              <div className="psychologist-pricing-header">
                <h3 className="psychologist-pricing-title">Başlangıç Paketi</h3>
                <div className="psychologist-pricing-price">
                  7.500 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="psychologist-pricing-features">
                <ul>
                  <li>Mobil Uyumlu Tasarım</li>
                  <li>5 Sayfalık Web Sitesi</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>İletişim Formu</li>
                  <li>Uzmanlık Alanları Sayfası</li>
                  <li>Whatsapp Entegrasyonu</li>
                  <li>SSL Sertifikası</li>
                  <li>1 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="psychologist-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="psychologist-pricing-card">
              <div className="psychologist-pricing-header">
                <h3 className="psychologist-pricing-title">Profesyonel Paket</h3>
                <div className="psychologist-pricing-price">
                  12.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="psychologist-pricing-features">
                <ul>
                  <li>Özel Tasarım</li>
                  <li>10 Sayfalık Web Sitesi</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Kapsamlı SEO Optimizasyonu</li>
                  <li>Blog & İçerik Yönetimi</li>
                  <li>Danışan Kaynakları Bölümü</li>
                  <li>KVKK Uyumlu Çözümler</li>
                  <li>İstanbul İçi Lokasyon Bazlı SEO</li>
                  <li>Sosyal Medya Entegrasyonu</li>
                  <li>2 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="psychologist-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="psychologist-pricing-card">
              <div className="psychologist-pricing-header">
                <h3 className="psychologist-pricing-title">Kurumsal Paket</h3>
                <div className="psychologist-pricing-price">
                  19.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="psychologist-pricing-features">
                <ul>
                  <li>Premium Özel Tasarım</li>
                  <li>Sınırsız Sayfa</li>
                  <li>Gelişmiş Randevu Sistemi</li>
                  <li>Ekip Üyeleri Yönetimi</li>
                  <li>Danışan Paneli</li>
                  <li>Online Ödeme Sistemi</li>
                  <li>Çoklu Dil Desteği</li>
                  <li>SEO Danışmanlığı (6 Ay)</li>
                  <li>Google Ads Yönetimi (3 Ay)</li>
                  <li>İçerik Üretimi (10 Blog Yazısı)</li>
                  <li>3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="psychologist-pricing-button">Hemen Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="psychologist-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <p className="section-description">
              <strong>Psikolog web sitesi</strong> hakkında merak edilenler
            </p>
          </div>

          <div className="psychologist-faq-grid">
            <div className="psychologist-faq-item">
              <h3 className="psychologist-faq-question">Psikologların neden web sitesi olmalı?</h3>
              <p className="psychologist-faq-answer">
                Psikologlar için web sitesi, potansiyel danışanların sizin hakkınızda bilgi edinmesi, uzmanlık alanlarınızı tanıması, online randevu alması ve güven oluşturması için önemlidir. İstanbul'daki rekabetçi psikoloji sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni danışanlar kazanmanıza yardımcı olur.
              </p>
            </div>

            <div className="psychologist-faq-item">
              <h3 className="psychologist-faq-question">Psikolog web sitesi nasıl olmalı?</h3>
              <p className="psychologist-faq-answer">
                Psikolog web sitesi; mobil uyumlu, güven verici tasarıma sahip, SEO dostu, online randevu sistemi entegreli, mahremiyet odaklı, uzmanlık alanlarınızı detaylı anlatan ve danışanlarınıza yardımcı içerikler sunan bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile semtinizdeki potansiyel danışanlara ulaşmanızı sağlamalıdır.
              </p>
            </div>

            <div className="psychologist-faq-item">
              <h3 className="psychologist-faq-question">Psikolog web sitesi ne kadar sürede hazır olur?</h3>
              <p className="psychologist-faq-answer">
                etki360 olarak psikolog web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz.
              </p>
            </div>

            <div className="psychologist-faq-item">
              <h3 className="psychologist-faq-question">Psikolog web sitesi maliyeti nedir?</h3>
              <p className="psychologist-faq-answer">
                İstanbul'daki psikologlar için web sitesi fiyatlarımız 7.500 TL'den başlamaktadır. Online randevu sistemi, uzmanlık alanları sayfaları, blog ve danışan kaynakları içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="psychologist-cta">
        <div className="container">
          <div className="psychologist-cta-content">
            <h2 className="psychologist-cta-title">
              <strong>Profesyonel Psikolog Web Sitesi</strong> ile <span className="highlight">Danışanlarınıza Ulaşın</span>
            </h2>
            <p className="psychologist-cta-description">
              İstanbul'da psikolog olarak danışanlarınıza en iyi şekilde ulaşmak, güven oluşturmak ve pratik çözümler sunmak için profesyonel web sitesi çözümlerimizden yararlanın.
            </p>
            <div className="psychologist-cta-buttons">
              <Link to="/iletisim" className="btn-primary">Ücretsiz Keşif Toplantısı</Link>
              <a href="tel:+905444882303" className="btn-outline">Hemen Arayın</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychologistWebsite; 