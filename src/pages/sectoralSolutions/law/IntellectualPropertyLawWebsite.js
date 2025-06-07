import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './IntellectualPropertyLawWebsite.css';

const IntellectualPropertyLawWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fikri Mülkiyet Hukuku Web Sitesi Tasarımı",
    "description": "Marka, patent, telif hakları ve endüstriyel tasarım alanlarında uzmanlaşmış hukuk büroları için modern ve inovatif web çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "11000", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Fikri mülkiyet hukuku web sitesinde hangi içerikler bulunmalı?",
        "acceptedAnswer": {
          "text": "Fikri mülkiyet hukuku web siteleri; marka tescili, patent başvuru süreçleri, telif hakkı koruması ve tasarım tescili gibi hizmetlerin detaylı olarak açıklandığı sayfalar içermelidir. Ayrıca, güncel davalar, sektörel haberler ve başarılı vaka analizleri (müvekkil gizliliği korunarak) paylaşmak, potansiyel müvekkillerin ilgisini çeker ve uzmanlığınızı kanıtlar."
        }
      },
      {
        "@type": "Question",
        "name": "Bu alanda uluslararası müvekkillere ulaşmak için web sitesi nasıl olmalı?",
        "acceptedAnswer": {
          "text": "Uluslararası müvekkillere ulaşmak için web sitenizin en azından İngilizce dil seçeneği sunması kritik öneme sahiptir. Ayrıca, uluslararası tescil süreçleri (örneğin, WIPO) hakkında bilgilendirici içerikler ve uluslararası referanslar sunmak, global pazardaki güvenilirliğinizi artırır."
        }
      }
    ]
  };

  const features = [
    { title: "Uzmanlık Alanı Odaklı Tasarım", description: "Marka, patent, endüstriyel tasarım gibi alanları öne çıkaran modern ve inovatif arayüz.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" },
    { title: "Başvuru Süreç Akışları", description: "Marka ve patent başvuru süreçlerini adım adım gösteren bilgilendirici infografikler ve kılavuzlar.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Çok Dilli Destek", description: "Global müvekkil portföyü için İngilizce ve diğer dillerde içerik sunma altyapısı.", icon: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z" },
    { title: "Güvenli Belge Paylaşım Portalı", description: "Müvekkillerinizle hassas belgeleri güvenli bir şekilde paylaşmak için şifreli portal entegrasyonu.", icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }
  ];

  const benefits = [
    { title: "Yenilikçi İmaj", description: "Modern ve teknoloji odaklı bir web sitesi ile fikri mülkiyet alanındaki yenilikçi kimliğinizi yansıtın." },
    { title: "Nitelikli Müvekkil Edinimi", description: "Spesifik uzmanlık alanlarınızı detaylandırarak, doğrudan sizin hizmetlerinize ihtiyaç duyan şirketlere ve mucitlere ulaşın." },
    { title: "Uluslararası Pazarda Güven", description: "Çok dilli destek ve profesyonel sunum ile yabancı müvekkillerin ve ortakların güvenini kazanın." },
    { title: "Süreçlerde Verimlilik", description: "Başvuru kılavuzları ve online formlar ile müvekkillerinize ilk adımlarda yol göstererek danışmanlık süreçlerinizi daha verimli hale getirin." }
  ];
  
  return (
    <div className="intellectual-property-law-website-page">
      <Helmet>
        <title>Fikri Mülkiyet Hukuku Web Sitesi | Marka, Patent ve Telif Hakkı</title>
        <meta name="description" content="Marka, patent, telif hakları ve endüstriyel tasarım tescili konularında uzman hukuk büroları için inovatif web sitesi çözümleri." />
        <meta name="keywords" content="fikri mülkiyet hukuku, marka vekili, patent vekili, telif hakkı avukatı, tasarım tescili, wipo" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hukuk/fikri-mulkiyet-danismanligi" />
      </Helmet>

      <section className="intellectual-property-hero">
        <div className="container">
          <h1 className="section-title"><strong>Fikri Mülkiyetinizi</strong> <span className="highlight">Geleceğe Taşıyın</span></h1>
          <p className="section-description">
            İnovasyonu, markaları ve sanatı koruyan hukuk büroları için, uzmanlığınızı yansıtan modern ve dinamik web siteleri geliştiriyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#00e0c6', borderColor: '#00e0c6', color: '#4a00e0'}}>Başvuru Yap</Link>
            <Link to="/uzmanlik-alanlari" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Hizmetlerimiz</Link>
          </div>
        </div>
      </section>

      <section className="intellectual-property-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fikri Mülkiyet Odaklı Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(74, 0, 224, 0.1)', color: '#4a00e0'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intellectual-property-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizle Elde Edeceğiniz Rekabet Avantajları</h2>
          </div>
          <div className="beauty-salon-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="beauty-salon-benefit-card">
                <h3 className="beauty-salon-benefit-title"><strong>{benefit.title}</strong></h3>
                <p className="beauty-salon-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intellectual-property-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fikri Mülkiyet Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#ede7f6'}}>
                <h3 className="beauty-salon-pricing-title">İnovasyon Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#4a00e0'}}>11.000 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Modern ve Yaratıcı Arayüz</li>
                  <li>Marka/Patent Başvuru Akış Şemaları</li>
                  <li>Çok Dilli Altyapı Desteği</li>
                  <li>Blog/Haberler Bölümü</li>
                  <li>Güvenli Müvekkil Portalı</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#4a00e0'}}>Tescil Başlat</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intellectual-property-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="beauty-salon-faq-grid">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="beauty-salon-faq-item">
                <h3 className="beauty-salon-faq-question">{faq.name}</h3>
                <p className="beauty-salon-faq-answer">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intellectual-property-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">
            <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
          </h2>
          <p className="beauty-salon-cta-description">
            Hukuk büronuzun potansiyelini ortaya çıkaracak, müvekkillerinizi etkileyecek ve danışmanlık taleplerinizi artıracak profesyonel bir web sitesine hemen sahip olun. Ücretsiz danışmanlık görüşmesinde, büronuza özel web çözümlerini konuşalım.
          </p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary">ÖZEL TEKLİF ALIN</Link>
            <a href="tel:+905444882303" className="btn-outline">+90 (544) 488 23 03</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntellectualPropertyLawWebsite; 