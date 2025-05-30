import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="service-page social-page">
      <section className="social-hero">
        <div className="container">
          <div className="social-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>Sosyal Medya Yönetimi</span>
          </div>
          <div className="social-hero-content">
            <div className="social-hero-text">
              <h1 className="service-hero-title">
                Markanız İçin <span className="service-highlight">Etkili</span> Sosyal Medya Yönetimi
              </h1>
              <p className="service-hero-description">
                İşletmeniz için profesyonel sosyal medya yönetimi, içerik üretimi, kampanya yönetimi ve sosyal medya reklamları ile online varlığınızı güçlendirin.
              </p>
              <div className="service-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Hizmetlerimiz</a>
              </div>
            </div>
            <div className="social-hero-visual">
              <div className="social-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-platform instagram">
                    <div className="platform-header">
                      <div className="platform-icon"></div>
                      <div className="platform-name">Instagram</div>
                    </div>
                    <div className="platform-stats">
                      <div className="stat">
                        <div className="stat-number">1.2K</div>
                        <div className="stat-label">Takipçi</div>
                      </div>
                      <div className="stat">
                        <div className="stat-number">22%</div>
                        <div className="stat-label">Etkileşim</div>
                      </div>
                    </div>
                    <div className="platform-posts">
                      <div className="post"></div>
                      <div className="post"></div>
                      <div className="post"></div>
                    </div>
                  </div>
                  <div className="mockup-platform facebook">
                    <div className="platform-header">
                      <div className="platform-icon"></div>
                      <div className="platform-name">Facebook</div>
                    </div>
                    <div className="platform-stats">
                      <div className="stat">
                        <div className="stat-number">3.5K</div>
                        <div className="stat-label">Beğeni</div>
                      </div>
                      <div className="stat">
                        <div className="stat-number">15%</div>
                        <div className="stat-label">Etkileşim</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-overview">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Neden Sosyal Medya Yönetimi?</h2>
            <p className="service-section-subtitle">
              Sosyal medya, müşterilerinizle etkileşime geçebileceğiniz ve markanızı büyütebileceğiniz en etkili platformlardır.
            </p>
          </div>

          <div className="social-overview-grid">
            <div className="social-overview-card">
              <div className="social-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="social-card-title">Görünürlük Artışı</h3>
              <p className="social-card-text">
                Düzenli ve etkili içeriklerle markanızın sosyal medyada görünürlüğünü artırın, potansiyel müşterilere ulaşın.
              </p>
            </div>

            <div className="social-overview-card">
              <div className="social-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="social-card-title">Topluluk Oluşturma</h3>
              <p className="social-card-text">
                Markanız etrafında sadık bir takipçi kitlesi oluşturun, etkileşimleri artırın ve marka savunucuları kazanın.
              </p>
            </div>

            <div className="social-overview-card">
              <div className="social-card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="social-card-title">Hedefli Reklamlar</h3>
              <p className="social-card-text">
                Doğru hedef kitleye, doğru zamanda, doğru mesajla ulaşarak reklam harcamalarınızdan maksimum verim alın.
              </p>
            </div>

            <div className="social-overview-card">
              <div className="social-card-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3 className="social-card-title">Müşteri İlişkileri</h3>
              <p className="social-card-text">
                Müşterilerinizle doğrudan iletişim kurarak geri bildirimleri alın, sorunları çözün ve marka sadakatini artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="social-services">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Sosyal Medya Hizmetlerimiz</h2>
            <p className="service-section-subtitle">
              İşletmenizin ihtiyaçlarına özel, sonuç odaklı sosyal medya çözümleri
            </p>
          </div>

          <div className="social-services-grid">
            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Strateji Geliştirme</h3>
                <p className="social-service-text">
                  Markanızın kimliğine ve hedeflerine uygun, rakip analizi ve pazar araştırmasına dayalı kapsamlı sosyal medya stratejisi oluşturma.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">İçerik Üretimi</h3>
                <p className="social-service-text">
                  Markanızın sesini yansıtan, hedef kitlenizi etkileyen ve etkileşim yaratan özgün görsel ve metin içeriklerinin hazırlanması.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">İçerik Takvimi</h3>
                <p className="social-service-text">
                  Aylık içerik planlaması, özel gün ve kampanyaların takibi, düzenli paylaşımlar ile sürdürülebilir sosyal medya varlığı.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-ad"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Reklam Yönetimi</h3>
                <p className="social-service-text">
                  Facebook, Instagram, LinkedIn, Twitter ve TikTok reklamlarının oluşturulması, bütçe yönetimi ve performans takibi.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-hashtag"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Influencer İşbirlikleri</h3>
                <p className="social-service-text">
                  Markanıza uygun influencer'ların belirlenmesi, işbirliği planlaması, kampanya yönetimi ve sonuç raporlaması.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Topluluk Yönetimi</h3>
                <p className="social-service-text">
                  Yorum ve mesajların yanıtlanması, müşteri sorunlarının çözümü, takipçi etkileşimlerinin artırılması ve kriz yönetimi.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Analiz ve Raporlama</h3>
                <p className="social-service-text">
                  Aylık performans analizi, rakip karşılaştırması, gelişim grafikleri ve stratejik öneriler içeren detaylı raporlar.
                </p>
              </div>
            </div>

            <div className="social-service-card">
              <div className="social-service-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="social-service-content">
                <h3 className="social-service-title">Görsel Prodüksiyon</h3>
                <p className="social-service-text">
                  Sosyal medya için özel fotoğraf çekimleri, video prodüksiyon, animasyon ve grafik tasarım hizmetleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-platforms">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Yönettiğimiz Platformlar</h2>
            <p className="service-section-subtitle">
              Tüm popüler sosyal medya platformlarında profesyonel yönetim hizmeti
            </p>
          </div>

          <div className="social-platforms-grid">
            <div className="social-platform-item">
              <div className="platform-icon instagram-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <h3 className="platform-name">Instagram</h3>
              <p className="platform-desc">Görsel içeriklerle markanızı parlatın, hikayeler ve reels ile etkileşim yaratın.</p>
            </div>

            <div className="social-platform-item">
              <div className="platform-icon facebook-icon">
                <i className="fab fa-facebook-f"></i>
              </div>
              <h3 className="platform-name">Facebook</h3>
              <p className="platform-desc">Geniş kitlelerle buluşun, topluluk oluşturun ve detaylı hedefleme yapın.</p>
            </div>

            <div className="social-platform-item">
              <div className="platform-icon twitter-icon">
                <i className="fab fa-twitter"></i>
              </div>
              <h3 className="platform-name">Twitter</h3>
              <p className="platform-desc">Güncel konularda yer alın, hızlı müşteri desteği sağlayın, anlık etkileşimler kurun.</p>
            </div>

            <div className="social-platform-item">
              <div className="platform-icon linkedin-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <h3 className="platform-name">LinkedIn</h3>
              <p className="platform-desc">Profesyonel ağınızı genişletin, sektörel uzmanlığınızı gösterin, B2B bağlantılar kurun.</p>
            </div>

            <div className="social-platform-item">
              <div className="platform-icon youtube-icon">
                <i className="fab fa-youtube"></i>
              </div>
              <h3 className="platform-name">YouTube</h3>
              <p className="platform-desc">Video içeriklerle markanızı anlatın, eğitici ve ilgi çekici içerikler oluşturun.</p>
            </div>

            <div className="social-platform-item">
              <div className="platform-icon tiktok-icon">
                <i className="fab fa-tiktok"></i>
              </div>
              <h3 className="platform-name">TikTok</h3>
              <p className="platform-desc">Genç kitlelerle buluşun, trend içerikler üreterek viral olma potansiyelini yakalayın.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="social-pricing">
        <div className="container">
          <div className="social-section-header">
            <h2 className="social-section-title">Sosyal Medya Yönetimi Paketleri</h2>
            <p className="social-section-subtitle">
              İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özelleştirilebilen paketler
            </p>
          </div>

          <div className="social-pricing-grid">
            <div className="social-pricing-card">
              <div className="social-pricing-header">
                <h3 className="social-pricing-title">Başlangıç Paketi</h3>
                <div className="social-pricing-price">
                  <span className="social-price-amount">2.900 ₺</span>
                  <span className="social-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="social-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 2 Sosyal Medya Platformu</li>
                  <li><i className="fas fa-check"></i> Haftalık 6 İçerik</li>
                  <li><i className="fas fa-check"></i> Aylık İçerik Planı</li>
                  <li><i className="fas fa-check"></i> Yorumlara Yanıt</li>
                  <li><i className="fas fa-check"></i> Temel Tasarım Şablonları</li>
                  <li><i className="fas fa-check"></i> Aylık Performans Raporu</li>
                  <li className="social-pricing-disabled"><i className="fas fa-times"></i> Reklam Yönetimi</li>
                  <li className="social-pricing-disabled"><i className="fas fa-times"></i> Influencer İşbirlikleri</li>
                  <li className="social-pricing-disabled"><i className="fas fa-times"></i> Özel İçerik Çekimi</li>
                </ul>
              </div>
              <div className="social-pricing-footer">
                <Link to="/iletisim" className="social-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="social-pricing-card featured">
              <div className="social-pricing-badge">Popüler</div>
              <div className="social-pricing-header">
                <h3 className="social-pricing-title">İşletme Paketi</h3>
                <div className="social-pricing-price">
                  <span className="social-price-amount">4.900 ₺</span>
                  <span className="social-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="social-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 3 Sosyal Medya Platformu</li>
                  <li><i className="fas fa-check"></i> Haftalık 10 İçerik</li>
                  <li><i className="fas fa-check"></i> Aylık İçerik Planı</li>
                  <li><i className="fas fa-check"></i> 7/24 Topluluk Yönetimi</li>
                  <li><i className="fas fa-check"></i> Özel Tasarım Şablonları</li>
                  <li><i className="fas fa-check"></i> Temel Reklam Yönetimi</li>
                  <li><i className="fas fa-check"></i> Aylık Detaylı Rapor</li>
                  <li><i className="fas fa-check"></i> Rakip Analizi</li>
                  <li className="social-pricing-disabled"><i className="fas fa-times"></i> Özel İçerik Çekimi</li>
                </ul>
              </div>
              <div className="social-pricing-footer">
                <Link to="/iletisim" className="social-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="social-pricing-card">
              <div className="social-pricing-header">
                <h3 className="social-pricing-title">Kurumsal Paket</h3>
                <div className="social-pricing-price">
                  <span className="social-price-amount">8.900 ₺</span>
                  <span className="social-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="social-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 5+ Sosyal Medya Platformu</li>
                  <li><i className="fas fa-check"></i> Haftalık 15+ İçerik</li>
                  <li><i className="fas fa-check"></i> Kapsamlı Strateji Planı</li>
                  <li><i className="fas fa-check"></i> 7/24 Topluluk Yönetimi</li>
                  <li><i className="fas fa-check"></i> Premium Tasarımlar</li>
                  <li><i className="fas fa-check"></i> İleri Düzey Reklam Yönetimi</li>
                  <li><i className="fas fa-check"></i> Aylık Profesyonel İçerik Çekimi</li>
                  <li><i className="fas fa-check"></i> Influencer İşbirlikleri</li>
                  <li><i className="fas fa-check"></i> Kriz Yönetimi Desteği</li>
                </ul>
              </div>
              <div className="social-pricing-footer">
                <Link to="/iletisim" className="social-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-faq">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Sık Sorulan Sorular</h2>
            <p className="service-section-subtitle">
              Sosyal medya yönetimi hakkında en çok merak edilenler
            </p>
          </div>

          <div className="social-faq-grid">
            <div className="social-faq-item">
              <h3 className="social-faq-question">Sosyal medya yönetimi hizmetiniz tam olarak neleri kapsar?</h3>
              <p className="social-faq-answer">
                Sosyal medya yönetimi hizmetimiz; strateji geliştirme, içerik üretimi, paylaşım takvimi hazırlama, topluluk yönetimi (yorum ve mesajlara yanıt verme), reklam yönetimi, performans analizi ve raporlama gibi temel hizmetleri kapsar. Seçtiğiniz pakete göre hizmet kapsamı genişleyebilir.
              </p>
            </div>

            <div className="social-faq-item">
              <h3 className="social-faq-question">Hangi sosyal medya platformlarında hizmet veriyorsunuz?</h3>
              <p className="social-faq-answer">
                Başta Instagram, Facebook, Twitter, LinkedIn, YouTube ve TikTok olmak üzere tüm popüler sosyal medya platformlarında hizmet veriyoruz. İşletmenizin hedef kitlesine ve pazarlama stratejisine en uygun platformları birlikte belirleyerek yönetim planı oluşturuyoruz.
              </p>
            </div>

            <div className="social-faq-item">
              <h3 className="social-faq-question">İçerikleri kim hazırlıyor ve onay süreci nasıl işliyor?</h3>
              <p className="social-faq-answer">
                İçerikler, alanında uzman içerik üreticileri, grafik tasarımcılar ve sosyal medya stratejistleri tarafından hazırlanır. Her ay için önceden içerik planı oluşturulur ve onayınıza sunulur. Geri bildirimleriniz doğrultusunda gerekli düzenlemeler yapılarak içerikler son haline getirilir. İçerikler onayınız olmadan paylaşılmaz.
              </p>
            </div>

            <div className="social-faq-item">
              <h3 className="social-faq-question">Sosyal medya reklamları için ayrıca bütçe ayırmamız gerekir mi?</h3>
              <p className="social-faq-answer">
                Evet, sosyal medya reklamları için ayrı bir reklam bütçesi belirlemeniz gerekir. Paketlerimiz reklam yönetimi hizmetini içerir, ancak platformlara ödenecek reklam bütçesi bu ücretlere dahil değildir. Reklam bütçenizi hedeflerinize ve pazarlama stratejinize göre birlikte belirleyebiliriz.
              </p>
            </div>

            <div className="social-faq-item">
              <h3 className="social-faq-question">Sosyal medya yönetiminin sonuçlarını nasıl ölçüyorsunuz?</h3>
              <p className="social-faq-answer">
                Sosyal medya performansını takipçi artışı, etkileşim oranları, erişim, site trafiği, satış dönüşümleri gibi çeşitli metriklerle ölçüyoruz. Her ay detaylı performans raporu sunarak, stratejinin etkinliğini değerlendiriyor ve gerekli optimizasyonları öneriyoruz. Google Analytics entegrasyonu ile web sitenize olan etkiyi de ölçümleyebiliyoruz.
              </p>
            </div>

            <div className="social-faq-item">
              <h3 className="social-faq-question">Sosyal medya yönetimi için sizinle ne tür bilgiler paylaşmamız gerekiyor?</h3>
              <p className="social-faq-answer">
                Etkili bir sosyal medya yönetimi için marka kimliğiniz, ürün/hizmet bilgileriniz, hedef kitleniz, pazarlama hedefleriniz, marka sesiniz, önceki pazarlama çalışmalarınız ve rakipleriniz hakkında bilgilere ihtiyaç duyarız. Ayrıca sosyal medya hesaplarınıza yönetici erişimi sağlamanız gerekir. Tüm bilgileriniz gizlilik sözleşmesi kapsamında korunur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-cta">
        <div className="container">
          <div className="social-cta-content">
            <h2 className="social-cta-title">
              Markanızı Sosyal Medyada <span className="service-highlight">Öne Çıkaralım</span>
            </h2>
            <p className="social-cta-text">
              Profesyonel sosyal medya yönetimi ile takipçi sayınızı artırın, etkileşimlerinizi yükseltin ve satışlarınızı büyütün.
            </p>
            <div className="social-cta-buttons">
              <Link to="/iletisim" className="primary-button">Ücretsiz Danışmanlık</Link>
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

export default SocialMedia; 