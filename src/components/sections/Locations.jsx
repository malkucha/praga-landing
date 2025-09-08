import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, ArrowRight } from 'lucide-react';
import { locations } from '../../data/locations';

const Locations = ({ onNavigateToSucursal }) => {
  return (
    <section id="locations" className="section-padding bg-praga-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bold mb-6">
            Nuestras <span className="text-gradient">Sucursales</span>
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Te esperamos en cualquiera de nuestras dos sucursales en Córdoba. 
            Misma calidad, mismo cuidado, cerca tuyo.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-praga-gray-x-dark rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Location Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-praga-gray mb-2">
                  {location.name}
                </h3>
                <div className="flex items-start space-x-2 text-praga-gray-light">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{location.address}</span>
                </div>
              </div>

              {/* Location Image */}
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`Exterior de ${location.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-praga-gray-light" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-sm text-praga-gray hover:text-praga-gray-light transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-praga-gray-light" />
                  <span className="text-sm text-praga-gray">
                    {location.schedule.weekdays}
                  </span>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl p-4 mb-6">
                <h4 className="font-heading font-semibold text-praga-gray-dark mb-3">Horarios</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-praga-gray-dark">Lunes - Viernes</span>
                    <span className="text-praga-gray-dark font-medium">{location.schedule.weekdays.split(': ')[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-praga-gray-dark">Sábados</span>
                    <span className="text-praga-gray-dark font-medium">{location.schedule.saturday.split(': ')[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-praga-gray-dark">Domingos</span>
                    <span className="text-praga-gray-dark font-medium">{location.schedule.sunday.split(': ')[1]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${location.whatsapp}?text=Hola! Me gustaría reservar un turno en ${location.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto text-center bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                  >
                    Reservá turno
                  </a>
                  
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center flex-1 flex items-center justify-center text-sm px-4 py-3 bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                  >
                    <Navigation className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">Ver en </span>Maps
                  </a>
                </div>
                
                {onNavigateToSucursal && (
                  <button
                    onClick={() => onNavigateToSucursal(location.id)}
                    className="w-full btn-primary text-center flex-1 text-sm px-4 py-3"
                  >
                    <span>Descubrí esta sucursal</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* General CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-praga-gray-dark rounded-3xl p-8 shadow-2xl border border-praga-gray-light/30">
            <h1 className="h1-light text-2xl font-heading font-bold mb-4 text-praga-gray-light">
              ¿No sabés cuál elegir?
            </h1>
            <p className="text-lg mb-6 text-praga-white">
              Contactanos y te ayudamos a encontrar la sucursal más conveniente para vos
            </p>
            <a
              href="https://wa.me/5493515488483?text=Hola! Me gustaría información sobre las sucursales de Praga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block font-semibold bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
            >
              Contactanos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
