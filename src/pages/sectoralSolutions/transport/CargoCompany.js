import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './CargoCompany.css';

const CargoCompany = () => {
  return (
    <div className="sectoral-page cargo-page">
      <section className="cargo-hero">
        <div className="container">
          <div className="cargo-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Kargo Firması Web Sitesi</span>
          </div>
          <div className="cargo-hero-content">
            <div className="cargo-hero-text">
              <h1 className="sectoral-hero-title">
                Kargo Firmanız İçin <span className="sectoral-highlight">Takip Sistemli</span> Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                Kargo ve kurye firmanız için müşterilerinizin kargolarını takip edebileceği, online sipariş oluşturabileceği ve bölge bazlı teslimat sistemi sunan profesyonel web sitesi çözümleri.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="cargo-hero-visual">
              <div className="cargo-mockup">
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
                    <div className="mockup-result"></div>
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
            <h2 className="sectoral-section-title">Kargo Firması Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Kargo sektöründe müşterilerin %89'u bir kargo firmasının web sitesini, kargolarını takip etmek ve hizmet kalitesini değerlendirmek için kullanıyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3 className="sectoral-card-title">Kargo Takip Sistemi</h3>
              <p className="sectoral-card-text">
                Müşterilerin en çok ihtiyaç duyduğu özellik olan kargo takip sistemi ile müşteri memnuniyetini artırın ve müşteri hizmetleri yükünüzü azaltın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="sectoral-card-title">Online Sipariş Oluşturma</h3>
              <p className="sectoral-card-text">
                Müşterilerinizin online sipariş oluşturabilmeleri sayesinde iş süreçlerinizi hızlandırın ve operasyonel maliyetlerinizi düşürün.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Bölge Bazlı Fiyatlandırma</h3>
              <p className="sectoral-card-text">
                Farklı bölgeler için özel fiyat hesaplama sistemi ile müşterilerinize anlık ve şeffaf fiyat bilgisi sunun.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="sectoral-card-title">Müşteri Hizmetleri Entegrasyonu</h3>
              <p className="sectoral-card-text">
                Canlı destek ve bildirim sistemleri ile müşterilerinize hızlı yanıt verin, müşteri memnuniyetini artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Kargo Firması Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              Kargo ve kurye firmanızın ihtiyaçlarına özel, müşteri odaklı web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Gelişmiş Kargo Takip Sistemi</h3>
                <p className="sectoral-feature-text">
                  Kargo takip numarası veya sipariş numarası ile anlık takip imkanı. Harita üzerinde gösterim ve teslimat sürecindeki tüm aşamaları görüntüleme.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">SMS ve E-posta Bildirim</h3>
                <p className="sectoral-feature-text">
                  Kargonun durumu değiştikçe otomatik SMS ve e-posta bildirimleri. Teslimat saati yaklaştığında ön bildirim sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Kargo Ücret Hesaplama</h3>
                <p className="sectoral-feature-text">
                  Ağırlık, boyut ve mesafe bilgilerine göre anlık fiyat hesaplama. Farklı hizmet tipleri için özel tarifeler.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Sipariş Formu</h3>
                <p className="sectoral-feature-text">
                  Kullanıcı dostu arayüz ile kolay kargo siparişi. Adres defteri oluşturma ve geçmiş gönderileri görüntüleme imkanı.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Müşteri Paneli</h3>
                <p className="sectoral-feature-text">
                  Kurumsal ve bireysel müşteriler için özel paneller. Fatura görüntüleme, raporlama ve kargo geçmişi izleme.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-store"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Şube Bulucu</h3>
                <p className="sectoral-feature-text">
                  Konum bazlı en yakın şube bulma. Şube çalışma saatleri, iletişim bilgileri ve yol tarifi.
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
                  Uluslararası hizmet veren kargo firmaları için çoklu dil desteği. Müşteri deneyimini iyileştiren lokalizasyon.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">E-ticaret Entegrasyonu</h3>
                <p className="sectoral-feature-text">
                  Popüler e-ticaret platformları ile entegrasyon. API desteği ile otomatik sipariş işleme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Kargo Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, kargo firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="cargo-benefits-content">
            <div className="cargo-benefits-mockup">
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
                    <div className="benefits-mockup-map"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cargo-benefits-list">
              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Müşteri Memnuniyeti Artışı</h3>
                  <p>Anlık kargo takibi ile müşteri memnuniyetinde %40'a varan artış sağlayabilirsiniz.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Operasyonel Verimlilik</h3>
                  <p>Online sipariş sistemi ile manuel veri girişinden kaynaklanan hataları %85 oranında azaltabilirsiniz.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Müşteri Hizmetleri Yükü Azalır</h3>
                  <p>Self-servis kargo takibi sayesinde müşteri hizmetleri çağrılarında %60'a varan azalma.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>Kurumsal İmaj Güçlenir</h3>
                  <p>Profesyonel bir web sitesi ile kurumsal imajınızı güçlendirir, müşteri güvenini artırırsınız.</p>
                </div>
              </div>

              <div className="cargo-benefit-item">
                <div className="cargo-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="cargo-benefit-text">
                  <h3>E-ticaret İş Ortaklıkları</h3>
                  <p>API entegrasyonları ile e-ticaret siteleriyle iş ortaklığı kurabilir, iş hacminizi genişletebilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="cargo-pricing">
        <div className="container">
          <div className="cargo-section-header">
            <h2 className="cargo-section-title">Kargo Firması Web Sitesi Paketleri</h2>
            <p className="cargo-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="cargo-pricing-grid">
            <div className="cargo-pricing-card">
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Başlangıç Paketi</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">8.900 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Temel Kargo Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Şube Bulucu</li>
                  <li><i className="fas fa-check"></i> Fiyat Hesaplama Aracı</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> Online Sipariş Sistemi</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> SMS/E-posta Bildirim</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> E-ticaret Entegrasyonu</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="cargo-pricing-card featured">
              <div className="cargo-pricing-badge">Popüler</div>
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Premium Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">17.900 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Kargo Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Harita Entegrasyonlu Şube Bulucu</li>
                  <li><i className="fas fa-check"></i> Detaylı Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Online Sipariş Sistemi</li>
                  <li><i className="fas fa-check"></i> Müşteri Paneli</li>
                  <li><i className="fas fa-check"></i> E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="cargo-pricing-disabled"><i className="fas fa-times"></i> E-ticaret Entegrasyonu</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="cargo-pricing-card">
              <div className="cargo-pricing-header">
                <h3 className="cargo-pricing-title">Kurumsal Paket</h3>
                <div className="cargo-pricing-price">
                  <span className="cargo-price-amount">29.900 ₺</span>
                  <span className="cargo-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="cargo-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> İleri Düzey Kargo Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Tam Entegre Sipariş Yönetimi</li>
                  <li><i className="fas fa-check"></i> SMS ve E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Çoklu Dil Desteği (4 Dil)</li>
                  <li><i className="fas fa-check"></i> E-ticaret Platformları Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> API Desteği</li>
                  <li><i className="fas fa-check"></i> İleri Düzey Kurumsal Panel</li>
                  <li><i className="fas fa-check"></i> Ödeme Sistemi Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Mobil Uygulama Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="cargo-pricing-footer">
                <Link to="/iletisim" className="cargo-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Kargo firması web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="cargo-faq-grid">
            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Kargo takip sistemi nasıl çalışır?</h3>
              <p className="cargo-faq-answer">
                Kargo takip sistemi, firmanızın mevcut takip altyapısına entegre çalışır. Müşteriler, web sitesi üzerinden kargo takip numaralarını girerek gönderilerinin güncel durumunu anlık olarak görüntüleyebilirler. Premium ve Kurumsal paketlerde harita entegrasyonu sayesinde kargonun fiziksel konumu da gösterilir.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Online sipariş sistemi kurmak için ne gerekli?</h3>
              <p className="cargo-faq-answer">
                Online sipariş sistemi için Premium veya Kurumsal paketlerimizi tercih etmeniz gerekir. Sistem, müşterilerinizin gönderici ve alıcı bilgilerini girerek, kargo boyutlarını ve ağırlığını belirterek online sipariş oluşturmasına olanak tanır. Ödeme sistemi entegrasyonu ile sipariş tamamlandıktan sonra, sistem otomatik olarak bir kargo takip numarası oluşturur.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">E-ticaret entegrasyonu hangi platformları destekler?</h3>
              <p className="cargo-faq-answer">
                Kurumsal paketimizde yer alan e-ticaret entegrasyonu; WooCommerce, Shopify, Magento, Opencart, Trendyol, Hepsiburada gibi popüler platformlar ile uyumlu çalışır. API desteği sayesinde özel geliştirilen e-ticaret sistemleri ile de entegrasyon mümkündür. Bu entegrasyon sayesinde, e-ticaret sitelerinden gelen siparişler otomatik olarak kargo sistemine aktarılır.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Kargo firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="cargo-faq-answer">
                Başlangıç paketi için ortalama 2-3 hafta, Premium paket için 3-4 hafta, Kurumsal paket için ise 6-8 haftalık bir geliştirme süreci öngörülmektedir. Kurumsal pakette yer alan özel entegrasyonlar ve API geliştirmeleri nedeniyle süreç daha uzun olabilir. Acil ihtiyaçlar için hızlandırılmış süreçlerimiz de mevcuttur.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">Şube bulucu özelliği nasıl çalışır?</h3>
              <p className="cargo-faq-answer">
                Şube bulucu özelliği, müşterilerin adres veya konum bilgisini girerek en yakın kargo şubelerini bulmalarını sağlar. Premium ve Kurumsal paketlerde, Google Haritalar entegrasyonu ile şubelerin konumları harita üzerinde görüntülenir, çalışma saatleri ve iletişim bilgileri detaylı olarak listelenir. Ayrıca, müşteriler seçtikleri şubeye yol tarifi alabilirler.
              </p>
            </div>

            <div className="cargo-faq-item">
              <h3 className="cargo-faq-question">SMS ve e-posta bildirim sistemi nasıl entegre edilir?</h3>
              <p className="cargo-faq-answer">
                Premium ve Kurumsal paketlerimizde yer alan bildirim sistemleri, kargo durumu değiştiğinde müşterilere otomatik SMS veya e-posta gönderilebilmesini sağlar. Bu sistem, mevcut CRM ve kargo takip sisteminize entegre edilir. Müşteriler tercih ettikleri bildirim yöntemini seçebilir ve kargolarının hangi aşamalarında bildirim almak istediklerini belirleyebilirler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cargo-cta">
        <div className="container">
          <div className="cargo-cta-content">
            <h2 className="cargo-cta-title">
              Kargo Firmanız İçin <span className="sectoral-highlight">Tam Entegre</span> Web Sitesi Oluşturalım
            </h2>
            <p className="cargo-cta-text">
              Müşteri deneyimini artıran, operasyonel verimliliği yükselten ve e-ticaret dünyasıyla entegre bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="cargo-cta-buttons">
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

export default CargoCompany; 