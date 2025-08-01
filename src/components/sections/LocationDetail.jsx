import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Users, Star, Calendar, ArrowLeft, MessageCircle, Navigation } from 'lucide-react';
import { locations } from '../../data/locations';
import { getPromotionsByLocation } from '../../data/promotions';

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
    <section id={`${locationId}-detail`} className="section-padding bg-praga-white">
      <div className="container-custom">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
        </motion.div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-praga-gray mb-6">
              {location.name}
            </h1>
            
            <p className="text-xl text-praga-gray-light mb-8 leading-relaxed">
              {location.description}
            </p>

            {/* Contact & Location Info */}
            <div className="bg-praga-beige/50 rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">{location.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-praga-gold" />
                  <a 
                    href={`tel:${location.phone}`}
                    className="text-praga-gray hover:text-praga-gold transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">{location.schedule.weekdays}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-praga-gold" />
                  <span className="text-praga-gray">{location.schedule.saturday}</span>
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
          <h2 className="text-3xl font-display font-bold text-praga-gray mb-8">
            Nuestras Especialidades
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-praga-beige/30 rounded-xl p-4 flex items-center space-x-3"
              >
                <Star className="w-5 h-5 text-praga-gold flex-shrink-0" />
                <span className="text-praga-gray">{specialty}</span>
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
          <h2 className="text-3xl font-display font-bold text-praga-gray mb-8">
            Días de Servicios Especiales
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(location.serviceSchedule).map(([service, days], index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-heading font-semibold text-praga-gray mb-3">
                  {service}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {days.map((day, dayIndex) => (
                    <span
                      key={dayIndex}
                      className="bg-praga-gold/20 text-praga-gray px-3 py-1 rounded-full text-sm font-medium"
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
          <h2 className="text-3xl font-display font-bold text-praga-gray mb-8">
            Nuestro Equipo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {location.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-praga-gray mb-2">
                  {member.name}
                </h3>
                
                <p className="text-praga-gold font-medium mb-1">
                  {member.specialty}
                </p>
                
                <p className="text-praga-gray-light text-sm">
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
            <h2 className="text-3xl font-display font-bold text-praga-gray mb-8">
              Promociones Exclusivas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationPromotions.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-praga-beige/30 to-praga-rose/20 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-heading font-bold text-praga-gray">
                      {promo.title}
                    </h3>
                    <span className="bg-praga-gold text-white px-2 py-1 rounded-full text-sm font-bold">
                      -{promo.discount}
                    </span>
                  </div>
                  
                  <p className="text-praga-gray-light mb-4 text-sm">
                    {promo.description}
                  </p>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-praga-gray-light line-through">
                      {promo.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-praga-gold">
                      {promo.discountPrice}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsAppPromo(promo)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Consultar
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
          <h2 className="text-3xl font-display font-bold text-praga-gray mb-8">
            Comodidades
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {location.amenities.map((amenity, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-praga-gold/20 text-praga-gray px-4 py-2 rounded-full font-medium"
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
