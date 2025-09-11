// Utility functions for generating direct links to pages

/**
 * Genera un link directo a una sucursal específica
 * @param {string} locationId - ID de la sucursal (ej: 'cerro', 'nueva-cordoba')
 * @returns {string} - URL completa para linkear a la sucursal
 */
export const getSucursalLink = (locationId) => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#/sucursal/${locationId}`;
};

/**
 * Genera un link directo a la página de servicios
 * @returns {string} - URL completa para linkear a servicios
 */
export const getServiciosLink = () => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#/servicios`;
};

/**
 * Genera un link directo a una sección específica de la landing
 * @param {string} section - Sección de la landing (ej: 'about', 'services', 'testimonials')
 * @returns {string} - URL completa para linkear a la sección
 */
export const getLandingSectionLink = (section) => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#${section}`;
};

/**
 * Genera un link directo a la landing page
 * @returns {string} - URL completa para linkear a la landing
 */
export const getLandingLink = () => {
  const baseUrl = window.location.origin + window.location.pathname;
  return baseUrl;
};

/**
 * Copia un link al clipboard
 * @param {string} url - URL a copiar
 * @returns {Promise<boolean>} - true si se copió exitosamente
 */
export const copyLinkToClipboard = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (err) {
    // Fallback para navegadores que no soportan clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
};

/**
 * Obtiene todos los links de sucursales para usar en Google Maps o directorios
 * @returns {Array} - Array de objetos con información de cada sucursal y su link
 */
export const getAllSucursalLinks = () => {
  // Importar locations aquí para evitar dependencias circulares
  const { locations } = require('../data/locations');
  
  return locations.map(location => ({
    id: location.id,
    name: location.name,
    address: location.address,
    link: getSucursalLink(location.id),
    googleMapsUrl: location.googleMapsUrl
  }));
};

// Ejemplos de uso:
// Para Google Maps Business: getSucursalLink('cerro')
// Para redes sociales: getServiciosLink()
// Para email marketing: getLandingSectionLink('#about')
// Para QR codes: getSucursalLink('nueva-cordoba')
