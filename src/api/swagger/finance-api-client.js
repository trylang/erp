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
 *                    ERP-财务管理API.
 ==========================================================*/
/**
 * 取消
 * request: cancelUsingPUT
 * url: cancelUsingPUTURL
 * method: cancelUsingPUT_TYPE
 * raw_url: cancelUsingPUT_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/cancel/{id}'
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
export const cancelUsingPUT_RAW_URL = function() {
  return '/finance/adjust/cost/cancel/{id}'
}
export const cancelUsingPUT_TYPE = function() {
  return 'put'
}
export const cancelUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/cancel/{id}'
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
 * 确定
 * request: confirmUsingPOST
 * url: confirmUsingPOSTURL
 * method: confirmUsingPOST_TYPE
 * raw_url: confirmUsingPOST_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const confirmUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_RAW_URL = function() {
  return '/finance/adjust/cost/confirm'
}
export const confirmUsingPOST_TYPE = function() {
  return 'post'
}
export const confirmUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/confirm'
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
 * request: delUsingPOST
 * url: delUsingPOSTURL
 * method: delUsingPOST_TYPE
 * raw_url: delUsingPOST_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const delUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const delUsingPOST_RAW_URL = function() {
  return '/finance/adjust/cost/del'
}
export const delUsingPOST_TYPE = function() {
  return 'post'
}
export const delUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/del'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 费用调整管理列表详情
 * request: detailUsingGET
 * url: detailUsingGETURL
 * method: detailUsingGET_TYPE
 * raw_url: detailUsingGET_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const detailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/detail/{id}'
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
  return '/finance/adjust/cost/detail/{id}'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/detail/{id}'
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
 * 查询新增和取消状态的费用列表
 * request: getlistUsingGET
 * url: getlistUsingGETURL
 * method: getlistUsingGET_TYPE
 * raw_url: getlistUsingGET_RAW_URL
 * @param token - token
 * @param statuses - 状态列表
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param adjustType - 费用调整类型
 * @param tradeDateFrom - 开始时间
 * @param tradeDateTo - 结束时间
 * @param  - 
 */
export const getlistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/getList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getlistUsingGET_RAW_URL = function() {
  return '/finance/adjust/cost/getList'
}
export const getlistUsingGET_TYPE = function() {
  return 'get'
}
export const getlistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/getList'
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
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
 * 删除
 * request: delUsingDELETE
 * url: delUsingDELETEURL
 * method: delUsingDELETE_TYPE
 * raw_url: delUsingDELETE_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const delUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/del/{id}'
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
export const delUsingDELETE_RAW_URL = function() {
  return '/finance/adjust/cost/item/del/{id}'
}
export const delUsingDELETE_TYPE = function() {
  return 'delete'
}
export const delUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/del/{id}'
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
 * 查询列表
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 主键
 * @param  - 
 */
export const listUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
export const listUsingGET_1_RAW_URL = function() {
  return '/finance/adjust/cost/item/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
 * 增加费用项
 * request: saveUsingPOST
 * url: saveUsingPOSTURL
 * method: saveUsingPOST_TYPE
 * raw_url: saveUsingPOST_RAW_URL
 * @param token - token
 * @param request - request
 * @param  - 
 */
export const saveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/save'
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
  return '/finance/adjust/cost/item/save'
}
export const saveUsingPOST_TYPE = function() {
  return 'post'
}
export const saveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新
 * request: updateUsingPOST
 * url: updateUsingPOSTURL
 * method: updateUsingPOST_TYPE
 * raw_url: updateUsingPOST_RAW_URL
 * @param token - token
 * @param param - param
 * @param  - 
 */
export const updateUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/update'
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
export const updateUsingPOST_RAW_URL = function() {
  return '/finance/adjust/cost/item/update'
}
export const updateUsingPOST_TYPE = function() {
  return 'post'
}
export const updateUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 周期重新生成后更新周期外键（如：合同变更）
 * request: updateCycleIdsUsingPOST
 * url: updateCycleIdsUsingPOSTURL
 * method: updateCycleIdsUsingPOST_TYPE
 * raw_url: updateCycleIdsUsingPOST_RAW_URL
 * @param token - token
 * @param ids - 新旧主键对应列表
 */
export const updateCycleIdsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/update/cycle'
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
export const updateCycleIdsUsingPOST_RAW_URL = function() {
  return '/finance/adjust/cost/item/update/cycle'
}
export const updateCycleIdsUsingPOST_TYPE = function() {
  return 'post'
}
export const updateCycleIdsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/update/cycle'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取详情
 * request: getByIdUsingGET
 * url: getByIdUsingGETURL
 * method: getByIdUsingGET_TYPE
 * raw_url: getByIdUsingGET_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const getByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/item/{id}'
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
  return '/finance/adjust/cost/item/{id}'
}
export const getByIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/item/{id}'
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
 * 查询费用调整管理、费用调整确认列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param token - token
 * @param statuses - 状态列表
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param adjustType - 费用调整类型
 * @param tradeDateFrom - 开始时间
 * @param tradeDateTo - 结束时间
 * @param  - 
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/adjust/cost/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_RAW_URL = function() {
  return '/finance/adjust/cost/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/adjust/cost/list'
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
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
 * 取消
 * request: cancelUsingPUT_1
 * url: cancelUsingPUT_1URL
 * method: cancelUsingPUT_1_TYPE
 * raw_url: cancelUsingPUT_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/cancel'
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
  return '/finance/bill/adjust/cancel'
}
export const cancelUsingPUT_1_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/cancel'
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
 * @param token - token
 * @param id - 主键
 */
export const confirmUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_1_RAW_URL = function() {
  return '/finance/bill/adjust/confirm'
}
export const confirmUsingPOST_1_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单调整确认列表
 * request: confirmListUsingGET
 * url: confirmListUsingGETURL
 * method: confirmListUsingGET_TYPE
 * raw_url: confirmListUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param settleNo - 结算单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param status - 状态
 */
export const confirmListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const confirmListUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/confirm/list'
}
export const confirmListUsingGET_TYPE = function() {
  return 'get'
}
export const confirmListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/confirm/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 根据ID查询明细
 * request: getDetailUsingGET
 * url: getDetailUsingGETURL
 * method: getDetailUsingGET_TYPE
 * raw_url: getDetailUsingGET_RAW_URL
 * @param token - token
 * @param id - ID主键
 */
export const getDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/detail/{id}'
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
export const getDetailUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/detail/{id}'
}
export const getDetailUsingGET_TYPE = function() {
  return 'get'
}
export const getDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/detail/{id}'
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
 * 结算单调整历史数据生成拆分记录
 * request: historyUsingPOST
 * url: historyUsingPOSTURL
 * method: historyUsingPOST_TYPE
 * raw_url: historyUsingPOST_RAW_URL
 * @param token - token
 * @param ids - ID主键
 */
