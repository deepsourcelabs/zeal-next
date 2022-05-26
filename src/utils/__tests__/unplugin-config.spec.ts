import { expect } from 'chai'
import { test } from 'vitest'
import { unPluginConfig } from '../unplugin-config'

test('unplugin config', () => {
  //? Ensure the compiler is always set to `vue3`
  expect(unPluginConfig.compiler).eq('vue3')
  //? Ensure the scale is always set to `1`
  expect(unPluginConfig.scale).eq(1)
  //? Ensure that default classes always contain `z-icon`
  expect(unPluginConfig.defaultClass).contains('z-icon')
})
