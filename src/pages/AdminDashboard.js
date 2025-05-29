import React from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için
import './AdminDashboard.css'; // Stil dosyası için

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Basit bir çıkış (logout) fonksiyonu
  const handleLogout = () => {
    // Gerçek uygulamada burada oturum/token temizlenir
    localStorage.removeItem('adminToken'); // Örnek token temizleme
    navigate('/admin/login'); // Giriş sayfasına yönlendir
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-header">
        <h2>Admin Paneli Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Çıkış Yap</button>
      </div>
      <div className="admin-dashboard-content">
        <p>Buraya dashboard içeriği gelecek...</p>
        {/* İletişim formu mesajları, blog yönetimi vb. */}
      </div>
    </div>
  );
};

export default AdminDashboard; 