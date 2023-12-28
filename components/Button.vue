<template>
  <button v-bind="$attrs" class="button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  @apply flex items-center justify-center;
  @apply rounded-lg;
  @apply px-4 py-3;
  @apply text-white bg-brand-primary;
  @apply transition transform translate-y-0;
  @apply hover:-translate-y-0.5;
}
</style>
