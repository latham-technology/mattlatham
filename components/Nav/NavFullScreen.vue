<template>
    <transition
        :css="false"
        mode="out-in"
        appear
        @enter="onTransitionEnter"
        @leave="onTransitionLeave"
    >
        <div class="nav-fullscreen">
            <div class="section nav-fullscreen__section">
                <div class="m-auto flex flex-col" @click="ui.closeNav">
                    <nuxt-link to="/projects" class="nav-fullscreen-link">
                        Projects
                    </nuxt-link>
                    <nuxt-link to="/posts" class="nav-fullscreen-link">
                        Posts
                    </nuxt-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const { $anime } = useNuxtApp()
const ui = useUi()

const onTransitionEnter = (el, done) => {
    $anime
        .timeline({
            easing: 'easeOutExpo',
            translateZ: 0,
            complete: done,
        })
        .add({
            targets: el,
            opacity: [0, 1],
        })
        .add(
            {
                targets: '.nav-fullscreen-link',
                translateY: [-5, 0],
                opacity: [0, 1],
                delay: $anime.stagger(100),
            },
            '-=1000',
        )
}

const onTransitionLeave = (el, done) => {
    $anime
        .timeline({
            easing: 'easeOutExpo',
            translateZ: 0,
            duration: 550,
            complete: done,
        })
        .add({
            targets: '.nav-fullscreen-link',
            translateY: [0, -5],
            opacity: [1, 0],
        })
        .add(
            {
                targets: el,
                opacity: [1, 0],
            },
            '-=100',
        )
}
</script>

<style lang="scss" scoped>
.nav-fullscreen {
    @apply fixed md:hidden;
    @apply inset-0 z-10;
    @apply bg-gray-50 dark:bg-gray-900;

    &__section {
        @apply flex h-full;
    }
}

.nav-fullscreen-link {
    @apply text-3xl p-4;
}
</style>
