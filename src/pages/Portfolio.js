import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 12; // Sayfa başına düşen proje sayısı

  const portfolioProjects = [
    {
      id: 1,
      title: "Yaytur Turizm – Profesyonel Taşımacılık Hizmetleri",
      category: "corporate",
      image: "/assets/images/portfolio/yaytur-turizm-kurumsal-etki360.png",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Yaytur Turizm, 2007 yılından bu yana İstanbul Beylikdüzü'nde bulunan operasyon merkezi ile onbinlerce kişiye hizmet vermiş, tekil ve toplu taşımacılık işlemleri yapan kurumsal bir taşımacılık firmasıdır. Bu proje, firmanın kurumsal kimliğini, hizmetlerini ve müşteri memnuniyetini öne çıkaran, SEO uyumlu ve responsive bir web sitesi olarak HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir. Site, modern tasarımı ve kullanıcı dostu arayüzüyle sektörde öne çıkmaktadır.",
      features: ["Kurumsal Kimlik", "Hizmet Tanıtımı", "Responsive Tasarım", "SEO Uyumlu", "Müşteri Memnuniyeti Odaklı", "Modern Arayüz"],
      liveUrl: "https://yaytur.com.tr",
      completionDate: "2023",
      client: "Yaytur Turizm",
      imageAlt: "Yaytur Turizm Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, taşımacılık sektöründe öne çıkan, modern ve SEO uyumlu tam ekran web sitesi görseli."
    },
    {
      id: 8,
      title: "MAK Management – Enerji ve Finans Danışmanlığı",
      category: "corporate",
      image: "/assets/images/portfolio/mak-management-kurumsal-etki360.png",
      imageAlt: "MAK Management Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, enerji ve finans sektöründe öne çıkan, modern ve SEO uyumlu tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "MAK Management, enerji ve finans sektörlerinde uzmanlaşmış, kurumsal bankacılık, sermaye piyasaları, leasing ve faktoring alanlarında deneyimli ekibiyle geniş bir yelpazede hizmet sunan bir danışmanlık firmasıdır. Proje finansmanı, kurumsal finansman, risk yönetimi, şirket birleşme/satın alma ve yenilenebilir enerji yatırımları gibi alanlarda kapsamlı çözümler sunar. Bu kurumsal web sitesi, firmanın profesyonel kimliğini ve hizmetlerini öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Enerji ve Finans Sektörü Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://makmanagement.net",
      completionDate: "2024",
      client: "MAK Management"
    },
    {
      id: 9,
      title: "Usta Kokoreç – Avrupa'nın İlk ve Tek Kokoreç Fabrikası",
      category: "corporate",
      image: "/assets/images/portfolio/usta-kokorec-kurumsal-etki360.png",
      imageAlt: "Usta Kokoreç Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, çok dilli, Avrupa'nın ilk ve tek kokoreç fabrikasının modern ve SEO uyumlu tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Usta Kokoreç, 1990 yılında İzmir'de kurulmuş, 2019'dan itibaren Belçika'da ve 2020'den sonra tüm Avrupa'da hizmet veren, Avrupa'nın ilk ve tek yasal izinli kokoreç fabrikasıdır. Tüm yasal izinlere ve helal sertifikasına sahip olan firma, hijyenik koşullarda üretim yapmakta ve 24/7 Avrupa'nın her yerine dağıtım sağlamaktadır. Çok dilli destekli bu kurumsal web sitesi, firmanın kalite, hijyen ve müşteri memnuniyetini öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Çok Dilli Destek",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Hijyen ve Helal Sertifikalı Üretim",
        "Modern Arayüz"
      ],
      liveUrl: "https://ustakokorec.be/en/index.html",
      completionDate: "2024",
      client: "Usta Kokoreç"
    },
    {
      id: 10,
      title: "Diva Ses – İşitme Cihazları ve Testi Merkezi",
      category: "health",
      image: "/assets/images/portfolio/diva-ses-isitme-kurumsal-etki360.png",
      imageAlt: "Diva Ses Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, işitme cihazı ve işitme testi özellikli, modern ve SEO uyumlu tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Diva Ses, 2005 yılında aile şirketi olarak kurulmuş, işitme cihazı ve odyoloji sektöründe uzmanlaşmış, kurumsal dönüşümünü tamamlamış bir sağlık merkezidir. Site içerisinde online işitme testi, randevu sistemi ve işitme cihazı tanıtımları gibi özel fonksiyonlar bulunur. Bu kurumsal web sitesi, firmanın uzmanlığını, müşteri memnuniyetini ve sağlık odaklı yaklaşımını öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Online İşitme Testi",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Sağlık Sektörü Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://divasesisitme.com",
      completionDate: "2024",
      client: "Diva Ses"
    },
    {
      id: 11,
      title: "Ontur Travel – Kurumsal Seyahat ve E-Rehber Sistemi",
      category: "tourism",
      image: "/assets/images/portfolio/ontur-turizm-kurumsal-etki360.png",
      imageAlt: "Ontur Travel Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, turizm ve seyahat sektöründe öne çıkan, e-rehber paneli ve modern arayüzlü tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Ontur Travel, 2012 yılından beri turizm sektöründe faaliyet gösteren, İstanbul merkezli ve TÜRSAB üyesi bir seyahat acentesidir. Kurumsal ve bireysel müşterilere uçak bileti, otel rezervasyonu, vize işlemleri, transfer, kurumsal turlar ve fuar organizasyonları gibi geniş bir hizmet yelpazesi sunar. Kullanıcılar için giriş gerektirmeyen e-rehber paneli ile sektörde fark yaratır. Bu kurumsal web sitesi, firmanın profesyonel hizmetlerini ve müşteri memnuniyetini öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "E-Rehber Paneli",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Turizm ve Seyahat Sektörü Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://onturtravel.com",
      completionDate: "2024",
      client: "Ontur Travel"
    },
    {
      id: 12,
      title: "Schengenci – Online Vize Danışmanlığı ve Randevu Sistemi",
      category: "tourism",
      image: "/assets/images/portfolio/schengenci-kurumsal-etki360.png",
      imageAlt: "Schengenci Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, online vize randevu sistemi ve modern arayüzlü tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Schengenci, 2012 yılından beri turizm sektöründe faaliyet gösteren, İstanbul merkezli ve TÜRSAB üyesi bir seyahat acentesidir. Profesyonel vize danışmanları ile bireysel ve kurumsal müşterilere tüm vizelerde online vize randevusu ve danışmanlık hizmeti sunar. Bu kurumsal web sitesi, firmanın uzmanlığını, müşteri memnuniyetini ve online hizmet altyapısını öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Online Vize Randevu Sistemi",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Turizm ve Vize Sektörü Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://schengenci.com",
      completionDate: "2024",
      client: "Schengenci"
    },
    {
      id: 13,
      title: "Uludağ Veteriner – Online Randevu ve Pet Sağlığı Merkezi",
      category: "petshop",
      image: "/assets/images/portfolio/uludag-vet-kurumsal-etki360.png",
      imageAlt: "Uludağ Veteriner Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, online randevu sistemi ve modern arayüzlü tam ekran web sitesi görseli.",
      technologies: ["React", "PHP", "Bootstrap", "HTML", "CSS", "JS"],
      description: "Uludağ Veteriner Kliniği, 2019 yılından beri sahipli ve sahipsiz tüm pet dostlarımızı korumak, yaşam kalitelerini artırmak ve hastalandıklarında yanlarında olmak için hizmet veren bir kliniktir. Online randevu sistemi, blog, galeri ve müşteri yorumları gibi fonksiyonlarla kullanıcı dostu ve modern bir deneyim sunar. Bu kurumsal web sitesi, firmanın uzmanlığını, müşteri memnuniyetini ve dijital hizmet altyapısını öne çıkaran, SEO uyumlu ve responsive bir yapı ile React ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Online Randevu Sistemi",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Pet Sağlığı ve Veterinerlik Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://www.uludagvet.com",
      completionDate: "2024",
      client: "Uludağ Veteriner"
    },
    {
      id: 14,
      title: "Uğur Özkol Sigorta – Online Sigorta Teklifi ve Şube Başvuru Sistemi",
      category: "corporate",
      image: "/assets/images/portfolio/ugur-ozkol-sigorta-kurumsal-etki360.png",
      imageAlt: "Uğur Özkol Sigorta Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, online sigorta teklifi ve şube başvuru sistemi ile modern arayüzlü tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "PHP", "Bootstrap", "JS"],
      description: "Uğur Özkol Sigorta, Gaziantep merkezli olarak 16 yıllık tecrübesiyle sektörde liderliğe oynayan, müşteri odaklı ve yenilikçi bir sigorta şirketidir. Araç, konut, işyeri, hayat, sağlık ve seyahat sigortası gibi tüm sigorta çeşitlerinde profesyonel danışmanlık, hızlı destek ve uygun fiyat avantajı sunar. Online sigorta teklifi alma ve şube başvurusu gibi dijital hizmetlerle müşteri deneyimini üst seviyeye taşır. Bu kurumsal web sitesi, firmanın güvenilirliğini, uzmanlığını ve müşteri memnuniyetini öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS ve PHP kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Online Sigorta Teklifi Sistemi",
        "Şube Başvuru Sistemi",
        "Kurumsal Kimlik",
        "Hizmet Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Sigortacılık Sektörü Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://ugurozkolsigorta.com",
      completionDate: "2024",
      client: "Uğur Özkol Sigorta"
    },
    {
      id: 15,
      title: "Sadık Dostlar – E-Ticaret Petshop ve Online Alışveriş Platformu",
      category: "ecommerce",
      image: "/assets/images/portfolio/sadik-dostlar-e-ticaret-etki360.png",
      imageAlt: "Sadık Dostlar E-Ticaret Web Sitesi – Etki360 tarafından geliştirilen, WordPress ve WooCommerce altyapılı, modern ve SEO uyumlu tam ekran petshop sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "WordPress", "WooCommerce"],
      description: "Sadık Dostlar, 2020 yılında İstanbul'da kurulan ve evcil hayvanlar ile akvaryum hayvanlarına yönelik ürün ve hizmetler sunan yenilikçi bir e-ticaret platformudur. WordPress ve WooCommerce altyapısı ile geliştirilen bu site, kedi, köpek, kuş, balık ve aksesuar kategorilerinde binlerce ürünü, ücretsiz kargo ve 7/24 destek avantajlarıyla müşterilerine sunar. Satış sonrası destek, kolay iade ve değişim, müşteri memnuniyeti ve hayvan sağlığına öncelik veren bir anlayışla hizmet vermektedir. Bu e-ticaret sitesi, SEO uyumlu ve responsive bir yapı ile Etki360 tarafından geliştirilmiştir.",
      features: [
        "E-Ticaret Altyapısı",
        "WordPress & WooCommerce",
        "Ücretsiz Kargo",
        "24/7 Destek",
        "Satış Sonrası Destek",
        "Kolay İade ve Değişim",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Petshop ve Hayvan Sağlığı Odaklı",
        "Modern Arayüz"
      ],
      liveUrl: "https://sadikdostlar.com",
      completionDate: "2024",
      client: "Sadık Dostlar Petshop"
    },
    {
      id: 16,
      title: "Notilus Landscape – Peyzaj ve Biyolojik Gölet Tasarımı",
      category: "landing",
      image: "/assets/images/portfolio/notilus-landscape-kurumsal-etki360.png",
      imageAlt: "Notilus Landscape Kurumsal Web Sitesi – Etki360 tarafından geliştirilen, peyzaj mimarlığı ve biyolojik gölet tasarımı odaklı, modern ve SEO uyumlu tam ekran web sitesi görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Notilus Landscape Design Ltd., peyzaj mimarı Özge tarafından 2017 yılında İngiltere Southampton'da kurulmuş, 14 yılı aşkın yurtiçi ve yurtdışı deneyimiyle villa bahçeleri, otel projeleri, kentsel parklar ve biyolojik göletler gibi çok çeşitli ölçeklerde projeler gerçekleştiren bir firmadır. Firma, konsept tasarımdan 3D modellemeye, uygulama ve müşteri yönetimine kadar tüm süreçleri profesyonelce yürütmektedir. Bu kurumsal web sitesi, firmanın uzmanlığını, portföyünü ve müşteri memnuniyetini öne çıkaran, SEO uyumlu ve responsive bir yapı ile HTML, CSS, JS, PHP ve Bootstrap kullanılarak Etki360 tarafından geliştirilmiştir.",
      features: [
        "Peyzaj ve Biyolojik Gölet Tasarımı",
        "Kurumsal Kimlik",
        "Portföy Sunumu",
        "3D Modelleme ve Animasyon",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Yurtdışı ve Yurtiçi Proje Deneyimi",
        "Modern Arayüz"
      ],
      liveUrl: "https://notiluslandscape.co.uk",
      completionDate: "2024",
      client: "Notilus Landscape Design Ltd."
    },
    {
      id: 17,
      title: "Dişçi & Medikal – Modern Diş Hekimliği ve Medikal Ürünler Şablonu",
      category: "health",
      image: "/assets/images/portfolio/disci-medikal-sablon-etki360.png",
      imageAlt: "Dişçi ve Medikal Ürünler Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran sağlık sektörü şablonu görseli.",
      technologies: ["React", "HTML", "CSS", "JS", "PHP", "Node.js", "Bootstrap"],
      description: "Dişçi ve medikal ürünler için tasarlanmış bu modern web sitesi şablonu, diş hekimliği hizmetleri, randevu sistemi, galeri, blog ve müşteri yorumları gibi fonksiyonlarla sağlık sektörüne özel olarak geliştirilmiştir. Responsive ve SEO uyumlu yapısı ile hem klinikler hem de medikal ürün satıcıları için uygundur. Etki360 tarafından React, HTML, CSS, JS, PHP, Node.js ve Bootstrap kullanılarak hazırlanmıştır.",
      features: [
        "Randevu Sistemi",
        "Diş Hekimliği Hizmetleri",
        "Medikal Ürün Tanıtımı",
        "Galeri ve Blog",
        "Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 18,
      title: "Sağlık & Medikal – Hastane ve Poliklinik Web Sitesi Şablonu",
      category: "health",
      image: "/assets/images/portfolio/saglik-medikal-sablon-etki360.png",
      imageAlt: "Sağlık ve Medikal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, hastane ve poliklinik için modern, SEO uyumlu tam ekran sağlık sektörü şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Node.js", "Bootstrap", "Tailwind CSS"],
      description: "Hastane ve polikliniklere özel olarak tasarlanmış bu modern web sitesi şablonu, doktor tanıtımları, randevu sistemi, blog, hizmetler ve iletişim gibi fonksiyonlarla sağlık sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem büyük hastaneler hem de küçük poliklinikler için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, Node.js, Bootstrap ve Tailwind CSS kullanılarak hazırlanmıştır.",
      features: [
        "Randevu Sistemi",
        "Doktor Tanıtımları",
        "Hizmetler ve Blog",
        "Poliklinik ve Hastane Odaklı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz",
        "Tailwind & Bootstrap"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 19,
      title: "Hastane & Klinik – Online Randevu ve Takvim Takipli Web Sitesi Şablonu",
      category: "health",
      image: "/assets/images/portfolio/hastane-klinik-sablon-etki360.png",
      imageAlt: "Hastane ve Klinik Web Sitesi Şablonu – Etki360 tarafından geliştirilen, online randevu, takvim takibi ve blog özellikli, modern ve SEO uyumlu tam ekran sağlık sektörü şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap", "React", "Node.js"],
      description: "Hastane ve kliniklere özel olarak tasarlanmış bu modern web sitesi şablonu, online randevu sistemi, takvim takibi, blog, doktor tanıtımları ve hizmetler gibi fonksiyonlarla sağlık sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem büyük hastaneler hem de küçük klinikler için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, Bootstrap, React ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Online Randevu Sistemi",
        "Takvim Takibi",
        "Doktor Tanıtımları",
        "Hizmetler ve Blog",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 20,
      title: "Estetik Klinik – Modern Estetik ve Sağlık Kliniği Web Sitesi Şablonu",
      category: "health",
      image: "/assets/images/portfolio/estetik-klinik-sablon-etki360.png",
      imageAlt: "Estetik Klinik Web Sitesi Şablonu – Etki360 tarafından geliştirilen, randevu, ürün ekleme ve blog özellikli, modern ve SEO uyumlu tam ekran sağlık sektörü şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      description: "Estetik ve sağlık kliniklerine özel olarak tasarlanmış bu modern web sitesi şablonu, online randevu sistemi, ürün ekleme, doktor tanıtımları, blog ve müşteri yorumları gibi fonksiyonlarla sağlık ve estetik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem estetik klinikleri hem de genel sağlık klinikleri için uygundur. Etki360 tarafından HTML, CSS, JS, PHP ve Bootstrap kullanılarak hazırlanmıştır.",
      features: [
        "Online Randevu Sistemi",
        "Ürün Ekleme",
        "Doktor Tanıtımları",
        "Blog ve Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 21,
      title: "Veteriner & Bakım Salonu – Modern Hayvan Bakım ve Kuaför Web Sitesi Şablonu",
      category: "petshop",
      image: "/assets/images/portfolio/veteriner-bakim-salon-sablon-etki360.png",
      imageAlt: "Veteriner ve Hayvan Bakım Salonu Web Sitesi Şablonu – Etki360 tarafından geliştirilen, hayvan bakım, kuaför ve veteriner özellikli, modern ve SEO uyumlu tam ekran petshop şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Hayvan bakım salonları, kuaförler ve veteriner klinikleri için özel olarak tasarlanmış bu modern web sitesi şablonu; online randevu, hizmet tanıtımı, blog, ekip tanıtımı ve müşteri yorumları gibi fonksiyonlarla petshop ve veterinerlik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem bakım salonları hem de veteriner klinikleri için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Online Randevu Sistemi",
        "Hayvan Bakım ve Kuaför Hizmetleri",
        "Veterinerlik Hizmetleri",
        "Blog ve Ekip Tanıtımı",
        "Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 22,
      title: "Veteriner & Kuaför – Hayvan Bakım ve Kuaför Web Sitesi Şablonu",
      category: "petshop",
      image: "/assets/images/portfolio/veteriner-bakim-kuafor-sablon-etki360.png",
      imageAlt: "Veteriner ve Hayvan Kuaför Web Sitesi Şablonu – Etki360 tarafından geliştirilen, köpek bakımı, kuaför ve veteriner hizmetleri için modern ve SEO uyumlu tam ekran petshop şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Köpek ve evcil hayvan bakım merkezleri, veteriner klinikleri ve hayvan kuaförleri için özel olarak tasarlanmış bu modern web sitesi şablonu; tımar, eğitim, barınma, sağlık hizmetleri, müşteri yorumları ve ekip tanıtımı gibi fonksiyonlarla petshop ve veterinerlik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem bakım salonları hem de veteriner klinikleri için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Tımar ve Kuaför Hizmetleri",
        "Veterinerlik ve Sağlık Hizmetleri",
        "Köpek Eğitimi ve Barınma",
        "Müşteri Yorumları",
        "Ekip Tanıtımı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 23,
      title: "Veteriner & Bakım Evi – Petshop ve Klinik Web Sitesi Şablonu",
      category: "petshop",
      image: "/assets/images/portfolio/veteriner-bakim-kuafor-salon-sablon-etki360.png",
      imageAlt: "Veteriner, Petshop ve Bakım Evi Web Sitesi Şablonu – Etki360 tarafından geliştirilen, klinik, bakım, kuaför ve evcil hayvan sahiplenme özellikli, modern ve SEO uyumlu tam ekran petshop şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Veteriner klinikleri, petshoplar ve hayvan bakım evleri için özel olarak tasarlanmış bu modern web sitesi şablonu; klinik hizmetleri, bakım, kuaför, evcil hayvan sahiplenme, galeri, ekip tanıtımı ve müşteri yorumları gibi fonksiyonlarla petshop ve veterinerlik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem bakım evleri hem de veteriner klinikleri için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Klinik ve Bakım Hizmetleri",
        "Hayvan Kuaförü",
        "Evcil Hayvan Sahiplenme",
        "Galeri ve Ekip Tanıtımı",
        "Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 24,
      title: "Mobilya E-Ticaret – Modern Mobilya Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-mobilya-sablon-etki360.png",
      imageAlt: "Mobilya E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran mobilya satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Mobilya mağazaları ve e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; ürün listeleme, kampanya ve indirim yönetimi, blog, müşteri yorumları ve güvenli ödeme gibi fonksiyonlarla mobilya sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli mobilya satıcıları için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Ürün Listeleme ve Detay Sayfaları",
        "Kampanya ve İndirim Yönetimi",
        "Güvenli Ödeme Sistemi",
        "Blog ve Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 25,
      title: "E-Ticaret – Eşya, Mobilya ve Kıyafet Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-esya-mobilya-sablon-etki360.png",
      imageAlt: "E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran eşya, mobilya ve kıyafet satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Eşya, mobilya ve kıyafet satışı yapan e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; yeni ürünler, popüler ürünler, blog, müşteri yorumları, kampanya yönetimi ve güvenli ödeme gibi fonksiyonlarla çok amaçlı e-ticaret sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli satıcılar için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Yeni ve Popüler Ürünler",
        "Kampanya ve İndirim Yönetimi",
        "Güvenli Ödeme Sistemi",
        "Blog ve Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 26,
      title: "E-Ticaret – Ayakkabı, Aksesuar ve Tekstil Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-ayakkabi-tekstil-sablon-etki360.png",
      imageAlt: "E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran ayakkabı, aksesuar ve tekstil satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Ayakkabı, aksesuar ve tekstil ürünleri satışı yapan e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; ürün listeleme, kampanya ve indirim yönetimi, blog, müşteri yorumları, koleksiyonlar ve güvenli ödeme gibi fonksiyonlarla moda ve perakende sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli satıcılar için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Ürün Listeleme ve Koleksiyonlar",
        "Kampanya ve İndirim Yönetimi",
        "Güvenli Ödeme Sistemi",
        "Blog ve Müşteri Yorumları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 27,
      title: "E-Ticaret – Elektronik ve Teknoloji Ürünleri Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-elektronik-teknoloji-sablon-etki360.png",
      imageAlt: "E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran elektronik ve teknoloji ürünleri satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Elektronik ve teknolojik ürünler satışı yapan e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; ürün kategorileri, kampanya ve indirim yönetimi, blog, müşteri yorumları, güvenli ödeme ve hızlı kargo gibi fonksiyonlarla teknoloji ve elektronik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli satıcılar için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Ürün Kategorileri ve Listeleme",
        "Kampanya ve İndirim Yönetimi",
        "Güvenli Ödeme Sistemi",
        "Blog ve Müşteri Yorumları",
        "Hızlı Kargo ve Destek",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 28,
      title: "E-Ticaret – Kıyafet, Tekstil, Aksesuar ve Ayakkabı Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-kiyafet-tekstil-sablon-etki360.png",
      imageAlt: "E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran kıyafet, tekstil, aksesuar ve ayakkabı satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Kıyafet, tekstil, aksesuar ve ayakkabı satışı yapan e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; yeni sezon ürünleri, kampanya ve indirim yönetimi, blog, müşteri yorumları, popüler ve çok satan ürünler, güvenli ödeme gibi fonksiyonlarla moda ve perakende sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli satıcılar için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Yeni Sezon ve Popüler Ürünler",
        "Kampanya ve İndirim Yönetimi",
        "Güvenli Ödeme Sistemi",
        "Blog ve Müşteri Yorumları",
        "Çok Satanlar ve Kategori Filtreleme",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 29,
      title: "E-Ticaret – Bitki ve Botanik Ürünleri Satış Web Sitesi Şablonu",
      category: "ecommerce",
      image: "/assets/images/portfolio/e-ticaret-bitki-botanik-sablon-etki360.png",
      imageAlt: "E-Ticaret Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran bitki ve botanik ürünleri satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Bitki ve botanik ürünleri satışı yapan e-ticaret platformları için özel olarak tasarlanmış bu modern web sitesi şablonu; ürün listeleme, öne çıkan ürünler, günlük fırsatlar, blog, müşteri yorumları ve bülten aboneliği gibi fonksiyonlarla bitki ve bahçecilik sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile hem küçük hem de büyük ölçekli satıcılar için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Ürün Listeleme ve Öne Çıkanlar",
        "Günlük Fırsatlar Alanı",
        "Bülten Aboneliği",
        "Blog ve Müşteri Yorumları",
        "İletişim Bilgileri ve Formu",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 30,
      title: "Kurumsal – Modern Kurumsal Web Sitesi Şablonu",
      category: "corporate",
      image: "/assets/images/portfolio/kurumsal-sablon-etki360.png",
      imageAlt: "Kurumsal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran kurumsal web sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Şirketler ve danışmanlık firmaları için tasarlanmış bu modern kurumsal web sitesi şablonu; hizmet tanıtımları, ekip üyeleri, müşteri yorumları, blog yazıları ve iletişim formu gibi fonksiyonlarla profesyonel bir online varlık oluşturmayı sağlar. Responsive ve SEO uyumlu yapısı ile her türlü kurumsal ihtiyaç için uygundur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Hizmet Tanıtımları",
        "Ekip Üyeleri Alanı",
        "Müşteri Yorumları",
        "Blog Entegrasyonu",
        "İletişim Formu",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 31,
      title: "Kurumsal – Mühendislik ve İnşaat Web Sitesi Şablonu",
      category: "corporate",
      image: "/assets/images/portfolio/kurumsal-sablon-2-etki360.png",
      imageAlt: "Kurumsal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran mühendislik ve inşaat firmaları için kurumsal web sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Mühendislik ve inşaat firmaları için tasarlanmış bu modern kurumsal web sitesi şablonu; proje sunumları, hizmet detayları, ekip üyeleri, müşteri yorumları, blog yazıları ve iletişim formu gibi fonksiyonlarla sektör profesyonellerine hitap eder. Responsive ve SEO uyumlu yapısı ile her türlü kurumsal ihtiyaca uygun, etkileyici bir online varlık oluşturur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Proje Sunumları",
        "Hizmet Detayları",
        "Ekip Tanıtımı",
        "Müşteri Yorumları",
        "Blog Entegrasyonu",
        "İletişim Formu",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 32,
      title: "Kurumsal – İş ve Danışmanlık Web Sitesi Şablonu",
      category: "corporate",
      image: "/assets/images/portfolio/kurumsal-sablon-3-etki360.png",
      imageAlt: "Kurumsal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran iş ve danışmanlık firmaları için kurumsal web sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "İşletmeler ve danışmanlık firmaları için tasarlanmış bu modern kurumsal web sitesi şablonu; iş fikirleri, hizmetler, insan kaynakları özellikleri, ekip üyeleri, müşteri yorumları, blog yazıları, fiyatlandırma paketleri ve ücretsiz danışmanlık formu gibi fonksiyonlarla iş dünyasına hitap eder. Responsive ve SEO uyumlu yapısı ile her türlü kurumsal ihtiyaca uygun, profesyonel bir online varlık oluşturur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "İş Fikirleri ve Çözümler",
        "Kreatif Vizyon ve Dijital Deneyim",
        "İnsan Kaynakları Özellikleri",
        "Ekip Üyeleri Alanı",
        "Müşteri Deneyimi ve Yorumları",
        "Fiyatlandırma Paketleri",
        "Blog Yazıları",
        "Ücretsiz Danışmanlık Formu",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 33,
      title: "Kurumsal – Danışmanlık ve İş Çözümleri Web Sitesi Şablonu",
      category: "corporate",
      image: "/assets/images/portfolio/kurumsal-sablon-4-etki360.png",
      imageAlt: "Kurumsal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran danışmanlık ve iş çözümleri firmaları için kurumsal web sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Danışmanlık ve iş çözümleri sunan firmalar için tasarlanmış bu modern kurumsal web sitesi şablonu; hizmetler, yetenekli ekip tanıtımı, danışmanlık başarıları, müşteri deneyimleri, blog yazıları ve ücretsiz danışmanlık teklifi gibi fonksiyonlarla iş dünyasına hitap eder. Responsive ve SEO uyumlu yapısı ile her türlü kurumsal ihtiyaca uygun, profesyonel ve etkileyici bir online varlık oluşturur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Danışmanlık Hizmetleri",
        "Yetenekli Ekip Tanıtımı",
        "Danışmanlık Başarıları",
        "Müşteri Deneyimleri",
        "Blog ve Makaleler",
        "Ücretsiz Danışmanlık Teklifi",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 34,
      title: "Kurumsal – Danışmanlık Web Sitesi Şablonu",
      category: "corporate",
      image: "/assets/images/portfolio/kurumsal-sablon-4-etki360.png",
      imageAlt: "Kurumsal Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran danışmanlık firmaları için kurumsal web sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Danışmanlık firmaları için tasarlanmış bu modern kurumsal web sitesi şablonu; hizmetler, yetenekli ekip tanıtımı, müşteri deneyimleri, blog yazıları, iletişim formu ve ücretsiz danışmanlık teklifi gibi fonksiyonlarla iş dünyasına hitap eder. Responsive ve SEO uyumlu yapısı ile her türlü kurumsal ihtiyaca uygun, profesyonel ve etkileyici bir online varlık oluşturur. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Danışmanlık Hizmetleri",
        "Yetenekli Ekip Tanıtımı",
        "Müşteri Deneyimleri",
        "Blog ve Makaleler",
        "İletişim Formu",
        "Ücretsiz Danışmanlık Teklifi",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 35,
      title: "Landing Page – E-Kitap Satış Web Sitesi Şablonu",
      category: "landing",
      image: "/assets/images/portfolio/landing-page-sablon-etki360.png",
      imageAlt: "E-Kitap Satış Landing Page Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran e-kitap tanıtım ve satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "E-kitap yazarları ve satıcıları için tasarlanmış bu modern landing page şablonu; e-kitap tanıtımı, yazar hakkında bilgi, müşteri yorumları ve fiyatlandırma planları gibi fonksiyonlarla doğrudan satış odaklı bir yapı sunar. Responsive ve SEO uyumlu yapısı ile e-kitaplarınızı etkili bir şekilde pazarlayabilirsiniz. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "E-Kitap Tanıtım Alanı",
        "Yazar Hakkında Bilgi",
        "Müşteri Yorumları",
        "Fiyatlandırma Planları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 36,
      title: "Landing Page – Uygulama Tanıtım Web Sitesi Şablonu",
      category: "landing",
      image: "/assets/images/portfolio/landing-page-sablon-2-etki360.png",
      imageAlt: "Uygulama Tanıtım Landing Page Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran mobil uygulama tanıtım sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Mobil uygulamalarınızı tanıtmak ve satışını yapmak için tasarlanmış bu modern landing page şablonu; uygulama özellikleri, ekran görüntüleri, fiyatlandırma planları, kullanıcı yorumları, haberler ve indirme bağlantıları gibi fonksiyonlarla uygulama pazarlamasına odaklanır. Responsive ve SEO uyumlu yapısı ile uygulamanızı etkili bir şekilde potansiyel kullanıcılara ulaştırabilirsiniz. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Uygulama Özellik Tanıtımı",
        "Uygulama Ekran Görüntüleri",
        "Fiyatlandırma Planları",
        "Kullanıcı Yorumları",
        "Haberler ve Blog Alanı",
        "İndirme Bağlantıları",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 37,
      title: "Turizm – Seyahat ve Tur Satış Web Sitesi Şablonu",
      category: "tourism",
      image: "/assets/images/portfolio/turizm-web-sablon-etki360.png",
      imageAlt: "Turizm Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran seyahat, turizm ve tur satış sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Seyahat acenteleri, tur firmaları ve turizm odaklı e-ticaret siteleri için tasarlanmış bu modern web sitesi şablonu; tur tanıtımları, popüler rotalar, seyahat ürünleri satışı, müşteri yorumları, rehber tanıtımları, seyahat haberleri ve bülten aboneliği gibi fonksiyonlarla turizm sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile seyahat ve tur hizmetlerinizi etkili bir şekilde tanıtabilir ve satabilirsiniz. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Tur ve Rota Tanıtımları",
        "Seyahat Ürünleri Satışı",
        "Müşteri Yorumları ve Deneyimleri",
        "Rehber ve Ekip Tanıtımı",
        "Seyahat Haberleri ve Blog",
        "Bülten Aboneliği",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 38,
      title: "Turizm – Turlar, Rezervasyonlar ve Etkinlik Web Sitesi Şablonu",
      category: "tourism",
      image: "/assets/images/portfolio/turizm-web-sablon-2-etki360.png",
      imageAlt: "Turizm Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran turlar, rezervasyonlar ve etkinlik sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Tur firmaları, seyahat acenteleri ve etkinlik düzenleyicileri için tasarlanmış bu modern web sitesi şablonu; tur ve etkinlik tanıtımları, online rezervasyon sistemi, popüler destinasyonlar, rehberler ve seyahat ipuçları gibi fonksiyonlarla turizm sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile turlarınızı, rezervasyonlarınızı ve etkinliklerinizi etkili bir şekilde yönetebilir ve tanıtabilirsiniz. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Tur ve Etkinlik Tanıtımları",
        "Online Rezervasyon Sistemi",
        "Popüler Destinasyonlar",
        "Rehber Tanıtımı",
        "Seyahat İpuçları ve Blog",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    },
    {
      id: 39,
      title: "Turizm – Otel ve Butik Otel Web Sitesi Şablonu",
      category: "tourism",
      image: "/assets/images/portfolio/turizm-otel-web-sablon-3-etki360.png",
      imageAlt: "Turizm, Otel ve Butik Otel Web Sitesi Şablonu – Etki360 tarafından geliştirilen, modern, SEO uyumlu ve tam ekran konaklama sitesi şablonu görseli.",
      technologies: ["HTML", "CSS", "JS", "PHP", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
      description: "Oteller, butik oteller ve diğer konaklama işletmeleri için tasarlanmış bu modern web sitesi şablonu; oda tipleri, galeri, müşteri yorumları, iletişim bilgileri ve rezervasyon imkanı gibi fonksiyonlarla turizm ve konaklama sektörüne hitap eder. Responsive ve SEO uyumlu yapısı ile konaklama tesisinizi etkili bir şekilde tanıtabilir ve online rezervasyon alabilirsiniz. Etki360 tarafından HTML, CSS, JS, PHP, React, Bootstrap, Tailwind CSS ve Node.js kullanılarak hazırlanmıştır.",
      features: [
        "Oda Tipleri ve Detayları",
        "Galeri",
        "Müşteri Yorumları",
        "İletişim Bilgileri",
        "Online Rezervasyon İmkanı",
        "Responsive Tasarım",
        "SEO Uyumlu",
        "Modern Arayüz"
      ],
      liveUrl: "#",
      completionDate: "2024",
      client: "Etki360 Şablon"
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'Tüm Projeler', count: portfolioProjects.length },
    { key: 'corporate', label: 'Kurumsal Web', count: portfolioProjects.filter(p => p.category === 'corporate').length },
    { key: 'ecommerce', label: 'E-Ticaret', count: portfolioProjects.filter(p => p.category === 'ecommerce').length },
    { key: 'landing', label: 'Landing Page', count: portfolioProjects.filter(p => p.category === 'landing').length },
    { key: 'health', label: 'Sağlık', count: portfolioProjects.filter(p => p.category === 'health').length },
    { key: 'petshop', label: 'Petshop', count: portfolioProjects.filter(p => p.category === 'petshop').length },
    { key: 'tourism', label: 'Turizm', count: portfolioProjects.filter(p => p.category === 'tourism').length },
    { key: 'consultancy', label: 'Danışmanlık', count: portfolioProjects.filter(p => p.category === 'consultancy').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  // Sayfalama için projelerin dilimlenmesi
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Toplam sayfa sayısını hesaplama
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Sayfa değiştirmek için fonksiyon
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="portfolio-main-page">
      {/* Hero Section */}
      <section className="portfolio-hero-section">
        <div className="container">
          <header className="portfolio-hero-content">
            <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>Portföy</span>
            </nav>
            <h1 className="portfolio-hero-title">
              Başarılı <span className="portfolio-highlight">Projelerimiz</span>
            </h1>
            <p className="portfolio-hero-description">
              Müşterilerimiz için geliştirdiğimiz yaratıcı ve etkili dijital çözümler. 
              Her proje, benzersiz ihtiyaçlara özel tasarlanmış ve başarıyla tamamlanmıştır.
            </p>
            <div className="portfolio-hero-stats">
              <div className="portfolio-stat-item">
                <span className="portfolio-stat-number">50+</span>
                <span className="portfolio-stat-label">Tamamlanan Proje</span>
              </div>
              <div className="portfolio-stat-item">
                <span className="portfolio-stat-number">30+</span>
                <span className="portfolio-stat-label">Mutlu Müşteri</span>
              </div>
              <div className="portfolio-stat-item">
                <span className="portfolio-stat-number">100%</span>
                <span className="portfolio-stat-label">Başarı Oranı</span>
              </div>
            </div>
          </header>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="portfolio-filter-wrapper">
            <h2 className="sr-only">Proje Filtreleme</h2>
            <div className="portfolio-filter-tabs" role="tablist" aria-label="Proje kategorileri">
              {filterCategories.map((category) => (
                <button
                  key={category.key}
                  className={`portfolio-filter-tab ${activeFilter === category.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.key)}
                  role="tab"
                  aria-selected={activeFilter === category.key}
                  aria-controls="portfolio-grid"
                >
                  <span className="portfolio-filter-label">{category.label}</span>
                  <span className="portfolio-filter-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="portfolio-projects-section">
        <div className="container">
          <div 
            className="portfolio-projects-grid" 
            id="portfolio-grid"
            role="tabpanel"
            aria-label={`${filterCategories.find(cat => cat.key === activeFilter)?.label} projeleri`}
          >
            {currentProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="portfolio-project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt || `${project.title} proje görseli`}
                    className="portfolio-project-image"
                    loading="lazy"
                  />
                  <div className="portfolio-project-overlay">
                    <div className="portfolio-project-actions">
                      <button 
                        className="portfolio-action-btn portfolio-view-btn"
                        onClick={() => openProjectModal(project)}
                        aria-label={`${project.title} projesini detaylı görüntüle`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        <span>Detayları Gör</span>
                      </button>
                      <a 
                        href={project.liveUrl}
                        className="portfolio-action-btn portfolio-live-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} canlı sitesini görüntüle`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Canlı Görüntüle</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-project-content">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-category">
                      {(() => {
                        switch(project.category) {
                          case 'corporate': return 'Kurumsal Web';
                          case 'ecommerce': return 'E-Ticaret';
                          case 'landing': return 'Landing Page';
                          case 'health': return 'Sağlık';
                          case 'petshop': return 'Petshop';
                          case 'insurance': return 'Sigorta';
                          case 'tourism': return 'Turizm';
                          case 'consultancy': return 'Danışmanlık';
                          default: return project.category;
                        }
                      })()}
                    </span>
                    <span className="portfolio-project-date">{project.completionDate}</span>
                  </div>
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-project-description">{project.description}</p>
                  <div className="portfolio-project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="portfolio-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {
        totalPages > 1 && (
          <div className="portfolio-pagination">
            <ul className="pagination-list">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <li key={page} className={`pagination-item ${currentPage === page ? 'active' : ''}`}>
                  <button onClick={() => paginate(page)} className="pagination-link">
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      }

      {/* Technologies Section */}
      <section className="portfolio-technologies-section">
        <div className="container">
          <header className="portfolio-section-header">
            <h2 className="portfolio-section-title">Kullandığımız Teknolojiler</h2>
            <p className="portfolio-section-description">
              Modern ve güvenilir teknolojilerle projelerinizi hayata geçiriyoruz
            </p>
          </header>
          <div className="portfolio-tech-categories">
            <div className="portfolio-tech-category">
              <h3 className="portfolio-tech-category-title">Frontend</h3>
              <div className="portfolio-tech-items">
                <span className="portfolio-tech-item">React</span>
                <span className="portfolio-tech-item">Next.js</span>
                <span className="portfolio-tech-item">Vue.js</span>
                <span className="portfolio-tech-item">HTML5</span>
                <span className="portfolio-tech-item">CSS3</span>
                <span className="portfolio-tech-item">JavaScript</span>
                <span className="portfolio-tech-item">TypeScript</span>
                <span className="portfolio-tech-item">Tailwind CSS</span>
              </div>
            </div>
            <div className="portfolio-tech-category">
              <h3 className="portfolio-tech-category-title">Backend</h3>
              <div className="portfolio-tech-items">
                <span className="portfolio-tech-item">Node.js</span>
                <span className="portfolio-tech-item">PHP</span>
                <span className="portfolio-tech-item">Laravel</span>
                <span className="portfolio-tech-item">WordPress</span>
                <span className="portfolio-tech-item">MySQL</span>
                <span className="portfolio-tech-item">MongoDB</span>
                <span className="portfolio-tech-item">PostgreSQL</span>
                <span className="portfolio-tech-item">Redis</span>
              </div>
            </div>
            <div className="portfolio-tech-category">
              <h3 className="portfolio-tech-category-title">Araçlar & Platformlar</h3>
              <div className="portfolio-tech-items">
                <span className="portfolio-tech-item">Git</span>
                <span className="portfolio-tech-item">Docker</span>
                <span className="portfolio-tech-item">AWS</span>
                <span className="portfolio-tech-item">Figma</span>
                <span className="portfolio-tech-item">Adobe XD</span>
                <span className="portfolio-tech-item">Google Analytics</span>
                <span className="portfolio-tech-item">Search Console</span>
                <span className="portfolio-tech-item">Shopify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-content">
            <h2 className="portfolio-cta-title">Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
            <p className="portfolio-cta-description">
              Portföyümüzdeki başarılı projeler gibi, sizin de projenizi 
              profesyonel bir şekilde hayata geçirelim.
            </p>
            <div className="portfolio-cta-buttons">
              <Link to="/iletisim" className="portfolio-btn-primary">
                Ücretsiz Teklif Al
              </Link>
              <Link to="/hizmetler" className="portfolio-btn-secondary">
                Hizmetlerimizi İncele
              </Link>
            </div>
            <div className="portfolio-cta-features">
              <div className="portfolio-cta-feature">
                <span className="portfolio-feature-icon">✓</span>
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="portfolio-cta-feature">
                <span className="portfolio-feature-icon">✓</span>
                <span>Hızlı Teslimat</span>
              </div>
              <div className="portfolio-cta-feature">
                <span className="portfolio-feature-icon">✓</span>
                <span>1 Yıl Garanti</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={closeProjectModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="portfolio-modal-close"
              onClick={closeProjectModal}
              aria-label="Modalı kapat"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="portfolio-modal-body">
              <div className="portfolio-modal-image">
                <img 
                  src={selectedProject.image} 
                  alt={`${selectedProject.title} detay görseli`}
                  loading="lazy"
                />
              </div>
              <div className="portfolio-modal-info">
                <div className="portfolio-modal-header">
                  <h3 className="portfolio-modal-title">{selectedProject.title}</h3>
                  <div className="portfolio-modal-meta">
                    <span className="portfolio-modal-client">Müşteri: {selectedProject.client}</span>
                    <span className="portfolio-modal-date">Tarih: {selectedProject.completionDate}</span>
                  </div>
                </div>
                <p className="portfolio-modal-description">{selectedProject.description}</p>
                <div className="portfolio-modal-features">
                  <h4>Özellikler:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="portfolio-modal-technologies">
                  <h4>Kullanılan Teknolojiler:</h4>
                  <div className="portfolio-modal-tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="portfolio-modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="portfolio-modal-actions">
                  <a 
                    href={selectedProject.liveUrl}
                    className="portfolio-modal-btn portfolio-modal-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Canlı Görüntüle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 