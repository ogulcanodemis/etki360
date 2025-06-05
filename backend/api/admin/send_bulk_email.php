<?php

// Charset ayarları
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');

header('Content-Type: application/json; charset=utf-8');
// Canlı frontend adresiniz
header('Access-Control-Allow-Origin: https://etki360.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Preflight request için
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// MailService sınıfını dahil et
require_once __DIR__ . '/../../services/MailService.php';
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

// Sadece POST isteklerini kabul et
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
if (empty($requestData['recipients']) || !is_array($requestData['recipients']) || empty($requestData['subject']) || empty($requestData['message'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'Alıcılar, konu ve mesaj alanları zorunludur']);
    exit();
}

// E-posta gönderme işlemi için MailService oluştur
$mailService = new MailService();
$mailer = $mailService->getMailer();

// E-posta sayacı
$sentCount = 0;
$failedCount = 0;
$errorMessages = [];

// E-posta gönderme başlangıç zamanı
$startTime = microtime(true);

// Toplu e-posta gönderimini logla
$database = new Database();
$db = $database->getConnection();

// Toplu e-posta logunu kaydet
$bulkEmailId = logBulkEmail($db, $requestData['subject'], count($requestData['recipients']));

try {
    // Her alıcı için e-posta gönder
    foreach ($requestData['recipients'] as $recipient) {
        try {
            // E-posta ayarları
            $mailer->clearAddresses(); // Mevcut adresleri temizle
            $mailer->addAddress($recipient); // Alıcı e-posta
            
            // Reply-To ayarla (yanıtların nereye gideceği)
            $mailer->addReplyTo('info@etki360.com', 'etki360');
            
            // Gönderen
            $mailer->setFrom('info@etki360.com', 'etki360');
            
            // E-posta içeriği
            $mailer->isHTML(true);
            $mailer->Subject = $requestData['subject'];
            
            // HTML içeriği şablona ekle
            $htmlContent = getBulkEmailTemplate($requestData['message'], $requestData['includeUnsubscribeLink'], $recipient);
            $mailer->Body = $htmlContent;
            
            // Düz metin alternatif
            $plainText = strip_tags(str_replace(['<br>', '<br/>', '<br />', '</p>', '<div>', '</div>'], "\n", $requestData['message']));
            $mailer->AltBody = $plainText;
            
            // E-postayı gönder
            $mailer->send();
            $sentCount++;
            
            // E-posta gönderim log kaydı
            logEmailSent($db, $bulkEmailId, $recipient, true);
            
            // Rate limiting (saniyede en fazla 5 e-posta gönder)
            usleep(200000); // 0.2 saniye bekle
            
        } catch (Exception $e) {
            $failedCount++;
            $errorMessages[] = "E-posta gönderimi başarısız ($recipient): " . $e->getMessage();
            
            // Başarısız e-posta log kaydı
            logEmailSent($db, $bulkEmailId, $recipient, false, $e->getMessage());
        }
    }
    
    // İşlem süresi
    $duration = round(microtime(true) - $startTime, 2);
    
    // Toplu e-posta logunu güncelle
    updateBulkEmailLog($db, $bulkEmailId, $sentCount, $failedCount, $duration);
    
    // Başarılı yanıt
    echo json_encode([
        'success' => true,
        'message' => "Toplu e-posta gönderimi tamamlandı. $sentCount e-posta başarıyla gönderildi.",
        'sentCount' => $sentCount,
        'failedCount' => $failedCount,
        'duration' => $duration . ' saniye',
        'errors' => $errorMessages
    ]);
    
} catch (Exception $e) {
    // Genel hata durumu
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'success' => false,
        'message' => 'Toplu e-posta gönderilirken bir hata oluştu',
        'error' => $e->getMessage(),
        'sentCount' => $sentCount,
        'failedCount' => $failedCount
    ]);
    
    // Hata logla
    error_log('Toplu e-posta gönderme hatası: ' . $e->getMessage());
    
    // Hata durumunda log güncelle
    updateBulkEmailLog($db, $bulkEmailId, $sentCount, $failedCount, round(microtime(true) - $startTime, 2), $e->getMessage());
}

/**
 * Toplu e-posta gönderim logu oluşturur
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param string $subject E-posta konusu
 * @param int $totalRecipients Toplam alıcı sayısı
 * @return int Eklenen kaydın ID'si
 */
function logBulkEmail($db, $subject, $totalRecipients) {
    try {
        $sql = "INSERT INTO bulk_email_log (
                    subject, total_recipients, sent_count, failed_count, 
                    status, start_time, duration, admin_user, created_at
                ) VALUES (
                    :subject, :total_recipients, 0, 0, 
                    'processing', NOW(), 0, :admin_user, NOW()
                )";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            'subject' => $subject,
            'total_recipients' => $totalRecipients,
            'admin_user' => 'admin' // Gerçek uygulamada oturum açan admin kullanıcı adı olmalı
        ]);
        
        return $db->lastInsertId();
    } catch (Exception $e) {
        error_log('Toplu e-posta log kaydı oluşturma hatası: ' . $e->getMessage());
        return 0;
    }
}

/**
 * Toplu e-posta logunu günceller
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param int $bulkEmailId Toplu e-posta log ID'si
 * @param int $sentCount Gönderilen e-posta sayısı
 * @param int $failedCount Başarısız e-posta sayısı
 * @param float $duration İşlem süresi (saniye)
 * @param string $error Hata mesajı (opsiyonel)
 */
