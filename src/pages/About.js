import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Organization Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "etki360",
    "alternateName": "etki360 Web Tasarım & Dijital Çözümler",
    "url": "https://etki360.com",
    "logo": "https://etki360.com/logo.png",
    "description": "Dijitalde güçlü bir varlık oluşturmak isteyen işletmelere modern, hızlı ve kullanıcı odaklı web çözümleri sunuyoruz.",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "etki360 Kurucu Ekibi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR",
      "addressRegion": "İstanbul"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-155-33-15",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-544-488-23-03",
        "contactType": "technical support",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR"
      }
    ],
    "email": "info@etki360.com",
    "sameAs": [
      "https://www.linkedin.com/company/etki360/",
      "https://www.instagram.com/etki360/",
      "https://www.facebook.com/profile.php?id=61576903310978"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Turkey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Tasarım ve Dijital Hizmetler",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kurumsal Web Sitesi",
            "description": "Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Ticaret Çözümleri",
            "description": "Ödeme entegrasyonları ve yönetim paneli ile eksiksiz e-ticaret siteleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page",
            "description": "Dönüşüm odaklı, hızlı yüklenen tek sayfalık tanıtım siteleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Performans",
            "description": "Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bakım & Destek",
            "description": "7/24 teknik destek ve sürekli bakım hizmetleri"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5-10"
    },
    "knowsAbout": [
      "Web Tasarım",
      "E-Ticaret",
      "SEO",
      "Dijital Pazarlama",
      "React",
      "PHP",
      "WordPress",
      "Landing Page",
      "Mobil Uyumlu Tasarım",
      "Performans Optimizasyonu"
    ],
    "award": [
      "100+ Başarılı Proje",
      "%100 Müşteri Memnuniyeti",
      "7/24 Destek Hizmeti"
    ],
    "slogan": "Siz işinize odaklanın, dijital altyapınızı biz kurarız.",
    "mission": "Dijitalde güçlü bir varlık oluşturmak isteyen işletmelere modern, hızlı ve kullanıcı odaklı web çözümleri sunmak.",
    "values": [
      "Hız & Performans",
      "Güvenilirlik", 
      "Kalite",
      "Müşteri Odaklılık"
    ],
    "targetAudience": [
      "KOBİ'ler",
      "Yeni Girişimler",
      "Ajanslar",
      "Freelancer'lar",
      "E-ticaret İşletmeleri"
    ]
  };

  return (
    <div className="about-page">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Hero Section */}
      <section className="about-page-hero">
        <div className="container">
          <header className="about-hero-content">
            <h1 className="about-hero-title">
              Dijital Dünyada <span className="about-highlight">Güçlü Varlığınız</span> İçin Buradayız
            </h1>
            <p className="about-hero-description">
              etki360 olarak, işletmenizin dijitaldeki vitrinini profesyonelce tasarlayan, 
              sürdürülebilir ve performans odaklı çözümler sunuyoruz.
            </p>
          </header>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Misyonumuz</h2>
              <p className="mission-description">
                Dijitalde güçlü bir varlık oluşturmak isteyen işletmelere modern, hızlı ve 
                kullanıcı odaklı web çözümleri sunmak. Amacımız, her ölçekteki firmanın 
                çevrimiçi dünyada profesyonel bir iz bırakmasını sağlamaktır.
              </p>
              <blockquote className="mission-quote">
                "Siz işinize odaklanın, dijital altyapınızı biz kurarız."
              </blockquote>
            </div>
            <div className="mission-visual">
              <div className="visual-card">
                <div className="card-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Kalite Odaklı Yaklaşım</h3>
                <p>Her projede mükemmellik arayışı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-description">
              etki360'ı farklı kılan temel değerler ve yaklaşımlarımız
            </p>
          </header>
          <div className="values-grid">
            <article className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="value-title">Hız & Performans</h3>
              <p className="value-description">
                Yüksek performanslı, hızlı yüklenen web siteleri ile kullanıcı deneyimini 
                en üst seviyede tutuyoruz.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="value-title">Güvenilirlik</h3>
              <p className="value-description">
                Projelerinizi zamanında teslim ediyor, sürekli destek ve bakım hizmeti 
                sunuyoruz.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="value-title">Kalite</h3>
              <p className="value-description">
                Modern teknolojiler ve en iyi uygulamalar ile her projede mükemmellik 
                arayışındayız.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z"/>
                </svg>
              </div>
              <h3 className="value-title">Müşteri Odaklılık</h3>
              <p className="value-description">
                İhtiyaçlarınızı anlıyor, size özel çözümler geliştiriyor ve sürekli 
                iletişim halinde kalıyoruz.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="target-section">
        <div className="container">
          <div className="target-content">
            <div className="target-text">
              <h2 className="section-title">Kimlerle Çalışıyoruz?</h2>
              <p className="target-description">
                Dijital dünyada güçlü bir varlık oluşturmak isteyen her ölçekteki 
                işletmeye hizmet veriyoruz.
              </p>
              <ul className="target-list">
                <li>
                  <strong>KOBİ'ler:</strong> Büyüme hedefindeki küçük ve orta ölçekli işletmeler
                </li>
                <li>
                  <strong>Yeni Girişimler:</strong> Dijital dünyaya adım atan startup'lar
                </li>
                <li>
                  <strong>Ajanslar:</strong> White-label hizmetlerle iş ortaklıkları
                </li>
                <li>
                  <strong>Freelancer'lar:</strong> Kişisel marka oluşturmak isteyenler
                </li>
                <li>
                  <strong>E-ticaret:</strong> Online satışa geçmek isteyen fiziksel mağazalar
                </li>
              </ul>
            </div>
            <div className="target-visual">
              <div className="stats-card">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Mutlu Müşteri</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Tamamlanan Proje</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Destek Hizmeti</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">%100</span>
                  <span className="stat-label">Müşteri Memnuniyeti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Çalışma Yaklaşımımız</h2>
            <p className="section-description">
              Her projede izlediğimiz sistematik süreç
            </p>
          </header>
          <div className="approach-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Analiz & Planlama</h3>
                <p>İhtiyaçlarınızı detaylı analiz ediyor, proje planını oluşturuyoruz.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Tasarım & Geliştirme</h3>
                <p>Modern teknolojilerle kullanıcı odaklı tasarım ve geliştirme süreci.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Test & Optimizasyon</h3>
                <p>Kapsamlı testler ve performans optimizasyonları ile mükemmellik.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Teslim & Destek</h3>
                <p>Proje teslimi sonrası sürekli destek ve bakım hizmetleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Birlikte Çalışmaya Hazır mısınız?</h2>
            <p className="cta-description">
              Dijital dünyadaki yerinizi alın. Projenizi hayata geçirmek için 
              hemen iletişime geçin.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Teklif Alın
              </Link>
              <Link to="/portfoy" className="btn-secondary">
                Projelerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 