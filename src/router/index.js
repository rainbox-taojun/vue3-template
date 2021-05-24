import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import NotFound from '@/views/error-page/404.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true
  }
]

// 404页面
export const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFound,
  hidden: true
}

const createRouterFactory = () => {
  return createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
}

const router = createRouterFactory()

// 批量新增路由
export function addRoutes(routes) {
  return new Promise((resolve) => {
    routes.forEach(item => {
      router.addRoute(item)
    })
    resolve()
  })
}

// 判断路由是否存在
const hasRoute = (route, list) => {
  let flag = false
  for(let i=0 ; i<list.length ; i++) {
    const item = list[i]
    if ((item.path === route.path) || (item.name === route.name)) {
      flag = true
      break
    } else if (item.children) {
      flag = hasRoute(route, item.children)
      if (flag) { break }
    } else {
      flag = false
    }
  }

  return flag
}

// 重置路由到最初的模样
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    if (!hasRoute(route, constantRoutes)) {
      const { name } = route
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
