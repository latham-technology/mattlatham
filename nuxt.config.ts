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

    css: ['@/assets/scss/index.scss'],

    app: {
        head: {
            titleTemplate: '%s | Matt Latham',
            meta: [
                { charset: 'utf-8', hid: 'charset' },
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1',
                    hid: 'viewport',
                },
                {
                    hid: 'format-detection',
                    name: 'format-detection',
                    content: 'telephone=no',
                },
            ],
        },
    },

    modules: [
        '@nuxt/content',
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@morev/vue-transitions/nuxt',
        'nuxt-simple-sitemap',
    ],

    content: {
        markdown: {
            remarkPlugins: ['remark-reading-time'],
        },
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark',
            },
        },
    },

    image: {
        cloudinary: {
            baseURL: `https://res.cloudinary.com/${process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`,
        },
    },

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
