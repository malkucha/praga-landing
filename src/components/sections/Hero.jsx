import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.jpg';
import logoGris from '../../assets/logo-praga-gris.svg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid w-full grid-cols-2 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative order-2 lg:order-1">
          <img 
            src={heroImage}
            alt="Centro de estética Praga - Ambiente elegante y relajante"
            className="w-full h-full max-h-screen object-cover"
          />
          <div className="absolute inset-0 bg-praga-gold/10"></div>
          <div className="absolute top-1/4 left-10 w-16 h-16 bg-praga-white/20 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-praga-rose/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
        </div>
        {/* Right Side - Content */}
        <div className="relative order-1 lg:order-2 bg-gradient-to-br from-praga-beige via-praga-beige-dark to-praga-rose/20 flex items-center justify-center px-8 py-16 lg:py-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-praga-gold rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-praga-rose rounded-full"></div>
          </div>
          <div className="relative z-10 text-center max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="mb-6">
                <img 
                  src={logoGris} 
                  alt="Praga Estética" 
                  className="h-24 md:h-32 lg:h-36 w-auto mx-auto"
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-praga-gray-light font-body mb-8 leading-relaxed"
              >
                Centro de estética dedicado a realzar tu belleza natural con tratamientos personalizados y tecnología de vanguardia
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a href="#services" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto text-center">Nuestros servicios</a>
                <a href="#appointments" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center">Reservá tu turno</a>
              </div>
              <div className="mt-2 text-center">
                <a href="#locations" className="inline-flex items-center text-praga-gray-light hover:text-praga-gold transition-colors duration-300 group">
                  <span className="text-sm uppercase tracking-wider font-medium mr-2">Mirá nuestras sucursales</span>
                  <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="lg:hidden relative w-full min-h-screen flex flex-col items-center justify-center bg-black">
        <img 
          src={heroImage}
          alt="Centro de estética Praga - Ambiente elegante y relajante"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center">
          <h1 className="mb-4 drop-shadow-lg">
            <img 
              src={logoGris} 
              alt="Praga Estética" 
              className="h-20 w-auto mx-auto filter brightness-0 invert drop-shadow-lg"
            />
          </h1>
          <p className="text-base text-white font-body mb-8 drop-shadow-lg">
            Centro de estética dedicado a realzar tu belleza natural con tratamientos personalizados y tecnología de vanguardia
          </p>
          <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
            <a href="#services" className="btn-primary text-lg px-8 py-4 w-full text-center">Nuestros servicios</a>
            <a href="#appointments" className="btn-secondary text-lg px-8 py-4 w-full text-center">Reservá tu turno</a>
            <a href="#locations" className="inline-flex items-center justify-center text-white hover:text-praga-gold transition-colors duration-300 group mt-2">
              <span className="text-sm uppercase tracking-wider font-medium mr-2">Mirá nuestras sucursales</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
