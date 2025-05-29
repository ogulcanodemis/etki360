import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactQuill from 'react-quill'; // React-Quill importu
// import 'react-quill/dist/quill.snow.css'; // Quill stilleri
import { CKEditor } from '@ckeditor/ckeditor5-react'; // CKEditor 5 React component importu
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; // CKEditor 5 Classic build importu
// import '@ckeditor/ckeditor5-build-classic/build/ckeditor.css'; // CKEditor 5 stilleri
import './AdminPage.css'; // Genel admin sayfası stili için

const AdminBlogPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Sayfa numarası state'i
  const [postsPerPage] = useState(10); // Sayfa başına yazı sayısı (şimdilik sabit)
  const [totalPosts, setTotalPosts] = useState(0); // Toplam yazı sayısı state'i

  // CRUD İşlemleri için State'ler
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal açık mı?
  const [editingPostId, setEditingPostId] = useState(null); // Düzenlenen yazının ID'si (yeni yazı için null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    publish_date: '',
    slug: ''
  }); // Form verileri state'i
  const [isSaving, setIsSaving] = useState(false); // Kaydetme işlemi sürüyor mu?

  // Yazıları backend'den çekme fonksiyonu
  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Yetkilendirme tokenını ekleyebilirsiniz (PrivateRoute ile entegrasyon)
      const token = localStorage.getItem('adminToken'); // Örnek olarak localStorage'dan alıyoruz

      // API isteğine sayfa ve limit parametrelerini ekle
      const response = await fetch(`/backend/api/admin/blog_posts.php?action=list&page=${currentPage}&limit=${postsPerPage}`, {
        headers: {
          'Authorization': `Bearer ${token}` // Yetkilendirme başlığını ekle (JWT veya benzeri kullanılıyorsa)
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setPosts(result.data);
        setTotalPosts(result.total);
      } else {
        setError(result.message || 'Blog yazıları yüklenemedi');
      }

    } catch (err) {
      console.error('Fetch posts error:', err);
      setError('Blog yazıları yüklenirken bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  // Component yüklendiğinde veya sayfa değiştiğinde yazıları çek
  useEffect(() => {
    fetchPosts();
  }, [currentPage]); // currentPage değiştiğinde yeniden çek

  // Form input değişikliklerini yönet (Quill handler'ı genel inputlara çevrildi)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Quill editör içeriği değişimini yönet (CKEditor için güncellendi)
  const handleContentChange = (event, editor) => {
    const data = editor.getData();
    setFormData(prevState => ({
      ...prevState,
      content: data
    }));
  };

  // Modal açma/kapatma fonksiyonları
  const openModal = (post = null) => {
    if (post) {
      // Düzenleme modu: Mevcut yazı verilerini form state'ine yükle
      setEditingPostId(post.id);
      setFormData({
        title: post.title || '',
        content: post.content || '',
        author: post.author || '',
        category: post.category || '',
        publish_date: post.publish_date || '',
        slug: post.slug || '' // Slug gösterilebilir ama düzenlenmesi isteğe bağlı olabilir
      });
    } else {
      // Yeni yazı modu: Formu sıfırla
      setEditingPostId(null);
      setFormData({
        title: '',
        content: '',
        author: '',
        category: '',
        publish_date: '',
        slug: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPostId(null);
    setFormData({
      title: '',
      content: '',
      author: '',
      category: '',
      publish_date: '',
      slug: ''
    });
     setError(null); // Modal kapatılırken hataları temizle
  };

  // Blog yazısı kaydetme (yeni oluşturma veya güncelleme) fonksiyonu
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    const method = editingPostId ? 'POST' : 'POST'; // Backend PUT/POST kabul ediyor
    const action = editingPostId ? 'update' : 'create';
    const url = `/backend/api/admin/blog_posts.php?action=${action}`;
    const postData = editingPostId ? { ...formData, id: editingPostId } : formData; // Güncelleme için ID ekle

    try {
      const token = localStorage.getItem('adminToken');

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message); // Başarı mesajı göster
        closeModal(); // Modalı kapat
        fetchPosts(); // Listeyi yeniden çekerek güncelle
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

  // Yeni blog yazısı ekle sayfasına yönlendir
  const handleAddNew = () => {
    navigate('/admin/blog-posts/create');
  };

  // Blog yazısını düzenle sayfasına yönlendir
  const handleEdit = (id) => {
    navigate(`/admin/blog-posts/edit/${id}`);
  };

  // Yazı silme fonksiyonu
  const handleDelete = async (id) => {
      if (window.confirm('Bu blog yazısını silmek istediğinize emin misiniz?')) {
          try {
               const token = localStorage.getItem('adminToken'); // Örnek olarak localStorage'dan alıyoruz

               const response = await fetch('/backend/api/admin/blog_posts.php?action=delete', {
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
                   fetchPosts(); // Listeyi yeniden çekerek güncelle
               } else {
                   alert(result.message || 'Yazı silinirken hata oluştu');
               }
          } catch (err) {
               console.error('Delete post error:', err);
               alert('Yazı silinirken bir hata oluştu.');
          }
      }
  };

  if (isLoading) {
    return (
      <div className="admin-page-container">
        <h2>Blog Yazıları</h2>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page-container">
        <h2>Blog Yazıları</h2>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      <h2>Blog Yazıları</h2>

      {/* Yeni Yazı Ekle Butonu */}
      <button className="action-button edit-button" onClick={handleAddNew}>Yeni Yazı Ekle</button>

      {isLoading && <p>Yükleniyor...</p>}
      {error && <div className="error-message">{error}</div>}

      {!isLoading && !error && posts.length === 0 ? (
        <p>Henüz blog yazısı bulunmuyor.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Başlık</th>
              <th>Yazar</th>
              <th>Kategori</th>
              <th>Yayın Tarihi</th>
              <th>Oluşturulma Tarihi</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.category}</td>
                <td>{post.publish_date}</td>
                <td>{post.created_at}</td>
                <td>
                  {/* Görüntüle butonu - Şimdilik sadece yer tutucu */}
                   <button 
                      onClick={() => alert('Detay görüntüleme henüz aktif değil:' + post.id)}
                      className="action-button view-button"
                    >
                      Görüntüle
                    </button>
                  {/* Düzenle butonu */}
                   <button 
                      onClick={() => handleEdit(post.id)}
                      className="action-button edit-button"
                    >
                      Düzenle
                    </button>
                  {/* Sil butonu */}
                <button 
                  onClick={() => handleDelete(post.id)}
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
        <span>Sayfa {currentPage} / {Math.ceil(totalPosts / postsPerPage)}</span>
        <button
          className="action-button"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(totalPosts / postsPerPage)))}
          disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
        >
          Sonraki Sayfa
        </button>
      </div>

      {/* Yeni Yazı/Düzenleme Modalı */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{editingPostId ? 'Yazıyı Düzenle' : 'Yeni Blog Yazısı Ekle'}</h3>
            
            {isSaving && <p>Kaydediliyor...</p>}
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">Başlık:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="author">Yazar:</label>
                <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="category">Kategori:</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="publish_date">Yayın Tarihi:</label>
                <input type="date" id="publish_date" name="publish_date" value={formData.publish_date} onChange={handleInputChange} />
              </div>
               {/* Slug alanı - İsteğe bağlı veya otomatik */}
               {!editingPostId && (
                 <div className="form-group">
                   <label htmlFor="slug">Slug (Opsiyonel):</label>
                   <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                 </div>
               )}
              <div className="form-group">
                <label htmlFor="content">İçerik:</label>
                {/* React-Quill Editör */}
                {/* CKEditor 5 Editör */}
                <CKEditor
                  editor={ ClassicEditor }
                  data={formData.content}
                  onChange={ handleContentChange }
                  config={{
                    // CKEditor yapılandırma seçenekleri (isteğe bağlı)
                    // Örneğin: toolbar, language, imageUpload vb.
                  }}
                />
                {/* <textarea id="content" name="content" value={formData.content} onChange={handleInputChange} required rows="10"></textarea> */}
              </div>

              <button type="submit" className="action-button edit-button" disabled={isSaving}>Kaydet</button>
              <button type="button" className="action-button view-button" onClick={closeModal} disabled={isSaving}>İptal</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminBlogPosts; 