export const historyUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/history'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    queryParameters['ids'] = parameters['ids']
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
export const historyUsingPOST_RAW_URL = function() {
  return '/finance/bill/adjust/history'
}
export const historyUsingPOST_TYPE = function() {
  return 'post'
}
export const historyUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/history'
  if (parameters['ids'] !== undefined) {
    queryParameters['ids'] = parameters['ids']
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
 * 结算单调整管理树
 * request: latestSalesUsingGET
 * url: latestSalesUsingGETURL
 * method: latestSalesUsingGET_TYPE
 * raw_url: latestSalesUsingGET_RAW_URL
 * @param token - token
 * @param billId - ID主键
 */
export const latestSalesUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/latest/sales/{billId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{billId}', `${parameters['billId']}`)
  if (parameters['billId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: billId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const latestSalesUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/latest/sales/{billId}'
}
export const latestSalesUsingGET_TYPE = function() {
  return 'get'
}
export const latestSalesUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/latest/sales/{billId}'
  path = path.replace('{billId}', `${parameters['billId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单调整管理列表
 * request: manageListUsingGET
 * url: manageListUsingGETURL
 * method: manageListUsingGET_TYPE
 * raw_url: manageListUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param settleNo - 结算单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param status - 状态
 */
export const manageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/manage/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const manageListUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/manage/list'
}
export const manageListUsingGET_TYPE = function() {
  return 'get'
}
export const manageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/manage/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 提交
 * request: saveUsingPOST_1
 * url: saveUsingPOST_1URL
 * method: saveUsingPOST_1_TYPE
 * raw_url: saveUsingPOST_1_RAW_URL
 * @param token - token
 * @param billAdjustRequest - billAdjustRequest
 */
export const saveUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/submit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['billAdjustRequest'] !== undefined) {
    body = parameters['billAdjustRequest']
  }
  if (parameters['billAdjustRequest'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: billAdjustRequest'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_1_RAW_URL = function() {
  return '/finance/bill/adjust/submit'
}
export const saveUsingPOST_1_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/submit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单调整管理树
 * request: getTreeUsingGET
 * url: getTreeUsingGETURL
 * method: getTreeUsingGET_TYPE
 * raw_url: getTreeUsingGET_RAW_URL
 * @param token - token
 */
export const getTreeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/tree'
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
export const getTreeUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/tree'
}
export const getTreeUsingGET_TYPE = function() {
  return 'get'
}
export const getTreeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/tree'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据结算单ID查询费用调整项目
 * request: getByBillIdUsingGET
 * url: getByBillIdUsingGETURL
 * method: getByBillIdUsingGET_TYPE
 * raw_url: getByBillIdUsingGET_RAW_URL
 * @param token - token
 * @param billId - 结算单ID
 */
export const getByBillIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/{billId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{billId}', `${parameters['billId']}`)
  if (parameters['billId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: billId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getByBillIdUsingGET_RAW_URL = function() {
  return '/finance/bill/adjust/{billId}'
}
export const getByBillIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByBillIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/{billId}'
  path = path.replace('{billId}', `${parameters['billId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID删除结算单调整项目
 * request: delUsingDELETE_1
 * url: delUsingDELETE_1URL
 * method: delUsingDELETE_1_TYPE
 * raw_url: delUsingDELETE_1_RAW_URL
 * @param token - token
 * @param id - ID主键
 */
export const delUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/adjust/{id}'
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
export const delUsingDELETE_1_RAW_URL = function() {
  return '/finance/bill/adjust/{id}'
}
export const delUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const delUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/adjust/{id}'
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
 * 取消
 * request: cancelUsingPUT_2
 * url: cancelUsingPUT_2URL
 * method: cancelUsingPUT_2_TYPE
 * raw_url: cancelUsingPUT_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/cancel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
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
export const cancelUsingPUT_2_RAW_URL = function() {
  return '/finance/bill/cancel'
}
export const cancelUsingPUT_2_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/cancel'
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
 * request: confirmUsingPOST_2
 * url: confirmUsingPOST_2URL
 * method: confirmUsingPOST_2_TYPE
 * raw_url: confirmUsingPOST_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const confirmUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_2_RAW_URL = function() {
  return '/finance/bill/confirm'
}
export const confirmUsingPOST_2_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单确认列表
 * request: confirmListUsingGET_1
 * url: confirmListUsingGET_1URL
 * method: confirmListUsingGET_1_TYPE
 * raw_url: confirmListUsingGET_1_RAW_URL
 * @param token - token
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
export const confirmListUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/confirm/list'
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
export const confirmListUsingGET_1_RAW_URL = function() {
  return '/finance/bill/confirm/list'
}
export const confirmListUsingGET_1_TYPE = function() {
  return 'get'
}
export const confirmListUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/confirm/list'
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
 * 生成结算单
 * request: createUsingPOST
 * url: createUsingPOSTURL
 * method: createUsingPOST_TYPE
 * raw_url: createUsingPOST_RAW_URL
 * @param token - token
 * @param request - request
 * @param  - 
 */
export const createUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/create'
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
export const createUsingPOST_RAW_URL = function() {
  return '/finance/bill/create'
}
export const createUsingPOST_TYPE = function() {
  return 'post'
}
export const createUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/create'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单生成查询列表
 * request: createListUsingGET
 * url: createListUsingGETURL
 * method: createListUsingGET_TYPE
 * raw_url: createListUsingGET_RAW_URL
 * @param token - token
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
export const createListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/create/list'
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
export const createListUsingGET_RAW_URL = function() {
  return '/finance/bill/create/list'
}
export const createListUsingGET_TYPE = function() {
  return 'get'
}
export const createListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/create/list'
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
 * 删除
 * request: delUsingPOST_1
 * url: delUsingPOST_1URL
 * method: delUsingPOST_1_TYPE
 * raw_url: delUsingPOST_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const delUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const delUsingPOST_1_RAW_URL = function() {
  return '/finance/bill/del'
}
export const delUsingPOST_1_TYPE = function() {
  return 'post'
}
export const delUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/del'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单管理列表
 * request: manageListUsingGET_1
 * url: manageListUsingGET_1URL
 * method: manageListUsingGET_1_TYPE
 * raw_url: manageListUsingGET_1_RAW_URL
 * @param token - token
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
export const manageListUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/manage/list'
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
export const manageListUsingGET_1_RAW_URL = function() {
  return '/finance/bill/manage/list'
}
export const manageListUsingGET_1_TYPE = function() {
  return 'get'
}
export const manageListUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/manage/list'
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
 * 商户的结算单发布列表
 * request: merchantListUsingGET
 * url: merchantListUsingGETURL
 * method: merchantListUsingGET_TYPE
 * raw_url: merchantListUsingGET_RAW_URL
 * @param token - token
 * @param merchantId - merchantId
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
export const merchantListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/merchant/list/{merchantId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
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
export const merchantListUsingGET_RAW_URL = function() {
  return '/finance/bill/merchant/list/{merchantId}'
}
export const merchantListUsingGET_TYPE = function() {
  return 'get'
}
export const merchantListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/merchant/list/{merchantId}'
  path = path.replace('{merchantId}', `${parameters['merchantId']}`)
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
 * 发布
 * request: publishUsingPUT
 * url: publishUsingPUTURL
 * method: publishUsingPUT_TYPE
 * raw_url: publishUsingPUT_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const publishUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/publish'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
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
export const publishUsingPUT_RAW_URL = function() {
  return '/finance/bill/publish'
}
export const publishUsingPUT_TYPE = function() {
  return 'put'
}
export const publishUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/publish'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算单发布列表
 * request: publishListUsingGET
 * url: publishListUsingGETURL
 * method: publishListUsingGET_TYPE
 * raw_url: publishListUsingGET_RAW_URL
 * @param token - token
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
export const publishListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/publish/list'
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
export const publishListUsingGET_RAW_URL = function() {
  return '/finance/bill/publish/list'
}
export const publishListUsingGET_TYPE = function() {
  return 'get'
}
export const publishListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/publish/list'
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
 * 获取结算单树形展示
 * request: billTreeUsingGET
 * url: billTreeUsingGETURL
 * method: billTreeUsingGET_TYPE
 * raw_url: billTreeUsingGET_RAW_URL
 * @param token - token
 */
export const billTreeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/billtree'
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
export const billTreeUsingGET_RAW_URL = function() {
  return '/finance/bill/receipt/billtree'
}
export const billTreeUsingGET_TYPE = function() {
  return 'get'
}
export const billTreeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/billtree'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 单个取消
 * request: cancelUsingPUT_3
 * url: cancelUsingPUT_3URL
 * method: cancelUsingPUT_3_TYPE
 * raw_url: cancelUsingPUT_3_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/cancel/{id}'
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
export const cancelUsingPUT_3_RAW_URL = function() {
  return '/finance/bill/receipt/cancel/{id}'
}
export const cancelUsingPUT_3_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/cancel/{id}'
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
 * 批量确认
 * request: confirmUsingPOST_3
 * url: confirmUsingPOST_3URL
 * method: confirmUsingPOST_3_TYPE
 * raw_url: confirmUsingPOST_3_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const confirmUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_3_RAW_URL = function() {
  return '/finance/bill/receipt/confirm'
}
export const confirmUsingPOST_3_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/confirm'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 收款确认列表
 * request: confirmListUsingGET_2
 * url: confirmListUsingGET_2URL
 * method: confirmListUsingGET_2_TYPE
 * raw_url: confirmListUsingGET_2_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param receiptId - 收款单号|合同号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 */
export const confirmListUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptId'] !== undefined) {
    queryParameters['receiptId'] = parameters['receiptId']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
export const confirmListUsingGET_2_RAW_URL = function() {
  return '/finance/bill/receipt/confirm/list'
}
export const confirmListUsingGET_2_TYPE = function() {
  return 'get'
}
export const confirmListUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/confirm/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptId'] !== undefined) {
    queryParameters['receiptId'] = parameters['receiptId']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
 * 逻辑删除
 * request: delUsingDELETE_2
 * url: delUsingDELETE_2URL
 * method: delUsingDELETE_2_TYPE
 * raw_url: delUsingDELETE_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const delUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/del/{id}'
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
export const delUsingDELETE_2_RAW_URL = function() {
  return '/finance/bill/receipt/del/{id}'
}
export const delUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const delUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/del/{id}'
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
 * 收款管理列表
 * request: manageListUsingGET_2
 * url: manageListUsingGET_2URL
 * method: manageListUsingGET_2_TYPE
 * raw_url: manageListUsingGET_2_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param receiptId - 收款单号|合同号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 */
export const manageListUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/manage/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptId'] !== undefined) {
    queryParameters['receiptId'] = parameters['receiptId']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
export const manageListUsingGET_2_RAW_URL = function() {
  return '/finance/bill/receipt/manage/list'
}
export const manageListUsingGET_2_TYPE = function() {
  return 'get'
}
export const manageListUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/manage/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptId'] !== undefined) {
    queryParameters['receiptId'] = parameters['receiptId']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
 * 部分收取生成收款单接口
 * request: manyOffSaveUsingPOST
 * url: manyOffSaveUsingPOSTURL
 * method: manyOffSaveUsingPOST_TYPE
 * raw_url: manyOffSaveUsingPOST_RAW_URL
 * @param token - token
 * @param paramList - 收款信息主体
 */
export const manyOffSaveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/manyoff/save'
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
export const manyOffSaveUsingPOST_RAW_URL = function() {
  return '/finance/bill/receipt/manyoff/save'
}
export const manyOffSaveUsingPOST_TYPE = function() {
  return 'post'
}
export const manyOffSaveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/manyoff/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 一次性收取生成收款单接口
 * request: oneOffSaveUsingPOST
 * url: oneOffSaveUsingPOSTURL
 * method: oneOffSaveUsingPOST_TYPE
 * raw_url: oneOffSaveUsingPOST_RAW_URL
 * @param token - token
 * @param param - 收款信息主体
 */
export const oneOffSaveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/oneoff/save'
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
export const oneOffSaveUsingPOST_RAW_URL = function() {
  return '/finance/bill/receipt/oneoff/save'
}
export const oneOffSaveUsingPOST_TYPE = function() {
  return 'post'
}
export const oneOffSaveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/oneoff/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据结算单Id查询结算单详情
 * request: queryCostUsingGET
 * url: queryCostUsingGETURL
 * method: queryCostUsingGET_TYPE
 * raw_url: queryCostUsingGET_RAW_URL
 * @param token - token
 * @param id - 结算单Id
 * @param flag - 标识
 */
export const queryCostUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/querycost/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['flag'] !== undefined) {
    queryParameters['flag'] = parameters['flag']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const queryCostUsingGET_RAW_URL = function() {
  return '/finance/bill/receipt/querycost/{id}'
}
export const queryCostUsingGET_TYPE = function() {
  return 'get'
}
export const queryCostUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/querycost/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['flag'] !== undefined) {
    queryParameters['flag'] = parameters['flag']
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
 * 查询预存款余额
 * request: amountReceivedAllUsingPOST
 * url: amountReceivedAllUsingPOSTURL
 * method: amountReceivedAllUsingPOST_TYPE
 * raw_url: amountReceivedAllUsingPOST_RAW_URL
 * @param token - token
 * @param param - 收款管理查询预存款余额参数
 */
export const amountReceivedAllUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/querypayment'
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
export const amountReceivedAllUsingPOST_RAW_URL = function() {
  return '/finance/bill/receipt/querypayment'
}
export const amountReceivedAllUsingPOST_TYPE = function() {
  return 'post'
}
export const amountReceivedAllUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/querypayment'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID获取收款单详情
 * request: byIdUsingGET
 * url: byIdUsingGETURL
 * method: byIdUsingGET_TYPE
 * raw_url: byIdUsingGET_RAW_URL
 * @param token - token
 * @param id - 收款单Id
 */
export const byIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/receipt/querysingleinfo/{id}'
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
  return '/finance/bill/receipt/querysingleinfo/{id}'
}
export const byIdUsingGET_TYPE = function() {
  return 'get'
}
export const byIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/receipt/querysingleinfo/{id}'
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
 * 数据处理任务
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param status - 状态
 */
export const listUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/task/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
export const listUsingGET_2_RAW_URL = function() {
  return '/finance/bill/task/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/task/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
 * 处理结果
 * request: resultUsingGET
 * url: resultUsingGETURL
 * method: resultUsingGET_TYPE
 * raw_url: resultUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 结算单任务主键
 */
export const resultUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/task/result/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
export const resultUsingGET_RAW_URL = function() {
  return '/finance/bill/task/result/{id}'
}
export const resultUsingGET_TYPE = function() {
  return 'get'
}
export const resultUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/task/result/{id}'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
 * 结算单详情
 * request: detailUsingGET_1
 * url: detailUsingGET_1URL
 * method: detailUsingGET_1_TYPE
 * raw_url: detailUsingGET_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const detailUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/bill/{id}'
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
  return '/finance/bill/{id}'
}
export const detailUsingGET_1_TYPE = function() {
  return 'get'
}
export const detailUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/bill/{id}'
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
 * 生成提交请求用的token
 * request: produceTokenUsingGET
 * url: produceTokenUsingGETURL
 * method: produceTokenUsingGET_TYPE
 * raw_url: produceTokenUsingGET_RAW_URL
 * @param token - token
 */
export const produceTokenUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/common/produce/token'
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
export const produceTokenUsingGET_RAW_URL = function() {
  return '/finance/common/produce/token'
}
export const produceTokenUsingGET_TYPE = function() {
  return 'get'
}
export const produceTokenUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/common/produce/token'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据合同号查询保证金信息
 * request: bondUsingGET
 * url: bondUsingGETURL
 * method: bondUsingGET_TYPE
 * raw_url: bondUsingGET_RAW_URL
 * @param token - token
 * @param contractCode - 合同主键id
 */
export const bondUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/bond/{contractCode}'
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
export const bondUsingGET_RAW_URL = function() {
  return '/finance/contractbond/bond/{contractCode}'
}
export const bondUsingGET_TYPE = function() {
  return 'get'
}
export const bondUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/bond/{contractCode}'
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
 * 根据合同id，阶段查询保证金信息
 * request: bondinfoUsingGET
 * url: bondinfoUsingGETURL
 * method: bondinfoUsingGET_TYPE
 * raw_url: bondinfoUsingGET_RAW_URL
 * @param token - token
 * @param contractId - 合同主键id
 * @param stage - 阶段
 */
export const bondinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/bondinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
  if (parameters['stage'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: stage'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const bondinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/bondinfo'
}
export const bondinfoUsingGET_TYPE = function() {
  return 'get'
}
export const bondinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/bondinfo'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
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
 * 保证金归还/罚没
 * request: givebackUsingPOST
 * url: givebackUsingPOSTURL
 * method: givebackUsingPOST_TYPE
 * raw_url: givebackUsingPOST_RAW_URL
 * @param token - token
 * @param request - request
 */
export const givebackUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/giveback'
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
export const givebackUsingPOST_RAW_URL = function() {
  return '/finance/contractbond/giveback'
}
export const givebackUsingPOST_TYPE = function() {
  return 'post'
}
export const givebackUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/giveback'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同保证金
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param shopId - 店铺id
 * @param stage - 阶段：0意向 1正式合同
 */
export const listUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_3_RAW_URL = function() {
  return '/finance/contractbond/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
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
 * 保证金处理取消
 * request: cancelsUsingPUT
 * url: cancelsUsingPUTURL
 * method: cancelsUsingPUT_TYPE
 * raw_url: cancelsUsingPUT_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelsUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/cancels/{id}'
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
export const cancelsUsingPUT_RAW_URL = function() {
  return '/finance/contractbond/operaterecord/cancels/{id}'
}
export const cancelsUsingPUT_TYPE = function() {
  return 'put'
}
export const cancelsUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/cancels/{id}'
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
 * 保证金处理确认列表
 * request: confirmlistUsingGET
 * url: confirmlistUsingGETURL
 * method: confirmlistUsingGET_TYPE
 * raw_url: confirmlistUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param dealNumber - 处理单号
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param shopId - 店铺id
 * @param status - 状态：0新增 1已确认 2取消
 */
export const confirmlistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/confirmlist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const confirmlistUsingGET_RAW_URL = function() {
  return '/finance/contractbond/operaterecord/confirmlist'
}
export const confirmlistUsingGET_TYPE = function() {
  return 'get'
}
export const confirmlistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/confirmlist'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金处理确认
 * request: confirmsUsingPOST
 * url: confirmsUsingPOSTURL
 * method: confirmsUsingPOST_TYPE
 * raw_url: confirmsUsingPOST_RAW_URL
 * @param token - token
 * @param ids - 主键数组
 */
export const confirmsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/confirms'
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
export const confirmsUsingPOST_RAW_URL = function() {
  return '/finance/contractbond/operaterecord/confirms'
}
export const confirmsUsingPOST_TYPE = function() {
  return 'post'
}
export const confirmsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/confirms'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据id编辑回显
 * request: detailUsingGET_2
 * url: detailUsingGET_2URL
 * method: detailUsingGET_2_TYPE
 * raw_url: detailUsingGET_2_RAW_URL
 * @param token - token
 * @param id - 处理记录id
 */
export const detailUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/detail'
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
export const detailUsingGET_2_RAW_URL = function() {
  return '/finance/contractbond/operaterecord/detail'
}
export const detailUsingGET_2_TYPE = function() {
  return 'get'
}
export const detailUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/detail'
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
 * 保证金处理列表
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param dealNumber - 处理单号
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param shopId - 店铺id
 * @param status - 状态：0新增 1已确认 2取消
 */
export const listUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_4_RAW_URL = function() {
  return '/finance/contractbond/operaterecord/list'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金处理编辑
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param token - token
 * @param request - request
 */
export const updateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/update'
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
  return '/finance/contractbond/operaterecord/update'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金处理删除
 * request: deleteUsingDELETE
 * url: deleteUsingDELETEURL
 * method: deleteUsingDELETE_TYPE
 * raw_url: deleteUsingDELETE_RAW_URL
 * @param token - token
 * @param id - 罚没记录id
 */
export const deleteUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/operaterecord/{id}'
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
  return '/finance/contractbond/operaterecord/{id}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/operaterecord/{id}'
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
 * 保证金收取取消
 * request: cancelsUsingPUT_1
 * url: cancelsUsingPUT_1URL
 * method: cancelsUsingPUT_1_TYPE
 * raw_url: cancelsUsingPUT_1_RAW_URL
 * @param token - token
 * @param receiptNumber - 收款单号
 */
export const cancelsUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/cancels/{receiptNumber}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{receiptNumber}', `${parameters['receiptNumber']}`)
  if (parameters['receiptNumber'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receiptNumber'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const cancelsUsingPUT_1_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/cancels/{receiptNumber}'
}
export const cancelsUsingPUT_1_TYPE = function() {
  return 'put'
}
export const cancelsUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/cancels/{receiptNumber}'
  path = path.replace('{receiptNumber}', `${parameters['receiptNumber']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金收取确认
 * request: confirmsUsingPOST_1
 * url: confirmsUsingPOST_1URL
 * method: confirmsUsingPOST_1_TYPE
 * raw_url: confirmsUsingPOST_1_RAW_URL
 * @param token - token
 * @param receiptNumbers - 收款单号数组
 */
export const confirmsUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/confirms'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['receiptNumbers'] !== undefined) {
    body = parameters['receiptNumbers']
  }
  if (parameters['receiptNumbers'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receiptNumbers'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmsUsingPOST_1_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/confirms'
}
export const confirmsUsingPOST_1_TYPE = function() {
  return 'post'
}
export const confirmsUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/confirms'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金/诚意金收取审核列表
 * request: confirmslistUsingGET
 * url: confirmslistUsingGETURL
 * method: confirmslistUsingGET_TYPE
 * raw_url: confirmslistUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编号
 * @param shopName - 店铺名称
 * @param merchantId - 商鋪id
 * @param shopId - 店铺id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 * @param  - 
 */
export const confirmslistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/confirmslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const confirmslistUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/confirmslist'
}
export const confirmslistUsingGET_TYPE = function() {
  return 'get'
}
export const confirmslistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/confirmslist'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 列表页面合同信息下拉框
 * request: coninfoUsingGET
 * url: coninfoUsingGETURL
 * method: coninfoUsingGET_TYPE
 * raw_url: coninfoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param merchantId - 商户id
 */
export const coninfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/coninfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
export const coninfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/coninfo'
}
export const coninfoUsingGET_TYPE = function() {
  return 'get'
}
export const coninfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/coninfo'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
 * 收取页面合同信息下拉框
 * request: contractinfoUsingGET
 * url: contractinfoUsingGETURL
 * method: contractinfoUsingGET_TYPE
 * raw_url: contractinfoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param stage - 阶段
 * @param merchantId - 商户id
 */
export const contractinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/contractinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
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
export const contractinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/contractinfo'
}
export const contractinfoUsingGET_TYPE = function() {
  return 'get'
}
export const contractinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/contractinfo'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
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
 * 保证金/诚意金收取详情
 * request: detailUsingGET_3
 * url: detailUsingGET_3URL
 * method: detailUsingGET_3_TYPE
 * raw_url: detailUsingGET_3_RAW_URL
 * @param token - token
 * @param receiptNumber - 收款单号
 * @param  - 
 */
export const detailUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/detail'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
  }
  if (parameters['receiptNumber'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receiptNumber'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailUsingGET_3_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/detail'
}
export const detailUsingGET_3_TYPE = function() {
  return 'get'
}
export const detailUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/detail'
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
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
 * 诚意金/保证金收取金额
 * request: infoUsingGET
 * url: infoUsingGETURL
 * method: infoUsingGET_TYPE
 * raw_url: infoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param stage - 阶段：0意向1正式合同
 * @param merchantId - 商鋪id
 * @param shopId - 店铺id
 * @param contractCode - 合同编号
 */
export const infoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/info'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
  if (parameters['stage'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: stage'))
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantId'))
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
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
  return request('get', domain + path, body, queryParameters, form, config)
}
export const infoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/info'
}
export const infoUsingGET_TYPE = function() {
  return 'get'
}
export const infoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/info'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金/诚意金收取页列表
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编号
 * @param shopName - 店铺名称
 * @param merchantId - 商鋪id
 * @param shopId - 店铺id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 * @param  - 
 */
export const listUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const listUsingGET_5_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 收取页面商户信息下拉框
 * request: merchantinfoUsingGET
 * url: merchantinfoUsingGETURL
 * method: merchantinfoUsingGET_TYPE
 * raw_url: merchantinfoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param stage - 阶段
 * @param merchantId - 商户id
 */
export const merchantinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/merchantinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
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
export const merchantinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/merchantinfo'
}
export const merchantinfoUsingGET_TYPE = function() {
  return 'get'
}
export const merchantinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/merchantinfo'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['stage'] !== undefined) {
    queryParameters['stage'] = parameters['stage']
  }
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
 * 列表页面商户信息下拉框
 * request: merinfoUsingGET
 * url: merinfoUsingGETURL
 * method: merinfoUsingGET_TYPE
 * raw_url: merinfoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param merchantId - 商户id
 */
export const merinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/merinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
export const merinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/merinfo'
}
export const merinfoUsingGET_TYPE = function() {
  return 'get'
}
export const merinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/merinfo'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
 * 保证金/诚意金收款提交
 * request: submitsUsingPOST
 * url: submitsUsingPOSTURL
 * method: submitsUsingPOST_TYPE
 * raw_url: submitsUsingPOST_RAW_URL
 * @param token - token
 * @param request - request
 */
export const submitsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/submits'
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
export const submitsUsingPOST_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/submits'
}
export const submitsUsingPOST_TYPE = function() {
  return 'post'
}
export const submitsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/submits'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金收取列表中的编辑
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param token - token
 * @param request - request
 */
export const updateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/update'
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
  return '/finance/contractbond/receiverecord/update'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 保证金收取列表中的删除
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param token - token
 * @param receiptNumber - 收款单号
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/{receiptNumber}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{receiptNumber}', `${parameters['receiptNumber']}`)
  if (parameters['receiptNumber'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receiptNumber'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_1_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/{receiptNumber}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/{receiptNumber}'
  path = path.replace('{receiptNumber}', `${parameters['receiptNumber']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同保证金页面商户下拉
 * request: shopinfoUsingGET
 * url: shopinfoUsingGETURL
 * method: shopinfoUsingGET_TYPE
 * raw_url: shopinfoUsingGET_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param merchantId - 商户id
 */
export const shopinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/shopinfo'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
export const shopinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/shopinfo'
}
export const shopinfoUsingGET_TYPE = function() {
  return 'get'
}
export const shopinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/shopinfo'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
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
 * 合同费用项目添加
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param token - token
 * @param request - request
 */
export const addUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/add'
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
export const addUsingPOST_1_RAW_URL = function() {
  return '/finance/cost/item/add'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 项目税率应用修改
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param token - token
 * @param param - param
 */
export const updateUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/'
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
export const updateUsingPUT_2_RAW_URL = function() {
  return '/finance/cost/item/apply/'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 项目税率应用添加
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param token - token
 * @param request - request
 */
export const addUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/add'
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
  return '/finance/cost/item/apply/add'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 项目税率应用列表
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costItemCode - ID
 */
export const listUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costItemCode'] !== undefined) {
    queryParameters['costItemCode'] = parameters['costItemCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_6_RAW_URL = function() {
  return '/finance/cost/item/apply/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costItemCode'] !== undefined) {
    queryParameters['costItemCode'] = parameters['costItemCode']
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
 * 根据ID查询项目税率应用
 * request: selectByIdUsingGET
 * url: selectByIdUsingGETURL
 * method: selectByIdUsingGET_TYPE
 * raw_url: selectByIdUsingGET_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const selectByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/{id}'
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
  return '/finance/cost/item/apply/{id}'
}
export const selectByIdUsingGET_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/{id}'
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
 * 项目税率应用删除
 * request: updateUsingDELETE
 * url: updateUsingDELETEURL
 * method: updateUsingDELETE_TYPE
 * raw_url: updateUsingDELETE_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const updateUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/{id}'
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
  return '/finance/cost/item/apply/{id}'
}
export const updateUsingDELETE_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/{id}'
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
 * 根据合同的物业性质和结算组别的ID查询对应的费用项目
 * request: getIrregularCostItemUsingGET
 * url: getIrregularCostItemUsingGETURL
 * method: getIrregularCostItemUsingGET_TYPE
 * raw_url: getIrregularCostItemUsingGET_RAW_URL
 * @param token - token
 * @param contractId - contractId
 * @param settleGroupId - settleGroupId
 */
export const getIrregularCostItemUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/costItem'
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
export const getIrregularCostItemUsingGET_RAW_URL = function() {
  return '/finance/cost/item/costItem'
}
export const getIrregularCostItemUsingGET_TYPE = function() {
  return 'get'
}
export const getIrregularCostItemUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/costItem'
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
 * 根据多个ID查询合同费用项目
 * request: selectByIdsUsingPOST
 * url: selectByIdsUsingPOSTURL
 * method: selectByIdsUsingPOST_TYPE
 * raw_url: selectByIdsUsingPOST_RAW_URL
 * @param token - token
 * @param ids - 主键
 */
export const selectByIdsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/ids'
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
export const selectByIdsUsingPOST_RAW_URL = function() {
  return '/finance/cost/item/ids'
}
export const selectByIdsUsingPOST_TYPE = function() {
  return 'post'
}
export const selectByIdsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/ids'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同费用项目列表
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costItemCodeOrName - 费用编码/名称
 * @param settleGroupId - 结算组别
 * @param costType - 费用类型
 * @param propertyType - 物业性质
 */
export const listUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costItemCodeOrName'] !== undefined) {
    queryParameters['costItemCodeOrName'] = parameters['costItemCodeOrName']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['costType'] !== undefined) {
    queryParameters['costType'] = parameters['costType']
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
export const listUsingGET_7_RAW_URL = function() {
  return '/finance/cost/item/list'
}
export const listUsingGET_7_TYPE = function() {
  return 'get'
}
export const listUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costItemCodeOrName'] !== undefined) {
    queryParameters['costItemCodeOrName'] = parameters['costItemCodeOrName']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['costType'] !== undefined) {
    queryParameters['costType'] = parameters['costType']
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
 * 查询下拉列表基础数据
 * request: optionUsingGET
 * url: optionUsingGETURL
 * method: optionUsingGET_TYPE
 * raw_url: optionUsingGET_RAW_URL
 * @param token - token
 */
export const optionUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/option'
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
  return '/finance/cost/item/option'
}
export const optionUsingGET_TYPE = function() {
  return 'get'
}
export const optionUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据费用类型查询合同费用项目
 * request: selectByCostTypeUsingGET
 * url: selectByCostTypeUsingGETURL
 * method: selectByCostTypeUsingGET_TYPE
 * raw_url: selectByCostTypeUsingGET_RAW_URL
 * @param token - token
 * @param costType - 费用类型
 * @param propertyType - propertyType
 */
export const selectByCostTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/type/{costType}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{costType}', `${parameters['costType']}`)
  if (parameters['costType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costType'))
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
export const selectByCostTypeUsingGET_RAW_URL = function() {
  return '/finance/cost/item/type/{costType}'
}
export const selectByCostTypeUsingGET_TYPE = function() {
  return 'get'
}
export const selectByCostTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/type/{costType}'
  path = path.replace('{costType}', `${parameters['costType']}`)
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
 * 根据ID查询合同费用项目
 * request: selectByIdUsingGET_1
 * url: selectByIdUsingGET_1URL
 * method: selectByIdUsingGET_1_TYPE
 * raw_url: selectByIdUsingGET_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const selectByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/{id}'
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
  return '/finance/cost/item/{id}'
}
export const selectByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/{id}'
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
 * 合同费用项目修改
 * request: updateUsingPUT_3
 * url: updateUsingPUT_3URL
 * method: updateUsingPUT_3_TYPE
 * raw_url: updateUsingPUT_3_RAW_URL
 * @param token - token
 * @param id - 主键
 * @param param - param
 */
export const updateUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/{id}'
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
export const updateUsingPUT_3_RAW_URL = function() {
  return '/finance/cost/item/{id}'
}
export const updateUsingPUT_3_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/{id}'
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
 * 合同费用项目删除
 * request: updateUsingDELETE_1
 * url: updateUsingDELETE_1URL
 * method: updateUsingDELETE_1_TYPE
 * raw_url: updateUsingDELETE_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const updateUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/{id}'
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
  return '/finance/cost/item/{id}'
}
export const updateUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/{id}'
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
 * 取消
 * request: cancelUsingPUT_4
 * url: cancelUsingPUT_4URL
 * method: cancelUsingPUT_4_TYPE
 * raw_url: cancelUsingPUT_4_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/cancel/{id}'
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
export const cancelUsingPUT_4_RAW_URL = function() {
  return '/finance/irregular/cost/cancel/{id}'
}
export const cancelUsingPUT_4_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/cancel/{id}'
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
 * 确定
 * request: confirmUsingPOST_4
 * url: confirmUsingPOST_4URL
 * method: confirmUsingPOST_4_TYPE
 * raw_url: confirmUsingPOST_4_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const confirmUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_4_RAW_URL = function() {
  return '/finance/irregular/cost/confirm'
}
export const confirmUsingPOST_4_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/confirm'
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
 * request: delUsingPOST_2
 * url: delUsingPOST_2URL
 * method: delUsingPOST_2_TYPE
 * raw_url: delUsingPOST_2_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const delUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const delUsingPOST_2_RAW_URL = function() {
  return '/finance/irregular/cost/del'
}
export const delUsingPOST_2_TYPE = function() {
  return 'post'
}
export const delUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/del'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 不规则费用管理列表详情
 * request: detailUsingGET_4
 * url: detailUsingGET_4URL
 * method: detailUsingGET_4_TYPE
 * raw_url: detailUsingGET_4_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const detailUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/detail/{id}'
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
  return '/finance/irregular/cost/detail/{id}'
}
export const detailUsingGET_4_TYPE = function() {
  return 'get'
}
export const detailUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/detail/{id}'
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
 * 列表获取总计金额数
 * request: getToteUsingGET
 * url: getToteUsingGETURL
 * method: getToteUsingGET_TYPE
 * raw_url: getToteUsingGET_RAW_URL
 * @param token - token
 * @param statuses - 状态列表
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param adjustType - 费用调整类型
 * @param tradeDateFrom - 开始时间
 * @param tradeDateTo - 结束时间
 * @param  - 
 */
export const getToteUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/getTote'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getToteUsingGET_RAW_URL = function() {
  return '/finance/irregular/cost/getTote'
}
export const getToteUsingGET_TYPE = function() {
  return 'get'
}
export const getToteUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/getTote'
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
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
 * 不规则费导入
 * request: importExcelUsingPOST
 * url: importExcelUsingPOSTURL
 * method: importExcelUsingPOST_TYPE
 * raw_url: importExcelUsingPOST_RAW_URL
 * @param token - token
 * @param file - file
 */
export const importExcelUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/import'
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
export const importExcelUsingPOST_RAW_URL = function() {
  return '/finance/irregular/cost/import'
}
export const importExcelUsingPOST_TYPE = function() {
  return 'post'
}
export const importExcelUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/import'
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
 * request: delUsingDELETE_3
 * url: delUsingDELETE_3URL
 * method: delUsingDELETE_3_TYPE
 * raw_url: delUsingDELETE_3_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const delUsingDELETE_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/item/del/{id}'
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
export const delUsingDELETE_3_RAW_URL = function() {
  return '/finance/irregular/cost/item/del/{id}'
}
export const delUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const delUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/item/del/{id}'
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
 * 查询列表
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 主键
 * @param  - 
 */
export const listUsingGET_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/item/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
export const listUsingGET_9_RAW_URL = function() {
  return '/finance/irregular/cost/item/list'
}
export const listUsingGET_9_TYPE = function() {
  return 'get'
}
export const listUsingGET_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/item/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
 * 增加费用项
 * request: saveUsingPOST_2
 * url: saveUsingPOST_2URL
 * method: saveUsingPOST_2_TYPE
 * raw_url: saveUsingPOST_2_RAW_URL
 * @param token - token
 * @param request - request
 * @param  - 
 */
export const saveUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/item/save'
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
export const saveUsingPOST_2_RAW_URL = function() {
  return '/finance/irregular/cost/item/save'
}
export const saveUsingPOST_2_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/item/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新
 * request: updateUsingPOST_1
 * url: updateUsingPOST_1URL
 * method: updateUsingPOST_1_TYPE
 * raw_url: updateUsingPOST_1_RAW_URL
 * @param token - token
 * @param param - param
 * @param  - 
 */
export const updateUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/item/update/'
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
export const updateUsingPOST_1_RAW_URL = function() {
  return '/finance/irregular/cost/item/update/'
}
export const updateUsingPOST_1_TYPE = function() {
  return 'post'
}
export const updateUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/item/update/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取详情
 * request: getByIdUsingGET_1
 * url: getByIdUsingGET_1URL
 * method: getByIdUsingGET_1_TYPE
 * raw_url: getByIdUsingGET_1_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const getByIdUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/item/{id}'
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
  return '/finance/irregular/cost/item/{id}'
}
export const getByIdUsingGET_1_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/item/{id}'
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
 * 查询不规则费用管理、不规则费用确认列表
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param token - token
 * @param statuses - 状态列表
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param adjustType - 费用调整类型
 * @param tradeDateFrom - 开始时间
 * @param tradeDateTo - 结束时间
 * @param  - 
 */
export const listUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/irregular/cost/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_8_RAW_URL = function() {
  return '/finance/irregular/cost/list'
}
export const listUsingGET_8_TYPE = function() {
  return 'get'
}
export const listUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/irregular/cost/list'
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
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
 * 商户预付款列表
 * request: listUsingGET_10
 * url: listUsingGET_10URL
 * method: listUsingGET_10_TYPE
 * raw_url: listUsingGET_10_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantId - 商户id
 * @param contractCode - 合同编号
 */
export const listUsingGET_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_10_RAW_URL = function() {
  return '/finance/prepayment/list'
}
export const listUsingGET_10_TYPE = function() {
  return 'get'
}
export const listUsingGET_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 预付款处理取消
 * request: cancelsUsingPUT_2
 * url: cancelsUsingPUT_2URL
 * method: cancelsUsingPUT_2_TYPE
 * raw_url: cancelsUsingPUT_2_RAW_URL
 * @param token - token
 * @param id - 罚没记录id
 */
export const cancelsUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/cancels/{id}'
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
export const cancelsUsingPUT_2_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/cancels/{id}'
}
export const cancelsUsingPUT_2_TYPE = function() {
  return 'put'
}
export const cancelsUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/cancels/{id}'
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
 * 预付款处理确认
 * request: confirmsUsingPOST_2
 * url: confirmsUsingPOST_2URL
 * method: confirmsUsingPOST_2_TYPE
 * raw_url: confirmsUsingPOST_2_RAW_URL
 * @param token - token
 * @param ids - 主键数组
 */
export const confirmsUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/confirms'
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
export const confirmsUsingPOST_2_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/confirms'
}
export const confirmsUsingPOST_2_TYPE = function() {
  return 'post'
}
export const confirmsUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/confirms'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 预付款处理确认列表
 * request: confirmslistUsingGET_1
 * url: confirmslistUsingGET_1URL
 * method: confirmslistUsingGET_1_TYPE
 * raw_url: confirmslistUsingGET_1_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param dealNumber - 处理单号
 * @param merchantId - 商户id
 * @param shopId - 店铺id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 */
export const confirmslistUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/confirmslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
export const confirmslistUsingGET_1_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/confirmslist'
}
export const confirmslistUsingGET_1_TYPE = function() {
  return 'get'
}
export const confirmslistUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/confirmslist'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
 * 预付款处理编辑回显
 * request: infoUsingGET_1
 * url: infoUsingGET_1URL
 * method: infoUsingGET_1_TYPE
 * raw_url: infoUsingGET_1_RAW_URL
 * @param token - token
 * @param id - 罚没记录id
 */
export const infoUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/info/{id}'
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
export const infoUsingGET_1_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/info/{id}'
}
export const infoUsingGET_1_TYPE = function() {
  return 'get'
}
export const infoUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/info/{id}'
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
 * 预付款处理列表
 * request: listUsingGET_11
 * url: listUsingGET_11URL
 * method: listUsingGET_11_TYPE
 * raw_url: listUsingGET_11_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param dealNumber - 处理单号
 * @param merchantId - 商户id
 * @param shopId - 店铺id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 */
export const listUsingGET_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
export const listUsingGET_11_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/list'
}
export const listUsingGET_11_TYPE = function() {
  return 'get'
}
export const listUsingGET_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['dealNumber'] !== undefined) {
    queryParameters['dealNumber'] = parameters['dealNumber']
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
 * 预付款处理新增
 * request: saveUsingPOST_4
 * url: saveUsingPOST_4URL
 * method: saveUsingPOST_4_TYPE
 * raw_url: saveUsingPOST_4_RAW_URL
 * @param token - token
 * @param request - request
 */
export const saveUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/save'
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
  return '/finance/prepayment/operaterecord/save'
}
export const saveUsingPOST_4_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 预付款处理编辑
 * request: updateUsingPUT_4
 * url: updateUsingPUT_4URL
 * method: updateUsingPUT_4_TYPE
 * raw_url: updateUsingPUT_4_RAW_URL
 * @param token - token
 * @param id - 处理记录id
 * @param receivedAmount - 处理金额
 * @param remark - 收款备注
 */
