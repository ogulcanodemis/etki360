import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CorporateLawWebsite.css';

const CorporateLawWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kurumsal Hukuk Danışmanlığı Web Sitesi",
    "description": "Şirketler hukuku, birleşme ve devralmalar, sözleşmeler hukuku gibi alanlarda hizmet veren hukuk büroları için profesyonel web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "12500", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kurumsal hukuk alanında bir web sitesi neden gereklidir?",
        "acceptedAnswer": {
          "text": "Profesyonel bir web sitesi, hukuk büronuzun kurumsal müşterilere hitap eden uzmanlığını, ciddiyetini ve deneyimini yansıtır. Potansiyel müvekkillerinize çalışma alanlarınızı ve ekibinizi tanıtarak güven oluşturmanın en etkili yoludur."
        }
      },
      {
        "@type": "Question",
        "name": "İyi bir kurumsal hukuk sitesinde hangi bölümler olmalıdır?",
        "acceptedAnswer": {
          "text": "Çalışma alanlarının (M&A, sözleşmeler, rekabet hukuku vb.) detaylıca açıklandığı sayfalar, uzman avukatların profilleri, güncel hukuki gelişmelerin ve makalelerin yer aldığı bir yayınlar/blog bölümü ve iletişim bilgileri olmazsa olmazdır."
        }
      }
    ]
  };

  const features = [
    { title: "Detaylı Çalışma Alanları", description: "Şirketler hukuku, birleşme ve devralmalar (M&A), sözleşmeler, rekabet hukuku gibi tüm uzmanlık alanlarınızı tanıtın.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Avukat ve Ortak Profilleri", description: "Ekibinizdeki avukatların ve ortakların akademik geçmişlerini, uzmanlıklarını ve deneyimlerini sergileyin.", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" },
    { title: "Yayınlar ve Makaleler", description: "Hukuki makaleler, bültenler ve analizler yayınlayarak büronuzun akademik gücünü ve düşünce liderliğini gösterin.", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" },
    { title: "Güvenli Müvekkil Alanı", description: "Müvekkillerinizin dava dosyalarına ve önemli belgelere güvenli bir şekilde erişebileceği bir portal entegrasyonu.", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" }
  ];

  const benefits = [
    { title: "Kurumsal İtibar ve Güven", description: "Profesyonel ve bilgilendirici bir web sitesi ile kurumsal müvekkiller nezdinde itibarınızı ve güvenilirliğinizi pekiştirin." },
    { title: "Nitelikli Müvekkil Kazanımı", description: "Karmaşık hukuki ihtiyaçları olan ve uzmanlık arayan kurumsal firmaların size ulaşmasını sağlayın." },
    { title: "Akademik Otorite İnşası", description: "Yayınlarınız ve makalelerinizle büronuzu, kurumsal hukuk alanında bir referans noktası haline getirin." },
    { title: "Uluslararası Görünürlük", description: "İngilizce dil seçeneği ile uluslararası firmalara ve yatırımcılara da hizmet verme potansiyelinizi gösterin." }
  ];
  
  return (
    <div className="corporate-law-website-page">
      <Helmet>
        <title>Kurumsal Hukuk Danışmanlığı Web Sitesi | Şirketler Hukuku</title>
        <meta name="description" content="Şirketler hukuku, M&A, sözleşmeler ve rekabet hukuku alanlarında uzmanlaşmış hukuk büroları için web çözümleri. Kurumsal itibarınızı yansıtın." />
        <meta name="keywords" content="kurumsal hukuk web sitesi, şirket avukatı sitesi, m&a danışmanlığı, sözleşmeler hukuku, rekabet hukuku avukatı" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hukuk/kurumsal-hukuk-danismanligi" />
      </Helmet>

      <section className="corporate-law-hero">
        <div className="container">
          <h1 className="section-title"><strong>Kurumsal Hukuk</strong> Alanında <span className="highlight">Uzman Çözümler</span></h1>
          <p className="section-description">
            Hukuk büronuzun kurumsal kimliğini, uzmanlık alanlarını ve akademik gücünü yansıtan, prestijli ve güven veren web siteleri tasarlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#d4af37', borderColor: '#d4af37', color: '#1a237e'}}>Danışmanlık Alın</Link>
            <Link to="/uzmanlik-alanlari" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Çalışma Alanları</Link>
          </div>
        </div>
      </section>

      <section className="corporate-law-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Hukuk Büronuza Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#d4af37'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-law-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Büronuza Sağlayacağı Avantajlar</h2>
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

      <section className="corporate-law-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kurumsal Hukuk Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#e8eaf6'}}>
                <h3 className="beauty-salon-pricing-title">Profesyonel Paket</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#1a237e'}}>12.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Resmi ve Güven Veren Tasarım</li>
                  <li>Detaylı Çalışma Alanları Sayfaları</li>
                  <li>Yayınlar ve Makaleler Bölümü</li>
                  <li>Avukat Profilleri</li>
                  <li>Güvenli Müvekkil Portalı Entegrasyonu</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#1a237e'}}>Teklif İsteyin</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="corporate-law-faq">
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

      <section className="corporate-law-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Hukuki Uzmanlığınızı Dijitalde de Gösterin</h2>
          <p className="beauty-salon-cta-description">Kurumsal müvekkillerinize ulaşmak ve büronuzun prestijini artırmak için profesyonel bir web sitesiyle ilk adımı atın.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#d4af37', color: '#1a237e'}}>Ücretsiz Danışma</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateLawWebsite; 