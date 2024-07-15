/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        MullerRegular: ['MullerRegular', 'sans-serif'],
        MullerThin: ['MullerThinr', 'sans-serif']
      }
    },
    fontSize: {
      '10px': '10px',
      '12px': '12px',
      '14px': '14px',
      '15px': '15px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '22px': '22px',
      '24px': '24px',
      '26px': '26px',
      '30px': '30px',
      '32px': '32px',
      '46px': '46px',
      '53px': '53px',
      '100px': '100px'
    },
    colors: {
      primary: '#001e60', // Синий
      secondary: '#ed8b00', // Фиолетовый
      white: '#FFFFFF', // Желтый
      neutral: '#0b1838', // Темно-серый
      slider_primary: '#ececec', // Голубой
      slider_button: '#dcdcdc', //
      warning: '#FBBF24', // Оранжевый
      danger: '#e3e4e9' // Красный
    }
  },
  plugins: []
}
