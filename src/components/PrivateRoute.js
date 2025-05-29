import React from 'react';
import { Navigate } from 'react-router-dom';

// Bu bileşen, kullanıcının giriş yapıp yapmadığını kontrol eder
// Eğer giriş yapmadıysa, login sayfasına yönlendirir
const PrivateRoute = ({ children }) => {
  // Gerçek uygulamada burada kullanıcının oturum bilgisi (token vb.) kontrol edilir
  // Örneğin, localStorage'da token var mı diye bakılabilir
  const isAuthenticated = localStorage.getItem('adminToken'); // Örnek kontrol

  if (!isAuthenticated) {
    // Eğer kimlik doğrulanmamışsa, login sayfasına yönlendir
    return <Navigate to="/admin/login" replace />;
  }

  // Kimlik doğrulanmışsa, children'ı (korunmuş bileşeni) render et
  return children;
};

export default PrivateRoute; 