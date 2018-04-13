/* eslint-disable */
import * as refundapi from './swaggerAPI/refund-api-client.js';
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
  return refundapi.getListForPageUsingGET_1(parameters);
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
  return refundapi.getDetailListForPageUsingGET_1(parameters);
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
  return refundapi.billDetailTotalUsingGET_1(parameters);
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
  return refundapi.billTotalUsingGET_1(parameters);
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
  return refundapi.getListForPageUsingGET_8(parameters);
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
  return refundapi.getDetailListForPageUsingGET_3(parameters);
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
  return refundapi.billDetailTotalUsingGET_3(parameters);
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
  return refundapi.billTotalUsingGET_3(parameters);
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
  return refundapi.getDetailListForPageUsingGET_4(parameters);
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
  return refundapi.billDetailTotalUsingGET_4(parameters);
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
  return refundapi.getListForPageUsingGET_9(parameters);
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
  return refundapi.billTotalUsingGET_4(parameters);
}

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
  return refundapi.getDetailListForPageUsingGET(parameters);
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
  return refundapi.billDetailTotalUsingGET(parameters);
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
  return refundapi.getListForPageUsingGET(parameters);
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
  return refundapi.billTotalUsingGET(parameters);
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
  return refundapi.getDetailListForPageUsingGET_2(parameters);
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
  return refundapi.billDetailTotalUsingGET_2(parameters);
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
  return refundapi.getListForPageUsingGET_3(parameters);
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
  return refundapi.billTotalUsingGET_2(parameters);
}