import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        slate: '#2D2E41',
        hamburger: '#D9D9D9'
      },
      fontSize: {
        'shake-hand': '7.5rem',
        '2xl': '4.625rem',
        xl: '3.375rem',
        lg: '2.125rem',
        md: '1.5rem'
      },
      boxShadow: {
        'experience-card': '12px 12px 20px 0px rgba(0, 0, 0, 0.25)'
      },
      width: {
        '500': '31.25rem',
        '600': '37.5rem'
      },
      height: {
        '500': '31.25rem',
        '600': '37.5rem'
      },
      rotate: {
        'card-1': '-2.19deg',
        'card-2': '0.76deg',
        'card-3': '-1.4deg',
        'card-4': '2deg'
      },
      keyframes: {
        'waves-hand': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.1)' }
        }
      },
      animation: {
        'waves-hand': 'waves-hand 1s ease-in-out'
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.415, -0.375, 0.440, 1.260)'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
export default config;
