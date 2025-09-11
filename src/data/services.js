import { Sparkles, Zap, Star, Sun, Heart, Eye, Stethoscope, Droplets, Scissors } from 'lucide-react';

// Categorías de servicios con información detallada
export const serviceCategories = [
  {
    id: 'estetica-facial',
    name: 'Estética Facial',
    description: 'Tratamientos diseñados para mejorar la salud y apariencia de la piel, devolviéndole luminosidad, firmeza y frescura.',
    icon: Sparkles,
    image: 'facial',
    services: [
      {
        id: 'limpieza-facial',
        name: 'Limpieza facial profunda',
        description: 'Limpieza profunda que remueve impurezas y células muertas.',
        duration: '60 min',
        image: null
      },
      {
        id: 'peeling',
        name: 'Peeling',
        description: 'Exfoliación química para renovar la piel.',
        duration: '45 min',
        image: null
      },
      {
        id: 'dermapen',
        name: 'Dermapen',
        description: 'Microagujas para estimular la producción de colágeno.',
        duration: '60 min',
        image: null
      },
      {
        id: 'dermaplaning',
        name: 'Dermaplaning',
        description: 'Exfoliación física que elimina células muertas y vello facial.',
        duration: '45 min',
        image: null
      },
      {
        id: 'exosomas',
        name: 'Exosomas',
        description: 'Terapia regenerativa avanzada para rejuvenecimiento facial.',
        duration: '90 min',
        image: null
      },
      {
        id: 'mesoterapia-facial',
        name: 'Mesoterapia facial',
        description: 'Inyecciones de vitaminas y nutrientes para hidratar la piel.',
        duration: '45 min',
        image: null
      },
      {
        id: 'radiofrecuencia',
        name: 'Radiofrecuencia fraccionada',
        description: 'Tecnología para tensar y rejuvenecer la piel.',
        duration: '60 min',
        image: null
      },
      {
        id: 'acido-hialuronico',
        name: 'Ácido hialurónico',
        description: 'Rellenos para hidratar y dar volumen a la piel.',
        duration: '30 min',
        image: null
      },
      {
        id: 'bioestimuladores',
        name: 'Bioestimuladores de colágeno',
        description: 'Estimulación natural de la producción de colágeno.',
        duration: '45 min',
        image: null
      },
      {
        id: 'botox',
        name: 'Toxina botulínica (botox)',
        description: 'Tratamiento para arrugas de expresión.',
        duration: '30 min',
        image: null
      }
    ]
  },
  {
    id: 'micropigmentacion',
    name: 'Micropigmentación',
    description: 'Técnicas semipermanentes que realzan rasgos faciales como labios y cejas, brindando definición, color y naturalidad.',
    icon: Zap,
    image: 'micropigmentacion',
    services: [
      {
        id: 'micropigmentacion-labios',
        name: 'Micropigmentación de labios',
        description: 'Técnica semipermanente para definir y dar color a los labios.',
        duration: '120 min',
        image: null
      },
      {
        id: 'micropigmentacion-cejas',
        name: 'Micropigmentación de cejas',
        description: 'Definición y relleno semipermanente de cejas.',
        duration: '120 min',
        image: null
      }
    ]
  },
  {
    id: 'tratamientos-corporales',
    name: 'Tratamientos Corporales',
    description: 'Procedimientos enfocados en modelar la figura, reducir celulitis, mejorar la circulación y relajar el cuerpo.',
    icon: Star,
    image: 'corporales',
    services: [
      {
        id: 'vela-shape',
        name: 'Vela Shape',
        description: 'Tecnología para modelar el cuerpo y reducir celulitis.',
        duration: '45 min',
        image: null
      },
      {
        id: 'venus-legacy',
        name: 'Venus Legacy',
        description: 'Radiofrecuencia multipolar para tensar la piel.',
        duration: '60 min',
        image: null
      },
      {
        id: 'mio-up',
        name: 'Mío Up',
        description: 'Estimulación muscular para tonificar el cuerpo.',
        duration: '30 min',
        image: null
      },
      {
        id: 'presoterapia',
        name: 'Presoterapia',
        description: 'Drenaje linfático mecánico para reducir retención de líquidos.',
        duration: '45 min',
        image: null
      },
      {
        id: 'drenaje-linfatico',
        name: 'Drenaje linfático manual',
        description: 'Masaje manual para mejorar la circulación linfática.',
        duration: '60 min',
        image: null
      },
      {
        id: 'masajes',
        name: 'Masajes relajantes / descontracturantes',
        description: 'Masajes terapéuticos para relajar y descontracturar.',
        duration: '60 min',
        image: null
      },
      {
        id: 'mesoterapia-corporal',
        name: 'Mesoterapia corporal',
        description: 'Inyecciones localizadas para tratar adiposidad.',
        duration: '45 min',
        image: null
      },
      {
        id: 'bronceado-organico',
        name: 'Bronceado orgánico',
        description: 'Bronceado natural sin exposición solar.',
        duration: '30 min',
        image: null
      },
      {
        id: 'micropuncion-estrias',
        name: 'Micropunción de estrías',
        description: 'Tratamiento para mejorar la apariencia de estrías.',
        duration: '60 min',
        image: null
      }
    ]
  },
  {
    id: 'depilacion-definitiva',
    name: 'Depilación Definitiva',
    description: 'Sistema láser avanzado que elimina el vello de forma progresiva, segura y duradera.',
    icon: Sun,
    image: 'depilacion',
    services: [
      {
        id: 'laser-soprano',
        name: 'Depilación Láser Soprano',
        description: 'Tecnología láser de última generación para depilación definitiva.',
        duration: 'Variable según zona',
        image: null
      }
    ]
  },
  {
    id: 'laser-spectra',
    name: 'Láser Spectra',
    description: 'Tecnología láser de última generación para rejuvenecimiento, eliminación de tatuajes y más.',
    icon: Sparkles,
    image: 'spectra',
    services: [
      {
        id: 'borrado-tatuajes',
        name: 'Borrado de tatuajes',
        description: 'Eliminación segura de tatuajes con láser.',
        duration: 'Variable según tamaño',
        image: null
      },
      {
        id: 'hollywood-peel',
        name: 'Hollywood Peel',
        description: 'Tratamiento de rejuvenecimiento facial con láser.',
        duration: '45 min',
        image: null
      },
      {
        id: 'onicomicosis',
        name: 'Onicomicosis',
        description: 'Tratamiento láser para hongos en uñas.',
        duration: '30 min',
        image: null
      },
      {
        id: 'borrado-microblading',
        name: 'Borrado de microblading',
        description: 'Eliminación de micropigmentación no deseada.',
        duration: '30 min',
        image: null
      }
    ]
  },
  {
    id: 'belleza-facial',
    name: 'Belleza Facial',
    description: 'Tratamientos rápidos y efectivos para resaltar la mirada y armonizar el rostro.',
    icon: Eye,
    image: 'belleza',
    services: [
      {
        id: 'lifting-pestanas',
        name: 'Lifting y tinte de pestañas',
        description: 'Curvado y teñido de pestañas para una mirada más intensa.',
        duration: '45 min',
        image: null
      },
      {
        id: 'perfilado-cejas',
        name: 'Perfilado y laminado de cejas',
        description: 'Diseño y alisado de cejas para un look perfecto.',
        duration: '30 min',
        image: null
      }
    ]
  },
  {
    id: 'dermatologia',
    name: 'Dermatología',
    description: 'Procedimientos médico-estéticos para tratar lesiones de la piel y estimular la regeneración celular.',
    icon: Stethoscope,
    image: 'dermatologia',
    services: [
      {
        id: 'extraccion-lunares',
        name: 'Extracción de lunares',
        description: 'Remoción segura de lunares y lesiones cutáneas.',
        duration: '30 min',
        image: null
      },
      {
        id: 'extraccion-verrugas',
        name: 'Extracción de verrugas',
        description: 'Eliminación de verrugas mediante técnicas especializadas.',
        duration: '20 min',
        image: null
      },
      {
        id: 'luz-pulsada',
        name: 'Luz pulsada',
        description: 'Tratamiento para manchas y lesiones vasculares.',
        duration: '30 min',
        image: null
      },
      {
        id: 'prp',
        name: 'Plasma rico en plaquetas (PRP)',
        description: 'Terapia regenerativa con factores de crecimiento.',
        duration: '60 min',
        image: null
      }
    ]
  },
  {
    id: 'flebologia',
    name: 'Flebología',
    description: 'Tratamientos médicos para mejorar la salud y estética de las piernas mediante técnicas seguras.',
    icon: Droplets,
    image: 'flebologia',
    services: [
      {
        id: 'escleroterapia',
        name: 'Escleroterapia',
        description: 'Tratamiento para várices y arañitas vasculares.',
        duration: '45 min',
        image: null
      },
      {
        id: 'laser-vascular',
        name: 'Láser vascular',
        description: 'Eliminación de lesiones vasculares con láser.',
        duration: '30 min',
        image: null
      }
    ]
  },
  {
    id: 'tratamientos-capilares',
    name: 'Tratamientos Capilares',
    description: 'Terapias regenerativas y de nutrición profunda para frenar la caída y estimular el crecimiento del cabello.',
    icon: Scissors,
    image: 'capilar',
    services: [
      {
        id: 'prp-capilar',
        name: 'Plasma rico en plaquetas capilar (PRP capilar)',
        description: 'Terapia regenerativa para estimular el crecimiento capilar.',
        duration: '90 min',
        image: null
      },
      {
        id: 'mesoterapia-capilar',
        name: 'Mesoterapia capilar',
        description: 'Inyecciones de nutrientes para fortalecer el cabello.',
        duration: '45 min',
        image: null
      }
    ]
  }
];

