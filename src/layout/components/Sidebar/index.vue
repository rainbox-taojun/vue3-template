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
import { useLayoutMenus } from '@/hooks'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarItem
  },
  setup() {
    const {
      activeMenu,
      permission_routes
    } = useLayoutMenus()
    
    const store = useStore()

    const showLogo = computed(() => {
      return store.state.settings.sidebarLogo
    })

    const isCollapse = computed(() => {
      return !store.getters.sidebar.opened
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