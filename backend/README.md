# etki360 Blog Backend Sistemi

Bu backend sistemi, RSS feed'lerinden Türkçe blog içeriklerini otomatik olarak çeken ve yöneten PHP tabanlı bir API'dir.

## Özellikler

- 🔄 **Otomatik RSS Çekme**: Medium ve diğer kaynaklardan otomatik içerik çekme
- 🇹🇷 **Türkçe Filtreleme**: Gelişmiş Türkçe dil algılama algoritması
- 📊 **Detaylı İstatistikler**: Fetch geçmişi ve performans metrikleri
- 🔍 **Gelişmiş Arama**: Başlık, içerik ve kategori bazlı arama
- 📱 **RESTful API**: Modern API tasarımı
- 🗄️ **MySQL Veritabanı**: Güvenilir veri saklama
- ⏰ **Cron Job Desteği**: Otomatik çalışma planlaması

## Kurulum

### 1. Gereksinimler

- PHP 7.4 veya üzeri
- MySQL 5.7 veya üzeri
- Apache/Nginx web sunucusu
- cURL extension
- JSON extension
- PDO MySQL extension

### 2. Veritabanı Kurulumu

```sql
-- Veritabanı oluştur
CREATE DATABASE etki360_blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Kullanıcı oluştur
CREATE USER 'etki360_user'@'localhost' IDENTIFIED BY 'güçlü_şifre_buraya';
GRANT ALL PRIVILEGES ON etki360_blog.* TO 'etki360_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Tabloları Oluştur

```bash
mysql -u etki360_user -p etki360_blog < backend/sql/create_tables.sql
```

### 4. Veritabanı Ayarları

`backend/config/database.php` dosyasını düzenleyin:

```php
private $host = "localhost";
private $db_name = "etki360_blog";
private $username = "etki360_user";
private $password = "güçlü_şifre_buraya";
```

### 5. Dizin İzinleri

```bash
chmod 755 backend/
chmod 755 backend/logs/
chmod 644 backend/config/database.php
chmod 755 backend/cron/fetch-rss.php
```

## API Kullanımı

### Blog API Endpoint'leri

#### Blog Yazılarını Getir
```
GET /backend/api/blog.php?action=posts&page=1&limit=12&category=teknoloji
```

**Parametreler:**
- `page`: Sayfa numarası (varsayılan: 1)
- `limit`: Sayfa başına yazı sayısı (varsayılan: 12, max: 50)
- `category`: Kategori filtresi (opsiyonel)
- `search`: Arama terimi (opsiyonel)
- `featured`: Öne çıkan yazılar (true/false)

#### Tek Blog Yazısı
```
GET /backend/api/blog.php?action=post&slug=yazı-slug-buraya
```

#### Kategorileri Getir
```
GET /backend/api/blog.php?action=categories
```

#### Etiketleri Getir
```
GET /backend/api/blog.php?action=tags
```

#### İstatistikleri Getir
```
GET /backend/api/blog.php?action=stats
```

### İçerik Çekme API

#### Manuel İçerik Çekme
```
GET /backend/api/fetch-content.php?action=fetch
```

#### Fetch Geçmişi
```
GET /backend/api/fetch-content.php?action=history
```

#### RSS Kaynaklarını Getir
```
GET /backend/api/fetch-content.php?action=sources
```

#### Sistem Durumu
```
GET /backend/api/fetch-content.php?action=status
```

#### RSS Kaynağı Ekle
```
POST /backend/api/fetch-content.php?action=add-source
Content-Type: application/json

{
    "name": "Kaynak Adı",
    "url": "https://example.com/feed",
    "category": "Teknoloji"
}
```

#### RSS Kaynağı Durumu Güncelle
```
POST /backend/api/fetch-content.php?action=update-source
Content-Type: application/json

{
    "source_id": 1,
    "is_active": true
}
```

## Cron Job Kurulumu

### 1. Cron Job Ekle

```bash
crontab -e
```

### 2. Çalışma Planı Örnekleri

```bash
# Her 2 saatte bir çalıştır
0 */2 * * * /usr/bin/php /path/to/backend/cron/fetch-rss.php

# Her gün saat 09:00'da çalıştır
0 9 * * * /usr/bin/php /path/to/backend/cron/fetch-rss.php

