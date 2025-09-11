import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Phone, Clock, Calendar, MessageCircle, Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';

// Layout Components
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Section Components
import Appointments from '../sections/landing/Appointments';

// Data
import { locations } from '../../data/locations';
import { getPromotionsByLocation } from '../../data/promotions';

// Individual section components for this page
import SucursalSpecialties from '../sections/sucursal/SucursalSpecialties';
import SucursalTeam from '../sections/sucursal/SucursalTeam';
import SucursalSchedule from '../sections/sucursal/SucursalSchedule';
import SucursalPromotions from '../sections/sucursal/SucursalPromotions';
import SucursalAmenities from '../sections/sucursal/SucursalAmenities';

const SucursalPage = ({ locationId, onNavigateBack, onNavigateToSucursal, onNavigateToServicios, onNavigateToLanding }) => {
  const [location, setLocation] = useState(null);
  const [locationPromotions, setLocationPromotions] = useState([]);

  useEffect(() => {
    const foundLocation = locations.find(loc => loc.id === locationId);
    const promotions = getPromotionsByLocation(locationId);
    
    setLocation(foundLocation);
    setLocationPromotions(promotions);
  }, [locationId]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-praga-gray mb-4">Ubicación no encontrada</h2>
          <button
            onClick={onNavigateBack}
            className="btn-primary"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Hola! Me gustaría obtener información sobre los servicios en ${location.name}`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppPromo = (promo) => {
    const message = `Hola! Me interesa la promoción "${promo.title}" en ${location.name}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="sucursal-page">
      {/* Fixed Navigation */}
      <Navbar 
        onNavigateToSucursal={onNavigateToSucursal} 
        onNavigateToServicios={onNavigateToServicios}
        onNavigateToLanding={onNavigateToLanding}
        isLanding={false} 
      />
      
      {/* Hero Section with Location Image */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={location.image} 
            alt={`Sucursal ${location.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >              
              <p className="text-xl text-praga-gray-light mb-12 leading-relaxed max-w-2xl mx-auto">
                {location.description}
              </p>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-left">
                      <MapPin className="w-5 h-5 text-praga-gold flex-shrink-0" />
                      <span className="text-praga-gray-dark">{location.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-left">
                      <Phone className="w-5 h-5 text-praga-gold flex-shrink-0" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-praga-gray-dark hover:text-praga-gold transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Schedule Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-left">
                      <Clock className="w-5 h-5 text-praga-gold flex-shrink-0" />
                      <span className="text-praga-gray-dark">{location.schedule.weekdays}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-left">
                      <Calendar className="w-5 h-5 text-praga-gold flex-shrink-0" />
                      <span className="text-praga-gray-dark">{location.schedule.saturday}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-primary flex items-center justify-center space-x-2 px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactanos por WhatsApp</span>
                </button>
                
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center space-x-2 px-8 py-4 text-white border-white hover:bg-white hover:text-praga-gray"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Ver en Google Maps</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main>
        {/* Specialties Section */}
        {/* <SucursalSpecialties specialties={location.specialties} /> */}
        
        {/* Service Schedule Section */}
        {/* <SucursalSchedule serviceSchedule={location.serviceSchedule} /> */}
        
        {/* Team Section */}
        {/* <SucursalTeam team={location.team} /> */}
        
        {/* Promotions Section */}
        {/* {locationPromotions.length > 0 && (
          <SucursalPromotions 
            promotions={locationPromotions} 
            onWhatsAppPromo={handleWhatsAppPromo}
            locationName={location.name}
          />
        )} */}
        
        {/* Amenities Section */}
        {/* <SucursalAmenities amenities={location.amenities} /> */}
        
        {/* Appointments Section - Focused on this location */}
        <Appointments key={`appointments-${locationId}`} focusedLocation={locationId} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SucursalPage;
