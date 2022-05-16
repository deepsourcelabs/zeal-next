<script setup lang="ts">
import ZTabList from './ZTabList.vue'
import ZTabPanes from './ZTabPanes.vue'
import ZTabPane from './ZTabPane.vue'
import ZTabs from './ZTabs.vue'
import ZTab from './ZTab.vue'
</script>

<template>
  <z-tabs>
    <z-tab-list>
      <z-tab> Num 1 </z-tab>
      <z-tab> Num 2 </z-tab>
      <z-tab> Num 3 </z-tab>
    </z-tab-list>
    <z-tab-panes>
      <z-tab-pane> Hello this is 1 </z-tab-pane>
      <z-tab-pane> Hello this is 2 </z-tab-pane>
      <z-tab-pane> Hello this is 3 </z-tab-pane>
    </z-tab-panes>
  </z-tabs>
</template>
