/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    ERP-系统管理API.
 ==========================================================*/
/**
 * 物理删除部门信息
 * request: deletePhyUsingDELETE
 * url: deletePhyUsingDELETEURL
 * method: deletePhyUsingDELETE_TYPE
 * raw_url: deletePhyUsingDELETE_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/delete/physical/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePhyUsingDELETE_RAW_URL = function() {
  return '/sys/departments/delete/physical/{id}'
}
export const deletePhyUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deletePhyUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/delete/physical/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除部门信息
 * request: deleteUsingDELETE
 * url: deleteUsingDELETEURL
 * method: deleteUsingDELETE_TYPE
 * raw_url: deleteUsingDELETE_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/delete/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_RAW_URL = function() {
  return '/sys/departments/delete/{id}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/delete/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询部门列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 部门名称或编码
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_RAW_URL = function() {
  return '/sys/departments/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取部门信息
 * request: byIdUsingGET
 * url: byIdUsingGETURL
 * method: byIdUsingGET_TYPE
 * raw_url: byIdUsingGET_RAW_URL
 * @param id - 部门Id
 */
export const byIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/queryById/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const byIdUsingGET_RAW_URL = function() {
  return '/sys/departments/queryById/{id}'
}
export const byIdUsingGET_TYPE = function() {
  return 'get'
}
export const byIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/queryById/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增部门信息
 * request: saveUsingPOST
 * url: saveUsingPOSTURL
 * method: saveUsingPOST_TYPE
 * raw_url: saveUsingPOST_RAW_URL
 * @param request - 部门信息主体
 */
export const saveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_RAW_URL = function() {
  return '/sys/departments/save'
}
export const saveUsingPOST_TYPE = function() {
  return 'post'
}
export const saveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 上级ID不可改
 * request: updateUsingPOST
 * url: updateUsingPOSTURL
 * method: updateUsingPOST_TYPE
 * raw_url: updateUsingPOST_RAW_URL
 * @param request - 部门信息主体
 */
export const updateUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/departments/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updateUsingPOST_RAW_URL = function() {
  return '/sys/departments/update'
}
export const updateUsingPOST_TYPE = function() {
  return 'post'
}
export const updateUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/departments/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询可用选项列表
 * request: availItemListUsingGET
 * url: availItemListUsingGETURL
 * method: availItemListUsingGET_TYPE
 * raw_url: availItemListUsingGET_RAW_URL
 * @param code - 字典类型编码
 */
