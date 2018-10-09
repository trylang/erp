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
  function f(key, value) {
    if ( value === '') {
      return undefined;
    }
    return value;
  }
  queryParameters=JSON.parse(JSON.stringify(queryParameters,f))
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
 *                    ERP-数据中心API.
 ==========================================================*/
/**
 * 已收列表
 * request: queryAlreadyUsingPOST
 * url: queryAlreadyUsingPOSTURL
 * method: queryAlreadyUsingPOST_TYPE
 * raw_url: queryAlreadyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param query - query
 */
export const queryAlreadyUsingPOST = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/ShopBill/getAlreadyList'
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
export const queryAlreadyUsingPOST_RAW_URL = function() {
    return '/report/ShopBill/getAlreadyList'
}
export const queryAlreadyUsingPOST_TYPE = function() {
    return 'post'
}
export const queryAlreadyUsingPOSTURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/ShopBill/getAlreadyList'
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据物业性质获取费用项目下拉框
 * request: getCostItemUsingGET
 * url: getCostItemUsingGETURL
 * method: getCostItemUsingGET_TYPE
 * raw_url: getCostItemUsingGET_RAW_URL
 * @param token - header中token字段
 * @param flag - flag
 */
export const getCostItemUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/ShopBill/getCostItem/'
  let body
  let queryParameters = {}
  let form = {}
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
export const getCostItemUsingGET_RAW_URL = function() {
  return '/report/ShopBill/getCostItem/'
}
export const getCostItemUsingGET_TYPE = function() {
  return 'get'
}
export const getCostItemUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/ShopBill/getCostItem/'
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
 * 应收列表
 * request: queryPayTypeInfoUsingPOST
 * url: queryPayTypeInfoUsingPOSTURL
 * method: queryPayTypeInfoUsingPOST_TYPE
 * raw_url: queryPayTypeInfoUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const queryPayTypeInfoUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/ShopBill/getList'
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
export const queryPayTypeInfoUsingPOST_RAW_URL = function() {
  return '/report/ShopBill/getList'
}
export const queryPayTypeInfoUsingPOST_TYPE = function() {
  return 'post'
}
export const queryPayTypeInfoUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/ShopBill/getList'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 应收列表信息导出
 * request: exportPayTypeInfoUsingPOST
 * url: exportPayTypeInfoUsingPOSTURL
 * method: exportPayTypeInfoUsingPOST_TYPE
 * raw_url: exportPayTypeInfoUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const exportPayTypeInfoUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/ShopBill/getListExport'
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
export const exportPayTypeInfoUsingPOST_RAW_URL = function() {
  return '/report/ShopBill/getListExport'
}
export const exportPayTypeInfoUsingPOST_TYPE = function() {
  return 'post'
}
export const exportPayTypeInfoUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/ShopBill/getListExport'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 应收列表信息导出
 * request: exportPayTypeInfoForAlreadyUsingPOST
 * url: exportPayTypeInfoForAlreadyUsingPOSTURL
 * method: exportPayTypeInfoForAlreadyUsingPOST_TYPE
 * raw_url: exportPayTypeInfoForAlreadyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param query - query
 */
export const exportPayTypeInfoForAlreadyUsingPOST = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/ShopBill/getListExportForAlready'
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
export const exportPayTypeInfoForAlreadyUsingPOST_RAW_URL = function() {
    return '/report/ShopBill/getListExportForAlready'
}
export const exportPayTypeInfoForAlreadyUsingPOST_TYPE = function() {
    return 'post'
}
export const exportPayTypeInfoForAlreadyUsingPOSTURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/ShopBill/getListExportForAlready'
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 账单调整维护记录导出
 * request: exportAdjustMaintainRecordUsingGET
 * url: exportAdjustMaintainRecordUsingGETURL
 * method: exportAdjustMaintainRecordUsingGET_TYPE
 * raw_url: exportAdjustMaintainRecordUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startTime - 操作开始时间
 * @param endTime - 操作结束时间
 * @param contractCode - 合同编号
 */
export const exportAdjustMaintainRecordUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bamrecord/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startTime'] !== undefined) {
    queryParameters['startTime'] = parameters['startTime']
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['endTime'] = parameters['endTime']
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
export const exportAdjustMaintainRecordUsingGET_RAW_URL = function() {
  return '/report/bamrecord/export'
}
export const exportAdjustMaintainRecordUsingGET_TYPE = function() {
  return 'get'
}
export const exportAdjustMaintainRecordUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bamrecord/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startTime'] !== undefined) {
    queryParameters['startTime'] = parameters['startTime']
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['endTime'] = parameters['endTime']
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
 * 账单调整维护记录
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startTime - 操作开始时间
 * @param endTime - 操作结束时间
 * @param contractCode - 合同编号
 * @param  - 
 */
