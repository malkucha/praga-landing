import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.jpg';
import logoGris from '../../assets/logo-praga-gris.svg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Centro de estética Praga - Ambiente elegante y relajante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/10 w-16 h-16 bg-praga-white/20 rounded-full animate-float hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/10 w-12 h-12 bg-praga-rose/30 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  duration: 1.2,
                  delay: 0.3
                }}
                className="relative"
              >
                <div className="absolute inset-0 animate-pulse-slow bg-white/40 rounded-full blur-xl filter"></div>
                <img 
                  src={logoGris} 
                  alt="Praga Estética" 
                  className="h-20 sm:h-28 md:h-36 w-auto mx-auto filter brightness-0 invert drop-shadow-xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white font-body mb-10 leading-relaxed drop-shadow-lg max-w-xl mx-auto"
            >
              Centro de estética dedicado a realzar tu belleza natural con tratamientos personalizados y tecnología de vanguardia
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a href="#services" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">Nuestros servicios</a>
              <a href="#appointments" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">Reservá tu turno</a>
            </div>
            <div className="mt-4 text-center">
              <a href="#locations" className="inline-flex items-center text-white hover:text-praga-gold transition-colors duration-300 group">
                <span className="text-sm uppercase tracking-wider font-medium mr-2">Mirá nuestras sucursales</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
