import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import logoHorizontal from '../../assets/logo-praga-horizontal.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Sucursales', href: '#locations' },
    { name: 'Tienda', href: '#shop' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img 
              src={logoHorizontal} 
              alt="Praga Estética" 
              className="h-8 md:h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Instagram Link */}
            <a
              href="https://instagram.com/pragacba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-praga-gray hover:text-praga-gold transition-colors duration-300 p-2 rounded-full hover:bg-praga-gold/10"
              aria-label="Síguenos en Instagram"
            >
              <span className="text-xs font-medium">Seguinos en</span>
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#appointments"
              className="btn-primary"
            >
              Reservar Turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-praga-gray" />
            ) : (
              <Menu className="w-6 h-6 text-praga-gray" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/20">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Instagram Link Mobile */}
                <a
                  href="https://instagram.com/pragacba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-praga-gray hover:text-praga-gold transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Seguinos en</span>
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="font-medium">@pragacba</span>
                </a>
                
                <a
                  href="#appointments"
                  className="btn-primary text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reservar Turno
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
