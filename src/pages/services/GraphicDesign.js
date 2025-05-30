import React from 'react';
import { Link } from 'react-router-dom';
import './GraphicDesign.css';

const GraphicDesign = () => {
  return (
    <div className="service-page design-page">
      <section className="design-hero">
        <div className="container">
          <div className="design-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>Grafik Tasarım</span>
          </div>
          <div className="design-hero-content">
            <div className="design-hero-text">
              <h1 className="service-hero-title">
                Profesyonel <span className="service-highlight">Grafik Tasarım</span> Hizmetleri
              </h1>
              <p className="service-hero-description">
                Markanızı yansıtan, hedef kitlenizi etkileyen ve akılda kalıcı görsel tasarımlar ile işletmenizin imajını güçlendirin.
              </p>
              <div className="service-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Hizmetlerimiz</a>
              </div>
            </div>
            <div className="design-hero-visual">
              <div className="design-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-design">
                    <div className="design-artboard">
                      <div className="design-shape circle"></div>
                      <div className="design-shape square"></div>
                      <div className="design-shape triangle"></div>
                    </div>
                    <div className="design-tools">
                      <div className="design-tool"><i className="fas fa-crop"></i></div>
                      <div className="design-tool"><i className="fas fa-palette"></i></div>
                      <div className="design-tool"><i className="fas fa-object-group"></i></div>
                      <div className="design-tool"><i className="fas fa-pen-nib"></i></div>
                    </div>
                  </div>
                  <div className="mockup-colors">
                    <div className="colors-title">Renk Paleti</div>
                    <div className="colors-palette">
                      <div className="color-swatch"></div>
                      <div className="color-swatch"></div>
                      <div className="color-swatch"></div>
                      <div className="color-swatch"></div>
                      <div className="color-swatch"></div>
                    </div>
                    <div className="colors-typography">
                      <div className="font-sample heading">Montserrat</div>
                      <div className="font-sample body">Open Sans - Lorem ipsum dolor sit amet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-overview">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Neden Profesyonel Grafik Tasarım?</h2>
            <p className="service-section-subtitle">
              Görsel iletişim, markanızın kimliğini ve mesajını hedef kitlenize iletmenin en etkili yoludur.
            </p>
          </div>

          <div className="design-overview-grid">
            <div className="design-overview-card">
              <div className="design-card-icon">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h3 className="design-card-title">Marka Kimliği</h3>
              <p className="design-card-text">
                Güçlü bir görsel kimlik ile rakiplerinizden ayrışın ve müşterilerinizin aklında kalın.
              </p>
            </div>

            <div className="design-overview-card">
              <div className="design-card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="design-card-title">Hedef Kitle Bağlantısı</h3>
              <p className="design-card-text">
                Doğru görsel dil ile hedef kitlenizle duygusal bağ kurun ve mesajınızı etkili bir şekilde iletin.
              </p>
            </div>

            <div className="design-overview-card">
              <div className="design-card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="design-card-title">Dönüşüm Artışı</h3>
              <p className="design-card-text">
                Profesyonel tasarımlar ile müşteri güvenini artırın, daha fazla satış ve dönüşüm elde edin.
              </p>
            </div>

            <div className="design-overview-card">
              <div className="design-card-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="design-card-title">Profesyonel İmaj</h3>
              <p className="design-card-text">
                Kaliteli görsel tasarımlar ile işletmenizin profesyonelliğini ve uzmanlığını yansıtın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="design-services">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Grafik Tasarım Hizmetlerimiz</h2>
            <p className="service-section-subtitle">
              İşletmenizin her türlü görsel ihtiyacı için profesyonel tasarım çözümleri
            </p>
          </div>

          <div className="design-services-grid">
            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-id-card"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Kurumsal Kimlik Tasarımı</h3>
                <p className="design-service-text">
                  Logo, kartvizit, antetli kağıt, zarf, dosya ve diğer kurumsal kimlik unsurları ile markanızın tutarlı bir görsel dil oluşturmasını sağlayın.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Broşür ve Katalog Tasarımı</h3>
                <p className="design-service-text">
                  Ürün ve hizmetlerinizi etkili bir şekilde tanıtan, marka kimliğinizi yansıtan profesyonel broşür, katalog ve el ilanları.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-ad"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Reklam ve Banner Tasarımı</h3>
                <p className="design-service-text">
                  Dijital ve basılı medya için dikkat çekici, mesajınızı ileten ve dönüşüm yaratan reklam, banner ve afiş tasarımları.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-box"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Ambalaj Tasarımı</h3>
                <p className="design-service-text">
                  Ürünlerinizi raflarda öne çıkaran, marka değerinizi artıran ve tüketiciyle duygusal bağ kuran ambalaj ve etiket tasarımları.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Web Sitesi Grafikleri</h3>
                <p className="design-service-text">
                  Web siteniz için slider, banner, ikon, düğme ve diğer görsel elementlerin tasarımı ile kullanıcı deneyimini iyileştirin.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Sosyal Medya Görselleri</h3>
                <p className="design-service-text">
                  Her platforma özel, etkileşim yaratan ve marka tutarlılığınızı koruyan profil, kapak ve içerik paylaşım görselleri.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">İnfografik Tasarımı</h3>
                <p className="design-service-text">
                  Karmaşık bilgileri anlaşılır ve çekici bir şekilde sunan, içerik pazarlamanızı destekleyen özgün infografikler.
                </p>
              </div>
            </div>

            <div className="design-service-card">
              <div className="design-service-icon">
                <i className="fas fa-chalkboard"></i>
              </div>
              <div className="design-service-content">
                <h3 className="design-service-title">Sunum ve Rapor Tasarımı</h3>
                <p className="design-service-text">
                  Profesyonel iş sunumları, yıllık raporlar ve kurumsal dokümanlar için etkileyici ve bilgilendirici tasarımlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-process">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Tasarım Sürecimiz</h2>
            <p className="service-section-subtitle">
              Etkili ve özgün tasarımlar oluşturmak için izlediğimiz adımlar
            </p>
          </div>

          <div className="design-process-steps">
            <div className="design-process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Keşif ve Bilgi Toplama</h3>
                <p className="process-step-text">Markanızı, hedef kitlenizi, rakiplerinizi ve projenin amaçlarını derinlemesine analiz ederek başlıyoruz.</p>
              </div>
            </div>

            <div className="design-process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Konsept Geliştirme</h3>
                <p className="process-step-text">Toplanan bilgiler doğrultusunda fikirler üretip, hedeflerinize en uygun konseptleri oluşturuyoruz.</p>
              </div>
            </div>

            <div className="design-process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Taslak Tasarım</h3>
                <p className="process-step-text">Onaylanan konsept doğrultusunda ilk tasarım taslaklarını hazırlıyor ve size sunuyoruz.</p>
              </div>
            </div>

            <div className="design-process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Revizyon ve İyileştirme</h3>
                <p className="process-step-text">Geri bildirimleriniz doğrultusunda tasarımları düzenliyor ve mükemmelleştiriyoruz.</p>
              </div>
            </div>

            <div className="design-process-step">
              <div className="process-step-number">5</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Finalize ve Teslim</h3>
                <p className="process-step-text">Son onayınızın ardından tasarımları tüm gerekli formatlar için hazırlayıp size teslim ediyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="design-pricing">
        <div className="container">
          <div className="design-section-header">
            <h2 className="design-section-title">Grafik Tasarım Paketlerimiz</h2>
            <p className="design-section-subtitle">
              İşletmenizin ihtiyaçlarına ve bütçenize göre özelleştirilebilen çözümler
            </p>
          </div>

          <div className="design-pricing-grid">
            <div className="design-pricing-card">
              <div className="design-pricing-header">
                <h3 className="design-pricing-title">Başlangıç Paketi</h3>
                <div className="design-pricing-price">
                  <span className="design-price-amount">2.500 ₺</span>
                  <span className="design-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="design-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Logo Tasarımı</li>
                  <li><i className="fas fa-check"></i> Kartvizit Tasarımı</li>
                  <li><i className="fas fa-check"></i> Antetli Kağıt</li>
                  <li><i className="fas fa-check"></i> E-posta İmzası</li>
                  <li><i className="fas fa-check"></i> 2 Revizyon Hakkı</li>
                  <li className="design-pricing-disabled"><i className="fas fa-times"></i> Sosyal Medya Görselleri</li>
                  <li className="design-pricing-disabled"><i className="fas fa-times"></i> Broşür Tasarımı</li>
                  <li className="design-pricing-disabled"><i className="fas fa-times"></i> Marka Kılavuzu</li>
                </ul>
              </div>
              <div className="design-pricing-footer">
                <Link to="/iletisim" className="design-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="design-pricing-card featured">
              <div className="design-pricing-badge">Popüler</div>
              <div className="design-pricing-header">
                <h3 className="design-pricing-title">Kurumsal Paket</h3>
                <div className="design-pricing-price">
                  <span className="design-price-amount">5.500 ₺</span>
                  <span className="design-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="design-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Logo Tasarımı</li>
                  <li><i className="fas fa-check"></i> Tam Kurumsal Kimlik Seti</li>
                  <li><i className="fas fa-check"></i> Sosyal Medya Profil Görselleri</li>
                  <li><i className="fas fa-check"></i> 2 Sayfalık Broşür</li>
                  <li><i className="fas fa-check"></i> Basit Marka Kılavuzu</li>
                  <li><i className="fas fa-check"></i> 3 Revizyon Hakkı</li>
                  <li><i className="fas fa-check"></i> Tüm Kaynak Dosyalar</li>
                  <li className="design-pricing-disabled"><i className="fas fa-times"></i> Ambalaj Tasarımı</li>
                </ul>
              </div>
              <div className="design-pricing-footer">
                <Link to="/iletisim" className="design-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="design-pricing-card">
              <div className="design-pricing-header">
                <h3 className="design-pricing-title">Premium Paket</h3>
                <div className="design-pricing-price">
                  <span className="design-price-amount">12.000 ₺</span>
                  <span className="design-price-period">/ Başlangıç</span>
                </div>
              </div>
              <div className="design-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Logo Tasarımı</li>
                  <li><i className="fas fa-check"></i> Tam Kurumsal Kimlik Seti</li>
                  <li><i className="fas fa-check"></i> Kapsamlı Sosyal Medya Paketi</li>
                  <li><i className="fas fa-check"></i> Çok Sayfalı Katalog/Broşür</li>
                  <li><i className="fas fa-check"></i> Detaylı Marka Kılavuzu</li>
                  <li><i className="fas fa-check"></i> Ambalaj/Etiket Tasarımı</li>
                  <li><i className="fas fa-check"></i> Sınırsız Revizyon</li>
                  <li><i className="fas fa-check"></i> Öncelikli Destek</li>
                </ul>
              </div>
              <div className="design-pricing-footer">
                <Link to="/iletisim" className="design-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-faq">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Sık Sorulan Sorular</h2>
            <p className="service-section-subtitle">
              Grafik tasarım hizmetlerimiz hakkında en çok merak edilenler
            </p>
          </div>

          <div className="design-faq-grid">
            <div className="design-faq-item">
              <h3 className="design-faq-question">Grafik tasarım süreciniz ne kadar sürer?</h3>
              <p className="design-faq-answer">
                Tasarım süresi, projenin kapsamına ve karmaşıklığına bağlı olarak değişir. Logo tasarımı genellikle 1-2 hafta, tam kurumsal kimlik 3-4 hafta, katalog veya broşür projesi ise 2-3 hafta sürebilir. Proje başlangıcında size özel bir zaman çizelgesi sunuyor ve süreç boyunca bilgilendirme yapıyoruz.
              </p>
            </div>

            <div className="design-faq-item">
              <h3 className="design-faq-question">Tasarımlarımın telif hakları kime ait olacak?</h3>
              <p className="design-faq-answer">
                Ödeme tamamlandıktan sonra, sizin için tasarladığımız tüm görsel içeriklerin telif hakları size aittir. İsterseniz portföyümüzde referans olarak göstermek için izin isteyebiliriz, ancak bu tamamen sizin onayınıza bağlıdır. Sözleşmemizde tüm telif hakkı detayları açıkça belirtilmektedir.
              </p>
            </div>

            <div className="design-faq-item">
              <h3 className="design-faq-question">Kaç revizyon hakkım var?</h3>
              <p className="design-faq-answer">
                Revizyon hakları seçtiğiniz pakete göre değişmektedir. Başlangıç paketimizde 2, Kurumsal paketimizde 3 revizyon hakkı sunuyoruz. Premium paketimizde ise sınırsız revizyon imkanı bulunmaktadır. Ek revizyonlar için revizyon başına makul bir ücret talep edilebilir.
              </p>
            </div>

            <div className="design-faq-item">
              <h3 className="design-faq-question">Hangi dosya formatlarında tasarımları teslim ediyorsunuz?</h3>
              <p className="design-faq-answer">
                Tasarımlarınızı hem baskı için (CMYK, 300 DPI, PDF, AI, EPS) hem de dijital kullanım için (RGB, PNG, JPG, SVG) uygun formatlarda teslim ediyoruz. Ayrıca kaynak dosyaları (AI, PSD, INDD vb.) da alabilirsiniz, böylece ileride gerekirse düzenlemeler yapabilirsiniz veya başka tasarımcılarla çalışabilirsiniz.
              </p>
            </div>

            <div className="design-faq-item">
              <h3 className="design-faq-question">Markamız için özel yazı tipi tasarlıyor musunuz?</h3>
              <p className="design-faq-answer">
                Evet, markanız için özel yazı tipi (font) tasarımı hizmeti sunuyoruz. Bu hizmet standart paketlerimize dahil değildir ve ayrı bir proje olarak değerlendirilir. Özel font tasarımı, markanızın benzersiz kimliğini güçlendirir ve tüm iletişim materyallerinizde tutarlı bir görsel dil oluşturmanızı sağlar.
              </p>
            </div>

            <div className="design-faq-item">
              <h3 className="design-faq-question">Farklı lokasyonlardayız, bu bir sorun yaratır mı?</h3>
              <p className="design-faq-answer">
                Kesinlikle sorun yaratmaz. Uzaktan çalışma konusunda deneyimliyiz ve dünyanın farklı yerlerindeki müşterilerimizle başarılı projeler yürütüyoruz. Zoom, Google Meet veya tercih ettiğiniz platform üzerinden görüntülü toplantılar yapabilir, e-posta ve mesajlaşma araçları ile hızlı iletişim kurabiliriz. Çevrimiçi proje yönetim araçlarımız sayesinde süreç sorunsuz ilerler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="design-cta">
        <div className="container">
          <div className="design-cta-content">
            <h2 className="design-cta-title">
              Markanızı <span className="service-highlight">Görsel Olarak Güçlendirin</span>
            </h2>
            <p className="design-cta-text">
              Profesyonel grafik tasarım hizmetlerimizle markanızı öne çıkarın, hedef kitlenizi etkileyin ve işletmenizi büyütün.
            </p>
            <div className="design-cta-buttons">
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

export default GraphicDesign;