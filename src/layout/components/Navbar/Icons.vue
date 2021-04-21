<template>
  <div
    v-for="item in rightMenus"
    :key="item.path"
    class="icon-menu"
  >
    <router-link
      v-if="item.children?.length === 1"
      :to="item.children[0]"
    >
      <svg-icon :icon-class="item.meta.icon"/>
    </router-link>
    <el-dropdown v-else-if="item.children?.length > 1">
      <span class="el-dropdown-link">
        <svg-icon
          v-if="!item.meta.icon.includes('el-icon')"
          :icon-class="item.meta.icon"
        />
        <i
          v-else
          :class="item.meta.icon"
          class="el-icon--right"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <router-link
            v-for="sub in item.children"
            :key="sub.path"
            :to="sub"
          >
            <el-dropdown-item>{{sub.meta.title}}</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Icons',
  setup() {
    const store = useStore()

    const permission_routes = computed(() => {
      return store.getters.permission_routes
    })

    const rightMenus = computed(() => {
      return permission_routes.value.filter(item => item.meta?.rightMenu === true)
    })

    const resolvePath = (routePath) =>  {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      if (props.basePath === '/') {
        return routePath
      }
      if (routePath === '') {
        return props.basePath
      }
      if (routePath.indexOf('/') === -1) {
        return props.basePath + '/' + routePath
      }
      return props.basePath + routePath
    }

    return {
      rightMenus
    }
  }
}
</script>

<style scoped lang="scss">
.icon-menu {
  margin-right: 20px;
}
</style>