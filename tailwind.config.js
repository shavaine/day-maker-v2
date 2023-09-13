/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '8rem',
        xl: '8rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        mainColor: '#471AA0FF',
        secondaryColor: '#3C1053',
        'btn-background': '#F5F2FDFF',
      },
      fontFamily: {
        spaceMono: ['var(--font-space_mono)'],
        viaodaLibre: ['var(--font-viaoda_libre)'],
        workSans: ['var(--font-work_sans)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-header': "url('/assets/header-bg.svg')",
        'home-main': "url('/assets/side-wave_background.svg')"
      },
      backgroundColor: {
        success: '#D0F0C0',
        error: '#FF8A8A',
        notice: '#CCCCCC'
      }
    },
  },
  plugins: [],
}
