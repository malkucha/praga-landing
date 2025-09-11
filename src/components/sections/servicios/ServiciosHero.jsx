import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { locations } from '../../../data/locations';
import tratamientoImage from '../../../assets/tratamiento.jpg';

const ServiciosHero = () => {
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
    const message = `Hola! Me gustaría obtener más información sobre sus servicios en ${location.name} y agendar una cita. ¿Podrían ayudarme?`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowContactMenu(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={tratamientoImage} 
          alt="Tratamientos Praga"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container-custom py-32">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="h1-light font-bold mb-8">
              Nuestros Servicios
            </h1>
            
            <p className="text-xl md:text-2xl text-praga-gray-light mb-12 leading-relaxed max-w-3xl mx-auto">
              Descubrí nuestra amplia gama de tratamientos de estética y bienestar, 
              diseñados para realzar tu belleza natural y brindarte la confianza que merecés.
            </p>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="relative inline-block"
            >
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="btn-primary flex items-center justify-center space-x-2 px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar Cita</span>
              </button>
              
              {/* Contact Menu */}
              {showContactMenu && (
                <div
                  ref={contactMenuRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-praga-gray-light/20 p-4 min-w-[220px] flex flex-col gap-2 z-50"
                >
                  <div className="text-praga-gray-dark font-agrandir font-semibold mb-2 text-center uppercase text-xs">
                    Elegí sucursal
                  </div>
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => handleContactClick(location)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-praga-beige/40 text-praga-gray-dark transition-colors font-medium text-sm"
                    >
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <span>{location.name.replace('PRAGA | ', '')}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHero;
