import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  
  // Determinar la cantidad de elementos visibles según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Funciones para navegar por el carrusel
  const nextSlide = () => {
    const totalSlides = featuredProducts.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalSlides - visibleCount + 1)
    );
  };
  
  const prevSlide = () => {
    const totalSlides = featuredProducts.length;
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + (totalSlides - visibleCount + 1)) % (totalSlides - visibleCount + 1)
    );
  };
  
  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleCount]);
  
  const featuredProducts = [
    {
      name: 'Serum Vitamina C',
      price: '$2.500',
      rating: 5,
      image: 'serum',
      description: 'Ilumina y protege tu piel'
    },
    {
      name: 'Crema Hidratante',
      price: '$1.800',
      rating: 5,
      image: 'cream',
      description: 'Hidratación profunda 24h'
    },
    {
      name: 'Mascarilla Facial',
      price: '$950',
      rating: 4,
      image: 'mask',
      description: 'Purifica y revitaliza'
    },
    {
      name: 'Exfoliante Enzimático',
      price: '$1.350',
      rating: 5,
      image: 'exfoliante',
      description: 'Renovación celular suave'
    },
    {
      name: 'Contorno de Ojos',
      price: '$2.200',
      rating: 4,
      image: 'contorno',
      description: 'Reduce ojeras y arrugas'
    }
  ];

  return (
    <section id="shop" className="section-padding bg-white">
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
            <ShoppingBag className="w-12 h-12 text-praga-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Nuestra <span className="text-gradient">Tienda</span>
            </h2>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Productos de cosmética profesional seleccionados especialmente para 
            potenciar los resultados de tus tratamientos en casa
          </p>
        </motion.div>

        {/* Products Carousel */}
        <div className="relative mb-6">
          {/* Carousel Container */}
          <div className="overflow-hidden pb-4">
            <div 
              className="flex transition-all duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {featuredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-4 pb-6 ${
                    visibleCount === 1 ? 'w-full' : 
                    visibleCount === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-praga-gold/20"
                  >
                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-praga-white to-praga-beige-dark rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-praga-gold/20 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-praga-gold" />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-praga-gray mb-2 transition-colors duration-300 relative inline-block">
                        {product.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-praga-gold group-hover:w-full transition-all duration-300"></span>
                      </h3>
                      
                      <p className="text-praga-gray-light text-sm mb-3">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating 
                                ? 'text-praga-gold fill-current' 
                                : 'text-praga-gray-light'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Price */}
                      <p className="text-2xl font-bold text-praga-gold mb-4">
                        {product.price}
                      </p>

                      {/* Add to Cart Button */}
                      <button className="w-full btn-secondary group-hover:bg-praga-gold group-hover:border-praga-gold group-hover:text-white transition-all duration-300">
                        Agregar al carrito
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gold hover:to-praga-rose hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Producto anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group z-10 bg-white md:bg-transparent border border-praga-gray-light/30 hover:bg-gradient-to-r hover:from-praga-gold hover:to-praga-rose hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label="Siguiente producto"
          >
            <ChevronRight className="w-6 h-6 text-praga-gray group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mb-8 space-x-3 mt-2">
          {Array.from({ length: featuredProducts.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                index === currentIndex 
                  ? 'scale-110' 
                  : 'scale-100 hover:scale-110'
              }`}
              aria-label={`Ir al producto ${index + 1}`}
            >
              <span className={`absolute inset-0 rounded-full border ${
                index === currentIndex 
                  ? 'bg-praga-gray border-praga-gray' 
                  : 'bg-transparent border-praga-gold hover:bg-praga-gold/20'
              } transition-all duration-300`}></span>
              {index === currentIndex && (
                <span className="absolute inset-0 rounded-full border border-praga-gray animate-ping opacity-50"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tienda Nube Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-praga-gold/10 to-praga-rose/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-display font-bold text-praga-gray mb-6">
            Explora toda nuestra colección
          </h3>
          
          <p className="text-lg text-praga-gray-light mb-8 max-w-2xl mx-auto">
            Descubrí nuestra línea completa de productos de cosmética profesional. 
            Envíos a todo el país y asesoramiento personalizado incluido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://pragaestetica.mitiendanube.com/"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visitar tienda online</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <div className="flex items-center space-x-2 text-praga-gray-light">
              <div className="w-2 h-2 bg-praga-gold rounded-full animate-pulse"></div>
              <span className="text-sm">Envío gratis en compras superiores a $5.000</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Envío gratuito</h4>
            <p className="text-sm text-praga-gray-light">En compras superiores a $5.000</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-rose/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Calidad premium</h4>
            <p className="text-sm text-praga-gray-light">Productos de cosmética profesional</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-beige-dark/40 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Asesoramiento</h4>
            <p className="text-sm text-praga-gray-light">Consulta personalizada incluida</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