function updateBulkEmailLog($db, $bulkEmailId, $sentCount, $failedCount, $duration, $error = null) {
    try {
        $status = $error ? 'error' : 'completed';
        
        $sql = "UPDATE bulk_email_log SET 
                    sent_count = :sent_count,
                    failed_count = :failed_count, 
                    status = :status,
                    duration = :duration,
                    error_message = :error_message,
                    completed_at = NOW()
                WHERE id = :id";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            'sent_count' => $sentCount,
            'failed_count' => $failedCount,
            'status' => $status,
            'duration' => $duration,
            'error_message' => $error,
            'id' => $bulkEmailId
        ]);
    } catch (Exception $e) {
        error_log('Toplu e-posta log güncellemesi hatası: ' . $e->getMessage());
    }
}

/**
 * Her bir e-posta gönderimini loglar
 * 
 * @param PDO $db Veritabanı bağlantısı
 * @param int $bulkEmailId Toplu e-posta log ID'si
 * @param string $recipient Alıcı e-posta adresi
 * @param bool $success Başarılı mı?
 * @param string $error Hata mesajı (opsiyonel)
 */
function logEmailSent($db, $bulkEmailId, $recipient, $success, $error = null) {
    try {
        $sql = "INSERT INTO bulk_email_recipients (
                    bulk_email_id, recipient_email, status, error_message, sent_at
                ) VALUES (
                    :bulk_email_id, :recipient_email, :status, :error_message, NOW()
                )";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            'bulk_email_id' => $bulkEmailId,
            'recipient_email' => $recipient,
            'status' => $success ? 'sent' : 'failed',
            'error_message' => $error
        ]);
    } catch (Exception $e) {
        error_log('E-posta gönderim log kaydı hatası: ' . $e->getMessage());
    }
}

/**
 * E-posta HTML şablonunu oluşturur
 * 
 * @param string $messageContent Gönderilecek mesaj içeriği
 * @param bool $includeUnsubscribeLink Abonelikten çıkma linki eklensin mi?
 * @param string $recipient Alıcı e-posta adresi
 * @return string HTML formatında e-posta şablonu
 */
function getBulkEmailTemplate($messageContent, $includeUnsubscribeLink, $recipient) {
    // Mesaj içeriğindeki satır sonlarını HTML <br> etiketine dönüştür
    $messageHtml = nl2br(htmlspecialchars($messageContent));
    
    // Güncel yıl
    $currentYear = date('Y');
    
    // Abonelikten çıkma linki
    $unsubscribeHtml = '';
    if ($includeUnsubscribeLink) {
        // E-posta ve token parametreleri ile abonelikten çıkma linki oluştur
        $email = urlencode($recipient);
        $token = hash('sha256', $recipient . '_etki360_unsubscribe_salt');
        $unsubscribeUrl = "https://etki360.com/unsubscribe?email={$email}&token={$token}";
        
        $unsubscribeHtml = <<<HTML
        <tr>
            <td style="padding: 20px; text-align: center; border-top: 1px solid #dddddd;">
                <p style="margin: 0; color: #888888; font-size: 12px;">
                    Bu e-postayı almak istemiyorsanız, <a href="{$unsubscribeUrl}" style="color: #10B981; text-decoration: underline;">buraya tıklayarak</a> aboneliğinizi iptal edebilirsiniz.
                </p>
            </td>
        </tr>
HTML;
    }
    
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
            padding: 0;
            text-align: center;
        }
        
        .copyright {
            font-size: 12px;
            color: #888888;
            margin: 0;
            padding: 20px;
        }
        
        .contact-info {
            margin-top: 15px;
            font-size: 12px;
            color: #888888;
        }
        
        .social-icons {
            margin-top: 15px;
        }
        
        .social-icon {
            display: inline-block;
            margin: 0 5px;
        }
        
        a {
            color: #10B981;
            text-decoration: none;
        }
        
        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <table class="email-container" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center" style="max-width: 600px; margin: 0 auto;">
        <tr>
            <td class="email-header" style="background-color: #10B981; padding: 20px; text-align: center; color: white;">
                <h1 class="logo-text" style="font-size: 28px; font-weight: 600; letter-spacing: 1px; margin: 0; color: white;">etki360</h1>
            </td>
        </tr>
        <tr>
            <td class="email-body" style="padding: 30px; color: #444; background-color: #ffffff;">
                {$messageHtml}
            </td>
        </tr>
        <tr>
            <td class="email-footer" style="background-color: #f9f9f9; text-align: center;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    {$unsubscribeHtml}
                    <tr>
                        <td style="padding: 20px;">
                            <p class="copyright" style="font-size: 12px; color: #888888; margin: 0;">
                                © {$currentYear} etki360. Tüm hakları saklıdır.
                            </p>
                            <div class="contact-info" style="margin-top: 15px; font-size: 12px; color: #888888;">
                                <p style="margin: 0;">Adres: Zeytinburnu, İstanbul</p>
                                <p style="margin: 0;">Telefon: +90 544 488 23 03</p>
                                <p style="margin: 0;">E-posta: <a href="mailto:info@etki360.com" style="color: #10B981;">info@etki360.com</a></p>
                            </div>
                            <div class="social-icons" style="margin-top: 15px;">
                                <a href="https://www.instagram.com/etki360" class="social-icon" style="display: inline-block; margin: 0 5px;">
                                    <img src="https://etki360.com/assets/images/instagram-icon.png" alt="Instagram" width="24" height="24">
                                </a>
                                <a href="https://www.linkedin.com/company/etki360" class="social-icon" style="display: inline-block; margin: 0 5px;">
                                    <img src="https://etki360.com/assets/images/linkedin-icon.png" alt="LinkedIn" width="24" height="24">
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
HTML;
} 