<template>
    <TransitionSlide appear :offset="[0, '-100%']">
        <div v-show="showNavBar" class="nav-bar">
            <NavBrand />

            <div class="nav-bar__right-container">
                <div class="nav-links">
                    <nuxt-link to="/projects" class="nav-link"
                        >Projects</nuxt-link
                    >
                    <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
                </div>

                <ColorModePicker class="hidden md:block mx-2" />

                <NavBurger class="nav-burger" @click.native="ui.toggleNav" />
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

const ui = useUi()
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
.nav-bar {
    @apply py-2;
    @apply flex items-stretch justify-between;
    @apply z-20;

    &__brand-wrapper {
        @apply mr-auto h-full;
    }

    &__brand-link {
        @apply flex items-center h-full p-2;
    }

    &__brand-image {
        @apply p-1 w-16;
    }

    &__brand-text {
        @apply hidden md:block;
        @apply ml-4 font-bold text-2xl whitespace-nowrap;
        @apply text-brand-primary dark:text-brand-secondary;
    }

    &__right-container {
        @apply flex items-center;
        @apply p-2;
    }
}

.nav-links {
    @apply hidden md:flex;
    @apply items-center ml-auto;

    a {
        @apply block font-bold tracking-widest px-4 py-2;
        @apply rounded transform transition;
        @apply dark:text-white;

        &:hover {
            @apply bg-brand-primary text-black;
            @apply -translate-y-0.5;
        }
    }
}

.nav-burger {
    @screen md {
        display: none !important;
    }
}
</style>
