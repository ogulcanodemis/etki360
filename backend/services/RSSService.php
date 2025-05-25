<?php

require_once __DIR__ . '/../config/database.php';

class RSSService {
    private $db;
    private $turkishWords = [
        've', 'bir', 'bu', 'da', 'de', 'ile', 'için', 'olan', 'var', 'gibi',
        'daha', 'çok', 'en', 'her', 'kendi', 'sonra', 'kadar', 'böyle',
        'nasıl', 'neden', 'nerede', 'ne', 'kim', 'hangi', 'şu', 'o',
        'ben', 'sen', 'biz', 'siz', 'onlar', 'şey', 'zaman', 'yer',
        'insan', 'hayat', 'dünya', 'ülke', 'şehir', 'ev', 'iş', 'para',
        'teknoloji', 'yazılım', 'geliştirme', 'programlama', 'kod',
        'uygulama', 'sistem', 'veri', 'bilgi', 'internet', 'web',
        'javascript', 'react', 'php', 'mysql', 'html', 'css'
    ];
    
    private $turkishChars = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'];

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    /**
     * Tüm aktif RSS kaynaklarından içerik çek
     */
    public function fetchAllContent() {
        $startTime = microtime(true);
        $totalPosts = 0;
        $totalSaved = 0;
        $totalTurkish = 0;
        
        try {
            // Aktif RSS kaynaklarını al
            $stmt = $this->db->prepare("SELECT * FROM rss_sources WHERE is_active = 1");
            $stmt->execute();
            $sources = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            foreach ($sources as $source) {
                $result = $this->fetchFromSource($source);
                $totalPosts += $result['found'];
                $totalSaved += $result['saved'];
                $totalTurkish += $result['turkish'];
                
                // Kaynak istatistiklerini güncelle
                $this->updateSourceStats($source['id'], $result);
            }
            
            $executionTime = round(microtime(true) - $startTime, 3);
            $memoryUsage = $this->formatBytes(memory_get_peak_usage(true));
            
            // Genel log kaydı
            $this->logFetchResult(null, 'success', $totalPosts, $totalSaved, $totalTurkish, $executionTime, $memoryUsage);
            
            return [
                'success' => true,
                'total_posts' => $totalPosts,
                'saved_posts' => $totalSaved,
                'turkish_posts' => $totalTurkish,
                'execution_time' => $executionTime,
                'memory_usage' => $memoryUsage,
                'sources_processed' => count($sources)
            ];
            
        } catch (Exception $e) {
            $executionTime = round(microtime(true) - $startTime, 3);
            $this->logFetchResult(null, 'error', $totalPosts, $totalSaved, $totalTurkish, $executionTime, null, $e->getMessage());
            
            return [
                'success' => false,
                'error' => $e->getMessage(),
                'execution_time' => $executionTime
            ];
        }
    }

