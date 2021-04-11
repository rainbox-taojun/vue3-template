<template>
  <el-aside :class="{'has-logo':showLogo}" >
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.module.scss'

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

    onMounted(() => {
      console.log(permission_routes)
    })

    console.log(variables)

    return {
      variables,
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