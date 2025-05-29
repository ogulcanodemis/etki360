import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css';

const SiteMap = () => {
  return (
    <div className="sitemap-page">
      <div className="sitemap-page__container">
        <h1 className="sitemap-page__title">Site Haritası</h1>
        <p className="sitemap-page__description">
          Etki360 web sitesinin tüm sayfalarını buradan kolayca bulabilirsiniz.
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
                <Link to="/hizmetler" className="sitemap-page__link">Tüm Hizmetler</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetler/kurumsal-web" className="sitemap-page__link">Kurumsal Web</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetler/e-ticaret" className="sitemap-page__link">E-Ticaret</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetler/landing-page" className="sitemap-page__link">Landing Page</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetler/seo" className="sitemap-page__link">SEO & Performans</Link>
              </li>
              <li className="sitemap-page__list-item">
                <Link to="/hizmetler/bakim" className="sitemap-page__link">Bakım & Destek</Link>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div className="sitemap-page__section">
            <h2 className="sitemap-page__section-title">Yasal</h2>
            <ul className="sitemap-page__list">
              <li className="sitemap-page__list-item">
                <Link to="/gizlilik" className="sitemap-page__link">Gizlilik Politikası</Link>
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
                <p className="sitemap-page__contact-text">İstanbul, Türkiye</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">E-posta:</strong>
                <p className="sitemap-page__contact-text">info@etki360.com</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Telefon:</strong>
                <p className="sitemap-page__contact-text">+90 (542) 155 33 15</p>
                <p className="sitemap-page__contact-text">+90 (544) 488 23 03</p>
              </li>
              <li className="sitemap-page__contact-item">
                <strong className="sitemap-page__contact-label">Çalışma Saatleri:</strong>
                <p className="sitemap-page__contact-text">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="sitemap-page__contact-text">Cumartesi: 10:00 - 16:00</p>
                <p className="sitemap-page__contact-text">Pazar: Kapalı</p>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Açıklaması */}
        <div className="sitemap-page__seo-section">
          <h2 className="sitemap-page__seo-title">SEO Dostu Site Haritası</h2>
          <p className="sitemap-page__seo-text">
            Bu site haritası, Etki360 web sitesinin tüm sayfalarını ve bölümlerini içermektedir. 
            Arama motorları için optimize edilmiş ve kullanıcı dostu bir yapıda tasarlanmıştır. 
            Tüm içerikler düzenli olarak güncellenmekte ve en güncel bilgiler sunulmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteMap; 