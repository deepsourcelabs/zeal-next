import ZConfirm from './ZConfirm.vue'
import { ref } from 'vue'
import '../../assets/css/index.css'

export default {
  title: 'ZConfirm',
  component: ZConfirm,
  argTypes: {
    count: { control: 'number', default: '3' },
    separator: { control: 'text', default: '/' }
  }
}

const Template = (args) => ({
  components: { ZConfirm },
  setup() {
    const isOpen = ref(args.isOpen)

    const onClose = (newState) => {
      isOpen.value = newState
    }
    return { isOpen, onClose }
  },
  template: `<div>
    <button @click="isOpen = !isOpen"> Toggle </button>
    <z-confirm :open="isOpen" @close="onClose">
      Test
    </z-confirm>
  </div>`
})

export const Regular = Template.bind({})
Regular.args = {
  isOpen: false
}
