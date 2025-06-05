import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './HairTransplantClinic.css';

const HairTransplantClinic = () => {
  // SEO için Schema.org Markup - Service Schema
  const hairTransplantServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Saç Ekim Kliniği Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Saç Ekim Web Sitesi", "Saç Ekimi Web Sitesi", "Saç Ekimi Kliniği Web Sitesi"],
    "description": "Saç ekim klinikleri için özel tasarlanmış, güven veren, öncesi-sonrası galeri ve online randevu sistemi içeren profesyonel web sitesi tasarımı ve geliştirme hizmetleri. Google'da üst sıralarda yer almanızı sağlayan SEO uyumlu saç ekim kliniği web siteleri."
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Saç ekim kliniği web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, saç ekim kliniği web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde online randevu sistemi entegrasyonu gibi özellikler ekstra süre gerektirebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Online randevu sistemi nasıl çalışıyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online randevu sistemi, kliniğinizin çalışma saatlerine ve doktor müsaitlik durumuna göre ayarlanır. Hastalar, uygun tarih ve saati seçerek formlarını doldurur. Sistem otomatik olarak hastaları SMS ve e-posta ile bilgilendirir, ayrıca randevu öncesi hatırlatma mesajları gönderir."
        }
      },
      {
        "@type": "Question",
        "name": "Saç ekim kliniği web sitesi fiyatları ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saç ekim kliniği web sitesi fiyatları 15.000₺'den başlamaktadır. Başlangıç paketi 15.000₺, Premium paket 28.000₺, Kurumsal paket 45.000₺'dir. Tüm paketlerde responsive tasarım, öncesi-sonrası galeri ve temel SEO optimizasyonu bulunmaktadır."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Saç Ekim Kliniği Web Sitesi Tasarımı | Öncesi-Sonrası Galerili Web Sitesi | etki360",
    "description": "Saç ekim klinikleri için özel web sitesi tasarımı. Öncesi-sonrası galeri, online randevu sistemi, çok dilli yapı. 15.000₺'den başlayan fiyatlarla profesyonel saç ekim kliniği web sitesi.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    }
  };

  return (
    <div className="sectoral-page hair-transplant-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Saç Ekim Kliniği Web Sitesi Tasarımı | Öncesi-Sonrası Galerili Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Saç ekim kliniği web sitesi tasarımı ve geliştirme hizmetleri. Öncesi-sonrası galeri, online randevu sistemi, çok dilli yapı. Saç ekim kliniği web sitesi fiyatları 15.000₺'den başlar. SEO uyumlu, güven veren web sitesi çözümleri." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="saç ekim kliniği web sitesi, saç ekimi web sitesi, saç ekim web sitesi tasarımı, online randevu sistemi, öncesi sonrası galeri, saç ekim kliniği web sitesi fiyatları, saç ekimi hasta portföyü, çok dilli web sitesi" 
        />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(hairTransplantServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="hair-transplant-hero">
        <div className="container">
          <div className="hair-transplant-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/saglik">Sağlık</Link> / <span>Saç Ekim Kliniği Web Sitesi</span>
          </div>
          <div className="hair-transplant-hero-content">
            <div className="hair-transplant-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Saç Ekim Kliniği Web Sitesi</strong> - <span className="sectoral-highlight">Öncesi-Sonrası Galerili</span> Profesyonel Çözümler
              </h1>
              <p className="sectoral-hero-description">
                <strong>Saç ekim kliniğiniz</strong> için <em>güven veren</em>, <strong>hastaları ikna eden</strong> öncesi-sonrası galeri ve 
                <strong>online randevu sistemi</strong> barındıran <strong>profesyonel saç ekim web sitesi</strong> çözümleri. 
                <strong>15.000₺</strong>'den başlayan fiyatlarla <strong>çok dilli</strong> web sitesi tasarımı.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="hair-transplant-hero-visual">
              <div className="hair-transplant-mockup">
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
                  <div className="mockup-before-after">
                    <div className="mockup-before"></div>
                    <div className="mockup-after"></div>
                  </div>
                  <div className="mockup-doctors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Saç Ekim Kliniği Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Potansiyel hastalarınızın <strong>%83'ü</strong>, bir <strong>saç ekim kliniğini</strong> tercih etmeden önce <em>web sitesini inceliyor</em>. <strong>Profesyonel saç ekim web sitesi</strong> ile hasta sayınızı artırın.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="sectoral-card-title">Güven Oluşturma</h3>
              <p className="sectoral-card-text">
                <strong>Saç ekimi</strong>, hastaların ciddi bir <em>güven duygusu</em> gerektiren bir estetik operasyondur. <strong>Profesyonel bir saç ekim kliniği web sitesi</strong> ile uzmanlığınızı ve güvenilirliğinizi vurgulayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h3 className="sectoral-card-title">Öncesi-Sonrası Sonuçlar</h3>
              <p className="sectoral-card-text">
                <strong>Öncesi-sonrası galeri</strong> ile başarılı sonuçlarınızı sergileyerek <em>potansiyel hastaları ikna edin</em>. <strong>Saç ekim web sitenizde</strong> görsel odaklı içerikle başarılarınızı gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="sectoral-card-title">Randevu Sistemi</h3>
              <p className="sectoral-card-text">
                Online randevu sistemi ile 7/24 rezervasyon kabul edin, hastaların kolayca konsültasyon talebinde bulunmalarını sağlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="sectoral-card-title">Uluslararası Hastalar</h3>
              <p className="sectoral-card-text">
                Çok dilli web sitesi ile sağlık turizmi potansiyelinden faydalanın, yurtdışından gelen hastalar için özel içerikler sunun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Saç Ekim Kliniği Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Saç ekim kliniğinizin</strong> ihtiyaçlarına özel, <em>hasta odaklı</em> <strong>web sitesi çözümleri</strong> ile <strong>yurt içi ve yurt dışından</strong> daha fazla hasta kazanın
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Özel Tasarım</h3>
                <p className="sectoral-feature-text">
                  Kliniğinizin kurumsal kimliğine uygun, profesyonel ve modern tasarım. Marka değerinizi yansıtan renk paleti ve görsel dil.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Öncesi-Sonrası Galeri</h3>
                <p className="sectoral-feature-text">
                  Başarılı operasyon sonuçlarınızı sergileyebileceğiniz filtrelenebilir galeri sayfaları. Öncesi-sonrası karşılaştırma görselleri.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Doktor Profilleri</h3>
                <p className="sectoral-feature-text">
                  Uzman kadronuzu tanıtan detaylı profil sayfaları. Doktorlarınızın uzmanlık alanları, eğitimleri ve başarıları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  Takvim entegrasyonu ile online randevu alma özelliği. SMS ve e-posta hatırlatma sistemleri ile hasta takibi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Konsültasyon</h3>
                <p className="sectoral-feature-text">
                  Canlı chat ve video konsültasyon özellikleri. Potansiyel hastaların sorularını anında cevaplayın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-language"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Çoklu Dil Desteği</h3>
                <p className="sectoral-feature-text">
                  Uluslararası hastalar için çoklu dil desteği. İngilizce, Almanca, Arapça gibi dillerde içerik yönetimi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-medical-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Blog ve İçerik Yönetimi</h3>
                <p className="sectoral-feature-text">
                  Saç ekimi ve bakımı hakkında bilgilendirici içerikler. SEO dostu blog sayfaları ile organik trafiği artırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Mobil Uyumlu Tasarım</h3>
                <p className="sectoral-feature-text">
                  Her cihazda mükemmel görüntülenen responsive tasarım. Mobil kullanıcılar için optimize edilmiş arayüz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel <strong>Saç Ekim Kliniği Web Sitesi</strong> Faydaları</h2>
            <p className="sectoral-section-subtitle">
              <strong>SEO uyumlu</strong> ve <em>öncesi-sonrası galeri</em> içeren <strong>saç ekim kliniği web sitesi</strong>, <strong>hasta kazanımını %78 artırır</strong> ve <strong>Google'da</strong> üst sıralarda yer almanızı sağlar
            </p>
          </div>

          <div className="sectoral-benefits-content">
            <div className="hair-transplant-benefits-mockup">
              <div className="benefits-mockup-container">
                <div className="benefits-mockup-header">
                  <div className="benefits-mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="benefits-mockup-content">
                  <div className="benefits-mockup-nav"></div>
                  <div className="benefits-mockup-title"></div>
                  <div className="benefits-mockup-gallery">
                    <div className="benefits-mockup-before-after">
                      <div className="benefits-mockup-item">
                        <div className="benefits-mockup-label">Öncesi</div>
                      </div>
                      <div className="benefits-mockup-item">
                        <div className="benefits-mockup-label">Sonrası</div>
                      </div>
                    </div>
                  </div>
                  <div className="benefits-mockup-testimonial">
                    <div className="benefits-mockup-avatar"></div>
                    <div className="benefits-mockup-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectoral-benefits-list">
              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Hasta Güvenini Artırır</h3>
                  <p>Profesyonel bir web sitesi, potansiyel hastaların kliniğinize güven duymasını sağlar.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Uluslararası Hastalara Ulaşır</h3>
                  <p>Çok dilli içerikler ile sağlık turizminden gelen hastalara ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Operasyon Öncesi Bilgilendirme</h3>
                  <p>Hastaları işlem öncesinde detaylı bilgilendirerek endişelerini giderebilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>İş Süreçlerini Otomatikleştirir</h3>
                  <p>Online randevu sistemi ile sekreterlik iş yükünü azaltır, insan hatasını minimize eder.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>SEO ile <strong>Google'da</strong> Üst Sıralarda Yer Alın</h3>
                  <p><strong>SEO odaklı içerikler</strong> ile "<em>saç ekimi</em>", "<em>saç ekim kliniği</em>", "<em>saç ekim fiyatları</em>", "<em>en iyi saç ekim merkezi</em>" gibi <strong>önemli anahtar kelimelerde</strong> üst sıralarda yer alın ve <strong>organik trafiğinizi %124 artırın</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="hair-transplant-pricing">
        <div className="container">
          <div className="hair-transplant-section-header">
            <h2 className="hair-transplant-section-title">Saç Ekim Kliniği Web Sitesi Paketleri</h2>
            <p className="hair-transplant-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="hair-transplant-pricing-grid">
            <div className="hair-transplant-pricing-card">
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Başlangıç Paketi</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">15.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 8 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Öncesi-Sonrası Galeri</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google Analytics</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Randevu Sistemi</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Çoklu Dil Desteği</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Konsültasyon</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="hair-transplant-pricing-card featured">
              <div className="hair-transplant-pricing-badge">Popüler</div>
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Premium Paket</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">28.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Öncesi-Sonrası Galeri</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Dil Desteği (TR/EN)</li>
                  <li><i className="fas fa-check"></i> Doktor Profil Sayfaları</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google İş Kaydı Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Konsültasyon</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="hair-transplant-pricing-card">
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Kurumsal Paket</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">45.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 360° Klinik Turu</li>
                  <li><i className="fas fa-check"></i> Profesyonel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Online Konsültasyon Modülü</li>
                  <li><i className="fas fa-check"></i> 4 Dil Desteği</li>
                  <li><i className="fas fa-check"></i> Hasta Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> SMS ve E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Aylık SEO Raporu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Özel İçerik Oluşturma</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Saç Ekim Kliniği Web Sitesi - Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              <strong>Saç ekim kliniği web sitesi</strong> hakkında merak ettiğiniz tüm bilgiler, <em>fiyatlar</em>, <em>teslim süreleri</em> ve <em>özellikler</em>
            </p>
          </div>

          <div className="sectoral-faq-grid">
            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Saç ekim kliniği web sitesi ne kadar sürede hazır olur?</h3>
              <p className="sectoral-faq-answer">
                Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, saç ekim kliniği web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde online randevu sistemi entegrasyonu gibi özellikler ekstra süre gerektirebilir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Web siteme kendim içerik ekleyebilir miyim?</h3>
              <p className="sectoral-faq-answer">
                Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Basit bir panel üzerinden blog yazıları, hasta öncesi-sonrası fotoğrafları ve diğer içerikleri ekleyip düzenleyebilirsiniz.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Online randevu sistemi nasıl çalışıyor?</h3>
              <p className="sectoral-faq-answer">
                Online randevu sistemi, kliniğinizin çalışma saatlerine ve doktor müsaitlik durumuna göre ayarlanır. Hastalar, uygun tarih ve saati seçerek formlarını doldurur. Sistem otomatik olarak hastaları SMS ve e-posta ile bilgilendirir, ayrıca randevu öncesi hatırlatma mesajları gönderir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Web sitesi SEO çalışması içeriyor mu?</h3>
              <p className="sectoral-faq-answer">
                Evet, tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. Premium ve Kurumsal paketlerde ise "saç ekimi", "saç ekim fiyatları", "saç ekim kliniği" gibi anahtar kelimeler için detaylı SEO çalışması yapılmaktadır. Kurumsal pakette aylık SEO raporları ve düzenli içerik güncellemeleri de dahildir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Sitenin bakımı ve güncellemeleri nasıl yapılır?</h3>
              <p className="sectoral-faq-answer">
                Web sitenizin güvenlik güncellemeleri, yedeklemeleri ve teknik bakımı paket süreniz boyunca tarafımızca düzenli olarak yapılmaktadır. İçerik güncellemeleri için size kullanımı kolay bir panel sunulmaktadır. İhtiyaç duyduğunuzda teknik destek ekibimiz yardımcı olmaktadır.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Yabancı dil desteği nasıl sağlanıyor?</h3>
              <p className="sectoral-faq-answer">
                Premium pakette Türkçe ve İngilizce, Kurumsal pakette ise toplam 4 dil desteği sunuyoruz. Her dil için ayrı URL yapısı oluşturularak, o dilde arama yapan kullanıcıların sitenizi bulması sağlanıyor. İçerik çevirileri profesyonel çevirmenler tarafından yapılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hair-transplant-cta">
        <div className="container">
          <div className="hair-transplant-cta-content">
            <h2 className="hair-transplant-cta-title">
              <strong>Saç Ekim Kliniğiniz</strong> İçin <span className="sectoral-highlight">Google'da Üst Sıralarda</span> Yer Alan Bir Web Sitesi Oluşturalım
            </h2>
            <p className="hair-transplant-cta-text">
              <strong>15.000₺</strong>'den başlayan fiyatlarla <strong>SEO uyumlu</strong>, <em>öncesi-sonrası galeri</em> ve <strong>online randevu sistemi</strong> içeren <strong>saç ekim kliniği web sitesi</strong> için hemen iletişime geçin.
            </p>
            <div className="hair-transplant-cta-buttons">
              <Link to="/iletisim" className="primary-button">Ücretsiz Keşif Toplantısı</Link>
              <a href="tel:+905444882303" className="secondary-button">
                <i className="fas fa-phone-alt"></i> Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HairTransplantClinic; 