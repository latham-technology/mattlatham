export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            environment: process.env.NODE_ENV,
            baseUrl: process.env.BASE_URL,

            plausible: {
                domain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
                apiHost: process.env.NUXT_PUBLIC_PLAUSIBLE_API_HOST,
            },
        },
    },

    modules: [
        '@nuxt/content',
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        'nuxt-simple-sitemap',
    ],

    googleFonts: {
        families: {
            Heebo: [400, 700],
        },
    },

    colorMode: {
        preference: 'dark',
        classSuffix: '',
    },

    sitemap: {
        url: process.env.BASE_URL,
        strictNuxtContentPaths: true,
    },

    devtools: { enabled: true },
})
