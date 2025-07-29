import React from 'react';
import Hero from '../components/hero/Hero';

/**
 * Sección principal de la landing, compone el Hero y puede incluir otros elementos decorativos.
 */
const HeroSection: React.FC = () => (
  <section>
    <Hero />
    {/* Aquí puedes agregar banners, decoraciones, CTA secundarios, etc. */}
  </section>
);

export default HeroSection;
