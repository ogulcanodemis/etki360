import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CleaningCompany.css';

const CleaningCompany = () => {
  // SEO için Schema.org Markup - Service Schema
  const cleaningServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Temizlik Şirketi Web Sitesi Tasarımı",
    "description": "Temizlik şirketleri için özel tasarlanmış, randevu sistemi entegreli profesyonel web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "6500", "priceCurrency": "TRY" }
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Temizlik şirketi web sitesinde hangi özellikler olmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temizlik şirketi web sitesinde sunulan hizmetlerin detaylı açıklamaları, fiyat teklifi formu, müşteri yorumları, hizmet bölgeleri haritası, ekip tanıtımı, blog/içerik bölümü ve online randevu sistemi gibi özellikler bulunmalıdır. Ayrıca mobil uyumlu olması ve hızlı yüklenmesi de önemlidir."
        }
      },
      {
        "@type": "Question",
        "name": "Temizlik şirketleri için web sitesi neden önemlidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web sitesi, temizlik şirketleri için yeni müşterilere ulaşmanın en etkili yollarından biridir. İnsanlar genellikle temizlik hizmeti aramak için Google'ı kullanır ve SEO uyumlu bir web sitesi ile arama sonuçlarında üst sıralarda çıkabilirsiniz. Ayrıca web siteniz profesyonelliğinizi gösterir, güven oluşturur ve 7/24 bilgi ve randevu imkanı sunar."
        }
      },
      {
        "@type": "Question",
        "name": "Temizlik şirketi web sitesi ne kadar sürede hazırlanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temizlik şirketi web sitesi, seçilen pakete bağlı olarak genellikle 5-15 iş günü içerisinde tamamlanır. Özel istekler ve entegrasyonlar süreyi uzatabilir."
        }
      }
    ]
  };

  const features = [
    { title: "Detaylı Hizmet Sayfaları", description: "Ev temizliği, ofis temizliği, inşaat sonrası temizlik gibi tüm hizmetleriniz için detaylı bilgi sayfaları.", icon: "M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9 1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V9h2z" },
    { title: "Online Randevu Sistemi", description: "Müşterilerin kolayca randevu alabileceği ve hizmet talebinde bulunabileceği entegre sistem.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" },
    { title: "Fiyat Teklifi Formu", description: "Potansiyel müşterilerin hizmet detaylarını belirterek hızlıca fiyat teklifi alabileceği form.", icon: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" },
    { title: "Hizmet Bölgeleri Haritası", description: "Hizmet verdiğiniz bölgeleri gösteren interaktif harita entegrasyonu.", icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }
  ];

  const benefits = [
    { title: "Daha Fazla Müşteri", description: "Google'da üst sıralarda çıkarak daha fazla potansiyel müşteriye ulaşın ve işletmenizi büyütün." },
    { title: "Profesyonel İmaj", description: "Kaliteli bir web sitesi ile profesyonelliğinizi gösterin ve müşterilerin güvenini kazanın." },
    { title: "Otomatik Randevu Sistemi", description: "Telefon trafiğini azaltarak, randevuları otomatik sistem üzerinden yönetin ve zaman kazanın." },
    { title: "Hizmet Alanı Genişletme", description: "Web siteniz sayesinde yeni bölgelerde de bilinirliğinizi artırın ve hizmet alanınızı genişletin." }
  ];
  
  return (
    <div className="sectoral-page cleaning-company-page">
      {/* SEO Meta Tags ve Schema */}
      <Helmet>
        {/* Title Tag - En önemli SEO faktörü */}
        <title>Temizlik Şirketi Web Sitesi Tasarımı | Profesyonel Randevu Sistemi | etki360</title>
        
        {/* Meta Description */}
        <meta 
          name="description" 
          content="Temizlik şirketleri için özel tasarlanmış, randevu sistemi entegreli profesyonel web sitesi çözümleri. Müşteri odaklı tasarım, SEO uyumlu ve mobil uyumlu temizlik firması web siteleri. 6.500₺'den başlayan fiyatlarla." 
        />
        
        {/* Keywords */}
        <meta 
          name="keywords" 
          content="temizlik şirketi web sitesi, temizlik firması web sitesi, ev temizliği web sitesi, ofis temizliği web sitesi, randevu sistemi, temizlik web sitesi tasarımı, temizlik firması seo" 
        />
        
        <script type="application/ld+json">{JSON.stringify(cleaningServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hizmet/temizlik-sirketi" />
      </Helmet>

      <section className="cleaning-hero">
        <div className="container">
          <div className="cleaning-breadcrumb">
            <Link to="/">Ana Sayfa</Link> / <Link to="/sektorel-cozumler">Sektörel Çözümler</Link> / <Link to="/sektorel-cozumler/hizmet">Hizmet</Link> / <span>Temizlik Şirketi Web Sitesi</span>
          </div>
          <div className="cleaning-hero-content">
            <div className="cleaning-hero-text">
              <h1 className="sectoral-hero-title">
                <strong>Temizlik Şirketi Web Sitesi</strong> - <span style={{color: "#ffc107", fontWeight: "bold"}}>Online Randevu Sistemli</span> Profesyonel Web Sitesi
              </h1>
              <p className="sectoral-hero-description">
                <strong>Ev, ofis ve endüstriyel temizlik</strong> hizmetleri veren firmanız için <em>online randevu sistemi</em>, 
                <strong>fiyat teklifi formu</strong> ve <strong>hizmet bölgeleri haritası</strong> içeren <strong>profesyonel temizlik şirketi web sitesi</strong> çözümleri.
                <strong>Uygun temizlik web sitesi</strong> fiyatlarıyla <strong>6.500₺</strong>'den başlayan paketler.
              </p>
              <div className="sectoral-hero-actions">
                <a href="#pricing" className="primary-button">Fiyat Teklifi Al</a>
                <a href="#features" className="secondary-button">Özellikler</a>
              </div>
            </div>
            <div className="cleaning-hero-visual">
              <div className="cleaning-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-nav"></div>
                  <div className="mockup-hero-img"></div>
                  <div className="mockup-booking">
                    <div className="mockup-calendar"></div>
                    <div className="mockup-form"></div>
                  </div>
                  <div className="mockup-services">
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                    <div className="mockup-service"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sectoral-overview">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Temizlik Şirketi Web Sitesi Neden Önemli?</h2>
            <p className="sectoral-section-subtitle">
              Araştırmalar gösteriyor ki, <strong>temizlik hizmeti arayan müşterilerin %78'i</strong> önce internette <strong>profesyonel bir temizlik şirketi</strong> aramaktadır. <strong>Randevu sistemli web sitesi</strong> ile <em>müşterilerinize kolay erişim sağlayın</em>.
            </p>
          </div>

          <div className="sectoral-overview-grid">
            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3 className="sectoral-card-title">Online Randevu Sistemi</h3>
              <p className="sectoral-card-text">
                Müşterileriniz <strong>7/24 online randevu</strong> alabilir, <em>iş yükünüzü</em> dengeli şekilde planlayabilirsiniz. <strong>Temizlik şirketi web siteniz</strong> ile operasyonel verimliliği artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="sectoral-card-title">Hizmet Bölgeleri Haritası</h3>
              <p className="sectoral-card-text">
                <strong>Hizmet verdiğiniz bölgeleri</strong> interaktif harita üzerinde göstererek <em>müşterilerinize net bilgi verin</em>. <strong>Google Haritalar entegrasyonu</strong> ile müşterilerinizin size kolayca ulaşmasını sağlayın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="sectoral-card-title">Fiyat Teklifi Formu</h3>
              <p className="sectoral-card-text">
                Müşterilerinizin <strong>ev/ofis büyüklüğü, hizmet tipi</strong> ve diğer detayları belirterek <em>anında fiyat teklifi</em> almasını sağlayarak müşteri memnuniyetini artırın.
              </p>
            </div>

            <div className="sectoral-overview-card">
              <div className="sectoral-card-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="sectoral-card-title">Yerel SEO Avantajı</h3>
              <p className="sectoral-card-text">
                <strong>"Yakınımda temizlik şirketi"</strong> araması yapan potansiyel müşterilerin karşısına çıkarak, <em>bölgenizdeki rakiplerinizden öne geçin</em>. <strong>Temizlik şirketi web sitesi SEO</strong> ile yeni müşteriler kazanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="sectoral-features">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Temizlik Şirketi Web Sitesi Özellikleri</h2>
            <p className="sectoral-section-subtitle">
              <strong>Temizlik hizmeti veren firmanızın</strong> ihtiyaçlarına özel, <em>müşteri odaklı</em> <strong>temizlik şirketi web sitesi çözümleri</strong> ile hizmet kalitenizi artırın ve <strong>daha fazla müşteriye</strong> ulaşın
            </p>
          </div>

          <div className="sectoral-features-grid">
            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-list-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Detaylı Hizmet Sayfaları</h3>
                <p className="sectoral-feature-text">
                  Ev temizliği, ofis temizliği, inşaat sonrası temizlik gibi tüm hizmetleriniz için detaylı bilgi sayfaları. Müşterileriniz hizmetleriniz hakkında kapsamlı bilgi edinebilir.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Online Randevu Sistemi</h3>
                <p className="sectoral-feature-text">
                  Müşterilerin kolayca randevu alabileceği ve hizmet talebinde bulunabileceği entegre sistem. Müsaitlik durumunuzu otomatik kontrol eden akıllı takvim entegrasyonu.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Fiyat Teklifi Formu</h3>
                <p className="sectoral-feature-text">
                  Potansiyel müşterilerin hizmet detaylarını belirterek hızlıca fiyat teklifi alabileceği form. Alan hesaplama, oda sayısı ve hizmet tipine göre otomatik fiyat hesaplaması.
                </p>
              </div>
            </div>

            <div className="sectoral-feature-card">
              <div className="sectoral-feature-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="sectoral-feature-content">
                <h3 className="sectoral-feature-title">Hizmet Bölgeleri Haritası</h3>
                <p className="sectoral-feature-text">
                  Hizmet verdiğiniz bölgeleri gösteren interaktif harita entegrasyonu. Müşteriler posta kodlarını girerek hizmet alanınızda olup olmadıklarını kolayca kontrol edebilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="cleaning-pricing">
        <div className="container">
          <div className="cleaning-section-header">
            <h2 className="cleaning-section-title">Temizlik Şirketi Web Sitesi Paketleri</h2>
            <p className="cleaning-section-subtitle">
              İhtiyaçlarınıza ve bütçenize uygun <strong>temizlik şirketi web sitesi çözümleri</strong>
            </p>
          </div>

          <div className="cleaning-pricing-grid">
            <div className="cleaning-pricing-card">
              <div className="cleaning-pricing-header">
                <h3 className="cleaning-pricing-title">Profesyonel Paket</h3>
                <div className="cleaning-pricing-price">
                  <span className="cleaning-price-amount">6.500 ₺</span>
                  <span className="cleaning-price-period">+ KDV</span>
                </div>
              </div>
              <div className="cleaning-pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Responsive Tasarım</li>
                  <li><i className="fas fa-check"></i> 5-7 Adet Sayfa</li>
                  <li><i className="fas fa-check"></i> <strong>Online Randevu Sistemi</strong></li>
                  <li><i className="fas fa-check"></i> Fiyat Teklifi Formu</li>
                  <li><i className="fas fa-check"></i> Hizmet Bölgeleri Haritası</li>
                  <li><i className="fas fa-check"></i> <strong>SEO Temel Optimizasyon</strong></li>
                  <li><i className="fas fa-check"></i> Mobil Uyumlu Tasarım</li>
                  <li><i className="fas fa-check"></i> WhatsApp Entegrasyonu</li>
                  <li><i className="fas fa-check"></i> 1 Yıl Ücretsiz Destek</li>
                  <li className="cleaning-pricing-disabled"><i className="fas fa-times"></i> Müşteri Yönetim Paneli</li>
                  <li className="cleaning-pricing-disabled"><i className="fas fa-times"></i> Özel CRM Entegrasyonu</li>
                  <li className="cleaning-pricing-disabled"><i className="fas fa-times"></i> Google Ads Yönetimi</li>
                </ul>
              </div>
              <div className="cleaning-pricing-footer">
                <Link to="/iletisim" className="cleaning-pricing-button">Hemen Başlayalım</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cleaning-faq">
        <div className="container">
          <div className="sectoral-section-header">
            <h2 className="sectoral-section-title">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="cleaning-faq-grid">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="cleaning-faq-item">
                <h3 className="cleaning-faq-question">{faq.name}</h3>
                <p className="cleaning-faq-answer">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cleaning-cta">
        <div className="container">
          <div className="cleaning-cta-content">
            <h2 className="cleaning-cta-title">
              Temizlik Firmanız İçin <span style={{color: "#ffffff", fontWeight: "bold"}}>Online Randevu Sistemli</span> Web Sitesi Oluşturalım
            </h2>
            <p className="cleaning-cta-text">
              <strong>Profesyonel temizlik hizmeti veren firmanız</strong> için müşterilerinizin kolayca randevu alabileceği, <em>hizmet bölgelerinizi gösteren</em> ve <strong>SEO dostu</strong> bir <strong>temizlik şirketi web sitesi</strong> için hemen iletişime geçin.
            </p>
            <div className="cleaning-cta-buttons">
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

export default CleaningCompany; 