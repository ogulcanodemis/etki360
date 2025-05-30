import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/images/etki360-logo-iki-satir.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <Link to="/">
                <img src={logo} alt="etki360 Logo" className="footer-logo-img" />
              </Link>
            </div>
            <p className="footer-description">
              Web tasarım, SEO ve dijital pazarlama çözümleri ile işletmenizin online başarısına katkı sağlıyoruz.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/etki360" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/etki360" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/etki360" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/etki360" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Hızlı Erişim</h3>
              <ul>
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
                <li><Link to="/sektorel-cozumler">Sektörel Çözümler</Link></li>
                <li><Link to="/portfoy">Portföy</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Hizmetlerimiz</h3>
              <ul>
                <li><Link to="/hizmetlerimiz/web-tasarim">Web Tasarım</Link></li>
                <li><Link to="/hizmetlerimiz/e-ticaret">E-Ticaret</Link></li>
                <li><Link to="/hizmetlerimiz/seo">SEO</Link></li>
                <li><Link to="/hizmetlerimiz/sosyal-medya">Sosyal Medya</Link></li>
                <li><Link to="/hizmetlerimiz/icerik-uretimi">İçerik Üretimi</Link></li>
                <li><Link to="/hizmetlerimiz/grafik-tasarim">Grafik Tasarım</Link></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Sektörel Çözümler</h3>
              <ul>
                <li><Link to="/sektorel-cozumler/saglik/klinik-web-sitesi">Klinik Web Sitesi</Link></li>
                <li><Link to="/sektorel-cozumler/saglik/sac-ekim-klinigi">Saç Ekim Kliniği</Link></li>
                <li><Link to="/sektorel-cozumler/nakliyat/nakliye-firmasi">Nakliyat Firması</Link></li>
                <li><Link to="/sektorel-cozumler/hizmet/cilingir">Çilingir</Link></li>
                <li><Link to="/sektorel-cozumler/insaat-dekorasyon/mimar">Mimar</Link></li>
                <li><Link to="/sektorel-cozumler">Tüm Sektörel Çözümler</Link></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>İletişim</h3>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Zeytinburnu ve Istanbul Sapphire
                  (Uzaktan çalışma modeli)</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+905444882303">+90 (544) 488 23 03</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@etki360.com">info@etki360.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} etki360. Tüm Hakları Saklıdır.</p>
          </div>
          <div className="footer-bottom-links">
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kullanim-sartlari">Kullanım Şartları</Link>
            <Link to="/site-haritasi">Site Haritası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 