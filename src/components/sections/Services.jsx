import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y rejuvenecimiento para todo tipo de piel',
      features: ['Limpieza profunda', 'Hidratación intensiva', 'Anti-aging', 'Piel sensible'],
      image: 'facial'
    },
    {
      icon: Zap,
      title: 'Depilación Láser',
      description: 'Eliminación permanente del vello no deseado con tecnología de última generación',
      features: ['Láser Diodo', 'Indoloro', 'Resultados permanentes', 'Todo tipo de piel'],
      image: 'laser'
    },
    {
      icon: Star,
      title: 'Mesoterapia',
      description: 'Revitalización y nutrición profunda de la piel con microinyecciones',
      features: ['Vitaminas', 'Ácido hialurónico', 'Antioxidantes', 'Hidratación'],
      image: 'meso'
    },
    {
      icon: Sun,
      title: 'Radiofrecuencia',
      description: 'Tensado y reafirmación de la piel sin cirugía',
      features: ['Reafirmación', 'Reducción arrugas', 'Estimula colágeno', 'Sin dolor'],
      image: 'radio'
    }
  ];

  return (
    <section id="services" className="section-padding bg-praga-beige">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Descubrí nuestra amplia gama de tratamientos diseñados para realzar tu belleza 
            natural y brindarte la confianza que merecés
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Image placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-praga-beige-dark to-praga-rose/30 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Placeholder for service image */}
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-heading font-bold text-praga-gray mb-4 group-hover:text-praga-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-praga-gray-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-praga-rose rounded-full"></div>
                    <span className="text-sm text-praga-gray-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full btn-secondary group-hover:bg-praga-gold group-hover:border-praga-gold group-hover:text-white transition-all duration-300">
                Más información
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-praga-gray-light mb-8">
            ¿No encontrás el tratamiento que buscás?
          </p>
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Consulta personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
