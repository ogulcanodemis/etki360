import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './PreschoolWebsite.css';

const PreschoolWebsite = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kreş ve Anaokulu Web Sitesi Tasarımı",
    "description": "Kreş, anaokulu ve gündüz bakımevleri için ebeveynlere güven veren, sıcak ve bilgilendirici web sitesi çözümleri.",
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
        "name": "Bir kreş web sitesinde velilerin en çok dikkat ettiği şey nedir?",
        "acceptedAnswer": {
          "text": "Veliler için en önemli faktör güvendir. Web sitesi, kurumun temizliği, güvenliği (kamera sistemi bilgisi vb.), eğitim anlayışı, öğretmenlerin tecrübesi ve şefkati hakkında net ve şeffaf bilgiler sunmalıdır. Günlük aktivite programı, yemek menüsü ve bol bol fotoğraf içeren bir galeri, velilerin güvenini kazanmada çok etkilidir."
        }
      },
      {
        "@type": "Question",
        "name": "Web sitesi üzerinden veli iletişimi nasıl sağlanır?",
        "acceptedAnswer": {
          "text": "Web sitesi, veli iletişimini güçlendirmek için harika bir platformdur. Şifreli bir 'Veli Paneli' oluşturularak her velinin sadece kendi çocuğuyla ilgili özel duyuruları, fotoğrafları veya gelişim raporlarını görmesi sağlanabilir. Ayrıca, genel duyurular, etkinlik takvimi ve acil durum bildirimleri için de kullanılabilir."
        }
      }
    ]
  };

  const features = [
    { title: "Sıcak ve Güven Veren Tasarım", description: "Pastel renkler, sevimli ikonlar ve bolca fotoğraf kullanarak ebeveynlere sıcak bir karşılama sunun.", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
    { title: "Yemek Menüsü ve Aktivite Programı", description: "Haftalık veya aylık olarak güncellenebilen yemek menüsü ve eğitim/oyun programı bölümleri.", icon: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z" },
    { title: "Fotoğraf ve Video Galerisi", description: "Çocukların etkinliklerini, oyun alanlarını ve sınıfları sergileyen, velilerin içini rahatlatacak galeriler.", icon: "M22 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM11 9l2.5 4L17 6l4 8H3l5-7z" },
    { title: "Veliye Özel Panel Entegrasyonu", description: "Velilerin çocuklarının gelişimini takip edebileceği, öğretmenlerle iletişim kurabileceği güvenli bir panel.", icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" }
  ];

  const benefits = [
    { title: "Veli Güvenini Kazanma", description: "Şeffaf, bilgilendirici ve sıcak bir web sitesi ile en değerli varlıklarını size emanet edecek velilerin güvenini kazanın." },
    { title: "Kayıt Taleplerini Artırma", description: "Okulunuzun farkını ve kalitesini web sitenizle göstererek kayıt dönemlerinde daha fazla başvuru alın." },
    { title: "İletişimi Kolaylaştırma", description: "Duyurular, menüler ve programlar gibi bilgileri tek bir yerden paylaşarak telefon trafiğini azaltın ve iletişimi kolaylaştırın." },
    { title: "Pozitif Kurum İmajı", description: "Çocuklara verdiğiniz değeri ve önemi gösteren profesyonel bir web sitesi ile kurumunuzun pozitif imajını güçlendirin." }
  ];
  
  return (
    <div className="preschool-website-page">
      <Helmet>
        <title>Kreş ve Anaokulu Web Sitesi | Güvenli ve Eğlenceli Eğitim</title>
        <meta name="description" content="Kreşler, anaokulları ve gündüz bakımevleri için velilere güven veren, çocuk odaklı, sıcak ve interaktif web sitesi çözümleri." />
        <meta name="keywords" content="kreş web sitesi, anaokulu web sitesi, gündüz bakımevi, okul öncesi eğitim, çocuk gelişimi" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/egitim/kres-anaokulu-web-sitesi" />
      </Helmet>

      <section className="preschool-hero">
        <div className="container">
          <h1 className="section-title">Minik Kalplerin <span className="highlight">Büyük Dünyasına</span> Hoş Geldiniz</h1>
          <p className="section-description">
            Çocukların güvenle ve neşeyle öğrendiği, velilerin ise içi rahat bir şekilde takip edebildiği, sevgi dolu dijital bir ortam yaratıyoruz.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ff69b4', borderColor: '#ff69b4', color: '#fff'}}>Hemen Bilgi Alın</Link>
            <Link to="/hakkimizda" className="btn-outline" style={{borderColor: '#4a4a4a', color: '#4a4a4a'}}>Okulumuzu Tanıyın</Link>
          </div>
        </div>
      </section>

      <section className="preschool-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Anaokulunuza Özel Web Sitesi Özellikleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(255, 105, 180, 0.1)', color: '#ff69b4'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="preschool-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Web Sitenizin Kurumunuza Sağlayacağı Güzellikler</h2>
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

      <section className="preschool-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Okul Öncesi Eğitim Paketi</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#ffebf2'}}>
                <h3 className="beauty-salon-pricing-title">Sevgi Dolu Yuva Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#ff69b4'}}>7.500 ₺ <span>+ KDV</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Sıcak ve İçten Tasarım</li>
                  <li>Yemek Menüsü ve Aktivite Takvimi</li>
                  <li>Fotoğraf ve Video Galerileri</li>
                  <li>Veli İletişim Formları</li>
                  <li>Güvenlik ve Gizlilik Odaklı Altyapı</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#ff69b4'}}>Ailemize Katılın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="preschool-faq">
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

      <section className="preschool-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">En Değerli Varlıklarınız İçin En İyi Başlangıç</h2>
          <p className="beauty-salon-cta-description">Okulunuzun sıcaklığını ve profesyonelliğini dijitalde de yansıtarak yeni ailelere ulaşın.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ff69b4', color: '#fff'}}>Randevu Alın</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreschoolWebsite; 