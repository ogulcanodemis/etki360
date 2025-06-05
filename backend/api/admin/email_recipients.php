<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
// Canlı frontend adresiniz
header('Access-Control-Allow-Origin: https://etki360.com');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Veritabanı bağlantısını dahil et
require_once __DIR__ . '/../../config/database.php';

// Admin yetkilendirme kontrolü
function isAdmin() {
    // Authorization header'ını kontrol et
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']);
        // Gerçek uygulamada token doğrulama işlemi yapılmalı
        // Şimdilik token varlığını yeterli kabul ediyoruz
        return !empty($token);
    }
    return false;
}

// Yetkilendirme kontrolü
if (!isAdmin()) {
    http_response_code(401); // Unauthorized
    echo json_encode(['success' => false, 'message' => 'Yetkisiz erişim']);
    exit();
}

// Sadece GET isteklerini kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Sadece GET metodu kabul edilir']);
    exit();
}

// Filtreleme parametrelerini al
$source = isset($_GET['source']) ? $_GET['source'] : 'all';
$dateFrom = isset($_GET['dateFrom']) ? $_GET['dateFrom'] : null;
$dateTo = isset($_GET['dateTo']) ? $_GET['dateTo'] : null;

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Temel SQL sorgusu
    $sql = "
        (SELECT 
            name, 
            email, 
            'İletişim Formu' AS source, 
            DATE_FORMAT(created_at, '%d.%m.%Y') AS date,
            created_at AS sort_date
        FROM 
            contact_forms
        WHERE 1=1";
    
    // İletişim formları için filtreler
    if ($dateFrom) {
        $sql .= " AND created_at >= :dateFrom";
    }
    if ($dateTo) {
        $sql .= " AND created_at <= :dateTo";
    }
    
    $sql .= ")";
    
    // Newsletter aboneleri için sorgu ekle
    $sql .= "
        UNION
        (SELECT 
            '' AS name, 
            email, 
            'Bülten Aboneliği' AS source, 
            DATE_FORMAT(subscribe_date, '%d.%m.%Y') AS date,
            subscribe_date AS sort_date
        FROM 
            newsletter_subscribers
        WHERE 
            is_active = 1";
    
    // Newsletter için filtreler
    if ($dateFrom) {
        $sql .= " AND subscribe_date >= :dateFrom_news";
    }
    if ($dateTo) {
        $sql .= " AND subscribe_date <= :dateTo_news";
    }
    
    $sql .= ")";
    
    // Email listesindeki kişileri ekle
    $sql .= "
        UNION
        (SELECT 
            name, 
            email, 
            source AS source, 
            DATE_FORMAT(created_at, '%d.%m.%Y') AS date,
            created_at AS sort_date
        FROM 
            email_list
        WHERE 
            is_active = 1";
    
    // Email listesi için filtreler
    if ($dateFrom) {
        $sql .= " AND created_at >= :dateFrom_email_list";
    }
    if ($dateTo) {
        $sql .= " AND created_at <= :dateTo_email_list";
    }
    
    $sql .= ")";
    
    // Kaynak filtresi
    if ($source === 'contact_forms') {
        $sql = "
            SELECT 
                name, 
                email, 
                'İletişim Formu' AS source, 
                DATE_FORMAT(created_at, '%d.%m.%Y') AS date,
                created_at AS sort_date
            FROM 
                contact_forms
            WHERE 1=1";
        
        if ($dateFrom) {
            $sql .= " AND created_at >= :dateFrom";
        }
        if ($dateTo) {
            $sql .= " AND created_at <= :dateTo";
        }
    } elseif ($source === 'newsletter') {
        $sql = "
            SELECT 
                '' AS name, 
                email, 
                'Bülten Aboneliği' AS source, 
                DATE_FORMAT(subscribe_date, '%d.%m.%Y') AS date,
                subscribe_date AS sort_date
            FROM 
                newsletter_subscribers
            WHERE 
                is_active = 1";
        
        if ($dateFrom) {
            $sql .= " AND subscribe_date >= :dateFrom";
        }
        if ($dateTo) {
            $sql .= " AND subscribe_date <= :dateTo";
        }
    } elseif ($source === 'email_list') {
        $sql = "
            SELECT 
                name, 
                email, 
                source AS source, 
                DATE_FORMAT(created_at, '%d.%m.%Y') AS date,
                created_at AS sort_date
            FROM 
                email_list
            WHERE 
                is_active = 1";
        
        if ($dateFrom) {
            $sql .= " AND created_at >= :dateFrom";
        }
        if ($dateTo) {
            $sql .= " AND created_at <= :dateTo";
        }
    }
    
    // Sıralama
    $sql .= " ORDER BY sort_date DESC";
    
    $stmt = $db->prepare($sql);
    
    // Parametreleri bağla
    if ($dateFrom) {
        $formattedDateFrom = $dateFrom . ' 00:00:00';
        $stmt->bindParam(':dateFrom', $formattedDateFrom);
        
        // 'all' kaynak seçiliyse, diğer kaynaklar için de parametreyi bağla
        if ($source === 'all') {
            $stmt->bindParam(':dateFrom_news', $formattedDateFrom);
            $stmt->bindParam(':dateFrom_email_list', $formattedDateFrom);
        }
    }
    
    if ($dateTo) {
        $formattedDateTo = $dateTo . ' 23:59:59';
        $stmt->bindParam(':dateTo', $formattedDateTo);
        
        // 'all' kaynak seçiliyse, diğer kaynaklar için de parametreyi bağla
        if ($source === 'all') {
            $stmt->bindParam(':dateTo_news', $formattedDateTo);
            $stmt->bindParam(':dateTo_email_list', $formattedDateTo);
        }
    }
    
    $stmt->execute();
    
    $recipients = $stmt->fetchAll();
    
    // Yanıt oluştur
    echo json_encode([
        'success' => true,
        'data' => $recipients,
        'count' => count($recipients)
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Alıcılar yüklenirken bir hata oluştu',
        'error' => $e->getMessage()
    ]);
    
    // Hata logla
    error_log('Alıcıları yükleme hatası: ' . $e->getMessage());
} 