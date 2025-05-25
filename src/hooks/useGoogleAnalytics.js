import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking hook
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics yüklü mü kontrol et
    if (typeof window.gtag !== 'undefined') {
      // Sayfa görüntülenmesini takip et
      window.gtag('config', 'G-7PB75S6K9Q', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);
};

// Event tracking fonksiyonu
export const trackEvent = (action, category, label = null, value = null) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Özel event'ler için yardımcı fonksiyonlar
export const trackButtonClick = (buttonName, location = null) => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

export const trackFormSubmit = (formName) => {
  trackEvent('submit', 'form', formName);
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', 'navigation', pageName);
};

export const trackContactAction = (action) => {
  trackEvent(action, 'contact', action);
};

export const trackBlogAction = (action, postTitle = null) => {
  trackEvent(action, 'blog', postTitle);
};

export const trackServiceView = (serviceName) => {
  trackEvent('view', 'service', serviceName);
}; 