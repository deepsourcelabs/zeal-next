<script setup lang="ts">
import { useSlots, cloneVNode } from 'vue'
import { cloneVNodes } from '@/utils/vue-helper'

const slots = useSlots()
const props = withDefaults(defineProps<{ separator?: string }>(), { separator: '/' })

const breadcrumbs = cloneVNodes(slots.default?.() || [], { separator: props.separator }, true)

// Set last element's `isCurrent` to `true`.
const lastElement = breadcrumbs.pop()
if (lastElement) breadcrumbs.push(cloneVNode(lastElement, { isCurrent: true }))
</script>

<template>
  <nav aria-label="breadcrumbs">
    <ol class="flex items-center gap-x-2">
      <component v-for="(breadcrumb, index) in breadcrumbs" :is="breadcrumb" :key="index" />
    </ol>
  </nav>
</template>
