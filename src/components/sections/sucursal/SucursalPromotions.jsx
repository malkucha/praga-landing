import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

const SucursalPromotions = ({ promotions, onWhatsAppPromo, locationName }) => {
  return (
    <section className="section-padding bg-praga-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bold mb-6">
            Promociones Exclusivas
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Ofertas especiales disponibles solo en esta sucursal. Aprovechá estos descuentos únicos.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center group-hover:bg-praga-gold/30 transition-colors duration-300">
                    <Gift className="w-6 h-6 text-praga-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-praga-gray leading-tight">
                    {promo.title}
                  </h3>
                </div>
                <span className="bg-praga-gold text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ml-2">
                  -{promo.discount}
                </span>
              </div>
              
              <p className="text-praga-gray-dark mb-6 leading-relaxed">
                {promo.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-praga-gray-dark line-through">
                    {promo.originalPrice}
                  </span>
                  <span className="text-2xl font-bold text-praga-gold">
                    {promo.discountPrice}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => onWhatsAppPromo(promo)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Consultanos por WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SucursalPromotions;
