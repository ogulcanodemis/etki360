import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './TowService.css';

const TowService = () => {
  return (
    <div className="sectoral-page tow-page">
      <section className="tow-hero">
        <div className="container">
          <div className="tow-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/hizmet">Hizmet</Link> / <span>Çekici Hizmeti Web Sitesi</span>
          </div>
          <div className="tow-hero-content">
            <div className="tow-hero-text">
              <h1 className="sectoral-hero-title">
                Çekici Firmanız İçin <span className="sectoral-highlight">Acil Yardım Odaklı</span> Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                7/24 hizmet veren çekici ve yol yardım firmanız için konum bazlı hizmet alanı, anlık ulaşım imkanı ve kesintisiz iletişim sunan profesyonel web sitesi çözümleri.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="tow-hero-visual">
              <div className="tow-mockup">
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
            <h2 className="sectoral-section-title">Çekici Hizmeti Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Araç sahiplerinin %76'sı acil yol yardımı ihtiyacı olduğunda ilk olarak internetten çekici hizmeti arayışına giriyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Anında Erişim</h3>
              <p className="sectoral-card-text">
                Tek tıkla arama özelliği sayesinde, yolda kalan müşteriler size saniyeler içinde ulaşabilir. Kaçırılan her çağrı, kaybedilen bir müşteridir.
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
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="sectoral-card-title">Şeffaf Fiyatlandırma</h3>
              <p className="sectoral-card-text">
                Mesafe ve hizmet tipine göre otomatik fiyat hesaplama araçları ile müşterilerinize şeffaf fiyat bilgisi sunarak güven oluşturun.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                "Yakınımda çekici" araması yapan potansiyel müşterilerin karşısına çıkarak, rakiplerinizden bir adım öne geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Çekici Hizmeti Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              7/24 yol yardımı ve çekici hizmeti veren firmanız için özel tasarlanmış web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Acil Arama Butonu</h3>
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
                <h3 className="sectoral-feature-title">Konum Paylaşımı</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin konumlarını doğrudan paylaşabilecekleri entegre harita sistemi. Doğru yere en hızlı şekilde ulaşmanızı sağlar.
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
                  Sunduğunuz tüm hizmetleri detaylı açıklamalarla listeleyin: Araç çekme, lastik değişimi, akü takviyesi, yakıt ikmali vs.
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
                  Mesafe ve hizmet tipine göre anlık fiyat hesaplama aracı. Şeffaf fiyatlandırma ile müşteri güvenini artırın.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">WhatsApp Entegrasyonu</h3>
                <p className="sectoral-feature-text">
                  WhatsApp üzerinden konum ve fotoğraf paylaşımı. Araç durumunu görerek doğru ekipmanla yola çıkmanızı sağlar.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-truck-monster"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Araç Filonuz</h3>
                <p className="sectoral-feature-text">
                  Çekici araçlarınızı ve teknik özelliklerini sergileyin. Ağır tonajlı, motosiklet taşıma, off-road gibi özel hizmetlerinizi vurgulayın.
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
                  Mesleki yeterlilik belgelerinizi ve sertifikalarınızı göstererek müşterilerde güven oluşturun.
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
                  "Yakınımda çekici", "acil oto çekici" gibi aramalar için optimize edilmiş içerik ve Google Haritalar entegrasyonu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tow-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Çekici Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, çekici firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="tow-benefits-content">
            <div className="tow-benefits-mockup">
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
            <div className="tow-benefits-list">
              <div className="tow-benefit-item">
                <div className="tow-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="tow-benefit-text">
                  <h3>Daha Fazla Acil Çağrı</h3>
                  <p>Web sitenizden gelen tek tıkla arama özelliği sayesinde acil çağrı sayınızı %70'e kadar artırabilirsiniz.</p>
                </div>
              </div>

              <div className="tow-benefit-item">
                <div className="tow-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="tow-benefit-text">
                  <h3>Hızlı Müdahale Süresi</h3>
                  <p>Konum paylaşımı özelliği sayesinde müşterinize ulaşma sürenizi ortalama %40 kısaltabilirsiniz.</p>
                </div>
              </div>

              <div className="tow-benefit-item">
                <div className="tow-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="tow-benefit-text">
                  <h3>Yerel Aramalarda Üst Sıralarda</h3>
                  <p>Google'da "yakınımda çekici" arayanlar için yerel SEO çalışması ile ilk sayfada yer alarak müşteri potansiyelinizi artırın.</p>
                </div>
              </div>

              <div className="tow-benefit-item">
                <div className="tow-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="tow-benefit-text">
                  <h3>Profesyonel İmaj</h3>
                  <p>Profesyonel bir web sitesi, müşterilerin gözünde güvenilir bir iş ortağı olarak algılanmanızı sağlar.</p>
                </div>
              </div>

              <div className="tow-benefit-item">
                <div className="tow-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="tow-benefit-text">
                  <h3>Sigorta Şirketleriyle İş Ortaklıkları</h3>
                  <p>Profesyonel web siteniz sayesinde sigorta şirketleriyle anlaşmalı servis olma imkanı elde ederek sürekli iş potansiyeli yaratın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="tow-pricing">
        <div className="container">
          <div className="tow-section-header">
            <h2 className="tow-section-title">Çekici Hizmeti Web Sitesi Paketleri</h2>
            <p className="tow-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="tow-pricing-grid">
            <div className="tow-pricing-card">
              <div className="tow-pricing-header">
                <h3 className="tow-pricing-title">Başlangıç Paketi</h3>
                <div className="tow-pricing-price">
                  <span className="tow-price-amount">5.900 ₺</span>
                  <span className="tow-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="tow-pricing-features">
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
                  <li className="tow-pricing-disabled"><i className="fas fa-times"></i> Konum Paylaşımı Sistemi</li>
                  <li className="tow-pricing-disabled"><i className="fas fa-times"></i> Fiyat Hesaplama Aracı</li>
                  <li className="tow-pricing-disabled"><i className="fas fa-times"></i> Google Ads Yönetimi</li>
                </ul>
              </div>
              <div className="tow-pricing-footer">
                <Link to="/iletisim" className="tow-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="tow-pricing-card featured">
              <div className="tow-pricing-badge">Popüler</div>
              <div className="tow-pricing-header">
                <h3 className="tow-pricing-title">Premium Paket</h3>
                <div className="tow-pricing-price">
                  <span className="tow-price-amount">9.900 ₺</span>
                  <span className="tow-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="tow-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 10 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Acil Arama Butonu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Konum Paylaşımı Sistemi</li>
                  <li><i className="fas fa-check"></i> Fiyat Hesaplama Aracı</li>
                  <li><i className="fas fa-check"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> İleri Seviye İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Altyapısı</li>
                  <li className="tow-pricing-disabled"><i className="fas fa-times"></i> Tekniker Takip Sistemi</li>
                </ul>
              </div>
              <div className="tow-pricing-footer">
                <Link to="/iletisim" className="tow-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="tow-pricing-card">
              <div className="tow-pricing-header">
                <h3 className="tow-pricing-title">Kurumsal Paket</h3>
                <div className="tow-pricing-price">
                  <span className="tow-price-amount">16.900 ₺</span>
                  <span className="tow-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="tow-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Acil Çağrı Merkezi Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Tekniker Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Sigorta Şirketi Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> İlçe Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Müşteri Yorum Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Altyapısı</li>
                  <li><i className="fas fa-check"></i> Mobil Uygulama Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="tow-pricing-footer">
                <Link to="/iletisim" className="tow-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tow-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Çekici hizmeti web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="tow-faq-grid">
            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Çekici hizmeti web sitesi ne kadar sürede hazır olur?</h3>
              <p className="tow-faq-answer">
                Seçtiğiniz pakete bağlı olarak, çekici hizmeti web sitesi genellikle 5-15 iş günü içerisinde tamamlanır. Acil ihtiyaçlar için 48 saat içinde temel bir site kurulumu da mümkündür.
              </p>
            </div>

            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Konum paylaşımı sistemi nasıl çalışır?</h3>
              <p className="tow-faq-answer">
                Konum paylaşımı sistemi, yolda kalan müşterilerin tarayıcıları üzerinden konum bilgilerini sizinle paylaşmalarını sağlar. Bu sayede müşterinin tam konumunu görerek en kısa sürede yardıma ulaşabilirsiniz. Sistem ayrıca tahmini varış süresini de hesaplayarak müşteriye bildirir.
              </p>
            </div>

            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Tekniker takip sistemi nedir?</h3>
              <p className="tow-faq-answer">
                Kurumsal paketimizde sunulan tekniker takip sistemi, sahada çalışan çekici araçlarınızın konumlarını gerçek zamanlı olarak izlemenizi sağlar. Bu sayede, yardım çağrısına en yakın aracı yönlendirebilir, müşterilerinize de tahmini varış süresini bildirebilirsiniz. Müşteriler de çekici aracın ne zaman geleceğini harita üzerinden takip edebilir.
              </p>
            </div>

            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Mahalle bazlı SEO çalışması ne sağlar?</h3>
              <p className="tow-faq-answer">
                Hizmet verdiğiniz her mahalle için özel içerik ve SEO çalışması yapılır. Böylece "Beylikdüzü çekici", "Kadıköy oto çekici" gibi spesifik aramalarda üst sıralarda çıkmanız sağlanır. Bu, lokal müşterilere erişiminizi önemli ölçüde artırır ve acil yardım bekleyen müşterilerin sizi bulma olasılığını yükseltir.
              </p>
            </div>

            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Sigorta şirketi entegrasyonu nasıl çalışır?</h3>
              <p className="tow-faq-answer">
                Kurumsal paketimizde yer alan sigorta şirketi entegrasyonu, anlaşmalı olduğunuz sigorta şirketlerinin sistemlerine direkt bağlantı sağlar. Bu sayede sigorta şirketleri üzerinden gelen çekici taleplerini anında alabilir, hizmet onaylarını otomatik olarak sisteme kaydedebilirsiniz. Bu entegrasyon sayesinde kağıt işlerini ve manuel onay süreçlerini minimize ederek zaman kazanırsınız.
              </p>
            </div>

            <div className="tow-faq-item">
              <h3 className="tow-faq-question">Fiyat hesaplama aracı nasıl çalışır?</h3>
              <p className="tow-faq-answer">
                Premium ve Kurumsal paketlerimizde sunulan fiyat hesaplama aracı, müşterilerinizin konum bilgisi, mesafe, araç tipi ve talep edilen hizmet tipine göre otomatik fiyat hesaplaması yapar. Belirlediğiniz tarife ve parametrelere göre özelleştirilebilir. Bu sayede müşterileriniz hizmet almadan önce yaklaşık maliyeti görebilir, şeffaf fiyatlandırma ile güven oluşturabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tow-cta">
        <div className="container">
          <div className="tow-cta-content">
            <h2 className="tow-cta-title">
              Çekici Firmanız İçin <span className="sectoral-highlight">Acil Yardım Odaklı</span> Web Sitesi Oluşturalım
            </h2>
            <p className="tow-cta-text">
              7/24 hizmet veren çekici firmanız için acil durumlarda müşterilerinizin sizi hemen bulabileceği, konum bazlı ve SEO dostu bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="tow-cta-buttons">
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

export default TowService; 