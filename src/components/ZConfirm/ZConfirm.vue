<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue'
import { toRef, Ref } from 'vue'

const props = withDefaults(
  defineProps<{ open?: boolean; initialFocus?: Ref; unmount?: boolean }>(),
  {
    open: false,
    unmount: true
  }
)

const emit = defineEmits<{ (e: 'close', state: boolean): void }>()

const dialogState = toRef(props, 'open')

const closeDialog = (newDialogState: boolean) => {
  emit('close', newDialogState)
}
</script>

<template>
  <Dialog :open="dialogState" :unmount="unmount" @close="closeDialog">
    <dialog-panel>
      <dialog-title>
        <slot name="title"></slot>
      </dialog-title>
      <dialog-description>
        <slot name="description"></slot>
      </dialog-description>
      <slot></slot>
    </dialog-panel>
  </Dialog>
</template>
