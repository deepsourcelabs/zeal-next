<script setup lang="ts">
import { useSlots, cloneVNode, isVNode } from 'vue'

export interface ZBreadcrumbProps {
  isCurrent?: boolean
  separator?: string
}

const props = withDefaults(defineProps<ZBreadcrumbProps>(), { isCurrent: false, separator: '/' })
const itemNode = (useSlots().default?.() || []).pop()

const breadcrumb = isVNode(itemNode)
  ? cloneVNode(itemNode, { 'aria-current': props.isCurrent ? 'page' : null })
  : undefined
</script>

<template>
  <li class="flex items-center gap-x-2" :class="[isCurrent ? 'text-slate-900' : 'text-slate-400']">
    <breadcrumb />
    <span v-if="!isCurrent" aria-hidden="true">{{ separator }}</span>
  </li>
</template>
