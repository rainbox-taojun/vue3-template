<template>
  <el-card shadow="hover" class="theme" :body-style="{height: '120px', textAlign: 'center'}">
    <el-divider content-position="left">主题风格</el-divider>

    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="白天"
      inactive-text="夜间">
    </el-switch>

  </el-card>
</template>

<script>
export default {
  name: 'Theme'
}
</script>

<style lang="scss" scoped>
.theme {
  grid-column-start: span 3;
  grid-row-start: span 3;
}
</style>