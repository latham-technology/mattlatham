<template>
  <span class="tag">
    <slot>
      {{ text }}
    </slot>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  @apply inline-block;
  @apply text-xs lowercase;
  @apply px-2 py-0.5 rounded;
  @apply bg-brand-primary-light text-black;
  @apply dark:bg-slate-600 dark:text-gray-300;
}
</style>