# Her 30 dakikada bir çalıştır (yoğun kullanım için)
*/30 * * * * /usr/bin/php /path/to/backend/cron/fetch-rss.php
```

### 3. Log Kontrolü

```bash
tail -f backend/logs/cron-$(date +%Y-%m-%d).log
```

## Türkçe Filtreleme Algoritması

Sistem, aşağıdaki kriterleri kullanarak Türkçe içerikleri filtreler:

1. **Türkçe Karakterler**: ç, ğ, ı, ö, ş, ü karakterlerinin varlığı
2. **Türkçe Kelimeler**: Yaygın Türkçe kelimelerin kontrolü
3. **Kelime Oranları**: Türkçe kelime yoğunluğu analizi

### Filtreleme Parametreleri

- Türkçe karakter oranı: > %2
- Türkçe kelime oranı: > %10
- Minimum kelime sayısı: 10 kelime

## Performans Optimizasyonu

### 1. Veritabanı İndeksleri

```sql
-- Performans için ek indeksler
CREATE INDEX idx_blog_posts_category_date ON blog_posts(category, publish_date);
CREATE INDEX idx_blog_posts_featured ON blog_posts(is_featured, publish_date);
CREATE INDEX idx_blog_posts_search ON blog_posts(title, excerpt);
```

### 2. PHP Ayarları

```ini
; php.ini optimizasyonları
memory_limit = 512M
max_execution_time = 300
max_input_time = 300
post_max_size = 32M
upload_max_filesize = 32M
```

### 3. Apache/Nginx Ayarları

#### Apache (.htaccess)
```apache
# Gzip sıkıştırma
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE text/plain
</IfModule>

# Cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/json "access plus 5 minutes"
</IfModule>
```

#### Nginx
```nginx
location /backend/api/ {
    gzip on;
    gzip_types application/json;
    expires 5m;
    add_header Cache-Control "public, no-transform";
}
```

## Güvenlik

### 1. CORS Ayarları

API'de CORS ayarları mevcuttur. Üretim ortamında `Access-Control-Allow-Origin` değerini güncelleyin:

```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

### 2. Rate Limiting

Yoğun kullanım için rate limiting ekleyin:

```php
// Basit rate limiting örneği
$ip = $_SERVER['REMOTE_ADDR'];
$requests = apcu_fetch($ip) ?: 0;
if ($requests > 100) {
    http_response_code(429);
    exit('Rate limit exceeded');
}
apcu_store($ip, $requests + 1, 3600);
```

### 3. Input Validation

Tüm kullanıcı girdileri validate edilir ve sanitize edilir.

## Hata Ayıklama

### 1. Log Dosyaları

```bash
# Cron job logları
tail -f backend/logs/cron-*.log

# PHP error logları
tail -f /var/log/apache2/error.log
# veya
tail -f /var/log/nginx/error.log
```

### 2. Veritabanı Sorguları

```sql
-- Fetch istatistikleri
SELECT status, COUNT(*) as count, AVG(execution_time) as avg_time
FROM fetch_logs 
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY status;

-- En aktif RSS kaynakları
SELECT name, fetch_count, error_count, last_fetch
FROM rss_sources 
WHERE is_active = 1
ORDER BY fetch_count DESC;
```

### 3. API Test

```bash
# Blog yazılarını test et
curl "http://localhost/backend/api/blog.php?action=posts&limit=5"

# İçerik çekmeyi test et
curl "http://localhost/backend/api/fetch-content.php?action=fetch"
```

## Bakım

### 1. Otomatik Temizlik

Sistem otomatik olarak:
- 30 günden eski log dosyalarını siler
- 6 aydan eski blog yazılarını siler

### 2. Manuel Temizlik

```sql
-- Eski logları temizle
DELETE FROM fetch_logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Duplicate yazıları temizle
DELETE t1 FROM blog_posts t1
INNER JOIN blog_posts t2 
WHERE t1.id > t2.id AND t1.source_url = t2.source_url;
```

### 3. Veritabanı Optimizasyonu

```sql
-- Tabloları optimize et
OPTIMIZE TABLE blog_posts;
OPTIMIZE TABLE rss_sources;
OPTIMIZE TABLE fetch_logs;
```

## Sorun Giderme

### Yaygın Sorunlar

1. **RSS çekme başarısız**
   - İnternet bağlantısını kontrol edin
   - RSS URL'lerinin geçerliliğini kontrol edin
   - PHP cURL extension'ının aktif olduğunu kontrol edin

2. **Türkçe karakterler bozuk**
   - Veritabanı charset'inin utf8mb4 olduğunu kontrol edin
   - PHP mbstring extension'ının aktif olduğunu kontrol edin

3. **Yavaş performans**
   - Veritabanı indekslerini kontrol edin
   - PHP memory_limit'i artırın
   - Eski verileri temizleyin

### Destek

Sorunlar için:
1. Log dosyalarını kontrol edin
2. Veritabanı bağlantısını test edin
3. PHP error loglarını inceleyin

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 