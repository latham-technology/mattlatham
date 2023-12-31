<template>
    <nav class="nav">
        <div class="container">
            <NavBar :class="{ 'nav-is-open': ui.state.isNavOpen }" />
        </div>
    </nav>
</template>

<script setup>
const ui = useUi()
</script>

<style lang="scss" scoped>
.nav {
    @apply fixed;
    @apply top-0 right-0 left-0;
    @apply z-20;

    .nav-bar {
        @apply relative;
    }
}
</style>
