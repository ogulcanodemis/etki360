import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Stil dosyası için

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/backend/api/admin_auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Giriş başarılı - dashboard'a yönlendir
        // Gerçek uygulamada burada bir oturum (localStorage/cookie) yönetimi yapılır
        localStorage.setItem('adminToken', 'true'); // Başarılı girişte tokenı sakla
        console.log('Giriş Başarılı', result.message);
        navigate('/admin/dashboard'); // Admin dashboard rotasına yönlendir
      } else {
        // Giriş başarısız
        setError(result.message || 'Giriş başarısız');
      }

    } catch (err) {
      console.error('Login Error:', err);
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Paneli Giriş</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Yükleniyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin; 