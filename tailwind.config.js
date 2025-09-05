/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f2f5',
          100: '#e6e6ea',
          200: '#ccccd5',
          300: '#b3b3c0',
          400: '#9999ab',
          500: '#5b2fd1',
          600: '#4d26b3',
          700: '#3f1d95',
          800: '#1e1a97',
          900: '#602ca6',
          950: '#6320ee',
        },
        secondary: {
          50: '#f2f2f5',
          100: '#e6e6ea',
          200: '#ccccd5',
          300: '#9999ab',
          400: '#535257',
          500: '#364b55',
          600: '#2a3a42',
          700: '#1e2930',
          800: '#121a1e',
          900: '#08030f',
          950: '#040207',
        },
      },
      fontFamily: {
        sans: ['var(--font-bricolage-grotesque)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        'bricolage': ['var(--font-bricolage-grotesque)', 'system-ui', 'sans-serif'],
        'canva': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
