/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '150': '1.1',
      },
      spacing: {
        '128': '32rem', // Custom spacing value
      },
        justifyContent: {
          custom: 'space-around',
          'custom-start': 'flex-start',
          'custom-end': 'flex-end',
        },
      colors: {
        skin: '#F3D2B1', // Replace with your desired skin color value
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
