import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './CourseCenterWebsite.css';

const CourseCenterWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kurs Merkezi Web Sitesi Tasarımı",
    "description": "Üniversite hazırlık, KPSS, yabancı dil, yazılım ve mesleki eğitim kursları için öğrenci odaklı, dinamik web sitesi çözümleri.",
    "provider": { "@type": "Organization", "name": "etki360" },
    "serviceType": "Web Tasarım",
    "offers": { "@type": "Offer", "price": "8500", "priceCurrency": "TRY" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kurs merkezi web sitesinde en önemli bölümler nelerdir?",
        "acceptedAnswer": {
          "text": "Etkili bir kurs merkezi web sitesinde; sunulan tüm kursların detaylı olarak açıklandığı (içerik, süre, eğitmen, ücret vb.) bir 'Kurslarımız' sayfası, eğitmen kadrosunun tanıtıldığı bir 'Eğitmenlerimiz' sayfası, ders programları ve takvimi, başarı hikayeleri ve öğrenci yorumları ile online kayıt/başvuru formu mutlaka bulunmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Online deneme sınavı veya seviye tespit sınavı eklemek faydalı mı?",
        "acceptedAnswer": {
          "text": "Kesinlikle. Potansiyel öğrencilerin kendi seviyelerini görmeleri veya kursunuzun formatını deneyimlemeleri için online deneme sınavları veya seviye tespit sınavları sunmak, kayıt olma kararlarını olumlu yönde etkileyen güçlü bir pazarlama aracıdır. Bu, aynı zamanda nitelikli data toplamanıza da yardımcı olur."
        }
      }
    ]
  };

  const features = [
    { title: "Detaylı Kurs Katalogları", description: "Her bir kurs için müfredat, eğitmen profili, ders saatleri ve ücretlendirme gibi detaylı bilgilerin sunulduğu sayfalar.", icon: "M14 2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-6-6z" },
    { title: "Eğitmen Tanıtım Sayfaları", description: "Eğitmenlerinizin akademik geçmişini, uzmanlık alanlarını ve deneyimlerini sergileyen profesyonel profiller.", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
    { title: "Online Kayıt ve Ödeme", description: "Öğrencilerin istedikleri kursa online olarak kayıt olmalarını ve ödeme yapmalarını sağlayan güvenli sistem.", icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" },
    { title: "Blog ve Başarı Hikayeleri", description: "Sektörle ilgili ipuçları, sınav stratejileri ve mezunlarınızın başarı hikayelerini paylaşacağınız bir blog bölümü.", icon: "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }
  ];

  const benefits = [
    { title: "Hedef Kitleye Doğrudan Ulaşım", description: "Belirli sınavlara veya konulara yönelik içeriklerle, doğrudan sizin hizmetinize ihtiyaç duyan öğrencilere ulaşın." },
    { title: "Kayıt Süreçlerinde Otomasyon", description: "Online kayıt ve ödeme sistemleri ile idari iş yükünüzü azaltın ve kayıt sürecini 7/24 aktif tutun." },
    { title: "Marka Bilinirliği ve Güven", description: "Başarı hikayeleri, uzman eğitmen kadrosu ve bilgilendirici blog içerikleri ile kurs merkezinizin bilinirliğini ve güvenilirliğini artırın." },
    { title: "Rekabette Öne Çıkma", description: "Modern, kullanıcı dostu ve bilgilendirici bir web sitesi ile rakiplerinizden sıyrılarak öğrencilerin ilk tercihi olun." }
  ];

  return (
    <div className="course-center-website-page">
      <Helmet>
        <title>Kurs Merkezi Web Sitesi | Üniversite Hazırlık, KPSS, Yazılım</title>
        <meta name="description" content="Her branşa özel kurs merkezleri için öğrenci odaklı, başarıyı artıran ve online kayıt imkanı sunan profesyonel web sitesi çözümleri." />
        <meta name="keywords" content="kurs merkezi web sitesi, dershane web sitesi, kpss kursu sitesi, yazılım kursu sitesi, online kayıt" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/egitim/kurs-merkezi-web-sitesi" />
      </Helmet>

      <section className="course-center-hero">
        <div className="container">
          <h1 className="section-title">Hedeflerinize Ulaştıran <span className="highlight">Başarı Odaklı</span> Web Siteleri</h1>
          <p className="section-description">
            Kurs merkezinizin eğitim kalitesini, uzman eğitmen kadrosunu ve başarı oranlarını öne çıkaran, öğrenci adayları için çekici web siteleri tasarlıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#fdd835', borderColor: '#fdd835', color: '#2e7d32'}}>Kayıt Olun</Link>
            <Link to="/uzmanlik-alanlari" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Kurslarımız</Link>
          </div>
        </div>
      </section>

      <section className="course-center-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kurs Merkezinize Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(46, 125, 50, 0.1)', color: '#2e7d32'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="course-center-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Kurs Merkezinize Sağlayacağı Avantajlar</h2>
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

      <section className="course-center-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kurs Merkezi Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#e8f5e9'}}>
                <h3 className="beauty-salon-pricing-title">Başarı Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#2e7d32'}}>8.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Dinamik ve Motive Edici Tasarım</li>
                  <li>Detaylı Kurs Tanıtım Sayfaları</li>
                  <li>Eğitmen Kadrosu Bölümü</li>
                  <li>Online Kayıt ve Başvuru Formu</li>
                  <li>Blog ve Başarı Hikayeleri</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#2e7d32'}}>Hemen Başla</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="course-center-faq">
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

      <section className="course-center-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Eğitimdeki Farkınızı Göstermenin Zamanı Geldi</h2>
          <p className="beauty-salon-cta-description">Potansiyel öğrencilerinize ulaşmak, kayıtlarınızı artırmak ve başarılarınızı duyurmak için profesyonel bir web sitesine sahip olun.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#fdd835', color: '#2e7d32'}}>Ücretsiz Analiz İsteyin</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCenterWebsite; 