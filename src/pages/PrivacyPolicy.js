import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <header className="privacy-hero-section">
        <div className="container">
          <div className="privacy-hero-content">
            <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>Gizlilik Politikası</span>
            </nav>
            <h1 className="privacy-hero-title">
              <span className="privacy-highlight">Gizlilik Politikası</span>
            </h1>
            <p className="privacy-hero-description">
              Kişisel verilerinizin korunması bizim için önemlidir. Bu politika, 
              verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
            </p>
            <div className="privacy-hero-meta">
              <div className="privacy-meta-item">
                <span className="privacy-meta-label">Son Güncelleme:</span>
                <span className="privacy-meta-value">15 Aralık 2024</span>
              </div>
              <div className="privacy-meta-item">
                <span className="privacy-meta-label">Geçerlilik:</span>
                <span className="privacy-meta-value">KVKK Uyumlu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="privacy-toc-section">
        <div className="container">
          <div className="privacy-toc-card">
            <h2 className="privacy-toc-title">İçindekiler</h2>
            <nav className="privacy-toc-nav" aria-label="Sayfa içi navigasyon">
              <ol className="privacy-toc-list">
                <li><a href="#genel-bilgiler">1. Genel Bilgiler</a></li>
                <li><a href="#veri-sorumlusu">2. Veri Sorumlusu</a></li>
                <li><a href="#toplanan-veriler">3. Toplanan Kişisel Veriler</a></li>
                <li><a href="#veri-toplama">4. Veri Toplama Yöntemleri</a></li>
                <li><a href="#veri-kullanimi">5. Verilerin Kullanım Amaçları</a></li>
                <li><a href="#veri-paylasimi">6. Veri Paylaşımı</a></li>
                <li><a href="#veri-guvenlik">7. Veri Güvenliği</a></li>
                <li><a href="#haklariniz">8. Haklarınız</a></li>
                <li><a href="#cerezler">9. Çerez Politikası</a></li>
                <li><a href="#iletisim">10. İletişim</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="privacy-content-section">
        <div className="container">
          <div className="privacy-content-wrapper">
            
            {/* Genel Bilgiler */}
            <section id="genel-bilgiler" className="privacy-section">
              <h2 className="privacy-section-title">1. Genel Bilgiler</h2>
              <div className="privacy-section-content">
                <p>
                  Bu Gizlilik Politikası, etki360 olarak kişisel verilerinizin 6698 sayılı 
                  Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında işlenmesine ilişkin 
                  usul ve esasları düzenlemektedir.
                </p>
                <p>
                  Web sitemizi ziyaret ettiğinizde, hizmetlerimizi kullandığınızda veya 
                  bizimle iletişime geçtiğinizde kişisel verileriniz bu politika 
                  çerçevesinde işlenmektedir.
                </p>
                <div className="privacy-highlight-box">
                  <h3>Önemli Not</h3>
                  <p>
                    Bu politikayı düzenli olarak gözden geçirmenizi öneririz. 
                    Değişiklikler web sitemizde yayınlandığı tarihte yürürlüğe girer.
                  </p>
                </div>
              </div>
            </section>

            {/* Veri Sorumlusu */}
            <section id="veri-sorumlusu" className="privacy-section">
              <h2 className="privacy-section-title">2. Veri Sorumlusu</h2>
              <div className="privacy-section-content">
                <div className="privacy-company-info">
                  <h3>etki360</h3>
                  <div className="privacy-contact-details">
                    <div className="privacy-contact-item">
                      <strong>Adres:</strong> İstanbul, Türkiye
                    </div>
                    <div className="privacy-contact-item">
                      <strong>E-posta:</strong> info@etki360.com
                    </div>
                    <div className="privacy-contact-item">
                      <strong>Telefon:</strong> +90 (542) 155 33 15
                    </div>
                    <div className="privacy-contact-item">
                      <strong>Web Sitesi:</strong> www.etki360.com
                    </div>
                  </div>
                </div>
                <p>
                  KVKK kapsamında "Veri Sorumlusu" sıfatıyla, kişisel verilerinizin 
                  işlenmesinden sorumlu olan taraftır.
                </p>
              </div>
            </section>

            {/* Toplanan Veriler */}
            <section id="toplanan-veriler" className="privacy-section">
              <h2 className="privacy-section-title">3. Toplanan Kişisel Veriler</h2>
              <div className="privacy-section-content">
                <p>Aşağıdaki kategorilerde kişisel verilerinizi toplayabiliriz:</p>
                
                <div className="privacy-data-categories">
                  <div className="privacy-data-category">
                    <h4>Kimlik Bilgileri</h4>
                    <ul>
                      <li>Ad, soyad</li>
                      <li>E-posta adresi</li>
                      <li>Telefon numarası</li>
                      <li>Şirket/kurum bilgileri</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-data-category">
                    <h4>İletişim Bilgileri</h4>
                    <ul>
                      <li>Posta adresi</li>
                      <li>İş adresi</li>
                      <li>Sosyal medya hesapları</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-data-category">
                    <h4>Teknik Bilgiler</h4>
                    <ul>
                      <li>IP adresi</li>
                      <li>Tarayıcı bilgileri</li>
                      <li>Cihaz bilgileri</li>
                      <li>Çerez verileri</li>
                      <li>Site kullanım istatistikleri</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-data-category">
                    <h4>İş/Proje Bilgileri</h4>
                    <ul>
                      <li>Proje gereksinimleri</li>
                      <li>Bütçe bilgileri</li>
                      <li>Hizmet tercihleri</li>
                      <li>İletişim geçmişi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Veri Toplama */}
            <section id="veri-toplama" className="privacy-section">
              <h2 className="privacy-section-title">4. Veri Toplama Yöntemleri</h2>
              <div className="privacy-section-content">
                <p>Kişisel verilerinizi aşağıdaki yöntemlerle topluyoruz:</p>
                
                <div className="privacy-collection-methods">
                  <div className="privacy-method">
                    <h4>🌐 Web Sitesi</h4>
                    <p>İletişim formları, teklif talep formları, newsletter kayıtları</p>
                  </div>
                  
                  <div className="privacy-method">
                    <h4>📧 E-posta</h4>
                    <p>Doğrudan e-posta iletişimi, sorular ve talepler</p>
                  </div>
                  
                  <div className="privacy-method">
                    <h4>📱 Telefon/WhatsApp</h4>
                    <p>Telefon görüşmeleri, WhatsApp mesajlaşmaları</p>
                  </div>
                  
                  <div className="privacy-method">
                    <h4>🤝 Yüz Yüze</h4>
                    <p>Toplantılar, etkinlikler, iş görüşmeleri</p>
                  </div>
                  
                  <div className="privacy-method">
                    <h4>📊 Otomatik Toplama</h4>
                    <p>Çerezler, analitik araçlar, log dosyaları</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Veri Kullanımı */}
            <section id="veri-kullanimi" className="privacy-section">
              <h2 className="privacy-section-title">5. Verilerin Kullanım Amaçları</h2>
              <div className="privacy-section-content">
                <p>Kişisel verilerinizi aşağıdaki amaçlarla kullanıyoruz:</p>
                
                <div className="privacy-purposes">
                  <div className="privacy-purpose">
                    <h4>Hizmet Sunumu</h4>
                    <ul>
                      <li>Web tasarım ve geliştirme hizmetleri</li>
                      <li>Proje yönetimi ve takibi</li>
                      <li>Teknik destek sağlama</li>
                      <li>Müşteri hizmetleri</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-purpose">
                    <h4>İletişim</h4>
                    <ul>
                      <li>Teklif hazırlama ve sunma</li>
                      <li>Proje güncellemeleri</li>
                      <li>Önemli duyurular</li>
                      <li>Müşteri memnuniyeti anketleri</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-purpose">
                    <h4>Pazarlama</h4>
                    <ul>
                      <li>Newsletter gönderimi</li>
                      <li>Yeni hizmet duyuruları</li>
                      <li>Özel kampanyalar</li>
                      <li>Blog içerikleri paylaşımı</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-purpose">
                    <h4>Analiz ve İyileştirme</h4>
                    <ul>
                      <li>Web site performans analizi</li>
                      <li>Kullanıcı deneyimi iyileştirme</li>
                      <li>Hizmet kalitesi artırma</li>
                      <li>Trend analizi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Veri Paylaşımı */}
            <section id="veri-paylasimi" className="privacy-section">
              <h2 className="privacy-section-title">6. Veri Paylaşımı</h2>
              <div className="privacy-section-content">
                <p>
                  Kişisel verilerinizi üçüncü taraflarla paylaşmıyoruz. 
                  Ancak aşağıdaki durumlarda sınırlı paylaşım yapabiliriz:
                </p>
                
                <div className="privacy-sharing-cases">
                  <div className="privacy-sharing-case">
                    <h4>⚖️ Yasal Yükümlülükler</h4>
                    <p>Mahkeme kararları, yasal düzenlemeler gereği</p>
                  </div>
                  
                  <div className="privacy-sharing-case">
                    <h4>🔧 Hizmet Sağlayıcılar</h4>
                    <p>Hosting, e-posta, analitik hizmetler (Google Analytics, vb.)</p>
                  </div>
                  
                  <div className="privacy-sharing-case">
                    <h4>🤝 İş Ortakları</h4>
                    <p>Proje gereksinimleri doğrultusunda, açık rızanız ile</p>
                  </div>
                </div>
                
                <div className="privacy-highlight-box">
                  <h3>Güvenlik Önlemleri</h3>
                  <p>
                    Tüm üçüncü taraf paylaşımlarında veri güvenliği sözleşmeleri 
                    imzalanır ve KVKK uyumluluğu sağlanır.
                  </p>
                </div>
              </div>
            </section>

            {/* Veri Güvenliği */}
            <section id="veri-guvenlik" className="privacy-section">
              <h2 className="privacy-section-title">7. Veri Güvenliği</h2>
              <div className="privacy-section-content">
                <p>Kişisel verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:</p>
                
                <div className="privacy-security-measures">
                  <div className="privacy-security-measure">
                    <h4>🔒 Teknik Güvenlik</h4>
                    <ul>
                      <li>SSL sertifikası ile şifreli veri iletimi</li>
                      <li>Güvenli sunucu altyapısı</li>
                      <li>Düzenli güvenlik güncellemeleri</li>
                      <li>Firewall ve anti-virus koruması</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-security-measure">
                    <h4>👥 İdari Güvenlik</h4>
                    <ul>
                      <li>Sınırlı erişim yetkileri</li>
                      <li>Personel gizlilik eğitimleri</li>
                      <li>Veri işleme prosedürleri</li>
                      <li>Düzenli güvenlik denetimleri</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-security-measure">
                    <h4>🛡️ Fiziksel Güvenlik</h4>
                    <ul>
                      <li>Güvenli veri merkezi</li>
                      <li>Yedekleme sistemleri</li>
                      <li>Erişim kontrolleri</li>
                      <li>Felaket kurtarma planları</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Haklarınız */}
            <section id="haklariniz" className="privacy-section">
              <h2 className="privacy-section-title">8. Haklarınız</h2>
              <div className="privacy-section-content">
                <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                
                <div className="privacy-rights">
                  <div className="privacy-right">
                    <h4>📋 Bilgi Alma Hakkı</h4>
                    <p>Kişisel verilerinizin işlenip işlenmediğini öğrenme</p>
                  </div>
                  
                  <div className="privacy-right">
                    <h4>🔍 Erişim Hakkı</h4>
                    <p>İşlenen kişisel verileriniz hakkında bilgi talep etme</p>
                  </div>
                  
                  <div className="privacy-right">
                    <h4>✏️ Düzeltme Hakkı</h4>
                    <p>Yanlış veya eksik verilerin düzeltilmesini isteme</p>
                  </div>
                  
                  <div className="privacy-right">
                    <h4>🗑️ Silme Hakkı</h4>
                    <p>Kişisel verilerinizin silinmesini talep etme</p>
                  </div>
                  
                  <div className="privacy-right">
                    <h4>🚫 İtiraz Hakkı</h4>
                    <p>Veri işlemeye itiraz etme ve durdurma talep etme</p>
                  </div>
                  
                  <div className="privacy-right">
                    <h4>📤 Taşınabilirlik Hakkı</h4>
                    <p>Verilerinizi başka bir veri sorumlusuna aktarma</p>
                  </div>
                </div>
                
                <div className="privacy-rights-contact">
                  <h4>Haklarınızı Nasıl Kullanabilirsiniz?</h4>
                  <p>
                    Yukarıdaki haklarınızı kullanmak için <strong>info@etki360.com</strong> 
                    adresine e-posta gönderebilir veya <strong>+90 (542) 155 33 15</strong> 
                    numarasından bize ulaşabilirsiniz.
                  </p>
                </div>
              </div>
            </section>

            {/* Çerezler */}
            <section id="cerezler" className="privacy-section">
              <h2 className="privacy-section-title">9. Çerez Politikası</h2>
              <div className="privacy-section-content">
                <p>Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanıyoruz:</p>
                
                <div className="privacy-cookies">
                  <div className="privacy-cookie-type">
                    <h4>🍪 Zorunlu Çerezler</h4>
                    <p>Web sitesinin temel işlevleri için gerekli</p>
                  </div>
                  
                  <div className="privacy-cookie-type">
                    <h4>📊 Analitik Çerezler</h4>
                    <p>Google Analytics ile site kullanım istatistikleri</p>
                  </div>
                  
                  <div className="privacy-cookie-type">
                    <h4>🎯 Pazarlama Çerezleri</h4>
                    <p>Kişiselleştirilmiş içerik ve reklamlar</p>
                  </div>
                </div>
                
                <p>
                  Çerez ayarlarınızı tarayıcınızdan yönetebilir, istediğiniz zaman 
                  devre dışı bırakabilirsiniz.
                </p>
              </div>
            </section>

            {/* İletişim */}
            <section id="iletisim" className="privacy-section">
              <h2 className="privacy-section-title">10. İletişim</h2>
              <div className="privacy-section-content">
                <p>
                  Gizlilik politikamız hakkında sorularınız veya kişisel verilerinizle 
                  ilgili talepleriniz için bizimle iletişime geçebilirsiniz:
                </p>
                
                <div className="privacy-contact-info">
                  <div className="privacy-contact-method">
                    <h4>📧 E-posta</h4>
                    <p>info@etki360.com</p>
                  </div>
                  
                  <div className="privacy-contact-method">
                    <h4>📱 Telefon</h4>
                    <p>+90 (542) 155 33 15</p>
                  </div>
                  
                  <div className="privacy-contact-method">
                    <h4>💬 WhatsApp</h4>
                    <p>+90 (542) 155 33 15</p>
                  </div>
                  
                  <div className="privacy-contact-method">
                    <h4>🌐 Web Sitesi</h4>
                    <p>www.etki360.com/iletisim</p>
                  </div>
                </div>
                
                <div className="privacy-response-time">
                  <h4>⏱️ Yanıt Süresi</h4>
                  <p>
                    Taleplerinizi en geç 30 gün içinde değerlendirip size geri dönüş yapıyoruz.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="privacy-cta-section">
        <div className="container">
          <div className="privacy-cta-content">
            <h2 className="privacy-cta-title">Sorularınız mı Var?</h2>
            <p className="privacy-cta-description">
              Gizlilik politikamız hakkında herhangi bir sorunuz varsa, 
              bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="privacy-cta-buttons">
              <Link to="/iletisim" className="privacy-btn-primary">
                İletişime Geç
              </Link>
              <a href="mailto:info@etki360.com" className="privacy-btn-secondary">
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 