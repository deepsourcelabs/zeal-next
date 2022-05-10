import type { VNode } from 'vue'
import { cloneVNode, Fragment } from 'vue'

/**
 * Generates an array of cloned VNodes, [since they are immutable]{@link https://github.com/vuejs/core/issues/1082#issuecomment-622519277}.
 * Optionally, can flatten VNodes of type {@link Fragment}.
 *
 * @param {VNode[]} nodes - Array of VNodes
 * @param {boolean} [flattenFragments=false] - Whether to flatten fragments or not. `false` by default.
 */
const cloneVNodes = (
  nodes: VNode[],
  customProps = {} as Record<string, unknown>,
  flattenFragments = false
): VNode[] => {
  return nodes.reduce((flatArray, child) => {
    if (flattenFragments && child.type === Fragment) {
      return cloneVNodes(child.children as VNode[], { ...customProps, ...child.props })
    }

    return flatArray.concat(cloneVNode(child, { ...customProps, ...child.props }))
  }, [] as VNode[])
}

export { cloneVNodes }
