import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  // Reseñas reales de Google Maps (selección de las más recientes con mejor puntuación)
  const testimonials = [
    {
      name: 'Melisa Robino',
      date: '1 mes atrás',
      service: 'Tratamiento facial',
      rating: 5,
      text: 'El lugar es hermoso, muy cálido, atendido por sus dueñas. Las instalaciones son impecables y los tratamientos excelentes. Súper recomendable!'
    },
    {
      name: 'Carolina Pereyra',
      date: '2 meses atrás',
      service: 'Limpieza profunda',
      rating: 5,
      text: 'Un espacio de tranquilidad y relax. Excelente atención y cuidado al cliente. Me encantaron los resultados del tratamiento facial.'
    },
    {
      name: 'Florencia Sánchez',
      date: '2 meses atrás',
      service: 'Tratamiento corporal',
      rating: 5,
      text: 'Hace tiempo que vengo a Praga y siempre salgo muy satisfecha. Las chicas son super profesionales y te asesoran con el tratamiento que más se adecua a lo que necesitás.'
    },
    {
      name: 'Luciana Martinelli',
      date: '3 meses atrás',
      service: 'Masaje relajante',
      rating: 5,
      text: 'Experiencia increíble! Desde que entré me hicieron sentir cómoda. El ambiente es hermoso y relajante. Los resultados superaron mis expectativas.'
    },
    {
      name: 'María José Gonzalez',
      date: '3 meses atrás',
      service: 'Depilación definitiva',
      rating: 5,
      text: 'Primera vez que voy y me encantó! Las profesionales muy atentas y los tratamientos muy efectivos. El lugar es precioso y con muy buena energía.'
    }
  ];

  // Simular carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingReviews(false);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-praga-gray-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="h1-light font-bold mb-6">
            Lo que dicen nuestras <span className="text-gradient">clientas</span>
          </h1>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestras clientas es nuestra mayor recompensa. 
            Descubrí sus experiencias y transformaciones.
          </p>
        </motion.div>

        {isLoadingReviews ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-praga-gray/30 border-t-praga-gray rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-praga-gray-light">Cargando reseñas...</p>
          </div>
        ) : (
          <div className="mb-16">
            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-praga-gray-dark to-praga-rose rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-praga-gray text-center font-body leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating 
                            ? 'text-praga-gold fill-current' 
                            : 'text-praga-gray-light'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-praga-gray-light to-praga-gray-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-praga-gray-light font-display">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-praga-gray mb-1">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    
                    <p className="text-praga-gray-light mb-1">
                      {testimonials[currentTestimonial].service}
                    </p>
                    
                    <p className="text-sm text-praga-gray-light/70">
                      {testimonials[currentTestimonial].date}
                    </p>
                  </div>
                  
                  {/* Google Logo */}
                  <div className="mt-6 flex justify-end">
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                      alt="Google" 
                      className="h-5 w-auto opacity-50"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-praga-gray hover:text-white transition-all duration-300 group z-10"
                aria-label="Anterior reseña"
              >
                <ChevronLeft className="w-6 h-6 text-praga-gray group-hover:text-white" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-praga-gray hover:text-white transition-all duration-300 group z-10"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-6 h-6 text-praga-gray group-hover:text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-praga-gray-dark scale-125' 
                      : 'bg-praga-gray-light hover:bg-praga-gray'
                  }`}
                  aria-label={`Ir a reseña ${index + 1}`}
                />
              ))}
            </div>

            {/* "Ver más reseñas" button */}
            <div className="text-center mt-10">
              <a 
                href="https://www.google.com/maps/place/PRAGA+Centro+de+Est%C3%A9tica/@-31.4219482,-64.187786,17z/data=!4m8!3m7!1s0x9432a34dca8bad43:0x10464912346aba86!8m2!3d-31.4219482!4f-64.187786!9m1!1b1!16s%2Fg%2F11j0ytq1z7?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-praga-gray text-praga-gray-dark hover:bg-praga-gray-light font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg border border-praga-gray-dark/20"
              >
                Ver todas las reseñas en Google Maps
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-display font-bold text-praga-gray-light mb-2">
              500+
            </div>
            <p className="text-praga-gray-light">Clientas felices</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gray-light mb-2">
              98%
            </div>
            <p className="text-praga-gray-light">Satisfacción</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gray-light mb-2">
              5★
            </div>
            <p className="text-praga-gray-light">Calificación promedio</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gray-light mb-2">
              3+
            </div>
            <p className="text-praga-gray-light">Años de experiencia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