    /**
     * Belirli bir RSS kaynağından içerik çek
     */
    private function fetchFromSource($source) {
        $found = 0;
        $saved = 0;
        $turkish = 0;
        
        try {
            // RSS feed'i çek
            $rssContent = $this->fetchRSSFeed($source['url']);
            if (!$rssContent) {
                throw new Exception("RSS feed alınamadı: " . $source['url']);
            }
            
            $xml = simplexml_load_string($rssContent);
            if (!$xml) {
                throw new Exception("RSS XML parse edilemedi");
            }
            
            $items = $xml->channel->item ?? $xml->entry ?? [];
            $found = count($items);
            
            foreach ($items as $item) {
                $post = $this->parseRSSItem($item, $source);
                
                if ($post && $this->isTurkishContent($post['title'], $post['content'])) {
                    $turkish++;
                    
                    if ($this->savePost($post)) {
                        $saved++;
                    }
                }
            }
            
            return [
                'found' => $found,
                'saved' => $saved,
                'turkish' => $turkish,
                'error' => null
            ];
            
        } catch (Exception $e) {
            return [
                'found' => $found,
                'saved' => $saved,
                'turkish' => $turkish,
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * RSS feed'i HTTP ile çek
     */
    private function fetchRSSFeed($url) {
        $context = stream_context_create([
            'http' => [
                'timeout' => 30,
                'user_agent' => 'etki360 RSS Reader 1.0',
                'header' => [
                    'Accept: application/rss+xml, application/xml, text/xml',
                    'Cache-Control: no-cache'
                ]
            ]
        ]);
        
        return @file_get_contents($url, false, $context);
    }

    /**
     * RSS item'ını parse et
     */
    private function parseRSSItem($item, $source) {
        try {
            $namespaces = [
                'content' => 'http://purl.org/rss/1.0/modules/content/',
                'dc' => 'http://purl.org/dc/elements/1.1/',
                'atom' => 'http://www.w3.org/2005/Atom'
            ];
            
            // Başlık
            $title = $this->cleanText((string)$item->title);
            if (empty($title)) return null;
            
            // İçerik - Tüm mevcut alanları birleştir
            $content = '';
            
            // 1. content:encoded (en detaylı)
            if (isset($item->children($namespaces['content'])->encoded)) {
                $content = (string)$item->children($namespaces['content'])->encoded;
            }
            
            // 2. description ekle
            if (isset($item->description)) {
                $description = (string)$item->description;
                if (mb_strlen($content, 'UTF-8') < mb_strlen($description, 'UTF-8')) {
                    $content = $description; // Daha uzunsa description'ı kullan
                } else {
                    $content .= ' ' . $description; // Yoksa ekle
                }
            }
            
            // 3. summary ekle
            if (isset($item->summary)) {
                $content .= ' ' . (string)$item->summary;
            }
            
            // İçeriği temizle
            $content = $this->cleanContent($content);
            
            // Minimum içerik kontrolü - çok esnek
            if (mb_strlen(strip_tags($content), 'UTF-8') < 50) {
                // Başlığı içeriğe ekle
                $content = $title . '. ' . $content;
                
                // Hala çok kısa ise, kategori bilgisi ekle
                if (mb_strlen(strip_tags($content), 'UTF-8') < 80) {
                    $content .= ' Bu yazı ' . $source['category'] . ' kategorisinde yer almaktadır.';
                }
            }
            
            // Türkçe içerik kontrolü - daha esnek
            if (!$this->isTurkishContent($title, $content)) {
                return null;
            }
            
            // Diğer alanlar
            $author = $this->extractAuthor($item, $namespaces);
            $publishDate = $this->parseDate((string)$item->pubDate);
            $sourceUrl = (string)$item->link;
            $category = $this->mapCategory($source['category']);
            
            // Görsel
            $imageUrl = $this->extractImage($content, $item);
            
            // Etiketler
            $tags = json_encode($this->extractTags($item, $category), JSON_UNESCAPED_UNICODE);
            
            // Özet oluştur
            $excerpt = $this->generateExcerpt($content, $title);
            
            // Okuma süresi
            $readTime = $this->calculateReadTime($content);
            
            // Slug oluştur
            $slug = $this->generateSlug($title);
            
            return [
                'title' => $title,
                'slug' => $slug,
                'excerpt' => $excerpt,
                'content' => $content,
                'author' => $author,
                'image_url' => $imageUrl,
                'category' => $category,
                'tags' => $tags,
                'source_name' => $source['name'],
                'source_url' => $sourceUrl,
                'source_tag' => $source['category'],
                'read_time' => $readTime,
                'publish_date' => $publishDate
            ];
            
        } catch (Exception $e) {
            error_log("RSS item parse hatası: " . $e->getMessage());
            return null;
        }
    }

    /**
     * İçeriğin Türkçe olup olmadığını kontrol et
     */
    private function isTurkishContent($title, $content) {
        $text = strtolower($title . ' ' . strip_tags($content));
        
        // Türkçe karakterleri kontrol et
        $turkishCharCount = 0;
        foreach ($this->turkishChars as $char) {
            $turkishCharCount += substr_count($text, strtolower($char));
        }
        
        // Türkçe kelimeleri kontrol et
        $turkishWordCount = 0;
        $words = preg_split('/\s+/', $text);
        $totalWords = count($words);
        
        foreach ($words as $word) {
            $cleanWord = preg_replace('/[^\p{L}\p{N}]/u', '', $word);
            if (in_array($cleanWord, $this->turkishWords)) {
                $turkishWordCount++;
            }
        }
        
        // Türkçe olma kriterleri
        $turkishCharRatio = $totalWords > 0 ? $turkishCharCount / $totalWords : 0;
        $turkishWordRatio = $totalWords > 0 ? $turkishWordCount / $totalWords : 0;
        
        return $turkishCharRatio > 0.02 || $turkishWordRatio > 0.1 || $totalWords < 10;
    }

    /**
     * Post'u veritabanına kaydet
     */
    private function savePost($post) {
        try {
            // Duplicate kontrolü
            $stmt = $this->db->prepare("SELECT id FROM blog_posts WHERE slug = ? OR source_url = ?");
            $stmt->execute([$post['slug'], $post['source_url']]);
            
            if ($stmt->fetch()) {
                return false; // Zaten var
            }
            
            $sql = "INSERT INTO blog_posts (
                title, slug, excerpt, content, author, image_url, category, tags,
                source_name, source_url, source_tag, read_time, publish_date,
                is_turkish, is_published
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1)";
            
            $stmt = $this->db->prepare($sql);
            return $stmt->execute([
                $post['title'],
                $post['slug'],
                $post['excerpt'],
                $post['content'],
                $post['author'],
                $post['image_url'],
                $post['category'],
                $post['tags'],
                $post['source_name'],
                $post['source_url'],
                $post['source_tag'],
                $post['read_time'],
                $post['publish_date']
            ]);
            
        } catch (Exception $e) {
            error_log("Post kaydetme hatası: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Yardımcı metodlar
     */
    private function cleanText($text) {
        // UTF-8 encoding'i garanti et
        if (!mb_check_encoding($text, 'UTF-8')) {
            $text = mb_convert_encoding($text, 'UTF-8', 'auto');
        }
        
        // HTML entity'leri decode et
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        
        // HTML etiketlerini temizle
        $text = strip_tags($text);
        
        // Fazla boşlukları temizle
        $text = preg_replace('/\s+/', ' ', $text);
        
        return trim($text);
    }

    private function cleanContent($content) {
        // UTF-8 encoding'i garanti et
        if (!mb_check_encoding($content, 'UTF-8')) {
            $content = mb_convert_encoding($content, 'UTF-8', 'auto');
        }
        
        // HTML entity'leri decode et (önce numeric entities)
        $content = html_entity_decode($content, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        
        // Numeric HTML entities'i de decode et
        $content = preg_replace_callback('/&#x([0-9a-fA-F]+);/', function($matches) {
            return mb_convert_encoding(pack('H*', $matches[1]), 'UTF-8', 'UCS-2BE');
        }, $content);
        
        $content = preg_replace_callback('/&#([0-9]+);/', function($matches) {
            return mb_chr($matches[1], 'UTF-8');
        }, $content);
        
        // "Continue reading" ve benzeri linklerini temizle (önce)
        $content = preg_replace('/…Continue reading.*$/i', '', $content);
        $content = preg_replace('/Continue reading.*$/i', '', $content);
        $content = preg_replace('/Read more.*$/i', '', $content);
        $content = preg_replace('/Devamını oku.*$/i', '', $content);
        $content = preg_replace('/\[…\].*$/i', '', $content);
        $content = preg_replace('/\.\.\.$/', '', $content);
        
        // Gereksiz HTML etiketlerini temizle ama bazılarını koru
        $content = strip_tags($content, '<p><br><strong><b><em><i><ul><ol><li><h1><h2><h3><h4><h5><h6><blockquote><a>');
        
        // Boş paragrafları temizle
        $content = preg_replace('/<p[^>]*>[\s\n\r]*<\/p>/i', '', $content);
        
        // Fazla boşlukları temizle ama paragraf yapısını koru
        $content = preg_replace('/[\r\n]+/', "\n", $content);
        $content = preg_replace('/[ \t]+/', ' ', $content);
        
        return trim($content);
    }

    private function parseDate($dateString) {
        if (empty($dateString)) {
            return date('Y-m-d H:i:s');
        }
        
        $timestamp = strtotime($dateString);
        return $timestamp ? date('Y-m-d H:i:s', $timestamp) : date('Y-m-d H:i:s');
    }

    private function extractAuthor($item, $namespaces) {
        $author = '';
        
        if (isset($item->children($namespaces['dc'])->creator)) {
            $author = (string)$item->children($namespaces['dc'])->creator;
        } elseif (isset($item->author)) {
            $author = (string)$item->author;
        }
        
        return $this->cleanText($author) ?: 'Anonim';
    }

    private function mapCategory($sourceCategory) {
        $categoryMap = [
            'Yazılım' => 'yazilim',
            'Teknoloji' => 'teknoloji',
            'Web Geliştirme' => 'web-gelistirme',
            'JavaScript' => 'javascript',
            'React' => 'react',
            'SEO' => 'seo',
            'E-Ticaret' => 'e-ticaret',
            'Eğitim' => 'egitim'
        ];
        
        return $categoryMap[$sourceCategory] ?? 'dis-kaynaklar';
    }

    private function generateExcerpt($content, $title) {
        // İçeriği temizle
        $cleanContent = $this->cleanContent($content);
        
        // UTF-8 encoding'i garanti et
        if (!mb_check_encoding($cleanContent, 'UTF-8')) {
            $cleanContent = mb_convert_encoding($cleanContent, 'UTF-8', 'auto');
        }
        
        // HTML entity'leri decode et
        $cleanContent = html_entity_decode($cleanContent, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        
        // HTML etiketlerini tamamen kaldır
        $cleanContent = strip_tags($cleanContent);
        
        // Fazla boşlukları temizle
        $cleanContent = preg_replace('/\s+/', ' ', $cleanContent);
        $cleanContent = trim($cleanContent);
        
        // Eğer içerik çok kısa ise, başlığı da ekle
        if (mb_strlen($cleanContent, 'UTF-8') < 30) {
            $cleanContent = $title . '. ' . $cleanContent;
        }
        
        // Sadece çok uzun ise kısalt (5000 karakter)
        if (mb_strlen($cleanContent, 'UTF-8') > 5000) {
            $cleanContent = mb_substr($cleanContent, 0, 5000, 'UTF-8');
            
            // Son kelimeyi tam bırak
            $lastSpace = mb_strrpos($cleanContent, ' ', 0, 'UTF-8');
            if ($lastSpace !== false && $lastSpace > 4800) {
                $cleanContent = mb_substr($cleanContent, 0, $lastSpace, 'UTF-8');
            }
            
            $cleanContent .= '...';
        }
        
        return $cleanContent ?: mb_substr($title, 0, 100, 'UTF-8') . '...';
    }

    private function extractImage($content, $item) {
        // İçerikten görsel çıkar
        if (preg_match('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $content, $matches)) {
            return $matches[1];
        }
        
        // RSS enclosure kontrol et
        if (isset($item->enclosure) && strpos($item->enclosure['type'], 'image') !== false) {
            return (string)$item->enclosure['url'];
        }
        
        // Varsayılan görsel
        return 'https://placehold.co/600x400/1F2937/FFFFFF?text=etki360+Blog';
    }

    private function extractTags($item, $category) {
        $tags = [$category];
        
        if (isset($item->category)) {
            foreach ($item->category as $cat) {
                $tag = $this->cleanText((string)$cat);
                if (!empty($tag) && !in_array($tag, $tags)) {
                    $tags[] = $tag;
                }
            }
        }
        
        return array_slice($tags, 0, 5); // Maksimum 5 etiket
    }

    private function calculateReadTime($content) {
        $wordCount = str_word_count(strip_tags($content));
        $minutes = max(1, round($wordCount / 200)); // 200 kelime/dakika
        return $minutes . ' dk okuma';
    }

    private function generateSlug($title) {
        $slug = strtolower($title);
        
        // Türkçe karakterleri değiştir
        $search = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'];
        $replace = ['c', 'g', 'i', 'o', 's', 'u', 'c', 'g', 'i', 'o', 's', 'u'];
        $slug = str_replace($search, $replace, $slug);
        
        // Özel karakterleri temizle
        $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
        $slug = preg_replace('/[\s-]+/', '-', $slug);
        $slug = trim($slug, '-');
        
        // Benzersizlik için timestamp ekle
        return substr($slug, 0, 80) . '-' . time();
    }

    private function updateSourceStats($sourceId, $result) {
        $sql = "UPDATE rss_sources SET 
                last_fetch = NOW(), 
                fetch_count = fetch_count + 1,
                error_count = error_count + ?,
                last_error = ?
                WHERE id = ?";
        
        $errorCount = $result['error'] ? 1 : 0;
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$errorCount, $result['error'], $sourceId]);
    }

    private function logFetchResult($sourceId, $status, $found, $saved, $turkish, $executionTime, $memoryUsage, $error = null) {
        $sql = "INSERT INTO fetch_logs (
            source_id, status, posts_found, posts_saved, turkish_posts,
            execution_time, memory_usage, error_message
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$sourceId, $status, $found, $saved, $turkish, $executionTime, $memoryUsage, $error]);
    }

    private function formatBytes($bytes, $precision = 2) {
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}
?> 