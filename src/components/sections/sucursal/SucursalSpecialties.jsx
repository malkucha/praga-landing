import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SucursalSpecialties = ({ specialties }) => {
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
            Nuestras Especialidades
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Servicios especializados diseñados para realzar tu belleza natural con la más alta calidad y profesionalismo.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-praga-gray-light rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-praga-gold/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-praga-gold/30 transition-colors duration-300">
                  <Star className="w-8 h-8 text-praga-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-praga-gray leading-tight">
                    {specialty}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SucursalSpecialties;
