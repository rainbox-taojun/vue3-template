<template>
  <div class="menus">
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.topMenuBg"
      :text-color="variables.topMenuText"
      :unique-opened="false"
      :active-text-color="variables.topMenuActiveText"
      :collapse-transition="false"
      mode="horizontal"
    >
      <menus-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path" 
      />
    </el-menu>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import MenusItem from './MenusItem.vue'
import variables from '@/styles/variables.module.scss'

export default {
  name: 'Menus',
  components: {
    MenusItem
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

    const permission_routes = computed(() => {
      return store.getters.permission_routes
    })

    return {
      variables,
      permission_routes,
      activeMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.menus {
  margin-left: 10px;
  flex: 1;

  .el-menu {
    height: 100%;
    border: none!important;
  }
}
</style>