import React from 'react';

/**
 * Sección de servicios destacados con tarjetas.
 * Puedes personalizar los servicios y los íconos.
 */
const services = [
  { title: 'Faciales', icon: '💆‍♀️', desc: 'Tratamientos personalizados para tu piel.' },
  { title: 'Corporales', icon: '🧖‍♀️', desc: 'Relajación y cuidado integral.' },
  { title: 'Depilación', icon: '✨', desc: 'Métodos suaves y efectivos.' },
  { title: 'Uñas', icon: '💅', desc: 'Manicuría y belleza de manos.' },
];

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-praga-beige">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-title text-3xl md:text-4xl text-praga-dark text-center mb-10">Servicios destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-praga-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition">
            <span className="text-4xl mb-4">{s.icon}</span>
            <h3 className="font-title text-xl text-praga-gold mb-2">{s.title}</h3>
            <p className="font-body text-praga-dark text-center">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
