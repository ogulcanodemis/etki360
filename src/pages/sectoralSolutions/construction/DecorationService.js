import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './DecorationService.css';

const DecorationService = () => {
  return (
    <div className="sectoral-page decoration-page">
      <section className="decoration-hero">
        <div className="container">
          <div className="decoration-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat & Dekorasyon</Link> / <span>Dekorasyon Web Sitesi</span>
          </div>
          <div className="decoration-hero-content">
            <div className="decoration-hero-text">
              <h1 className="sectoral-hero-title">
                Dekorasyon Firmanız İçin <span className="sectoral-highlight">Etkileyici</span> Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                İç mimari, ev ve ofis dekorasyonu, mobilya tasarımı ve proje yönetimi hizmetleriniz için müşterilerinizi etkileyen, projeleri sergileyen web sitesi çözümleri.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="decoration-hero-visual">
              <div className="decoration-mockup">
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
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                  </div>
                  <div className="mockup-services">
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
            <h2 className="sectoral-section-title">Dekorasyon Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Dekorasyon hizmeti almak isteyen müşterilerin %85'i ilk olarak internette araştırma yapıyor ve görsellere göre karar veriyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-images"></i>
              </div>
              <h3 className="sectoral-card-title">Görsel Portfolyo</h3>
              <p className="sectoral-card-text">
                Tamamladığınız projeleri etkileyici görsellerle sergileyerek potansiyel müşterilere stil ve kalite anlayışınızı gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="sectoral-card-title">Stil Gösterimi</h3>
              <p className="sectoral-card-text">
                Modern, klasik, minimalist gibi farklı stillerinizi kategorize ederek müşterilerin ilgili projelere hızlıca erişmesini sağlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-ruler-combined"></i>
              </div>
              <h3 className="sectoral-card-title">Proje Planlama</h3>
              <p className="sectoral-card-text">
                Online proje planlama araçları ile müşterilerinizin ihtiyaçlarını belirleyip ön teklifler sunarak süreçleri hızlandırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="sectoral-card-title">Referanslar</h3>
              <p className="sectoral-card-text">
                Memnun müşterilerinizin yorumları ve başarılı projeleriniz, yeni müşteriler kazanmanızda en etkili pazarlama aracınızdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Dekorasyon Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              Dekorasyon firmanızın ihtiyaçlarına özel, görsel odaklı web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-th"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">İlham Verici Galeri</h3>
                <p className="sectoral-feature-text">
                  Farklı mekanlar, stiller ve projeler için filtreli galeri ile tüm çalışmalarınızı etkileyici şekilde sergileyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-couch"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Mekan Türleri</h3>
                <p className="sectoral-feature-text">
                  Oturma odası, yatak odası, ofis, cafe gibi farklı mekan türlerine göre kategorize edilmiş portfolyo sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">3D Görseller</h3>
                <p className="sectoral-feature-text">
                  3D tasarım ve render çalışmalarınızı interaktif gösterme imkanı sunan modern teknolojik altyapı.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  Müşterilerinizin online konsültasyon randevusu alabileceği entegre takvim ve randevu sistemi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Proje Formu</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin ihtiyaçlarını, bütçe ve stil tercihlerini detaylı olarak belirtebilecekleri özel proje talep formu.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Tasarım Süreci</h3>
                <p className="sectoral-feature-text">
                  Tasarım ve uygulama sürecinizi adım adım anlatan, şeffaflık sağlayan bilgilendirici bölüm.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-box-open"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Ürün Kataloğu</h3>
                <p className="sectoral-feature-text">
                  Kullandığınız mobilya, aksesuar ve malzemeleri sergileyebileceğiniz entegre ürün kataloğu sistemi.
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
                  Her cihazda mükemmel görüntülenen, hızlı yüklenen ve kolay kullanılabilen responsive tasarım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Dekorasyon Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Görsel odaklı bir web sitesi, dekorasyon firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="decoration-benefits-content">
            <div className="decoration-benefits-mockup">
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
                    <div className="benefits-mockup-projects">
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                      <div className="benefits-mockup-project"></div>
                    </div>
                  </div>
                  <div className="benefits-mockup-info"></div>
                </div>
              </div>
            </div>
            <div className="decoration-benefits-list">
              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3>Güçlü İlk İzlenim</h3>
                  <p>Profesyonel tasarım ve görsellerle dolu bir web sitesi, müşterilerinizin sizinle çalışma kararını %70 oranında etkiler.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3>Daha Nitelikli Müşteriler</h3>
                  <p>Stilinizi, süreçlerinizi ve projelerinizi açıkça gösteren web siteniz, sizinle uyumlu müşterileri çekecektir.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3>Zaman Tasarrufu</h3>
                  <p>Online randevu ve proje bilgi formları ile telefon trafiğini azaltıp, daha verimli müşteri görüşmeleri yapabilirsiniz.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3>Dijital Portföy</h3>
                  <p>Tamamladığınız projeleri arşivleyerek potansiyel müşterilere her an gösterilebilecek zengin bir portfolyo oluşturursunuz.</p>
                </div>
              </div>

              <div className="decoration-benefit-item">
                <div className="decoration-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="decoration-benefit-text">
                  <h3>SEO ile Sürekli Müşteri</h3>
                  <p>"İç mimar", "ev dekorasyon", "ofis tasarım" gibi aramalarda üst sıralarda çıkarak sürekli yeni müşteri akışı sağlarsınız.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="decoration-pricing">
        <div className="container">
          <div className="decoration-section-header">
            <h2 className="decoration-section-title">Dekorasyon Web Sitesi Paketleri</h2>
            <p className="decoration-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="decoration-pricing-grid">
            <div className="decoration-pricing-card">
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Başlangıç Paketi</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">7.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Temel Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> 3D Görsel Entegrasyonu</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> Online Randevu Sistemi</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> Proje Takip Sistemi</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="decoration-pricing-card featured">
              <div className="decoration-pricing-badge">Popüler</div>
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Premium Paket</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">14.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Filtrelenebilir Portfolyo</li>
                  <li><i className="fas fa-check"></i> Proje Detay Sayfaları</li>
                  <li><i className="fas fa-check"></i> Online Randevu Sistemi</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> Google My Business Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Müşteri Referans Sistemi</li>
                  <li><i className="fas fa-check"></i> Blog & İçerik Yönetimi</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="decoration-pricing-disabled"><i className="fas fa-times"></i> 3D Görsel Entegrasyonu</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="decoration-pricing-card">
              <div className="decoration-pricing-header">
                <h3 className="decoration-pricing-title">Kurumsal Paket</h3>
                <div className="decoration-pricing-price">
                  <span className="decoration-price-amount">24.900 ₺</span>
                  <span className="decoration-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="decoration-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 3D Görsel Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 360° Mekan Turu</li>
                  <li><i className="fas fa-check"></i> Özel Proje Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Detaylı Müşteri Paneli</li>
                  <li><i className="fas fa-check"></i> Google Ads Yönetimi (3 Ay)</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Ekip Tanıtım Sayfaları</li>
                  <li><i className="fas fa-check"></i> Entegre Satış Sistemi</li>
                  <li><i className="fas fa-check"></i> 7/24 Teknik Destek</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                </ul>
              </div>
              <div className="decoration-pricing-footer">
                <Link to="/iletisim" className="decoration-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Dekorasyon web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="decoration-faq-grid">
            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Dekorasyon web sitesi ne kadar sürede hazır olur?</h3>
              <p className="decoration-faq-answer">
                Seçtiğiniz pakete bağlı olarak, dekorasyon web sitesi genellikle 2-4 hafta içerisinde tamamlanır. Görsel ağırlıklı bir web sitesi olduğu için, proje görselleri ve içerik hazırlığı sürecin en önemli kısmıdır. Kurumsal paket için 3D entegrasyonlar ve özel sistemler nedeniyle 4-6 hafta gerekebilir.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">360° mekan turu özelliği nasıl çalışır?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizde yer alan 360° mekan turu özelliği, tamamladığınız projelerin 360 derecelik fotoğraflarını çekerek interaktif bir şekilde sunmanızı sağlar. Ziyaretçiler sanal gerçeklik gözlükleriyle veya mouse/parmak hareketleriyle mekanı her açıdan inceleyebilirler. Bu teknoloji, özellikle uzak lokasyonlardaki müşterilerinize projelerinizi etkileyici bir şekilde göstermenizi sağlar.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Proje takip sistemi hangi özellikleri içerir?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizde sunulan proje takip sistemi, her müşterinize özel bir panel sunar. Bu panelde müşteriler projenin aşamalarını (konsept tasarım, revizyon, uygulama, mobilya seçimleri vb.) takip edebilir, onaylarını verebilir, görüşlerini bildirebilir ve dosya paylaşımı yapabilir. Ayrıca sistem üzerinden ödeme planı takibi, sözleşme yönetimi ve takvim paylaşımı da yapılabilir.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Web sitesi için profesyonel fotoğraf çekimi hizmeti sunuyor musunuz?</h3>
              <p className="decoration-faq-answer">
                Evet, Premium ve Kurumsal paketlerimizde İstanbul içi lokasyonlar için profesyonel iç mekan fotoğraf çekimi hizmeti sunuyoruz. Dekorasyon projeleri için görsel kalitesi son derece önemlidir. Profesyonel ekipmanlar ve geniş açı lenslerle yapılan çekimler, projenizin tüm detaylarını ve atmosferini yansıtacak şekilde düzenlenir. İstanbul dışı lokasyonlar için ek ücret talep edilebilir veya kendi fotoğraflarınızı kullanabilirsiniz.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Filtrelenebilir portfolyo sistemi ne sağlar?</h3>
              <p className="decoration-faq-answer">
                Premium ve Kurumsal paketlerimizde bulunan filtrelenebilir portfolyo sistemi, ziyaretçilerin projelerinizi çeşitli kriterlere göre filtrelemesini sağlar. Mekan tipi (ev, ofis, cafe vb.), stil (modern, klasik, endüstriyel vb.), metrekare, bütçe aralığı gibi filtreler kullanılabilir. Bu sistem, müşterilerin kendi ihtiyaçlarına benzer projeleri hızlıca bulabilmelerini sağlayarak ilgili projelere odaklanmalarını sağlar.
              </p>
            </div>

            <div className="decoration-faq-item">
              <h3 className="decoration-faq-question">Entegre satış sistemi ile ne satılabilir?</h3>
              <p className="decoration-faq-answer">
                Kurumsal paketimizdeki entegre satış sistemi, aksesuar, mobilya, aydınlatma gibi ürünleri satmanıza veya tasarım danışmanlığı gibi dijital hizmetleri paket halinde sunmanıza olanak tanır. Özellikle kendi mobilya veya dekoratif ürün koleksiyonunuz varsa, bu sistem üzerinden ürünlerinizi sergileyip satabilirsiniz. Ayrıca online danışmanlık paketleri, mekan planlama çizimleri veya moodboard hazırlama gibi dijital hizmetlerinizi de satışa sunabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="decoration-cta">
        <div className="container">
          <div className="decoration-cta-content">
            <h2 className="decoration-cta-title">
              Dekorasyon Firmanız İçin <span className="sectoral-highlight">Etkileyici</span> Web Sitesi Oluşturalım
            </h2>
            <p className="decoration-cta-text">
              Projelerinizi en iyi şekilde sergileyecek, müşterilerinizi etkileyecek ve işinizi büyütecek bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="decoration-cta-buttons">
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

export default DecorationService; 