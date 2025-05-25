<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../services/RSSService.php';

class FetchContentAPI {
    private $rssService;
    
    public function __construct() {
        $this->rssService = new RSSService();
    }
    
    /**
     * Manuel içerik çekme
     */
    public function fetchContent() {
        try {
            // Execution time limit artır
            set_time_limit(300); // 5 dakika
            ini_set('memory_limit', '512M');
            
            $result = $this->rssService->fetchAllContent();
            
            if ($result['success']) {
                return $this->jsonResponse([
                    'success' => true,
                    'message' => 'İçerik başarıyla çekildi',
                    'data' => [
                        'total_posts_found' => $result['total_posts'],
                        'posts_saved' => $result['saved_posts'],
                        'turkish_posts' => $result['turkish_posts'],
                        'execution_time' => $result['execution_time'] . ' saniye',
                        'memory_usage' => $result['memory_usage'],
                        'sources_processed' => $result['sources_processed'],
                        'success_rate' => $result['total_posts'] > 0 ? 
                            round(($result['saved_posts'] / $result['total_posts']) * 100, 2) . '%' : '0%',
                        'turkish_rate' => $result['total_posts'] > 0 ? 
                            round(($result['turkish_posts'] / $result['total_posts']) * 100, 2) . '%' : '0%'
                    ]
                ]);
            } else {
                return $this->jsonResponse([
                    'success' => false,
                    'error' => $result['error'],
                    'execution_time' => $result['execution_time'] . ' saniye'
                ], 500);
            }
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'İçerik çekilirken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Fetch geçmişini getir
     */
    public function getFetchHistory() {
        try {
            $database = new Database();
            $db = $database->getConnection();
            
            $sql = "SELECT 
                        fl.id, fl.status, fl.posts_found, fl.posts_saved, fl.turkish_posts,
                        fl.execution_time, fl.memory_usage, fl.error_message, fl.created_at,
                        rs.name as source_name
                    FROM fetch_logs fl
                    LEFT JOIN rss_sources rs ON fl.source_id = rs.id
                    ORDER BY fl.created_at DESC
                    LIMIT 50";
            
            $stmt = $db->query($sql);
            $logs = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Tarihleri formatla
            foreach ($logs as &$log) {
                $log['created_at'] = date('d.m.Y H:i:s', strtotime($log['created_at']));
                $log['execution_time'] = $log['execution_time'] . ' saniye';
                
                // Success rate hesapla
                if ($log['posts_found'] > 0) {
                    $log['success_rate'] = round(($log['posts_saved'] / $log['posts_found']) * 100, 2) . '%';
                    $log['turkish_rate'] = round(($log['turkish_posts'] / $log['posts_found']) * 100, 2) . '%';
                } else {
                    $log['success_rate'] = '0%';
                    $log['turkish_rate'] = '0%';
                }
            }
            
            return $this->jsonResponse([
                'success' => true,
                'data' => $logs
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Fetch geçmişi alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * RSS kaynaklarını getir
     */
    public function getSources() {
        try {
            $database = new Database();
            $db = $database->getConnection();
            
            $sql = "SELECT 
                        id, name, url, category, is_active, last_fetch, 
                        fetch_count, error_count, last_error, created_at
                    FROM rss_sources 
                    ORDER BY is_active DESC, name";
            
            $stmt = $db->query($sql);
            $sources = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Tarihleri formatla
            foreach ($sources as &$source) {
                $source['last_fetch'] = $source['last_fetch'] ? 
                    date('d.m.Y H:i:s', strtotime($source['last_fetch'])) : 'Hiç çekilmedi';
                $source['created_at'] = date('d.m.Y H:i:s', strtotime($source['created_at']));
                
                // Error rate hesapla
                if ($source['fetch_count'] > 0) {
                    $source['error_rate'] = round(($source['error_count'] / $source['fetch_count']) * 100, 2) . '%';
                } else {
                    $source['error_rate'] = '0%';
                }
                
                // Status
                $source['status'] = $source['is_active'] ? 'Aktif' : 'Pasif';
            }
            
            return $this->jsonResponse([
                'success' => true,
                'data' => $sources
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'RSS kaynakları alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * RSS kaynağı durumunu güncelle
     */
    public function updateSourceStatus() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $sourceId = $input['source_id'] ?? null;
            $isActive = $input['is_active'] ?? null;
            
            if (!$sourceId || $isActive === null) {
                throw new Exception('source_id ve is_active parametreleri gerekli');
            }
            
            $database = new Database();
            $db = $database->getConnection();
            
            $sql = "UPDATE rss_sources SET is_active = ? WHERE id = ?";
            $stmt = $db->prepare($sql);
            $result = $stmt->execute([$isActive ? 1 : 0, $sourceId]);
            
            if ($result) {
                return $this->jsonResponse([
                    'success' => true,
                    'message' => 'RSS kaynağı durumu güncellendi'
                ]);
            } else {
                throw new Exception('RSS kaynağı güncellenemedi');
            }
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'RSS kaynağı güncellenirken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Yeni RSS kaynağı ekle
     */
    public function addSource() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $name = trim($input['name'] ?? '');
            $url = trim($input['url'] ?? '');
            $category = trim($input['category'] ?? '');
            
            if (empty($name) || empty($url) || empty($category)) {
                throw new Exception('name, url ve category parametreleri gerekli');
            }
            
            // URL validasyonu
            if (!filter_var($url, FILTER_VALIDATE_URL)) {
                throw new Exception('Geçersiz URL formatı');
            }
            
            $database = new Database();
            $db = $database->getConnection();
            
            // Duplicate kontrolü
            $checkSql = "SELECT id FROM rss_sources WHERE url = ?";
            $checkStmt = $db->prepare($checkSql);
            $checkStmt->execute([$url]);
            
            if ($checkStmt->fetch()) {
                throw new Exception('Bu URL zaten mevcut');
            }
            
            $sql = "INSERT INTO rss_sources (name, url, category, is_active) VALUES (?, ?, ?, 1)";
            $stmt = $db->prepare($sql);
            $result = $stmt->execute([$name, $url, $category]);
            
            if ($result) {
                return $this->jsonResponse([
                    'success' => true,
                    'message' => 'RSS kaynağı başarıyla eklendi',
                    'source_id' => $db->lastInsertId()
                ]);
            } else {
                throw new Exception('RSS kaynağı eklenemedi');
            }
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'RSS kaynağı eklenirken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Sistem durumunu getir
     */
    public function getSystemStatus() {
        try {
            $database = new Database();
            $db = $database->getConnection();
            
            // Son fetch zamanı
            $lastFetchSql = "SELECT MAX(created_at) as last_fetch FROM fetch_logs";
            $lastFetchStmt = $db->query($lastFetchSql);
            $lastFetch = $lastFetchStmt->fetch(PDO::FETCH_ASSOC)['last_fetch'];
            
            // Aktif kaynak sayısı
            $activeSourcesSql = "SELECT COUNT(*) as count FROM rss_sources WHERE is_active = 1";
            $activeSourcesStmt = $db->query($activeSourcesSql);
            $activeSources = $activeSourcesStmt->fetch(PDO::FETCH_ASSOC)['count'];
            
            // Bugünkü fetch sayısı
            $todayFetchSql = "SELECT COUNT(*) as count FROM fetch_logs WHERE DATE(created_at) = CURDATE()";
            $todayFetchStmt = $db->query($todayFetchSql);
            $todayFetches = $todayFetchStmt->fetch(PDO::FETCH_ASSOC)['count'];
            
            // Toplam yazı sayısı
            $totalPostsSql = "SELECT COUNT(*) as count FROM blog_posts WHERE is_published = 1 AND is_turkish = 1";
            $totalPostsStmt = $db->query($totalPostsSql);
            $totalPosts = $totalPostsStmt->fetch(PDO::FETCH_ASSOC)['count'];
            
            // Bu ayki yazı sayısı
            $monthlyPostsSql = "SELECT COUNT(*) as count FROM blog_posts 
                               WHERE is_published = 1 AND is_turkish = 1 
                               AND MONTH(created_at) = MONTH(CURRENT_DATE()) 
                               AND YEAR(created_at) = YEAR(CURRENT_DATE())";
            $monthlyPostsStmt = $db->query($monthlyPostsSql);
            $monthlyPosts = $monthlyPostsStmt->fetch(PDO::FETCH_ASSOC)['count'];
            
            // Son hata
            $lastErrorSql = "SELECT error_message, created_at FROM fetch_logs 
                            WHERE status = 'error' AND error_message IS NOT NULL 
                            ORDER BY created_at DESC LIMIT 1";
            $lastErrorStmt = $db->query($lastErrorSql);
            $lastError = $lastErrorStmt->fetch(PDO::FETCH_ASSOC);
            
            return $this->jsonResponse([
                'success' => true,
                'data' => [
                    'last_fetch' => $lastFetch ? date('d.m.Y H:i:s', strtotime($lastFetch)) : 'Hiç çekilmedi',
                    'active_sources' => $activeSources,
                    'today_fetches' => $todayFetches,
                    'total_posts' => $totalPosts,
                    'monthly_posts' => $monthlyPosts,
                    'last_error' => $lastError ? [
                        'message' => $lastError['error_message'],
                        'time' => date('d.m.Y H:i:s', strtotime($lastError['created_at']))
                    ] : null,
                    'system_time' => date('d.m.Y H:i:s'),
                    'php_version' => PHP_VERSION,
                    'memory_limit' => ini_get('memory_limit'),
                    'max_execution_time' => ini_get('max_execution_time') . ' saniye'
                ]
            ]);
            
        } catch (Exception $e) {
            return $this->jsonResponse([
                'success' => false,
                'error' => 'Sistem durumu alınırken hata oluştu: ' . $e->getMessage()
            ], 500);
        }
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
$api = new FetchContentAPI();
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

try {
    switch ($method) {
        case 'GET':
            switch ($action) {
                case 'fetch':
                    $api->fetchContent();
                    break;
                    
                case 'history':
                    $api->getFetchHistory();
                    break;
                    
                case 'sources':
                    $api->getSources();
                    break;
                    
                case 'status':
                    $api->getSystemStatus();
                    break;
                    
                default:
                    throw new Exception('Geçersiz action parametresi');
            }
            break;
            
        case 'POST':
            switch ($action) {
                case 'update-source':
                    $api->updateSourceStatus();
                    break;
                    
                case 'add-source':
                    $api->addSource();
                    break;
                    
                default:
                    throw new Exception('Geçersiz action parametresi');
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