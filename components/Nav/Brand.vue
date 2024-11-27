<template>
    <NuxtLink
        to="/"
        class="nav-brand"
        @mouseenter.native="onMouseEnter"
        @mouseleave.native="onMouseLeave"
    >
        <div class="nav-brand__svg">
            <svg
                viewBox="3.493 0 49.119 26.085"
                width="49.119"
                height="26.085"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    v-bind="svgProps"
                    d="M 18.728 0 L 33.964 26.042 L 3.493 26.042 L 18.728 0 Z"
                    :fill="state.svgColors[0]"
                />
                <path
                    v-bind="svgProps"
                    d="M 37.377 0.043 L 52.612 26.085 L 22.141 26.085 L 37.377 0.043 Z"
                    :fill="state.svgColors[1]"
                />
            </svg>
        </div>

        <TransitionSlide :offet="[0, '100%']" :delay="100">
            <div
                v-show="state.isHovering"
                class="nav-brand__name hidden sm:block"
            >
                Matt Latham
            </div>
        </TransitionSlide>
    </NuxtLink>
</template>

<script setup>
const defaultSvgColors = ['#9CB4E4', '#D8B0A4']
const state = reactive({
    isHovering: false,
    svgColors: ['#9CB4E4', '#D8B0A4'],
})
const intervalHandle = ref(null)

const svgProps = computed(() => {
    return {
        'fill-opacity': 0.5,
        style: {
            mixBlendMode: 'multiply',
            transition: 'fill 1s ease',
        },
    }
})

onBeforeUnmount(() => {
    clearInterval(intervalHandle.value)
    intervalHandle.value = null
})

function onMouseEnter() {
    state.isHovering = true
    intervalHandle.value = setInterval(morphSvgColors, 500)
}

function onMouseLeave() {
    state.isHovering = false
    clearInterval(intervalHandle.value)
    intervalHandle.value = null
    state.svgColors = defaultSvgColors
}

function morphSvgColors() {
    state.svgColors = state.svgColors.map(() => {
        const chars = '0123456789ABCDEF'.split('')

        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += chars[Math.floor(Math.random() * 16)]
        }

        return color
    })
}

function colorMorph() {
    const chars = '0123456789ABCDEF'.split('')

    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)]
    }

    return color
}
</script>

<style lang="scss" scoped>
.nav-brand {
    @apply flex items-center gap-4;

    &__name {
        @apply relative;
        @apply text-lg tracking-wide font-bold;
        @apply text-brand-secondary-light;

        &:before {
            content: '';
            z-index: -1;
            @apply absolute -inset-y-1 -inset-x-2;
            @apply bg-slate-800;
        }
    }
}
</style>
