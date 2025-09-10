import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import quienesSomosImage from '../../assets/quienes-somos.jpg';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Pasión por la belleza',
      description: 'Cada tratamiento está diseñado con amor y dedicación para realzar tu belleza natural.'
    },
    {
      icon: Award,
      title: 'Excelencia garantizada',
      description: 'Utilizamos las técnicas más avanzadas y productos de la más alta calidad.'
    },
    {
      icon: Users,
      title: 'Experiencia personalizada',
      description: 'Cada cliente es único, por eso personalizamos cada tratamiento según tus necesidades.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-praga-gray-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold mb-6">
              Quiénes somos
            </h1>
            
            <p className="text-lg text-praga-gray-dark mb-8 leading-relaxed">
              En Praga, creemos que la belleza va más allá de la apariencia. Es sobre sentirse 
              segura, radiante y auténtica. Nuestro equipo de profesionales altamente capacitados 
              se dedica a crear experiencias transformadoras que nutren tanto el cuerpo como el alma.
            </p>

            <p className="text-lg text-praga-gray-dark mb-12 leading-relaxed">
              Desde tratamientos faciales personalizados hasta procedimientos estéticos avanzados, 
              cada servicio está cuidadosamente diseñado para ayudarte a alcanzar tus objetivos 
              de belleza de manera segura y efectiva.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-praga-rose/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-praga-gray" />
                  </div>
                  <div>
                    <h1 className="text-xl font-heading font-semibold text-praga-gray-dark mb-2">
                      {feature.title}
                    </h1>
                    <p className="text-praga-gray-dark leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={quienesSomosImage} 
                alt="Equipo profesional de Praga Centro de Estética" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-praga-gray-x-dark rounded-xl shadow-xl p-6 glass-effect"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-praga-gray-light rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-praga-gray" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-praga-gray">500+</p>
                  <p className="text-sm text-praga-gray-light">Clientes felices</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
