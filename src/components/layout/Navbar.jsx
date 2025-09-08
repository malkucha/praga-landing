import { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import logoHorizontal from '../../assets/iso-logo-praga-gris.svg';
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
        ? 'bg-praga-gray-light shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            className="flex items-center focus:outline-none group"
            onClick={() => {
              if (isLanding) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else if (onNavigateToSucursal) {
                onNavigateToSucursal(null);
              }
            }}
            aria-label="Ir a la página de inicio"
          >
            <div className="bg-praga-gray-x-dark rounded-full p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-praga-gray-dark">
              <img 
                src={logoHorizontal} 
                alt="Praga Estética" 
                className="h-8 md:h-10 w-auto filter brightness-0 invert"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center space-x-1 text-sm font-agrandir font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm ${
                        isScrolled ? 'text-praga-gray-x-dark' : 'text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                        <a
                          href="#locations"
                          onClick={handleDropdownItemClick}
                          className="block px-4 py-3 text-praga-gray-dark hover:text-praga-gray-light hover:bg-praga-gray-dark transition-colors duration-300 font-medium border-b border-gray-100"
                        >
                          TODAS LAS SUCURSALES
                        </a>
                        {locations.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => handleSucursalClick(location.id)}
                            className="w-full text-left px-4 py-3 text-praga-gray-dark hover:text-praga-gray-light hover:bg-praga-gray-dark transition-colors duration-300"
                          >
                            <div className="font-medium">{location.name}</div>
                            <div className="text-xs text-praga-gray mt-1">{location.address}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`text-sm font-agrandir font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm ${
                      isScrolled ? 'text-praga-gray-x-dark' : 'text-white'
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
              className={`flex items-center space-x-2 text-xs font-medium transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm ${
                isScrolled ? 'text-praga-gray-x-dark' : 'text-white'
              }`}
              aria-label="Síguenos en Instagram"
            >
              <span>Seguinos</span>
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4" style={{ display: 'none' }}>
            <a
              href="#appointments"
              className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                isScrolled 
                ? 'btn-primary' 
                : 'border-2 border-white text-white hover:bg-white hover:text-praga-gray-x-dark rounded-full'
              }`}
            >
              Reservá tu Turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú móvil"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-praga-gray-x-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-praga-gray-x-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-praga-gray-light border-t border-praga-gray mt-4 shadow-lg">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <a
                        href={item.href}
                        className="block text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium py-2 px-3 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                      <div className="ml-4 space-y-2">
                        {locations.map((location) => (
                          <button
                            key={location.id}
                            onClick={() => handleSucursalClick(location.id)}
                            className="block text-left text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 py-1 px-3 rounded-lg"
                          >
                            <div className="font-medium text-sm">{location.name}</div>
                            <div className="text-xs text-praga-gray-dark">{location.address}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium py-2 px-3 rounded-lg"
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
                className="flex items-center space-x-3 text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 py-2 px-3 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium">@pragacba</span>
              </a>

              {/* CTA Button Mobile */}
              <div className="pt-4 border-t border-praga-gray-light">
                <a
                  href="#appointments"
                  className="btn-primary block text-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reservá tu Turno
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
