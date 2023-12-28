import anime from 'animejs'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('anime', {
        mounted(el, binding) {
            const options = Object.assign({}, binding.value, { targets: el })
            anime(options)
        },

        beforeUpdate(el, binding) {
            const options = Object.assign({}, binding.value, { targets: el })
            anime(options)
        },
    })

    return {
        provide: {
            anime,
        },
    }
})
