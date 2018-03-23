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
 * 查询所有附件信息
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param token - header中token字段
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/atment/list'
  let body
  let queryParameters = {}
  let form = {}
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
  if (parameters['attachmentType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: attachmentType'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_RAW_URL = function() {
  return '/atment/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/atment/list'
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
  let path = '/atment/{id}'
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
  return '/atment/{id}'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/atment/{id}'
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
 * 编辑附件
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/atment/{id}'
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
  return '/atment/{id}'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/atment/{id}'
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
 * @param contractId - 合同主键
 * @param expenseDate - 费用日期
 */
export const cycleUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bill/cycle/period'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
  }
  if (parameters['contractId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: contractId'))
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
  return '/bill/cycle/period'
}
export const cycleUsingGET_TYPE = function() {
  return 'get'
}
export const cycleUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bill/cycle/period'
  if (parameters['contractId'] !== undefined) {
    queryParameters['contractId'] = parameters['contractId']
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
 * 文件上传
 * request: uploadUsingPOST
 * url: uploadUsingPOSTURL
 * method: uploadUsingPOST_TYPE
 * raw_url: uploadUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - file
 */
export const uploadUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/file/upload'
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
export const uploadUsingPOST_RAW_URL = function() {
  return '/file/upload'
}
export const uploadUsingPOST_TYPE = function() {
  return 'post'
}
export const uploadUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/file/upload'
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
 * @param file - file
 */
export const uploadsUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/file/uploads'
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
export const uploadsUsingPOST_RAW_URL = function() {
  return '/file/uploads'
}
export const uploadsUsingPOST_TYPE = function() {
  return 'post'
}
export const uploadsUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/file/uploads'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 添加录入意向合同
* request: addUsingPOST_5
* url: addUsingPOST_5URL
* method: addUsingPOST_5_TYPE
* raw_url: addUsingPOST_5_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
     * @param  - 
*/
export const addUsingPOST_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/IntentContract/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const addUsingPOST_5_RAW_URL = function() {
  return '/rent/IntentContract/add'
}
export const addUsingPOST_5_TYPE = function() {
  return 'post'
}
export const addUsingPOST_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/add'
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
  let path = '/rent/IntentContract/cancel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
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
export const cancelUsingPUT_1_RAW_URL = function() {
  return '/rent/IntentContract/cancel'
}
export const cancelUsingPUT_1_TYPE = function() {
  return 'put'
}
export const cancelUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/cancel'
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
* request: confirmUsingPUT_1
* url: confirmUsingPUT_1URL
* method: confirmUsingPUT_1_TYPE
* raw_url: confirmUsingPUT_1_RAW_URL
     * @param token - header中token字段
     * @param id - 主键
    
*/
export const confirmUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/IntentContract/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
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
export const confirmUsingPUT_1_RAW_URL = function() {
  return '/rent/IntentContract/confirm'
}
export const confirmUsingPUT_1_TYPE = function() {
  return 'put'
}
export const confirmUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/confirm'
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
  let path = '/rent/IntentContract/del'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
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
export const delUsingPUT_1_RAW_URL = function() {
  return '/rent/IntentContract/del'
}
export const delUsingPUT_1_TYPE = function() {
  return 'put'
}
export const delUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/del'
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
* 意向合同详情
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
  let path = '/rent/IntentContract/detail/{id}'
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
export const detailUsingGET_6_RAW_URL = function() {
  return '/rent/IntentContract/detail/{id}'
}
export const detailUsingGET_6_TYPE = function() {
  return 'get'
}
export const detailUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/detail/{id}'
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
* request: editUsingPUT_1
* url: editUsingPUT_1URL
* method: editUsingPUT_1_TYPE
* raw_url: editUsingPUT_1_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
*/
export const editUsingPUT_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/IntentContract/edit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const editUsingPUT_1_RAW_URL = function() {
  return '/rent/IntentContract/edit'
}
export const editUsingPUT_1_TYPE = function() {
  return 'put'
}
export const editUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/edit'
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
  let path = '/rent/IntentContract/list'
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
export const getListForPageUsingGET_1_RAW_URL = function() {
  return '/rent/IntentContract/list'
}
export const getListForPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/IntentContract/list'
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
 * 广告位类型添加
 * request: addUsingPOST_7
 * url: addUsingPOST_7URL
 * method: addUsingPOST_7_TYPE
 * raw_url: addUsingPOST_7_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_7 = function(parameters = {}) {
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
export const addUsingPOST_7_RAW_URL = function() {
  return '/rent/advertising/type/add'
}
export const addUsingPOST_7_TYPE = function() {
  return 'post'
}
export const addUsingPOST_7URL = function(parameters = {}) {
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
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/list'
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
  return '/rent/advertising/type/list'
}
export const listUsingGET_8_TYPE = function() {
  return 'get'
}
export const listUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/list'
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
 * 广告位类型修改
 * request: updateUsingPUT_9
 * url: updateUsingPUT_9URL
 * method: updateUsingPUT_9_TYPE
 * raw_url: updateUsingPUT_9_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/advertising/type/{id}'
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
export const updateUsingPUT_9_RAW_URL = function() {
  return '/rent/advertising/type/{id}'
}
export const updateUsingPUT_9_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/advertising/type/{id}'
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
 * 添加品牌
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST = function(parameters = {}) {
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
export const addUsingPOST_RAW_URL = function() {
  return '/rent/brand/add'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
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
 * 查询所有品牌项
 * request: auditListUsingGET
 * url: auditListUsingGETURL
 * method: auditListUsingGET_TYPE
 * raw_url: auditListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1空置2.取消空置3预定4使用中5失效
 * @param businessId - 业态编号
 */
export const auditListUsingGET = function(parameters = {}) {
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
export const auditListUsingGET_RAW_URL = function() {
  return '/rent/brand/audit/list'
}
export const auditListUsingGET_TYPE = function() {
  return 'get'
}
export const auditListUsingGETURL = function(parameters = {}) {
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
 * @param status - 状态：0新增1空置2.取消空置3预定4使用中5失效
 * @param businessId - 业态编号
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
 * 查询所有国别信息
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_1 = function(parameters = {}) {
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
export const listUsingGET_1_RAW_URL = function() {
  return '/rent/brand/country/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
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
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1空置2.取消空置3预定4使用中5失效
 * @param businessId - 业态编号
 */
export const listUsingGET_2 = function(parameters = {}) {
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
export const listUsingGET_2_RAW_URL = function() {
  return '/rent/brand/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
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
 * @param status - 状态：0新增1空置2.取消空置3预定4使用中5失效
 * @param businessId - 业态编号
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
 * 获取品牌详情
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
export const detailUsingGET_1_RAW_URL = function() {
  return '/rent/brand/{id}'
}
export const detailUsingGET_1_TYPE = function() {
  return 'get'
}
export const detailUsingGET_1URL = function(parameters = {}) {
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
  let path = '/rent/brand/{id}'
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
  return '/rent/brand/{id}'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/brand/{id}'
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
export const deleteUsingDELETE_RAW_URL = function() {
  return '/rent/brand/{id}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
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
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_1 = function(parameters = {}) {
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
export const updateUsingPUT_1_RAW_URL = function() {
  return '/rent/brand/{id}/{status}'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
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
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_9 = function(parameters = {}) {
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
export const listUsingGET_9_RAW_URL = function() {
  return '/rent/build/list'
}
export const listUsingGET_9_TYPE = function() {
  return 'get'
}
export const listUsingGET_9URL = function(parameters = {}) {
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
 * request: listUsingGET_10
 * url: listUsingGET_10URL
 * method: listUsingGET_10_TYPE
 * raw_url: listUsingGET_10_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_10 = function(parameters = {}) {
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
export const listUsingGET_10_RAW_URL = function() {
  return '/rent/build/type/list'
}
export const listUsingGET_10_TYPE = function() {
  return 'get'
}
export const listUsingGET_10URL = function(parameters = {}) {
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
 * 添加业态
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_1 = function(parameters = {}) {
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
export const addUsingPOST_1_RAW_URL = function() {
  return '/rent/busi/add'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
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
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param businessCode - 业态编码
 * @param businessName - 业态名称
 */
export const listUsingGET_3 = function(parameters = {}) {
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
export const listUsingGET_3_RAW_URL = function() {
  return '/rent/busi/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
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
export const detailUsingGET_2_RAW_URL = function() {
  return '/rent/busi/{id}'
}
export const detailUsingGET_2_TYPE = function() {
  return 'get'
}
export const detailUsingGET_2URL = function(parameters = {}) {
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
 * 编辑业态
 * request: updateUsingPUT_3
 * url: updateUsingPUT_3URL
 * method: updateUsingPUT_3_TYPE
 * raw_url: updateUsingPUT_3_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/busi/{id}'
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
export const updateUsingPUT_3_RAW_URL = function() {
  return '/rent/busi/{id}'
}
export const updateUsingPUT_3_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/busi/{id}'
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
export const deleteUsingDELETE_1_RAW_URL = function() {
  return '/rent/busi/{id}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
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
* 添加录入正式合同
* request: addUsingPOST_2
* url: addUsingPOST_2URL
* method: addUsingPOST_2_TYPE
* raw_url: addUsingPOST_2_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
     * @param  - 
*/
export const addUsingPOST_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const addUsingPOST_2_RAW_URL = function() {
  return '/rent/contract/add'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/add'
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
     * @param param - param
    
     * @param  - 
*/
export const addBondUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/bond'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
* 确认
* request: confirmUsingPUT
* url: confirmUsingPUTURL
* method: confirmUsingPUT_TYPE
* raw_url: confirmUsingPUT_RAW_URL
     * @param token - header中token字段
     * @param ids - 主键
    
*/
export const confirmUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/confirm'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['ids'] !== undefined) {
    queryParameters['ids'] = parameters['ids']
  }
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
* 正式合同延期
* request: delayUsingPUT
* url: delayUsingPUTURL
* method: delayUsingPUT_TYPE
* raw_url: delayUsingPUT_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
*/
export const delayUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/delay'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const delayUsingPUT_RAW_URL = function() {
  return '/rent/contract/delay'
}
export const delayUsingPUT_TYPE = function() {
  return 'put'
}
export const delayUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/delay'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
* 正式合同详情
* request: detailUsingGET_3
* url: detailUsingGET_3URL
* method: detailUsingGET_3_TYPE
* raw_url: detailUsingGET_3_RAW_URL
     * @param token - header中token字段
     * @param id - 主键
    
*/
export const detailUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/detail/{id}'
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
export const detailUsingGET_3_RAW_URL = function() {
  return '/rent/contract/detail/{id}'
}
export const detailUsingGET_3_TYPE = function() {
  return 'get'
}
export const detailUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/detail/{id}'
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
* 正式合同编辑
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
  let path = '/rent/contract/edit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const editUsingPUT_RAW_URL = function() {
  return '/rent/contract/edit'
}
export const editUsingPUT_TYPE = function() {
  return 'put'
}
export const editUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/edit'
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
     * @param propertyType - 物业性质：商铺、写字楼、广告位、场地
     * @param contractCode - 合同编号
     * @param merchantId - 商户名称
     * @param shopId - 店铺名称
     * @param status - 状态
     * @param latestOrNot - 是否最新版本
    
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
* 添加录入正式合同租金/费用条款
* request: addRentOrCostUsingPOST
* url: addRentOrCostUsingPOSTURL
* method: addRentOrCostUsingPOST_TYPE
* raw_url: addRentOrCostUsingPOST_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
     * @param  - 
*/
export const addRentOrCostUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/rentOrCost'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
* 添加合同关联的店铺单元记录
* request: addShopUnitUsingPOST
* url: addShopUnitUsingPOSTURL
* method: addShopUnitUsingPOST_TYPE
* raw_url: addShopUnitUsingPOST_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
     * @param  - 
*/
export const addShopUnitUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/shopUnit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
export const addShopUnitUsingPOST_RAW_URL = function() {
  return '/rent/contract/shopUnit'
}
export const addShopUnitUsingPOST_TYPE = function() {
  return 'post'
}
export const addShopUnitUsingPOSTURL = function(parameters = {}) {
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
* 正式合同终止
* request: stopUsingPUT
* url: stopUsingPUTURL
* method: stopUsingPUT_TYPE
* raw_url: stopUsingPUT_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
*/
export const stopUsingPUT = function(parameters = {}) {
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
export const stopUsingPUT_RAW_URL = function() {
  return '/rent/contract/stop'
}
export const stopUsingPUT_TYPE = function() {
  return 'put'
}
export const stopUsingPUTURL = function(parameters = {}) {
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
* 正式合同变更
* request: updateUsingPUT_4
* url: updateUsingPUT_4URL
* method: updateUsingPUT_4_TYPE
* raw_url: updateUsingPUT_4_RAW_URL
     * @param token - header中token字段
     * @param param - param
    
*/
export const updateUsingPUT_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/contract/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['param'] !== undefined) {
    body = parameters['param']
  }
  if (parameters['param'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: param'))
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
  return '/rent/contract/update'
}
export const updateUsingPUT_4_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/contract/update'
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
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_4 = function(parameters = {}) {
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
export const listUsingGET_4_RAW_URL = function() {
  return '/rent/country/list'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
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
 * 楼层添加
 * request: addUsingPOST_8
 * url: addUsingPOST_8URL
 * method: addUsingPOST_8_TYPE
 * raw_url: addUsingPOST_8_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_8 = function(parameters = {}) {
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
export const addUsingPOST_8_RAW_URL = function() {
  return '/rent/floor/add'
}
export const addUsingPOST_8_TYPE = function() {
  return 'post'
}
export const addUsingPOST_8URL = function(parameters = {}) {
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
 * 楼层修改
 * request: updateUsingPUT_10
 * url: updateUsingPUT_10URL
 * method: updateUsingPUT_10_TYPE
 * raw_url: updateUsingPUT_10_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/floor/{id}'
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
export const updateUsingPUT_10_RAW_URL = function() {
  return '/rent/floor/{id}'
}
export const updateUsingPUT_10_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/floor/{id}'
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
 * 添加货品
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
export const addUsingPOST_3_RAW_URL = function() {
  return '/rent/goods/add'
}
export const addUsingPOST_3_TYPE = function() {
  return 'post'
}
export const addUsingPOST_3URL = function(parameters = {}) {
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
 * 查询所有货品信息
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsCode - 货品编码
 * @param goodsName - 货品名称
 * @param goodsTypeId - 货品组别
 */
export const listUsingGET_5 = function(parameters = {}) {
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_5_RAW_URL = function() {
  return '/rent/goods/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
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
 * 编辑货品
 * request: updateUsingPUT_5
 * url: updateUsingPUT_5URL
 * method: updateUsingPUT_5_TYPE
 * raw_url: updateUsingPUT_5_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/goods/{id}'
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
  return '/rent/goods/{id}'
}
export const updateUsingPUT_5_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goods/{id}'
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
export const deleteUsingDELETE_2_RAW_URL = function() {
  return '/rent/goods/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
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
export const addUsingPOST_4_RAW_URL = function() {
  return '/rent/goodstp/add'
}
export const addUsingPOST_4_TYPE = function() {
  return 'post'
}
export const addUsingPOST_4URL = function(parameters = {}) {
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
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const listUsingGET_6 = function(parameters = {}) {
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
export const listUsingGET_6_RAW_URL = function() {
  return '/rent/goodstp/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
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
 * 编辑货品组别
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
  let path = '/rent/goodstp/{id}'
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
  return '/rent/goodstp/{id}'
}
export const updateUsingPUT_6_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/goodstp/{id}'
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
export const deleteUsingDELETE_3_RAW_URL = function() {
  return '/rent/goodstp/{id}'
}
export const deleteUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_3URL = function(parameters = {}) {
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
 * 添加商户
 * request: addUsingPOST_6
 * url: addUsingPOST_6URL
 * method: addUsingPOST_6_TYPE
 * raw_url: addUsingPOST_6_RAW_URL
 * @param token - header中token字段
 * @param contactLstParams0Id - 商户联系人ID
 * @param contactLstParams0ResponsiblePerson - 联系人
 * @param contactLstParams0ContactNumber - 联系电话
 * @param contactLstParams0Fax - 
 * @param contactLstParams0MainOrNot - 
 * @param id - 商户ID
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 0商场1写字楼2广告位3场地
 * @param merchantNature - 商户性质 商户性质0法人1个体
 * @param companyName - 公司名称
 * @param adress - 地址
 * @param businessLicenseNumber - 营业执照
 * @param businessPermitNumber - 经营许可证号
 * @param trademarkRegistrationNumber - 商标注册证件号
 * @param legalPersonId - 法人身份证号
 * @param otherCertificate - 其他证件号
 * @param mainContractId - 
 */
export const addUsingPOST_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['contactLstParams0Id'] !== undefined) {
    queryParameters['contactLstParams[0].id'] = parameters['contactLstParams0Id']
  }
  if (parameters['contactLstParams0ResponsiblePerson'] !== undefined) {
    queryParameters['contactLstParams[0].responsiblePerson'] = parameters['contactLstParams0ResponsiblePerson']
  }
  if (parameters['contactLstParams0ContactNumber'] !== undefined) {
    queryParameters['contactLstParams[0].contactNumber'] = parameters['contactLstParams0ContactNumber']
  }
  if (parameters['contactLstParams0Fax'] !== undefined) {
    queryParameters['contactLstParams[0].fax'] = parameters['contactLstParams0Fax']
  }
  if (parameters['contactLstParams0MainOrNot'] !== undefined) {
    queryParameters['contactLstParams[0].mainOrNot'] = parameters['contactLstParams0MainOrNot']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['merchantName'] !== undefined) {
    queryParameters['merchantName'] = parameters['merchantName']
  }
  if (parameters['merchantName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantName'))
  }
  if (parameters['merchantEnglishName'] !== undefined) {
    queryParameters['merchantEnglishName'] = parameters['merchantEnglishName']
  }
  if (parameters['merchantEnglishName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantEnglishName'))
  }
  if (parameters['merchantType'] !== undefined) {
    queryParameters['merchantType'] = parameters['merchantType']
  }
  if (parameters['merchantType'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantType'))
  }
  if (parameters['merchantNature'] !== undefined) {
    queryParameters['merchantNature'] = parameters['merchantNature']
  }
  if (parameters['merchantNature'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: merchantNature'))
  }
  if (parameters['companyName'] !== undefined) {
    queryParameters['companyName'] = parameters['companyName']
  }
  if (parameters['adress'] !== undefined) {
    queryParameters['adress'] = parameters['adress']
  }
  if (parameters['businessLicenseNumber'] !== undefined) {
    queryParameters['businessLicenseNumber'] = parameters['businessLicenseNumber']
  }
  if (parameters['businessPermitNumber'] !== undefined) {
    queryParameters['businessPermitNumber'] = parameters['businessPermitNumber']
  }
  if (parameters['trademarkRegistrationNumber'] !== undefined) {
    queryParameters['trademarkRegistrationNumber'] = parameters['trademarkRegistrationNumber']
  }
  if (parameters['legalPersonId'] !== undefined) {
    queryParameters['legalPersonId'] = parameters['legalPersonId']
  }
  if (parameters['otherCertificate'] !== undefined) {
    queryParameters['otherCertificate'] = parameters['otherCertificate']
  }
  if (parameters['mainContractId'] !== undefined) {
    queryParameters['mainContractId'] = parameters['mainContractId']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_6_RAW_URL = function() {
  return '/rent/merchant/add'
}
export const addUsingPOST_6_TYPE = function() {
  return 'post'
}
export const addUsingPOST_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/add'
  if (parameters['contactLstParams0Id'] !== undefined) {
    queryParameters['contactLstParams[0].id'] = parameters['contactLstParams0Id']
  }
  if (parameters['contactLstParams0ResponsiblePerson'] !== undefined) {
    queryParameters['contactLstParams[0].responsiblePerson'] = parameters['contactLstParams0ResponsiblePerson']
  }
  if (parameters['contactLstParams0ContactNumber'] !== undefined) {
    queryParameters['contactLstParams[0].contactNumber'] = parameters['contactLstParams0ContactNumber']
  }
  if (parameters['contactLstParams0Fax'] !== undefined) {
    queryParameters['contactLstParams[0].fax'] = parameters['contactLstParams0Fax']
  }
  if (parameters['contactLstParams0MainOrNot'] !== undefined) {
    queryParameters['contactLstParams[0].mainOrNot'] = parameters['contactLstParams0MainOrNot']
  }
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
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
  if (parameters['merchantNature'] !== undefined) {
    queryParameters['merchantNature'] = parameters['merchantNature']
  }
  if (parameters['companyName'] !== undefined) {
    queryParameters['companyName'] = parameters['companyName']
  }
  if (parameters['adress'] !== undefined) {
    queryParameters['adress'] = parameters['adress']
  }
  if (parameters['businessLicenseNumber'] !== undefined) {
    queryParameters['businessLicenseNumber'] = parameters['businessLicenseNumber']
  }
  if (parameters['businessPermitNumber'] !== undefined) {
    queryParameters['businessPermitNumber'] = parameters['businessPermitNumber']
  }
  if (parameters['trademarkRegistrationNumber'] !== undefined) {
    queryParameters['trademarkRegistrationNumber'] = parameters['trademarkRegistrationNumber']
  }
  if (parameters['legalPersonId'] !== undefined) {
    queryParameters['legalPersonId'] = parameters['legalPersonId']
  }
  if (parameters['otherCertificate'] !== undefined) {
    queryParameters['otherCertificate'] = parameters['otherCertificate']
  }
  if (parameters['mainContractId'] !== undefined) {
    queryParameters['mainContractId'] = parameters['mainContractId']
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
 * request: auditListUsingGET_1
 * url: auditListUsingGET_1URL
 * method: auditListUsingGET_1_TYPE
 * raw_url: auditListUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型
 * @param status - 
 */
export const auditListUsingGET_1 = function(parameters = {}) {
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
export const auditListUsingGET_1_RAW_URL = function() {
  return '/rent/merchant/audit/list'
}
export const auditListUsingGET_1_TYPE = function() {
  return 'get'
}
export const auditListUsingGET_1URL = function(parameters = {}) {
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
 * @param merchantType - 商户类型
 * @param status - 
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
 * 查询商户列表
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型
 * @param status - 
 */
export const listUsingGET_7 = function(parameters = {}) {
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
export const listUsingGET_7_RAW_URL = function() {
  return '/rent/merchant/list'
}
export const listUsingGET_7_TYPE = function() {
  return 'get'
}
export const listUsingGET_7URL = function(parameters = {}) {
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
 * @param merchantType - 商户类型
 * @param status - 
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
  let path = '/rent/merchant/{id}'
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
  return '/rent/merchant/{id}'
}
export const updateUsingPUT_8_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}'
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
export const deleteUsingDELETE_4_RAW_URL = function() {
  return '/rent/merchant/{id}'
}
export const deleteUsingDELETE_4_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_4URL = function(parameters = {}) {
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
 * 修改商户状态
 * request: updtpassUsingPUT
 * url: updtpassUsingPUTURL
 * method: updtpassUsingPUT_TYPE
 * raw_url: updtpassUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param password - 密码
 */
export const updtpassUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/merchant/{id}/updtpass'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  path = path.replace('{password}', `${parameters['password']}`)
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
export const updtpassUsingPUT_RAW_URL = function() {
  return '/rent/merchant/{id}/updtpass'
}
export const updtpassUsingPUT_TYPE = function() {
  return 'put'
}
export const updtpassUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/merchant/{id}/updtpass'
  path = path.replace('{id}', `${parameters['id']}`)
  path = path.replace('{password}', `${parameters['password']}`)
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
 * request: updateUsingPUT_7
 * url: updateUsingPUT_7URL
 * method: updateUsingPUT_7_TYPE
 * raw_url: updateUsingPUT_7_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_7 = function(parameters = {}) {
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
export const updateUsingPUT_7_RAW_URL = function() {
  return '/rent/merchant/{id}/{status}'
}
export const updateUsingPUT_7_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_7URL = function(parameters = {}) {
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
* 查询审计店铺列表
* request: auditListUsingGET_2
* url: auditListUsingGET_2URL
* method: auditListUsingGET_2_TYPE
* raw_url: auditListUsingGET_2_RAW_URL
     * @param token - header中token字段
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param shopCode - 店铺编码
     * @param shopName - 店铺名称
     * @param merchantId - 商户编号
     * @param status - 店铺状态
    
*/
export const auditListUsingGET_2 = function(parameters = {}) {
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
export const auditListUsingGET_2_RAW_URL = function() {
  return '/rent/shop/audit/list'
}
export const auditListUsingGET_2_TYPE = function() {
  return 'get'
}
export const auditListUsingGET_2URL = function(parameters = {}) {
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
* 查询店铺列表
* request: listUsingGET_12
* url: listUsingGET_12URL
* method: listUsingGET_12_TYPE
* raw_url: listUsingGET_12_RAW_URL
     * @param token - header中token字段
     * @param pageNum - 页码
     * @param pageSize - 每页显示数量
     * @param shopCode - 店铺编码
     * @param shopName - 店铺名称
     * @param merchantId - 商户编号
     * @param status - 店铺状态
    
*/
export const listUsingGET_12 = function(parameters = {}) {
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
export const listUsingGET_12_RAW_URL = function() {
  return '/rent/shop/list'
}
export const listUsingGET_12_TYPE = function() {
  return 'get'
}
export const listUsingGET_12URL = function(parameters = {}) {
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
* 编辑店铺
* request: updateUsingPUT_13
* url: updateUsingPUT_13URL
* method: updateUsingPUT_13_TYPE
* raw_url: updateUsingPUT_13_RAW_URL
     * @param token - header中token字段
     * @param request - request
    
*/
export const updateUsingPUT_13 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/shop/{id}'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['request'] !== undefined) {
    body = parameters['request']
  }
  if (parameters['request'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: request'))
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
export const updateUsingPUT_13_RAW_URL = function() {
  return '/rent/shop/{id}'
}
export const updateUsingPUT_13_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_13URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/shop/{id}'
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
  let path = '/rent/shop/{id}'
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
export const deleteUsingDELETE_6_RAW_URL = function() {
  return '/rent/shop/{id}'
}
export const deleteUsingDELETE_6_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_6URL = function(parameters = {}) {
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
* 修改店铺状态
* request: updateUsingPUT_12
* url: updateUsingPUT_12URL
* method: updateUsingPUT_12_TYPE
* raw_url: updateUsingPUT_12_RAW_URL
     * @param token - header中token字段
     * @param id - 主键id
     * @param status - 状态
    
*/
export const updateUsingPUT_12 = function(parameters = {}) {
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
export const updateUsingPUT_12_RAW_URL = function() {
  return '/rent/shop/{id}/{status}'
}
export const updateUsingPUT_12_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_12URL = function(parameters = {}) {
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
 * 单元、广告位、写字楼、场地批量审核
 * request: updateStatusUsingPUT
 * url: updateStatusUsingPUTURL
 * method: updateStatusUsingPUT_TYPE
 * raw_url: updateStatusUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param idList - 主键集合
 */
export const updateStatusUsingPUT = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/ids'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['idList'] !== undefined) {
    body = parameters['idList']
  }
  if (parameters['idList'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: idList'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateStatusUsingPUT_RAW_URL = function() {
  return '/rent/unit/ids'
}
export const updateStatusUsingPUT_TYPE = function() {
  return 'put'
}
export const updateStatusUsingPUTURL = function(parameters = {}) {
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
 * 单元、广告位、写字楼、场地删除
 * request: deleteUsingDELETE_5
 * url: deleteUsingDELETE_5URL
 * method: deleteUsingDELETE_5_TYPE
 * raw_url: deleteUsingDELETE_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const deleteUsingDELETE_5 = function(parameters = {}) {
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
export const deleteUsingDELETE_5_RAW_URL = function() {
  return '/rent/unit/{id}'
}
export const deleteUsingDELETE_5_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_5URL = function(parameters = {}) {
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
 * 单元、广告位、写字楼、场地添加
 * request: addUsingPOST_9
 * url: addUsingPOST_9URL
 * method: addUsingPOST_9_TYPE
 * raw_url: addUsingPOST_9_RAW_URL
 * @param token - header中token字段
 * @param type - 类型
 * @param param - param
 */
export const addUsingPOST_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{type}/add'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
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
  return request('post', domain + path, body, queryParameters, form, config)
}
export const addUsingPOST_9_RAW_URL = function() {
  return '/rent/unit/{type}/add'
}
export const addUsingPOST_9_TYPE = function() {
  return 'post'
}
export const addUsingPOST_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{type}/add'
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
 * 单元、广告位、写字楼、场地列表
 * request: listUsingGET_11
 * url: listUsingGET_11URL
 * method: listUsingGET_11_TYPE
 * raw_url: listUsingGET_11_RAW_URL
 * @param token - header中token字段
 * @param type - 类型
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param code - 单元号
 * @param buildId - 楼宇ID
 * @param floorId - 楼层ID
 * @param status - 状态
 */
export const listUsingGET_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{type}/list'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
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
  return '/rent/unit/{type}/list'
}
export const listUsingGET_11_TYPE = function() {
  return 'get'
}
export const listUsingGET_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{type}/list'
  path = path.replace('{type}', `${parameters['type']}`)
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
 * 单元、广告位、写字楼、场地修改
 * request: updateUsingPUT_11
 * url: updateUsingPUT_11URL
 * method: updateUsingPUT_11_TYPE
 * raw_url: updateUsingPUT_11_RAW_URL
 * @param token - header中token字段
 * @param type - 类型
 * @param param - param
 */
export const updateUsingPUT_11 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/rent/unit/{type}/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
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
export const updateUsingPUT_11_RAW_URL = function() {
  return '/rent/unit/{type}/{id}'
}
export const updateUsingPUT_11_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_11URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/rent/unit/{type}/{id}'
  path = path.replace('{type}', `${parameters['type']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}