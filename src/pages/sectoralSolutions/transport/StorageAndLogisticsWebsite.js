import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './StorageAndLogisticsWebsite.css';

const StorageAndLogisticsWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Depolama ve Lojistik Web Sitesi Tasarımı",
    "description": "Depolama, antrepo ve lojistik hizmetleri sunan firmalar için envanter yönetimi, tesis tanıtımı ve online teklif sistemleri içeren web çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "12000", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Depolama ve lojistik firmaları için web sitesi neden önemlidir?",
        "acceptedAnswer": {
          "text": "Web siteniz, potansiyel kurumsal müşterilerinize tesislerinizin güvenliğini, kapasitesini ve teknolojik altyapısını göstermenin en etkili yoludur. Online envanter takibi ve teklif alma gibi özellikler, iş süreçlerinizi dijitalleştirerek verimliliği artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Bu tür bir web sitesinde hangi özellikler olmalı?",
        "acceptedAnswer": {
          "text": "Tesislerin ve depoların detaylı tanıtımı (güvenlik, iklimlendirme vb.), sunulan hizmetlerin (paketleme, dağıtım, envanter yönetimi) açıklanması, online teklif talep formu ve mevcut müşteriler için bir portal girişi kritik öneme sahiptir."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Depolama ve Lojistik Web Sitesi | Antrepo ve Depo Yönetim Sistemleri",
    "description": "Depolama, antrepo ve lojistik hizmetleri sunan firmalar için envanter yönetimi, tesis tanıtımı ve müşteri portalı içeren web çözümleri. 12.000₺'den başlayan fiyatlarla.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "etki360 - Dijital Pazarlama ve Web Tasarım Ajansı",
      "url": "https://www.etki360.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://etki360.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sektörel Çözümler",
          "item": "https://etki360.com/sektorel-cozumler"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Nakliyat",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Depolama ve Lojistik Web Sitesi",
          "item": "https://etki360.com/sektorel-cozumler/nakliyat/depolama-lojistik-web-sitesi"
        }
      ]
    }
  };

  const features = [
    { title: "Tesis ve Depo Tanıtımı", description: "Depolarınızın metrekaresi, güvenlik sistemleri, raf sistemleri ve diğer tüm özelliklerini detaylıca tanıtın.", icon: "warehouse" },
    { title: "Hizmet Kataloğu", description: "Paketleme, etiketleme, envanter yönetimi, soğuk zincir lojistiği gibi tüm hizmetlerinizi sergileyin.", icon: "boxes" },
    { title: "Online Teklif Formu", description: "Müşterilerinizin depolama ihtiyaçlarına göre (hacim, süre, hizmet türü) online teklif almasını sağlayın.", icon: "file-alt" },
    { title: "Müşteri Portalı Entegrasyonu", description: "Mevcut müşterilerinizin envanterlerini online olarak takip edebilecekleri sistemlere yönlendirme yapın.", icon: "user-shield" }
  ];

  const benefits = [
    { title: "Kurumsal Güven Oluşturma", description: "Tesislerinizin ve operasyonlarınızın profesyonelliğini sergileyerek büyük müşterilerin güvenini kazanın." },
    { title: "Teklif Sürecini Hızlandırma", description: "Online teklif sistemi ile satış sürecini otomatikleştirin ve hızlandırın." },
    { title: "Operasyonel Şeffaflık", description: "Müşterilerinize sunduğunuz dijital araçlarla operasyonel süreçlerde şeffaflık ve memnuniyet sağlayın." },
    { title: "Yeni Pazar Fırsatları", description: "E-ticaret lojistiği gibi büyüyen pazarlarda yer almak için dijital altyapınızı güçlendirin." }
  ];

  return (
    <div className="storage-logistics-page">
      <Helmet>
        <title>Depolama ve Lojistik Web Sitesi | Antrepo ve Depo Yönetim Sistemleri</title>
        <meta name="description" content="Depolama, antrepo ve e-ticaret lojistiği hizmetleri sunan firmalar için profesyonel web çözümleri. Tesis tanıtımı, envanter yönetimi ve online teklif." />
        <meta name="keywords" content="depolama web sitesi, lojistik web sitesi, antrepo hizmetleri, e-ticaret depolama, fulfillment merkezi" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/nakliyat/depolama-lojistik-web-sitesi" />
      </Helmet>

      <section className="storage-logistics-hero">
        <div className="container">
          <div className="storage-logistics-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/nakliyat">Nakliyat</Link> / <span>Depolama ve Lojistik Web Sitesi</span>
          </div>
          <div className="storage-logistics-hero-content">
            <div className="storage-logistics-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Depolama ve Lojistik</strong> Çözümleri İçin <span className="sectoral-highlight">Güçlü Dijital Altyapı</span>
              </h1>
              <p className="sectoral-hero-description">
                <strong>Depolama ve lojistik firmanız</strong> için <em>tesislerinizi</em>, <em>teknolojik altyapınızı</em> ve <strong>katma değerli hizmetlerinizi</strong> sergileyen, <strong>kurumsal müşterilerinize</strong> güven veren <strong>profesyonel web siteleri</strong>. <strong>12.000₺</strong>'den başlayan fiyatlarla.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="storage-logistics-hero-visual">
              <div className="storage-logistics-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-nav"></div>
                  <div className="mockup-warehouse-img"></div>
                  <div className="mockup-features">
                    <div className="mockup-feature"></div>
                    <div className="mockup-feature"></div>
                  </div>
                  <div className="mockup-map"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genel Bakış Bölümü */}
      <section className="storage-logistics-overview">
        <div className="container">
          <div className="storage-logistics-section-header">
            <h2 className="storage-logistics-section-title">Depolama ve Lojistik Web Sitesi <strong>Neden Önemli?</strong></h2>
            <p className="storage-logistics-section-subtitle">
              <strong>Lojistik sektöründe</strong> dijital dönüşümün bir parçası olarak <strong>%73'ü</strong> kurumsal müşterilerin <em>tedarikçi seçimlerinde</em> <strong>web sitesi kalitesini</strong> önemli bir faktör olarak görüyor.
            </p>
          </div>

          <div className="storage-logistics-overview-grid">
            <div className="storage-logistics-overview-card">
              <div className="storage-logistics-card-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <h3 className="storage-logistics-card-title">Tesislerinizi Tanıtın</h3>
              <p className="storage-logistics-card-text">
                <strong>Kurumsal müşterileriniz</strong> depolama tesislerinizin <em>güvenlik özelliklerini</em>, <em>metrekare bilgilerini</em> ve <strong>teknolojik altyapınızı</strong> görerek <strong>güven duyar</strong>. <strong>360° sanal tur</strong> ile tesislerinizi detaylıca sergileyebilirsiniz.
              </p>
            </div>

            <div className="storage-logistics-overview-card">
              <div className="storage-logistics-card-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3 className="storage-logistics-card-title">Hizmetlerinizi Listeleyin</h3>
              <p className="storage-logistics-card-text">
                <strong>Paketleme</strong>, <strong>etiketleme</strong>, <em>envanter yönetimi</em>, <em>cross-docking</em> ve <strong>diğer katma değerli hizmetlerinizi</strong> detaylı olarak açıklayarak <strong>rekabet avantajı</strong> kazanın.
              </p>
            </div>

            <div className="storage-logistics-overview-card">
              <div className="storage-logistics-card-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="storage-logistics-card-title">Online Teklif İsteyin</h3>
              <p className="storage-logistics-card-text">
                <strong>Hacim</strong>, <strong>palet sayısı</strong> ve <em>depolama süresi</em> gibi bilgileri içeren <strong>online teklif formları</strong> ile <strong>satış sürecinizi hızlandırın</strong>. Müşterilerinize <strong>anında cevap verme şansı</strong> yakalayın.
              </p>
            </div>

            <div className="storage-logistics-overview-card">
              <div className="storage-logistics-card-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 className="storage-logistics-card-title">Müşteri Portalı Sunun</h3>
              <p className="storage-logistics-card-text">
                <strong>Mevcut müşterilerinize</strong> <em>envanter takibi</em>, <em>stok raporları</em> ve <strong>sipariş oluşturma</strong> imkanı sağlayan <strong>müşteri portalı</strong> ile <strong>operasyonel verimliliği %35 artırın</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler Bölümü */}
      <section id="features" className="storage-logistics-features">
        <div className="container">
          <div className="storage-logistics-section-header">
            <h2 className="storage-logistics-section-title"><strong>Depolama ve Lojistik Web Sitesi</strong> Özellikleri</h2>
            <p className="storage-logistics-section-subtitle">
              <strong>Depolama ve lojistik firmanızın</strong> ihtiyaçlarına özel, <em>kurumsal müşterilere</em> yönelik ve <strong>dijital dönüşümünüzü</strong> destekleyen <strong>online teklif sistemli</strong> web sitesi çözümleri.
            </p>
          </div>

          <div className="storage-logistics-features-grid">
            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-warehouse"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Tesis ve Depo Tanıtım Sayfaları</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Metrekare bilgileri</strong>, <strong>raf sistemleri</strong>, <em>güvenlik önlemleri</em> ve <em>iklimlendirme koşulları</em> gibi detaylarla <strong>tesislerinizi kapsamlı tanıtın</strong>. <strong>360° sanal tur</strong> ve <strong>drone çekimleri</strong> ile etkileyici görsel içerikler sunun.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Detaylı Hizmet Kataloğu</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Paketleme</strong>, <strong>kitting</strong>, <em>etiketleme</em>, <em>envanter yönetimi</em>, <strong>cross-docking</strong>, <strong>soğuk zincir lojistiği</strong> gibi sunduğunuz tüm katma değerli hizmetleri detaylıca açıklayın.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Gelişmiş Online Teklif Formu</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Depolanacak ürün tipi</strong>, <strong>metrekare/palet ihtiyacı</strong>, <em>depolama süresi</em> ve <em>ek hizmet talepleri</em> içeren <strong>detaylı form</strong> ile potansiyel müşterilerinizden <strong>hızlı ve doğru teklif talebi</strong> alın.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Müşteri Portalı Entegrasyonu</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Mevcut müşterileriniz</strong> için <em>envanter takibi</em>, <em>sipariş oluşturma</em>, <strong>stok raporları</strong> ve <strong>faturalama bilgileri</strong> gibi içeriklere erişebilecekleri <strong>güvenli bir portal</strong> sunun.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-tablet-alt"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Mobil Uyumlu Tasarım</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Tüm cihazlarda kusursuz çalışan</strong> responsive tasarım sayesinde müşterilerinizin <em>hareket halindeyken</em> bile <strong>web sitenize erişebilmesini</strong> ve <strong>teklif talep edebilmesini</strong> sağlayın.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">E-Ticaret Entegrasyonu</h3>
                <p className="storage-logistics-feature-text">
                  <strong>E-ticaret fulfillment</strong> hizmetlerinizin tanıtımı ve <em>popüler e-ticaret platformlarıyla</em> <strong>entegrasyon imkanları</strong> hakkında bilgi sunarak <strong>e-ticaret lojistiğindeki</strong> uzmanlığınızı vurgulayın.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Vaka Çalışmaları</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Başarı hikayeleri</strong> ve <em>vaka çalışmaları</em> ile <strong>sunduğunuz çözümlerin</strong> müşterilerinize nasıl değer kattığını gösterin. <strong>İstatistikler</strong> ve <strong>referanslar</strong> ile güven oluşturun.
                </p>
              </div>
            </div>

            <div className="storage-logistics-feature-card">
              <div className="storage-logistics-feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="storage-logistics-feature-content">
                <h3 className="storage-logistics-feature-title">Sektörel Blog</h3>
                <p className="storage-logistics-feature-text">
                  <strong>Lojistik trendleri</strong>, <strong>depolama teknolojileri</strong> ve <em>tedarik zinciri yönetimi</em> gibi konularda içerikler yayınlayarak <strong>sektör liderliğinizi</strong> gösterin ve <strong>SEO değerinizi yükseltin</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar Bölümü */}
      <section className="storage-logistics-benefits">
        <div className="container">
          <div className="storage-logistics-section-header">
            <h2 className="storage-logistics-section-title">Web Sitenizin <strong>Lojistik Süreçlerinize</strong> Etkisi</h2>
            <p className="storage-logistics-section-subtitle">
              <strong>Profesyonel web sitesi</strong> ile <em>dijital dönüşümünüzü tamamlayın</em> ve <strong>müşteri kazanma süreçlerinizi</strong> hızlandırın. <strong>Operasyonel verimliliğinizi artırın</strong>.
            </p>
          </div>

          <div className="storage-logistics-benefits-grid">
            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">Kurumsal Güven Oluşturma</h3>
              <p className="storage-logistics-benefit-description">
                Profesyonel web siteniz ile tesislerinizin, teknolojik altyapınızın ve operasyonel yetkinliklerinizin görünürlüğünü artırarak kurumsal müşterilerin ve potansiyel iş ortaklarının güvenini kazanın.
              </p>
            </div>

            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">Teklif Sürecini Hızlandırma</h3>
              <p className="storage-logistics-benefit-description">
                Online teklif sistemi ile müşterilerinizin ihtiyaçlarını doğru şekilde anlayın, satış ekibinizin verimliliğini artırın ve müşteri kazanma sürecini %40'a kadar hızlandırın.
              </p>
            </div>

            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">Operasyonel Şeffaflık</h3>
              <p className="storage-logistics-benefit-description">
                Müşteri portalı sayesinde envanter görünürlüğü ve sipariş takibi imkanı sunarak operasyonel süreçlerde şeffaflık sağlayın, müşteri memnuniyetini artırın ve iletişim maliyetlerini azaltın.
              </p>
            </div>

            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">Yeni Pazar Fırsatları</h3>
              <p className="storage-logistics-benefit-description">
                E-ticaret lojistiği, soğuk zincir depolama gibi niş ve büyüyen pazarlarda yer almak için dijital altyapınızı güçlendirin, yeni müşteri segmentlerine erişin ve pazar payınızı genişletin.
              </p>
            </div>

            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">Rekabet Avantajı</h3>
              <p className="storage-logistics-benefit-description">
                Sektördeki rakiplerinizin çoğunun profesyonel bir web sitesi olmadığı düşünüldüğünde, dijital varlığınızla öne çıkın ve potansiyel müşterilerde profesyonellik algısı oluşturun.
              </p>
            </div>

            <div className="storage-logistics-benefit-card">
              <h3 className="storage-logistics-benefit-title">SEO ve Organik Trafik</h3>
              <p className="storage-logistics-benefit-description">
                Sektörel anahtar kelimelerle optimize edilmiş içerikler sayesinde Google'da üst sıralarda yer alın ve depolama çözümleri arayan potansiyel müşterilere organik olarak ulaşın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma Bölümü */}
      <section id="pricing" className="storage-logistics-pricing">
        <div className="container">
          <div className="storage-logistics-section-header">
            <h2 className="storage-logistics-section-title"><strong>Depolama ve Lojistik Web Sitesi</strong> Paketleri</h2>
            <p className="storage-logistics-section-subtitle">
              <strong>Depolama ve lojistik firmanız</strong> için <em>ihtiyaçlarınıza</em> ve <em>bütçenize</em> uygun <strong>özelleştirilebilir</strong> web sitesi çözümleri. <strong>12.000₺</strong>'den başlayan fiyatlarla.
            </p>
          </div>
          
          <div className="storage-logistics-pricing-grid">
            <div className="storage-logistics-pricing-card">
              <div className="storage-logistics-pricing-header">
                <h3 className="storage-logistics-pricing-title">Başlangıç Paketi</h3>
                <div className="storage-logistics-pricing-price">
                  <span className="storage-logistics-price-amount">12.000 ₺</span>
                  <span className="storage-logistics-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="storage-logistics-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Temel Teklif Formu</li>
                  <li><i className="fas fa-check"></i> Temel SEO Optimizasyonu</li>
                  <li><i className="fas fa-check"></i> Tesis Tanıtım Sayfaları</li>
                  <li><i className="fas fa-check"></i> İletişim Formu</li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> Admin Paneli</li>
                  <li className="storage-logistics-pricing-disabled"><i className="fas fa-times"></i> Müşteri Portalı</li>
                  <li className="storage-logistics-pricing-disabled"><i className="fas fa-times"></i> E-Ticaret Entegrasyonu</li>
                </ul>
              </div>
              <div className="storage-logistics-pricing-footer">
                <Link to="/iletisim" className="storage-logistics-pricing-button">Teklif Alın</Link>
              </div>
            </div>

            <div className="storage-logistics-pricing-card featured">
              <div className="storage-logistics-pricing-badge">Popüler</div>
              <div className="storage-logistics-pricing-header">
                <h3 className="storage-logistics-pricing-title">Profesyonel Paket</h3>
                <div className="storage-logistics-pricing-price">
                  <span className="storage-logistics-price-amount">24.000 ₺</span>
                  <span className="storage-logistics-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="storage-logistics-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 15 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Teklif Formu</li>
                  <li><i className="fas fa-check"></i> Kapsamlı SEO Çalışması</li>
                  <li><i className="fas fa-check"></i> 360° Tesis Sanal Turu</li>
                  <li><i className="fas fa-check"></i> Müşteri Portalı Girişi</li>
                  <li><i className="fas fa-check"></i> Vaka Çalışmaları Bölümü</li>
                  <li><i className="fas fa-check"></i> Google Analytics Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> Sektörel Blog</li>
                  <li className="storage-logistics-pricing-disabled"><i className="fas fa-times"></i> E-Ticaret Entegrasyonu</li>
                </ul>
              </div>
              <div className="storage-logistics-pricing-footer">
                <Link to="/iletisim" className="storage-logistics-pricing-button">Teklif Alın</Link>
              </div>
            </div>

            <div className="storage-logistics-pricing-card">
              <div className="storage-logistics-pricing-header">
                <h3 className="storage-logistics-pricing-title">Kurumsal Paket</h3>
                <div className="storage-logistics-pricing-price">
                  <span className="storage-logistics-price-amount">36.000 ₺</span>
                  <span className="storage-logistics-price-period">Tek Seferlik</span>
                </div>
              </div>
              <div className="storage-logistics-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Özel Tasarım</li>
                  <li><i className="fas fa-check"></i> Sınırsız Sayfa</li>
                  <li><i className="fas fa-check"></i> Otomatik Fiyat Hesaplama Aracı</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Müşteri Portalı</li>
                  <li><i className="fas fa-check"></i> E-Ticaret Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> API Entegrasyonları</li>
                  <li><i className="fas fa-check"></i> Gelişmiş Analitik Dashboard</li>
                  <li><i className="fas fa-check"></i> Özel Envanter Takip Sistemi</li>
                  <li><i className="fas fa-check"></i> Çok Dilli Site Desteği</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Bakım</li>
                </ul>
              </div>
              <div className="storage-logistics-pricing-footer">
                <Link to="/iletisim" className="storage-logistics-pricing-button">Teklif Alın</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="storage-logistics-faq">
        <div className="container">
          <div className="storage-logistics-section-header">
            <h2 className="storage-logistics-section-title"><strong>Depolama ve Lojistik Web Sitesi</strong> - Sık Sorulan Sorular</h2>
            <p className="storage-logistics-section-subtitle">
              <strong>Depolama ve lojistik web sitesi</strong> hakkında merak ettiğiniz tüm bilgiler, <em>müşteri portalı</em>, <em>envanter takibi</em> ve <em>e-ticaret entegrasyonu</em>
            </p>
          </div>
          
          <div className="storage-logistics-faq-grid">
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Depolama ve lojistik firmaları için web sitesi neden önemlidir?</h3>
              <p className="storage-logistics-faq-answer">
                Web siteniz, potansiyel kurumsal müşterilerinize tesislerinizin güvenliğini, kapasitesini ve teknolojik altyapısını göstermenin en etkili yoludur. Online envanter takibi ve teklif alma gibi özellikler, iş süreçlerinizi dijitalleştirerek verimliliği artırır. Kurumsal müşterilerin %73'ü tedarikçi seçiminde web sitesi kalitesini önemli bir faktör olarak değerlendiriyor.
              </p>
            </div>
            
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Bu tür bir web sitesinde hangi özellikler olmalı?</h3>
              <p className="storage-logistics-faq-answer">
                Tesislerin ve depoların detaylı tanıtımı (güvenlik, iklimlendirme vb.), sunulan hizmetlerin (paketleme, dağıtım, envanter yönetimi) açıklanması, online teklif talep formu ve mevcut müşteriler için bir portal girişi kritik öneme sahiptir. Ayrıca, 360° sanal tur, vaka çalışmaları ve mobil uyumluluk da profesyonel bir lojistik web sitesinin temel bileşenleridir.
              </p>
            </div>
            
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Müşteri portalı nasıl çalışır ve entegre edilebilir mi?</h3>
              <p className="storage-logistics-faq-answer">
                Müşteri portalı, mevcut müşterilerinizin güvenli giriş yaparak kendi envanterlerini görebildiği, sipariş oluşturabildiği ve raporları inceleyebildiği özel bir alandır. Web sitenize entegre edilebilir ve mevcut WMS (Depo Yönetim Sistemi) veya ERP sisteminizle bağlantılı çalışabilir. Profesyonel ve Kurumsal paketlerimizde bu özellik standart olarak sunulmaktadır.
              </p>
            </div>
            
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Web sitesi e-ticaret lojistiği için nasıl optimize edilebilir?</h3>
              <p className="storage-logistics-faq-answer">
                E-ticaret lojistiği için web siteniz; fulfillment hizmetleri, entegrasyon imkanları, iade yönetimi ve çok kanallı satış desteği gibi özel bölümler içermelidir. Kurumsal paketimizde sunduğumuz API entegrasyonları ile popüler e-ticaret platformlarına (WooCommerce, Shopify, Magento vb.) bağlantı sağlanabilir ve otomatik sipariş akışı kurulabilir.
              </p>
            </div>
            
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Bir depolama ve lojistik web sitesi ne kadar sürede hazır olur?</h3>
              <p className="storage-logistics-faq-answer">
                Başlangıç paketi için ortalama 2-3 hafta, Profesyonel paket için 4-6 hafta, Kurumsal paket için ise 8-10 haftalık bir geliştirme süreci öngörülmektedir. Kurumsal paketteki özel entegrasyonlar ve müşteri portalı geliştirmeleri nedeniyle süreç daha uzun olabilir. Acil ihtiyaçlar için hızlandırılmış proje takvimi oluşturulabilir.
              </p>
            </div>
            
            <div className="storage-logistics-faq-item">
              <h3 className="storage-logistics-faq-question">Web sitesi içerikleri konusunda destek sağlıyor musunuz?</h3>
              <p className="storage-logistics-faq-answer">
                Evet, tüm paketlerimizde profesyonel içerik yazımı hizmeti sunuyoruz. Lojistik sektöründe deneyimli içerik ekibimiz; tesis tanıtımları, hizmet açıklamaları, vaka çalışmaları ve blog yazıları için optimize edilmiş metinler hazırlar. Profesyonel fotoğraf çekimi ve 360° sanal tur hizmetleri için ek paketlerimiz bulunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="storage-logistics-cta">
        <div className="container">
          <div className="storage-logistics-cta-content">
            <h2 className="storage-logistics-cta-title">
              <strong>Depolama ve Lojistik</strong> Firmanız İçin <span className="sectoral-highlight">Dijital Dönüşüm</span> Zamanı
            </h2>
            <p className="storage-logistics-cta-text">
              <strong>12.000₺</strong>'den başlayan fiyatlarla <strong>kurumsal müşterilerinize</strong> güven veren, <em>operasyonel verimliliğinizi artıran</em> ve <strong>satış süreçlerinizi hızlandıran</strong> profesyonel web sitesi için hemen iletişime geçin.
            </p>
            <div className="storage-logistics-cta-buttons">
              <Link to="/iletisim" className="primary-button">Ücretsiz Keşif Toplantısı</Link>
              <a href="tel:+905444882303" className="secondary-button">
                <i className="fas fa-phone-alt"></i> Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorageAndLogisticsWebsite; 