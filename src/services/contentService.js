// Content Service - RSS Feed Integration
class ContentService {
  constructor() {
    this.rssFeeds = [
      // Türkçe Medium Tag'leri ve Türkçe yayınlar
      'https://medium.com/feed/tag/yazılım',
      'https://medium.com/feed/tag/teknoloji',
      'https://medium.com/feed/tag/türkçe',
      'https://medium.com/feed/tag/web-geliştirme',
      'https://medium.com/feed/tag/javascript',
      'https://medium.com/feed/tag/react',
      'https://medium.com/feed/tag/seo',
      // Türkçe Medium yayınları
      'https://medium.com/feed/@kodluyoruz',
      'https://medium.com/feed/sahibinden-technology',
      'https://medium.com/feed/trendyol-tech',
      'https://medium.com/feed/medium-türkiye'
    ];
    this.apiKey = process.env.REACT_APP_RSS2JSON_API_KEY; // Opsiyonel
    
    // Türkçe kelime listesi
    this.turkishWords = [
      've', 'bir', 'bu', 'için', 'ile', 'olan', 'var', 'gibi', 'daha', 'çok',
      'nasıl', 'neden', 'nedir', 'hangi', 'şu', 'o', 'da', 'de', 'ki', 'mi',
      'mı', 'mu', 'mü', 'ise', 'eğer', 'ancak', 'fakat', 'lakin', 'ama',
      'yazılım', 'teknoloji', 'geliştirme', 'programlama', 'kodlama', 'web',
      'uygulama', 'sistem', 'veri', 'bilgi', 'dijital', 'internet', 'site', 'yazılım', 'teknoloji',
      'geliştirme', 'programlama', 'kodlama', 'web', 'kodluyoruz', 'sahibinden', 'trendyol', 'medium', 'türkçe'
    ];
  }

  // Türkçe içerik kontrolü
  isTurkishContent(title, content) {
    const text = (title + ' ' + content).toLowerCase();
    
    // Türkçe karakterler kontrolü
    const turkishChars = /[çğıöşüÇĞIİÖŞÜ]/;
    if (turkishChars.test(text)) {
      return true;
    }
    
    // Türkçe kelime sayısı kontrolü
    const words = text.split(/\s+/);
    const turkishWordCount = words.filter(word => 
      this.turkishWords.some(turkishWord => 
        word.includes(turkishWord) || turkishWord.includes(word)
      )
    ).length;
    
    // En az 3 Türkçe kelime varsa Türkçe kabul et
    return turkishWordCount >= 3;
  }

