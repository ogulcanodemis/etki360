import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'; // Stil dosyası için

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Menü</h3>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        {/* İletişim mesajları menü öğesi */}
        <li>
          <Link to="/admin/contact-forms">İletişim Mesajları</Link>
        </li>
        {/* Blog yazıları menü öğesi */}
        <li>
          <Link to="/admin/blog-posts">Blog Yazıları</Link>
        </li>
        {/* Toplu E-posta menü öğesi */}
        <li>
          <Link to="/admin/bulk-email">Toplu E-posta</Link>
        </li>
        {/* E-posta Listesi menü öğesi */}
        <li>
          <Link to="/admin/email-list">E-posta Listesi</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar; 