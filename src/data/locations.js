import nuevaCordobaImage from '../assets/praga-sucursal-nueva-cordoba.jpg';
import cerroImage from '../assets/praga-sucursal-cerro.jpg';

export const locations = [
  {
    id: 'nueva-cordoba',
    name: 'PRAGA | Nueva Córdoba',
    address: 'Av. Hipólito Yrigoyen 123, Nueva Córdoba',
    phone: '+54 351 548-8483',
    whatsapp: '+5493515488483',
    googleMapsUrl: 'https://www.google.com/maps/place/PRAGA+Centro+de+Est%C3%A9tica/@-31.4219482,-64.1903609,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a34dca8bad43:0x10464912346aba86!8m2!3d-31.4219482!4d-64.187786!16s%2Fg%2F11j0ytq1z7?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D',
    schedule: {
      weekdays: 'Lun - Vie: 8:00 - 20:00',
      saturday: 'Sáb: 8:00 - 14:00',
      sunday: 'Dom: Cerrado'
    },
    services: ['Todos los servicios', 'Depilación láser', 'Tratamientos faciales', 'Mesoterapia'],
    image: nuevaCordobaImage,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.234567890123!2d-64.1903609!3d-31.4219482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a34dca8bad43%3A0x10464912346aba86!2sPRAGA%20Centro%20de%20Est%C3%A9tica!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar'
  },
  {
    id: 'zona-norte',
    name: 'PRAGA | Cerro',
    address: 'Tristán Malbrán 4240, Cerro de las Rosas',
    phone: '+54 351 218-5804',
    whatsapp: '+5493512185804',
    googleMapsUrl: 'https://www.google.com/maps/place/PRAGA+Zona+Norte/@-31.37222,-64.254948,15z/data=!3m1!4b1!4m6!3m5!1s0x943299376e254d4b:0x363c4e0ebfea34c6!8m2!3d-31.3722213!4d-64.236494!16s%2Fg%2F11xh04t8bg?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D',
    schedule: {
      weekdays: 'Lun - Vie: 8:00 - 20:00',
      saturday: 'Sáb: 8:00 - 14:00',
      sunday: 'Dom: Cerrado'
    },
    services: ['Todos los servicios', 'Radiofrecuencia', 'Lifting de pestañas', 'Manicura'],
    image: cerroImage,
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6234567890123!2d-64.25494800000001!3d-31.3722213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299376e254d4b%3A0x363c4e0ebfea34c6!2sPRAGA%20Zona%20Norte!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar'
  }
];
