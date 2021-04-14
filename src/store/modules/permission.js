import { getModules } from '@/api/system'
import { constantRoutes } from '@/router'
import Layout from '@/layout/index.vue'

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
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure'
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
        const dynamicViewsModules = import.meta.glob('../../views/**/*.{vue, jsx}')
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
