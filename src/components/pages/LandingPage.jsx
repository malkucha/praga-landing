// Layout Components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Section Components
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Promotions from '../sections/Promotions';
import About from '../sections/About';
import Locations from '../sections/Locations';
import Shop from '../sections/Shop';
import Appointments from '../sections/Appointments';
import Testimonials from '../sections/Testimonials';

const LandingPage = ({ onNavigateToSucursal }) => {
  return (
    <div className="landing-page">
      {/* Fixed Navigation */}
      <Navbar onNavigateToSucursal={onNavigateToSucursal} isLanding={true} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section - Primero mostramos qué ofrecemos */}
        <Services />
        
        {/* Promotions Section - Ofertas especiales para captar interés */}
        {/* <Promotions /> */}
        
        {/* About Section - Luego generamos confianza */}
        <About />
        
        {/* Locations Section - Dónde encontrarnos */}
        <Locations onNavigateToSucursal={onNavigateToSucursal} />
        
        {/* Testimonials Section - Prueba social */}
        <Testimonials />
        
        {/* Shop Section - Productos complementarios */}
        <Shop />
        
        {/* Appointments Section - Call to action final */}
        <Appointments />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
