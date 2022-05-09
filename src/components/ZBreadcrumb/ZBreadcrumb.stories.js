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
      <z-breadcrumb-item v-for="i in args.count" :key="i">{{i}}</z-breadcrumb-item>
    </z-breadcrumb>`
})

export const Regular = Template.bind({})
Regular.args = {
  count: 3,
  separator: '/'
}
