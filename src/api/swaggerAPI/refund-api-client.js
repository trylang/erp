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
 *                    ERP-销售返款API.
 ==========================================================*/
/**
 * 支付宝账单明细查询列表
 * request: getDetailListForPageUsingGET
 * url: getDetailListForPageUsingGETURL
 * method: getDetailListForPageUsingGET_TYPE
 * raw_url: getDetailListForPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const getDetailListForPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/detail/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDetailListForPageUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/detail/list'
}
export const getDetailListForPageUsingGET_TYPE = function() {
  return 'get'
}
export const getDetailListForPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/detail/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 支付宝账单详情列表导出
 * request: detailToExcelUsingGET
 * url: detailToExcelUsingGETURL
 * method: detailToExcelUsingGET_TYPE
 * raw_url: detailToExcelUsingGET_RAW_URL
 * @param token - header中token字段
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param tradeType - 微信：交易状态(为`SUCCESS代表销售，为 `REFUND代表退货）；支付宝：业务类型(交易代表销售，退款代表退货）
 */
export const detailToExcelUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/detail/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailToExcelUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/detail/list/toExcel'
}
export const detailToExcelUsingGET_TYPE = function() {
  return 'get'
}
export const detailToExcelUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/detail/list/toExcel'
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 支付宝账单明细合计
 * request: billDetailTotalUsingGET
 * url: billDetailTotalUsingGETURL
 * method: billDetailTotalUsingGET_TYPE
 * raw_url: billDetailTotalUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const billDetailTotalUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/detail/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billDetailTotalUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/detail/list/total'
}
export const billDetailTotalUsingGET_TYPE = function() {
  return 'get'
}
export const billDetailTotalUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/detail/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 支付宝账单查询列表
 * request: getListForPageUsingGET
 * url: getListForPageUsingGETURL
 * method: getListForPageUsingGET_TYPE
 * raw_url: getListForPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const getListForPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/list'
}
export const getListForPageUsingGET_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 支付宝账单查询列表导出
 * request: toExcelUsingGET
 * url: toExcelUsingGETURL
 * method: toExcelUsingGET_TYPE
 * raw_url: toExcelUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const toExcelUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const toExcelUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/list/toExcel'
}
export const toExcelUsingGET_TYPE = function() {
  return 'get'
}
export const toExcelUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 支付宝账单合计
 * request: billTotalUsingGET
 * url: billTotalUsingGETURL
 * method: billTotalUsingGET_TYPE
 * raw_url: billTotalUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const billTotalUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/alipay/bill/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billTotalUsingGET_RAW_URL = function() {
  return '/refund/alipay/bill/list/total'
}
export const billTotalUsingGET_TYPE = function() {
  return 'get'
}
export const billTotalUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/alipay/bill/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单明细查询列表
 * request: getDetailListForPageUsingGET_1
 * url: getDetailListForPageUsingGET_1URL
 * method: getDetailListForPageUsingGET_1_TYPE
 * raw_url: getDetailListForPageUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const getDetailListForPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/detail/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDetailListForPageUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/detail/list'
}
export const getDetailListForPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const getDetailListForPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/detail/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单详情列表导出
 * request: detailToExcelUsingGET_1
 * url: detailToExcelUsingGET_1URL
 * method: detailToExcelUsingGET_1_TYPE
 * raw_url: detailToExcelUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param tradeType - 银行：根据交易类型进行判断（2860：销售，2867：退货）；资和信：S：销售，R：退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const detailToExcelUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/detail/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailToExcelUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/detail/list/toExcel'
}
export const detailToExcelUsingGET_1_TYPE = function() {
  return 'get'
}
export const detailToExcelUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/detail/list/toExcel'
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单明细合计
 * request: billDetailTotalUsingGET_1
 * url: billDetailTotalUsingGET_1URL
 * method: billDetailTotalUsingGET_1_TYPE
 * raw_url: billDetailTotalUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const billDetailTotalUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/detail/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billDetailTotalUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/detail/list/total'
}
export const billDetailTotalUsingGET_1_TYPE = function() {
  return 'get'
}
export const billDetailTotalUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/detail/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单查询列表
 * request: getListForPageUsingGET_1
 * url: getListForPageUsingGET_1URL
 * method: getListForPageUsingGET_1_TYPE
 * raw_url: getListForPageUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const getListForPageUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/list'
}
export const getListForPageUsingGET_1_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单查询列表导出
 * request: toExcelUsingGET_1
 * url: toExcelUsingGET_1URL
 * method: toExcelUsingGET_1_TYPE
 * raw_url: toExcelUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const toExcelUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const toExcelUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/list/toExcel'
}
export const toExcelUsingGET_1_TYPE = function() {
  return 'get'
}
export const toExcelUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行账单合计
 * request: billTotalUsingGET_1
 * url: billTotalUsingGET_1URL
 * method: billTotalUsingGET_1_TYPE
 * raw_url: billTotalUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const billTotalUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/bill/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billTotalUsingGET_1_RAW_URL = function() {
  return '/refund/bank/bill/list/total'
}
export const billTotalUsingGET_1_TYPE = function() {
  return 'get'
}
export const billTotalUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/bill/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加银行终端号
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
  let path = '/refund/bank/terminal'
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
  return '/refund/bank/terminal'
}
export const addUsingPOST_2_TYPE = function() {
  return 'post'
}
export const addUsingPOST_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑银行终端号
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
  let path = '/refund/bank/terminal'
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
  return '/refund/bank/terminal'
}
export const updateUsingPUT_2_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 银行终端号、资和信终端号编辑调用：该记录是否在有效期内，如果在，不允许编辑
 * request: isValidUsingGET_1
 * url: isValidUsingGET_1URL
 * method: isValidUsingGET_1_TYPE
 * raw_url: isValidUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const isValidUsingGET_1 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/terminal/isValid/{id}'
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
export const isValidUsingGET_1_RAW_URL = function() {
  return '/refund/bank/terminal/isValid/{id}'
}
export const isValidUsingGET_1_TYPE = function() {
  return 'get'
}
export const isValidUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal/isValid/{id}'
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
 * 终端号管理查询列表
 * request: getListForPageUsingGET_7
 * url: getListForPageUsingGET_7URL
 * method: getListForPageUsingGET_7_TYPE
 * raw_url: getListForPageUsingGET_7_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param queryParam - 店铺Code/店铺名称/终端号
 * @param type - 类型：0银行终端号 1资和信终端号
 * @param cardType - 资和信终端号管理：资和信卡类型：0专属卡1商通卡
 */
