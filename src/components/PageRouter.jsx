import { useState } from 'react';

// Pages/Views Components
import LandingPage from './pages/LandingPage';
import SucursalPage from './pages/SucursalPage';
import ServiciosPage from './pages/ServiciosPage';

const PageRouter = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [targetSection, setTargetSection] = useState(null);

  const navigateToLanding = (section = null) => {
    setCurrentPage('landing');
    setCurrentLocation(null);
    setTargetSection(section);
  };

  const navigateToServicios = () => {
    setCurrentPage('servicios');
    setCurrentLocation(null);
    setTargetSection(null);
  };

  const navigateToSucursal = (locationId) => {
    if (locationId == null) {
      setCurrentPage('landing');
      setCurrentLocation(null);
      setTargetSection(null);
    } else {
      setCurrentPage('sucursal');
      setCurrentLocation(locationId);
      setTargetSection(null);
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
