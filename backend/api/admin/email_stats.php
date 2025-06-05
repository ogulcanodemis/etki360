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

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Tek bir e-posta kampanyası detayı isteniyorsa
    if (isset($_GET['id'])) {
        $id = (int)$_GET['id'];
        
        // Kampanya detayları
        $sql = "SELECT 
                    id, subject, total_recipients, sent_count, failed_count, 
                    status, DATE_FORMAT(start_time, '%d.%m.%Y %H:%i') as start_time,
                    DATE_FORMAT(completed_at, '%d.%m.%Y %H:%i') as completed_at,
                    duration, admin_user, error_message
                FROM 
                    bulk_email_log
                WHERE 
                    id = :id";
        
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $campaign = $stmt->fetch();
        
        if (!$campaign) {
            http_response_code(404); // Not Found
            echo json_encode(['success' => false, 'message' => 'E-posta kampanyası bulunamadı']);
            exit();
        }
        
        // Alıcı detayları (başarısız olanlar)
        $sqlRecipients = "SELECT 
                            recipient_email, status, error_message,
                            DATE_FORMAT(sent_at, '%d.%m.%Y %H:%i') as sent_at
                        FROM 
                            bulk_email_recipients
                        WHERE 
                            bulk_email_id = :id AND status = 'failed'
                        ORDER BY 
                            sent_at DESC";
        
        $stmtRecipients = $db->prepare($sqlRecipients);
        $stmtRecipients->bindParam(':id', $id);
        $stmtRecipients->execute();
        
        $failedRecipients = $stmtRecipients->fetchAll();
        
        // Yanıt oluştur
        echo json_encode([
            'success' => true,
            'data' => [
                'campaign' => $campaign,
                'failed_recipients' => $failedRecipients
            ]
        ]);
    } 
    // Tüm e-posta kampanyalarını listele
    else {
        // Sayfalama parametreleri
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 20;
        $offset = ($page - 1) * $limit;
        
        // Temel SQL sorgusu
        $sql = "SELECT 
                    id, subject, total_recipients, sent_count, failed_count,
                    status, DATE_FORMAT(start_time, '%d.%m.%Y %H:%i') as start_time,
                    DATE_FORMAT(completed_at, '%d.%m.%Y %H:%i') as completed_at,
                    duration
                FROM 
                    bulk_email_log
                ORDER BY 
                    id DESC
                LIMIT :offset, :limit";
        
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        
        $campaigns = $stmt->fetchAll();
        
        // Toplam kayıt sayısını al
        $countSql = "SELECT COUNT(*) as total FROM bulk_email_log";
        $countStmt = $db->prepare($countSql);
        $countStmt->execute();
        $countResult = $countStmt->fetch();
        $totalCampaigns = $countResult['total'];
        
        // Özet istatistikler
        $statsSql = "SELECT 
                        SUM(total_recipients) as total_recipients,
                        SUM(sent_count) as total_sent,
                        SUM(failed_count) as total_failed,
                        COUNT(*) as total_campaigns
                    FROM 
                        bulk_email_log";
        
        $statsStmt = $db->prepare($statsSql);
        $statsStmt->execute();
        $stats = $statsStmt->fetch();
        
        // E-posta listesi sayısı
        $emailListSql = "SELECT COUNT(*) as total FROM email_list WHERE is_active = 1";
        $emailListStmt = $db->prepare($emailListSql);
        $emailListStmt->execute();
        $emailListResult = $emailListStmt->fetch();
        $stats['total_subscribers'] = $emailListResult['total'];
        
        // Yanıt oluştur
        echo json_encode([
            'success' => true,
            'data' => $campaigns,
            'total' => $totalCampaigns,
            'page' => $page,
            'limit' => $limit,
            'totalPages' => ceil($totalCampaigns / $limit),
            'stats' => $stats
        ]);
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Bir hata oluştu',
        'error' => $e->getMessage()
    ]);
    
    // Hata logla
    error_log('E-posta istatistikleri API hatası: ' . $e->getMessage());
} 