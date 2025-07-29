import React from 'react';

/**
 * Sección de tienda online. Puedes reemplazar el iframe por un link externo si lo prefieres.
 */
const Shop: React.FC = () => (
  <section id="shop" className="py-20 bg-praga-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-title text-3xl md:text-4xl text-praga-dark mb-4">Tienda Online</h2>
      <p className="font-body text-praga-dark mb-6">Próximamente podrás comprar nuestros productos exclusivos desde la web.</p>
      {/* <iframe src="https://tu-tienda-nube.com" className="w-full h-96 rounded-lg border-2 border-praga-gold/20" title="Tienda Praga" /> */}
      <a href="https://www.tiendanube.com/" target="_blank" rel="noopener" className="inline-block bg-praga-gold text-praga-beige font-body px-8 py-3 rounded-full shadow-lg hover:bg-praga-accent transition">Ir a Tienda Nube</a>
    </div>
  </section>
);

export default Shop;
