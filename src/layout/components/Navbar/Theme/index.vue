<template>
  <el-popover
    placement="bottom"
    :width="250"
    trigger="click"
  >
    <template #reference>
      <div v-if="showSetting" class="theme-icon">
        <svg-icon icon-class="layout"/>
      </div>
    </template>
    <theme-switch />
    <layout-preview />
    <settings />
  </el-popover>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import LayoutPreview from './LayoutPreview.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import Settings from './Settings.vue'

export default {
  name: 'Theme',
  components: {
    ThemeSwitch,
    LayoutPreview,
    Settings
  },
  setup() {
    const store = useStore()
    const showSetting = computed(() => {
      return store.state.settings.showSettings
    })

    return {
      showSetting
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-icon {
  margin-right: 20px;
  height: 100%;

}
</style>