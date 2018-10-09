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
 * 合同统计数据导出
 * request: poiContractUsingPOST
 * url: poiContractUsingPOSTURL
 * method: poiContractUsingPOST_TYPE
 * raw_url: poiContractUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const poiContractUsingPOST = function(parameters = {}) {
	return reportapi.poiContractUsingPOST(parameters);
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
 * 店铺租约信息导出
 * request: poiUsingPOST
 * url: poiUsingPOSTURL
 * method: poiUsingPOST_TYPE
 * raw_url: poiUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const poiUsingPOST = function(parameters = {}) {
	return reportapi.poiUsingPOST(parameters);
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
 * 三个月到期合同信息导出
 * request: expireExportUsingPOST
 * url: expireExportUsingPOSTURL
 * method: expireExportUsingPOST_TYPE
 * raw_url: expireExportUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const expireExportUsingPOST = function(parameters = {}) {
	return reportapi.expireExportUsingPOST(parameters);
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
 * 备注
 * request: selectAllUsingGET
 * url: selectAllUsingGETURL
 * method: selectAllUsingGET_TYPE
 * raw_url: selectAllUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const selectAllUsingGET = function(parameters = {}) {
  return reportapi.selectAllUsingGET(parameters);
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
export const getMonthSalesSum = function(parameters = {}) {
    return reportapi.monthSalesSumUsingGET(parameters);
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
  return reportapi.exportMmonthSalesListUsingGET(parameters);
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
    return reportapi.businessTypeAndFloorSalesListSumUsingGET(parameters);
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
	return reportapi.listUsingGET_1(parameters);
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
	return reportapi.merchantlistUsingGET(parameters);
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
 * @param cycleStartDate - 周期月份开始日期
 * @param cycleEndDate - 周期月份结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 * @param  - 
 */
export const listUsingGET_3 = function(parameters = {}) {
	return reportapi.listUsingGET_3(parameters);
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
 * @param cycleStartDate - 周期开始日期
 * @param cycleEndDate - 周期结束日期
 * @param contractCode - 合同编号
 * @param merchantId - 商户id
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 * @param  - 
 */
export const listUsingGET_2 = function(parameters = {}) {
	return reportapi.listUsingGET_2(parameters);
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
export const queryPayTypeInfoUsingPOST = function(parameters = {}) {
	return reportapi.queryPayTypeInfoUsingPOST(parameters);
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
	return reportapi.queryAlreadyUsingPOST(parameters);
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
	return reportapi.getCostItemUsingGET(parameters);
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
	return reportapi.listUsingGET_6(parameters);
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
	return reportapi.listUsingGET(parameters);
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
	return reportapi.shopPaymentListUsingGET(parameters);
}

/**
 * 店铺付款方式明细表,查询
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
	return reportapi.shopPaymentDetailListUsingGET(parameters);
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
    return reportapi.exportShopBusinessTypeSalesListSumUsingGET(parameters);
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 */
export const exportContractSettlementStatisticsUsingGET = function(parameters = {}) {
	return reportapi.exportContractSettlementStatisticsUsingGET(parameters);
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 */
export const exportBusinessSettlementConfirmUsingGET = function(parameters = {}) {
	return reportapi.exportBusinessSettlementConfirmUsingGET(parameters);
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 */
export const exportBusinessSettlementReceivedUsingGET = function(parameters = {}) {
	return reportapi.exportBusinessSettlementReceivedUsingGET(parameters);
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
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼
 */
export const exportBusinessSettlementReceivableUsingGET = function(parameters = {}) {
	return reportapi.exportBusinessSettlementReceivableUsingGET(parameters);
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
	return reportapi.exportRentFreeMaintainRecordUsingGET(parameters);
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
	return reportapi.exportAdjustMaintainRecordUsingGET(parameters);
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
	return reportapi.exportPayTypeInfoUsingPOST(parameters);
}

/**
 * 已收列表信息导出
 * request: exportPayTypeInfoForAlreadyUsingPOST
 * url: exportPayTypeInfoForAlreadyUsingPOSTURL
 * method: exportPayTypeInfoForAlreadyUsingPOST_TYPE
 * raw_url: exportPayTypeInfoForAlreadyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const exportPayTypeInfoForAlreadyUsingPOST = function(parameters = {}) {
	return reportapi.exportPayTypeInfoForAlreadyUsingPOST(parameters);
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
 */
export const exportMmonthSalesListUsingGET = function(parameters = {}) {
	return reportapi.exportMmonthSalesListUsingGET(parameters);
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
	return reportapi.exportOrderSalesDataListUsingGET(parameters);
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
 */
export const exportBusinessTypeAndFloorSalesListUsingGET = function(parameters = {}) {
	return reportapi.exportBusinessTypeAndFloorSalesListUsingGET(parameters);
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
	return reportapi.exportShopDaySalesListUsingGET(parameters)
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
	return reportapi.exportShopBusinessTypeSalesListUsingGET(parameters);
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
	return reportapi.exportShopPaymentListUsingGET(parameters);
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
	return reportapi.exportShopPaymentDetailListUsingGET(parameters);
}

/**
 * 合计： 合同结算统计报表
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
  return reportapi.listSumUsingGET_3(parameters);
}

/**
 * 合计： 商户结算（确认收入）
 * request: listSumUsingGET
 * url: listSumUsingGETURL
 * method: listSumUsingGET_TYPE
 * raw_url: listSumUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET = function(parameters = {}) {
  return reportapi.listSumUsingGET(parameters);
}

/**
 * 合计: 商户结算（已收）
 * request: listSumUsingGET_2
 * url: listSumUsingGET_2URL
 * method: listSumUsingGET_2_TYPE
 * raw_url: listSumUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET_2 = function(parameters = {}) {
  return reportapi.listSumUsingGET_2(parameters);
}

/**
 * 合计: 商户结算（欠款）
 * request: listSumUsingGET_1
 * url: listSumUsingGET_1URL
 * method: listSumUsingGET_1_TYPE
 * raw_url: listSumUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param startMonth - 结算月开始日期
 * @param endMonth - 结算月结束日期
 * @param contractCode - 合同编号
 * @param propertyType - 物业性质->0:商铺 1:场地 2:广告位 3:写字楼 null:全部
 * @param  - 
 */
export const listSumUsingGET_1 = function(parameters = {}) {
  return reportapi.listSumUsingGET_1(parameters);
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
  return reportapi.shopPayListUsingGET(parameters);
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
export const getSelectListData = function(parameters = {}) {
    return reportapi.selectListUsingGET(parameters);
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
export const resetShopToCrm = function(parameters = {}) {
    return reportapi.resetShopToCrmUsingPOST(parameters);
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
export const unitChangeQueryList = function(parameters = {}) {
    return reportapi.unitChangeQueryUsingPOST(parameters);
}

/**
 * 导出合同单元变更记录
 * request: unitChangeQueryUsingPOST
 * url: unitChangeQueryUsingPOSTURL
 * method: unitChangeQueryUsingPOST_TYPE
 * raw_url: unitChangeQueryUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const unitChangeExportList = function(parameters = {}) {
    return reportapi.unitChangeExportUsingPOST(parameters);
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
export const contractReceiveList = function(parameters = {}) {
    return reportapi.findUsingGET(parameters);
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
export const exportContractReceiveList = function(parameters = {}) {
    return reportapi.exportUsingGET(parameters);
}