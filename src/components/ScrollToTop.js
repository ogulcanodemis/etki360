import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa değiştiğinde scroll pozisyonunu en üste getir
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Yumuşak scroll animasyonu
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop; 