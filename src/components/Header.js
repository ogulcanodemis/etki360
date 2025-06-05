import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/etki360-logo-tek-satir.svg';

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
              <li className="nav-item" style={{"--item-index": 0}}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Ana Sayfa
                </Link>
              </li>
              <li className="nav-item" style={{"--item-index": 1}}>
                <Link to="/hakkimizda" className={location.pathname === '/hakkimizda' ? 'active' : ''}>
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item has-dropdown" style={{"--item-index": 2}}>
                <a 
                  href="/hizmetlerimiz" 
                  className={location.pathname.includes('/hizmetlerimiz') ? 'active' : ''}
                  onClick={toggleServicesDropdown}
                >
                  Hizmetlerimiz <i className="dropdown-icon"></i>
                </a>
                <ul className={`dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/hizmetlerimiz/web-tasarim" style={{"--item-index": 0}}>Web Tasarım</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/e-ticaret" style={{"--item-index": 1}}>E-Ticaret</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/seo" style={{"--item-index": 2}}>SEO</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/sosyal-medya" style={{"--item-index": 3}}>Sosyal Medya</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/icerik-uretimi" style={{"--item-index": 4}}>İçerik Üretimi</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/grafik-tasarim" style={{"--item-index": 5}}>Grafik Tasarım</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/mobil-uygulama" style={{"--item-index": 6}}>Mobil Uygulama</Link>
                  </li>
                  <li>
                    <Link to="/hizmetlerimiz/bakim-destek" style={{"--item-index": 7}}>Bakım ve Destek</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-dropdown" style={{"--item-index": 3}}>
                <a 
                  href="/sektorel-cozumler" 
                  className={location.pathname.includes('/sektorel-cozumler') ? 'active' : ''}
                  onClick={toggleSectoralDropdown}
                >
                  Sektörel Çözümler <i className="dropdown-icon"></i>
                </a>
                <ul className={`dropdown-menu ${sectoralDropdownOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/sektorel-cozumler/saglik/klinik-web-sitesi" style={{"--item-index": 0}}>Klinik Web Sitesi</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/saglik/sac-ekim-klinigi" style={{"--item-index": 1}}>Saç Ekim Kliniği</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/nakliyat/nakliye-firmasi" style={{"--item-index": 2}}>Nakliyat Firması</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/hizmet/cilingir" style={{"--item-index": 3}}>Çilingir</Link>
                  </li>
                  <li>
                    <Link to="/sektorel-cozumler/insaat-dekorasyon/mimar" style={{"--item-index": 4}}>Mimar</Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <Link to="/sektorel-cozumler" style={{"--item-index": 5}}>Tüm Sektörel Çözümler</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" style={{"--item-index": 4}}>
                <Link to="/portfoy" className={location.pathname === '/portfoy' ? 'active' : ''}>
                  Portföy
                </Link>
              </li>
              <li className="nav-item" style={{"--item-index": 5}}>
                <Link to="/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>
                  Blog
                </Link>
              </li>
              <li className="nav-item" style={{"--item-index": 6}}>
                <Link to="/iletisim" className={location.pathname === '/iletisim' ? 'active' : ''}>
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => {
          setIsMenuOpen(false);
          setServicesDropdownOpen(false);
          setSectoralDropdownOpen(false);
        }}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header; 