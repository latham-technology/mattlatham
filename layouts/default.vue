<template>
    <main
        class="container"
        :style="{
            overflow: ui.state.navIsOpen ? 'hidden' : 'visible',
        }"
    >
        <TheHeader />

        <slot />
    </main>
</template>

<script setup>
const ui = useUi()
</script>

<style lang="scss" scoped>
main {
    @apply relative;
    @apply pt-24; // NavBar offset
    @apply pb-16 min-h-full;
}
</style>
