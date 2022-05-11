<script setup lang="ts">
import { TabList } from '@headlessui/vue'
</script>
<template>
  <TabList class="z-tab-list flex overflow-auto flex-nowrap gap-x-5">
    <slot></slot>
  </TabList>
</template>
