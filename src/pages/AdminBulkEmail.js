import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import './AdminBulkEmail.css';

const AdminBulkEmail = () => {
  // State tanımlamaları
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [emailData, setEmailData] = useState({
    subject: '',
    message: '',
    includeUnsubscribeLink: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [filters, setFilters] = useState({
    source: 'all', // all, contact_forms, newsletter, email_list
    dateFrom: '',
    dateTo: ''
  });

  // Component yüklendiğinde alıcıları getir
  useEffect(() => {
    fetchRecipients();
  }, [filters]);

  // Alıcıları backend'den çekme
  const fetchRecipients = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      const queryParams = new URLSearchParams(filters).toString();
      
      const response = await fetch(`/backend/api/admin/email_recipients.php?${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setRecipients(result.data);
      } else {
        setError(result.message || 'Alıcılar yüklenemedi');
      }
    } catch (err) {
      console.error('Fetch recipients error:', err);
      setError('Alıcılar yüklenirken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  // Form input değişikliklerini yönet
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Filtre değişikliklerini yönet
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Tümünü seç/kaldır
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRecipients(recipients.map(r => r.email));
    } else {
      setSelectedRecipients([]);
    }
  };

  // Tek alıcı seçimi
  const handleSelectRecipient = (email) => {
    setSelectedRecipients(prev => {
      if (prev.includes(email)) {
        return prev.filter(e => e !== email);
      } else {
        return [...prev, email];
      }
    });
  };

  // E-posta önizleme
  const handlePreview = () => {
    if (!emailData.subject || !emailData.message) {
      alert('Lütfen konu ve mesaj alanlarını doldurun.');
      return;
    }
    setPreviewMode(true);
  };

  // Toplu mail gönderimi
  const handleSendBulkEmail = async () => {
    if (selectedRecipients.length === 0) {
      alert('Lütfen en az bir alıcı seçin.');
      return;
    }

    if (!emailData.subject || !emailData.message) {
      alert('Lütfen konu ve mesaj alanlarını doldurun.');
      return;
    }

    if (!window.confirm(`${selectedRecipients.length} kişiye e-posta göndermek istediğinize emin misiniz?`)) {
      return;
    }

    setIsSending(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const token = localStorage.getItem('adminToken');
      
      const response = await fetch('/backend/api/admin/send_bulk_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          recipients: selectedRecipients,
          subject: emailData.subject,
          message: emailData.message,
          includeUnsubscribeLink: emailData.includeUnsubscribeLink
        })
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(`E-posta başarıyla ${result.sentCount} kişiye gönderildi.`);
        // Formu temizle
        setEmailData({
          subject: '',
          message: '',
          includeUnsubscribeLink: true
        });
        setSelectedRecipients([]);
      } else {
        setError(result.message || 'E-posta gönderilirken bir hata oluştu.');
      }
    } catch (err) {
      console.error('Send bulk email error:', err);
      setError('E-posta gönderilirken bir hata oluştu.');
    } finally {
      setIsSending(false);
    }
  };

  // E-posta şablonları
  const emailTemplates = [
    {
      name: 'Hoş Geldiniz',
      subject: 'etki360\'a Hoş Geldiniz!',
      message: 'Merhaba,\n\netki360 ailesine hoş geldiniz! Sizlere en iyi hizmeti sunmak için buradayız.\n\nSaygılarımızla,\netki360 Ekibi'
    },
    {
      name: 'Yeni Hizmet Duyurusu',
      subject: 'Yeni Hizmetimiz: [Hizmet Adı]',
      message: 'Merhaba,\n\nYeni hizmetimizi duyurmaktan mutluluk duyuyoruz: [Hizmet detayları]\n\nDaha fazla bilgi için web sitemizi ziyaret edebilirsiniz.\n\nSaygılarımızla,\netki360 Ekibi'
    },
    {
      name: 'Özel Kampanya',
      subject: 'Size Özel %20 İndirim Fırsatı!',
      message: 'Merhaba,\n\nSadece bu ay geçerli %20 indirim fırsatını kaçırmayın!\n\nKampanya Kodu: ETKI20\n\nSaygılarımızla,\netki360 Ekibi'
    }
  ];

  // Şablon seçimi
  const handleTemplateSelect = (template) => {
    setEmailData(prev => ({
      ...prev,
      subject: template.subject,
      message: template.message
    }));
  };

  if (isLoading) {
    return (
      <div className="admin-page-container">
        <h2>Toplu E-posta Gönderimi</h2>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      <h2>Toplu E-posta Gönderimi</h2>
      
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="bulk-email-container">
        {/* Sol Panel - Alıcı Listesi */}
        <div className="recipients-panel">
          <h3>Alıcılar</h3>
          
          {/* Filtreler */}
          <div className="filters-section">
            <div className="filter-group">
              <label>Kaynak:</label>
              <select name="source" value={filters.source} onChange={handleFilterChange}>
                <option value="all">Tümü</option>
                <option value="contact_forms">İletişim Formları</option>
                <option value="newsletter">Bülten Aboneleri</option>
                <option value="email_list">E-posta Listesi</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Başlangıç:</label>
              <input 
                type="date" 
                name="dateFrom" 
                value={filters.dateFrom} 
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter-group">
              <label>Bitiş:</label>
              <input 
                type="date" 
                name="dateTo" 
                value={filters.dateTo} 
                onChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Alıcı Listesi */}
          <div className="recipients-list">
            <div className="select-all">
              <label>
                <input 
                  type="checkbox" 
                  onChange={handleSelectAll}
                  checked={selectedRecipients.length === recipients.length && recipients.length > 0}
                />
                Tümünü Seç ({recipients.length} kişi)
              </label>
            </div>
            
            <div className="recipients-scroll">
              {recipients.map((recipient, index) => (
                <div key={index} className="recipient-item">
                  <label>
                    <input 
                      type="checkbox"
                      checked={selectedRecipients.includes(recipient.email)}
                      onChange={() => handleSelectRecipient(recipient.email)}
                    />
                    <span className="recipient-info">
                      <strong>{recipient.name || 'İsimsiz'}</strong>
                      <span>{recipient.email}</span>
                      <small>{recipient.source} - {recipient.date}</small>
                    </span>
                  </label>
                </div>
              ))}
            </div>
            
            <div className="selected-count">
              Seçili: {selectedRecipients.length} kişi
            </div>
          </div>
        </div>

        {/* Sağ Panel - E-posta İçeriği */}
        <div className="email-content-panel">
          <h3>E-posta İçeriği</h3>
          
          {/* E-posta Şablonları */}
          <div className="email-templates">
            <label>Hazır Şablonlar:</label>
            <div className="template-buttons">
              {emailTemplates.map((template, index) => (
                <button 
                  key={index}
                  className="template-button"
                  onClick={() => handleTemplateSelect(template)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          {/* E-posta Formu */}
          <div className="email-form">
            <div className="form-group">
              <label htmlFor="subject">Konu:</label>
              <input 
                type="text"
                id="subject"
                name="subject"
                value={emailData.subject}
                onChange={handleInputChange}
                placeholder="E-posta konusu..."
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesaj:</label>
              <textarea
                id="message"
                name="message"
                value={emailData.message}
                onChange={handleInputChange}
                rows="15"
                placeholder="E-posta içeriği..."
                disabled={isSending}
              />
            </div>

            <div className="form-group">
              <label>
                <input 
                  type="checkbox"
                  name="includeUnsubscribeLink"
                  checked={emailData.includeUnsubscribeLink}
                  onChange={handleInputChange}
                  disabled={isSending}
                />
                Abonelikten çıkma linki ekle
              </label>
            </div>

            <div className="form-actions">
              <button 
                className="action-button view-button"
                onClick={handlePreview}
                disabled={isSending}
              >
                Önizle
              </button>
              <button 
                className="action-button edit-button"
                onClick={handleSendBulkEmail}
                disabled={isSending || selectedRecipients.length === 0}
              >
                {isSending ? 'Gönderiliyor...' : `Gönder (${selectedRecipients.length} kişi)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Önizleme Modalı */}
      {previewMode && (
        <div className="modal-overlay">
          <div className="modal-content email-preview-modal">
            <h3>E-posta Önizleme</h3>
            
            <div className="preview-section">
              <strong>Kime:</strong> {selectedRecipients.length} alıcı
            </div>
            
            <div className="preview-section">
              <strong>Konu:</strong> {emailData.subject}
            </div>
            
            <div className="preview-section">
              <strong>Mesaj:</strong>
              <div className="preview-message">
                {emailData.message}
                {emailData.includeUnsubscribeLink && (
                  <div className="unsubscribe-preview">
                    <hr />
                    <small>Bu e-postayı almak istemiyorsanız, <a href="#">buraya tıklayarak</a> aboneliğinizi iptal edebilirsiniz.</small>
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="action-button view-button"
                onClick={() => setPreviewMode(false)}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBulkEmail; 