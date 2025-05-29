-- etki360 Blog Sistemi Veritabanı Tabloları

-- Blog yazıları tablosu
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    excerpt TEXT,
    content LONGTEXT,
    author VARCHAR(255),
    author_email VARCHAR(255),
    image_url VARCHAR(1000),
    category VARCHAR(100) DEFAULT 'external',
    tags JSON,
    source_name VARCHAR(100) DEFAULT 'Medium',
    source_url VARCHAR(1000),
    source_tag VARCHAR(100),
    read_time VARCHAR(50),
    is_featured BOOLEAN DEFAULT FALSE,
    is_published BOOLEAN DEFAULT TRUE,
    is_turkish BOOLEAN DEFAULT TRUE,
    view_count INT DEFAULT 0,
    like_count INT DEFAULT 0,
    publish_date DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_category (category),
    INDEX idx_publish_date (publish_date),
    INDEX idx_is_published (is_published),
    INDEX idx_is_turkish (is_turkish),
    FULLTEXT(title, excerpt, content)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- RSS kaynak tablosu
CREATE TABLE IF NOT EXISTS rss_sources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(1000) NOT NULL UNIQUE,
    category VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    last_fetch TIMESTAMP NULL,
    fetch_count INT DEFAULT 0,
    error_count INT DEFAULT 0,
    last_error TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog kategorileri tablosu
CREATE TABLE IF NOT EXISTS blog_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7) DEFAULT '#1F2937',
    post_count INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog etiketleri tablosu
CREATE TABLE IF NOT EXISTS blog_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    post_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Fetch log tablosu (RSS çekme geçmişi)
CREATE TABLE IF NOT EXISTS fetch_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source_id INT,
    status ENUM('success', 'error', 'partial') DEFAULT 'success',
    posts_found INT DEFAULT 0,
    posts_saved INT DEFAULT 0,
    turkish_posts INT DEFAULT 0,
    execution_time DECIMAL(10,3),
    memory_usage VARCHAR(50),
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (source_id) REFERENCES rss_sources(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- İletişim formları tablosu
CREATE TABLE IF NOT EXISTS contact_forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(100),
    budget VARCHAR(100),
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_is_read (is_read)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admin kullanıcıları tablosu
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, -- Hashlenmiş şifre
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Varsayılan RSS kaynaklarını ekle
INSERT INTO rss_sources (name, url, category, is_active) VALUES
('Medium Yazılım', 'https://medium.com/feed/tag/yazılım', 'Yazılım', TRUE),
('Medium Teknoloji', 'https://medium.com/feed/tag/teknoloji', 'Teknoloji', TRUE),
('Medium Türkçe', 'https://medium.com/feed/tag/türkçe', 'Genel', TRUE),
('Medium Web Geliştirme', 'https://medium.com/feed/tag/web-geliştirme', 'Web Geliştirme', TRUE),
('Medium JavaScript', 'https://medium.com/feed/tag/javascript', 'JavaScript', TRUE),
('Medium React', 'https://medium.com/feed/tag/react', 'React', TRUE),
('Medium SEO', 'https://medium.com/feed/tag/seo', 'SEO', TRUE),
('Kodluyoruz', 'https://medium.com/feed/@kodluyoruz', 'Eğitim', TRUE),
('Sahibinden Technology', 'https://medium.com/feed/sahibinden-technology', 'Teknoloji', TRUE),
('Trendyol Tech', 'https://medium.com/feed/trendyol-tech', 'E-Ticaret', TRUE);

-- Varsayılan kategorileri ekle
INSERT INTO blog_categories (name, slug, description, color) VALUES
('Yazılım', 'yazilim', 'Yazılım geliştirme, programlama dilleri ve araçları', '#3B82F6'),
('Teknoloji', 'teknoloji', 'Teknoloji haberleri ve yenilikleri', '#10B981'),
('Web Geliştirme', 'web-gelistirme', 'Frontend, backend ve full-stack geliştirme', '#8B5CF6'),
('JavaScript', 'javascript', 'JavaScript, Node.js ve ilgili teknolojiler', '#F59E0B'),
('React', 'react', 'React.js ve React ekosistemi', '#06B6D4'),
('SEO', 'seo', 'Arama motoru optimizasyonu', '#EF4444'),
('E-Ticaret', 'e-ticaret', 'E-ticaret çözümleri ve stratejileri', '#F97316'),
('Eğitim', 'egitim', 'Programlama eğitimi ve kaynakları', '#84CC16'),
('Genel', 'genel', 'Genel teknoloji ve yazılım konuları', '#6B7280'),
('Dış Kaynaklar', 'dis-kaynaklar', 'Medium ve diğer kaynaklardan çekilen yazılar', '#F59E0B'); 