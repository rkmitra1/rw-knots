const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        lora: "'Lora', serif",
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: (theme) => ({
        'bg-1': "url('/background_1.jpg')",
        'bg-2': "url('/background_2.jpg')",
        'bg-3': "url('/background_3.png')",
        'bg-4': "url('/background_4.jpg')",
      }),
      colors: {
        brandMain: {
          DEFAULT: '#3366CC',
          50: '#f5f7fc',
          100: '#ebf0fa',
          200: '#ccd9f2',
          300: '#adc2eb',
          400: '#7094db',
          500: '#3366CC',
          600: '#2e5cb8',
          700: '#264d99',
          800: '#1f3d7a',
          900: '#193264',
        },
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        },
        rajOut: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)', visibility: 'hidden' },
        },
        rajEnd: {
          '0%': { opacity: '0' },
          '95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            fontSize: '12px',
          },
          '100%': {
            opacity: '1',
            fontSize: '72px',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            fontSize: '36px',
          },
          '100%': {
            opacity: '0',
            fontSize: '12px',
            visibility: 'hidden',
          },
        },
      },
      animation: {
        roll: 'roll 3s ease-in-out infinite',
        rotate: 'spin 3s linear infinite',
        rajOut: 'rajOut 3s ease-out forwards',
        rajEnd: 'rajEnd 3s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 1.0s ease-out',
        slideInTop: 'slideInTop 1.0s ease-out',
        fadeIn: 'fadeIn 1s linear',
        fadeOut: 'fadeOut 3s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
