import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SucursalAmenities = ({ amenities }) => {
  return (
    <section className="section-padding bg-praga-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-bold mb-6">
            Comodidades
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Servicios adicionales diseñados para hacer tu experiencia más placentera y relajante.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-praga-gray-light px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-praga-gold/20 rounded-full flex items-center justify-center group-hover:bg-praga-gold/30 transition-colors duration-300">
                <Sparkles className="w-4 h-4 text-praga-gold" />
              </div>
              <span className="font-medium text-praga-gray">
                {amenity}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SucursalAmenities;
