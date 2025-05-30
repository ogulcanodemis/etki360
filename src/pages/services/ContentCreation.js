import React from 'react';
import { Link } from 'react-router-dom';
import './ContentCreation.css';

const ContentCreation = () => {
  return (
    <div className="service-page content-page">
      <section className="content-hero">
        <div className="container">
          <div className="content-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>İçerik Üretimi</span>
          </div>
          <div className="content-hero-content">
            <div className="content-hero-text">
              <h1 className="service-hero-title">
                Etkileyici <span className="service-highlight">İçerik Üretimi</span> Hizmetleri
              </h1>
              <p className="service-hero-description">
                SEO uyumlu, hedef kitlenizi etkileyen ve markanızı öne çıkaran özgün içerikler ile dijital varlığınızı güçlendirin.
              </p>
              <div className="service-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Hizmetlerimiz</a>
              </div>
            </div>
            <div className="content-hero-visual">
              <div className="content-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-document">
                    <div className="document-title">
                      <div className="title-line"></div>
                      <div className="title-line short"></div>
                    </div>
                    <div className="document-content">
                      <div className="content-line"></div>
                      <div className="content-line"></div>
                      <div className="content-line short"></div>
                      <div className="content-line"></div>
                      <div className="content-line medium"></div>
                    </div>
                    <div className="document-image"></div>
                    <div className="document-content">
                      <div className="content-line"></div>
                      <div className="content-line"></div>
                      <div className="content-line short"></div>
                    </div>
                  </div>
                  <div className="mockup-analytics">
                    <div className="analytics-title">İçerik Performansı</div>
                    <div className="analytics-chart">
                      <div className="chart-bar" style={{height: '60%'}}></div>
                      <div className="chart-bar" style={{height: '80%'}}></div>
                      <div className="chart-bar" style={{height: '50%'}}></div>
                      <div className="chart-bar" style={{height: '95%'}}></div>
                      <div className="chart-bar" style={{height: '75%'}}></div>
                    </div>
                    <div className="analytics-metrics">
                      <div className="metric">
                        <div className="metric-value">+65%</div>
                        <div className="metric-label">Trafik</div>
                      </div>
                      <div className="metric">
                        <div className="metric-value">3.2dk</div>
                        <div className="metric-label">Ort. Okuma</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-overview">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Neden İçerik Üretimi?</h2>
            <p className="service-section-subtitle">
              Kaliteli içerik, dijital pazarlamanın temelidir ve markanızın online başarısında kritik bir rol oynar.
            </p>
          </div>

          <div className="content-overview-grid">
            <div className="content-overview-card">
              <div className="content-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="content-card-title">SEO Başarısı</h3>
              <p className="content-card-text">
                Arama motorlarında üst sıralarda yer almak için özgün ve kaliteli içerikler temel gerekliliktir.
              </p>
            </div>

            <div className="content-overview-card">
              <div className="content-card-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="content-card-title">Marka Otoritesi</h3>
              <p className="content-card-text">
                Değerli içerikler paylaşarak sektörünüzde otorite haline gelin ve müşteri güveni kazanın.
              </p>
            </div>

            <div className="content-overview-card">
              <div className="content-card-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3 className="content-card-title">Hedef Kitle Bağlantısı</h3>
              <p className="content-card-text">
                Müşterilerinizin sorunlarına çözümler sunan içeriklerle onlarla derin bağlantılar kurun.
              </p>
            </div>

            <div className="content-overview-card">
              <div className="content-card-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 className="content-card-title">Dönüşüm Artışı</h3>
              <p className="content-card-text">
                İkna edici içeriklerle ziyaretçileri müşterilere dönüştürün ve satışlarınızı artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="content-services">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">İçerik Üretimi Hizmetlerimiz</h2>
            <p className="service-section-subtitle">
              İşletmenizin ihtiyaçlarına özel, çeşitli formatlarda içerik çözümleri
            </p>
          </div>

          <div className="content-services-grid">
            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Blog & Makale Yazımı</h3>
                <p className="content-service-text">
                  SEO uyumlu, bilgilendirici ve ilgi çekici blog yazıları ve makaleler ile web sitenizin trafiğini artırın ve müşterilerinize değer katın.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Web Sitesi İçeriği</h3>
                <p className="content-service-text">
                  Ana sayfa, hakkımızda, hizmetler ve ürün sayfaları için ikna edici, satış odaklı ve marka kimliğinizi yansıtan metinler.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">E-posta Pazarlama</h3>
                <p className="content-service-text">
                  Yüksek açılma ve tıklanma oranları elde eden, kişiselleştirilmiş ve etkileyici e-posta kampanyaları ve bültenler.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">E-kitap & Rehberler</h3>
                <p className="content-service-text">
                  Potansiyel müşterileri çekmek ve marka otoritenizi güçlendirmek için kapsamlı e-kitaplar, rehberler ve indirilebilir içerikler.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Vaka Çalışmaları & İnfografikler</h3>
                <p className="content-service-text">
                  Başarı hikayelerinizi ve karmaşık verileri görsel olarak çekici ve kolay anlaşılır formatta sunarak etki yaratın.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Sosyal Medya İçeriği</h3>
                <p className="content-service-text">
                  Farklı platformlara özel, etkileşim yaratan ve marka sesinizi yansıtan sosyal medya paylaşımları ve kampanyaları.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Metin Yazarlığı (Copywriting)</h3>
                <p className="content-service-text">
                  Satış sayfaları, reklamlar ve tanıtım materyalleri için dönüşüm odaklı, ikna edici metinler ve sloganlar.
                </p>
              </div>
            </div>

            <div className="content-service-card">
              <div className="content-service-icon">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <div className="content-service-content">
                <h3 className="content-service-title">Podcast & Video Senaryoları</h3>
                <p className="content-service-text">
                  Ses ve görüntü içerikleriniz için akıcı, ilgi çekici ve mesajınızı etkili bir şekilde ileten senaryolar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-process">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">İçerik Üretim Sürecimiz</h2>
            <p className="service-section-subtitle">
              Kaliteli ve etkili içerikler oluşturmak için izlediğimiz adımlar
            </p>
          </div>

          <div className="content-process-steps">
            <div className="content-process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Strateji & Planlama</h3>
                <p className="process-step-text">Hedef kitlenizi, amaçlarınızı ve rekabet ortamını analiz ederek kapsamlı bir içerik stratejisi oluşturuyoruz.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Anahtar Kelime Araştırması</h3>
                <p className="process-step-text">İçeriklerinizin doğru kitleye ulaşması için detaylı anahtar kelime araştırması ve optimizasyonu yapıyoruz.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-content">
                <h3 className="process-step-title">İçerik Oluşturma</h3>
                <p className="process-step-text">Deneyimli içerik yazarlarımız ve editörlerimiz markanızın sesini yansıtan özgün ve değerli içerikler üretiyor.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Görsel Tasarım</h3>
                <p className="process-step-text">İçeriklerinizi destekleyecek çekici görseller, grafikler ve infografikler ile mesajınızı güçlendiriyoruz.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">5</div>
              <div className="process-step-content">
                <h3 className="process-step-title">SEO Optimizasyonu</h3>
                <p className="process-step-text">İçeriklerinizin arama motorlarında üst sıralarda yer alması için kapsamlı SEO optimizasyonu yapıyoruz.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">6</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Yayınlama & Dağıtım</h3>
                <p className="process-step-text">İçeriklerinizi doğru platformlarda, doğru zamanda yayınlıyor ve maksimum erişim için dağıtım stratejileri uyguluyoruz.</p>
              </div>
            </div>

            <div className="content-process-step">
              <div className="process-step-number">7</div>
              <div className="process-step-content">
                <h3 className="process-step-title">Analiz & Optimizasyon</h3>
                <p className="process-step-text">İçerik performansını sürekli takip ediyor, analiz ediyor ve daha iyi sonuçlar için optimizasyonlar yapıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="content-pricing">
        <div className="container">
          <div className="content-section-header">
            <h2 className="content-section-title">İçerik Üretimi Paketleri</h2>
            <p className="content-section-subtitle">
              İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özelleştirilebilen paketler
            </p>
          </div>

          <div className="content-pricing-grid">
            <div className="content-pricing-card">
              <div className="content-pricing-header">
                <h3 className="content-pricing-title">Başlangıç Paketi</h3>
                <div className="content-pricing-price">
                  <span className="content-price-amount">1.900 ₺</span>
                  <span className="content-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="content-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 4 Blog Yazısı (500 kelime)</li>
                  <li><i className="fas fa-check"></i> Temel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 8 Sosyal Medya Paylaşımı</li>
                  <li><i className="fas fa-check"></i> 1 E-posta Bülteni</li>
                  <li><i className="fas fa-check"></i> Aylık İçerik Planı</li>
                  <li className="content-pricing-disabled"><i className="fas fa-times"></i> İnfografikler</li>
                  <li className="content-pricing-disabled"><i className="fas fa-times"></i> E-kitap/Rehber</li>
                  <li className="content-pricing-disabled"><i className="fas fa-times"></i> İçerik Performans Raporu</li>
                </ul>
              </div>
              <div className="content-pricing-footer">
                <Link to="/iletisim" className="content-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="content-pricing-card featured">
              <div className="content-pricing-badge">Popüler</div>
              <div className="content-pricing-header">
                <h3 className="content-pricing-title">İşletme Paketi</h3>
                <div className="content-pricing-price">
                  <span className="content-price-amount">3.900 ₺</span>
                  <span className="content-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="content-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 8 Blog Yazısı (800 kelime)</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 20 Sosyal Medya Paylaşımı</li>
                  <li><i className="fas fa-check"></i> 2 E-posta Bülteni</li>
                  <li><i className="fas fa-check"></i> 2 İnfografik</li>
                  <li><i className="fas fa-check"></i> Web Sitesi İçerik Düzenlemeleri</li>
                  <li><i className="fas fa-check"></i> Aylık İçerik Performans Raporu</li>
                  <li className="content-pricing-disabled"><i className="fas fa-times"></i> E-kitap/Rehber</li>
                </ul>
              </div>
              <div className="content-pricing-footer">
                <Link to="/iletisim" className="content-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>

            <div className="content-pricing-card">
              <div className="content-pricing-header">
                <h3 className="content-pricing-title">Kurumsal Paket</h3>
                <div className="content-pricing-price">
                  <span className="content-price-amount">6.900 ₺</span>
                  <span className="content-price-period">/ Aylık</span>
                </div>
              </div>
              <div className="content-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 12 Blog Yazısı (1000+ kelime)</li>
                  <li><i className="fas fa-check"></i> Gelişmiş SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> 30 Sosyal Medya Paylaşımı</li>
                  <li><i className="fas fa-check"></i> 4 E-posta Bülteni</li>
                  <li><i className="fas fa-check"></i> 3 İnfografik</li>
                  <li><i className="fas fa-check"></i> 1 E-kitap/Rehber (3 ayda bir)</li>
                  <li><i className="fas fa-check"></i> Vaka Çalışması (2 ayda bir)</li>
                  <li><i className="fas fa-check"></i> Haftalık İçerik Performans Raporu</li>
                </ul>
              </div>
              <div className="content-pricing-footer">
                <Link to="/iletisim" className="content-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-faq">
        <div className="container">
          <div className="service-section-header">
            <h2 className="service-section-title">Sık Sorulan Sorular</h2>
            <p className="service-section-subtitle">
              İçerik üretimi hizmetlerimiz hakkında en çok merak edilenler
            </p>
          </div>

          <div className="content-faq-grid">
            <div className="content-faq-item">
              <h3 className="content-faq-question">İçerik üretimi süreciniz nasıl işliyor?</h3>
              <p className="content-faq-answer">
                İçerik üretimi sürecimiz; hedef kitle analizi, anahtar kelime araştırması, içerik planlaması, taslak oluşturma, yazma, düzenleme, müşteri onayı, yayınlama ve performans ölçümü adımlarından oluşur. Her adımda müşteri geri bildirimlerini dikkate alır ve içeriklerin markanızın sesini ve hedeflerinizi yansıtmasını sağlarız.
              </p>
            </div>

            <div className="content-faq-item">
              <h3 className="content-faq-question">İçerik üretimi için hangi sektörlere hizmet veriyorsunuz?</h3>
              <p className="content-faq-answer">
                Deneyimli içerik ekibimizle hemen hemen tüm sektörlere içerik üretimi hizmeti sağlıyoruz. Teknoloji, sağlık, eğitim, finans, gayrimenkul, turizm, e-ticaret, hukuk, otomotiv gibi farklı alanlarda uzmanlaşmış içerik yazarlarımız bulunmaktadır. Her sektörün kendine özgü terminolojisi ve hedef kitlesine uygun içerikler oluşturuyoruz.
              </p>
            </div>

            <div className="content-faq-item">
              <h3 className="content-faq-question">İçerikleriniz SEO uyumlu mu?</h3>
              <p className="content-faq-answer">
                Evet, tüm içeriklerimiz SEO uyumlu olarak hazırlanır. İçerik üretim sürecimizde; kapsamlı anahtar kelime araştırması, meta açıklamalar, başlık optimizasyonu, iç ve dış bağlantılar, alt etiketleri ve şema işaretlemeleri gibi SEO unsurlarını göz önünde bulundururuz. İçeriklerimiz hem kullanıcılar hem de arama motorları için optimize edilmiştir.
              </p>
            </div>

            <div className="content-faq-item">
              <h3 className="content-faq-question">İçerik telif hakları kime ait oluyor?</h3>
              <p className="content-faq-answer">
                Sizin için oluşturduğumuz tüm içeriklerin telif hakları ödeme yapıldıktan sonra tamamen size ait olur. İçerikleri dilediğiniz platformda kullanabilir, değiştirebilir veya dağıtabilirsiniz. Bununla birlikte, dilerseniz referans portföyümüzde içerik örneklerini kullanma hakkını saklı tutarız, ancak bu konuda da her zaman sizin onayınızı alırız.
              </p>
            </div>

            <div className="content-faq-item">
              <h3 className="content-faq-question">İçerikler için araştırma süreciniz nasıl işliyor?</h3>
              <p className="content-faq-answer">
                İçerik oluşturma sürecimizde kapsamlı bir araştırma metodolojisi izliyoruz. Sektör raporları, akademik kaynaklar, güvenilir web siteleri, uzman görüşleri ve mümkünse birincil kaynaklardan bilgi topluyoruz. Ayrıca markanızın daha önce ürettiği içerikleri, rakip analizlerini ve hedef kitle araştırmalarını dikkate alıyoruz. Tüm kaynaklarımızı doğruluyor ve güncel bilgiler sunuyoruz.
              </p>
            </div>

            <div className="content-faq-item">
              <h3 className="content-faq-question">Revizyon süreciniz nasıl işliyor?</h3>
              <p className="content-faq-answer">
                Her içerik paketimizde belirli sayıda ücretsiz revizyon hakkı sunuyoruz. İçerikler teslim edildikten sonra genellikle 7 gün içinde revizyon talebinde bulunabilirsiniz. Geri bildirimleriniz doğrultusunda gerekli düzenlemeleri yaparak içeriği son haline getiriyoruz. Kapsamlı değişiklikler veya paket dışı revizyonlar için ek ücret talep edilebilir, ancak bunu önceden size bildiririz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <div className="content-cta-content">
            <h2 className="content-cta-title">
              Etkileyici İçeriklerle <span className="service-highlight">Fark Yaratın</span>
            </h2>
            <p className="content-cta-text">
              Profesyonel içerik üretimi hizmetlerimizle hedef kitlenizi etkileyin, web sitenizin trafiğini artırın ve daha fazla müşteri kazanın.
            </p>
            <div className="content-cta-buttons">
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

export default ContentCreation;