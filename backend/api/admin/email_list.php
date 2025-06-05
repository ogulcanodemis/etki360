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
    
    // GET isteği - E-posta listesini getir
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Sayfalama parametreleri
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 20;
        $offset = ($page - 1) * $limit;
        
        // Arama parametresi
        $search = isset($_GET['search']) ? $_GET['search'] : '';
        
        // Temel SQL sorgusu
        $sql = "
            SELECT 
                e.id,
                e.email,
                e.name,
                e.source,
                e.is_active,
                DATE_FORMAT(e.created_at, '%d.%m.%Y %H:%i') as created_at
            FROM 
                email_list e
            WHERE 1=1
        ";
        
        // Arama filtresi
        if (!empty($search)) {
            $sql .= " AND (e.email LIKE :search OR e.name LIKE :search)";
        }
        
        // Sıralama
        $sql .= " ORDER BY e.created_at DESC";
        
        // Sayfalama
        $sql .= " LIMIT :offset, :limit";
        
        // Sorguyu hazırla
        $stmt = $db->prepare($sql);
        
        // Parametreleri bağla
        if (!empty($search)) {
            $searchParam = "%" . $search . "%";
            $stmt->bindParam(':search', $searchParam);
        }
        
        $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        
        $stmt->execute();
        
        // Sonuçları al
        $emailList = $stmt->fetchAll();
        
        // Toplam kayıt sayısını al
        $countSql = "
            SELECT COUNT(*) as total
            FROM email_list e
            WHERE 1=1
        ";
        
        if (!empty($search)) {
            $countSql .= " AND (e.email LIKE :search OR e.name LIKE :search)";
        }
        
        $countStmt = $db->prepare($countSql);
        
        if (!empty($search)) {
            $countStmt->bindParam(':search', $searchParam);
        }
        
        $countStmt->execute();
        $countResult = $countStmt->fetch();
        $totalEmails = $countResult['total'];
        
        // Başarılı yanıt
        echo json_encode([
            'success' => true,
            'data' => $emailList,
            'total' => $totalEmails,
            'page' => $page,
            'limit' => $limit,
            'totalPages' => ceil($totalEmails / $limit)
        ]);
    }
    // POST isteği - E-posta ekle, sil veya düzenle
    elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // POST verilerini al
        $requestData = json_decode(file_get_contents('php://input'), true);
        
        if (!$requestData || !isset($requestData['action'])) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Geçersiz istek verisi']);
            exit();
        }
        
        $action = $requestData['action'];
        
        // Tek e-posta ekle
        if ($action === 'add') {
            // Gerekli alanları kontrol et
            if (empty($requestData['email'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'E-posta adresi gereklidir']);
                exit();
            }
            
            $email = $requestData['email'];
            $name = $requestData['name'] ?? '';
            $source = $requestData['source'] ?? 'manuel';
            
            // E-posta adresinin daha önce eklenip eklenmediğini kontrol et
            $checkSql = "SELECT id FROM email_list WHERE email = :email";
            $checkStmt = $db->prepare($checkSql);
            $checkStmt->bindParam(':email', $email);
            $checkStmt->execute();
            
            if ($checkStmt->rowCount() > 0) {
                // E-posta zaten var, güncelle
                $updateSql = "
                    UPDATE email_list 
                    SET 
                        name = :name, 
                        source = :source,
                        is_active = 1,
                        updated_at = NOW()
                    WHERE email = :email
                ";
                
                $updateStmt = $db->prepare($updateSql);
                $updateStmt->bindParam(':name', $name);
                $updateStmt->bindParam(':source', $source);
                $updateStmt->bindParam(':email', $email);
                $updateStmt->execute();
                
                echo json_encode([
                    'success' => true,
                    'message' => 'E-posta başarıyla güncellendi',
                    'updated' => true
                ]);
            } else {
                // Yeni e-posta ekle
                $insertSql = "
                    INSERT INTO email_list (email, name, source, is_active, created_at, updated_at)
                    VALUES (:email, :name, :source, 1, NOW(), NOW())
                ";
                
                $insertStmt = $db->prepare($insertSql);
                $insertStmt->bindParam(':email', $email);
                $insertStmt->bindParam(':name', $name);
                $insertStmt->bindParam(':source', $source);
                $insertStmt->execute();
                
                echo json_encode([
                    'success' => true,
                    'message' => 'E-posta başarıyla eklendi',
                    'id' => $db->lastInsertId()
                ]);
            }
        }
        // Toplu e-posta içe aktar
        elseif ($action === 'import') {
            // Gerekli alanları kontrol et
            if (empty($requestData['emails']) || !is_array($requestData['emails'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'Geçerli e-posta listesi gereklidir']);
                exit();
            }
            
            $emails = $requestData['emails'];
            $source = $requestData['source'] ?? 'manuel';
            
            $importedCount = 0;
            $updatedCount = 0;
            
            // Her e-posta için işlem yap
            foreach ($emails as $emailData) {
                $email = $emailData['email'];
                $name = $emailData['name'] ?? '';
                
                // E-posta adresinin daha önce eklenip eklenmediğini kontrol et
                $checkSql = "SELECT id FROM email_list WHERE email = :email";
                $checkStmt = $db->prepare($checkSql);
                $checkStmt->bindParam(':email', $email);
                $checkStmt->execute();
                
                if ($checkStmt->rowCount() > 0) {
                    // E-posta zaten var, güncelle
                    $updateSql = "
                        UPDATE email_list 
                        SET 
                            name = CASE WHEN name = '' OR name IS NULL THEN :name ELSE name END,
                            source = :source,
                            is_active = 1,
                            updated_at = NOW()
                        WHERE email = :email
                    ";
                    
                    $updateStmt = $db->prepare($updateSql);
                    $updateStmt->bindParam(':name', $name);
                    $updateStmt->bindParam(':source', $source);
                    $updateStmt->bindParam(':email', $email);
                    $updateStmt->execute();
                    
                    $updatedCount++;
                } else {
                    // Yeni e-posta ekle
                    $insertSql = "
                        INSERT INTO email_list (email, name, source, is_active, created_at, updated_at)
                        VALUES (:email, :name, :source, 1, NOW(), NOW())
                    ";
                    
                    $insertStmt = $db->prepare($insertSql);
                    $insertStmt->bindParam(':email', $email);
                    $insertStmt->bindParam(':name', $name);
                    $insertStmt->bindParam(':source', $source);
                    $insertStmt->execute();
                    
                    $importedCount++;
                }
            }
            
            echo json_encode([
                'success' => true,
                'message' => "İçe aktarma tamamlandı. $importedCount yeni e-posta eklendi, $updatedCount e-posta güncellendi.",
                'importedCount' => $importedCount,
                'updatedCount' => $updatedCount
            ]);
        }
        // Tek e-posta sil
        elseif ($action === 'delete') {
            // Gerekli alanları kontrol et
            if (empty($requestData['id'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'E-posta ID gereklidir']);
                exit();
            }
            
            $id = $requestData['id'];
            
            $deleteSql = "DELETE FROM email_list WHERE id = :id";
            $deleteStmt = $db->prepare($deleteSql);
            $deleteStmt->bindParam(':id', $id);
            $deleteStmt->execute();
            
            echo json_encode([
                'success' => true,
                'message' => 'E-posta başarıyla silindi'
            ]);
        }
        // Toplu e-posta sil
        elseif ($action === 'bulk_delete') {
            // Gerekli alanları kontrol et
            if (empty($requestData['ids']) || !is_array($requestData['ids'])) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => 'Silinecek e-posta ID\'leri gereklidir']);
                exit();
            }
            
            $ids = $requestData['ids'];
            $placeholders = implode(',', array_fill(0, count($ids), '?'));
            
            $deleteSql = "DELETE FROM email_list WHERE id IN ($placeholders)";
            $deleteStmt = $db->prepare($deleteSql);
            
            // ID'leri bağla
            foreach ($ids as $index => $id) {
                $deleteStmt->bindValue($index + 1, $id);
            }
            
            $deleteStmt->execute();
            
            echo json_encode([
                'success' => true,
                'message' => count($ids) . ' e-posta başarıyla silindi'
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
    error_log('E-posta listesi API hatası: ' . $e->getMessage());
} 