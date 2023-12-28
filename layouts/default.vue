<template>
    <main
        class="container"
        :style="{
            overflow: ui.state.navIsOpen ? 'hidden' : 'visible',
        }"
    >
        <TheHeader />

        <slot />

        <client-only>
            <portal-target name="navigation" />
        </client-only>
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
