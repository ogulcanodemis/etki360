import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [sectoralDropdownOpen, setSectoralDropdownOpen] = useState(false);
  const location = useLocation();

  // Sayfa yüklendiğinde ve rota değiştiğinde menüyü kapat
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesDropdownOpen(false);
    setSectoralDropdownOpen(false);
  }, [location]);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
    // Diğer dropdown'ları kapat
    setSectoralDropdownOpen(false);
  };

  const toggleSectoralDropdown = (e) => {
    e.preventDefault();
    setSectoralDropdownOpen(!sectoralDropdownOpen);
    // Diğer dropdown'ları kapat
    setServicesDropdownOpen(false);
  };

  // Mobil menü açıkken body scroll'unu kontrol et
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // ESC tuşu ile menüyü kapat
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        setServicesDropdownOpen(false);
        setSectoralDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="etki360 Logo" />
            </Link>
          </div>

          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''}>
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item has-dropdown">
                <a 
                  href="/hizmetlerimiz" 
                  className={location.pathname.includes('/hizmetlerimiz') ? 'active' : ''}
                  onClick={toggleServicesDropdown}
                >
                  Hizmetlerimiz <i className="dropdown-icon"></i>
                </a>
                <ul className={`dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/hizmetlerimiz/web-tasarim">Web Tasarım</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/e-ticaret">E-Ticaret</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/seo">SEO</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/sosyal-medya">Sosyal Medya</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/icerik-uretimi">İçerik Üretimi</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/grafik-tasarim">Grafik Tasarım</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/mobil-uygulama">Mobil Uygulama</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/bakim-destek">Bakım ve Destek</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-dropdown">
                <a 
                  href="/sektorel-cozumler" 
                  className={location.pathname.includes('/sektorel-cozumler') ? 'active' : ''}
                  onClick={toggleSectoralDropdown}
                >
                  Sektörel Çözümler <i className="dropdown-icon"></i>
                </a>
                <ul className={`dropdown-menu ${sectoralDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/sektorel-cozumler/saglik/klinik-web-sitesi">Klinik Web Sitesi</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/saglik/sac-ekim-klinigi">Saç Ekim Kliniği</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/nakliyat/nakliye-firmasi">Nakliyat Firması</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/hizmet/cilingir">Çilingir</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/mimar">Mimar</Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link to="/sektorel-cozumler">Tüm Sektörel Çözümler</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/portfoy" className={location.pathname === '/portfoy' ? 'active' : ''}>
                  Portföy
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''}>
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => {
            setIsMenuOpen(false);
            setServicesDropdownOpen(false);
            setSectoralDropdownOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header; 