export const getListForPageUsingGET_7 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/terminal/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['queryParam'] !== undefined) {
    queryParameters['queryParam'] = parameters['queryParam']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_7_RAW_URL = function() {
  return '/refund/bank/terminal/list'
}
export const getListForPageUsingGET_7_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_7URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['queryParam'] !== undefined) {
    queryParameters['queryParam'] = parameters['queryParam']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据店铺id获取POS数量
 * request: getPosNumUsingGET
 * url: getPosNumUsingGETURL
 * method: getPosNumUsingGET_TYPE
 * raw_url: getPosNumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getPosNumUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/bank/terminal/pos/num/{id}'
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
export const getPosNumUsingGET_RAW_URL = function() {
  return '/refund/bank/terminal/pos/num/{id}'
}
export const getPosNumUsingGET_TYPE = function() {
  return 'get'
}
export const getPosNumUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal/pos/num/{id}'
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
 * 获取银行终端号详情
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
  let path = '/refund/bank/terminal/{id}'
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
  return '/refund/bank/terminal/{id}'
}
export const detailUsingGET_2_TYPE = function() {
  return 'get'
}
export const detailUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal/{id}'
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
 * 删除银行终端号
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
  let path = '/refund/bank/terminal/{id}'
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
  return '/refund/bank/terminal/{id}'
}
export const deleteUsingDELETE_2_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/bank/terminal/{id}'
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
 * 保存对账文件
 * request: saveBillFileUsingPOST
 * url: saveBillFileUsingPOSTURL
 * method: saveBillFileUsingPOST_TYPE
 * raw_url: saveBillFileUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param id - 住键ID
 * @param fileName - 文件名称
 * @param type - 文件类型 公共数据的渠道信息
 */
