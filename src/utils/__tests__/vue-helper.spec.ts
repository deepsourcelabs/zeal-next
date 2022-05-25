import { describe, expect, test } from 'vitest'
import { cloneVNodes } from '../vue-helper'
import { Fragment, h } from 'vue'

const VNodesMock = [
  h('p', 'start'),
  h(
    Fragment,
    Array.from({ length: 20 }).map(() => {
      return h('p', 'hi')
    })
  ),
  h('p', 'end')
]

describe('cloneVNodes', () => {
  test('it clones a set of VNodes with Fragments expanded when `flattenFragments = true`', () => {
    const clonedVNodes = cloneVNodes(VNodesMock, { test: 'a' }, true)
    expect(clonedVNodes.length).eq(22)
  })

  test('it clones a set of VNodes with Fragments without expanding Fragments when `flattenFragments = false`', () => {
    const clonedVNodes = cloneVNodes(VNodesMock, { test: 'a' })
    expect(clonedVNodes.length).eq(3)
  })
})
