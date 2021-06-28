import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { isExternal } from '@/utils/validate'

export default function(props) {
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

  const onlyOneChild = ref(null)
  const subMenu = ref(null)

  const hasOneShowingChild = (children = [], parent) => {
    const showingChildren = children.filter(item => {
      if (item.hidden) {
        return false
      } else {
        // Temp set(will be used if only has one showing child)
        onlyOneChild.value = item
        return true
      }
    })

    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
      return true
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      onlyOneChild.value = { ... parent, path: '', noShowingChildren: true }
      return true
    }

    return false
  }

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
    permission_routes,
    activeMenu,
    onlyOneChild,
    subMenu,
    resolvePath,
    hasOneShowingChild
  }
}