export const updateUsingPUT_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['receivedAmount'] !== undefined) {
    queryParameters['receivedAmount'] = parameters['receivedAmount']
  }
  if (parameters['receivedAmount'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receivedAmount'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_4_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/update'
}
export const updateUsingPUT_4_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/update'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['receivedAmount'] !== undefined) {
    queryParameters['receivedAmount'] = parameters['receivedAmount']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
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
 * 预付款处理删除
 * request: deleteUsingDELETE_2
 * url: deleteUsingDELETE_2URL
 * method: deleteUsingDELETE_2_TYPE
 * raw_url: deleteUsingDELETE_2_RAW_URL
 * @param token - token
 * @param id - 罚没记录id
 */
export const deleteUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/{id}'
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
  return '/finance/prepayment/operaterecord/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/{id}'
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
 * 预付款收已确认的可以取消操作
 * request: cancelsUsingPUT_3
 * url: cancelsUsingPUT_3URL
 * method: cancelsUsingPUT_3_TYPE
 * raw_url: cancelsUsingPUT_3_RAW_URL
 * @param token - token
 * @param id - 收取记录主键
 */
export const cancelsUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/cancels/{id}'
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
export const cancelsUsingPUT_3_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/cancels/{id}'
}
export const cancelsUsingPUT_3_TYPE = function() {
  return 'put'
}
export const cancelsUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/cancels/{id}'
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
 * 预付款收确认添加到商户预付款中
 * request: confirmsUsingPOST_3
 * url: confirmsUsingPOST_3URL
 * method: confirmsUsingPOST_3_TYPE
 * raw_url: confirmsUsingPOST_3_RAW_URL
 * @param token - token
 * @param ids - 收款记录id
 */
