import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'

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
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },

  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },

  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
]


const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// 批量新增路由
export function addRoutes(routes) {
  routes.forEach(item => {
    router.addRoute(item)
  })
}

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
