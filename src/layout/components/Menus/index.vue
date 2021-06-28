<template>
  <div class="menus">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="false"
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
import { useLayoutMenus } from '@/hooks'
import MenusItem from './MenusItem.vue'

export default {
  name: 'Menus',
  components: {
    MenusItem
  },
  setup() {
    const {
      activeMenu,
      permission_routes
    } = useLayoutMenus()

    return {
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