export const confirmsUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/confirms'
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
export const confirmsUsingPOST_3_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/confirms'
}
export const confirmsUsingPOST_3_TYPE = function() {
  return 'post'
}
export const confirmsUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/confirms'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 预付款收取审核列表
 * request: confirmslistUsingGET_2
 * url: confirmslistUsingGET_2URL
 * method: confirmslistUsingGET_2_TYPE
 * raw_url: confirmslistUsingGET_2_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param receiptNumber - 收款单号
 * @param merchantId - 商户id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 */
export const confirmslistUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/confirmslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const confirmslistUsingGET_2_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/confirmslist'
}
export const confirmslistUsingGET_2_TYPE = function() {
  return 'get'
}
export const confirmslistUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/confirmslist'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 根据id查询收款信息
 * request: detailUsingGET_5
 * url: detailUsingGET_5URL
 * method: detailUsingGET_5_TYPE
 * raw_url: detailUsingGET_5_RAW_URL
 * @param token - token
 * @param id - 记录id
 */
export const detailUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/detail'
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
export const detailUsingGET_5_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/detail'
}
export const detailUsingGET_5_TYPE = function() {
  return 'get'
}
export const detailUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/detail'
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
 * 预付款收取列表
 * request: listUsingGET_12
 * url: listUsingGET_12URL
 * method: listUsingGET_12_TYPE
 * raw_url: listUsingGET_12_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param receiptNumber - 收款单号
 * @param merchantId - 商户id
 * @param contractCode - 合同编号
 * @param status - 状态：0新增 1已确认 2取消
 */
