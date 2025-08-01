import { motion } from 'framer-motion';
import { Tag, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedPromotions } from '../../data/promotions';
import { locations } from '../../data/locations';
import { useState, useEffect } from 'react';

const Promotions = () => {
  const featuredPromotions = getFeaturedPromotions();
  
  // Estado para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  // Determinar la cantidad de elementos visibles según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Funciones para navegar por el carrusel
  const nextSlide = () => {
    const maxIndex = Math.max(0, featuredPromotions.length - visibleCount);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    const maxIndex = Math.max(0, featuredPromotions.length - visibleCount);
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };
  
  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);

  const getLocationNames = (locationIds) => {
    return locationIds.map(id => {
      const location = locations.find(loc => loc.id === id);
      return location ? location.name.replace('PRAGA | ', '') : '';
    }).join(' y ');
  };

  const handleWhatsAppPromo = (promo) => {
    const locationId = promo.locations[0]; // Usar la primera ubicación
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      const message = `Hola! Me interesa la promoción "${promo.title}" en ${location.name}. ¿Podrían darme más información?`;
      const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="promotions" className="section-padding bg-gradient-to-br from-praga-beige/30 to-praga-rose/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Tag className="w-12 h-12 text-praga-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Nuestras <span className="text-gradient">Promociones</span>
            </h2>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Aprovechá nuestras ofertas especiales y viví la experiencia Praga 
            con descuentos únicos por tiempo limitado.
          </p>
        </motion.div>

        {/* Featured Promotions Carousel */}
        <div className="relative mb-20">
          {/* Carousel Container */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out ml-[-12px] mr-[-12px]" 
              style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24 / visibleCount}px))` }}
            >
              {featuredPromotions.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex-shrink-0`}
                  style={{ width: `calc(${100 / visibleCount}% - 24px)`, margin: '0 12px' }}
                >
                  {/* Promo Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-praga-gold/20 to-praga-rose/30 flex items-center justify-center">
                    <div className="absolute top-4 right-4 bg-praga-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{promo.discount}
                    </div>
                    <div className="text-center">
                      <Tag className="w-12 h-12 text-praga-gold mb-2" />
                      <p className="text-praga-gray font-medium">{promo.image}</p>
                    </div>
                  </div>

                  {/* Promo Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-praga-gray mb-3">
                      {promo.title}
                    </h3>
                    
                    <p className="text-praga-gray-light mb-4 text-sm leading-relaxed">
                      {promo.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-lg text-praga-gray-light line-through">
                        {promo.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-praga-gold">
                        {promo.discountPrice}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center space-x-2 text-praga-gray-light">
                        <Clock className="w-4 h-4" />
                        <span>Válido hasta {promo.validUntil}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-praga-gray-light">
                        <MapPin className="w-4 h-4" />
                        <span>{getLocationNames(promo.locations)}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleWhatsAppPromo(promo)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                    >
                      <span>Consultanos por WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 left-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white md:bg-transparent border border-praga-gold shadow-lg z-10 hover:bg-praga-gold hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 right-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white md:bg-transparent border border-praga-gold shadow-lg z-10 hover:bg-praga-gold hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Carousel Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: featuredPromotions.length - visibleCount + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                  i === currentIndex 
                    ? 'scale-110' 
                    : 'scale-100 hover:scale-110'
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              >
                <span className={`absolute inset-0 rounded-full border ${
                  i === currentIndex 
                    ? 'bg-praga-gray border-praga-gray' 
                    : 'bg-transparent border-praga-gold hover:bg-praga-gold/20'
                } transition-all duration-300`}></span>
                {i === currentIndex && (
                  <span className="absolute inset-0 rounded-full border border-praga-gray animate-ping opacity-50"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA to see all promotions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-praga-gray rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold mb-4 text-praga-gold">
              ¿Querés ver todas nuestras promociones?
            </h3>
            <p className="text-lg mb-6 text-praga-white">
              Cada sucursal tiene ofertas exclusivas. Elegí tu ubicación preferida 
              y descubrí todas las promociones disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {locations.map((location) => (
                <a
                  key={location.id}
                  href={`#${location.id}-detail`}
                  className="btn-secondary inline-block font-semibold hover:scale-105 transition-all duration-300"
                >
                  Ver promociones en {location.name.replace('PRAGA | ', '')}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotions;
