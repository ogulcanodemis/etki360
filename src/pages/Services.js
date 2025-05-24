import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-main-page">
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