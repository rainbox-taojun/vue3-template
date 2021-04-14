import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import Page404 from '../views/error-page/404.vue'

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

  { path: '/:pathMatch(.*)*', name: 'not-found', component: Page404 },
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
