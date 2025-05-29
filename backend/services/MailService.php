<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/database.php'; // Database sınıfını dahil et

class MailService {
    private $mailer;
    private $db;

    public function __construct() {
        $this->mailer = new PHPMailer(true);
        $database = new Database();
        $this->db = $database->getConnection();
        
        // SMTP ayarları
        $this->mailer->isSMTP();
        $this->mailer->Host = 'smtp.hostinger.com'; // Hostinger SMTP sunucusu
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = 'info@etki360.com'; // E-posta adresiniz
        $this->mailer->Password = 'EqYN54;u'; // E-posta şifreniz
        $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL/TLS için
        $this->mailer->Port = 465; // SSL/TLS portu
        $this->mailer->CharSet = 'UTF-8';
        
        // Varsayılan gönderici
        $this->mailer->setFrom('info@etki360.com', 'etki360 İletişim Formu'); // Gönderici e-posta
    }

    /**
     * İletişim formu e-postasını gönder
     */
    public function sendContactForm($formData) {
        try {
            // Log: Form gönderme süreci başlatıldı
            error_log("MailService: Contact form processing started for " . $formData['email']);

            // E-posta içeriğini hazırla
            // Alıcı e-posta adresinin info@etki360.com olduğundan emin olalım
            $this->mailer->clearAddresses(); // Önceki alıcıları temizle
            $this->mailer->addAddress('info@etki360.com'); // Alıcı e-posta: info@etki360.com
            $this->mailer->addReplyTo($formData['email'], $formData['name']);

            $this->mailer->isHTML(true);
            $this->mailer->Subject = 'Yeni İletişim Formu Mesajı - ' . $formData['name'];

            // HTML şablonu
            $htmlBody = $this->getEmailTemplate($formData);
            $this->mailer->Body = $htmlBody;
            $this->mailer->AltBody = $this->getPlainTextTemplate($formData);

            // Log: E-posta gönderme girişimi
            error_log("MailService: Attempting to send email from " . $this->mailer->From . " to info@etki360.com");

            // E-postayı gönder
            $this->mailer->send();

            // Log: E-posta başarıyla gönderildi
            error_log("MailService: Email sent successfully.");

            // Log: Form verilerini veritabanına kaydetme girişimi
            error_log("MailService: Attempting to save contact form data to database.");

            // Form verilerini veritabanına kaydet
            $saveResult = $this->saveContactForm($formData);

            if ($saveResult && isset($saveResult['success']) && !$saveResult['success']) {
                 // Log: Form verileri kaydedilemedi (saveContactForm içindeki hata loglanmalı)
                 error_log("MailService: Failed to save contact form data to database.");
                 // Veritabanı hatasını ana yanıta ekle
                 return [
                     'success' => false,
                     'message' => 'Mesajınız gönderildi ancak kaydedilirken bir sorun oluştu.',
                     'db_error' => $saveResult['error'] ?? 'Detaylı hata mevcut değil'
                 ];
            } else if ($saveResult) {
                 // Log: Form verileri başarıyla kaydedildi
                 error_log("MailService: Contact form data saved to database successfully.");
            } else {
                // saveContactForm false döndürürse (duplicate vb.)
                error_log("MailService: saveContactForm returned false. Likely duplicate.");
                // Başarı mesajı dön, ancak logda belirt
            }


            return [
                'success' => true,
                'message' => 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
            ];

        } catch (Exception $e) {
            // Log: Mail gönderme veya kaydetme hatası yakalandı
            error_log("MailService: Exception caught during contact form processing.");
            error_log("MailService Exception: " . $e->getMessage() . " in " . $e->getFile() . " on line " . $e->getLine());
            // İsteğe bağlı: Detaylı stack trace loglamak isterseniz
            // error_log("MailService Stack Trace: " . $e->getTraceAsString());


            return [
                'success' => false,
                'message' => 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
            ];
        }
    }

    /**
     * HTML e-posta şablonu
     */
    private function getEmailTemplate($formData) {
        return '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #10B981; color: white; padding: 20px; text-align: center; }
                .content { background: #f9fafb; padding: 20px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #4B5563; }
                .value { color: #1F2937; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Yeni İletişim Formu Mesajı</h2>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Ad Soyad:</div>
                        <div class="value">' . htmlspecialchars($formData['name']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">E-posta:</div>
                        <div class="value">' . htmlspecialchars($formData['email']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Telefon:</div>
                        <div class="value">' . htmlspecialchars($formData['phone']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Şirket:</div>
                        <div class="value">' . htmlspecialchars($formData['company']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Hizmet:</div>
                        <div class="value">' . htmlspecialchars($formData['service']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Bütçe:</div>
                        <div class="value">' . htmlspecialchars($formData['budget']) . '</div>
                    </div>
                    <div class="field">
                        <div class="label">Mesaj:</div>
                        <div class="value">' . nl2br(htmlspecialchars($formData['message'])) . '</div>
                    </div>
                </div>
                <div class="footer">
                    <p>Bu e-posta etki360 iletişim formundan gönderilmiştir.</p>
                    <p>© ' . date('Y') . ' etki360. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </body>
        </html>';
    }

    /**
     * Düz metin e-posta şablonu
     */
    private function getPlainTextTemplate($formData) {
        return "Yeni İletişim Formu Mesajı\n\n" .
               "Ad Soyad: " . $formData['name'] . "\n" .
               "E-posta: " . $formData['email'] . "\n" .
               "Telefon: " . $formData['phone'] . "\n" .
               "Şirket: " . $formData['company'] . "\n" .
               "Hizmet: " . $formData['service'] . "\n" .
               "Bütçe: " . $formData['budget'] . "\n\n" .
               "Mesaj:\n" . $formData['message'] . "\n\n" .
               "Bu e-posta etki360 iletişim formundan gönderilmiştir.";
    }

    /**
     * Form verilerini veritabanına kaydet
     */
    private function saveContactForm($formData) {
        try {
            $sql = "INSERT INTO contact_forms (
                        name, email, phone, company, service, budget, message,
                        ip_address, user_agent, created_at
                    ) VALUES (
                        :name, :email, :phone, :company, :service, :budget, :message,
                        :ip_address, :user_agent, NOW()
                    )";
            
            $stmt = $this->db->prepare($sql);
            
            return $stmt->execute([
                'name' => $formData['name'],
                'email' => $formData['email'],
                'phone' => $formData['phone'],
                'company' => $formData['company'],
                'service' => $formData['service'],
                'budget' => $formData['budget'],
                'message' => $formData['message'],
                'ip_address' => $_SERVER['REMOTE_ADDR'],
                'user_agent' => $_SERVER['HTTP_USER_AGENT']
            ]);
            
        } catch (Exception $e) {
            error_log("Form kaydetme hatası: " . $e->getMessage());
            // Hata durumunda detaylı mesaj döndür
            return ['success' => false, 'error' => 'Veritabanına kaydederken hata oluştu: ' . $e->getMessage()];
        }
    }
} 