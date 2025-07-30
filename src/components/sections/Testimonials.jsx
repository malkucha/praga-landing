import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      service: 'Tratamiento Facial Completo',
      rating: 5,
      text: 'Increíble experiencia en Praga. El tratamiento facial superó mis expectativas y el personal es súper profesional. Mi piel nunca se vio tan radiante.',
      image: 'maria'
    },
    {
      name: 'Laura Rodríguez',  
      service: 'Depilación Láser',
      rating: 5,
      text: 'Después de varios meses de sesiones, estoy súper contenta con los resultados. El proceso fue indoloro y el equipo me hizo sentir muy cómoda.',
      image: 'laura'
    },
    {
      name: 'Ana Martínez',
      service: 'Mesoterapia Facial',
      rating: 5,
      text: 'El cambio en mi piel es notorio desde la primera sesión. El equipo de Praga es excepcional y siempre me siento mimada y cuidada.',
      image: 'ana'
    },
    {
      name: 'Carmen Silva',  
      service: 'Radiofrecuencia',
      rating: 5,
      text: 'Los resultados de la radiofrecuencia han sido asombrosos. Mi piel está más firme y tersa. Definitivamente recomiendo Praga al 100%.',
      image: 'carmen'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-praga-beige">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray mb-6">
            Lo que dicen nuestras <span className="text-gradient">clientas</span>
          </h2>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestras clientas es nuestra mayor recompensa. 
            Descubre sus experiencias y transformaciones.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
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
              <div className="w-16 h-16 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center">
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
              <div className="w-20 h-20 bg-gradient-to-br from-praga-rose to-praga-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white font-display">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-praga-gray mb-1">
                {testimonials[currentTestimonial].name}
              </h3>
              
              <p className="text-praga-gray-light">
                {testimonials[currentTestimonial].service}
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-praga-gold hover:text-white transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-praga-gray group-hover:text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-praga-gold hover:text-white transition-all duration-300 group"
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
                  ? 'bg-praga-gold scale-125' 
                  : 'bg-praga-gray-light hover:bg-praga-rose'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-display font-bold text-praga-gold mb-2">
              500+
            </div>
            <p className="text-praga-gray-light">Clientas felices</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gold mb-2">
              98%
            </div>
            <p className="text-praga-gray-light">Satisfacción</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gold mb-2">
              5★
            </div>
            <p className="text-praga-gray-light">Calificación promedio</p>
          </div>
          
          <div>
            <div className="text-4xl font-display font-bold text-praga-gold mb-2">
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
