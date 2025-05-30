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

// MailService sınıfını dahil et
require_once __DIR__ . '/../../services/MailService.php';

// Admin yetkilendirme kontrolü (şimdilik basit bir placeholder)
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

// POST metodunu kontrol et
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Sadece POST metodu kabul edilir']);
    exit();
}

// POST verilerini al
$requestData = json_decode(file_get_contents('php://input'), true);

if (!$requestData) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'Geçersiz JSON verisi']);
    exit();
}

// Gerekli alanları kontrol et
if (empty($requestData['to']) || empty($requestData['subject']) || empty($requestData['message'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'E-posta adresi, konu ve mesaj alanları zorunludur']);
    exit();
}

try {
    // MailService örneği oluştur
    $mailService = new MailService();
    
    // Admin panelinden cevap gönderme metodu ekle
    // MailService sınıfına yeni bir metot eklemek yerine burada direkt çalışalım
    
    // PHPMailer nesnesini al
    $mailer = $mailService->getMailer();
    
    // E-posta ayarları
    $mailer->clearAddresses(); // Mevcut adresleri temizle
    $mailer->addAddress($requestData['to']); // Alıcı e-posta
    
    // CC varsa ekle
    if (!empty($requestData['cc'])) {
        $mailer->addCC($requestData['cc']);
    }
    
    // BCC varsa ekle
    if (!empty($requestData['bcc'])) {
        $mailer->addBCC($requestData['bcc']);
    }
    
    // Reply-To ayarla (yanıtların nereye gideceği)
    $mailer->addReplyTo('info@etki360.com', 'etki360');
    
    // Gönderen adını değiştir - daha profesyonel görünüm için
    $mailer->setFrom('info@etki360.com', 'etki360');
    
    // E-posta içeriği
    $mailer->isHTML(true);
    $mailer->Subject = $requestData['subject'];
    
    // HTML içeriği şablona ekle
    $htmlContent = getEmailTemplate($requestData['message']);
    $mailer->Body = $htmlContent;
    
    // Düz metin alternatif
    $plainText = strip_tags(str_replace(['<br>', '<br/>', '<br />', '</p>', '<div>', '</div>'], "\n", $requestData['message']));
    $mailer->AltBody = $plainText;
    
    // E-postayı gönder
    $mailer->send();
    
    // Başarılı yanıt
    echo json_encode([
        'success' => true,
        'message' => 'E-posta başarıyla gönderildi'
    ]);
    
} catch (Exception $e) {
    // Hata durumu
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'success' => false,
        'message' => 'E-posta gönderilirken bir hata oluştu',
        'error' => $e->getMessage()
    ]);
    
    // Hata logla
    error_log('E-posta gönderme hatası: ' . $e->getMessage());
}

/**
 * E-posta HTML şablonunu oluşturur
 * 
 * @param string $messageContent Gönderilecek mesaj içeriği
 * @return string HTML formatında e-posta şablonu
 */
function getEmailTemplate($messageContent) {
    // Mesaj içeriğindeki satır sonlarını HTML <br> etiketine dönüştür
    $messageHtml = nl2br(htmlspecialchars($messageContent));
    
    // Güncel yıl
    $currentYear = date('Y');
    
    // HTML şablonu
    return <<<HTML
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>etki360</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .email-header {
            background-color: #10B981;
            padding: 20px;
            text-align: center;
            color: white;
        }
        
        .logo-text {
            font-size: 28px;
            font-weight: 600;
            letter-spacing: 1px;
            margin: 0;
            color: white;
        }
        
        .email-body {
            padding: 30px;
            color: #444;
        }
        
        .email-footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #eeeeee;
        }
        
        .copyright {
            font-size: 12px;
            color: #888888;
            margin-top: 10px;
        }
        
        .contact-info {
            margin-top: 15px;
            font-size: 13px;
            color: #666666;
        }
        
        .email-content {
            line-height: 1.8;
            color: #333;
            font-size: 15px;
        }
        
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #10B981;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 500;
            margin-top: 20px;
        }
        
        .greeting {
            font-size: 16px;
            margin-bottom: 15px;
        }
        
        .signature {
            margin-top: 30px;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1 class="logo-text">etki360</h1>
        </div>
        
        <div class="email-body">
            <div class="email-content">
                $messageHtml
            </div>
            
            <div class="signature">
                Saygılarımızla,<br>
                etki360 Ekibi
            </div>
        </div>
        
        <div class="email-footer">
            <div class="contact-info">
                <p>Telefon: +90 (542) 155 33 15 | +90 (544) 488 23 03 | E-posta: info@etki360.com</p>
                <p>Adres: İstanbul, Zeytinburnu ve Istanbul Sapphire</p>
            </div>
            
            <div class="copyright">
                &copy; $currentYear etki360. Tüm Hakları Saklıdır.
            </div>
        </div>
    </div>
</body>
</html>
HTML;
} 