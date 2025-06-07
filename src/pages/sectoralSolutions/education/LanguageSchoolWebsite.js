import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './LanguageSchoolWebsite.css';

const LanguageSchoolWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dil Okulu Web Sitesi Tasarımı",
    "description": "Yabancı dil eğitimi veren kurumlar için seviye tespit sınavı, online ders materyalleri ve kültürel etkinlik takvimi gibi özellikler sunan web siteleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "9000", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Dil okulu web sitesinde kur seviyeleri nasıl gösterilmeli?",
        "acceptedAnswer": {
          "text": "Kur seviyeleri (A1, A2, B1, B2, C1, C2 gibi) Avrupa Dilleri Ortak Çerçeve Programı'na (CEFR) referans verilerek net bir şekilde açıklanmalıdır. Her seviye için hedeflenen beceriler, ders içeriği ve örnek materyaller sunmak, öğrenci adaylarının doğru programı seçmesine yardımcı olur."
        }
      },
      {
        "@type": "Question",
        "name": "Online seviye tespit sınavı (STS) neden önemlidir?",
        "acceptedAnswer": {
          "text": "Online STS, potansiyel öğrencilerin web sitenizle ilk etkileşimini sağlayan güçlü bir araçtır. Öğrenciler hem kendi seviyelerini ücretsiz olarak öğrenir hem de kurumunuzun iletişim bilgilerini sizinle paylaşır. Bu, potansiyel öğrencileri nitelikli satış fırsatlarına dönüştürmenin en etkili yollarından biridir."
        }
      }
    ]
  };

  const features = [
    { title: "Online Seviye Tespit Sınavı", description: "Potansiyel öğrencilerin dil seviyelerini ölçerek onlara en uygun kur programını öneren interaktif bir araç.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Kur ve Program Detayları", description: "Genel İngilizce, İş İngilizcesi, sınav hazırlık (IELTS, TOEFL) gibi programların detaylı tanıtımı.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" },
    { title: "Etkinlik ve Konuşma Kulübü Takvimi", description: "Sosyal etkinlikleri, konuşma kulüplerini ve atölye çalışmalarını duyurabileceğiniz dinamik bir takvim.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z" },
    { title: "Çok Dilli Arayüz", description: "Hedeflediğiniz öğrenci kitlesine göre İngilizce, Almanca, İspanyolca gibi farklı dillerde arayüz seçenekleri.", icon: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z" }
  ];

  const benefits = [
    { title: "Geniş Öğrenci Kitlesi", description: "Farklı dil ve seviyelere yönelik programlarınızı sunarak daha geniş bir öğrenci kitlesine ulaşın." },
    { title: "Etkileşim ve Veri Toplama", description: "Online seviye tespit sınavları ile potansiyel öğrencilerle ilk teması kurun ve değerli veriler toplayın." },
    { title: "Kültürel ve Sosyal İmaj", description: "Konuşma kulüpleri ve etkinlikler gibi sosyal aktiviteleri öne çıkararak sadece dil öğreten değil, bir kültür merkezi olduğunuzu gösterin." },
    { title: "Uluslararası Güvenilirlik", description: "Profesyonel ve çok dilli bir web sitesi ile uluslararası öğrencilerin ve ortakların güvenini kazanın." }
  ];
  
  return (
    <div className="language-school-website-page">
      <Helmet>
        <title>Dil Okulu Web Sitesi | Yabancı Dil Eğitimi ve Kursları</title>
        <meta name="description" content="Yabancı dil okulları için online seviye tespit sınavı, interaktif ders programları ve kültürel etkinlik takvimi içeren web sitesi çözümleri." />
        <meta name="keywords" content="dil okulu web sitesi, ingilizce kursu, almanca kursu, ielts hazırlık, toefl hazırlık, online seviye tespit sınavı" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/egitim/dil-okulu-web-sitesi" />
      </Helmet>

      <section className="language-school-hero">
        <div className="container">
          <h1 className="section-title">Yeni Bir Dünya Keşfedin: <span className="highlight">Dilin Gücüyle</span> Sınırları Kaldırın</h1>
          <p className="section-description">
            Dil okulunuzun dinamik, kültürel ve uluslararası vizyonunu yansıtan, öğrenci adaylarınıza ilham veren web siteleri hazırlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#fb8500', borderColor: '#fb8500', color: '#fff'}}>Seviyeni Test Et</Link>
            <Link to="/uzmanlik-alanlari" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Programlarımız</Link>
          </div>
        </div>
      </section>

      <section className="language-school-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dil Okulunuza Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(0, 119, 182, 0.1)', color: '#0077b6'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="language-school-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Kurumunuza Sağlayacağı Değerler</h2>
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

      <section className="language-school-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dil Okulu Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#caf0f8'}}>
                <h3 className="beauty-salon-pricing-title">Global İletişim Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#0077b6'}}>9.000 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Modern ve Uluslararası Tasarım</li>
                  <li>Online Seviye Tespit Sınavı</li>
                  <li>Detaylı Kur ve Program Sayfaları</li>
                  <li>Etkinlik Takvimi Modülü</li>
                  <li>Çok Dilli Arayüz Seçeneği</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#0077b6'}}>Kayıt Bilgisi Al</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="language-school-faq">
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

      <section className="language-school-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Dil Öğrenme Serüveninde Öğrencilerinizin İlk Durağı Olun</h2>
          <p className="beauty-salon-cta-description">Potansiyel öğrencilerinize ilham verin, onlara en uygun programı sunun ve kayıtlarını kolayca alın.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#fb8500', color: '#fff'}}>Demo Talep Edin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageSchoolWebsite; 