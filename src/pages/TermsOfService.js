import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page">
      {/* Hero Section */}
      <header className="terms-hero-section">
        <div className="container">
          <div className="terms-hero-content">
            <nav className="terms-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>Kullanım Şartları</span>
            </nav>
            <h1 className="terms-hero-title">
              <span className="terms-highlight">Kullanım Şartları</span>
            </h1>
            <p className="terms-hero-description">
              etki360 web sitesi ve hizmetlerini kullanırken uymanız gereken şartlar ve koşullar. 
              Bu şartları kabul ederek hizmetlerimizi güvenle kullanabilirsiniz.
            </p>
            <div className="terms-hero-meta">
              <div className="terms-meta-item">
                <span className="terms-meta-label">Son Güncelleme:</span>
                <span className="terms-meta-value">15 Aralık 2024</span>
              </div>
              <div className="terms-meta-item">
                <span className="terms-meta-label">Yürürlük:</span>
                <span className="terms-meta-value">Türkiye Cumhuriyeti</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      <section className="terms-toc-section">
        <div className="container">
          <div className="terms-toc-card">
            <h2 className="terms-toc-title">İçindekiler</h2>
            <nav className="terms-toc-nav" aria-label="Sayfa içi navigasyon">
              <ol className="terms-toc-list">
                <li><a href="#genel-hukumler">1. Genel Hükümler</a></li>
                <li><a href="#taraflar">2. Taraflar</a></li>
                <li><a href="#hizmet-kapsami">3. Hizmet Kapsamı</a></li>
                <li><a href="#kullanici-yukumlulukler">4. Kullanıcı Yükümlülükleri</a></li>
                <li><a href="#fikri-mulkiyet">5. Fikri Mülkiyet Hakları</a></li>
                <li><a href="#odeme-sartlari">6. Ödeme Şartları</a></li>
                <li><a href="#teslimat-sartlari">7. Teslimat Şartları</a></li>
                <li><a href="#garanti-sorumluluk">8. Garanti ve Sorumluluk</a></li>
                <li><a href="#iptal-iade">9. İptal ve İade</a></li>
                <li><a href="#gizlilik">10. Gizlilik</a></li>
                <li><a href="#uyusmazlik">11. Uyuşmazlık Çözümü</a></li>
                <li><a href="#yururluk">12. Yürürlük ve Değişiklik</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="terms-content-section">
        <div className="container">
          <div className="terms-content-wrapper">
            
            {/* Genel Hükümler */}
            <section id="genel-hukumler" className="terms-section">
              <h2 className="terms-section-title">1. Genel Hükümler</h2>
              <div className="terms-section-content">
                <p>
                  Bu Kullanım Şartları ("Şartlar"), etki360 tarafından sunulan web tasarım, 
                  geliştirme ve dijital pazarlama hizmetlerinin kullanımını düzenler.
                </p>
                <p>
                  Web sitemizi ziyaret etmeniz, hizmetlerimizi kullanmanız veya bizimle 
                  iş ilişkisine girmeniz halinde bu şartları kabul etmiş sayılırsınız.
                </p>
                <div className="terms-highlight-box">
                  <h3>Önemli Uyarı</h3>
                  <p>
                    Bu şartları dikkatlice okuyunuz. Hizmetlerimizi kullanmaya devam etmeniz 
                    halinde bu şartları kabul etmiş sayılırsınız.
                  </p>
                </div>
                <div className="terms-definitions">
                  <h4>Tanımlar</h4>
                  <ul>
                    <li><strong>"Şirket":</strong> etki360</li>
                    <li><strong>"Kullanıcı":</strong> Hizmetlerimizi kullanan kişi veya kuruluş</li>
                    <li><strong>"Hizmet":</strong> Web tasarım, geliştirme ve dijital pazarlama hizmetleri</li>
                    <li><strong>"Web Sitesi":</strong> www.etki360.com</li>
                    <li><strong>"Proje":</strong> Kullanıcı için gerçekleştirilen iş</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Taraflar */}
            <section id="taraflar" className="terms-section">
              <h2 className="terms-section-title">2. Taraflar</h2>
              <div className="terms-section-content">
                <div className="terms-company-info">
                  <h3>Hizmet Sağlayıcı: etki360</h3>
                  <div className="terms-contact-details">
                    <div className="terms-contact-item">
                      <strong>Adres:</strong> İstanbul, Türkiye
                    </div>
                    <div className="terms-contact-item">
                      <strong>E-posta:</strong> info@etki360.com
                    </div>
                    <div className="terms-contact-item">
                      <strong>Telefon:</strong> +90 (542) 155 33 15
                    </div>
                    <div className="terms-contact-item">
                      <strong>Web Sitesi:</strong> www.etki360.com
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Kullanıcı:</strong> Bu şartları kabul ederek hizmetlerimizi kullanan 
                  gerçek veya tüzel kişilerdir.
                </p>
              </div>
            </section>

            {/* Hizmet Kapsamı */}
            <section id="hizmet-kapsami" className="terms-section">
              <h2 className="terms-section-title">3. Hizmet Kapsamı</h2>
              <div className="terms-section-content">
                <p>etki360 olarak aşağıdaki hizmetleri sunmaktayız:</p>
                
                <div className="terms-services">
                  <div className="terms-service">
                    <h4>🌐 Web Tasarım ve Geliştirme</h4>
                    <ul>
                      <li>Kurumsal web siteleri</li>
                      <li>E-ticaret platformları</li>
                      <li>Landing page tasarımı</li>
                      <li>Mobil uyumlu tasarım</li>
                      <li>Responsive web geliştirme</li>
                    </ul>
                  </div>
                  
                  <div className="terms-service">
                    <h4>🚀 Dijital Pazarlama</h4>
                    <ul>
                      <li>SEO optimizasyonu</li>
                      <li>Google Analytics kurulumu</li>
                      <li>Performans optimizasyonu</li>
                      <li>İçerik yönetimi</li>
                      <li>Sosyal medya entegrasyonu</li>
                    </ul>
                  </div>
                  
                  <div className="terms-service">
                    <h4>🔧 Teknik Destek</h4>
                    <ul>
                      <li>Web sitesi bakımı</li>
                      <li>Güvenlik güncellemeleri</li>
                      <li>Hosting desteği</li>
                      <li>Domain yönetimi</li>
                      <li>7/24 teknik destek</li>
                    </ul>
                  </div>
                  
                  <div className="terms-service">
                    <h4>📊 Danışmanlık</h4>
                    <ul>
                      <li>Dijital strateji danışmanlığı</li>
                      <li>Teknoloji seçimi</li>
                      <li>Proje yönetimi</li>
                      <li>Eğitim ve mentorluk</li>
                      <li>İş analizi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Kullanıcı Yükümlülükleri */}
            <section id="kullanici-yukumlulukler" className="terms-section">
              <h2 className="terms-section-title">4. Kullanıcı Yükümlülükleri</h2>
              <div className="terms-section-content">
                <p>Hizmetlerimizi kullanırken aşağıdaki yükümlülükleri kabul edersiniz:</p>
                
                <div className="terms-obligations">
                  <div className="terms-obligation">
                    <h4>📋 Bilgi Sağlama</h4>
                    <ul>
                      <li>Doğru ve güncel bilgi verme</li>
                      <li>Proje gereksinimlerini net belirtme</li>
                      <li>İletişim bilgilerini güncel tutma</li>
                      <li>Gerekli içerikleri zamanında sağlama</li>
                    </ul>
                  </div>
                  
                  <div className="terms-obligation">
                    <h4>💰 Ödeme Yükümlülükleri</h4>
                    <ul>
                      <li>Anlaşılan ödeme planına uyma</li>
                      <li>Zamanında ödeme yapma</li>
                      <li>Ek hizmet taleplerini bildirme</li>
                      <li>Fatura bilgilerini doğru verme</li>
                    </ul>
                  </div>
                  
                  <div className="terms-obligation">
                    <h4>🤝 İşbirliği</h4>
                    <ul>
                      <li>Proje sürecinde aktif katılım</li>
                      <li>Geri bildirim verme</li>
                      <li>Test süreçlerine destek</li>
                      <li>Onay süreçlerini takip etme</li>
                    </ul>
                  </div>
                  
                  <div className="terms-obligation">
                    <h4>⚖️ Yasal Uyum</h4>
                    <ul>
                      <li>Telif haklarına saygı gösterme</li>
                      <li>Yasal olmayan içerik paylaşmama</li>
                      <li>Üçüncü taraf haklarını ihlal etmeme</li>
                      <li>Spam veya zararlı içerik üretmeme</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Fikri Mülkiyet */}
            <section id="fikri-mulkiyet" className="terms-section">
              <h2 className="terms-section-title">5. Fikri Mülkiyet Hakları</h2>
              <div className="terms-section-content">
                <div className="terms-ip-rights">
                  <div className="terms-ip-section">
                    <h4>🎨 Tasarım Hakları</h4>
                    <p>
                      Sizin için oluşturulan özel tasarımlar, ödeme tamamlandıktan sonra 
                      size devredilir. Ancak genel tasarım metodolojisi ve kod yapısı 
                      etki360'a aittir.
                    </p>
                  </div>
                  
                  <div className="terms-ip-section">
                    <h4>💻 Kod Hakları</h4>
                    <p>
                      Projeniz için yazılan özel kodlar size aittir. Ancak kullanılan 
                      framework'ler, kütüphaneler ve genel kod yapıları kendi 
                      lisanslarına tabidir.
                    </p>
                  </div>
                  
                  <div className="terms-ip-section">
                    <h4>📝 İçerik Hakları</h4>
                    <p>
                      Siz tarafından sağlanan tüm içerikler (metin, görsel, video) 
                      size aittir. etki360 bu içerikleri sadece proje kapsamında kullanır.
                    </p>
                  </div>
                  
                  <div className="terms-ip-section">
                    <h4>🏷️ Marka Hakları</h4>
                    <p>
                      etki360 markası ve logosu etki360'a aittir. Müşteri markaları 
                      ve logoları ilgili müşterilere aittir.
                    </p>
                  </div>
                </div>
                
                <div className="terms-highlight-box">
                  <h3>Portföy Kullanımı</h3>
                  <p>
                    Tamamlanan projeler, müşteri onayı ile portföyümüzde ve 
                    pazarlama materyallerimizde kullanılabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Ödeme Şartları */}
            <section id="odeme-sartlari" className="terms-section">
              <h2 className="terms-section-title">6. Ödeme Şartları</h2>
              <div className="terms-section-content">
                <div className="terms-payment-terms">
                  <div className="terms-payment-method">
                    <h4>💳 Ödeme Yöntemleri</h4>
                    <ul>
                      <li>Banka havalesi</li>
                      <li>Kredi kartı</li>
                      <li>Nakit ödeme</li>
                      <li>Çek (kurumsal müşteriler)</li>
                    </ul>
                  </div>
                  
                  <div className="terms-payment-schedule">
                    <h4>📅 Ödeme Planı</h4>
                    <ul>
                      <li><strong>Küçük Projeler:</strong> %100 peşin</li>
                      <li><strong>Orta Projeler:</strong> %50 peşin, %50 teslimde</li>
                      <li><strong>Büyük Projeler:</strong> %40 peşin, %30 ara ödeme, %30 teslimde</li>
                      <li><strong>Aylık Hizmetler:</strong> Her ayın başında peşin</li>
                    </ul>
                  </div>
                  
                  <div className="terms-payment-conditions">
                    <h4>⏰ Ödeme Koşulları</h4>
                    <ul>
                      <li>Fatura tarihinden itibaren 7 gün içinde ödeme</li>
                      <li>Geç ödeme durumunda %2 gecikme faizi</li>
                      <li>30 gün gecikmede proje durdurulur</li>
                      <li>Tüm fiyatlar KDV hariçtir</li>
                    </ul>
                  </div>
                  
                  <div className="terms-additional-costs">
                    <h4>💰 Ek Maliyetler</h4>
                    <ul>
                      <li>Kapsam dışı ek istekler</li>
                      <li>Üçüncü taraf lisans ücretleri</li>
                      <li>Premium hosting/domain ücretleri</li>
                      <li>Acil teslimat ek ücreti (%25)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Teslimat Şartları */}
            <section id="teslimat-sartlari" className="terms-section">
              <h2 className="terms-section-title">7. Teslimat Şartları</h2>
              <div className="terms-section-content">
                <div className="terms-delivery">
                  <div className="terms-delivery-timeline">
                    <h4>⏱️ Teslimat Süreleri</h4>
                    <ul>
                      <li><strong>Landing Page:</strong> 3-5 iş günü</li>
                      <li><strong>Kurumsal Web:</strong> 10-15 iş günü</li>
                      <li><strong>E-ticaret:</strong> 20-30 iş günü</li>
                      <li><strong>Özel Projeler:</strong> Anlaşmaya göre</li>
                    </ul>
                  </div>
                  
                  <div className="terms-delivery-process">
                    <h4>📋 Teslimat Süreci</h4>
                    <ol>
                      <li>Proje tamamlanması</li>
                      <li>İç kalite kontrolü</li>
                      <li>Test sunucusunda demo</li>
                      <li>Müşteri onayı</li>
                      <li>Canlı yayına alma</li>
                      <li>Eğitim ve dokümantasyon</li>
                    </ol>
                  </div>
                  
                  <div className="terms-delivery-conditions">
                    <h4>📝 Teslimat Koşulları</h4>
                    <ul>
                      <li>Müşteri onayı ile teslimat tamamlanır</li>
                      <li>7 gün içinde itiraz edilmezse onaylanmış sayılır</li>
                      <li>Küçük düzeltmeler ücretsizdir</li>
                      <li>Büyük değişiklikler ek ücrete tabidir</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Garanti ve Sorumluluk */}
            <section id="garanti-sorumluluk" className="terms-section">
              <h2 className="terms-section-title">8. Garanti ve Sorumluluk</h2>
              <div className="terms-section-content">
                <div className="terms-warranty">
                  <div className="terms-warranty-coverage">
                    <h4>✅ Garanti Kapsamı</h4>
                    <ul>
                      <li>Teknik hatalar ve bug'lar</li>
                      <li>Tarayıcı uyumluluk sorunları</li>
                      <li>Mobil uyumluluk problemleri</li>
                      <li>Temel SEO ayarları</li>
                      <li>Güvenlik açıkları</li>
                    </ul>
                  </div>
                  
                  <div className="terms-warranty-period">
                    <h4>⏰ Garanti Süresi</h4>
                    <ul>
                      <li><strong>Teknik Garanti:</strong> 1 yıl</li>
                      <li><strong>Bug Düzeltme:</strong> 6 ay</li>
                      <li><strong>Ücretsiz Destek:</strong> 3 ay</li>
                      <li><strong>Hosting Garantisi:</strong> 1 yıl</li>
                    </ul>
                  </div>
                  
                  <div className="terms-warranty-exclusions">
                    <h4>❌ Garanti Dışı</h4>
                    <ul>
                      <li>Üçüncü taraf hizmet kesintileri</li>
                      <li>Kullanıcı kaynaklı hatalar</li>
                      <li>Doğal afetler</li>
                      <li>Siber saldırılar</li>
                      <li>İnternet servis sağlayıcı sorunları</li>
                    </ul>
                  </div>
                  
                  <div className="terms-liability">
                    <h4>⚖️ Sorumluluk Sınırları</h4>
                    <p>
                      etki360'ın sorumluluğu, ödenen hizmet bedeli ile sınırlıdır. 
                      Dolaylı zararlardan sorumluluk kabul edilmez.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* İptal ve İade */}
            <section id="iptal-iade" className="terms-section">
              <h2 className="terms-section-title">9. İptal ve İade</h2>
              <div className="terms-section-content">
                <div className="terms-cancellation">
                  <div className="terms-cancellation-policy">
                    <h4>🚫 İptal Koşulları</h4>
                    <ul>
                      <li><strong>Proje Başlamadan:</strong> %100 iade</li>
                      <li><strong>Tasarım Aşamasında:</strong> %50 iade</li>
                      <li><strong>Geliştirme Aşamasında:</strong> %25 iade</li>
                      <li><strong>Test Aşamasında:</strong> İade yok</li>
                    </ul>
                  </div>
                  
                  <div className="terms-refund-process">
                    <h4>💰 İade Süreci</h4>
                    <ol>
                      <li>Yazılı iptal talebi</li>
                      <li>Proje durumu değerlendirmesi</li>
                      <li>İade miktarı hesaplama</li>
                      <li>Teslim edilen çalışmaların iadesi</li>
                      <li>İade işleminin gerçekleştirilmesi (7-14 iş günü)</li>
                    </ol>
                  </div>
                  
                  <div className="terms-force-majeure">
                    <h4>🌪️ Mücbir Sebepler</h4>
                    <p>
                      Doğal afetler, savaş, pandemi, hükümet kararları gibi 
                      mücbir sebeplerden dolayı gecikmelerde sorumluluk kabul edilmez.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gizlilik */}
            <section id="gizlilik" className="terms-section">
              <h2 className="terms-section-title">10. Gizlilik</h2>
              <div className="terms-section-content">
                <div className="terms-privacy">
                  <div className="terms-confidentiality">
                    <h4>🔒 Gizlilik Taahhüdü</h4>
                    <ul>
                      <li>Müşteri bilgilerinin korunması</li>
                      <li>Proje detaylarının gizli tutulması</li>
                      <li>Üçüncü taraflarla paylaşmama</li>
                      <li>Güvenli veri saklama</li>
                    </ul>
                  </div>
                  
                  <div className="terms-data-protection">
                    <h4>🛡️ Veri Koruma</h4>
                    <ul>
                      <li>KVKK uyumlu veri işleme</li>
                      <li>SSL şifreli veri iletimi</li>
                      <li>Düzenli güvenlik güncellemeleri</li>
                      <li>Yetkilendirilmiş erişim</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Detaylı bilgi için <Link to="/gizlilik">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Uyuşmazlık Çözümü */}
            <section id="uyusmazlik" className="terms-section">
              <h2 className="terms-section-title">11. Uyuşmazlık Çözümü</h2>
              <div className="terms-section-content">
                <div className="terms-dispute">
                  <div className="terms-dispute-resolution">
                    <h4>🤝 Çözüm Yolları</h4>
                    <ol>
                      <li><strong>Doğrudan Görüşme:</strong> İlk olarak karşılıklı görüşme</li>
                      <li><strong>Arabuluculuk:</strong> Tarafsız arabulucu ile çözüm</li>
                      <li><strong>Tahkim:</strong> Hukuki tahkim süreci</li>
                      <li><strong>Mahkeme:</strong> Son çare olarak mahkeme</li>
                    </ol>
                  </div>
                  
                  <div className="terms-jurisdiction">
                    <h4>⚖️ Yetkili Mahkeme</h4>
                    <p>
                      Bu sözleşmeden doğan uyuşmazlıklarda İstanbul Mahkemeleri 
                      ve İcra Müdürlükleri yetkilidir.
                    </p>
                  </div>
                  
                  <div className="terms-applicable-law">
                    <h4>📜 Uygulanacak Hukuk</h4>
                    <p>
                      Bu sözleşme Türkiye Cumhuriyeti hukukuna tabidir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Yürürlük */}
            <section id="yururluk" className="terms-section">
              <h2 className="terms-section-title">12. Yürürlük ve Değişiklik</h2>
              <div className="terms-section-content">
                <div className="terms-validity">
                  <div className="terms-effective-date">
                    <h4>📅 Yürürlük Tarihi</h4>
                    <p>
                      Bu kullanım şartları 15 Aralık 2024 tarihinde yürürlüğe girmiştir.
                    </p>
                  </div>
                  
                  <div className="terms-amendments">
                    <h4>✏️ Değişiklik Hakkı</h4>
                    <ul>
                      <li>etki360 bu şartları değiştirme hakkını saklı tutar</li>
                      <li>Değişiklikler web sitesinde yayınlanır</li>
                      <li>Önemli değişiklikler e-posta ile bildirilir</li>
                      <li>Değişiklikler yayın tarihinde yürürlüğe girer</li>
                    </ul>
                  </div>
                  
                  <div className="terms-severability">
                    <h4>🔗 Bölünebilirlik</h4>
                    <p>
                      Bu şartların herhangi bir maddesi geçersiz sayılırsa, 
                      diğer maddeler geçerliliğini korur.
                    </p>
                  </div>
                  
                  <div className="terms-entire-agreement">
                    <h4>📋 Tam Anlaşma</h4>
                    <p>
                      Bu kullanım şartları, taraflar arasındaki tam anlaşmayı oluşturur 
                      ve önceki tüm anlaşmaların yerini alır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="terms-cta-section">
        <div className="container">
          <div className="terms-cta-content">
            <h2 className="terms-cta-title">Sorularınız mı Var?</h2>
            <p className="terms-cta-description">
              Kullanım şartlarımız hakkında herhangi bir sorunuz varsa, 
              bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="terms-cta-buttons">
              <Link to="/iletisim" className="terms-btn-primary">
                İletişime Geç
              </Link>
              <a href="mailto:info@etki360.com" className="terms-btn-secondary">
                E-posta Gönder
              </a>
            </div>
            <div className="terms-cta-note">
              <p>
                <strong>Not:</strong> Bu şartları kabul ederek hizmetlerimizi kullanmaya başlayabilirsiniz. 
                Güncel şartları düzenli olarak kontrol etmenizi öneririz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 