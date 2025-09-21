import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Layout Components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Section Components
import Hero from '../sections/landing/Hero';
import Services from '../sections/landing/Services';
import Promotions from '../sections/landing/Promotions';
import About from '../sections/landing/About';
import Locations from '../sections/landing/Locations';
import Shop from '../sections/landing/Shop';
import Appointments from '../sections/landing/Appointments';
import Testimonials from '../sections/landing/Testimonials';

const LandingPage = ({ onNavigateToSucursal, onNavigateToServicios, targetSection, onSectionNavigated }) => {
  
  // Effect para hacer scroll a la sección cuando se navega desde otra página
  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onSectionNavigated) {
          onSectionNavigated();
        }
      }, 100); // Pequeño delay para asegurar que el DOM esté listo
      
      return () => clearTimeout(timer);
    }
  }, [targetSection, onSectionNavigated]);
  return (
    <div className="landing-page">
      {/* Fixed Navigation */}
      <Navbar 
        onNavigateToSucursal={onNavigateToSucursal} 
        onNavigateToServicios={onNavigateToServicios} 
        isLanding={true} 
      />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section - Primero mostramos qué ofrecemos */}
        <Services onNavigateToServicios={onNavigateToServicios} />
        
        {/* Promotions Section - Ofertas especiales para captar interés */}
        {/* <Promotions /> */}
        
        {/* About Section - Luego generamos confianza */}
        <About />
        
        {/* Locations Section - Dónde encontrarnos */}
        <Locations onNavigateToSucursal={onNavigateToSucursal} />
        
        {/* Testimonials Section - Prueba social */}
        <Testimonials />
        
        {/* Shop Section - Productos complementarios */}
        {/* <Shop /> */}
        
        {/* Appointments Section - Call to action final */}
        <Appointments />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
