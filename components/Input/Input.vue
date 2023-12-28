<template>
  <FormulateInput v-bind="$attrs">
    <template #errors="{ validationErrors }">
      <SlideYDownTransition group>
        <span v-for="(error, i) in validationErrors" :key="i">
          {{ error }}
        </span>
      </SlideYDownTransition>
    </template>
  </FormulateInput>
</template>

<script>
import { SlideYDownTransition } from 'vue2-transitions'

export default {
  components: {
    SlideYDownTransition,
  },
  inheritAttrs: false,
}
</script>

<style></style>
