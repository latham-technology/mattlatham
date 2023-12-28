export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            utilities: {
                kebabCase,
            },
        },
    }
})

function kebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
}
