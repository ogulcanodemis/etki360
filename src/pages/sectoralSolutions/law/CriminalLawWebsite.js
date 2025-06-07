import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CriminalLawWebsite.css';

const CriminalLawWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ceza Hukuku Web Sitesi Tasarımı",
    "description": "Ceza hukuku alanında uzmanlaşmış avukatlar için güven veren, profesyonel ve bilgilendirici web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "7500", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ceza hukuku alanında bir web sitesi nasıl olmalıdır?",
        "acceptedAnswer": {
          "text": "Ceza hukuku alanında bir web sitesi, öncelikle güven verici, profesyonel ve ciddi bir görünüme sahip olmalıdır. Hizmet verilen suç tipleri, süreçler ve yasal bilgilendirmeleri detaylı ancak anlaşılır bir dille sunmalıdır. Ayrıca müvekkil gizliliğine özen gösterdiğini vurgulayan ve iletişim kanallarını açık tutan bir yapıda olmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Ceza avukatları için web sitesi neden önemlidir?",
        "acceptedAnswer": {
          "text": "Ceza avukatları için web sitesi, potansiyel müvekkillerin sizi bulmalarını ve uzmanlık alanlarınızı anlamalarını sağlayan en önemli dijital araçtır. Özellikle acil durumlarda insanlar hızla bir ceza avukatına ulaşmak isterler. SEO çalışmasıyla öne çıkan bir web sitesi, bu kritik anlarda size ulaşılmasını kolaylaştırır ve güvenilirliğinizi pekiştirir."
        }
      }
    ]
  };

  const features = [
    { title: "Profesyonel ve Güven Verici Tasarım", description: "Müvekkillerinize güven veren, hukuki otorite ve profesyonellik yansıtan ciddi bir tasarım.", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" },
    { title: "Hizmet Alanları Sayfası", description: "Uzmanlık alanınızdaki suç tipleri ve hukuki süreçler hakkında detaylı bilgiler.", icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" },
    { title: "Blog ve Hukuki Makaleler", description: "Ceza hukuku alanında güncel gelişmeleri ve bilgilendirici içerikleri paylaşabileceğiniz blog alanı.", icon: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" },
    { title: "Referanslar ve Başarı Hikayeleri", description: "Gizlilik esaslarına uygun şekilde, başarıyla sonuçlandırdığınız davaların hikayeleri.", icon: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" }
  ];

  const benefits = [
    { title: "Müvekkil Güveni Kazanma", description: "Profesyonel web siteniz ile potansiyel müvekkillerinizin güvenini daha ilk adımda kazanın." },
    { title: "Uzmanlık Alanınızı Vurgulama", description: "Ceza hukuku alanındaki spesifik uzmanlıklarınızı öne çıkararak doğru müvekkillere ulaşın." },
    { title: "SEO ile Görünürlük Artışı", description: "Google'da ceza avukatı arayanların sizi bulmasını sağlayarak müvekkil potansiyelinizi artırın." },
    { title: "7/24 Bilgilendirme", description: "Web siteniz, acil durumda ceza avukatı arayan kişilere 7/24 bilgi sağlar ve size ulaşma imkanı verir." }
  ];
  
  return (
    <div className="criminal-law-website-page">
      <Helmet>
        <title>Ceza Hukuku Web Sitesi | Güven Veren Profesyonel Tasarım</title>
        <meta name="description" content="Ceza hukuku alanında uzmanlaşmış avukatlar için güven veren, profesyonel ve bilgilendirici web sitesi çözümleri. Müvekkil odaklı tasarım." />
        <meta name="keywords" content="ceza hukuku web sitesi, ceza avukatı web sitesi, ceza hukuku danışmanlığı, avukat web sitesi, hukuk bürosu web sitesi" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hukuk/ceza-hukuku-web-sitesi" />
      </Helmet>

      <section className="criminal-law-hero">
        <div className="container">
          <div className="criminal-law-breadcrumb">
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
            <Link to="/sektorel-cozumler/hukuk">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M9 9h6v6H9z"></path>
              </svg>
              Hukuk Sektörü
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Ceza Hukuku Web Sitesi</span>
          </div>
          <h1 className="section-title">Ceza Hukuku Alanında <span className="highlight">Güven</span> ve <span className="highlight">Uzmanlık</span> Yansıtan Web Çözümleri</h1>
          <p className="section-description">
            Ceza hukuku alanındaki uzmanlığınızı profesyonel bir web sitesiyle vurgulayın. Müvekkillerinize güven veren, bilgilendirici ve hukuki otoritenizi yansıtan dijital çözümler.
          </p>
          <div className="criminal-law-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#2c3e50', borderColor: '#2c3e50', color: '#fff'}}>Hemen Bilgi Alın</Link>
            <Link to="/hakkimizda" className="btn-outline" style={{borderColor: '#4a4a4a', color: '#4a4a4a'}}>Hizmetlerimizi İnceleyin</Link>
          </div>
        </div>
      </section>

      <section className="criminal-law-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ceza Hukuku Web Sitenizin Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(44, 62, 80, 0.1)', color: '#2c3e50'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="criminal-law-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Hukuk Büronuza Sağlayacağı Avantajlar</h2>
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

      <section className="criminal-law-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ceza Hukuku Web Sitesi Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#eaeaea'}}>
                <h3 className="beauty-salon-pricing-title">Profesyonel Hukuk Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#2c3e50'}}>7.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Profesyonel ve Güven Verici Tasarım</li>
                  <li>Uzmanlık Alanları ve Hizmetler Sayfası</li>
                  <li>Blog ve Hukuki Makaleler Bölümü</li>
                  <li>SEO Optimizasyonu</li>
                  <li>İletişim Formu ve Müvekkil Başvuru Sistemi</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#2c3e50'}}>Hemen Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="criminal-law-faq">
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

      <section className="criminal-law-cta">
        <div className="container">
          <div className="criminal-law-cta-content">
            <h2 className="criminal-law-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="criminal-law-cta-description">
              <strong>İstanbul'daki ceza avukatları</strong> ve <em>hukuk büroları</em> için <strong>profesyonel web sitesi</strong> çözümlerimiz ile potansiyel müvekkillerinize <em>güven</em> aşılayın. <strong>Dijital varlığınızı</strong> oluşturmak, <strong>uzmanlık alanlarınızı</strong> vurgulamak ve <em>hukuki kariyerinizi</em> güçlendirmek için hemen <strong>ücretsiz danışmanlık</strong> alın.
            </p>
            <div className="criminal-law-cta-buttons">
              <Link to="/iletisim" className="btn-primary">Hemen Başvurun</Link>
              <Link to="/ornekler/ceza-hukuku" className="btn-outline">Örnek Çalışmaları İnceleyin</Link>
            </div>
            <p className="criminal-law-cta-note">
              * 7 gün içinde web siteniz yayında veya paranız iade garantisi. 20 Ekim 2023'e kadar geçerli kampanya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CriminalLawWebsite; 