import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Layout Components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Section Components
import LocationDetail from '../sections/LocationDetail';
import Appointments from '../sections/Appointments';

const SucursalPage = ({ locationId, onNavigateBack, onNavigateToSucursal }) => {
  return (
    <div className="sucursal-page">
      {/* Fixed Navigation */}
      <Navbar onNavigateToSucursal={onNavigateToSucursal} isLanding={false} />
      
      {/* Back to Landing Button */}
      <div className="bg-white border-b border-praga-gray-light/20 sticky top-[80px] z-40">
        <div className="container-custom py-4">
          <motion.button
            onClick={onNavigateBack}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-praga-gray hover:text-praga-gold transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Volver al inicio</span>
          </motion.button>
        </div>
      </div>
      
      {/* Main Content */}
      <main>
        {/* Location Detail Section */}
        <LocationDetail key={locationId} locationId={locationId} />
        
        {/* Appointments Section - Focused on this location */}
        <Appointments key={`appointments-${locationId}`} focusedLocation={locationId} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SucursalPage;
