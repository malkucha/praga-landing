import { motion } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { locations } from '../../../data/locations';

const ServicioCard = ({ service, categoryName, categoryIcon: CategoryIcon }) => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const contactMenuRef = useRef(null);

  // Cerrar menú si se hace click fuera
  useEffect(() => {
    if (!showContactMenu) return;
    const handleClickOutside = (e) => {
      if (contactMenuRef.current && !contactMenuRef.current.contains(e.target)) {
        setShowContactMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showContactMenu]);

  const handleContactClick = (location) => {
    const message = `Hola! Me interesa el servicio "${service.name}" de ${categoryName} en ${location.name}. ¿Podrían darme más información y ayudarme a agendar una cita?`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowContactMenu(false);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-praga-gray-dark/20"
    >
      {/* Service Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-praga-gray-light to-praga-gray/30 overflow-hidden">
        {/* Placeholder pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-praga-gray-dark/10 to-praga-gray/20"></div>
        
        {/* Category Icon Overlay */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          <CategoryIcon className="w-5 h-5 text-praga-gray-dark" />
        </div>
        
        {/* Duration Badge */}
        {service.duration && (
          <div className="absolute top-4 right-4 bg-praga-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{service.duration}</span>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3 text-praga-gray-dark group-hover:text-praga-gray transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-praga-gray-dark text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Category Tag */}
        <div className="inline-flex items-center space-x-2 bg-praga-beige/50 rounded-full px-3 py-1 mb-4">
          <span className="text-praga-gray-dark text-xs font-medium">
            {categoryName}
          </span>
        </div>

        {/* Action Button */}
        <div className="relative">
          <button
            onClick={() => setShowContactMenu(!showContactMenu)}
            className="w-full btn-secondary group-hover:bg-praga-gray group-hover:border-praga-gray group-hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar</span>
          </button>
          
          {/* Contact Menu */}
          {showContactMenu && (
            <div
              ref={contactMenuRef}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-2xl shadow-2xl border border-praga-gray-light/20 p-4 min-w-[200px] flex flex-col gap-2 z-50"
            >
              <div className="text-praga-gray-dark font-agrandir font-semibold mb-2 text-center uppercase text-xs">
                Elegí sucursal
              </div>
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleContactClick(location)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-praga-beige/40 text-praga-gray-dark transition-colors font-medium text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span>{location.name.replace('PRAGA | ', '')}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicioCard;
