import { useState, useEffect } from 'react';

// Pages/Views Components
import LandingPage from './pages/LandingPage';
import SucursalPage from './pages/SucursalPage';
import ServiciosPage from './pages/ServiciosPage';

const PageRouter = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [targetSection, setTargetSection] = useState(null);

  // Función para parsear la URL hash
  const parseHash = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/sucursal/')) {
      const locationId = hash.replace('#/sucursal/', '');
      return { page: 'sucursal', location: locationId };
    } else if (hash === '#/servicios') {
      return { page: 'servicios', location: null };
    } else {
      return { page: 'landing', location: null };
    }
  };

  // Función para actualizar la URL
  const updateURL = (page, location = null) => {
    if (page === 'sucursal' && location) {
      window.location.hash = `#/sucursal/${location}`;
    } else if (page === 'servicios') {
      window.location.hash = '#/servicios';
    } else {
      window.location.hash = '';
    }
  };

  // Efecto para manejar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const { page, location } = parseHash();
      setCurrentPage(page);
      setCurrentLocation(location);
    };

    // Parsear URL inicial
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToLanding = (section = null) => {
    setCurrentPage('landing');
    setCurrentLocation(null);
    setTargetSection(section);
    updateURL('landing');
  };

  const navigateToServicios = () => {
    setCurrentPage('servicios');
    setCurrentLocation(null);
    setTargetSection(null);
    updateURL('servicios');
  };

  const navigateToSucursal = (locationId) => {
    if (locationId == null) {
      setCurrentPage('landing');
      setCurrentLocation(null);
      setTargetSection(null);
      updateURL('landing');
    } else {
      setCurrentPage('sucursal');
      setCurrentLocation(locationId);
      setTargetSection(null);
      updateURL('sucursal', locationId);
    }
  };

  // Render the appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'servicios':
        return (
          <ServiciosPage 
            onNavigateBack={() => navigateToLanding()}
            onNavigateToSucursal={navigateToSucursal}
            onNavigateToServicios={navigateToServicios}
            onNavigateToLanding={navigateToLanding}
          />
        );
      case 'sucursal':
        return (
          <SucursalPage 
            key={currentLocation} // Force re-render when location changes
            locationId={currentLocation} 
            onNavigateBack={() => navigateToLanding()}
            onNavigateToSucursal={navigateToSucursal}
            onNavigateToServicios={navigateToServicios}
            onNavigateToLanding={navigateToLanding}
          />
        );
      case 'landing':
      default:
        return (
          <LandingPage 
            onNavigateToSucursal={navigateToSucursal}
            onNavigateToServicios={navigateToServicios}
            targetSection={targetSection}
            onSectionNavigated={() => setTargetSection(null)}
          />
        );
    }
  };

  return (
    <div className="page-router">
      {renderPage()}
    </div>
  );
};

export default PageRouter;