export const listUsingGET_12 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
  return '/finance/prepayment/receiverecord/list'
}
export const listUsingGET_12_TYPE = function() {
  return 'get'
}
export const listUsingGET_12URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['receiptNumber'] !== undefined) {
    queryParameters['receiptNumber'] = parameters['receiptNumber']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 预付款收取新增
 * request: saveUsingPOST_5
 * url: saveUsingPOST_5URL
 * method: saveUsingPOST_5_TYPE
 * raw_url: saveUsingPOST_5_RAW_URL
 * @param token - token
 * @param request - request
 */
export const saveUsingPOST_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/save'
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
export const saveUsingPOST_5_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/save'
}
export const saveUsingPOST_5_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 预付款收取列表编辑
 * request: updateUsingPUT_5
 * url: updateUsingPUT_5URL
 * method: updateUsingPUT_5_TYPE
 * raw_url: updateUsingPUT_5_RAW_URL
 * @param token - token
 * @param request - request
 */
export const updateUsingPUT_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/update'
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
export const updateUsingPUT_5_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/update'
}
export const updateUsingPUT_5_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 预付款收取记录逻辑删除
 * request: deleteUsingDELETE_3
 * url: deleteUsingDELETE_3URL
 * method: deleteUsingDELETE_3_TYPE
 * raw_url: deleteUsingDELETE_3_RAW_URL
 * @param token - token
 * @param id - 收取记录主键id
 */
