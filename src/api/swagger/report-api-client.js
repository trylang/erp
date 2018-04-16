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
 *                    ERP-数据中心API.
 ==========================================================*/
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
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
 * 业态楼层销售查询
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
 */
export const businessTypeAndFloorSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/businesstypeandfloorsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const businessTypeAndFloorSalesListUsingGET_RAW_URL = function() {
  return '/report/businesstypeandfloorsaleslist'
}
export const businessTypeAndFloorSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const businessTypeAndFloorSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/businesstypeandfloorsaleslist'
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
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
 * 业态楼层销售数据导出
 * request: downloadBusinessTypeAndFloorSalesListUsingGET
 * url: downloadBusinessTypeAndFloorSalesListUsingGETURL
 * method: downloadBusinessTypeAndFloorSalesListUsingGET_TYPE
 * raw_url: downloadBusinessTypeAndFloorSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期，格式如2018-03-09
 * @param endDate - 结束日期，开始日期，格式如2018-04-28
 * @param businessTypeOrFloorCode - 业态/楼层的编号，比如1代表全部，2代表业态，3代表楼层
 */
export const downloadBusinessTypeAndFloorSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/download/businesstypeandfloorsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const downloadBusinessTypeAndFloorSalesListUsingGET_RAW_URL = function() {
  return '/report/download/businesstypeandfloorsaleslist'
}
export const downloadBusinessTypeAndFloorSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const downloadBusinessTypeAndFloorSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/download/businesstypeandfloorsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 月销售汇总导出
 * request: downloaMmonthSalesListUsingGET
 * url: downloaMmonthSalesListUsingGETURL
 * method: downloaMmonthSalesListUsingGET_TYPE
 * raw_url: downloaMmonthSalesListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param yearAndMonth - 哪一年，哪一月，格式如2018-03
 * @param floorId - 楼层的ID
 * @param shopCode - 店铺编号
 */
export const downloaMmonthSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/download/monthsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const downloaMmonthSalesListUsingGET_RAW_URL = function() {
  return '/report/download/monthsaleslist'
}
export const downloaMmonthSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const downloaMmonthSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/download/monthsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 销售数据导出
 * request: downloadOrderSalesDataListUsingGET
 * url: downloadOrderSalesDataListUsingGETURL
 * method: downloadOrderSalesDataListUsingGET_TYPE
 * raw_url: downloadOrderSalesDataListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @param orderCode - 销售单号
 * @param shopCode - 销售单号
 */
export const downloadOrderSalesDataListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/download/ordersalesdatalist'
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
export const downloadOrderSalesDataListUsingGET_RAW_URL = function() {
  return '/report/download/ordersalesdatalist'
}
export const downloadOrderSalesDataListUsingGET_TYPE = function() {
  return 'get'
}
export const downloadOrderSalesDataListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/download/ordersalesdatalist'
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
 * 为商户自助平台提供的---销售明细下载 接口
 * request: downloadSalesdetailUsingGET
 * url: downloadSalesdetailUsingGETURL
 * method: downloadSalesdetailUsingGET_TYPE
 * raw_url: downloadSalesdetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const downloadSalesdetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/download/salesdetail'
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
export const downloadSalesdetailUsingGET_RAW_URL = function() {
  return '/report/download/salesdetail'
}
export const downloadSalesdetailUsingGET_TYPE = function() {
  return 'get'
}
export const downloadSalesdetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/download/salesdetail'
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
  let path = '/report/expire/{date}'
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
  return '/report/expire/{date}'
}
export const expireUsingPOST_TYPE = function() {
  return 'post'
}
export const expireUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/expire/{date}'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 已收列表
 * request: queryAlreadyUsingPOST
 * url: queryAlreadyUsingPOSTURL
 * method: queryAlreadyUsingPOST_TYPE
 * raw_url: queryAlreadyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const queryAlreadyUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/getAlreadyList'
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
export const queryAlreadyUsingPOST_RAW_URL = function() {
  return '/report/getAlreadyList'
}
export const queryAlreadyUsingPOST_TYPE = function() {
  return 'post'
}
export const queryAlreadyUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/getAlreadyList'
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
  let path = '/report/getCostItem/'
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
  return '/report/getCostItem/'
}
export const getCostItemUsingGET_TYPE = function() {
  return 'get'
}
export const getCostItemUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/getCostItem/'
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
  let path = '/report/getData/{flag}'
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
  return '/report/getData/{flag}'
}
export const listUsingGET_4_TYPE = function() {
  return 'get'
}
export const listUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/getData/{flag}'
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
 * 应收列表
 * request: queryPayTypeInfoUsingPOST_1
 * url: queryPayTypeInfoUsingPOST_1URL
 * method: queryPayTypeInfoUsingPOST_1_TYPE
 * raw_url: queryPayTypeInfoUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const queryPayTypeInfoUsingPOST_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/getList'
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
export const queryPayTypeInfoUsingPOST_1_RAW_URL = function() {
  return '/report/getList'
}
export const queryPayTypeInfoUsingPOST_1_TYPE = function() {
  return 'post'
}
export const queryPayTypeInfoUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/getList'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 月销售汇总查询
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
 */
