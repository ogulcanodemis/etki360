import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './HairdresserWebsite.css';

const HairdresserWebsite = () => {
  // SEO için Schema Markup - Service Schema
  const hairdresserServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kuaför Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Kuaför Salonu Web Sitesi", "Berber Web Sitesi", "Saç Tasarım Salonu Web Sitesi"],
    "description": "Kuaförler için özel tasarlanmış, müşteri odaklı, online randevu sistemi entegreli profesyonel web sitesi çözümleri. 3 günde teslim ve %100 müşteri memnuniyeti garantisi. İstanbul'da kuaför ve saç tasarım salonları için SEO uyumlu web siteleri.",
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
      "price": "6900",
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
        "name": "Kuaförlerin neden web sitesi olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kuaförler için web sitesi, potansiyel müşterilerin sizi keşfetmesi, çalışmalarınızı görsel olarak incelemesi, online randevu alması ve güven oluşturması için önemlidir. İstanbul'daki rekabetçi kuaför sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müşteriler kazanmanıza yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Kuaför web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kuaför web sitesi; mobil uyumlu, görsel odaklı, online randevu sistemli, hizmet ve fiyat listesi içeren, öncesi-sonrası galerisi sunan ve müşteri yorumları barındıran bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile semtinizdeki potansiyel müşterilere ulaşmanızı sağlamalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Kuaför web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "etki360 olarak kuaför web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Kuaför web sitesi maliyeti nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'daki kuaförler için web sitesi fiyatlarımız 6.900 TL'den başlamaktadır. Online randevu sistemi, görsel galeri, hizmet ve fiyat listesi içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kuaför Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul",
    "description": "İstanbul'daki kuaförler için online randevu sistemli, görsel odaklı profesyonel web sitesi tasarımı. 6.900₺'den başlayan fiyatlarla 3 günde teslim.",
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
          "name": "Kuaför Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/guzellik/kuafor-web-sitesi"
        }
      ]
    }
  };

  // Kuaför Web Sitesi Özellikleri
  const features = [
    {
      title: "Online Randevu Sistemi",
      description: "Müşterilerinizin kolayca online randevu alabilecekleri ve yönetebilecekleri entegre randevu sistemi",
      icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
    },
    {
      title: "Görsel Galeri",
      description: "Çalışmalarınızı ve saç modellerinizi sergileyebileceğiniz öncesi-sonrası görselleri içeren galeri",
      icon: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
    },
    {
      title: "Hizmet ve Fiyat Listesi",
      description: "Tüm hizmetlerinizi ve fiyatlarınızı şeffaf bir şekilde gösteren detaylı listeler",
      icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    },
    {
      title: "Ekip Tanıtımı",
      description: "Kuaför ekibinizin deneyim ve uzmanlık alanlarını tanıtabileceğiniz profil sayfaları",
      icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"
    },
    {
      title: "Müşteri Yorumları",
      description: "Memnun müşteri yorumlarını sergileyerek güven oluşturun",
      icon: "M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    },
    {
      title: "Sosyal Medya Entegrasyonu",
      description: "Instagram ve diğer sosyal medya hesaplarınızı web sitenize entegre ederek en güncel çalışmalarınızı otomatik olarak sergileyin",
      icon: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
    },
    {
      title: "Lokasyon Bazlı SEO",
      description: "İstanbul içindeki semtinize özel SEO çalışması ile yakın çevrenizdeki müşterilere ulaşın",
      icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z M12 11.5c1.38 0 2.5-1.12 2.5-2.5S13.38 6.5 12 6.5 9.5 7.62 9.5 9s1.12 2.5 2.5 2.5z"
    }
  ];

  // Kuaför Web Sitesi Faydaları
  const benefits = [
    {
      title: "Müşteri Güveni Oluşturma",
      description: "Profesyonel web sitesi ile potansiyel müşterilerinizin güvenini kazanın"
    },
    {
      title: "7/24 Erişilebilirlik",
      description: "Müşterileriniz her an hizmetleriniz hakkında bilgi edinebilir ve randevu alabilir"
    },
    {
      title: "Yeni Müşteriler Kazanma",
      description: "İstanbul'da Google aramalarda üst sıralarda çıkarak yeni müşteriler edinebilirsiniz"
    },
    {
      title: "Zaman Tasarrufu",
      description: "Online randevu sistemi ile telefon trafiğini azaltın ve zamanınızı verimli kullanın"
    },
    {
      title: "Görsel Portföy Sunma",
      description: "Saç tasarım çalışmalarınızı potansiyel müşterilere etkili şekilde gösterin"
    },
    {
      title: "İstanbul'da Rekabet Avantajı",
      description: "Dijital varlığınızla rakiplerinizden bir adım öne geçin"
    }
  ];

  return (
    <div className="hairdresser-website-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Kuaför Web Sitesi Tasarımı | Online Randevu Sistemli | Saç Tasarım Stüdyoları</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Saç tasarım sanatçıları ve kuaförler için özel tasarlanmış, randevu sistemli, görsel odaklı profesyonel web sitesi çözümleri. Çalışmalarınızı sergileyin, müşteri kazanın. 6.900₺'den başlayan fiyatlarla 7 günde teslim ve %100 memnuniyet garantisi." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="kuaför web sitesi, kuaför salonu web sitesi, berber web sitesi, saç tasarım web sitesi, kuaför randevu sistemi, kuaför seo, istanbul kuaför web sitesi, saç tasarım portfolyo sitesi, kuaför fiyat listesi, kuaför galeri sayfası" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://etki360.com/sektorel-cozumler/guzellik/kuafor-web-sitesi" />
        <meta property="og:title" content="Kuaför Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul" />
        <meta property="og:description" content="İstanbul'daki kuaförler için online randevu sistemli, görsel odaklı profesyonel web sitesi tasarımı." />
        <meta property="og:image" content="https://etki360.com/images/og/kuafor-web-sitesi.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kuaför Web Sitesi Tasarımı | Online Randevu Sistemli Web Sitesi | İstanbul" />
        <meta name="twitter:description" content="İstanbul'daki kuaförler için online randevu sistemli, görsel odaklı profesyonel web sitesi tasarımı." />
        <meta name="twitter:image" content="https://etki360.com/images/og/kuafor-web-sitesi.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/guzellik/kuafor-web-sitesi" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(hairdresserServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hairdresser-hero">
        <div className="container">
          <div className="hairdresser-breadcrumb">
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
            <span className="current">Kuaför Web Sitesi</span>
          </div>
          <div className="hairdresser-hero-content">
            <div className="hairdresser-hero-text">
              <h1 className="hairdresser-hero-title">
                <strong>Saç Tasarım Sanatçıları ve</strong> <span style={{color: "#d53f8c", fontWeight: "bold"}}><strong>Kuaförler İçin</strong></span> <strong>Web Sitesi</strong>
              </h1>
              <p className="hairdresser-hero-description">
                <strong>Saç tasarım stüdyonuz</strong> için <em>modern ve zarif</em> bir dijital vitrin oluşturun. <strong>Online randevu sistemi</strong>, <em>görsel odaklı galeri</em> ve <strong>mobil uyumlu tasarım</strong> ile müşterilerinizi etkileyecek, <em>zaman kazandıracak</em> web çözümleri. <strong>Google aramalarda üst sıralarda</strong> yer alarak <em>yeni müşteriler kazanın</em>. <strong>6.900₺'den başlayan</strong> fiyatlarla, <strong>7 gün içinde</strong> teslim.
              </p>
              <div className="hairdresser-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
            <div className="hairdresser-hero-visual">
              <div className="hairdresser-mockup">
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
      <section className="hairdresser-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Kuaför Web Sitesi</strong> Özellikleri</h2>
            <p className="section-description">
              <em>Müşteri odaklı</em> ve <strong>profesyonel kuaför web sitesi</strong> çözümlerimizin sunduğu özellikler
            </p>
          </div>

          <div className="hairdresser-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="hairdresser-feature-card">
                <div className="hairdresser-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="hairdresser-feature-title"><strong>{feature.title}</strong></h3>
                <p className="hairdresser-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="hairdresser-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Mutlu Müşterilerimizin</strong> Yorumları</h2>
            <p className="section-description">
              <em>Kuaför web sitesi hizmetimizden</em> <strong>memnun kalan işletmeler</strong> ne diyor?
            </p>
          </div>

          <div className="hairdresser-testimonials-grid">
            <div className="hairdresser-testimonial-card">
              <div className="hairdresser-testimonial-content">
                <p>"etki360 ile çalışmak bizim için harika bir deneyimdi. Web sitemiz açıldıktan sonra online randevularımız %60 arttı ve yeni müşteri kazanımımız önemli ölçüde yükseldi. Özellikle mobil uyumluluk konusundaki hassasiyetleri çok değerli."</p>
              </div>
              <div className="hairdresser-testimonial-author">
                <strong>Ayşe Yılmaz</strong> - Kadıköy Hair Design
              </div>
            </div>

            <div className="hairdresser-testimonial-card">
              <div className="hairdresser-testimonial-content">
                <p>"Salonumuzun web sitesini yaptırdıktan sonra sosyal medyada da daha aktif olmaya başladık. Online varlığımız güçlendi ve müşterilerimiz randevu alırken artık çok daha az telefon trafiği yaşıyoruz. Her şey için teşekkürler!"</p>
              </div>
              <div className="hairdresser-testimonial-author">
                <strong>Mehmet Kaya</strong> - Beşiktaş Style Studio
              </div>
            </div>

            <div className="hairdresser-testimonial-card">
              <div className="hairdresser-testimonial-content">
                <p>"Profesyonel bir web sitesine sahip olmak markamızı bir adım öne taşıdı. Özellikle çalışmalarımızı sergilediğimiz galeri bölümü, müşterilerimizin bize güvenmesini sağlıyor. 3 günde teslim sözünüzü tuttunuz, teşekkür ederiz!"</p>
              </div>
              <div className="hairdresser-testimonial-author">
                <strong>Zeynep Demir</strong> - Şişli Saç Tasarım
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="hairdresser-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Web Sitesinin</strong> Kuaförler İçin Faydaları</h2>
            <p className="section-description">
              <strong>İstanbul'daki profesyonel kuaförler</strong> için <em>web sitesinin sunduğu avantajlar</em>
            </p>
          </div>

          <div className="hairdresser-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="hairdresser-benefit-card">
                <h3 className="hairdresser-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="hairdresser-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="hairdresser-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><strong>Kuaför Web Sitesi</strong> Paketleri</h2>
            <p className="section-description">
              <em>İhtiyaçlarınıza ve bütçenize uygun</em> <strong>kuaför web sitesi</strong> çözümleri
            </p>
          </div>

          <div className="hairdresser-pricing-grid">
            <div className="hairdresser-pricing-card">
              <div className="hairdresser-pricing-header">
                <h3 className="hairdresser-pricing-title">Başlangıç Paketi</h3>
                <div className="hairdresser-pricing-price">
                  6.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="hairdresser-pricing-features">
                <ul>
                  <li>Mobil Uyumlu Tasarım</li>
                  <li>5 Sayfalık Web Sitesi</li>
                  <li>Temel SEO Optimizasyonu</li>
                  <li>İletişim Formu</li>
                  <li>Görsel Galeri</li>
                  <li>Hizmet ve Fiyat Listesi</li>
                  <li>Whatsapp Entegrasyonu</li>
                  <li>SSL Sertifikası</li>
                  <li>1 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="hairdresser-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="hairdresser-pricing-card">
              <div className="hairdresser-pricing-header">
                <h3 className="hairdresser-pricing-title">Profesyonel Paket</h3>
                <div className="hairdresser-pricing-price">
                  10.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="hairdresser-pricing-features">
                <ul>
                  <li>Özel Tasarım</li>
                  <li>10 Sayfalık Web Sitesi</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Kapsamlı SEO Optimizasyonu</li>
                  <li>Öncesi-Sonrası Galeri</li>
                  <li>Ekip Üyeleri Tanıtımı</li>
                  <li>Hizmet ve Fiyat Sayfası</li>
                  <li>İstanbul İçi Lokasyon Bazlı SEO</li>
                  <li>Sosyal Medya Entegrasyonu</li>
                  <li>2 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="hairdresser-pricing-button">Hemen Başvurun</Link>
            </div>

            <div className="hairdresser-pricing-card">
              <div className="hairdresser-pricing-header">
                <h3 className="hairdresser-pricing-title">Premium Paket</h3>
                <div className="hairdresser-pricing-price">
                  17.900 ₺ <span>+ KDV</span>
                </div>
              </div>
              <div className="hairdresser-pricing-features">
                <ul>
                  <li>Premium Özel Tasarım</li>
                  <li>Sınırsız Sayfa</li>
                  <li>Gelişmiş Randevu Sistemi</li>
                  <li>Ekip Üyeleri Yönetimi</li>
                  <li>Müşteri Üyelik Sistemi</li>
                  <li>Gelişmiş Görsel Galeri</li>
                  <li>Online Ödeme Sistemi</li>
                  <li>Çoklu Dil Desteği</li>
                  <li>SEO Danışmanlığı (6 Ay)</li>
                  <li>Google Ads Yönetimi (3 Ay)</li>
                  <li>Müşteri Değerlendirme Sistemi</li>
                  <li>Mobil Uygulama</li>
                  <li>3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="hairdresser-pricing-button">Hemen Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="hairdresser-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sık Sorulan Sorular</h2>
            <p className="section-description">
              <strong>Kuaför web sitesi</strong> hakkında merak edilenler
            </p>
          </div>

          <div className="hairdresser-faq-grid">
            <div className="hairdresser-faq-item">
              <h3 className="hairdresser-faq-question">Kuaförlerin neden web sitesi olmalı?</h3>
              <p className="hairdresser-faq-answer">
                Kuaförler için web sitesi, potansiyel müşterilerin sizi keşfetmesi, çalışmalarınızı görsel olarak incelemesi, online randevu alması ve güven oluşturması için önemlidir. İstanbul'daki rekabetçi kuaför sektöründe öne çıkmanızı ve Google'da üst sıralarda yer almanızı sağlayarak yeni müşteriler kazanmanıza yardımcı olur.
              </p>
            </div>

            <div className="hairdresser-faq-item">
              <h3 className="hairdresser-faq-question">Kuaför web sitesi nasıl olmalı?</h3>
              <p className="hairdresser-faq-answer">
                Kuaför web sitesi; mobil uyumlu, görsel odaklı, online randevu sistemli, hizmet ve fiyat listesi içeren, öncesi-sonrası galerisi sunan ve müşteri yorumları barındıran bir yapıda olmalıdır. İstanbul'da lokasyon bazlı SEO çalışması ile semtinizdeki potansiyel müşterilere ulaşmanızı sağlamalıdır.
              </p>
            </div>

            <div className="hairdresser-faq-item">
              <h3 className="hairdresser-faq-question">Kuaför web sitesi ne kadar sürede hazır olur?</h3>
              <p className="hairdresser-faq-answer">
                etki360 olarak kuaför web sitesi projelerinizi sadece 3 gün içinde teslim ediyoruz. Özel süreç yönetimimiz ve sektöre özel hazır şablonlarımız sayesinde hızlı teslimat sağlıyoruz.
              </p>
            </div>

            <div className="hairdresser-faq-item">
              <h3 className="hairdresser-faq-question">Kuaför web sitesi maliyeti nedir?</h3>
              <p className="hairdresser-faq-answer">
                İstanbul'daki kuaförler için web sitesi fiyatlarımız 6.900 TL'den başlamaktadır. Online randevu sistemi, görsel galeri, hizmet ve fiyat listesi içeren tam kapsamlı bir web sitesi için uygun fiyatlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hairdresser-cta">
        <div className="container">
          <div className="hairdresser-cta-content">
            <h2 className="hairdresser-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="hairdresser-cta-description">
              Salonunuzun potansiyelini ortaya çıkaracak, müşterilerinizi etkileyecek ve randevularınızı artıracak profesyonel bir web sitesine hemen sahip olun. Ücretsiz danışmanlık görüşmesinde, salonunuza özel web çözümlerini konuşalım.
            </p>
            <div className="hairdresser-cta-buttons">
              <Link to="/iletisim" className="btn-primary">ÖZEL TEKLİF ALIN</Link>
              <a href="tel:+902125551234" className="btn-outline">0212 555 12 34</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairdresserWebsite; 