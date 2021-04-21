<template>
  <el-divider content-position="left">界面设置</el-divider>

  <el-form
    ref="form"
    :model="form"
    label-width="200px"
    label-position="left"
  >
    <el-form-item label="标签栏">
      <el-switch
        v-model="tagsView"
        @change="(val) => toggleSetting('tagsView', val)"
      />
    </el-form-item>
    <el-form-item label="固定header">
      <el-switch
        v-model="fixedHeader"
        @change="(val) => toggleSetting('fixedHeader', val)"
      />
    </el-form-item>
    <el-form-item label="Logo">
      <el-switch
        v-model="sidebarLogo"
        @change="(val) => toggleSetting('sidebarLogo', val)"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Settings',
  setup() {
    const store = useStore()
    const form = reactive({
      tagsView: store.state.settings.tagsView,
      fixedHeader: store.state.settings.fixedHeader,
      sidebarLogo: store.state.settings.sidebarLogo
    })

    const toggleSetting = (key, value) => {
      store.dispatch('settings/changeSetting', {key, value})
    }

    return {
      ...toRefs(form),
      toggleSetting
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 0;
}
</style>