import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './sections/HeroSection';
import About from './components/about/About';
import Services from './components/services/Services';
import Shop from './components/shop/Shop';
import Booking from './components/booking/Booking';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

/**
 * Layout principal de la landing page de Praga.
 * Cada sección es un bloque visual y semántico.
 */
function App() {
  return (
    <div className="bg-praga-beige min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Services />
        <Shop />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
