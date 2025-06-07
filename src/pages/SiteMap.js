import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css';
import { Helmet } from 'react-helmet';

const SiteMap = () => {
  return (
    <div className="sitemap-page">
      <Helmet>
        <title>Site Haritası - etki360 | Web Tasarım & Dijital Çözümler</title>
        <meta name="description" content="etki360 web sitesinin tüm sayfalarının listesi ve site haritası. Web tasarım, e-ticaret, SEO ve diğer hizmetlerimizle ilgili sayfalara ulaşabilirsiniz." />
        <link rel="canonical" href="https://etki360.com/site-haritasi" />
      </Helmet>
      
      <div className="sitemap-page__container">
        <h1 className="sitemap-page__title">Site Haritası</h1>
        <p className="sitemap-page__description">
          etki360 web sitesinin tüm sayfalarını buradan kolayca bulabilirsiniz.
        </p>

        <div className="sitemap-page__grid">
          {/* Ana Sayfalar */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">Ana Sayfalar</h2>
            <ul className="sitemap-page__list">
              <li className="sitemap-page__list-item">
                <Link to="/" className="sitemap-page__link">Ana Sayfa</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hakkimizda" className="sitemap-page__link">Hakkımızda</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/portfoy" className="sitemap-page__link">Portföy</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/blog" className="sitemap-page__link">Blog</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/iletisim" className="sitemap-page__link">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">Hizmetlerimiz</h2>
            <ul className="sitemap-page__list">
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz" className="sitemap-page__link">Tüm Hizmetler</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/web-tasarim" className="sitemap-page__link">Web Tasarım</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/e-ticaret" className="sitemap-page__link">E-Ticaret</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/seo" className="sitemap-page__link">SEO & Performans</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/sosyal-medya" className="sitemap-page__link">Sosyal Medya</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/icerik-uretimi" className="sitemap-page__link">İçerik Üretimi</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/grafik-tasarim" className="sitemap-page__link">Grafik Tasarım</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/mobil-uygulama" className="sitemap-page__link">Mobil Uygulama</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/bakim-destek" className="sitemap-page__link">Bakım & Destek</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/kurumsal-web-tasarim" className="sitemap-page__link">Kurumsal Web Tasarım</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetlerimiz/landing-page" className="sitemap-page__link">Landing Page</Link>
              </li>
            </ul>
          </div>
          
          {/* Sektörel Çözümler */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">Sektörler</h2>
            <ul className="sitemap-page__list">
              <li className="sitemap-page__list-item">
                <Link to="/sektorel-cozumler" className="sitemap-page__link">Tüm Sektörler</Link>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Sağlık</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/saglik/klinik-web-sitesi" className="sitemap-page__link">Klinik Web Sitesi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/saglik/sac-ekim-klinigi" className="sitemap-page__link">Saç Ekim Kliniği</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/saglik/hastane-web-sitesi" className="sitemap-page__link">Hastane Web Sitesi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/saglik/dis-klinigi-web-sitesi" className="sitemap-page__link">Diş Kliniği Web Sitesi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/saglik/psikolog-web-sitesi" className="sitemap-page__link">Psikolog Web Sitesi</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Nakliyat</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/nakliyat/nakliye-firmasi" className="sitemap-page__link">Nakliye Firması</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/nakliyat/kargo-firmasi" className="sitemap-page__link">Kargo Firması</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/nakliyat/evden-eve-nakliyat" className="sitemap-page__link">Evden Eve Nakliyat</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/nakliyat/lojistik-firmasi" className="sitemap-page__link">Lojistik Firması</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">İnşaat & Dekorasyon</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/mimar" className="sitemap-page__link">Mimarlık</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/boya-badana" className="sitemap-page__link">Boya Badana</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/dekorasyon" className="sitemap-page__link">Dekorasyon</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi" className="sitemap-page__link">İnşaat Firması</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Hizmet Sektörü</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hizmet/cilingir" className="sitemap-page__link">Çilingir</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hizmet/cekici-hizmeti" className="sitemap-page__link">Çekici Hizmeti</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hizmet/tamir-servisi" className="sitemap-page__link">Tamir Servisi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hizmet/temizlik-sirketi" className="sitemap-page__link">Temizlik Şirketi</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Güzellik</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi" className="sitemap-page__link">Güzellik Salonu</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/guzellik/kuafor-salonu-web-sitesi" className="sitemap-page__link">Kuaför Salonu</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/guzellik/protez-tirnak-web-sitesi" className="sitemap-page__link">Protez Tırnak</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/guzellik/epilasyon-merkezi-web-sitesi" className="sitemap-page__link">Epilasyon Merkezi</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Hukuk</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hukuk/avukat-web-sitesi" className="sitemap-page__link">Avukat Web Sitesi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hukuk/kurumsal-hukuk-danismanligi" className="sitemap-page__link">Kurumsal Hukuk</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hukuk/is-hukuku-danismanligi" className="sitemap-page__link">İş Hukuku</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/hukuk/ceza-hukuku-web-sitesi" className="sitemap-page__link">Ceza Hukuku</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Eğitim</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/egitim/ozel-okul-web-sitesi" className="sitemap-page__link">Özel Okul</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/egitim/kurs-merkezi-web-sitesi" className="sitemap-page__link">Kurs Merkezi</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/egitim/dil-okulu-web-sitesi" className="sitemap-page__link">Dil Okulu</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/egitim/kres-anaokulu-web-sitesi" className="sitemap-page__link">Kreş & Anaokulu</Link>
                  </li>
                </ul>
              </li>
              <li className="sitemap-page__list-item">
                <strong className="sitemap-page__subsection-title">Yiyecek & İçecek</strong>
                <ul className="sitemap-page__sublist">
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/yiyecek/restoran-web-sitesi" className="sitemap-page__link">Restoran</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/yiyecek/kafe-ve-pastane-web-sitesi" className="sitemap-page__link">Kafe & Pastane</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/yiyecek/catering-web-sitesi" className="sitemap-page__link">Catering</Link>
                  </li>
                  <li className="sitemap-page__sublist-item">
                    <Link to="/sektorel-cozumler/yiyecek/online-yemek-siparisi-web-sitesi" className="sitemap-page__link">Online Yemek Siparişi</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">Yasal</h2>
            <ul className="sitemap-page__list">
              <li className="sitemap-page__list-item">
                <Link to="/gizlilik-politikasi" className="sitemap-page__link">Gizlilik Politikası</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/kullanim-sartlari" className="sitemap-page__link">Kullanım Şartları</Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">İletişim Bilgileri</h2>
            <ul className="sitemap-page__contact-list">
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Adres:</strong>
                <p className="sitemap-page__contact-text">Zeytinburnu, İstanbul, Türkiye</p>
                <p className="sitemap-page__contact-text">İstanbul Sapphire (Uzaktan çalışma modeli)</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">E-posta:</strong>
                <p className="sitemap-page__contact-text">info@etki360.com</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Telefon:</strong>
                <p className="sitemap-page__contact-text">+90 (544) 488 23 03</p>
                <p className="sitemap-page__contact-text">+90 (542) 155 33 15</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Çalışma Saatleri:</strong>
                <p className="sitemap-page__contact-text">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="sitemap-page__contact-text">Cumartesi: 10:00 - 16:00</p>
                <p className="sitemap-page__contact-text">Pazar: Kapalı</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Sosyal Medya:</strong>
                <p className="sitemap-page__contact-text">
                  <a href="https://www.instagram.com/etki360/" target="_blank" rel="noopener noreferrer" className="sitemap-page__social-link">Instagram</a>
                </p>
                <p className="sitemap-page__contact-text">
                  <a href="https://www.linkedin.com/company/etki360/" target="_blank" rel="noopener noreferrer" className="sitemap-page__social-link">LinkedIn</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Açıklaması */}
        <div className="sitemap-page__seo-section">
          <h2 className="sitemap-page__seo-title">SEO Dostu Site Haritası</h2>
          <p className="sitemap-page__seo-text">
            Bu site haritası, etki360 web sitesinin tüm sayfalarını ve bölümlerini içermektedir. 
            Arama motorları için optimize edilmiş ve kullanıcı dostu bir yapıda tasarlanmıştır. 
            Tüm içerikler düzenli olarak güncellenmekte ve en güncel bilgiler sunulmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteMap; 