/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
      },
      colors: {
        'expitour': {
          'blue': '#063D58',
          'teal': '#3E9986',
          'amber': '#EDA518',
          'yellow': '#FFDE59',
          'dark': '#323232',
          'white': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}