export const listUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bamrecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startTime'] !== undefined) {
    queryParameters['startTime'] = parameters['startTime']
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['endTime'] = parameters['endTime']
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
export const listUsingGET_RAW_URL = function() {
  return '/report/bamrecord/list'
}
export const listUsingGET_TYPE = function() {
  return 'get'
}
export const listUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bamrecord/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startTime'] !== undefined) {
    queryParameters['startTime'] = parameters['startTime']
  }
  if (parameters['endTime'] !== undefined) {
    queryParameters['endTime'] = parameters['endTime']
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
 * 商户结算（确认收入）导出
 * request: exportBusinessSettlementConfirmUsingGET
 * url: exportBusinessSettlementConfirmUsingGETURL
 * method: exportBusinessSettlementConfirmUsingGET_TYPE
 * raw_url: exportBusinessSettlementConfirmUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 */
export const exportBusinessSettlementConfirmUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsconfirm/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const exportBusinessSettlementConfirmUsingGET_RAW_URL = function() {
  return '/report/bsconfirm/export'
}
export const exportBusinessSettlementConfirmUsingGET_TYPE = function() {
  return 'get'
}
export const exportBusinessSettlementConfirmUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsconfirm/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 *  商户结算（确认收入）列表
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsconfirm/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listUsingGET_1_RAW_URL = function() {
  return '/report/bsconfirm/list'
}
export const listUsingGET_1_TYPE = function() {
  return 'get'
}
export const listUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsconfirm/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户结算(欠款)导出
 * request: exportBusinessSettlementReceivableUsingGET
 * url: exportBusinessSettlementReceivableUsingGETURL
 * method: exportBusinessSettlementReceivableUsingGET_TYPE
 * raw_url: exportBusinessSettlementReceivableUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期开始日期
 * @param cycleEndMonth - 周期结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 */
export const exportBusinessSettlementReceivableUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsdebt/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const exportBusinessSettlementReceivableUsingGET_RAW_URL = function() {
  return '/report/bsdebt/export'
}
export const exportBusinessSettlementReceivableUsingGET_TYPE = function() {
  return 'get'
}
export const exportBusinessSettlementReceivableUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsdebt/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户结算(欠款)
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期开始日期
 * @param cycleEndMonth - 周期结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsdebt/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listUsingGET_2_RAW_URL = function() {
  return '/report/bsdebt/list'
}
export const listUsingGET_2_TYPE = function() {
  return 'get'
}
export const listUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsdebt/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户结算(已收)导出
 * request: exportBusinessSettlementReceivedUsingGET
 * url: exportBusinessSettlementReceivedUsingGETURL
 * method: exportBusinessSettlementReceivedUsingGET_TYPE
 * raw_url: exportBusinessSettlementReceivedUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 */
export const exportBusinessSettlementReceivedUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsreceived/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const exportBusinessSettlementReceivedUsingGET_RAW_URL = function() {
  return '/report/bsreceived/export'
}
export const exportBusinessSettlementReceivedUsingGET_TYPE = function() {
  return 'get'
}
export const exportBusinessSettlementReceivedUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsreceived/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户结算(已收)列表
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsreceived/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listUsingGET_3_RAW_URL = function() {
  return '/report/bsreceived/list'
}
export const listUsingGET_3_TYPE = function() {
  return 'get'
}
export const listUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsreceived/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 商户下拉选项
 * request: merchantlistUsingGET
 * url: merchantlistUsingGETURL
 * method: merchantlistUsingGET_TYPE
 * raw_url: merchantlistUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const merchantlistUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsreceived/merchantlist'
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
export const merchantlistUsingGET_RAW_URL = function() {
  return '/report/bsreceived/merchantlist'
}
export const merchantlistUsingGET_TYPE = function() {
  return 'get'
}
export const merchantlistUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsreceived/merchantlist'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 前台固定数据返回接口
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param flag - 获取数据类型：物业性质为1，业态楼层为2，商铺写字楼为3
 */
export const listUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/commonController/getData/{flag}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{flag}', `${parameters['flag']}`)
  if (parameters['flag'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: flag'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const listUsingGET_4_RAW_URL = function() {
  return '/report/commonController/getData/{flag}'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/commonController/getData/{flag}'
  path = path.replace('{flag}', `${parameters['flag']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 到期合同统计展示接口
 * request: expireUsingPOST
 * url: expireUsingPOSTURL
 * method: expireUsingPOST_TYPE
 * raw_url: expireUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const expireUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/expire'
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
export const expireUsingPOST_RAW_URL = function() {
  return '/report/contracat/expire'
}
export const expireUsingPOST_TYPE = function() {
  return 'post'
}
export const expireUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/expire'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同统计数据导出
 * request: poiContractUsingPOST
 * url: poiContractUsingPOSTURL
 * method: poiContractUsingPOST_TYPE
 * raw_url: poiContractUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const poiContractUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/poi/contract'
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
export const poiContractUsingPOST_RAW_URL = function() {
  return '/report/contracat/poi/contract'
}
export const poiContractUsingPOST_TYPE = function() {
  return 'post'
}
export const poiContractUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/poi/contract'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 三个月到期合同信息导出
 * request: expireExportUsingPOST
 * url: expireExportUsingPOSTURL
 * method: expireExportUsingPOST_TYPE
 * raw_url: expireExportUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const expireExportUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/poi/expire'
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
export const expireExportUsingPOST_RAW_URL = function() {
  return '/report/contracat/poi/expire'
}
export const expireExportUsingPOST_TYPE = function() {
  return 'post'
}
export const expireExportUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/poi/expire'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 店铺租约信息导出
 * request: poiUsingPOST
 * url: poiUsingPOSTURL
 * method: poiUsingPOST_TYPE
 * raw_url: poiUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const poiUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/poi/shopLeas'
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
export const poiUsingPOST_RAW_URL = function() {
  return '/report/contracat/poi/shopLeas'
}
export const poiUsingPOST_TYPE = function() {
  return 'post'
}
export const poiUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/poi/shopLeas'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 备注
 * request: selectUsingGET
 * url: selectUsingGETURL
 * method: selectUsingGET_TYPE
 * raw_url: selectUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const selectUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/select'
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
export const selectUsingGET_RAW_URL = function() {
  return '/report/contracat/select'
}
export const selectUsingGET_TYPE = function() {
  return 'get'
}
export const selectUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/select'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 备注
 * request: selectAllUsingGET
 * url: selectAllUsingGETURL
 * method: selectAllUsingGET_TYPE
 * raw_url: selectAllUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const selectAllUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/selectAll'
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
export const selectAllUsingGET_RAW_URL = function() {
  return '/report/contracat/selectAll'
}
export const selectAllUsingGET_TYPE = function() {
  return 'get'
}
export const selectAllUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/selectAll'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 店铺租约统计展示接口
 * request: shopUsingPOST
 * url: shopUsingPOSTURL
 * method: shopUsingPOST_TYPE
 * raw_url: shopUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const shopUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/shop'
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
export const shopUsingPOST_RAW_URL = function() {
  return '/report/contracat/shop'
}
export const shopUsingPOST_TYPE = function() {
  return 'post'
}
export const shopUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/shop'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同统计展示接口
 * request: signUsingPOST
 * url: signUsingPOSTURL
 * method: signUsingPOST_TYPE
 * raw_url: signUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const signUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/sign'
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
export const signUsingPOST_RAW_URL = function() {
  return '/report/contracat/sign'
}
export const signUsingPOST_TYPE = function() {
  return 'post'
}
export const signUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/sign'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 备注
 * request: signTypeUsingGET
 * url: signTypeUsingGETURL
 * method: signTypeUsingGET_TYPE
 * raw_url: signTypeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const signTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/contracat/sign/type'
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
export const signTypeUsingGET_RAW_URL = function() {
  return '/report/contracat/sign/type'
}
export const signTypeUsingGET_TYPE = function() {
  return 'get'
}
export const signTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/contracat/sign/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 合同结算统计报表导出
 * request: exportContractSettlementStatisticsUsingGET
 * url: exportContractSettlementStatisticsUsingGETURL
 * method: exportContractSettlementStatisticsUsingGET_TYPE
 * raw_url: exportContractSettlementStatisticsUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 */
export const exportContractSettlementStatisticsUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/csstatistics/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const exportContractSettlementStatisticsUsingGET_RAW_URL = function() {
  return '/report/csstatistics/export'
}
export const exportContractSettlementStatisticsUsingGET_TYPE = function() {
  return 'get'
}
export const exportContractSettlementStatisticsUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/csstatistics/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 合同结算统计报表
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/csstatistics/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const listUsingGET_5_RAW_URL = function() {
  return '/report/csstatistics/list'
}
export const listUsingGET_5_TYPE = function() {
  return 'get'
}
export const listUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/csstatistics/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 免租维护记录表导出
 * request: exportRentFreeMaintainRecordUsingGET
 * url: exportRentFreeMaintainRecordUsingGETURL
 * method: exportRentFreeMaintainRecordUsingGET_TYPE
 * raw_url: exportRentFreeMaintainRecordUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 操作开始时间
 * @param endDate - 操作结束时间
 * @param contractCode - 合同编号
 */
export const exportRentFreeMaintainRecordUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/rfmrecord/export'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
export const exportRentFreeMaintainRecordUsingGET_RAW_URL = function() {
  return '/report/rfmrecord/export'
}
export const exportRentFreeMaintainRecordUsingGET_TYPE = function() {
  return 'get'
}
export const exportRentFreeMaintainRecordUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/rfmrecord/export'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 免租维护记录表
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 操作开始时间
 * @param endDate - 操作结束时间
 * @param contractCode - 合同编号
 * @param  - 
 */
export const listUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/rfmrecord/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
export const listUsingGET_6_RAW_URL = function() {
  return '/report/rfmrecord/list'
}
export const listUsingGET_6_TYPE = function() {
  return 'get'
}
export const listUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/rfmrecord/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 业态楼层销售，查询
 * request: businessTypeAndFloorSalesListUsingGET
 * url: businessTypeAndFloorSalesListUsingGETURL
 * method: businessTypeAndFloorSalesListUsingGET_TYPE
 * raw_url: businessTypeAndFloorSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期，格式如2018-03-09
 * @param endDate - 结束日期，开始日期，格式如2018-04-28
 * @param businessTypeOrFloorCode - 业态/楼层的编号，比如1代表全部，2代表业态，3代表楼层
 * @param floorId - 楼层ID
 * @param marketCode -
 * @param marketId -
 */
export const businessTypeAndFloorSalesListUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/businesstypeandfloorsaleslist'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const businessTypeAndFloorSalesListUsingGET_RAW_URL = function() {
    return '/report/salestatistic/businesstypeandfloorsaleslist'
}
export const businessTypeAndFloorSalesListUsingGET_TYPE = function() {
    return 'get'
}
export const businessTypeAndFloorSalesListUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/businesstypeandfloorsaleslist'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
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
 * 业态楼层销售，合计
 * request: businessTypeAndFloorSalesListSumUsingGET
 * url: businessTypeAndFloorSalesListSumUsingGETURL
 * method: businessTypeAndFloorSalesListSumUsingGET_TYPE
 * raw_url: businessTypeAndFloorSalesListSumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期，格式如2018-03-09
 * @param endDate - 结束日期，开始日期，格式如2018-04-28
 * @param businessTypeOrFloorCode - 业态/楼层的编号，比如1代表全部，2代表业态，3代表楼层
 * @param floorId - 楼层ID
 * @param marketCode -
 * @param marketId -
 */
export const businessTypeAndFloorSalesListSumUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/businesstypeandfloorsaleslist/sum'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const businessTypeAndFloorSalesListSumUsingGET_RAW_URL = function() {
    return '/report/salestatistic/businesstypeandfloorsaleslist/sum'
}
export const businessTypeAndFloorSalesListSumUsingGET_TYPE = function() {
    return 'get'
}
export const businessTypeAndFloorSalesListSumUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/businesstypeandfloorsaleslist/sum'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
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
 * 业态楼层销售数据，导出
 * request: exportBusinessTypeAndFloorSalesListUsingGET
 * url: exportBusinessTypeAndFloorSalesListUsingGETURL
 * method: exportBusinessTypeAndFloorSalesListUsingGET_TYPE
 * raw_url: exportBusinessTypeAndFloorSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期，格式如2018-03-09
 * @param endDate - 结束日期，开始日期，格式如2018-04-28
 * @param businessTypeOrFloorCode - 业态/楼层的编号，比如1代表全部，2代表业态，3代表楼层
 * @param floorId - 楼层ID
 * @param marketCode -
 * @param marketId -
 */
export const exportBusinessTypeAndFloorSalesListUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/export/businesstypeandfloorsaleslist'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const exportBusinessTypeAndFloorSalesListUsingGET_RAW_URL = function() {
    return '/report/salestatistic/export/businesstypeandfloorsaleslist'
}
export const exportBusinessTypeAndFloorSalesListUsingGET_TYPE = function() {
    return 'get'
}
export const exportBusinessTypeAndFloorSalesListUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/export/businesstypeandfloorsaleslist'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['businessTypeOrFloorCode'] !== undefined) {
        queryParameters['businessTypeOrFloorCode'] = parameters['businessTypeOrFloorCode']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
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
 * 月销售汇总，导出
 * request: exportMmonthSalesListUsingGET
 * url: exportMmonthSalesListUsingGETURL
 * method: exportMmonthSalesListUsingGET_TYPE
 * raw_url: exportMmonthSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param yearAndMonth - 哪一年，哪一月，格式如2018-03
 * @param floorId - 楼层的ID
 * @param shopCode - 店铺编号
 * @param marketCode - 购物中心编号
 * @param penOrAmon - 1销售额/2交易笔数
 */

export const exportMmonthSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/monthsaleslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['yearAndMonth'] !== undefined) {
      queryParameters['yearAndMonth'] = parameters['yearAndMonth']
  }
  if (parameters['floorId'] !== undefined) {
      queryParameters['floorId'] = parameters['floorId']
  }
  if (parameters['shopCode'] !== undefined) {
      queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['marketCode'] !== undefined) {
      queryParameters['marketCode'] = parameters['marketCode']
  }
  if (parameters['penOrAmon'] !== undefined) {
      queryParameters['penOrAmon'] = parameters['penOrAmon']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportMmonthSalesListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/monthsaleslist'
}
export const exportMmonthSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const exportMmonthSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/monthsaleslist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
      queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['yearAndMonth'] !== undefined) {
      queryParameters['yearAndMonth'] = parameters['yearAndMonth']
  }
  if (parameters['floorId'] !== undefined) {
      queryParameters['floorId'] = parameters['floorId']
  }
  if (parameters['shopCode'] !== undefined) {
      queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['marketCode'] !== undefined) {
      queryParameters['marketCode'] = parameters['marketCode']
  }
  if (parameters['penOrAmon'] !== undefined) {
      queryParameters['penOrAmon'] = parameters['penOrAmon']
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
 * 销售数据，导出
 * request: exportOrderSalesDataListUsingGET
 * url: exportOrderSalesDataListUsingGETURL
 * method: exportOrderSalesDataListUsingGET_TYPE
 * raw_url: exportOrderSalesDataListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @param orderCode - 销售单号
 * @param shopCode - 销售单号
 */
export const exportOrderSalesDataListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/ordersalesdatalist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['orderCode'] !== undefined) {
    queryParameters['orderCode'] = parameters['orderCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportOrderSalesDataListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/ordersalesdatalist'
}
export const exportOrderSalesDataListUsingGET_TYPE = function() {
  return 'get'
}
export const exportOrderSalesDataListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/ordersalesdatalist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['orderCode'] !== undefined) {
    queryParameters['orderCode'] = parameters['orderCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
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
 * 商户自助平台---付款管理，导出。该接口是提供给自助平台的，供跨服务调用。数据中心前端勿调用。
 * request: exportPlatformPaymentManageListUsingGET
 * url: exportPlatformPaymentManageListUsingGETURL
 * method: exportPlatformPaymentManageListUsingGET_TYPE
 * raw_url: exportPlatformPaymentManageListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const exportPlatformPaymentManageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/platformpaymentmanagelist'
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
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportPlatformPaymentManageListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/platformpaymentmanagelist'
}
export const exportPlatformPaymentManageListUsingGET_TYPE = function() {
  return 'get'
}
export const exportPlatformPaymentManageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/platformpaymentmanagelist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 商户自助平台---销售明细，导出。该接口是提供给自助平台的，供跨服务调用。数据中心前端勿调用。
 * request: exportPlatformSalesDetailListUsingGET
 * url: exportPlatformSalesDetailListUsingGETURL
 * method: exportPlatformSalesDetailListUsingGET_TYPE
 * raw_url: exportPlatformSalesDetailListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const exportPlatformSalesDetailListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/platformsalesdetaillist'
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
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportPlatformSalesDetailListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/platformsalesdetaillist'
}
export const exportPlatformSalesDetailListUsingGET_TYPE = function() {
  return 'get'
}
export const exportPlatformSalesDetailListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/platformsalesdetaillist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 店铺业态销售汇总表，导出
 * request: exportShopBusinessTypeSalesListUsingGET
 * url: exportShopBusinessTypeSalesListUsingGETURL
 * method: exportShopBusinessTypeSalesListUsingGET_TYPE
 * raw_url: exportShopBusinessTypeSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const exportShopBusinessTypeSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/shopbusinesstypesaleslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportShopBusinessTypeSalesListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/shopbusinesstypesaleslist'
}
export const exportShopBusinessTypeSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const exportShopBusinessTypeSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/shopbusinesstypesaleslist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 店铺销售报表，导出
 * request: exportShopDaySalesListUsingGET
 * url: exportShopDaySalesListUsingGETURL
 * method: exportShopDaySalesListUsingGET_TYPE
 * raw_url: exportShopDaySalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const exportShopDaySalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/shopdaysaleslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportShopDaySalesListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/shopdaysaleslist'
}
export const exportShopDaySalesListUsingGET_TYPE = function() {
  return 'get'
}
export const exportShopDaySalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/shopdaysaleslist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 店铺付款方式明细表，导出
 * request: exportShopPaymentDetailListUsingGET
 * url: exportShopPaymentDetailListUsingGETURL
 * method: exportShopPaymentDetailListUsingGET_TYPE
 * raw_url: exportShopPaymentDetailListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const exportShopPaymentDetailListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/shoppaymentdetaillist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportShopPaymentDetailListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/shoppaymentdetaillist'
}
export const exportShopPaymentDetailListUsingGET_TYPE = function() {
  return 'get'
}
export const exportShopPaymentDetailListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/shoppaymentdetaillist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 付款方式汇总，导出
 * request: exportShopPaymentListUsingGET
 * url: exportShopPaymentListUsingGETURL
 * method: exportShopPaymentListUsingGET_TYPE
 * raw_url: exportShopPaymentListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const exportShopPaymentListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/export/shoppaymentlist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const exportShopPaymentListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/export/shoppaymentlist'
}
export const exportShopPaymentListUsingGET_TYPE = function() {
  return 'get'
}
export const exportShopPaymentListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/export/shoppaymentlist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 月销售汇总，查询
 * request: monthSalesListUsingGET
 * url: monthSalesListUsingGETURL
 * method: monthSalesListUsingGET_TYPE
 * raw_url: monthSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param yearAndMonth - 哪一年，哪一月，格式如2018-03
 * @param floorId - 楼层的ID
 * @param shopCode - 店铺编号
 * @param marketCode - 购物中心编号
 * @param penOrAmon - 1销售额/2交易笔数
 */
export const monthSalesListUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/monthsaleslist'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['yearAndMonth'] !== undefined) {
        queryParameters['yearAndMonth'] = parameters['yearAndMonth']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['shopCode'] !== undefined) {
        queryParameters['shopCode'] = parameters['shopCode']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['penOrAmon'] !== undefined) {
        queryParameters['penOrAmon'] = parameters['penOrAmon']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const monthSalesListUsingGET_RAW_URL = function() {
    return '/report/salestatistic/monthsaleslist'
}
export const monthSalesListUsingGET_TYPE = function() {
    return 'get'
}
export const monthSalesListUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/monthsaleslist'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['yearAndMonth'] !== undefined) {
        queryParameters['yearAndMonth'] = parameters['yearAndMonth']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['shopCode'] !== undefined) {
        queryParameters['shopCode'] = parameters['shopCode']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['penOrAmon'] !== undefined) {
        queryParameters['penOrAmon'] = parameters['penOrAmon']
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
 * 月销售汇总，合计
 * request: monthSalesSumUsingGET
 * url: monthSalesSumUsingGETURL
 * method: monthSalesSumUsingGET_TYPE
 * raw_url: monthSalesSumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param yearAndMonth - 哪一年，哪一月，格式如2018-03
 * @param floorId - 楼层的ID
 * @param shopCode - 店铺编号
 * @param marketCode - 购物中心编号
 * @param penOrAmon - 1销售额/2交易笔数
 */
export const monthSalesSumUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/monthsaleslist/sum'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['yearAndMonth'] !== undefined) {
        queryParameters['yearAndMonth'] = parameters['yearAndMonth']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['shopCode'] !== undefined) {
        queryParameters['shopCode'] = parameters['shopCode']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['penOrAmon'] !== undefined) {
        queryParameters['penOrAmon'] = parameters['penOrAmon']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const monthSalesSumUsingGET_RAW_URL = function() {
    return '/report/salestatistic/monthsaleslist/sum'
}
export const monthSalesSumUsingGET_TYPE = function() {
    return 'get'
}
export const monthSalesSumUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/monthsaleslist/sum'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['yearAndMonth'] !== undefined) {
        queryParameters['yearAndMonth'] = parameters['yearAndMonth']
    }
    if (parameters['floorId'] !== undefined) {
        queryParameters['floorId'] = parameters['floorId']
    }
    if (parameters['shopCode'] !== undefined) {
        queryParameters['shopCode'] = parameters['shopCode']
    }
    if (parameters['marketCode'] !== undefined) {
        queryParameters['marketCode'] = parameters['marketCode']
    }
    if (parameters['penOrAmon'] !== undefined) {
        queryParameters['penOrAmon'] = parameters['penOrAmon']
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
 * 销售数据，查询
 * request: orderSalesDataListUsingGET
 * url: orderSalesDataListUsingGETURL
 * method: orderSalesDataListUsingGET_TYPE
 * raw_url: orderSalesDataListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @param orderCode - 销售单号
 * @param shopCode - 销售单号
 */
export const orderSalesDataListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/ordersalesdatalist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['orderCode'] !== undefined) {
    queryParameters['orderCode'] = parameters['orderCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const orderSalesDataListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/ordersalesdatalist'
}
export const orderSalesDataListUsingGET_TYPE = function() {
  return 'get'
}
export const orderSalesDataListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/ordersalesdatalist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['orderCode'] !== undefined) {
    queryParameters['orderCode'] = parameters['orderCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
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
 * 商户自助平台---付款管理，查询。该接口是提供给自助平台的，供跨服务调用。数据中心前端勿调用。
 * request: platformPaymentManageListUsingGET
 * url: platformPaymentManageListUsingGETURL
 * method: platformPaymentManageListUsingGET_TYPE
 * raw_url: platformPaymentManageListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const platformPaymentManageListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/platformpaymentmanagelist'
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
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const platformPaymentManageListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/platformpaymentmanagelist'
}
export const platformPaymentManageListUsingGET_TYPE = function() {
  return 'get'
}
export const platformPaymentManageListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/platformpaymentmanagelist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 商户自助平台--销售明细，查询。该接口是提供给自助平台的，供跨服务调用。数据中心前端勿调用。
 * request: platformSalesDetailListUsingGET
 * url: platformSalesDetailListUsingGETURL
 * method: platformSalesDetailListUsingGET_TYPE
 * raw_url: platformSalesDetailListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const platformSalesDetailListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/platformsalesdetaillist'
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
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const platformSalesDetailListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/platformsalesdetaillist'
}
export const platformSalesDetailListUsingGET_TYPE = function() {
  return 'get'
}
export const platformSalesDetailListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/platformsalesdetaillist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['merchantCode'] !== undefined) {
    queryParameters['merchantCode'] = parameters['merchantCode']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
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
 * 店铺业态销售汇总表，查询
 * request: shopBusinessTypeSalesListUsingGET
 * url: shopBusinessTypeSalesListUsingGETURL
 * method: shopBusinessTypeSalesListUsingGET_TYPE
 * raw_url: shopBusinessTypeSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 * @param oneId - 一级业态ID
 * @param twoId - 二级业态ID
 */
export const shopBusinessTypeSalesListUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/shopbusinesstypesaleslist'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['startDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: startDate'))
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['endDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: endDate'))
    }
    if (parameters['startCode'] !== undefined) {
        queryParameters['startCode'] = parameters['startCode']
    }
    if (parameters['endCode'] !== undefined) {
        queryParameters['endCode'] = parameters['endCode']
    }
    if (parameters['oneId'] !== undefined) {
        queryParameters['oneId'] = parameters['oneId']
    }
    if (parameters['twoId'] !== undefined) {
        queryParameters['twoId'] = parameters['twoId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const shopBusinessTypeSalesListUsingGET_RAW_URL = function() {
    return '/report/salestatistic/shopbusinesstypesaleslist'
}
export const shopBusinessTypeSalesListUsingGET_TYPE = function() {
    return 'get'
}
export const shopBusinessTypeSalesListUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/shopbusinesstypesaleslist'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['startCode'] !== undefined) {
        queryParameters['startCode'] = parameters['startCode']
    }
    if (parameters['endCode'] !== undefined) {
        queryParameters['endCode'] = parameters['endCode']
    }
    if (parameters['oneId'] !== undefined) {
        queryParameters['oneId'] = parameters['oneId']
    }
    if (parameters['twoId'] !== undefined) {
        queryParameters['twoId'] = parameters['twoId']
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
 * 店铺业态销售汇总表，合计
 * request: exportShopBusinessTypeSalesListSumUsingGET
 * url: exportShopBusinessTypeSalesListSumUsingGETURL
 * method: exportShopBusinessTypeSalesListSumUsingGET_TYPE
 * raw_url: exportShopBusinessTypeSalesListSumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 * @param oneId - 一级业态ID
 * @param twoId - 二级业态ID
 */
export const exportShopBusinessTypeSalesListSumUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/salestatistic/export/shopbusinesstypesaleslist/sum'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['startDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: startDate'))
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['endDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: endDate'))
    }
    if (parameters['startCode'] !== undefined) {
        queryParameters['startCode'] = parameters['startCode']
    }
    if (parameters['endCode'] !== undefined) {
        queryParameters['endCode'] = parameters['endCode']
    }
    if (parameters['oneId'] !== undefined) {
        queryParameters['oneId'] = parameters['oneId']
    }
    if (parameters['twoId'] !== undefined) {
        queryParameters['twoId'] = parameters['twoId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const exportShopBusinessTypeSalesListSumUsingGET_RAW_URL = function() {
    return '/report/salestatistic/export/shopbusinesstypesaleslist/sum'
}
export const exportShopBusinessTypeSalesListSumUsingGET_TYPE = function() {
    return 'get'
}
export const exportShopBusinessTypeSalesListSumUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/salestatistic/export/shopbusinesstypesaleslist/sum'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['startCode'] !== undefined) {
        queryParameters['startCode'] = parameters['startCode']
    }
    if (parameters['endCode'] !== undefined) {
        queryParameters['endCode'] = parameters['endCode']
    }
    if (parameters['oneId'] !== undefined) {
        queryParameters['oneId'] = parameters['oneId']
    }
    if (parameters['twoId'] !== undefined) {
        queryParameters['twoId'] = parameters['twoId']
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
 * 店铺销售报表，查询
 * request: shopDaySalesListUsingGET
 * url: shopDaySalesListUsingGETURL
 * method: shopDaySalesListUsingGET_TYPE
 * raw_url: shopDaySalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const shopDaySalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/shopdaysaleslist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopDaySalesListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/shopdaysaleslist'
}
export const shopDaySalesListUsingGET_TYPE = function() {
  return 'get'
}
export const shopDaySalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/shopdaysaleslist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 店铺付款方式明细表，查询
 * request: shopPaymentDetailListUsingGET
 * url: shopPaymentDetailListUsingGETURL
 * method: shopPaymentDetailListUsingGET_TYPE
 * raw_url: shopPaymentDetailListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const shopPaymentDetailListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/shoppaymentdetaillist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopPaymentDetailListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/shoppaymentdetaillist'
}
export const shopPaymentDetailListUsingGET_TYPE = function() {
  return 'get'
}
export const shopPaymentDetailListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/shoppaymentdetaillist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 付款方式汇总，查询
 * request: shopPaymentListUsingGET
 * url: shopPaymentListUsingGETURL
 * method: shopPaymentListUsingGET_TYPE
 * raw_url: shopPaymentListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const shopPaymentListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/shoppaymentlist'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopPaymentListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/shoppaymentlist'
}
export const shopPaymentListUsingGET_TYPE = function() {
  return 'get'
}
export const shopPaymentListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/shoppaymentlist'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 查询1个月以内、2个月内、3个月内、3个月以上到期的店铺信息列表
 * request: expireListUsingGET
 * url: expireListUsingGETURL
 * method: expireListUsingGET_TYPE
 * raw_url: expireListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - 到期类型 1:1个月以内、2:2个月内、3:3个月内、4:3个月以上
 */
export const expireListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/view/shop/expire/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const expireListUsingGET_RAW_URL = function() {
  return '/report/view/shop/expire/list'
}
export const expireListUsingGET_TYPE = function() {
  return 'get'
}
export const expireListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/view/shop/expire/list'
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
 * 查询租金坪效值为<15k以下、>=5k且<10k、>=10k且<20k、>=20k且<50k、>=50k以上的店铺信息列表(1k=1000)
 * request: rentlgefListUsingGET
 * url: rentlgefListUsingGETURL
 * method: rentlgefListUsingGET_TYPE
 * raw_url: rentlgefListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - 销售坪效类型 0:<15k、1:>=5k且<10k、2:>=10k且<20k、3:>=20k且<50k、4：>=50k
 */
export const rentlgefListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/view/shop/rentlgef/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const rentlgefListUsingGET_RAW_URL = function() {
  return '/report/view/shop/rentlgef/list'
}
export const rentlgefListUsingGET_TYPE = function() {
  return 'get'
}
export const rentlgefListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/view/shop/rentlgef/list'
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
 * 查询销售坪效值为<15k以下、>=5k且<10k、>=10k且<20k、>=20k且<50k、>=50k以上的店铺信息列表(1k=1000)
 * request: salelgefListUsingGET
 * url: salelgefListUsingGETURL
 * method: salelgefListUsingGET_TYPE
 * raw_url: salelgefListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param type - 销售坪效类型 0:<15k、1:>=5k且<10k、2:>=10k且<20k、3:>=20k且<50k、4：>=50k
 */
export const salelgefListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/view/shop/salelgef/list'
  let body
  let queryParameters = {}
  let form = {}
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
export const salelgefListUsingGET_RAW_URL = function() {
  return '/report/view/shop/salelgef/list'
}
export const salelgefListUsingGET_TYPE = function() {
  return 'get'
}
export const salelgefListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/view/shop/salelgef/list'
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
 * 合计
 * request: listSumUsingGET_3
 * url: listSumUsingGET_3URL
 * method: listSumUsingGET_3_TYPE
 * raw_url: listSumUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/csstatistics/list/sum'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
export const listSumUsingGET_3_RAW_URL = function() {
  return '/report/csstatistics/list/sum'
}
export const listSumUsingGET_3_TYPE = function() {
  return 'get'
}
export const listSumUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/csstatistics/list/sum'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startMonth'] !== undefined) {
    queryParameters['startMonth'] = parameters['startMonth']
  }
  if (parameters['endMonth'] !== undefined) {
    queryParameters['endMonth'] = parameters['endMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
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
 * 合计
 * request: listSumUsingGET
 * url: listSumUsingGETURL
 * method: listSumUsingGET_TYPE
 * raw_url: listSumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsconfirm/list/sum'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listSumUsingGET_RAW_URL = function() {
  return '/report/bsconfirm/list/sum'
}
export const listSumUsingGET_TYPE = function() {
  return 'get'
}
export const listSumUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsconfirm/list/sum'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 合计
 * request: listSumUsingGET_2
 * url: listSumUsingGET_2URL
 * method: listSumUsingGET_2_TYPE
 * raw_url: listSumUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期月份开始日期
 * @param cycleEndMonth - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsreceived/list/sum'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listSumUsingGET_2_RAW_URL = function() {
  return '/report/bsreceived/list/sum'
}
export const listSumUsingGET_2_TYPE = function() {
  return 'get'
}
export const listSumUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsreceived/list/sum'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 合计
 * request: listSumUsingGET_1
 * url: listSumUsingGET_1URL
 * method: listSumUsingGET_1_TYPE
 * raw_url: listSumUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param cycleStartMonth - 周期开始日期
 * @param cycleEndMonth - 周期结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/bsdebt/list/sum'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
export const listSumUsingGET_1_RAW_URL = function() {
  return '/report/bsdebt/list/sum'
}
export const listSumUsingGET_1_TYPE = function() {
  return 'get'
}
export const listSumUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/bsdebt/list/sum'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['cycleStartMonth'] !== undefined) {
    queryParameters['cycleStartMonth'] = parameters['cycleStartMonth']
  }
  if (parameters['cycleEndMonth'] !== undefined) {
    queryParameters['cycleEndMonth'] = parameters['cycleEndMonth']
  }
  if (parameters['contractCode'] !== undefined) {
    queryParameters['contractCode'] = parameters['contractCode']
  }
  if (parameters['merchantId'] !== undefined) {
    queryParameters['merchantId'] = parameters['merchantId']
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
 * 付款方式列表，查询
 * request: shopPayListUsingGET
 * url: shopPayListUsingGETURL
 * method: shopPayListUsingGET_TYPE
 * raw_url: shopPayListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间,格式必须是年-月-日，如2018-03-05
 * @param endDate - 时间段：结束时间,格式必须是年-月-日，如2018-03-28
 * @param startCode - 店铺编码区间：开始编码
 * @param endCode - 店铺编码区间：结束编码
 */
export const shopPayListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salestatistic/shopPayList'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['startDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: startDate'))
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['endDate'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: endDate'))
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const shopPayListUsingGET_RAW_URL = function() {
  return '/report/salestatistic/shopPayList'
}
export const shopPayListUsingGET_TYPE = function() {
  return 'get'
}
export const shopPayListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salestatistic/shopPayList'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['startDate'] !== undefined) {
    queryParameters['startDate'] = parameters['startDate']
  }
  if (parameters['endDate'] !== undefined) {
    queryParameters['endDate'] = parameters['endDate']
  }
  if (parameters['startCode'] !== undefined) {
    queryParameters['startCode'] = parameters['startCode']
  }
  if (parameters['endCode'] !== undefined) {
    queryParameters['endCode'] = parameters['endCode']
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
 * 重新推送店铺
 * request: resetShopToCrmUsingPOST
 * url: resetShopToCrmUsingPOSTURL
 * method: resetShopToCrmUsingPOST_TYPE
 * raw_url: resetShopToCrmUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - ids
 */
export const resetShopToCrmUsingPOST = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/shopToCrmFailRecord/resetShopToCrm'
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
export const resetShopToCrmUsingPOST_RAW_URL = function() {
    return '/report/shopToCrmFailRecord/resetShopToCrm'
}
export const resetShopToCrmUsingPOST_TYPE = function() {
    return 'post'
}
export const resetShopToCrmUsingPOSTURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/shopToCrmFailRecord/resetShopToCrm'
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 查询推送失败的店铺列表
 * request: selectListUsingGET
 * url: selectListUsingGETURL
 * method: selectListUsingGET_TYPE
 * raw_url: selectListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageSize - pageSize
 * @param pageNum - pageNum
 */
export const selectListUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/shopToCrmFailRecord/selectList'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const selectListUsingGET_RAW_URL = function() {
    return '/report/shopToCrmFailRecord/selectList'
}
export const selectListUsingGET_TYPE = function() {
    return 'get'
}
export const selectListUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/shopToCrmFailRecord/selectList'
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
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
 * 合同单元变更记录
 * request: unitChangeQueryUsingPOST
 * url: unitChangeQueryUsingPOSTURL
 * method: unitChangeQueryUsingPOST_TYPE
 * raw_url: unitChangeQueryUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const unitChangeQueryUsingPOST = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/contracat/unit/change'
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
export const unitChangeQueryUsingPOST_RAW_URL = function() {
    return '/report/contracat/unit/change'
}
export const unitChangeQueryUsingPOST_TYPE = function() {
    return 'post'
}
export const unitChangeQueryUsingPOSTURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/contracat/unit/change'
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 导出合同单元变更记录
 * request: unitChangeExportUsingPOST
 * url: unitChangeExportUsingPOSTURL
 * method: unitChangeExportUsingPOST_TYPE
 * raw_url: unitChangeExportUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const unitChangeExportUsingPOST = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/contracat/poi/unit/change/'
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
export const unitChangeExportUsingPOST_RAW_URL = function() {
    return '/report/contracat/poi/unit/change/'
}
export const unitChangeExportUsingPOST_TYPE = function() {
    return 'post'
}
export const unitChangeExportUsingPOSTURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/contracat/poi/unit/change/'
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}

/**
 * 预收统计
 * request: findUsingGET
 * url: findUsingGETURL
 * method: findUsingGET_TYPE
 * raw_url: findUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间
 * @param endDate - 时间段：结束时间
 * @param propertyType - 物业性质
 * @param contractCode - 合同code
 * @param merchantId - 商户id
 * @param marketId - 选中购物中心id
 */
export const findUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/receiveRecord/find'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['startDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: startDate'))
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['endDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: endDate'))
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
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const findUsingGET_RAW_URL = function() {
    return '/report/receiveRecord/find'
}
export const findUsingGET_TYPE = function() {
    return 'get'
}
export const findUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/receiveRecord/find'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
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
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
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
 * 预收统计导出
 * request: exportUsingGET
 * url: exportUsingGETURL
 * method: exportUsingGET_TYPE
 * raw_url: exportUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 时间段：开始时间
 * @param endDate - 时间段：结束时间
 * @param propertyType - 物业性质
 * @param contractCode - 合同code
 * @param merchantId - 商户id
 * @param marketId - 选中购物中心id
 */
export const exportUsingGET = function(parameters = {}) {
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    const config = parameters.$config
    let path = '/report/receiveRecord/export'
    let body
    let queryParameters = {}
    let form = {}
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['startDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: startDate'))
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
    }
    if (parameters['endDate'] === undefined) {
        return Promise.reject(new Error('Missing required  parameter: endDate'))
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
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        });
    }
    return request('get', domain + path, body, queryParameters, form, config)
}
export const exportUsingGET_RAW_URL = function() {
    return '/report/receiveRecord/export'
}
export const exportUsingGET_TYPE = function() {
    return 'get'
}
export const exportUsingGETURL = function(parameters = {}) {
    let queryParameters = {}
    const domain = parameters.$domain ? parameters.$domain : getDomain()
    let path = '/report/receiveRecord/export'
    if (parameters['pageNum'] !== undefined) {
        queryParameters['pageNum'] = parameters['pageNum']
    }
    if (parameters['pageSize'] !== undefined) {
        queryParameters['pageSize'] = parameters['pageSize']
    }
    if (parameters['startDate'] !== undefined) {
        queryParameters['startDate'] = parameters['startDate']
    }
    if (parameters['endDate'] !== undefined) {
        queryParameters['endDate'] = parameters['endDate']
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
    if (parameters['marketId'] !== undefined) {
        queryParameters['marketId'] = parameters['marketId']
    }
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
            queryParameters[parameterName] = parameters.$queryParameters[parameterName]
        })
    }
    let keys = Object.keys(queryParameters)
    return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}