// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f4f2',
          100: '#e0e0da',
          200: '#bfc0b0',
          300: '#9ea187',
          400: '#7e825d',
          500: '#5f6344', // Primary olive shade from your image
          600: '#4b4f37',
          700: '#373b2a',
          800: '#23281c',
          900: '#0f140f',
        },
      },
      keyframes: {
        'zoom-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        'zoom-pulse': 'zoom-pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