// Función para obtener todas las categorías
export const getAllCategories = () => {
  return serviceCategories;
};

// Función para obtener una categoría específica
export const getCategoryById = (categoryId) => {
  return serviceCategories.find(category => category.id === categoryId);
};

// Función para obtener todos los servicios de una categoría
export const getServicesByCategory = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.services : [];
};

// Función para obtener un servicio específico
export const getServiceById = (serviceId) => {
  for (const category of serviceCategories) {
    const service = category.services.find(service => service.id === serviceId);
    if (service) {
      return { ...service, category: category.name };
    }
  }
  return null;
};

// Función para obtener servicios destacados (para la landing page)
export const getFeaturedServices = () => {
  return serviceCategories.map(category => ({
    icon: category.icon,
    title: category.name,
    description: category.description,
    features: category.services.map(service => service.name),
    image: category.image
  }));
};

// Función para buscar servicios
export const searchServices = (query) => {
  const results = [];
  const searchTerm = query.toLowerCase();
  
  serviceCategories.forEach(category => {
    // Buscar en el nombre de la categoría
    if (category.name.toLowerCase().includes(searchTerm)) {
      results.push({
        type: 'category',
        data: category
      });
    }
    
    // Buscar en los servicios
    category.services.forEach(service => {
      if (service.name.toLowerCase().includes(searchTerm) || 
          service.description.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'service',
          data: { ...service, categoryName: category.name, categoryId: category.id }
        });
      }
    });
  });
  
  return results;
};
