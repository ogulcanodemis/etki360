import React from 'react';
import { Link } from 'react-router-dom';
import '../Services.css';

const GraphicDesign = () => {
  return (
    <div className="services-main-page">
      <section className="services-main-hero">
        <div className="container">
          <div className="services-main-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> / <span>Grafik Tasarım</span>
          </div>
          <div className="services-main-hero-content">
            <h1 className="services-main-hero-title">
              Profesyonel <span className="services-main-highlight">Grafik Tasarım</span> Hizmetleri
            </h1>
            <p className="services-main-hero-description">
              Markanızı yansıtan, hedef kitlenizi etkileyen ve akılda kalıcı grafik tasarım çözümleri.
            </p>
          </div>
        </div>
      </section>
      
      <section className="services-main-section">
        <div className="container">
          <h2 className="services-main-section-title">Yakında Burada Olacak</h2>
          <p>Grafik Tasarım hizmetlerimizle ilgili detaylı bilgileri çok yakında buradan edinebilirsiniz.</p>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign; 