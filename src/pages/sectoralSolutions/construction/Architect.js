import React from 'react';
import { Link } from 'react-router-dom';
import '../SectoralSolutions.css';
import './Architect.css';

const Architect = () => {
  return (
    <div className="sectoral-page architect-page">
      <section className="architect-hero">
        <div className="container">
          <div className="architect-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/insaat-dekorasyon">İnşaat ve Dekorasyon</Link> / <span>Mimarlık Firması Web Sitesi</span>
          </div>
          <div className="architect-hero-content">
            <div className="architect-hero-text">
              <h1 className="sectoral-hero-title">
                Mimarlık Firmalarına Özel <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Tasarımı
              </h1>
              <p className="sectoral-hero-description">
                Mimarlık firmanız için portföyünüzü sergileyebileceğiniz, müşterilerinizi etkileyecek ve projelerinizi ön plana çıkaracak modern web sitesi çözümleri sunuyoruz.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="architect-hero-visual">
              <div className="architect-mockup">
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
                  <div className="mockup-portfolio">
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                    <div className="mockup-project"></div>
                  </div>
                  <div className="mockup-about"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Mimarlık Firması Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Potansiyel müşterilerinizin %78'i, bir mimarlık firmasıyla çalışmadan önce web sitesini inceliyor.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="sectoral-card-title">Portföy Sergileme</h3>
              <p className="sectoral-card-text">
                Tamamladığınız projeleri yüksek kaliteli görsellerle sergileyerek mimari tarzınızı ve kalite anlayışınızı potansiyel müşterilere gösterin.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3 className="sectoral-card-title">Profesyonel İmaj</h3>
              <p className="sectoral-card-text">
                Modern ve etkileyici bir web sitesi, firmanızın profesyonel imajını güçlendirir ve müşterilerinize güven verir.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="sectoral-card-title">Müşteri Etkileşimi</h3>
              <p className="sectoral-card-text">
                Online randevu ve iletişim formlarıyla potansiyel müşterilerinizin sizinle kolayca iletişime geçmesini sağlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="sectoral-card-title">Geniş Erişim</h3>
              <p className="sectoral-card-text">
                SEO odaklı içeriklerle arama motorlarında üst sıralarda yer alın ve daha fazla potansiyel müşteriye ulaşın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Mimarlık Firması Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              Mimarlık firmanızın ihtiyaçlarına özel, etkileyici web sitesi çözümleri
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-images"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Proje Portföyü</h3>
                <p className="sectoral-feature-text">
                  Tamamladığınız projeleri kategorilere göre filtrelenebilir galerilerde sergileyin. Yüksek çözünürlüklü görsellerle detaylı proje açıklamaları ekleyin.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Özel Tasarım</h3>
                <p className="sectoral-feature-text">
                  Firmanızın kurumsal kimliğine uygun, minimal ve şık tasarım. Çağdaş mimari anlayışınızı yansıtan görsel dil.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-cube"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">3D Görselleştirme</h3>
                <p className="sectoral-feature-text">
                  Projelerinizin 3D görsellerini ve animasyonlarını sorunsuz bir şekilde sergileyebileceğiniz özel medya galerisi.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Ekip Profilleri</h3>
                <p className="sectoral-feature-text">
                  Mimari ekibinizi tanıtan detaylı profil sayfaları. Mimarlarınızın uzmanlık alanları, eğitimleri ve başarıları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-comment-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Müşteri Yorumları</h3>
                <p className="sectoral-feature-text">
                  Tamamlanan projelerden memnun müşteri yorumlarını sergileyen özel bölüm. Güven oluşturan sosyal kanıtlar.
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

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Blog ve İçerik Yönetimi</h3>
                <p className="sectoral-feature-text">
                  Mimari trendler, tasarım yaklaşımları ve sürdürülebilir mimari hakkında bilgilendirici içerikler. SEO dostu blog sayfaları.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">İletişim Sistemi</h3>
                <p className="sectoral-feature-text">
                  Potansiyel müşterilerin proje taleplerini iletebileceği gelişmiş iletişim formları. Otomatik e-posta bildirimleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-benefits">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Profesyonel Web Sitesinin Mimarlık Firmanıza Faydaları</h2>
            <p className="sectoral-section-subtitle">
              Doğru tasarlanmış bir web sitesi, mimarlık firmanıza nasıl değer katar?
            </p>
          </div>

          <div className="sectoral-benefits-content">
            <div className="architect-benefits-mockup">
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
                      <div className="benefits-mockup-item"></div>
                      <div className="benefits-mockup-item"></div>
                      <div className="benefits-mockup-item"></div>
                    </div>
                  </div>
                  <div className="benefits-mockup-info">
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
                  <h3>Marka İtibarını Güçlendirir</h3>
                  <p>Profesyonel bir web sitesi, firmanızın marka değerini artırır ve mimari vizyonunuzu doğru şekilde yansıtır.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Portföy Sergileme İmkanı</h3>
                  <p>Tamamladığınız projeleri etkileyici bir şekilde sergileyerek potansiyel müşterileri ikna edebilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Yeni Müşteri Kazanımı</h3>
                  <p>SEO odaklı içeriklerle arama motorlarında üst sıralarda yer alarak yeni müşterilere ulaşabilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>İş Süreçlerini Kolaylaştırır</h3>
                  <p>Online iletişim formları ve proje talep sistemleriyle müşteri kazanım süreçlerinizi otomatikleştirebilirsiniz.</p>
                </div>
              </div>

              <div className="sectoral-benefit-item">
                <div className="sectoral-benefit-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="sectoral-benefit-text">
                  <h3>Mimari Yaklaşımınızı Gösterir</h3>
                  <p>Tasarım anlayışınızı ve mimari felsefenizi potansiyel müşterilere aktararak doğru hedef kitleye ulaşabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="architect-pricing">
        <div className="container">
          <div className="architect-section-header">
            <h2 className="architect-section-title">Mimarlık Firması Web Sitesi Paketleri</h2>
            <p className="architect-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun web sitesi çözümleri
            </p>
          </div>

          <div className="architect-pricing-grid">
            <div className="architect-pricing-card">
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Başlangıç Paketi</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">15.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 8 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Proje Portföyü (10 Proje)</li>
                  <li><i className="fas fa-check"></i> SEO Temel Optimizasyon</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google Analytics</li>
                  <li><i className="fas fa-check"></i> Temel İçerik Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> 3D Görselleştirme</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> Çoklu Dil Desteği</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> Blog Yönetimi</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="architect-pricing-card featured">
              <div className="architect-pricing-badge">Popüler</div>
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Premium Paket</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">28.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Portföyü (30 Proje)</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Detaylı Proje Filtreleme</li>
                  <li><i className="fas fa-check"></i> Blog Yönetim Sistemi</li>
                  <li><i className="fas fa-check"></i> 2 Dil Desteği (TR/EN)</li>
                  <li><i className="fas fa-check"></i> Ekip Profil Sayfaları</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Google İş Kaydı Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 2 Yıl Ücretsiz Destek</li>
                  <li className="architect-pricing-disabled"><i className="fas fa-times"></i> 3D Görselleştirme</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="architect-pricing-card">
              <div className="architect-pricing-header">
                <h3 className="architect-pricing-title">Kurumsal Paket</h3>
                <div className="architect-pricing-price">
                  <span className="architect-price-amount">45.000 ₺</span>
                  <span className="architect-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="architect-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> 3D Proje Görselleştirme</li>
                  <li><i className="fas fa-check"></i> Profesyonel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Proje Galerisi</li>
                  <li><i className="fas fa-check"></i> Proje Talep Modülü</li>
                  <li><i className="fas fa-check"></i> 4 Dil Desteği</li>
                  <li><i className="fas fa-check"></i> Müşteri Portali</li>
                  <li><i className="fas fa-check"></i> SMS ve E-posta Bildirim Sistemi</li>
                  <li><i className="fas fa-check"></i> Aylık SEO Raporu</li>
                  <li><i className="fas fa-check"></i> 3 Yıl Ücretsiz Destek</li>
                  <li><i className="fas fa-check"></i> Özel İçerik Oluşturma</li>
                </ul>
              </div>
              <div className="architect-pricing-footer">
                <Link to="/iletisim" className="architect-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="architect-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sık Sorulan Sorular</h2>
            <p className="sectoral-section-subtitle">
              Mimarlık firması web sitesi hakkında merak edilenler
            </p>
          </div>

          <div className="architect-faq-grid">
            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Mimarlık firması web sitesi ne kadar sürede hazır olur?</h3>
              <p className="architect-faq-answer">
                Seçtiğiniz pakete ve özelleştirme seviyesine bağlı olarak, mimarlık firması web sitesi genellikle 3-6 hafta içerisinde tamamlanır. Premium ve kurumsal paketlerde 3D görselleştirme ve özel tasarım özellikleri ekstra süre gerektirebilir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Web siteme kendim proje ekleyebilir miyim?</h3>
              <p className="architect-faq-answer">
                Evet, tüm paketlerimizde kullanımı kolay bir içerik yönetim sistemi bulunmaktadır. Basit bir panel üzerinden yeni projeler, proje görselleri ve detayları ekleyip düzenleyebilirsiniz.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">3D görselleştirme desteği nasıl çalışıyor?</h3>
              <p className="architect-faq-answer">
                Kurumsal paketimizde bulunan 3D görselleştirme özelliği, projelerinizin 3D modellerini ve animasyonlarını web sitenizde sergilemenize olanak tanır. Bu görseller için özel bir medya oynatıcı entegrasyonu yapılır ve kullanıcılar projeleri 360 derece inceleyebilir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Web sitesi SEO çalışması içeriyor mu?</h3>
              <p className="architect-faq-answer">
                Evet, tüm paketlerimizde temel SEO optimizasyonu bulunmaktadır. Premium ve Kurumsal paketlerde ise "mimarlık firması", "iç mimarlık", "mimari tasarım" gibi anahtar kelimeler için detaylı SEO çalışması yapılmaktadır. Kurumsal pakette aylık SEO raporları ve düzenli içerik güncellemeleri de dahildir.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Sitenin bakımı ve güncellemeleri nasıl yapılır?</h3>
              <p className="architect-faq-answer">
                Web sitenizin güvenlik güncellemeleri, yedeklemeleri ve teknik bakımı paket süreniz boyunca tarafımızca düzenli olarak yapılmaktadır. İçerik güncellemeleri için size kullanımı kolay bir panel sunulmaktadır. İhtiyaç duyduğunuzda teknik destek ekibimiz yardımcı olmaktadır.
              </p>
            </div>

            <div className="architect-faq-item">
              <h3 className="architect-faq-question">Yabancı dil desteği nasıl sağlanıyor?</h3>
              <p className="architect-faq-answer">
                Premium pakette Türkçe ve İngilizce, Kurumsal pakette ise toplam 4 dil desteği sunuyoruz. Her dil için ayrı URL yapısı oluşturularak, o dilde arama yapan kullanıcıların sitenizi bulması sağlanıyor. İçerik çevirileri profesyonel çevirmenler tarafından yapılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="architect-cta">
        <div className="container">
          <div className="architect-cta-content">
            <h2 className="architect-cta-title">
              Mimarlık Firmanız İçin <span className="sectoral-highlight">Profesyonel Web Sitesi</span> Oluşturalım
            </h2>
            <p className="architect-cta-text">
              Firmanızın ihtiyaçlarına özel, portföyünüzü en iyi şekilde sergileyen ve yeni müşteriler kazandıran bir web sitesi için hemen iletişime geçin.
            </p>
            <div className="architect-cta-buttons">
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

export default Architect; 