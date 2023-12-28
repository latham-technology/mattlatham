<template>
    <nav class="nav">
        <div class="container">
            <NavBar :class="{ 'nav-is-open': ui.state.isNavOpen }" />
        </div>

        <client-only>
            <portal to="navigation">
                <NavFullScreen v-if="ui.state.isNavOpen" />
            </portal>
        </client-only>
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
