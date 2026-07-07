/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        cream:  '#F7F5F0',
        paper:  '#FCFBF8',
        ink:    '#2C2A25',
        'ink-soft': '#5E574C',
        line:   '#E7E1D6',
        sage: {
          50:  '#EEF1E9',
          100: '#E1E7D6',
          200: '#CCD6BC',
          400: '#8C9C77',
          500: '#6F8158',
          600: '#5D6E49',
          700: '#48553A',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1180px' },
    },
  },
};
