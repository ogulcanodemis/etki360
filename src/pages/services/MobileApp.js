import React from 'react';
import { Link } from 'react-router-dom';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <div className="service-page mobile-page">
      <section className="mobile-hero">
        <div className="container">
          <div className="mobile-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>Mobil Uygulama</span>
          </div>
          <div className="mobile-hero-content">
            <div className="mobile-hero-text">
              <h1 className="service-hero-title">
                Profesyonel <span className="service-highlight">Mobil Uygulama</span> Geliştirme
              </h1>
              <p className="service-hero-description">
                İşletmeniz için kullanıcı dostu, yüksek performanslı ve özelleştirilebilir mobil uygulamalar geliştiriyoruz. Modern teknolojilerle müşterilerinize en iyi deneyimi sunun.
              </p>
              <div className="service-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Hizmetlerimiz</a>
              </div>
            </div>
            <div className="mobile-hero-visual">
              <div className="mobile-mockup">
                <div className="mobile-device">
                  <div className="mobile-device-notch"></div>
                  <div className="mobile-device-screen">
                    <div className="mobile-app-screen">
                      <div className="mobile-app-header">
                        <div className="mobile-app-title">Etki360 App</div>
                        <div className="mobile-app-menu"></div>
                      </div>
                      <div className="mobile-app-content">
                        <div className="mobile-app-card">
                          <div className="mobile-app-card-title">Özel Çözümler</div>
                          <div className="mobile-app-card-text"></div>
                          <div className="mobile-app-card-text short"></div>
                        </div>
                        <div className="mobile-app-card">
                          <div className="mobile-app-card-title">Profesyonel Tasarım</div>
                          <div className="mobile-app-card-text"></div>
                          <div className="mobile-app-card-text short"></div>
                        </div>
                        <div className="mobile-app-card">
                          <div className="mobile-app-card-title">Yüksek Performans</div>
                          <div className="mobile-app-card-text"></div>
                          <div className="mobile-app-card-text short"></div>
                        </div>
                      </div>
                      <div className="mobile-app-bottom-nav">
                        <div className="mobile-app-nav-item"></div>
                        <div className="mobile-app-nav-item"></div>
                        <div className="mobile-app-nav-item"></div>
                        <div className="mobile-app-nav-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-floating-elements">
                  <div className="mobile-floating-element"></div>
                  <div className="mobile-floating-element"></div>
                  <div className="mobile-floating-element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-overview">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Neden Mobil Uygulama?</h2>
            <p className="service-section-subtitle">
              Mobil uygulamalar, işletmenizin müşterilere ulaşmasını, etkileşimi artırmasını ve rekabet avantajı sağlamasını mümkün kılar.
            </p>
          </div>

          <div className="mobile-overview-grid">
            <div className="mobile-overview-card">
              <div className="mobile-card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="mobile-card-title">Müşteri Etkileşimi</h3>
              <p className="mobile-card-text">
                Bildirimler, özel teklifler ve kişiselleştirilmiş içeriklerle müşterilerinizle sürekli etkileşimde kalın.
              </p>
            </div>

            <div className="mobile-overview-card">
              <div className="mobile-card-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="mobile-card-title">Her Zaman Erişilebilirlik</h3>
              <p className="mobile-card-text">
                Kullanıcılarınız, internet bağlantısı olmadan bile uygulamanızı kullanarak hizmetlerinize erişebilir.
              </p>
            </div>

            <div className="mobile-overview-card">
              <div className="mobile-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="mobile-card-title">Marka Değeri</h3>
              <p className="mobile-card-text">
                Profesyonel bir mobil uygulama, markanızın güvenilirliğini ve pazar değerini artırır.
              </p>
            </div>

            <div className="mobile-overview-card">
              <div className="mobile-card-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="mobile-card-title">Veri Analizi</h3>
              <p className="mobile-card-text">
                Kullanıcı davranışlarını analiz ederek daha doğru kararlar alın ve stratejilerinizi optimize edin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mobile-services">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Mobil Uygulama Hizmetlerimiz</h2>
            <p className="service-section-subtitle">
              İhtiyaçlarınıza uygun, kullanıcı odaklı mobil uygulama çözümleri
            </p>
          </div>

          <div className="mobile-services-grid">
            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fab fa-apple"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">iOS Uygulama Geliştirme</h3>
                <p className="mobile-service-text">
                  iPhone ve iPad cihazları için App Store standartlarına uygun, yüksek performanslı ve kullanıcı dostu iOS uygulamaları geliştiriyoruz.
                </p>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fab fa-android"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">Android Uygulama Geliştirme</h3>
                <p className="mobile-service-text">
                  Android işletim sistemine sahip cihazlar için Google Play Store standartlarına uygun, hızlı ve stabil çalışan uygulamalar sunuyoruz.
                </p>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fas fa-sync"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">Hibrit Uygulama Geliştirme</h3>
                <p className="mobile-service-text">
                  React Native, Flutter gibi teknolojilerle hem iOS hem de Android platformlarında çalışan, maliyet ve zaman avantajı sunan hibrit uygulamalar geliştiriyoruz.
                </p>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">E-Ticaret Uygulamaları</h3>
                <p className="mobile-service-text">
                  Ürünlerinizi mobil platformda satmanızı sağlayan, ödeme sistemleri entegrasyonlu, kullanıcı dostu e-ticaret uygulamaları geliştiriyoruz.
                </p>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">Kurumsal Uygulamalar</h3>
                <p className="mobile-service-text">
                  İşletmenizin iç süreçlerini yönetebileceği, verimliliği artıran, güvenli ve özelleştirilebilir kurumsal mobil uygulamalar sunuyoruz.
                </p>
              </div>
            </div>

            <div className="mobile-service-card">
              <div className="mobile-service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="mobile-service-content">
                <h3 className="mobile-service-title">Bakım ve Güncelleme</h3>
                <p className="mobile-service-text">
                  Mevcut uygulamanızın performansını iyileştiren, yeni özellikler ekleyen, güvenlik güncellemeleri sağlayan bakım ve güncelleme hizmetleri sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-tech">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Kullandığımız Teknolojiler</h2>
            <p className="service-section-subtitle">
              En güncel teknolojiler ve framework'ler ile modern mobil uygulamalar geliştiriyoruz
            </p>
          </div>

          <div className="mobile-tech-grid">
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fab fa-react"></i>
              </div>
              <div className="mobile-tech-name">React Native</div>
            </div>
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fab fa-swift"></i>
              </div>
              <div className="mobile-tech-name">Swift</div>
            </div>
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fab fa-android"></i>
              </div>
              <div className="mobile-tech-name">Kotlin</div>
            </div>
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="mobile-tech-name">Flutter</div>
            </div>
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="mobile-tech-name">Firebase</div>
            </div>
            <div className="mobile-tech-item">
              <div className="mobile-tech-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="mobile-tech-name">SQLite</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-process">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Uygulama Geliştirme Sürecimiz</h2>
            <p className="service-section-subtitle">
              Mobil uygulama projelerinizi hayata geçirirken izlediğimiz metodoloji
            </p>
          </div>

          <div className="mobile-process-container">
            <div className="mobile-process-line"></div>
            <div className="mobile-process-steps">
              <div className="mobile-process-step">
                <div className="mobile-process-number">1</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">İhtiyaç Analizi</h3>
                  <p className="mobile-process-text">
                    İşletmenizin hedeflerini, kullanıcı beklentilerini ve pazardaki fırsatları analiz ederek projenin kapsamını belirleriz.
                  </p>
                </div>
              </div>

              <div className="mobile-process-step">
                <div className="mobile-process-number">2</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">UX/UI Tasarımı</h3>
                  <p className="mobile-process-text">
                    Kullanıcı deneyimini ön planda tutan, sezgisel ve estetik bir tasarım oluşturarak uygulamanın wireframe ve prototiplerini hazırlarız.
                  </p>
                </div>
              </div>

              <div className="mobile-process-step">
                <div className="mobile-process-number">3</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">Geliştirme</h3>
                  <p className="mobile-process-text">
                    Çevik (Agile) metodoloji kullanarak, uygulamanın temel yapısını oluşturur ve belirlenen özellikleri adım adım geliştiririz.
                  </p>
                </div>
              </div>

              <div className="mobile-process-step">
                <div className="mobile-process-number">4</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">Test</h3>
                  <p className="mobile-process-text">
                    Kapsamlı testlerle uygulamanın performansını, kullanılabilirliğini ve güvenliğini değerlendirerek hataları tespit eder ve düzeltiriz.
                  </p>
                </div>
              </div>

              <div className="mobile-process-step">
                <div className="mobile-process-number">5</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">Yayınlama</h3>
                  <p className="mobile-process-text">
                    Uygulamanızı App Store ve Google Play Store'da yayınlamak için gerekli tüm süreçleri yönetir, onay sürecini takip ederiz.
                  </p>
                </div>
              </div>

              <div className="mobile-process-step">
                <div className="mobile-process-number">6</div>
                <div className="mobile-process-content">
                  <h3 className="mobile-process-title">Bakım ve Güncelleme</h3>
                  <p className="mobile-process-text">
                    Yayınlanan uygulamanızın performansını takip eder, kullanıcı geri bildirimlerine göre güncellemeler ve iyileştirmeler yaparız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mobile-pricing">
        <div className="container">
          <div className="mobile-section-header">
            <h2 className="mobile-section-title">Mobil Uygulama Paketlerimiz</h2>
            <p className="mobile-section-subtitle">
              İşletmenizin ihtiyaçlarına ve bütçenize uygun çözümler
            </p>
          </div>

          <div className="mobile-pricing-grid">
            <div className="mobile-pricing-card">
              <div className="mobile-pricing-header">
                <h3 className="mobile-pricing-title">Başlangıç Paketi</h3>
                <div className="mobile-pricing-price">
                  <span className="mobile-price-amount">18.000 ₺</span>
                  <span className="mobile-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="mobile-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Temel özellikli mobil uygulama</li>
                  <li><i className="fas fa-check"></i> iOS veya Android (tek platform)</li>
                  <li><i className="fas fa-check"></i> 5 Ekrana kadar tasarım</li>
                  <li><i className="fas fa-check"></i> Temel kullanıcı yönetimi</li>
                  <li><i className="fas fa-check"></i> Store yayınlama desteği</li>
                  <li><i className="fas fa-check"></i> 3 Ay bakım desteği</li>
                  <li className="mobile-pricing-disabled"><i className="fas fa-times"></i> API entegrasyonları</li>
                  <li className="mobile-pricing-disabled"><i className="fas fa-times"></i> Özel backend geliştirme</li>
                </ul>
              </div>
              <div className="mobile-pricing-footer">
                <Link to="/iletisim" className="mobile-pricing-button">Teklif Al</Link>
              </div>
            </div>

            <div className="mobile-pricing-card featured">
              <div className="mobile-pricing-badge">En Popüler</div>
              <div className="mobile-pricing-header">
                <h3 className="mobile-pricing-title">Profesyonel Paket</h3>
                <div className="mobile-pricing-price">
                  <span className="mobile-price-amount">35.000 ₺</span>
                  <span className="mobile-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="mobile-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Gelişmiş özellikli mobil uygulama</li>
                  <li><i className="fas fa-check"></i> iOS ve Android (çift platform)</li>
                  <li><i className="fas fa-check"></i> 10 Ekrana kadar tasarım</li>
                  <li><i className="fas fa-check"></i> Gelişmiş kullanıcı yönetimi</li>
                  <li><i className="fas fa-check"></i> 3 API entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Push bildirim sistemi</li>
                  <li><i className="fas fa-check"></i> Store yayınlama desteği</li>
                  <li><i className="fas fa-check"></i> 6 Ay bakım desteği</li>
                </ul>
              </div>
              <div className="mobile-pricing-footer">
                <Link to="/iletisim" className="mobile-pricing-button">Teklif Al</Link>
              </div>
            </div>

            <div className="mobile-pricing-card">
              <div className="mobile-pricing-header">
                <h3 className="mobile-pricing-title">Kurumsal Paket</h3>
                <div className="mobile-pricing-price">
                  <span className="mobile-price-amount">60.000 ₺</span>
                  <span className="mobile-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="mobile-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Tamamen özel mobil uygulama</li>
                  <li><i className="fas fa-check"></i> iOS ve Android (çift platform)</li>
                  <li><i className="fas fa-check"></i> Sınırsız ekran tasarımı</li>
                  <li><i className="fas fa-check"></i> Özel backend geliştirme</li>
                  <li><i className="fas fa-check"></i> Sınırsız API entegrasyonu</li>
                  <li><i className="fas fa-check"></i> İleri analitik ve raporlama</li>
                  <li><i className="fas fa-check"></i> Çoklu dil desteği</li>
                  <li><i className="fas fa-check"></i> 12 Ay bakım ve destek</li>
                </ul>
              </div>
              <div className="mobile-pricing-footer">
                <Link to="/iletisim" className="mobile-pricing-button">Teklif Al</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-faq">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Sık Sorulan Sorular</h2>
            <p className="service-section-subtitle">
              Mobil uygulama geliştirme hizmetlerimiz hakkında en çok merak edilenler
            </p>
          </div>

          <div className="mobile-faq-grid">
            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">Bir mobil uygulama geliştirme süreci ne kadar sürer?</h3>
              <p className="mobile-faq-answer">
                Mobil uygulama geliştirme süresi, projenin kapsamına ve karmaşıklığına bağlı olarak değişir. Basit bir uygulama için 2-3 ay, orta karmaşıklıktaki bir uygulama için 3-6 ay, kapsamlı ve karmaşık bir uygulama için 6-12 ay sürebilir. Proje başlangıcında size özel bir zaman çizelgesi sunuyoruz.
              </p>
            </div>

            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">iOS ve Android için ayrı uygulamalar mı geliştiriyorsunuz?</h3>
              <p className="mobile-faq-answer">
                İhtiyaçlarınıza bağlı olarak hem native (iOS için Swift, Android için Kotlin) hem de cross-platform (React Native, Flutter) teknolojileri kullanarak uygulama geliştirebiliyoruz. Cross-platform çözümler maliyet ve zaman avantajı sağlarken, native çözümler platform özelinde daha iyi performans sunabilir.
              </p>
            </div>

            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">Uygulama geliştirme sürecinde müşteri olarak katılımım ne düzeyde olacak?</h3>
              <p className="mobile-faq-answer">
                Geliştirme sürecinde düzenli toplantılar ve sprint demoları ile sizi bilgilendiriyor ve geri bildirimlerinizi alıyoruz. Her aşamada onayınızı alarak ilerliyoruz. Bu yaklaşım, beklentilerinizi tam olarak karşılayan bir uygulama geliştirmemizi sağlıyor.
              </p>
            </div>

            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">Uygulamam yayınlandıktan sonra destek ve bakım hizmeti sağlıyor musunuz?</h3>
              <p className="mobile-faq-answer">
                Evet, tüm paketlerimizde belirli sürelerle bakım ve destek hizmeti sunuyoruz. Bu süre içinde hata düzeltmeleri, küçük güncellemeler ve teknik destek sağlıyoruz. Bakım süresi sonrasında aylık veya yıllık bakım paketlerimizle desteğimizi sürdürebilirsiniz.
              </p>
            </div>

            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">Mobil uygulamamı App Store ve Google Play'de yayınlamanın maliyeti nedir?</h3>
              <p className="mobile-faq-answer">
                Apple App Store için yıllık 99$ geliştirici hesabı ücreti, Google Play Store için ise bir kerelik 25$ kayıt ücreti bulunmaktadır. Bu ücretler direkt olarak platform sağlayıcılara ödenir ve fiyat tekliflerimize dahil değildir. Ancak uygulama yayınlama sürecini sizin adınıza yönetebiliriz.
              </p>
            </div>

            <div className="mobile-faq-item">
              <h3 className="mobile-faq-question">Mobil uygulamamın kaynak kodlarına sahip olacak mıyım?</h3>
              <p className="mobile-faq-answer">
                Evet, geliştirilen uygulamanın tüm kaynak kodları ve ilgili tasarım dosyaları size teslim edilir. Özel anlaşma olmadığı sürece, uygulama tamamen sizin mülkiyetinizde olur ve istediğiniz gibi kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-cta">
        <div className="container">
          <div className="mobile-cta-content">
            <h2 className="mobile-cta-title">
              İşletmenizi <span className="service-highlight">Mobil Dünyaya</span> Taşıyın
            </h2>
            <p className="mobile-cta-text">
              Profesyonel mobil uygulama geliştirme hizmetlerimizle işletmenizi bir adım öne çıkarın, müşterilerinizle her an her yerde bağlantıda kalın.
            </p>
            <div className="mobile-cta-buttons">
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

export default MobileApp; 