// Promociones por sucursal
export const promotions = [
  {
    id: 'promo-1',
    title: '50% OFF en Depilación Láser',
    description: 'Primera sesión con descuento especial para nuevos clientes',
    originalPrice: '$15.000',
    discountPrice: '$7.500',
    discount: '50%',
    validUntil: '31/08/2025',
    locations: ['nueva-cordoba', 'zona-norte'], // Disponible en ambas
    image: 'promo-depilacion.jpg',
    terms: 'Válido solo para nuevos clientes. No acumulable con otras promociones.',
    featured: true
  },
  {
    id: 'promo-2',
    title: 'Combo Facial Completo',
    description: 'Limpieza profunda + Hidratación + Radiofrecuencia',
    originalPrice: '$25.000',
    discountPrice: '$18.000',
    discount: '28%',
    validUntil: '15/08/2025',
    locations: ['nueva-cordoba'],
    image: 'promo-facial.jpg',
    terms: 'Incluye consulta personalizada. Válido de lunes a viernes.',
    featured: true
  },
  {
    id: 'promo-3',
    title: 'Lifting de Pestañas + Cejas',
    description: 'Tratamiento completo para una mirada perfecta',
    originalPrice: '$12.000',
    discountPrice: '$9.000',
    discount: '25%',
    validUntil: '20/08/2025',
    locations: ['zona-norte'],
    image: 'promo-pestanas.jpg',
    terms: 'Incluye mantenimiento gratuito a los 15 días.',
    featured: true
  },
  {
    id: 'promo-4',
    title: '3x2 en Masajes Reductores',
    description: 'Paga 2 sesiones y llevate 3',
    originalPrice: '$18.000',
    discountPrice: '$12.000',
    discount: '33%',
    validUntil: '30/08/2025',
    locations: ['nueva-cordoba', 'zona-norte'],
    image: 'promo-masajes.jpg',
    terms: 'Las 3 sesiones deben realizarse dentro de los 60 días.',
    featured: false
  },
  {
    id: 'promo-5',
    title: 'Pack Novias: Prep. Completa',
    description: 'Facial + Depilación + Manicura + Pedicura',
    originalPrice: '$35.000',
    discountPrice: '$25.000',
    discount: '29%',
    validUntil: '31/12/2025',
    locations: ['nueva-cordoba'],
    image: 'promo-novias.jpg',
    terms: 'Reservá tu con 30 días de anticipación. Incluye prueba previa.',
    featured: false
  },
  {
    id: 'promo-6',
    title: 'Mesoterapia Capilar',
    description: 'Tratamiento intensivo para fortalecimiento capilar',
    originalPrice: '$20.000',
    discountPrice: '$14.000',
    discount: '30%',
    validUntil: '25/08/2025',
    locations: ['zona-norte'],
    image: 'promo-capilar.jpg',
    terms: 'Incluye diagnóstico capilar gratuito. Mínimo 4 sesiones.',
    featured: false
  }
];

// Promociones destacadas para la landing principal
export const getFeaturedPromotions = () => {
  return promotions.filter(promo => promo.featured);
};

// Promociones por sucursal
export const getPromotionsByLocation = (locationId) => {
  return promotions.filter(promo => promo.locations.includes(locationId));
};
