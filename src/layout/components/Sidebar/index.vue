<template>
  <el-aside :class="{'has-logo':showLogo}" >
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path" 
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarItem
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const activeMenu = computed(() => {
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    const showLogo = computed(() => {
      return store.state.settings.sidebarLogo
    })

    const isCollapse = computed(() => {
      return !store.getters.sidebar.opened
    })

    const permission_routes = computed(() => {
      return store.getters.permission_routes
    })

    return {
      isCollapse,
      showLogo,
      permission_routes,
      activeMenu
    }
  }
}
</script>

<style>

</style>