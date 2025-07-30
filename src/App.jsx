import { useEffect } from 'react'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Locations from './components/sections/Locations'
import Shop from './components/sections/Shop'
import Appointments from './components/sections/Appointments'
import Testimonials from './components/sections/Testimonials'

function App() {
  // Smooth scrolling behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="App">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section - Primero mostramos qué ofrecemos */}
        <Services />
        
        {/* About Section - Luego generamos confianza */}
        <About />
        
        {/* Locations Section - Dónde encontrarnos */}
        <Locations />
        
        {/* Testimonials Section - Prueba social */}
        <Testimonials />
        
        {/* Shop Section - Productos complementarios */}
        <Shop />
        
        {/* Appointments Section - Call to action final */}
        <Appointments />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
