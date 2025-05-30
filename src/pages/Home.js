import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';
import HomeBlogPosts from './HomeBlogPosts';

const Home = () => {
  // WebSite Schema for SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://etki360.com/#website",
    "name": "etki360 - Web Tasarım & Dijital Çözümler",
    "alternateName": "etki360",
    "url": "https://etki360.com",
    "description": "İstanbul merkezli web tasarım ve dijital çözümler şirketi. Kurumsal web siteleri, e-ticaret, SEO ve dijital pazarlama hizmetleri.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://etki360.com/blog?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    }
  };

  // Organization Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://etki360.com/#organization",
    "name": "etki360",
    "alternateName": "etki360 Web Tasarım & Dijital Çözümler",
    "url": "https://etki360.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://etki360.com/assets/images/etki360-logo-tek-satir.svg",
      "width": 300,
      "height": 100
    },
    "image": "https://etki360.com/images/etki360-hero.jpg",
    "description": "Dijitalde güçlü bir varlık oluşturmak isteyen işletmelere modern, hızlı ve kullanıcı odaklı web çözümleri sunuyoruz.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zeytinburnu",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
      "postalCode": "34025"
    },
    "location": [
      {
        "@type": "Place",
        "name": "etki360 Zeytinburnu Ofisi",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Zeytinburnu",
          "addressRegion": "İstanbul",
          "addressCountry": "TR",
          "postalCode": "34025"
        }
      },
      {
        "@type": "Place",
        "name": "etki360 Sapphire Ofisi",
        "description": "Uzaktan çalışma modeli",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kağıthane",
          "addressRegion": "İstanbul",
          "addressCountry": "TR"
        }
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-544-488-23-03",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-155-33-15",
        "contactType": "technical support",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ],
    "email": "info@etki360.com",
    "sameAs": [
      "https://www.linkedin.com/company/etki360/",
      "https://www.instagram.com/etki360/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "16:00"
      }
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
            "name": "Kurumsal Web Sitesi Tasarımı",
            "description": "Modern, responsive ve SEO uyumlu kurumsal web siteleri",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/web-tasarim"
            }
          },
          "priceRange": "₺9,500 - ₺25,000",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Ticaret Web Sitesi",
            "description": "Ödeme entegrasyonlu, stok yönetimli e-ticaret çözümleri",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/e-ticaret"
            }
          },
          "priceRange": "₺27,999 - ₺75,000",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO ve Performans Optimizasyonu",
            "description": "Google sıralaması ve site hızı optimizasyonu",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/seo"
            }
          },
          "priceRange": "₺2,999/ay",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sosyal Medya Yönetimi",
            "description": "Sosyal medya hesaplarınızın profesyonel yönetimi ve içerik üretimi",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/sosyal-medya"
            }
          },
          "priceRange": "₺1,999/ay",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobil Uygulama Geliştirme",
            "description": "iOS ve Android için kullanıcı odaklı mobil uygulamalar",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/mobil-uygulama"
            }
          },
          "priceRange": "₺18,000 - ₺60,000",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grafik Tasarım Hizmetleri",
            "description": "Kurumsal kimlik, logo ve sosyal medya görsel tasarımları",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            },
            "areaServed": "TR",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://etki360.com/hizmetlerimiz/grafik-tasarim"
            }
          },
          "priceRange": "₺2,500 - ₺10,000",
          "availability": "https://schema.org/InStock"
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
      "value": "2-10"
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
      "Performans Optimizasyonu",
      "Mobil Uygulama Geliştirme",
      "Grafik Tasarım",
      "Sosyal Medya Yönetimi"
    ],
    "slogan": "Dijitalde Gücünüzü Gösterin!",
    "mission": "İşletmenizin dijitaldeki vitrinini profesyonelce tasarlayan, sürdürülebilir ve performans odaklı çözümler sunan web geliştirme hizmetidir.",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "İstanbul",
        "addressCountry": "TR"
      }
    }
  };

  // WebPage Schema for Home Page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://etki360.com/#webpage",
    "url": "https://etki360.com",
    "name": "etki360 - Web Tasarım & Dijital Çözümler | Ana Sayfa",
    "description": "İşletmenizin dijitaldeki vitrinini profesyonelce tasarlayan, sürdürülebilir ve performans odaklı çözümler sunan web geliştirme hizmetidir.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://etki360.com/#website"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://etki360.com/images/etki360-hero.jpg",
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
        }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".home-hero-title", ".home-hero-description"]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": ".home"
    }
  };

  // Service Schema for Main Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "etki360 Hizmetleri",
    "description": "Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetler",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Tasarım",
        "description": "Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Web Tasarım",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Tasarım Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺9,500 - ₺25,000",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/web-tasarim"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "E-Ticaret Çözümleri",
        "description": "Ödeme entegrasyonları ve yönetim paneli ile eksiksiz e-ticaret siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "E-Ticaret",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "E-Ticaret Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺27,999 - ₺75,000",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/e-ticaret"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "SEO",
        "description": "Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "SEO",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺2,999/ay",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/seo"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Sosyal Medya",
        "description": "Sosyal medya hesaplarınızın profesyonel yönetimi ve içerik üretimi",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sosyal Medya",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sosyal Medya Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺1,999/ay",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/sosyal-medya"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "İçerik Üretimi",
        "description": "SEO uyumlu, hedef kitlenize yönelik profesyonel içerik üretimi",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "İçerik Üretimi",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "İçerik Üretimi Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺1,500/ay",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/icerik-uretimi"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "Grafik Tasarım",
        "description": "Kurumsal kimlikten sosyal medya görsellerine kadar profesyonel tasarımlar",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Grafik Tasarım",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Grafik Tasarım Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺2,500 - ₺10,000",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/grafik-tasarim"
      },
      {
        "@type": "Service",
        "position": 7,
        "name": "Mobil Uygulama",
        "description": "iOS ve Android için kullanıcı odaklı, yüksek performanslı mobil uygulamalar",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Mobil Uygulama",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobil Uygulama Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺18,000 - ₺60,000",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/mobil-uygulama"
      },
      {
        "@type": "Service",
        "position": 8,
        "name": "Bakım ve Destek",
        "description": "Websitenizin güvenliği, güncelliği ve sürekliliği için bakım hizmetleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Bakım ve Destek",
        "areaServed": "TR",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bakım ve Destek Paketleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "priceRange": "₺999/ay",
              "availability": "https://schema.org/InStock"
            }
          ]
        },
        "url": "https://etki360.com/hizmetlerimiz/bakim-destek"
      }
    ]
  };

  // Sectoral Solutions Schema for SEO
  const sectoralSolutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "etki360 Sektörel Çözümler",
    "description": "Farklı sektörlere özel dijital çözüm ve hizmetlerimiz",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "İnşaat & Dekorasyon",
        "description": "Projelerinizi ve portföyünüzü en iyi şekilde sergileyecek kurumsal web siteleri ve tanıtım sayfaları",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler/insaat-dekorasyon/mimar"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Sağlık",
        "description": "Hasta odaklı, randevu yönetim sistemli ve KVKK uyumlu sağlık kuruluşu web siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler/saglik/klinik-web-sitesi"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Nakliyat",
        "description": "Hizmet bölgelerinizi, araç filonuzu ve referanslarınızı etkili şekilde gösteren web siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler/nakliyat/nakliye-firmasi"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Hizmet Sektörü",
        "description": "Müşterilerinizin sizi kolayca bulabileceği ve hizmetlerinizi detaylı tanıtabileceğiniz web siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler/hizmet/tamir-servisi"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Eğitim",
        "description": "Öğrenci yönetim sistemi, online eğitim platformu ve veli-öğretmen iletişim sistemleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "Turizm & Otelcilik",
        "description": "Rezervasyon sistemli, çok dilli ve görsel açıdan zengin turizm ve otelcilik web siteleri",
        "provider": {
          "@type": "Organization",
          "name": "etki360"
        },
        "serviceType": "Sektörel Web Çözümleri",
        "areaServed": "TR",
        "url": "https://etki360.com/sektorel-cozumler"
      }
    ]
  };

  return (
    <div className="home">
      {/* Meta Tags and SEO with React Helmet */}
      <Helmet>
        <title>etki360 - Web Tasarım & Dijital Çözümler | Modern Web Siteleri, Mobil Uygulamalar, SEO</title>
        <meta name="description" content="İstanbul merkezli web tasarım ve dijital çözümler şirketi. Kurumsal web siteleri, e-ticaret, SEO, mobil uygulamalar ve dijital pazarlama hizmetleri." />
        <meta name="keywords" content="web tasarım, web site, kurumsal web site, e-ticaret, seo, dijital pazarlama, mobil uygulama, grafik tasarım, sosyal medya, istanbul" />
        <meta name="author" content="etki360" />
        <meta property="og:title" content="etki360 - Web Tasarım & Dijital Çözümler" />
        <meta property="og:description" content="Modern web siteleri, mobil uygulamalar ve dijital pazarlama çözümleri ile işletmenizin online başarısını artırıyoruz." />
        <meta property="og:image" content="https://etki360.com/assets/images/etki360-logo-tek-satir.svg" />
        <meta property="og:url" content="https://etki360.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="etki360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="etki360 - Web Tasarım & Dijital Çözümler" />
        <meta name="twitter:description" content="Modern web siteleri, mobil uygulamalar ve dijital pazarlama çözümleri ile işletmenizin online başarısını artırıyoruz." />
        <meta name="twitter:image" content="https://etki360.com/assets/images/etki360-logo-tek-satir.svg" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <meta name="contact" content="info@etki360.com" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://etki360.com" />
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(sectoralSolutionsSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="home-page-hero">
        <div className="container-fluid">
          <div className="home-hero-content">
            <div className="home-hero-text">
              <h1 className="home-hero-title">
                Dijitalde <span className="home-highlight">Gücünüzü</span> Gösterin!
              </h1>
              <p className="home-hero-description">
                Modern web siteleri, mobil uygulamalar ve dijital pazarlama çözümleri ile işletmenizin online başarısını artırıyoruz.
              </p>
              <div className="home-hero-buttons">
                <Link to="/iletisim" className="home-btn-primary">Hemen Başlayın</Link>
                <Link to="/portfoy" className="home-btn-secondary">Projelerimizi İnceleyin</Link>
              </div>
              <div className="home-hero-stats">
                <div className="home-stat">
                  <span className="home-stat-number">50+</span>
                  <span className="home-stat-label">Tamamlanan Proje</span>
                </div>
                <div className="home-stat">
                  <span className="home-stat-number">100%</span>
                  <span className="home-stat-label">Müşteri Memnuniyeti</span>
                </div>
                <div className="home-stat">
                  <span className="home-stat-number">7/24</span>
                  <span className="home-stat-label">Destek Hizmeti</span>
                </div>
              </div>
            </div>
            <div className="home-hero-visual">
              <div className="home-mockup-container">
                <div className="home-desktop-mockup">
                  <div className="home-mockup-browser-header">
                    <div className="home-browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="home-browser-address">etki360.com</div>
                  </div>
                  <div className="home-mockup-content">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0ODY0NzEx&ixlib=rb-1.2.1&q=80&w=600" alt="Web Site Tasarımı" loading="lazy" />
                  </div>
                </div>
                <div className="home-mobile-mockup">
                  <div className="home-mobile-notch"></div>
                  <div className="home-mobile-screen">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI0ODY0NzIy&ixlib=rb-1.2.1&q=80&w=300" alt="Mobil Uygulama" loading="lazy" />
                  </div>
                  <div className="home-mobile-button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">Hizmetlerimiz</h2>
            <p className="home-section-description">
              Dijital dünyadaki ihtiyaçlarınıza özel çözümler sunuyoruz
            </p>
          </div>
          <div className="home-services-grid">
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="home-service-title">Web Tasarım</h3>
              <p className="home-service-description">
                Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri
              </p>
              <Link to="/hizmetlerimiz/web-tasarim" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <h3 className="home-service-title">E-Ticaret</h3>
              <p className="home-service-description">
                Ödeme entegrasyonları ve yönetim paneli ile eksiksiz e-ticaret siteleri
              </p>
              <Link to="/hizmetlerimiz/e-ticaret" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="home-service-title">SEO</h3>
              <p className="home-service-description">
                Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu
              </p>
              <Link to="/hizmetlerimiz/seo" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/>
                  <line x1="2" y1="20" x2="2" y2="20"/>
                </svg>
              </div>
              <h3 className="home-service-title">Sosyal Medya</h3>
              <p className="home-service-description">
                Sosyal medya hesaplarınızın profesyonel yönetimi ve içerik üretimi
              </p>
              <Link to="/hizmetlerimiz/sosyal-medya" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className="home-service-title">İçerik Üretimi</h3>
              <p className="home-service-description">
                SEO uyumlu, hedef kitlenize yönelik profesyonel içerik üretimi
              </p>
              <Link to="/hizmetlerimiz/icerik-uretimi" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="home-service-title">Grafik Tasarım</h3>
              <p className="home-service-description">
                Kurumsal kimlikten sosyal medya görsellerine kadar profesyonel tasarımlar
              </p>
              <Link to="/hizmetlerimiz/grafik-tasarim" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
              </div>
              <h3 className="home-service-title">Mobil Uygulama</h3>
              <p className="home-service-description">
                iOS ve Android için kullanıcı odaklı, yüksek performanslı mobil uygulamalar
              </p>
              <Link to="/hizmetlerimiz/mobil-uygulama" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-service-card">
              <div className="home-service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h3 className="home-service-title">Bakım ve Destek</h3>
              <p className="home-service-description">
                Websitenizin güvenliği, güncelliği ve sürekliliği için bakım hizmetleri
              </p>
              <Link to="/hizmetlerimiz/bakim-destek" className="home-service-link">
                Detayları İncele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-why-choose-us">
        <div className="container">
          <div className="home-why-content">
            <div className="home-why-text">
              <h2 className="home-section-title">Neden etki360?</h2>
              <div className="home-features">
                <div className="home-feature">
                  <div className="home-feature-icon">✓</div>
                  <div className="home-feature-content">
                    <h4>Modern Teknolojiler</h4>
                    <p>React, PHP ve MySQL ile güncel teknolojiler kullanıyoruz</p>
                  </div>
                </div>
                <div className="home-feature">
                  <div className="home-feature-icon">✓</div>
                  <div className="home-feature-content">
                    <h4>Mobil Uyumlu Tasarım</h4>
                    <p>Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi</p>
                  </div>
                </div>
                <div className="home-feature">
                  <div className="home-feature-icon">✓</div>
                  <div className="home-feature-content">
                    <h4>SEO Optimizasyonu</h4>
                    <p>Google'da üst sıralarda yer almanız için teknik SEO</p>
                  </div>
                </div>
                <div className="home-feature">
                  <div className="home-feature-icon">✓</div>
                  <div className="home-feature-content">
                    <h4>Sürekli Destek</h4>
                    <p>Proje teslimi sonrası da yanınızdayız</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-why-visual">
              <div className="home-visual-card">
                <div className="home-progress-bars">
                  <div className="home-progress-item">
                    <span>Web Tasarım</span>
                    <div className="home-progress-bar">
                      <div className="home-progress-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="home-progress-item">
                    <span>SEO Optimizasyon</span>
                    <div className="home-progress-bar">
                      <div className="home-progress-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="home-progress-item">
                    <span>Performans</span>
                    <div className="home-progress-bar">
                      <div className="home-progress-fill" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sectoral Solutions Section */}
      <section className="home-sectoral-solutions">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">Sektörel Çözümler</h2>
            <p className="home-section-description">
              Her sektörün kendine özel ihtiyaçlarını anlıyor ve sektörünüze özel dijital çözümler sunuyoruz
            </p>
          </div>
          
          <div className="home-sectoral-grid">
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 7h-4V3m0 14H3v4h17z"/>
                  <path d="M20 3h-4v4h4z"/>
                  <path d="M3 7h13v10H3z"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">İnşaat & Dekorasyon</h3>
              <p className="home-sectoral-description">
                Projelerinizi ve portföyünüzü en iyi şekilde sergileyecek kurumsal web siteleri ve tanıtım sayfaları
              </p>
              <ul className="home-sectoral-features">
                <li>Mimarlık Firmaları</li>
                <li>Boya Badana Hizmetleri</li>
                <li>Dekorasyon Firmaları</li>
              </ul>
              <Link to="/sektorel-cozumler/insaat-dekorasyon/mimar" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">Sağlık</h3>
              <p className="home-sectoral-description">
                Hasta odaklı, randevu yönetim sistemli ve KVKK uyumlu sağlık kuruluşu web siteleri
              </p>
              <ul className="home-sectoral-features">
                <li>Klinik Web Siteleri</li>
                <li>Saç Ekim Klinikleri</li>
                <li>KVKK Uyumlu Altyapı</li>
              </ul>
              <Link to="/sektorel-cozumler/saglik/klinik-web-sitesi" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <path d="M9 2h6v4H9z"/>
                  <path d="M3 10h18"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">Nakliyat</h3>
              <p className="home-sectoral-description">
                Hizmet bölgelerinizi, araç filonuzu ve referanslarınızı etkili şekilde gösteren web siteleri
              </p>
              <ul className="home-sectoral-features">
                <li>Nakliye Firmaları</li>
                <li>Kargo Firmaları</li>
                <li>Fiyat Hesaplama Modülleri</li>
              </ul>
              <Link to="/sektorel-cozumler/nakliyat/nakliye-firmasi" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">Hizmet Sektörü</h3>
              <p className="home-sectoral-description">
                Müşterilerinizin sizi kolayca bulabileceği ve hizmetlerinizi detaylı tanıtabileceğiniz web siteleri
              </p>
              <ul className="home-sectoral-features">
                <li>Çilingir Hizmetleri</li>
                <li>Çekici Hizmetleri</li>
                <li>Tamir ve Servis Hizmetleri</li>
              </ul>
              <Link to="/sektorel-cozumler/hizmet/tamir-servisi" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">Eğitim</h3>
              <p className="home-sectoral-description">
                Öğrenci yönetim sistemi, online eğitim platformu ve veli-öğretmen iletişim sistemleri
              </p>
              <ul className="home-sectoral-features">
                <li>Özel Okullar</li>
                <li>Kurslar ve Eğitim Merkezleri</li>
                <li>Online Eğitim Platformları</li>
              </ul>
              <Link to="/sektorel-cozumler" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
            
            <div className="home-sectoral-card">
              <div className="home-sectoral-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="home-sectoral-title">Turizm & Otelcilik</h3>
              <p className="home-sectoral-description">
                Rezervasyon sistemli, çok dilli ve görsel açıdan zengin turizm ve otelcilik web siteleri
              </p>
              <ul className="home-sectoral-features">
                <li>Oteller ve Pansiyonlar</li>
                <li>Tur ve Seyahat Acenteleri</li>
                <li>Tatil Köyleri</li>
              </ul>
              <Link to="/sektorel-cozumler" className="home-sectoral-link">
                Detayları İncele →
              </Link>
            </div>
          </div>
          
          <div className="home-sectoral-more">
            <Link to="/sektorel-cozumler" className="home-btn-secondary">
              Tüm Sektörel Çözümlerimizi Keşfedin
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="home-testimonials">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">Müşteri Yorumları</h2>
            <p className="home-section-description">
              Dijital çözüm ortağınız olarak müşterilerimize değer katmaktan gurur duyuyoruz
            </p>
          </div>
          
          <div className="home-testimonials-grid">
            <div className="home-testimonial-card">
              <div className="home-testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="home-testimonial-content">
                "Firmamız için hazırlanan web sitesi beklentilerimizin ötesinde oldu. Profesyonel yaklaşımları, hızlı geri dönüşleri ve çözüm odaklı çalışmaları için teşekkür ederiz."
              </p>
              <div className="home-testimonial-author">
                <div className="home-testimonial-avatar">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ahmet Yılmaz" />
                </div>
                <div className="home-testimonial-info">
                  <h4>Ahmet Yılmaz</h4>
                  <p>ABC Yapı Ltd. Şti. - Genel Müdür</p>
                </div>
              </div>
            </div>
            
            <div className="home-testimonial-card">
              <div className="home-testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="home-testimonial-content">
                "E-ticaret sitemizin yenilenmesi ve SEO çalışmaları sonrası satışlarımız %40 arttı. etki360 ekibine teşekkür ederiz, işlerinde gerçekten profesyoneller."
              </p>
              <div className="home-testimonial-author">
                <div className="home-testimonial-avatar">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Zeynep Kaya" />
                </div>
                <div className="home-testimonial-info">
                  <h4>Zeynep Kaya</h4>
                  <p>ModaVip - Pazarlama Müdürü</p>
                </div>
              </div>
            </div>
            
            <div className="home-testimonial-card">
              <div className="home-testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="home-testimonial-content">
                "Kliniğimizin web sitesi için aradığımız profesyonel hizmeti etki360'da bulduk. Sağlık sektörünün hassasiyetlerini anlayıp, hasta odaklı bir yaklaşım sergilediler."
              </p>
              <div className="home-testimonial-author">
                <div className="home-testimonial-avatar">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Dr. Mehmet Öz" />
                </div>
                <div className="home-testimonial-info">
                  <h4>Dr. Mehmet Öz</h4>
                  <p>Özel Sağlık Kliniği - Başhekim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Section */}
      <section className="home-latest-blog">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">Blog'dan Son Yazılar</h2>
            <p className="home-section-description">
              Dijital dünya ve web tasarımı hakkında bilgi alabileceğiniz içerikler
            </p>
          </div>
          
          <HomeBlogPosts />
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-content">
            <h2 className="home-cta-title">Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
            <p className="home-cta-description">
              Dijital dünyadaki yerinizi alın. Size özel çözümler için hemen iletişime geçin.
            </p>
            <div className="home-cta-buttons">
              <Link to="/iletisim" className="home-btn-primary">
                Ücretsiz Teklif Alın
              </Link>
              <Link to="/portfoy" className="home-btn-outline">
                Projelerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 