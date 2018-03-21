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
 * 取消
 * request: cancelUsingPUT_2
 * url: cancelUsingPUT_2URL
 * method: cancelUsingPUT_2_TYPE
 * raw_url: cancelUsingPUT_2_RAW_URL
 * @param id - 主键
 */
export const cancelUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/adjust/cancel'
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
export const cancelUsingPUT_2_RAW_URL = function() {
  return '/bill/adjust/cancel'
}
export const cancelUsingPUT_2_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/adjust/cancel'
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
 * request: confirmUsingPUT_2
 * url: confirmUsingPUT_2URL
 * method: confirmUsingPUT_2_TYPE
 * raw_url: confirmUsingPUT_2_RAW_URL
 * @param id - 主键
 */
export const confirmUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/adjust/confirm'
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
export const confirmUsingPUT_2_RAW_URL = function() {
  return '/bill/adjust/confirm'
}
export const confirmUsingPUT_2_TYPE = function() {
  return 'put'
}
export const confirmUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/adjust/confirm'
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
 * 结算单调整确认列表
 * request: confirmListUsingGET_1
 * url: confirmListUsingGET_1URL
 * method: confirmListUsingGET_1_TYPE
 * raw_url: confirmListUsingGET_1_RAW_URL
 * @param settleNo - 结算单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 * @param  - 
 */
export const confirmListUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/adjust/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
export const confirmListUsingGET_1_RAW_URL = function() {
  return '/bill/adjust/confirm/list'
}
export const confirmListUsingGET_1_TYPE = function() {
  return 'get'
}
export const confirmListUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/adjust/confirm/list'
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * 结算单调整管理列表
 * request: manageListUsingGET_1
 * url: manageListUsingGET_1URL
 * method: manageListUsingGET_1_TYPE
 * raw_url: manageListUsingGET_1_RAW_URL
 * @param settleNo - 结算单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 * @param  - 
 */
export const manageListUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/adjust/manage/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
export const manageListUsingGET_1_RAW_URL = function() {
  return '/bill/adjust/manage/list'
}
export const manageListUsingGET_1_TYPE = function() {
  return 'get'
}
export const manageListUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/adjust/manage/list'
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * 取消
 * request: cancelUsingPUT_3
 * url: cancelUsingPUT_3URL
 * method: cancelUsingPUT_3_TYPE
 * raw_url: cancelUsingPUT_3_RAW_URL
 * @param id - 主键
 */
export const cancelUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/cancel'
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
export const cancelUsingPUT_3_RAW_URL = function() {
  return '/bill/cancel'
}
export const cancelUsingPUT_3_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/cancel'
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
 * request: confirmUsingPUT_3
 * url: confirmUsingPUT_3URL
 * method: confirmUsingPUT_3_TYPE
 * raw_url: confirmUsingPUT_3_RAW_URL
 * @param id - 主键
 */
export const confirmUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/confirm'
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
export const confirmUsingPUT_3_RAW_URL = function() {
  return '/bill/confirm'
}
export const confirmUsingPUT_3_TYPE = function() {
  return 'put'
}
export const confirmUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/confirm'
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
 * 结算单确认列表
 * request: confirmListUsingGET_2
 * url: confirmListUsingGET_2URL
 * method: confirmListUsingGET_2_TYPE
 * raw_url: confirmListUsingGET_2_RAW_URL
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param settleGroupId - 结算组别主键
 * @param settleDate - 结算日
 * @param settleNo - 结算单号
 * @param  - 
 */
export const confirmListUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const confirmListUsingGET_2_RAW_URL = function() {
  return '/bill/confirm/list'
}
export const confirmListUsingGET_2_TYPE = function() {
  return 'get'
}
export const confirmListUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/confirm/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * request: createUsingPOST_1
 * url: createUsingPOST_1URL
 * method: createUsingPOST_1_TYPE
 * raw_url: createUsingPOST_1_RAW_URL
 * @param id - 主键
 */
