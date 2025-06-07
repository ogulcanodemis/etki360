import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './SectoralSolutions.css';

// İkon bileşenleri
import { FaHospital, FaTruck, FaCubes, FaBuilding, FaCut, FaBalanceScale, FaGraduationCap, FaUtensils } from 'react-icons/fa';

const SectoralSolutions = () => {
  const location = useLocation();
  const [filteredSectors, setFilteredSectors] = useState([]);
  const [currentSector, setCurrentSector] = useState(null);
  const [pageTitle, setPageTitle] = useState('Sektörünüze Özel Web Çözümleri');

  const solutionsData = [
    {
      id: 'saglik',
      icon: <FaHospital />,
      title: 'Sağlık Sektörü',
      description: 'Sağlık sektöründeki işletmeler için özel web çözümleri. Hasta odaklı, güven veren ve profesyonel web siteleri.',
      solutions: [
        { id: 'klinik', title: 'Klinik Web Sitesi', description: 'Klinikler için modern, hasta odaklı web sitesi çözümleri', url: '/sektorel-cozumler/saglik/klinik-web-sitesi' },
        { id: 'sac-ekim', title: 'Saç Ekim Kliniği Web Sitesi', description: 'Saç ekim klinikleri için özel tasarlanmış, dönüşüm odaklı web siteleri', url: '/sektorel-cozumler/saglik/sac-ekim-klinigi' },
        { id: 'hastane', title: 'Hastane Web Sitesi', description: 'Hastaneler için kurumsal, bilgilendirici ve hasta odaklı web siteleri', url: '/sektorel-cozumler/saglik/hastane-web-sitesi' },
        { id: 'dis-klinigi', title: 'Diş Kliniği Web Sitesi', description: 'Diş klinikleri için modern, randevu odaklı web sitesi çözümleri', url: '/sektorel-cozumler/saglik/dis-klinigi-web-sitesi' }
      ]
    },
    {
      id: 'nakliyat',
      icon: <FaTruck />,
      title: 'Nakliyat Sektörü',
      description: 'Nakliyat ve lojistik firmaları için özel web çözümleri. Müşteri güveni oluşturan, hizmet odaklı web siteleri.',
      solutions: [
        { id: 'nakliyat-firmasi', title: 'Nakliyat Firması Web Sitesi', description: 'Nakliyat firmaları için profesyonel, güven veren web sitesi çözümleri', url: '/sektorel-cozumler/nakliyat/nakliye-firmasi' },
        { id: 'kargo-firmasi', title: 'Kargo Firması Web Sitesi', description: 'Kargo firmaları için takip sistemi entegreli web siteleri', url: '/sektorel-cozumler/nakliyat/kargo-firmasi' },
        { id: 'evden-eve-nakliyat', title: 'Evden Eve Nakliyat Sitesi', description: 'Evden eve taşıma şirketleri için rezervasyon ve fiyat teklifi odaklı siteler', url: '/sektorel-cozumler/nakliyat/evden-eve-nakliyat' },
        { id: 'lojistik-firmasi', title: 'Lojistik Firması Web Sitesi', description: 'Lojistik firmaları için kurumsal ve hizmet odaklı profesyonel web siteleri', url: '/sektorel-cozumler/nakliyat/lojistik-firmasi' }
      ]
    },
    {
      id: 'hizmet',
      icon: <FaCubes />,
      title: 'Hizmet Sektörü',
      description: 'Hizmet sektöründeki işletmeler için özel web çözümleri. Müşterilerinize hızlı ulaşmanızı sağlayan web siteleri.',
      solutions: [
        { id: 'cilingir', title: 'Çilingir Web Sitesi', description: 'Çilingir hizmetleri için acil ulaşım odaklı web sitesi çözümleri', url: '/sektorel-cozumler/hizmet/cilingir' },
        { id: 'tamir', title: 'Tamir Servisi Web Sitesi', description: 'Tamir ve servis hizmetleri için özel tasarlanmış web siteleri', url: '/sektorel-cozumler/hizmet/tamir-servisi' },
        { id: 'cekici', title: 'Çekici Hizmeti Web Sitesi', description: 'Çekici ve yol yardım hizmetleri için acil erişim odaklı web siteleri', url: '/sektorel-cozumler/hizmet/cekici-hizmeti' },
        { id: 'temizlik', title: 'Temizlik Şirketi Web Sitesi', description: 'Temizlik firmaları için profesyonel ve randevu odaklı web sitesi çözümleri', url: '/sektorel-cozumler/hizmet/temizlik-sirketi' }
      ]
    },
    {
      id: 'insaat-dekorasyon',
      icon: <FaBuilding />,
      title: 'İnşaat ve Dekorasyon',
      description: 'İnşaat ve dekorasyon sektöründeki işletmeler için özel web çözümleri. Portföyünüzü sergileyebileceğiniz etkileyici web siteleri.',
      solutions: [
        { id: 'mimar', title: 'Mimar Web Sitesi', description: 'Mimarlar için portföy odaklı, etkileyici web sitesi çözümleri', url: '/sektorel-cozumler/insaat-dekorasyon/mimar' },
        { id: 'boya-badana', title: 'Boya Badana Hizmeti Web Sitesi', description: 'Boya badana hizmetleri için özel tasarlanmış web siteleri', url: '/sektorel-cozumler/insaat-dekorasyon/boya-badana' },
        { id: 'dekorasyon', title: 'Dekorasyon Firması Web Sitesi', description: 'Dekorasyon firmaları için görsel odaklı, etkileyici web siteleri', url: '/sektorel-cozumler/insaat-dekorasyon/dekorasyon' },
        { id: 'insaat-firmasi', title: 'İnşaat Firması Web Sitesi', description: 'İnşaat firmaları için kurumsal ve proje odaklı profesyonel web siteleri', url: '/sektorel-cozumler/insaat-dekorasyon/insaat-firmasi' }
      ]
    },
    {
      id: 'guzellik',
      icon: <FaCut />,
      title: 'Güzellik',
      description: 'Güzellik salonları, kuaförler ve estetik merkezleri için online randevu ve portfolyo odaklı web çözümleri.',
      solutions: [
        { id: 'guzellik-salonu', title: 'Güzellik Salonu Web Sitesi', description: 'Cilt bakımı, makyaj ve diğer güzellik hizmetleri için estetik ve modern web siteleri.', url: '/sektorel-cozumler/guzellik/guzellik-salonu-web-sitesi' },
        { id: 'protez-tirnak', title: 'Protez Tırnak Web Sitesi', description: 'Nail art stüdyoları için sanatsal çalışmaları sergileyen, randevu sistemli web siteleri.', url: '/sektorel-cozumler/guzellik/protez-tirnak-web-sitesi' },
        { id: 'epilasyon', title: 'Epilasyon Merkezi Web Sitesi', description: 'Lazer ve diğer epilasyon hizmetleri için güven veren, teknoloji odaklı web siteleri.', url: '/sektorel-cozumler/guzellik/epilasyon-merkezi-web-sitesi' },
        { id: 'kuafor', title: 'Kuaför Salonu Web Sitesi', description: 'Kuaför salonları için online randevu ve çalışma galerisi içeren modern web siteleri.', url: '/sektorel-cozumler/guzellik/kuafor-salonu-web-sitesi' }
      ]
    },
    {
      id: 'hukuk',
      icon: <FaBalanceScale />,
      title: 'Hukuk',
      description: 'Avukatlar, hukuk büroları ve danışmanlık şirketleri için özel olarak tasarlanmış web çözümleri.',
      solutions: [
        { id: 'avukat-web-sitesi', title: 'Avukat Web Sitesi', description: 'Hukuk büroları ve bireysel avukatlar için güven veren, profesyonel web sitesi çözümleri', url: '/sektorel-cozumler/hukuk/avukat-web-sitesi' },
        { id: 'kurumsal-hukuk', title: 'Kurumsal Hukuk Danışmanlığı', description: 'Şirketler hukuku, M&A ve sözleşmeler alanında uzmanlaşmış bürolar için web çözümleri.', url: '/sektorel-cozumler/hukuk/kurumsal-hukuk-danismanligi' },
        { id: 'is-hukuku', title: 'İş Hukuku Danışmanlığı', description: 'İşçi ve işveren hukuku, sözleşmeler ve dava süreçleri için bilgilendirici web siteleri.', url: '/sektorel-cozumler/hukuk/is-hukuku-danismanligi' },
        { id: 'ceza-hukuku', title: 'Ceza Hukuku Web Sitesi', description: 'Ceza hukuku alanında uzmanlaşmış avukatlar için profesyonel ve bilgilendirici web siteleri.', url: '/sektorel-cozumler/hukuk/ceza-hukuku-web-sitesi' }
      ]
    },
    {
      id: 'egitim',
      icon: <FaGraduationCap />,
      title: 'Eğitim',
      description: 'Özel okullar, kurs merkezleri, dil okulları ve kreşler için tasarlanmış web çözümleri.',
      solutions: [
        { id: 'ozel-okul', title: 'Özel Okul Web Sitesi', description: 'Kolejler ve özel okullar için veli ve öğrenci odaklı, profesyonel web siteleri.', url: '/sektorel-cozumler/egitim/ozel-okul-web-sitesi' },
        { id: 'kurs-merkezi', title: 'Kurs Merkezi Web Sitesi', description: 'Her branştan kurs merkezi için öğrenci ve başarı odaklı, dinamik web siteleri.', url: '/sektorel-cozumler/egitim/kurs-merkezi-web-sitesi' },
        { id: 'dil-okulu', title: 'Dil Okulu Web Sitesi', description: 'Uluslararası standartlarda, interaktif ve çok dilli web sitesi çözümleri.', url: '/sektorel-cozumler/egitim/dil-okulu-web-sitesi' },
        { id: 'kres-anaokulu', title: 'Kreş ve Anaokulu Web Sitesi', description: 'Ebeveynlere güven veren, sıcak, sevecen ve çocuk odaklı web siteleri.', url: '/sektorel-cozumler/egitim/kres-anaokulu-web-sitesi' }
      ]
    },
    {
      id: 'yiyecek',
      icon: <FaUtensils />,
      title: 'Yiyecek & İçecek',
      description: 'Restoran, kafe ve catering firmaları için online menü, sipariş ve rezervasyon sistemli modern web siteleri.',
      solutions: [
        { id: 'restoran-web-sitesi', title: 'Restoran Web Sitesi', description: 'Dijital menü, QR menü ve online rezervasyon özellikli, iştah açan modern web siteleri.', url: '/sektorel-cozumler/yiyecek/restoran-web-sitesi' },
        { id: 'kafe-ve-pastane-web-sitesi', title: 'Kafe ve Pastane Web Sitesi', description: 'Sıcak atmosferinizi yansıtan, online sipariş ve kampanya modüllü web çözümleri.', url: '/sektorel-cozumler/yiyecek/kafe-ve-pastane-web-sitesi' },
        { id: 'catering-web-sitesi', title: 'Catering Firması Web Sitesi', description: 'Etkinlik, davet ve organizasyonlar için menü ve talep yönetimi sunan profesyonel siteler.', url: '/sektorel-cozumler/yiyecek/catering-web-sitesi' },
        { id: 'online-yemek-siparisi-web-sitesi', title: 'Online Yemek Siparişi Sitesi', description: 'Kendi komisyonsuz sipariş sisteminizi kurarak aracılara veda edin ve kârınızı artırın.', url: '/sektorel-cozumler/yiyecek/online-yemek-siparisi-web-sitesi' }
      ]
    }
  ];

  useEffect(() => {
    const path = location.pathname;
    
    // Ana sektörler sayfası için tüm sektörleri göster
    if (path === '/sektorel-cozumler') {
      setFilteredSectors(solutionsData);
      setCurrentSector(null);
      setPageTitle('Sektörünüze Özel Web Çözümleri');
      return;
    }
    
    // Alt sektör sayfaları için filtrele
    const pathParts = path.split('/');
    if (pathParts.length >= 3) {
      const sectorId = pathParts[2]; // sektorel-cozumler/saglik
      const sector = solutionsData.find(s => s.id === sectorId);
      
      if (sector) {
        setFilteredSectors([sector]); // Sadece ilgili sektörü göster
        setCurrentSector(sector);
        setPageTitle(`${sector.title} İçin Özel Web Çözümleri`);
      } else {
        setFilteredSectors(solutionsData); // Eşleşme yoksa tüm sektörleri göster
        setCurrentSector(null);
        setPageTitle('Sektörünüze Özel Web Çözümleri');
      }
    }
  }, [location.pathname]);

  return (
    <div className="sectoral-solutions-page">
      <Helmet>
        <title>{pageTitle} - İhtiyacınıza Özel Web Sitesi Tasarımı</title>
        <meta name="description" content="Güzellik, danışmanlık, nakliyat, hukuk ve eğitim gibi birçok farklı sektöre özel, SEO uyumlu ve modern web sitesi çözümleri sunuyoruz." />
        <link rel="canonical" href={`https://etki360.com${location.pathname}`} />
      </Helmet>

      <section className="page-banner">
        <div className="container">
          <h1>{pageTitle === 'Sektörünüze Özel Web Çözümleri' ? 
            <>Sektörünüze Özel <span className="text-orange">Web Çözümleri</span></> : 
            pageTitle}
          </h1>
          <p>Her sektörün kendine has ihtiyaçları vardır. Sektörünüze özel tasarlanmış web çözümleriyle dijital dünyada fark yaratın. 3 gün içinde teslim ve %100 müşteri memnuniyeti garantisi.</p>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Neden Sektör Bazlı Çözümler?</h2>
          <p className="section-description">Genel web sitelerinden farklı olarak, sektörünüzün ihtiyaçlarına özel tasarlanmış çözümler sunuyoruz</p>
          
          <div className="features-container">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Sektör Uzmanlığı</h3>
              <p>Her sektörün kendine has ihtiyaçlarını anlıyor ve buna özel çözümler sunuyoruz</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-smile"></i>
              </div>
              <h3>Müşteri Memnuniyeti</h3>
              <p>%100 müşteri memnuniyeti garantisi ile çalışıyoruz</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Hızlı Teslimat</h3>
              <p>Sadece 3 gün içinde profesyonel web sitenizi teslim ediyoruz</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fas fa-pen-fancy"></i>
              </div>
              <h3>Özelleştirilebilir Tasarım</h3>
              <p>Markanıza ve sektörünüze özel tasarımlar ile fark yaratın</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectors-section">
        <div className="container">
          <div className="sectors-grid">
            {filteredSectors.map(sector => (
              <div key={sector.id} className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon">
                    {sector.icon}
                  </div>
                  <h2 className="sector-title">{sector.title}</h2>
                </div>
                <p className="sector-description">{sector.description}</p>
                <div className="sector-solutions">
                  {sector.solutions.map(solution => (
                    <div key={solution.id} className="solution-item">
                      <Link to={solution.url} className="solution-link">
                        <span>{solution.title}</span>
                        <span className="arrow-icon">→</span>
                      </Link>
                      <p className="solution-description">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="delivery-guarantee">
        <div className="container">
          <div className="guarantee-container">
            <div className="guarantee-content">
              <h2>3 Günde Teslim Garantisi</h2>
              <p>Acil web sitesi ihtiyacınız mı var? Endişelenmeyin! Özel süreç yönetimimiz ve hazır sektörel şablonlarımız sayesinde web sitenizi sadece 3 gün içinde teslim ediyoruz.</p>
              
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-marker"></div>
                  <div className="step-content">
                    <h3>İhtiyaç Analizi</h3>
                    <p>İlk gün ihtiyaçlarınızı analiz ediyor ve tasarım konseptini oluşturuyoruz</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-marker"></div>
                  <div className="step-content">
                    <h3>Hızlı Geliştirme</h3>
                    <p>İkinci gün sitenizi geliştiriyor ve içerikleri yerleştiriyoruz</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-marker"></div>
                  <div className="step-content">
                    <h3>Test ve Teslim</h3>
                    <p>Üçüncü gün testleri tamamlayıp sitenizi yayına alıyoruz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="guarantee-visual">
              <div className="days-counter">
                <h3>Hızlı Teslimat</h3>
                <div className="days-number">
                  <span className="number">3</span>
                  <span className="unit">GÜN</span>
                </div>
                <p>%100 Müşteri Memnuniyeti Garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectoralSolutions; 