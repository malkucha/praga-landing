import { motion } from 'framer-motion';
import ServicioCard from './ServicioCard';

const ServiciosCategory = ({ category, index }) => {
  // Alternar el fondo para crear variedad visual
  const bgClass = index % 2 === 0 ? 'bg-praga-white' : 'bg-praga-gray-light';
  
  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-praga-gray-dark to-praga-gray rounded-full flex items-center justify-center">
              <category.icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="h2 font-bold mb-6">
            {category.name}
          </h2>
          
          <p className="text-lg md:text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
            >
              <ServicioCard 
                service={service} 
                categoryName={category.name}
                categoryIcon={category.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Category Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3 border border-praga-gray-light/30">
            <span className="text-praga-gray-dark font-medium">
              {category.services.length} {category.services.length === 1 ? 'servicio disponible' : 'servicios disponibles'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosCategory;
