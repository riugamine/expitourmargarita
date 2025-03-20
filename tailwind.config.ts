import type { Config } from 'tailwindcss';

const config: Config = {
  // Remove darkMode: 'class',
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
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      transitionTimingFunction: {
        'ease-out-smooth': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'ease-out-gentle': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
        'all-smooth': 'all',
      },
    },
  },
  plugins: [],
};

export default config;