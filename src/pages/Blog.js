import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({});
  const postsPerPage = 12;

  // Blog Schema for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://etki360.com/blog/#blog",
    "name": "etki360 Blog - Dijital Dünyadan Haberler",
    "alternateName": "etki360 Blog",
    "url": "https://etki360.com/blog",
    "description": "Web tasarımı, SEO, e-ticaret ve dijital pazarlama konularında güncel bilgiler, ipuçları ve uzman görüşleri. Dijital dünyadaki gelişmeleri takip edin.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization",
      "name": "etki360",
      "url": "https://etki360.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://etki360.com/logo.png",
        "width": 300,
        "height": 100
      }
    },
    "author": {
      "@type": "Organization",
      "@id": "https://etki360.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://etki360.com/blog"
    },
    "keywords": [
      "web tasarım",
      "SEO",
      "e-ticaret",
      "dijital pazarlama",
      "web geliştirme",
      "React",
      "PHP",
      "WordPress",
      "landing page",
      "performans optimizasyonu",
      "kullanıcı deneyimi",
      "mobil uyumlu tasarım"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Web Tasarım",
        "description": "Modern web sitesi tasarım teknikleri ve trendleri"
      },
      {
        "@type": "Thing",
        "name": "SEO",
        "description": "Arama motoru optimizasyonu stratejileri ve ipuçları"
      },
      {
        "@type": "Thing",
        "name": "E-Ticaret",
        "description": "Online satış ve e-ticaret çözümleri"
      },
      {
        "@type": "Thing",
        "name": "Dijital Pazarlama",
        "description": "Dijital pazarlama stratejileri ve araçları"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "İşletme Sahipleri",
        "Girişimciler",
        "Web Tasarımcıları",
        "Dijital Pazarlama Uzmanları",
        "E-Ticaret İşletmeleri"
      ]
    }
  };

  // CollectionPage Schema for Blog Listing
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://etki360.com/blog/#collectionpage",
    "url": "https://etki360.com/blog",
    "name": "etki360 Blog Yazıları",
    "description": "Web tasarımı, SEO, e-ticaret ve dijital pazarlama konularında güncel blog yazıları",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://etki360.com/#website"
    },
    "about": {
      "@type": "Blog",
      "@id": "https://etki360.com/blog/#blog"
    },
    "mainEntity": {
      "@type": "Blog",
      "@id": "https://etki360.com/blog/#blog"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://etki360.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://etki360.com/blog"
        }
      ]
    },
    "hasPart": blogPosts.map((post, index) => ({
      "@type": "BlogPosting",
      "@id": `https://etki360.com/blog/${post.slug}`,
      "url": `https://etki360.com/blog/${post.slug}`,
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.published_at,
      "dateModified": post.updated_at || post.published_at,
      "author": {
        "@type": "Person",
        "name": post.author || "etki360"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://etki360.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://etki360.com/blog/${post.slug}`
      },
      "image": {
        "@type": "ImageObject",
        "url": post.image_url || "https://etki360.com/images/blog-default.jpg",
        "width": 800,
        "height": 600
      },
      "articleSection": post.category_name,
      "keywords": post.tags || [],
      "wordCount": post.read_time ? post.read_time * 200 : 800,
      "timeRequired": `PT${post.read_time || 4}M`,
      "inLanguage": "tr-TR"
    }))
  };

  // WebPage Schema for Blog Page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://etki360.com/blog/#webpage",
    "url": "https://etki360.com/blog",
    "name": "Blog - etki360 | Dijital Dünyadan Haberler",
    "description": "Web tasarımı, SEO, e-ticaret ve dijital pazarlama konularında güncel bilgiler, ipuçları ve uzman görüşleri. Dijital dünyadaki gelişmeleri takip edin.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://etki360.com/#website"
    },
    "about": {
      "@type": "Blog",
      "@id": "https://etki360.com/blog/#blog"
    },
    "mainEntity": {
      "@type": "Blog",
      "@id": "https://etki360.com/blog/#blog"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://etki360.com/images/blog-hero.jpg",
      "width": 1200,
      "height": 630
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://etki360.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://etki360.com/blog"
        }
      ]
    },
    "significantLink": [
      "https://etki360.com/hizmetler",
      "https://etki360.com/iletisim",
      "https://etki360.com/hakkimizda"
    ]
  };

  // ItemList Schema for Blog Categories
  const categoriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Blog Kategorileri",
    "description": "etki360 blog yazılarının kategorileri",
    "numberOfItems": categories.length,
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": category.label,
      "url": `https://etki360.com/blog?category=${category.key}`,
      "description": `${category.label} kategorisindeki blog yazıları`,
      "item": {
        "@type": "Thing",
        "name": category.label,
        "url": `https://etki360.com/blog?category=${category.key}`
      }
    }))
  };

  // Backend API'sinden blog yazılarını çek
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Paralel olarak posts, categories ve stats çek
        const [postsResponse, categoriesResponse, statsResponse] = await Promise.all([
          fetch(`http://etki360/backend/api/blog.php?action=posts&page=${currentPage}&limit=${postsPerPage}&category=${activeCategory !== 'all' ? activeCategory : ''}`),
          fetch('http://etki360/backend/api/blog.php?action=categories'),
          fetch('http://etki360/backend/api/blog.php?action=stats')
        ]);

        if (!postsResponse.ok || !categoriesResponse.ok || !statsResponse.ok) {
          throw new Error('API yanıtında hata oluştu');
        }

        const postsData = await postsResponse.json();
        const categoriesData = await categoriesResponse.json();
        const statsData = await statsResponse.json();

        if (postsData.success && categoriesData.success && statsData.success) {
          setBlogPosts(postsData.data.posts || []);
          
          // Kategorileri düzenle - sadece bir tane "Tüm Yazılar" olsun
          const categoryList = [
            { key: 'all', label: 'Tüm Yazılar', count: statsData.data.total_posts }
          ];
          
          // Backend'den gelen kategorileri ekle
          if (categoriesData.data && categoriesData.data.length > 0) {
            categoriesData.data.forEach(cat => {
              // "all" kategorisini tekrar ekleme
              if (cat.slug !== 'all') {
                categoryList.push({
                  key: cat.slug,
                  label: cat.name,
                  count: cat.post_count
                });
              }
            });
          }
          
          setCategories(categoryList);
          setStats(statsData.data);
        } else {
          throw new Error('API verilerinde hata');
        }
      } catch (error) {
        console.error('Blog verileri yüklenirken hata:', error);
        setError('Blog yazıları yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        setBlogPosts([]);
        setCategories([{ key: 'all', label: 'Tüm Yazılar', count: 0 }]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [currentPage, activeCategory]);

  // Kategori değiştirme
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Sayfa değiştirme
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tarih formatlama
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  // Öne çıkan yazılar (ilk 3 yazı)
  const featuredPosts = blogPosts.slice(0, 3);

  // Pagination hesaplamaları
  const totalPosts = stats.total_posts || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="blog-main-page">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {!loading && !error && blogPosts.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
      )}
      {!loading && !error && categories.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(categoriesSchema)}
        </script>
      )}

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
                <span className="blog-stat-number">{stats.total_posts || 0}+</span>
                <span className="blog-stat-label">Makale</span>
              </div>
              <div className="blog-stat-item">
                <span className="blog-stat-number">{categories.length - 1}</span>
                <span className="blog-stat-label">Kategori</span>
              </div>
              <div className="blog-stat-item">
                <span className="blog-stat-number">{stats.total_views || 0}+</span>
                <span className="blog-stat-label">Görüntülenme</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Loading State */}
      {loading && (
        <section className="blog-loading-section">
          <div className="container">
            <div className="blog-loading">
              <div className="loading-spinner"></div>
              <p>Güncel içerikler yükleniyor...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="blog-error-section">
          <div className="container">
            <div className="blog-error">
              <h2>Bir Hata Oluştu</h2>
              <p>{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="blog-retry-btn"
              >
                Tekrar Dene
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts Section */}
      {!loading && !error && featuredPosts.length > 0 && (
        <section className="blog-featured-section">
          <div className="container">
            <header className="blog-section-header">
              <h2 className="blog-section-title">Öne Çıkan Yazılar</h2>
              <p className="blog-section-description">
                En popüler ve güncel içeriklerimiz
              </p>
            </header>
            <div className="blog-featured-grid">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className={`blog-featured-card ${index === 0 ? 'blog-featured-main' : ''}`}>
                  <div className="blog-featured-image">
                    <img 
                      src={post.image_url || '/api/placeholder/400/300'} 
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
                        {post.category_name}
                      </span>
                      <time className="blog-featured-date" dateTime={post.published_at}>
                        {formatDate(post.published_at)}
                      </time>
                    </div>
                    <h3 className="blog-featured-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-featured-excerpt">{post.excerpt}</p>
                    <footer className="blog-featured-footer">
                      <div className="blog-featured-author">
                        <span className="blog-author-name">{post.author}</span>
                        <span className="blog-read-time">{post.read_time} dk okuma</span>
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
      {!loading && !error && (
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
      )}

      {/* Blog Posts Grid */}
      {!loading && !error && (
        <main className="blog-posts-section">
          <div className="container">
            <div 
              className="blog-posts-grid" 
              id="blog-posts-grid"
              role="tabpanel"
              aria-label={`${categories.find(cat => cat.key === activeCategory)?.label} yazıları`}
            >
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="blog-post-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  itemScope 
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className="blog-post-image-wrapper">
                    <img 
                      src={post.image_url || '/api/placeholder/400/300'} 
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
                    {post.source_url && (
                      <div className="external-badge">
                        <span>Medium</span>
                      </div>
                    )}
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-meta">
                      <span className="blog-post-category" itemProp="articleSection">
                        {post.category_name}
                      </span>
                      <time className="blog-post-date" dateTime={post.published_at} itemProp="datePublished">
                        {formatDate(post.published_at)}
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
                        <span className="blog-post-read-time">{post.read_time} dk okuma</span>
                      </div>
                      <div className="blog-post-tags">
                        {post.tags && post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="blog-post-tag" itemProp="keywords">{tag}</span>
                        ))}
                      </div>
                    </footer>
                    {post.source_url && (
                      <div className="external-attribution">
                        <small>Kaynak: <a href={post.source_url} target="_blank" rel="noopener noreferrer">Medium</a></small>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* No Posts Message */}
            {blogPosts.length === 0 && !loading && !error && (
              <div className="blog-no-posts">
                <h3>Henüz bu kategoride yazı bulunmuyor</h3>
                <p>Yakında yeni içerikler eklenecek. Diğer kategorileri kontrol edebilirsiniz.</p>
              </div>
            )}

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
                    ({totalPosts} yazı)
                  </span>
                </div>
              </nav>
            )}
          </div>
        </main>
      )}

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