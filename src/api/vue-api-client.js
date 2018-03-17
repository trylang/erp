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
 *                    Api Documentation
 ==========================================================*/
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
  let path = '/dict/avail/item/list/{code}'
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
  return '/dict/avail/item/list/{code}'
}
export const availItemListUsingGET_TYPE = function() {
  return 'get'
}
export const availItemListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/avail/item/list/{code}'
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
  let path = '/dict/item/avail'
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
  return '/dict/item/avail'
}
export const availItemUsingPUT_TYPE = function() {
  return 'put'
}
export const availItemUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/item/avail'
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
  let path = '/dict/item/list/{code}'
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
  return '/dict/item/list/{code}'
}
export const itemListUsingGET_TYPE = function() {
  return 'get'
}
export const itemListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/item/list/{code}'
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
 * @param dictTypeId - 字典类型主键
 * @param dictTypeCode - 字典类型编码
 * @param name - 名称
 * @param value - 编码值
 * @param sort - 顺序值
 * @param  - 
 */
export const itemSaveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/dict/item/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['dictTypeId'] !== undefined) {
    queryParameters['dictTypeId'] = parameters['dictTypeId']
  }
  if (parameters['dictTypeId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: dictTypeId'))
  }
  if (parameters['dictTypeCode'] !== undefined) {
    queryParameters['dictTypeCode'] = parameters['dictTypeCode']
  }
  if (parameters['dictTypeCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: dictTypeCode'))
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters['value'] !== undefined) {
    queryParameters['value'] = parameters['value']
  }
  if (parameters['value'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: value'))
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['sort'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: sort'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const itemSaveUsingPOST_RAW_URL = function() {
  return '/dict/item/save'
}
export const itemSaveUsingPOST_TYPE = function() {
  return 'post'
}
export const itemSaveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/item/save'
  if (parameters['dictTypeId'] !== undefined) {
    queryParameters['dictTypeId'] = parameters['dictTypeId']
  }
  if (parameters['dictTypeCode'] !== undefined) {
    queryParameters['dictTypeCode'] = parameters['dictTypeCode']
  }
  if (parameters['name'] !== undefined) {
    queryParameters['name'] = parameters['name']
  }
  if (parameters['value'] !== undefined) {
    queryParameters['value'] = parameters['value']
  }
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
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
  let path = '/dict/item/sort/exchange'
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
  return '/dict/item/sort/exchange'
}
export const itemSortExchangeUsingPUT_TYPE = function() {
  return 'put'
}
export const itemSortExchangeUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/item/sort/exchange'
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
 * 通过编码查询选项
 * request: optionUsingGET
 * url: optionUsingGETURL
 * method: optionUsingGET_TYPE
 * raw_url: optionUsingGET_RAW_URL
 * @param 编码 - code[]
 */
export const optionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/dict/option'
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
  return '/dict/option'
}
export const optionUsingGET_TYPE = function() {
  return 'get'
}
export const optionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/option'
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
  let path = '/dict/type/list'
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
  return '/dict/type/list'
}
export const typeListUsingGET_TYPE = function() {
  return 'get'
}
export const typeListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/dict/type/list'
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
 * 系统用户列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 用户名称
 * @param  - 
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/sys/user/list'
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
  return '/sys/user/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/sys/user/list'
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