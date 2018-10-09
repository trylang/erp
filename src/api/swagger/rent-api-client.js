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
 *                    ERP-租务管理API.
 ==========================================================*/
/**
 * 广告位类型添加
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_RAW_URL = function() {
  return '/rent/advertising/type/add'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 广告位类型列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_RAW_URL = function() {
  return '/rent/advertising/type/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/list'
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
 * 广告位类型选项
 * request: optionUsingGET
 * url: optionUsingGETURL
 * method: optionUsingGET_TYPE
 * raw_url: optionUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const optionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/option'
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
export const optionUsingGET_RAW_URL = function() {
  return '/rent/advertising/type/option'
}
export const optionUsingGET_TYPE = function() {
  return 'get'
}
export const optionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 广告位类型修改
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_RAW_URL = function() {
  return '/rent/advertising/type/update'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询广告位类型
 * request: getByIdUsingGET
 * url: getByIdUsingGETURL
 * method: getByIdUsingGET_TYPE
 * raw_url: getByIdUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const getByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/{id}'
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
export const getByIdUsingGET_RAW_URL = function() {
  return '/rent/advertising/type/{id}'
}
export const getByIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/{id}'
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
 * 广告位类型删除
 * request: updateUsingDELETE
 * url: updateUsingDELETEURL
 * method: updateUsingDELETE_TYPE
 * raw_url: updateUsingDELETE_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const updateUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/{id}'
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
export const updateUsingDELETE_RAW_URL = function() {
  return '/rent/advertising/type/{id}'
}
export const updateUsingDELETE_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/{id}'
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
 * 删除附件
 * request: cdeleteUsingPUT
 * url: cdeleteUsingPUTURL
 * method: cdeleteUsingPUT_TYPE
 * raw_url: cdeleteUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const cdeleteUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/cdelete'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    queryParameters['param'] = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const cdeleteUsingPUT_RAW_URL = function() {
  return '/rent/atment/cdelete'
}
export const cdeleteUsingPUT_TYPE = function() {
  return 'put'
}
export const cdeleteUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/cdelete'
  if (parameters['param'] !== undefined) {
    queryParameters['param'] = parameters['param']
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
 * 编辑附件
 * request: cupdateUsingPOST
 * url: cupdateUsingPOSTURL
 * method: cupdateUsingPOST_TYPE
 * raw_url: cupdateUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const cupdateUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/cedit'
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
export const cupdateUsingPOST_RAW_URL = function() {
  return '/rent/atment/cedit'
}
export const cupdateUsingPOST_TYPE = function() {
  return 'post'
}
export const cupdateUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/cedit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除附件
 * request: deleteUsingPUT
 * url: deleteUsingPUTURL
 * method: deleteUsingPUT_TYPE
 * raw_url: deleteUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const deleteUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/delete'
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
export const deleteUsingPUT_RAW_URL = function() {
  return '/rent/atment/delete'
}
export const deleteUsingPUT_TYPE = function() {
  return 'put'
}
export const deleteUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/delete'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑附件
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/edit'
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
export const updateUsingPUT_1_RAW_URL = function() {
  return '/rent/atment/edit'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/edit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有附件信息
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param tableRowIds - 表行ID集合
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableRowIds'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowIds'))
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableName'))
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowId'))
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['tableRowState'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowState'))
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_1_RAW_URL = function() {
  return '/rent/atment/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/list'
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
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
 * 查询所有附件信息
 * request: listDateOrderUsingGET
 * url: listDateOrderUsingGETURL
 * method: listDateOrderUsingGET_TYPE
 * raw_url: listDateOrderUsingGET_RAW_URL
 * @param token - header中token字段
 * @param tableRowIds - 表行ID集合
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listDateOrderUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/listod'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableRowIds'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowIds'))
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableName'))
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowId'))
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['tableRowState'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowState'))
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDateOrderUsingGET_RAW_URL = function() {
  return '/rent/atment/listod'
}
export const listDateOrderUsingGET_TYPE = function() {
  return 'get'
}
export const listDateOrderUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/listod'
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
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
 * 查询所有附件信息
 * request: listDateOrderForContractUsingGET
 * url: listDateOrderForContractUsingGETURL
 * method: listDateOrderForContractUsingGET_TYPE
 * raw_url: listDateOrderForContractUsingGET_RAW_URL
 * @param token - header中token字段
 * @param tableRowIds - 表行ID集合
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listDateOrderForContractUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/listod/contract'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableRowIds'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowIds'))
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableName'))
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowId'))
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['tableRowState'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tableRowState'))
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listDateOrderForContractUsingGET_RAW_URL = function() {
  return '/rent/atment/listod/contract'
}
export const listDateOrderForContractUsingGET_TYPE = function() {
  return 'get'
}
export const listDateOrderForContractUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/listod/contract'
  if (parameters['tableRowIds'] !== undefined) {
    queryParameters['tableRowIds'] = parameters['tableRowIds']
  }
  if (parameters['tableName'] !== undefined) {
    queryParameters['tableName'] = parameters['tableName']
  }
  if (parameters['tableRowId'] !== undefined) {
    queryParameters['tableRowId'] = parameters['tableRowId']
  }
  if (parameters['tableRowState'] !== undefined) {
    queryParameters['tableRowState'] = parameters['tableRowState']
  }
  if (parameters['attachmentType'] !== undefined) {
    queryParameters['attachmentType'] = parameters['attachmentType']
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
 * 获取附件详情
 * request: detailUsingGET
 * url: detailUsingGETURL
 * method: detailUsingGET_TYPE
 * raw_url: detailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/{id}'
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
export const detailUsingGET_RAW_URL = function() {
  return '/rent/atment/{id}'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/{id}'
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
 * 删除附件
 * request: deleteUsingDELETE
 * url: deleteUsingDELETEURL
 * method: deleteUsingDELETE_TYPE
 * raw_url: deleteUsingDELETE_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/atment/{id}'
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
  return '/rent/atment/{id}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/atment/{id}'
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
 * 根据主键获取周期
 * request: getByIdUsingGET_2
 * url: getByIdUsingGET_2URL
 * method: getByIdUsingGET_2_TYPE
 * raw_url: getByIdUsingGET_2_RAW_URL
 * @param id - 主键
 * @param token - token
 */
export const getByIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/getById/{token}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByIdUsingGET_2_RAW_URL = function() {
  return '/rent/bill/cycle/getById/{token}'
}
export const getByIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/getById/{token}'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据日期判断所属周期
 * request: cycleUsingGET
 * url: cycleUsingGETURL
 * method: cycleUsingGET_TYPE
 * raw_url: cycleUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同主键
 * @param costItemId - 费用项目
 * @param expenseDate - 费用日期
 */
