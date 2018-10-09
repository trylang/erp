import * as refundapi from './swaggerAPI/refund-api-client.js';
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

/**
 * 任务状态
 * request: getTaskStatusUsingGET
 * url: getTaskStatusUsingGETURL
 * method: getTaskStatusUsingGET_TYPE
 * raw_url: getTaskStatusUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getTaskStatusUsingGET = function(parameters = {}) {
  return refundapi.getTaskStatusUsingGET(parameters);
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
  return refundapi.getTaskTypeUsingGET(parameters);
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
  return refundapi.getListForDataCenterPageUsingGET(parameters);
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
  return refundapi.downloadUsingGET(parameters);
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
  return refundapi.getListForPageUsingGET_7(parameters);
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
  return refundapi.addUsingPOST_2(parameters);
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
  return refundapi.updateUsingPUT_2(parameters);
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
  return refundapi.getPosNumUsingGET(parameters);
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
  return refundapi.isValidUsingGET_1(parameters);
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
  return refundapi.deleteUsingDELETE_2(parameters);
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
  return refundapi.getListForPageUsingGET_10(parameters);
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
  return refundapi.addUsingPOST_3(parameters);
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
  return refundapi.updateUsingPUT_3(parameters);
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
  return refundapi.deleteUsingDELETE_3(parameters);
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
  return refundapi.getZHXCardTypeUsingGET(parameters);
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
  return refundapi.getListForPageUsingGET_4(parameters);
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
  return refundapi.getCardTypeUsingGET(parameters);
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
  return refundapi.getChannelUsingGET(parameters);
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
  return refundapi.updateUsingPUT(parameters);
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
  return refundapi.addUsingPOST(parameters);
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
  return refundapi.deleteUsingDELETE(parameters);
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
  return refundapi.isValidUsingGET(parameters);
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
  return refundapi.getListForPageUsingGET_5(parameters);
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
  return refundapi.addUsingPOST_1(parameters);
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
  return refundapi.updateUsingPUT_1(parameters);
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
  return refundapi.deleteUsingDELETE_1(parameters);
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
  return refundapi.getListForPageUsingGET_2(parameters);
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
  return refundapi.fileImportUsingPOST(parameters);
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
  return refundapi.getListForPageUsingGET_6(parameters);
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
  return refundapi.saveBillFileUsingPOST(parameters);
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
  return refundapi.toExcelUsingGET_1(parameters);
}

/**
 * 银行账单详情列表导出
 * request: detailToExcelUsingGET_1
 * url: detailToExcelUsingGET_1URL
 * method: detailToExcelUsingGET_1_TYPE
 * raw_url: detailToExcelUsingGET_1_RAW_URL
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
export const detailToExcelUsingGET_1 = function(parameters = {}) {
  return refundapi.detailToExcelUsingGET_1(parameters);
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
  return refundapi.toExcelUsingGET_3(parameters);
}

/**
 * 微信账单详情列表导出
 * request: detailToExcelUsingGET_3
 * url: detailToExcelUsingGET_3URL
 * method: detailToExcelUsingGET_3_TYPE
 * raw_url: detailToExcelUsingGET_3_RAW_URL
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
export const detailToExcelUsingGET_3 = function(parameters = {}) {
  return refundapi.detailToExcelUsingGET_3(parameters);
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
  return refundapi.toExcelUsingGET(parameters);
}

/**
 * 支付宝账单详情列表导出
 * request: detailToExcelUsingGET
 * url: detailToExcelUsingGETURL
 * method: detailToExcelUsingGET_TYPE
 * raw_url: detailToExcelUsingGET_RAW_URL
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
export const detailToExcelUsingGET = function(parameters = {}) {
  return refundapi.detailToExcelUsingGET(parameters);
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
  return refundapi.toExcelUsingGET_2(parameters);
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
export const detailToExcelUsingGET_2 = function(parameters = {}) {
  return refundapi.detailToExcelUsingGET_2(parameters);
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
  return refundapi.toExcelUsingGET_4(parameters);
}

/**
 * 资和信账单详情列表导出
 * request: detailToExcelUsingGET_4
 * url: detailToExcelUsingGET_4URL
 * method: detailToExcelUsingGET_4_TYPE
 * raw_url: detailToExcelUsingGET_4_RAW_URL
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
export const detailToExcelUsingGET_4 = function(parameters = {}) {
  return refundapi.detailToExcelUsingGET_4(parameters);
}

/**
 * 重新计算
 * request: recalculateUsingPOST
 * url: recalculateUsingPOSTURL
 * method: recalculateUsingPOST_TYPE
 * raw_url: recalculateUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const recalculateUsingPOST = function(parameters = {}) {
  return refundapi.recalculateUsingPOST(parameters);
}
