import { motion } from 'framer-motion';
import { Tag, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedPromotions } from '../../data/promotions';
import { locations } from '../../data/locations';
import { useState, useEffect } from 'react';

const Promotions = () => {
  const featuredPromotions = getFeaturedPromotions();
  
  // Estado para el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  
  // Determinar la cantidad de elementos visibles según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 2);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Funciones para navegar por el carrusel
  const nextSlide = () => {
    const totalSlides = featuredPromotions.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalSlides - visibleCount + 1)
    );
  };
  
  const prevSlide = () => {
    const totalSlides = featuredPromotions.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (totalSlides - visibleCount + 1)) % (totalSlides - visibleCount + 1)
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
    <section id="promotions" className="section-padding bg-gradient-to-br from-praga-gray-dark/30 to-praga-gray-x-dark/20">
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
            {/* <Tag className="w-12 h-12 text-praga-gray mr-3" /> */}
            <h1 className="h1-light font-bold mb-6">
              Nuestras Promociones
            </h1>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Aprovechá nuestras ofertas especiales y viví la experiencia Praga 
            con descuentos únicos por tiempo limitado.
          </p>
        </motion.div>

        {/* Featured Promotions Carousel */}
        <div className="relative mb-6">
          {/* Carousel Container */}
          <div className="overflow-hidden pb-4">
            <div 
              className="flex transition-all duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {featuredPromotions.map((promo, index) => (
                <div 
                  key={promo.id} 
                  className={`flex-shrink-0 px-4 pb-6 ${visibleCount === 1 ? 'w-full' : 'w-1/2'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full"
                  >
                    {/* Promo Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-praga-gray-dark/20 to-praga-gray/30 flex items-center justify-center">
                      <div className="absolute top-4 right-4 bg-praga-gray-dark text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{promo.discount}
                      </div>
                      <div className="text-center">
                        <Tag className="w-12 h-12 text-praga-gray mb-2" />
                        <p className="text-praga-gray font-medium">{promo.image}</p>
                      </div>
                    </div>

                    {/* Promo Content */}
                    <div className="p-6">
                      <h1 className="text-xl font-heading font-bold text-praga-gray-x-dark mb-3">
                        {promo.title}
                      </h1>
                      
                      <p className="text-praga-gray mb-4 text-sm leading-relaxed">
                        {promo.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-lg text-praga-gray-dark line-through">
                          {promo.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-praga-gray-dark">
                          {promo.discountPrice}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center space-x-2 text-praga-gray-dark">
                          <Clock className="w-4 h-4" />
                          <span>Válido hasta {promo.validUntil}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-praga-gray-dark">
                          <MapPin className="w-4 h-4" />
                          <span>{getLocationNames(promo.locations)}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => handleWhatsAppPromo(promo)}
                        className="w-full btn-primary"
                      >
                        Consultanos por WhatsApp
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gray hover:to-praga-gray-dark hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Promoción anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gray hover:to-praga-gray-dark hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Siguiente promoción"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mb-8 space-x-3 mt-2">
          {Array.from({ length: featuredPromotions.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                index === currentIndex 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-110'
              }`}
              aria-label={`Ir a promoción ${index + 1}`}
            >
              <span className={`absolute inset-0 rounded-full border ${
                index === currentIndex 
                  ? 'bg-praga-gray border-praga-gray' 
                  : 'bg-transparent border-praga-gray-dark hover:bg-praga-gray-x-dark/20'
              } transition-all duration-300`}></span>
              {index === currentIndex && (
                <span className="absolute inset-0 rounded-full border border-praga-gray animate-ping opacity-50"></span>
              )}
            </button>
          ))}
        </div>

        {/* CTA to see all promotions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <div className="bg-praga-gray-dark rounded-3xl p-8 shadow-2xl">
            <h1 className=" h1-light text-2xl font-heading font-bold mb-4 ">
              ¿Querés ver todas nuestras promociones?
            </h1>
            <p className="text-lg mb-6 text-praga-white">
              Cada sucursal tiene ofertas exclusivas. Elegí tu ubicación preferida 
              y descubrí todas las promociones disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {locations.map((location) => (
                <a
                  key={location.id}
                  href={`#${location.id}-detail`}
                  className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
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