export const cycleUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/period'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
  }
  if (parameters['costItemId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costItemId'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const cycleUsingGET_RAW_URL = function() {
  return '/rent/bill/cycle/period'
}
export const cycleUsingGET_TYPE = function() {
  return 'get'
}
export const cycleUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/period'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
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
 * 根据合同ID，合同号，结算组别查询已生成结算单的周期列表
 * request: getPeriodCycleListUsingGET
 * url: getPeriodCycleListUsingGETURL
 * method: getPeriodCycleListUsingGET_TYPE
 * raw_url: getPeriodCycleListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同编码
 * @param settleGroupId - 结算组别主键
 */
export const getPeriodCycleListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/period/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleGroupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleGroupId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPeriodCycleListUsingGET_RAW_URL = function() {
  return '/rent/bill/cycle/period/list'
}
export const getPeriodCycleListUsingGET_TYPE = function() {
  return 'get'
}
export const getPeriodCycleListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/period/list'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
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
 * 更新周期为已生成结算单状态
 * request: updateCycle2GeneratedUsingPUT
 * url: updateCycle2GeneratedUsingPUTURL
 * method: updateCycle2GeneratedUsingPUT_TYPE
 * raw_url: updateCycle2GeneratedUsingPUT_RAW_URL
 * @param id - 主键
 * @param token - token
 */
export const updateCycle2GeneratedUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/update/generated/status/{token}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCycle2GeneratedUsingPUT_RAW_URL = function() {
  return '/rent/bill/cycle/update/generated/status/{token}'
}
export const updateCycle2GeneratedUsingPUT_TYPE = function() {
  return 'put'
}
export const updateCycle2GeneratedUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/update/generated/status/{token}'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新周期为已生成结算单状态
 * request: updateCycle2GeneratedUsingPUT_1
 * url: updateCycle2GeneratedUsingPUT_1URL
 * method: updateCycle2GeneratedUsingPUT_1_TYPE
 * raw_url: updateCycle2GeneratedUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const updateCycle2GeneratedUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/update/generated/{id}'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCycle2GeneratedUsingPUT_1_RAW_URL = function() {
  return '/rent/bill/cycle/update/generated/{id}'
}
export const updateCycle2GeneratedUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateCycle2GeneratedUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/update/generated/{id}'
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
 * 更新周期为未生成结算单状态
 * request: updateCycle2UngeneratedUsingPUT
 * url: updateCycle2UngeneratedUsingPUTURL
 * method: updateCycle2UngeneratedUsingPUT_TYPE
 * raw_url: updateCycle2UngeneratedUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const updateCycle2UngeneratedUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/update/ungenerated/{id}'
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
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateCycle2UngeneratedUsingPUT_RAW_URL = function() {
  return '/rent/bill/cycle/update/ungenerated/{id}'
}
export const updateCycle2UngeneratedUsingPUT_TYPE = function() {
  return 'put'
}
export const updateCycle2UngeneratedUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/update/ungenerated/{id}'
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
 * 根据主键获取周期
 * request: getByIdUsingGET_3
 * url: getByIdUsingGET_3URL
 * method: getByIdUsingGET_3_TYPE
 * raw_url: getByIdUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const getByIdUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/bill/cycle/{id}'
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
export const getByIdUsingGET_3_RAW_URL = function() {
  return '/rent/bill/cycle/{id}'
}
export const getByIdUsingGET_3_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/bill/cycle/{id}'
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
 * 编辑品牌
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/'
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
  return '/rent/brand/'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加品牌
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/add'
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
export const addUsingPOST_2_RAW_URL = function() {
  return '/rent/brand/add'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 新增品牌申请
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_1_RAW_URL = function() {
  return '/rent/brand/apply/add'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 品牌申请审核确认
 * request: confirmUsingPOST
 * url: confirmUsingPOSTURL
 * method: confirmUsingPOST_TYPE
 * raw_url: confirmUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const confirmUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/audit/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_RAW_URL = function() {
  return '/rent/brand/apply/audit/confirm'
}
export const confirmUsingPOST_TYPE = function() {
  return 'post'
}
export const confirmUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/audit/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 品牌申请审核列表查询
 * request: auditListUsingGET
 * url: auditListUsingGETURL
 * method: auditListUsingGET_TYPE
 * raw_url: auditListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.驳回
 * @param businessId - 一级业态ID
 */
export const auditListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/audit/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListUsingGET_RAW_URL = function() {
  return '/rent/brand/apply/audit/list'
}
export const auditListUsingGET_TYPE = function() {
  return 'get'
}
export const auditListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/audit/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 品牌申请审核驳回
 * request: rebutUsingPOST
 * url: rebutUsingPOSTURL
 * method: rebutUsingPOST_TYPE
 * raw_url: rebutUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - 主键id
 */
export const rebutUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/audit/rebut'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const rebutUsingPOST_RAW_URL = function() {
  return '/rent/brand/apply/audit/rebut'
}
export const rebutUsingPOST_TYPE = function() {
  return 'post'
}
export const rebutUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/audit/rebut'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 品牌申请列表查询
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.驳回
 * @param businessId - 一级业态ID
 */
export const listUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_2_RAW_URL = function() {
  return '/rent/brand/apply/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 编辑品牌申请
 * request: udpateUsingPUT
 * url: udpateUsingPUTURL
 * method: udpateUsingPUT_TYPE
 * raw_url: udpateUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const udpateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const udpateUsingPUT_RAW_URL = function() {
  return '/rent/brand/apply/update'
}
export const udpateUsingPUT_TYPE = function() {
  return 'put'
}
export const udpateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取品牌申请详情
 * request: detailUsingGET_1
 * url: detailUsingGET_1URL
 * method: detailUsingGET_1_TYPE
 * raw_url: detailUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/{id}'
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
export const detailUsingGET_1_RAW_URL = function() {
  return '/rent/brand/apply/{id}'
}
export const detailUsingGET_1_TYPE = function() {
  return 'get'
}
export const detailUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/{id}'
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
 * 删除品牌申请
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/apply/{id}'
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
  return '/rent/brand/apply/{id}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/apply/{id}'
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
 * 修改品牌状态为空置
 * request: emptyUsingPOST
 * url: emptyUsingPOSTURL
 * method: emptyUsingPOST_TYPE
 * raw_url: emptyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/audit/empty'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const emptyUsingPOST_RAW_URL = function() {
  return '/rent/brand/audit/empty'
}
export const emptyUsingPOST_TYPE = function() {
  return 'post'
}
export const emptyUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/audit/empty'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改品牌状态为失效
 * request: invalidUsingPOST
 * url: invalidUsingPOSTURL
 * method: invalidUsingPOST_TYPE
 * raw_url: invalidUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/audit/invalid'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const invalidUsingPOST_RAW_URL = function() {
  return '/rent/brand/audit/invalid'
}
export const invalidUsingPOST_TYPE = function() {
  return 'post'
}
export const invalidUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/audit/invalid'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有品牌项
 * request: auditListUsingGET_1
 * url: auditListUsingGET_1URL
 * method: auditListUsingGET_1_TYPE
 * raw_url: auditListUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 一级业态ID
 */
export const auditListUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/audit/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListUsingGET_1_RAW_URL = function() {
  return '/rent/brand/audit/list'
}
export const auditListUsingGET_1_TYPE = function() {
  return 'get'
}
export const auditListUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/audit/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 查询所有品牌项
 * request: auditListpgUsingGET
 * url: auditListpgUsingGETURL
 * method: auditListpgUsingGET_TYPE
 * raw_url: auditListpgUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 一级业态ID
 */
export const auditListpgUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/audit/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListpgUsingGET_RAW_URL = function() {
  return '/rent/brand/audit/listpg'
}
export const auditListpgUsingGET_TYPE = function() {
  return 'get'
}
export const auditListpgUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/audit/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 获取品牌编码
 * request: codeUsingGET
 * url: codeUsingGETURL
 * method: codeUsingGET_TYPE
 * raw_url: codeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const codeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/code'
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
export const codeUsingGET_RAW_URL = function() {
  return '/rent/brand/code'
}
export const codeUsingGET_TYPE = function() {
  return 'get'
}
export const codeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/code'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加国别
 * request: addCountryUsingPOST
 * url: addCountryUsingPOSTURL
 * method: addCountryUsingPOST_TYPE
 * raw_url: addCountryUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addCountryUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/country/add'
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
export const addCountryUsingPOST_RAW_URL = function() {
  return '/rent/brand/country/add'
}
export const addCountryUsingPOST_TYPE = function() {
  return 'post'
}
export const addCountryUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/country/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有国别信息
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/country/list'
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
export const listUsingGET_3_RAW_URL = function() {
  return '/rent/brand/country/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/country/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有品牌项
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 一级业态ID
 */
export const listUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_4_RAW_URL = function() {
  return '/rent/brand/list'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 查询所有品牌项
 * request: listpgUsingGET
 * url: listpgUsingGETURL
 * method: listpgUsingGET_TYPE
 * raw_url: listpgUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 一级业态ID
 */
export const listpgUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_RAW_URL = function() {
  return '/rent/brand/listpg'
}
export const listpgUsingGET_TYPE = function() {
  return 'get'
}
export const listpgUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['brandCode'] !== undefined) {
    queryParameters['brandCode'] = parameters['brandCode']
  }
  if (parameters['brandName'] !== undefined) {
    queryParameters['brandName'] = parameters['brandName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['businessId'] !== undefined) {
    queryParameters['businessId'] = parameters['businessId']
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
 * 可用品牌下拉列表
 * request: useableUsingGET
 * url: useableUsingGETURL
 * method: useableUsingGET_TYPE
 * raw_url: useableUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const useableUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/useable'
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
export const useableUsingGET_RAW_URL = function() {
  return '/rent/brand/useable'
}
export const useableUsingGET_TYPE = function() {
  return 'get'
}
export const useableUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/useable'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取品牌详情
 * request: detailUsingGET_2
 * url: detailUsingGET_2URL
 * method: detailUsingGET_2_TYPE
 * raw_url: detailUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/{id}'
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
export const detailUsingGET_2_RAW_URL = function() {
  return '/rent/brand/{id}'
}
export const detailUsingGET_2_TYPE = function() {
  return 'get'
}
export const detailUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/{id}'
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
 * 删除品牌
 * request: deleteUsingDELETE_2
 * url: deleteUsingDELETE_2URL
 * method: deleteUsingDELETE_2_TYPE
 * raw_url: deleteUsingDELETE_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/{id}'
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
  return '/rent/brand/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/{id}'
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
 * 修改品牌状态
 * request: updateUsingPUT_3
 * url: updateUsingPUT_3URL
 * method: updateUsingPUT_3_TYPE
 * raw_url: updateUsingPUT_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/brand/{id}/{status}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_3_RAW_URL = function() {
  return '/rent/brand/{id}/{status}'
}
export const updateUsingPUT_3_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/{id}/{status}'
  path = path.replace('{id}', `${parameters['id']}`)
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 楼宇列表
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/list'
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
export const listUsingGET_5_RAW_URL = function() {
  return '/rent/build/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 楼宇树列表
 * request: treeListUsingGET
 * url: treeListUsingGETURL
 * method: treeListUsingGET_TYPE
 * raw_url: treeListUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const treeListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/tree/list'
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
export const treeListUsingGET_RAW_URL = function() {
  return '/rent/build/tree/list'
}
export const treeListUsingGET_TYPE = function() {
  return 'get'
}
export const treeListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/tree/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 楼宇类型列表
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/type/list'
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
export const listUsingGET_6_RAW_URL = function() {
  return '/rent/build/type/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/type/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询楼宇类型
 * request: selectByIdUsingGET_1
 * url: selectByIdUsingGET_1URL
 * method: selectByIdUsingGET_1_TYPE
 * raw_url: selectByIdUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const selectByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/type/{id}'
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
export const selectByIdUsingGET_1_RAW_URL = function() {
  return '/rent/build/type/{id}'
}
export const selectByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/type/{id}'
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
 * 楼宇下拉列表
 * request: useableBuildUsingGET
 * url: useableBuildUsingGETURL
 * method: useableBuildUsingGET_TYPE
 * raw_url: useableBuildUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const useableBuildUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/useable'
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
export const useableBuildUsingGET_RAW_URL = function() {
  return '/rent/build/useable'
}
export const useableBuildUsingGET_TYPE = function() {
  return 'get'
}
export const useableBuildUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/useable'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询楼宇
 * request: selectByIdUsingGET
 * url: selectByIdUsingGETURL
 * method: selectByIdUsingGET_TYPE
 * raw_url: selectByIdUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const selectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/build/{id}'
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
export const selectByIdUsingGET_RAW_URL = function() {
  return '/rent/build/{id}'
}
export const selectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/build/{id}'
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
 * 编辑业态
 * request: updateUsingPUT_4
 * url: updateUsingPUT_4URL
 * method: updateUsingPUT_4_TYPE
 * raw_url: updateUsingPUT_4_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/'
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
export const updateUsingPUT_4_RAW_URL = function() {
  return '/rent/busi/'
}
export const updateUsingPUT_4_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加业态
 * request: addUsingPOST_3
 * url: addUsingPOST_3URL
 * method: addUsingPOST_3_TYPE
 * raw_url: addUsingPOST_3_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/add'
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
export const addUsingPOST_3_RAW_URL = function() {
  return '/rent/busi/add'
}
export const addUsingPOST_3_TYPE = function() {
  return 'post'
}
export const addUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有业态信息
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param businessCode - 业态编码
 * @param businessName - 业态名称
 */
export const listUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_7_RAW_URL = function() {
  return '/rent/busi/list'
}
export const listUsingGET_7_TYPE = function() {
  return 'get'
}
export const listUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
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
 * 根据父业态查询子业态业态列表
 * request: getListByPidUsingGET
 * url: getListByPidUsingGETURL
 * method: getListByPidUsingGET_TYPE
 * raw_url: getListByPidUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pid - 父业态ID
 */
export const getListByPidUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/list/{pid}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{pid}', `${parameters['pid']}`)
  if (parameters['pid'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: pid'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListByPidUsingGET_RAW_URL = function() {
  return '/rent/busi/list/{pid}'
}
export const getListByPidUsingGET_TYPE = function() {
  return 'get'
}
export const getListByPidUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/list/{pid}'
  path = path.replace('{pid}', `${parameters['pid']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有业态信息
 * request: listpgUsingGET_1
 * url: listpgUsingGET_1URL
 * method: listpgUsingGET_1_TYPE
 * raw_url: listpgUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param businessCode - 业态编码
 * @param businessName - 业态名称
 */
export const listpgUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_1_RAW_URL = function() {
  return '/rent/busi/listpg'
}
export const listpgUsingGET_1_TYPE = function() {
  return 'get'
}
export const listpgUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
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
 * 根据层级查询所有业态信息
 * request: getOptionsUsingGET
 * url: getOptionsUsingGETURL
 * method: getOptionsUsingGET_TYPE
 * raw_url: getOptionsUsingGET_RAW_URL
 * @param token - header中token字段
 * @param level - level
 */
export const getOptionsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/options'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getOptionsUsingGET_RAW_URL = function() {
  return '/rent/busi/options'
}
export const getOptionsUsingGET_TYPE = function() {
  return 'get'
}
export const getOptionsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/options'
  if (parameters['level'] !== undefined) {
    queryParameters['level'] = parameters['level']
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
 * 查询所有业态信息
 * request: treeUsingGET
 * url: treeUsingGETURL
 * method: treeUsingGET_TYPE
 * raw_url: treeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param businessCode - 业态编码
 * @param businessName - 业态名称
 */
export const treeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const treeUsingGET_RAW_URL = function() {
  return '/rent/busi/tree'
}
export const treeUsingGET_TYPE = function() {
  return 'get'
}
export const treeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/tree'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['businessCode'] !== undefined) {
    queryParameters['businessCode'] = parameters['businessCode']
  }
  if (parameters['businessName'] !== undefined) {
    queryParameters['businessName'] = parameters['businessName']
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
 * 获取业态详情
 * request: detailUsingGET_3
 * url: detailUsingGET_3URL
 * method: detailUsingGET_3_TYPE
 * raw_url: detailUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/{id}'
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
export const detailUsingGET_3_RAW_URL = function() {
  return '/rent/busi/{id}'
}
export const detailUsingGET_3_TYPE = function() {
  return 'get'
}
export const detailUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/{id}'
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
 * 删除业态
 * request: deleteUsingDELETE_3
 * url: deleteUsingDELETE_3URL
 * method: deleteUsingDELETE_3_TYPE
 * raw_url: deleteUsingDELETE_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/{id}'
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
  return '/rent/busi/{id}'
}
export const deleteUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/{id}'
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
 * 录入/编辑正式合同
 * request: addUsingPOST_4
 * url: addUsingPOST_4URL
 * method: addUsingPOST_4_TYPE
 * raw_url: addUsingPOST_4_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract'
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
export const addUsingPOST_4_RAW_URL = function() {
  return '/rent/contract'
}
export const addUsingPOST_4_TYPE = function() {
  return 'post'
}
export const addUsingPOST_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据商户ID(非必传)查询该商户下的合同
 * request: getContractEntryShopByMerchantUsingGET
 * url: getContractEntryShopByMerchantUsingGETURL
 * method: getContractEntryShopByMerchantUsingGET_TYPE
 * raw_url: getContractEntryShopByMerchantUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户主键ID
 */
export const getContractEntryShopByMerchantUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/advance/payment/contract/entry/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractEntryShopByMerchantUsingGET_RAW_URL = function() {
  return '/rent/contract/advance/payment/contract/entry/list'
}
export const getContractEntryShopByMerchantUsingGET_TYPE = function() {
  return 'get'
}
export const getContractEntryShopByMerchantUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/advance/payment/contract/entry/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 根据商户ID(非必传)查询该商户下的合同
 * request: getContractShopByMerchantUsingGET
 * url: getContractShopByMerchantUsingGETURL
 * method: getContractShopByMerchantUsingGET_TYPE
 * raw_url: getContractShopByMerchantUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户主键ID
 */
export const getContractShopByMerchantUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/advance/payment/contract/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractShopByMerchantUsingGET_RAW_URL = function() {
  return '/rent/contract/advance/payment/contract/list'
}
export const getContractShopByMerchantUsingGET_TYPE = function() {
  return 'get'
}
export const getContractShopByMerchantUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/advance/payment/contract/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 财务预付款调用：商户预付款列表（商户id，合同号查询条件）
 * request: advancePaymentListUsingPOST
 * url: advancePaymentListUsingPOSTURL
 * method: advancePaymentListUsingPOST_TYPE
 * raw_url: advancePaymentListUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param query - query
 */
export const advancePaymentListUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/advance/payment/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['query'] !== undefined) {
    body = parameters['query']
  }
  if (parameters['query'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: query'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const advancePaymentListUsingPOST_RAW_URL = function() {
  return '/rent/contract/advance/payment/list'
}
export const advancePaymentListUsingPOST_TYPE = function() {
  return 'post'
}
export const advancePaymentListUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/advance/payment/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 商户列表
 * request: getMerchantForAdvancePaymentUsingGET
 * url: getMerchantForAdvancePaymentUsingGETURL
 * method: getMerchantForAdvancePaymentUsingGET_TYPE
 * raw_url: getMerchantForAdvancePaymentUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getMerchantForAdvancePaymentUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/advance/payment/merchant/list'
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
export const getMerchantForAdvancePaymentUsingGET_RAW_URL = function() {
  return '/rent/contract/advance/payment/merchant/list'
}
export const getMerchantForAdvancePaymentUsingGET_TYPE = function() {
  return 'get'
}
export const getMerchantForAdvancePaymentUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/advance/payment/merchant/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据编号查询可用合同主表信息
 * request: getAvailByCodeUsingGET
 * url: getAvailByCodeUsingGETURL
 * method: getAvailByCodeUsingGET_TYPE
 * raw_url: getAvailByCodeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同编码
 */
export const getAvailByCodeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/avail/info/code'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAvailByCodeUsingGET_RAW_URL = function() {
  return '/rent/contract/avail/info/code'
}
export const getAvailByCodeUsingGET_TYPE = function() {
  return 'get'
}
export const getAvailByCodeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/avail/info/code'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 合同下拉列表基础数据
 * request: baseDataOptionsUsingGET
 * url: baseDataOptionsUsingGETURL
 * method: baseDataOptionsUsingGET_TYPE
 * raw_url: baseDataOptionsUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const baseDataOptionsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/base/data/option'
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
export const baseDataOptionsUsingGET_RAW_URL = function() {
  return '/rent/contract/base/data/option'
}
export const baseDataOptionsUsingGET_TYPE = function() {
  return 'get'
}
export const baseDataOptionsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/base/data/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加录入正式合同保证金记录
 * request: addBondUsingPOST
 * url: addBondUsingPOSTURL
 * method: addBondUsingPOST_TYPE
 * raw_url: addBondUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addBondUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/bond'
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
export const addBondUsingPOST_RAW_URL = function() {
  return '/rent/contract/bond'
}
export const addBondUsingPOST_TYPE = function() {
  return 'post'
}
export const addBondUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/bond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑正式合同保证金记录
 * request: updateBondUsingPUT
 * url: updateBondUsingPUTURL
 * method: updateBondUsingPUT_TYPE
 * raw_url: updateBondUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateBondUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/bond'
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
export const updateBondUsingPUT_RAW_URL = function() {
  return '/rent/contract/bond'
}
export const updateBondUsingPUT_TYPE = function() {
  return 'put'
}
export const updateBondUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/bond'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据合同ID,获取合同的保证金信息。
 * request: getContractBondInfoUsingGET
 * url: getContractBondInfoUsingGETURL
 * method: getContractBondInfoUsingGET_TYPE
 * raw_url: getContractBondInfoUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同的ID
 */
export const getContractBondInfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/bondinfo/{contractCode}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractBondInfoUsingGET_RAW_URL = function() {
  return '/rent/contract/bondinfo/{contractCode}'
}
export const getContractBondInfoUsingGET_TYPE = function() {
  return 'get'
}
export const getContractBondInfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/bondinfo/{contractCode}'
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 取消确认
 * request: cancelUsingPUT
 * url: cancelUsingPUTURL
 * method: cancelUsingPUT_TYPE
 * raw_url: cancelUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const cancelUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/cancel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const cancelUsingPUT_RAW_URL = function() {
  return '/rent/contract/cancel'
}
export const cancelUsingPUT_TYPE = function() {
  return 'put'
}
export const cancelUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/cancel'
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
 * 合同变更列表查询
 * request: getContentUsingPOST
 * url: getContentUsingPOSTURL
 * method: getContentUsingPOST_TYPE
 * raw_url: getContentUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const getContentUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/get/content'
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
export const getContentUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/get/content'
}
export const getContentUsingPOST_TYPE = function() {
  return 'post'
}
export const getContentUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/get/content'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同商户变更
 * request: merchantChangeUsingPOST
 * url: merchantChangeUsingPOSTURL
 * method: merchantChangeUsingPOST_TYPE
 * raw_url: merchantChangeUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const merchantChangeUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/merchant'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const merchantChangeUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/merchant'
}
export const merchantChangeUsingPOST_TYPE = function() {
  return 'post'
}
export const merchantChangeUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/merchant'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查看合同历史及修改详情
 * request: queryLogUsingGET
 * url: queryLogUsingGETURL
 * method: queryLogUsingGET_TYPE
 * raw_url: queryLogUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - contractCode
 */
export const queryLogUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/query/log/{contractCode}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryLogUsingGET_RAW_URL = function() {
  return '/rent/contract/change/query/log/{contractCode}'
}
export const queryLogUsingGET_TYPE = function() {
  return 'get'
}
export const queryLogUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/query/log/{contractCode}'
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同面积变更历史查询
 * request: getUnitChangeUsingPOST
 * url: getUnitChangeUsingPOSTURL
 * method: getUnitChangeUsingPOST_TYPE
 * raw_url: getUnitChangeUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const getUnitChangeUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/query/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const getUnitChangeUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/query/unit'
}
export const getUnitChangeUsingPOST_TYPE = function() {
  return 'post'
}
export const getUnitChangeUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/query/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 正式合同主体信息变更or延期
 * request: changeSubjectUsingPOST
 * url: changeSubjectUsingPOSTURL
 * method: changeSubjectUsingPOST_TYPE
 * raw_url: changeSubjectUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const changeSubjectUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/subject'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const changeSubjectUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/subject'
}
export const changeSubjectUsingPOST_TYPE = function() {
  return 'post'
}
export const changeSubjectUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/subject'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 变更时条款的删除
 * request: termDelUsingGET
 * url: termDelUsingGETURL
 * method: termDelUsingGET_TYPE
 * raw_url: termDelUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - id
 */
export const termDelUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/termDel/{id}'
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
export const termDelUsingGET_RAW_URL = function() {
  return '/rent/contract/change/termDel/{id}'
}
export const termDelUsingGET_TYPE = function() {
  return 'get'
}
export const termDelUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/termDel/{id}'
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
 * 单个条款表单保存
 * request: termSaveUsingPOST
 * url: termSaveUsingPOSTURL
 * method: termSaveUsingPOST_TYPE
 * raw_url: termSaveUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const termSaveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/termSave'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const termSaveUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/termSave'
}
export const termSaveUsingPOST_TYPE = function() {
  return 'post'
}
export const termSaveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/termSave'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 单条条款周期计算
 * request: termSingleSavaUsingPOST
 * url: termSingleSavaUsingPOSTURL
 * method: termSingleSavaUsingPOST_TYPE
 * raw_url: termSingleSavaUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const termSingleSavaUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/termSingleSava'
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
export const termSingleSavaUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/termSingleSava'
}
export const termSingleSavaUsingPOST_TYPE = function() {
  return 'post'
}
export const termSingleSavaUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/termSingleSava'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保存并下一步
 * request: changTermsUsingPOST
 * url: changTermsUsingPOSTURL
 * method: changTermsUsingPOST_TYPE
 * raw_url: changTermsUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param contractId - contractId
 */
export const changTermsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/terms/{contractId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const changTermsUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/terms/{contractId}'
}
export const changTermsUsingPOST_TYPE = function() {
  return 'post'
}
export const changTermsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/terms/{contractId}'
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同面积变更
 * request: unitChangeUsingPOST
 * url: unitChangeUsingPOSTURL
 * method: unitChangeUsingPOST_TYPE
 * raw_url: unitChangeUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const unitChangeUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/change/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const unitChangeUsingPOST_RAW_URL = function() {
  return '/rent/contract/change/unit'
}
export const unitChangeUsingPOST_TYPE = function() {
  return 'post'
}
export const unitChangeUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/change/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同确认列表分页
 * request: getCheckListForPageUsingGET
 * url: getCheckListForPageUsingGETURL
 * method: getCheckListForPageUsingGET_TYPE
 * raw_url: getCheckListForPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getCheckListForPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/check/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCheckListForPageUsingGET_RAW_URL = function() {
  return '/rent/contract/check/list'
}
export const getCheckListForPageUsingGET_TYPE = function() {
  return 'get'
}
export const getCheckListForPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/check/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
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
 * 确认
 * request: confirmUsingPUT
 * url: confirmUsingPUTURL
 * method: confirmUsingPUT_TYPE
 * raw_url: confirmUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param contractVoList - ContractVo列表，根据对象中id，status更新
 */
export const confirmUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractVoList'] !== undefined) {
    body = parameters['contractVoList']
  }
  if (parameters['contractVoList'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractVoList'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPUT_RAW_URL = function() {
  return '/rent/contract/confirm'
}
export const confirmUsingPUT_TYPE = function() {
  return 'put'
}
export const confirmUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 *  销售返款：根据店铺ID，查询合同有效期
 * request: getContractValidByShopUsingGET
 * url: getContractValidByShopUsingGETURL
 * method: getContractValidByShopUsingGET_TYPE
 * raw_url: getContractValidByShopUsingGET_RAW_URL
 * @param token - header中token字段
 * @param shopId - 店铺ID
 */
export const getContractValidByShopUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/contract/valid'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: shopId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractValidByShopUsingGET_RAW_URL = function() {
  return '/rent/contract/contract/valid'
}
export const getContractValidByShopUsingGET_TYPE = function() {
  return 'get'
}
export const getContractValidByShopUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/contract/valid'
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
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
 * 根据合同id，结算组别id获取费用项目
 * request: getcostItemUsingGET
 * url: getcostItemUsingGETURL
 * method: getcostItemUsingGET_TYPE
 * raw_url: getcostItemUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - contractId
 * @param settleGroupId - settleGroupId
 */
export const getcostItemUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/costItem/bysetlgro'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleGroupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleGroupId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getcostItemUsingGET_RAW_URL = function() {
  return '/rent/contract/costItem/bysetlgro'
}
export const getcostItemUsingGET_TYPE = function() {
  return 'get'
}
export const getcostItemUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/costItem/bysetlgro'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
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
 * 根据合同id，结算组别id，费用类型，获取费用项目
 * request: getCostItemsUsingGET
 * url: getCostItemsUsingGETURL
 * method: getCostItemsUsingGET_TYPE
 * raw_url: getCostItemsUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - contractId
 * @param settleGroupId - settleGroupId
 * @param costType - costType
 */
export const getCostItemsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/costItem/bysettyp'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleGroupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleGroupId'))
  }
  if (parameters['costType'] !== undefined) {
    queryParameters['costType'] = parameters['costType']
  }
  if (parameters['costType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCostItemsUsingGET_RAW_URL = function() {
  return '/rent/contract/costItem/bysettyp'
}
export const getCostItemsUsingGET_TYPE = function() {
  return 'get'
}
export const getCostItemsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/costItem/bysettyp'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['costType'] !== undefined) {
    queryParameters['costType'] = parameters['costType']
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
 * 生成结算单：根据合同ID,结算组别ID，结算日查看阶段、周期信息
 * request: getCostItemByCycleUsingGET
 * url: getCostItemByCycleUsingGETURL
 * method: getCostItemByCycleUsingGET_TYPE
 * raw_url: getCostItemByCycleUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别
 * @param expenseDate - 结算日
 */
export const getCostItemByCycleUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/cycle/cost/item'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleGroupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleGroupId'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCostItemByCycleUsingGET_RAW_URL = function() {
  return '/rent/contract/cycle/cost/item'
}
export const getCostItemByCycleUsingGET_TYPE = function() {
  return 'get'
}
export const getCostItemByCycleUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/cycle/cost/item'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
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
 * 生成结算单：根据合同ID,结算组别ID，结算日查看阶段、周期信息
 * request: getCostItemByCycleTokenUsingGET
 * url: getCostItemByCycleTokenUsingGETURL
 * method: getCostItemByCycleTokenUsingGET_TYPE
 * raw_url: getCostItemByCycleTokenUsingGET_RAW_URL
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别
 * @param expenseDate - 结算日
 * @param token - token
 */
export const getCostItemByCycleTokenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/cycle/cost/item/{token}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleGroupId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleGroupId'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCostItemByCycleTokenUsingGET_RAW_URL = function() {
  return '/rent/contract/cycle/cost/item/{token}'
}
export const getCostItemByCycleTokenUsingGET_TYPE = function() {
  return 'get'
}
export const getCostItemByCycleTokenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/cycle/cost/item/{token}'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除
 * request: delUsingPUT
 * url: delUsingPUTURL
 * method: delUsingPUT_TYPE
 * raw_url: delUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const delUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delUsingPUT_RAW_URL = function() {
  return '/rent/contract/del'
}
export const delUsingPUT_TYPE = function() {
  return 'put'
}
export const delUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/del'
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
 * 删除合同关联的店铺单元记录
 * request: delShopUnitUsingPUT
 * url: delShopUnitUsingPUTURL
 * method: delShopUnitUsingPUT_TYPE
 * raw_url: delShopUnitUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const delShopUnitUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/del/shopUnit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delShopUnitUsingPUT_RAW_URL = function() {
  return '/rent/contract/del/shopUnit'
}
export const delShopUnitUsingPUT_TYPE = function() {
  return 'put'
}
export const delShopUnitUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/del/shopUnit'
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
 * 删除附件
 * request: deleteImgUsingDELETE
 * url: deleteImgUsingDELETEURL
 * method: deleteImgUsingDELETE_TYPE
 * raw_url: deleteImgUsingDELETE_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteImgUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/file'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
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
export const deleteImgUsingDELETE_RAW_URL = function() {
  return '/rent/contract/file'
}
export const deleteImgUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteImgUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/file'
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
 * 获取附件信息
 * request: fileUsingGET
 * url: fileUsingGETURL
 * method: fileUsingGET_TYPE
 * raw_url: fileUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const fileUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/file/{id}'
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
export const fileUsingGET_RAW_URL = function() {
  return '/rent/contract/file/{id}'
}
export const fileUsingGET_TYPE = function() {
  return 'get'
}
export const fileUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/file/{id}'
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
 * 根据物业性质、结算方式返回固租（抽成）列表
 * request: getFixedPercentTypeUsingGET
 * url: getFixedPercentTypeUsingGETURL
 * method: getFixedPercentTypeUsingGET_TYPE
 * raw_url: getFixedPercentTypeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param propertyType - 物业性质：0商铺1写字楼2场地3广告位
 * @param settleType - 结算方式:0固定1抽成
 */
export const getFixedPercentTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/fixed/percent'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['propertyType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: propertyType'))
  }
  if (parameters['settleType'] !== undefined) {
    queryParameters['settleType'] = parameters['settleType']
  }
  if (parameters['settleType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: settleType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getFixedPercentTypeUsingGET_RAW_URL = function() {
  return '/rent/contract/fixed/percent'
}
export const getFixedPercentTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getFixedPercentTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/fixed/percent'
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['settleType'] !== undefined) {
    queryParameters['settleType'] = parameters['settleType']
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
 * 周期生成结算单后修改所在的阶段、租金条款/费用条款、合同状态为：已生成结算单
 * request: generatedUsingPUT
 * url: generatedUsingPUTURL
 * method: generatedUsingPUT_TYPE
 * raw_url: generatedUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param lastOne - 是否阶段最后一个生成周期
 * @param periodId - 阶段ID
 * @param rentTermsId - 租金费用条款ID
 * @param contractId - 合同ID
 */
export const generatedUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/generated'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['lastOne'] !== undefined) {
    queryParameters['lastOne'] = parameters['lastOne']
  }
  if (parameters['lastOne'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: lastOne'))
  }
  if (parameters['periodId'] !== undefined) {
    queryParameters['periodId'] = parameters['periodId']
  }
  if (parameters['periodId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: periodId'))
  }
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
  }
  if (parameters['rentTermsId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: rentTermsId'))
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const generatedUsingPUT_RAW_URL = function() {
  return '/rent/contract/generated'
}
export const generatedUsingPUT_TYPE = function() {
  return 'put'
}
export const generatedUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/generated'
  if (parameters['lastOne'] !== undefined) {
    queryParameters['lastOne'] = parameters['lastOne']
  }
  if (parameters['periodId'] !== undefined) {
    queryParameters['periodId'] = parameters['periodId']
  }
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
 * 对后台开放 拼接抽信息字符串接口
 * request: getPercntUsingGET
 * url: getPercntUsingGETURL
 * method: getPercntUsingGET_TYPE
 * raw_url: getPercntUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - id
 */
export const getPercntUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/getPercent/{id}'
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
export const getPercntUsingGET_RAW_URL = function() {
  return '/rent/contract/getPercent/{id}'
}
export const getPercntUsingGET_TYPE = function() {
  return 'get'
}
export const getPercntUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/getPercent/{id}'
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
 * 根据合同id查询物业性质
 * request: getPropertyTypeUsingGET
 * url: getPropertyTypeUsingGETURL
 * method: getPropertyTypeUsingGET_TYPE
 * raw_url: getPropertyTypeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - contractId
 */
export const getPropertyTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/getPropertyType/{contractId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPropertyTypeUsingGET_RAW_URL = function() {
  return '/rent/contract/getPropertyType/{contractId}'
}
export const getPropertyTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getPropertyTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/getPropertyType/{contractId}'
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据合同号获取不规则费用下的结算组别
 * request: getSettleGroupUsingGET
 * url: getSettleGroupUsingGETURL
 * method: getSettleGroupUsingGET_TYPE
 * raw_url: getSettleGroupUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - contractCode
 */
export const getSettleGroupUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/getSettleGroup'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getSettleGroupUsingGET_RAW_URL = function() {
  return '/rent/contract/getSettleGroup'
}
export const getSettleGroupUsingGET_TYPE = function() {
  return 'get'
}
export const getSettleGroupUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/getSettleGroup'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 根据编号查询合同主表信息
 * request: getByCodeUsingGET
 * url: getByCodeUsingGETURL
 * method: getByCodeUsingGET_TYPE
 * raw_url: getByCodeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同编码
 */
export const getByCodeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/info/code'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByCodeUsingGET_RAW_URL = function() {
  return '/rent/contract/info/code'
}
export const getByCodeUsingGET_TYPE = function() {
  return 'get'
}
export const getByCodeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/info/code'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 根据编号token查询合同主表信息
 * request: getByCodeTolenUsingGET
 * url: getByCodeTolenUsingGETURL
 * method: getByCodeTolenUsingGET_TYPE
 * raw_url: getByCodeTolenUsingGET_RAW_URL
 * @param contractCode - 合同编码
 * @param token - token
 */
export const getByCodeTolenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/info/code/{token}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByCodeTolenUsingGET_RAW_URL = function() {
  return '/rent/contract/info/code/{token}'
}
export const getByCodeTolenUsingGET_TYPE = function() {
  return 'get'
}
export const getByCodeTolenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/info/code/{token}'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据主键查询合同主表信息
 * request: getByIdUsingGET_1
 * url: getByIdUsingGET_1URL
 * method: getByIdUsingGET_1_TYPE
 * raw_url: getByIdUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const getByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/info/{id}'
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
export const getByIdUsingGET_1_RAW_URL = function() {
  return '/rent/contract/info/{id}'
}
export const getByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/info/{id}'
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
 * 根据合同ID和结算组别的ID查询不规则费用信息
 * request: getIrregularCostInfoUsingGET
 * url: getIrregularCostInfoUsingGETURL
 * method: getIrregularCostInfoUsingGET_TYPE
 * raw_url: getIrregularCostInfoUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同号
 * @param settleGroupId - settleGroupId
 */
export const getIrregularCostInfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/irregularcostinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getIrregularCostInfoUsingGET_RAW_URL = function() {
  return '/rent/contract/irregularcostinfo'
}
export const getIrregularCostInfoUsingGET_TYPE = function() {
  return 'get'
}
export const getIrregularCostInfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/irregularcostinfo'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
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
 * 根据条件查询合同列表
 * request: getListForPageUsingGET
 * url: getListForPageUsingGETURL
 * method: getListForPageUsingGET_TYPE
 * raw_url: getListForPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getListForPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_RAW_URL = function() {
  return '/rent/contract/list'
}
export const getListForPageUsingGET_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
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
 * 根据条件查询合同列表
 * request: getListForPageChangeUsingGET
 * url: getListForPageChangeUsingGETURL
 * method: getListForPageChangeUsingGET_TYPE
 * raw_url: getListForPageChangeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getListForPageChangeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/list/change'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageChangeUsingGET_RAW_URL = function() {
  return '/rent/contract/list/change'
}
export const getListForPageChangeUsingGET_TYPE = function() {
  return 'get'
}
export const getListForPageChangeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/list/change'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
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
 * 根据合同的ID,获取合同的主体信息。
 * request: getContractMainBodyUsingGET
 * url: getContractMainBodyUsingGETURL
 * method: getContractMainBodyUsingGET_TYPE
 * raw_url: getContractMainBodyUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同的ID
 */
export const getContractMainBodyUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/mainbody/{contractId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractMainBodyUsingGET_RAW_URL = function() {
  return '/rent/contract/mainbody/{contractId}'
}
export const getContractMainBodyUsingGET_TYPE = function() {
  return 'get'
}
export const getContractMainBodyUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/mainbody/{contractId}'
  path = path.replace('{contractId}', `${parameters['contractId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询商户的已确认和已生成合同下拉列表
 * request: getMerchantContractByidUsingGET
 * url: getMerchantContractByidUsingGETURL
 * method: getMerchantContractByidUsingGET_TYPE
 * raw_url: getMerchantContractByidUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - merchantId
 */
export const getMerchantContractByidUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/merchant/id'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getMerchantContractByidUsingGET_RAW_URL = function() {
  return '/rent/contract/merchant/id'
}
export const getMerchantContractByidUsingGET_TYPE = function() {
  return 'get'
}
export const getMerchantContractByidUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/merchant/id'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 查询商户的合同下拉列表
 * request: getMerchantContractUsingGET
 * url: getMerchantContractUsingGETURL
 * method: getMerchantContractUsingGET_TYPE
 * raw_url: getMerchantContractUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - merchantId
 */
export const getMerchantContractUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/merchant/{merchantId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getMerchantContractUsingGET_RAW_URL = function() {
  return '/rent/contract/merchant/{merchantId}'
}
export const getMerchantContractUsingGET_TYPE = function() {
  return 'get'
}
export const getMerchantContractUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/merchant/{merchantId}'
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同列表(不分页)
 * request: getNoPageListUsingGET
 * url: getNoPageListUsingGETURL
 * method: getNoPageListUsingGET_TYPE
 * raw_url: getNoPageListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getNoPageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/no/page/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getNoPageListUsingGET_RAW_URL = function() {
  return '/rent/contract/no/page/list'
}
export const getNoPageListUsingGET_TYPE = function() {
  return 'get'
}
export const getNoPageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/no/page/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['latestOrNot'] !== undefined) {
    queryParameters['latestOrNot'] = parameters['latestOrNot']
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
 * 变成历史版本
 * request: noLatestUsingPUT
 * url: noLatestUsingPUTURL
 * method: noLatestUsingPUT_TYPE
 * raw_url: noLatestUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const noLatestUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/noLatest'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const noLatestUsingPUT_RAW_URL = function() {
  return '/rent/contract/noLatest'
}
export const noLatestUsingPUT_TYPE = function() {
  return 'put'
}
export const noLatestUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/noLatest'
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
 * 商户自助平台：根据商户ID查询该商户下的合同+店铺号+店铺名
 * request: platformShopListUsingGET
 * url: platformShopListUsingGETURL
 * method: platformShopListUsingGET_TYPE
 * raw_url: platformShopListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户主键ID
 */
export const platformShopListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/platform/shop/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const platformShopListUsingGET_RAW_URL = function() {
  return '/rent/contract/platform/shop/list'
}
export const platformShopListUsingGET_TYPE = function() {
  return 'get'
}
export const platformShopListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/platform/shop/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 财务结算单生成：根据物业性质查询商户合同列表
 * request: getContractByPropertyUsingGET
 * url: getContractByPropertyUsingGETURL
 * method: getContractByPropertyUsingGET_TYPE
 * raw_url: getContractByPropertyUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractStatus - 合同状态
 * @param generatedStatus - 结算单生成状态
 * @param auditState - 结算单审核状态
 * @param receiptState - 结算单收款状态
 * @param settleNo - 结算单号
 * @param propertyType - 物业性质
 * @param merchantId - 商户主键
 * @param shopId - 店铺主键
 * @param contractCode - 合同编码
 * @param settleGroupId - 结算组别主键
 * @param whetherAdjust - 结算单是否调整
 */
export const getContractByPropertyUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/property/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractStatus'] !== undefined) {
    queryParameters['contractStatus'] = parameters['contractStatus']
  }
  if (parameters['generatedStatus'] !== undefined) {
    queryParameters['generatedStatus'] = parameters['generatedStatus']
  }
  if (parameters['auditState'] !== undefined) {
    queryParameters['auditState'] = parameters['auditState']
  }
  if (parameters['receiptState'] !== undefined) {
    queryParameters['receiptState'] = parameters['receiptState']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['whetherAdjust'] !== undefined) {
    queryParameters['whetherAdjust'] = parameters['whetherAdjust']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractByPropertyUsingGET_RAW_URL = function() {
  return '/rent/contract/property/list'
}
export const getContractByPropertyUsingGET_TYPE = function() {
  return 'get'
}
export const getContractByPropertyUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/property/list'
  if (parameters['contractStatus'] !== undefined) {
    queryParameters['contractStatus'] = parameters['contractStatus']
  }
  if (parameters['generatedStatus'] !== undefined) {
    queryParameters['generatedStatus'] = parameters['generatedStatus']
  }
  if (parameters['auditState'] !== undefined) {
    queryParameters['auditState'] = parameters['auditState']
  }
  if (parameters['receiptState'] !== undefined) {
    queryParameters['receiptState'] = parameters['receiptState']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['whetherAdjust'] !== undefined) {
    queryParameters['whetherAdjust'] = parameters['whetherAdjust']
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
 * 租金条款分页列表查询
 * request: getRentListUsingGET
 * url: getRentListUsingGETURL
 * method: getRentListUsingGET_TYPE
 * raw_url: getRentListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param contractId - 合同ID
 * @param type - 租金:0,费用条款:1
 */
export const getRentListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getRentListUsingGET_RAW_URL = function() {
  return '/rent/contract/rentOrCost'
}
export const getRentListUsingGET_TYPE = function() {
  return 'get'
}
export const getRentListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentOrCost'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 添加录入正式合同租金/费用条款
 * request: addRentOrCostUsingPOST
 * url: addRentOrCostUsingPOSTURL
 * method: addRentOrCostUsingPOST_TYPE
 * raw_url: addRentOrCostUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param paramList - paramList
 */
export const addRentOrCostUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['paramList'] !== undefined) {
    body = parameters['paramList']
  }
  if (parameters['paramList'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: paramList'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addRentOrCostUsingPOST_RAW_URL = function() {
  return '/rent/contract/rentOrCost'
}
export const addRentOrCostUsingPOST_TYPE = function() {
  return 'post'
}
export const addRentOrCostUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentOrCost'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 租金/费用条款编辑
 * request: updateRentOrCostUsingPUT
 * url: updateRentOrCostUsingPUTURL
 * method: updateRentOrCostUsingPUT_TYPE
 * raw_url: updateRentOrCostUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param paramList - paramList
 */
export const updateRentOrCostUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['paramList'] !== undefined) {
    body = parameters['paramList']
  }
  if (parameters['paramList'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: paramList'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateRentOrCostUsingPUT_RAW_URL = function() {
  return '/rent/contract/rentOrCost'
}
export const updateRentOrCostUsingPUT_TYPE = function() {
  return 'put'
}
export const updateRentOrCostUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentOrCost'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 租金/费用条款删除
 * request: delRentOrCostUsingPUT
 * url: delRentOrCostUsingPUTURL
 * method: delRentOrCostUsingPUT_TYPE
 * raw_url: delRentOrCostUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param rentTermsId - rentTermsId
 */
export const delRentOrCostUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
  }
  if (parameters['rentTermsId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: rentTermsId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delRentOrCostUsingPUT_RAW_URL = function() {
  return '/rent/contract/rentOrCost/del'
}
export const delRentOrCostUsingPUT_TYPE = function() {
  return 'put'
}
export const delRentOrCostUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentOrCost/del'
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
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
 * 历史版本查看：租金费用条款分页列表
 * request: getRentListForOldVersionUsingGET
 * url: getRentListForOldVersionUsingGETURL
 * method: getRentListForOldVersionUsingGET_TYPE
 * raw_url: getRentListForOldVersionUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param contractId - 合同ID
 * @param type - 租金:0,费用条款:1
 */
export const getRentListForOldVersionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost/old/version'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getRentListForOldVersionUsingGET_RAW_URL = function() {
  return '/rent/contract/rentOrCost/old/version'
}
export const getRentListForOldVersionUsingGET_TYPE = function() {
  return 'get'
}
export const getRentListForOldVersionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentOrCost/old/version'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 根据租金条款的ID,获取租金条款。
 * request: getContractFormalRentTermsUsingGET
 * url: getContractFormalRentTermsUsingGETURL
 * method: getContractFormalRentTermsUsingGET_TYPE
 * raw_url: getContractFormalRentTermsUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractFormalRentTermsId - 租金条款的ID
 */
export const getContractFormalRentTermsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentterm/{contractFormalRentTermsId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractFormalRentTermsId}', `${parameters['contractFormalRentTermsId']}`)
  if (parameters['contractFormalRentTermsId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractFormalRentTermsId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractFormalRentTermsUsingGET_RAW_URL = function() {
  return '/rent/contract/rentterm/{contractFormalRentTermsId}'
}
export const getContractFormalRentTermsUsingGET_TYPE = function() {
  return 'get'
}
export const getContractFormalRentTermsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/rentterm/{contractFormalRentTermsId}'
  path = path.replace('{contractFormalRentTermsId}', `${parameters['contractFormalRentTermsId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 财务调用--获取结算组别id
 * request: getSettleIdUsingGET
 * url: getSettleIdUsingGETURL
 * method: getSettleIdUsingGET_TYPE
 * raw_url: getSettleIdUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - contractId
 * @param costItemId - costItemId
 * @param expenseDate - expenseDate
 */
export const getSettleIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/settle/id'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
  }
  if (parameters['costItemId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costItemId'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getSettleIdUsingGET_RAW_URL = function() {
  return '/rent/contract/settle/id'
}
export const getSettleIdUsingGET_TYPE = function() {
  return 'get'
}
export const getSettleIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/settle/id'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
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
 * 根据合同号获取结算组别
 * request: getSettleIdUsingGET_1
 * url: getSettleIdUsingGET_1URL
 * method: getSettleIdUsingGET_1_TYPE
 * raw_url: getSettleIdUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param contractCode - contractCode
 */
export const getSettleIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/settleGroup/{contractCode}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getSettleIdUsingGET_1_RAW_URL = function() {
  return '/rent/contract/settleGroup/{contractCode}'
}
export const getSettleIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const getSettleIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/settleGroup/{contractCode}'
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 添加/修改合同关联的店铺单元记录
 * request: updateShopUnitUsingPUT
 * url: updateShopUnitUsingPUTURL
 * method: updateShopUnitUsingPUT_TYPE
 * raw_url: updateShopUnitUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateShopUnitUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/shopUnit'
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
export const updateShopUnitUsingPUT_RAW_URL = function() {
  return '/rent/contract/shopUnit'
}
export const updateShopUnitUsingPUT_TYPE = function() {
  return 'put'
}
export const updateShopUnitUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/shopUnit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 正式合同终止详情
 * request: stopUsingGET
 * url: stopUsingGETURL
 * method: stopUsingGET_TYPE
 * raw_url: stopUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const stopUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/stop'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
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
export const stopUsingGET_RAW_URL = function() {
  return '/rent/contract/stop'
}
export const stopUsingGET_TYPE = function() {
  return 'get'
}
export const stopUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/stop'
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
 * 正式合同终止
 * request: stopUsingPOST
 * url: stopUsingPOSTURL
 * method: stopUsingPOST_TYPE
 * raw_url: stopUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const stopUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/stop'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const stopUsingPOST_RAW_URL = function() {
  return '/rent/contract/stop'
}
export const stopUsingPOST_TYPE = function() {
  return 'post'
}
export const stopUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/stop'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 正式合同终止编辑
 * request: stopEditUsingPOST
 * url: stopEditUsingPOSTURL
 * method: stopEditUsingPOST_TYPE
 * raw_url: stopEditUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const stopEditUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/stop/edit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const stopEditUsingPOST_RAW_URL = function() {
  return '/rent/contract/stop/edit'
}
export const stopEditUsingPOST_TYPE = function() {
  return 'post'
}
export const stopEditUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/stop/edit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据费用项目ID查询合同费用条款
 * request: getByCostItemIdUsingGET
 * url: getByCostItemIdUsingGETURL
 * method: getByCostItemIdUsingGET_TYPE
 * raw_url: getByCostItemIdUsingGET_RAW_URL
 * @param token - header中token字段
 * @param costItemId - 费用项目ID
 */
export const getByCostItemIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/terms/{costItemId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{costItemId}', `${parameters['costItemId']}`)
  if (parameters['costItemId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costItemId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByCostItemIdUsingGET_RAW_URL = function() {
  return '/rent/contract/terms/{costItemId}'
}
export const getByCostItemIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByCostItemIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/terms/{costItemId}'
  path = path.replace('{costItemId}', `${parameters['costItemId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据合同号,获取合同的单元信息。
 * request: getContractUnitInformationUsingGET
 * url: getContractUnitInformationUsingGETURL
 * method: getContractUnitInformationUsingGET_TYPE
 * raw_url: getContractUnitInformationUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - 合同号
 */
export const getContractUnitInformationUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/unitinfo/{contractCode}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getContractUnitInformationUsingGET_RAW_URL = function() {
  return '/rent/contract/unitinfo/{contractCode}'
}
export const getContractUnitInformationUsingGET_TYPE = function() {
  return 'get'
}
export const getContractUnitInformationUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/unitinfo/{contractCode}'
  path = path.replace('{contractCode}', `${parameters['contractCode']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 文件上传
 * request: uploadUsingPOST
 * url: uploadUsingPOSTURL
 * method: uploadUsingPOST_TYPE
 * raw_url: uploadUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 * @param contractId - 合同主键ID
 * @param type - 附件类型 0合同附件1其他
 */
export const uploadUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/upload'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadUsingPOST_RAW_URL = function() {
  return '/rent/contract/upload'
}
export const uploadUsingPOST_TYPE = function() {
  return 'post'
}
export const uploadUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/upload'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 文件上传
 * request: uploadsUsingPOST
 * url: uploadsUsingPOSTURL
 * method: uploadsUsingPOST_TYPE
 * raw_url: uploadsUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 * @param contractId - 合同主键ID
 * @param type - 附件类型 0合同附件1其他
 */
export const uploadsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/uploads'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadsUsingPOST_RAW_URL = function() {
  return '/rent/contract/uploads'
}
export const uploadsUsingPOST_TYPE = function() {
  return 'post'
}
export const uploadsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/uploads'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 查询所有国别信息
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/country/list'
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
export const listUsingGET_8_RAW_URL = function() {
  return '/rent/country/list'
}
export const listUsingGET_8_TYPE = function() {
  return 'get'
}
export const listUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/country/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同列表
 * request: listFormalUsingGET
 * url: listFormalUsingGETURL
 * method: listFormalUsingGET_TYPE
 * raw_url: listFormalUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户ID
 */
export const listFormalUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/formal/contract/status/less/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listFormalUsingGET_RAW_URL = function() {
  return '/rent/entry/formal/contract/status/less/list'
}
export const listFormalUsingGET_TYPE = function() {
  return 'get'
}
export const listFormalUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/formal/contract/status/less/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 合同列表
 * request: listFormalContractUsingGET
 * url: listFormalContractUsingGETURL
 * method: listFormalContractUsingGET_TYPE
 * raw_url: listFormalContractUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户ID
 */
export const listFormalContractUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/formal/contract/status/more/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listFormalContractUsingGET_RAW_URL = function() {
  return '/rent/entry/formal/contract/status/more/list'
}
export const listFormalContractUsingGET_TYPE = function() {
  return 'get'
}
export const listFormalContractUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/formal/contract/status/more/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 诚意金收取(合同下拉框状态：已确认、已转为正式合同)
 * request: listIntentContractUsingGET
 * url: listIntentContractUsingGETURL
 * method: listIntentContractUsingGET_TYPE
 * raw_url: listIntentContractUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户ID
 */
export const listIntentContractUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/intent/contract/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listIntentContractUsingGET_RAW_URL = function() {
  return '/rent/entry/intent/contract/list'
}
export const listIntentContractUsingGET_TYPE = function() {
  return 'get'
}
export const listIntentContractUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/intent/contract/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 保证金收取管理/保证金收取审核、合同保证金、保证金处理/保证金处理审核
 * request: listIntentAndFormalContractUsingGET
 * url: listIntentAndFormalContractUsingGETURL
 * method: listIntentAndFormalContractUsingGET_TYPE
 * raw_url: listIntentAndFormalContractUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户ID
 */
export const listIntentAndFormalContractUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/intent/formal/contract/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listIntentAndFormalContractUsingGET_RAW_URL = function() {
  return '/rent/entry/intent/formal/contract/list'
}
export const listIntentAndFormalContractUsingGET_TYPE = function() {
  return 'get'
}
export const listIntentAndFormalContractUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/intent/formal/contract/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户列表
 * request: listForFormalUsingGET
 * url: listForFormalUsingGETURL
 * method: listForFormalUsingGET_TYPE
 * raw_url: listForFormalUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const listForFormalUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/merchant/for/formal/list'
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
export const listForFormalUsingGET_RAW_URL = function() {
  return '/rent/entry/merchant/for/formal/list'
}
export const listForFormalUsingGET_TYPE = function() {
  return 'get'
}
export const listForFormalUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/merchant/for/formal/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 商户列表
 * request: listIntentAndFormalUsingGET
 * url: listIntentAndFormalUsingGETURL
 * method: listIntentAndFormalUsingGET_TYPE
 * raw_url: listIntentAndFormalUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const listIntentAndFormalUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/merchant/for/intent/formal/list'
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
export const listIntentAndFormalUsingGET_RAW_URL = function() {
  return '/rent/entry/merchant/for/intent/formal/list'
}
export const listIntentAndFormalUsingGET_TYPE = function() {
  return 'get'
}
export const listIntentAndFormalUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/merchant/for/intent/formal/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 商户列表
 * request: listIntentUsingGET
 * url: listIntentUsingGETURL
 * method: listIntentUsingGET_TYPE
 * raw_url: listIntentUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const listIntentUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/entry/merchant/for/intent/list'
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
export const listIntentUsingGET_RAW_URL = function() {
  return '/rent/entry/merchant/for/intent/list'
}
export const listIntentUsingGET_TYPE = function() {
  return 'get'
}
export const listIntentUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/entry/merchant/for/intent/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 文件上传
 * request: uploadsUsingPOST_1
 * url: uploadsUsingPOST_1URL
 * method: uploadsUsingPOST_1_TYPE
 * raw_url: uploadsUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param file - file
 */
export const uploadsUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/file/upload'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadsUsingPOST_1_RAW_URL = function() {
  return '/rent/file/upload'
}
export const uploadsUsingPOST_1_TYPE = function() {
  return 'post'
}
export const uploadsUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/file/upload'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 文件上传
 * request: uploadsUsingPOST_2
 * url: uploadsUsingPOST_2URL
 * method: uploadsUsingPOST_2_TYPE
 * raw_url: uploadsUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param file - file
 */
export const uploadsUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/file/uploads'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadsUsingPOST_2_RAW_URL = function() {
  return '/rent/file/uploads'
}
export const uploadsUsingPOST_2_TYPE = function() {
  return 'post'
}
export const uploadsUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/file/uploads'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 楼层修改
 * request: updateUsingPUT_5
 * url: updateUsingPUT_5URL
 * method: updateUsingPUT_5_TYPE
 * raw_url: updateUsingPUT_5_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_5_RAW_URL = function() {
  return '/rent/floor/'
}
export const updateUsingPUT_5_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 楼层添加
 * request: addUsingPOST_5
 * url: addUsingPOST_5URL
 * method: addUsingPOST_5_TYPE
 * raw_url: addUsingPOST_5_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_5_RAW_URL = function() {
  return '/rent/floor/add'
}
export const addUsingPOST_5_TYPE = function() {
  return 'post'
}
export const addUsingPOST_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据楼宇ID查询楼层列表
 * request: selectByBuildIdUsingGET
 * url: selectByBuildIdUsingGETURL
 * method: selectByBuildIdUsingGET_TYPE
 * raw_url: selectByBuildIdUsingGET_RAW_URL
 * @param token - header中token字段
 * @param buildId - 楼宇ID
 */
export const selectByBuildIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/list/{buildId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{buildId}', `${parameters['buildId']}`)
  if (parameters['buildId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: buildId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectByBuildIdUsingGET_RAW_URL = function() {
  return '/rent/floor/list/{buildId}'
}
export const selectByBuildIdUsingGET_TYPE = function() {
  return 'get'
}
export const selectByBuildIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/list/{buildId}'
  path = path.replace('{buildId}', `${parameters['buildId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据楼宇查询楼层下拉列表
 * request: usableFloorUsingGET
 * url: usableFloorUsingGETURL
 * method: usableFloorUsingGET_TYPE
 * raw_url: usableFloorUsingGET_RAW_URL
 * @param token - header中token字段
 * @param buildId - 楼宇ID
 */
export const usableFloorUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/usable/{buildId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{buildId}', `${parameters['buildId']}`)
  if (parameters['buildId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: buildId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const usableFloorUsingGET_RAW_URL = function() {
  return '/rent/floor/usable/{buildId}'
}
export const usableFloorUsingGET_TYPE = function() {
  return 'get'
}
export const usableFloorUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/usable/{buildId}'
  path = path.replace('{buildId}', `${parameters['buildId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询楼层
 * request: selectByIdUsingGET_2
 * url: selectByIdUsingGET_2URL
 * method: selectByIdUsingGET_2_TYPE
 * raw_url: selectByIdUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const selectByIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/{id}'
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
export const selectByIdUsingGET_2_RAW_URL = function() {
  return '/rent/floor/{id}'
}
export const selectByIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/{id}'
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
 * 楼层删除
 * request: updateUsingDELETE_1
 * url: updateUsingDELETE_1URL
 * method: updateUsingDELETE_1_TYPE
 * raw_url: updateUsingDELETE_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const updateUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/{id}'
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
export const updateUsingDELETE_1_RAW_URL = function() {
  return '/rent/floor/{id}'
}
export const updateUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/{id}'
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
 * 编辑货品
 * request: updateUsingPUT_6
 * url: updateUsingPUT_6URL
 * method: updateUsingPUT_6_TYPE
 * raw_url: updateUsingPUT_6_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/'
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
export const updateUsingPUT_6_RAW_URL = function() {
  return '/rent/goods/'
}
export const updateUsingPUT_6_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加货品
 * request: addUsingPOST_6
 * url: addUsingPOST_6URL
 * method: addUsingPOST_6_TYPE
 * raw_url: addUsingPOST_6_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/add'
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
export const addUsingPOST_6_RAW_URL = function() {
  return '/rent/goods/add'
}
export const addUsingPOST_6_TYPE = function() {
  return 'post'
}
export const addUsingPOST_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据货品号获取货品信息
 * request: getByCodeUsingGET_1
 * url: getByCodeUsingGET_1URL
 * method: getByCodeUsingGET_1_TYPE
 * raw_url: getByCodeUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param code - code
 */
export const getByCodeUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/code'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByCodeUsingGET_1_RAW_URL = function() {
  return '/rent/goods/code'
}
export const getByCodeUsingGET_1_TYPE = function() {
  return 'get'
}
export const getByCodeUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/code'
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
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
 * 根据货品组别ID查询所有货品信息
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param token - header中token字段
 * @param typeId - 货品组别ID
 */
export const listUsingGET_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/goods/{typeId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{typeId}', `${parameters['typeId']}`)
  if (parameters['typeId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: typeId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_9_RAW_URL = function() {
  return '/rent/goods/goods/{typeId}'
}
export const listUsingGET_9_TYPE = function() {
  return 'get'
}
export const listUsingGET_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/goods/{typeId}'
  path = path.replace('{typeId}', `${parameters['typeId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有货品信息
 * request: listUsingGET_10
 * url: listUsingGET_10URL
 * method: listUsingGET_10_TYPE
 * raw_url: listUsingGET_10_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsCode - 货品编码
 * @param goodsName - 货品名称
 * @param goodsTypeId - 货品组别
 * @param shopId - 
 */
export const listUsingGET_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsCode'] !== undefined) {
    queryParameters['goodsCode'] = parameters['goodsCode']
  }
  if (parameters['goodsName'] !== undefined) {
    queryParameters['goodsName'] = parameters['goodsName']
  }
  if (parameters['goodsTypeId'] !== undefined) {
    queryParameters['goodsTypeId'] = parameters['goodsTypeId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_10_RAW_URL = function() {
  return '/rent/goods/list'
}
export const listUsingGET_10_TYPE = function() {
  return 'get'
}
export const listUsingGET_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsCode'] !== undefined) {
    queryParameters['goodsCode'] = parameters['goodsCode']
  }
  if (parameters['goodsName'] !== undefined) {
    queryParameters['goodsName'] = parameters['goodsName']
  }
  if (parameters['goodsTypeId'] !== undefined) {
    queryParameters['goodsTypeId'] = parameters['goodsTypeId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
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
 * 查询所有货品信息
 * request: listpgUsingGET_2
 * url: listpgUsingGET_2URL
 * method: listpgUsingGET_2_TYPE
 * raw_url: listpgUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsCode - 货品编码
 * @param goodsName - 货品名称
 * @param goodsTypeId - 货品组别
 * @param shopId - 
 */
export const listpgUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsCode'] !== undefined) {
    queryParameters['goodsCode'] = parameters['goodsCode']
  }
  if (parameters['goodsName'] !== undefined) {
    queryParameters['goodsName'] = parameters['goodsName']
  }
  if (parameters['goodsTypeId'] !== undefined) {
    queryParameters['goodsTypeId'] = parameters['goodsTypeId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_2_RAW_URL = function() {
  return '/rent/goods/listpg'
}
export const listpgUsingGET_2_TYPE = function() {
  return 'get'
}
export const listpgUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsCode'] !== undefined) {
    queryParameters['goodsCode'] = parameters['goodsCode']
  }
  if (parameters['goodsName'] !== undefined) {
    queryParameters['goodsName'] = parameters['goodsName']
  }
  if (parameters['goodsTypeId'] !== undefined) {
    queryParameters['goodsTypeId'] = parameters['goodsTypeId']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
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
 * 获取货品详情
 * request: detailUsingGET_4
 * url: detailUsingGET_4URL
 * method: detailUsingGET_4_TYPE
 * raw_url: detailUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/{id}'
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
export const detailUsingGET_4_RAW_URL = function() {
  return '/rent/goods/{id}'
}
export const detailUsingGET_4_TYPE = function() {
  return 'get'
}
export const detailUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/{id}'
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
 * 删除货品
 * request: deleteUsingDELETE_4
 * url: deleteUsingDELETE_4URL
 * method: deleteUsingDELETE_4_TYPE
 * raw_url: deleteUsingDELETE_4_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/{id}'
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
export const deleteUsingDELETE_4_RAW_URL = function() {
  return '/rent/goods/{id}'
}
export const deleteUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/{id}'
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
 * 添加货品组别
 * request: addUsingPOST_7
 * url: addUsingPOST_7URL
 * method: addUsingPOST_7_TYPE
 * raw_url: addUsingPOST_7_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/add'
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
export const addUsingPOST_7_RAW_URL = function() {
  return '/rent/goodstp/add'
}
export const addUsingPOST_7_TYPE = function() {
  return 'post'
}
export const addUsingPOST_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有货品组别信息
 * request: listUsingGET_11
 * url: listUsingGET_11URL
 * method: listUsingGET_11_TYPE
 * raw_url: listUsingGET_11_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const listUsingGET_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_11_RAW_URL = function() {
  return '/rent/goodstp/list'
}
export const listUsingGET_11_TYPE = function() {
  return 'get'
}
export const listUsingGET_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
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
 * 查询所有货品组别信息
 * request: listpgUsingGET_3
 * url: listpgUsingGET_3URL
 * method: listpgUsingGET_3_TYPE
 * raw_url: listpgUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const listpgUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_3_RAW_URL = function() {
  return '/rent/goodstp/listpg'
}
export const listpgUsingGET_3_TYPE = function() {
  return 'get'
}
export const listpgUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
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
 * 获取货品组别编码
 * request: rondcodeUsingGET
 * url: rondcodeUsingGETURL
 * method: rondcodeUsingGET_TYPE
 * raw_url: rondcodeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const rondcodeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/rondcode'
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
export const rondcodeUsingGET_RAW_URL = function() {
  return '/rent/goodstp/rondcode'
}
export const rondcodeUsingGET_TYPE = function() {
  return 'get'
}
export const rondcodeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/rondcode'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询货品组别树形结构
 * request: treeUsingGET_1
 * url: treeUsingGET_1URL
 * method: treeUsingGET_1_TYPE
 * raw_url: treeUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const treeUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/tree'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const treeUsingGET_1_RAW_URL = function() {
  return '/rent/goodstp/tree'
}
export const treeUsingGET_1_TYPE = function() {
  return 'get'
}
export const treeUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/tree'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['goodsTypeCode'] !== undefined) {
    queryParameters['goodsTypeCode'] = parameters['goodsTypeCode']
  }
  if (parameters['goodsTypeName'] !== undefined) {
    queryParameters['goodsTypeName'] = parameters['goodsTypeName']
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
 * 编辑货品组别
 * request: updateUsingPUT_7
 * url: updateUsingPUT_7URL
 * method: updateUsingPUT_7_TYPE
 * raw_url: updateUsingPUT_7_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/update'
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
export const updateUsingPUT_7_RAW_URL = function() {
  return '/rent/goodstp/update'
}
export const updateUsingPUT_7_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取货品组别详情
 * request: detailUsingGET_5
 * url: detailUsingGET_5URL
 * method: detailUsingGET_5_TYPE
 * raw_url: detailUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/{id}'
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
export const detailUsingGET_5_RAW_URL = function() {
  return '/rent/goodstp/{id}'
}
export const detailUsingGET_5_TYPE = function() {
  return 'get'
}
export const detailUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/{id}'
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
 * 删除货品组别
 * request: deleteUsingDELETE_5
 * url: deleteUsingDELETE_5URL
 * method: deleteUsingDELETE_5_TYPE
 * raw_url: deleteUsingDELETE_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goodstp/{id}'
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
export const deleteUsingDELETE_5_RAW_URL = function() {
  return '/rent/goodstp/{id}'
}
export const deleteUsingDELETE_5_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/{id}'
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
 * 添加意向合同
 * request: addUsingPOST_8
 * url: addUsingPOST_8URL
 * method: addUsingPOST_8_TYPE
 * raw_url: addUsingPOST_8_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/add'
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
export const addUsingPOST_8_RAW_URL = function() {
  return '/rent/intent/contract/add'
}
export const addUsingPOST_8_TYPE = function() {
  return 'post'
}
export const addUsingPOST_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查看意向合同诚意金
 * request: bondDetailUsingGET
 * url: bondDetailUsingGETURL
 * method: bondDetailUsingGET_TYPE
 * raw_url: bondDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const bondDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/bond/detail/{id}'
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
export const bondDetailUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/bond/detail/{id}'
}
export const bondDetailUsingGET_TYPE = function() {
  return 'get'
}
export const bondDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/bond/detail/{id}'
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
 * 取消确认
 * request: cancelUsingPUT_1
 * url: cancelUsingPUT_1URL
 * method: cancelUsingPUT_1_TYPE
 * raw_url: cancelUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const cancelUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/cancel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const cancelUsingPUT_1_RAW_URL = function() {
  return '/rent/intent/contract/cancel'
}
export const cancelUsingPUT_1_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/cancel'
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
 * 确认
 * request: confirmUsingPOST_1
 * url: confirmUsingPOST_1URL
 * method: confirmUsingPOST_1_TYPE
 * raw_url: confirmUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键
 */
export const confirmUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_1_RAW_URL = function() {
  return '/rent/intent/contract/confirm'
}
export const confirmUsingPOST_1_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查看意向合同费用条款
 * request: costDetailUsingGET
 * url: costDetailUsingGETURL
 * method: costDetailUsingGET_TYPE
 * raw_url: costDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const costDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/cost/detail/{id}'
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
export const costDetailUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/cost/detail/{id}'
}
export const costDetailUsingGET_TYPE = function() {
  return 'get'
}
export const costDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/cost/detail/{id}'
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
 * 添加费用条款
 * request: addRentOrCostUsingPOST_1
 * url: addRentOrCostUsingPOST_1URL
 * method: addRentOrCostUsingPOST_1_TYPE
 * raw_url: addRentOrCostUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addRentOrCostUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/costclause/add'
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
export const addRentOrCostUsingPOST_1_RAW_URL = function() {
  return '/rent/intent/contract/costclause/add'
}
export const addRentOrCostUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addRentOrCostUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/costclause/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改费用条款
 * request: updateRentOrCostUsingPOST
 * url: updateRentOrCostUsingPOSTURL
 * method: updateRentOrCostUsingPOST_TYPE
 * raw_url: updateRentOrCostUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateRentOrCostUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/costclause/update'
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
export const updateRentOrCostUsingPOST_RAW_URL = function() {
  return '/rent/intent/contract/costclause/update'
}
export const updateRentOrCostUsingPOST_TYPE = function() {
  return 'post'
}
export const updateRentOrCostUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/costclause/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 意向合同删除
 * request: delUsingPUT_1
 * url: delUsingPUT_1URL
 * method: delUsingPUT_1_TYPE
 * raw_url: delUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const delUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delUsingPUT_1_RAW_URL = function() {
  return '/rent/intent/contract/del'
}
export const delUsingPUT_1_TYPE = function() {
  return 'put'
}
export const delUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/del'
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
 * 意向合同主体详情
 * request: detailUsingGET_6
 * url: detailUsingGET_6URL
 * method: detailUsingGET_6_TYPE
 * raw_url: detailUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const detailUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/detail/{id}'
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
export const detailUsingGET_6_RAW_URL = function() {
  return '/rent/intent/contract/detail/{id}'
}
export const detailUsingGET_6_TYPE = function() {
  return 'get'
}
export const detailUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/detail/{id}'
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
 * 意向合同编辑
 * request: editUsingPUT
 * url: editUsingPUTURL
 * method: editUsingPUT_TYPE
 * raw_url: editUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const editUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/edit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const editUsingPUT_RAW_URL = function() {
  return '/rent/intent/contract/edit'
}
export const editUsingPUT_TYPE = function() {
  return 'put'
}
export const editUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/edit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取附件信息
 * request: fileUsingGET_1
 * url: fileUsingGET_1URL
 * method: fileUsingGET_1_TYPE
 * raw_url: fileUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const fileUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/file/{id}'
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
export const fileUsingGET_1_RAW_URL = function() {
  return '/rent/intent/contract/file/{id}'
}
export const fileUsingGET_1_TYPE = function() {
  return 'get'
}
export const fileUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/file/{id}'
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
 * 根据条件查询意向合同列表
 * request: getListForPageUsingGET_1
 * url: getListForPageUsingGET_1URL
 * method: getListForPageUsingGET_1_TYPE
 * raw_url: getListForPageUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param brandId - 品牌名称
 * @param status - 状态
 */
export const getListForPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_1_RAW_URL = function() {
  return '/rent/intent/contract/list'
}
export const getListForPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 根据物业性质查询已确认的意向合同
 * request: getListForPageByPropertyTypeUsingGET
 * url: getListForPageByPropertyTypeUsingGETURL
 * method: getListForPageByPropertyTypeUsingGET_TYPE
 * raw_url: getListForPageByPropertyTypeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质
 */
export const getListForPageByPropertyTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/propertytype/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageByPropertyTypeUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/propertytype/list'
}
export const getListForPageByPropertyTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getListForPageByPropertyTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/propertytype/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
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
 * 查看意向合同租金条款
 * request: rentTermsdetailUsingGET
 * url: rentTermsdetailUsingGETURL
 * method: rentTermsdetailUsingGET_TYPE
 * raw_url: rentTermsdetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const rentTermsdetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/rent/terms/detail/{id}'
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
export const rentTermsdetailUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/rent/terms/detail/{id}'
}
export const rentTermsdetailUsingGET_TYPE = function() {
  return 'get'
}
export const rentTermsdetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/rent/terms/detail/{id}'
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
 * 添加租金条款
 * request: addRentOrCostUsingPOST_2
 * url: addRentOrCostUsingPOST_2URL
 * method: addRentOrCostUsingPOST_2_TYPE
 * raw_url: addRentOrCostUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addRentOrCostUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/rentclause/add'
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
export const addRentOrCostUsingPOST_2_RAW_URL = function() {
  return '/rent/intent/contract/rentclause/add'
}
export const addRentOrCostUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addRentOrCostUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/rentclause/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除租金条款
 * request: delRentTemsUsingPUT
 * url: delRentTemsUsingPUTURL
 * method: delRentTemsUsingPUT_TYPE
 * raw_url: delRentTemsUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param rentTermsId - rentTermsId
 */
export const delRentTemsUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/rentclause/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
  }
  if (parameters['rentTermsId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: rentTermsId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delRentTemsUsingPUT_RAW_URL = function() {
  return '/rent/intent/contract/rentclause/del'
}
export const delRentTemsUsingPUT_TYPE = function() {
  return 'put'
}
export const delRentTemsUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/rentclause/del'
  if (parameters['rentTermsId'] !== undefined) {
    queryParameters['rentTermsId'] = parameters['rentTermsId']
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
 * 租金条款编辑
 * request: updateRentOrCostUsingPUT_1
 * url: updateRentOrCostUsingPUT_1URL
 * method: updateRentOrCostUsingPUT_1_TYPE
 * raw_url: updateRentOrCostUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateRentOrCostUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/rentclause/update'
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
export const updateRentOrCostUsingPUT_1_RAW_URL = function() {
  return '/rent/intent/contract/rentclause/update'
}
export const updateRentOrCostUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateRentOrCostUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/rentclause/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加意向单元信息
 * request: addShopUnitUsingPOST
 * url: addShopUnitUsingPOSTURL
 * method: addShopUnitUsingPOST_TYPE
 * raw_url: addShopUnitUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addShopUnitUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/shopunit/add'
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
export const addShopUnitUsingPOST_RAW_URL = function() {
  return '/rent/intent/contract/shopunit/add'
}
export const addShopUnitUsingPOST_TYPE = function() {
  return 'post'
}
export const addShopUnitUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/shopunit/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除意向单元信息
 * request: delShopUnitUsingPUT_1
 * url: delShopUnitUsingPUT_1URL
 * method: delShopUnitUsingPUT_1_TYPE
 * raw_url: delShopUnitUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param intentUnitId - intentUnitId
 */
export const delShopUnitUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/shopunit/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['intentUnitId'] !== undefined) {
    queryParameters['intentUnitId'] = parameters['intentUnitId']
  }
  if (parameters['intentUnitId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: intentUnitId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const delShopUnitUsingPUT_1_RAW_URL = function() {
  return '/rent/intent/contract/shopunit/del'
}
export const delShopUnitUsingPUT_1_TYPE = function() {
  return 'put'
}
export const delShopUnitUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/shopunit/del'
  if (parameters['intentUnitId'] !== undefined) {
    queryParameters['intentUnitId'] = parameters['intentUnitId']
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
 * 修改意向单元信息
 * request: updateShopUnitUsingPUT_1
 * url: updateShopUnitUsingPUT_1URL
 * method: updateShopUnitUsingPUT_1_TYPE
 * raw_url: updateShopUnitUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateShopUnitUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/shopunit/update'
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
export const updateShopUnitUsingPUT_1_RAW_URL = function() {
  return '/rent/intent/contract/shopunit/update'
}
export const updateShopUnitUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateShopUnitUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/shopunit/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加诚意金
 * request: addSincerityMoneyUsingPOST
 * url: addSincerityMoneyUsingPOSTURL
 * method: addSincerityMoneyUsingPOST_TYPE
 * raw_url: addSincerityMoneyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addSincerityMoneyUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/sinceritymoney/add'
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
export const addSincerityMoneyUsingPOST_RAW_URL = function() {
  return '/rent/intent/contract/sinceritymoney/add'
}
export const addSincerityMoneyUsingPOST_TYPE = function() {
  return 'post'
}
export const addSincerityMoneyUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/sinceritymoney/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改诚意金
 * request: updateSincerityMoneyUsingPOST
 * url: updateSincerityMoneyUsingPOSTURL
 * method: updateSincerityMoneyUsingPOST_TYPE
 * raw_url: updateSincerityMoneyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateSincerityMoneyUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/sinceritymoney/update'
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
export const updateSincerityMoneyUsingPOST_RAW_URL = function() {
  return '/rent/intent/contract/sinceritymoney/update'
}
export const updateSincerityMoneyUsingPOST_TYPE = function() {
  return 'post'
}
export const updateSincerityMoneyUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/sinceritymoney/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 意向合同确认列表列表--分页
 * request: confirmByStatusUsingGET
 * url: confirmByStatusUsingGETURL
 * method: confirmByStatusUsingGET_TYPE
 * raw_url: confirmByStatusUsingGET_RAW_URL
 * @param token - header中token字段
 * @param states - 多个状态(10:审核（新增）;11:已转为正式合同;20:取消;30:已确认;)
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质
 * @param status - 状态
 * @param contractCode - 合同号
 * @param merchantId - 商户id
 * @param brandId - 品牌id
 */
export const confirmByStatusUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/status/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const confirmByStatusUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/status/confirm/list'
}
export const confirmByStatusUsingGET_TYPE = function() {
  return 'get'
}
export const confirmByStatusUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/status/confirm/list'
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
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
 * 根据状态查询意向合同列表
 * request: getListForPageByStatusUsingGET
 * url: getListForPageByStatusUsingGETURL
 * method: getListForPageByStatusUsingGET_TYPE
 * raw_url: getListForPageByStatusUsingGET_RAW_URL
 * @param token - header中token字段
 * @param states - 多个状态(10:审核（新增）;11:已转为正式合同;20:取消;30:已确认;)
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质
 * @param status - 状态
 * @param contractCode - 合同号
 * @param merchantId - 商户id
 * @param brandId - 品牌id
 */
export const getListForPageByStatusUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/status/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageByStatusUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/status/list'
}
export const getListForPageByStatusUsingGET_TYPE = function() {
  return 'get'
}
export const getListForPageByStatusUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/status/list'
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['propertyType'] !== undefined) {
    queryParameters['propertyType'] = parameters['propertyType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['brandId'] !== undefined) {
    queryParameters['brandId'] = parameters['brandId']
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
 * 查看意向合同单元信息
 * request: unitDetailUsingGET
 * url: unitDetailUsingGETURL
 * method: unitDetailUsingGET_TYPE
 * raw_url: unitDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const unitDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/units/detail/{id}'
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
export const unitDetailUsingGET_RAW_URL = function() {
  return '/rent/intent/contract/units/detail/{id}'
}
export const unitDetailUsingGET_TYPE = function() {
  return 'get'
}
export const unitDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/units/detail/{id}'
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
 * 意向合同文件上传
 * request: uploadsIUsingPOST
 * url: uploadsIUsingPOSTURL
 * method: uploadsIUsingPOST_TYPE
 * raw_url: uploadsIUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 * @param contractId - 合同主键ID
 * @param type - 附件类型 0合同附件1其他
 */
export const uploadsIUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/uploads'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadsIUsingPOST_RAW_URL = function() {
  return '/rent/intent/contract/uploads'
}
export const uploadsIUsingPOST_TYPE = function() {
  return 'post'
}
export const uploadsIUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/uploads'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 确认的意向合同下拉列表
 * request: useableUsingGET_1
 * url: useableUsingGET_1URL
 * method: useableUsingGET_1_TYPE
 * raw_url: useableUsingGET_1_RAW_URL
 * @param token - header中token字段
 */
export const useableUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/intent/contract/useable'
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
export const useableUsingGET_1_RAW_URL = function() {
  return '/rent/intent/contract/useable'
}
export const useableUsingGET_1_TYPE = function() {
  return 'get'
}
export const useableUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/intent/contract/useable'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑商户
 * request: updateUsingPUT_8
 * url: updateUsingPUT_8URL
 * method: updateUsingPUT_8_TYPE
 * raw_url: updateUsingPUT_8_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/'
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
export const updateUsingPUT_8_RAW_URL = function() {
  return '/rent/merchant/'
}
export const updateUsingPUT_8_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加商户
 * request: addUsingPOST_9
 * url: addUsingPOST_9URL
 * method: addUsingPOST_9_TYPE
 * raw_url: addUsingPOST_9_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/add'
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
export const addUsingPOST_9_RAW_URL = function() {
  return '/rent/merchant/add'
}
export const addUsingPOST_9_TYPE = function() {
  return 'post'
}
export const addUsingPOST_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取商户详情
 * request: detailApiUsingGET
 * url: detailApiUsingGETURL
 * method: detailApiUsingGET_TYPE
 * raw_url: detailApiUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailApiUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/api/{id}'
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
export const detailApiUsingGET_RAW_URL = function() {
  return '/rent/merchant/api/{id}'
}
export const detailApiUsingGET_TYPE = function() {
  return 'get'
}
export const detailApiUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/api/{id}'
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
 * 修改商户状态为已确认
 * request: emptyUsingPOST_1
 * url: emptyUsingPOST_1URL
 * method: emptyUsingPOST_1_TYPE
 * raw_url: emptyUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/audit/empty'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const emptyUsingPOST_1_RAW_URL = function() {
  return '/rent/merchant/audit/empty'
}
export const emptyUsingPOST_1_TYPE = function() {
  return 'post'
}
export const emptyUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/audit/empty'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改商户状态为失效
 * request: invalidUsingPOST_1
 * url: invalidUsingPOST_1URL
 * method: invalidUsingPOST_1_TYPE
 * raw_url: invalidUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/audit/invalid'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const invalidUsingPOST_1_RAW_URL = function() {
  return '/rent/merchant/audit/invalid'
}
export const invalidUsingPOST_1_TYPE = function() {
  return 'post'
}
export const invalidUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/audit/invalid'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询审计商户列表
 * request: auditListUsingGET_2
 * url: auditListUsingGET_2URL
 * method: auditListUsingGET_2_TYPE
 * raw_url: auditListUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const auditListUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/audit/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListUsingGET_2_RAW_URL = function() {
  return '/rent/merchant/audit/list'
}
export const auditListUsingGET_2_TYPE = function() {
  return 'get'
}
export const auditListUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/audit/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 查询审计商户列表
 * request: auditListpgUsingGET_1
 * url: auditListpgUsingGET_1URL
 * method: auditListpgUsingGET_1_TYPE
 * raw_url: auditListpgUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const auditListpgUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/audit/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListpgUsingGET_1_RAW_URL = function() {
  return '/rent/merchant/audit/listpg'
}
export const auditListpgUsingGET_1_TYPE = function() {
  return 'get'
}
export const auditListpgUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/audit/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 返回格式为“商户号（商户名）”的字符串,以及商户ID的map集合
 * request: doweListUsingGET
 * url: doweListUsingGETURL
 * method: doweListUsingGET_TYPE
 * raw_url: doweListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - type
 */
export const doweListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/downList/{type}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const doweListUsingGET_RAW_URL = function() {
  return '/rent/merchant/downList/{type}'
}
export const doweListUsingGET_TYPE = function() {
  return 'get'
}
export const doweListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/downList/{type}'
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 删除图片
 * request: deleteImgUsingDELETE_1
 * url: deleteImgUsingDELETE_1URL
 * method: deleteImgUsingDELETE_1_TYPE
 * raw_url: deleteImgUsingDELETE_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteImgUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/img/{id}'
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
export const deleteImgUsingDELETE_1_RAW_URL = function() {
  return '/rent/merchant/img/{id}'
}
export const deleteImgUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteImgUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/img/{id}'
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
 * 查询商户列表
 * request: listUsingGET_12
 * url: listUsingGET_12URL
 * method: listUsingGET_12_TYPE
 * raw_url: listUsingGET_12_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const listUsingGET_12 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_12_RAW_URL = function() {
  return '/rent/merchant/list'
}
export const listUsingGET_12_TYPE = function() {
  return 'get'
}
export const listUsingGET_12URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 多个住键查询商户列表
 * request: listUsingPOST
 * url: listUsingPOSTURL
 * method: listUsingPOST_TYPE
 * raw_url: listUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - ids
 */
export const listUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/list/ids'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const listUsingPOST_RAW_URL = function() {
  return '/rent/merchant/list/ids'
}
export const listUsingPOST_TYPE = function() {
  return 'post'
}
export const listUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/list/ids'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询商户列表
 * request: listpgUsingGET_4
 * url: listpgUsingGET_4URL
 * method: listpgUsingGET_4_TYPE
 * raw_url: listpgUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const listpgUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_4_RAW_URL = function() {
  return '/rent/merchant/listpg'
}
export const listpgUsingGET_4_TYPE = function() {
  return 'get'
}
export const listpgUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 获取商户信息
 * request: optionsUsingGET
 * url: optionsUsingGETURL
 * method: optionsUsingGET_TYPE
 * raw_url: optionsUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const optionsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/options'
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
export const optionsUsingGET_RAW_URL = function() {
  return '/rent/merchant/options'
}
export const optionsUsingGET_TYPE = function() {
  return 'get'
}
export const optionsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/options'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据类型查询商户下拉列表
 * request: merchantUsingGET
 * url: merchantUsingGETURL
 * method: merchantUsingGET_TYPE
 * raw_url: merchantUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - 商户类型（ 0：商场；, 1：写字楼；2：场地, 3：广告位;)
 */
export const merchantUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/type'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const merchantUsingGET_RAW_URL = function() {
  return '/rent/merchant/type'
}
export const merchantUsingGET_TYPE = function() {
  return 'get'
}
export const merchantUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/type'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 文件上传
 * request: uploadUsingPOST_1
 * url: uploadUsingPOST_1URL
 * method: uploadUsingPOST_1_TYPE
 * raw_url: uploadUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param file - 图片
 * @param type - 类型 0营业执照 1经营许可证 2商标注册 3法人身份证 4其他证件
 */
export const uploadUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/upload'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadUsingPOST_1_RAW_URL = function() {
  return '/rent/merchant/upload'
}
export const uploadUsingPOST_1_TYPE = function() {
  return 'post'
}
export const uploadUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/upload'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 文件上传
 * request: uploadsUsingPOST_3
 * url: uploadsUsingPOST_3URL
 * method: uploadsUsingPOST_3_TYPE
 * raw_url: uploadsUsingPOST_3_RAW_URL
 * @param token - header中token字段
 * @param file - 图片
 * @param type - 类型 0营业执照 1经营许可证 2商标注册 3法人身份证 4其他证件
 */
export const uploadsUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/uploads'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters['file'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: file'))
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const uploadsUsingPOST_3_RAW_URL = function() {
  return '/rent/merchant/uploads'
}
export const uploadsUsingPOST_3_TYPE = function() {
  return 'post'
}
export const uploadsUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/uploads'
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
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
 * 获取商户详情
 * request: detailUsingGET_7
 * url: detailUsingGET_7URL
 * method: detailUsingGET_7_TYPE
 * raw_url: detailUsingGET_7_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}'
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
export const detailUsingGET_7_RAW_URL = function() {
  return '/rent/merchant/{id}'
}
export const detailUsingGET_7_TYPE = function() {
  return 'get'
}
export const detailUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}'
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
 * 删除商户
 * request: deleteUsingDELETE_6
 * url: deleteUsingDELETE_6URL
 * method: deleteUsingDELETE_6_TYPE
 * raw_url: deleteUsingDELETE_6_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}'
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
export const deleteUsingDELETE_6_RAW_URL = function() {
  return '/rent/merchant/{id}'
}
export const deleteUsingDELETE_6_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}'
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
 * 获取商户信息
 * request: getByIdUsingGET_4
 * url: getByIdUsingGET_4URL
 * method: getByIdUsingGET_4_TYPE
 * raw_url: getByIdUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getByIdUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}/info'
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
export const getByIdUsingGET_4_RAW_URL = function() {
  return '/rent/merchant/{id}/info'
}
export const getByIdUsingGET_4_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}/info'
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
 * 获取商户名称
 * request: getNameUsingGET
 * url: getNameUsingGETURL
 * method: getNameUsingGET_TYPE
 * raw_url: getNameUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getNameUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}/name'
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
export const getNameUsingGET_RAW_URL = function() {
  return '/rent/merchant/{id}/name'
}
export const getNameUsingGET_TYPE = function() {
  return 'get'
}
export const getNameUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}/name'
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
 * 修改商户状态
 * request: updateUsingPUT_9
 * url: updateUsingPUT_9URL
 * method: updateUsingPUT_9_TYPE
 * raw_url: updateUsingPUT_9_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}/{status}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_9_RAW_URL = function() {
  return '/rent/merchant/{id}/{status}'
}
export const updateUsingPUT_9_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}/{status}'
  path = path.replace('{id}', `${parameters['id']}`)
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑店铺
 * request: updateUsingPUT_10
 * url: updateUsingPUT_10URL
 * method: updateUsingPUT_10_TYPE
 * raw_url: updateUsingPUT_10_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/'
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
export const updateUsingPUT_10_RAW_URL = function() {
  return '/rent/shop/'
}
export const updateUsingPUT_10_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加店铺
 * request: addUsingPOST_10
 * url: addUsingPOST_10URL
 * method: addUsingPOST_10_TYPE
 * raw_url: addUsingPOST_10_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/add'
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
export const addUsingPOST_10_RAW_URL = function() {
  return '/rent/shop/add'
}
export const addUsingPOST_10_TYPE = function() {
  return 'post'
}
export const addUsingPOST_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改店铺状态为空置
 * request: emptyUsingPOST_2
 * url: emptyUsingPOST_2URL
 * method: emptyUsingPOST_2_TYPE
 * raw_url: emptyUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/audit/empty'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const emptyUsingPOST_2_RAW_URL = function() {
  return '/rent/shop/audit/empty'
}
export const emptyUsingPOST_2_TYPE = function() {
  return 'post'
}
export const emptyUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/audit/empty'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 修改店铺状态为失效
 * request: invalidUsingPOST_2
 * url: invalidUsingPOST_2URL
 * method: invalidUsingPOST_2_TYPE
 * raw_url: invalidUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/audit/invalid'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const invalidUsingPOST_2_RAW_URL = function() {
  return '/rent/shop/audit/invalid'
}
export const invalidUsingPOST_2_TYPE = function() {
  return 'post'
}
export const invalidUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/audit/invalid'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询审计店铺列表
 * request: auditListUsingGET_3
 * url: auditListUsingGET_3URL
 * method: auditListUsingGET_3_TYPE
 * raw_url: auditListUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const auditListUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/audit/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListUsingGET_3_RAW_URL = function() {
  return '/rent/shop/audit/list'
}
export const auditListUsingGET_3_TYPE = function() {
  return 'get'
}
export const auditListUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/audit/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 查询审计店铺列表
 * request: auditListpgUsingGET_2
 * url: auditListpgUsingGET_2URL
 * method: auditListpgUsingGET_2_TYPE
 * raw_url: auditListpgUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const auditListpgUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/audit/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const auditListpgUsingGET_2_RAW_URL = function() {
  return '/rent/shop/audit/listpg'
}
export const auditListpgUsingGET_2_TYPE = function() {
  return 'get'
}
export const auditListpgUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/audit/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 返回（空置预定使用中失效）格式为“店铺号（店铺名）”的字符串,以及店铺ID的map集合
 * request: listUsingPOST_1
 * url: listUsingPOST_1URL
 * method: listUsingPOST_1_TYPE
 * raw_url: listUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const listUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/downlist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const listUsingPOST_1_RAW_URL = function() {
  return '/rent/shop/downlist'
}
export const listUsingPOST_1_TYPE = function() {
  return 'post'
}
export const listUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/downlist'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取店铺详情
 * request: getShopInfoByIdAndTokenUsingGET
 * url: getShopInfoByIdAndTokenUsingGETURL
 * method: getShopInfoByIdAndTokenUsingGET_TYPE
 * raw_url: getShopInfoByIdAndTokenUsingGET_RAW_URL
 * @param id - id
 * @param token - 主键id
 */
export const getShopInfoByIdAndTokenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/info/{token}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters['token'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: token'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getShopInfoByIdAndTokenUsingGET_RAW_URL = function() {
  return '/rent/shop/info/{token}'
}
export const getShopInfoByIdAndTokenUsingGET_TYPE = function() {
  return 'get'
}
export const getShopInfoByIdAndTokenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/info/{token}'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  path = path.replace('{token}', `${parameters['token']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询店铺列表
 * request: listUsingGET_13
 * url: listUsingGET_13URL
 * method: listUsingGET_13_TYPE
 * raw_url: listUsingGET_13_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const listUsingGET_13 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_13_RAW_URL = function() {
  return '/rent/shop/list'
}
export const listUsingGET_13_TYPE = function() {
  return 'get'
}
export const listUsingGET_13URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 查询店铺列表
 * request: listUsingPOST_2
 * url: listUsingPOST_2URL
 * method: listUsingPOST_2_TYPE
 * raw_url: listUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param ids - ids
 */
export const listUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/list/ids'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const listUsingPOST_2_RAW_URL = function() {
  return '/rent/shop/list/ids'
}
export const listUsingPOST_2_TYPE = function() {
  return 'post'
}
export const listUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/list/ids'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询店铺列表
 * request: listpgUsingGET_5
 * url: listpgUsingGET_5URL
 * method: listpgUsingGET_5_TYPE
 * raw_url: listpgUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const listpgUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/listpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listpgUsingGET_5_RAW_URL = function() {
  return '/rent/shop/listpg'
}
export const listpgUsingGET_5_TYPE = function() {
  return 'get'
}
export const listpgUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/listpg'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 查询商户的店铺下拉列表
 * request: threeMerchantShopUsingGET
 * url: threeMerchantShopUsingGETURL
 * method: threeMerchantShopUsingGET_TYPE
 * raw_url: threeMerchantShopUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - merchantId
 */
