/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para exportación estática (compatible con Netlify)
  output: 'export',
  
  // Desactivar optimización de imágenes para export estático
  images: {
    unoptimized: true
  },
  
  // Base path si usas un subdirectorio (opcional)
  // basePath: '/praga',
  
  // Configuración de trailing slash
  trailingSlash: true,
  
  // Configuración para assets
  assetPrefix: '',
  
  // Configuración de Tailwind (si usas)
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
