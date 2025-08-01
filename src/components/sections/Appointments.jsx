import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { locations } from '../../data/locations';

const Appointments = ({ focusedLocation }) => {
  const [displayLocations, setDisplayLocations] = useState(locations);

  useEffect(() => {
    const newDisplayLocations = focusedLocation 
      ? locations.filter(loc => loc.id === focusedLocation)
      : locations;
    setDisplayLocations(newDisplayLocations);
  }, [focusedLocation]);
  const handleWhatsAppClick = (location) => {
    const message = `Hola! Me gustaría reservar un turno en ${location.name}. ¿Podrían ayudarme con la disponibilidad?`;
    const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
    <section id="appointments" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-12 h-12 text-praga-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Reserva tu <span className="text-gradient">turno</span>
            </h2>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            {focusedLocation 
              ? `Agendá tu cita en ${displayLocations[0]?.name}. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.`
              : 'Agendá tu cita de forma rápida y sencilla. Nuestro equipo está listo para brindarte la mejor experiencia en estética y belleza.'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Schedule Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-display font-bold text-praga-gray mb-8">
              Información de atención
            </h3>

            {scheduleInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-praga-beige/50 rounded-2xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-praga-gold" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-praga-gray mb-2">
                    {info.title}
                  </h4>
                  <p className="text-lg text-praga-gray mb-1">
                    {info.detail}
                  </p>
                  <p className="text-praga-gray-light">
                    {info.subDetail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-praga-gold/10 to-praga-rose/10 rounded-2xl p-6">
              <h4 className="text-xl font-heading font-semibold text-praga-gray mb-4">
                Información de contacto
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">{locations[0].phone}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">WhatsApp disponible</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">2 sucursales en Córdoba</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Appointment Booking */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-praga-beige/30 to-praga-rose/20 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center mx-auto mb-6">
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

            {/* Location Selection Buttons */}
            <div className="space-y-4 mb-6">
              {displayLocations.map((location, index) => (
                <motion.button
                  key={location.name}
                  onClick={() => handleWhatsAppClick(location)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-semibold py-4 px-6 rounded-full text-lg flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6" />
                    <div className="text-left">
                      <div className="font-bold">{location.name}</div>
                      <div className="text-sm opacity-90">{location.address}</div>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div>Reservá tu</div>
                    <div className="opacity-90">WhatsApp</div>
                  </div>
                </motion.button>
              ))}
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

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-praga-gray-light/20">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-praga-gray-light">Respuesta inmediata</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm text-praga-gray-light">Horarios flexibles</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">💎</div>
                <p className="text-sm text-praga-gray-light">Atención premium</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm text-praga-gray-light">Consulta gratuita</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
