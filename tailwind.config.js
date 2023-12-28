import tailwindTypography from '@tailwindcss/typography'

export default {
    darkMode: 'class',

    content: [
        './components/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
    ],

    theme: {
        container: {
            center: true,
            padding: '1rem',
        },

        extend: {
            colors: {
                background: 'rgba(203, 211, 215, .75)',
                brand: {
                    primary: {
                        light: '#ADC9FF',
                        DEFAULT: '#9cb4e4',
                        dark: '#6D7EA1',
                    },
                    secondary: {
                        light: '#FFD0C2',
                        DEFAULT: '#d8b0a4',
                        dark: '#9C7F76',
                    },
                    combined: {
                        DEFAULT: '#847c93',
                    },
                },
            },
        },
    },

    plugins: [tailwindTypography],
}