export const saveBillFileUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/billfile/add'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['fileName'] !== undefined) {
    queryParameters['fileName'] = parameters['fileName']
  }
  if (parameters['fileName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fileName'))
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
export const saveBillFileUsingPOST_RAW_URL = function() {
  return '/refund/billfile/add'
}
export const saveBillFileUsingPOST_TYPE = function() {
  return 'post'
}
export const saveBillFileUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/billfile/add'
  if (parameters['id'] !== undefined) {
    queryParameters['id'] = parameters['id']
  }
  if (parameters['fileName'] !== undefined) {
    queryParameters['fileName'] = parameters['fileName']
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
 * 上传对账文件
 * request: fileImportUsingPOST
 * url: fileImportUsingPOSTURL
 * method: fileImportUsingPOST_TYPE
 * raw_url: fileImportUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 */
export const fileImportUsingPOST = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/billfile/import'
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
export const fileImportUsingPOST_RAW_URL = function() {
  return '/refund/billfile/import'
}
export const fileImportUsingPOST_TYPE = function() {
  return 'post'
}
export const fileImportUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/billfile/import'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 对账文件列表
 * request: getListForPageUsingGET_2
 * url: getListForPageUsingGET_2URL
 * method: getListForPageUsingGET_2_TYPE
 * raw_url: getListForPageUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param fileName - 文件名称
 * @param type - 文件类型
 */
export const getListForPageUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/billfile/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['fileName'] !== undefined) {
    queryParameters['fileName'] = parameters['fileName']
  }
  if (parameters['fileName'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: fileName'))
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
export const getListForPageUsingGET_2_RAW_URL = function() {
  return '/refund/billfile/list'
}
export const getListForPageUsingGET_2_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/billfile/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['fileName'] !== undefined) {
    queryParameters['fileName'] = parameters['fileName']
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
 * 银行、资和信卡类型
 * request: getCardTypeUsingGET
 * url: getCardTypeUsingGETURL
 * method: getCardTypeUsingGET_TYPE
 * raw_url: getCardTypeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getCardTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/card/type'
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
export const getCardTypeUsingGET_RAW_URL = function() {
  return '/refund/common/card/type'
}
export const getCardTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getCardTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/card/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 渠道数据
 * request: getChannelUsingGET
 * url: getChannelUsingGETURL
 * method: getChannelUsingGET_TYPE
 * raw_url: getChannelUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getChannelUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/channel'
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
export const getChannelUsingGET_RAW_URL = function() {
  return '/refund/common/channel'
}
export const getChannelUsingGET_TYPE = function() {
  return 'get'
}
export const getChannelUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/channel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 任务状态
 * request: getTaskStatusUsingGET
 * url: getTaskStatusUsingGETURL
 * method: getTaskStatusUsingGET_TYPE
 * raw_url: getTaskStatusUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getTaskStatusUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/task/status'
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
export const getTaskStatusUsingGET_RAW_URL = function() {
  return '/refund/common/task/status'
}
export const getTaskStatusUsingGET_TYPE = function() {
  return 'get'
}
export const getTaskStatusUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/task/status'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 任务类型
 * request: getTaskTypeUsingGET
 * url: getTaskTypeUsingGETURL
 * method: getTaskTypeUsingGET_TYPE
 * raw_url: getTaskTypeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getTaskTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/task/type'
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
export const getTaskTypeUsingGET_RAW_URL = function() {
  return '/refund/common/task/type'
}
export const getTaskTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getTaskTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/task/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 交易类型
 * request: getTradeTypeUsingGET
 * url: getTradeTypeUsingGETURL
 * method: getTradeTypeUsingGET_TYPE
 * raw_url: getTradeTypeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getTradeTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/trade/type'
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
export const getTradeTypeUsingGET_RAW_URL = function() {
  return '/refund/common/trade/type'
}
export const getTradeTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getTradeTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/trade/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信卡类型
 * request: getZHXCardTypeUsingGET
 * url: getZHXCardTypeUsingGETURL
 * method: getZHXCardTypeUsingGET_TYPE
 * raw_url: getZHXCardTypeUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getZHXCardTypeUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/common/zhx/card/type'
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
export const getZHXCardTypeUsingGET_RAW_URL = function() {
  return '/refund/common/zhx/card/type'
}
export const getZHXCardTypeUsingGET_TYPE = function() {
  return 'get'
}
export const getZHXCardTypeUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/common/zhx/card/type'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单明细查询列表
 * request: getDetailListForPageUsingGET_2
 * url: getDetailListForPageUsingGET_2URL
 * method: getDetailListForPageUsingGET_2_TYPE
 * raw_url: getDetailListForPageUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const getDetailListForPageUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/detail/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDetailListForPageUsingGET_2_RAW_URL = function() {
  return '/refund/epay/bill/detail/list'
}
export const getDetailListForPageUsingGET_2_TYPE = function() {
  return 'get'
}
export const getDetailListForPageUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/detail/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单详情列表导出
 * request: detailToExcelUsingGET_2
 * url: detailToExcelUsingGET_2URL
 * method: detailToExcelUsingGET_2_TYPE
 * raw_url: detailToExcelUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const detailToExcelUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/detail/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailToExcelUsingGET_2_RAW_URL = function() {
  return '/refund/epay/bill/detail/list/toExcel'
}
export const detailToExcelUsingGET_2_TYPE = function() {
  return 'get'
}
export const detailToExcelUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/detail/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单明细合计
 * request: billDetailTotalUsingGET_2
 * url: billDetailTotalUsingGET_2URL
 * method: billDetailTotalUsingGET_2_TYPE
 * raw_url: billDetailTotalUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const billDetailTotalUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/detail/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billDetailTotalUsingGET_2_RAW_URL = function() {
  return '/refund/epay/bill/detail/list/total'
}
export const billDetailTotalUsingGET_2_TYPE = function() {
  return 'get'
}
export const billDetailTotalUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/detail/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单查询列表
 * request: getListForPageUsingGET_3
 * url: getListForPageUsingGET_3URL
 * method: getListForPageUsingGET_3_TYPE
 * raw_url: getListForPageUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const getListForPageUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_3_RAW_URL = function() {
  return '/refund/epay/bill/list'
}
export const getListForPageUsingGET_3_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单查询列表导出
 * request: toExcelUsingGET_2
 * url: toExcelUsingGET_2URL
 * method: toExcelUsingGET_2_TYPE
 * raw_url: toExcelUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const toExcelUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const toExcelUsingGET_2_RAW_URL = function() {
  return '/refund/epay/bill/list/toExcel'
}
export const toExcelUsingGET_2_TYPE = function() {
  return 'get'
}
export const toExcelUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 翼支付账单合计
 * request: billTotalUsingGET_2
 * url: billTotalUsingGET_2URL
 * method: billTotalUsingGET_2_TYPE
 * raw_url: billTotalUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const billTotalUsingGET_2 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/epay/bill/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billTotalUsingGET_2_RAW_URL = function() {
  return '/refund/epay/bill/list/total'
}
export const billTotalUsingGET_2_TYPE = function() {
  return 'get'
}
export const billTotalUsingGET_2URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/epay/bill/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据渠道和卡类型查询有效的：手续费设置
 * request: getFeeSetUsingGET
 * url: getFeeSetUsingGETURL
 * method: getFeeSetUsingGET_TYPE
 * raw_url: getFeeSetUsingGET_RAW_URL
 * @param token - header中token字段
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param cardType - 手续费设置：卡类型：资和信：0大悦城资和信卡 1资和信商通卡 ；银行：2内卡3外卡 
 */
export const getFeeSetUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/fee/set'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getFeeSetUsingGET_RAW_URL = function() {
  return '/refund/fee/set'
}
export const getFeeSetUsingGET_TYPE = function() {
  return 'get'
}
export const getFeeSetUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set'
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加手续费设置
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
  let path = '/refund/fee/set'
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
  return '/refund/fee/set'
}
export const addUsingPOST_TYPE = function() {
  return 'post'
}
export const addUsingPOSTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑手续费设置
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
  let path = '/refund/fee/set'
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
  return '/refund/fee/set'
}
export const updateUsingPUT_TYPE = function() {
  return 'put'
}
export const updateUsingPUTURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 手续费设置、例外店手续费设置编辑调用：该记录是否在有效期内，如果在，不允许编辑
 * request: isValidUsingGET
 * url: isValidUsingGETURL
 * method: isValidUsingGET_TYPE
 * raw_url: isValidUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const isValidUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/fee/set/isValid/{id}'
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
export const isValidUsingGET_RAW_URL = function() {
  return '/refund/fee/set/isValid/{id}'
}
export const isValidUsingGET_TYPE = function() {
  return 'get'
}
export const isValidUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set/isValid/{id}'
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
 * 手续费设置查询列表
 * request: getListForPageUsingGET_4
 * url: getListForPageUsingGET_4URL
 * method: getListForPageUsingGET_4_TYPE
 * raw_url: getListForPageUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param type - 类型：0手续费设置 1例外店手续费设置
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param cardType - 手续费设置：卡类型：资和信：0大悦城资和信卡 1资和信商通卡 ；银行：2内卡3外卡 
 * @param shopQuery - 例外店手续费设置：店铺号/店铺名
 */
