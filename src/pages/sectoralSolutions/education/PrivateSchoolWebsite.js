import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './PrivateSchoolWebsite.css';

const PrivateSchoolWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Özel Okul Web Sitesi Tasarımı",
    "description": "Özel okullar, kolejler ve eğitim kurumları için veli ve öğrenci odaklı, bilgilendirici ve profesyonel web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "15000", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Özel okul web sitesinde veliler için en önemli özellikler nelerdir?",
        "acceptedAnswer": {
          "text": "Veliler için bir özel okul web sitesinde en önemli özellikler; kolayca erişilebilir bir akademik takvim, ders programları, öğretmen bilgileri, okulun vizyonu ve misyonu, kayıt ve başvuru süreçleri hakkında net bilgiler ve okuldan güncel duyuruların bulunduğu bir bölümdür. Ayrıca okulun fiziki ve sosyal imkanlarını gösteren bir galeri de oldukça etkilidir."
        }
      },
      {
        "@type": "Question",
        "name": "Öğrenci adaylarına yönelik içerikler nasıl olmalı?",
        "acceptedAnswer": {
          "text": "Öğrenci adayları için web sitesi, okul hayatını, sosyal kulüpleri, spor ve sanat etkinliklerini, mezun başarılarını ve okulun teknolojik imkanlarını sergilemelidir. Öğrenci gözünden anlatılan başarı hikayeleri ve video içerikler, adayların okulla bağ kurmasını kolaylaştırır."
        }
      }
    ]
  };

  const features = [
    { title: "Akademik Takvim ve Duyurular", description: "Dinamik olarak güncellenebilen, velilerin ve öğrencilerin kolayca takip edebileceği bir takvim ve duyuru sistemi.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z" },
    { title: "Veli Bilgilendirme Sistemi (VBS) Entegrasyonu", description: "Mevcut Veli Bilgilendirme Sisteminizle entegre çalışarak not, devamsızlık gibi bilgilerin paylaşılması.", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
    { title: "Online Kayıt ve Başvuru Formları", description: "Yeni öğrenci kayıt ve başvuru süreçlerini dijital ortama taşıyarak işlemleri hızlandırın.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Etkinlik ve Fotoğraf Galerisi", description: "Okul etkinliklerini, gezileri, sportif ve sanatsal başarıları sergileyen zengin medya galerileri.", icon: "M22 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM11 9l2.5 4L17 6l4 8H3l5-7z" }
  ];

  const benefits = [
    { title: "Kurumsal Prestij ve Güven", description: "Profesyonel ve bilgilendirici bir web sitesi ile okulunuzun kurumsal prestijini ve velilerin gözündeki güvenilirliğini artırın." },
    { title: "Veli ve Öğrenci İletişimini Güçlendirme", description: "Duyurular, takvim ve VBS entegrasyonu gibi özelliklerle okul-veli arasındaki iletişimi şeffaf ve güçlü tutun." },
    { title: "Kayıt Dönemlerinde Verimlilik", description: "Online başvuru ve bilgilendirme sistemleri sayesinde kayıt dönemlerinde operasyonel yükü azaltın ve daha çok adaya ulaşın." },
    { title: "Mezun ve Öğrenci Aidiyeti", description: "Okulun sosyal ve akademik hayatını başarılı bir şekilde sergileyerek öğrenciler ve mezunlar arasında güçlü bir aidiyet duygusu oluşturun." }
  ];
  
  return (
    <div className="private-school-website-page">
      <Helmet>
        <title>Özel Okul Web Sitesi Tasarımı | Kolej ve Eğitim Kurumları</title>
        <meta name="description" content="Özel okullar ve kolejler için veli, öğrenci ve adaylara yönelik profesyonel, bilgilendirici ve modern web sitesi çözümleri." />
        <meta name="keywords" content="özel okul web sitesi, kolej web sitesi, eğitim kurumu sitesi, veli bilgilendirme sistemi, online okul kaydı" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/egitim/ozel-okul-web-sitesi" />
      </Helmet>

      <section className="private-school-hero">
        <div className="container">
          <h1 className="section-title"><strong>Geleceğin Eğitim Vizyonu</strong> için <span className="highlight">Modern Web Çözümleri</span></h1>
          <p className="section-description">
            Okulunuzun kurumsal kimliğini, eğitim kalitesini ve sosyal imkanlarını en iyi şekilde yansıtan, veli ve öğrenci dostu web siteleri tasarlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ffcc80', borderColor: '#ffcc80', color: '#0d47a1'}}>Kayıt Bilgisi Alın</Link>
            <Link to="/hakkimizda" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Kampüsümüz</Link>
          </div>
        </div>
      </section>

      <section className="private-school-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Okulunuza Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(13, 71, 161, 0.1)', color: '#0d47a1'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="private-school-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dijital Varlığınızın Okulunuza Katkıları</h2>
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

      <section className="private-school-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Eğitim Kurumu Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#e3f2fd'}}>
                <h3 className="beauty-salon-pricing-title">Profesyonel Kolej Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#0d47a1'}}>15.000 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Kurumsal ve Modern Tasarım</li>
                  <li>Akademik Takvim & Duyuru Modülü</li>
                  <li>Online Kayıt Formları</li>
                  <li>Veli Bilgilendirme Sistemi Entegrasyonu</li>
                  <li>Zengin Medya Galerileri</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#0d47a1'}}>Teklif Alın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="private-school-faq">
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

      <section className="private-school-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Eğitimdeki Başarınızı Dijital Dünyaya Taşıyın</h2>
          <p className="beauty-salon-cta-description">Potansiyel veli ve öğrencilerinize bir tık kadar yakın olmak, okulunuzun vizyonunu en doğru şekilde anlatmak için bizimle iletişime geçin.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ffcc80', color: '#0d47a1'}}>Ücretsiz Demo Talep Edin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateSchoolWebsite; 