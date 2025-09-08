import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Zap, Star, Sun, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
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
    const totalSlides = services.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalSlides - visibleCount + 1)
    );
  };
  
  const prevSlide = () => {
    const totalSlides = services.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (totalSlides - visibleCount + 1)) % (totalSlides - visibleCount + 1)
    );
  };
  
  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);
  const services = [
    {
      icon: Sparkles,
      title: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y rejuvenecimiento para todo tipo de piel',
      features: ['Limpieza profunda', 'Hidratación intensiva', 'Anti-aging', 'Piel sensible'],
      image: 'facial'
    },
    {
      icon: Zap,
      title: 'Depilación Láser',
      description: 'Eliminación permanente del vello no deseado con tecnología de última generación',
      features: ['Láser Diodo', 'Indoloro', 'Resultados permanentes', 'Todo tipo de piel'],
      image: 'laser'
    },
    {
      icon: Star,
      title: 'Mesoterapia',
      description: 'Revitalización y nutrición profunda de la piel con microinyecciones',
      features: ['Vitaminas', 'Ácido hialurónico', 'Antioxidantes', 'Hidratación'],
      image: 'meso'
    },
    {
      icon: Sun,
      title: 'Radiofrecuencia',
      description: 'Tensado y reafirmación de la piel sin cirugía',
      features: ['Reafirmación', 'Reducción arrugas', 'Estimula colágeno', 'Sin dolor'],
      image: 'radio'
    }
  ];

  return (
    <section id="services" className="section-padding bg-praga-gray-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 
          className="font-bold mb-6"
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </h1>
          <p className="text-xl text-praga-gray-x-dark max-w-3xl mx-auto leading-relaxed">
            Descubrí nuestra amplia gama de tratamientos diseñados para realzar tu belleza 
            natural y brindarte la confianza que merecés
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative mb-6">
          {/* Carousel Container */}
          <div className="overflow-hidden pb-4">
            <div 
              className="flex transition-all duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-4 pb-6 ${visibleCount === 1 ? 'w-full' : 'w-1/2'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-praga-gray-dark/20"
                  >
                    {/* Service Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-praga-gray-dark to-praga-gray rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-praga-gray-dark to-praga-gray opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-br from-praga-gray-dark to-praga-gray transition-transform duration-300 scale-100 group-hover:scale-105" />
                        <service.icon className="w-8 h-8 text-white relative z-10" />
                      </div>
                      
                      {/* Image placeholder */}
                      <div className="w-20 h-20 bg-gradient-to-br from-praga-grey-dark to-praga-gray/30 rounded-xl opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                        {/* Placeholder for service image */}
                      </div>
                    </div>

                    {/* Service Content */}
                    <h1 className="font-bold text-praga-gray mb-4 transition-colors duration-300 relative inline-block">
                      {service.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-praga-gray-dark group-hover:w-full transition-all duration-300"></span>
                    </h1>
                    
                    <p className="text-praga-gray-dark font-body mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 group-hover:-translate-y-0.5 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                          <div className="w-2 h-2 bg-gradient-to-br from-praga-gray to-praga-gray rounded-full transition-all duration-300 group-hover:scale-125"></div>
                          <span className="text-sm text-praga-gray font-detail">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full btn-secondary group-hover:bg-praga-gray group-hover:border-praga-gray group-hover:text-white transition-all duration-300">
                      Más información
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gray hover:to-praga-gray-dark hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Servicio anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gray hover:to-praga-gray-dark hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Siguiente servicio"
          >
            <ChevronRight className="w-6 h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mb-8 space-x-3 mt-2">
          {Array.from({ length: services.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                index === currentIndex 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-110'
              }`}
              aria-label={`Ir al servicio ${index + 1}`}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-praga-gray-x-dark mb-8">
            ¿No encontrás el tratamiento que buscás?
          </p>
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Consulta personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
