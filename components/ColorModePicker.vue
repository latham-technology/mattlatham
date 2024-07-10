<template>
    <button class="color-mode-picker" @click="handleToggle">
        <transition
            :css="false"
            mode="out-in"
            @enter="onEnter"
            @leave="onLeave"
        >
            <span
                v-if="$colorMode.value === 'light'"
                key="light"
                class="color-mode-picker__indicator color-mode-picker__indicator--light"
            >
                ☀️
            </span>
            <span
                v-else-if="$colorMode.value === 'dark'"
                key="dark"
                class="color-mode-picker__indicator color-mode-picker__indicator--dark"
            >
                🌙
            </span>
        </transition>
    </button>
</template>

<script>
export default {
    methods: {
        handleToggle() {
            this.$colorMode.preference =
                this.$colorMode.value === 'light' ? 'dark' : 'light'
        },

        async onEnter(el, done) {
            const { default: anime } = await import('animejs')

            anime
                .timeline({
                    easing: 'easeOutExpo',
                    duration: 150,
                    translateZ: 0,
                    complete: done,
                })
                .add({
                    targets: '.color-mode-picker__indicator',
                    opacity: [0, 1],
                    translateY: [-5, 0],
                })
        },

        async onLeave(el, done) {
            const { default: anime } = await import('animejs')

            anime
                .timeline({
                    easing: 'easeOutExpo',
                    translateZ: 0,
                    duration: 150,
                    complete: done,
                })
                .add({
                    targets: '.color-mode-picker__indicator',
                    opacity: [1, 0],
                    translateY: [0, -5],
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.color-mode-picker {
    @apply flex items-center justify-center cursor-pointer;
    @apply text-2xl;

    @screen lg {
        @apply w-10 h-10;
        @apply text-4xl;
    }

    &__indicator {
        @apply block;
    }
}
</style>