export const monthSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/monthsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const monthSalesListUsingGET_RAW_URL = function() {
  return '/report/monthsaleslist'
}
export const monthSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const monthSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/monthsaleslist'
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
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 销售数据查询
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
  let path = '/report/ordersalesdatalist'
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
  return '/report/ordersalesdatalist'
}
export const orderSalesDataListUsingGET_TYPE = function() {
  return 'get'
}
export const orderSalesDataListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/ordersalesdatalist'
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
 * 付款方式明细查询
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
  let path = '/report/paytype/info'
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
  return '/report/paytype/info'
}
export const queryPayTypeInfoUsingPOST_TYPE = function() {
  return 'post'
}
export const queryPayTypeInfoUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/paytype/info'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 付款方式汇总查询
 * request: queryPayTypeSumUsingPOST
 * url: queryPayTypeSumUsingPOSTURL
 * method: queryPayTypeSumUsingPOST_TYPE
 * raw_url: queryPayTypeSumUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const queryPayTypeSumUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/paytype/sum'
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
export const queryPayTypeSumUsingPOST_RAW_URL = function() {
  return '/report/paytype/sum'
}
export const queryPayTypeSumUsingPOST_TYPE = function() {
  return 'post'
}
export const queryPayTypeSumUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/paytype/sum'
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
  let path = '/report/poi/contract'
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
  return '/report/poi/contract'
}
export const poiContractUsingPOST_TYPE = function() {
  return 'post'
}
export const poiContractUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/poi/contract'
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
  let path = '/report/poi/expire'

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
  let path = '/report/poi'
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
export const poiBigUsingPOST_RAW_URL = function() {
  return '/report/poiBig'
}
export const poiBigUsingPOST_TYPE = function() {
  return 'post'
}
export const poiBigUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/poiBig'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 为商户自助平台提供的---销售明细打印 接口
 * request: printSalesDetailUsingGET
 * url: printSalesDetailUsingGETURL
 * method: printSalesDetailUsingGET_TYPE
 * raw_url: printSalesDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const printSalesDetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/print/salesdetail'
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
export const printSalesDetailUsingGET_RAW_URL = function() {
  return '/report/print/salesdetail'
}
export const printSalesDetailUsingGET_TYPE = function() {
  return 'get'
}
export const printSalesDetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/print/salesdetail'
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
 * 付款方式查询
 * request: payTypeUsingPOST
 * url: payTypeUsingPOSTURL
 * method: payTypeUsingPOST_TYPE
 * raw_url: payTypeUsingPOST_RAW_URL
 * @param token - header中token字段
 */
export const payTypeUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/query/paytype'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const payTypeUsingPOST_RAW_URL = function() {
  return '/report/query/paytype'
}
export const payTypeUsingPOST_TYPE = function() {
  return 'post'
}
export const payTypeUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/query/paytype'
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
 * 为商户自助平台提供的---销售明细查询 接口
 * request: salesdetailUsingGET
 * url: salesdetailUsingGETURL
 * method: salesdetailUsingGET_TYPE
 * raw_url: salesdetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param shopCode - 店铺编码
 * @param startDate - 起始日期,格式是年-月-日，如2018-03-07
 * @param endDate - 截至日期,格式是年-月-日，如2018-03-29
 */
export const salesdetailUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/salesdetail'
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
export const salesdetailUsingGET_RAW_URL = function() {
  return '/report/salesdetail'
}
export const salesdetailUsingGET_TYPE = function() {
  return 'get'
}
export const salesdetailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/salesdetail'
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
  let path = '/report/select'
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
  return '/report/select'
}
export const selectUsingGET_TYPE = function() {
  return 'get'
}
export const selectUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/select'
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
  let path = '/report/shop'
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
  return '/report/shop'
}
export const shopUsingPOST_TYPE = function() {
  return 'post'
}
export const shopUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/shop'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 店铺业态销售汇总表,查询
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
 */
export const shopBusinessTypeSalesListUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/report/shopbusinesstypesaleslist'
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
export const shopBusinessTypeSalesListUsingGET_RAW_URL = function() {
  return '/report/shopbusinesstypesaleslist'
}
export const shopBusinessTypeSalesListUsingGET_TYPE = function() {
  return 'get'
}
export const shopBusinessTypeSalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/shopbusinesstypesaleslist'
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
 * 店铺销售报表,查询
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
  let path = '/report/shopdaysaleslist'
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
  return '/report/shopdaysaleslist'
}
export const shopDaySalesListUsingGET_TYPE = function() {
  return 'get'
}
export const shopDaySalesListUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/shopdaysaleslist'
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
  let path = '/report/sign'
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
  return '/report/sign'
}
export const signUsingPOST_TYPE = function() {
  return 'post'
}
export const signUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/sign'
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
  let path = '/report/sign/type'
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
  return '/report/sign/type'
}
export const signTypeUsingGET_TYPE = function() {
  return 'get'
}
export const signTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/report/sign/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}