<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'u590342429_etki360_blog';
    private $username = 'u590342429_etki360';
    private $password = 'E;db2pA@5[F7';
    private $conn;

    public function getConnection() {
        $this->conn = null;
        
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci",
                    PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true
                ]
            );
            
            // Charset'i tekrar set et
            $this->conn->exec("SET CHARACTER SET utf8mb4");
            $this->conn->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");
            
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        
        return $this->conn;
    }
}
?>