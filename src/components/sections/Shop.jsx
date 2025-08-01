import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star } from 'lucide-react';

const Shop = () => {
  const featuredProducts = [
    {
      name: 'Serum Vitamina C',
      price: '$2.500',
      rating: 5,
      image: 'serum',
      description: 'Ilumina y protege tu piel'
    },
    {
      name: 'Crema Hidratante',
      price: '$1.800',
      rating: 5,
      image: 'cream',
      description: 'Hidratación profunda 24h'
    },
    {
      name: 'Mascarilla Facial',
      price: '$950',
      rating: 4,
      image: 'mask',
      description: 'Purifica y revitaliza'
    }
  ];

  return (
    <section id="shop" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag className="w-12 h-12 text-praga-gold mr-3" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-praga-gray">
              Nuestra <span className="text-gradient">Tienda</span>
            </h2>
          </div>
          <p className="text-xl text-praga-gray-light max-w-3xl mx-auto leading-relaxed">
            Productos de cosmética profesional seleccionados especialmente para 
            potenciar los resultados de tus tratamientos en casa
          </p>
        </motion.div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-praga-beige/30 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-praga-white to-praga-beige-dark rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-praga-rose/20 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-praga-gold" />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-xl font-heading font-bold text-praga-gray mb-2">
                  {product.name}
                </h3>
                
                <p className="text-praga-gray-light text-sm mb-3">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating 
                          ? 'text-praga-gold fill-current' 
                          : 'text-praga-gray-light'
                      }`}
                    />
                  ))}
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-praga-gold mb-4">
                  {product.price}
                </p>

                {/* Add to Cart Button */}
                <button className="w-full btn-secondary group-hover:bg-praga-gold group-hover:border-praga-gold group-hover:text-white">
                  Agregar al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tienda Nube Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-praga-gold/10 to-praga-rose/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-display font-bold text-praga-gray mb-6">
            Explora toda nuestra colección
          </h3>
          
          <p className="text-lg text-praga-gray-light mb-8 max-w-2xl mx-auto">
            Descubrí nuestra línea completa de productos de cosmética profesional. 
            Envíos a todo el país y asesoramiento personalizado incluido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visitar tienda online</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <div className="flex items-center space-x-2 text-praga-gray-light">
              <div className="w-2 h-2 bg-praga-gold rounded-full animate-pulse"></div>
              <span className="text-sm">Envío gratis en compras superiores a $5.000</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-gold/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Envío gratuito</h4>
            <p className="text-sm text-praga-gray-light">En compras superiores a $5.000</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-rose/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💎</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Calidad premium</h4>
            <p className="text-sm text-praga-gray-light">Productos de cosmética profesional</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-praga-beige-dark/40 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-heading font-semibold text-praga-gray">Asesoramiento</h4>
            <p className="text-sm text-praga-gray-light">Consulta personalizada incluida</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
