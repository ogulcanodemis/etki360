import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './ProstheticNailWebsite.css';

const ProstheticNailWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const prostheticNailServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Protez Tırnak Web Sitesi Tasarımı",
    "alternateName": ["Nail Art Web Sitesi", "Kalıcı Oje Web Sitesi"],
    "description": "Protez tırnak, nail art ve kalıcı oje hizmetleri sunan salonlar için estetik, modern ve randevu odaklı web sitesi çözümleri. İstanbul'daki tırnak stüdyoları için SEO uyumlu web siteleri.",
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
      "price": "6500",
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
        "name": "Protez tırnak stüdyoları için web sitesi neden önemlidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profesyonel bir web sitesi, tırnak tasarımlarınızı ve nail art çalışmalarınızı sergilemeniz için en iyi platformdur. Potansiyel müşterilerinizin hizmetlerinizi görmesi, fiyatlarınızı incelemesi ve online randevu alması, salonunuzun müşteri sayısını doğrudan artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Protez tırnak web sitesinde hangi özellikler olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Etkili bir protez tırnak web sitesi; çalışmalarınızı sergileyen yüksek çözünürlüklü bir galeri, online randevu sistemi, hizmet ve fiyat listesi, uzman tırnak teknisyenlerinin tanıtımı ve müşteri yorumları gibi bölümleri içermelidir. Tasarım, salonunuzun estetik anlayışını yansıtmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Web sitesi ne kadar sürede tamamlanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak, protez tırnak ve nail art odaklı web sitenizi 3 iş günü içinde, tüm özellikleri aktif şekilde teslim ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Protez tırnak web sitesi fiyatları nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Protez tırnak stüdyoları için online randevu sistemli, galeri ve hizmetler modülü dahil web sitesi paketlerimiz 6.500 TL'den başlamaktadır."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Protez Tırnak Web Sitesi Tasarımı | Nail Art Stüdyo Sitesi | İstanbul",
    "description": "İstanbul'daki protez tırnak ve nail art stüdyoları için online randevulu, profesyonel web sitesi tasarımı. 6.500₺'den başlayan fiyatlarla.",
    "url": "https://etki360.com/sektorel-cozumler/guzellik/protez-tirnak-web-sitesi"
  };

  const features = [
    {
      title: "Nail Art Galerisi",
      description: "Yaptığınız eşsiz tırnak tasarımlarını ve protez tırnak modellerini sergileyin.",
      icon: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
    },
    {
      title: "Online Randevu Modülü",
      description: "Müşterilerinizin istediği uzmanı, hizmeti ve saati seçerek kolayca randevu almasını sağlayın.",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"
    },
    {
      title: "Hizmet ve Fiyat Listesi",
      description: "Protez tırnak, kalıcı oje, manikür, pedikür gibi tüm hizmetlerinizi fiyatlarıyla listeleyin.",
      icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2z"
    },
    {
      title: "Uzman Profilleri",
      description: "Tırnak teknisyenlerinizin ve nail art uzmanlarınızın deneyimlerini ve çalışmalarını tanıtın.",
      icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"
    }
  ];

  const benefits = [
    {
      title: "Sanatınızı Sergileyin",
      description: "Web siteniz, tırnak tasarımlarınızın ve sanatsal yeteneğinizin dijital portfolyosudur."
    },
    {
      title: "Randevu Yönetim Kolaylığı",
      description: "Online randevu sistemi ile telefon trafiğini azaltın ve zamanınızı daha verimli kullanın."
    },
    {
      title: "Yeni Müşterilere Ulaşın",
      description: "Google'da 'protez tırnak İstanbul' gibi aramalarda çıkarak yeni müşteriler kazanın."
    },
    {
      title: "Güven ve Profesyonellik",
      description: "Modern bir web sitesi ile salonunuzun profesyonel imajını ve müşteri güvenini artırın."
    }
  ];

  return (
    <div className="prosthetic-nail-website-page">
      <Helmet>
        <title>Protez Tırnak Web Sitesi Tasarımı | Nail Art Stüdyo Sitesi | İstanbul</title>
        <meta name="description" content="İstanbul'daki protez tırnak ve nail art stüdyoları için online randevulu, galeri özellikli, profesyonel web sitesi tasarımı. Sanatınızı sergileyin, 6.500₺'den başlayan fiyatlarla." />
        <meta name="keywords" content="protez tırnak web sitesi, nail art web sitesi, kalıcı oje sitesi, tırnak stüdyosu web tasarım, istanbul protez tırnak, online tırnak randevu" />
        <script type="application/ld+json">{JSON.stringify(prostheticNailServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/guzellik/protez-tirnak-web-sitesi" />
      </Helmet>

      <section className="prosthetic-nail-hero">
        <div className="container">
          <div className="prosthetic-nail-breadcrumb">
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
            <span className="current">Protez Tırnak Web Sitesi</span>
          </div>
          <h1 className="section-title"><strong>Protez Tırnak & Nail Art</strong> Stüdyoları İçin <span style={{color: "#e83e8c", fontWeight: "bold"}}>Profesyonel Web Siteleri</span></h1>
          <p className="section-description">
            Tırnak tasarımlarınızı ve sanatınızı en estetik şekilde sergileyin. Müşterileriniz online randevu alsın, portfolyonuzu incelesin ve size kolayca ulaşsın.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary">Hemen Başlayın</Link>
            <Link to="/portfoy" className="btn-outline">Referanslar</Link>
          </div>
        </div>
      </section>

      <section className="prosthetic-nail-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tırnak Sanatınıza Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                <div className="beauty-salon-feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="prosthetic-nail-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Stüdyonuza Sağlayacağı Avantajlar</h2>
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

      <section className="prosthetic-nail-pricing">
        <div className="container">
           <div className="section-header">
            <h2 className="section-title">Uygun Fiyatlı Web Sitesi Paketleri</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
             <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header">
                <h3 className="beauty-salon-pricing-title">Nail Art Stüdyo Paketi</h3>
                <div className="beauty-salon-pricing-price">6.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Estetik ve Mobil Uyumlu Tasarım</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Sınırsız Fotoğraf Galerisi</li>
                  <li>Hizmet ve Fiyat Listesi</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>1 Yıl Teknik Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button">Satın Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="prosthetic-nail-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
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

      <section className="prosthetic-nail-cta">
        <div className="container">
          <div className="prosthetic-nail-cta-content">
            <h2 className="prosthetic-nail-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="prosthetic-nail-cta-description">
              Salonunuzun potansiyelini ortaya çıkaracak, müşterilerinizi etkileyecek ve randevularınızı artıracak profesyonel bir web sitesine hemen sahip olun. Ücretsiz danışmanlık görüşmesinde, salonunuza özel web çözümlerini konuşalım.
            </p>
            <div className="prosthetic-nail-cta-buttons">
              <Link to="/iletisim" className="btn-primary">ÖZEL TEKLİF ALIN</Link>
              <a href="tel:+902125551234" className="btn-outline">0212 555 12 34</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProstheticNailWebsite; 