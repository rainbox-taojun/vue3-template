const asyncRoutes = [
  {
    path: '/system',
    component: 'Layout',
    redirect: '/system/user',
    meta: { title: '系统管理', icon: 'el-icon-eleme', affix: false },
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
  },
  {
    path: '/system1',
    component: 'Layout',
    redirect: '/system1/user1',
    meta: { title: '系统管理', icon: 'el-icon-eleme', affix: false },
    children: [
      {
        path: 'user1',
        component: 'system/user/index',
        name: 'User1',
        meta: { title: '用户管理', icon: '', affix: false }
      },
      {
        path: 'menu1',
        component: 'system/menu/index',
        name: 'Menu1',
        meta: { title: '导航管理', icon: '', affix: false }
      }
    ]
  },
  {
    path: '/system2',
    component: 'Layout',
    redirect: '/system2/user2',
    meta: { title: '系统管理', icon: 'el-icon-eleme', affix: false },
    children: [
      {
        path: 'user2',
        component: 'system/user/index',
        name: 'User2',
        meta: { title: '用户管理', icon: '', affix: false }
      },
      {
        path: 'menu2',
        component: 'system/menu/index',
        name: 'Menu2',
        meta: { title: '导航管理', icon: '', affix: false }
      }
    ]
  },
  {
    path: '/system3',
    component: 'Layout',
    redirect: '/system3/user3',
    meta: { title: '系统管理', icon: 'el-icon-eleme', affix: false },
    children: [
      {
        path: 'user3',
        component: 'system/user/index',
        name: 'User3',
        meta: { title: '用户管理', icon: '', affix: false }
      },
      {
        path: 'menu3',
        component: 'system/menu/index',
        name: 'Menu3',
        meta: { title: '导航管理', icon: '', affix: false }
      }
    ]
  },
  {
    path: '/system4',
    component: 'Layout',
    redirect: '/system4/user4',
    meta: { title: '系统管理', icon: 'el-icon-eleme', affix: false },
    children: [
      {
        path: 'user4',
        component: 'system/user/index',
        name: 'User4',
        meta: { title: '用户管理', icon: '', affix: false }
      },
      {
        path: 'menu4',
        component: 'system/menu/index',
        name: 'Menu4',
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
