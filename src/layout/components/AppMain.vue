<template>
  <el-main class="app-main" :style="{maxWidth: appMainWidth}">
    <breadcrumb
      v-if="needBreadcrumb"
      id="breadcrumb-container"
      class="breadcrumb-container"
    />
    <router-view/>
  </el-main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Breadcrumb from './Breadcrumb.vue'

export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  setup() {
    const store = useStore()

    const appMainWidth = computed(() => {
      if (typeof store.state.settings.mainWidth === 'number' && !isNaN(store.state.settings.mainWidth) ) {
        return store.state.settings.mainWidth + 'px'
      }
      return 'unset'
    })

    const needBreadcrumb = computed(() => {
      return store.state.settings.breadcrumb
    })

    return {
      needBreadcrumb,
      appMainWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  20=margin-top*/
  min-height: calc(100vh - 50px - 20px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 70px;
}

.hasTagsView {
  .app-main {
    padding: 20px 20px 0 20px;
    min-height: calc(100vh);
  }

  .fixed-header+.app-main {
    padding-top: 120px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>