import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Layout Components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// UI Components
import ShareLinks from '../ui/ShareLinks';

// Section Components
import ServiciosHero from '../sections/servicios/ServiciosHero';
import ServiciosCategory from '../sections/servicios/ServiciosCategory';
import Appointments from '../sections/landing/Appointments';

// Data
import { getAllCategories } from '../../data/services';

const ServiciosPage = ({ onNavigateBack, onNavigateToSucursal, onNavigateToServicios, onNavigateToLanding }) => {
  const categories = getAllCategories();

  return (
    <div className="servicios-page">
      {/* Fixed Navigation */}
      <Navbar 
        onNavigateToSucursal={onNavigateToSucursal} 
        onNavigateToServicios={onNavigateToServicios}
        onNavigateToLanding={onNavigateToLanding}
        isLanding={false} 
      />
            
      {/* Hero Section */}
      <ServiciosHero />
      
      {/* Main Content */}
      <main>
        {/* Share Links Section */}
        <section className="py-16 bg-praga-beige/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <ShareLinks type="servicios" />
            </div>
          </div>
        </section>
        
        {/* Services Categories */}
        {categories.map((category, index) => (
          <ServiciosCategory 
            key={category.id} 
            category={category} 
            index={index}
          />
        ))}
        
        {/* Appointments Section */}
        <Appointments />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiciosPage;
