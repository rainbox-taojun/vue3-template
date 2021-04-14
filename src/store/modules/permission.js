import { defineAsyncComponent } from 'vue'
import { getModules } from '@/api/system'
import { constantRoutes } from '@/router'
import Layout from '@/layout/index.vue'

// 挂在路由上的组件
export function mountRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        if (import.meta.env.MODE === 'production') {
          
          const modules = import.meta.glob('../../views/' + route.component + '.vue')
          console.log(modules)
          route.component = modules
        } else {
          route.component = import('../../views/' + route.component + '.vue')
        }
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
