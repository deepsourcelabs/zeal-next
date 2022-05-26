import { mount } from '@vue/test-utils'
import ZTag from '../ZTag.vue'
import { test, expect } from 'vitest'

test('mount component', () => {
  expect(ZTag).toBeTruthy()

  const wrapper = mount(ZTag, { icon: { icon: 'activity' } })

  expect(wrapper.html()).toMatchSnapshot()
})
