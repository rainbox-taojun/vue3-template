<template>
  <el-divider content-position="left">主题风格</el-divider>

  <el-switch
    style="display: block"
    v-model="value"
    active-color="#303133"
    inactive-color="#B3D8FF"
    active-text="夜间"
    inactive-text="白天"
    active-value="dark"
    inactive-value="light"
    @change="(val) => toggleSetting('theme', val)"  
  />
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ThemeSwitch',
  setup() {
    const store = useStore()
    const value = ref(store.state.settings.theme)

    const toggleSetting = (key, value) => {
      store.dispatch('settings/changeSetting', {key, value})
      document.body.dataset.theme = value
    }

    return {
      value,
      toggleSetting
    }
  }
}
</script>

<style lang="scss" scoped>
.el-switch {
  text-align: center;
}
</style>