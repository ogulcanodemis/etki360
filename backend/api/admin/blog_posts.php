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

// Veritabanı bağlantısını dahil et
require_once __DIR__ . '/../../config/database.php';

// Admin yetkilendirme kontrolü (şimdilik basit bir placeholder)
// Gerçek bir uygulamada daha güvenli bir oturum veya token doğrulama yapılır
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

// Slug oluşturma fonksiyonu
function slugify($text, $divider = '-') {
    // Replace non letter or digits by divider
    $text = preg_replace('~[^\pL\d]+~u', $divider, $text);

    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

    // Remove unwanted characters
    $text = preg_replace('~[^\\-\w]+~', '', $text);

    // Trim dashes from beginning and end
    $text = trim($text, $divider);

    // Remove duplicate divider
    $text = preg_replace('~-+~', $divider, $text);

    // Lowercase
    $text = strtolower($text);

    if (empty($text)) {
        return 'n-a';
    }

    return $text;
}

// API routing
// action parametresine göre farklı işlemler yapılır (listeleme, silme, oluşturma, görüntüleme, güncelleme vb.)
$action = $_GET['action'] ?? '';

$database = new Database();
$db = $database->getConnection();

switch ($action) {
    case 'list':
        // İletişim mesajlarını listeleme
        $page = $_GET['page'] ?? 1;
        $limit = $_GET['limit'] ?? 10; // Sayfa başına varsayılan 10 yazı
        $offset = ($page - 1) * $limit;

        // Toplam blog yazısı sayısını al
        $countSql = "SELECT COUNT(*) as total FROM blog_posts";
        $countStmt = $db->query($countSql);
        $totalPosts = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];

        // Blog yazılarını sayfalama ile listeleme
        $sql = "SELECT id, title, slug, author, category, publish_date, created_at FROM blog_posts ORDER BY created_at DESC LIMIT :limit OFFSET :offset";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Tarih formatlama gibi işlemler burada yapılabilir
        foreach ($posts as &$post) {
            $post['publish_date'] = $post['publish_date'] ? date('d.m.Y H:i', strtotime($post['publish_date'])) : 'Belirtilmemiş';
            $post['created_at'] = date('d.m.Y H:i', strtotime($post['created_at']));
        }

        echo json_encode(['success' => true, 'data' => $posts, 'total' => $totalPosts, 'page' => (int)$page, 'limit' => (int)$limit]);
        break;
        
    case 'delete':
        // Blog yazısını silme (POST veya DELETE metodu beklenir)
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $input = json_decode(file_get_contents('php://input'), true);
            $id = $input['id'] ?? 0;
            
            if ($id > 0) {
                $sql = "DELETE FROM blog_posts WHERE id = :id LIMIT 1";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                if ($stmt->execute()) {
                    echo json_encode(['success' => true, 'message' => 'Yazı başarıyla silindi']);
                } else {
                     echo json_encode(['success' => false, 'message' => 'Yazı silinirken hata oluştu']);
                }
            } else {
                 echo json_encode(['success' => false, 'message' => 'Geçersiz yazı ID']);
            }
        } else {
            http_response_code(405);
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed for delete']);
        }
        break;

    case 'create':
        // Yeni blog yazısı oluşturma (POST metodu beklenir)
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);

            // Gerekli alanları kontrol et
            $required_fields = ['title', 'content', 'author', 'category'];
            foreach ($required_fields as $field) {
                if (empty($input[$field])) {
                    http_response_code(400); // Bad Request
                    echo json_encode(['success' => false, 'message' => "${field} alanı boş olamaz."]);
                    exit();
                }
            }

            $title = htmlspecialchars(strip_tags($input['title']));
            $content = $input['content']; // İçerik HTML olabilir, temizleme frontend'de yapılmalı (veya backend'de HTML Purifier gibi bir kütüphane ile)
            $author = htmlspecialchars(strip_tags($input['author']));
            $category = htmlspecialchars(strip_tags($input['category']));
            $publish_date = !empty($input['publish_date']) ? date('Y-m-d H:i:s', strtotime($input['publish_date'])) : null; // Yayın tarihi isteğe bağlı olabilir

            // Slug oluştur ve benzersizliğini kontrol et
            $base_slug = slugify($title);
            $slug = $base_slug;
            $counter = 1;
            while (true) {
                $checkSql = "SELECT id FROM blog_posts WHERE slug = :slug LIMIT 1";
                $checkStmt = $db->prepare($checkSql);
                $checkStmt->bindParam(':slug', $slug, PDO::PARAM_STR);
                $checkStmt->execute();
                if ($checkStmt->rowCount() === 0) {
                    break; // Slug benzersiz, döngüyü kır
                }
                $slug = $base_slug . '-' . $counter++;
            }

            // Veritabanına ekle
            $sql = "INSERT INTO blog_posts (title, slug, content, author, category, publish_date) VALUES (:title, :slug, :content, :author, :category, :publish_date)";
            $stmt = $db->prepare($sql);

            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':slug', $slug);
            $stmt->bindParam(':content', $content);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':category', $category);
            $stmt->bindParam(':publish_date', $publish_date);

            if ($stmt->execute()) {
                // Başarılı ekleme, eklenen kaydın ID'sini döndürebiliriz
                $newId = $db->lastInsertId();
                echo json_encode(['success' => true, 'message' => 'Blog yazısı başarıyla oluşturuldu', 'id' => $newId]);
            } else {
                 http_response_code(500); // Internal Server Error
                 echo json_encode(['success' => false, 'message' => 'Blog yazısı oluşturulurken hata oluştu.']);
            }

        } else {
            http_response_code(405); // Method Not Allowed
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed for create']);
        }
        break;

    case 'view':
        // Blog yazısı detayını görüntüleme (GET metodu beklenir)
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $id = $_GET['id'] ?? 0;

            if ($id > 0) {
                $sql = "SELECT * FROM blog_posts WHERE id = :id LIMIT 1";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                $stmt->execute();
                $post = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($post) {
                    // Tarih formatlama
                    $post['publish_date'] = $post['publish_date'] ? date('Y-m-d', strtotime($post['publish_date'])) : ''; // Frontend formu için uygun format
                    $post['created_at'] = date('d.m.Y H:i', strtotime($post['created_at']));
                    $post['updated_at'] = date('d.m.Y H:i', strtotime($post['updated_at']));

                    echo json_encode(['success' => true, 'data' => $post]);
                } else {
                    http_response_code(404); // Not Found
                    echo json_encode(['success' => false, 'message' => 'Blog yazısı bulunamadı.']);
                }
            } else {
                 http_response_code(400); // Bad Request
                 echo json_encode(['success' => false, 'message' => "Geçersiz yazı ID"]);
            }
        } else {
            http_response_code(405); // Method Not Allowed
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed for view']);
        }
        break;

    case 'update':
        // Blog yazısını güncelleme (POST veya PUT metodu beklenir)
        if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT') {
            $input = json_decode(file_get_contents('php://input'), true);

            $id = $input['id'] ?? 0;

             if ($id <= 0) {
                http_response_code(400); // Bad Request
                echo json_encode(['success' => false, 'message' => "Geçersiz yazı ID."]);
                exit();
            }

            // Gerekli alanları kontrol et (güncellemede slug hariç tutulabilir veya kontrol edilebilir)
             $required_fields = ['title', 'content', 'author', 'category']; // Slug hariç
             foreach ($required_fields as $field) {
                // isset kontrolü, alanın requestte olup olmadığını, empty kontrolü ise boş olup olmadığını belirler.
                 if (!isset($input[$field]) || empty($input[$field])) {
                     http_response_code(400); // Bad Request
                     echo json_encode(['success' => false, 'message' => "${field} alanı boş olamaz."]);
                     exit();
                 }
             }

            $title = htmlspecialchars(strip_tags($input['title']));
            $content = $input['content']; // İçerik HTML olabilir
            $author = htmlspecialchars(strip_tags($input['author']));
            $category = htmlspecialchars(strip_tags($input['category']));
            // Yayın tarihi nullable olduğu için boş gelirse null olarak kaydedilir
            $publish_date = !empty($input['publish_date']) ? date('Y-m-d H:i:s', strtotime($input['publish_date'])) : null;

            // Slug güncelleme veya yeniden oluşturma (isteğe bağlı)
            $slug = !empty($input['slug']) ? slugify($input['slug']) : slugify($title); // Eğer slug gönderilirse onu kullan, yoksa başlıktan oluştur
            
            // Güncellenen slug'ın benzersizliğini kontrol et (mevcut yazı hariç)
             $base_slug = $slug; // Kullanılacak veya oluşturulan slug
             $current_slug = $base_slug;
             $counter = 1;
             while (true) {
                 $checkSql = "SELECT id FROM blog_posts WHERE slug = :slug AND id != :current_id LIMIT 1";
                 $checkStmt = $db->prepare($checkSql);
                 $checkStmt->bindParam(':slug', $current_slug, PDO::PARAM_STR);
                 $checkStmt->bindParam(':current_id', $id, PDO::PARAM_INT);
                 $checkStmt->execute();
                 if ($checkStmt->rowCount() === 0) {
                     $slug = $current_slug; // Benzersiz slug bulundu
                     break; 
                 }
                 $current_slug = $base_slug . '-' . $counter++ ;
             }


            // Veritabanında güncelle
            $sql = "UPDATE blog_posts SET title = :title, slug = :slug, content = :content, author = :author, category = :category, publish_date = :publish_date, updated_at = CURRENT_TIMESTAMP WHERE id = :id";
            $stmt = $db->prepare($sql);

            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':slug', $slug);
            $stmt->bindParam(':content', $content);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':category', $category);
            $stmt->bindParam(':publish_date', $publish_date);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            if ($stmt->execute()) {
                echo json_encode(['success' => true, 'message' => 'Blog yazısı başarıyla güncellendi']);
            } else {
                 http_response_code(500); // Internal Server Error
                 echo json_encode(['success' => false, 'message' => 'Blog yazısı güncellenirken hata oluştu.']);
            }

        } else {
            http_response_code(405); // Method Not Allowed
            echo json_encode(['success' => false, 'message' => 'Method Not Allowed for update']);
        }
        break;

    // Diğer CRUD işlemleri buraya eklenecek (view, update vb.)

    default:
        // Tanımsız action
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Tanımsız API işlemi']);
        break;
}

?> 