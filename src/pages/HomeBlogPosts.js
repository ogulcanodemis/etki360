import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomeBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        // Blog.js'deki gibi API isteği yapıyoruz, aynı URL yapısını kullanarak
        const response = await fetch('http://etki360.com/backend/api/blog.php?action=posts&limit=3&page=1');
        
        if (!response.ok) {
          throw new Error('Blog yazıları yüklenirken bir hata oluştu');
        }
        
        const data = await response.json();
        
        if (data.success && data.data && data.data.posts) {
          setBlogPosts(data.data.posts);
        } else {
          // API çalışmıyorsa veya veri yoksa örnek blog içeriği göster
          const samplePosts = [
            {
              id: 1,
              title: "Web Sitesi Hızlandırma Teknikleri",
              excerpt: "Modern web sitelerinde performans optimizasyonu için kullanabileceğiniz en etkili teknikler ve araçlar.",
              category: "Performans",
              publish_date: new Date().toISOString(),
              image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
              slug: "web-sitesi-hizlandirma-teknikleri"
            },
            {
              id: 2,
              title: "E-Ticaret SEO Stratejileri",
              excerpt: "Online mağazanızın arama motorlarında üst sıralarda yer alması için uygulamanız gereken SEO teknikleri.",
              category: "SEO",
              publish_date: new Date().toISOString(),
              image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
              slug: "e-ticaret-seo-stratejileri"
            },
            {
              id: 3,
              title: "Mobil Uygulama Tasarım Trendleri",
              excerpt: "2024 yılında öne çıkan mobil uygulama tasarım trendleri ve kullanıcı deneyimini artıran özellikler.",
              category: "Tasarım",
              publish_date: new Date().toISOString(),
              image_url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
              slug: "mobil-uygulama-tasarim-trendleri"
            }
          ];
          setBlogPosts(samplePosts);
        }
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata:', error);
        // Hata durumunda örnek içerik göster
        const samplePosts = [
          {
            id: 1,
            title: "Web Sitesi Hızlandırma Teknikleri",
            excerpt: "Modern web sitelerinde performans optimizasyonu için kullanabileceğiniz en etkili teknikler ve araçlar.",
            category: "Performans",
            publish_date: new Date().toISOString(),
            image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
            slug: "web-sitesi-hizlandirma-teknikleri"
          },
          {
            id: 2,
            title: "E-Ticaret SEO Stratejileri",
            excerpt: "Online mağazanızın arama motorlarında üst sıralarda yer alması için uygulamanız gereken SEO teknikleri.",
            category: "SEO",
            publish_date: new Date().toISOString(),
            image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
            slug: "e-ticaret-seo-stratejileri"
          },
          {
            id: 3,
            title: "Mobil Uygulama Tasarım Trendleri",
            excerpt: "2024 yılında öne çıkan mobil uygulama tasarım trendleri ve kullanıcı deneyimini artıran özellikler.",
            category: "Tasarım",
            publish_date: new Date().toISOString(),
            image_url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
            slug: "mobil-uygulama-tasarim-trendleri"
          }
        ];
        setBlogPosts(samplePosts);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Tarih formatlama
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  if (loading) {
    return (
      <div className="home-blog-loading">
        <div className="home-loading-spinner"></div>
        <p>Blog yazıları yükleniyor...</p>
      </div>
    );
  }

  if (error && blogPosts.length === 0) {
    return (
      <div className="home-blog-error">
        <p>{error}</p>
        <Link to="/blog" className="home-blog-link">Tüm Blog Yazılarını Görüntüle</Link>
      </div>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <div className="home-blog-empty">
        <p>Henüz blog yazısı bulunmuyor.</p>
        <Link to="/blog" className="home-blog-link">Tüm Blog Yazılarını Görüntüle</Link>
      </div>
    );
  }

  return (
    <div className="home-blog-grid">
      {blogPosts.map((post) => (
        <div className="home-blog-card" key={post.id}>
          <div className="home-blog-image">
            <img 
              src={post.image_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"} 
              alt={post.title} 
              loading="lazy"
            />
          </div>
          <div className="home-blog-content">
            <span className="home-blog-category">{post.category}</span>
            <h3 className="home-blog-title">{post.title}</h3>
            <p className="home-blog-excerpt">{post.excerpt}</p>
            <div className="home-blog-meta">
              <div className="home-blog-date">
                <i className="far fa-calendar-alt"></i>
                <span>{formatDate(post.publish_date)}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="home-blog-read-more">
                Devamını Oku →
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="home-blog-all-link">
        <Link to="/blog" className="home-btn-secondary">
          Tüm Blog Yazılarını Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogPosts; 