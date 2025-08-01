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
      icon: Calendar,
      title: 'Días de atención',
      detail: 'Lunes a Sábado',
      subDetail: 'Domingos cerrado'
    },
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
    <section id="appointments" className="section-padding bg-gradient-to-br from-white to-praga-beige/10">
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
              <div className="text-praga-gray font-semibold mb-2 text-center">Elegí sucursal</div>
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleWhatsAppClick(location)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-praga-beige/40 text-praga-gray hover:text-praga-gold transition-colors font-medium"
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
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-praga-gold/10 rounded-full flex items-center justify-center mr-4">
              <Calendar className="w-10 h-10 text-praga-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Reservá tu <span className="text-gradient">turno</span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-praga-gold to-praga-rose mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            {focusedLocation 
              ? `Agendá tu cita en ${displayLocations[0]?.name}. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.`
              : 'Agendá tu cita de forma rápida y sencilla. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.'
            }
          </p>
        </motion.div>

        {/* Schedule Information - HORIZONTAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-praga-gray mb-3 text-center">
            Información de atención
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-praga-gold to-praga-rose mx-auto mb-10 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scheduleInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-8 bg-white rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-praga-gold/10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-praga-gold/20 to-praga-rose/20 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <info.icon className="w-10 h-10 text-praga-gold" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-praga-gray mb-3">
                  {info.title}
                </h4>
                <p className="text-lg text-praga-gray mb-2 font-medium">
                  {info.detail}
                </p>
                <p className="text-praga-gray-light">
                  {info.subDetail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Appointment Booking - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-praga-beige/30 to-praga-rose/20 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-praga-gray mb-4">
              ¡Agendá ahora!
            </h3>
            
            <p className="text-praga-gray-light mb-8 leading-relaxed">
              {focusedLocation
                ? `Contactanos por WhatsApp para coordinar tu cita en ${displayLocations[0]?.name}. Te responderemos inmediatamente y te ayudaremos a elegir el mejor horario para ti.`
                : 'Elegí tu sucursal preferida y contactanos por WhatsApp para coordinar tu cita. Te responderemos inmediatamente y te ayudaremos a elegir el mejor horario para ti.'
              }
            </p>
            
          </div>

          {/* Alternative Contact */}
          <div className="text-center">
            <p className="text-sm text-praga-gray-light mb-4">
              ¿Preferís llamar por teléfono?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {displayLocations.map((location) => (
                <a
                  key={location.name}
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center space-x-2 text-praga-gold hover:text-praga-gray transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <div className="text-left">
                    <div className="font-heading font-semibold text-sm">{location.name}</div>
                    <div className="text-xs">{location.phone}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointments;
