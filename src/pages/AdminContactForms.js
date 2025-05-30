import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Genel admin sayfası stili için

const AdminContactForms = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Sayfa numarası state'i
  const [messagesPerPage] = useState(10); // Sayfa başına mesaj sayısı (şimdilik sabit)
  const [totalMessages, setTotalMessages] = useState(0); // Toplam mesaj sayısı state'i
  const [selectedMessage, setSelectedMessage] = useState(null); // Seçili mesaj için detay modalı
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal açık mı?
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false); // E-posta cevap modalı açık mı?
  const [replyData, setReplyData] = useState({ subject: '', message: '' }); // E-posta cevap verisi
  const [isSubmitting, setIsSubmitting] = useState(false); // E-posta gönderiliyor mu?
  
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

  // Mesaj detaylarını görüntüle
  const handleViewDetails = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  // Modalı kapat
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  // Telefon ile ara
  const handleCall = (phoneNumber) => {
    if (phoneNumber && phoneNumber !== '-') {
      // Telefon numarasını düzenle (boşlukları ve özel karakterleri kaldır)
      const cleanNumber = phoneNumber.replace(/\s+/g, '').replace(/[()-]/g, '');
      
      // tel: protokolü ile arama yap
      window.location.href = `tel:${cleanNumber}`;
    } else {
      alert('Geçerli bir telefon numarası bulunamadı.');
    }
  };

  // E-posta cevap modalını aç
  const openReplyModal = () => {
    if (selectedMessage) {
      // Cevap konusunu otomatik oluştur
      const subject = `RE: İletişim Formu - ${selectedMessage.name}`;
      
      // Varsayılan cevap şablonu
      const message = `Merhaba ${selectedMessage.name},\n\nİletişim formunuz için teşekkür ederiz.\n\n[Buraya mesajınızı yazın]\n\nSaygılarımızla,\netki360 Ekibi`;
      
      setReplyData({ subject, message });
      setIsReplyModalOpen(true);
    }
  };

  // E-posta cevap modalını kapat
  const closeReplyModal = () => {
    setIsReplyModalOpen(false);
    setReplyData({ subject: '', message: '' });
  };

  // E-posta cevap verisini değiştir
  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setReplyData(prev => ({ ...prev, [name]: value }));
  };

  // E-posta gönder
  const handleSendEmail = async () => {
    if (selectedMessage && selectedMessage.email) {
      try {
        // Gönderme işlemi başlamadan önce loading durumunu ayarla
        setIsSubmitting(true);

        // API'ye gönderilecek verileri hazırla
        const emailData = {
          to: selectedMessage.email,
          subject: replyData.subject,
          message: replyData.message
        };
        
        // Token al (gerçek uygulamada yetkilendirme için)
        const token = localStorage.getItem('adminToken');
        
        // API'ye istek gönder
        const response = await fetch('/backend/api/admin/send_email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(emailData)
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Başarılı durumda
          alert('E-posta başarıyla gönderildi');
          closeReplyModal(); // Modalı kapat
        } else {
          // Hata durumunda
          alert(`E-posta gönderilirken bir hata oluştu: ${result.message}`);
        }
      } catch (err) {
        console.error('E-posta gönderme hatası:', err);
        alert('E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setIsSubmitting(false); // İşlem bittiğinde loading durumunu sıfırla
      }
    } else {
      alert('Geçerli bir e-posta adresi bulunamadı.');
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
              <th>Şirket</th>
              <th>Hizmet</th>
              <th>Bütçe</th>
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
                <td>{message.phone || '-'}</td>
                <td>{message.company || '-'}</td>
                <td>{message.service || '-'}</td>
                <td>{message.budget || '-'}</td>
                <td>{message.created_at}</td>
                <td>
                  <button 
                    onClick={() => handleViewDetails(message)}
                    className="action-button view-button"
                    style={{ marginRight: '5px' }}
                  >
                    Detay
                  </button>
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

      {/* Mesaj Detay Modalı */}
      {isModalOpen && selectedMessage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Mesaj Detayı</h3>
            
            <div className="message-details">
              <div className="message-detail-row">
                <strong>Ad Soyad:</strong> {selectedMessage.name}
              </div>
              <div className="message-detail-row">
                <strong>E-posta:</strong> {selectedMessage.email}
                <button 
                  onClick={openReplyModal}
                  className="action-button contact-button email-button"
                  title="E-posta ile cevapla"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Cevapla
                </button>
              </div>
              <div className="message-detail-row">
                <strong>Telefon:</strong> {selectedMessage.phone || '-'}
                {selectedMessage.phone && selectedMessage.phone !== '-' && (
                  <button 
                    onClick={() => handleCall(selectedMessage.phone)}
                    className="action-button contact-button call-button"
                    title="Telefon ile ara"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Ara
                  </button>
                )}
              </div>
              <div className="message-detail-row">
                <strong>Şirket:</strong> {selectedMessage.company || '-'}
              </div>
              <div className="message-detail-row">
                <strong>Hizmet:</strong> {selectedMessage.service || '-'}
              </div>
              <div className="message-detail-row">
                <strong>Bütçe:</strong> {selectedMessage.budget || '-'}
              </div>
              <div className="message-detail-row">
                <strong>Tarih:</strong> {selectedMessage.created_at}
              </div>
              <div className="message-detail-row">
                <strong>IP Adresi:</strong> {selectedMessage.ip_address}
              </div>
              <div className="message-detail-row">
                <strong>Tarayıcı:</strong> {selectedMessage.user_agent}
              </div>
              <div className="message-detail-row message-content">
                <strong>Mesaj:</strong>
                <div className="message-text">{selectedMessage.message}</div>
              </div>
            </div>
            
            <div className="message-actions">
              <button 
                onClick={closeModal} 
                className="action-button view-button"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* E-posta Cevap Modalı */}
      {isReplyModalOpen && selectedMessage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>E-posta Cevapla</h3>
            <p className="modal-subtitle">
              <strong>{selectedMessage.name}</strong> kişisine cevap gönder: <strong>{selectedMessage.email}</strong>
            </p>
            
            <div className="reply-form">
              <div className="form-group">
                <label htmlFor="reply-subject">Konu:</label>
                <input 
                  type="text" 
                  id="reply-subject"
                  name="subject"
                  value={replyData.subject}
                  onChange={handleReplyChange}
                  className="form-control"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="reply-message">Mesaj:</label>
                <textarea 
                  id="reply-message"
                  name="message"
                  value={replyData.message}
                  onChange={handleReplyChange}
                  className="form-control reply-textarea"
                  rows="10"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <div className="form-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  onClick={closeReplyModal}
                  className="action-button view-button"
                  disabled={isSubmitting}
                >
                  İptal
                </button>
                <button 
                  onClick={handleSendEmail}
                  className="action-button edit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'E-posta Gönder'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContactForms; 