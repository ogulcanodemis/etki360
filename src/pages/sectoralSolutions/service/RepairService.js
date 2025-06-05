import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './RepairService.css';

const RepairService = () => {
  // SEO için Schema.org Markup - Service Schema
  const repairServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tamir Servisi Web Sitesi Tasarımı ve Geliştirme",
    "alternateName": ["Teknik Servis Web Sitesi", "Beyaz Eşya Tamir Web Sitesi", "Elektronik Tamir Web Sitesi", "Servis Takip Web Sitesi"],
    "description": "Teknik servis, beyaz eşya ve elektronik tamir firmaları için online randevu sistemi, tamir takip modülü ve müşteri yönetimi özellikli profesyonel web sitesi tasarımı ve geliştirme hizmetleri. Google'da üst sıralarda yer almanızı sağlayan SEO uyumlu tamir servisi web siteleri."
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tamir servisi web sitesi ne kadar sürede hazır olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tercih ettiğiniz pakete bağlı olarak, tamir servisi web sitesi genellikle 2-4 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha kısa olabilirken, Kurumsal paket için özel entegrasyonlar sebebiyle 4-6 hafta gerekebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Online randevu sistemi nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online randevu sistemi, müşterilerinizin web siteniz üzerinden mevcut servis saatlerinizi görmesine ve uygun bir zaman dilimi seçmesine olanak tanır. Sistem, teknisyen müsaitliğini ve iş yükünü dikkate alarak en uygun saatleri sunar. Randevu oluşturulduktan sonra, müşteriye ve servis ekibinize otomatik bildirimler gönderilir."
        }
      },
      {
        "@type": "Question",
        "name": "Tamir servisi web sitesi maliyeti ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tamir servisi web sitesi fiyatları 6.900₺'den başlamaktadır. Başlangıç paketi 6.900₺, Premium paket 12.900₺, Kurumsal paket 22.900₺'dir. Tüm paketlerde responsive tasarım, WhatsApp entegrasyonu ve mobil uyumlu tasarım bulunmaktadır."
        }
      }
    ]
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tamir Servisi Web Sitesi Tasarımı | Randevu ve Takip Sistemli Web Sitesi",
    "description": "Teknik servis, beyaz eşya ve elektronik tamir firmaları için online randevu ve tamir takip sistemli web sitesi tasarımı. 6.900₺'den başlayan fiyatlarla profesyonel tamir servisi web sitesi.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    }
  };

  return (
    <div className="sectoral-page repair-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Tamir Servisi Web Sitesi Tasarımı | Randevu ve Takip Sistemli Web Sitesi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Tamir servisi web sitesi tasarımı ve kurma hizmetleri. Online randevu sistemi, tamir takip modülü, müşteri yönetimi. Uygun tamir servisi web sitesi fiyatları 6.900₺'den başlar. Google'da üst sıralarda yer alan SEO uyumlu teknik servis web siteleri." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="tamir servisi web sitesi, teknik servis web sitesi, beyaz eşya tamir web sitesi, elektronik tamir web sitesi, tamir takip sistemi, servis randevu sistemi, servis web sitesi tasarımı, tamir servisi web sitesi fiyatları" 
        />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(repairServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="repair-hero">
        <div className="container">
          <div className="repair-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/hizmet">Hizmet</Link> / <span>Tamir Servisi Web Sitesi</span>
          </div>
          <div className="repair-hero-content">
            <div className="repair-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Tamir Servisi Web Sitesi</strong> - <span className="sectoral-highlight">Randevu ve Takip Sistemli</span> Profesyonel Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                <strong>Beyaz eşya, elektronik cihaz</strong> veya <strong>teknik servis hizmeti</strong> veren firmanız için <em>online randevu sistemi</em>, <strong>tamir takip modülü</strong> ve 
                <strong>müşteri yönetimi</strong> özellikli <strong>profesyonel tamir servisi web sitesi</strong> çözümleri. 
                <strong>Uygun tamir servisi web sitesi</strong> fiyatlarıyla <strong>6.900₺</strong>'den başlayan paketler.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="repair-hero-visual">
              <div className="repair-mockup">
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
                  <div className="mockup-tracking">
                    <div className="mockup-search-bar"></div>
                    <div className="mockup-progress"></div>
                  </div>
                  <div className="mockup-services">
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

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Tamir Servisi Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Araştırmalar gösteriyor ki, <strong>teknik servis arayan müşterilerin %82'si</strong> önce internette <strong>profesyonel bir tamir servisi</strong> aramaktadır. <strong>Randevu sistemli web sitesi</strong> ile <em>müşterilerinize kolay erişim sağlayın</em>.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="sectoral-card-title">Online Randevu Sistemi</h3>
              <p className="sectoral-card-text">
                Müşterileriniz <strong>7/24 online randevu</strong> alabilir, <em>servis iş yükünüzü</em> dengeli şekilde planlayabilirsiniz. <strong>Tamir servisi web siteniz</strong> ile operasyonel verimliliği artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                <strong>"Yakınımda tamir servisi"</strong> veya <strong>"beyaz eşya tamiri"</strong> araması yapan potansiyel müşterilerin karşısına çıkarak, <em>bölgenizdeki rakiplerinizden öne geçin</em>. <strong>Tamir servisi web sitesi SEO</strong> ile yeni müşteriler kazanın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3 className="sectoral-card-title">Tamir Durumu Takip</h3>
              <p className="sectoral-card-text">
                Müşterileriniz <strong>tamir sürecini online takip</strong> ederek zamandan tasarruf edebilir, <em>müşteri memnuniyetini artırabilirsiniz</em>. <strong>Teknik servis web sitesi</strong> ile servis kalitesini yükseltin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="sectoral-card-title">Müşteri Geri Bildirimi</h3>
              <p className="sectoral-card-text">
                Müşteri yorumları ve değerlendirmeleri, yeni müşterileri ikna etmenizde en güçlü pazarlama aracıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Tamir Servisi Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Teknik servis firmanızın</strong> ihtiyaçlarına özel, <em>müşteri odaklı</em> <strong>tamir servisi web sitesi çözümleri</strong> ile hizmet kalitenizi artırın ve <strong>daha fazla müşteriye</strong> ulaşın
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Gelişmiş Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  <strong>Tamir servisi web sitenizde</strong> takvim entegrasyonlu, servis çalışanlarının iş yüküne göre <em>optimum randevu oluşturan</em> <strong>akıllı servis rezervasyon sistemi</strong> ile müşteri memnuniyetini artırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Arıza Tespit Formu</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin cihaz markası, modeli ve arıza semptomlarını kolayca girebilecekleri akıllı arıza tespit formları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Tamir Takip Sistemi</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin <strong>tamir sürecini adım adım takip</strong> edebilecekleri, <em>servis numarası ile sorgulama</em> yapabilecekleri <strong>online tamir takip sistemi</strong>. <strong>Beyaz eşya ve elektronik tamir</strong> durumunu anlık kontrol imkanı.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Ödeme Sistemi</h3>
                <p className="sectoral-feature-text">
                  Servis ücretlerini online tahsil edebileceğiniz, taksit seçenekleri sunabileceğiniz güvenli ödeme sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">SMS Bildirim Sistemi</h3>
                <p className="sectoral-feature-text">
                  Randevu hatırlatma, tamir durumu güncelleme ve tamamlanan işlemler için otomatik SMS bildirim sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-list-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Servis Kataloğu</h3>
                <p className="sectoral-feature-text">
                  Verdiğiniz tüm tamir ve bakım hizmetlerini kategorize ederek müşterilerinize sunabileceğiniz detaylı katalog.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Müşteri Değerlendirme Sistemi</h3>
                <p className="sectoral-feature-text">
                  Tamamlanan her servis sonrası müşterilerinizin deneyimlerini paylaşabilecekleri değerlendirme sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Servis Yönetim Paneli</h3>
                <p className="sectoral-feature-text">
                  Teknik servis operasyonlarınızı tek noktadan yönetebileceğiniz, iş emirleri oluşturabileceğiniz admin paneli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="repair-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Tamir Servisinize Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, teknik servisinize nasıl değer katar?
            </p>
          </div>

          <div className="repair-benefits-content">
            <div className="repair-benefits-mockup">
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
                  <div className="benefits-mockup-tracking">
                    <div className="benefits-mockup-search"></div>
                    <div className="benefits-mockup-steps">
                      <div className="benefits-mockup-step active"></div>
                      <div className="benefits-mockup-step active"></div>
                      <div className="benefits-mockup-step"></div>
                      <div className="benefits-mockup-step"></div>
                    </div>
                    <div className="benefits-mockup-details"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="repair-benefits-list">
              <div className="repair-benefit-item">
                <div className="repair-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="repair-benefit-text">
                  <h3>Operasyonel Verimlilik</h3>
                  <p>Online randevu sistemi sayesinde iş planlamanızı optimize ederek %30'a varan verimlilik artışı sağlayabilirsiniz.</p>
                </div>
              </div>

              <div className="repair-benefit-item">
                <div className="repair-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="repair-benefit-text">
                  <h3>Müşteri Çağrılarında Azalma</h3>
                  <p>Tamir durum takip sistemi sayesinde "tamiratım ne durumda?" aramalarında %70'e varan azalma görülebilir.</p>
                </div>
              </div>

              <div className="repair-benefit-item">
                <div className="repair-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="repair-benefit-text">
                  <h3>Yerel Aramalarda Üst Sıralarda</h3>
                  <p>Google'da "yakınımda beyaz eşya tamiri" gibi aramalarda üst sıralarda yer alarak müşteri potansiyelinizi artırın.</p>
                </div>
              </div>

              <div className="repair-benefit-item">
                <div className="repair-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="repair-benefit-text">
                  <h3>Profesyonel İmaj</h3>
                  <p>Profesyonel bir web sitesi, müşterilerin gözünde teknik yeterliliğinizi ve güvenilirliğinizi pekiştirir.</p>
                </div>
              </div>

              <div className="repair-benefit-item">
                <div className="repair-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="repair-benefit-text">
                  <h3>Müşteri Sadakati</h3>
                  <p>Müşteri memnuniyeti odaklı web sitesi yaklaşımı, tekrar eden müşteri oranınızı %40'a kadar artırabilir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="repair-pricing">
        <div className="container">
          <div className="repair-section-header">
            <h2 className="repair-section-title">Tamir Servisi Web Sitesi Paketleri</h2>
            <p className="repair-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="repair-pricing-grid">
            <div className="repair-pricing-card">
              <div className="repair-pricing-header">
                <h3 className="repair-pricing-title">Başlangıç Paketi</h3>
                <div className="repair-pricing-price">
                  <span className="repair-price-amount">6.900 ₺</span>
                  <span className="repair-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="repair-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Hizmet Kataloğu</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="repair-pricing-disabled"><i className="fas fa-times"></i> Online Randevu Sistemi</li>
                  <li className="repair-pricing-disabled"><i className="fas fa-times"></i> Tamir Takip Sistemi</li>
                  <li className="repair-pricing-disabled"><i className="fas fa-times"></i> Müşteri Yönetim Paneli</li>
                </ul>
              </div>
              <div className="repair-pricing-footer">
                <Link to="/iletisim" className="repair-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="repair-pricing-card featured">
              <div className="repair-pricing-badge">Popüler</div>
              <div className="repair-pricing-header">
                <h3 className="repair-pricing-title">Premium Paket</h3>
                <div className="repair-pricing-price">
                  <span className="repair-price-amount">12.900 ₺</span>
                  <span className="repair-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="repair-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Arıza Tespit Formu</li>
                  <li><i className="fas fa-check"></i> Tamir Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> SMS Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Müşteri Değerlendirme Sistemi</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="repair-pricing-disabled"><i className="fas fa-times"></i> Teknik Servis Yönetim Paneli</li>
                </ul>
              </div>
              <div className="repair-pricing-footer">
                <Link to="/iletisim" className="repair-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="repair-pricing-card">
              <div className="repair-pricing-header">
                <h3 className="repair-pricing-title">Kurumsal Paket</h3>
                <div className="repair-pricing-price">
                  <span className="repair-price-amount">22.900 ₺</span>
                  <span className="repair-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="repair-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Teknik Servis Yönetim Paneli</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Sistemi</li>
                  <li><i className="fas fa-check"></i> Teknisyen Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> Detaylı Müşteri Analizi</li>
                  <li><i className="fas fa-check"></i> Mobil Uygulama Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Parça Stok Yönetimi</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="repair-pricing-footer">
                <Link to="/iletisim" className="repair-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="repair-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Tamir servisi web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="repair-faq-grid">
            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Tamir servisi web sitesi ne kadar sürede hazır olur?</h3>
              <p className="repair-faq-answer">
                Tercih ettiğiniz pakete bağlı olarak, tamir servisi web sitesi genellikle 2-4 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha kısa olabilirken, Kurumsal paket için özel entegrasyonlar sebebiyle 4-6 hafta gerekebilir.
              </p>
            </div>

            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Online randevu sistemi nasıl çalışır?</h3>
              <p className="repair-faq-answer">
                Online randevu sistemi, müşterilerinizin web siteniz üzerinden mevcut servis saatlerinizi görmesine ve uygun bir zaman dilimi seçmesine olanak tanır. Sistem, teknisyen müsaitliğini ve iş yükünü dikkate alarak en uygun saatleri sunar. Randevu oluşturulduktan sonra, müşteriye ve servis ekibinize otomatik bildirimler gönderilir.
              </p>
            </div>

            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Tamir takip sistemi ne sağlar?</h3>
              <p className="repair-faq-answer">
                Tamir takip sistemi, müşterilerin cihazlarının tamir sürecini adım adım takip etmesini sağlar. Müşteriler tamir numaralarını girerek cihazlarının "arıza tespiti yapıldı", "yedek parça bekleniyor", "tamir aşamasında", "test ediliyor", "tamamlandı" gibi aşamalarını görebilirler. Bu sistem, müşteri çağrı merkezinizin yükünü azaltır ve şeffaflığı artırır.
              </p>
            </div>

            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Teknisyen takip sistemi nedir?</h3>
              <p className="repair-faq-answer">
                Kurumsal paketimizde sunulan teknisyen takip sistemi, sahada görev yapan teknisyenlerinizin konumlarını ve mevcut iş durumlarını gerçek zamanlı olarak görmenizi sağlar. Bu sayede, yeni gelen servis çağrılarını en yakın ve uygun teknisyene yönlendirebilir, müşterilerinize tahmini varış süresini bildirebilirsiniz.
              </p>
            </div>

            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Web sitesi üzerinden ödeme alma süreci nasıl işler?</h3>
              <p className="repair-faq-answer">
                Premium ve Kurumsal paketlerimizde yer alan online ödeme sistemi, müşterilerinizin servis ücretlerini kredi kartı, banka kartı veya EFT/havale yöntemleriyle ödeyebilmesini sağlar. Sistem, popüler ödeme altyapılarıyla (iyzico, PayTR, Paynet vb.) entegre çalışır. Ayrıca taksit seçenekleri de sunabilirsiniz. Tüm ödemeler güvenli bir şekilde gerçekleşir ve otomatik olarak muhasebe sisteminize kaydedilir.
              </p>
            </div>

            <div className="repair-faq-item">
              <h3 className="repair-faq-question">Parça stok yönetimi özelliği neler sunar?</h3>
              <p className="repair-faq-answer">
                Kurumsal paketimizde yer alan parça stok yönetimi, sık kullandığınız yedek parçaların stok takibini yapmanızı sağlar. Sistem, kritik stok seviyesine düşen parçalar için otomatik bildirimler gönderir, tedarikçilerden fiyat listeleri alabilir ve sipariş geçmişini takip edebilirsiniz. Ayrıca, hangi parçaların daha sık kullanıldığına dair istatistikler sunarak stok planlamanızı optimize etmenize yardımcı olur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="repair-cta">
        <div className="container">
          <div className="repair-cta-content">
            <h2 className="repair-cta-title">
              <strong>Tamir Servisiniz İçin</strong> <span className="sectoral-highlight">Profesyonel</span> <strong>Web Sitesi</strong> Oluşturalım
            </h2>
            <p className="repair-cta-text">
              <strong>Müşteri memnuniyetini artıran</strong>, <em>operasyonel süreçlerinizi iyileştiren</em> ve <strong>teknik servis yönetiminizi</strong> kolaylaştıran bir <strong>tamir servisi web sitesi</strong> için hemen iletişime geçin.
            </p>
            <div className="repair-cta-buttons">
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

export default RepairService; 