export const threeMerchantShopUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/merchant/three/{merchantId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const threeMerchantShopUsingGET_RAW_URL = function() {
  return '/rent/shop/merchant/three/{merchantId}'
}
export const threeMerchantShopUsingGET_TYPE = function() {
  return 'get'
}
export const threeMerchantShopUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/merchant/three/{merchantId}'
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询商户的店铺下拉列表
 * request: merchantShopUsingGET
 * url: merchantShopUsingGETURL
 * method: merchantShopUsingGET_TYPE
 * raw_url: merchantShopUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - merchantId
 */
export const merchantShopUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/merchant/{merchantId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const merchantShopUsingGET_RAW_URL = function() {
  return '/rent/shop/merchant/{merchantId}'
}
export const merchantShopUsingGET_TYPE = function() {
  return 'get'
}
export const merchantShopUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/merchant/{merchantId}'
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询店铺下拉列表
 * request: optionUsingPOST_7
 * url: optionUsingPOST_7URL
 * method: optionUsingPOST_7_TYPE
 * raw_url: optionUsingPOST_7_RAW_URL
 * @param token - header中token字段
 * @param status - 状态id
 */
export const optionUsingPOST_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/option'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['status'] !== undefined) {
    body = parameters['status']
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const optionUsingPOST_7_RAW_URL = function() {
  return '/rent/shop/option'
}
export const optionUsingPOST_7_TYPE = function() {
  return 'post'
}
export const optionUsingPOST_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询店铺下拉列表
 * request: optionpgUsingPOST_7
 * url: optionpgUsingPOST_7URL
 * method: optionpgUsingPOST_7_TYPE
 * raw_url: optionpgUsingPOST_7_RAW_URL
 * @param token - header中token字段
 * @param param - 状态id
 */
export const optionpgUsingPOST_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/optionpg'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const optionpgUsingPOST_7_RAW_URL = function() {
  return '/rent/shop/optionpg'
}
export const optionpgUsingPOST_7_TYPE = function() {
  return 'post'
}
export const optionpgUsingPOST_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/optionpg'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询店铺下拉列表
 * request: orderedOptionUsingPOST
 * url: orderedOptionUsingPOSTURL
 * method: orderedOptionUsingPOST_TYPE
 * raw_url: orderedOptionUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param status - 状态id
 */
export const orderedOptionUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/ordered/option'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['status'] !== undefined) {
    body = parameters['status']
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const orderedOptionUsingPOST_RAW_URL = function() {
  return '/rent/shop/ordered/option'
}
export const orderedOptionUsingPOST_TYPE = function() {
  return 'post'
}
export const orderedOptionUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/ordered/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 店铺数据导出
 * request: shopToExcelUsingGET
 * url: shopToExcelUsingGETURL
 * method: shopToExcelUsingGET_TYPE
 * raw_url: shopToExcelUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const shopToExcelUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopToExcelUsingGET_RAW_URL = function() {
  return '/rent/shop/toExcel'
}
export const shopToExcelUsingGET_TYPE = function() {
  return 'get'
}
export const shopToExcelUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 获取店铺详情
 * request: detailUsingGET_8
 * url: detailUsingGET_8URL
 * method: detailUsingGET_8_TYPE
 * raw_url: detailUsingGET_8_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}'
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
export const detailUsingGET_8_RAW_URL = function() {
  return '/rent/shop/{id}'
}
export const detailUsingGET_8_TYPE = function() {
  return 'get'
}
export const detailUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}'
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
 * 删除店铺
 * request: deleteUsingDELETE_7
 * url: deleteUsingDELETE_7URL
 * method: deleteUsingDELETE_7_TYPE
 * raw_url: deleteUsingDELETE_7_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}'
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
export const deleteUsingDELETE_7_RAW_URL = function() {
  return '/rent/shop/{id}'
}
export const deleteUsingDELETE_7_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}'
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
 * 获取店铺详情
 * request: getByIdUsingGET_5
 * url: getByIdUsingGET_5URL
 * method: getByIdUsingGET_5_TYPE
 * raw_url: getByIdUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getByIdUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}/info'
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
export const getByIdUsingGET_5_RAW_URL = function() {
  return '/rent/shop/{id}/info'
}
export const getByIdUsingGET_5_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}/info'
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
 * 获取店铺名称
 * request: getNameUsingGET_1
 * url: getNameUsingGET_1URL
 * method: getNameUsingGET_1_TYPE
 * raw_url: getNameUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getNameUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}/name'
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
export const getNameUsingGET_1_RAW_URL = function() {
  return '/rent/shop/{id}/name'
}
export const getNameUsingGET_1_TYPE = function() {
  return 'get'
}
export const getNameUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}/name'
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
 * 修改店铺状态
 * request: updateUsingPUT_11
 * url: updateUsingPUT_11URL
 * method: updateUsingPUT_11_TYPE
 * raw_url: updateUsingPUT_11_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}/{status}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_11_RAW_URL = function() {
  return '/rent/shop/{id}/{status}'
}
export const updateUsingPUT_11_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}/{status}'
  path = path.replace('{id}', `${parameters['id']}`)
  path = path.replace('{status}', `${parameters['status']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 单元、广告位、写字楼、场地添加
 * request: addUsingPOST_11
 * url: addUsingPOST_11URL
 * method: addUsingPOST_11_TYPE
 * raw_url: addUsingPOST_11_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_11_RAW_URL = function() {
  return '/rent/unit'
}
export const addUsingPOST_11_TYPE = function() {
  return 'post'
}
export const addUsingPOST_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 单元、广告位、写字楼、场地批量审核
 * request: updateStatusUsingPOST
 * url: updateStatusUsingPOSTURL
 * method: updateStatusUsingPOST_TYPE
 * raw_url: updateStatusUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键集合
 */
export const updateStatusUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/ids'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    body = parameters['ids']
  }
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updateStatusUsingPOST_RAW_URL = function() {
  return '/rent/unit/ids'
}
export const updateStatusUsingPOST_TYPE = function() {
  return 'post'
}
export const updateStatusUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/ids'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据id、合同号删除单元、广告位、写字楼、场地(意向合同录入单元调用)
 * request: intentUpdateStatusToEmptyUsingPUT
 * url: intentUpdateStatusToEmptyUsingPUTURL
 * method: intentUpdateStatusToEmptyUsingPUT_TYPE
 * raw_url: intentUpdateStatusToEmptyUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 单元id
 * @param contractCode - 合同号
 */
export const intentUpdateStatusToEmptyUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/intent/status/empty'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const intentUpdateStatusToEmptyUsingPUT_RAW_URL = function() {
  return '/rent/unit/intent/status/empty'
}
export const intentUpdateStatusToEmptyUsingPUT_TYPE = function() {
  return 'put'
}
export const intentUpdateStatusToEmptyUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/intent/status/empty'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 单元、广告位、写字楼、场地列表
 * request: listUsingGET_14
 * url: listUsingGET_14URL
 * method: listUsingGET_14_TYPE
 * raw_url: listUsingGET_14_RAW_URL
 * @param token - header中token字段
 * @param states - 多个状态(0:新增;1:空置;2:取消;3:预订;4:使用中;5:失效;6:退租;)
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param code - 单元号
 * @param buildId - 楼宇ID
 * @param floorId - 楼层ID
 * @param type - 类型(0表示店铺单元，1表示写字楼，2表示场地，3表示广告位)
 * @param status - 状态
 */
export const listUsingGET_14 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['buildId'] !== undefined) {
    queryParameters['buildId'] = parameters['buildId']
  }
  if (parameters['floorId'] !== undefined) {
    queryParameters['floorId'] = parameters['floorId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_14_RAW_URL = function() {
  return '/rent/unit/list'
}
export const listUsingGET_14_TYPE = function() {
  return 'get'
}
export const listUsingGET_14URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/list'
  if (parameters['states'] !== undefined) {
    queryParameters['states'] = parameters['states']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['code'] !== undefined) {
    queryParameters['code'] = parameters['code']
  }
  if (parameters['buildId'] !== undefined) {
    queryParameters['buildId'] = parameters['buildId']
  }
  if (parameters['floorId'] !== undefined) {
    queryParameters['floorId'] = parameters['floorId']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 根据类型,楼层查询楼层对应单元信息
 * request: getListUsingGET
 * url: getListUsingGETURL
 * method: getListUsingGET_TYPE
 * raw_url: getListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - 类型(0表示店铺单元，1表示写字楼，2表示场地，3表示广告位)
 * @param floorId - 楼宇ID
 */
export const getListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/list/{type}/{floorId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  path = path.replace('{floorId}', `${parameters['floorId']}`)
  if (parameters['floorId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: floorId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListUsingGET_RAW_URL = function() {
  return '/rent/unit/list/{type}/{floorId}'
}
export const getListUsingGET_TYPE = function() {
  return 'get'
}
export const getListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/list/{type}/{floorId}'
  path = path.replace('{type}', `${parameters['type']}`)
  path = path.replace('{floorId}', `${parameters['floorId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 取消/失效
 * request: updateStatusUsingPUT
 * url: updateStatusUsingPUTURL
 * method: updateStatusUsingPUT_TYPE
 * raw_url: updateStatusUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 * @param stauts - stauts
 */
export const updateStatusUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/status'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['stauts'] !== undefined) {
    queryParameters['stauts'] = parameters['stauts']
  }
  if (parameters['stauts'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: stauts'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStatusUsingPUT_RAW_URL = function() {
  return '/rent/unit/status'
}
export const updateStatusUsingPUT_TYPE = function() {
  return 'put'
}
export const updateStatusUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/status'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['stauts'] !== undefined) {
    queryParameters['stauts'] = parameters['stauts']
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
 * 根据id、合同号删除单元、广告位、写字楼、场地(正式合同录入单元调用)
 * request: updateStatusToEmptyUsingPUT
 * url: updateStatusToEmptyUsingPUTURL
 * method: updateStatusToEmptyUsingPUT_TYPE
 * raw_url: updateStatusToEmptyUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 单元id
 * @param contractCode - 合同号
 */
export const updateStatusToEmptyUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/status/empty'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['contractCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStatusToEmptyUsingPUT_RAW_URL = function() {
  return '/rent/unit/status/empty'
}
export const updateStatusToEmptyUsingPUT_TYPE = function() {
  return 'put'
}
export const updateStatusToEmptyUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/status/empty'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 根据ID查询单元、广告位、写字楼、场地
 * request: selectByIdUsingGET_3
 * url: selectByIdUsingGET_3URL
 * method: selectByIdUsingGET_3_TYPE
 * raw_url: selectByIdUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const selectByIdUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{id}'
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
export const selectByIdUsingGET_3_RAW_URL = function() {
  return '/rent/unit/{id}'
}
export const selectByIdUsingGET_3_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{id}'
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
 * 单元、广告位、写字楼、场地修改
 * request: updateUsingPUT_12
 * url: updateUsingPUT_12URL
 * method: updateUsingPUT_12_TYPE
 * raw_url: updateUsingPUT_12_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 * @param param - param
 */
export const updateUsingPUT_12 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_12_RAW_URL = function() {
  return '/rent/unit/{id}'
}
export const updateUsingPUT_12_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_12URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{id}'
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
 * 单元、广告位、写字楼、场地删除
 * request: deleteUsingDELETE_8
 * url: deleteUsingDELETE_8URL
 * method: deleteUsingDELETE_8_TYPE
 * raw_url: deleteUsingDELETE_8_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const deleteUsingDELETE_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{id}'
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
export const deleteUsingDELETE_8_RAW_URL = function() {
  return '/rent/unit/{id}'
}
export const deleteUsingDELETE_8_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{id}'
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
 * 查询空置、预定、使用中状态的店铺信息列表
 * request: shopListUsingGET
 * url: shopListUsingGETURL
 * method: shopListUsingGET_TYPE
 * raw_url: shopListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param status - 店铺状态 1空置 3预定 4使用中
 */
export const shopListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/view/shop/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopListUsingGET_RAW_URL = function() {
  return '/rent/view/shop/list'
}
export const shopListUsingGET_TYPE = function() {
  return 'get'
}
export const shopListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/view/shop/list'
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
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
 * 根据店铺编号查询店铺信息
 * request: shopUsingGET
 * url: shopUsingGETURL
 * method: shopUsingGET_TYPE
 * raw_url: shopUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const shopUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/view/shop/{shopCode}'
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
export const shopUsingGET_RAW_URL = function() {
  return '/rent/view/shop/{shopCode}'
}
export const shopUsingGET_TYPE = function() {
  return 'get'
}
export const shopUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/view/shop/{shopCode}'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}