import React from 'react';
import { Link } from 'react-router-dom';
import '../Services.css';

const MobileApp = () => {
  return (
    <div className="services-main-page">
      <section className="services-main-hero">
        <div className="container">
          <div className="services-main-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>Mobil Uygulama</span>
          </div>
          <div className="services-main-hero-content">
            <h1 className="services-main-hero-title">
              Profesyonel <span className="services-main-highlight">Mobil Uygulama</span> Geliştirme
            </h1>
            <p className="services-main-hero-description">
              İşletmeniz için kullanıcı dostu, performanslı ve özelleştirilebilir mobil uygulamalar geliştiriyoruz.
            </p>
          </div>
        </div>
      </section>
      
      <section className="services-main-section">
        <div className="container">
          <h2 className="services-main-section-title">Yakında Burada Olacak</h2>
          <p>Mobil Uygulama hizmetlerimizle ilgili detaylı bilgileri çok yakında buradan edinebilirsiniz.</p>
        </div>
      </section>
    </div>
  );
};

export default MobileApp; 