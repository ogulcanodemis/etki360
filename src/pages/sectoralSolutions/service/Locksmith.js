import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './Locksmith.css';

const Locksmith = () => {
  return (
    <div className="sectoral-page locksmith-page">
      <section className="locksmith-hero">
        <div className="container">
          <div className="locksmith-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/hizmet">Hizmet</Link> / <span>Çilingir Web Sitesi</span>
          </div>
          <div className="locksmith-hero-content">
            <div className="locksmith-hero-text">
              <h1 className="sectoral-hero-title">
                Çilingir Firmanız İçin <span className="sectoral-highlight">Acil Hizmet Odaklı</span> Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                7/24 hizmet veren çilingir firmanız için müşterilerinizin size anında ulaşabileceği, acil aramalar ve konum bazlı hizmet sunan profesyonel web sitesi çözümleri.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="locksmith-hero-visual">
              <div className="locksmith-mockup">
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
                  <div className="mockup-emergency">
                    <div className="mockup-call-btn"></div>
                    <div className="mockup-location"></div>
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
            <h2 className="sectoral-section-title">Çilingir Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Acil anahtar, kapı ve kilit sorunlarında müşteriler %92 oranında önce internetten çilingir arayışına giriyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Anında Erişim</h3>
              <p className="sectoral-card-text">
                Tek tıkla arama özelliği sayesinde, acil durumda olan müşteriler size saniyeler içinde ulaşabilir. Kaçırılan her çağrı, kaybedilen bir müşteridir.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Konum Bazlı Hizmet</h3>
              <p className="sectoral-card-text">
                Mobil cihazların konum bilgisini kullanarak, müşterilerin bulunduğu yere en hızlı şekilde ulaşmanızı sağlayan teknolojiler.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="sectoral-card-title">Güven Oluşturma</h3>
              <p className="sectoral-card-text">
                Profesyonel bir web sitesi, müşterilerde güven duygusu oluşturur. Müşteri yorumları ve lisanslarınızı göstererek güvenilirliğinizi kanıtlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                "Yakınımda çilingir" araması yapan potansiyel müşterilerin karşısına çıkarak, rakiplerinizden bir adım öne geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Çilingir Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              7/24 hizmet veren çilingir firmanız için özel tasarlanmış web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Tek Tıkla Arama Butonu</h3>
                <p className="sectoral-feature-text">
                  Sitenin her yerinde görünür, büyük ve dikkat çekici arama butonları. Acil durumda olan müşteriler tek tıkla sizi arayabilir.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Konum Bazlı Hizmet Alanı</h3>
                <p className="sectoral-feature-text">
                  Hizmet verdiğiniz bölgeleri interaktif harita üzerinde gösterin. Müşteriler konumlarını paylaşarak size en hızlı erişimi sağlayabilir.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-list-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Hizmet Listesi</h3>
                <p className="sectoral-feature-text">
                  Sunduğunuz tüm hizmetleri detaylı açıklamalarla listeleyin: Kapı açma, kilit değiştirme, kasa açma, çelik kapı, otomobil kilitleri vs.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Fiyat Hesaplama Aracı</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin ihtiyaçlarına göre yaklaşık fiyat alabilecekleri interaktif hesaplama aracı. Şeffaf fiyatlandırma güven oluşturur.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Canlı Destek</h3>
                <p className="sectoral-feature-text">
                  WhatsApp entegrasyonu ile anında iletişim. Müşteriler konum ve fotoğraf paylaşarak daha hızlı hizmet alabilir.
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
                  Çilingir hizmetleri genellikle acil durumlarda mobil cihazlardan arandığı için, tüm cihazlarda mükemmel çalışan responsive tasarım.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Sertifikalar ve Lisanslar</h3>
                <p className="sectoral-feature-text">
                  Yasal çalışma belgelerinizi ve sertifikalarınızı göstererek müşterilerde güven oluşturun. Bu özellikle evlerine girmelerini istedikleri kişiler için önemlidir.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Yerel SEO Optimizasyonu</h3>
                <p className="sectoral-feature-text">
                  "Yakınımda çilingir", "acil çilingir" gibi aramalar için optimize edilmiş içerik ve Google Haritalar entegrasyonu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locksmith-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Çilingir Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, çilingir firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="locksmith-benefits-content">
            <div className="locksmith-benefits-mockup">
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
                  <div className="benefits-mockup-mobile">
                    <div className="benefits-mockup-phone">
                      <div className="benefits-mockup-screen">
                        <div className="benefits-mockup-app">
                          <div className="benefits-mockup-call"></div>
                          <div className="benefits-mockup-map"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="locksmith-benefits-list">
              <div className="locksmith-benefit-item">
                <div className="locksmith-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="locksmith-benefit-text">
                  <h3>Daha Fazla Acil Çağrı</h3>
                  <p>Web sitenizden gelen tek tıkla arama özelliği sayesinde acil çağrı sayınızı %60'a kadar artırabilirsiniz.</p>
                </div>
              </div>

              <div className="locksmith-benefit-item">
                <div className="locksmith-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="locksmith-benefit-text">
                  <h3>Yerel Aramalarda Üst Sıralarda</h3>
                  <p>Google'da "yakınımda çilingir" arayanlar için yerel SEO çalışması ile ilk sayfada yer alarak müşteri potansiyelinizi artırın.</p>
                </div>
              </div>

              <div className="locksmith-benefit-item">
                <div className="locksmith-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="locksmith-benefit-text">
                  <h3>Profesyonel İmaj ve Güven</h3>
                  <p>Profesyonel bir web sitesi, müşterilerin gözünde güvenilir bir iş ortağı olarak algılanmanızı sağlar.</p>
                </div>
              </div>

              <div className="locksmith-benefit-item">
                <div className="locksmith-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="locksmith-benefit-text">
                  <h3>Daha Az Operasyonel Yük</h3>
                  <p>Otomatik çağrı yönlendirme ve konum tespiti sayesinde müşteriye ulaşma sürenizi kısaltarak daha verimli çalışın.</p>
                </div>
              </div>

              <div className="locksmith-benefit-item">
                <div className="locksmith-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="locksmith-benefit-text">
                  <h3>7/24 Müşteri Kazanımı</h3>
                  <p>Web siteniz sizin için 7/24 çalışan bir satış temsilcisi gibi, gece yarısı bile yeni müşteriler kazanmanızı sağlar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="locksmith-pricing">
        <div className="container">
          <div className="locksmith-section-header">
            <h2 className="locksmith-section-title">Çilingir Web Sitesi Paketleri</h2>
            <p className="locksmith-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="locksmith-pricing-grid">
            <div className="locksmith-pricing-card">
              <div className="locksmith-pricing-header">
                <h3 className="locksmith-pricing-title">Başlangıç Paketi</h3>
                <div className="locksmith-pricing-price">
                  <span className="locksmith-price-amount">4.900 ₺</span>
                  <span className="locksmith-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="locksmith-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Tek Tıkla Arama Butonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Hizmet Bölgesi Haritası</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Konum Bazlı Müşteri Yönlendirme</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Google Ads Yönetimi</li>
                </ul>
              </div>
              <div className="locksmith-pricing-footer">
                <Link to="/iletisim" className="locksmith-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="locksmith-pricing-card featured">
              <div className="locksmith-pricing-badge">Popüler</div>
              <div className="locksmith-pricing-header">
                <h3 className="locksmith-pricing-title">Premium Paket</h3>
                <div className="locksmith-pricing-price">
                  <span className="locksmith-price-amount">7.900 ₺</span>
                  <span className="locksmith-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="locksmith-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 10 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Tek Tıkla Arama Butonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Interaktif Hizmet Bölgesi Haritası</li>
                  <li><i className="fas fa-check"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Konum Bazlı Müşteri Yönlendirme</li>
                  <li><i className="fas fa-check"></i> Fiyat Hesaplama Aracı</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Kapsamlı İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="locksmith-pricing-disabled"><i className="fas fa-times"></i> Google Ads Yönetimi</li>
                </ul>
              </div>
              <div className="locksmith-pricing-footer">
                <Link to="/iletisim" className="locksmith-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="locksmith-pricing-card">
              <div className="locksmith-pricing-header">
                <h3 className="locksmith-pricing-title">Kurumsal Paket</h3>
                <div className="locksmith-pricing-price">
                  <span className="locksmith-price-amount">12.900 ₺</span>
                  <span className="locksmith-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="locksmith-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Acil Çağrı Merkezi Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Tekniker Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Yerel SEO Aylık Destek Paketi</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> Mahalle ve İlçe Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Müşteri Yorum Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Altyapısı</li>
                  <li><i className="fas fa-check"></i> Mobil Uygulama Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="locksmith-pricing-footer">
                <Link to="/iletisim" className="locksmith-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locksmith-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Çilingir web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="locksmith-faq-grid">
            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Çilingir web sitesi ne kadar sürede hazır olur?</h3>
              <p className="locksmith-faq-answer">
                Seçtiğiniz pakete bağlı olarak, çilingir web sitesi genellikle 5-10 iş günü içerisinde tamamlanır. Acil ihtiyaçlar için 48 saat içinde temel bir site kurulumu da mümkündür.
              </p>
            </div>

            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Konum bazlı müşteri yönlendirme nasıl çalışır?</h3>
              <p className="locksmith-faq-answer">
                Ziyaretçiler web sitenize girdiklerinde, tarayıcılarının konum bilgilerini paylaşmaları istenir. İzin vermeleri durumunda, müşterinin bulunduğu lokasyona en yakın hizmet alanınızı görebilir ve tek tıkla size ulaşabilirler.
              </p>
            </div>

            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Mahalle bazlı SEO çalışması ne sağlar?</h3>
              <p className="locksmith-faq-answer">
                Hizmet verdiğiniz her mahalle için özel içerik ve SEO çalışması yapılır. Böylece "Beylikdüzü çilingir", "Bahçelievler çilingir" gibi spesifik aramalarda üst sıralarda çıkmanız sağlanır. Bu, lokal müşterilere erişiminizi önemli ölçüde artırır.
              </p>
            </div>

            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Sitemi kendim güncelleyebilir miyim?</h3>
              <p className="locksmith-faq-answer">
                Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Hizmet bölgelerinizi, fiyatlarınızı ve iletişim bilgilerinizi kolayca güncelleyebilirsiniz. Teknik bilgi gerektirmez.
              </p>
            </div>

            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Google Ads yönetiminde nasıl bir strateji uygulanır?</h3>
              <p className="locksmith-faq-answer">
                Çilingir hizmetleri için özel olarak tasarlanmış Google Ads stratejimizde, acil durum aramaları için yüksek teklif, konum hedeflemesi ve mobil cihaz öncelikli reklamlar kullanılır. Kurumsal paketimizde bu hizmet 3 ay boyunca ücretsiz olarak sunulmaktadır.
              </p>
            </div>

            <div className="locksmith-faq-item">
              <h3 className="locksmith-faq-question">Tekniker takip sistemi nasıl çalışır?</h3>
              <p className="locksmith-faq-answer">
                Kurumsal paketimizde sunulan bu özellikle, sahada çalışan teknikerlerinizin konumlarını gerçek zamanlı olarak izleyebilir ve en yakın teknikeri müşteriye yönlendirebilirsiniz. Müşteriler de teknikerin ne zaman geleceğini harita üzerinden takip edebilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="locksmith-cta">
        <div className="container">
          <div className="locksmith-cta-content">
            <h2 className="locksmith-cta-title">
              Çilingir Firmanız İçin <span className="sectoral-highlight">Acil Çağrı Odaklı</span> Web Sitesi Oluşturalım
            </h2>
            <p className="locksmith-cta-text">
              7/24 hizmet veren çilingir firmanız için acil durumlarda müşterilerinizin sizi hemen bulabileceği, konum bazlı ve SEO dostu bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="locksmith-cta-buttons">
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

export default Locksmith; 