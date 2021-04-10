<template>
  <el-container>
    <el-header>
      <navbar />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>