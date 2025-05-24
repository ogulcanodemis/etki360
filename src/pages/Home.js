import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-page-hero">
        <div className="container">
          <div className="home-hero-content">
            <div className="home-hero-text">
              <h1 className="home-hero-title">
                Dijitalde <span className="home-highlight">Gücünüzü</span> Gösterin!
              </h1>
              <p className="home-hero-description">
                İşletmenizin dijitaldeki vitrinini profesyonelce tasarlayan, 
                sürdürülebilir ve performans odaklı çözümler sunan web geliştirme hizmetidir.
              </p>
              <div className="home-hero-buttons">
                <Link to="/iletisim" className="home-btn-primary">
                  Hemen Başlayın
                </Link>
                <Link to="/portfoy" className="home-btn-secondary">
                  Projelerimizi İnceleyin
                </Link>
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
                  <span className="home-stat-number">24/7</span>
                  <span className="home-stat-label">Destek Hizmeti</span>
                </div>
              </div>
            </div>
            <div className="home-hero-visual">
              <div className="home-hero-card">
                <div className="home-card-header">
                  <div className="home-card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="home-card-content">
                  <div className="home-code-line"></div>
                  <div className="home-code-line home-short"></div>
                  <div className="home-code-line"></div>
                  <div className="home-code-line home-medium"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-description">
              Dijital dünyadaki ihtiyaçlarınıza özel çözümler sunuyoruz
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="service-title">Kurumsal Web Sitesi</h3>
              <p className="service-description">
                Modern, mobil uyumlu ve SEO optimizasyonlu kurumsal web siteleri
              </p>
              <Link to="/hizmetler/kurumsal-web" className="service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </div>
              <h3 className="service-title">E-Ticaret Çözümleri</h3>
              <p className="service-description">
                Ödeme entegrasyonları ve yönetim paneli ile eksiksiz e-ticaret siteleri
              </p>
              <Link to="/hizmetler/e-ticaret" className="service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3 className="service-title">Landing Page</h3>
              <p className="service-description">
                Dönüşüm odaklı, hızlı yüklenen tek sayfalık tanıtım siteleri
              </p>
              <Link to="/hizmetler/landing-page" className="service-link">
                Detayları İncele →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="service-title">SEO & Performans</h3>
              <p className="service-description">
                Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu
              </p>
              <Link to="/hizmetler/seo" className="service-link">
                Detayları İncele →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2 className="section-title">Neden etki360?</h2>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Modern Teknolojiler</h4>
                    <p>React, PHP ve MySQL ile güncel teknolojiler kullanıyoruz</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Mobil Uyumlu Tasarım</h4>
                    <p>Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>SEO Optimizasyonu</h4>
                    <p>Google'da üst sıralarda yer almanız için teknik SEO</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Sürekli Destek</h4>
                    <p>Proje teslimi sonrası da yanınızdayız</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="visual-card">
                <div className="progress-bars">
                  <div className="progress-item">
                    <span>Web Tasarım</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <span>SEO Optimizasyon</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <span>Performans</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
            <p className="cta-description">
              Dijital dünyadaki yerinizi alın. Size özel çözümler için hemen iletişime geçin.
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

export default Home; 