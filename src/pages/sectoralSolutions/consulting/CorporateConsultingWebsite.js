import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CorporateConsultingWebsite.css';

const CorporateConsultingWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kurumsal Danışmanlık Web Sitesi Tasarımı",
    "description": "Kurumsal danışmanlık firmaları için strateji, verimlilik ve büyüme odaklı profesyonel web sitesi çözümleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360"
    },
    "serviceType": "Web Tasarım ve Geliştirme",
    "offers": {
      "@type": "Offer",
      "price": "9800",
      "priceCurrency": "TRY"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kurumsal danışmanlık firmaları için web sitesi neden kritiktir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web siteniz, kurumsal kimliğinizin dijital yansımasıdır. Potansiyel müşterilerinize uzmanlık alanlarınızı, metodolojinizi ve başarı hikayelerinizi (vaka çalışmaları) sunarak güven oluşturmanın ve yeni iş fırsatları yaratmanın en etkili yoludur."
        }
      },
      {
        "@type": "Question",
        "name": "Etkili bir kurumsal danışmanlık sitesinde neler bulunmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Profesyonel bir tasarım, net bir şekilde tanımlanmış hizmetler, sektörlere özel çözümler, detaylı vaka çalışmaları (case studies), uzman danışman profilleri ve stratejik içeriklerin yer aldığı bir blog bölümü bulunmalıdır."
        }
      }
    ]
  };

  const features = [
    { title: "Stratejik Hizmet Sunumu", description: "Yönetim, finans, insan kaynakları gibi tüm kurumsal danışmanlık hizmetlerinizi detaylandırın.", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" },
    { title: "Vaka Çalışmaları (Case Studies)", description: "Müşterileriniz için çözdüğünüz problemleri ve elde ettiğiniz başarıları sergileyin.", icon: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 13H9V5h10v10z" },
    { title: "Uzman Danışman Profilleri", description: "Ekibinizdeki danışmanların özgeçmişlerini, uzmanlıklarını ve deneyimlerini paylaşın.", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" },
    { title: "Sektörel Çözüm Odaklılık", description: "Farklı sektörlerdeki müşterilerinize sunduğunuz özel çözümleri vurgulayın.", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" }
  ];

  const benefits = [
    { title: "Kurumsal İmaj ve Güvenilirlik", description: "Profesyonel bir web sitesi ile firmanızın prestijini ve pazardaki güvenilirliğini artırın." },
    { title: "Nitelikli Müşteri Adayları", description: "Web siteniz aracılığıyla hizmetlerinizle gerçekten ilgilenen potansiyel müşterilere (lead) ulaşın." },
    { title: "Düşünce Liderliği (Thought Leadership)", description: "Blog ve raporlar bölümü ile sektörünüzde bilgi lideri konumuna gelin." },
    { title: "Global Pazarlara Açılım", description: "İyi yapılandırılmış bir web sitesi ile uluslararası müşterilere de ulaşma imkanı yakalayın." }
  ];

  return (
    <div className="corporate-consulting-website-page">
      <Helmet>
        <title>Kurumsal Danışmanlık Web Sitesi Tasarımı | etki360</title>
        <meta name="description" content="Stratejik, operasyonel ve finansal danışmanlık sunan kurumsal firmalar için profesyonel web sitesi çözümleri. Vaka çalışmaları ve uzman profilleriyle." />
        <meta name="keywords" content="kurumsal danışmanlık web sitesi, strateji danışmanlığı sitesi, yönetim danışmanlığı web, vaka çalışması, case study" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/danismanlik/kurumsal-danismanlik-web-sitesi" />
      </Helmet>

      <section className="corporate-consulting-hero">
        <div className="container">
          <h1 className="section-title"><strong>Kurumsal Danışmanlık</strong> Firmaları İçin <span className="highlight">Stratejik Web Çözümleri</span></h1>
          <p className="section-description">
            Uzmanlığınızı, metodolojinizi ve başarılarınızı sergileyen, kurumsal kimliğinizle bütünleşen profesyonel web siteleri tasarlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#f9a620', borderColor: '#f9a620', color: '#1d3557'}}>Teklif Alın</Link>
            <Link to="/portfoy" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Vaka İncelemeleri</Link>
          </div>
        </div>
      </section>

      <section className="corporate-consulting-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Kilit Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(249, 166, 32, 0.1)', color: '#f9a620'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="corporate-consulting-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Firmanıza Katacağı Değer</h2>
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
      
      <section className="corporate-consulting-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kurumsal Çözüm Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#e9ecef'}}>
                <h3 className="beauty-salon-pricing-title">Stratejik Paket</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#1d3557'}}>9.800 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Prestijli ve Modern Arayüz</li>
                  <li>Detaylı Hizmet Alanları</li>
                  <li>Vaka Çalışmaları (Case Study) Bölümü</li>
                  <li>Uzman Danışman Profilleri</li>
                  <li>Stratejik Blog Altyapısı</li>
                  <li>Gelişmiş SEO Optimizasyonu</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#1d3557'}}>İletişime Geçin</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="corporate-consulting-faq">
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

      <section className="corporate-consulting-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Danışmanlık Firmanızı Dijitalin Zirvesine Taşıyın</h2>
          <p className="beauty-salon-cta-description">Potansiyel müşterilerinize uzmanlığınızı kanıtlayın ve yeni işbirlikleri için kapı aralayın.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#f9a620', color: '#1d3557'}}>Ücretsiz Strateji Görüşmesi</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateConsultingWebsite; 