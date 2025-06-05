<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // Tüm domainlerden gelen isteklere izin ver
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config/database.php';

class BlogAPI {
    private $db;
    
    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
        
        // MariaDB LIMIT/OFFSET sorunu için
        $this->db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }
    
    /**
     * Blog yazılarını getir
     */
    public function getPosts() {
        try {
            // Query parametrelerini al
            $page = max(1, intval($_GET['page'] ?? 1));
            $limit = min(50, max(1, intval($_GET['limit'] ?? 12)));
            $category = $_GET['category'] ?? '';
            $search = $_GET['search'] ?? '';
            $featured = $_GET['featured'] ?? '';
            $offset = ($page - 1) * $limit;
            
            // Base query
            $whereConditions = ['is_published = 1', 'is_turkish = 1'];
            $params = [];
            
            // Kategori filtresi
            if (!empty($category) && $category !== 'all') {
                $whereConditions[] = 'category = ?';
                $params[] = $category;
            }
            
            // Arama filtresi
            if (!empty($search)) {
                $whereConditions[] = '(title LIKE ? OR excerpt LIKE ? OR content LIKE ?)';
                $searchTerm = '%' . $search . '%';
                $params[] = $searchTerm;
                $params[] = $searchTerm;
                $params[] = $searchTerm;
            }
            
            // Öne çıkan yazılar filtresi
            if ($featured === 'true') {
                $whereConditions[] = 'is_featured = 1';
            }
            
            $whereClause = implode(' AND ', $whereConditions);
            
            // Toplam sayı için count query
            $countSql = "SELECT COUNT(*) as total FROM blog_posts WHERE $whereClause";
            $countStmt = $this->db->prepare($countSql);
            $countStmt->execute($params);
            $totalPosts = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            // Ana query
            $sql = "SELECT 
                        id, title, slug, excerpt, author, image_url, category, tags,
                        source_name, source_url, read_time, is_featured, view_count,
                        publish_date, created_at
                    FROM blog_posts 
                    WHERE $whereClause 
                    ORDER BY 
                        CASE WHEN is_featured = 1 THEN 0 ELSE 1 END,
                        publish_date DESC 
                    LIMIT " . (int)$limit . " OFFSET " . (int)$offset;
            
            $stmt = $this->db->prepare($sql);
            $stmt->execute($params);
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // JSON decode tags
            foreach ($posts as &$post) {
                $post['tags'] = json_decode($post['tags'], true) ?? [];
                $post['publish_date'] = $this->formatDate($post['publish_date']);
                $post['created_at'] = $this->formatDate($post['created_at']);
                
                // Source bilgisi varsa external olarak işaretle
                $post['is_external'] = !empty($post['source_url']);
            }
            
            // Pagination bilgileri
            $totalPages = ceil($totalPosts / $limit);
            
            return $this->jsonResponse([
                'success' => true,
                'data' => [
                    'posts' => $posts,
                    'pagination' => [
                        'current_page' => $page,
                        'total_pages' => $totalPages,
                        'total_posts' => $totalPosts,
                        'per_page' => $limit,
                        'has_next' => $page < $totalPages,
                        'has_prev' => $page > 1
                    ]
                ]
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Blog yazıları alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Tek blog yazısını getir
     */
    public function getPost($slug) {
        try {
            $sql = "SELECT * FROM blog_posts WHERE slug = ? AND is_published = 1 AND is_turkish = 1";
            $stmt = $this->db->prepare($sql);
            $stmt->execute([$slug]);
            $post = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$post) {
                return $this->jsonResponse([
                    'success' => false,
                    'error' => 'Blog yazısı bulunamadı'
                ], 404);
            }
            
            // View count artır
            $this->incrementViewCount($post['id']);
            $post['view_count']++;
            
            // JSON decode tags
            $post['tags'] = json_decode($post['tags'], true) ?? [];
            $post['publish_date'] = $this->formatDate($post['publish_date']);
            $post['created_at'] = $this->formatDate($post['created_at']);
            $post['is_external'] = !empty($post['source_url']);
            
            // İlgili yazıları getir
            $relatedPosts = $this->getRelatedPosts($post['category'], $post['id']);
            
            return $this->jsonResponse([
                'success' => true,
                'data' => [
                    'post' => $post,
                    'related_posts' => $relatedPosts
                ]
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Blog yazısı alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Kategorileri getir
     */
    public function getCategories() {
        try {
            // Aktif kategorileri ve post sayılarını getir
            $sql = "SELECT 
                        bc.name, bc.slug, bc.description, bc.color,
                        COUNT(bp.id) as post_count
                    FROM blog_categories bc
                    LEFT JOIN blog_posts bp ON bc.slug = bp.category 
                        AND bp.is_published = 1 AND bp.is_turkish = 1
                    WHERE bc.is_active = 1
                    GROUP BY bc.id, bc.name, bc.slug, bc.description, bc.color
                    HAVING post_count > 0
                    ORDER BY post_count DESC, bc.name";
            
            $stmt = $this->db->query($sql);
            $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Toplam yazı sayısını ekle
            $totalSql = "SELECT COUNT(*) as total FROM blog_posts WHERE is_published = 1 AND is_turkish = 1";
            $totalStmt = $this->db->query($totalSql);
            $totalPosts = $totalStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            // "Tümü" kategorisini başa ekle
            array_unshift($categories, [
                'name' => 'Tüm Yazılar',
                'slug' => 'all',
                'description' => 'Tüm blog yazıları',
                'color' => '#6B7280',
                'post_count' => $totalPosts
            ]);
            
            return $this->jsonResponse([
                'success' => true,
                'data' => $categories
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Kategoriler alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Popüler etiketleri getir
     */
    public function getTags() {
        try {
            $sql = "SELECT 
                        JSON_UNQUOTE(JSON_EXTRACT(tags, CONCAT('$[', numbers.n, ']'))) as tag,
                        COUNT(*) as count
                    FROM blog_posts
                    CROSS JOIN (
                        SELECT 0 as n UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                    ) numbers
                    WHERE is_published = 1 AND is_turkish = 1
                        AND JSON_LENGTH(tags) > numbers.n
                        AND JSON_UNQUOTE(JSON_EXTRACT(tags, CONCAT('$[', numbers.n, ']'))) IS NOT NULL
                    GROUP BY tag
                    HAVING count >= 2
                    ORDER BY count DESC, tag
                    LIMIT 20";
            
            $stmt = $this->db->query($sql);
            $tags = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            return $this->jsonResponse([
                'success' => true,
                'data' => $tags
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Etiketler alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * İstatistikleri getir
     */
    public function getStats() {
        try {
            // Toplam yazı sayısı
            $totalSql = "SELECT COUNT(*) as total FROM blog_posts WHERE is_published = 1 AND is_turkish = 1";
            $totalStmt = $this->db->query($totalSql);
            $totalPosts = $totalStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            // Kategori sayısı
            $categorySql = "SELECT COUNT(DISTINCT category) as total FROM blog_posts WHERE is_published = 1 AND is_turkish = 1";
            $categoryStmt = $this->db->query($categorySql);
            $totalCategories = $categoryStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            // Bu ayki yazı sayısı
            $monthlySql = "SELECT COUNT(*) as total FROM blog_posts 
                          WHERE is_published = 1 AND is_turkish = 1 
                          AND MONTH(publish_date) = MONTH(CURRENT_DATE()) 
                          AND YEAR(publish_date) = YEAR(CURRENT_DATE())";
            $monthlyStmt = $this->db->query($monthlySql);
            $monthlyPosts = $monthlyStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            // Toplam görüntülenme
            $viewsSql = "SELECT SUM(view_count) as total FROM blog_posts WHERE is_published = 1 AND is_turkish = 1";
            $viewsStmt = $this->db->query($viewsSql);
            $totalViews = $viewsStmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;
            
            return $this->jsonResponse([
                'success' => true,
                'data' => [
                    'total_posts' => $totalPosts,
                    'total_categories' => $totalCategories,
                    'monthly_posts' => $monthlyPosts,
                    'total_views' => $totalViews
                ]
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'İstatistikler alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * İlgili yazıları getir
     */
    private function getRelatedPosts($category, $excludeId, $limit = 3) {
        $sql = "SELECT id, title, slug, excerpt, image_url, category, publish_date
                FROM blog_posts 
                WHERE category = ? AND id != ? AND is_published = 1 AND is_turkish = 1
                ORDER BY publish_date DESC 
                LIMIT " . (int)$limit;
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$category, $excludeId]);
        $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($posts as &$post) {
            $post['publish_date'] = $this->formatDate($post['publish_date']);
        }
        
        return $posts;
    }
    
    /**
     * Görüntülenme sayısını artır
     */
    private function incrementViewCount($postId) {
        $sql = "UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$postId]);
    }
    
    /**
     * Tarih formatla
     */
    private function formatDate($date) {
        return date('Y-m-d H:i:s', strtotime($date));
    }
    
    /**
     * JSON response döndür
     */
    private function jsonResponse($data, $statusCode = 200) {
        http_response_code($statusCode);
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        exit;
    }
}

// API routing
$api = new BlogAPI();
$method = $_SERVER['REQUEST_METHOD'];
$path = $_GET['action'] ?? '';

try {
    switch ($method) {
        case 'GET':
            switch ($path) {
                case 'posts':
                    $api->getPosts();
                    break;
                    
                case 'post':
                    $slug = $_GET['slug'] ?? '';
                    if (empty($slug)) {
                        throw new Exception('Slug parametresi gerekli');
                    }
                    $api->getPost($slug);
                    break;
                    
                case 'categories':
                    $api->getCategories();
                    break;
                    
                case 'tags':
                    $api->getTags();
                    break;
                    
                case 'stats':
                    $api->getStats();
                    break;
                    
                default:
                    throw new Exception('Geçersiz endpoint');
            }
            break;
            
        default:
            throw new Exception('Desteklenmeyen HTTP metodu');
    }
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?> 