import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-service">
      {/* Hero Section */}
      <section className="landing-service-hero">
        <div className="container">
          <div className="landing-hero-content">
            <div className="landing-hero-text">
              <nav className="landing-breadcrumb">
                <Link to="/">Ana Sayfa</Link>
                <span>/</span>
                <Link to="/hizmetler">Hizmetler</Link>
                <span>/</span>
                <span>Landing Page</span>
              </nav>
              <h1 className="landing-hero-title">
                <span className="landing-highlight">Landing Page</span> Tasarım & Geliştirme
              </h1>
              <p className="landing-hero-description">
                Dönüşüm odaklı, hızlı yüklenen ve kullanıcı deneyimi optimize edilmiş 
                tek sayfalık tanıtım siteleri ile potansiyel müşterilerinizi gerçek müşteriye dönüştürün.
              </p>
              <div className="landing-hero-buttons">
                <Link to="/iletisim" className="landing-btn-primary">
                  Ücretsiz Analiz
                </Link>
                <Link to="/portfoy" className="landing-btn-secondary">
                  Landing Page Örnekleri
                </Link>
              </div>
            </div>
            <div className="landing-hero-visual">
              <div className="landing-mockup">
                <div className="landing-mockup-header">
                  <div className="landing-mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="landing-mockup-url">landing.etki360.com</span>
                </div>
                <div className="landing-mockup-content">
                  <div className="landing-hero-section">
                    <div className="landing-hero-block"></div>
                    <div className="landing-cta-button"></div>
                  </div>
                  <div className="landing-mockup-features-section">
                    <div className="landing-mockup-feature-item"></div>
                    <div className="landing-mockup-feature-item"></div>
                    <div className="landing-mockup-feature-item"></div>
                    <div className="landing-mockup-feature-item"></div>
                    <div className="landing-mockup-feature-item"></div>
                    <div className="landing-mockup-feature-item"></div>
                  </div>
                  <div className="landing-conversion-section">
                    <div className="landing-form-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features-section">
        <div className="container">
          <header className="landing-section-header">
            <h2 className="landing-section-title">Landing Page Özellikleri</h2>
            <p className="landing-section-description">
              Yüksek dönüşüm oranları için optimize edilmiş özellikler
            </p>
          </header>
          <div className="landing-features-grid">
            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">Dönüşüm Odaklı Tasarım</h3>
              <p className="landing-feature-description">
                Kullanıcıları harekete geçiren, psikolojik tetikleyiciler içeren tasarım
              </p>
            </article>

            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">Hızlı Yükleme</h3>
              <p className="landing-feature-description">
                3 saniyeden kısa yükleme süresi ile kullanıcı kaybını önleme
              </p>
            </article>

            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">Mobil Optimizasyon</h3>
              <p className="landing-feature-description">
                Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi
              </p>
            </article>

            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">Lead Toplama</h3>
              <p className="landing-feature-description">
                Etkili formlar ve CTA'lar ile potansiyel müşteri bilgilerini toplama
              </p>
            </article>

            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">A/B Test Desteği</h3>
              <p className="landing-feature-description">
                Farklı versiyonları test ederek en yüksek dönüşümü elde etme
              </p>
            </article>

            <article className="landing-feature-card">
              <div className="landing-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3 className="landing-feature-title">Analytics Entegrasyonu</h3>
              <p className="landing-feature-description">
                Google Analytics ve Facebook Pixel ile detaylı performans takibi
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="landing-packages-section">
        <div className="container">
          <header className="landing-section-header">
            <h2 className="landing-section-title">Landing Page Paketleri</h2>
            <p className="landing-section-description">
              İhtiyaçlarınıza uygun landing page çözümü seçin
            </p>
          </header>
          <div className="landing-packages-grid">
            {/* Temel Paket */}
            <article className="landing-package-card">
              <div className="landing-package-header">
                <h3 className="landing-package-title">Temel Landing Page</h3>
                <div className="landing-package-price">
                  <span className="landing-price">₺4.999</span>
                  <span className="landing-price-note">+ KDV</span>
                </div>
                <p className="landing-package-subtitle">
                  Küçük işletmeler ve startup'lar için ideal başlangıç paketi
                </p>
              </div>
              <div className="landing-package-content">
                <div className="landing-package-features-wrapper">
                  <h4 className="landing-features-title">Paket İçeriği</h4>
                  <ul className="landing-package-features">
                    <li>Tek sayfa responsive tasarım</li>
                    <li>Temel SEO optimizasyonu</li>
                    <li>İletişim formu entegrasyonu</li>
                    <li>Google Analytics kurulumu</li>
                    <li>Mobil uyumlu tasarım</li>
                    <li>SSL sertifikası</li>
                    <li>1 hafta destek</li>
                  </ul>
                </div>
                <div className="landing-package-specs">
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Teslimat:</span>
                    <span className="landing-spec-value">3-5 gün</span>
                  </div>
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Revizyon:</span>
                    <span className="landing-spec-value">2 revizyon</span>
                  </div>
                </div>
                <Link to="/iletisim" className="landing-package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>

            {/* Profesyonel Paket */}
            <article className="landing-package-card landing-featured">
              <div className="landing-package-badge">En Popüler</div>
              <div className="landing-package-header">
                <h3 className="landing-package-title">Profesyonel Landing Page</h3>
                <div className="landing-package-price">
                  <span className="landing-price">₺8.999</span>
                  <span className="landing-price-note">+ KDV</span>
                </div>
                <p className="landing-package-subtitle">
                  Yüksek dönüşüm oranları için optimize edilmiş çözüm
                </p>
              </div>
              <div className="landing-package-content">
                <div className="landing-package-features-wrapper">
                  <h4 className="landing-features-title">Paket İçeriği</h4>
                  <ul className="landing-package-features">
                    <li>Özel tasarım ve UX/UI optimizasyonu</li>
                    <li>Gelişmiş SEO ve hız optimizasyonu</li>
                    <li>CRM entegrasyonu (MailChimp, HubSpot)</li>
                    <li>A/B test kurulumu</li>
                    <li>Facebook Pixel entegrasyonu</li>
                    <li>Canlı chat entegrasyonu</li>
                    <li>Google Ads uyumlu yapı</li>
                    <li>1 ay destek ve optimizasyon</li>
                  </ul>
                </div>
                <div className="landing-package-specs">
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Teslimat:</span>
                    <span className="landing-spec-value">5-7 gün</span>
                  </div>
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Revizyon:</span>
                    <span className="landing-spec-value">5 revizyon</span>
                  </div>
                </div>
                <Link to="/iletisim" className="landing-package-btn landing-primary">
                  Hemen Başla
                </Link>
              </div>
            </article>

            {/* Premium Paket */}
            <article className="landing-package-card">
              <div className="landing-package-header">
                <h3 className="landing-package-title">Premium Landing Page</h3>
                <div className="landing-package-price">
                  <span className="landing-price">₺14.999</span>
                  <span className="landing-price-note">+ KDV</span>
                </div>
                <p className="landing-package-subtitle">
                  Kurumsal firmalar için gelişmiş özellikler ve entegrasyonlar
                </p>
              </div>
              <div className="landing-package-content">
                <div className="landing-package-features-wrapper">
                  <h4 className="landing-features-title">Paket İçeriği</h4>
                  <ul className="landing-package-features">
                    <li>Çoklu sayfa landing page sistemi</li>
                    <li>Gelişmiş animasyonlar ve etkileşimler</li>
                    <li>Marketing automation entegrasyonu</li>
                    <li>Çoklu A/B test senaryoları</li>
                    <li>Heatmap ve kullanıcı davranış analizi</li>
                    <li>Özel CRM geliştirme</li>
                    <li>Çoklu dil desteği</li>
                    <li>3 ay destek ve optimizasyon</li>
                  </ul>
                </div>
                <div className="landing-package-specs">
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Teslimat:</span>
                    <span className="landing-spec-value">7-10 gün</span>
                  </div>
                  <div className="landing-spec-item">
                    <span className="landing-spec-label">Revizyon:</span>
                    <span className="landing-spec-value">Sınırsız</span>
                  </div>
                </div>
                <Link to="/iletisim" className="landing-package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="landing-process-section">
        <div className="container">
          <header className="landing-section-header">
            <h2 className="landing-section-title">Landing Page Geliştirme Süreci</h2>
            <p className="landing-section-description">
              Yüksek dönüşümlü landing page'iniz nasıl hazırlanıyor?
            </p>
          </header>
          <div className="landing-process-timeline">
            <article className="landing-process-step">
              <div className="landing-step-number">1</div>
              <div className="landing-step-content">
                <h3 className="landing-step-title">Hedef Kitle & Amaç Analizi</h3>
                <p className="landing-step-description">
                  Hedef kitlenizi, amaçlarınızı ve rekabet durumunu analiz ediyoruz. 
                  Dönüşüm hedeflerinizi belirliyoruz.
                </p>
                <ul className="landing-step-details">
                  <li>Hedef kitle persona analizi</li>
                  <li>Rekabet analizi</li>
                  <li>Dönüşüm hedefleri belirleme</li>
                  <li>Anahtar kelime araştırması</li>
                </ul>
              </div>
            </article>

            <article className="landing-process-step">
              <div className="landing-step-number">2</div>
              <div className="landing-step-content">
                <h3 className="landing-step-title">UX/UI Tasarım & Wireframe</h3>
                <p className="landing-step-description">
                  Kullanıcı deneyimi odaklı tasarım ve dönüşüm optimizasyonu 
                  için wireframe ve mockup hazırlıyoruz.
                </p>
                <ul className="landing-step-details">
                  <li>Wireframe oluşturma</li>
                  <li>Dönüşüm odaklı tasarım</li>
                  <li>CTA yerleşimi optimizasyonu</li>
                  <li>Mobil tasarım</li>
                </ul>
              </div>
            </article>

            <article className="landing-process-step">
              <div className="landing-step-number">3</div>
              <div className="landing-step-content">
                <h3 className="landing-step-title">Geliştirme & Entegrasyonlar</h3>
                <p className="landing-step-description">
                  Hızlı, responsive ve SEO uyumlu kodlama. Analytics, 
                  CRM ve marketing araçları entegrasyonu.
                </p>
                <ul className="landing-step-details">
                  <li>Responsive kodlama</li>
                  <li>Hız optimizasyonu</li>
                  <li>Analytics entegrasyonu</li>
                  <li>Form ve CRM bağlantısı</li>
                </ul>
              </div>
            </article>

            <article className="landing-process-step">
              <div className="landing-step-number">4</div>
              <div className="landing-step-content">
                <h3 className="landing-step-title">Test & Optimizasyon</h3>
                <p className="landing-step-description">
                  A/B testleri, performans testleri ve dönüşüm oranı 
                  optimizasyonu ile en iyi sonuçları elde ediyoruz.
                </p>
                <ul className="landing-step-details">
                  <li>A/B test kurulumu</li>
                  <li>Performans testleri</li>
                  <li>Dönüşüm oranı analizi</li>
                  <li>Sürekli optimizasyon</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="landing-benefits-section">
        <div className="container">
          <header className="landing-section-header">
            <h2 className="landing-section-title">Landing Page'in Avantajları</h2>
            <p className="landing-section-description">
              Neden landing page'e ihtiyacınız var?
            </p>
          </header>
          <div className="landing-benefits-grid">
            <div className="landing-benefit-item">
              <div className="landing-benefit-icon">📈</div>
              <h3 className="landing-benefit-title">Yüksek Dönüşüm Oranı</h3>
              <p className="landing-benefit-description">
                Tek bir amaca odaklanmış tasarım ile %300'e kadar daha yüksek dönüşüm oranları
              </p>
            </div>
            <div className="landing-benefit-item">
              <div className="landing-benefit-icon">💰</div>
              <h3 className="landing-benefit-title">Düşük Reklam Maliyeti</h3>
              <p className="landing-benefit-description">
                Google Ads ve Facebook reklamlarında daha düşük CPC ve daha yüksek Quality Score
              </p>
            </div>
            <div className="landing-benefit-item">
              <div className="landing-benefit-icon">⚡</div>
              <h3 className="landing-benefit-title">Hızlı Sonuç</h3>
              <p className="landing-benefit-description">
                Kısa sürede hazır, hemen reklam kampanyalarınızda kullanabilirsiniz
              </p>
            </div>
            <div className="landing-benefit-item">
              <div className="landing-benefit-icon">📊</div>
              <h3 className="landing-benefit-title">Ölçülebilir Sonuçlar</h3>
              <p className="landing-benefit-description">
                Detaylı analytics ile her tıklama, form doldurma ve dönüşümü takip edin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-service-cta">
        <div className="container">
          <div className="landing-cta-content">
            <h2 className="landing-cta-title">Dönüşüm Odaklı Landing Page'inizi Hazırlayalım</h2>
            <p className="landing-cta-description">
              Potansiyel müşterilerinizi gerçek müşteriye dönüştüren, 
              yüksek performanslı landing page ile satışlarınızı artırın.
            </p>
            <div className="landing-cta-buttons">
              <Link to="/iletisim" className="landing-btn-primary">
                Ücretsiz Analiz İste
              </Link>
              <Link to="/portfoy" className="landing-btn-secondary">
                Landing Page Örnekleri
              </Link>
            </div>
            <div className="landing-cta-features">
              <div className="landing-cta-feature">
                <span className="landing-feature-icon">✓</span>
                <span>Ücretsiz Dönüşüm Analizi</span>
              </div>
              <div className="landing-cta-feature">
                <span className="landing-feature-icon">✓</span>
                <span>7 Gün Hızlı Teslimat</span>
              </div>
              <div className="landing-cta-feature">
                <span className="landing-feature-icon">✓</span>
                <span>30 Gün Optimizasyon Garantisi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 