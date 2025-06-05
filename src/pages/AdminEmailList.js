import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import './AdminEmailList.css';

const AdminEmailList = () => {
  const [emailList, setEmailList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [emailsPerPage] = useState(20);
  const [totalEmails, setTotalEmails] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState({ email: '', name: '', source: 'manuel' });
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importSource, setImportSource] = useState('manuel');
  const [showBulkActions, setShowBulkActions] = useState(false);
  
  // E-posta listesini getir
  useEffect(() => {
    fetchEmailList();
  }, [currentPage, searchTerm]);
  
  // E-posta listesini backend'den çek
  const fetchEmailList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      const queryParams = new URLSearchParams({
        page: currentPage,
        limit: emailsPerPage,
        search: searchTerm
      }).toString();
      
      const response = await fetch(`/backend/api/admin/email_list.php?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setEmailList(result.data);
        setTotalEmails(result.total);
      } else {
        setError(result.message || 'E-posta listesi yüklenemedi');
      }
    } catch (err) {
      console.error('Fetch email list error:', err);
      setError('E-posta listesi yüklenirken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // E-posta ekle modalını aç
  const openAddModal = () => {
    setNewEmail({ email: '', name: '', source: 'manuel' });
    setIsModalOpen(true);
  };
  
  // İçe aktarma modalını aç
  const openImportModal = () => {
    setImportText('');
    setImportSource('manuel');
    setIsImportModalOpen(true);
  };
  
  // Modalları kapat
  const closeModals = () => {
    setIsModalOpen(false);
    setIsImportModalOpen(false);
  };
  
  // Input değişikliklerini takip et
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmail(prev => ({ ...prev, [name]: value }));
  };
  
  // İçe aktarma alanındaki değişikliği takip et
  const handleImportTextChange = (e) => {
    setImportText(e.target.value);
  };
  
  // İçe aktarma kaynağı değişikliğini takip et
  const handleImportSourceChange = (e) => {
    setImportSource(e.target.value);
  };
  
  // Tek e-posta ekle
  const handleAddEmail = async (e) => {
    e.preventDefault();
    
    if (!newEmail.email) {
      alert('E-posta adresi zorunludur.');
      return;
    }
    
    try {
      const token = localStorage.getItem('adminToken');
      
      const response = await fetch('/backend/api/admin/email_list.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'add',
          email: newEmail.email,
          name: newEmail.name,
          source: newEmail.source
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccessMessage('E-posta başarıyla eklendi.');
        setIsModalOpen(false);
        fetchEmailList(); // Listeyi yenile
        
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setError(result.message || 'E-posta eklenirken bir hata oluştu.');
      }
    } catch (err) {
      console.error('Add email error:', err);
      setError('E-posta eklenirken bir hata oluştu.');
    }
  };
  
  // Toplu e-posta içe aktar
  const handleImportEmails = async (e) => {
    e.preventDefault();
    
    if (!importText.trim()) {
      alert('İçe aktarılacak e-posta adresleri giriniz.');
      return;
    }
    
    // Her satırı ayrı bir e-posta olarak işle
    const emailLines = importText.split('\n');
    const validEmails = [];
    
    // Basit doğrulama ve formatlama
    for (const line of emailLines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue; // Boş satırları atla
      
      // E-posta ve isim ayırma (varsa)
      let email = '';
      let name = '';
      
      // Eğer satırda virgül veya noktalı virgül varsa, ayırma işlemi yap
      if (trimmedLine.includes(',')) {
        const parts = trimmedLine.split(',');
        email = parts[0].trim();
        name = parts.slice(1).join(',').trim();
      } else if (trimmedLine.includes(';')) {
        const parts = trimmedLine.split(';');
        email = parts[0].trim();
        name = parts.slice(1).join(';').trim();
      } else {
        email = trimmedLine;
      }
      
      // Basit e-posta doğrulama
      if (email.includes('@') && email.includes('.')) {
        validEmails.push({ email, name, source: importSource });
      }
    }
    
    if (validEmails.length === 0) {
      alert('Geçerli e-posta adresi bulunamadı.');
      return;
    }
    
    try {
      const token = localStorage.getItem('adminToken');
      
      const response = await fetch('/backend/api/admin/email_list.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'import',
          emails: validEmails
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccessMessage(`${result.importedCount} e-posta başarıyla içe aktarıldı.`);
        setIsImportModalOpen(false);
        fetchEmailList(); // Listeyi yenile
        
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setError(result.message || 'E-postalar içe aktarılırken bir hata oluştu.');
      }
    } catch (err) {
      console.error('Import emails error:', err);
      setError('E-postalar içe aktarılırken bir hata oluştu.');
    }
  };
  
  // E-posta sil
  const handleDeleteEmail = async (emailId) => {
    if (!window.confirm('Bu e-postayı silmek istediğinize emin misiniz?')) {
      return;
    }
    
    try {
      const token = localStorage.getItem('adminToken');
      
      const response = await fetch('/backend/api/admin/email_list.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'delete',
          id: emailId
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccessMessage('E-posta başarıyla silindi.');
        fetchEmailList(); // Listeyi yenile
        
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setError(result.message || 'E-posta silinirken bir hata oluştu.');
      }
    } catch (err) {
      console.error('Delete email error:', err);
      setError('E-posta silinirken bir hata oluştu.');
    }
  };
  
  // Toplu e-posta sil
  const handleBulkDelete = async () => {
    if (selectedEmails.length === 0) {
      alert('Lütfen en az bir e-posta seçin.');
      return;
    }
    
    if (!window.confirm(`${selectedEmails.length} e-postayı silmek istediğinize emin misiniz?`)) {
      return;
    }
    
    try {
      const token = localStorage.getItem('adminToken');
      
      const response = await fetch('/backend/api/admin/email_list.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          action: 'bulk_delete',
          ids: selectedEmails
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccessMessage(`${selectedEmails.length} e-posta başarıyla silindi.`);
        setSelectedEmails([]); // Seçimleri temizle
        fetchEmailList(); // Listeyi yenile
        
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setError(result.message || 'E-postalar silinirken bir hata oluştu.');
      }
    } catch (err) {
      console.error('Bulk delete error:', err);
      setError('E-postalar silinirken bir hata oluştu.');
    }
  };
  
  // Ara
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // İlk sayfaya dön
    fetchEmailList();
  };
  
  // Tek e-posta seçimi
  const handleSelectEmail = (emailId) => {
    setSelectedEmails(prev => {
      if (prev.includes(emailId)) {
        return prev.filter(id => id !== emailId);
      } else {
        return [...prev, emailId];
      }
    });
  };
  
  // Tümünü seç/kaldır
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEmails(emailList.map(email => email.id));
    } else {
      setSelectedEmails([]);
    }
  };
  
  // Sayfa değişimi
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  return (
    <div className="admin-page-container">
      <h2>E-posta Listesi Yönetimi</h2>
      
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <div className="email-list-actions">
        <div className="email-list-filters">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="E-posta veya isim ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="action-button view-button">Ara</button>
          </form>
        </div>
        
        <div className="email-list-buttons">
          <button 
            className="action-button edit-button"
            onClick={openAddModal}
          >
            <i className="fas fa-plus"></i> Yeni E-posta Ekle
          </button>
          
          <button 
            className="action-button import-button"
            onClick={openImportModal}
          >
            <i className="fas fa-file-import"></i> Toplu İçe Aktar
          </button>
          
          <button 
            className="action-button view-button"
            onClick={() => setShowBulkActions(!showBulkActions)}
          >
            {showBulkActions ? 'Toplu İşlemleri Gizle' : 'Toplu İşlemler'}
          </button>
        </div>
      </div>
      
      {showBulkActions && (
        <div className="bulk-actions">
          <div className="selected-count">
            {selectedEmails.length} e-posta seçildi
          </div>
          
          <button 
            className="action-button delete-button"
            onClick={handleBulkDelete}
            disabled={selectedEmails.length === 0}
          >
            <i className="fas fa-trash"></i> Seçilenleri Sil
          </button>
        </div>
      )}
      
      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <div className="email-list-container">
            <table>
              <thead>
                <tr>
                  {showBulkActions && (
                    <th className="checkbox-column">
                      <input 
                        type="checkbox" 
                        onChange={handleSelectAll}
                        checked={selectedEmails.length === emailList.length && emailList.length > 0}
                      />
                    </th>
                  )}
                  <th>ID</th>
                  <th>E-posta</th>
                  <th>İsim</th>
                  <th>Kaynak</th>
                  <th>Durum</th>
                  <th>Eklenme Tarihi</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {emailList.length === 0 ? (
                  <tr>
                    <td colSpan={showBulkActions ? 8 : 7} className="no-data">
                      Kayıtlı e-posta bulunamadı.
                    </td>
                  </tr>
                ) : (
                  emailList.map((email) => (
                    <tr key={email.id}>
                      {showBulkActions && (
                        <td>
                          <input 
                            type="checkbox"
                            checked={selectedEmails.includes(email.id)}
                            onChange={() => handleSelectEmail(email.id)}
                          />
                        </td>
                      )}
                      <td>{email.id}</td>
                      <td>{email.email}</td>
                      <td>{email.name || '-'}</td>
                      <td>
                        <span className={`source-badge source-${email.source}`}>
                          {email.source === 'contact_form' ? 'İletişim Formu' : 
                           email.source === 'newsletter' ? 'Bülten Aboneliği' : 
                           email.source === 'manuel' ? 'Manuel Eklendi' : email.source}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge status-${email.is_active ? 'active' : 'inactive'}`}>
                          {email.is_active ? 'Aktif' : 'Pasif'}
                        </span>
                      </td>
                      <td>{email.created_at}</td>
                      <td>
                        <button 
                          className="action-button delete-button"
                          onClick={() => handleDeleteEmail(email.id)}
                          title="Sil"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Sayfalama */}
          {totalEmails > emailsPerPage && (
            <div className="pagination">
              <button
                className="action-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Önceki Sayfa
              </button>
              <span>Sayfa {currentPage} / {Math.ceil(totalEmails / emailsPerPage)}</span>
              <button
                className="action-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalEmails / emailsPerPage)}
              >
                Sonraki Sayfa
              </button>
            </div>
          )}
        </>
      )}
      
      {/* Yeni E-posta Ekleme Modalı */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Yeni E-posta Ekle</h3>
            
            <form onSubmit={handleAddEmail}>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresi:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newEmail.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="name">İsim (Opsiyonel):</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEmail.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="source">Kaynak:</label>
                <select
                  id="source"
                  name="source"
                  value={newEmail.source}
                  onChange={handleInputChange}
                >
                  <option value="manuel">Manuel Ekleme</option>
                  <option value="newsletter">Bülten Aboneliği</option>
                  <option value="contact_form">İletişim Formu</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="button" className="action-button view-button" onClick={closeModals}>
                  İptal
                </button>
                <button type="submit" className="action-button edit-button">
                  Ekle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Toplu İçe Aktarma Modalı */}
      {isImportModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>E-posta Listesi İçe Aktar</h3>
            
            <form onSubmit={handleImportEmails}>
              <div className="form-group">
                <label htmlFor="importText">E-posta Listesi:</label>
                <p className="form-help">
                  Her satıra bir e-posta adresi yazın. İsim eklemek için virgül veya noktalı virgül kullanabilirsiniz.
                  <br />
                  Örnek: <code>ornek@mail.com, Örnek İsim</code> veya <code>ornek@mail.com</code>
                </p>
                <textarea
                  id="importText"
                  name="importText"
                  value={importText}
                  onChange={handleImportTextChange}
                  rows="10"
                  placeholder="ornek1@mail.com, İsim 1&#10;ornek2@mail.com, İsim 2&#10;ornek3@mail.com&#10;..."
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="importSource">Kaynak:</label>
                <select
                  id="importSource"
                  name="importSource"
                  value={importSource}
                  onChange={handleImportSourceChange}
                >
                  <option value="manuel">Manuel Ekleme</option>
                  <option value="newsletter">Bülten Aboneliği</option>
                  <option value="contact_form">İletişim Formu</option>
                </select>
              </div>
              
              <div className="form-actions">
                <button type="button" className="action-button view-button" onClick={closeModals}>
                  İptal
                </button>
                <button type="submit" className="action-button edit-button">
                  İçe Aktar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmailList; 