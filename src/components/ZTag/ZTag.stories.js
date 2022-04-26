import ZTag from './ZTag.vue'
import '../../assets/css/index.css'

export default {
  title: 'ZTag',
  component: ZTag,
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'success', 'info', 'warning', 'error'],
      default: 'default'
    },
    bgColor: { control: 'text', default: 'bg-slate-800' },
    textColor: { control: 'text', default: 'bg-neutral-50' }
  }
}

const Template = (args) => ({
  components: { ZTag },
  setup() {
    return { args }
  },
  template: '<z-tag v-bind="args"> This is a tag </z-tag>'
})

export const Regular = Template.bind({})
Regular.args = {
  state: 'success'
}

export const Large = Template.bind({})
Large.args = {
  state: 'success',
  spacing: 'px-6 py-2',
  textSize: 'text-lg'
}
