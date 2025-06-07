import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './FinancialConsultingWebsite.css';

const FinancialConsultingWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Finansal Danışmanlık Web Sitesi Tasarımı",
    "description": "Finansal danışmanlık, yatırım ve portföy yönetimi firmaları için güven ve uzmanlık odaklı profesyonel web sitesi çözümleri.",
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
        "name": "Finansal danışmanlıkta web sitesi neden bu kadar önemli?",
        "acceptedAnswer": {
          "text": "Finans sektörü güvene dayalıdır. Profesyonel, şeffaf ve bilgilendirici bir web sitesi, potansiyel müşterileriniz ve yatırımcılar nezdinde firmanızın güvenilirliğini ve uzmanlığını kanıtlamanın ilk ve en önemli adımıdır."
        }
      },
      {
        "@type": "Question",
        "name": "İyi bir finansal danışmanlık sitesi hangi özellikleri içermelidir?",
        "acceptedAnswer": {
          "text": "Güvenli bir altyapı, yatırım felsefesini ve stratejilerini anlatan detaylı içerikler, piyasa analizleri ve raporların yayınlandığı bir blog, uzman danışmanların profilleri ve online randevu veya portföy değerlendirme talep formları içermelidir."
        }
      }
    ]
  };

  const features = [
    { title: "Yatırım Felsefesi ve Stratejileri", description: "Yatırım yaklaşımlarınızı, risk yönetimi stratejilerinizi ve portföy oluşturma metodolojinizi anlatın.", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" },
    { title: "Piyasa Analizleri ve Raporlar", description: "Güncel piyasa yorumları, analizler ve raporlar yayınlayarak uzmanlığınızı ve pazar takibinizi gösterin.", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" },
    { title: "Güvenli Müşteri Portalı Entegrasyonu", description: "Müşterilerinizin portföylerini takip edebileceği güvenli portal entegrasyonu veya yönlendirmesi.", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" },
    { title: "Online Portföy Değerlendirme Formu", description: "Potansiyel müşterilerin sizinle iletişime geçerek portföy analizi talep etmelerini sağlayın.", icon: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" }
  ];

  const benefits = [
    { title: "Yatırımcı Güveni Tesis Etme", description: "Şeffaf ve profesyonel bir dijital varlık ile potansiyel yatırımcıların ve müşterilerin güvenini kazanın." },
    { title: "Nitelikli Müşteri Adayları Çekme", description: "Finansal hedefleri olan ve profesyonel destek arayan doğru kitleye ulaşın." },
    { title: "Marka İtibarını Yükseltme", description: "Piyasa analizleri ve uzman görüşleri ile firmanızın finans sektöründeki itibarını ve bilinirliğini artırın." },
    { title: "Mevzuata Uyumlu Bilgilendirme", description: "Gerekli yasal uyarıları ve bilgilendirmeleri web siteniz üzerinden kolayca yönetin." }
  ];
  
  return (
    <div className="financial-consulting-website-page">
      <Helmet>
        <title>Finansal Danışmanlık Web Sitesi | Yatırım ve Portföy Yönetimi</title>
        <meta name="description" content="Finansal danışmanlık firmaları için güven ve uzmanlık odaklı web sitesi çözümleri. Yatırım stratejileri, piyasa analizleri ve portföy yönetimi." />
        <meta name="keywords" content="finansal danışmanlık web sitesi, yatırım danışmanlığı, portföy yönetimi, finansal planlama, yatırımcı ilişkileri" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/danismanlik/finansal-danismanlik-web-sitesi" />
      </Helmet>

      <section className="financial-consulting-hero">
        <div className="container">
          <h1 className="section-title"><strong>Finansal Danışmanlık</strong> Firmaları İçin <span className="highlight">Güven Veren Web Siteleri</span></h1>
          <p className="section-description">
            Yatırımcılarınıza ve müşterilerinize uzmanlığınızı, şeffaflığınızı ve güvenilirliğinizi yansıtan profesyonel bir dijital kimlik sunun.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#d4af37', borderColor: '#d4af37', color: '#1d3557'}}>Yatırımcı İlişkileri</Link>
            <Link to="/portfoy" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Analizler</Link>
          </div>
        </div>
      </section>

      <section className="financial-consulting-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Finans Sektörüne Özel Çözümler</h2>
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

      <section className="financial-consulting-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Finansal Getirisi</h2>
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

      <section className="financial-consulting-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Finans Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#f0f4f8'}}>
                <h3 className="beauty-salon-pricing-title">Portföy Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#1d3557'}}>11.000 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Güvenli ve Kurumsal Tasarım</li>
                  <li>Piyasa Analizleri Blogu</li>
                  <li>Yatırım Stratejileri Sunumu</li>
                  <li>Güvenli Portal Entegrasyonu</li>
                  <li>Mevzuat Bilgilendirme Alanı</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#1d3557'}}>Bilgi Alın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="financial-consulting-faq">
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

      <section className="financial-consulting-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Finansal Başarıyı Dijital Varlığınızla Taçlandırın</h2>
          <p className="beauty-salon-cta-description">Yatırımcı güvenini kazanmak ve yeni müşteriler edinmek için bizimle iletişime geçin.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#d4af37', color: '#1d3557'}}>Portföy Analizi Talep Edin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialConsultingWebsite; 