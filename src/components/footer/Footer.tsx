import React from 'react';

/**
 * Footer con contacto y redes sociales.
 */
const Footer: React.FC = () => (
  <footer className="bg-praga-dark text-praga-beige py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-title text-xl">Praga &copy; {new Date().getFullYear()}</div>
      <div className="flex gap-6">
        <a href="https://www.instagram.com/pragacba/" target="_blank" rel="noopener" className="hover:text-praga-gold transition">Instagram</a>
        <a href="mailto:info@praga.com" className="hover:text-praga-gold transition">info@praga.com</a>
        <a href="https://wa.me/5493510000000" target="_blank" rel="noopener" className="hover:text-praga-gold transition">WhatsApp</a>
      </div>
    </div>
  </footer>
);