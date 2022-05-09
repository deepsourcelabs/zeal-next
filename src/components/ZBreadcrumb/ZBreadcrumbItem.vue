<script setup lang="ts">
import { defineProps } from 'vue'

export interface ZBreadcrumbProps {
  isCurrent?: boolean
  separator?: string
}

withDefaults(defineProps<ZBreadcrumbProps>(), { isCurrent: false, separator: '/' })
</script>

<template>
  <li class="flex items-center gap-x-2" :class="[isCurrent ? 'text-slate-900' : 'text-slate-400']">
    <slot></slot>
    <span v-if="!isCurrent">{{ separator }}</span>
  </li>
</template>
