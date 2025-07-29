import React, { useState } from 'react';

/**
 * Carrusel de testimonios. Puedes reemplazar los testimonios por datos reales.
 */
const testimonials = [
  { name: 'María', text: 'Excelente atención y resultados. ¡Recomiendo Praga 100%!' },
  { name: 'Lucía', text: 'Un ambiente hermoso y profesional.' },
  { name: 'Sofía', text: 'Me sentí súper cómoda y contenida.' },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-20 bg-praga-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-title text-3xl md:text-4xl text-praga-dark mb-8">Testimonios</h2>
        <div className="relative bg-praga-beige rounded-xl shadow-md p-8 mb-6">
          <p className="font-body text-praga-dark text-lg mb-4">“{testimonials[index].text}”</p>
          <span className="font-title text-praga-gold">- {testimonials[index].name}</span>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
            <button onClick={prev} className="text-praga-gold hover:text-praga-accent text-2xl">‹</button>
            <button onClick={next} className="text-praga-gold hover:text-praga-accent text-2xl">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
