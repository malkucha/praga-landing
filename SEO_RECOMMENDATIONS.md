# Plan de Mejoras SEO para Praga Centro de Estética

## 🚨 PRIORIDAD ALTA

### 1. Migrar a Next.js o Astro
**Problema:** SPA sin renderizado del lado del servidor
**Solución:** Implementar SSG (Static Site Generation)

#### Opción A: Next.js
```bash
# Migración recomendada
npx create-next-app@latest praga-nextjs
# Configurar para exportación estática
```

#### Opción B: Astro (Recomendado para sitios de contenido)
```bash
npm create astro@latest praga-astro
# Mejor para SEO, más rápido
```

### 2. Estructura HTML Semántica
Implementar en cada página:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Página específica | Praga Centro de Estética</title>
  <meta name="description" content="Descripción específica de 155-160 caracteres">
  <meta name="keywords" content="depilación láser córdoba, tratamientos faciales, mesoterapia">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Praga Centro de Estética | Córdoba">
  <meta property="og:description" content="Tratamientos de belleza personalizados">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Praga Centro de Estética",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dirección específica",
      "addressLocality": "Córdoba",
      "addressCountry": "AR"
    },
    "telephone": "+54-XXX-XXXXXXX",
    "url": "https://praga-estetica.com",
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  }
  </script>
</head>
<body>
  <main>
    <h1>Título principal de la página</h1>
    <section>
      <h2>Servicios de Depilación Láser</h2>
      <article>
        <h3>Depilación Láser Facial</h3>
        <p>Contenido visible y optimizado...</p>
      </article>
    </section>
  </main>
</body>
</html>
```

### 3. Optimización de Contenido
**Agregar a cada página:**

#### Página Principal
```html
<h1>Praga Centro de Estética | Tratamientos de Belleza en Córdoba</h1>
<h2>Servicios de Depilación Láser en Nueva Córdoba</h2>
<h2>Tratamientos Faciales Personalizados</h2>
<h2>Mesoterapia y Rejuvenecimiento</h2>
```

#### Página de Servicios
```html
<h1>Servicios de Estética en Córdoba | Praga Centro</h1>
<h2>Depilación Láser</h2>
<h3>Depilación Láser Facial</h3>
<h3>Depilación Láser Corporal</h3>
<h2>Tratamientos Faciales</h2>
<h3>Limpieza Facial Profunda</h3>
<h3>Radiofrecuencia</h3>
```

### 4. Archivos Técnicos SEO

#### robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://praga-estetica.com/sitemap.xml
```

#### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://praga-estetica.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://praga-estetica.com/servicios</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://praga-estetica.com/sucursal/nueva-cordoba</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://praga-estetica.com/sucursal/cerro-de-las-rosas</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 🎯 PALABRAS CLAVE OBJETIVO

### Principales
- "depilación láser córdoba"
- "tratamientos faciales córdoba"
- "centro de estética córdoba"
- "mesoterapia córdoba"
- "depilación láser nueva córdoba"
- "estética cerro de las rosas"

### Long Tail
- "mejor centro de depilación láser en córdoba"
- "tratamientos de belleza personalizados córdoba"
- "depilación definitiva nueva córdoba"
- "radiofrecuencia facial córdoba"
- "centro de estética profesional córdoba"

## 📈 MÉTRICAS A MEDIR

### Antes de implementar
- [ ] Posición actual en Google para palabras clave
- [ ] Tráfico orgánico actual
- [ ] PageSpeed Insights score

### Después de implementar
- [ ] Indexación en Google Search Console
- [ ] Mejora en posiciones
- [ ] Aumento de tráfico orgánico
- [ ] Mejora en Core Web Vitals

## 🛠️ HERRAMIENTAS RECOMENDADAS

1. **Google Search Console** - Monitoreo de indexación
2. **Google Analytics 4** - Análisis de tráfico
3. **PageSpeed Insights** - Rendimiento
4. **Screaming Frog** - Auditoría técnica
5. **SEMrush/Ahrefs** - Investigación de palabras clave

## 📅 CRONOGRAMA SUGERIDO

### Semana 1-2: Migración técnica
- Configurar Next.js o Astro
- Migrar componentes existentes
- Implementar SSG

### Semana 3: Optimización de contenido
- Agregar estructura de headings
- Optimizar textos para SEO
- Implementar Schema.org

### Semana 4: Archivos técnicos
- Crear sitemap.xml
- Configurar robots.txt
- Implementar meta tags

### Semana 5-6: Testing y ajustes
- Verificar indexación
- Optimizar rendimiento
- Monitorear métricas

## 💡 TIPS ADICIONALES

1. **Contenido local:** Incluir información específica de Córdoba
2. **Reviews:** Implementar reseñas de Google My Business
3. **Blog:** Agregar sección de artículos sobre cuidado de la piel
4. **FAQ:** Página de preguntas frecuentes optimizada
5. **Imágenes:** Alt text descriptivo en todas las imágenes
