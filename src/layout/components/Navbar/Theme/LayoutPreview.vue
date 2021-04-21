<template>
  <el-divider content-position="left">导航栏模式</el-divider>

  <div class="layout-preview-content" :class="currentLayout">
    <section
      class="sidebar-preview preview"
      @click="toggleLayout('sidebar')"
    >
      <el-container>
        <el-aside width="20px"></el-aside>
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>
      </el-container>
    </section>
    
    <section
      class="top-menu-preview preview"
      @click="toggleLayout('top-menu')"
    >
      <el-container>
        <el-header></el-header>
        <el-main></el-main>
      </el-container>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LayoutPreview',
  setup() {
    const store = useStore()
    const currentLayout = computed(() => {
      return store.state.settings.layout
    })
    const toggleLayout = (value) => {
      store.dispatch('settings/changeSetting', {key: 'layout', value})
    }
    
    return {
      currentLayout,
      toggleLayout
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-preview-content {
    display: flex;
    justify-content: space-around;
    width: 100%;

    &.sidebar {
      .sidebar-preview{
        border: 2px solid #409EFF;
      }
    }

    &.top-menu {
      .top-menu-preview {
        border: 2px solid #409EFF;
      }
    }

    .preview {
      width: 80px;
      height: 50px;
      cursor: pointer;
      border-radius: 5px;
      border: 2px solid transparent;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        border: 2px solid #409EFF;
      }

      :deep(.el-container) {
        width: 100%;
        height: 100%;
      }

      :deep(.el-header),
      :deep(.el-footer) {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        height: 15px !important;
        line-height: 15px;
      }
    }
  }
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0px;
}
</style>