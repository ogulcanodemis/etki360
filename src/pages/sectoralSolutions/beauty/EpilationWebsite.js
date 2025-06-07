import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './EpilationWebsite.css';

const EpilationWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Epilasyon Merkezi Web Sitesi Tasarımı",
    "description": "Lazer epilasyon ve diğer epilasyon hizmetleri sunan merkezler için güven veren, bilgilendirici ve randevu odaklı web sitesi çözümleri.",
    "provider": {
      "@type": "Organization",
      "name": "etki360"
    },
    "serviceType": "Web Tasarım",
    "offers": {
      "@type": "Offer",
      "price": "7000",
      "priceCurrency": "TRY"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Epilasyon merkezleri neden bir web sitesine sahip olmalı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web sitesi, kullandığınız teknolojileri, hijyen standartlarınızı ve uzman ekibinizi tanıtarak potansiyel müşterilerde güven oluşturur. Online randevu ve detaylı hizmet bilgisi sunarak müşteri kazanımını kolaylaştırır."
        }
      },
      {
        "@type": "Question",
        "name": "İyi bir epilasyon merkezi web sitesi hangi özellikleri barındırmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kullanılan cihazların ve teknolojilerin detaylı anlatımı, hizmet bölgeleri (tüm vücut, yüz vb.) için ayrı sayfalar, öncesi-sonrası görselleri, sıkça sorulan sorular bölümü ve online randevu sistemi olmazsa olmazlardır."
        }
      }
    ]
  };

  const features = [
    { title: "Detaylı Hizmet Sayfaları", description: "Lazer epilasyon, iğneli epilasyon gibi tüm hizmetleriniz için özel sayfalar.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Cihaz ve Teknoloji Tanıtımı", description: "Kullandığınız epilasyon cihazlarını ve teknolojilerini tanıtarak güven oluşturun.", icon: "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-2H3v2z" },
    { title: "Online Randevu ve Konsültasyon", description: "Müşterilerinizin ücretsiz ön görüşme veya seans randevusu almasını sağlayın.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z" },
    { title: "Paket ve Kampanya Yönetimi", description: "Sezonluk veya çoklu seans indirimlerinizi, özel kampanyalarınızı web sitenizden duyurun.", icon: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" }
  ];

  const benefits = [
    { title: "Müşteri Güveni Oluşturma", description: "Hijyen ve teknolojiye verdiğiniz önemi göstererek müşteri güvenini kazanın." },
    { title: "Randevu Akışını Otomatikleştirme", description: "Online randevu ile telefon ve bekleme trafiğini azaltın, operasyonel verimliliği artırın." },
    { title: "Hedef Kitleye Ulaşım", description: "'İstanbul lazer epilasyon' gibi aramalarda bulunarak doğru müşterilere ulaşın." },
    { title: "Rekabette Öne Çıkma", description: "Profesyonel bir web sitesi ile rakiplerinizden sıyrılarak sektörde liderliğe oynayın." }
  ];

  return (
    <div className="epilation-website-page">
      <Helmet>
        <title>Lazer Epilasyon Merkezi Web Sitesi Tasarımı | İstanbul</title>
        <meta name="description" content="İstanbul'daki lazer epilasyon merkezleri için profesyonel, güvenilir ve bilgilendirici web sitesi çözümleri. Online randevu ve kampanya yönetimi. 7.000₺'den başlayan fiyatlarla." />
        <meta name="keywords" content="lazer epilasyon web sitesi, epilasyon merkezi sitesi, istanbul lazer epilasyon, online epilasyon randevu, epilasyon kampanya sitesi" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/guzellik/epilasyon-web-sitesi" />
      </Helmet>

      <section className="epilation-hero">
        <div className="container">
          <div className="epilation-breadcrumb">
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
            <Link to="/sektorel-cozumler/guzellik">
              <svg className="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Güzellik Sektörü
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="current">Epilasyon Merkezi Web Sitesi</span>
          </div>
          <h1 className="section-title"><strong>Lazer Epilasyon</strong> Merkezleri İçin <span style={{color: "#8e44ad", fontWeight: "bold"}}>Modern Web Çözümleri</span></h1>
          <p className="section-description">
            Kullandığınız en son teknolojiyi ve hijyenik ortamınızı yansıtan, müşterilerinize güven veren profesyonel bir web sitesi ile tanışın.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#8e44ad', borderColor: '#8e44ad'}}>Bilgi Alın</Link>
            <Link to="/portfoy" className="btn-outline" style={{borderColor: '#333', color: '#333'}}>Projeler</Link>
          </div>
        </div>
      </section>

      <section className="epilation-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Öne Çıkan Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(142, 68, 173, 0.1)', color: '#8e44ad'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="epilation-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Merkezinize Sağlayacağı Faydalar</h2>
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
      
      <section className="epilation-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Epilasyon Merkezinize Özel Paket</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#f3e8ff'}}>
                <h3 className="beauty-salon-pricing-title">Profesyonel Paket</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#8e44ad'}}>7.000 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Kurumsal ve Güven Veren Tasarım</li>
                  <li>Online Randevu Sistemi</li>
                  <li>Hizmetler ve Cihaz Tanıtım Alanı</li>
                  <li>Kampanya Duyuru Modülü</li>
                  <li>S.S.S. Bölümü</li>
                  <li>1 Yıl Teknik Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#8e44ad'}}>Başvurun</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="epilation-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Merak Edilenler</h2>
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

      <section className="epilation-cta">
        <div className="container">
          <div className="epilation-cta-content">
            <h2 className="epilation-cta-title">
              <strong>Dijitalde Fark Yaratın:</strong> <span style={{color: "#fff", fontWeight: "bold"}}>7 Gün İçinde Yayında!</span>
            </h2>
            <p className="epilation-cta-description">
              Salonunuzun potansiyelini ortaya çıkaracak, müşterilerinizi etkileyecek ve randevularınızı artıracak profesyonel bir web sitesine hemen sahip olun. Ücretsiz danışmanlık görüşmesinde, salonunuza özel web çözümlerini konuşalım.
            </p>
            <div className="epilation-cta-buttons">
              <Link to="/iletisim" className="btn-primary">ÖZEL TEKLİF ALIN</Link>
              <a href="tel:+902125551234" className="btn-outline">0212 555 12 34</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EpilationWebsite; 