import request from '@/utils/request';

export function queryAccountgroups(params) {
  return request({
    url: '/accountgroups',
    method: 'get',
    params
  })
}

export function addAccountgroup(params) {
  return request({
    url: '/accountgroups/add',
    method: 'post',
    data: params
  })
}

export function updateAccountgroup(id, params) {
  return request({
    url: `/accountgroups/${id}`,
    method: 'patch',
    data: params
  })
}

export function deleteAccountgroup(id) {
  return request({
    url: `/accountgroups/${id}`,
    method: 'delete'
  })
}

export function getPayManagementById(id) {
  return request({
    url: '/payManagement/' + id,
    method: 'get'
  })
}

// 不规则费用管理（列表）
export function queryIrregularList(query) {
  return request({
    url: '/irregular/cost/list/',
    method: 'get'
  })
}

// 不规则费用管理（删除）
export function deleteIrregularList(query) {
  return request({
    url: '/irregular/cost/del/',
    method: 'delete'
  })
}


