import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './ManagementConsultingWebsite.css';

const ManagementConsultingWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Yönetim Danışmanlığı Web Sitesi Tasarımı",
    "description": "Yönetim danışmanlığı firmaları için liderlik, strateji ve operasyonel mükemmellik odaklı, profesyonel web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "10500", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bir yönetim danışmanlığı firması için web sitesinin rolü nedir?",
        "acceptedAnswer": {
          "text": "Web siteniz, firmanızın vizyonunu, uzmanlığını ve sektöre olan hakimiyetini gösteren en önemli platformdur. Müşterilerinize sunduğunuz değeri, metodolojilerinizi ve başarı hikayelerinizi sergileyerek güven oluşturur ve sizi rakiplerinizden ayırır."
        }
      },
      {
        "@type": "Question",
        "name": "Başarılı bir yönetim danışmanlığı web sitesi hangi unsurları içermelidir?",
        "acceptedAnswer": {
          "text": "Net hizmet açıklamaları, liderlik ve strateji odaklı blog yazıları, başarılı projeleri gösteren vaka analizleri, danışman ekibinin tanıtımı ve çeşitli sektörlere yönelik çözüm önerileri gibi bölümler, sitenin etkinliğini artırır."
        }
      }
    ]
  };

  const features = [
    { title: "Liderlik ve Strateji Blogu", description: "Yönetim ve liderlik üzerine makaleler yayınlayarak sektörde düşünce lideri olun.", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" },
    { title: "İnteraktif Vaka Çalışmaları", description: "Başarı hikayelerinizi ve müşteri dönüşümlerinizi interaktif ve etkileyici bir şekilde sunun.", icon: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" },
    { title: "Danışmanlık Metodolojisi", description: "Problemlere yaklaşımınızı ve kullandığınız danışmanlık modellerini şeffaf bir şekilde anlatın.", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" },
    { title: "Online Değerlendirme Araçları", description: "Potansiyel müşterilerin kendi durumlarını analiz edebileceği basit testler veya formlar sunun.", icon: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }
  ];

  const benefits = [
    { title: "Yüksek Değerli Müşteri Edinimi", description: "Uzmanlığınızı ve vizyonunuzu doğru yansıtarak büyük ölçekli ve yüksek değerli projeler çekin." },
    { title: "Marka Otoritesini Güçlendirme", description: "Stratejik içerikler ve başarılı vaka çalışmaları ile pazardaki otoritenizi ve güvenilirliğinizi pekiştirin." },
    { title: "Etkin İşe Alım Aracı", description: "Firmanızın vizyonunu ve kültürünü yansıtarak en iyi yetenekleri şirketinize çekin." },
    { title: "Sektörel Farklılaşma", description: "Benzersiz metodolojinizi ve yaklaşımlarınızı vurgulayarak rekabette bir adım öne geçin." }
  ];

  return (
    <div className="management-consulting-website-page">
      <Helmet>
        <title>Yönetim Danışmanlığı Web Sitesi Tasarımı | Strateji ve Liderlik</title>
        <meta name="description" content="Yönetim danışmanlığı firmaları için liderlik, strateji ve operasyonel mükemmellik odaklı web sitesi çözümleri. Düşünce liderliğinizi sergileyin." />
        <meta name="keywords" content="yönetim danışmanlığı web sitesi, liderlik danışmanlığı, stratejik danışmanlık, operasyonel mükemmellik, danışmanlık blogu" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/danismanlik/yonetim-danismanligi-web-sitesi" />
      </Helmet>

      <section className="management-consulting-hero">
        <div className="container">
          <h1 className="section-title"><strong>Yönetim Danışmanlığı</strong> Firmaları İçin <span className="highlight">Vizyoner Web Siteleri</span></h1>
          <p className="section-description">
            Liderliğinizi ve stratejik derinliğinizi yansıtan, sektörde otoritenizi pekiştiren ve nitelikli müşteriler kazandıran web çözümleri.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#2ecc71', borderColor: '#2ecc71', color: '#2c3e50'}}>Strateji Görüşmesi Planla</Link>
            <Link to="/portfoy" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Başarı Hikayeleri</Link>
          </div>
        </div>
      </section>

      <section className="management-consulting-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sizi Rakiplerinizden Ayıracak Özellikler</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(46, 204, 113, 0.1)', color: '#2ecc71'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="management-consulting-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Stratejik Katkıları</h2>
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

      <section className="management-consulting-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Liderlik Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#ecf0f1'}}>
                <h3 className="beauty-salon-pricing-title">Vizyoner Paket</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#2c3e50'}}>10.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Otoriter ve Prestijli Tasarım</li>
                  <li>Liderlik & Strateji Blogu</li>
                  <li>İnteraktif Vaka Çalışmaları</li>
                  <li>Metodoloji ve Model Sunumları</li>
                  <li>Gelişmiş Analitik Araçlar</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#2c3e50'}}>Teklif Alın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="management-consulting-faq">
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

      <section className="management-consulting-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Pazardaki Liderliğinizi Dijitalde de Gösterin</h2>
          <p className="beauty-salon-cta-description">Firmanızın vizyonunu ve uzmanlığını yansıtan bir web sitesiyle sektördeki etkinizi artırın.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#2ecc71', color: '#2c3e50'}}>Hemen İletişime Geçin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementConsultingWebsite; 