import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  // Service Schema for Main Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "etki360 Dijital Hizmetler",
    "description": "İşletmenizin dijital dönüşümünde ihtiyaç duyduğu tüm hizmetleri tek çatı altında sunuyoruz",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "@id": "https://etki360.com/hizmetler/kurumsal-web",
        "name": "Kurumsal Web Sitesi Tasarımı",
        "alternateName": "Kurumsal Web Sitesi",
        "description": "Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri ile markanızın dijitaldeki profesyonel yüzünü oluşturun.",
        "url": "https://etki360.com/hizmetler/kurumsal-web",
        "provider": {
          "@type": "Organization",
          "@id": "https://etki360.com/#organization",
          "name": "etki360"
        },
        "serviceType": "Web Tasarım ve Geliştirme",
        "category": "Web Tasarım",
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://etki360.com/hizmetler/kurumsal-web",
          "serviceSmsNumber": "+90-542-155-33-15",
          "servicePhone": "+90-542-155-33-15"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Kurumsal Web Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Temel Kurumsal Paket",
              "price": "9500",
              "priceCurrency": "TRY",
              "priceRange": "₺9,500 - ₺15,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Temel Kurumsal Web Sitesi"
              }
            },
            {
              "@type": "Offer",
              "name": "Premium Kurumsal Paket",
              "price": "25000",
              "priceCurrency": "TRY",
              "priceRange": "₺15,000 - ₺25,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Kurumsal Web Sitesi"
              }
            }
          ]
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "9500",
          "highPrice": "25000",
          "priceCurrency": "TRY",
          "offerCount": "2"
        },
        "serviceOutput": [
          "Responsive Web Sitesi",
          "SEO Optimizasyonu",
          "Yönetim Paneli",
          "SSL Güvenlik Sertifikası"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": ["KOBİ'ler", "Kurumsal Şirketler", "Yeni Girişimler"]
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "@id": "https://etki360.com/hizmetler/e-ticaret",
        "name": "E-Ticaret Web Sitesi Geliştirme",
        "alternateName": "E-Ticaret Çözümleri",
        "description": "Online satışa başlamak için ihtiyacınız olan her şey. Ödeme entegrasyonları, stok yönetimi ve kullanıcı dostu yönetim paneli.",
        "url": "https://etki360.com/hizmetler/e-ticaret",
        "provider": {
          "@type": "Organization",
          "@id": "https://etki360.com/#organization",
          "name": "etki360"
        },
        "serviceType": "E-Ticaret Geliştirme",
        "category": "E-Ticaret",
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://etki360.com/hizmetler/e-ticaret",
          "serviceSmsNumber": "+90-542-155-33-15",
          "servicePhone": "+90-542-155-33-15"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "E-Ticaret Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Başlangıç E-Ticaret Paketi",
              "price": "27999",
              "priceCurrency": "TRY",
              "priceRange": "₺27,999 - ₺45,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Temel E-Ticaret Sitesi"
              }
            },
            {
              "@type": "Offer",
              "name": "Profesyonel E-Ticaret Paketi",
              "price": "75000",
              "priceCurrency": "TRY",
              "priceRange": "₺45,000 - ₺75,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Profesyonel E-Ticaret Sitesi"
              }
            }
          ]
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "27999",
          "highPrice": "75000",
          "priceCurrency": "TRY",
          "offerCount": "2"
        },
        "serviceOutput": [
          "Ödeme Entegrasyonları",
          "Stok Yönetimi",
          "Kargo Entegrasyonu",
          "Mobil Uyumlu Tasarım"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": ["E-Ticaret İşletmeleri", "Online Mağazalar", "Perakende Şirketleri"]
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "@id": "https://etki360.com/hizmetler/landing-page",
        "name": "Landing Page Tasarımı",
        "alternateName": "Dönüşüm Odaklı Sayfalar",
        "description": "Dönüşüm odaklı, hızlı yüklenen tek sayfalık tanıtım siteleri ile potansiyel müşterilerinizi gerçek müşteriye dönüştürün.",
        "url": "https://etki360.com/hizmetler/landing-page",
        "provider": {
          "@type": "Organization",
          "@id": "https://etki360.com/#organization",
          "name": "etki360"
        },
        "serviceType": "Landing Page Tasarımı",
        "category": "Dijital Pazarlama",
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://etki360.com/hizmetler/landing-page",
          "serviceSmsNumber": "+90-542-155-33-15",
          "servicePhone": "+90-542-155-33-15"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Landing Page Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Temel Landing Page",
              "price": "4999",
              "priceCurrency": "TRY",
              "priceRange": "₺4,999 - ₺8,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Temel Landing Page"
              }
            },
            {
              "@type": "Offer",
              "name": "Premium Landing Page",
              "price": "15000",
              "priceCurrency": "TRY",
              "priceRange": "₺8,000 - ₺15,000",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Landing Page"
              }
            }
          ]
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "4999",
          "highPrice": "15000",
          "priceCurrency": "TRY",
          "offerCount": "2"
        },
        "serviceOutput": [
          "Dönüşüm Odaklı Tasarım",
          "Hızlı Yükleme",
          "A/B Test Desteği",
          "Analytics Entegrasyonu"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": ["Pazarlama Ajansları", "Girişimciler", "Kampanya Yöneticileri"]
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "@id": "https://etki360.com/hizmetler/seo",
        "name": "SEO ve Performans Optimizasyonu",
        "alternateName": "SEO Hizmetleri",
        "description": "Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu ve performans iyileştirmeleri ile organik trafiğinizi artırın.",
        "url": "https://etki360.com/hizmetler/seo",
        "provider": {
          "@type": "Organization",
          "@id": "https://etki360.com/#organization",
          "name": "etki360"
        },
        "serviceType": "SEO ve Performans Optimizasyonu",
        "category": "Dijital Pazarlama",
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://etki360.com/hizmetler/seo",
          "serviceSmsNumber": "+90-542-155-33-15",
          "servicePhone": "+90-542-155-33-15"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Temel SEO Paketi",
              "price": "2999",
              "priceCurrency": "TRY",
              "priceRange": "₺2,999/ay",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "2999",
                "priceCurrency": "TRY",
                "unitCode": "MON"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Aylık SEO Hizmeti"
              }
            }
          ]
        },
        "offers": {
          "@type": "Offer",
          "price": "2999",
          "priceCurrency": "TRY",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "2999",
            "priceCurrency": "TRY",
            "unitCode": "MON"
          }
        },
        "serviceOutput": [
          "Teknik SEO Analizi",
          "İçerik Optimizasyonu",
          "Hız Optimizasyonu",
          "Aylık Raporlama"
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": ["Web Site Sahipleri", "E-Ticaret İşletmeleri", "Dijital Ajanslar"]
        }
      }
    ]
  };

  // WebPage Schema for Services Page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://etki360.com/hizmetler/#webpage",
    "url": "https://etki360.com/hizmetler",
    "name": "Hizmetlerimiz - etki360 | Dijital Çözümler",
    "description": "İşletmenizin dijital dönüşümünde ihtiyaç duyduğu tüm hizmetleri tek çatı altında sunuyoruz. Modern teknolojiler ve uzman ekibimizle dijitalde güçlü bir varlık oluşturun.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://etki360.com/#website"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "etki360 Hizmetleri"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://etki360.com/images/services-hero.jpg",
      "width": 1200,
      "height": 630
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
          "name": "Hizmetlerimiz",
          "item": "https://etki360.com/hizmetler"
        }
      ]
    },
    "significantLink": [
      "https://etki360.com/hizmetler/kurumsal-web",
      "https://etki360.com/hizmetler/e-ticaret",
      "https://etki360.com/hizmetler/landing-page",
      "https://etki360.com/hizmetler/seo"
    ]
  };

  // FAQ Schema for Services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Proje süresi ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proje karmaşıklığına göre değişmekle birlikte, kurumsal web siteleri 2-4 hafta, e-ticaret projeleri 4-8 hafta sürmektedir. Landing page projeleri ise 1-2 hafta içinde tamamlanır."
        }
      },
      {
        "@type": "Question",
        "name": "Hosting ve domain dahil mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İlk yıl hosting ve SSL sertifikası ücretsizdir. Domain kaydı ayrıca ücretlendirilir veya mevcut domain'inizi kullanabilirsiniz. Hosting yenileme ücretleri yıllık olarak tahsil edilir."
        }
      },
      {
        "@type": "Question",
        "name": "Destek hizmeti var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm projelerimizde teslim sonrası destek hizmeti sunuyoruz. Destek süresi paket türüne göre değişmektedir. Temel paketlerde 3 ay, premium paketlerde 6 ay ücretsiz destek verilir."
        }
      },
      {
        "@type": "Question",
        "name": "Revizyon hakkım var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tasarım aşamasında paket türüne göre 2-5 revizyon hakkınız bulunmaktadır. Temel paketlerde 2, premium paketlerde 5 revizyon hakkı verilir. Ek revizyonlar için ayrı ücretlendirme yapılır."
        }
      },
      {
        "@type": "Question",
        "name": "SEO garantisi veriyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teknik SEO optimizasyonu garantisi veriyoruz. Tüm sitelerimiz Google'ın teknik gereksinimlerine uygun olarak geliştirilir. Anahtar kelime sıralaması için ayrı SEO hizmet paketlerimiz mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "Ödeme nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "%50 peşin, %50 teslimde olmak üzere iki taksitte ödeme alınmaktadır. Kurumsal müşteriler için özel ödeme planları mevcuttur. Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri bulunur."
        }
      }
    ]
  };

  // HowTo Schema for Work Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "etki360 Proje Geliştirme Süreci",
    "description": "Projelerinizi hayata geçirirken izlediğimiz sistematik süreç",
    "image": "https://etki360.com/images/process-diagram.jpg",
    "totalTime": "PT4W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "TRY",
      "value": "9500"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Proje Gereksinimleri"
      },
      {
        "@type": "HowToSupply",
        "name": "İçerik Materyalleri"
      },
      {
        "@type": "HowToSupply",
        "name": "Marka Kimlikleri"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "React"
      },
      {
        "@type": "HowToTool",
        "name": "PHP"
      },
      {
        "@type": "HowToTool",
        "name": "MySQL"
      },
      {
        "@type": "HowToTool",
        "name": "Figma"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Analiz & Planlama",
        "text": "İhtiyaçlarınızı detaylı analiz ediyor, hedef kitlenizi belirliyoruz. Proje kapsamını ve teknik gereksinimleri çıkarıyoruz.",
        "image": "https://etki360.com/images/step-analysis.jpg",
        "url": "https://etki360.com/hizmetler#analiz"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Tasarım & Prototyping",
        "text": "Markanıza özel tasarım konsepti oluşturuyor, kullanıcı deneyimi odaklı arayüz tasarlıyoruz.",
        "image": "https://etki360.com/images/step-design.jpg",
        "url": "https://etki360.com/hizmetler#tasarim"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Geliştirme & Kodlama",
        "text": "Modern teknolojilerle responsive, hızlı ve güvenli web sitesi geliştirme süreci başlıyor.",
        "image": "https://etki360.com/images/step-development.jpg",
        "url": "https://etki360.com/hizmetler#gelistirme"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Test & Yayınlama",
        "text": "Kapsamlı testler sonrası sitenizi yayına alıyor, eğitim ve destek hizmeti sunuyoruz.",
        "image": "https://etki360.com/images/step-launch.jpg",
        "url": "https://etki360.com/hizmetler#test"
      }
    ]
  };

  // Organization Schema for Service Provider
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://etki360.com/#organization",
    "name": "etki360",
    "alternateName": "etki360 Web Tasarım & Dijital Çözümler",
    "url": "https://etki360.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://etki360.com/logo.png",
      "width": 300,
      "height": 100
    },
    "description": "Dijitalde güçlü bir varlık oluşturmak isteyen işletmelere modern, hızlı ve kullanıcı odaklı web çözümleri sunuyoruz.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-155-33-15",
        "contactType": "customer service",
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
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kurumsal Web Sitesi Tasarımı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Ticaret Web Sitesi"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Tasarımı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO ve Performans Optimizasyonu"
        }
      }
    ]
  };

  return (
    <div className="services-main-page">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Hero Section */}
      <section className="services-main-hero">
        <div className="container">
          <header className="services-main-hero-content">
            <nav className="services-main-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>Hizmetlerimiz</span>
            </nav>
            <h1 className="services-main-hero-title">
              Dijital <span className="services-main-highlight">Çözümlerimiz</span>
            </h1>
            <p className="services-main-hero-description">
              İşletmenizin dijital dönüşümünde ihtiyaç duyduğu tüm hizmetleri 
              tek çatı altında sunuyoruz. Modern teknolojiler ve uzman ekibimizle 
              dijitalde güçlü bir varlık oluşturun.
            </p>
            <div className="services-main-hero-stats">
              <div className="services-main-stat">
                <span className="services-main-stat-number">4</span>
                <span className="services-main-stat-label">Ana Hizmet</span>
              </div>
              <div className="services-main-stat">
                <span className="services-main-stat-number">50+</span>
                <span className="services-main-stat-label">Tamamlanan Proje</span>
              </div>
              <div className="services-main-stat">
                <span className="services-main-stat-number">100%</span>
                <span className="services-main-stat-label">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="services-main-grid-section">
        <div className="container">
          <header className="services-main-section-header">
            <h2 className="services-main-section-title">Hizmetlerimiz</h2>
            <p className="services-main-section-description">
              Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetler
            </p>
          </header>
          
          <div className="services-main-grid">
            {/* Kurumsal Web Sitesi */}
            <article className="services-main-card">
              <div className="services-main-card-header">
                <div className="services-main-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="services-main-card-badge">Popüler</div>
              </div>
              <div className="services-main-card-content">
                <h3 className="services-main-card-title">Kurumsal Web Sitesi</h3>
                <p className="services-main-card-description">
                  Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri 
                  ile markanızın dijitaldeki profesyonel yüzünü oluşturun.
                </p>
                <ul className="services-main-card-features">
                  <li>Responsive tasarım</li>
                  <li>SEO optimizasyonu</li>
                  <li>Yönetim paneli</li>
                  <li>SSL güvenlik</li>
                </ul>
                <div className="services-main-card-pricing">
                  <span className="services-main-price">₺9.500</span>
                  <span className="services-main-price-note">+ KDV'den başlayan fiyatlarla</span>
                </div>
                <div className="services-main-card-actions">
                  <Link to="/hizmetler/kurumsal-web" className="services-main-btn-primary">
                    Detayları İncele
                  </Link>
                  <Link to="/iletisim" className="services-main-btn-secondary">
                    Teklif Al
                  </Link>
                </div>
              </div>
            </article>

            {/* E-Ticaret Çözümleri */}
            <article className="services-main-card services-main-featured">
              <div className="services-main-card-header">
                <div className="services-main-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <div className="services-main-card-badge services-main-featured-badge">Önerilen</div>
              </div>
              <div className="services-main-card-content">
                <h3 className="services-main-card-title">E-Ticaret Çözümleri</h3>
                <p className="services-main-card-description">
                  Online satışa başlamak için ihtiyacınız olan her şey. Ödeme entegrasyonları, 
                  stok yönetimi ve kullanıcı dostu yönetim paneli.
                </p>
                <ul className="services-main-card-features">
                  <li>Ödeme entegrasyonları</li>
                  <li>Stok yönetimi</li>
                  <li>Kargo entegrasyonu</li>
                  <li>Mobil uyumlu</li>
                </ul>
                <div className="services-main-card-pricing">
                  <span className="services-main-price">₺27.999</span>
                  <span className="services-main-price-note">+ KDV'den başlayan fiyatlarla</span>
                </div>
                <div className="services-main-card-actions">
                  <Link to="/hizmetler/e-ticaret" className="services-main-btn-primary">
                    Detayları İncele
                  </Link>
                  <Link to="/iletisim" className="services-main-btn-secondary">
                    Demo İste
                  </Link>
                </div>
              </div>
            </article>

            {/* Landing Page */}
            <article className="services-main-card">
              <div className="services-main-card-header">
                <div className="services-main-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div className="services-main-card-badge">Hızlı</div>
              </div>
              <div className="services-main-card-content">
                <h3 className="services-main-card-title">Landing Page</h3>
                <p className="services-main-card-description">
                  Dönüşüm odaklı, hızlı yüklenen tek sayfalık tanıtım siteleri 
                  ile potansiyel müşterilerinizi gerçek müşteriye dönüştürün.
                </p>
                <ul className="services-main-card-features">
                  <li>Dönüşüm odaklı tasarım</li>
                  <li>Hızlı yükleme</li>
                  <li>A/B test desteği</li>
                  <li>Analytics entegrasyonu</li>
                </ul>
                <div className="services-main-card-pricing">
                  <span className="services-main-price">₺4.999</span>
                  <span className="services-main-price-note">+ KDV'den başlayan fiyatlarla</span>
                </div>
                <div className="services-main-card-actions">
                  <Link to="/hizmetler/landing-page" className="services-main-btn-primary">
                    Detayları İncele
                  </Link>
                  <Link to="/iletisim" className="services-main-btn-secondary">
                    Analiz İste
                  </Link>
                </div>
              </div>
            </article>

            {/* SEO & Performans */}
            <article className="services-main-card">
              <div className="services-main-card-header">
                <div className="services-main-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="services-main-card-badge">Sürekli</div>
              </div>
              <div className="services-main-card-content">
                <h3 className="services-main-card-title">SEO & Performans</h3>
                <p className="services-main-card-description">
                  Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu 
                  ve performans iyileştirmeleri ile organik trafiğinizi artırın.
                </p>
                <ul className="services-main-card-features">
                  <li>Teknik SEO analizi</li>
                  <li>İçerik optimizasyonu</li>
                  <li>Hız optimizasyonu</li>
                  <li>Aylık raporlama</li>
                </ul>
                <div className="services-main-card-pricing">
                  <span className="services-main-price">₺2.999</span>
                  <span className="services-main-price-note">/ ay başlayan fiyatlarla</span>
                </div>
                <div className="services-main-card-actions">
                  <Link to="/hizmetler/seo" className="services-main-btn-primary">
                    Detayları İncele
                  </Link>
                  <Link to="/iletisim" className="services-main-btn-secondary">
                    Analiz İste
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services-main-process-section">
        <div className="container">
          <header className="services-main-section-header">
            <h2 className="services-main-section-title">Çalışma Sürecimiz</h2>
            <p className="services-main-section-description">
              Projelerinizi hayata geçirirken izlediğimiz sistematik süreç
            </p>
          </header>
          
          <div className="services-main-process-timeline">
            <article className="services-main-process-step">
              <div className="services-main-step-number">1</div>
              <div className="services-main-step-content">
                <h3 className="services-main-step-title">Analiz & Planlama</h3>
                <p className="services-main-step-description">
                  İhtiyaçlarınızı detaylı analiz ediyor, hedef kitlenizi belirliyoruz. 
                  Proje kapsamını ve teknik gereksinimleri çıkarıyoruz.
                </p>
              </div>
            </article>

            <article className="services-main-process-step">
              <div className="services-main-step-number">2</div>
              <div className="services-main-step-content">
                <h3 className="services-main-step-title">Tasarım & Prototyping</h3>
                <p className="services-main-step-description">
                  Markanıza özel tasarım konsepti oluşturuyor, kullanıcı deneyimi 
                  odaklı arayüz tasarlıyoruz.
                </p>
              </div>
            </article>

            <article className="services-main-process-step">
              <div className="services-main-step-number">3</div>
              <div className="services-main-step-content">
                <h3 className="services-main-step-title">Geliştirme & Kodlama</h3>
                <p className="services-main-step-description">
                  Modern teknolojilerle responsive, hızlı ve güvenli web sitesi 
                  geliştirme süreci başlıyor.
                </p>
              </div>
            </article>

            <article className="services-main-process-step">
              <div className="services-main-step-number">4</div>
              <div className="services-main-step-content">
                <h3 className="services-main-step-title">Test & Yayınlama</h3>
                <p className="services-main-step-description">
                  Kapsamlı testler sonrası sitenizi yayına alıyor, eğitim ve 
                  destek hizmeti sunuyoruz.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="services-main-technologies-section">
        <div className="container">
          <header className="services-main-section-header">
            <h2 className="services-main-section-title">Kullandığımız Teknolojiler</h2>
            <p className="services-main-section-description">
              Modern ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz
            </p>
          </header>
          
          <div className="services-main-tech-grid">
            <div className="services-main-tech-category">
              <h3 className="services-main-tech-title">Frontend</h3>
              <div className="services-main-tech-items">
                <span className="services-main-tech-item">React</span>
                <span className="services-main-tech-item">Next.js</span>
                <span className="services-main-tech-item">HTML5</span>
                <span className="services-main-tech-item">CSS3</span>
                <span className="services-main-tech-item">JavaScript</span>
                <span className="services-main-tech-item">TypeScript</span>
              </div>
            </div>

            <div className="services-main-tech-category">
              <h3 className="services-main-tech-title">Backend</h3>
              <div className="services-main-tech-items">
                <span className="services-main-tech-item">PHP</span>
                <span className="services-main-tech-item">Laravel</span>
                <span className="services-main-tech-item">MySQL</span>
                <span className="services-main-tech-item">WordPress</span>
                <span className="services-main-tech-item">Node.js</span>
                <span className="services-main-tech-item">MongoDB</span>
              </div>
            </div>

            <div className="services-main-tech-category">
              <h3 className="services-main-tech-title">Araçlar & Platformlar</h3>
              <div className="services-main-tech-items">
                <span className="services-main-tech-item">Git</span>
                <span className="services-main-tech-item">Docker</span>
                <span className="services-main-tech-item">Figma</span>
                <span className="services-main-tech-item">Google Analytics</span>
                <span className="services-main-tech-item">Search Console</span>
                <span className="services-main-tech-item">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-main-faq-section">
        <div className="container">
          <header className="services-main-section-header">
            <h2 className="services-main-section-title">Sıkça Sorulan Sorular</h2>
            <p className="services-main-section-description">
              Hizmetlerimiz hakkında merak ettiğiniz sorular
            </p>
          </header>
          
          <div className="services-main-faq-grid">
            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">Proje süresi ne kadar?</h3>
              <p className="services-main-faq-answer">
                Proje karmaşıklığına göre değişmekle birlikte, kurumsal web siteleri 
                2-4 hafta, e-ticaret projeleri 4-8 hafta sürmektedir.
              </p>
            </article>

            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">Hosting ve domain dahil mi?</h3>
              <p className="services-main-faq-answer">
                İlk yıl hosting ve SSL sertifikası ücretsizdir. Domain kaydı 
                ayrıca ücretlendirilir veya mevcut domain'inizi kullanabilirsiniz.
              </p>
            </article>

            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">Destek hizmeti var mı?</h3>
              <p className="services-main-faq-answer">
                Evet, tüm projelerimizde teslim sonrası destek hizmeti sunuyoruz. 
                Destek süresi paket türüne göre değişmektedir.
              </p>
            </article>

            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">Revizyon hakkım var mı?</h3>
              <p className="services-main-faq-answer">
                Tasarım aşamasında paket türüne göre 2-5 revizyon hakkınız bulunmaktadır. 
                Ek revizyonlar için ayrı ücretlendirme yapılır.
              </p>
            </article>

            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">SEO garantisi veriyor musunuz?</h3>
              <p className="services-main-faq-answer">
                Teknik SEO optimizasyonu garantisi veriyoruz. Anahtar kelime sıralaması 
                için ayrı SEO hizmet paketlerimiz mevcuttur.
              </p>
            </article>

            <article className="services-main-faq-item">
              <h3 className="services-main-faq-question">Ödeme nasıl yapılır?</h3>
              <p className="services-main-faq-answer">
                %50 peşin, %50 teslimde olmak üzere iki taksitte ödeme alınmaktadır. 
                Kurumsal müşteriler için özel ödeme planları mevcuttur.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-main-cta">
        <div className="container">
          <div className="services-main-cta-content">
            <h2 className="services-main-cta-title">Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
            <p className="services-main-cta-description">
              Dijital dünyadaki yerinizi alın. Size özel çözümler geliştirmek için 
              hemen iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <div className="services-main-cta-buttons">
              <Link to="/iletisim" className="services-main-btn-primary">
                Ücretsiz Teklif Al
              </Link>
              <Link to="/portfoy" className="services-main-btn-secondary">
                Projelerimizi İncele
              </Link>
            </div>
            <div className="services-main-cta-features">
              <div className="services-main-cta-feature">
                <span className="services-main-feature-icon">✓</span>
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="services-main-cta-feature">
                <span className="services-main-feature-icon">✓</span>
                <span>Hızlı Teslimat</span>
              </div>
              <div className="services-main-cta-feature">
                <span className="services-main-feature-icon">✓</span>
                <span>1 Yıl Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 