export const deleteUsingDELETE_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/{id}'
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
  return '/finance/prepayment/receiverecord/{id}'
}
export const deleteUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/{id}'
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
 * 预付款归还
 * request: saveUsingPOST_3
 * url: saveUsingPOST_3URL
 * method: saveUsingPOST_3_TYPE
 * raw_url: saveUsingPOST_3_RAW_URL
 * @param token - token
 * @param request - request
 */
export const saveUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/save'
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
  return '/finance/prepayment/save'
}
export const saveUsingPOST_3_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 税率设置修改
 * request: updateUsingPUT_6
 * url: updateUsingPUT_6URL
 * method: updateUsingPUT_6_TYPE
 * raw_url: updateUsingPUT_6_RAW_URL
 * @param token - token
 * @param param - param
 */
export const updateUsingPUT_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/'
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
export const updateUsingPUT_6_RAW_URL = function() {
  return '/finance/rate/'
}
export const updateUsingPUT_6_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 税率设置添加
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param token - token
 * @param request - request
 */
export const addUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/add'
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
  return '/finance/rate/add'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 税率设置列表
 * request: listUsingGET_13
 * url: listUsingGET_13URL
 * method: listUsingGET_13_TYPE
 * raw_url: listUsingGET_13_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param rateCode - 税码
 */
