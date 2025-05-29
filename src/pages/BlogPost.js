import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Backend API'sinden blog yazısını çek
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://etki360.com/backend/api/blog.php?action=post&slug=${slug}`);
        
        if (!response.ok) {
          throw new Error('Blog yazısı bulunamadı');
        }

        const data = await response.json();
        
        if (data.success && data.data) {
          setPost(data.data.post);
          setRelatedPosts(data.data.related_posts || []);
        } else {
          throw new Error('Blog yazısı bulunamadı');
        }
      } catch (error) {
        console.error('Blog yazısı yüklenirken hata:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="container">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <p>Blog yazısı yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state - 404 redirect
  if (error || !post) {
    return <Navigate to="/404" replace />;
  }

  // Tarih formatlama
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  // Sosyal medya paylaşım URL'leri
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  };

  // İçeriği paragraflar halinde böl
  const formatContent = (content) => {
    if (!content) return [];
    
    // HTML etiketlerini temizle ve paragrafları ayır
    const cleanContent = content.replace(/<[^>]*>/g, '');
    const paragraphs = cleanContent.split('\n\n').filter(p => p.trim().length > 0);
    
    return paragraphs.length > 0 ? paragraphs : [cleanContent];
  };

  const contentParagraphs = formatContent(post.content);

  return (
    <div className="blog-post-page">
      {/* Hero Section */}
      <header className="blog-post-hero">
        <div className="container">
          <div className="blog-post-hero-content">
            <nav className="blog-post-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{post.title}</span>
            </nav>
            
            <div className="blog-post-meta">
              <span className="blog-post-category">
                {post.category_name}
              </span>
              <time className="blog-post-date" dateTime={post.published_at}>
                {formatDate(post.published_at)}
              </time>
              <span className="blog-post-read-time">{post.read_time} dk okuma</span>
            </div>

            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>

            <div className="blog-post-author-info">
              <div className="author-details">
                <span className="author-name">{post.author}</span>
                {post.source_url && (
                  <span className="source-info">
                    Kaynak: <a href={post.source_url} target="_blank" rel="noopener noreferrer">Medium</a>
                  </span>
                )}
              </div>
              <div className="blog-post-share">
                <span className="share-label">Paylaş:</span>
                <div className="share-buttons">
                  <a 
                    href={shareUrls.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn twitter"
                    aria-label="Twitter'da paylaş"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href={shareUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn facebook"
                    aria-label="Facebook'ta paylaş"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href={shareUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                    aria-label="LinkedIn'de paylaş"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="blog-post-image-section">
        <div className="container">
          <div className="blog-post-featured-image">
            <img 
              src={post.image_url || '/api/placeholder/800/400'} 
              alt={post.title}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="blog-post-content-section">
        <div className="container">
          <div className="blog-post-layout">
            <main className="blog-post-content">
              <article 
                className="blog-post-body"
                itemScope 
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="description" content={post.excerpt} />
                <meta itemProp="image" content={post.image_url} />
                <meta itemProp="datePublished" content={post.published_at} />
                <meta itemProp="author" content={post.author} />
                <meta itemProp="articleSection" content={post.category_name} />
                
                <div itemProp="articleBody">
                  {contentParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  
                  {post.source_url && (
                    <div className="source-attribution">
                      <h3>Kaynak Hakkında</h3>
                      <p>
                        Bu yazı <a href={post.source_url} target="_blank" rel="noopener noreferrer">Medium</a> 
                        platformundan alınmıştır. Orijinal yazıya ulaşmak için yukarıdaki bağlantıyı kullanabilirsiniz.
                      </p>
                    </div>
                  )}
                </div>
              </article>

              <footer className="blog-post-footer">
                <div className="blog-post-tags">
                  <h3>Etiketler</h3>
                  <div className="tags-list">
                    {post.tags && post.tags.map((tag, index) => (
                      <span key={index} className="tag" itemProp="keywords">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="blog-post-share-footer">
                  <h3>Bu yazıyı paylaş</h3>
                  <div className="share-buttons">
                    <a 
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn twitter"
                    >
                      Twitter
                    </a>
                    <a 
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn facebook"
                    >
                      Facebook
                    </a>
                    <a 
                      href={shareUrls.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn linkedin"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </footer>
            </main>

            <aside className="blog-post-sidebar">
              <div className="sidebar-widget">
                <h3>Yazı Bilgileri</h3>
                <div className="post-info">
                  <div className="info-item">
                    <strong>Kategori:</strong>
                    <span>{post.category_name}</span>
                  </div>
                  <div className="info-item">
                    <strong>Yayın Tarihi:</strong>
                    <span>{formatDate(post.published_at)}</span>
                  </div>
                  <div className="info-item">
                    <strong>Okuma Süresi:</strong>
                    <span>{post.read_time} dakika</span>
                  </div>
                  <div className="info-item">
                    <strong>Görüntülenme:</strong>
                    <span>{post.view_count || 0} kez</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget">
                <h3>Profesyonel Destek</h3>
                <div className="contact-widget">
                  <p>
                    Bu konularda profesyonel destek almak ister misiniz? 
                    Uzman ekibimizle iletişime geçin.
                  </p>
                  <Link to="/iletisim" className="contact-btn">
                    Hemen İletişime Geç
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <header className="section-header">
              <h2>İlgili Yazılar</h2>
              <p>Bu konuyla ilgili diğer yazılarımız</p>
            </header>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="related-post-card">
                  <div className="related-post-image">
                    <img 
                      src={relatedPost.image_url || '/api/placeholder/300/200'} 
                      alt={relatedPost.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="related-post-content">
                    <div className="related-post-meta">
                      <span className="related-post-category">
                        {relatedPost.category_name}
                      </span>
                      <time className="related-post-date" dateTime={relatedPost.published_at}>
                        {formatDate(relatedPost.published_at)}
                      </time>
                    </div>
                    <h3 className="related-post-title">
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="related-post-excerpt">{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.slug}`} className="related-post-link">
                      Devamını Oku →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="blog-post-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Dijital Projenizi Hayata Geçirin</h2>
            <p>
              Bu yazıdan ilham aldınız mı? Kendi dijital projenizi 
              profesyonel ekibimizle hayata geçirme zamanı.
            </p>
            <div className="cta-buttons">
              <Link to="/iletisim" className="btn-primary">
                Ücretsiz Danışmanlık
              </Link>
              <Link to="/hizmetler" className="btn-secondary">
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 