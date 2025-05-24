import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioProjects = [
    {
      id: 1,
      title: "TechCorp Kurumsal Web Sitesi",
      category: "corporate",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB"],
      description: "Modern teknoloji şirketi için responsive kurumsal web sitesi",
      features: ["Responsive Tasarım", "CMS Entegrasyonu", "SEO Optimizasyonu"],
      liveUrl: "#",
      completionDate: "2024",
      client: "TechCorp Ltd."
    },
    {
      id: 2,
      title: "ShopMax E-Ticaret Platformu",
      category: "ecommerce",
      image: "/api/placeholder/400/300",
      technologies: ["WordPress", "WooCommerce", "PHP"],
      description: "Kapsamlı ödeme entegrasyonları ile e-ticaret çözümü",
      features: ["Ödeme Entegrasyonu", "Stok Yönetimi", "Mobil Uyumlu"],
      liveUrl: "#",
      completionDate: "2024",
      client: "ShopMax"
    },
    {
      id: 3,
      title: "DigitalBoost Landing Page",
      category: "landing",
      image: "/api/placeholder/400/300",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "Yüksek dönüşüm odaklı dijital pazarlama landing page",
      features: ["A/B Test Desteği", "Analytics Entegrasyonu", "Hızlı Yükleme"],
      liveUrl: "#",
      completionDate: "2024",
      client: "DigitalBoost Agency"
    },
    {
      id: 4,
      title: "MediCare Sağlık Platformu",
      category: "corporate",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Laravel", "MySQL"],
      description: "Hasta yönetim sistemi ile entegre sağlık platformu",
      features: ["Hasta Yönetimi", "Randevu Sistemi", "Güvenli Veri"],
      liveUrl: "#",
      completionDate: "2023",
      client: "MediCare Clinic"
    },
    {
      id: 5,
      title: "FashionHub E-Ticaret",
      category: "ecommerce",
      image: "/api/placeholder/400/300",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      description: "Moda sektörü için özel tasarım e-ticaret sitesi",
      features: ["Özel Tasarım", "Envanter Yönetimi", "Sosyal Medya"],
      liveUrl: "#",
      completionDate: "2023",
      client: "FashionHub"
    },
    {
      id: 6,
      title: "StartupLaunch Landing",
      category: "landing",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      description: "Startup lansmanı için animasyonlu landing page",
      features: ["Animasyonlar", "Lead Generation", "Responsive"],
      liveUrl: "#",
      completionDate: "2023",
      client: "StartupLaunch"
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'Tüm Projeler', count: portfolioProjects.length },
    { key: 'corporate', label: 'Kurumsal Web', count: portfolioProjects.filter(p => p.category === 'corporate').length },
    { key: 'ecommerce', label: 'E-Ticaret', count: portfolioProjects.filter(p => p.category === 'ecommerce').length },
    { key: 'landing', label: 'Landing Page', count: portfolioProjects.filter(p => p.category === 'landing').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

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
            {filteredProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="portfolio-project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={`${project.title} proje görseli`}
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