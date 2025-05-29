import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Genel admin sayfası stili için

const AdminContactForms = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Sayfa numarası state'i
  const [messagesPerPage] = useState(10); // Sayfa başına mesaj sayısı (şimdilik sabit)
  const [totalMessages, setTotalMessages] = useState(0); // Toplam mesaj sayısı state'i
  
  // Mesajları backend'den çekme fonksiyonu
  const fetchMessages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Yetkilendirme tokenını ekleyebilirsiniz (PrivateRoute ile entegrasyon)
      const token = localStorage.getItem('adminToken'); // Örnek olarak localStorage'dan alıyoruz
      
      // API isteğine sayfa ve limit parametrelerini ekle
      const response = await fetch(`/backend/api/admin/contact_forms.php?action=list&page=${currentPage}&limit=${messagesPerPage}`, {
        headers: {
          'Authorization': `Bearer ${token}` // Yetkilendirme başlığını ekle (JWT veya benzeri kullanılıyorsa)
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setMessages(result.data);
        setTotalMessages(result.total);
      } else {
        setError(result.message || 'Mesajlar yüklenemedi');
      }
      
    } catch (err) {
      console.error('Fetch messages error:', err);
      setError('Mesajlar yüklenirken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Component yüklendiğinde veya sayfa değiştiğinde mesajları çek
  useEffect(() => {
    fetchMessages();
  }, [currentPage]); // currentPage değiştiğinde yeniden çek

  // Mesaj silme fonksiyonu
  const handleDelete = async (id) => {
      if (window.confirm('Bu mesajı silmek istediğinize emin misiniz?')) {
          try {
               const token = localStorage.getItem('adminToken'); // Örnek olarak localStorage'dan alıyoruz
               
               const response = await fetch('/backend/api/admin/contact_forms.php?action=delete', {
                   method: 'POST', // veya 'DELETE'
                   headers: {
                       'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}` // Yetkilendirme başlığını ekle
                   },
                   body: JSON.stringify({ id: id })
               });
               
               const result = await response.json();
               
               if (result.success) {
                   alert(result.message); // Başarı mesajı göster
                   fetchMessages(); // Listeyi yeniden çekerek güncelle
               } else {
                   alert(result.message || 'Mesaj silinirken hata oluştu');
               }
          } catch (err) {
               console.error('Delete message error:', err);
               alert('Mesaj silinirken bir hata oluştu.');
          }
      }
  };

  if (isLoading) {
    return (
      <div className="admin-page-container">
        <h2>İletişim Mesajları</h2>
        <p>Yükleniyor...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="admin-page-container">
        <h2>İletişim Mesajları</h2>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      <h2>İletişim Mesajları</h2>
      {messages.length === 0 ? (
        <p>Henüz iletişim mesajı bulunmuyor.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th>Telefon</th>
              <th>Hizmet</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.phone}</td>
                <td>{message.service}</td>
                <td>{message.created_at}</td>
                <td>
                  {/* Detay görüntüleme veya düzenleme butonu eklenebilir */}
                  <button 
                    onClick={() => handleDelete(message.id)}
                    className="action-button delete-button"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Sayfalama Kontrolleri */}
      <div className="pagination">
        <button
          className="action-button"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Önceki Sayfa
        </button>
        <span>Sayfa {currentPage} / {Math.ceil(totalMessages / messagesPerPage)}</span>
        <button
          className="action-button"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalMessages / messagesPerPage)))}
          disabled={currentPage === Math.ceil(totalMessages / messagesPerPage)}
        >
          Sonraki Sayfa
        </button>
      </div>
    </div>
  );
};

export default AdminContactForms; 