export const getListForPageUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/fee/set/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['shopQuery'] !== undefined) {
    queryParameters['shopQuery'] = parameters['shopQuery']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_4_RAW_URL = function() {
  return '/refund/fee/set/list'
}
export const getListForPageUsingGET_4_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['shopQuery'] !== undefined) {
    queryParameters['shopQuery'] = parameters['shopQuery']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 根据渠道和卡类型、店铺号查询有效的：例外店手续费设置
 * request: getShopFeeSetUsingGET
 * url: getShopFeeSetUsingGETURL
 * method: getShopFeeSetUsingGET_TYPE
 * raw_url: getShopFeeSetUsingGET_RAW_URL
 * @param token - header中token字段
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param cardType - 手续费设置：卡类型：资和信：0大悦城资和信卡 1资和信商通卡 ；银行：2内卡3外卡 
 * @param shopCode - 店铺号
 */
export const getShopFeeSetUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/fee/set/shop'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['shopCode'] !== undefined) {
    queryParameters['shopCode'] = parameters['shopCode']
  }
  if (parameters['shopCode'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: shopCode'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getShopFeeSetUsingGET_RAW_URL = function() {
  return '/refund/fee/set/shop'
}
export const getShopFeeSetUsingGET_TYPE = function() {
  return 'get'
}
export const getShopFeeSetUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set/shop'
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
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
 * 获取手续费设置详情
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
  let path = '/refund/fee/set/{id}'
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
  return '/refund/fee/set/{id}'
}
export const detailUsingGET_TYPE = function() {
  return 'get'
}
export const detailUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set/{id}'
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
 * 删除手续费设置
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
  let path = '/refund/fee/set/{id}'
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
  return '/refund/fee/set/{id}'
}
export const deleteUsingDELETE_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETEURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/fee/set/{id}'
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
 * 添加例外店手续费设置
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
  let path = '/refund/shop/fee/set'
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
  return '/refund/shop/fee/set'
}
export const addUsingPOST_1_TYPE = function() {
  return 'post'
}
export const addUsingPOST_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/shop/fee/set'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑例外店手续费设置
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
  let path = '/refund/shop/fee/set'
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
  return '/refund/shop/fee/set'
}
export const updateUsingPUT_1_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/shop/fee/set'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 例外店手续费设置查询列表
 * request: getListForPageUsingGET_5
 * url: getListForPageUsingGET_5URL
 * method: getListForPageUsingGET_5_TYPE
 * raw_url: getListForPageUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param type - 类型：0手续费设置 1例外店手续费设置
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param cardType - 手续费设置：卡类型：资和信：0大悦城资和信卡 1资和信商通卡 ；银行：2内卡3外卡 
 * @param shopQuery - 例外店手续费设置：店铺号/店铺名
 */
