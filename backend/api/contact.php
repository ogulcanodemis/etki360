<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../services/MailService.php';

// Sadece POST isteklerini kabul et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit();
}

// JSON verisini al
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Veri kontrolü
if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Geçersiz veri formatı'
    ]);
    exit();
}

// Zorunlu alanları kontrol et
$requiredFields = ['name', 'email', 'message'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Lütfen tüm zorunlu alanları doldurun',
        'missing_fields' => $missingFields
    ]);
    exit();
}

// E-posta formatını kontrol et
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Geçersiz e-posta adresi'
    ]);
    exit();
}

try {
    // Mail servisini başlat
    $mailService = new MailService();
    
    // Form verilerini gönder
    $result = $mailService->sendContactForm($data);
    
    // Sonucu döndür
    if ($result['success']) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
    
    echo json_encode($result);
    
} catch (Exception $e) {
    error_log("İletişim formu hatası: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    ]);
} 