export const createUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/create'
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
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUsingPOST_1_RAW_URL = function() {
  return '/bill/create'
}
export const createUsingPOST_1_TYPE = function() {
  return 'post'
}
export const createUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/create'
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
 * 结算单生成查询列表
 * request: createListUsingGET
 * url: createListUsingGETURL
 * method: createListUsingGET_TYPE
 * raw_url: createListUsingGET_RAW_URL
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param settleGroupId - 结算组别主键
 * @param settleDate - 结算日
 * @param settleNo - 结算单号
 * @param  - 
 */
export const createListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/create/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const createListUsingGET_RAW_URL = function() {
  return '/bill/create/list'
}
export const createListUsingGET_TYPE = function() {
  return 'get'
}
export const createListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/create/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * 创建周期
 * request: createUsingPOST
 * url: createUsingPOSTURL
 * method: createUsingPOST_TYPE
 * raw_url: createUsingPOST_RAW_URL
 * @param id - id
 */
export const createUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/cycle/create'
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
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUsingPOST_RAW_URL = function() {
  return '/bill/cycle/create'
}
export const createUsingPOST_TYPE = function() {
  return 'post'
}
export const createUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/cycle/create'
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
 * 结算单管理列表
 * request: manageListUsingGET_2
 * url: manageListUsingGET_2URL
 * method: manageListUsingGET_2_TYPE
 * raw_url: manageListUsingGET_2_RAW_URL
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param settleGroupId - 结算组别主键
 * @param settleDate - 结算日
 * @param settleNo - 结算单号
 * @param  - 
 */
export const manageListUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/manage/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const manageListUsingGET_2_RAW_URL = function() {
  return '/bill/manage/list'
}
export const manageListUsingGET_2_TYPE = function() {
  return 'get'
}
export const manageListUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/manage/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * @param id - 主键
 */
export const publishUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/publish'
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
export const publishUsingPUT_RAW_URL = function() {
  return '/bill/publish'
}
export const publishUsingPUT_TYPE = function() {
  return 'put'
}
export const publishUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/publish'
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
 * 结算单发布列表
 * request: publishListUsingGET
 * url: publishListUsingGETURL
 * method: publishListUsingGET_TYPE
 * raw_url: publishListUsingGET_RAW_URL
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param settleGroupId - 结算组别主键
 * @param settleDate - 结算日
 * @param settleNo - 结算单号
 * @param  - 
 */
export const publishListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/publish/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const publishListUsingGET_RAW_URL = function() {
  return '/bill/publish/list'
}
export const publishListUsingGET_TYPE = function() {
  return 'get'
}
export const publishListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/publish/list'
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
  }
  if (parameters['settleDate'] !== undefined) {
    queryParameters['settleDate'] = parameters['settleDate']
  }
  if (parameters['settleNo'] !== undefined) {
    queryParameters['settleNo'] = parameters['settleNo']
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
 * request: cancelUsingPUT
 * url: cancelUsingPUTURL
 * method: cancelUsingPUT_TYPE
 * raw_url: cancelUsingPUT_RAW_URL
 * @param id - 主键
 */
export const cancelUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/cancel'
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
  return '/bill/receipt/cancel'
}
export const cancelUsingPUT_TYPE = function() {
  return 'put'
}
export const cancelUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/cancel'
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
 * request: confirmUsingPUT
 * url: confirmUsingPUTURL
 * method: confirmUsingPUT_TYPE
 * raw_url: confirmUsingPUT_RAW_URL
 * @param id - 主键
 */
export const confirmUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/confirm'
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
export const confirmUsingPUT_RAW_URL = function() {
  return '/bill/receipt/confirm'
}
export const confirmUsingPUT_TYPE = function() {
  return 'put'
}
export const confirmUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/confirm'
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
 * 收款确认列表
 * request: confirmListUsingGET
 * url: confirmListUsingGETURL
 * method: confirmListUsingGET_TYPE
 * raw_url: confirmListUsingGET_RAW_URL
 * @param receiptId - 收款单号|合同号|账单号|票据号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 * @param  - 
 */
export const confirmListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/confirm/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const confirmListUsingGET_RAW_URL = function() {
  return '/bill/receipt/confirm/list'
}
export const confirmListUsingGET_TYPE = function() {
  return 'get'
}
export const confirmListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/confirm/list'
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
 * 删除
 * request: delUsingPUT
 * url: delUsingPUTURL
 * method: delUsingPUT_TYPE
 * raw_url: delUsingPUT_RAW_URL
 * @param id - 主键
 */
