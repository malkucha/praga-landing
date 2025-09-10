import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Calendar, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { locations } from '../../data/locations';

const Appointments = ({ focusedLocation }) => {
  const [displayLocations, setDisplayLocations] = useState(locations);
  const [showWAMenu, setShowWAMenu] = useState(false);
  const waMenuRef = useRef(null);

  useEffect(() => {
    const newDisplayLocations = focusedLocation 
      ? locations.filter(loc => loc.id === focusedLocation)
      : locations;
    setDisplayLocations(newDisplayLocations);
  }, [focusedLocation]);

  // Cerrar menú si se hace click fuera
  useEffect(() => {
    if (!showWAMenu) return;
    const handleClickOutside = (e) => {
      if (waMenuRef.current && !waMenuRef.current.contains(e.target)) {
        setShowWAMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showWAMenu]);

  const handleWhatsAppClick = (location) => {
    const message = `Hola! Me gustaría reservar un turno en ${location.name}. ¿Podrían ayudarme con la disponibilidad?`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowWAMenu(false);
  };
  // Botón flotante de WhatsApp
  // Solo mostrar si no hay focusedLocation (si hay, ya están los botones directos)
  // O mostrar siempre, pero con menú de selección

  const scheduleInfo = [
    {
      icon: Clock,
      title: 'Horarios',
      detail: locations[0].schedule.weekdays,
      subDetail: locations[0].schedule.saturday
    },
    {
      icon: MapPin,
      title: 'Ubicaciones',
      detail: '2 sucursales',
      subDetail: 'Nueva Córdoba y Cerro de las Rosas'
    }
  ];

  return (
    <section id="appointments" className="section-padding bg-praga-gray-light">
      <div className="container-custom">
        {/* Botón flotante de WhatsApp */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl w-16 h-16 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 animate-pulse"
            aria-label="Contactar por WhatsApp"
            onClick={() => setShowWAMenu((v) => !v)}
          >
            <MessageCircle className="w-8 h-8" />
          </button>
          {/* Menú de selección de sucursal */}
          {showWAMenu && (
            <div
              ref={waMenuRef}
              className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-praga-gray-light/20 p-4 min-w-[220px] flex flex-col gap-2 animate-fade-in"
            >
              <div className="text-praga-gray-dark font-agrandir font-semibold mb-2 text-center uppercase text-xs">Elegí sucursal</div>
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleWhatsAppClick(location)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-praga-beige/40 text-praga-gray-dark md:text-praga-gray md:hover:text-praga-gray-dark transition-colors font-medium text-sm"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>{location.name.replace('PRAGA | ', '')}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-praga-gray-x-dark max-w-3xl mx-auto leading-relaxed">
            {focusedLocation 
              ? `Agendá tu cita en ${displayLocations[0]?.name}. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.`
              : 'Agendá tu cita de forma rápida y sencilla. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.'
            }
          </p>
        </motion.div>

        {/* Schedule Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="hidden">
            {scheduleInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-praga-gray-dark/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-praga-gray-dark to-praga-gray rounded-full flex items-center justify-center mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-praga-gray mb-4 transition-colors duration-300">
                  {info.title}
                </h4>
                <p className="text-sm md:text-base text-praga-gray-dark font-body mb-2 leading-relaxed">
                  {info.detail}
                </p>
                <p className="text-praga-gray-dark text-xs md:text-sm">
                  {info.subDetail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Appointment Booking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <div className="bg-praga-gray rounded-3xl p-8 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-praga-gray-dark to-praga-gray rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="font-bold mb-6">
            Reservá tu turno
            </h1>
            
            <p className="text-base md:text-lg mb-6 text-praga-white">
              {focusedLocation
                ? `Contactanos por WhatsApp para coordinar tu cita en ${displayLocations[0]?.name}. Te responderemos inmediatamente y te ayudaremos a elegir el mejor horario para ti.`
                : 'Elegí tu sucursal preferida y contactanos por WhatsApp para coordinar tu cita. Te responderemos inmediatamente y te ayudaremos a elegir el mejor horario para ti.'
              }
            </p>
            
            {/* Alternative Contact */}
            <div className="text-center">
              <p className="text-sm text-praga-white mb-4">
                ¿Preferís llamar por teléfono?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {displayLocations.map((location) => (
                  <a
                    key={location.name}
                    href={`tel:${location.phone}`}
                    className="btn-secondary inline-block font-semibold hover:scale-105 transition-all duration-300"
                  >
                    {location.name.replace('PRAGA | ', '')} - {location.phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointments;
