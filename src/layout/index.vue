<template>
  <el-container :class="classObj">
    <sidebar class="sidebar-container"/>
    
    <el-container
      :class="{hasTagsView:needTagsView}"
      class="main-container"
    >
      <el-header
        class="app-header"
        :class="{'fixed-header':fixedHeader}"
        :height="needTagsView ? '90px' : '50px'"  
      >
        <navbar />
        <tags-view v-if="needTagsView" />
      </el-header>
      
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar,
    TagsView
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

    const needTagsView = computed(() => {
      return store.state.settings.tagsView
    })

    const fixedHeader = computed(() => {
      return store.state.settings.fixedHeader
    })

    return {
      classObj,
      needTagsView,
      fixedHeader
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss";
.el-container {
  height: 100%;
}

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
.app-header {
  padding: 0;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}
</style>