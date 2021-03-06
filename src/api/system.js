import request from '@/utils/request'

export function getModules(query) {
  return request({
    url: '/api/system/getModules',
    method: 'post',
    data: query
  })
}

// 用户列表
export function getUserList(query) {
  return request({
    url: '/api/users/get_list',
    method: 'post',
    data: query
  })
}

// 用户信息
export function getUserInfo(id) {
  return request({
    url: `/api/users/get_info/${id}`,
    method: 'post'
  })
}

// 新增用户
export function addUser(query) {
  return request({
    url: '/api/users/new_info',
    method: 'post',
    data: query
  })
}

// 修改用户
export function editUser(query) {
  return request({
    url: '/api/users/new_info',
    method: 'post',
    data: query
  })
}

// 角色列表
export function getRoleList() {
  return request({
    url: '/api/roles/get_list',
    method: 'post'
  })
}

// 角色信息详情
export function getRoleInfo() {
  return request({
    url: '/api/roles/get_info',
    method: 'post'
  })
}

// 新增角色
export function addRole() {
  return request({
    url: '/api/roles/new_info',
    method: 'post'
  })
}

// 新增角色
export function editRole() {
  return request({
    url: '/api/roles/edit_info',
    method: 'post'
  })
}
