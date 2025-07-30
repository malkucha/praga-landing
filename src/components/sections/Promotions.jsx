import { motion } from 'framer-motion';
import { Tag, Clock, MapPin, ArrowRight } from 'lucide-react';
import { getFeaturedPromotions } from '../../data/promotions';
import { locations } from '../../data/locations';

const Promotions = () => {
  const featuredPromotions = getFeaturedPromotions();

  const getLocationNames = (locationIds) => {
    return locationIds.map(id => {
      const location = locations.find(loc => loc.id === id);
      return location ? location.name.replace('PRAGA | ', '') : '';
    }).join(' y ');
  };

  const handleWhatsAppPromo = (promo) => {
    const locationId = promo.locations[0]; // Usar la primera ubicación
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      const message = `Hola! Me interesa la promoción "${promo.title}" en ${location.name}. ¿Podrían darme más información?`;
      const url = `https://wa.me/${location.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="promotions" className="section-padding bg-gradient-to-br from-praga-beige/30 to-praga-rose/20">
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
            <Tag className="w-12 h-12 text-praga-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Nuestras <span className="text-gradient">Promociones</span>
            </h2>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Aprovechá nuestras ofertas especiales y viví la experiencia Praga 
            con descuentos únicos por tiempo limitado.
          </p>
        </motion.div>

        {/* Featured Promotions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPromotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Promo Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-praga-gold/20 to-praga-rose/30 flex items-center justify-center">
                <div className="absolute top-4 right-4 bg-praga-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{promo.discount}
                </div>
                <div className="text-center">
                  <Tag className="w-12 h-12 text-praga-gold mb-2" />
                  <p className="text-praga-gray font-medium">{promo.image}</p>
                </div>
              </div>

              {/* Promo Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-praga-gray mb-3">
                  {promo.title}
                </h3>
                
                <p className="text-praga-gray-light mb-4 text-sm leading-relaxed">
                  {promo.description}
                </p>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-lg text-praga-gray-light line-through">
                    {promo.originalPrice}
                  </span>
                  <span className="text-2xl font-bold text-praga-gold">
                    {promo.discountPrice}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center space-x-2 text-praga-gray-light">
                    <Clock className="w-4 h-4" />
                    <span>Válido hasta {promo.validUntil}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-praga-gray-light">
                    <MapPin className="w-4 h-4" />
                    <span>{getLocationNames(promo.locations)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsAppPromo(promo)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                >
                  <span>Consultar por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to see all promotions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-praga-gray rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-heading font-bold mb-4 text-praga-gold">
              ¿Querés ver todas nuestras promociones?
            </h3>
            <p className="text-lg mb-6 text-praga-white">
              Cada sucursal tiene ofertas exclusivas. Elegí tu ubicación preferida 
              y descubrí todas las promociones disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {locations.map((location) => (
                <a
                  key={location.id}
                  href={`#${location.id}-detail`}
                  className="inline-block bg-praga-gold hover:bg-praga-gold-light text-praga-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Ver promociones en {location.name.replace('PRAGA | ', '')}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotions;
