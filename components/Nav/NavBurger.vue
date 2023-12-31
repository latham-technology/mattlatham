<template>
    <button @click="ui.toggleNav" class="nav-burger">
        <div class="nav-burger__line"></div>
        <div class="nav-burger__line"></div>
    </button>
</template>

<script setup>
const ui = useUi()
</script>

<style lang="scss" scoped>
.nav-burger {
    @apply flex flex-col justify-center items-stretch;
    @apply cursor-pointer rounded text-brand-combined;
    @apply transition transform;
    @apply dark:text-white;
    @apply p-2;

    &:hover {
        @apply bg-brand-primary text-white -translate-y-0.5;
    }

    &__line {
        @apply w-6 h-0.5 bg-current rounded;

        & + & {
            @apply mt-1.5;
        }
    }
}
</style>