export const availItemListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/avail/item/list/{code}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{code}', `${parameters['code']}`)
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const availItemListUsingGET_RAW_URL = function() {
  return '/sys/dict/avail/item/list/{code}'
}
export const availItemListUsingGET_TYPE = function() {
  return 'get'
}
export const availItemListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/avail/item/list/{code}'
  path = path.replace('{code}', `${parameters['code']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 启用禁用选项
 * request: availItemUsingPUT
 * url: availItemUsingPUTURL
 * method: availItemUsingPUT_TYPE
 * raw_url: availItemUsingPUT_RAW_URL
 * @param id - id
 * @param state - 启用/禁用
 */
export const availItemUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/avail'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['state'] !== undefined) {
    queryParameters['state'] = parameters['state']
  }
  if (parameters['state'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: state'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const availItemUsingPUT_RAW_URL = function() {
  return '/sys/dict/item/avail'
}
export const availItemUsingPUT_TYPE = function() {
  return 'put'
}
export const availItemUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/avail'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['state'] !== undefined) {
    queryParameters['state'] = parameters['state']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有选项列表（可用和不可用）
 * request: itemListUsingGET
 * url: itemListUsingGETURL
 * method: itemListUsingGET_TYPE
 * raw_url: itemListUsingGET_RAW_URL
 * @param code - 字典类型编码
 */
export const itemListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/list/{code}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{code}', `${parameters['code']}`)
  if (parameters['code'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: code'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const itemListUsingGET_RAW_URL = function() {
  return '/sys/dict/item/list/{code}'
}
export const itemListUsingGET_TYPE = function() {
  return 'get'
}
export const itemListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/list/{code}'
  path = path.replace('{code}', `${parameters['code']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加选项
 * request: itemSaveUsingPOST
 * url: itemSaveUsingPOSTURL
 * method: itemSaveUsingPOST_TYPE
 * raw_url: itemSaveUsingPOST_RAW_URL
 * @param request - request
 * @param  - 
 */
export const itemSaveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const itemSaveUsingPOST_RAW_URL = function() {
  return '/sys/dict/item/save'
}
export const itemSaveUsingPOST_TYPE = function() {
  return 'post'
}
export const itemSaveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 交换排序
 * request: itemSortExchangeUsingPUT
 * url: itemSortExchangeUsingPUTURL
 * method: itemSortExchangeUsingPUT_TYPE
 * raw_url: itemSortExchangeUsingPUT_RAW_URL
 * @param sid - 第一个主键
 * @param fseq - 第一个排序值
 * @param tid - 第二个主键
 * @param sseq - 第二个排序值
 */
export const itemSortExchangeUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/sort/exchange'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sid'] !== undefined) {
    queryParameters['sid'] = parameters['sid']
  }
  if (parameters['sid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sid'))
  }
  if (parameters['fseq'] !== undefined) {
    queryParameters['fseq'] = parameters['fseq']
  }
  if (parameters['fseq'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fseq'))
  }
  if (parameters['tid'] !== undefined) {
    queryParameters['tid'] = parameters['tid']
  }
  if (parameters['tid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tid'))
  }
  if (parameters['sseq'] !== undefined) {
    queryParameters['sseq'] = parameters['sseq']
  }
  if (parameters['sseq'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sseq'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const itemSortExchangeUsingPUT_RAW_URL = function() {
  return '/sys/dict/item/sort/exchange'
}
export const itemSortExchangeUsingPUT_TYPE = function() {
  return 'put'
}
export const itemSortExchangeUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/sort/exchange'
  if (parameters['sid'] !== undefined) {
    queryParameters['sid'] = parameters['sid']
  }
  if (parameters['fseq'] !== undefined) {
    queryParameters['fseq'] = parameters['fseq']
  }
  if (parameters['tid'] !== undefined) {
    queryParameters['tid'] = parameters['tid']
  }
  if (parameters['sseq'] !== undefined) {
    queryParameters['sseq'] = parameters['sseq']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新选项
 * request: itemUpdateUsingPUT
 * url: itemUpdateUsingPUTURL
 * method: itemUpdateUsingPUT_TYPE
 * raw_url: itemUpdateUsingPUT_RAW_URL
 * @param id - 主键
 * @param request - request
 * @param  - 
 */
export const itemUpdateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/update/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const itemUpdateUsingPUT_RAW_URL = function() {
  return '/sys/dict/item/update/{id}'
}
export const itemUpdateUsingPUT_TYPE = function() {
  return 'put'
}
export const itemUpdateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/update/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 字典项详情
 * request: itemDetailUsingGET
 * url: itemDetailUsingGETURL
 * method: itemDetailUsingGET_TYPE
 * raw_url: itemDetailUsingGET_RAW_URL
 * @param id - 字典项主键
 */
export const itemDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/item/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const itemDetailUsingGET_RAW_URL = function() {
  return '/sys/dict/item/{id}'
}
export const itemDetailUsingGET_TYPE = function() {
  return 'get'
}
export const itemDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/item/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 通过编码查询选项
 * request: optionUsingGET
 * url: optionUsingGETURL
 * method: optionUsingGET_TYPE
 * raw_url: optionUsingGET_RAW_URL
 * @param 编码 - code
 */
export const optionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/option'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['编码'] !== undefined) {
    queryParameters['编码'] = parameters['编码']
  }
  if (parameters['编码'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: 编码'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const optionUsingGET_RAW_URL = function() {
  return '/sys/dict/option'
}
export const optionUsingGET_TYPE = function() {
  return 'get'
}
export const optionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/option'
  if (parameters['编码'] !== undefined) {
    queryParameters['编码'] = parameters['编码']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 字典类型列表
 * request: typeListUsingGET
 * url: typeListUsingGETURL
 * method: typeListUsingGET_TYPE
 * raw_url: typeListUsingGET_RAW_URL
 * @param nameOrCode - 编码或名称
 */
export const typeListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/dict/type/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['nameOrCode'] !== undefined) {
    queryParameters['nameOrCode'] = parameters['nameOrCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const typeListUsingGET_RAW_URL = function() {
  return '/sys/dict/type/list'
}
export const typeListUsingGET_TYPE = function() {
  return 'get'
}
export const typeListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/dict/type/list'
  if (parameters['nameOrCode'] !== undefined) {
    queryParameters['nameOrCode'] = parameters['nameOrCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 物理删除购物中心信息
 * request: deletePhyUsingDELETE_1
 * url: deletePhyUsingDELETE_1URL
 * method: deletePhyUsingDELETE_1_TYPE
 * raw_url: deletePhyUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/delete/physical/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePhyUsingDELETE_1_RAW_URL = function() {
  return '/sys/markets/delete/physical/{id}'
}
export const deletePhyUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deletePhyUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/delete/physical/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 逻辑删除购物中心信息
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/delete/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_1_RAW_URL = function() {
  return '/sys/markets/delete/{id}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/delete/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 空参查询购物中心列表，实参按购物中心名称模糊查询
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 购物中心名称
 */
export const listUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_1_RAW_URL = function() {
  return '/sys/markets/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取购物中心信息
 * request: byIdUsingGET_1
 * url: byIdUsingGET_1URL
 * method: byIdUsingGET_1_TYPE
 * raw_url: byIdUsingGET_1_RAW_URL
 * @param id - 购物中心Id
 */
export const byIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/queryById/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const byIdUsingGET_1_RAW_URL = function() {
  return '/sys/markets/queryById/{id}'
}
export const byIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const byIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/queryById/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增购物中心信息
 * request: saveUsingPOST_1
 * url: saveUsingPOST_1URL
 * method: saveUsingPOST_1_TYPE
 * raw_url: saveUsingPOST_1_RAW_URL
 * @param request - 购物中心信息主体
 */
export const saveUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_1_RAW_URL = function() {
  return '/sys/markets/save'
}
export const saveUsingPOST_1_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改购物中心信息
 * request: updateUsingPOST_1
 * url: updateUsingPOST_1URL
 * method: updateUsingPOST_1_TYPE
 * raw_url: updateUsingPOST_1_RAW_URL
 * @param request - 购物中心信息主体
 */
export const updateUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/markets/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updateUsingPOST_1_RAW_URL = function() {
  return '/sys/markets/update'
}
export const updateUsingPOST_1_TYPE = function() {
  return 'post'
}
export const updateUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/markets/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加新权限菜单按钮,并返回该按钮的信息
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param request - request
 * @param  - 
 */
export const addUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/menu/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_RAW_URL = function() {
  return '/sys/menu/add'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/menu/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除菜单
 * request: deleteUsingDELETE_4
 * url: deleteUsingDELETE_4URL
 * method: deleteUsingDELETE_4_TYPE
 * raw_url: deleteUsingDELETE_4_RAW_URL
 * @param id - id
 * @param  - 
 */
export const deleteUsingDELETE_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/menu/delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_4_RAW_URL = function() {
  return '/sys/menu/delete'
}
export const deleteUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/menu/delete'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 权限菜单列表
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 按钮名
 * @param  - 
 */
export const listUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/menu/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_7_RAW_URL = function() {
  return '/sys/menu/list'
}
export const listUsingGET_7_TYPE = function() {
  return 'get'
}
export const listUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/menu/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新权限菜单
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param request - request
 * @param  - 
 */
export const updateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/menu/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_RAW_URL = function() {
  return '/sys/menu/update'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/menu/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除通知
 * request: deletePhyUsingDELETE_2
 * url: deletePhyUsingDELETE_2URL
 * method: deletePhyUsingDELETE_2_TYPE
 * raw_url: deletePhyUsingDELETE_2_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/notice/delete/physical/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePhyUsingDELETE_2_RAW_URL = function() {
  return '/sys/notice/delete/physical/{id}'
}
export const deletePhyUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deletePhyUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/notice/delete/physical/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询通知列表
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param noticeName - 消息标题
 * @param merchantId - 商户id
 * @param noticeContent - 消息内容
 * @param createDate - 操作时间
 */
export const listUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/notice/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['noticeName'] !== undefined) {
    queryParameters['noticeName'] = parameters['noticeName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['noticeContent'] !== undefined) {
    queryParameters['noticeContent'] = parameters['noticeContent']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_2_RAW_URL = function() {
  return '/sys/notice/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/notice/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['noticeName'] !== undefined) {
    queryParameters['noticeName'] = parameters['noticeName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['noticeContent'] !== undefined) {
    queryParameters['noticeContent'] = parameters['noticeContent']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * ID
 * request: byIdUsingGET_2
 * url: byIdUsingGET_2URL
 * method: byIdUsingGET_2_TYPE
 * raw_url: byIdUsingGET_2_RAW_URL
 * @param id - 通知Id
 */
export const byIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/notice/queryById/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const byIdUsingGET_2_RAW_URL = function() {
  return '/sys/notice/queryById/{id}'
}
export const byIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const byIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/notice/queryById/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增通知
 * request: saveUsingPOST_2
 * url: saveUsingPOST_2URL
 * method: saveUsingPOST_2_TYPE
 * raw_url: saveUsingPOST_2_RAW_URL
 * @param merchantIds - 关联商户id
 * @param noticeName - 标题
 * @param noticeContent - 通知内容
 * @param createDate - 
 */
export const saveUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/notice/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantIds'] !== undefined) {
    queryParameters['merchantIds'] = parameters['merchantIds']
  }
  if (parameters['noticeName'] !== undefined) {
    queryParameters['noticeName'] = parameters['noticeName']
  }
  if (parameters['noticeName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: noticeName'))
  }
  if (parameters['noticeContent'] !== undefined) {
    queryParameters['noticeContent'] = parameters['noticeContent']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_2_RAW_URL = function() {
  return '/sys/notice/save'
}
export const saveUsingPOST_2_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/notice/save'
  if (parameters['merchantIds'] !== undefined) {
    queryParameters['merchantIds'] = parameters['merchantIds']
  }
  if (parameters['noticeName'] !== undefined) {
    queryParameters['noticeName'] = parameters['noticeName']
  }
  if (parameters['noticeContent'] !== undefined) {
    queryParameters['noticeContent'] = parameters['noticeContent']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询操作日志
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param userId - 操作人id
 * @param userName - 操作人姓名
 * @param operationLogTypeName - 操作类型名
 * @param operationLogTypeId - 操作类型id
 * @param operationDate - 操作时间_开始
 * @param createDate - 操作时间_结束
 */
export const listUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/operationLog/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters['userName'] !== undefined) {
    queryParameters['userName'] = parameters['userName']
  }
  if (parameters['operationLogTypeName'] !== undefined) {
    queryParameters['operationLogTypeName'] = parameters['operationLogTypeName']
  }
  if (parameters['operationLogTypeId'] !== undefined) {
    queryParameters['operationLogTypeId'] = parameters['operationLogTypeId']
  }
  if (parameters['operationDate'] !== undefined) {
    queryParameters['operationDate'] = parameters['operationDate']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_3_RAW_URL = function() {
  return '/sys/operationLog/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/operationLog/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters['userName'] !== undefined) {
    queryParameters['userName'] = parameters['userName']
  }
  if (parameters['operationLogTypeName'] !== undefined) {
    queryParameters['operationLogTypeName'] = parameters['operationLogTypeName']
  }
  if (parameters['operationLogTypeId'] !== undefined) {
    queryParameters['operationLogTypeId'] = parameters['operationLogTypeId']
  }
  if (parameters['operationDate'] !== undefined) {
    queryParameters['operationDate'] = parameters['operationDate']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有操作类型
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 
 * @param operationLogTypeName - 
 * @param remark - 
 * @param createDate - 
 */
export const listUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/operationLog/type/List'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['operationLogTypeName'] !== undefined) {
    queryParameters['operationLogTypeName'] = parameters['operationLogTypeName']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_4_RAW_URL = function() {
  return '/sys/operationLog/type/List'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/operationLog/type/List'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['operationLogTypeName'] !== undefined) {
    queryParameters['operationLogTypeName'] = parameters['operationLogTypeName']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['createDate'] !== undefined) {
    queryParameters['createDate'] = parameters['createDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 物理删除职位信息
 * request: deletePhyUsingDELETE_3
 * url: deletePhyUsingDELETE_3URL
 * method: deletePhyUsingDELETE_3_TYPE
 * raw_url: deletePhyUsingDELETE_3_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/delete/physical/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePhyUsingDELETE_3_RAW_URL = function() {
  return '/sys/positions/delete/physical/{id}'
}
export const deletePhyUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deletePhyUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/delete/physical/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 逻辑删除职位信息
 * request: deleteUsingDELETE_2
 * url: deleteUsingDELETE_2URL
 * method: deleteUsingDELETE_2_TYPE
 * raw_url: deleteUsingDELETE_2_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/delete/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_2_RAW_URL = function() {
  return '/sys/positions/delete/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/delete/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 空参查询列表，实参按名称或编号模糊查询
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 职位名称或编码
 */
export const listUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_5_RAW_URL = function() {
  return '/sys/positions/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * ID必填
 * request: queryPositionUsingGET
 * url: queryPositionUsingGETURL
 * method: queryPositionUsingGET_TYPE
 * raw_url: queryPositionUsingGET_RAW_URL
 * @param id - 部门Id
 */
export const queryPositionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/query/position/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryPositionUsingGET_RAW_URL = function() {
  return '/sys/positions/query/position/{id}'
}
export const queryPositionUsingGET_TYPE = function() {
  return 'get'
}
export const queryPositionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/query/position/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * ID必填
 * request: byIdUsingGET_3
 * url: byIdUsingGET_3URL
 * method: byIdUsingGET_3_TYPE
 * raw_url: byIdUsingGET_3_RAW_URL
 * @param id - 职位Id
 */
export const byIdUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/queryById/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const byIdUsingGET_3_RAW_URL = function() {
  return '/sys/positions/queryById/{id}'
}
export const byIdUsingGET_3_TYPE = function() {
  return 'get'
}
export const byIdUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/queryById/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增职位信息
 * request: saveUsingPOST_3
 * url: saveUsingPOST_3URL
 * method: saveUsingPOST_3_TYPE
 * raw_url: saveUsingPOST_3_RAW_URL
 * @param request - 职位信息主体
 */
export const saveUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_3_RAW_URL = function() {
  return '/sys/positions/save'
}
export const saveUsingPOST_3_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 上级ID不可修改，Pid只用于暂存数据
 * request: updateUsingPOST_2
 * url: updateUsingPOST_2URL
 * method: updateUsingPOST_2_TYPE
 * raw_url: updateUsingPOST_2_RAW_URL
 * @param request - 职位信息主体
 */
export const updateUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/positions/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updateUsingPOST_2_RAW_URL = function() {
  return '/sys/positions/update'
}
export const updateUsingPOST_2_TYPE = function() {
  return 'post'
}
export const updateUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/positions/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 物理删除区域信息
 * request: deletePhyUsingDELETE_4
 * url: deletePhyUsingDELETE_4URL
 * method: deletePhyUsingDELETE_4_TYPE
 * raw_url: deletePhyUsingDELETE_4_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/delete/physical/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePhyUsingDELETE_4_RAW_URL = function() {
  return '/sys/regions/delete/physical/{id}'
}
export const deletePhyUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const deletePhyUsingDELETE_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/delete/physical/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 逻辑删除区域信息
 * request: deleteUsingDELETE_3
 * url: deleteUsingDELETE_3URL
 * method: deleteUsingDELETE_3_TYPE
 * raw_url: deleteUsingDELETE_3_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/delete/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_3_RAW_URL = function() {
  return '/sys/regions/delete/{id}'
}
export const deleteUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/delete/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询区域列表
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 区域名称或英文缩写
 */
export const listUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_6_RAW_URL = function() {
  return '/sys/regions/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取区域信息
 * request: byIdUsingGET_4
 * url: byIdUsingGET_4URL
 * method: byIdUsingGET_4_TYPE
 * raw_url: byIdUsingGET_4_RAW_URL
 * @param id - 区域Id
 */
export const byIdUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/queryById/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const byIdUsingGET_4_RAW_URL = function() {
  return '/sys/regions/queryById/{id}'
}
export const byIdUsingGET_4_TYPE = function() {
  return 'get'
}
export const byIdUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/queryById/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 树形展示区域信息
 * request: queryTreeUsingGET
 * url: queryTreeUsingGETURL
 * method: queryTreeUsingGET_TYPE
 * raw_url: queryTreeUsingGET_RAW_URL
 */
export const queryTreeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/queryTree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryTreeUsingGET_RAW_URL = function() {
  return '/sys/regions/queryTree'
}
export const queryTreeUsingGET_TYPE = function() {
  return 'get'
}
export const queryTreeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/queryTree'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增区域信息
 * request: saveUsingPOST_4
 * url: saveUsingPOST_4URL
 * method: saveUsingPOST_4_TYPE
 * raw_url: saveUsingPOST_4_RAW_URL
 * @param request - 区域信息主体
 */
export const saveUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_4_RAW_URL = function() {
  return '/sys/regions/save'
}
export const saveUsingPOST_4_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改区域信息
 * request: updateUsingPOST_3
 * url: updateUsingPOST_3URL
 * method: updateUsingPOST_3_TYPE
 * raw_url: updateUsingPOST_3_RAW_URL
 * @param request - 区域信息主体
 */
export const updateUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/regions/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updateUsingPOST_3_RAW_URL = function() {
  return '/sys/regions/update'
}
export const updateUsingPOST_3_TYPE = function() {
  return 'post'
}
export const updateUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/regions/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参数应该和SysRole实体的属性一一对应，但不应该有id属性
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param role - Role角色实体
 */
export const addUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['role'] !== undefined) {
    body = parameters['role']
  }
  if (parameters['role'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: role'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_1_RAW_URL = function() {
  return '/sys/role/add'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除角色
 * request: deleteUsingDELETE_5
 * url: deleteUsingDELETE_5URL
 * method: deleteUsingDELETE_5_TYPE
 * raw_url: deleteUsingDELETE_5_RAW_URL
 * @param roleId - 要被删除的角色的ID
 * @param  - 
 */
export const deleteUsingDELETE_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['roleId'] !== undefined) {
    body = parameters['roleId']
  }
  if (parameters['roleId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: roleId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_5_RAW_URL = function() {
  return '/sys/role/delete'
}
export const deleteUsingDELETE_5_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/delete'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 角色详情。查询出的角色、系统中全部的权限菜单和该角色所拥有的权限菜单
 * request: selectAllMenusForUpdateUsingGET
 * url: selectAllMenusForUpdateUsingGETURL
 * method: selectAllMenusForUpdateUsingGET_TYPE
 * raw_url: selectAllMenusForUpdateUsingGET_RAW_URL
 * @param roleId - 角色的ID
 */
export const selectAllMenusForUpdateUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/detail'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['roleId'] !== undefined) {
    body = parameters['roleId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectAllMenusForUpdateUsingGET_RAW_URL = function() {
  return '/sys/role/detail'
}
export const selectAllMenusForUpdateUsingGET_TYPE = function() {
  return 'get'
}
export const selectAllMenusForUpdateUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/detail'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询角色
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 角色名字，或者角色描述
 */
export const listUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_8_RAW_URL = function() {
  return '/sys/role/list'
}
export const listUsingGET_8_TYPE = function() {
  return 'get'
}
export const listUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 角色的权限菜单列表
 * request: selectMenusUsingGET
 * url: selectMenusUsingGETURL
 * method: selectMenusUsingGET_TYPE
 * raw_url: selectMenusUsingGET_RAW_URL
 * @param roleId - roleId
 */
export const selectMenusUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/menu/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['roleId'] !== undefined) {
    queryParameters['roleId'] = parameters['roleId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectMenusUsingGET_RAW_URL = function() {
  return '/sys/role/menu/list'
}
export const selectMenusUsingGET_TYPE = function() {
  return 'get'
}
export const selectMenusUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/menu/list'
  if (parameters['roleId'] !== undefined) {
    queryParameters['roleId'] = parameters['roleId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 参数应该和SysRole实体的属性一一对应，要有id属性
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param role - role
 */
export const updateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/role/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['role'] !== undefined) {
    body = parameters['role']
  }
  if (parameters['role'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: role'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_1_RAW_URL = function() {
  return '/sys/role/update'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/role/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加新用户,并返回该用户的信息
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param newUser - 新添加用户的信息，角色ID不能少
 */
export const addUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['newUser'] !== undefined) {
    body = parameters['newUser']
  }
  if (parameters['newUser'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: newUser'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_2_RAW_URL = function() {
  return '/sys/user/add'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除用户
 * request: deleteUsingDELETE_6
 * url: deleteUsingDELETE_6URL
 * method: deleteUsingDELETE_6_TYPE
 * raw_url: deleteUsingDELETE_6_RAW_URL
 * @param userId - userId
 */
export const deleteUsingDELETE_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/delete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_6_RAW_URL = function() {
  return '/sys/user/delete'
}
export const deleteUsingDELETE_6_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/delete'
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 设置禁用用户
 * request: setForbiddenUsingGET
 * url: setForbiddenUsingGETURL
 * method: setForbiddenUsingGET_TYPE
 * raw_url: setForbiddenUsingGET_RAW_URL
 * @param id - id
 */
export const setForbiddenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/forbidden'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const setForbiddenUsingGET_RAW_URL = function() {
  return '/sys/user/forbidden'
}
export const setForbiddenUsingGET_TYPE = function() {
  return 'get'
}
export const setForbiddenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/forbidden'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据用户ID查询用户
 * request: getByIdUsingGET
 * url: getByIdUsingGETURL
 * method: getByIdUsingGET_TYPE
 * raw_url: getByIdUsingGET_RAW_URL
 * @param userId - userId
 */
export const getByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/get'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByIdUsingGET_RAW_URL = function() {
  return '/sys/user/get'
}
export const getByIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/get'
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 系统用户列表
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param name - 用户名称
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 */
export const listUsingGET_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_9_RAW_URL = function() {
  return '/sys/user/list'
}
export const listUsingGET_9_TYPE = function() {
  return 'get'
}
export const listUsingGET_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/list'
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 登录系统
 * request: loginUsingPOST
 * url: loginUsingPOSTURL
 * method: loginUsingPOST_TYPE
 * raw_url: loginUsingPOST_RAW_URL
 * @param request - request
 */
export const loginUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const loginUsingPOST_RAW_URL = function() {
  return '/sys/user/login'
}
export const loginUsingPOST_TYPE = function() {
  return 'post'
}
export const loginUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 退出系统
 * request: logoutUsingGET
 * url: logoutUsingGETURL
 * method: logoutUsingGET_TYPE
 * raw_url: logoutUsingGET_RAW_URL
 */
export const logoutUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const logoutUsingGET_RAW_URL = function() {
  return '/sys/user/logout'
}
export const logoutUsingGET_TYPE = function() {
  return 'get'
}
export const logoutUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 重置密码
 * request: resetPasswordUsingPUT
 * url: resetPasswordUsingPUTURL
 * method: resetPasswordUsingPUT_TYPE
 * raw_url: resetPasswordUsingPUT_RAW_URL
 * @param userId - userId
 * @param password - password
 */
export const resetPasswordUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/resetpassword'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters['userId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: userId'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const resetPasswordUsingPUT_RAW_URL = function() {
  return '/sys/user/resetpassword'
}
export const resetPasswordUsingPUT_TYPE = function() {
  return 'put'
}
export const resetPasswordUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/resetpassword'
  if (parameters['userId'] !== undefined) {
    queryParameters['userId'] = parameters['userId']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 解禁用户
 * request: setUnForbiddenUsingGET
 * url: setUnForbiddenUsingGETURL
 * method: setUnForbiddenUsingGET_TYPE
 * raw_url: setUnForbiddenUsingGET_RAW_URL
 * @param id - id
 * @param  - 
 */
export const setUnForbiddenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/unforbidden'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const setUnForbiddenUsingGET_RAW_URL = function() {
  return '/sys/user/unforbidden'
}
export const setUnForbiddenUsingGET_TYPE = function() {
  return 'get'
}
export const setUnForbiddenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/unforbidden'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新用户的信息，并返回
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param request - request
 */
export const updateUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_2_RAW_URL = function() {
  return '/sys/user/update'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}