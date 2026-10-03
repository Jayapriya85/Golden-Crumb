/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm bakery palette
        crust: {
          50: '#FBF7F0',
          100: '#F5EBD9',
          200: '#E8D4B5',
          300: '#D9B88A',
          400: '#C99A5E',
          500: '#B8823F',
          600: '#9E6A33',
          700: '#7C5226',
          800: '#5B3D1E',
          900: '#3E2A16',
          950: '#2A1C0F',
        },
        golden: {
          50: '#FFFBEB',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#F9CE4B',
          400: '#F5B829',
          500: '#E89E0A',
          600: '#C97E06',
          700: '#A35E08',
          800: '#834A0E',
          900: '#6C3D11',
        },
        cherry: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E04848',
          600: '#C23333',
          700: '#9F2828',
          800: '#7C2020',
          900: '#5E1A1A',
        },
        cream: '#FBF7F0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
