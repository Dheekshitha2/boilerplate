module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Soft Blue
        secondary: '#E0E0E0', // Soft Grey
        accent: '#7ED321', // Soft Green
        neutral: '#4A4A4A', // Dark Grey
        background: '#F5F5F5', // Light Grey
        text: '#333333', // Dark Grey
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'fraudguardian': {
          'primary': '#4A90E2',
          'primary-focus': '#3B7EC1',
          'primary-content': '#FFFFFF',
          'secondary': '#E0E0E0',
          'secondary-focus': '#BDBDBD',
          'secondary-content': '#333333',
          'accent': '#7ED321',
          'neutral': '#4A4A4A',
          'base-100': '#F5F5F5',
          'info': '#2094f3',
          'success': '#7ED321',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
