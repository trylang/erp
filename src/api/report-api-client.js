import * as reportapi from './swaggerAPI/report-api-client'

/*==========================================================
 *                    ERP-数据中心API.
 ==========================================================*/
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
 	return reportapi.listUsingGET_4(parameters);
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
  return reportapi.signUsingPOST(parameters);
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
  return reportapi.signTypeUsingGET(parameters);
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
  return reportapi.shopUsingPOST(parameters);
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
  return reportapi.expireUsingPOST(parameters);
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
  return reportapi.selectUsingGET(parameters);
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
  return reportapi.monthSalesListUsingGET(parameters);
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
  return reportapi.downloaMmonthSalesListUsingGET(parameters);
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
  return reportapi.orderSalesDataListUsingGET(parameters);
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
  return reportapi.businessTypeAndFloorSalesListUsingGET(parameters);
}

/**
 * 店铺销售报表查询
 * request: shopUsingPOST_1
 * url: shopUsingPOST_1URL
 * method: shopUsingPOST_1_TYPE
 * raw_url: shopUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const shopUsingPOST_1 = function(parameters = {}) {
  return reportapi.shopDaySalesListUsingGET(parameters);
}


 /* 合同结算统计报表
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
	return reportapi.listUsingGET_5(parameters);
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
  return reportapi.shopBusinessTypeSalesListUsingGET(parameters);
}


