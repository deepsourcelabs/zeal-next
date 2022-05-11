<script setup lang="ts">
import { Tab } from '@headlessui/vue'

withDefaults(defineProps<{ disabled?: boolean }>(), { disabled: false })
</script>

<template>
  <Tab as="template" :disabled="disabled" #default="{ selected }">
    <button
      class="z-tab inline-flex items-end gap-2 pb-3 px-1 text-sm leading-none"
      :class="[selected ? '' : '']"
    >
      <slot></slot>
    </button>
  </Tab>
</template>
<style scoped lang="postcss">
@import '../../assets/css/index.css';

@layer components {
  .z-tab {
    @apply border-b-2 border-red-400 selected:border-green-500;
  }
}
</style>