export const getListForPageUsingGET_5 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/shop/fee/set/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['shopQuery'] !== undefined) {
    queryParameters['shopQuery'] = parameters['shopQuery']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_5_RAW_URL = function() {
  return '/refund/shop/fee/set/list'
}
export const getListForPageUsingGET_5_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_5URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/shop/fee/set/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['shopQuery'] !== undefined) {
    queryParameters['shopQuery'] = parameters['shopQuery']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取例外店手续费设置详情
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
  let path = '/refund/shop/fee/set/{id}'
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
  return '/refund/shop/fee/set/{id}'
}
export const detailUsingGET_1_TYPE = function() {
  return 'get'
}
export const detailUsingGET_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/shop/fee/set/{id}'
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
 * 删除例外店手续费设置
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
  let path = '/refund/shop/fee/set/{id}'
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
  return '/refund/shop/fee/set/{id}'
}
export const deleteUsingDELETE_1_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_1URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/shop/fee/set/{id}'
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
 * 数据中心务中心查询列表
 * request: getListForDataCenterPageUsingGET
 * url: getListForDataCenterPageUsingGETURL
 * method: getListForDataCenterPageUsingGET_TYPE
 * raw_url: getListForDataCenterPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param type - 任务类型 0返款计算1数据导出
 * @param status - 任务状态 0成功1进行中2失败
 */
