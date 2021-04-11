const asyncRoutes = [
  {
    path: '/system',
    component: 'Layout',
    meta: { title: '系统管理', icon: 'user', affix: false },
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
    url: '/vue-element-admin/system/getModules',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: asyncRoutes
      }
    }
  },

  {
    url: '/vue-element-admin/users/get_list',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: {
          'size': 10,
          'current': 1,
          'total': 1,
          'pageCount': 1,
          'list': [
            {
              'id': '450edd8d839547f5af1064165df86a2c',
              'userName': 'admin',
              'cellphone': '18768105712',
              'email': null,
              'realName': null,
              'avatar': null,
              'lastLoginDate': null,
              'status': null,
              'createDate': null,
              'org': null,
              'pos': null,
              'menus': null
            }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/users/get_info',
    type: 'post',
    response: config => {
      return {
        'status': 200,
        'message': '请求成功',
        'data': {
          'id': '450edd8d839547f5af1064165df86a2c',
          'userName': 'admin',
          'cellphone': '18768105712',
          'email': null,
          'realName': null,
          'avatar': null,
          'lastLoginDate': null,
          'status': null,
          'createDate': null,
          'orgId': null,
          'posId': null,
          'menus': []
        }
      }
    }
  },

  {
    url: '/vue-element-admin/users/new_info',
    type: 'post',
    response: config => {
      return {
        'status': 200,
        'message': '请求成功',
        'data': {
          'avatar': 'string',
          'cellphone': 'string',
          'createDate': '2021-03-04T08:07:12.050Z',
          'email': 'string',
          'id': 'string',
          'lastLoginDate': '2021-03-04T08:07:12.050Z',
          'menus': [],
          'orgId': 'string',
          'posId': 'string',
          'realName': 'string',
          'status': 0,
          'userName': 'string'
        }
      }
    }
  },

  {
    url: '/vue-element-admin/roles/get_list',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: {
          'current': 0,
          'list': [
            {
              'code': 'string',
              'createDt': '2021-03-04T08:12:54.554Z',
              'description': 'string',
              'id': 'string',
              'menus': [
                'string'
              ],
              'name': 'string',
              'status': 0,
              'updateDt': '2021-03-04T08:12:54.554Z'
            }
          ],
          'pageCount': 0,
          'size': 0,
          'total': 0
        }
      }
    }
  },

  {
    url: '/vue-element-admin/roles/new_info',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: {
          'code': 'string',
          'createDt': '2021-03-04T08:15:38.002Z',
          'description': 'string',
          'id': 'string',
          'menus': [
            'string'
          ],
          'name': 'string',
          'status': 0,
          'updateDt': '2021-03-04T08:15:38.002Z'
        }
      }
    }
  },

  {
    url: '/vue-element-admin/roles/edit_info',
    type: 'post',
    response: config => {
      return {
        status: 200,
        data: {
          'code': 'string',
          'createDt': '2021-03-04T08:15:38.002Z',
          'description': 'string',
          'id': 'string',
          'menus': [
            'string'
          ],
          'name': 'string',
          'status': 0,
          'updateDt': '2021-03-04T08:15:38.002Z'
        }
      }
    }
  }
]