export const delUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/del'
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
  return '/bill/receipt/del'
}
export const delUsingPUT_TYPE = function() {
  return 'put'
}
export const delUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/del'
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
 * 收款管理列表
 * request: manageListUsingGET
 * url: manageListUsingGETURL
 * method: manageListUsingGET_TYPE
 * raw_url: manageListUsingGET_RAW_URL
 * @param receiptId - 收款单号|合同号|账单号|票据号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param status - 状态
 * @param  - 
 */
export const manageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/manage/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const manageListUsingGET_RAW_URL = function() {
  return '/bill/receipt/manage/list'
}
export const manageListUsingGET_TYPE = function() {
  return 'get'
}
export const manageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/manage/list'
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
 * 编辑
 * request: saveUsingPOST
 * url: saveUsingPOSTURL
 * method: saveUsingPOST_TYPE
 * raw_url: saveUsingPOST_RAW_URL
 * @param paymentWayType - 付款类型
 * @param collectionDate - 收款日期
 * @param remark - 备注
 * @param  - 
 */
export const saveUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/receipt/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['paymentWayType'] !== undefined) {
    queryParameters['paymentWayType'] = parameters['paymentWayType']
  }
  if (parameters['paymentWayType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: paymentWayType'))
  }
  if (parameters['collectionDate'] !== undefined) {
    queryParameters['collectionDate'] = parameters['collectionDate']
  }
  if (parameters['collectionDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: collectionDate'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_RAW_URL = function() {
  return '/bill/receipt/save'
}
export const saveUsingPOST_TYPE = function() {
  return 'post'
}
export const saveUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/receipt/save'
  if (parameters['paymentWayType'] !== undefined) {
    queryParameters['paymentWayType'] = parameters['paymentWayType']
  }
  if (parameters['collectionDate'] !== undefined) {
    queryParameters['collectionDate'] = parameters['collectionDate']
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
 * 数据处理任务
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param status - status
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/task/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_RAW_URL = function() {
  return '/bill/task/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/task/list'
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
 * @param id - id
 */
export const resultUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/task/result/{id}'
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
export const resultUsingGET_RAW_URL = function() {
  return '/bill/task/result/{id}'
}
export const resultUsingGET_TYPE = function() {
  return 'get'
}
export const resultUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/task/result/{id}'
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
 * 结算单详情
 * request: detailUsingGET
 * url: detailUsingGETURL
 * method: detailUsingGET_TYPE
 * raw_url: detailUsingGET_RAW_URL
 * @param id - 主键
 */
export const detailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/{id}'
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
  return '/bill/{id}'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/{id}'
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
 * request: delUsingDELETE_1
 * url: delUsingDELETE_1URL
 * method: delUsingDELETE_1_TYPE
 * raw_url: delUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const delUsingDELETE_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cost/manage/item/del/{id}'
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
  return '/cost/manage/item/del/{id}'
}
export const delUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const delUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cost/manage/item/del/{id}'
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
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id - 主键
 * @param  - 
 */
export const listUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cost/manage/item/list'
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
export const listUsingGET_2_RAW_URL = function() {
  return '/cost/manage/item/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cost/manage/item/list'
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
 * 查询列表
 * request: saveUsingPOST_1
 * url: saveUsingPOST_1URL
 * method: saveUsingPOST_1_TYPE
 * raw_url: saveUsingPOST_1_RAW_URL
 * @param id - 主键
 * @param amount - 收款金额
 * @param expenseDate - 费用日期
 * @param remark - 备注
 * @param costManageOId - 费用管理主键
 * @param costItemId - 费用项目主键
 * @param  - 
 */
export const saveUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cost/manage/item/save'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['amount'] !== undefined) {
    queryParameters['amount'] = parameters['amount']
  }
  if (parameters['amount'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: amount'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['costManageOId'] !== undefined) {
    queryParameters['costManageOId'] = parameters['costManageOId']
  }
  if (parameters['costManageOId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costManageOId'))
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
  }
  if (parameters['costItemId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: costItemId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const saveUsingPOST_1_RAW_URL = function() {
  return '/cost/manage/item/save'
}
export const saveUsingPOST_1_TYPE = function() {
  return 'post'
}
export const saveUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cost/manage/item/save'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['amount'] !== undefined) {
    queryParameters['amount'] = parameters['amount']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['remark'] !== undefined) {
    queryParameters['remark'] = parameters['remark']
  }
  if (parameters['costManageOId'] !== undefined) {
    queryParameters['costManageOId'] = parameters['costManageOId']
  }
  if (parameters['costItemId'] !== undefined) {
    queryParameters['costItemId'] = parameters['costItemId']
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
 * 更新
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param id - 主键
 * @param amount - 收款金额
 * @param expenseDate - 费用日期
 * @param remark - 备注
 * @param  - 
 */
export const updateUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cost/manage/item/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['amount'] !== undefined) {
    queryParameters['amount'] = parameters['amount']
  }
  if (parameters['amount'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: amount'))
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
  }
  if (parameters['expenseDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: expenseDate'))
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
export const updateUsingPUT_1_RAW_URL = function() {
  return '/cost/manage/item/update'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cost/manage/item/update'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['amount'] !== undefined) {
    queryParameters['amount'] = parameters['amount']
  }
  if (parameters['expenseDate'] !== undefined) {
    queryParameters['expenseDate'] = parameters['expenseDate']
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
 * 获取详情
 * request: getByIdUsingGET
 * url: getByIdUsingGETURL
 * method: getByIdUsingGET_TYPE
 * raw_url: getByIdUsingGET_RAW_URL
 * @param id - 主键
 */
export const getByIdUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/cost/manage/item/{id}'
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
  return '/cost/manage/item/{id}'
}
export const getByIdUsingGET_TYPE = function() {
  return 'get'
}
export const getByIdUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/cost/manage/item/{id}'
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
* 保证金/诚意金收取（收取保证金/诚意金）
* request: addUsingPOST
* url: addUsingPOSTURL
* method: addUsingPOST_TYPE
* raw_url: addUsingPOST_RAW_URL
     * @param requestParams - requestParams
    
*/
export const addUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requestParams'] !== undefined) {
    body = parameters['requestParams']
  }
  if (parameters['requestParams'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requestParams'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/add'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/add'
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
* request: bondinfoUsingGET
* url: bondinfoUsingGETURL
* method: bondinfoUsingGET_TYPE
* raw_url: bondinfoUsingGET_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param receiptNumber - 收款单号
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
     * @param type - 0诚意金 1保证金
     * @param status - 状态：0新增 1已确认 2取消
    
*/
export const bondinfoUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/bondinfo'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const bondinfoUsingGET_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/bondinfo'
}
export const bondinfoUsingGET_TYPE = function() {
  return 'get'
}
export const bondinfoUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/bondinfo'
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 保证金/诚意金收取详情
* request: bondDetailUsingGET_7
* url: bondDetailUsingGET_7URL
* method: bondDetailUsingGET_7_TYPE
* raw_url: bondDetailUsingGET_7_RAW_URL
     * @param receiptNumber - 收款单号
    
     * @param  - 
*/
export const bondDetailUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/detail'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{receiptNumber}', `${parameters['receiptNumber']}`)
  if (parameters['receiptNumber'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: receiptNumber'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const bondDetailUsingGET_7_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/detail'
}
export const bondDetailUsingGET_7_TYPE = function() {
  return 'get'
}
export const bondDetailUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/detail'
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
* 保证金/诚意金收取页列表
* request: bondListUsingGET_7
* url: bondListUsingGET_7URL
* method: bondListUsingGET_7_TYPE
* raw_url: bondListUsingGET_7_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param receiptNumber - 收款单号
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
     * @param type - 0诚意金 1保证金
     * @param status - 状态：0新增 1已确认 2取消
    
     * @param  - 
*/
export const bondListUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/list'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const bondListUsingGET_7_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/list'
}
export const bondListUsingGET_7_TYPE = function() {
  return 'get'
}
export const bondListUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/list'
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 诚意金/保证金查询列表
* request: getPaymentMethodListUsingGET_7
* url: getPaymentMethodListUsingGET_7URL
* method: getPaymentMethodListUsingGET_7_TYPE
* raw_url: getPaymentMethodListUsingGET_7_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param receiptNumber - 收款单号
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
     * @param type - 0诚意金 1保证金
     * @param status - 状态：0新增 1已确认 2取消
    
*/
export const getPaymentMethodListUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/paymentmethod'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPaymentMethodListUsingGET_7_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/paymentmethod'
}
export const getPaymentMethodListUsingGET_7_TYPE = function() {
  return 'get'
}
export const getPaymentMethodListUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/paymentmethod'
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 保证金/诚意金收款提交
* request: paymentSubmitUsingPOST
* url: paymentSubmitUsingPOSTURL
* method: paymentSubmitUsingPOST_TYPE
* raw_url: paymentSubmitUsingPOST_RAW_URL
     * @param requestParams - requestParams
    
*/
export const paymentSubmitUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/sub'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requestParams'] !== undefined) {
    body = parameters['requestParams']
  }
  if (parameters['requestParams'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requestParams'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const paymentSubmitUsingPOST_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/sub'
}
export const paymentSubmitUsingPOST_TYPE = function() {
  return 'post'
}
export const paymentSubmitUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/sub'
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
* request: updateUsingPUT
* url: updateUsingPUTURL
* method: updateUsingPUT_TYPE
* raw_url: updateUsingPUT_RAW_URL
     * @param requestParams - requestParams
    
*/
export const updateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requestParams'] !== undefined) {
    body = parameters['requestParams']
  }
  if (parameters['requestParams'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requestParams'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/{id}'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/{id}'
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
* request: deleteUsingDELETE
* url: deleteUsingDELETEURL
* method: deleteUsingDELETE_TYPE
* raw_url: deleteUsingDELETE_RAW_URL
     * @param id - 主键
     * @param type - 类型
    
*/
export const deleteUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/contractbond/receiverecord/{id}/{type}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_RAW_URL = function() {
  return '/finance/contractbond/receiverecord/{id}/{type}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/contractbond/receiverecord/{id}/{type}'
  path = path.replace('{id}', `${parameters['id']}`)
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
 * 合同费用项目添加
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param param - param
 */
export const addUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/add'
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
export const addUsingPOST_2_RAW_URL = function() {
  return '/finance/cost/item/add'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
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
 * 项目税率应用添加
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param param - param
 */
export const addUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/add'
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
  return '/finance/cost/item/apply/add'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
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
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costItemCode - ID
 */
export const listUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_3_RAW_URL = function() {
  return '/finance/cost/item/apply/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/list'
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
 * 项目税率应用修改
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param param - param
 */
export const updateUsingPUT_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/apply/{id}'
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
  return '/finance/cost/item/apply/{id}'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/apply/{id}'
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
 * 合同费用项目列表
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costItemCodeOrName - 费用编码/名称
 * @param settleGroupId - 结算组别
 * @param costType - 费用类型
 * @param propertyType - 物业性质
 */
export const listUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/cost/item/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_4_RAW_URL = function() {
  return '/finance/cost/item/list'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/cost/item/list'
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
 * 根据ID查询合同费用项目
 * request: selectByIdUsingGET_1
 * url: selectByIdUsingGET_1URL
 * method: selectByIdUsingGET_1_TYPE
 * raw_url: selectByIdUsingGET_1_RAW_URL
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
* 商户预付款列表
* request: listUsingGET_5
* url: listUsingGET_5URL
* method: listUsingGET_5_TYPE
* raw_url: listUsingGET_5_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
    
     * @param  - 
*/
export const listUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_5_RAW_URL = function() {
  return '/finance/prepayment/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* request: prepaymentistUsingGET
* url: prepaymentistUsingGETURL
* method: prepaymentistUsingGET_TYPE
* raw_url: prepaymentistUsingGET_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
    
     * @param  - 
*/
export const prepaymentistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/prepaymentlist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const prepaymentistUsingGET_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/prepaymentlist'
}
export const prepaymentistUsingGET_TYPE = function() {
  return 'get'
}
export const prepaymentistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/prepaymentlist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 商户预付款处理列表
* request: prepaymentManageListUsingGET
* url: prepaymentManageListUsingGETURL
* method: prepaymentManageListUsingGET_TYPE
* raw_url: prepaymentManageListUsingGET_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
    
     * @param  - 
*/
export const prepaymentManageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/operaterecord/prepaymentmanagelist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const prepaymentManageListUsingGET_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/prepaymentmanagelist'
}
export const prepaymentManageListUsingGET_TYPE = function() {
  return 'get'
}
export const prepaymentManageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/operaterecord/prepaymentmanagelist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 预付款归还
* request: updateUsingPUT_8
* url: updateUsingPUT_8URL
* method: updateUsingPUT_8_TYPE
* raw_url: updateUsingPUT_8_RAW_URL
     * @param id - 主键
    
*/
export const updateUsingPUT_8 = function(parameters = {}) {
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
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_8_RAW_URL = function() {
  return '/finance/prepayment/operaterecord/{id}'
}
export const updateUsingPUT_8_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_8URL = function(parameters = {}) {
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
* 预付款收取（收取预付款）
* request: addUsingPOST_6
* url: addUsingPOST_6URL
* method: addUsingPOST_6_TYPE
* raw_url: addUsingPOST_6_RAW_URL
     * @param requestParams - requestParams
    
*/
export const addUsingPOST_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requestParams'] !== undefined) {
    body = parameters['requestParams']
  }
  if (parameters['requestParams'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requestParams'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_6_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/add'
}
export const addUsingPOST_6_TYPE = function() {
  return 'post'
}
export const addUsingPOST_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/add'
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
* request: cancelsUsingGET
* url: cancelsUsingGETURL
* method: cancelsUsingGET_TYPE
* raw_url: cancelsUsingGET_RAW_URL
     * @param id - 主键
    
*/
export const cancelsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/cancels'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const cancelsUsingGET_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/cancels'
}
export const cancelsUsingGET_TYPE = function() {
  return 'get'
}
export const cancelsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/cancels'
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
* 预付款收取页列表
* request: listUsingGET_9
* url: listUsingGET_9URL
* method: listUsingGET_9_TYPE
* raw_url: listUsingGET_9_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param receiptNumber - 收款单号
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
     * @param status - 状态：0新增 1已确认 2取消
    
     * @param  - 
*/
export const listUsingGET_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/list'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_9_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/list'
}
export const listUsingGET_9_TYPE = function() {
  return 'get'
}
export const listUsingGET_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/list'
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 预付款收确认添加到商户预付款中
* request: verifysUsingGET
* url: verifysUsingGETURL
* method: verifysUsingGET_TYPE
* raw_url: verifysUsingGET_RAW_URL
     * @param ids - 收款记录id字符串用(,)拼接
    
     * @param  - 
*/
export const verifysUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/verifys'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{ids}', `${parameters['ids']}`)
  if (parameters['ids'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: ids'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const verifysUsingGET_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/verifys'
}
export const verifysUsingGET_TYPE = function() {
  return 'get'
}
export const verifysUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/verifys'
  path = path.replace('{ids}', `${parameters['ids']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 预付款确认列表
* request: verifyslistUsingGET
* url: verifyslistUsingGETURL
* method: verifyslistUsingGET_TYPE
* raw_url: verifyslistUsingGET_RAW_URL
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param receiptNumber - 收款单号
     * @param merchantId - 商户id
     * @param merchantName - 商户名称
     * @param contractCode - 合同编号
     * @param shopId - 店铺id
     * @param shopCode - 店铺编号
     * @param shopName - 店铺名称
     * @param status - 状态：0新增 1已确认 2取消
    
     * @param  - 
*/
export const verifyslistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/verifyslist'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
  }
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const verifyslistUsingGET_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/verifyslist'
}
export const verifyslistUsingGET_TYPE = function() {
  return 'get'
}
export const verifyslistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/verifyslist'
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
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['shopId'] !== undefined) {
    queryParameters['shopId'] = parameters['shopId']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopName'] !== undefined) {
    queryParameters['shopName'] = parameters['shopName']
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
* 预付款收取列表编辑
* request: updateUsingPUT_9
* url: updateUsingPUT_9URL
* method: updateUsingPUT_9_TYPE
* raw_url: updateUsingPUT_9_RAW_URL
     * @param requestParams - requestParams
    
*/
export const updateUsingPUT_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/receiverecord/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['requestParams'] !== undefined) {
    body = parameters['requestParams']
  }
  if (parameters['requestParams'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: requestParams'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_9_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/{id}'
}
export const updateUsingPUT_9_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/receiverecord/{id}'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 预付款收取列表中的删除
* request: deleteUsingDELETE_2
* url: deleteUsingDELETE_2URL
* method: deleteUsingDELETE_2_TYPE
* raw_url: deleteUsingDELETE_2_RAW_URL
     * @param id - 主键
    
*/
export const deleteUsingDELETE_2 = function(parameters = {}) {
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
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUsingDELETE_2_RAW_URL = function() {
  return '/finance/prepayment/receiverecord/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
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
* 商户预付款归还
* request: updateUsingPUT_4
* url: updateUsingPUT_4URL
* method: updateUsingPUT_4_TYPE
* raw_url: updateUsingPUT_4_RAW_URL
     * @param id - 预付款id
     * @param dealtAmount - 处理金额
     * @param remark - 备注
    
*/
export const updateUsingPUT_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/prepayment/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{dealtAmount}', `${parameters['dealtAmount']}`)
  if (parameters['dealtAmount'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: dealtAmount'))
  }
  path = path.replace('{remark}', `${parameters['remark']}`)
  if (parameters['remark'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: remark'))
  }
  if (parameters['apiVersion'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: apiVersion'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUsingPUT_4_RAW_URL = function() {
  return '/finance/prepayment/{id}'
}
export const updateUsingPUT_4_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/prepayment/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  path = path.replace('{dealtAmount}', `${parameters['dealtAmount']}`)
  path = path.replace('{remark}', `${parameters['remark']}`)
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
 * request: addUsingPOST_3
 * url: addUsingPOST_3URL
 * method: addUsingPOST_3_TYPE
 * raw_url: addUsingPOST_3_RAW_URL
 * @param param - param
 */
export const addUsingPOST_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/add'
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
export const addUsingPOST_3_RAW_URL = function() {
  return '/finance/rate/add'
}
export const addUsingPOST_3_TYPE = function() {
  return 'post'
}
export const addUsingPOST_3URL = function(parameters = {}) {
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
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param rateCode - 税码
 */
export const listUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_6_RAW_URL = function() {
  return '/finance/rate/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/list'
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
 * 根据ID查询税率设置
 * request: selectByIdUsingGET_2
 * url: selectByIdUsingGET_2URL
 * method: selectByIdUsingGET_2_TYPE
 * raw_url: selectByIdUsingGET_2_RAW_URL
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
 * 税率设置修改
 * request: updateUsingPUT_5
 * url: updateUsingPUT_5URL
 * method: updateUsingPUT_5_TYPE
 * raw_url: updateUsingPUT_5_RAW_URL
 * @param param - param
 */
export const updateUsingPUT_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/rate/{id}'
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
  return '/finance/rate/{id}'
}
export const updateUsingPUT_5_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/rate/{id}'
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
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
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
export const deleteUsingDELETE_1_RAW_URL = function() {
  return '/finance/rate/{id}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
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
 * 收款账户添加
 * request: addUsingPOST_4
 * url: addUsingPOST_4URL
 * method: addUsingPOST_4_TYPE
 * raw_url: addUsingPOST_4_RAW_URL
 * @param param - param
 */
export const addUsingPOST_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/add'
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
export const addUsingPOST_4_RAW_URL = function() {
  return '/finance/receive/account/add'
}
export const addUsingPOST_4_TYPE = function() {
  return 'post'
}
export const addUsingPOST_4URL = function(parameters = {}) {
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
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param openingBank - 开户行
 */
export const listUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_7_RAW_URL = function() {
  return '/finance/receive/account/list'
}
export const listUsingGET_7_TYPE = function() {
  return 'get'
}
export const listUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/list'
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
 * 收款账户修改
 * request: updateUsingPUT_6
 * url: updateUsingPUT_6URL
 * method: updateUsingPUT_6_TYPE
 * raw_url: updateUsingPUT_6_RAW_URL
 * @param param - param
 */
export const updateUsingPUT_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/receive/account/{id}'
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
  return '/finance/receive/account/{id}'
}
export const updateUsingPUT_6_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/receive/account/{id}'
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
 * 结算组别添加
 * request: addUsingPOST_5
 * url: addUsingPOST_5URL
 * method: addUsingPOST_5_TYPE
 * raw_url: addUsingPOST_5_RAW_URL
 * @param param - param
 */
export const addUsingPOST_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/add'
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
  return '/finance/settle/group/add'
}
export const addUsingPOST_5_TYPE = function() {
  return 'post'
}
export const addUsingPOST_5URL = function(parameters = {}) {
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
 * 结算组别列表
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param settleGroupName - 名称
 */
export const listUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const listUsingGET_8_RAW_URL = function() {
  return '/finance/settle/group/list'
}
export const listUsingGET_8_TYPE = function() {
  return 'get'
}
export const listUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/list'
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
 * 根据ID查询结算组别
 * request: selectByIdUsingGET_4
 * url: selectByIdUsingGET_4URL
 * method: selectByIdUsingGET_4_TYPE
 * raw_url: selectByIdUsingGET_4_RAW_URL
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
/**
 * 结算组别修改
 * request: updateUsingPUT_7
 * url: updateUsingPUT_7URL
 * method: updateUsingPUT_7_TYPE
 * raw_url: updateUsingPUT_7_RAW_URL
 * @param param - param
 */
export const updateUsingPUT_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/finance/settle/group/{id}'
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
  return '/finance/settle/group/{id}'
}
export const updateUsingPUT_7_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/{id}'
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
 * request: updateUsingDELETE_3
 * url: updateUsingDELETE_3URL
 * method: updateUsingDELETE_3_TYPE
 * raw_url: updateUsingDELETE_3_RAW_URL
 * @param id - 主键
 * @param status - 启用/禁用
 */
export const updateUsingDELETE_3 = function(parameters = {}) {
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
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const updateUsingDELETE_3_RAW_URL = function() {
  return '/finance/settle/group/{id}'
}
export const updateUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const updateUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/finance/settle/group/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
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
 * 取消
 * request: cancelUsingPUT_1
 * url: cancelUsingPUT_1URL
 * method: cancelUsingPUT_1_TYPE
 * raw_url: cancelUsingPUT_1_RAW_URL
 * @param id - 主键
 */
export const cancelUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/irregular/cost/cancel/{id}'
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
export const cancelUsingPUT_1_RAW_URL = function() {
  return '/irregular/cost/cancel/{id}'
}
export const cancelUsingPUT_1_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/irregular/cost/cancel/{id}'
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
 * request: confirmUsingPUT_1
 * url: confirmUsingPUT_1URL
 * method: confirmUsingPUT_1_TYPE
 * raw_url: confirmUsingPUT_1_RAW_URL
 * @param id - 主键数组
 */
export const confirmUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/irregular/cost/confirm'
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
export const confirmUsingPUT_1_RAW_URL = function() {
  return '/irregular/cost/confirm'
}
export const confirmUsingPUT_1_TYPE = function() {
  return 'put'
}
export const confirmUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/irregular/cost/confirm'
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
 * 删除
 * request: delUsingDELETE
 * url: delUsingDELETEURL
 * method: delUsingDELETE_TYPE
 * raw_url: delUsingDELETE_RAW_URL
 * @param id - 主键数组
 */
export const delUsingDELETE = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/irregular/cost/del'
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
export const delUsingDELETE_RAW_URL = function() {
  return '/irregular/cost/del'
}
export const delUsingDELETE_TYPE = function() {
  return 'delete'
}
export const delUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/irregular/cost/del'
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
 * 查询不规则费用管理、不规则费用审核列表
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param costNo - 费用单号
 * @param merchantId - 商户主键
 * @param contractId - 合同主键
 * @param settleGroupId - 结算组别主键
 * @param status - 状态
 * @param  - 
 */
export const listUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/irregular/cost/list'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
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
export const listUsingGET_1_RAW_URL = function() {
  return '/irregular/cost/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/irregular/cost/list'
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
  if (parameters['settleGroupId'] !== undefined) {
    queryParameters['settleGroupId'] = parameters['settleGroupId']
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