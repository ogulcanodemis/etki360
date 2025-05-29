<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
// Frontend adresinizin doğru olduğundan emin olun
header('Access-Control-Allow-Origin: https://etki360.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Veritabanı bağlantısını dahil et
require_once __DIR__ . '/../config/database.php';

// Sadece POST isteklerini kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed'
    ]);
    exit();
}

// JSON verisini al
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Veri kontrolü (kullanıcı adı ve şifre var mı?)
if (!isset($data['username']) || empty($data['username']) || !isset($data['password']) || empty($data['password'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Kullanıcı adı ve şifre gerekli'
    ]);
    exit();
}

$username = $data['username'];
$password = $data['password'];

try {
    $database = new Database();
    $db = $database->getConnection();

    // Kullanıcıyı veritabanında ara
    $sql = "SELECT id, username, password FROM admin_users WHERE username = :username LIMIT 1";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Kullanıcı bulunduysa ve şifre doğruysa
    if ($user && password_verify($password, $user['password'])) {
        // Giriş başarılı
        // Gerçek uygulamada burada bir oturum başlatılır veya token oluşturulur
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Giriş başarılı!'
            // Güvenlik nedeniyle şifre hariç kullanıcı bilgileri döndürülebilir
        ]);
        exit();
    } else {
        // Kullanıcı bulunamadı veya şifre yanlış
        http_response_code(401); // Yetkisiz erişim
        echo json_encode([
            'success' => false,
            'message' => 'Geçersiz kullanıcı adı veya şifre'
        ]);
        exit();
    }

} catch (Exception $e) {
    // Hata yakalandı
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Bir sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.',
        'error' => $e->getMessage() // Development sırasında hatayı görmek için
    ]);
    exit();
}

?>