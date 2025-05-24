import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import blogData from '../data/blogPosts.json';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // JSON dosyasından blog yazıları ve kategorileri al
  const { blogPosts, categories: baseCategories } = blogData;

  // Kategorilere yazı sayılarını ekle
  const categories = baseCategories.map(category => ({
    ...category,
    count: category.key === 'all' 
      ? blogPosts.length 
      : blogPosts.filter(post => post.category === category.key).length
  }));

  // Filtrelenmiş yazılar
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Öne çıkan yazılar
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Pagination hesaplamaları
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Sayfa değiştirme
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Kategori değiştirme
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Tarih formatlama
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <div className="blog-main-page">
      {/* Hero Section */}
      <header className="blog-hero-section">
        <div className="container">
          <div className="blog-hero-content">
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <span>Blog</span>
            </nav>
            <h1 className="blog-hero-title">
              Dijital Dünyadan <span className="blog-highlight">Haberler</span>
            </h1>
            <p className="blog-hero-description">
              Web tasarımı, SEO, e-ticaret ve dijital pazarlama konularında güncel bilgiler, 
              ipuçları ve uzman görüşleri. Dijital dünyadaki gelişmeleri takip edin.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-stat-item">
                <span className="blog-stat-number">{blogPosts.length}+</span>
                <span className="blog-stat-label">Makale</span>
              </div>
              <div className="blog-stat-item">
                <span className="blog-stat-number">{categories.length - 1}</span>
                <span className="blog-stat-label">Kategori</span>
              </div>
              <div className="blog-stat-item">
                <span className="blog-stat-number">1000+</span>
                <span className="blog-stat-label">Okuyucu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="blog-featured-section">
          <div className="container">
            <header className="blog-section-header">
              <h2 className="blog-section-title">Öne Çıkan Yazılar</h2>
              <p className="blog-section-description">
                En popüler ve güncel içeriklerimiz
              </p>
            </header>
            <div className="blog-featured-grid">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <article key={post.id} className={`blog-featured-card ${index === 0 ? 'blog-featured-main' : ''}`}>
                  <div className="blog-featured-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                    />
                    <div className="blog-featured-overlay">
                      <span className="blog-featured-badge">Öne Çıkan</span>
                    </div>
                  </div>
                  <div className="blog-featured-content">
                    <div className="blog-featured-meta">
                      <span className="blog-featured-category">
                        {categories.find(cat => cat.key === post.category)?.label}
                      </span>
                      <time className="blog-featured-date" dateTime={post.publishDate}>
                        {formatDate(post.publishDate)}
                      </time>
                    </div>
                    <h3 className="blog-featured-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-featured-excerpt">{post.excerpt}</p>
                    <footer className="blog-featured-footer">
                      <div className="blog-featured-author">
                        <span className="blog-author-name">{post.author}</span>
                        <span className="blog-read-time">{post.readTime} okuma</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="blog-featured-link" aria-label={`${post.title} yazısını oku`}>
                        Devamını Oku →
                      </Link>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Section */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-filter-wrapper">
            <h2 className="sr-only">Blog Kategorileri</h2>
            <div className="blog-filter-tabs" role="tablist" aria-label="Blog kategorileri">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`blog-filter-tab ${activeCategory === category.key ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.key)}
                  role="tab"
                  aria-selected={activeCategory === category.key}
                  aria-controls="blog-posts-grid"
                >
                  <span className="blog-filter-label">{category.label}</span>
                  <span className="blog-filter-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <main className="blog-posts-section">
        <div className="container">
          <div 
            className="blog-posts-grid" 
            id="blog-posts-grid"
            role="tabpanel"
            aria-label={`${categories.find(cat => cat.key === activeCategory)?.label} yazıları`}
          >
            {currentPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="blog-post-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <div className="blog-post-image-wrapper">
                  <img 
                    src={post.image} 
                    alt={`${post.title} görseli`}
                    className="blog-post-image"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="blog-post-overlay">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="blog-post-read-btn"
                      aria-label={`${post.title} yazısını oku`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span>Yazıyı Oku</span>
                    </Link>
                  </div>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-meta">
                    <span className="blog-post-category" itemProp="articleSection">
                      {categories.find(cat => cat.key === post.category)?.label}
                    </span>
                    <time className="blog-post-date" dateTime={post.publishDate} itemProp="datePublished">
                      {formatDate(post.publishDate)}
                    </time>
                  </div>
                  <h3 className="blog-post-title" itemProp="headline">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-post-excerpt" itemProp="description">{post.excerpt}</p>
                  <footer className="blog-post-footer">
                    <div className="blog-post-author-info">
                      <span className="blog-post-author" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{post.author}</span>
                      </span>
                      <span className="blog-post-read-time">{post.readTime}</span>
                    </div>
                    <div className="blog-post-tags">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="blog-post-tag" itemProp="keywords">{tag}</span>
                      ))}
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="blog-pagination" aria-label="Blog sayfa navigasyonu">
              <div className="blog-pagination-wrapper">
                <button
                  className="blog-pagination-btn blog-pagination-prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Önceki sayfa"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="15,18 9,12 15,6"/>
                  </svg>
                  <span>Önceki</span>
                </button>

                <div className="blog-pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
                    // Sayfa numaralarını akıllıca göster
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          className={`blog-pagination-number ${currentPage === pageNumber ? 'active' : ''}`}
                          onClick={() => handlePageChange(pageNumber)}
                          aria-label={`Sayfa ${pageNumber}`}
                          aria-current={currentPage === pageNumber ? 'page' : undefined}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return <span key={pageNumber} className="blog-pagination-ellipsis">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  className="blog-pagination-btn blog-pagination-next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Sonraki sayfa"
                >
                  <span>Sonraki</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </button>
              </div>

              <div className="blog-pagination-info">
                <span>
                  Sayfa {currentPage} / {totalPages} 
                  ({filteredPosts.length} yazı)
                </span>
              </div>
            </nav>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <aside className="blog-newsletter-section">
        <div className="container">
          <div className="blog-newsletter-content">
            <div className="blog-newsletter-text">
              <h2 className="blog-newsletter-title">Güncel Kalın</h2>
              <p className="blog-newsletter-description">
                Yeni blog yazılarımızdan, dijital dünyadan haberlerden ve özel içeriklerden 
                haberdar olmak için e-bültenimize abone olun.
              </p>
            </div>
            <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="blog-newsletter-input-group">
                <label htmlFor="newsletter-email" className="sr-only">E-posta adresi</label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="blog-newsletter-input"
                  placeholder="E-posta adresinizi girin"
                  required
                  aria-describedby="newsletter-privacy"
                />
                <button type="submit" className="blog-newsletter-btn">
                  Abone Ol
                </button>
              </div>
              <p className="blog-newsletter-privacy" id="newsletter-privacy">
                E-posta adresinizi sadece blog güncellemeleri için kullanırız. 
                <Link to="/gizlilik">Gizlilik politikamızı</Link> okuyabilirsiniz.
              </p>
            </form>
          </div>
        </div>
      </aside>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="blog-cta-content">
            <h2 className="blog-cta-title">Dijital Projenizi Hayata Geçirin</h2>
            <p className="blog-cta-description">
              Blog yazılarımızdan ilham aldınız mı? Kendi dijital projenizi 
              profesyonel ekibimizle hayata geçirme zamanı.
            </p>
            <div className="blog-cta-buttons">
              <Link to="/iletisim" className="blog-btn-primary">
                Ücretsiz Danışmanlık
              </Link>
              <Link to="/hizmetler" className="blog-btn-secondary">
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 