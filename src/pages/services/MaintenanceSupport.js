import React from 'react';
import { Link } from 'react-router-dom';
import './MaintenanceSupport.css';

const MaintenanceSupport = () => {
  return (
    <div className="maintenance-support-page">
      {/* Hero Section */}
      <header className="maintenance-service-hero">
        <div className="container">
          <div className="maintenance-hero-content">
            <nav className="maintenance-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <Link to="/hizmetler">Hizmetler</Link>
              <span>/</span>
              <span>Bakım & Destek</span>
            </nav>
            <h1 className="maintenance-hero-title">
              <span className="maintenance-highlight">Bakım & Destek</span> Hizmetleri
            </h1>
            <p className="maintenance-hero-description">
              Web sitenizin sürekli güncel, güvenli ve performanslı kalması için 
              profesyonel bakım ve 7/24 teknik destek hizmetleri sunuyoruz.
            </p>
            <div className="maintenance-hero-stats">
              <div className="maintenance-stat-item">
                <span className="maintenance-stat-number">7/24</span>
                <span className="maintenance-stat-label">Teknik Destek</span>
              </div>
              <div className="maintenance-stat-item">
                <span className="maintenance-stat-number">99.9%</span>
                <span className="maintenance-stat-label">Uptime Garantisi</span>
              </div>
              <div className="maintenance-stat-item">
                <span className="maintenance-stat-number">30 Sn</span>
                <span className="maintenance-stat-label">Ortalama Yanıt Süresi</span>
              </div>
            </div>
            <div className="maintenance-hero-buttons">
              <Link to="/iletisim" className="maintenance-btn-primary">
                Destek Talebi Oluştur
              </Link>
              <Link to="/portfoy" className="maintenance-btn-secondary">
                Referanslarımızı İncele
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Services Overview Section */}
      <section className="maintenance-services-overview">
        <div className="container">
          <header className="maintenance-section-header">
            <h2 className="maintenance-section-title">Bakım & Destek Hizmetlerimiz</h2>
            <p className="maintenance-section-description">
              Web sitenizin kesintisiz çalışması için kapsamlı bakım ve destek çözümleri
            </p>
          </header>
          <div className="maintenance-services-grid">
            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">Güvenlik Güncellemeleri</h3>
              <p className="maintenance-service-description" itemProp="description">
                Düzenli güvenlik yamaları, SSL sertifikası yenileme ve güvenlik taramaları 
                ile sitenizi tehditlere karşı koruyoruz.
              </p>
              <ul className="maintenance-service-features">
                <li>Haftalık güvenlik taraması</li>
                <li>SSL sertifikası yönetimi</li>
                <li>Malware temizleme</li>
                <li>Firewall yapılandırması</li>
              </ul>
            </article>

            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">Performans Optimizasyonu</h3>
              <p className="maintenance-service-description" itemProp="description">
                Site hızını artıran optimizasyonlar, veritabanı temizliği ve 
                performans izleme ile kullanıcı deneyimini iyileştiriyoruz.
              </p>
              <ul className="maintenance-service-features">
                <li>Sayfa hızı optimizasyonu</li>
                <li>Veritabanı optimizasyonu</li>
                <li>Cache yönetimi</li>
                <li>CDN yapılandırması</li>
              </ul>
            </article>

            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">İçerik Güncellemeleri</h3>
              <p className="maintenance-service-description" itemProp="description">
                Düzenli içerik güncellemeleri, yeni sayfa eklemeleri ve 
                mevcut içeriklerin revize edilmesi hizmetleri.
              </p>
              <ul className="maintenance-service-features">
                <li>Metin ve görsel güncellemeleri</li>
                <li>Yeni sayfa eklemeleri</li>
                <li>Blog yazısı yayınlama</li>
                <li>SEO içerik optimizasyonu</li>
              </ul>
            </article>

            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">7/24 Teknik Destek</h3>
              <p className="maintenance-service-description" itemProp="description">
                Acil durumlar için 7/24 erişilebilir teknik destek ekibi, 
                hızlı problem çözme ve uzaktan müdahale hizmetleri.
              </p>
              <ul className="maintenance-service-features">
                <li>WhatsApp destek hattı</li>
                <li>Uzaktan erişim desteği</li>
                <li>Acil müdahale servisi</li>
                <li>Telefon ve e-posta desteği</li>
              </ul>
            </article>

            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">Yedekleme & Geri Yükleme</h3>
              <p className="maintenance-service-description" itemProp="description">
                Otomatik yedekleme sistemleri, veri güvenliği ve 
                acil durumlarda hızlı geri yükleme hizmetleri.
              </p>
              <ul className="maintenance-service-features">
                <li>Günlük otomatik yedekleme</li>
                <li>Çoklu yedekleme lokasyonu</li>
                <li>Hızlı geri yükleme</li>
                <li>Veri bütünlüğü kontrolü</li>
              </ul>
            </article>

            <article className="maintenance-service-card" itemScope itemType="https://schema.org/Service">
              <div className="maintenance-service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <h3 className="maintenance-service-title" itemProp="name">Yazılım Güncellemeleri</h3>
              <p className="maintenance-service-description" itemProp="description">
                CMS güncellemeleri, plugin yönetimi ve uyumluluk testleri 
                ile sitenizin güncel kalmasını sağlıyoruz.
              </p>
              <ul className="maintenance-service-features">
                <li>WordPress/CMS güncellemeleri</li>
                <li>Plugin güncelleme ve yönetimi</li>
                <li>Uyumluluk testleri</li>
                <li>Özel kod güncellemeleri</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Support Packages Section */}
      <section className="maintenance-packages-section">
        <div className="container">
          <header className="maintenance-section-header">
            <h2 className="maintenance-section-title">Destek Paketleri</h2>
            <p className="maintenance-section-description">
              İhtiyaçlarınıza uygun bakım ve destek paket seçenekleri
            </p>
          </header>
          <div className="maintenance-packages-grid">
            <article className="maintenance-package-card" itemScope itemType="https://schema.org/Offer">
              <div className="maintenance-package-header">
                <h3 className="maintenance-package-title" itemProp="name">Temel Bakım</h3>
                <div className="maintenance-package-price">
                  <span className="maintenance-price" itemProp="price">₺899</span>
                  <span className="maintenance-price-period">/ ay</span>
                </div>
                <p className="maintenance-package-subtitle">Küçük işletmeler için ideal</p>
              </div>
              <div className="maintenance-package-content">
                <ul className="maintenance-package-features">
                  <li>Aylık güvenlik güncellemeleri</li>
                  <li>Temel performans optimizasyonu</li>
                  <li>Haftalık yedekleme</li>
                  <li>E-posta desteği (48 saat)</li>
                  <li>Aylık durum raporu</li>
                  <li>SSL sertifikası yönetimi</li>
                </ul>
                <div className="maintenance-package-specs">
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Yanıt Süresi:</span>
                    <span className="maintenance-spec-value">48 saat</span>
                  </div>
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Uptime Garantisi:</span>
                    <span className="maintenance-spec-value">99.5%</span>
                  </div>
                </div>
                <Link to="/iletisim" className="maintenance-package-btn">
                  Paketi Seç
                </Link>
              </div>
            </article>

            <article className="maintenance-package-card maintenance-featured" itemScope itemType="https://schema.org/Offer">
              <div className="maintenance-package-badge">En Popüler</div>
              <div className="maintenance-package-header">
                <h3 className="maintenance-package-title" itemProp="name">Profesyonel Bakım</h3>
                <div className="maintenance-package-price">
                  <span className="maintenance-price" itemProp="price">₺1.799</span>
                  <span className="maintenance-price-period">/ ay</span>
                </div>
                <p className="maintenance-package-subtitle">Büyüyen işletmeler için</p>
              </div>
              <div className="maintenance-package-content">
                <ul className="maintenance-package-features">
                  <li>Haftalık güvenlik güncellemeleri</li>
                  <li>Gelişmiş performans optimizasyonu</li>
                  <li>Günlük yedekleme</li>
                  <li>WhatsApp + telefon desteği (24 saat)</li>
                  <li>Haftalık durum raporu</li>
                  <li>İçerik güncellemeleri (5 saat/ay)</li>
                  <li>SEO izleme ve raporlama</li>
                  <li>Malware tarama ve temizleme</li>
                </ul>
                <div className="maintenance-package-specs">
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Yanıt Süresi:</span>
                    <span className="maintenance-spec-value">24 saat</span>
                  </div>
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Uptime Garantisi:</span>
                    <span className="maintenance-spec-value">99.8%</span>
                  </div>
                </div>
                <Link to="/iletisim" className="maintenance-package-btn maintenance-primary">
                  Paketi Seç
                </Link>
              </div>
            </article>

            <article className="maintenance-package-card" itemScope itemType="https://schema.org/Offer">
              <div className="maintenance-package-header">
                <h3 className="maintenance-package-title" itemProp="name">Kurumsal Bakım</h3>
                <div className="maintenance-package-price">
                  <span className="maintenance-price" itemProp="price">₺3.499</span>
                  <span className="maintenance-price-period">/ ay</span>
                </div>
                <p className="maintenance-package-subtitle">Büyük şirketler için</p>
              </div>
              <div className="maintenance-package-content">
                <ul className="maintenance-package-features">
                  <li>7/24 güvenlik izleme</li>
                  <li>Gerçek zamanlı performans izleme</li>
                  <li>Saatlik yedekleme</li>
                  <li>7/24 telefon + WhatsApp desteği</li>
                  <li>Günlük durum raporu</li>
                  <li>Sınırsız içerik güncellemeleri</li>
                  <li>Gelişmiş SEO optimizasyonu</li>
                  <li>Özel geliştirme desteği</li>
                  <li>Acil müdahale garantisi</li>
                  <li>Özel hesap yöneticisi</li>
                </ul>
                <div className="maintenance-package-specs">
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Yanıt Süresi:</span>
                    <span className="maintenance-spec-value">30 dakika</span>
                  </div>
                  <div className="maintenance-spec-item">
                    <span className="maintenance-spec-label">Uptime Garantisi:</span>
                    <span className="maintenance-spec-value">99.9%</span>
                  </div>
                </div>
                <Link to="/iletisim" className="maintenance-package-btn">
                  Paketi Seç
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="maintenance-process-section">
        <div className="container">
          <header className="maintenance-section-header">
            <h2 className="maintenance-section-title">Destek Süreci</h2>
            <p className="maintenance-section-description">
              Sorun bildirimi oluşturma ve çözüm sürecimiz
            </p>
          </header>
          <div className="maintenance-process-timeline">
            <article className="maintenance-process-step">
              <div className="maintenance-step-number">1</div>
              <div className="maintenance-step-content">
                <h3 className="maintenance-step-title">Sorun Bildirimi</h3>
                <p className="maintenance-step-description">
                  WhatsApp, telefon veya e-posta ile 7/24 destek talebinizi oluşturun. 
                  Acil durumlar için öncelikli kanal WhatsApp'tır.
                </p>
                <div className="maintenance-step-channels">
                  <span className="maintenance-channel">WhatsApp: +90 (542) 155 33 15</span>
                  <span className="maintenance-channel">E-posta: destek@etki360.com</span>
                </div>
              </div>
            </article>

            <article className="maintenance-process-step">
              <div className="maintenance-step-number">2</div>
              <div className="maintenance-step-content">
                <h3 className="maintenance-step-title">Hızlı Değerlendirme</h3>
                <p className="maintenance-step-description">
                  Teknik ekibimiz sorununuzu analiz eder, öncelik seviyesini belirler 
                  ve size ilk geri dönüşü paket türünüze göre yapar.
                </p>
                <div className="maintenance-step-times">
                  <span className="maintenance-time">Temel: 48 saat</span>
                  <span className="maintenance-time">Profesyonel: 24 saat</span>
                  <span className="maintenance-time">Kurumsal: 30 dakika</span>
                </div>
              </div>
            </article>

            <article className="maintenance-process-step">
              <div className="maintenance-step-number">3</div>
              <div className="maintenance-step-content">
                <h3 className="maintenance-step-title">Çözüm Uygulama</h3>
                <p className="maintenance-step-description">
                  Uzman ekibimiz sorununuzu çözer, gerekli güncellemeleri yapar 
                  ve test süreçlerini tamamlar.
                </p>
                <div className="maintenance-step-actions">
                  <span className="maintenance-action">Uzaktan erişim</span>
                  <span className="maintenance-action">Güvenli müdahale</span>
                  <span className="maintenance-action">Test ve doğrulama</span>
                </div>
              </div>
            </article>

            <article className="maintenance-process-step">
              <div className="maintenance-step-number">4</div>
              <div className="maintenance-step-content">
                <h3 className="maintenance-step-title">Raporlama & Takip</h3>
                <p className="maintenance-step-description">
                  Yapılan işlemler detaylı olarak raporlanır, önleyici tedbirler 
                  alınır ve takip süreci başlatılır.
                </p>
                <div className="maintenance-step-reports">
                  <span className="maintenance-report">Detaylı işlem raporu</span>
                  <span className="maintenance-report">Önleyici öneriler</span>
                  <span className="maintenance-report">Takip planı</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="maintenance-faq-section">
        <div className="container">
          <header className="maintenance-section-header">
            <h2 className="maintenance-section-title">Sıkça Sorulan Sorular</h2>
            <p className="maintenance-section-description">
              Bakım ve destek hizmetleri hakkında merak edilenler
            </p>
          </header>
          <div className="maintenance-faq-grid" itemScope itemType="https://schema.org/FAQPage">
            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                Bakım paketleri neleri kapsar?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Bakım paketlerimiz güvenlik güncellemeleri, performans optimizasyonu, 
                  yedekleme, teknik destek ve içerik güncellemelerini kapsar. 
                  Paket türüne göre hizmet kapsamı değişmektedir.
                </p>
              </div>
            </article>

            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                Acil durumlarda ne kadar sürede müdahale edilir?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Kurumsal paket için 30 dakika, Profesyonel paket için 24 saat, 
                  Temel paket için 48 saat içinde ilk müdahale gerçekleştirilir. 
                  Kritik sorunlarda tüm paketler için öncelik verilir.
                </p>
              </div>
            </article>

            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                Yedekleme ne sıklıkla yapılır?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Temel pakette haftalık, Profesyonel pakette günlük, 
                  Kurumsal pakette saatlik yedekleme yapılır. Tüm yedekler 
                  çoklu lokasyonda güvenli şekilde saklanır.
                </p>
              </div>
            </article>

            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                İçerik güncellemeleri nasıl yapılır?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  İçerik güncellemelerinizi WhatsApp veya e-posta ile iletebilirsiniz. 
                  Profesyonel pakette ayda 5 saat, Kurumsal pakette sınırsız 
                  içerik güncelleme hakkınız bulunur.
                </p>
              </div>
            </article>

            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                Paket değişikliği yapabilir miyim?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Evet, ihtiyaçlarınız doğrultusunda paketinizi yükseltebilir 
                  veya düşürebilirsiniz. Paket değişiklikleri bir sonraki 
                  fatura döneminde geçerli olur.
                </p>
              </div>
            </article>

            <article className="maintenance-faq-item" itemScope itemType="https://schema.org/Question">
              <h3 className="maintenance-faq-question" itemProp="name">
                Sözleşme süresi ne kadar?
              </h3>
              <div className="maintenance-faq-answer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">
                  Bakım paketlerimiz aylık olarak faturalandırılır ve minimum 
                  3 aylık taahhüt gerektirir. İstediğiniz zaman paketinizi 
                  iptal edebilirsiniz.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="maintenance-cta-section">
        <div className="container">
          <div className="maintenance-cta-content">
            <h2 className="maintenance-cta-title">Web Siteniz Güvende Olsun</h2>
            <p className="maintenance-cta-description">
              Profesyonel bakım ve destek hizmetleri ile web sitenizin 
              kesintisiz çalışmasını sağlayın. Hemen destek paketinizi seçin.
            </p>
            <div className="maintenance-cta-features">
              <div className="maintenance-cta-feature">
                <span className="maintenance-feature-icon">🛡️</span>
                <span>7/24 Güvenlik İzleme</span>
              </div>
              <div className="maintenance-cta-feature">
                <span className="maintenance-feature-icon">⚡</span>
                <span>Hızlı Müdahale</span>
              </div>
              <div className="maintenance-cta-feature">
                <span className="maintenance-feature-icon">📊</span>
                <span>Detaylı Raporlama</span>
              </div>
            </div>
            <div className="maintenance-cta-buttons">
              <Link to="/iletisim" className="maintenance-cta-btn-primary">
                Destek Paketi Seç
              </Link>
              <a href="https://wa.me/905421553315" className="maintenance-cta-btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceSupport; 