  // RSS'den blog yazılarını çek
  async fetchRSSContent(rssUrl) {
    try {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.status === 'ok') {
        const formattedItems = this.formatRSSItems(data.items, rssUrl);
        // Türkçe içerikleri filtrele
        return formattedItems.filter(item => 
          this.isTurkishContent(item.title, item.excerpt)
        );
      }
      return [];
    } catch (error) {
      console.error('RSS fetch error:', error);
      return [];
    }
  }

  // RSS verilerini blog formatına dönüştür
  formatRSSItems(items, sourceUrl) {
    // Tag'den kategori belirle
    const category = this.getCategoryFromUrl(sourceUrl);
    
    return items.map(item => ({
      id: this.generateId(item.link),
      title: this.cleanTitle(item.title),
      excerpt: this.extractExcerpt(item.description),
      content: this.cleanContent(item.description),
      author: item.author || this.extractAuthor(item.description) || 'Medium Yazarı',
      publishDate: item.pubDate,
      image: this.extractImage(item.description) || this.getDefaultImage(category),
      category: 'external',
      tags: this.extractTags(item.categories, category),
      source: {
        name: 'Medium',
        url: item.link,
        attribution: true,
        tag: category
      },
      readTime: this.calculateReadTime(item.description),
      featured: false,
      slug: this.generateSlug(item.title)
    }));
  }

  // URL'den kategori belirle
  getCategoryFromUrl(url) {
    if (url.includes('yazılım')) return 'Yazılım';
    if (url.includes('teknoloji')) return 'Teknoloji';
    if (url.includes('web-geliştirme')) return 'Web Geliştirme';
    if (url.includes('javascript')) return 'JavaScript';
    if (url.includes('react')) return 'React';
    if (url.includes('seo')) return 'SEO';
    if (url.includes('dijital-pazarlama')) return 'Dijital Pazarlama';
    if (url.includes('e-ticaret')) return 'E-Ticaret';
    if (url.includes('kodluyoruz')) return 'Eğitim';
    if (url.includes('sahibinden-technology')) return 'Teknoloji';
    if (url.includes('trendyol-tech')) return 'E-Ticaret';
    if (url.includes('türkçe') || url.includes('türkiye')) return 'Genel';
    return 'Teknoloji';
  }

  // Kategoriye göre varsayılan görsel
  getDefaultImage(category) {
    const images = {
      'Yazılım': '/api/placeholder/400/250?text=Yazılım',
      'Teknoloji': '/api/placeholder/400/250?text=Teknoloji',
      'Web Geliştirme': '/api/placeholder/400/250?text=Web+Geliştirme',
      'JavaScript': '/api/placeholder/400/250?text=JavaScript',
      'React': '/api/placeholder/400/250?text=React',
      'SEO': '/api/placeholder/400/250?text=SEO',
      'Dijital Pazarlama': '/api/placeholder/400/250?text=Dijital+Pazarlama',
      'E-Ticaret': '/api/placeholder/400/250?text=E-Ticaret',
      'Eğitim': '/api/placeholder/400/250?text=Eğitim',
      'Genel': '/api/placeholder/400/250?text=Blog'
    };
    return images[category] || '/api/placeholder/400/250?text=Blog';
  }

  // Yazar adını çıkar
  extractAuthor(content) {
    // Medium içeriğinden yazar adını çıkarmaya çalış
    const authorMatch = content.match(/by\s+([^<]+)/i);
    return authorMatch ? authorMatch[1].trim() : null;
  }

  // Başlığı temizle
  cleanTitle(title) {
    return title.replace(/<[^>]*>/g, '').trim();
  }

  // İçerikten özet çıkar
  extractExcerpt(content) {
    const cleanContent = content.replace(/<[^>]*>/g, '');
    return cleanContent.substring(0, 150) + '...';
  }

  // İçeriği temizle
  cleanContent(content) {
    // HTML etiketlerini temizle ama temel formatlamayı koru
    return content
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/<style[^>]*>.*?<\/style>/gi, '')
      .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '');
  }

  // Görsel URL'si çıkar
  extractImage(content) {
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  }

  // Etiketleri çıkar
  extractTags(categories, mainCategory) {
    const baseTags = categories ? categories.slice(0, 2) : [];
    return [mainCategory, ...baseTags].filter(Boolean).slice(0, 3);
  }

  // Okuma süresini hesapla
  calculateReadTime(content) {
    const words = content.replace(/<[^>]*>/g, '').split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} dakika okuma`;
  }

  // Slug oluştur
  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9ğüşıöçĞÜŞIÖÇ\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  // Unique ID oluştur
  generateId(url) {
    return btoa(url).replace(/[^a-zA-Z0-9]/g, '').substring(0, 10);
  }

  // Tüm kaynaklardan içerik çek
  async fetchAllContent() {
    const allContent = [];
    
    for (const feedUrl of this.rssFeeds) {
      try {
        console.log(`Fetching content from: ${feedUrl}`);
        const content = await this.fetchRSSContent(feedUrl);
        console.log(`Found ${content.length} Turkish articles from ${feedUrl}`);
        allContent.push(...content);
        
        // API rate limiting için kısa bekleme
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (error) {
        console.error(`Error fetching from ${feedUrl}:`, error);
      }
    }

    // Tarihe göre sırala ve duplicate'leri kaldır
    const uniqueContent = this.removeDuplicates(allContent);
    console.log(`Total Turkish articles found: ${uniqueContent.length}`);
    return uniqueContent.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  }

  // Duplicate içerikleri kaldır
  removeDuplicates(content) {
    const seen = new Set();
    return content.filter(item => {
      const key = item.title.toLowerCase().replace(/\s+/g, '');
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  // Cache ile performans optimizasyonu
  async getCachedContent() {
    const cacheKey = 'rss_content_v3'; // Version artırıldı (Türkçe filtre için)
    const cacheTime = 60 * 60 * 1000; // 1 saat
    
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < cacheTime) {
          console.log('Using cached Turkish content');
          return data;
        }
      } catch (error) {
        console.error('Cache parse error:', error);
      }
    }

    console.log('Fetching fresh Turkish content from Medium...');
    const freshContent = await this.fetchAllContent();
    
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        data: freshContent,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.error('Cache save error:', error);
    }

    return freshContent;
  }

  // Cache'i temizle (debug için)
  clearCache() {
    localStorage.removeItem('rss_content_v3');
    console.log('Turkish content cache cleared');
  }
}

export default new ContentService(); 