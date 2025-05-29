import React from 'react';
import { Outlet } from 'react-router-dom'; // İç içe rotaları render etmek için
import AdminSidebar from './AdminSidebar'; // AdminSidebar bileşenini import et
import './AdminLayout.css'; // Stil dosyası için

const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <AdminSidebar />
      <div className="admin-content-area">
        <Outlet /> {/* İç içe rotaların (dashboard vb.) render edileceği yer */}
      </div>
    </div>
  );
};

export default AdminLayout; 