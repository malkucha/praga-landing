import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const SucursalSchedule = ({ serviceSchedule }) => {
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
            Días de Servicios Especiales
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Horarios especializados para cada tipo de tratamiento, organizados para brindarte la mejor atención.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(serviceSchedule).map(([service, days], index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-praga-gold/20 rounded-full flex items-center justify-center group-hover:bg-praga-gold/30 transition-colors duration-300">
                  <Clock className="w-8 h-8 text-praga-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-praga-gray">
                    {service}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
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
      </div>
    </section>
  );
};

export default SucursalSchedule;
