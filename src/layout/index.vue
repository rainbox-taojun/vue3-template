<template>
  <el-container :class="classObj">
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
import { Navbar, AppMain, TagsView } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    TagsView
  },
  setup() {
    const store = useStore()

    const classObj = computed(() => {
      return {
        showBreadcrumb: store.getters.breadcrumb,
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
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: calc(100% - 40px);
  transition: width 0.28s;
}

.mobile .fixed-header {
  width: 100%;
}
</style>