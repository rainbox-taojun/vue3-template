<template>
  <el-container :class="classObj">
    <sidebar class="sidebar-container"/>
    
    <el-container class="main-container">
      <navbar />
      
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  setup() {
    const store = useStore()

    const classObj = computed(() => {
      return {
        hideSidebar: !store.getters.sidebar.opened,
        openSidebar: store.getters.sidebar.opened,
        withoutAnimation: store.getters.sidebar.withoutAnimation,
        mobile: store.getters.device === 'mobile'
      }
    })

    return {
      classObj
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss";
.el-container {
  height: 100%;
}
</style>