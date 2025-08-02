/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada para Praga
        'praga': {
          'beige': '#fbf6f1ff',      // Fondo principal
          'beige-dark': '#f0e6d6',  // Beige más oscuro
          'gold': '#aa6730',       // Dorado suave
          'gold-light': '#d9945b', // Dorado claro
          'gray': '#a8a8a8',       // Gris oscuro para texto
          'gray-light': '#cccccc', // Gris claro
          'white': '#ffffff',      // Blanco puro
          'black': '#000000',      // Negro puro para texto
        }
      },
     fontFamily: {
        display: ['Great Vibes', 'cursive'],       // Para títulos decorativos como "amistad"
        heading: ['Poppins', 'sans-serif'],        // Para títulos generales y botones
        body: ['Inter', 'sans-serif'],             // Para texto general y lectura
        detail: ['Raleway', 'sans-serif'],         // Para fechas, info fina, promociones
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