export const listUsingGET_13 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['rateCode'] !== undefined) {
    queryParameters['rateCode'] = parameters['rateCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_13_RAW_URL = function() {
  return '/finance/rate/list'
}
export const listUsingGET_13_TYPE = function() {
  return 'get'
}
export const listUsingGET_13URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['rateCode'] !== undefined) {
    queryParameters['rateCode'] = parameters['rateCode']
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
 * 查询当前可用税率列表
 * request: listAllUsingGET
 * url: listAllUsingGETURL
 * method: listAllUsingGET_TYPE
 * raw_url: listAllUsingGET_RAW_URL
 * @param token - token
 */
export const listAllUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/list/all'
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
export const listAllUsingGET_RAW_URL = function() {
  return '/finance/rate/list/all'
}
export const listAllUsingGET_TYPE = function() {
  return 'get'
}
export const listAllUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/list/all'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询税率设置
 * request: selectByIdUsingGET_2
 * url: selectByIdUsingGET_2URL
 * method: selectByIdUsingGET_2_TYPE
 * raw_url: selectByIdUsingGET_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const selectByIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/{id}'
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
  return '/finance/rate/{id}'
}
export const selectByIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/{id}'
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
 * 税率设置删除
 * request: deleteUsingDELETE_4
 * url: deleteUsingDELETE_4URL
 * method: deleteUsingDELETE_4_TYPE
 * raw_url: deleteUsingDELETE_4_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const deleteUsingDELETE_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/{id}'
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
  return '/finance/rate/{id}'
}
export const deleteUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/{id}'
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
 * 收款账户修改
 * request: updateUsingPUT_7
 * url: updateUsingPUT_7URL
 * method: updateUsingPUT_7_TYPE
 * raw_url: updateUsingPUT_7_RAW_URL
 * @param token - token
 * @param param - param
 */
export const updateUsingPUT_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/'
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
export const updateUsingPUT_7_RAW_URL = function() {
  return '/finance/receive/account/'
}
export const updateUsingPUT_7_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 收款账户添加
 * request: addUsingPOST_3
 * url: addUsingPOST_3URL
 * method: addUsingPOST_3_TYPE
 * raw_url: addUsingPOST_3_RAW_URL
 * @param token - token
 * @param request - request
 */
export const addUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/add'
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
  return '/finance/receive/account/add'
}
export const addUsingPOST_3_TYPE = function() {
  return 'post'
}
export const addUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 收款账户列表
 * request: listUsingGET_14
 * url: listUsingGET_14URL
 * method: listUsingGET_14_TYPE
 * raw_url: listUsingGET_14_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param openingBank - 开户行
 */
export const listUsingGET_14 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['openingBank'] !== undefined) {
    queryParameters['openingBank'] = parameters['openingBank']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_14_RAW_URL = function() {
  return '/finance/receive/account/list'
}
export const listUsingGET_14_TYPE = function() {
  return 'get'
}
export const listUsingGET_14URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['openingBank'] !== undefined) {
    queryParameters['openingBank'] = parameters['openingBank']
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
 * 根据ID查询收款账户
 * request: selectByIdUsingGET_3
 * url: selectByIdUsingGET_3URL
 * method: selectByIdUsingGET_3_TYPE
 * raw_url: selectByIdUsingGET_3_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const selectByIdUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/{id}'
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
  return '/finance/receive/account/{id}'
}
export const selectByIdUsingGET_3_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/{id}'
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
 * 收款账户删除
 * request: updateUsingDELETE_2
 * url: updateUsingDELETE_2URL
 * method: updateUsingDELETE_2_TYPE
 * raw_url: updateUsingDELETE_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const updateUsingDELETE_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/{id}'
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
export const updateUsingDELETE_2_RAW_URL = function() {
  return '/finance/receive/account/{id}'
}
export const updateUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/{id}'
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
 * 取消
 * request: cancelUsingPUT_5
 * url: cancelUsingPUT_5URL
 * method: cancelUsingPUT_5_TYPE
 * raw_url: cancelUsingPUT_5_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const cancelUsingPUT_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/cancel/{id}'
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
export const cancelUsingPUT_5_RAW_URL = function() {
  return '/finance/reduce/cost/cancel/{id}'
}
export const cancelUsingPUT_5_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/cancel/{id}'
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
 * 确定
 * request: confirmUsingPOST_5
 * url: confirmUsingPOST_5URL
 * method: confirmUsingPOST_5_TYPE
 * raw_url: confirmUsingPOST_5_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const confirmUsingPOST_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const confirmUsingPOST_5_RAW_URL = function() {
  return '/finance/reduce/cost/confirm'
}
export const confirmUsingPOST_5_TYPE = function() {
  return 'post'
}
export const confirmUsingPOST_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/confirm'
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
 * request: delUsingPOST_3
 * url: delUsingPOST_3URL
 * method: delUsingPOST_3_TYPE
 * raw_url: delUsingPOST_3_RAW_URL
 * @param token - token
 * @param id - 主键数组
 */
export const delUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    body = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const delUsingPOST_3_RAW_URL = function() {
  return '/finance/reduce/cost/del'
}
export const delUsingPOST_3_TYPE = function() {
  return 'post'
}
export const delUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/del'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 免租管理列表详情
 * request: detailUsingGET_6
 * url: detailUsingGET_6URL
 * method: detailUsingGET_6_TYPE
 * raw_url: detailUsingGET_6_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const detailUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/detail/{id}'
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
  return '/finance/reduce/cost/detail/{id}'
}
export const detailUsingGET_6_TYPE = function() {
  return 'get'
}
export const detailUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/detail/{id}'
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
 * 删除
 * request: delUsingDELETE_4
 * url: delUsingDELETE_4URL
 * method: delUsingDELETE_4_TYPE
 * raw_url: delUsingDELETE_4_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const delUsingDELETE_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/item/del/{id}'
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
export const delUsingDELETE_4_RAW_URL = function() {
  return '/finance/reduce/cost/item/del/{id}'
}
export const delUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const delUsingDELETE_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/item/del/{id}'
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
 * 查询列表
 * request: listUsingGET_16
 * url: listUsingGET_16URL
 * method: listUsingGET_16_TYPE
 * raw_url: listUsingGET_16_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 主键
 * @param  - 
 */
