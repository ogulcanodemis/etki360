import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CateringWebsite.css';

const CateringWebsite = () => {
  return (
    <div className="catering-website-page">
      <Helmet>
        <title>Catering Firması Web Sitesi | Etkinlik ve Organizasyon Çözümleri</title>
        <meta name="description" content="Catering firmanız için kurumsal, şık ve fonksiyonel web siteleri. Menülerinizi sergileyin, online talep alın ve organizasyonlarınızı profesyonelce yönetin." />
        <meta name="keywords" content="catering web sitesi, catering firması, etkinlik yemeği, organizasyon hizmetleri, kurumsal catering, online talep formu" />
      </Helmet>

      <section className="catering-hero">
        <div className="container">
          <div className="catering-breadcrumb">
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
            <span className="current">Catering Web Sitesi</span>
          </div>

          <div className="catering-hero-content">
            <div className="catering-hero-text">
              <h1 className="catering-hero-title">
                <strong>Lezzeti ve Zarafeti</strong> <span style={{color: "#b35c1b", fontWeight: "bold"}}><strong>Bir Araya Getiriyoruz</strong></span>
              </h1>
              <p className="catering-hero-description">
                <strong>Özel günleriniz ve kurumsal etkinlikleriniz için</strong> profesyonel <em>catering web çözümleri</em>. <strong>Menülerinizi sergileyerek</strong>, <em>online teklif formlarıyla</em> ve <strong>etkinlik portföyünüzü</strong> sunarak daha fazla <em>talep alın</em>.
              </p>
              <div className="catering-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy/catering" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="catering-content">
        <section className="catering-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Catering Firmanız Neden</strong> Profesyonel Bir Web Sitesine İhtiyaç Duyar?</h2>
            </div>
            <p>
              Catering hizmeti, güven ve profesyonellik üzerine kuruludur. Web siteniz, bu imajı potansiyel müşterilerinize yansıtan en önemli araçtır. Etkileyici bir online varlık ile;
            </p>
            <ul className="catering-features-list">
              <li><strong>Kurumsal Kimliğinizi Güçlendirirsiniz:</strong> Profesyonel tasarım, logonuz ve renklerinizle bütünleşik bir marka imajı sunar.</li>
              <li><strong>Menülerinizi Sergilersiniz:</strong> Düğün, davet, kokteyl ve kurumsal etkinlikler için hazırladığınız menüleri görselleriyle birlikte sunabilirsiniz.</li>
              <li><strong>Online Talep ve Teklif Formları:</strong> Müşterilerinizin etkinlik detaylarını (tarih, kişi sayısı, konsept) belirterek kolayca teklif almasını sağlayın.</li>
              <li><strong>Referanslarınızı ve Portfolyonuzu Gösterirsiniz:</strong> Daha önceki başarılı organizasyonlarınızdan fotoğraf ve videolarla güven kazanın.</li>
              <li><strong>Hedef Kitlenize Ulaşırsınız:</strong> "Kurumsal catering", "düğün yemeği" gibi aramalarda SEO ile üst sıralarda yer alın.</li>
            </ul>
          </div>
        </section>

        <section className="catering-solutions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Sunduğumuz</strong> Çözümler</h2>
            </div>
            <p>
              Operasyonel süreçlerinizi kolaylaştıran ve satışlarınızı artıran web siteleri geliştiriyoruz.
            </p>
            <div className="catering-solutions-grid">
              <div className="catering-solution-card">
                <div className="catering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="catering-solution-title"><strong>Şık ve Prestijli Tasarım</strong></h3>
                <p className="catering-solution-description">Hizmet kalitenizi yansıtan, zarif ve modern web arayüzleri.</p>
              </div>
              <div className="catering-solution-card">
                <div className="catering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
                <h3 className="catering-solution-title"><strong>Detaylı Menü Yönetimi</strong></h3>
                <p className="catering-solution-description">Farklı konseptler için (vejetaryen, vegan, kokteyl vb.) özel menüler oluşturma ve yönetme imkanı.</p>
              </div>
              <div className="catering-solution-card">
                <div className="catering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="catering-solution-title"><strong>Etkinlik Takvimi ve Müsaitlik</strong></h3>
                <p className="catering-solution-description">Müşterilerinizin yoğun dönemleri görmesini ve planlama yapmasını kolaylaştıran takvim modülü.</p>
              </div>
              <div className="catering-solution-card">
                <div className="catering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h3 className="catering-solution-title"><strong>Online Ödeme Altyapısı</strong></h3>
                <p className="catering-solution-description">Kapora veya toplam tutar için güvenli online ödeme sistemleri entegrasyonu.</p>
              </div>
              <div className="catering-solution-card">
                <div className="catering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <h3 className="catering-solution-title"><strong>Blog ve İçerik Yönetimi</strong></h3>
                <p className="catering-solution-description">Gastronomi trendleri, etkinlik planlama ipuçları gibi içeriklerle sitenizi güncel tutun ve daha fazla ziyaretçi çekin.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="catering-cta">
          <div className="container">
            <div className="catering-cta-content">
              <h2 className="catering-cta-title">
                <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
              </h2>
              <p className="catering-cta-description">
                <strong>Organizasyonlarınızı unutulmaz kılın</strong> ve potansiyel müşterilerinize <em>profesyonel bir izlenim</em> bırakın. <strong>Catering firmanıza özel</strong>, modern ve işlevsel bir <em>web sitesi</em> ile <strong>lezzet ve zarafeti dijital dünyada</strong> buluşturun. <strong>Ücretsiz danışmanlık</strong> almak için hemen <em>iletişime geçin</em>.
              </p>
              <div className="catering-cta-buttons">
                <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
                <Link to="/ornekler/catering" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
              <p className="catering-cta-note">
                * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CateringWebsite; 