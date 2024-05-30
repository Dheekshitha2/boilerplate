module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#00008B', // Soft Blue
        secondary: '#1d64e7', // Soft Grey
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
          'primary': '#00008B',
          'primary-focus': '#3B7EC1',
          'primary-content': '#FFFFFF',
          'secondary': '#1d64e7',
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
