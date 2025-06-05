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
require_once __DIR__ . '/../config/database.php';

// GET veya POST isteklerini kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'GET' && $_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Sadece GET veya POST metodu kabul edilir']);
    exit();
}

// Parametreleri al
$email = $_SERVER['REQUEST_METHOD'] === 'GET' ? ($_GET['email'] ?? '') : ($_POST['email'] ?? '');
$token = $_SERVER['REQUEST_METHOD'] === 'GET' ? ($_GET['token'] ?? '') : ($_POST['token'] ?? '');

// Parametreleri kontrol et
if (empty($email) || empty($token)) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'E-posta ve token parametreleri gereklidir']);
    exit();
}

// Token doğrulama
$expectedToken = hash('sha256', $email . '_etki360_unsubscribe_salt');
if ($token !== $expectedToken) {
    http_response_code(403); // Forbidden
    echo json_encode(['success' => false, 'message' => 'Geçersiz token']);
    exit();
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // E-posta adresini kontrol et
    $isNewsletterSubscriber = checkNewsletterSubscriber($db, $email);
    $isContactFormSubmitter = checkContactFormSubmitter($db, $email);
    
    // İki tabloda da yoksa hata döndür
    if (!$isNewsletterSubscriber && !$isContactFormSubmitter) {
        http_response_code(404); // Not Found
        echo json_encode(['success' => false, 'message' => 'E-posta adresi bulunamadı']);
        exit();
    }
    
    // Newsletter tablosunda varsa güncelle
    if ($isNewsletterSubscriber) {
        updateNewsletterSubscription($db, $email);
    }
    
    // Başarılı yanıt
    echo json_encode([
        'success' => true,
        'message' => 'E-posta adresiniz abonelikten çıkarıldı.'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Abonelikten çıkarken bir hata oluştu',
        'error' => $e->getMessage()
    ]);
    
    // Hata logla
    error_log('Abonelikten çıkma hatası: ' . $e->getMessage());
}

/**
 * E-posta adresi newsletter_subscribers tablosunda mı kontrol eder
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param string $email E-posta adresi
 * @return bool Varsa true, yoksa false
 */
function checkNewsletterSubscriber($db, $email) {
    $sql = "SELECT id FROM newsletter_subscribers WHERE email = :email AND is_active = 1";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    return $stmt->rowCount() > 0;
}

/**
 * E-posta adresi contact_forms tablosunda mı kontrol eder
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param string $email E-posta adresi
 * @return bool Varsa true, yoksa false
 */
function checkContactFormSubmitter($db, $email) {
    $sql = "SELECT id FROM contact_forms WHERE email = :email LIMIT 1";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    return $stmt->rowCount() > 0;
}

/**
 * Newsletter_subscribers tablosunda aboneliği günceller
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param string $email E-posta adresi
 */
function updateNewsletterSubscription($db, $email) {
    $sql = "UPDATE newsletter_subscribers SET is_active = 0, unsubscribe_date = NOW() WHERE email = :email";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
} 