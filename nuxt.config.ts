import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            environment: '',
            baseUrl: '',

            plausible: {
                domain: '',
                apiHost: '',
            },
        },
    },

    css: ['@/assets/scss/index.scss'],

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            titleTemplate: 'Matt Latham | %s',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1',
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no',
                },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/icon.png',
                },
            ],
        },
    },

    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL,
        name: 'Matt Latham',
    },

    modules: [
        '@nuxt/content',
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@morev/vue-transitions/nuxt',
        '@nuxtjs/seo',
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
        sources: ['/api/__sitemap__/urls'],
    },

    schemaOrg: {
        identity: definePerson({
            name: 'Matt Latham',
            image: '/photo.jpg',
            url: process.env.BASE_URL,
            sameAs: [
                'https://twitter.com/jadget',
                'https://www.linkedin.com/in/mattlatham',
            ],
        }),
    },

    devtools: { enabled: true },
    compatibilityDate: '2024-07-10',
})
