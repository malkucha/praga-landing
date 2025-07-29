import React from 'react';

/**
 * Navbar fija, transparente, con blur y menú de navegación.
 * Personaliza los enlaces según las secciones de tu landing.
 */
const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-praga-beige/60 border-b border-praga-gold/10">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <span className="font-title text-2xl text-praga-gold tracking-wide">Praga</span>
      <ul className="flex gap-6 font-body text-praga-dark">
        <li><a href="#about" className="hover:text-praga-gold transition">Quiénes somos</a></li>
        <li><a href="#services" className="hover:text-praga-gold transition">Servicios</a></li>
        <li><a href="#shop" className="hover:text-praga-gold transition">Tienda</a></li>
        <li><a href="#booking" className="hover:text-praga-gold transition">Turnos</a></li>
        <li><a href="#testimonials" className="hover:text-praga-gold transition">Testimonios</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
