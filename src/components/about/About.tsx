import React from 'react';

/**
 * Sección "Quiénes somos" con breve descripción.
 */
const About: React.FC = () => (
  <section id="about" className="py-20 bg-praga-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-title text-3xl md:text-4xl text-praga-dark mb-4">Quiénes somos</h2>
      <p className="font-body text-praga-dark text-lg mb-2">En Praga, combinamos elegancia, calidez y profesionalismo para brindarte una experiencia de bienestar única. Nuestro equipo está comprometido con tu belleza y salud, en un ambiente relajante y sofisticado.</p>
    </div>
  </section>
);

export default About;