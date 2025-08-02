import { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import logoHorizontal from '../../assets/logo-praga-gris.svg';
import { locations } from '../../data/locations';

const Navbar = ({ onNavigateToSucursal, isLanding }) => {
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
    // { name: 'Inicio', href: '#hero' },
    { name: 'SERVICIOS', href: '#services' },
    { name: 'PROMOCIONES', href: '#promotions' },
    { name: 'NOSOTROS', href: '#about' },
    { name: 'SUCURSALES', href: '#locations', hasDropdown: true },
    { name: 'TIENDA', href: '#shop' },
    { name: 'TESTIMONIOS', href: '#testimonials' },
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
          <button
            className="flex items-center focus:outline-none"
            onClick={() => {
              if (isLanding) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (onNavigateToSucursal) {
                onNavigateToSucursal(null);
              }
            }}
            aria-label="Ir a la página de inicio"
          >
            <img 
              src={logoHorizontal} 
              alt="Praga Estética" 
              className={`h-10 md:h-14 w-auto transition-all duration-300 hover:scale-105 ${
                isScrolled ? '' : 'filter brightness-0 invert'
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center space-x-1 hover:text-praga-gold transition-colors duration-300 font-heading font-medium ${
                        isScrolled ? 'text-praga-gray' : 'text-white'
                      }`}
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
                          TODAS
                        </a>
                        {locations.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => handleSucursalClick(location.id)}
                            className="w-full text-left px-4 py-3 text-praga-gray hover:text-praga-gold hover:bg-praga-beige/30 transition-colors duration-300"
                          >
                            <div className="font-medium">{location.name}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`hover:text-praga-gold transition-colors duration-300 font-heading font-medium ${
                      isScrolled ? 'text-praga-gray' : 'text-white'
                    }`}
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
              className={`flex items-center space-x-2 hover:text-praga-gold transition-colors duration-300 p-2 rounded-full hover:bg-praga-gold/10 ${
                isScrolled ? 'text-praga-gray' : 'text-white'
              }`}
              aria-label="Síguenos en Instagram"
            >
              <span className="text-xs font-medium">Seguinos en</span>
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Button - Adaptado a diferentes tamaños */}
          <div className="hidden sm:block">
            <a
              href="#appointments"
              className={`md:px-4 md:py-2 lg:px-6 lg:py-2.5 md:text-sm lg:text-base transition-all duration-300 ${
                isScrolled 
                ? 'btn-primary' 
                : 'border-2 border-white text-white hover:bg-white/20 rounded-full font-medium'
              }`}
            >
              <span className="md:hidden lg:inline">Reservá tu Turno</span>
              <span className="hidden md:inline lg:hidden">Reservá</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Botón CTA mini para móvil */}
            <a
              href="#appointments"
              className={`sm:hidden mr-2 px-3 py-1.5 text-xs transition-all duration-300 ${
                isScrolled 
                ? 'btn-primary' 
                : 'border-2 border-white text-white hover:bg-white/20 rounded-full font-medium'
              }`}
            >
              Reservá
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-praga-gray' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-praga-gray' : 'text-white'}`} />
            )}
          </button>
          </div>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
