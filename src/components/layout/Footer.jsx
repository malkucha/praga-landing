import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { locations } from '../../data/locations';
import logoHorizontal from '../../assets/iso-logo-praga-blanco.svg';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Usar horarios de la primera ubicación (ya que ambas tienen los mismos horarios)
  const schedule = [
    { day: 'Lunes a Viernes', hours: locations[0].schedule.weekdays.split(': ')[1] },
    { day: 'Sábados', hours: locations[0].schedule.saturday.split(': ')[1] }
  ];

  return (
    <footer className="bg-praga-gray-x-dark text-praga-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <img 
              src={logoHorizontal} 
              alt="Praga Estética" 
              className="h-14 md:h-16 w-auto transition-all duration-300 hover:scale-105 mb-4"
            />
            
            {/* Social Media */}
            <div className="flex items-center justify-center lg:justify-start w-full">
              <a
                href="https://www.instagram.com/pragacba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                <span className="text-sm text-praga-white/80 mr-0 group-hover:text-praga-white transition-colors">Seguinos en</span>
                <div className="w-10 h-10 -ml-0.5 bg-praga-gray-dark/20 rounded-full flex items-center justify-center group-hover:bg-praga-gray group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-praga-white/10 rounded-2xl p-4">
                  <h5 className="font-heading font-semibold text-praga-white mb-3">
                    {location.name}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-praga-gray mt-0.5 flex-shrink-0" />
                      <span className="text-praga-white/80">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-praga-gray" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-praga-white/80 hover:text-praga-white transition-colors"
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
            className="lg:w-64"
          >

            <div className="text-praga-white/80 text-center">
              <div className="font-medium">{schedule[0].day}</div>
              <div className="text-sm text-praga-gray">{schedule[0].hours}</div>
            </div>
            <div className="text-praga-white/80 text-center">
                <div className="font-medium">{schedule[1].day}</div>
                <div className="text-sm text-praga-gray">{schedule[1].hours}</div>
              </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-praga-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-praga-white/60">
            <div>
              © 2021 PRAGA ESTHETIC & WELLNESS. Todos los derechos reservados.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-praga-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-praga-white transition-colors duration-300">
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
