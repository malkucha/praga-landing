import { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import logoHorizontal from '../../assets/iso-logo-praga-gris.svg';
import logoHorizontalBlanco from '../../assets/iso-logo-praga-blanco.svg';
import { locations } from '../../data/locations';

const Navbar = ({ onNavigateToSucursal, onNavigateToServicios, onNavigateToLanding, isLanding }) => {
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
    { name: 'SERVICIOS', href: '#services', action: 'services' },
    { name: 'NOSOTROS', href: '#about' },
    { name: 'SUCURSALES', href: '#locations', hasDropdown: true },
    { name: 'PRODUCTOS', href: 'https://pragaestetica.mitiendanube.com/' },
    { name: 'EXPERIENCIAS', href: '#testimonials' },
  ];

  const handleSucursalClick = (locationId) => {
    if (onNavigateToSucursal) {
      onNavigateToSucursal(locationId);
    }
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavItemClick = (item) => {
    if (item.action === 'services' && onNavigateToServicios) {
      onNavigateToServicios();
      setIsMobileMenuOpen(false);
    } else if (item.href && isLanding) {
      // Scroll to section if on landing page
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else if (item.href && !isLanding && onNavigateToLanding) {
      // Navigate to landing page with target section if not on landing
      onNavigateToLanding(item.href);
      setIsMobileMenuOpen(false);
    }
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
              } else if (onNavigateToLanding) {
                onNavigateToLanding();
              }
            }}
            aria-label="Ir a la página de inicio"
          >
            <img 
              src={isScrolled ? logoHorizontal : logoHorizontalBlanco} 
              alt="Praga Estética" 
              className="h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
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
                        <div className="absolute top-full right-0 md:left-0 md:right-auto mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
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
                    <button
                      onClick={() => handleNavItemClick(item)}
                      className={`text-sm font-agrandir font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/20 backdrop-blur-sm ${
                        isScrolled ? 'text-praga-gray-x-dark' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Instagram and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Instagram Link - Desktop */}
            <a
              href="https://instagram.com/pragacba"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:flex items-center space-x-2 text-xs font-medium transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm ${
                isScrolled ? 'text-praga-gray-x-dark' : 'text-white'
              }`}
              aria-label="Síguenos en Instagram"
            >
              <span>Seguinos</span>
              <Instagram className="w-4 h-4" />
            </a>

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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-praga-gray-light border-t border-praga-gray mt-4 shadow-lg">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => handleNavItemClick({ href: item.href })}
                        className="block text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium py-2 px-3 rounded-lg w-full text-left"
                      >
                        {item.name}
                      </button>
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
                    <button
                      onClick={() => handleNavItemClick(item)}
                      className="block text-praga-gray-x-dark hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-medium py-2 px-3 rounded-lg w-full text-left"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}

              {/* Instagram Link Mobile */}
              <div className="pt-4 border-t border-praga-gray-dark/20">
                <a
                  href="https://instagram.com/pragacba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-praga-gray-x-dark py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Seguinos en Instagram</span>
                  <Instagram className="w-4 h-4" />
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
