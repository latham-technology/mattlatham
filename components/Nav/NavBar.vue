<template>
    <TransitionSlide :offset="[0, '-100%']">
        <div
            v-show="showNavBar"
            class="flex flex-wrap gap-5 items-stretch justify-between py-2 z-20"
        >
            <NavBrand />

            <div class="flex items-center p-2 ml-auto">
                <div class="nav-links flex items-center ml-auto">
                    <nuxt-link to="/projects">Projects</nuxt-link>
                    <nuxt-link to="/posts">Posts</nuxt-link>
                </div>

                <ColorModePicker class="hidden md:block mx-2" />

                <!-- <NavBurger class="nav-burger" /> -->
            </div>
        </div>
    </TransitionSlide>
</template>

<script setup>
const props = defineProps({
    threshold: {
        type: Number,
        default: 60,
    },
})

const showNavBar = ref(true)
const lastScrollPosition = ref(0)

onBeforeMount(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

function onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop

    if (scrollPosition < 0) return

    if (Math.abs(scrollPosition - lastScrollPosition.value) < props.threshold)
        return

    showNavBar.value = scrollPosition < lastScrollPosition.value
    lastScrollPosition.value = scrollPosition
}
</script>

<style lang="scss" scoped>
.nav-links {
    a {
        @apply block font-bold tracking-widest px-3 py-2;
        @apply rounded transform transition;
        @apply dark:text-white;

        &:hover {
            @apply bg-brand-primary text-black;
            @apply -translate-y-0.5;
        }
    }
}
</style>
