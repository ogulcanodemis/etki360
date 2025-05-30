import React from 'react';
import { Link } from 'react-router-dom';
import './SectoralSolutions.css';

const SectoralSolutions = () => {
  // Schema markup for Sectoral Solutions Page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sektörel Web Çözümleri - etki360",
    "description": "Farklı sektörlere özel web çözümleri. Sektörünüzün ihtiyaçlarına uygun, özelleştirilmiş web siteleri ile dijital dünyadaki yerinizi alın.",
    "url": "https://etki360.com/sektorel-cozumler",
    "inLanguage": "tr-TR",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360",
      "url": "https://etki360.com"
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
        }
      ]
    }
  };

  // Sectoral Solutions List with Schema Markup
  const sectoralListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sektörel Web Çözümleri",
    "description": "Farklı sektörlere özel web sitesi çözümleri",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Sağlık Sektörü Web Çözümleri",
        "url": "https://etki360.com/sektorel-cozumler/saglik"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Nakliyat Sektörü Web Çözümleri",
        "url": "https://etki360.com/sektorel-cozumler/nakliyat"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hizmet Sektörü Web Çözümleri",
        "url": "https://etki360.com/sektorel-cozumler/hizmet"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "İnşaat ve Dekorasyon Web Çözümleri",
        "url": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon"
      }
    ]
  };

  // Sektör grupları ve alt sayfaları
  const sectors = [
    {
      id: 'saglik',
      title: 'Sağlık Sektörü',
      icon: 'M19 8h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-9 0H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM5 4h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm14 16H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z',
      description: 'Sağlık sektöründeki işletmeler için özel web çözümleri. Hasta odaklı, güven veren ve profesyonel web siteleri.',
      solutions: [
        {
          id: 'klinik-web-sitesi',
          title: 'Klinik Web Sitesi',
          description: 'Klinikler için modern, hasta odaklı web sitesi çözümleri',
          url: '/sektorel-cozumler/saglik/klinik-web-sitesi'
        },
        {
          id: 'sac-ekim-klinigi',
          title: 'Saç Ekim Kliniği Web Sitesi',
          description: 'Saç ekim klinikleri için özel tasarlanmış, dönüşüm odaklı web siteleri',
          url: '/sektorel-cozumler/saglik/sac-ekim-klinigi'
        }
      ]
    },
    {
      id: 'nakliyat',
      title: 'Nakliyat Sektörü',
      icon: 'M3 8h14v7H3z M21 12h-2V8h-1V6h3v6z M21 12v7h-4v-7 M3 8l-2 4v7h2v-7 M1 19h2 M17 19h4',
      description: 'Nakliyat ve lojistik firmaları için özel web çözümleri. Müşteri güveni oluşturan, hizmet odaklı web siteleri.',
      solutions: [
        {
          id: 'nakliye-firmasi',
          title: 'Nakliyat Firması Web Sitesi',
          description: 'Nakliyat firmaları için profesyonel, güven veren web sitesi çözümleri',
          url: '/sektorel-cozumler/nakliyat/nakliye-firmasi'
        },
        {
          id: 'kargo-firmasi',
          title: 'Kargo Firması Web Sitesi',
          description: 'Kargo firmaları için takip sistemi entegreli web siteleri',
          url: '/sektorel-cozumler/nakliyat/kargo-firmasi'
        }
      ]
    },
    {
      id: 'hizmet',
      title: 'Hizmet Sektörü',
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M7.5 4.21l4.5 2.6 4.5-2.6 M7.5 19.79V14.6L3 12 M12 21.8V16.6 M16.5 19.79V14.6L21 12 M3.27 6.96L12 12.01l8.73-5.05 M12 12.01v5.59',
      description: 'Hizmet sektöründeki işletmeler için özel web çözümleri. Müşterilerinize hızlı ulaşmanızı sağlayan web siteleri.',
      solutions: [
        {
          id: 'cilingir',
          title: 'Çilingir Web Sitesi',
          description: 'Çilingir hizmetleri için acil ulaşım odaklı web sitesi çözümleri',
          url: '/sektorel-cozumler/hizmet/cilingir'
        },
        {
          id: 'tamir-servisi',
          title: 'Tamir Servisi Web Sitesi',
          description: 'Tamir ve servis hizmetleri için özel tasarlanmış web siteleri',
          url: '/sektorel-cozumler/hizmet/tamir-servisi'
        },
        {
          id: 'cekici-hizmeti',
          title: 'Çekici Hizmeti Web Sitesi',
          description: 'Çekici ve yol yardım hizmetleri için acil erişim odaklı web siteleri',
          url: '/sektorel-cozumler/hizmet/cekici-hizmeti'
        }
      ]
    },
    {
      id: 'insaat-dekorasyon',
      title: 'İnşaat ve Dekorasyon',
      icon: 'M2 22h20 M2 11l10-7 10 7 M4 22V9 M20 22V9 M12 4v18 M15 22V9 M9 22V9 M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
      description: 'İnşaat ve dekorasyon sektöründeki işletmeler için özel web çözümleri. Portföyünüzü sergileyebileceğiniz etkileyici web siteleri.',
      solutions: [
        {
          id: 'mimar',
          title: 'Mimar Web Sitesi',
          description: 'Mimarlar için portföy odaklı, etkileyici web sitesi çözümleri',
          url: '/sektorel-cozumler/insaat-dekorasyon/mimar'
        },
        {
          id: 'boya-badana',
          title: 'Boya Badana Hizmeti Web Sitesi',
          description: 'Boya badana hizmetleri için özel tasarlanmış web siteleri',
          url: '/sektorel-cozumler/insaat-dekorasyon/boya-badana'
        },
        {
          id: 'dekorasyon',
          title: 'Dekorasyon Firması Web Sitesi',
          description: 'Dekorasyon firmaları için görsel odaklı, etkileyici web siteleri',
          url: '/sektorel-cozumler/insaat-dekorasyon/dekorasyon'
        }
      ]
    }
  ];

  return (
    <div className="sectoral-solutions-page">
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(sectoralListSchema)}
      </script>

      {/* Hero Section */}
      <section className="sectoral-hero">
        <div className="container">
          <div className="sectoral-hero-content">
            <h1 className="sectoral-hero-title">
              Sektörünüze Özel <span className="highlight">Web Çözümleri</span>
            </h1>
            <p className="sectoral-hero-description">
              Her sektörün kendine has ihtiyaçları vardır. Sektörünüze özel tasarlanmış web çözümleriyle 
              dijital dünyada fark yaratın. 3 gün içinde teslim ve %100 müşteri memnuniyeti garantisi.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sectoral Solutions */}
      <section className="sectoral-why">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Neden Sektörel Çözümler?</h2>
            <p className="section-description">
              Genel web sitelerinden farklı olarak, sektörünüzün ihtiyaçlarına özel tasarlanmış çözümler sunuyoruz
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Sektör Uzmanlığı</h3>
              <p>Her sektörün kendine has ihtiyaçlarını anlıyor ve buna özel çözümler sunuyoruz</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Müşteri Memnuniyeti</h3>
              <p>%100 müşteri memnuniyeti garantisi ile çalışıyoruz</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3>Hızlı Teslimat</h3>
              <p>Sadece 3 gün içinde profesyonel web sitenizi teslim ediyoruz</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3>Özelleştirilebilir Tasarım</h3>
              <p>Markanıza ve sektörünüze özel tasarımlar ile fark yaratın</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectoral Solutions */}
      <section className="sectoral-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sektörel Çözümlerimiz</h2>
            <p className="section-description">
              İşletmenizin ihtiyaçlarına uygun web çözümünü seçin
            </p>
          </div>

          <div className="sectors-grid">
            {sectors.map((sector) => (
              <div key={sector.id} className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={sector.icon}></path>
                    </svg>
                  </div>
                  <h3 className="sector-title">{sector.title}</h3>
                </div>
                <p className="sector-description">{sector.description}</p>
                <ul className="sector-solutions">
                  {sector.solutions.map((solution) => (
                    <li key={solution.id}>
                      <Link to={solution.url} className="solution-link">
                        <span className="solution-title">{solution.title}</span>
                        <span className="solution-arrow">→</span>
                      </Link>
                      <p className="solution-description">{solution.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Delivery Section */}
      <section className="quick-delivery">
        <div className="container">
          <div className="quick-delivery-content">
            <div className="quick-delivery-text">
              <h2 className="section-title">3 Günde Teslim Garantisi</h2>
              <p className="quick-delivery-description">
                Acil web sitesi ihtiyacınız mı var? Endişelenmeyin! Özel süreç yönetimimiz ve 
                hazır sektörel şablonlarımız sayesinde web sitenizi sadece 3 gün içinde teslim ediyoruz.
              </p>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>İhtiyaç Analizi</h4>
                    <p>İlk gün ihtiyaçlarınızı analiz ediyor ve tasarım konseptini oluşturuyoruz</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Hızlı Geliştirme</h4>
                    <p>İkinci gün sitenizi geliştiriyor ve içerikleri yerleştiriyoruz</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Test ve Teslim</h4>
                    <p>Üçüncü gün testleri tamamlayıp sitenizi yayına alıyoruz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quick-delivery-visual">
              <div className="delivery-card">
                <div className="delivery-header">
                  <div className="delivery-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3>Hızlı Teslimat</h3>
                </div>
                <div className="delivery-timer">
                  <div className="timer-value">3</div>
                  <div className="timer-label">GÜN</div>
                </div>
                <div className="delivery-guarantee">
                  <p>%100 Müşteri Memnuniyeti Garantisi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sectoral-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Sektörünüze Özel Web Sitenizi Hemen Oluşturalım</h2>
            <p className="cta-description">
              Ücretsiz danışmanlık ve fiyat teklifi için hemen iletişime geçin
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Teklif Alın
              </Link>
              <Link to="/portfoy" className="btn-outline">
                Projelerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectoralSolutions; 