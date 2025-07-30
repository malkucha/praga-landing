import { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import logoHorizontal from '../../assets/logo-praga-horizontal.svg';
import { locations } from '../../data/locations';

const Navbar = ({ onNavigateToSucursal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Promociones', href: '#promotions' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Sucursales', href: '#locations', hasDropdown: true },
    { name: 'Tienda', href: '#shop' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  const handleSucursalClick = (locationId) => {
    if (onNavigateToSucursal) {
      onNavigateToSucursal(locationId);
    }
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

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
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center space-x-1 text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-praga-gray-light/20 py-2 z-50">
                        <a
                          href="#locations"
                          onClick={handleDropdownItemClick}
                          className="block px-4 py-3 text-praga-gray hover:text-praga-gold hover:bg-praga-beige/30 transition-colors duration-300 font-medium border-b border-praga-gray-light/20"
                        >
                          Ver todas las sucursales
                        </a>
                        {locations.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => handleSucursalClick(location.id)}
                            className="w-full text-left px-4 py-3 text-praga-gray hover:text-praga-gold hover:bg-praga-beige/30 transition-colors duration-300"
                          >
                            <div className="font-medium">{location.name}</div>
                            <div className="text-sm text-praga-gray-light">{location.address}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
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
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <a
                          href={item.href}
                          className="text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium py-2 block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                        <div className="ml-4 mt-2 space-y-2">
                          {locations.map((location) => (
                            <button
                              key={location.id}
                              onClick={() => handleSucursalClick(location.id)}
                              className="block text-left text-praga-gray-light hover:text-praga-gold transition-colors duration-300 py-1"
                            >
                              <div className="font-medium text-sm">{location.name}</div>
                              <div className="text-xs text-praga-gray-light">{location.address}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="text-praga-gray hover:text-praga-gold transition-colors duration-300 font-medium py-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
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
