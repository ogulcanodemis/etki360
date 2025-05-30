<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
// Canlı frontend adresiniz
header('Access-Control-Allow-Origin: https://etki360.com');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); // İhtiyaç duyulabilecek metodlar
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Veritabanı bağlantısını dahil et
require_once __DIR__ . '/../../config/database.php';

// Admin yetkilendirme kontrolü (şimdilik basit bir placeholder)
// Gerçek bir uygulamada daha güvenli bir oturum veya token doğrulama yapılır
function isAdmin() {
    // Örneğin, Authorization başlığında geçerli bir token var mı kontrolü yapılabilir
    // Ya da oturum değişkeni kontrol edilebilir
    // Şimdilik her zaman true döndürüyoruz, gerçek backend entegrasyonunda burası güncellenmeli
    return true; // GEÇİCİ: Gerçek yetkilendirme burada olmalı
}

if (!isAdmin()) {
    http_response_code(401); // Unauthorized
    echo json_encode(['success' => false, 'message' => 'Yetkisiz erişim']);
    exit();
}

// API routing
// action parametresine göre farklı işlemler yapılır (listeleme, silme vb.)
$action = $_GET['action'] ?? '';

$database = new Database();
$db = $database->getConnection();

switch ($action) {
    case 'list':
        // İletişim mesajlarını listeleme
        $page = $_GET['page'] ?? 1;
        $limit = $_GET['limit'] ?? 10; // Sayfa başına varsayılan 10 mesaj
        $offset = ($page - 1) * $limit;

        // Toplam iletişim mesajı sayısını al
        $countSql = "SELECT COUNT(*) as total FROM contact_forms";
        $countStmt = $db->query($countSql);
        $totalMessages = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];

        // İletişim mesajlarını sayfalama ile listeleme
        // Tüm alanları açıkça belirtelim
        $sql = "SELECT id, name, email, phone, company, service, budget, message, ip_address, user_agent, created_at, updated_at 
                FROM contact_forms 
                ORDER BY created_at DESC 
                LIMIT :limit OFFSET :offset";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Tarih formatlama gibi işlemler burada yapılabilir
        foreach ($messages as &$msg) {
            $msg['created_at'] = date('d.m.Y H:i', strtotime($msg['created_at']));
            $msg['updated_at'] = date('d.m.Y H:i', strtotime($msg['updated_at']));
        }

        echo json_encode(['success' => true, 'data' => $messages, 'total' => $totalMessages, 'page' => (int)$page, 'limit' => (int)$limit]);
        break;
        
    case 'delete':
        // İletişim mesajını silme (POST veya DELETE metodu beklenir)
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $input = json_decode(file_get_contents('php://input'), true);
            $id = $input['id'] ?? 0;
            
            if ($id > 0) {
                $sql = "DELETE FROM contact_forms WHERE id = :id LIMIT 1";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                if ($stmt->execute()) {
                    echo json_encode(['success' => true, 'message' => 'Mesaj başarıyla silindi']);
                } else {
                     echo json_encode(['success' => false, 'message' => 'Mesaj silinirken hata oluştu']);
                }
            } else {
                 echo json_encode(['success' => false, 'message' => "Geçersiz mesaj ID"]);
            }
        } else {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed for delete']);
        }
        break;

    // Diğer CRUD işlemleri buraya eklenecek (view, update vb.)

    default:
        // Tanımsız action
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Tanımsız API işlemi']);
        break;
}

?> 