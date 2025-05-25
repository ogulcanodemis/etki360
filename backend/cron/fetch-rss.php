<?php

/**
 * RSS İçerik Çekme Cron Job
 * 
 * Bu script cron job olarak çalıştırılır ve RSS kaynaklarından
 * otomatik olarak içerik çeker.
 * 
 * Kullanım:
 * # Her 2 saatte bir çalıştır
 * 0 */2 * * * /usr/bin/php /path/to/backend/cron/fetch-rss.php
 * 
 * # Her gün saat 09:00'da çalıştır
 * 0 9 * * * /usr/bin/php /path/to/backend/cron/fetch-rss.php
 */

// Script'in CLI'dan çalıştırıldığından emin ol
if (php_sapi_name() !== 'cli') {
    die('Bu script sadece komut satırından çalıştırılabilir.' . PHP_EOL);
}

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Memory ve time limit ayarları
ini_set('memory_limit', '512M');
set_time_limit(600); // 10 dakika

// Autoload
require_once __DIR__ . '/../services/RSSService.php';

class RSSCronJob {
    private $rssService;
    private $logFile;
    private $startTime;
    
    public function __construct() {
        $this->rssService = new RSSService();
        $this->logFile = __DIR__ . '/../logs/cron-' . date('Y-m-d') . '.log';
        $this->startTime = microtime(true);
        
        // Log dizinini oluştur
        $logDir = dirname($this->logFile);
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        
        $this->log('RSS Cron Job başlatıldı');
    }
    
    /**
     * Ana çalıştırma metodu
     */
    public function run() {
        try {
            $this->log('İçerik çekme işlemi başlıyor...');
            
            // RSS içeriklerini çek
            $result = $this->rssService->fetchAllContent();
            
            if ($result['success']) {
                $this->log('İçerik çekme başarılı!');
                $this->log("Bulunan yazı: {$result['total_posts']}");
                $this->log("Kaydedilen yazı: {$result['saved_posts']}");
                $this->log("Türkçe yazı: {$result['turkish_posts']}");
                $this->log("İşlenen kaynak: {$result['sources_processed']}");
                $this->log("Süre: {$result['execution_time']} saniye");
                $this->log("Bellek: {$result['memory_usage']}");
                
                // Başarı oranları
                if ($result['total_posts'] > 0) {
                    $successRate = round(($result['saved_posts'] / $result['total_posts']) * 100, 2);
                    $turkishRate = round(($result['turkish_posts'] / $result['total_posts']) * 100, 2);
                    $this->log("Başarı oranı: %{$successRate}");
                    $this->log("Türkçe oranı: %{$turkishRate}");
                }
                
                // Eski logları temizle (30 günden eski)
                $this->cleanOldLogs();
                
                // Eski yazıları temizle (6 aydan eski)
                $this->cleanOldPosts();
                
            } else {
                $this->log('İçerik çekme başarısız: ' . $result['error'], 'ERROR');
                return false;
            }
            
        } catch (Exception $e) {
            $this->log('Cron job hatası: ' . $e->getMessage(), 'ERROR');
            return false;
        }
        
        $totalTime = round(microtime(true) - $this->startTime, 3);
        $this->log("RSS Cron Job tamamlandı. Toplam süre: {$totalTime} saniye");
        
        return true;
    }
    
    /**
     * Eski log dosyalarını temizle
     */
    private function cleanOldLogs() {
        try {
            $logDir = __DIR__ . '/../logs/';
            $files = glob($logDir . 'cron-*.log');
            $cutoffDate = strtotime('-30 days');
            $deletedCount = 0;
            
            foreach ($files as $file) {
                if (filemtime($file) < $cutoffDate) {
                    if (unlink($file)) {
                        $deletedCount++;
                    }
                }
            }
            
            if ($deletedCount > 0) {
                $this->log("Eski log dosyaları temizlendi: {$deletedCount} dosya");
            }
            
        } catch (Exception $e) {
            $this->log('Log temizleme hatası: ' . $e->getMessage(), 'WARNING');
        }
    }
    
    /**
     * Eski blog yazılarını temizle
     */
    private function cleanOldPosts() {
        try {
            $database = new Database();
            $db = $database->getConnection();
            
            // 6 aydan eski yazıları sil
            $sql = "DELETE FROM blog_posts 
                    WHERE created_at < DATE_SUB(NOW(), INTERVAL 6 MONTH) 
                    AND source_url IS NOT NULL";
            
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $deletedCount = $stmt->rowCount();
            
            if ($deletedCount > 0) {
                $this->log("Eski blog yazıları temizlendi: {$deletedCount} yazı");
            }
            
        } catch (Exception $e) {
            $this->log('Yazı temizleme hatası: ' . $e->getMessage(), 'WARNING');
        }
    }
    
    /**
     * Log mesajı yaz
     */
    private function log($message, $level = 'INFO') {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[{$timestamp}] [{$level}] {$message}" . PHP_EOL;
        
        // Dosyaya yaz
        file_put_contents($this->logFile, $logMessage, FILE_APPEND | LOCK_EX);
        
        // Console'a da yazdır
        echo $logMessage;
    }
    
    /**
     * Sistem durumunu kontrol et
     */
    private function checkSystemHealth() {
        $issues = [];
        
        // Veritabanı bağlantısını kontrol et
        try {
            $database = new Database();
            $db = $database->getConnection();
            $db->query('SELECT 1');
        } catch (Exception $e) {
            $issues[] = 'Veritabanı bağlantı hatası: ' . $e->getMessage();
        }
        
        // Disk alanını kontrol et
        $freeSpace = disk_free_space(__DIR__);
        $totalSpace = disk_total_space(__DIR__);
        $usagePercent = (($totalSpace - $freeSpace) / $totalSpace) * 100;
        
        if ($usagePercent > 90) {
            $issues[] = 'Disk alanı kritik seviyede: %' . round($usagePercent, 2);
        }
        
        // Memory kullanımını kontrol et
        $memoryUsage = memory_get_usage(true);
        $memoryLimit = ini_get('memory_limit');
        $memoryLimitBytes = $this->parseMemoryLimit($memoryLimit);
        
        if ($memoryUsage > ($memoryLimitBytes * 0.8)) {
            $issues[] = 'Bellek kullanımı yüksek: ' . $this->formatBytes($memoryUsage);
        }
        
        if (!empty($issues)) {
            foreach ($issues as $issue) {
                $this->log($issue, 'WARNING');
            }
        }
        
        return empty($issues);
    }
    
    /**
     * Memory limit'i byte'a çevir
     */
    private function parseMemoryLimit($limit) {
        $limit = trim($limit);
        $last = strtolower($limit[strlen($limit)-1]);
        $limit = (int) $limit;
        
        switch($last) {
            case 'g': $limit *= 1024;
            case 'm': $limit *= 1024;
            case 'k': $limit *= 1024;
        }
        
        return $limit;
    }
    
    /**
     * Byte'ları formatla
     */
    private function formatBytes($bytes, $precision = 2) {
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
}

// Script'i çalıştır
$cronJob = new RSSCronJob();

// Sistem sağlığını kontrol et
$cronJob->checkSystemHealth();

// Ana işlemi çalıştır
$success = $cronJob->run();

// Exit code
exit($success ? 0 : 1);
?>