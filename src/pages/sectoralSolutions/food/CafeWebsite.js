import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CafeWebsite.css';

const CafeWebsite = () => {
  return (
    <div className="cafe-website-page">
      <Helmet>
        <title>Kafe ve Pastane Web Sitesi | Online Sipariş ve Rezervasyon</title>
        <meta name="description" content="Kafe ve pastaneniz için özel tasarım, kullanıcı dostu web siteleri. Menünüzü online tanıtın, kampanya duyuruları yapın ve online sipariş alın." />
        <meta name="keywords" content="kafe web sitesi, pastane web sitesi, online pasta siparişi, kahve dükkanı sitesi, kafe menü, pastane ürünleri" />
      </Helmet>

      <section className="cafe-hero">
        <div className="container">
          <div className="cafe-breadcrumb">
            <Link to="/">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Ana Sayfa
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              Sektörel Çözümler
            </Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/sektorel-cozumler/yiyecek">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Yiyecek & İçecek
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Kafe & Pastane Web Sitesi</span>
          </div>

          <div className="cafe-hero-content">
            <div className="cafe-hero-text">
              <h1 className="cafe-hero-title">
                <strong>Sıcak Bir Merhaba:</strong> <span style={{color: "#6f4e37", fontWeight: "bold"}}><strong>Kafe & Pastane</strong></span> <strong>Web Çözümleri</strong>
              </h1>
              <p className="cafe-hero-description">
                <strong>Müşterilerinizle aranızdaki bağı güçlendiren</strong>, tatlı bir <em>dijital deneyim</em> sunun. <strong>Online menü</strong>, <em>görsel galeri</em> ve <strong>sipariş sistemleri</strong> ile işletmenizin dijital yüzünü oluşturun.
              </p>
              <div className="cafe-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy/kafe" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="cafe-content">
        <section className="cafe-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Kafe ve Pastaneler İçin</strong> Web Sitesi Neden Önemli?</h2>
            </div>
            <p>
              Lezzetli ürünleriniz ve sıcak atmosferiniz artık dijital dünyada da yerini almalı. Profesyonel bir web sitesi, potansiyel müşterilerin sizi keşfetmesini, menünüzü incelemesini ve müdaviminiz olmasını sağlar.
            </p>
            <ul className="cafe-features-list">
              <li><strong>Online Menü:</strong> Ürünlerinizi ve fiyatlarınızı güncel bir şekilde sergileyin.</li>
              <li><strong>Kampanya ve Duyurular:</strong> Yeni ürünlerinizi, indirimlerinizi ve özel gün etkinliklerinizi kolayca duyurun.</li>
              <li><strong>Görsel Galeri:</strong> Mekanınızın ve ürünlerinizin iştah açıcı fotoğraflarıyla müşterilerinizi etkileyin.</li>
              <li><strong>Online Sipariş ve Rezervasyon:</strong> Müşterilerinize kolayca sipariş verme veya masa ayırtma imkanı sunun.</li>
              <li><strong>Yerel SEO:</strong> Çevrenizdeki potansiyel müşterilerin sizi Google'da kolayca bulmasını sağlayın.</li>
            </ul>
          </div>
        </section>

        <section className="cafe-solutions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Size Özel</strong> Çözümlerimiz</h2>
            </div>
            <p>
              Her kafe ve pastanenin ruhu farklıdır. Bu ruha uygun, estetik ve işlevsel web siteleri tasarlıyoruz.
            </p>
            <div className="cafe-solutions-grid">
              <div className="cafe-solution-card">
                <div className="cafe-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="cafe-solution-title"><strong>Estetik ve Sıcak Tasarım</strong></h3>
                <p className="cafe-solution-description">Marka kimliğinizi yansıtan, samimi ve davetkar web arayüzleri.</p>
              </div>
              <div className="cafe-solution-card">
                <div className="cafe-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className="cafe-solution-title"><strong>Yönetilebilir Menü</strong></h3>
                <p className="cafe-solution-description">Ürünlerinizi, fiyatlarınızı ve görsellerinizi kolayca ekleyip çıkarabileceğiniz yönetim paneli.</p>
              </div>
              <div className="cafe-solution-card">
                <div className="cafe-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3"></path>
                    <path d="M13 12H3"></path>
                    <path d="M13 12l-4-4"></path>
                    <path d="M13 12l-4 4"></path>
                  </svg>
                </div>
                <h3 className="cafe-solution-title"><strong>Sadakat Programı Entegrasyonu</strong></h3>
                <p className="cafe-solution-description">Müşterilerinize özel puan veya indirim sistemleri kurma imkanı.</p>
              </div>
              <div className="cafe-solution-card">
                <div className="cafe-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3 className="cafe-solution-title"><strong>Sosyal Medya Entegrasyonu</strong></h3>
                <p className="cafe-solution-description">Instagram ve diğer sosyal medya hesaplarınızla tam uyumlu çalışma.</p>
              </div>
              <div className="cafe-solution-card">
                <div className="cafe-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="cafe-solution-title"><strong>Mobil Uyumlu Arayüz</strong></h3>
                <p className="cafe-solution-description">Tüm mobil cihazlarda kusursuz görünen, hızlı ve pratik kullanım.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cafe-cta">
          <div className="container">
            <div className="cafe-cta-content">
              <h2 className="cafe-cta-title">
                <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
              </h2>
              <p className="cafe-cta-description">
                <strong>İstanbul'daki kafeler</strong> ve <em>pastaneler</em> için <strong>profesyonel web sitesi</strong> çözümlerimiz ile potansiyel müşterilerinize <em>sıcak bir merhaba</em> deyin. <strong>Dijital varlığınızı</strong> oluşturmak, <strong>ürünlerinizi sergilemek</strong> ve <em>müşteri sadakatini</em> artırmak için hemen <strong>ücretsiz danışmanlık</strong> alın.
              </p>
              <div className="cafe-cta-buttons">
                <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
                <Link to="/ornekler/kafe" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
              <p className="cafe-cta-note">
                * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CafeWebsite; 