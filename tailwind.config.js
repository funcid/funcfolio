/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'avatar': "url('../lib/images/avatar.jpg')",
      }
    }
  },
  plugins: []
};