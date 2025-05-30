import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AdminPage.css';

const AdminBlogEditor = () => {
  const { id } = useParams(); // URL'den ID'yi al (yeni ekleme için undefined olacak)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    publish_date: '',
    slug: ''
  });
  
  // Textarea referansı
  const textareaRef = useRef(null);

  // Mevcut blog yazısını çekme (düzenleme modu için)
  useEffect(() => {
    if (id) {
      // Düzenleme modu: Mevcut yazıyı çek
      fetchBlogPost();
    } else {
      // Ekleme modu: Formu boş bırak
      setIsLoading(false);
    }
  }, [id]);

  const fetchBlogPost = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/backend/api/admin/blog_posts.php?action=view&id=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setFormData({
          title: result.data.title || '',
          content: result.data.content || '',
          author: result.data.author || '',
          category: result.data.category || '',
          publish_date: result.data.publish_date || '',
          slug: result.data.slug || ''
        });
      } else {
        setError(result.message || 'Blog yazısı yüklenemedi');
      }
    } catch (err) {
      console.error('Fetch post error:', err);
      setError('Blog yazısı yüklenirken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  // Form input değişikliklerini yönet
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // HTML düğmelerinin işlevleri
  const insertHTML = (tag, attributes = {}) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    let attributesText = '';
    
    // Attributes'ları string olarak oluştur
    for (const key in attributes) {
      attributesText += ` ${key}="${attributes[key]}"`;
    }
    
    let newHTML;
    if (tag === 'img') {
      // Resim için içerik gerekmiyor
      newHTML = `<${tag}${attributesText} />`;
    } else {
      // Diğer taglar için seçili metni etiketler arasına koy
      newHTML = `<${tag}${attributesText}>${selectedText}</${tag}>`;
    }
    
    // Yeni içeriği oluştur
    const newContent = formData.content.substring(0, start) + newHTML + formData.content.substring(end);
    
    // State'i güncelle
    setFormData(prevState => ({
      ...prevState,
      content: newContent
    }));
    
    // Sonraki render'dan sonra fokus ayarla
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + newHTML.length, start + newHTML.length);
    }, 0);
  };
  
  // Kalın yapmak için
  const handleBold = () => {
    insertHTML('strong');
  };
  
  // İtalik yapmak için
  const handleItalic = () => {
    insertHTML('em');
  };
  
  // Link eklemek için
  const handleLink = () => {
    const url = prompt('Link URL\'si girin:', 'https://');
    if (url) {
      insertHTML('a', { href: url, target: '_blank' });
    }
  };
  
  // Resim eklemek için
  const handleImage = () => {
    const url = prompt('Resim URL\'si girin:', 'https://');
    if (url) {
      const alt = prompt('Resim açıklaması (alt text):', '');
      insertHTML('img', { src: url, alt: alt || '', style: 'max-width: 100%' });
    }
  };
  
  // Başlık eklemek için
  const handleHeading = () => {
    insertHTML('h2');
  };
  
  // Paragraf eklemek için
  const handleParagraph = () => {
    insertHTML('p');
  };

  // Blog yazısı kaydetme (yeni oluşturma veya güncelleme) fonksiyonu
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    const action = id ? 'update' : 'create';
    const url = `/backend/api/admin/blog_posts.php?action=${action}`;
    const postData = id ? { ...formData, id: id } : formData;

    try {
      const token = localStorage.getItem('adminToken');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        // Başarılı olduğunda blog listesine geri dön
        navigate('/admin/blog-posts');
      } else {
        setError(result.message || 'Kaydetme sırasında bir hata oluştu.');
      }
    } catch (err) {
      console.error('Save post error:', err);
      setError('Kaydetme sırasında bir hata oluştu.');
    } finally {
      setIsSaving(false);
    }
  };

  // İptal butonuna tıklandığında blog listesine geri dön
  const handleCancel = () => {
    navigate('/admin/blog-posts');
  };

  if (isLoading) {
    return (
      <div className="admin-page-container">
        <h2>{id ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}</h2>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      <h2>{id ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleFormSubmit} className="blog-editor-form">
        <div className="form-group">
          <label htmlFor="title">Başlık:</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange} 
            required 
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Yazar:</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            value={formData.author} 
            onChange={handleInputChange} 
            required 
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Kategori:</label>
          <input 
            type="text" 
            id="category" 
            name="category" 
            value={formData.category} 
            onChange={handleInputChange} 
            required 
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publish_date">Yayın Tarihi:</label>
          <input 
            type="date" 
            id="publish_date" 
            name="publish_date" 
            value={formData.publish_date} 
            onChange={handleInputChange} 
            className="form-control"
          />
        </div>
        
        {!id && (
          <div className="form-group">
            <label htmlFor="slug">Slug (Opsiyonel):</label>
            <input 
              type="text" 
              id="slug" 
              name="slug" 
              value={formData.slug} 
              onChange={handleInputChange} 
              className="form-control"
            />
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="content">İçerik:</label>
          <div className="editor-toolbar">
            <button type="button" onClick={handleBold} title="Kalın"><strong>B</strong></button>
            <button type="button" onClick={handleItalic} title="İtalik"><em>I</em></button>
            <button type="button" onClick={handleHeading} title="Başlık">H</button>
            <button type="button" onClick={handleParagraph} title="Paragraf">P</button>
            <button type="button" onClick={handleLink} title="Link">Link</button>
            <button type="button" onClick={handleImage} title="Resim">Resim</button>
          </div>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="form-control editor-textarea"
            rows="15"
            ref={textareaRef}
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="action-button edit-button" 
            disabled={isSaving}
          >
            {isSaving ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
          <button 
            type="button" 
            className="action-button view-button" 
            onClick={handleCancel}
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogEditor; 