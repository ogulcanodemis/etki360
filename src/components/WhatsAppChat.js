import React, { useState, useEffect } from 'react';
import './WhatsAppChat.css';

const WhatsAppChat = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    "Merhaba! Size nasıl yardımcı olabiliriz? 👋",
    "Projeleriniz hakkında konuşalım! 💬",
    "Ücretsiz danışmanlık için yazın! 🚀",
    "Hemen teklif almak için tıklayın! ✨"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    // İlk mesaj balonu 3 saniye sonra göster
    const initialTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    // Her 15 saniyede bir mesaj balonu göster
    const interval = setInterval(() => {
      setShowBubble(true);
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 15000);

    // 5 saniye sonra mesaj balonunu gizle
    const bubbleTimer = setInterval(() => {
      if (showBubble) {
        setTimeout(() => setShowBubble(false), 5000);
      }
    }, 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearInterval(bubbleTimer);
    };
  }, [showBubble, messages.length]);

  const handleWhatsAppClick = () => {
    // Ana WhatsApp numarasına yönlendir
    window.open('https://wa.me/905421553315?text=Merhaba! Web sitenizden geliyorum, projelerim hakkında bilgi almak istiyorum.', '_blank');
    setShowBubble(false);
  };

  const handleCloseBubble = () => {
    setShowBubble(false);
  };

  const handleMinimize = () => {
    setIsVisible(false);
    // 30 saniye sonra tekrar göster
    setTimeout(() => setIsVisible(true), 30000);
  };

  if (!isVisible) {
    return (
      <div className="whatsapp-minimized" onClick={() => setIsVisible(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="whatsapp-chat-widget">
      {/* Mesaj Balonu */}
      {showBubble && (
        <div className="whatsapp-message-bubble">
          <button 
            className="whatsapp-bubble-close"
            onClick={handleCloseBubble}
            aria-label="Mesajı kapat"
          >
            ×
          </button>
          <div className="whatsapp-bubble-content">
            <div className="whatsapp-bubble-avatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <div className="whatsapp-bubble-text">
              <div className="whatsapp-bubble-title">etki360 Destek</div>
              <div className="whatsapp-bubble-message">{messages[currentMessage]}</div>
              <div className="whatsapp-bubble-time">Şimdi aktif</div>
            </div>
          </div>
          <button 
            className="whatsapp-bubble-reply"
            onClick={handleWhatsAppClick}
          >
            Yanıtla
          </button>
        </div>
      )}

      {/* Ana WhatsApp Butonu */}
      <div className="whatsapp-chat-button">
        <button 
          className="whatsapp-main-btn"
          onClick={handleWhatsAppClick}
          aria-label="WhatsApp ile iletişime geç"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <div className="whatsapp-pulse-ring"></div>
        </button>
        
        <button 
          className="whatsapp-minimize-btn"
          onClick={handleMinimize}
          aria-label="WhatsApp widget'ını küçült"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat; 