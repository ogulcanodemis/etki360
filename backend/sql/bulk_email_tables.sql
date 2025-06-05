-- Email List Table
CREATE TABLE IF NOT EXISTS `email_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `source` varchar(50) DEFAULT 'manuel',
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bulk Email Log Table
CREATE TABLE IF NOT EXISTS `bulk_email_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `total_recipients` int(11) NOT NULL,
  `sent_count` int(11) DEFAULT 0,
  `failed_count` int(11) DEFAULT 0,
  `status` enum('processing','completed','error') DEFAULT 'processing',
  `start_time` datetime DEFAULT NULL,
  `duration` float DEFAULT 0,
  `error_message` text DEFAULT NULL,
  `admin_user` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `completed_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bulk Email Recipients Table
CREATE TABLE IF NOT EXISTS `bulk_email_recipients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bulk_email_id` int(11) NOT NULL,
  `recipient_email` varchar(255) NOT NULL,
  `status` enum('success','failed') DEFAULT 'success',
  `error_message` text DEFAULT NULL,
  `sent_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bulk_email_id` (`bulk_email_id`),
  CONSTRAINT `bulk_email_recipients_ibfk_1` FOREIGN KEY (`bulk_email_id`) REFERENCES `bulk_email_log` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Email Templates Table
CREATE TABLE IF NOT EXISTS `email_templates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample Email Templates
INSERT INTO `email_templates` (`name`, `subject`, `content`, `is_active`, `created_at`, `updated_at`) VALUES
('Genel Duyuru', 'etki360\'dan Önemli Duyuru', '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">\r\n  <div style="background-color: #10B981; padding: 20px; text-align: center; color: white;">\r\n    <h2>etki360\'dan Önemli Duyuru</h2>\r\n  </div>\r\n  <div style="padding: 20px; background-color: #f9f9f9;">\r\n    <p>Sayın İlgili,</p>\r\n    <p>Bu bir duyuru şablonudur. Buraya duyuru metninizi yazabilirsiniz.</p>\r\n    <p>Saygılarımızla,<br/>etki360 Ekibi</p>\r\n  </div>\r\n  <div style="background-color: #f2f2f2; padding: 15px; text-align: center; font-size: 12px; color: #666;">\r\n    <p>© 2023 etki360. Tüm hakları saklıdır.</p>\r\n    <p>Bu e-postayı almak istemiyorsanız, <a href="[unsubscribe_link]">buraya tıklayarak</a> abonelikten çıkabilirsiniz.</p>\r\n  </div>\r\n</div>', 1, NOW(), NOW()),
('Yeni Hizmet Tanıtımı', 'etki360\'dan Yeni Hizmetimiz', '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">\r\n  <div style="background-color: #10B981; padding: 20px; text-align: center; color: white;">\r\n    <h2>Yeni Hizmetimizi Keşfedin</h2>\r\n  </div>\r\n  <div style="padding: 20px; background-color: #f9f9f9;">\r\n    <p>Değerli Müşterimiz,</p>\r\n    <p>Yeni hizmetimiz hakkında bilgi almak için bu bölüme gerekli içeriği ekleyebilirsiniz.</p>\r\n    <p>Detaylı bilgi için <a href="https://etki360.com">web sitemizi</a> ziyaret edebilirsiniz.</p>\r\n    <p>Saygılarımızla,<br/>etki360 Ekibi</p>\r\n  </div>\r\n  <div style="background-color: #f2f2f2; padding: 15px; text-align: center; font-size: 12px; color: #666;">\r\n    <p>© 2023 etki360. Tüm hakları saklıdır.</p>\r\n    <p>Bu e-postayı almak istemiyorsanız, <a href="[unsubscribe_link]">buraya tıklayarak</a> abonelikten çıkabilirsiniz.</p>\r\n  </div>\r\n</div>', 1, NOW(), NOW()),
('Teşekkür Mesajı', 'etki360 - Teşekkür Ederiz', '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">\r\n  <div style="background-color: #10B981; padding: 20px; text-align: center; color: white;">\r\n    <h2>Teşekkür Ederiz</h2>\r\n  </div>\r\n  <div style="padding: 20px; background-color: #f9f9f9;">\r\n    <p>Değerli Müşterimiz,</p>\r\n    <p>etki360 ailesine katıldığınız için teşekkür ederiz. Sizinle çalışmaktan mutluluk duyuyoruz.</p>\r\n    <p>Saygılarımızla,<br/>etki360 Ekibi</p>\r\n  </div>\r\n  <div style="background-color: #f2f2f2; padding: 15px; text-align: center; font-size: 12px; color: #666;">\r\n    <p>© 2023 etki360. Tüm hakları saklıdır.</p>\r\n    <p>Bu e-postayı almak istemiyorsanız, <a href="[unsubscribe_link]">buraya tıklayarak</a> abonelikten çıkabilirsiniz.</p>\r\n  </div>\r\n</div>', 1, NOW(), NOW());

-- Eğer yoksa newsletter_subscribers tablosunu oluştur
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `subscribe_date` datetime NOT NULL,
  `unsubscribe_date` datetime DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 