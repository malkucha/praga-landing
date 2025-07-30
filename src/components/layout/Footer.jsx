import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { locations } from '../../data/locations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Usar horarios de la primera ubicación (ya que ambas tienen los mismos horarios)
  const schedule = [
    { day: 'Lunes a Viernes', hours: locations[0].schedule.weekdays.split(': ')[1] },
    { day: 'Sábados', hours: locations[0].schedule.saturday.split(': ')[1] },
    { day: 'Domingos', hours: locations[0].schedule.sunday.split(': ')[1] }
  ];

  const services = [
    'Tratamientos Faciales',
    'Depilación Láser',
    'Mesoterapia',
    'Radiofrecuencia',
    'Limpieza Profunda',
    'Lifting de Pestañas'
  ];

  return (
    <footer className="bg-praga-gray text-praga-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-display font-bold text-praga-gold mb-4">
              Praga
            </h3>
            <p className="text-praga-white/80 mb-6 leading-relaxed">
              Tu centro de estética de confianza en Córdoba. 
              Especialistas en tratamientos de belleza personalizados 
              con la más alta calidad y profesionalismo.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/pragacba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center hover:bg-praga-gold hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-heading font-semibold text-praga-gold mb-6">
              Nuestras Sucursales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-praga-white/10 rounded-2xl p-4">
                  <h5 className="font-heading font-semibold text-praga-white mb-3">
                    {location.name}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-praga-gold mt-0.5 flex-shrink-0" />
                      <span className="text-praga-white/80">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-praga-gold" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-praga-white/80 hover:text-praga-gold transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-heading font-semibold text-praga-gold mb-6">
              <Clock className="w-5 h-5 inline-block mr-2" />
              Horarios
            </h4>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className="text-praga-white/80">
                  <div className="font-medium">{item.day}</div>
                  <div className="text-sm text-praga-gold">{item.hours}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-xl font-heading font-semibold text-praga-gold mb-6">
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-praga-white/80 hover:text-praga-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-praga-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-praga-white/60">
            <div>
              © {currentYear} Praga Centro de Estética. Todos los derechos reservados.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-praga-gold transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-praga-gold transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
