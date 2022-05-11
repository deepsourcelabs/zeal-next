<script setup lang="ts">
import { TabGroup } from '@headlessui/vue'

withDefaults(defineProps<{ defaultIndex?: number; vertical?: boolean }>(), {
  defaultIndex: 0,
  vertical: false
})
</script>
<template>
  <TabGroup :vertical="vertical" :default-index="defaultIndex">
    <slot></slot>
  </TabGroup>
</template>
