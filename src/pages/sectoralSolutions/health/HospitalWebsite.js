import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HospitalWebsite.css';

const HospitalWebsite = () => {
  // Body'ye sayfa sınıfını ekle
  useEffect(() => {
    document.body.classList.add('hospital-page');
    return () => {
      document.body.classList.remove('hospital-page');
    };
  }, []);

  // Schema markup for Hospital Website Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hastane Web Sitesi Tasarımı ve Geliştirme",
    "description": "Hastaneler için özel tasarlanmış, hasta odaklı, online randevu sistemi entegreli profesyonel web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi.",
    "provider": {
      "@type": "Organization",
      "name": "etki360",
      "url": "https://etki360.com"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "category": "Sağlık Sektörü Web Çözümleri",
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "offers": {
      "@type": "Offer",
      "price": "15000",
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
        "name": "Hastanelerin neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hastaneler için web sitesi, hastaların hastane hakkında bilgi edinmesi, doktorları tanıması, randevu alması ve güven oluşturması için önemlidir. Ayrıca Google'da üst sıralarda yer almanızı sağlayarak yeni hastalar kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Hastane web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hastane web sitesi; mobil uyumlu, hızlı, SEO dostu, randevu sistemi entegreli, doktor profilleri içeren, bölümlerinizi detaylı anlatan ve güven oluşturan bir yapıda olmalıdır. Ayrıca kolay kullanılabilir ve hasta odaklı bir tasarıma sahip olmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Hastane web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak hastane web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Hastane web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hastane web sitesi fiyatlarımız 15.000 TL'den başlamaktadır. Online randevu sistemi, doktor profilleri, bölüm sayfaları ve blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hastane Web Sitesi Tasarımı | Online Randevu Sistemli Hastane Web Sitesi",
    "description": "Hastaneler için online randevu sistemli, doktor profilleri ve bölüm sayfaları içeren profesyonel web sitesi tasarımı. 15.000₺'den başlayan fiyatlarla 3 günde teslim.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    }
  };

  // Hospital Website Features
  const features = [
    {
      title: "Online Randevu Sistemi",
      description: "Hastalarınızın kolayca randevu alabilmesini sağlayan, doktor ve bölüm bazlı entegre randevu sistemi",
      icon: "M19 4h-4l-4-4-4 4H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 0l2 2h-4l2-2zm-5 14H5v-2h2v2zm0-5H5v-2h2v2zm0-5H5V6h2v2zm10 10h-8v-2h8v2zm0-5h-8v-2h8v2zm0-5h-8V6h8v2z"
    },
    {
      title: "Doktor Profilleri",
      description: "Uzman doktorlarınızı detaylı profil sayfaları ile tanıtın, uzmanlık alanlarını ve özgeçmişlerini vurgulayın",
      icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
    },
    {
      title: "Bölüm ve Hizmetler",
      description: "Hastanenizin bölümlerini ve sunduğunuz tüm sağlık hizmetlerini detaylı olarak tanıtın",
      icon: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.5.5 0 0 0-.48-.41h-3.84a.5.5 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 9.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    },
    {
      title: "Mobil Uyumlu Tasarım",
      description: "Tüm cihazlarda (telefon, tablet, bilgisayar) mükemmel görünen responsive tasarım",
      icon: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
    },
    {
      title: "SEO Optimizasyonu",
      description: "Google'da üst sıralarda yer almanızı sağlayacak arama motoru optimizasyonu",
      icon: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    },
    {
      title: "Sağlık Blogu",
      description: "Hasta bilgilendirme amaçlı, SEO dostu içerikler paylaşabileceğiniz blog sayfası",
      icon: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    }
  ];

  // Benefits of having a hospital website
  const benefits = [
    {
      title: "Hasta Memnuniyeti",
      description: "Online randevu sistemi ve kolay ulaşılabilir bilgiler ile hasta memnuniyetini artırın"
    },
    {
      title: "Operasyonel Verimlilik",
      description: "Telefon trafiğini azaltın, randevu süreçlerini otomatikleştirerek personel verimliliğini artırın"
    },
    {
      title: "Kurumsal İtibar",
      description: "Profesyonel web siteniz ile kurumsal imajınızı güçlendirin ve güven oluşturun"
    },
    {
      title: "Yeni Hasta Kazanımı",
      description: "Arama motorlarında görünürlüğünüzü artırarak daha çok hastaya ulaşın"
    },
    {
      title: "Bilgilendirme",
      description: "Hastalara tedaviler ve sağlık hizmetleri hakkında detaylı bilgi verin"
    },
    {
      title: "Rekabet Avantajı",
      description: "Diğer hastanelerden bir adım öne geçin ve fark yaratın"
    }
  ];

  // Hospital departments to highlight
  const departments = [
    {
      title: "Kardiyoloji",
      description: "Kalp ve damar hastalıkları tanı, tedavi ve takip hizmetleri",
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    },
    {
      title: "Nöroloji",
      description: "Beyin, sinir sistemi hastalıkları ve nörolojik bozuklukların tedavisi",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
    },
    {
      title: "Ortopedi",
      description: "Kemik, eklem, kas ve iskelet sistemi hastalıklarının tedavisi",
      icon: "M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"
    },
    {
      title: "Genel Cerrahi",
      description: "Cerrahi müdahale gerektiren hastalıkların tanı ve tedavisi",
      icon: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"
    }
  ];

  return (
    <div className="hospital-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag */}
        <title>Hastane Web Sitesi Tasarımı | Online Randevu Sistemli Hastane Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Hastane web sitesi tasarımı ve geliştirme hizmetleri. Online randevu sistemi, doktor profilleri, bölüm sayfaları. Hastane web sitesi fiyatları 15.000₺'den başlar. 3 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="hastane web sitesi, hastane web sitesi tasarımı, sağlık kurumu web sitesi, online randevu sistemi, hastane web sitesi fiyatları, özel hastane web sitesi" 
        />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hospital-hero">
        <div className="container">
          <div className="hospital-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörler</Link> / <Link to="/sektorel-cozumler/saglik">Sağlık</Link> / <span>Hastane Web Sitesi</span>
          </div>
          <div className="hospital-hero-content">
            <div className="hospital-hero-text">
              <h1 className="hospital-hero-title">
                <strong>Hastane Web Sitesi</strong> ile <span className="sectoral-highlight">Hasta Memnuniyetini</span> Artırın
              </h1>
              <p className="hospital-hero-description">
                <strong>Özel hastaneler</strong> ve <strong>sağlık kurumları</strong> için <em>hasta odaklı</em>, <strong>online randevu sistemi</strong> entegre edilmiş ve <strong>kurumsal kimliğinizi</strong> yansıtan <strong>profesyonel web sitesi</strong> çözümleri. <strong>15.000₺</strong>'den başlayan fiyatlarla <em>SEO uyumlu</em> hastane web sitesi.
              </p>
              <div className="hospital-hero-buttons">
                <Link to="/iletisim" className="btn-primary">
                  Ücretsiz Teklif Alın
                </Link>
                <Link to="/portfoy" className="btn-outline">
                  Örnek Çalışmaları İnceleyin
                </Link>
              </div>
            </div>
            <div className="hospital-hero-visual">
              <div className="hospital-mockup">
                <img src="/assets/images/portfolio/estetik-klinik-sablon-etki360.png" alt="Hastane Web Sitesi Tasarımı" className="mockup-image" />
                <div className="mockup-overlay">
                  <div className="overlay-text">
                    <span className="overlay-highlight">3 Gün</span> İçinde Teslim
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="hospital-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hastane Web Sitesi <span className="sectoral-highlight">Özellikleri</span></h2>
            <p className="section-subtitle">Hastanız için özel geliştirilen web sitesi çözümlerinde neler sunuyoruz?</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="hospital-departments">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hastane <span className="sectoral-highlight">Bölümleri</span></h2>
            <p className="section-subtitle">Hastanenizin bölümlerini ve uzmanlık alanlarınızı detaylı tanıtın</p>
          </div>
          <div className="departments-grid">
            {departments.map((department, index) => (
              <div className="department-card" key={index}>
                <div className="department-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path d={department.icon} />
                  </svg>
                </div>
                <h3 className="department-title">{department.title}</h3>
                <p className="department-description">{department.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="hospital-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hastane Web Sitesinin <span className="sectoral-highlight">Avantajları</span></h2>
            <p className="section-subtitle">Hastanenize özel web sitesi ile elde edeceğiniz faydalar</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hospital-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Hastaneniz için <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Sahibi Olun</h2>
            <p className="cta-description">
              Online randevu sistemi, doktor profilleri ve SEO optimizasyonu ile yeni hastalar kazanın. 
              15.000₺'den başlayan fiyatlarla 3 gün içinde teslim.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">Hemen Teklif Alın</Link>
              <a href="tel:+905444882303" className="btn-outline">Hemen Arayın</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="hospital-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sık Sorulan <span className="sectoral-highlight">Sorular</span></h2>
            <p className="section-subtitle">Hastane web sitesi hakkında merak edilenler</p>
          </div>
          <div className="faq-content">
            <div className="faq-item">
              <h3 className="faq-question">Hastanelerin neden web sitesi olmalı?</h3>
              <p className="faq-answer">
                Hastaneler için web sitesi, hastaların hastane hakkında bilgi edinmesi, doktorları tanıması, 
                randevu alması ve güven oluşturması için önemlidir. Ayrıca Google'da üst sıralarda yer almanızı 
                sağlayarak yeni hastalar kazanmanıza yardımcı olur.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Hastane web sitesi nasıl olmalı?</h3>
              <p className="faq-answer">
                Hastane web sitesi; mobil uyumlu, hızlı, SEO dostu, randevu sistemi entegreli, doktor profilleri içeren, 
                bölümlerinizi detaylı anlatan ve güven oluşturan bir yapıda olmalıdır. Ayrıca kolay kullanılabilir 
                ve hasta odaklı bir tasarıma sahip olmalıdır.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Hastane web sitesi ne kadar sürede hazır olur?</h3>
              <p className="faq-answer">
                etki360 olarak hastane web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. 
                Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Hastane web sitesi maliyeti nedir?</h3>
              <p className="faq-answer">
                Hastane web sitesi fiyatlarımız 15.000 TL'den başlamaktadır. Online randevu sistemi, 
                doktor profilleri, bölüm sayfaları ve blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="hospital-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Hastane Web Sitesi <span className="sectoral-highlight">Teklifi</span> Alın</h2>
              <p className="contact-description">
                Hastaneniz için profesyonel, etkileyici ve hastalarınıza değer katan bir web sitesi için 
                hemen bizimle iletişime geçin. Size özel teklif sunalım.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <h3 className="method-title">E-posta</h3>
                    <p className="method-value">info@etki360.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="method-details">
                    <h3 className="method-title">Telefon</h3>
                    <p className="method-value">+90 (544) 488 23 03</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Ad Soyad" className="form-control" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="E-posta Adresi" className="form-control" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Telefon Numarası" className="form-control" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Mesajınız" className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn-primary btn-full">Teklif İste</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalWebsite; 