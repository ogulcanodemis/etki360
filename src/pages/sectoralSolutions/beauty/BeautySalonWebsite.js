import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './BeautySalonWebsite.css';

const BeautySalonWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const beautyServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Güzellik Salonu Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Güzellik Merkezi Web Sitesi", "Estetik Merkezi Web Sitesi", "Cilt Bakım Merkezi Web Sitesi"],
    "description": "Güzellik salonları için özel tasarlanmış, estetik, modern ve müşteri odaklı web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi. İstanbul'da güzellik merkezleri için online randevu sistemli ve SEO uyumlu web siteleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "category": "Güzellik Sektörü Web Çözümleri",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "offers": {
      "@type": "Offer",
      "price": "7200",
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
        "name": "Güzellik salonlarının neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Güzellik salonu web sitesi, potansiyel müşterilerin sizi bulması, hizmetlerinizi ve fiyatlarınızı görmesi, online randevu alması ve salonunuzun profesyonel imajını yansıtması açısından kritik öneme sahiptir. İstanbul gibi rekabetçi bir şehirde dijital varlığınız, yeni müşteriler kazanmanızın en etkili yoludur."
        }
      },
      {
        "@type": "Question",
        "name": "Güzellik salonu web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İyi bir güzellik salonu web sitesi; estetik ve çekici bir tasarıma sahip, mobil uyumlu, hizmetlerinizi detaylıca açıklayan, online randevu sistemi sunan, çalışmalarınızı gösteren bir galeriye sahip ve müşteri yorumları içeren bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO ile, semtinizdeki müşterilere kolayca ulaşmanızı sağlamalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Güzellik salonu web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak, güzellik salonu web sitenizi 3 gün gibi kısa bir sürede, tüm isteklerinize uygun şekilde tasarlayıp teslim ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Güzellik salonu web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'daki güzellik salonları için web sitesi paketlerimiz 7.200 TL'den başlamaktadır. Online randevu, hizmetler, galeri ve iletişim gibi tüm temel modülleri içeren bu paket, dijitalde başarılı bir başlangıç yapmanız için idealdir."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Güzellik Salonu Web Sitesi Tasarımı | Modern & Estetik Web Sitesi | İstanbul",
    "description": "İstanbul'daki güzellik salonları için online randevu sistemli, estetik ve profesyonel web sitesi tasarımı. 7.200₺'den başlayan fiyatlarla 3 günde teslim.",
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
          "name": "Güzellik Sektörü",
          "item": "https://etki360.com/sektorel-cozumler/guzellik"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Güzellik Salonu Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi"
        }
      ]
    }
  };

  // Güzellik Salonu Web Sitesi Özellikleri
  const features = [
    {
      title: "Online Randevu Sistemi",
      description: "Müşterileriniz 7/24 online randevu alabilsin, siz de randevu takibini kolayca yapın.",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
    },
    {
      title: "Hizmetler ve Paketler",
      description: "Cilt bakımı, lazer epilasyon, manikür gibi tüm hizmetlerinizi ve özel paketlerinizi detaylıca tanıtın.",
      icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    },
    {
      title: "Öncesi-Sonrası Galerisi",
      description: "Başarılı uygulamalarınızı gösteren etkileyici görsellerle potansiyel müşterilerinizi ikna edin.",
      icon: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
    },
    {
      title: "Uzman Ekip Tanıtımı",
      description: "Deneyimli estetisyen ve uzmanlarınızı tanıtarak salonunuzun profesyonelliğini vurgulayın.",
      icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"
    },
    {
      title: "Müşteri Yorumları Alanı",
      description: "Memnun müşterilerinizin yorumlarını yayınlayarak sosyal kanıt oluşturun ve güven kazanın.",
      icon: "M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    },
    {
      title: "Instagram Entegrasyonu",
      description: "Instagram akışınızı web sitenizde canlı olarak yayınlayarak sitenizi dinamik ve güncel tutun.",
      icon: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
    }
  ];

  // Güzellik Salonu Web Sitesi Faydaları
  const benefits = [
    {
      title: "Marka Bilinirliği ve Prestij",
      description: "Estetik bir web sitesi ile salonunuzun marka değerini ve prestijini artırın."
    },
    {
      title: "7/24 Randevu ve Bilgi Erişimi",
      description: "Müşterileriniz diledikleri zaman hizmetlerinizi inceleyip kolayca randevu oluşturabilir."
    },
    {
      title: "Yeni Müşteri Kazanımı",
      description: "Google'da 'cilt bakımı İstanbul' gibi aramalarda üst sıralarda yer alarak yeni müşteriler edinin."
    },
    {
      title: "İş Yükünü Azaltma",
      description: "Online randevu sistemi sayesinde telefon trafiğiniz azalır, zamandan tasarruf edersiniz."
    },
    {
      title: "Görsel Gücünüzü Kullanma",
      description: "Hizmetlerinizin sonuçlarını ve salonunuzun atmosferini görsellerle etkili bir şekilde sunun."
    },
    {
      title: "Pazarlama Faaliyetlerini Destekleme",
      description: "Web siteniz, sosyal medya ve diğer dijital pazarlama kampanyalarınız için merkez üssü olur."
    }
  ];

  return (
    <div className="beauty-salon-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        <title>Güzellik Salonu Web Sitesi Tasarımı | Modern & Estetik Web Sitesi | İstanbul</title>
        <meta 
          name="description" 
          content="İstanbul'daki güzellik salonları ve merkezleri için profesyonel, estetik ve online randevu sistemli web sitesi tasarımı. 7.200₺'den başlayan fiyatlarla 3 günde teslim." 
        />
        <meta 
          name="keywords" 
          content="güzellik salonu web sitesi, güzellik merkezi web sitesi, estetik merkezi web sitesi, cilt bakımı web sitesi, güzellik salonu randevu sistemi, istanbul güzellik salonu, profesyonel web tasarım, güzellik salonu seo" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi" />
        <meta property="og:title" content="Güzellik Salonu Web Sitesi Tasarımı | Modern & Estetik Web Sitesi | İstanbul" />
        <meta property="og:description" content="İstanbul'daki güzellik salonları için online randevu sistemli, estetik ve profesyonel web sitesi tasarımı." />
        <meta property="og:image" content="https://etki360.com/images/og/guzellik-salonu-web-sitesi.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Güzellik Salonu Web Sitesi Tasarımı | Modern & Estetik Web Sitesi | İstanbul" />
        <meta name="twitter:description" content="İstanbul'daki güzellik salonları için online randevu sistemli, estetik ve profesyonel web sitesi tasarımı." />
        <meta name="twitter:image" content="https://etki360.com/images/og/guzellik-salonu-web-sitesi.jpg" />
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi" />
        <script type="application/ld+json">
          {JSON.stringify(beautyServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="beauty-salon-hero">
        <div className="container">
          <div className="beauty-salon-breadcrumb">
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
            <Link to="/sektorel-cozumler/guzellik">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Güzellik Sektörü
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Güzellik Salonu Web Sitesi</span>
          </div>
          <div className="beauty-salon-hero-content">
            <div className="beauty-salon-hero-text">
              <h1 className="beauty-salon-hero-title">
                <strong>Güzellik Salonları İçin</strong> <span style={{color: "#ff69b4", fontWeight: "bold"}}><strong>Göz Alıcı Web Siteleri</strong></span>
              </h1>
              <p className="beauty-salon-hero-description">
                <strong>İstanbul'daki güzellik merkeziniz</strong> için <em>estetik ve modern</em> tasarımlar, <strong>online randevu sistemi</strong> ve <em>müşteri odaklı arayüzler</em>. Salonunuzun zarafetini dijital dünyaya taşıyın. <strong>7.200₺'den başlayan</strong> fiyatlarla profesyonel çözümler.
              </p>
              <div className="beauty-salon-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Teklif Alın</Link>
                <Link to="/portfoy" className="btn-outline">Çalışmalarımızı Görün</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="beauty-salon-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Güzellik Salonu Web Sitesi</strong> Özellikleri</h2>
            <p className="section-description">
              Salonunuzun ihtiyaçlarına özel olarak tasarladığımız web sitelerinin sunduğu profesyonel özellikler.
            </p>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                <div className="beauty-salon-feature-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="beauty-salon-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitesinin Salonunuza Katkıları</h2>
            <p className="section-description">
              Profesyonel bir web sitesi ile güzellik salonunuzu nasıl bir adım öne taşıyabilirsiniz?
            </p>
          </div>
          <div className="beauty-salon-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="beauty-salon-benefit-card">
                <h3 className="beauty-salon-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="beauty-salon-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="beauty-salon-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Güzellik Salonu Web Sitesi Paketleri</h2>
            <p className="section-description">
              İhtiyaçlarınıza ve bütçenize en uygun web sitesi paketini seçin.
            </p>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header">
                <h3 className="beauty-salon-pricing-title">Başlangıç Paketi</h3>
                <div className="beauty-salon-pricing-price">
                  7.200 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Modern ve Estetik Tasarım</li>
                  <li>5 Sayfa (Ana Sayfa, Hakkımızda, Hizmetler, Galeri, İletişim)</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Temel SEO Ayarları</li>
                  <li>Mobil ve Tablet Uyumlu</li>
                  <li>SSL Güvenlik Sertifikası</li>
                  <li>1 Yıl Ücretsiz Teknik Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button">Paketi Seç</Link>
            </div>
            {/* Daha fazla paket eklenebilir */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="beauty-salon-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-description">
              Güzellik salonu web sitesi hizmetimizle ilgili merak ettikleriniz.
            </p>
          </div>
          <div className="beauty-salon-faq-grid">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="beauty-salon-faq-item">
                <h3 className="beauty-salon-faq-question">{faq.name}</h3>
                <p className="beauty-salon-faq-answer">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="beauty-salon-cta">
        <div className="container">
          <div className="beauty-salon-cta-content">
            <h2 className="beauty-salon-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="beauty-salon-cta-description">
              Salonunuzun potansiyelini ortaya çıkaracak, müşterilerinizi etkileyecek ve randevularınızı artıracak profesyonel bir web sitesine hemen sahip olun. Ücretsiz danışmanlık görüşmesinde, salonunuza özel web çözümlerini konuşalım.
            </p>
            <div className="beauty-salon-cta-buttons">
              <Link to="/iletisim" className="btn-primary">ÖZEL TEKLİF ALIN</Link>
              <a href="tel:+902125551234" className="btn-outline">0212 555 12 34</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeautySalonWebsite; 