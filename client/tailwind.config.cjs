/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#a5b4fc',
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                    'deep-dark': '#4338ca',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.3xl') },
                h2: { fontSize: theme('fontSize.2xl') },
                h3: { fontSize: theme('fontSize.xl') },
                h4: { fontSize: theme('fontSize.lg') },
                h5: { fontSize: theme('fontSize.base') },
                h6: { fontSize: theme('fontSize.md') },
            })
        }),
    ],
}
