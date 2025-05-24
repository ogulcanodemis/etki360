import React from 'react';
import { Link } from 'react-router-dom';
import './SEOPerformance.css';

const SEOPerformance = () => {
  return (
    <div className="seo-performance-page">
      {/* Hero Section */}
      <section className="seo-service-hero">
        <div className="container">
          <div className="seo-hero-content">
            <div className="seo-hero-text">
              <nav className="seo-breadcrumb">
                <Link to="/">Ana Sayfa</Link>
                <span>/</span>
                <Link to="/hizmetler">Hizmetler</Link>
                <span>/</span>
                <span>SEO & Performans</span>
              </nav>
              <h1 className="seo-hero-title">
                <span className="seo-highlight">SEO & Performans</span> Optimizasyonu
              </h1>
              <p className="seo-hero-description">
                Google'da üst sıralarda yer almanız için teknik SEO, içerik optimizasyonu 
                ve performans iyileştirmeleri ile organik trafiğinizi artırın.
              </p>
              <div className="seo-hero-buttons">
                <Link to="/iletisim" className="seo-btn-primary">
                  Ücretsiz SEO Analizi
                </Link>
                <Link to="/portfoy" className="seo-btn-secondary">
                  SEO Başarı Hikayeleri
                </Link>
              </div>
            </div>
            <div className="seo-hero-visual">
              <div className="seo-dashboard">
                <div className="seo-dashboard-header">
                  <div className="seo-dashboard-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="seo-dashboard-title">SEO Dashboard</span>
                </div>
                <div className="seo-dashboard-content">
                  <div className="seo-metrics-row">
                    <div className="seo-metric-card">
                      <div className="seo-metric-icon">📈</div>
                      <div className="seo-metric-value">+250%</div>
                      <div className="seo-metric-label">Organik Trafik</div>
                    </div>
                    <div className="seo-metric-card">
                      <div className="seo-metric-icon">🎯</div>
                      <div className="seo-metric-value">Top 3</div>
                      <div className="seo-metric-label">Anahtar Kelime</div>
                    </div>
                  </div>
                  <div className="seo-chart-area">
                    <div className="seo-chart-bars">
                      <div className="seo-chart-bar" style={{height: '20%'}}></div>
                      <div className="seo-chart-bar" style={{height: '40%'}}></div>
                      <div className="seo-chart-bar" style={{height: '60%'}}></div>
                      <div className="seo-chart-bar" style={{height: '80%'}}></div>
                      <div className="seo-chart-bar" style={{height: '100%'}}></div>
                    </div>
                  </div>
                  <div className="seo-performance-indicators">
                    <div className="seo-indicator">
                      <div className="seo-indicator-dot green"></div>
                      <span>Page Speed: 95/100</span>
                    </div>
                    <div className="seo-indicator">
                      <div className="seo-indicator-dot green"></div>
                      <span>Core Web Vitals: Passed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="seo-features-section">
        <div className="container">
          <header className="seo-section-header">
            <h2 className="seo-section-title">SEO & Performans Hizmetleri</h2>
            <p className="seo-section-description">
              Google'da görünürlüğünüzü artıran kapsamlı SEO çözümleri
            </p>
          </header>
          <div className="seo-features-grid">
            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">Teknik SEO</h3>
              <p className="seo-feature-description">
                Site yapısı, URL optimizasyonu, schema markup ve teknik altyapı iyileştirmeleri
              </p>
            </article>

            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">İçerik Optimizasyonu</h3>
              <p className="seo-feature-description">
                Anahtar kelime araştırması, içerik stratejisi ve on-page SEO optimizasyonu
              </p>
            </article>

            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">Hız Optimizasyonu</h3>
              <p className="seo-feature-description">
                Core Web Vitals, sayfa yükleme hızı ve kullanıcı deneyimi iyileştirmeleri
              </p>
            </article>

            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">Mobil SEO</h3>
              <p className="seo-feature-description">
                Mobile-first indexing, AMP implementasyonu ve mobil kullanıcı deneyimi
              </p>
            </article>

            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">Yerel SEO</h3>
              <p className="seo-feature-description">
                Google My Business optimizasyonu, yerel arama sonuçlarında görünürlük
              </p>
            </article>

            <article className="seo-feature-card">
              <div className="seo-feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3 className="seo-feature-title">Link Building</h3>
              <p className="seo-feature-description">
                Kaliteli backlink stratejileri, domain authority artırma ve off-page SEO
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="seo-packages-section">
        <div className="container">
          <header className="seo-section-header">
            <h2 className="seo-section-title">SEO & Performans Paketleri</h2>
            <p className="seo-section-description">
              İhtiyaçlarınıza uygun SEO çözümü seçin
            </p>
          </header>
          <div className="seo-packages-grid">
            {/* Temel Paket */}
            <article className="seo-package-card">
              <div className="seo-package-header">
                <h3 className="seo-package-title">Temel SEO Paketi</h3>
                <div className="seo-package-price">
                  <span className="seo-price">₺2.999</span>
                  <span className="seo-price-note">/ ay</span>
                </div>
                <p className="seo-package-subtitle">
                  Küçük işletmeler için temel SEO optimizasyonu
                </p>
              </div>
              <div className="seo-package-content">
                <div className="seo-package-features-wrapper">
                  <h4 className="seo-features-title">Paket İçeriği</h4>
                  <ul className="seo-package-features">
                    <li>Temel teknik SEO analizi</li>
                    <li>5 anahtar kelime optimizasyonu</li>
                    <li>Google Analytics kurulumu</li>
                    <li>Google Search Console kurulumu</li>
                    <li>Temel on-page optimizasyon</li>
                    <li>Aylık performans raporu</li>
                    <li>Meta tag optimizasyonu</li>
                  </ul>
                </div>
                <div className="seo-package-specs">
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Anahtar Kelime:</span>
                    <span className="seo-spec-value">5 adet</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Rapor:</span>
                    <span className="seo-spec-value">Aylık</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Destek:</span>
                    <span className="seo-spec-value">Email</span>
                  </div>
                </div>
                <Link to="/iletisim" className="seo-package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>

            {/* Profesyonel Paket */}
            <article className="seo-package-card seo-featured">
              <div className="seo-package-badge">En Popüler</div>
              <div className="seo-package-header">
                <h3 className="seo-package-title">Profesyonel SEO</h3>
                <div className="seo-package-price">
                  <span className="seo-price">₺4.999</span>
                  <span className="seo-price-note">/ ay</span>
                </div>
                <p className="seo-package-subtitle">
                  Orta ölçekli işletmeler için kapsamlı SEO çözümü
                </p>
              </div>
              <div className="seo-package-content">
                <div className="seo-package-features-wrapper">
                  <h4 className="seo-features-title">Paket İçeriği</h4>
                  <ul className="seo-package-features">
                    <li>Kapsamlı teknik SEO analizi</li>
                    <li>15 anahtar kelime optimizasyonu</li>
                    <li>İçerik stratejisi ve optimizasyon</li>
                    <li>Hız optimizasyonu (Core Web Vitals)</li>
                    <li>Schema markup implementasyonu</li>
                    <li>Yerel SEO optimizasyonu</li>
                    <li>Backlink analizi ve stratejisi</li>
                    <li>Haftalık performans raporu</li>
                    <li>Rekabet analizi</li>
                  </ul>
                </div>
                <div className="seo-package-specs">
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Anahtar Kelime:</span>
                    <span className="seo-spec-value">15 adet</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Rapor:</span>
                    <span className="seo-spec-value">Haftalık</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Destek:</span>
                    <span className="seo-spec-value">Telefon + Email</span>
                  </div>
                </div>
                <Link to="/iletisim" className="seo-package-btn seo-primary">
                  Hemen Başla
                </Link>
              </div>
            </article>

            {/* Kurumsal Paket */}
            <article className="seo-package-card">
              <div className="seo-package-header">
                <h3 className="seo-package-title">Kurumsal SEO</h3>
                <div className="seo-package-price">
                  <span className="seo-price">₺9.999</span>
                  <span className="seo-price-note">/ ay</span>
                </div>
                <p className="seo-package-subtitle">
                  Büyük ölçekli işletmeler için gelişmiş SEO stratejileri
                </p>
              </div>
              <div className="seo-package-content">
                <div className="seo-package-features-wrapper">
                  <h4 className="seo-features-title">Paket İçeriği</h4>
                  <ul className="seo-package-features">
                    <li>Enterprise seviye teknik SEO</li>
                    <li>50+ anahtar kelime optimizasyonu</li>
                    <li>Çoklu dil SEO desteği</li>
                    <li>E-ticaret SEO optimizasyonu</li>
                    <li>Gelişmiş link building stratejisi</li>
                    <li>Özel SEO araçları ve dashboard</li>
                    <li>Dedicated SEO uzmanı</li>
                    <li>Günlük performans takibi</li>
                    <li>Aylık strateji toplantısı</li>
                    <li>Özel raporlama sistemi</li>
                  </ul>
                </div>
                <div className="seo-package-specs">
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Anahtar Kelime:</span>
                    <span className="seo-spec-value">50+ adet</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Rapor:</span>
                    <span className="seo-spec-value">Günlük</span>
                  </div>
                  <div className="seo-spec-item">
                    <span className="seo-spec-label">Destek:</span>
                    <span className="seo-spec-value">Dedicated Uzman</span>
                  </div>
                </div>
                <Link to="/iletisim" className="seo-package-btn">
                  Paket Seç
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="seo-process-section">
        <div className="container">
          <header className="seo-section-header">
            <h2 className="seo-section-title">SEO Çalışma Süreci</h2>
            <p className="seo-section-description">
              Organik trafiğinizi artırmak için izlediğimiz adımlar
            </p>
          </header>
          <div className="seo-process-timeline">
            <article className="seo-process-step">
              <div className="seo-step-number">1</div>
              <div className="seo-step-content">
                <h3 className="seo-step-title">SEO Audit & Analiz</h3>
                <p className="seo-step-description">
                  Mevcut sitenizin teknik durumu, içerik kalitesi ve rekabet 
                  analizi ile SEO potansiyelinizi belirliyoruz.
                </p>
                <ul className="seo-step-details">
                  <li>Teknik SEO analizi</li>
                  <li>Anahtar kelime araştırması</li>
                  <li>Rekabet analizi</li>
                  <li>Mevcut performans değerlendirmesi</li>
                </ul>
              </div>
            </article>

            <article className="seo-process-step">
              <div className="seo-step-number">2</div>
              <div className="seo-step-content">
                <h3 className="seo-step-title">Strateji Geliştirme</h3>
                <p className="seo-step-description">
                  Analiz sonuçlarına göre size özel SEO stratejisi oluşturuyor, 
                  hedefler ve zaman çizelgesi belirliyoruz.
                </p>
                <ul className="seo-step-details">
                  <li>SEO stratejisi oluşturma</li>
                  <li>Hedef belirleme</li>
                  <li>İçerik planlaması</li>
                  <li>Zaman çizelgesi</li>
                </ul>
              </div>
            </article>

            <article className="seo-process-step">
              <div className="seo-step-number">3</div>
              <div className="seo-step-content">
                <h3 className="seo-step-title">Optimizasyon & Uygulama</h3>
                <p className="seo-step-description">
                  Teknik SEO iyileştirmeleri, içerik optimizasyonu ve 
                  performans artırıcı değişiklikleri uyguluyoruz.
                </p>
                <ul className="seo-step-details">
                  <li>Teknik optimizasyonlar</li>
                  <li>İçerik optimizasyonu</li>
                  <li>Hız iyileştirmeleri</li>
                  <li>Schema markup</li>
                </ul>
              </div>
            </article>

            <article className="seo-process-step">
              <div className="seo-step-number">4</div>
              <div className="seo-step-content">
                <h3 className="seo-step-title">İzleme & Raporlama</h3>
                <p className="seo-step-description">
                  Sürekli performans takibi, düzenli raporlama ve 
                  stratejik iyileştirmelerle sonuçları optimize ediyoruz.
                </p>
                <ul className="seo-step-details">
                  <li>Performans takibi</li>
                  <li>Düzenli raporlama</li>
                  <li>Strateji güncellemeleri</li>
                  <li>Sürekli optimizasyon</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="seo-results-section">
        <div className="container">
          <header className="seo-section-header">
            <h2 className="seo-section-title">SEO Başarı Hikayeleri</h2>
            <p className="seo-section-description">
              Müşterilerimizin elde ettiği sonuçlar
            </p>
          </header>
          <div className="seo-results-grid">
            <div className="seo-result-card">
              <div className="seo-result-icon">🏢</div>
              <h3 className="seo-result-title">E-Ticaret Sitesi</h3>
              <div className="seo-result-stats">
                <div className="seo-stat">
                  <span className="seo-stat-number">+380%</span>
                  <span className="seo-stat-label">Organik Trafik</span>
                </div>
                <div className="seo-stat">
                  <span className="seo-stat-number">Top 3</span>
                  <span className="seo-stat-label">Ana Kelimeler</span>
                </div>
              </div>
              <p className="seo-result-description">
                6 ay içinde organik trafiği %380 artırdık ve ana anahtar kelimelerde ilk 3'e girdik.
              </p>
            </div>

            <div className="seo-result-card">
              <div className="seo-result-icon">🏥</div>
              <h3 className="seo-result-title">Sağlık Kliniği</h3>
              <div className="seo-result-stats">
                <div className="seo-stat">
                  <span className="seo-stat-number">+250%</span>
                  <span className="seo-stat-label">Yerel Aramalar</span>
                </div>
                <div className="seo-stat">
                  <span className="seo-stat-number">+150%</span>
                  <span className="seo-stat-label">Randevu Talepleri</span>
                </div>
              </div>
              <p className="seo-result-description">
                Yerel SEO ile bölgedeki aramalar %250 arttı, randevu talepleri %150 yükseldi.
              </p>
            </div>

            <div className="seo-result-card">
              <div className="seo-result-icon">🏭</div>
              <h3 className="seo-result-title">Üretim Firması</h3>
              <div className="seo-result-stats">
                <div className="seo-stat">
                  <span className="seo-stat-number">+420%</span>
                  <span className="seo-stat-label">B2B Leads</span>
                </div>
                <div className="seo-stat">
                  <span className="seo-stat-number">1. Sayfa</span>
                  <span className="seo-stat-label">Sektör Kelimeleri</span>
                </div>
              </div>
              <p className="seo-result-description">
                B2B odaklı SEO stratejisi ile lead sayısı %420 arttı, sektör kelimelerinde 1. sayfada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="seo-service-cta">
        <div className="container">
          <div className="seo-cta-content">
            <h2 className="seo-cta-title">Google'da Üst Sıralara Çıkmaya Hazır mısınız?</h2>
            <p className="seo-cta-description">
              Organik trafiğinizi artırın, daha fazla müşteriye ulaşın. 
              Profesyonel SEO hizmetleri ile rekabette öne geçin.
            </p>
            <div className="seo-cta-buttons">
              <Link to="/iletisim" className="seo-btn-primary">
                Ücretsiz SEO Analizi
              </Link>
              <Link to="/portfoy" className="seo-btn-secondary">
                Başarı Hikayeleri
              </Link>
            </div>
            <div className="seo-cta-features">
              <div className="seo-cta-feature">
                <span className="seo-feature-icon">✓</span>
                <span>Ücretsiz SEO Audit</span>
              </div>
              <div className="seo-cta-feature">
                <span className="seo-feature-icon">✓</span>
                <span>30 Gün Garanti</span>
              </div>
              <div className="seo-cta-feature">
                <span className="seo-feature-icon">✓</span>
                <span>Şeffaf Raporlama</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOPerformance; 