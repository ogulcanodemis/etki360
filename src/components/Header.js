import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <span className="logo-text">etki360</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="nav-link">Hakkımızda</Link></li>
              <li className="dropdown">
                <span className="nav-link">Hizmetler</span>
                <ul className="dropdown-menu">
                  <li><Link to="/hizmetler/kurumsal-web">Kurumsal Web</Link></li>
                  <li><Link to="/hizmetler/e-ticaret">E-Ticaret</Link></li>
                  <li><Link to="/hizmetler/landing-page">Landing Page</Link></li>
                  <li><Link to="/hizmetler/seo">SEO & Performans</Link></li>
                  <li><Link to="/hizmetler/bakim">Bakım & Destek</Link></li>
                </ul>
              </li>
              <li><Link to="/portfoy" className="nav-link">Portföy</Link></li>
              <li><Link to="/blog" className="nav-link">Blog</Link></li>
              <li><Link to="/iletisim" className="nav-link">İletişim</Link></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Link to="/iletisim" className="cta-button">
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={closeMenu}>Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={closeMenu}>Hakkımızda</Link></li>
            <li><Link to="/hizmetler" onClick={closeMenu}>Hizmetler</Link></li>
            <li><Link to="/hizmetler/kurumsal-web" onClick={closeMenu}>Kurumsal Web</Link></li>
            <li><Link to="/hizmetler/e-ticaret" onClick={closeMenu}>E-Ticaret</Link></li>
            <li><Link to="/hizmetler/landing-page" onClick={closeMenu}>Landing Page</Link></li>
            <li><Link to="/hizmetler/seo" onClick={closeMenu}>SEO & Performans</Link></li>
            <li><Link to="/hizmetler/bakim" onClick={closeMenu}>Bakım & Destek</Link></li>
            <li><Link to="/portfoy" onClick={closeMenu}>Portföy</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/iletisim" onClick={closeMenu}>İletişim</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header; 