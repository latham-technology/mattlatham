<template>
    <NuxtLayout>
        <div class="error-page">
            <h1>{{ props.error.message }} :(</h1>
            <div class="max-w-sm">
                <NuxtImg :src="computedMemeFromError" alt="" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const props = defineProps({
    error: Object,
})

const computedMemeFromError = computed(() => {
    switch (props.error.statusCode) {
        case 404: {
            return '/memes/what-huh.gif'
        }

        default: {
            return '/memes/this-is.gif'
        }
    }
})
</script>

<style lang="scss" scoped>
.error-page {
    @apply flex flex-col h-full justify-center items-center;
}
</style>
