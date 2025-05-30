import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './HairTransplantClinic.css';

const HairTransplantClinic = () => {
  return (
    <div className="sectoral-page hair-transplant-page">


      <section className="hair-transplant-hero">
        <div className="container">
          <div className="hair-transplant-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/saglik">Sağlık</Link> / <span>Saç Ekim Kliniği Web Sitesi</span>
          </div>
          <div className="hair-transplant-hero-content">
            <div className="hair-transplant-hero-text">
              <h1 className="sectoral-hero-title">
                Saç Ekim Kliniği İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Tasarımı
              </h1>
              <p className="sectoral-hero-description">
                Saç ekim kliniğiniz için güven veren, hastaları ikna eden ve rezervasyon sistemi barındıran modern web sitesi çözümleri sunuyoruz.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="hair-transplant-hero-visual">
              <div className="hair-transplant-mockup">
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
                  <div className="mockup-before-after">
                    <div className="mockup-before"></div>
                    <div className="mockup-after"></div>
                  </div>
                  <div className="mockup-doctors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Saç Ekim Kliniği Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Potansiyel hastalarınızın %83'ü, bir saç ekim kliniğini tercih etmeden önce web sitesini inceliyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="sectoral-card-title">Güven Oluşturma</h3>
              <p className="sectoral-card-text">
                Saç ekimi, hastaların ciddi bir güven duygusu gerektiren bir estetik operasyondur. Profesyonel bir web sitesi ile uzmanlığınızı ve güvenilirliğinizi vurgulayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h3 className="sectoral-card-title">Öncesi-Sonrası Sonuçlar</h3>
              <p className="sectoral-card-text">
                Önceki hastalarınızın başarılı sonuçlarını sergileyerek potansiyel müşterilerinizi ikna edin. Görsel odaklı içerikle başarılarınızı gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="sectoral-card-title">Randevu Sistemi</h3>
              <p className="sectoral-card-text">
                Online randevu sistemi ile 7/24 rezervasyon kabul edin, hastaların kolayca konsültasyon talebinde bulunmalarını sağlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="sectoral-card-title">Uluslararası Hastalar</h3>
              <p className="sectoral-card-text">
                Çok dilli web sitesi ile sağlık turizmi potansiyelinden faydalanın, yurtdışından gelen hastalar için özel içerikler sunun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Saç Ekim Kliniği Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              Saç ekim kliniğinizin ihtiyaçlarına özel, hasta odaklı web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-laptop-medical"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Özel Tasarım</h3>
                <p className="sectoral-feature-text">
                  Kliniğinizin kurumsal kimliğine uygun, profesyonel ve modern tasarım. Marka değerinizi yansıtan renk paleti ve görsel dil.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Öncesi-Sonrası Galeri</h3>
                <p className="sectoral-feature-text">
                  Başarılı operasyon sonuçlarınızı sergileyebileceğiniz filtrelenebilir galeri sayfaları. Öncesi-sonrası karşılaştırma görselleri.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Doktor Profilleri</h3>
                <p className="sectoral-feature-text">
                  Uzman kadronuzu tanıtan detaylı profil sayfaları. Doktorlarınızın uzmanlık alanları, eğitimleri ve başarıları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  Takvim entegrasyonu ile online randevu alma özelliği. SMS ve e-posta hatırlatma sistemleri ile hasta takibi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Konsültasyon</h3>
                <p className="sectoral-feature-text">
                  Canlı chat ve video konsültasyon özellikleri. Potansiyel hastaların sorularını anında cevaplayın.
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
                  Uluslararası hastalar için çoklu dil desteği. İngilizce, Almanca, Arapça gibi dillerde içerik yönetimi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-medical-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Blog ve İçerik Yönetimi</h3>
                <p className="sectoral-feature-text">
                  Saç ekimi ve bakımı hakkında bilgilendirici içerikler. SEO dostu blog sayfaları ile organik trafiği artırın.
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
                  Her cihazda mükemmel görüntülenen responsive tasarım. Mobil kullanıcılar için optimize edilmiş arayüz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Saç Ekim Kliniğinize Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, saç ekim kliniğinize nasıl değer katar?
            </p>
          </div>

          <div className="sectoral-benefits-content">
            <div className="hair-transplant-benefits-mockup">
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
                  <div className="benefits-mockup-testimonial">
                    <div className="benefits-mockup-avatar"></div>
                    <div className="benefits-mockup-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sectoral-benefits-list">
              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Hasta Güvenini Artırır</h3>
                  <p>Profesyonel bir web sitesi, potansiyel hastaların kliniğinize güven duymasını sağlar.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Uluslararası Hastalara Ulaşır</h3>
                  <p>Çok dilli içerikler ile sağlık turizminden gelen hastalara ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Operasyon Öncesi Bilgilendirme</h3>
                  <p>Hastaları işlem öncesinde detaylı bilgilendirerek endişelerini giderebilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>İş Süreçlerini Otomatikleştirir</h3>
                  <p>Online randevu sistemi ile sekreterlik iş yükünü azaltır, insan hatasını minimize eder.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>SEO ile Organik Trafik</h3>
                  <p>SEO odaklı içerikler ile "saç ekimi", "saç ekim fiyatları" gibi aramalarda üst sıralarda yer alın.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="hair-transplant-pricing">
        <div className="container">
          <div className="hair-transplant-section-header">
            <h2 className="hair-transplant-section-title">Saç Ekim Kliniği Web Sitesi Paketleri</h2>
            <p className="hair-transplant-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="hair-transplant-pricing-grid">
            <div className="hair-transplant-pricing-card">
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Başlangıç Paketi</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">15.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 8 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Öncesi-Sonrası Galeri</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google Analytics</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Randevu Sistemi</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Çoklu Dil Desteği</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Konsültasyon</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="hair-transplant-pricing-card featured">
              <div className="hair-transplant-pricing-badge">Popüler</div>
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Premium Paket</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">28.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Öncesi-Sonrası Galeri</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Dil Desteği (TR/EN)</li>
                  <li><i className="fas fa-check"></i> Doktor Profil Sayfaları</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google İş Kaydı Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="hair-transplant-pricing-disabled"><i className="fas fa-times"></i> Online Konsültasyon</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="hair-transplant-pricing-card">
              <div className="hair-transplant-pricing-header">
                <h3 className="hair-transplant-pricing-title">Kurumsal Paket</h3>
                <div className="hair-transplant-pricing-price">
                  <span className="hair-transplant-price-amount">45.000 ₺</span>
                  <span className="hair-transplant-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="hair-transplant-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 360° Klinik Turu</li>
                  <li><i className="fas fa-check"></i> Profesyonel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Online Konsültasyon Modülü</li>
                  <li><i className="fas fa-check"></i> 4 Dil Desteği</li>
                  <li><i className="fas fa-check"></i> Hasta Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> SMS ve E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Aylık SEO Raporu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Özel İçerik Oluşturma</li>
                </ul>
              </div>
              <div className="hair-transplant-pricing-footer">
                <Link to="/iletisim" className="hair-transplant-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Saç ekim kliniği web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="sectoral-faq-grid">
            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Saç ekim kliniği web sitesi ne kadar sürede hazır olur?</h3>
              <p className="sectoral-faq-answer">
                Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, saç ekim kliniği web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde online randevu sistemi entegrasyonu gibi özellikler ekstra süre gerektirebilir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Web siteme kendim içerik ekleyebilir miyim?</h3>
              <p className="sectoral-faq-answer">
                Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Basit bir panel üzerinden blog yazıları, hasta öncesi-sonrası fotoğrafları ve diğer içerikleri ekleyip düzenleyebilirsiniz.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Online randevu sistemi nasıl çalışıyor?</h3>
              <p className="sectoral-faq-answer">
                Online randevu sistemi, kliniğinizin çalışma saatlerine ve doktor müsaitlik durumuna göre ayarlanır. Hastalar, uygun tarih ve saati seçerek formlarını doldurur. Sistem otomatik olarak hastaları SMS ve e-posta ile bilgilendirir, ayrıca randevu öncesi hatırlatma mesajları gönderir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Web sitesi SEO çalışması içeriyor mu?</h3>
              <p className="sectoral-faq-answer">
                Evet, tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. Premium ve Kurumsal paketlerde ise "saç ekimi", "saç ekim fiyatları", "saç ekim kliniği" gibi anahtar kelimeler için detaylı SEO çalışması yapılmaktadır. Kurumsal pakette aylık SEO raporları ve düzenli içerik güncellemeleri de dahildir.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Sitenin bakımı ve güncellemeleri nasıl yapılır?</h3>
              <p className="sectoral-faq-answer">
                Web sitenizin güvenlik güncellemeleri, yedeklemeleri ve teknik bakımı paket süreniz boyunca tarafımızca düzenli olarak yapılmaktadır. İçerik güncellemeleri için size kullanımı kolay bir panel sunulmaktadır. İhtiyaç duyduğunuzda teknik destek ekibimiz yardımcı olmaktadır.
              </p>
            </div>

            <div className="sectoral-faq-item">
              <h3 className="sectoral-faq-question">Yabancı dil desteği nasıl sağlanıyor?</h3>
              <p className="sectoral-faq-answer">
                Premium pakette Türkçe ve İngilizce, Kurumsal pakette ise toplam 4 dil desteği sunuyoruz. Her dil için ayrı URL yapısı oluşturularak, o dilde arama yapan kullanıcıların sitenizi bulması sağlanıyor. İçerik çevirileri profesyonel çevirmenler tarafından yapılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hair-transplant-cta">
        <div className="container">
          <div className="hair-transplant-cta-content">
            <h2 className="hair-transplant-cta-title">
              Saç Ekim Kliniğiniz İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Oluşturalım
            </h2>
            <p className="hair-transplant-cta-text">
              Kliniğinizin ihtiyaçlarına özel, hasta odaklı ve dönüşüm oranı yüksek bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="hair-transplant-cta-buttons">
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

export default HairTransplantClinic; 