import { motion } from 'framer-motion';
import logoGris from '../../../assets/logo-praga-blanco.svg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-white"
    >
      {/* Background Video from YouTube */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/fUSlOH0FK0o?autoplay=1&mute=1&loop=1&playlist=fUSlOH0FK0o&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
          title="Praga Centro de Estética"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{ border: 'none' }}
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="mb-8"  >
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
                  className="h-16 sm:h-20 md:h-28 lg:h-32 w-auto mx-auto filter brightness-0 invert drop-shadow-xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white font-body mb-10 leading-relaxed drop-shadow-lg max-w-xl mx-auto"
            >
              Nos apasiona realzar tu belleza natural. Te acompañamos con tratamientos personalizados, pensados para vos, combinando el cuidado cercano con la mejor tecnología.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a href="#services" className="btn-primary w-full sm:w-auto text-center">Nuestros servicios</a>
              <a href="#appointments" className="btn-secondary w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">Reservá tu turno</a>
            </div>
            <div className="mt-4 text-center">
              <a href="#locations" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors duration-300 group">
                <span className="text-sm uppercase tracking-wider font-agrandir font-medium mr-2">Mirá nuestras sucursales</span>
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
