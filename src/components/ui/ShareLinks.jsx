import { useState } from 'react';
import { Copy, Check, ExternalLink, Share2 } from 'lucide-react';
import { getSucursalLink, getServiciosLink, copyLinkToClipboard } from '../../utils/linkGenerator';

const ShareLinks = ({ locationId = null, type = 'sucursal' }) => {
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopy = async (linkType, url) => {
    const success = await copyLinkToClipboard(url);
    if (success) {
      setCopiedStates({ ...copiedStates, [linkType]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [linkType]: false });
      }, 2000);
    }
  };

  const generateLinks = () => {
    if (type === 'sucursal' && locationId) {
      return [
        {
          label: 'Link directo a esta sucursal',
          url: getSucursalLink(locationId),
          type: 'sucursal',
          description: 'Perfecto para Google Maps, redes sociales, o email'
        }
      ];
    } else if (type === 'servicios') {
      return [
        {
          label: 'Link directo a servicios',
          url: getServiciosLink(),
          type: 'servicios',
          description: 'Para promocionar nuestros servicios'
        }
      ];
    }
    return [];
  };

  const links = generateLinks();

  if (links.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-praga-gray-light/20">
      <div className="flex items-center space-x-2 mb-4">
        <Share2 className="w-5 h-5 text-praga-gray-dark" />
        <h3 className="font-semibold text-praga-gray-dark">Compartir</h3>
      </div>
      
      <div className="space-y-4">
        {links.map((link) => (
          <div key={link.type} className="space-y-2">
            <label className="text-sm font-medium text-praga-gray-dark">
              {link.label}
            </label>
            <p className="text-xs text-praga-gray">
              {link.description}
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 flex items-center bg-praga-gray-light/30 rounded-lg px-3 py-2">
                <input
                  type="text"
                  value={link.url}
                  readOnly
                  className="flex-1 bg-transparent text-sm text-praga-gray-dark outline-none"
                />
                <ExternalLink className="w-4 h-4 text-praga-gray ml-2" />
              </div>
              
              <button
                onClick={() => handleCopy(link.type, link.url)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  copiedStates[link.type]
                    ? 'bg-green-500 text-white'
                    : 'bg-praga-gray text-white hover:bg-praga-gray-dark'
                }`}
              >
                {copiedStates[link.type] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-praga-beige/30 rounded-lg">
        <p className="text-xs text-praga-gray-dark">
          💡 <strong>Tip:</strong> Estos links funcionan perfectamente para Google Maps Business, 
          Instagram Bio, QR codes, email marketing, y cualquier lugar donde necesites 
          un acceso directo a esta página.
        </p>
      </div>
    </div>
  );
};

export default ShareLinks;
