import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
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
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={toggleMenu}>Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={toggleMenu}>Hakkımızda</Link></li>
            <li><Link to="/hizmetler" onClick={toggleMenu}>Hizmetler</Link></li>
            <li><Link to="/portfoy" onClick={toggleMenu}>Portföy</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/iletisim" onClick={toggleMenu}>İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 