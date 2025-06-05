<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
// Canlı frontend adresiniz
header('Access-Control-Allow-Origin: https://etki360.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
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

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // GET isteği - E-posta şablonlarını getir
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Tek bir şablon detayı isteniyorsa
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            
            $sql = "SELECT * FROM email_templates WHERE id = :id";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            
            $template = $stmt->fetch();
            
            if ($template) {
                echo json_encode([
                    'success' => true,
                    'data' => $template
                ]);
            } else {
                http_response_code(404); // Not Found
                echo json_encode(['success' => false, 'message' => 'Şablon bulunamadı']);
            }
        } 
        // Tüm şablonları listele
        else {
            $sql = "SELECT id, name, subject, is_active, DATE_FORMAT(created_at, '%d.%m.%Y') as created_at FROM email_templates ORDER BY id DESC";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            
            $templates = $stmt->fetchAll();
            
            echo json_encode([
                'success' => true,
                'data' => $templates
            ]);
        }
    }
    // POST isteği - Şablon ekle, güncelle veya sil
    elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // POST verilerini al
        $requestData = json_decode(file_get_contents('php://input'), true);
        
        if (!$requestData || !isset($requestData['action'])) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Geçersiz istek verisi']);
            exit();
        }
        
        $action = $requestData['action'];
        
        // Yeni şablon ekle
        if ($action === 'add') {
            // Gerekli alanları kontrol et
            if (empty($requestData['name']) || empty($requestData['subject']) || empty($requestData['content'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'Şablon adı, konu ve içerik alanları zorunludur']);
                exit();
            }
            
            $sql = "INSERT INTO email_templates (
                        name, subject, content, is_active, created_at, updated_at
                    ) VALUES (
                        :name, :subject, :content, :is_active, NOW(), NOW()
                    )";
            
            $stmt = $db->prepare($sql);
            $stmt->execute([
                'name' => $requestData['name'],
                'subject' => $requestData['subject'],
                'content' => $requestData['content'],
                'is_active' => isset($requestData['is_active']) ? $requestData['is_active'] : 1
            ]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Şablon başarıyla eklendi',
                'id' => $db->lastInsertId()
            ]);
        }
        // Şablon güncelle
        elseif ($action === 'update') {
            // Gerekli alanları kontrol et
            if (empty($requestData['id']) || empty($requestData['name']) || empty($requestData['subject']) || empty($requestData['content'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'Şablon ID, adı, konu ve içerik alanları zorunludur']);
                exit();
            }
            
            $sql = "UPDATE email_templates SET 
                        name = :name,
                        subject = :subject,
                        content = :content,
                        is_active = :is_active,
                        updated_at = NOW()
                    WHERE id = :id";
            
            $stmt = $db->prepare($sql);
            $stmt->execute([
                'name' => $requestData['name'],
                'subject' => $requestData['subject'],
                'content' => $requestData['content'],
                'is_active' => isset($requestData['is_active']) ? $requestData['is_active'] : 1,
                'id' => $requestData['id']
            ]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Şablon başarıyla güncellendi'
            ]);
        }
        // Şablon sil
        elseif ($action === 'delete') {
            // Gerekli alanları kontrol et
            if (empty($requestData['id'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'Şablon ID gereklidir']);
                exit();
            }
            
            $sql = "DELETE FROM email_templates WHERE id = :id";
            $stmt = $db->prepare($sql);
            $stmt->execute([
                'id' => $requestData['id']
            ]);
            
            echo json_encode([
                'success' => true,
                'message' => 'Şablon başarıyla silindi'
            ]);
        }
        else {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Geçersiz işlem: ' . $action]);
        }
    }
    else {
        http_response_code(405); // Method Not Allowed
        echo json_encode(['success' => false, 'message' => 'Geçersiz HTTP metodu']);
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Bir hata oluştu',
        'error' => $e->getMessage()
    ]);
    
    // Hata logla
    error_log('E-posta şablonu API hatası: ' . $e->getMessage());
} 