export const getListForDataCenterPageUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/task/data/center'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForDataCenterPageUsingGET_RAW_URL = function() {
  return '/refund/task/data/center'
}
export const getListForDataCenterPageUsingGET_TYPE = function() {
  return 'get'
}
export const getListForDataCenterPageUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/task/data/center'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
 * 任务中心下载
 * request: downloadUsingGET
 * url: downloadUsingGETURL
 * method: downloadUsingGET_TYPE
 * raw_url: downloadUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const downloadUsingGET = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/task/download'
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
export const downloadUsingGET_RAW_URL = function() {
  return '/refund/task/download'
}
export const downloadUsingGET_TYPE = function() {
  return 'get'
}
export const downloadUsingGETURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/task/download'
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
 * 任务中心查询列表
 * request: getListForPageUsingGET_6
 * url: getListForPageUsingGET_6URL
 * method: getListForPageUsingGET_6_TYPE
 * raw_url: getListForPageUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param type - 任务类型 0返款计算1数据导出
 * @param status - 任务状态 0成功1进行中2失败
 */
export const getListForPageUsingGET_6 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/task/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_6_RAW_URL = function() {
  return '/refund/task/list'
}
export const getListForPageUsingGET_6_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_6URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/task/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
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
 * 微信账单明细查询列表
 * request: getDetailListForPageUsingGET_3
 * url: getDetailListForPageUsingGET_3URL
 * method: getDetailListForPageUsingGET_3_TYPE
 * raw_url: getDetailListForPageUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const getDetailListForPageUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/detail/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDetailListForPageUsingGET_3_RAW_URL = function() {
  return '/refund/wechat/bill/detail/list'
}
export const getDetailListForPageUsingGET_3_TYPE = function() {
  return 'get'
}
export const getDetailListForPageUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/detail/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 微信账单详情列表导出
 * request: detailToExcelUsingGET_3
 * url: detailToExcelUsingGET_3URL
 * method: detailToExcelUsingGET_3_TYPE
 * raw_url: detailToExcelUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param tradeType - 微信：交易状态(为`SUCCESS代表销售，为 `REFUND代表退货）；支付宝：业务类型(交易代表销售，退款代表退货）
 */
export const detailToExcelUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/detail/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailToExcelUsingGET_3_RAW_URL = function() {
  return '/refund/wechat/bill/detail/list/toExcel'
}
export const detailToExcelUsingGET_3_TYPE = function() {
  return 'get'
}
export const detailToExcelUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/detail/list/toExcel'
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 微信账单明细合计
 * request: billDetailTotalUsingGET_3
 * url: billDetailTotalUsingGET_3URL
 * method: billDetailTotalUsingGET_3_TYPE
 * raw_url: billDetailTotalUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const billDetailTotalUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/detail/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billDetailTotalUsingGET_3_RAW_URL = function() {
  return '/refund/wechat/bill/detail/list/total'
}
export const billDetailTotalUsingGET_3_TYPE = function() {
  return 'get'
}
export const billDetailTotalUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/detail/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 微信账单查询列表
 * request: getListForPageUsingGET_8
 * url: getListForPageUsingGET_8URL
 * method: getListForPageUsingGET_8_TYPE
 * raw_url: getListForPageUsingGET_8_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const getListForPageUsingGET_8 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_8_RAW_URL = function() {
  return '/refund/wechat/bill/list'
}
export const getListForPageUsingGET_8_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_8URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 微信账单查询列表导出
 * request: toExcelUsingGET_3
 * url: toExcelUsingGET_3URL
 * method: toExcelUsingGET_3_TYPE
 * raw_url: toExcelUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const toExcelUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const toExcelUsingGET_3_RAW_URL = function() {
  return '/refund/wechat/bill/list/toExcel'
}
export const toExcelUsingGET_3_TYPE = function() {
  return 'get'
}
export const toExcelUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 微信账单合计
 * request: billTotalUsingGET_3
 * url: billTotalUsingGET_3URL
 * method: billTotalUsingGET_3_TYPE
 * raw_url: billTotalUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const billTotalUsingGET_3 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/wechat/bill/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billTotalUsingGET_3_RAW_URL = function() {
  return '/refund/wechat/bill/list/total'
}
export const billTotalUsingGET_3_TYPE = function() {
  return 'get'
}
export const billTotalUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/wechat/bill/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单明细查询列表
 * request: getDetailListForPageUsingGET_4
 * url: getDetailListForPageUsingGET_4URL
 * method: getDetailListForPageUsingGET_4_TYPE
 * raw_url: getDetailListForPageUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const getDetailListForPageUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/detail/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDetailListForPageUsingGET_4_RAW_URL = function() {
  return '/refund/zhx/bill/detail/list'
}
export const getDetailListForPageUsingGET_4_TYPE = function() {
  return 'get'
}
export const getDetailListForPageUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/detail/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单详情列表导出
 * request: detailToExcelUsingGET_4
 * url: detailToExcelUsingGET_4URL
 * method: detailToExcelUsingGET_4_TYPE
 * raw_url: detailToExcelUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param tradeType - 银行：根据交易类型进行判断（2860：销售，2867：退货）；资和信：S：销售，R：退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const detailToExcelUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/detail/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const detailToExcelUsingGET_4_RAW_URL = function() {
  return '/refund/zhx/bill/detail/list/toExcel'
}
export const detailToExcelUsingGET_4_TYPE = function() {
  return 'get'
}
export const detailToExcelUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/detail/list/toExcel'
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单明细合计
 * request: billDetailTotalUsingGET_4
 * url: billDetailTotalUsingGET_4URL
 * method: billDetailTotalUsingGET_4_TYPE
 * raw_url: billDetailTotalUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道:0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单：0大悦城资和信卡 1资和信商通卡 ；银行账单：2内卡3外卡
 * @param tradeType - 0代表销售，1代表退货
 * @param terminalNumFrom - 终端号起
 * @param terminalNumTo - 终端号至
 */
export const billDetailTotalUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/detail/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billDetailTotalUsingGET_4_RAW_URL = function() {
  return '/refund/zhx/bill/detail/list/total'
}
export const billDetailTotalUsingGET_4_TYPE = function() {
  return 'get'
}
export const billDetailTotalUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/detail/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters['tradeType'] !== undefined) {
    queryParameters['tradeType'] = parameters['tradeType']
  }
  if (parameters['terminalNumFrom'] !== undefined) {
    queryParameters['terminalNumFrom'] = parameters['terminalNumFrom']
  }
  if (parameters['terminalNumTo'] !== undefined) {
    queryParameters['terminalNumTo'] = parameters['terminalNumTo']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单查询列表
 * request: getListForPageUsingGET_9
 * url: getListForPageUsingGET_9URL
 * method: getListForPageUsingGET_9_TYPE
 * raw_url: getListForPageUsingGET_9_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const getListForPageUsingGET_9 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_9_RAW_URL = function() {
  return '/refund/zhx/bill/list'
}
export const getListForPageUsingGET_9_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_9URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单查询列表导出
 * request: toExcelUsingGET_4
 * url: toExcelUsingGET_4URL
 * method: toExcelUsingGET_4_TYPE
 * raw_url: toExcelUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const toExcelUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/list/toExcel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const toExcelUsingGET_4_RAW_URL = function() {
  return '/refund/zhx/bill/list/toExcel'
}
export const toExcelUsingGET_4_TYPE = function() {
  return 'get'
}
export const toExcelUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/list/toExcel'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信账单合计
 * request: billTotalUsingGET_4
 * url: billTotalUsingGET_4URL
 * method: billTotalUsingGET_4_TYPE
 * raw_url: billTotalUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param channel - 渠道：0微信1支付宝2银行3翼支付4资和信
 * @param shopCodeFrom - 店铺号起
 * @param shopCodeTo - 店铺号至
 * @param tradeDateFrom - 交易日期起
 * @param tradeDateTo - 交易日期至
 * @param cardType - 卡类型：资和信账单用：0大悦城资和信卡 1资和信商通卡 
 */
export const billTotalUsingGET_4 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/bill/list/total'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['channel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: channel'))
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const billTotalUsingGET_4_RAW_URL = function() {
  return '/refund/zhx/bill/list/total'
}
export const billTotalUsingGET_4_TYPE = function() {
  return 'get'
}
export const billTotalUsingGET_4URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/bill/list/total'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['channel'] !== undefined) {
    queryParameters['channel'] = parameters['channel']
  }
  if (parameters['shopCodeFrom'] !== undefined) {
    queryParameters['shopCodeFrom'] = parameters['shopCodeFrom']
  }
  if (parameters['shopCodeTo'] !== undefined) {
    queryParameters['shopCodeTo'] = parameters['shopCodeTo']
  }
  if (parameters['tradeDateFrom'] !== undefined) {
    queryParameters['tradeDateFrom'] = parameters['tradeDateFrom']
  }
  if (parameters['tradeDateTo'] !== undefined) {
    queryParameters['tradeDateTo'] = parameters['tradeDateTo']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 添加资和信终端号
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
  let path = '/refund/zhx/terminal'
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
  return '/refund/zhx/terminal'
}
export const addUsingPOST_3_TYPE = function() {
  return 'post'
}
export const addUsingPOST_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/terminal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 编辑资和信终端号
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
  let path = '/refund/zhx/terminal'
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
  return '/refund/zhx/terminal'
}
export const updateUsingPUT_3_TYPE = function() {
  return 'put'
}
export const updateUsingPUT_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/terminal'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 资和信终端号管理查询列表
 * request: getListForPageUsingGET_10
 * url: getListForPageUsingGET_10URL
 * method: getListForPageUsingGET_10_TYPE
 * raw_url: getListForPageUsingGET_10_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param queryParam - 店铺Code/店铺名称/终端号
 * @param type - 类型：0银行终端号 1资和信终端号
 * @param cardType - 资和信终端号管理：资和信卡类型：0专属卡1商通卡
 */
