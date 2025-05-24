import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Çerez onayının daha önce verilip verilmediğini kontrol et
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // 1 saniye sonra göster (sayfa yüklendikten sonra)
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const closeBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent-overlay ${isClosing ? 'closing' : ''}`}>
      <div className="cookie-consent-banner">
        <div className="cookie-consent-content">
          {/* Ana İçerik */}
          <div className="cookie-main-content">
            <div className="cookie-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v4"/>
                <path d="M12 18v4"/>
                <path d="M4.93 4.93l2.83 2.83"/>
                <path d="M16.24 16.24l2.83 2.83"/>
                <path d="M2 12h4"/>
                <path d="M18 12h4"/>
                <path d="M4.93 19.07l2.83-2.83"/>
                <path d="M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
            <div className="cookie-text-content">
              <h3 className="cookie-title">🍪 Çerez Kullanımı</h3>
              <p className="cookie-description">
                Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
                Analitik ve pazarlama çerezleri için onayınıza ihtiyacımız var.
              </p>
              <div className="cookie-links">
                <Link to="/gizlilik" className="cookie-policy-link">
                  Gizlilik Politikası
                </Link>
                <span>•</span>
                <button 
                  className="cookie-details-btn"
                  onClick={handleCustomize}
                >
                  {showDetails ? 'Detayları Gizle' : 'Detayları Göster'}
                </button>
              </div>
            </div>
          </div>

          {/* Detay Bölümü */}
          {showDetails && (
            <div className="cookie-details-section">
              <div className="cookie-categories">
                <div className="cookie-category">
                  <div className="category-header">
                    <input 
                      type="checkbox" 
                      id="necessary" 
                      checked={true} 
                      disabled 
                      className="category-checkbox"
                    />
                    <label htmlFor="necessary" className="category-label">
                      <span className="category-name">Gerekli Çerezler</span>
                      <span className="category-status required">Zorunlu</span>
                    </label>
                  </div>
                  <p className="category-description">
                    Web sitesinin temel işlevleri için gerekli çerezler. 
                    Güvenlik, oturum yönetimi ve temel site işlevleri.
                  </p>
                </div>

                <div className="cookie-category">
                  <div className="category-header">
                    <input 
                      type="checkbox" 
                      id="analytics" 
                      defaultChecked 
                      className="category-checkbox"
                    />
                    <label htmlFor="analytics" className="category-label">
                      <span className="category-name">Analitik Çerezler</span>
                      <span className="category-status optional">Opsiyonel</span>
                    </label>
                  </div>
                  <p className="category-description">
                    Site kullanımını analiz etmek ve performansı iyileştirmek için 
                    Google Analytics gibi araçlar kullanılır.
                  </p>
                </div>

                <div className="cookie-category">
                  <div className="category-header">
                    <input 
                      type="checkbox" 
                      id="marketing" 
                      defaultChecked 
                      className="category-checkbox"
                    />
                    <label htmlFor="marketing" className="category-label">
                      <span className="category-name">Pazarlama Çerezler</span>
                      <span className="category-status optional">Opsiyonel</span>
                    </label>
                  </div>
                  <p className="category-description">
                    Size özel reklamlar göstermek ve pazarlama kampanyalarının 
                    etkinliğini ölçmek için kullanılır.
                  </p>
                </div>

                <div className="cookie-category">
                  <div className="category-header">
                    <input 
                      type="checkbox" 
                      id="preferences" 
                      defaultChecked 
                      className="category-checkbox"
                    />
                    <label htmlFor="preferences" className="category-label">
                      <span className="category-name">Tercih Çerezleri</span>
                      <span className="category-status optional">Opsiyonel</span>
                    </label>
                  </div>
                  <p className="category-description">
                    Dil tercihi, tema seçimi gibi kişisel tercihlerinizi 
                    hatırlamak için kullanılır.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Butonlar */}
          <div className="cookie-actions">
            <button 
              className="cookie-btn cookie-btn-reject"
              onClick={handleAcceptNecessary}
            >
              Sadece Gerekli
            </button>
            <button 
              className="cookie-btn cookie-btn-accept"
              onClick={handleAcceptAll}
            >
              Tümünü Kabul Et
            </button>
          </div>
        </div>

        {/* Kapatma Butonu */}
        <button 
          className="cookie-close-btn"
          onClick={closeBanner}
          aria-label="Çerez bannerını kapat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 