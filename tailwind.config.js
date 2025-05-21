/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ffff', // Cyan (bright on black)
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00ffff',
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333',
        },
        secondary: {
          DEFAULT: '#00ffea', // Aqua (bright, stands out on black)
            50: '#e6ffff',
            100: '#b3ffff',
            200: '#80ffff',
            300: '#4dffff',
            400: '#1affff',
            500: '#00ffff',
            600: '#00cccc',
            700: '#009999',
            800: '#006666',
            900: '#003333',
          },
          accent: {
            DEFAULT: '#ffea00', // Bright Yellow (good contrast)
          50: '#fffde6',
          100: '#fff9b3',
          200: '#fff580',
          300: '#fff14d',
          400: '#ffed1a',
          500: '#ffea00',
          600: '#ccb800',
          700: '#998600',
          800: '#665400',
          900: '#332200',
        },
        success: {
          DEFAULT: '#39ff14', // Neon Green (high contrast)
          50: '#eaffe6',
          100: '#c6ffb3',
          200: '#a1ff80',
          300: '#7cff4d',
          400: '#57ff1a',
          500: '#39ff14',
          600: '#2ecc10',
          700: '#22990c',
          800: '#166608',
          900: '#0b3304',
        },
        warning: {
          DEFAULT: '#ffb300', // Bright Orange
          50: '#fff7e6',
          100: '#ffe6b3',
          200: '#ffd580',
          300: '#ffc44d',
          400: '#ffb31a',
          500: '#ffb300',
          600: '#cc9000',
          700: '#996c00',
          800: '#664900',
          900: '#332500',
        },
        error: {
          DEFAULT: '#ff1744', // Vivid Red (pops on black)
          50: '#ffe6eb',
          100: '#ffb3c2',
          200: '#ff8099',
          300: '#ff4d70',
          400: '#ff1a47',
          500: '#ff1744',
          600: '#cc1136',
          700: '#990c28',
          800: '#66061a',
          900: '#33030d',
        },
        dark: {
          DEFAULT: '#000000', // Pure Black
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '1/6': '16.666667%',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};