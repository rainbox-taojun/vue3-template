<template>
  <div class="menus" ref="menusRef">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="false"
      :collapse-transition="false"
      mode="horizontal"
    >
      <menus-item
        v-for="route in menus"
        :key="route.path"
        :item="route"
        :base-path="route.path" 
      />
      
      <el-submenu v-if="otherMenus.length > 0">
        <template #title>更多</template>
        <menus-item
          v-for="route in otherMenus"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useLayoutMenus } from '@/hooks'
import MenusItem from './MenusItem.vue'

export default {
  name: 'Menus',
  components: {
    MenusItem
  },
  setup(props) {
    const menusRef = ref(null)

    const {
      activeMenu,
      menus,
      otherMenus
    } = useLayoutMenus(props, menusRef)

    return {
      menusRef,
      menus,
      otherMenus,
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