export const listUsingGET_16 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/item/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
export const listUsingGET_16_RAW_URL = function() {
  return '/finance/reduce/cost/item/list'
}
export const listUsingGET_16_TYPE = function() {
  return 'get'
}
export const listUsingGET_16URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/item/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
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
 * 增加费用项
 * request: saveUsingPOST_6
 * url: saveUsingPOST_6URL
 * method: saveUsingPOST_6_TYPE
 * raw_url: saveUsingPOST_6_RAW_URL
 * @param token - token
 * @param request - request
 * @param  - 
 */
export const saveUsingPOST_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/item/save'
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
export const saveUsingPOST_6_RAW_URL = function() {
  return '/finance/reduce/cost/item/save'
}
export const saveUsingPOST_6_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/item/save'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 更新
 * request: updateUsingPOST_2
 * url: updateUsingPOST_2URL
 * method: updateUsingPOST_2_TYPE
 * raw_url: updateUsingPOST_2_RAW_URL
 * @param token - token
 * @param param - param
 * @param  - 
 */
export const updateUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/item/update'
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
export const updateUsingPOST_2_RAW_URL = function() {
  return '/finance/reduce/cost/item/update'
}
export const updateUsingPOST_2_TYPE = function() {
  return 'post'
}
export const updateUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/item/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取详情
 * request: getByIdUsingGET_2
 * url: getByIdUsingGET_2URL
 * method: getByIdUsingGET_2_TYPE
 * raw_url: getByIdUsingGET_2_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const getByIdUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/item/{id}'
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
export const getByIdUsingGET_2_RAW_URL = function() {
  return '/finance/reduce/cost/item/{id}'
}
export const getByIdUsingGET_2_TYPE = function() {
  return 'get'
}
export const getByIdUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/item/{id}'
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
 * 免租管理列表、免租确认列表
 * request: listUsingGET_15
 * url: listUsingGET_15URL
 * method: listUsingGET_15_TYPE
 * raw_url: listUsingGET_15_RAW_URL
 * @param token - token
 * @param statuses - 状态列表
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param contractCode - 合同编号
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param adjustType - 费用调整类型
 * @param tradeDateFrom - 开始时间
 * @param tradeDateTo - 结束时间
 * @param  - 
 */
export const listUsingGET_15 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/reduce/cost/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_15_RAW_URL = function() {
  return '/finance/reduce/cost/list'
}
export const listUsingGET_15_TYPE = function() {
  return 'get'
}
export const listUsingGET_15URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/reduce/cost/list'
  if (parameters['statuses'] !== undefined) {
    queryParameters['statuses'] = parameters['statuses']
  }
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['costNo'] !== undefined) {
    queryParameters['costNo'] = parameters['costNo']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['adjustType'] !== undefined) {
    queryParameters['adjustType'] = parameters['adjustType']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
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
 * 结算组别修改
 * request: updateUsingPUT_8
 * url: updateUsingPUT_8URL
 * method: updateUsingPUT_8_TYPE
 * raw_url: updateUsingPUT_8_RAW_URL
 * @param token - token
 * @param param - param
 */
export const updateUsingPUT_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/'
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
export const updateUsingPUT_8_RAW_URL = function() {
  return '/finance/settle/group/'
}
export const updateUsingPUT_8_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算组别添加
 * request: addUsingPOST_4
 * url: addUsingPOST_4URL
 * method: addUsingPOST_4_TYPE
 * raw_url: addUsingPOST_4_RAW_URL
 * @param token - token
 * @param request - request
 */
export const addUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/add'
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
  return '/finance/settle/group/add'
}
export const addUsingPOST_4_TYPE = function() {
  return 'post'
}
export const addUsingPOST_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/add'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有结算组别
 * request: listAllUsingGET_1
 * url: listAllUsingGET_1URL
 * method: listAllUsingGET_1_TYPE
 * raw_url: listAllUsingGET_1_RAW_URL
 * @param token - token
 */
export const listAllUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/all/list'
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
export const listAllUsingGET_1_RAW_URL = function() {
  return '/finance/settle/group/all/list'
}
export const listAllUsingGET_1_TYPE = function() {
  return 'get'
}
export const listAllUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/all/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算组别启用/禁用
 * request: updateDisableUsingPUT
 * url: updateDisableUsingPUTURL
 * method: updateDisableUsingPUT_TYPE
 * raw_url: updateDisableUsingPUT_RAW_URL
 * @param token - token
 * @param request - request
 */
export const updateDisableUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/disable'
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
export const updateDisableUsingPUT_RAW_URL = function() {
  return '/finance/settle/group/disable'
}
export const updateDisableUsingPUT_TYPE = function() {
  return 'put'
}
export const updateDisableUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/disable'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据多个ID查询结算组别
 * request: selectByIdsUsingPOST_1
 * url: selectByIdsUsingPOST_1URL
 * method: selectByIdsUsingPOST_1_TYPE
 * raw_url: selectByIdsUsingPOST_1_RAW_URL
 * @param token - token
 * @param ids - 主键
 */
export const selectByIdsUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/ids'
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
export const selectByIdsUsingPOST_1_RAW_URL = function() {
  return '/finance/settle/group/ids'
}
export const selectByIdsUsingPOST_1_TYPE = function() {
  return 'post'
}
export const selectByIdsUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/ids'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算组别列表（分页）
 * request: listUsingGET_17
 * url: listUsingGET_17URL
 * method: listUsingGET_17_TYPE
 * raw_url: listUsingGET_17_RAW_URL
 * @param token - token
 * @param marketId - 购物中心id
 * @param blocId - 集团id
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param settleGroupName - 名称
 */
export const listUsingGET_17 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleGroupName'] !== undefined) {
    queryParameters['settleGroupName'] = parameters['settleGroupName']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_17_RAW_URL = function() {
  return '/finance/settle/group/list'
}
export const listUsingGET_17_TYPE = function() {
  return 'get'
}
export const listUsingGET_17URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/list'
  if (parameters['marketId'] !== undefined) {
    queryParameters['marketId'] = parameters['marketId']
  }
  if (parameters['blocId'] !== undefined) {
    queryParameters['blocId'] = parameters['blocId']
  }
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['settleGroupName'] !== undefined) {
    queryParameters['settleGroupName'] = parameters['settleGroupName']
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
 * 根据物业性质查询结算组别
 * request: selectGroupsUsingGET
 * url: selectGroupsUsingGETURL
 * method: selectGroupsUsingGET_TYPE
 * raw_url: selectGroupsUsingGET_RAW_URL
 * @param token - token
 * @param propertyTypeId - 主键
 */
export const selectGroupsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/list/{propertyTypeId}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{propertyTypeId}', `${parameters['propertyTypeId']}`)
  if (parameters['propertyTypeId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: propertyTypeId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const selectGroupsUsingGET_RAW_URL = function() {
  return '/finance/settle/group/list/{propertyTypeId}'
}
export const selectGroupsUsingGET_TYPE = function() {
  return 'get'
}
export const selectGroupsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/list/{propertyTypeId}'
  path = path.replace('{propertyTypeId}', `${parameters['propertyTypeId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 结算组别选项
 * request: optionUsingGET_1
 * url: optionUsingGET_1URL
 * method: optionUsingGET_1_TYPE
 * raw_url: optionUsingGET_1_RAW_URL
 * @param token - token
 */
export const optionUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/option'
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
export const optionUsingGET_1_RAW_URL = function() {
  return '/finance/settle/group/option'
}
export const optionUsingGET_1_TYPE = function() {
  return 'get'
}
export const optionUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/option'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询所有物业性质下结算组别
 * request: selectGroupListUsingGET
 * url: selectGroupListUsingGETURL
 * method: selectGroupListUsingGET_TYPE
 * raw_url: selectGroupListUsingGET_RAW_URL
 * @param token - token
 */
export const selectGroupListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/property/list'
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
export const selectGroupListUsingGET_RAW_URL = function() {
  return '/finance/settle/group/property/list'
}
export const selectGroupListUsingGET_TYPE = function() {
  return 'get'
}
export const selectGroupListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/property/list'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据ID查询结算组别
 * request: selectByIdUsingGET_4
 * url: selectByIdUsingGET_4URL
 * method: selectByIdUsingGET_4_TYPE
 * raw_url: selectByIdUsingGET_4_RAW_URL
 * @param token - token
 * @param id - 主键
 */
export const selectByIdUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/{id}'
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
export const selectByIdUsingGET_4_RAW_URL = function() {
  return '/finance/settle/group/{id}'
}
export const selectByIdUsingGET_4_TYPE = function() {
  return 'get'
}
export const selectByIdUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}