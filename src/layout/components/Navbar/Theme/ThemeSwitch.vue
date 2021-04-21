<template>
  <el-divider content-position="left">主题风格</el-divider>

  <el-switch
    style="display: block"
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="白天"
    inactive-text="夜间">
  </el-switch>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ThemeSwitch',
  setup() {
    const value = ref(true)

    return {
      value
    }
  }
}
</script>

<style lang="scss" scoped>
.el-switch {
  text-align: center;
}
</style>