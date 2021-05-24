import { getModules } from '@/api/system'
import { constantRoutes, notFound } from '@/router'
import Layout from '@/layout/index.vue'

let dynamicViewsModules = null // 所有views下的组件

// 动态载入
function dynamicImport(dynamicViewsModules, component) {
  const keys = Object.keys(dynamicViewsModules)
  const matchKeys = keys.filter((key) => {
    let k = key.replace('../../views/', '')
    const lastIndex = k.lastIndexOf('.')
    k = k.substring(0, lastIndex)
    return k === component
  })
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0]
    return dynamicViewsModules[matchKey]
  }
  if (matchKeys?.length > 1) {
    warn(
      '请不要在视图文件夹下的同一分层目录中使用相同的文件名创建“.vue`、`.jsx`和`.tsx`文件。这将导致动态引入失败'
    );
    return
  }
}

// 挂在路由上的组件
export function mountRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        // 关于import.meta.glob 可见：https://vitejs.dev/guide/features.html#json
        dynamicViewsModules = dynamicViewsModules || import.meta.glob('../../views/**/*.{vue, jsx, tsx}')
        route.component = dynamicImport(dynamicViewsModules, route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = mountRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      getModules().then(res => {
        const { data } = res
        const accessedRoutes = mountRouter(data)
        // 最后再加入404页面，否则在载入过程中路由可能已经认为页面不存在了
        accessedRoutes.push(notFound)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      }).catch(e => {
        reject(e)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
