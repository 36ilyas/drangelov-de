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
          400: '#9AA889',
          500: '#7E8E6E',
          600: '#6B7B5B',
          700: '#566348',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1180px' },
    },
  },
};
