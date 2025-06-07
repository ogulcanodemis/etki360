import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './LaborLawConsultingWebsite.css';

const LaborLawConsultingWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "İş Hukuku Danışmanlığı Web Sitesi Tasarımı",
    "description": "İş hukuku alanında uzmanlaşmış avukatlar ve hukuk büroları için işçi ve işveren odaklı bilgilendirici web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "9500", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "İş hukuku alanında bir web sitesi hem işçilere hem de işverenlere nasıl hitap edebilir?",
        "acceptedAnswer": {
          "text": "İyi bir yapılandırma ile web sitenizde hem işverenler için (sözleşme hazırlama, fesih süreçleri vb.) hem de işçiler için (kıdem tazminatı, işe iade davaları vb.) ayrı bilgilendirme bölümleri oluşturulabilir. Bu, her iki tarafın da aradığı bilgiye kolayca ulaşmasını sağlar ve uzmanlığınızı gösterir."
        }
      },
      {
        "@type": "Question",
        "name": "İş hukuku web sitesinde makale veya blog yazmak neden önemlidir?",
        "acceptedAnswer": {
          "text": "İş hukuku sürekli güncellenen ve birçok detayı olan bir alandır. Güncel Yargıtay kararları, yasa değişiklikleri ve pratik bilgiler içeren makaleler yayınlamak, potansiyel müvekkillerin gözünde sizi bir otorite haline getirir ve arama motorlarında daha görünür olmanızı sağlar."
        }
      }
    ]
  };

  const features = [
    { title: "İşçi ve İşveren Bölümleri", description: "Hem işçilerin haklarını hem de işverenlerin yükümlülüklerini ayrı ayrı ele alan özel içerik bölümleri.", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" },
    { title: "Dava Türlerine Göre Bilgilendirme", description: "İşe iade, mobbing, kıdem tazminatı, iş kazası gibi dava türleri için detaylı bilgi sayfaları.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Online Randevu ve Danışma", description: "Potansiyel müvekkillerin online olarak danışmanlık randevusu talep etmesini sağlayın.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z" },
    { title: "Hesaplama Araçları", description: "Kıdem ve ihbar tazminatı gibi hesaplamalar için basit ve bilgilendirici araçlar sunun.", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }
  ];

  const benefits = [
    { title: "Geniş Kitleye Ulaşım", description: "Hem işçi hem de işveren tarafına hitap ederek potansiyel müvekkil havuzunuzu genişletin." },
    { title: "Arama Motoru Görünürlüğü", description: "Spesifik dava türleri ve hukuki sorular için oluşturduğunuz içeriklerle Google'da üst sıralara çıkın." },
    { title: "Danışma Taleplerini Artırma", description: "Online randevu ve bilgilendirici içerikler sayesinde büronuza gelen danışma taleplerini artırın." },
    { title: "Eğitici ve Bilgilendirici Misyon", description: "Toplumu iş hukuku konusunda bilinçlendirerek sosyal sorumluluk misyonu üstlenin ve marka değerinizi artırın." }
  ];
  
  return (
    <div className="labor-law-consulting-website-page">
      <Helmet>
        <title>İş Hukuku Danışmanlığı Web Sitesi | İşçi ve İşveren Avukatı</title>
        <meta name="description" content="İş hukuku alanında uzmanlaşmış hukuk büroları için web çözümleri. Kıdem tazminatı, işe iade davaları, mobbing ve iş sözleşmeleri konularında bilgilendirme." />
        <meta name="keywords" content="iş hukuku avukatı, işçi avukatı, işveren avukatı, kıdem tazminatı, işe iade davası, mobbing davası" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/hukuk/is-hukuku-danismanligi" />
      </Helmet>

      <section className="labor-law-hero">
        <div className="container">
          <h1 className="section-title"><strong>İş Hukuku</strong> Alanında <span className="highlight">Adil ve Bilgilendirici Çözümler</span></h1>
          <p className="section-description">
            Hem işçilerin haklarını koruyan hem de işverenlere yasal süreçlerde yol gösteren, dengeli ve uzman odaklı web siteleri tasarlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#f5f5dc', borderColor: '#f5f5dc', color: '#800000'}}>Randevu Al</Link>
            <Link to="/blog" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Makaleler</Link>
          </div>
        </div>
      </section>

      <section className="labor-law-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">İş Hukuku Odaklı Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(128, 0, 0, 0.1)', color: '#800000'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="labor-law-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Sağlayacağı Stratejik Faydalar</h2>
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

      <section className="labor-law-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">İş Hukuku Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#faf0e6'}}>
                <h3 className="beauty-salon-pricing-title">Uzman Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#800000'}}>9.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Profesyonel ve Bilgilendirici Tasarım</li>
                  <li>Dava Türlerine Göre Sayfalar</li>
                  <li>İşçi ve İşveren İçin Ayrı Bölümler</li>
                  <li>Blog ve Makale Altyapısı</li>
                  <li>Online Danışma Formu</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#800000'}}>Hukuki Destek Alın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="labor-law-faq">
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

      <section className="labor-law-cta">
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

export default LaborLawConsultingWebsite; 