import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../SectoralSolutions.css';
import './VehicleTrackingSystem.css';

const VehicleTrackingSystem = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Araç Takip ve Filo Yönetim Sistemi",
    "description": "Nakliyat ve lojistik firmaları için geliştirilmiş, GPS tabanlı gerçek zamanlı araç takip, filo yönetimi ve raporlama yazılımı.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "15000",
      "priceCurrency": "TRY",
      "category": "Kurulum ve Lisanslama"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Araç takip sistemi bir nakliyat firmasına ne kazandırır?",
        "acceptedAnswer": {
          "text": "Araç takip sistemleri, yakıt maliyetlerini düşürür, rota optimizasyonu sağlar, sürücü performansını artırır, araç güvenliğini sağlar ve müşterilere anlık kargo durumu bilgisi sunarak müşteri memnuniyetini yükseltir. Kısacası, operasyonel verimliliği ve karlılığı doğrudan artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Sisteminiz mobil cihazlarla uyumlu mu?",
        "acceptedAnswer": {
          "text": "Evet, geliştirdiğimiz araç takip ve filo yönetim sistemi hem web tabanlı bir panele sahiptir hem de iOS ve Android cihazlar için özel mobil uygulamaları bulunmaktadır. Filo yöneticileri araçları diledikleri yerden anlık olarak takip edebilirler."
        }
      }
    ]
  };

  const features = [
    { title: "Gerçek Zamanlı GPS Takibi", description: "Tüm araçlarınızı harita üzerinde anlık olarak nerede olduklarını, hızlarını ve durumlarını izleyin.", icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" },
    { title: "Detaylı Rota ve Sefer Raporları", description: "Geçmiş seferleri, kat edilen mesafeyi, duraklama sürelerini ve yakıt tüketimini raporlayın.", icon: "M14.5 12.5l-4 4L9 15l-1.5 1.5L9 18l1.5-1.5L12 18l3-3-1.5-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z" },
    { title: "Sürücü Performans Analizi", description: "Sürücülerin ani hızlanma, sert fren ve rölanti süreleri gibi verilerini analiz ederek verimliliği artırın.", icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z" },
    { title: "Mobil Uygulamalar (iOS & Android)", description: "Yöneticiler için geliştirilmiş mobil uygulamalar ile filonuzu cebinizden yönetin.", icon: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z" }
  ];

  const benefits = [
    { title: "Maliyet Kontrolü", description: "Yakıt ve bakım giderlerini optimize ederek operasyonel maliyetlerinizi önemli ölçüde düşürün." },
    { title: "Operasyonel Verimlilik", description: "Rota optimizasyonu ve anlık takip ile teslimat sürelerini kısaltın, verimliliği artırın." },
    { title: "Güvenlik ve Sorumluluk", description: "Araçların ve yüklerin güvenliğini artırın, sürücü sorumluluğunu ve hesap verebilirliği sağlayın." },
    { title: "Müşteri Memnuniyeti", description: "Müşterilerinize anlık kargo takip imkanı sunarak hizmet kalitenizi ve memnuniyeti yükseltin." }
  ];

  return (
    <div className="vehicle-tracking-system-page">
      <Helmet>
        <title>Araç Takip ve Filo Yönetim Sistemi | Nakliyat ve Lojistik</title>
        <meta name="description" content="Nakliyat ve lojistik firmaları için GPS tabanlı gerçek zamanlı araç takip, filo yönetimi ve raporlama yazılımı. Maliyetleri düşürün, verimliliği artırın." />
        <meta name="keywords" content="araç takip sistemi, filo yönetimi yazılımı, gps takip, nakliyat yazılımı, lojistik yönetimi, araç takip fiyatları" />
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link rel="canonical" href="https://etki360.com/sektorel-cozumler/nakliyat/arac-takip-yonetim-sistemi" />
      </Helmet>

      <section className="vehicle-tracking-hero">
        <div className="container">
          <h1 className="section-title"><strong>Araç Takip ve Filo Yönetim</strong> Sistemiyle <span className="highlight">Tam Kontrol</span></h1>
          <p className="section-description">
            Filonuzdaki tüm araçları anlık olarak izleyin, rota ve yakıt verimliliğini optimize edin, operasyonel maliyetlerinizi düşürerek karlılığınızı artırın.
          </p>
          <div className="beauty-salon-hero-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ff6f61', borderColor: '#ff6f61', color: '#0f2027'}}>Demo Talep Edin</Link>
            <Link to="/ozellikler" className="btn-outline" style={{borderColor: '#fff', color: '#fff'}}>Tüm Özellikler</Link>
          </div>
        </div>
      </section>

      <section className="vehicle-tracking-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sistemin Öne Çıkan Yetenekleri</h2>
          </div>
          <div className="beauty-salon-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="beauty-salon-feature-card">
                 <div className="beauty-salon-feature-icon" style={{backgroundColor: 'rgba(255, 111, 97, 0.1)', color: '#ff6f61'}}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon} /></svg></div>
                <h3 className="beauty-salon-feature-title"><strong>{feature.title}</strong></h3>
                <p className="beauty-salon-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vehicle-tracking-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Filo Yönetim Sisteminin İşletmenize Faydaları</h2>
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

      <section className="vehicle-tracking-pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Yatırım ve Fiyatlandırma</h2>
          </div>
          <div className="beauty-salon-pricing-grid">
            <div className="beauty-salon-pricing-card">
              <div className="beauty-salon-pricing-header" style={{backgroundColor: '#e9ecef'}}>
                <h3 className="beauty-salon-pricing-title">Filo Yönetim Paketi</h3>
                <div className="beauty-salon-pricing-price" style={{color: '#0f2027'}}>15.000 ₺'den başlayan<span> kurulum</span></div>
              </div>
              <div className="beauty-salon-pricing-features">
                <ul>
                  <li>Web ve Mobil Arayüzler</li>
                  <li>Sınırsız Araç Takibi</li>
                  <li>Detaylı Raporlama Modülü</li>
                  <li>Sürücü Puanlama Sistemi</li>
                  <li>API Entegrasyon Desteği</li>
                  <li>7/24 Teknik Destek</li>
                </ul>
              </div>
              <Link to="/iletisim" className="beauty-salon-pricing-button" style={{backgroundColor: '#0f2027'}}>Fiyat Teklifi Alın</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicle-tracking-faq">
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

      <section className="vehicle-tracking-cta">
        <div className="container">
          <h2 className="beauty-salon-cta-title">Filonuzu Geleceğe Taşıyın</h2>
          <p className="beauty-salon-cta-description">Operasyonel verimliliği en üst düzeye çıkarmak ve rekabette öne geçmek için bizimle iletişime geçin.</p>
          <div className="beauty-salon-cta-buttons">
            <Link to="/iletisim" className="btn-primary" style={{backgroundColor: '#ff6f61', color: '#0f2027'}}>Ücretsiz Demo İçin Kaydolun</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehicleTrackingSystem; 