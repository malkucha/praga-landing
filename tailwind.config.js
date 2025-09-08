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
          'gray': '#CCCCCC',       // Gris oscuro para texto
          'gray-light': '#F2F2F2', // Gris claro
          'gray-dark':'#595959',
          'gray-x-dark':'#474646',
          'white': '#ffffff',      // Blanco puro
          'black': '#000000',      // Negro puro para texto
        }
      },
     fontFamily: {
        // Fuentes personalizadas con nombres descriptivos
        'agrandir': ['Agrandir Grand', 'sans-serif'],  // font-agrandir
        'sloop': ['Sloop Script', 'cursive'],          // font-sloop
        
        // Fuentes semánticas (las que ya tienes)
        display: ['Sloop Script', 'cursive'],           // font-display - Para títulos decorativos
        heading: ['Agrandir Grand', 'sans-serif'],     // font-heading - Para títulos generales
        body: ['Poppins', 'sans-serif'],              // font-body - Para texto general
        detail: ['Poppins', 'sans-serif'],            // font-detail - Para detalles
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
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
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
