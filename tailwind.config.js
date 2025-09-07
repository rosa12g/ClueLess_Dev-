/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern Classic Theme - Coffee, Amber, Cream with sophisticated dark mode
        'coffee': {
          50: '#FEFCF9',
          100: '#FDF8F1',
          200: '#F9EFDE',
          300: '#F3E2C7',
          400: '#EBD0A3',
          500: '#DFB876',
          600: '#CD9B4A',
          700: '#B8803A',
          800: '#8B5E2B',
          900: '#5D3E1C'
        },
        'espresso': {
          50: '#F7F4F1',
          100: '#EDE6DF',
          200: '#D9C7B5',
          300: '#C4A68A',
          400: '#A8845F',
          500: '#8B6239',
          600: '#6F4E2D',
          700: '#533A21',
          800: '#372615',
          900: '#1B130A'
        },
        'amber': {
          50: '#FFFEF7',
          100: '#FFFCEB',
          200: '#FFF7CC',
          300: '#FFF0A3',
          400: '#FFE666',
          500: '#FFD700',
          600: '#E6C200',
          700: '#B8A000',
          800: '#8A7800',
          900: '#5C5000'
        },
        'cream': {
          50: '#FFFFFE',
          100: '#FFFEF9',
          200: '#FFFDF0',
          300: '#FFFBE0',
          400: '#FFF8C7',
          500: '#FFF4A3',
          600: '#F5E885',
          700: '#E8D766',
          800: '#D4C147',
          900: '#B8A628'
        },
        'charcoal': {
          50: '#F8F7F6',
          100: '#F0EEEC',
          200: '#DDD8D3',
          300: '#C9C1BA',
          400: '#B5AAA1',
          500: '#A19388',
          600: '#8D7C6F',
          700: '#796556',
          800: '#654E3D',
          900: '#513724'
        },
        // Modern Dark Theme Colors
        'dark': {
          50: '#F7F7F8',
          100: '#EEEEF0',
          200: '#D5D5D9',
          300: '#BCBCC2',
          400: '#8A8A94',
          500: '#585866',
          600: '#4F4F5C',
          700: '#42424D',
          800: '#35353E',
          900: '#2B2B32'
        },
        'midnight': {
          50: '#F6F6F7',
          100: '#EDEDEF',
          200: '#D2D2D7',
          300: '#B7B7BF',
          400: '#81818F',
          500: '#4B4B5F',
          600: '#434356',
          700: '#383848',
          800: '#2D2D3A',
          900: '#25252F'
        },
        'obsidian': {
          50: '#F5F5F6',
          100: '#EBEBED',
          200: '#CDCDD2',
          300: '#AFAFB7',
          400: '#737381',
          500: '#37374B',
          600: '#323243',
          700: '#2A2A38',
          800: '#22222D',
          900: '#1C1C25'
        },
        'orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 146, 60, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}