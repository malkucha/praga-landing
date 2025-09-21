import { useEffect } from 'react';

// Hook para tracking de Google Ads
export const useGoogleAds = () => {
  
  // Función para trackear conversiones
  const trackConversion = (conversionLabel, value = null, currency = 'ARS') => {
    if (typeof window !== 'undefined' && window.gtag) {
      const conversionData = {
        send_to: `AW-578293251/${conversionLabel}`,
        transaction_id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };

      // Agregar valor si se proporciona
      if (value) {
        conversionData.value = value;
        conversionData.currency = currency;
      }

      window.gtag('event', 'conversion', conversionData);
      
      console.log('Google Ads conversion tracked:', conversionData);
    }
  };

  // Función para trackear eventos personalizados
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
      
      console.log('Google Ads event tracked:', eventName, parameters);
    }
  };

  return {
    trackConversion,
    trackEvent
  };
};

// Eventos específicos para tu centro de estética
export const CONVERSION_LABELS = {
  APPOINTMENT_REQUEST: 'appointment_request', // Cuando alguien solicita una cita
  PHONE_CALL: 'phone_call', // Cuando alguien llama
  WHATSAPP_CLICK: 'whatsapp_click', // Cuando hacen clic en WhatsApp
  SERVICE_INQUIRY: 'service_inquiry', // Consulta sobre un servicio específico
  LOCATION_VIEW: 'location_view' // Cuando ven información de una sucursal
};