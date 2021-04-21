<template>
  <el-container :class="[classObj, layout+'-layout']">
    <sidebar v-if="layout==='sidebar'" class="sidebar-container"/>
    
    <el-container
      :class="{hasTagsView:needTagsView}"
      class="main-container"
    >
      <el-header
        class="app-header"
        :class="{'fixed-header':fixedHeader}"
        :height="needTagsView ? '88px' : '50px'"
      >
        <navbar />
        <tags-view v-if="needTagsView" />
      </el-header>
      
      <app-main />
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
        // layout: store.state.settings.layout,
        hideSidebar: !store.getters.sidebar.opened,
        openSidebar: store.getters.sidebar.opened,
        withoutAnimation: store.getters.sidebar.withoutAnimation,
        mobile: store.getters.device === 'mobile'
      }
    })
    console.log(classObj)

    const needTagsView = computed(() => {
      return store.state.settings.tagsView
    })

    const fixedHeader = computed(() => {
      return store.state.settings.fixedHeader
    })

    const layout = computed(() => {
      return store.state.settings.layout
    })

    return {
      classObj,
      needTagsView,
      fixedHeader,
      layout
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
  margin: 20px 20px 0 20px;
  padding: 0;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: box-shadow .3s;
  
  &:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: width 0.28s;
}

.sidebar-layout {
  .fixed-header {
    width: calc(100% - #{$sideBarWidth} - 40px);
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px - 40px)
  }
}

.top-menu-layout {
  .fixed-header {
    left: 0;
  }
}

.mobile .fixed-header {
  width: 100%;
}
</style>