import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Users, Star, Calendar, ArrowLeft, MessageCircle, Navigation } from 'lucide-react';
import { locations } from '../../../data/locations';
import { getPromotionsByLocation } from '../../../data/promotions';

const LocationDetail = ({ locationId }) => {
  const [location, setLocation] = useState(null);
  const [locationPromotions, setLocationPromotions] = useState([]);

  useEffect(() => {
    const foundLocation = locations.find(loc => loc.id === locationId);
    const promotions = getPromotionsByLocation(locationId);
    
    setLocation(foundLocation);
    setLocationPromotions(promotions);
  }, [locationId]);

  if (!location) {
    return <div>Ubicación no encontrada</div>;
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
    <section id={`${locationId}-detail`} className="section-padding bg-praga-gray-light">
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
            {location.name}
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            {location.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Contact & Location Info */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h3 className="text-xl font-heading font-bold text-praga-gray mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-praga-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-praga-gray mb-1">Dirección</p>
                    <p className="text-praga-gray-dark">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-praga-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-praga-gray mb-1">Teléfono</p>
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-praga-gray-dark hover:text-praga-gold transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-praga-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-praga-gray mb-1">Lun - Vie</p>
                    <p className="text-praga-gray-dark">{location.schedule.weekdays}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-5 h-5 text-praga-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-praga-gray mb-1">Sábados</p>
                    <p className="text-praga-gray-dark">{location.schedule.saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactanos por WhatsApp</span>
              </button>
              
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 flex items-center justify-center space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Location Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={location.image} 
                alt={`Exterior de ${location.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-praga-gray mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-lg text-praga-gray-dark max-w-2xl mx-auto">
              Servicios especializados diseñados para realzar tu belleza natural
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-praga-gold" />
                  </div>
                  <span className="text-praga-gray font-medium">{specialty}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-praga-gray mb-4">
              Días de Servicios Especiales
            </h2>
            <p className="text-lg text-praga-gray-dark max-w-2xl mx-auto">
              Horarios especializados para cada tipo de tratamiento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(location.serviceSchedule).map(([service, days], index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-praga-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-praga-gray">
                    {service}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {days.map((day, dayIndex) => (
                    <span
                      key={dayIndex}
                      className="bg-praga-gold/20 text-praga-gray px-4 py-2 rounded-full text-sm font-medium hover:bg-praga-gold/30 transition-colors duration-200"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-praga-gray mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-praga-gray-dark max-w-2xl mx-auto">
              Profesionales especializados comprometidos con tu bienestar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {location.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-praga-gray mb-2">
                  {member.name}
                </h3>
                
                <p className="text-praga-gold font-medium mb-2">
                  {member.specialty}
                </p>
                
                <p className="text-praga-gray-dark text-sm">
                  {member.experience} de experiencia
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Promotions */}
        {locationPromotions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-praga-gray mb-4">
                Promociones Exclusivas
              </h2>
              <p className="text-lg text-praga-gray-dark max-w-2xl mx-auto">
                Ofertas especiales disponibles solo en esta sucursal
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationPromotions.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-heading font-bold text-praga-gray leading-tight">
                      {promo.title}
                    </h3>
                    <span className="bg-praga-gold text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ml-2">
                      -{promo.discount}
                    </span>
                  </div>
                  
                  <p className="text-praga-gray-dark mb-6 text-sm leading-relaxed">
                    {promo.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-praga-gray-dark line-through text-sm">
                        {promo.originalPrice}
                      </span>
                      <span className="text-xl font-bold text-praga-gold">
                        {promo.discountPrice}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsAppPromo(promo)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Consultanos por WhatsApp
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-praga-gray mb-4">
              Comodidades
            </h2>
            <p className="text-lg text-praga-gray-dark max-w-2xl mx-auto">
              Servicios adicionales para hacer tu experiencia más placentera
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {location.amenities.map((amenity, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-praga-gray px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {amenity}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationDetail;
