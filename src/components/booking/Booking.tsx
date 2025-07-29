import React from 'react';

/**
 * Sección de turnos con botón a WhatsApp.
 */
const Booking: React.FC = () => (
  <section id="booking" className="py-20 bg-praga-beige">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-title text-3xl md:text-4xl text-praga-dark mb-4">Reservá tu turno</h2>
      <p className="font-body text-praga-dark mb-6">Coordiná tu cita con nuestro equipo vía WhatsApp.</p>
      <a href="https://wa.me/5493510000000" target="_blank" rel="noopener" className="inline-block bg-praga-accent text-praga-white font-body px-8 py-3 rounded-full shadow-lg hover:bg-praga-gold transition">Agendar por WhatsApp</a>
    </div>
  </section>
);

export default Booking;