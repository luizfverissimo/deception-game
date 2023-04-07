/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#fde047',
          secondary: '#f3f4f6',
          accent: '#f59e0b',
          neutral: '#292524',
          'base-100': '#1c1917',
          info: '#60a5fa',
          success: '#10b981',
          warning: '#ea580c',
          error: '#dc2626'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};

