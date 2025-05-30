import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './PaintingService.css';

const PaintingService = () => {
  return (
    <div className="sectoral-page painting-page">
      <section className="painting-hero">
        <div className="container">
          <div className="painting-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat & Dekorasyon</Link> / <span>Boya Badana Web Sitesi</span>
          </div>
          <div className="painting-hero-content">
            <div className="painting-hero-text">
              <h1 className="sectoral-hero-title">
                Boya Badana Firmanız İçin <span className="sectoral-highlight">Modern</span> Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                İç cephe, dış cephe boya, dekoratif boya uygulamaları ve duvar kağıdı hizmetleri sunan firmanız için müşteri kazandıran, profesyonel web sitesi çözümleri.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="painting-hero-visual">
              <div className="painting-mockup">
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
                  <div className="mockup-gallery">
                    <div className="mockup-before-after">
                      <div className="mockup-before"></div>
                      <div className="mockup-after"></div>
                    </div>
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
            <h2 className="sectoral-section-title">Boya Badana Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Ev ve işyeri sahiplerinin %78'i boya badana hizmeti almadan önce internet üzerinden araştırma yapıyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-images"></i>
              </div>
              <h3 className="sectoral-card-title">Görsel Sunum</h3>
              <p className="sectoral-card-text">
                Öncesi-sonrası görseller ve tamamlanmış projeler ile hizmet kalitenizi potansiyel müşterilere etkili bir şekilde gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="sectoral-card-title">Online Fiyat Hesaplama</h3>
              <p className="sectoral-card-text">
                Müşterilerinizin metrekare ve istekleri doğrultusunda yaklaşık maliyet hesaplayabilecekleri araçlar sunun.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                "Yakınımda boya badana" araması yapan potansiyel müşterilerin karşısına çıkarak, bölgenizdeki işleri kapın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="sectoral-card-title">Müşteri Yorumları</h3>
              <p className="sectoral-card-text">
                Memnun müşterilerinizin olumlu yorumları, yeni müşterileri ikna etmenizde en büyük yardımcınız olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Boya Badana Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              Boya badana firmanızın ihtiyaçlarına özel, müşteri çekmeye odaklı web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-paint-roller"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Hizmet Galerisi</h3>
                <p className="sectoral-feature-text">
                  İç cephe, dış cephe, dekoratif boya ve duvar kağıdı uygulamalarınızı kategorize edilmiş galeri ile sergileyin.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Renk Simülatörü</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin evlerinin fotoğraflarını yükleyip farklı renk seçeneklerini deneyebilecekleri interaktif simülatör.
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
                  Alan, boya tipi ve ek hizmetlere göre otomatik fiyat hesaplayan, müşterilerinize şeffaf bilgi sunan araç.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Keşif Randevusu</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin ücretsiz keşif için online randevu alabilecekleri, takvim entegrasyonlu rezervasyon sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Öncesi-Sonrası Galerisi</h3>
                <p className="sectoral-feature-text">
                  Çarpıcı öncesi-sonrası karşılaştırma fotoğrafları ile hizmet kalitenizi gösteren interaktif galeri.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Müşteri Referansları</h3>
                <p className="sectoral-feature-text">
                  Memnun müşterilerinizin fotoğraflı ve videolu referanslarını paylaşabileceğiniz güven artırıcı bölüm.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Blog ve İçerik Alanı</h3>
                <p className="sectoral-feature-text">
                  Boya teknikleri, renk seçimleri, bakım önerileri hakkında bilgilendirici içerikler paylaşarak SEO desteği sağlayın.
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
                  Her cihazda mükemmel görüntülenen, hızlı yüklenen responsive tasarım ile tüm müşterilere ulaşın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Boya Badana Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, boya badana firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="painting-benefits-content">
            <div className="painting-benefits-mockup">
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
                  <div className="benefits-mockup-calculator"></div>
                </div>
              </div>
            </div>
            <div className="painting-benefits-list">
              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3>Daha Fazla Müşteri Talebi</h3>
                  <p>SEO odaklı web sitesi ile "boya badana", "duvar boyama" gibi aramalarda üst sıralarda çıkarak müşteri sayınızı %65'e kadar artırabilirsiniz.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3>Profesyonel İmaj</h3>
                  <p>Kaliteli görseller ve profesyonel tasarım ile müşterilerinizin gözünde güvenilir ve profesyonel bir imaj oluşturun.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3>Daha Az Operasyonel Yük</h3>
                  <p>Online fiyat hesaplama ve keşif randevu sistemi ile telefon trafiğini azaltarak operasyonel verimliliği artırın.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3>Rekabette Öne Çıkma</h3>
                  <p>Rakiplerinizin çoğunun profesyonel web sitesi olmadığı bu sektörde, kaliteli bir web sitesi sizi rekabette öne çıkaracaktır.</p>
                </div>
              </div>

              <div className="painting-benefit-item">
                <div className="painting-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="painting-benefit-text">
                  <h3>Hedefli Pazarlama</h3>
                  <p>Google Ads ve sosyal medya entegrasyonları ile hizmet bölgenizdeki potansiyel müşterilere hedefli reklam yapabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="painting-pricing">
        <div className="container">
          <div className="painting-section-header">
            <h2 className="painting-section-title">Boya Badana Web Sitesi Paketleri</h2>
            <p className="painting-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="painting-pricing-grid">
            <div className="painting-pricing-card">
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Başlangıç Paketi</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">4.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Renk Simülatörü</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Online Fiyat Hesaplama</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Keşif Randevu Sistemi</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="painting-pricing-card featured">
              <div className="painting-pricing-badge">Popüler</div>
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Premium Paket</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">8.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 10 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Öncesi-Sonrası Karşılaştırma</li>
                  <li><i className="fas fa-check"></i> Online Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Keşif Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Mahalle Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Müşteri Referans Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog & İçerik Yönetimi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="painting-pricing-disabled"><i className="fas fa-times"></i> Renk Simülatörü</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="painting-pricing-card">
              <div className="painting-pricing-header">
                <h3 className="painting-pricing-title">Kurumsal Paket</h3>
                <div className="painting-pricing-price">
                  <span className="painting-price-amount">13.900 ₺</span>
                  <span className="painting-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="painting-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Renk Simülatörü</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Fiyat Hesaplama</li>
                  <li><i className="fas fa-check"></i> Online Ödeme Altyapısı</li>
                  <li><i className="fas fa-check"></i> İş Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> İlçe Bazlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Ekip Tanıtım Sayfaları</li>
                  <li><i className="fas fa-check"></i> Düzenli SEO Raporlaması</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="painting-pricing-footer">
                <Link to="/iletisim" className="painting-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Boya badana web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="painting-faq-grid">
            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Boya badana web sitesi ne kadar sürede hazır olur?</h3>
              <p className="painting-faq-answer">
                Seçtiğiniz pakete bağlı olarak, boya badana web sitesi genellikle 1-3 hafta içerisinde tamamlanır. Başlangıç paketi için süreç daha kısa olabilirken, Kurumsal paket için renk simülatörü gibi özel geliştirmeler sebebiyle 3-4 hafta gerekebilir.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Renk simülatörü nasıl çalışır?</h3>
              <p className="painting-faq-answer">
                Kurumsal paketimizde yer alan renk simülatörü, müşterilerinizin kendi evlerinin fotoğraflarını yükleyip farklı renk ve doku seçeneklerini deneyebilmelerini sağlar. Yapay zeka destekli sistem, duvarları otomatik olarak tespit ederek seçilen rengi uygular ve gerçekçi bir önizleme sunar. Bu özellik, müşterilerin karar verme sürecini hızlandırarak dönüşüm oranlarını artırır.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Online fiyat hesaplama aracı ne kadar doğru sonuçlar verir?</h3>
              <p className="painting-faq-answer">
                Online fiyat hesaplama aracı, belirlediğiniz birim fiyatlar üzerinden metrekare, boya tipi, kat sayısı, alçı/sıva ihtiyacı gibi faktörleri dikkate alarak yaklaşık bir fiyat hesaplar. Genellikle %85-90 oranında doğru sonuçlar verir. Kesin fiyat için yine de yerinde keşif gerektiğini belirten bir not otomatik olarak gösterilir. Bu araç, müşterilere bir fikir vermek ve potansiyel müşterileri keşif randevusuna yönlendirmek için idealdir.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Mahalle bazlı SEO çalışması nedir?</h3>
              <p className="painting-faq-answer">
                Premium paketimizde yer alan mahalle bazlı SEO çalışması, hizmet verdiğiniz her mahalle için özel içerik ve anahtar kelime optimizasyonu yapılmasını içerir. Örneğin "Ataşehir boya badana", "Beylikdüzü duvar boyama" gibi yerel aramalarda üst sıralarda çıkmanızı sağlar. Google Haritalar entegrasyonu ile birlikte, yakın çevrenizdeki potansiyel müşterilerin sizi bulma olasılığını önemli ölçüde artırır.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">İş takip sistemi hangi özellikleri içerir?</h3>
              <p className="painting-faq-answer">
                Kurumsal paketimizde sunulan iş takip sistemi, devam eden projelerinizi, ekip görevlendirmelerini ve malzeme planlamasını tek bir panel üzerinden yönetmenizi sağlar. Sistem, müşterilerinize özel şifre ile giriş yapabilecekleri bir alan sunarak proje ilerlemesini takip etmelerini sağlar. Ayrıca, otomatik bildirimler ile müşterilerinizi süreç hakkında bilgilendirebilir, iş tamamlandığında değerlendirme talep edebilirsiniz.
              </p>
            </div>

            <div className="painting-faq-item">
              <h3 className="painting-faq-question">Web sitesi içerikleri için fotoğraf çekimi hizmeti sunuyor musunuz?</h3>
              <p className="painting-faq-answer">
                Evet, Premium ve Kurumsal paketlerimizde İstanbul içi lokasyonlar için profesyonel fotoğraf çekimi hizmeti sunuyoruz. Tamamladığınız projelerin öncesi-sonrası fotoğraflarının profesyonel ekipmanlarla çekilmesi, web sitenizin etkileyiciliğini önemli ölçüde artıracaktır. İstanbul dışı lokasyonlar için ek ücret talep edilebilir veya sizin sağlayacağınız yüksek kaliteli görseller kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="painting-cta">
        <div className="container">
          <div className="painting-cta-content">
            <h2 className="painting-cta-title">
              Boya Badana Firmanız İçin <span className="sectoral-highlight">Modern</span> Web Sitesi Oluşturalım
            </h2>
            <p className="painting-cta-text">
              Sektörünüzde fark yaratacak, müşteri kazandıran ve profesyonel imajınızı güçlendirecek bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="painting-cta-buttons">
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

export default PaintingService; 