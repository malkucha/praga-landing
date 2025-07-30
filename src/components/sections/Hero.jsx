import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split Layout Container */}
      <div className="w-full grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Side - Image */}
        <div className="relative order-2 lg:order-1">
          <img 
            src={heroImage}
            alt="Centro de estética Praga - Ambiente elegante y relajante"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay on image */}
          <div className="absolute inset-0 bg-praga-gold/10"></div>
          
          {/* Floating Elements on image side */}
          <div className="absolute top-1/4 left-10 w-16 h-16 bg-praga-white/20 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-praga-rose/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Right Side - Content */}
        <div className="relative order-1 lg:order-2 bg-gradient-to-br from-praga-beige via-praga-beige-dark to-praga-rose/20 flex items-center justify-center px-8 py-16 lg:py-0">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-praga-gold rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-praga-rose rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-praga-gray mb-6">
                <span className="text-gradient">Praga</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-praga-gray-light font-body mb-8 leading-relaxed"
              >
                Centro de estética dedicado a realzar tu belleza natural con tratamientos personalizados y tecnología de vanguardia
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Botones centrados - Superpuestos */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#services"
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center"
          >
            Conoce nuestros servicios
          </a>
          <a
            href="#appointments"
            className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center"
          >
            Reservar turno
          </a>
        </motion.div>

        {/* Ver más button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 text-center"
        >
          <a
            href="#locations"
            className="inline-flex items-center text-praga-gray-light hover:text-praga-gold transition-colors duration-300 group"
          >
            <span className="text-sm uppercase tracking-wider font-medium mr-2">
              Ver nuestras sucursales
            </span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
