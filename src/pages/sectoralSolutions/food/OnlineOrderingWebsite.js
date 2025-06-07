import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './OnlineOrderingWebsite.css';

const OnlineOrderingWebsite = () => {
  return (
    <div className="online-ordering-website-page">
      <Helmet>
        <title>Online Yemek Siparişi Web Sitesi | Kendi Sipariş Sisteminizi Kurun</title>
        <meta name="description" content="Restoran ve kafeler için komisyonsuz, kendi markanıza özel online yemek siparişi ve paket servis web sitesi çözümleri." />
        <meta name="keywords" content="online yemek siparişi, paket servis sitesi, restorana özel sipariş sistemi, komisyonsuz paket servis, online sipariş altyapısı" />
      </Helmet>

      <section className="online-ordering-hero">
        <div className="container">
          <div className="online-ordering-breadcrumb">
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
            <span className="current">Online Yemek Siparişi Web Sitesi</span>
          </div>

          <div className="online-ordering-hero-content">
            <div className="online-ordering-hero-text">
              <h1 className="online-ordering-hero-title">
                <strong>Siparişleriniz Aracısız</strong> <span style={{color: "#D32F2F", fontWeight: "bold"}}><strong>Size Ulaşsın</strong></span>
              </h1>
              <p className="online-ordering-hero-description">
                <strong>Kendi online sipariş sisteminizle</strong> komisyon maliyetlerinden kurtulun, <em>müşteri verilerinize</em> sahip çıkın. <strong>Daha fazla kâr</strong> ve <em>marka sadakati</em> elde edin.
              </p>
              <div className="online-ordering-hero-buttons">
                <Link to="/iletisim" className="btn-primary">Ücretsiz Teklif Alın</Link>
                <Link to="/portfoy/online-siparis" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="online-ordering-content">
        <section className="online-ordering-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Neden Kendi</strong> Online Sipariş Siteniz Olmalı?</h2>
            </div>
            <p>
              Büyük yemek portallarına ödenen yüksek komisyonlar ve marka kontrolünün kaybı, birçok işletme için büyük bir sorundur. Kendi online sipariş sitenizle bu sorunları ortadan kaldırabilirsiniz.
            </p>
            <ul className="online-ordering-features-list">
              <li><strong>Sıfır Komisyon:</strong> Kazancınızın tamamı size kalır, aracılara pay vermek zorunda kalmazsınız.</li>
              <li><strong>Müşteri Verisi Sizin Olur:</strong> Müşterilerinizin iletişim bilgilerini ve sipariş alışkanlıklarını öğrenerek pazarlama kampanyaları düzenleyebilirsiniz.</li>
              <li><strong>Marka Sadakati Oluşturun:</strong> Müşterileriniz doğrudan sizinle iletişim kurar, bu da marka bağını güçlendirir.</li>
              <li><strong>Esnek Menü ve Kampanya Yönetimi:</strong> Menünüzü, fiyatlarınızı ve kampanyalarınızı anında, hiçbir kısıtlama olmadan yönetin.</li>
              <li><strong>Rekabette Öne Çıkın:</strong> Kendi dijital platformuna sahip bir işletme olarak daha profesyonel ve güvenilir bir imaj çizin.</li>
            </ul>
          </div>
        </section>

        <section className="online-ordering-solutions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title"><strong>Gelişmiş Online Sipariş</strong> Platformu Özellikleri</h2>
            </div>
            <p>
              İşletmenizin tüm ihtiyaçlarını karşılayacak, güçlü ve kullanımı kolay bir altyapı sunuyoruz.
            </p>
            <div className="online-ordering-solutions-grid">
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Kullanıcı Dostu Arayüz</strong></h3>
                <p className="online-ordering-solution-description">Müşterilerinizin kolayca menüyü inceleyip saniyeler içinde sipariş vermesini sağlayan modern tasarım.</p>
              </div>
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Güvenli Online Ödeme</strong></h3>
                <p className="online-ordering-solution-description">Kredi kartı ve diğer online ödeme yöntemleriyle entegre, güvenli altyapı.</p>
              </div>
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Anlık Sipariş Bildirimi</strong></h3>
                <p className="online-ordering-solution-description">Gelen siparişleri anında mutfak ekranında, panelde veya yazıcıda görün.</p>
              </div>
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Detaylı Raporlama</strong></h3>
                <p className="online-ordering-solution-description">Satış, ciro ve en çok satan ürünler gibi verileri analiz ederek işinizi geliştirin.</p>
              </div>
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Kurye Yönetimi ve Takip</strong></h3>
                <p className="online-ordering-solution-description">Kendi kurye ağınızı yönetmek için basit ve etkili araçlar.</p>
              </div>
              <div className="online-ordering-solution-card">
                <div className="online-ordering-solution-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <h3 className="online-ordering-solution-title"><strong>Market Ürünleri Satışı</strong></h3>
                <p className="online-ordering-solution-description">Sadece yemek değil, anlaşmalı veya kendi markanız olan market ürünlerini de satma imkanı.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="online-ordering-cta">
          <div className="container">
            <div className="online-ordering-cta-content">
              <h2 className="online-ordering-cta-title">
                <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
              </h2>
              <p className="online-ordering-cta-description">
                <strong>Kendi sipariş sisteminizi bugün kurun!</strong> Aracılara veda edin, <em>kazancınızı</em> ve <strong>müşteri sadakatini</strong> artırın. <strong>Komisyonsuz</strong> online sipariş platformunuz ile <em>doğrudan satış</em> yapın ve <strong>kârlılığınızı</strong> maksimize edin.
              </p>
              <div className="online-ordering-cta-buttons">
                <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
                <Link to="/ornekler/online-siparis" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
              </div>
              <p className="online-ordering-cta-note">
                * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OnlineOrderingWebsite;