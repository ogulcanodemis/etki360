import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './ClinicWebsite.css';

const ClinicWebsite = () => {
  // Schema markup for Clinic Website Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Klinik Web Sitesi Tasarımı ve Geliştirme",
    "description": "Klinikler için özel tasarlanmış, hasta odaklı, randevu sistemi entegreli profesyonel web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi.",
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
        "name": "Kliniklerin neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klinikler için web sitesi, hastaların klinik hakkında bilgi edinmesi, doktorları tanıması, randevu alması ve güven oluşturması için önemlidir. Ayrıca Google'da üst sıralarda yer almanızı sağlayarak yeni hastalar kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Klinik web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klinik web sitesi; mobil uyumlu, hızlı, SEO dostu, randevu sistemi entegreli, doktor profilleri içeren, hizmetlerinizi detaylı anlatan ve güven oluşturan bir yapıda olmalıdır. Ayrıca kolay kullanılabilir ve hasta odaklı bir tasarıma sahip olmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Klinik web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak klinik web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Klinik web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klinik web sitesi fiyatlarımız 9.500 TL'den başlamaktadır. Randevu sistemi, doktor profilleri, hizmet sayfaları ve blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Klinik Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi",
    "description": "Klinikler için online randevu sistemli, doktor profilleri ve hizmet sayfaları içeren profesyonel web sitesi tasarımı. 9.500₺'den başlayan fiyatlarla 3 günde teslim.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    }
  };

  // Clinic Website Features
  const features = [
    {
      title: "Randevu Sistemi",
      description: "Online randevu alma ve yönetim sistemi ile hastalarınıza kolaylık sağlayın",
      icon: "M19 4h-4l-4-4-4 4H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 0l2 2h-4l2-2zm-5 14H5v-2h2v2zm0-5H5v-2h2v2zm0-5H5V6h2v2zm10 10h-8v-2h8v2zm0-5h-8v-2h8v2zm0-5h-8V6h8v2z"
    },
    {
      title: "Doktor Profilleri",
      description: "Doktorlarınızın uzmanlık alanları, eğitimleri ve deneyimlerini öne çıkarın",
      icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
    },
    {
      title: "Hizmet Sayfaları",
      description: "Sunduğunuz sağlık hizmetlerini detaylı olarak tanıtın",
      icon: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.5.5 0 0 0-.48-.41h-3.84a.5.5 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 9.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    },
    {
      title: "Hasta Yorumları",
      description: "Memnun hasta yorumlarını sergileyerek güven oluşturun",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    },
    {
      title: "Blog ve Sağlık İçerikleri",
      description: "Sağlık içerikleriyle hastaları bilgilendirin ve SEO'nuzu güçlendirin",
      icon: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      title: "İletişim ve Konum",
      description: "Hastaların size kolayca ulaşmasını sağlayan iletişim ve harita entegrasyonu",
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    }
  ];

  // Benefits of having a clinic website
  const benefits = [
    {
      title: "Hasta Güveni Oluşturma",
      description: "Profesyonel web sitesi ile hastalarınızın güvenini kazanın"
    },
    {
      title: "7/24 Erişilebilirlik",
      description: "Hastalarınız her an bilgilerinize ve hizmetlerinize erişebilir"
    },
    {
      title: "Online Randevu İmkanı",
      description: "Hastalarınız kolayca online randevu alabilir"
    },
    {
      title: "Google'da Üst Sıralarda Yer Alma",
      description: "SEO uyumlu web sitesi ile yeni hastalar kazanın"
    },
    {
      title: "Rekabet Avantajı",
      description: "Rakiplerinizden bir adım öne geçin"
    },
    {
      title: "Profesyonel İmaj",
      description: "Kurumsal kimliğinizi güçlendirin"
    }
  ];

  return (
    <div className="clinic-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag */}
        <title>Klinik Web Sitesi Tasarımı | Online Randevu Sistemli Sağlık Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Klinik web sitesi tasarımı ve geliştirme hizmetleri. Online randevu sistemi, doktor profilleri, hizmet sayfaları. Klinik web sitesi fiyatları 9.500₺'den başlar. 3 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="klinik web sitesi, hastane web sitesi, doktor web sitesi, sağlık web sitesi, online randevu sistemi, klinik web sitesi tasarımı, tıbbi web sitesi, sağlık web sitesi tasarımı, klinik web sitesi fiyatları" 
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
      <section className="clinic-hero">
        <div className="container">
          <div className="clinic-hero-content">
            <div className="clinic-hero-text">
              <h1 className="clinic-hero-title">
                <strong>Klinik Web Sitesi</strong> - <span className="highlight">Online Randevu Sistemli</span> Profesyonel Çözümler
              </h1>
              <p className="clinic-hero-description">
                <strong>Hastalarınıza online randevu imkanı</strong> sunan, <em>doktorlarınızı ve hizmetlerinizi</em> profesyonelce tanıtan, 
                <strong>Google'da üst sıralarda</strong> yer almanızı sağlayan <strong>klinik web sitesi çözümleri</strong>. 
                <strong>3 gün</strong> içinde teslim ve <strong>%100 müşteri memnuniyeti</strong> garantisi ile <strong>sağlık web sitesi</strong> tasarımı.
              </p>
              <div className="clinic-hero-buttons">
                <Link to="/iletisim" className="btn-primary">
                  Ücretsiz Teklif Alın
                </Link>
                <Link to="/portfoy" className="btn-outline">
                  Örnek Çalışmaları İnceleyin
                </Link>
              </div>
            </div>
            <div className="clinic-hero-visual">
              <div className="clinic-mockup">
                <div className="clinic-mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="clinic-mockup-content">
                  <div className="mockup-nav"></div>
                  <div className="mockup-hero"></div>
                  <div className="mockup-services"></div>
                  <div className="mockup-doctors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clinics Need a Website */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Klinikler Neden Web Sitesi Sahibi Olmalı?</h2>
            <p className="section-description">
              Günümüz dijital dünyasında, <strong>klinikler için profesyonel bir web sitesi</strong> artık bir seçenek değil, <em>bir zorunluluktur</em>. <strong>Hastaların %70'i</strong> klinik seçiminde <strong>online araştırma yapmaktadır</strong>.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Should a Clinic Website Be */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Klinik Web Sitesi Nasıl Olmalı?</h2>
            <p className="section-description">
              <strong>Etkili bir klinik web sitesi</strong> için gerekli olan <em>temel özellikler</em> ve <strong>hasta odaklı</strong> çözümler. <strong>Sağlık sektörüne özel</strong> web tasarımı.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={feature.icon}></path>
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">3 Günde Klinik Web Sitesi Nasıl Yapıyoruz?</h2>
            <p className="section-description">
              <strong>Özel süreç yönetimimiz</strong> ve <strong>sağlık sektörüne özel şablonlarımız</strong> sayesinde <em>hızlı teslimat</em> sağlıyoruz. <strong>Klinik web siteniz</strong> sadece <strong>3 günde</strong> hazır!
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>İhtiyaç Analizi ve Planlama</h3>
                <p>
                  Kliniğinizin ihtiyaçlarını, hedef kitlenizi ve sunduğunuz hizmetleri analiz ederek 
                  web sitenizin yapısını planlıyoruz. Bu aşamada sizden gerekli içerikleri ve görselleri topluyoruz.
                </p>
                <div className="process-time">1. Gün</div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Tasarım ve Geliştirme</h3>
                <p>
                  Sektöre özel hazır şablonlarımızı kullanarak kliniğinize özel tasarımı oluşturuyor ve 
                  tüm içerikleri yerleştiriyoruz. Randevu sistemi, doktor profilleri ve hizmet sayfalarını hazırlıyoruz.
                </p>
                <div className="process-time">2. Gün</div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Test ve Teslim</h3>
                <p>
                  Tüm sayfaları ve fonksiyonları test ediyor, SEO ayarlarını yapıyor ve sitenizi yayına alıyoruz. 
                  Kullanım eğitimi veriyor ve destek sürecinizi başlatıyoruz.
                </p>
                <div className="process-time">3. Gün</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Klinik Web Sitesi Paketlerimiz</h2>
            <p className="section-description">
              <strong>İhtiyaçlarınıza ve bütçenize</strong> uygun <em>çözümler</em> sunuyoruz. <strong>Uygun klinik web sitesi fiyatları</strong> ile <strong>sağlık sektörüne özel</strong> web tasarımı.
            </p>
          </div>

          <div className="clinic-pricing-grid">
            {/* Başlangıç Paketi */}
            <div className="clinic-pricing-card">
              <div className="clinic-pricing-header">
                <h3 className="clinic-pricing-title">Başlangıç Paketi</h3>
                <div className="clinic-pricing-price">
                  <span className="clinic-price-amount">9.500</span>
                  <span className="clinic-price-currency">₺</span>
                </div>
                <p className="clinic-pricing-subtitle">Küçük klinikler için ideal</p>
              </div>
              <div className="clinic-pricing-content">
                <ul className="clinic-pricing-features">
                  <li>5 Sayfalık Web Sitesi</li>
                  <li>Mobil Uyumlu Tasarım</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>İletişim Formu</li>
                  <li>3 Günde Teslim</li>
                </ul>
                <Link to="/iletisim" className="clinic-pricing-btn clinic-btn-basic">
                  Teklif Al
                </Link>
              </div>
            </div>

            {/* Profesyonel Paket */}
            <div className="clinic-pricing-card clinic-featured">
              <div className="clinic-pricing-header">
                <h3 className="clinic-pricing-title">Profesyonel Paket</h3>
                <div className="clinic-pricing-price">
                  <span className="clinic-price-amount">14.500</span>
                  <span className="clinic-price-currency">₺</span>
                </div>
                <p className="clinic-pricing-subtitle">Orta ölçekli klinikler için</p>
              </div>
              <div className="clinic-pricing-content">
                <ul className="clinic-pricing-features">
                  <li>10+ Sayfalık Web Sitesi</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Doktor Profilleri</li>
                  <li>Gelişmiş SEO</li>
                  <li>3 Ay Ücretsiz Destek</li>
                </ul>
                <Link to="/iletisim" className="clinic-pricing-btn clinic-btn-featured">
                  Hemen Başla
                </Link>
              </div>
            </div>

            {/* Kurumsal Paket */}
            <div className="clinic-pricing-card">
              <div className="clinic-pricing-header">
                <h3 className="clinic-pricing-title">Kurumsal Paket</h3>
                <div className="clinic-pricing-price">
                  <span className="clinic-price-amount">24.500</span>
                  <span className="clinic-price-currency">₺</span>
                </div>
                <p className="clinic-pricing-subtitle">Büyük klinikler için</p>
              </div>
              <div className="clinic-pricing-content">
                <ul className="clinic-pricing-features">
                  <li>Sınırsız Sayfa</li>
                  <li>Özel Tasarım</li>
                  <li>Online Ödeme Sistemi</li>
                  <li>Premium SEO</li>
                  <li>6 Ay Ücretsiz Destek</li>
                </ul>
                <Link to="/iletisim" className="clinic-pricing-btn clinic-btn-premium">
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-description">
              <strong>Klinik web sitesi</strong> hakkında merak edilenler ve <em>önemli bilgiler</em>. <strong>Sağlık web sitesi</strong> konusunda tüm sorularınızın cevapları.
            </p>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Kliniklerin neden web sitesi olmalı?</h3>
              <div className="faq-answer">
                <p>
                  Klinikler için web sitesi, hastaların klinik hakkında bilgi edinmesi, doktorları tanıması, 
                  randevu alması ve güven oluşturması için önemlidir. Ayrıca Google'da üst sıralarda yer almanızı 
                  sağlayarak yeni hastalar kazanmanıza yardımcı olur. Günümüzde insanlar sağlık hizmeti almadan önce 
                  genellikle internette araştırma yaparlar ve profesyonel bir web sitesi olmayan klinikler potansiyel 
                  hastaları kaçırabilir.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Klinik web sitesi nasıl olmalı?</h3>
              <div className="faq-answer">
                <p>
                  Klinik web sitesi; mobil uyumlu, hızlı, SEO dostu, randevu sistemi entegreli, doktor profilleri içeren, 
                  hizmetlerinizi detaylı anlatan ve güven oluşturan bir yapıda olmalıdır. Ayrıca kolay kullanılabilir ve 
                  hasta odaklı bir tasarıma sahip olmalıdır. Hastaların ihtiyaç duydukları bilgilere kolayca erişebilmeleri, 
                  iletişim bilgilerinizi rahatça bulabilmeleri ve randevu alabilmeleri çok önemlidir.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Klinik web sitesi ne kadar sürede hazır olur?</h3>
              <div className="faq-answer">
                <p>
                  etki360 olarak klinik web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz 
                  ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz. İlk gün ihtiyaç analizi ve planlama, 
                  ikinci gün tasarım ve geliştirme, üçüncü gün test ve teslim aşamalarını tamamlıyoruz.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Klinik web sitesi maliyeti nedir?</h3>
              <div className="faq-answer">
                <p>
                  Klinik web sitesi fiyatlarımız 9.500 TL'den başlamaktadır. Randevu sistemi, doktor profilleri, hizmet sayfaları 
                  ve blog içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz. İhtiyaçlarınıza ve bütçenize göre 
                  farklı paketlerimiz bulunmaktadır. Ücretsiz danışmanlık ve fiyat teklifi için bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="clinic-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title"><strong>Kliniğiniz İçin</strong> Profesyonel <strong>Web Sitesi</strong> Oluşturalım</h2>
            <p className="cta-description">
              <strong>3 gün</strong> içinde teslim ve <strong>%100 müşteri memnuniyeti garantisi</strong> ile <em>kliniğinize özel</em> <strong>sağlık web sitesi çözümleri</strong>. <strong>Klinik web sitenizi</strong> hemen oluşturalım!
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Teklif Alın
              </Link>
              <Link to="/portfoy" className="btn-outline">
                Örnek Çalışmaları İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicWebsite; 