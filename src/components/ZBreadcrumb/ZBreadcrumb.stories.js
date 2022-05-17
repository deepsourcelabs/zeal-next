import ZBreadcrumb from './ZBreadcrumb.vue'
import ZBreadcrumbItem from './ZBreadcrumbItem.vue'
import '../../assets/css/index.css'

export default {
  title: 'ZBreadcrumb',
  component: ZBreadcrumb,
  argTypes: {
    count: { control: 'number', default: '3' },
    separator: { control: 'text', default: '/' }
  }
}

const Template = (args) => ({
  components: { ZBreadcrumb, ZBreadcrumbItem },
  setup() {
    return { args }
  },
  template: `<z-breadcrumb :separator="args.separator"> 
      <z-breadcrumb-item separator="/">start</z-breadcrumb-item>
      <z-breadcrumb-item v-for="i in args.count" :key="i" :separator="i === args.count ? '/' : '>'">{{i}}</z-breadcrumb-item>
      <z-breadcrumb-item>end</z-breadcrumb-item>
    </z-breadcrumb>`
})

export const Regular = Template.bind({})
Regular.args = {
  count: 3,
  separator: '/'
}
