import { useState } from 'react';

// Pages/Views Components
import LandingPage from './pages/LandingPage';
import SucursalPage from './pages/SucursalPage';

const PageRouter = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentLocation, setCurrentLocation] = useState(null);

  const navigateToLanding = () => {
    setCurrentPage('landing');
    setCurrentLocation(null);
  };

  const navigateToSucursal = (locationId) => {
    setCurrentPage('sucursal');
    setCurrentLocation(locationId);
  };

  // Render the appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'sucursal':
        return (
          <SucursalPage 
            key={currentLocation} // Force re-render when location changes
            locationId={currentLocation} 
            onNavigateBack={navigateToLanding}
            onNavigateToSucursal={navigateToSucursal}
          />
        );
      case 'landing':
      default:
        return (
          <LandingPage 
            onNavigateToSucursal={navigateToSucursal}
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
