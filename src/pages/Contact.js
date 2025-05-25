import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackFormSubmit, trackButtonClick, trackContactAction } from '../hooks/useGoogleAnalytics';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form verilerini güncelle
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Google Analytics tracking
    trackFormSubmit('contact-form');
    trackContactAction('form_submit');
    
    // Simüle edilmiş form gönderimi
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      trackContactAction('form_success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        agreement: false
      });
    } catch (error) {
      setSubmitStatus('error');
      trackContactAction('form_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // LocalBusiness Schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://etki360.com/#organization",
    "name": "etki360",
    "alternateName": "etki360 Web Tasarım & Dijital Çözümler",
    "description": "İstanbul merkezli web tasarım ve dijital çözümler şirketi. Kurumsal web siteleri, e-ticaret, SEO ve dijital pazarlama hizmetleri.",
    "url": "https://etki360.com",
    "logo": "https://etki360.com/logo.png",
    "image": "https://etki360.com/images/etki360-office.jpg",
    "telephone": ["+90-542-155-33-15", "+90-544-488-23-03"],
    "email": "info@etki360.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
      "postalCode": "34000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-542-155-33-15",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-544-488-23-03",
        "contactType": "technical support",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR"
      },
      {
        "@type": "ContactPoint",
        "email": "info@etki360.com",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR"
      }
    ],
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
            "name": "Kurumsal Web Sitesi Tasarımı",
            "description": "Modern, responsive ve SEO uyumlu kurumsal web siteleri",
            "provider": {
              "@type": "Organization",
              "name": "etki360"
            }
          },
          "priceRange": "₺9,500 - ₺25,000"
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
            }
          },
          "priceRange": "₺27,999 - ₺75,000"
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
            }
          },
          "priceRange": "₺2,999/ay"
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
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Müşteri Yorumları"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "%100 müşteri memnuniyeti ile 50+ başarılı proje teslim edilmiştir."
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "TRY",
    "priceRange": "₺₺₺"
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ne kadar sürede geri dönüş yapıyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tüm taleplere 24 saat içinde geri dönüş yapıyoruz. Acil durumlar için WhatsApp üzerinden anında iletişim kurabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Danışmanlık ücretsiz mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, ilk danışmanlık görüşmemiz tamamen ücretsizdir. Projenizi değerlendirip size en uygun çözümü öneriyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Proje süresi ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proje süresi, karmaşıklığına göre değişir. Kurumsal siteler 2-4 hafta, e-ticaret projeleri 4-8 hafta sürmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Ödeme nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "%50 peşin, %50 teslimde olmak üzere iki taksitte ödeme alınmaktadır. Kurumsal müşteriler için özel ödeme planları mevcuttur."
        }
      }
    ]
  };

  // WebPage Schema for Contact Page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://etki360.com/iletisim",
    "url": "https://etki360.com/iletisim",
    "name": "İletişim - etki360 Web Tasarım",
    "description": "etki360 ile iletişime geçin. Ücretsiz danışmanlık için hemen arayın. Web tasarım, e-ticaret ve SEO hizmetleri için teklif alın.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://etki360.com/#website"
    },
    "about": {
      "@type": "Organization",
      "name": "etki360"
    },
    "mainEntity": {
      "@type": "ContactPage",
      "name": "etki360 İletişim Sayfası"
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
          "name": "İletişim",
          "item": "https://etki360.com/iletisim"
        }
      ]
    }
  };

  return (
    <div className="contact-page">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {/* Hero Section */}
      <header className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>İletişim</span>
            </nav>
            <h1 className="contact-hero-title">
              Dijital Projenizi <span className="contact-highlight">Konuşalım</span>
            </h1>
            <p className="contact-hero-description">
              Hayalinizdeki dijital projeyi gerçeğe dönüştürmek için buradayız. 
              Size özel çözümler geliştirmek ve sorularınızı yanıtlamak için 
              bizimle iletişime geçin.
            </p>
            <div className="contact-hero-stats">
              <div className="contact-stat-item">
                <span className="contact-stat-number">24 Saat</span>
                <span className="contact-stat-label">İçinde Geri Dönüş</span>
              </div>
              <div className="contact-stat-item">
                <span className="contact-stat-number">Ücretsiz</span>
                <span className="contact-stat-label">Danışmanlık</span>
              </div>
              <div className="contact-stat-item">
                <span className="contact-stat-number">7/24</span>
                <span className="contact-stat-label">Destek Hizmeti</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Form & Info Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <main className="contact-form-section">
              <header className="contact-form-header">
                <h2 className="contact-form-title">Proje Teklifi Alın</h2>
                <p className="contact-form-description">
                  Projeniz hakkında detaylı bilgi verin, size özel teklif hazırlayalım.
                </p>
              </header>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-grid">
                  {/* Ad Soyad */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-name" className="contact-form-label">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      placeholder="Adınız ve soyadınız"
                      required
                      aria-describedby="name-error"
                    />
                  </div>

                  {/* E-posta */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-email" className="contact-form-label">
                      E-posta Adresi *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      placeholder="ornek@email.com"
                      required
                      aria-describedby="email-error"
                    />
                  </div>

                  {/* Telefon */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone" className="contact-form-label">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      placeholder="+90 (5XX) XXX XX XX"
                    />
                  </div>

                  {/* Şirket */}
                  <div className="contact-form-group">
                    <label htmlFor="contact-company" className="contact-form-label">
                      Şirket/Kurum Adı
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="contact-form-input"
                      placeholder="Şirket adınız (opsiyonel)"
                    />
                  </div>

                  {/* Hizmet Türü */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="contact-service" className="contact-form-label">
                      İlgilendiğiniz Hizmet *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="contact-form-select"
                      required
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="kurumsal-web">Kurumsal Web Sitesi</option>
                      <option value="e-ticaret">E-Ticaret Çözümleri</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="seo">SEO & Performans</option>
                      <option value="mobil-uygulama">Mobil Uygulama</option>
                      <option value="ozel-yazilim">Özel Yazılım</option>
                      <option value="danismanlik">Danışmanlık</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  {/* Bütçe */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="contact-budget" className="contact-form-label">
                      Tahmini Bütçe Aralığı
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="contact-form-select"
                    >
                      <option value="">Bütçe aralığı seçiniz</option>
                      <option value="5000-15000">₺5.000 - ₺15.000</option>
                      <option value="15000-30000">₺15.000 - ₺30.000</option>
                      <option value="30000-50000">₺30.000 - ₺50.000</option>
                      <option value="50000-100000">₺50.000 - ₺100.000</option>
                      <option value="100000+">₺100.000+</option>
                      <option value="belirsiz">Henüz belirsiz</option>
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div className="contact-form-group contact-form-full">
                    <label htmlFor="contact-message" className="contact-form-label">
                      Proje Detayları *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="contact-form-textarea"
                      placeholder="Projeniz hakkında detaylı bilgi verin. Ne tür bir web sitesi istiyorsunuz? Hangi özellikler olmalı? Hedef kitleniz kimler?"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  {/* Sözleşme Onayı */}
                  <div className="contact-form-group contact-form-full">
                    <div className="contact-form-checkbox">
                      <input
                        type="checkbox"
                        id="contact-agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleInputChange}
                        className="contact-form-checkbox-input"
                        required
                      />
                      <label htmlFor="contact-agreement" className="contact-form-checkbox-label">
                        <Link to="/gizlilik" target="_blank">Gizlilik Politikası</Link>'nı okudum ve 
                        kişisel verilerimin işlenmesini kabul ediyorum. *
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="contact-form-submit">
                  <button
                    type="submit"
                    className={`contact-form-btn ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting || !formData.agreement}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact-form-spinner"></span>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M22 2L11 13"/>
                          <polygon points="22,2 15,22 11,13 2,9"/>
                        </svg>
                        Teklif Talebini Gönder
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="contact-form-success">
                      ✅ Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="contact-form-error">
                      ❌ Bir hata oluştu. Lütfen tekrar deneyin veya telefon ile iletişime geçin.
                    </div>
                  )}
                </div>
              </form>
            </main>

            {/* Contact Info Sidebar */}
            <aside className="contact-info-section">
              <div className="contact-info-card">
                <header className="contact-info-header">
                  <h3 className="contact-info-title">İletişim Bilgileri</h3>
                  <p className="contact-info-description">
                    Hızlı iletişim için aşağıdaki kanalları kullanabilirsiniz.
                  </p>
                </header>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-label">Telefon</h4>
                      <div className="contact-info-value">
                        <a 
                          href="tel:+905421553315" 
                          style={{ display: 'block', marginBottom: '4px' }}
                          onClick={() => trackButtonClick('Telefon 1', 'contact-phone')}
                        >
                          +90 (542) 155 33 15
                        </a>
                        <a 
                          href="tel:+905444882303"
                          onClick={() => trackButtonClick('Telefon 2', 'contact-phone')}
                        >
                          +90 (544) 488 23 03
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-label">E-posta</h4>
                      <a 
                        href="mailto:info@etki360.com" 
                        className="contact-info-value"
                        onClick={() => trackButtonClick('E-posta', 'contact-email')}
                      >
                        info@etki360.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-label">Adres</h4>
                      <address className="contact-info-value">
                        İstanbul, Türkiye<br />
                        (Uzaktan çalışma modeli)
                      </address>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-label">Çalışma Saatleri</h4>
                      <div className="contact-info-value">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 10:00 - 16:00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-social-links">
                  <h4 className="contact-social-title">Sosyal Medya</h4>
                  <div className="contact-social-buttons">
                    <a 
                      href="https://www.linkedin.com/company/etki360/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-btn" 
                      aria-label="LinkedIn"
                      onClick={() => trackButtonClick('LinkedIn', 'social-media')}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/etki360/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-btn" 
                      aria-label="Instagram"
                      onClick={() => trackButtonClick('Instagram', 'social-media')}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61576903310978" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-social-btn" 
                      aria-label="Facebook"
                      onClick={() => trackButtonClick('Facebook', 'social-media')}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="contact-quick-card">
                <h4 className="contact-quick-title">Hızlı İletişim</h4>
                <p className="contact-quick-description">
                  Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a 
                    href="https://wa.me/905421553315" 
                    className="contact-whatsapp-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackButtonClick('WhatsApp 1', 'contact-whatsapp')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp 1: (542) 155 33 15
                  </a>
                  <a 
                    href="https://wa.me/905444882303" 
                    className="contact-whatsapp-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackButtonClick('WhatsApp 2', 'contact-whatsapp')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp 2: (544) 488 23 03
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container">
          <header className="contact-faq-header">
            <h2 className="contact-faq-title">Sıkça Sorulan Sorular</h2>
            <p className="contact-faq-description">
              İletişim süreciyle ilgili merak ettiğiniz sorular
            </p>
          </header>
          <div className="contact-faq-grid">
            <article className="contact-faq-item">
              <h3 className="contact-faq-question">Ne kadar sürede geri dönüş yapıyorsunuz?</h3>
              <p className="contact-faq-answer">
                Tüm taleplere 24 saat içinde geri dönüş yapıyoruz. Acil durumlar için 
                WhatsApp üzerinden anında iletişim kurabilirsiniz.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3 className="contact-faq-question">Danışmanlık ücretsiz mi?</h3>
              <p className="contact-faq-answer">
                Evet, ilk danışmanlık görüşmemiz tamamen ücretsizdir. Projenizi 
                değerlendirip size en uygun çözümü öneriyoruz.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3 className="contact-faq-question">Proje süresi ne kadar?</h3>
              <p className="contact-faq-answer">
                Proje süresi, karmaşıklığına göre değişir. Kurumsal siteler 2-4 hafta, 
                e-ticaret projeleri 4-8 hafta sürmektedir.
              </p>
            </article>

            <article className="contact-faq-item">
              <h3 className="contact-faq-question">Ödeme nasıl yapılır?</h3>
              <p className="contact-faq-answer">
                %50 peşin, %50 teslimde olmak üzere iki taksitte ödeme alınmaktadır. 
                Kurumsal müşteriler için özel ödeme planları mevcuttur.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">Hemen Başlayalım!</h2>
            <p className="contact-cta-description">
              Dijital projenizi hayata geçirmek için doğru adrestesiniz. 
              Profesyonel ekibimizle tanışın ve farkı yaşayın.
            </p>
            <div className="contact-cta-features">
              <div className="contact-cta-feature">
                <span className="contact-feature-icon">✓</span>
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="contact-cta-feature">
                <span className="contact-feature-icon">✓</span>
                <span>24 Saat İçinde Geri Dönüş</span>
              </div>
              <div className="contact-cta-feature">
                <span className="contact-feature-icon">✓</span>
                <span>Profesyonel Ekip</span>
              </div>
            </div>
            <div className="contact-cta-buttons">
              <a 
                href="tel:+905421553315" 
                className="contact-cta-btn-primary"
                onClick={() => trackButtonClick('Hemen Ara', 'contact-cta')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Hemen Ara
              </a>
              <Link 
                to="/hizmetler" 
                className="contact-cta-btn-secondary"
                onClick={() => trackButtonClick('Hizmetlerimizi İncele', 'contact-cta')}
              >
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 