export const getListForPageUsingGET_10 = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/refund/zhx/terminal/list'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['queryParam'] !== undefined) {
    queryParameters['queryParam'] = parameters['queryParam']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['type'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: type'))
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getListForPageUsingGET_10_RAW_URL = function() {
  return '/refund/zhx/terminal/list'
}
export const getListForPageUsingGET_10_TYPE = function() {
  return 'get'
}
export const getListForPageUsingGET_10URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/terminal/list'
  if (parameters['pageNum'] !== undefined) {
    queryParameters['pageNum'] = parameters['pageNum']
  }
  if (parameters['pageSize'] !== undefined) {
    queryParameters['pageSize'] = parameters['pageSize']
  }
  if (parameters['queryParam'] !== undefined) {
    queryParameters['queryParam'] = parameters['queryParam']
  }
  if (parameters['type'] !== undefined) {
    queryParameters['type'] = parameters['type']
  }
  if (parameters['cardType'] !== undefined) {
    queryParameters['cardType'] = parameters['cardType']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 获取资和信终端号详情
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
  let path = '/refund/zhx/terminal/{id}'
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
  return '/refund/zhx/terminal/{id}'
}
export const detailUsingGET_3_TYPE = function() {
  return 'get'
}
export const detailUsingGET_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/terminal/{id}'
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
 * 删除资和信终端号
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
  let path = '/refund/zhx/terminal/{id}'
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
  return '/refund/zhx/terminal/{id}'
}
export const deleteUsingDELETE_3_TYPE = function() {
  return 'delete'
}
export const deleteUsingDELETE_3URL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/refund/zhx/terminal/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}