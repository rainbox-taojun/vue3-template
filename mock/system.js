const asyncRoutes = [
  {
    path: '/system',
    component: 'Layout',
    redirect: '/system/user',
    meta: { title: '系统管理', icon: 'el-icon-s-tools', affix: false, rightMenu: true },
    children: [
      {
        path: 'user',
        component: 'system/user/index',
        name: 'User',
        meta: { title: '用户管理', icon: '', affix: false }
      },
      {
        path: 'menu',
        component: 'system/menu/index',
        name: 'Menu',
        meta: { title: '导航管理', icon: '', affix: false }
      }
    ]
  }
]

export default [
  // getModules
  {
    url: '/api/system/getModules',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        data: asyncRoutes
      }
    }
  }
]
