import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const SucursalTeam = ({ team }) => {
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
            Nuestro Equipo
          </h1>
          <p className="text-xl text-praga-gray-dark max-w-3xl mx-auto leading-relaxed">
            Profesionales especializados comprometidos con tu bienestar y belleza, con años de experiencia y formación continua.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-praga-gray-light rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-praga-gold to-praga-rose rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-praga-gray mb-3">
                {member.name}
              </h3>
              
              <p className="text-praga-gold font-medium mb-2 text-lg">
                {member.specialty}
              </p>
              
              <p className="text-praga-gray-dark">
                {member.experience} de experiencia
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SucursalTeam;
