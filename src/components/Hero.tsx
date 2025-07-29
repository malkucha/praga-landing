import React from 'react';

/**
 * Hero principal con fondo estético, gradiente y llamada a la acción.
 */
const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-[80vh] flex items-center justify-center bg-praga-beige">
    {/* Imagen de fondo estética (puedes reemplazar el src por una imagen real) */}
    <img src="/assets/hero-bg.jpg" alt="Praga Estética" className="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div className="absolute inset-0 bg-gradient-to-b from-praga-beige/80 to-praga-accent/60" />
    <div className="relative z-10 text-center px-4">
      <h1 className="font-title text-4xl md:text-6xl text-praga-dark mb-4">Belleza & Bienestar</h1>
      <p className="font-body text-lg md:text-2xl text-praga-gold mb-8">Descubrí una experiencia única en Córdoba</p>
      <a href="#booking" className="inline-block bg-praga-gold text-praga-beige font-body px-8 py-3 rounded-full shadow-lg hover:bg-praga-accent transition">Reservar turno</a>
    </div>
  </section>
);

export default Hero;
