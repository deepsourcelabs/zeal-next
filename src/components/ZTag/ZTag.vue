<script setup lang="ts">
import { computed } from 'vue'

export interface ZIconProps {
  icon?: string
  color?: string
  size?: string
  side?: string
}

export interface ZTagProps {
  state?: 'success' | 'info' | 'warning' | 'error' | 'default'
  icon?: ZIconProps
  bgColor?: string
  textColor?: string
  textSize?: string
  spacing?: string
}

const tagStates: Record<string, string> = {
  success: 'border-2 border-solid border-emerald-500',
  default: 'border-2 border-solid border-transparent',
  info: 'border-2 border-solid border-sky-500',
  warning: 'border-2 border-solid border-amber-500',
  error: 'border-2 border-solid border-red-500'
}

const props = withDefaults(defineProps<ZTagProps>(), {
  bgColor: 'bg-slate-800',
  textColor: 'text-slate-50',
  textSize: 'text-sm',
  spacing: 'px-4 py-1',
  icon: () => ({
    color: 'current',
    direction: 'left'
  })
})

const hasIconOnLeft = computed((): boolean => {
  return props.icon.side === 'left'
})

const hasIconOnRight = computed((): boolean => {
  return props.icon.side === 'right'
})

const getBaseCSS = computed((): string => {
  return tagStates[props.state || 'default']
})
</script>
<template>
  <div
    class="z-tag gap-x-2 inline-flex items-center rounded-full justify-evenly"
    :class="[spacing, textSize, getBaseCSS, bgColor, textColor]"
  >
    <div v-if="hasIconOnLeft" :icon="icon.icon" :color="icon.color" :size="icon.size"></div>
    <slot></slot>
    <div v-if="hasIconOnRight" :icon="icon.icon" :color="icon.color" :size="icon.size"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ZTag'
}
</script>
<style lang="postcss">
@import '@/assets/css/index.css';

@layer components {
  .z-tag {
    column-gap: theme('gap.2');
  }
}
</style>
