import * as rentapi from './swaggerAPI/rent-api-client'

/*==========================================================
 *                    ERP-租务管理API.
 ==========================================================*/
/**
 * 广告位类型添加
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST = function(parameters = {}) {
    return rentapi.addUsingPOST(parameters);
}

/**
 * 广告位类型列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET = function(parameters = {}) {
    return rentapi.listUsingGET(parameters);
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
    return rentapi.getByIdUsingGET(parameters);
}

/**
 * 广告位类型修改
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT = function(parameters = {}) {
    return rentapi.updateUsingPUT(parameters);
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
    return rentapi.updateUsingDELETE(parameters);
}

/**
 * 删除附件
 * request: cdeleteUsingPUT
 * url: cdeleteUsingPUTURL
 * method: cdeleteUsingPUT_TYPE
 * raw_url: cdeleteUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const cdeleteUsingPUT = function(parameters = {}) {
    return rentapi.cdeleteUsingPUT(parameters);
}

/**
 * 编辑附件
 * request: cupdateUsingPUT
 * url: cupdateUsingPUTURL
 * method: cupdateUsingPUT_TYPE
 * raw_url: cupdateUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const cupdateUsingPUT = function(parameters = {}) {
    return rentapi.cupdateUsingPUT(parameters);
}

/**
 * 删除附件
 * request: deleteUsingPUT
 * url: deleteUsingPUTURL
 * method: deleteUsingPUT_TYPE
 * raw_url: deleteUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const deleteUsingPUT = function(parameters = {}) {
    return rentapi.deleteUsingPUT(parameters);
}

/**
 * 编辑附件
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_1 = function(parameters = {}) {
    return rentapi.updateUsingPUT_1(parameters);
}

/**
 * 查询所有附件信息
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listUsingGET_1 = function(parameters = {}) {
    return rentapi.listUsingGET_1(parameters);
}

/**
 * 查询所有附件信息
 * request: listDateOrderUsingGET
 * url: listDateOrderUsingGETURL
 * method: listDateOrderUsingGET_TYPE
 * raw_url: listDateOrderUsingGET_RAW_URL
 * @param token - header中token字段
 * @param tableName - 表名
 * @param tableRowId - 表行ID
 * @param tableRowState - 表行业务状态
 * @param attachmentType - 附件类型
 */
export const listDateOrderUsingGET = function(parameters = {}) {
    return rentapi.listDateOrderUsingGET(parameters);
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
    return rentapi.detailUsingGET(parameters);
}

/**
 * 删除附件
 * request: deleteUsingDELETE
 * url: deleteUsingDELETEURL
 * method: deleteUsingDELETE_TYPE
 * raw_url: deleteUsingDELETE_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE = function(parameters = {}) {
    return rentapi.deleteUsingDELETE(parameters);
}

/**
 * 根据日期判断所属周期
 * request: cycleUsingGET
 * url: cycleUsingGETURL
 * method: cycleUsingGET_TYPE
 * raw_url: cycleUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同主键
 * @param costItemId - 费用项目
 * @param expenseDate - 费用日期
 */
export const cycleUsingGET = function(parameters = {}) {
    return rentapi.cycleUsingGET(parameters);
}

/**
 * 更新周期为已生成结算单状态
 * request: updateCycle2GeneratedUsingPUT
 * url: updateCycle2GeneratedUsingPUTURL
 * method: updateCycle2GeneratedUsingPUT_TYPE
 * raw_url: updateCycle2GeneratedUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const updateCycle2GeneratedUsingPUT = function(parameters = {}) {
    return rentapi.updateCycle2GeneratedUsingPUT(parameters);
}

/**
 * 根据日期判断所属周期
 * request: getByIdUsingGET_1
 * url: getByIdUsingGET_1URL
 * method: getByIdUsingGET_1_TYPE
 * raw_url: getByIdUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const getByIdUsingGET_1 = function(parameters = {}) {
    return rentapi.getByIdUsingGET_1(parameters);
}

/**
 * 添加品牌
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_1 = function(parameters = {}) {
    return rentapi.addUsingPOST_1(parameters);
}

/**
 * 修改品牌状态为空置
 * request: emptyUsingPOST
 * url: emptyUsingPOSTURL
 * method: emptyUsingPOST_TYPE
 * raw_url: emptyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST = function(parameters = {}) {
    return rentapi.emptyUsingPOST(parameters);
}

/**
 * 修改品牌状态为失效
 * request: invalidUsingPOST
 * url: invalidUsingPOSTURL
 * method: invalidUsingPOST_TYPE
 * raw_url: invalidUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST = function(parameters = {}) {
    return rentapi.invalidUsingPOST(parameters);
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
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 业态编号
 */
export const auditListUsingGET = function(parameters = {}) {
    return rentapi.auditListUsingGET(parameters);
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
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 业态编号
 */
export const auditListpgUsingGET = function(parameters = {}) {
    return rentapi.auditListpgUsingGET(parameters);
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
    return rentapi.codeUsingGET(parameters);
}

/**
 * 查询所有国别信息
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_2 = function(parameters = {}) {
    return rentapi.listUsingGET_2(parameters);
}

/**
 * 查询所有品牌项
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param brandCode - 编码
 * @param brandName - 名称
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 业态编号
 */
export const listUsingGET_3 = function(parameters = {}) {
    return rentapi.listUsingGET_3(parameters);
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
 * @param status - 状态：0新增1已确认2.取消
 * @param businessId - 业态编号
 */
export const listpgUsingGET = function(parameters = {}) {
    return rentapi.listpgUsingGET(parameters);
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
    return rentapi.detailUsingGET_1(parameters);
}

/**
 * 编辑品牌
 * request: updateUsingPUT_3
 * url: updateUsingPUT_3URL
 * method: updateUsingPUT_3_TYPE
 * raw_url: updateUsingPUT_3_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_3 = function(parameters = {}) {
    return rentapi.updateUsingPUT_3(parameters);
}

/**
 * 删除品牌
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_1(parameters);
}

/**
 * 修改品牌状态
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateBrandStatus = function(parameters = {}) {
    return rentapi.updateUsingPUT_2(parameters);
}

/**
 * 楼宇列表
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_4 = function(parameters = {}) {
    return rentapi.listUsingGET_4(parameters);
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
    return rentapi.treeListUsingGET(parameters);
}

/**
 * 楼宇类型列表
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_5 = function(parameters = {}) {
    return rentapi.listUsingGET_5(parameters);
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
    return rentapi.selectByIdUsingGET_1(parameters);
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
    return rentapi.selectByIdUsingGET(parameters);
}

/**
 * 添加业态
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_2 = function(parameters = {}) {
    return rentapi.addUsingPOST_2(parameters);
}

/**
 * 查询所有业态信息
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param businessCode - 业态编码
 * @param businessName - 业态名称
 */
export const listUsingGET_6 = function(parameters = {}) {
    return rentapi.listUsingGET_6(parameters);
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
    return rentapi.listpgUsingGET_1(parameters);
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
    return rentapi.treeUsingGET(parameters);
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
    return rentapi.detailUsingGET_2(parameters);
}

/**
 * 编辑业态
 * request: updateUsingPUT_4
 * url: updateUsingPUT_4URL
 * method: updateUsingPUT_4_TYPE
 * raw_url: updateUsingPUT_4_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_4 = function(parameters = {}) {
    return rentapi.updateUsingPUT_4(parameters);
}

/**
 * 删除业态
 * request: deleteUsingDELETE_2
 * url: deleteUsingDELETE_2URL
 * method: deleteUsingDELETE_2_TYPE
 * raw_url: deleteUsingDELETE_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_2 = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_2(parameters);
}

/**
 * 录入/编辑正式合同
 * request: addUsingPOST_3
 * url: addUsingPOST_3URL
 * method: addUsingPOST_3_TYPE
 * raw_url: addUsingPOST_3_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_3 = function(parameters = {}) {
    return rentapi.addUsingPOST_3(parameters);
}

/**
 * 财务预付款调用：根据商户ID查询该商户下的合同
 * request: getContractShopByMerchantUsingGET
 * url: getContractShopByMerchantUsingGETURL
 * method: getContractShopByMerchantUsingGET_TYPE
 * raw_url: getContractShopByMerchantUsingGET_RAW_URL
 * @param token - header中token字段
 * @param merchantId - 商户主键ID
 */
export const getContractShopByMerchantUsingGET = function(parameters = {}) {
    return rentapi.getContractShopByMerchantUsingGET(parameters);
}

/**
 * 财务预付款调用：商户列表
 * request: getMerchantForAdvancePaymentUsingGET
 * url: getMerchantForAdvancePaymentUsingGETURL
 * method: getMerchantForAdvancePaymentUsingGET_TYPE
 * raw_url: getMerchantForAdvancePaymentUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getMerchantForAdvancePaymentUsingGET = function(parameters = {}) {
    return rentapi.getMerchantForAdvancePaymentUsingGET(parameters);
}

/**
 * 添加录入正式合同保证金记录
 * request: addBondUsingPOST
 * url: addBondUsingPOSTURL
 * method: addBondUsingPOST_TYPE
 * raw_url: addBondUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addBondUsingPOST = function(parameters = {}) {
    return rentapi.addBondUsingPOST(parameters);
}

/**
 * 根据合同ID,获取合同的保证金信息。
 * request: getContractBondInfoUsingGET
 * url: getContractBondInfoUsingGETURL
 * method: getContractBondInfoUsingGET_TYPE
 * raw_url: getContractBondInfoUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同的ID
 */
export const getContractBondInfoUsingGET = function(parameters = {}) {
    return rentapi.getContractBondInfoUsingGET(parameters);
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
    return rentapi.cancelUsingPUT(parameters);
}

/**
 * 费用、租金条款变更、延期
 * request: changTermsUsingPOST
 * url: changTermsUsingPOSTURL
 * method: changTermsUsingPOST_TYPE
 * raw_url: changTermsUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param paramList - paramList
 * @param logMap - logMap
 */
export const changTermsUsingPOST = function(parameters = {}) {
    return rentapi.changTermsUsingPOST(parameters);
}

/**
 * 正式合同主体信息变更or延期
 * request: changeSubjectUsingPOST
 * url: changeSubjectUsingPOSTURL
 * method: changeSubjectUsingPOST_TYPE
 * raw_url: changeSubjectUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const changeSubjectUsingPOST = function(parameters = {}) {
    return rentapi.changeSubjectUsingPOST(parameters);
}

/**
 * 查看合同历史及修改详情
 * request: queryLogUsingGET
 * url: queryLogUsingGETURL
 * method: queryLogUsingGET_TYPE
 * raw_url: queryLogUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractCode - contractCode
 */
export const queryLogUsingGET = function(parameters = {}) {
    return rentapi.queryLogUsingGET(parameters);
}

/**
 * 合同确认列表分页
 * request: getCheckListForPageUsingGET
 * url: getCheckListForPageUsingGETURL
 * method: getCheckListForPageUsingGET_TYPE
 * raw_url: getCheckListForPageUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getCheckListForPageUsingGET = function(parameters = {}) {
    return rentapi.getCheckListForPageUsingGET(parameters);
}

/**
 * 确认
 * request: confirmUsingPUT
 * url: confirmUsingPUTURL
 * method: confirmUsingPUT_TYPE
 * raw_url: confirmUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param contractVoList - ContractVo列表，根据对象中id，status更新
 */
export const confirmUsingPUT = function(parameters = {}) {
    return rentapi.confirmUsingPUT(parameters);
}

/**
 * 根据周期查看租金/费用条款
 * request: getCostItemByCycleUsingGET
 * url: getCostItemByCycleUsingGETURL
 * method: getCostItemByCycleUsingGET_TYPE
 * raw_url: getCostItemByCycleUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同ID
 * @param settleGroupId - 结算组别
 * @param expenseDate - 结算日
 */
export const getCostItemByCycleUsingGET = function(parameters = {}) {
    return rentapi.confirmUsingPUT(parameters);
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
    return rentapi.delUsingPUT(parameters);
}

/**
 * 获取附件信息
 * request: fileUsingGET
 * url: fileUsingGETURL
 * method: fileUsingGET_TYPE
 * raw_url: fileUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const fileUsingGET = function(parameters = {}) {
    return rentapi.fileUsingGET(parameters);
}

/**
 * 根据结算方式返回固租（抽成）列表
 * request: getFixedPercentTypeUsingGET
 * url: getFixedPercentTypeUsingGETURL
 * method: getFixedPercentTypeUsingGET_TYPE
 * raw_url: getFixedPercentTypeUsingGET_RAW_URL
 * @param token - header中token字段
 * @param settleType - 结算方式
 */
export const getFixedPercentTypeUsingGET = function(parameters = {}) {
    return rentapi.getFixedPercentTypeUsingGET(parameters);
}

/**
 * 周期生成结算单后修改所在的阶段、租金条款/费用条款、合同状态为：已生成结算单
 * request: generatedUsingPUT
 * url: generatedUsingPUTURL
 * method: generatedUsingPUT_TYPE
 * raw_url: generatedUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param periodId - 阶段ID
 * @param rentTermsId - 租金费用条款ID
 * @param contractId - 合同ID
 */
export const generatedUsingPUT = function(parameters = {}) {
    return rentapi.generatedUsingPUT(parameters);
}

/**
 * 合同主表信息
 * request: infoUsingGET
 * url: infoUsingGETURL
 * method: infoUsingGET_TYPE
 * raw_url: infoUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
/*export const infoUsingGET = function(parameters = {}) {
    return rentapi.infoUsingGET(parameters);
}*/

/**
 * 根据合同ID和结算组别的ID查询不规则费用信息
 * request: getIrregularCostInfoUsingGET
 * url: getIrregularCostInfoUsingGETURL
 * method: getIrregularCostInfoUsingGET_TYPE
 * raw_url: getIrregularCostInfoUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同的ID
 * @param settleGroupId - 结算组别的ID
 */
export const getIrregularCostInfoUsingGET = function(parameters = {}) {
    return rentapi.getIrregularCostInfoUsingGET(parameters);
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
 * @param propertyType - 物业性质：0商铺、1写字楼、2场地、3广告位
 * @param contractCode - 合同编号
 * @param merchantId - 商户名称
 * @param shopId - 店铺名称
 * @param status - 状态（10 审核（新增），20 取消， 30 已确认，40 已生成，50 审核（变更），60 审核（延期），61 审核（终止），70退租 ）
 * @param latestOrNot - 是否最新版本（0否1是 选1）
 */
export const getListForPageUsingGET = function(parameters = {}) {
    return rentapi.getListForPageUsingGET(parameters);
}

/**
 * 根据合同的ID,获取合同的主体信息。
 * request: getContractMainBodyUsingGET
 * url: getContractMainBodyUsingGETURL
 * method: getContractMainBodyUsingGET_TYPE
 * raw_url: getContractMainBodyUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同的ID
 */
export const getContractMainBodyUsingGET = function(parameters = {}) {
    return rentapi.getContractMainBodyUsingGET(parameters);
}

/**
 * 变成历史版本
 * request: noLatestUsingPUT
 * url: noLatestUsingPUTURL
 * method: noLatestUsingPUT_TYPE
 * raw_url: noLatestUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const noLatestUsingPUT = function(parameters = {}) {
    return rentapi.noLatestUsingPUT(parameters);
}

/**
 * 根据物业性质查询商户合同列表
 * request: getContractByPropertyUsingGET
 * url: getContractByPropertyUsingGETURL
 * method: getContractByPropertyUsingGET_TYPE
 * raw_url: getContractByPropertyUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const getContractByPropertyUsingGET = function(parameters = {}) {
    return rentapi.getContractByPropertyUsingGET(parameters);
}

/**
 * 租金条款分页列表查询
 * request: getRentListUsingGET
 * url: getRentListUsingGETURL
 * method: getRentListUsingGET_TYPE
 * raw_url: getRentListUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param contractId - 合同ID
 * @param type - 租金/费用条款
 */
export const getRentListUsingGET = function(parameters = {}) {
    return rentapi.getRentListUsingGET(parameters);
}

/**
 * 添加录入正式合同租金/费用条款
 * request: addRentOrCostUsingPOST
 * url: addRentOrCostUsingPOSTURL
 * method: addRentOrCostUsingPOST_TYPE
 * raw_url: addRentOrCostUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param paramList - paramList
 */
export const addRentOrCostUsingPOST = function(parameters = {}) {
    return rentapi.addRentOrCostUsingPOST(parameters);
}

/**
 * 租金/费用条款编辑
 * request: updateRentOrCostUsingPUT
 * url: updateRentOrCostUsingPUTURL
 * method: updateRentOrCostUsingPUT_TYPE
 * raw_url: updateRentOrCostUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param paramList - paramList
 */
export const updateRentOrCostUsingPUT = function(parameters = {}) {
    return rentapi.updateRentOrCostUsingPUT(parameters);
}

/**
 * 租金/费用条款删除
 * request: delRentOrCostUsingPUT
 * url: delRentOrCostUsingPUTURL
 * method: delRentOrCostUsingPUT_TYPE
 * raw_url: delRentOrCostUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param rentTermsId - rentTermsId
 */
export const delRentOrCostUsingPUT = function(parameters = {}) {
    return rentapi.delRentOrCostUsingPUT(parameters);
}

/**
 * 根据租金条款的ID,获取租金条款。
 * request: getContractFormalRentTermsUsingGET
 * url: getContractFormalRentTermsUsingGETURL
 * method: getContractFormalRentTermsUsingGET_TYPE
 * raw_url: getContractFormalRentTermsUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractFormalRentTermsId - 租金条款的ID
 */
export const getContractFormalRentTermsUsingGET = function(parameters = {}) {
    return rentapi.getContractFormalRentTermsUsingGET(parameters);
}

/**
 * 添加合同关联的店铺单元记录
 * request: addShopUnitUsingPOST
 * url: addShopUnitUsingPOSTURL
 * method: addShopUnitUsingPOST_TYPE
 * raw_url: addShopUnitUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addShopUnitUsingPOST = function(parameters = {}) {
    return rentapi.addShopUnitUsingPOST(parameters);
}

/**
 * 修改合同关联的店铺单元记录
 * request: updateShopUnitUsingPUT
 * url: updateShopUnitUsingPUTURL
 * method: updateShopUnitUsingPUT_TYPE
 * raw_url: updateShopUnitUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateShopUnitUsingPUT = function(parameters = {}) {
    return rentapi.updateShopUnitUsingPUT(parameters);
}

/**
 * 正式合同终止
 * request: stopUsingPUT
 * url: stopUsingPUTURL
 * method: stopUsingPUT_TYPE
 * raw_url: stopUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 * @param stopDate - 终止日期
 * @param stopType - 终止性质
 * @param stopReason - 终止原因
 */
export const stopUsingPUT = function(parameters = {}) {
    return rentapi.stopUsingPUT(parameters);
}

/**
 * 根据合同ID,获取合同的单元信息。
 * request: getContractUnitInformationUsingGET
 * url: getContractUnitInformationUsingGETURL
 * method: getContractUnitInformationUsingGET_TYPE
 * raw_url: getContractUnitInformationUsingGET_RAW_URL
 * @param token - header中token字段
 * @param contractId - 合同的ID
 */
export const getContractUnitInformationUsingGET = function(parameters = {}) {
    return rentapi.getContractUnitInformationUsingGET(parameters);

}

/**
 * 文件上传
 * request: uploadUsingPOST
 * url: uploadUsingPOSTURL
 * method: uploadUsingPOST_TYPE
 * raw_url: uploadUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 * @param contractId - 合同住键ID
 * @param type - 附件类型 0合同附件1其他
 */
export const uploadUsingPOST = function(parameters = {}) {
    return rentapi.uploadUsingPOST(parameters);
}

/**
 * 文件上传
 * request: uploadsUsingPOST
 * url: uploadsUsingPOSTURL
 * method: uploadsUsingPOST_TYPE
 * raw_url: uploadsUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param file - 附件
 * @param contractId - 合同住键ID
 * @param type - 附件类型 0合同附件1其他
 */
export const uploadsUsingPOST = function(parameters = {}) {
    return rentapi.uploadsUsingPOST(parameters);
}

/**
 * 查询所有国别信息
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param token - header中token字段
 */
export const listUsingGET_7 = function(parameters = {}) {
    return rentapi.listUsingGET_7(parameters);
}

/**
 * 文件上传
 * request: uploadsUsingPOST_1
 * url: uploadsUsingPOST_1URL
 * method: uploadsUsingPOST_1_TYPE
 * raw_url: uploadsUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param file - file
 */
export const uploadsUsingPOST_1 = function(parameters = {}) {
    return rentapi.uploadsUsingPOST_1(parameters);
}

/**
 * 文件上传
 * request: uploadsUsingPOST_2
 * url: uploadsUsingPOST_2URL
 * method: uploadsUsingPOST_2_TYPE
 * raw_url: uploadsUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param file - file
 */
export const uploadsUsingPOST_2 = function(parameters = {}) {
    return rentapi.uploadsUsingPOST_2(parameters);
}

/**
 * 楼层添加
 * request: addUsingPOST_4
 * url: addUsingPOST_4URL
 * method: addUsingPOST_4_TYPE
 * raw_url: addUsingPOST_4_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_4 = function(parameters = {}) {
    return rentapi.addUsingPOST_4(parameters);
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
    return rentapi.selectByBuildIdUsingGET(parameters);
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
    return rentapi.selectByIdUsingGET_2(parameters);
}

/**
 * 楼层修改
 * request: updateUsingPUT_5
 * url: updateUsingPUT_5URL
 * method: updateUsingPUT_5_TYPE
 * raw_url: updateUsingPUT_5_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const updateUsingPUT_5 = function(parameters = {}) {
    return rentapi.updateUsingPUT_5(parameters);
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
    return rentapi.updateUsingDELETE_1(parameters);
}

/**
 * 添加货品
 * request: addUsingPOST_5
 * url: addUsingPOST_5URL
 * method: addUsingPOST_5_TYPE
 * raw_url: addUsingPOST_5_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_5 = function(parameters = {}) {
    return rentapi.addUsingPOST_5(parameters);
}

/**
 * 根据货品组别ID查询所有货品信息
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param token - header中token字段
 * @param typeId - 货品组别ID
 */
export const listUsingGET_8 = function(parameters = {}) {
    return rentapi.listUsingGET_8(parameters);
}

/**
 * 查询所有货品信息
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsCode - 货品编码
 * @param goodsName - 货品名称
 * @param goodsTypeId - 货品组别
 * @param shopId -
 */
export const listUsingGET_9 = function(parameters = {}) {
    return rentapi.listUsingGET_9(parameters);
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
 * @param shopId -
 */
export const listpgUsingGET_2 = function(parameters = {}) {
    return rentapi.listpgUsingGET_2(parameters);
}

/**
 * 获取货品详情
 * request: detailUsingGET_3
 * url: detailUsingGET_3URL
 * method: detailUsingGET_3_TYPE
 * raw_url: detailUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getGoodsDetail = function(parameters = {}) {
    return rentapi.detailUsingGET_3(parameters);
}

/**
 * 编辑货品
 * request: updateUsingPUT_6
 * url: updateUsingPUT_6URL
 * method: updateUsingPUT_6_TYPE
 * raw_url: updateUsingPUT_6_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_6 = function(parameters = {}) {
    return rentapi.updateUsingPUT_6(parameters);
}

/**
 * 删除货品
 * request: deleteUsingDELETE_3
 * url: deleteUsingDELETE_3URL
 * method: deleteUsingDELETE_3_TYPE
 * raw_url: deleteUsingDELETE_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const goodsDelete = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_3(parameters);
}

/**
 * 添加货品组别
 * request: addUsingPOST_6
 * url: addUsingPOST_6URL
 * method: addUsingPOST_6_TYPE
 * raw_url: addUsingPOST_6_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_6 = function(parameters = {}) {
    return rentapi.addUsingPOST_6(parameters);
}

/**
 * 查询所有货品组别信息
 * request: listUsingGET_10
 * url: listUsingGET_10URL
 * method: listUsingGET_10_TYPE
 * raw_url: listUsingGET_10_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const listUsingGET_10 = function(parameters = {}) {
    return rentapi.listUsingGET_10(parameters);
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
    return rentapi.listpgUsingGET_3(parameters);
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
    return rentapi.rondcodeUsingGET(parameters);
}

/**
 * 查询货品组别树形结构
 * request: treeUsingGET_1
 * url: treeUsingGET_1URL
 * method: treeUsingGET_1_TYPE
 * raw_url: treeUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param goodsTypeCode - 货品组别编码
 * @param goodsTypeName - 货品组别名称
 */
export const treeUsingGET_1 = function(parameters = {}) {
    return rentapi.treeUsingGET_1(parameters);
}

/**
 * 获取货品组别详情
 * request: detailUsingGET_4
 * url: detailUsingGET_4URL
 * method: detailUsingGET_4_TYPE
 * raw_url: detailUsingGET_4_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const goodsGroupDetailData = function(parameters = {}) {
    return rentapi.detailUsingGET_4(parameters);
}

/**
 * 编辑货品组别
 * request: updateUsingPUT_7
 * url: updateUsingPUT_7URL
 * method: updateUsingPUT_7_TYPE
 * raw_url: updateUsingPUT_7_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const goodsGroupUpdate = function(parameters = {}) {
    return rentapi.updateUsingPUT_7(parameters);
}

/**
 * 删除货品组别
 * request: deleteUsingDELETE_4
 * url: deleteUsingDELETE_4URL
 * method: deleteUsingDELETE_4_TYPE
 * raw_url: deleteUsingDELETE_4_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const goodsGroupDelete = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_4(parameters);
}

/**
 * 添加意向合同
 * request: addUsingPOST_7
 * url: addUsingPOST_7URL
 * method: addUsingPOST_7_TYPE
 * raw_url: addUsingPOST_7_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_7 = function(parameters = {}) {
    return rentapi.addUsingPOST_7(parameters);
}

/**
 * 查看意向合同诚意金
 * request: bondDetailUsingGET
 * url: bondDetailUsingGETURL
 * method: bondDetailUsingGET_TYPE
 * raw_url: bondDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const bondDetailUsingGET = function(parameters = {}) {
    return rentapi.bondDetailUsingGET(parameters);
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
    return rentapi.cancelUsingPUT_1(parameters);
}

/**
 * 确认
 * request: confirmUsingPOST
 * url: confirmUsingPOSTURL
 * method: confirmUsingPOST_TYPE
 * raw_url: confirmUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键
 */
export const confirmUsingPOST = function(parameters = {}) {
    return rentapi.confirmUsingPOST(parameters);
}

/**
 * 查看意向合同费用条款
 * request: costDetailUsingGET
 * url: costDetailUsingGETURL
 * method: costDetailUsingGET_TYPE
 * raw_url: costDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const costDetailUsingGET = function(parameters = {}) {
    return rentapi.costDetailUsingGET(parameters);
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
    return rentapi.delUsingPUT_1(parameters);
}

/**
 * 意向合同主体详情
 * request: detailUsingGET_5
 * url: detailUsingGET_5URL
 * method: detailUsingGET_5_TYPE
 * raw_url: detailUsingGET_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const detailUsingGET_5 = function(parameters = {}) {
    return rentapi.detailUsingGET_5(parameters);
}

/**
 * 意向合同编辑
 * request: editUsingPUT
 * url: editUsingPUTURL
 * method: editUsingPUT_TYPE
 * raw_url: editUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const editUsingPUT = function(parameters = {}) {
    return rentapi.editUsingPUT(parameters);
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
    return rentapi.getListForPageUsingGET_1(parameters);
}

/**
 * 修改意向合同关意向单元信息
 * request: updateShopUnitUsingPUT_1
 * url: updateShopUnitUsingPUT_1URL
 * method: updateShopUnitUsingPUT_1_TYPE
 * raw_url: updateShopUnitUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateShopUnitUsingPUT_1 = function(parameters = {}) {
    return rentapi.updateShopUnitUsingPUT_1(parameters);
}
/**
 * 根据状态查询意向合同列表
 * request: getListForPageByStatusUsingGET
 * url: getListForPageByStatusUsingGETURL
 * method: getListForPageByStatusUsingGET_TYPE
 * raw_url: getListForPageByStatusUsingGET_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param status - 状态
 */
export const getListForPageByStatusUsingGET = function(parameters = {}) {
    return rentapi.getListForPageByStatusUsingGET(parameters);
}
/**
 * 查看意向合同租金条款
 * request: rentTermsdetailUsingGET
 * url: rentTermsdetailUsingGETURL
 * method: rentTermsdetailUsingGET_TYPE
 * raw_url: rentTermsdetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const rentTermsdetailUsingGET = function(parameters = {}) {
    return rentapi.rentTermsdetailUsingGET(parameters);
}

/**
 * 添加意向合同租金条款
 * request: addRentOrCostUsingPOST_2
 * url: addRentOrCostUsingPOST_1URL
 * method: addRentOrCostUsingPOST_1_TYPE
 * raw_url: addRentOrCostUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addRentOrCostUsingPOST_2 = function(parameters = {}) {
    return rentapi.addRentOrCostUsingPOST_2(parameters);
}

/**
 * 租金条款编辑
 * request: updateRentOrCostUsingPUT_1
 * url: updateRentOrCostUsingPUT_1URL
 * method: updateRentOrCostUsingPUT_1_TYPE
 * raw_url: updateRentOrCostUsingPUT_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateRentOrCostUsingPUT_1 = function(parameters = {}) {
    return rentapi.updateRentOrCostUsingPUT_1(parameters);
}
/**
 * 修改费用条款
 * request: updateRentOrCostUsingPOST
 * url: updateRentOrCostUsingPOSTURL
 * method: updateRentOrCostUsingPOST_TYPE
 * raw_url: updateRentOrCostUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateRentOrCostUsingPOST = function(parameters = {}) {
    return rentapi.updateRentOrCostUsingPOST(parameters);
}
/**
 * 修改诚意金
 * request: updateSincerityMoneyUsingPOST
 * url: updateSincerityMoneyUsingPOSTURL
 * method: updateSincerityMoneyUsingPOST_TYPE
 * raw_url: updateSincerityMoneyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateSincerityMoneyUsingPOST = function(parameters = {}) {
    return rentapi.updateSincerityMoneyUsingPOST(parameters);
}
/**
 * 添加意向合同关意向单元信息
 * request: addShopUnitUsingPOST_1
 * url: addShopUnitUsingPOST_1URL
 * method: addShopUnitUsingPOST_1_TYPE
 * raw_url: addShopUnitUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addShopUnitUsingPOST_1 = function(parameters = {}) {
    return rentapi.addShopUnitUsingPOST_1(parameters);
}

/**
 * 查看意向合同单元信息
 * request: unitDetailUsingGET
 * url: unitDetailUsingGETURL
 * method: unitDetailUsingGET_TYPE
 * raw_url: unitDetailUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const unitDetailUsingGET = function(parameters = {}) {
    return rentapi.unitDetailUsingGET(parameters);
}
/**
 * 添加费用条款
 * request: addRentOrCostUsingPOST_1
 * url: addRentOrCostUsingPOST_1URL
 * method: addRentOrCostUsingPOST_1_TYPE
 * raw_url: addRentOrCostUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addRentOrCostUsingPOST_1 = function(parameters = {}) {
    return rentapi.addRentOrCostUsingPOST_1(parameters);
}
/**
 * 添加诚意金
 * request: addSincerityMoneyUsingPOST
 * url: addSincerityMoneyUsingPOSTURL
 * method: addSincerityMoneyUsingPOST_TYPE
 * raw_url: addSincerityMoneyUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addSincerityMoneyUsingPOST = function(parameters = {}) {
    return rentapi.addSincerityMoneyUsingPOST(parameters);
}
/**
 * 添加商户
 * request: addUsingPOST_8
 * url: addUsingPOST_8URL
 * method: addUsingPOST_8_TYPE
 * raw_url: addUsingPOST_8_RAW_URL
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
 * @param busLinsNumFile - 营业执照
 * @param busPermitNumfile - 经营许可证
 * @param tradeRegistNumFile - 商标注册
 * @param legalPersonIdFile - 法人身份证
 * @param otherFile - 其他证件
 */
export const addUsingPOST_8 = function(parameters = {}) {
    return rentapi.addUsingPOST_8(parameters);
}
/**
 * 删除意向单元信息
 * request: delShopUnitUsingPUT
 * url: delShopUnitUsingPUTURL
 * method: delShopUnitUsingPUT_TYPE
 * raw_url: delShopUnitUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param intentUnitId - intentUnitId
 */
export const delShopUnitUsingPUT = function(parameters = {}) {
    return rentapi.delShopUnitUsingPUT(parameters);
}
/**
 * 删除租金条款
 * request: delRentTemsUsingPUT
 * url: delRentTemsUsingPUTURL
 * method: delRentTemsUsingPUT_TYPE
 * raw_url: delRentTemsUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param rentTermsId - rentTermsId
 */
export const delRentTemsUsingPUT = function(parameters = {}) {
    return rentapi.delRentTemsUsingPUT(parameters);
}
/**
 * 修改商户状态为空置
 * request: emptyUsingPOST_1
 * url: emptyUsingPOST_1URL
 * method: emptyUsingPOST_1_TYPE
 * raw_url: emptyUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST_1 = function(parameters = {}) {
    return rentapi.emptyUsingPOST_1(parameters);
}

/**
 * 修改商户状态为失效
 * request: invalidUsingPOST_1
 * url: invalidUsingPOST_1URL
 * method: invalidUsingPOST_1_TYPE
 * raw_url: invalidUsingPOST_1_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST_1 = function(parameters = {}) {
    return rentapi.invalidUsingPOST_1(parameters);
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
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const auditListUsingGET_1 = function(parameters = {}) {
    return rentapi.auditListUsingGET_1(parameters);
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
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const auditListpgUsingGET_1 = function(parameters = {}) {
    return rentapi.auditListpgUsingGET_1(parameters);
}


/**
 * 查询商户列表
 * request: listUsingGET_11
 * url: listUsingGET_11URL
 * method: listUsingGET_11_TYPE
 * raw_url: listUsingGET_11_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const listUsingGET_12 = function(parameters = {}) {
    return rentapi.listUsingGET_11(parameters);
}

/**
 * 查询商户列表
 * request: listUsingGET_11
 * url: listUsingGET_11URL
 * method: listUsingGET_11_TYPE
 * raw_url: listUsingGET_11_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param merchantCode - 商户编码
 * @param merchantName - 商户名称
 * @param merchantEnglishName - 商户英文名称
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const getAdList = function(parameters = {}) {
    return rentapi.optionUsingGET(parameters);
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
 * @param merchantType - 商户类型 类型：0商场1写字楼2广告位3场地
 * @param status - 状态：0新增1已确认2.取消
 */
export const listpgUsingGET_4 = function(parameters = {}) {
    return rentapi.listpgUsingGET_4(parameters);
}

/**
 * 获取商户详情
 * request: detailUsingGET_6
 * url: detailUsingGET_6URL
 * method: detailUsingGET_6_TYPE
 * raw_url: detailUsingGET_6_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_6 = function(parameters = {}) {
    return rentapi.detailUsingGET_6(parameters);
}

/**
 * 编辑商户
 * request: updateUsingPUT_9
 * url: updateUsingPUT_9URL
 * method: updateUsingPUT_9_TYPE
 * raw_url: updateUsingPUT_9_RAW_URL
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
 * @param busLinsNumFile - 营业执照
 * @param busPermitNumfile - 经营许可证
 * @param tradeRegistNumFile - 商标注册
 * @param legalPersonIdFile - 法人身份证
 * @param otherFile - 其他证件
 */
export const updateUsingPUT_9 = function(parameters = {}) {
    return rentapi.updateUsingPUT_9(parameters);
}

/**
 * 删除商户
 * request: deleteUsingDELETE_5
 * url: deleteUsingDELETE_5URL
 * method: deleteUsingDELETE_5_TYPE
 * raw_url: deleteUsingDELETE_5_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const deleteUsingDELETE_5 = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_5(parameters);
}

/**
 * 获取商户信息
 * request: getByIdUsingGET_2
 * url: getByIdUsingGET_2URL
 * method: getByIdUsingGET_2_TYPE
 * raw_url: getByIdUsingGET_2_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getByIdUsingGET_2 = function(parameters = {}) {
    return rentapi.getByIdUsingGET_2(parameters);
}

/**
 * 获取商户名称
 * request: getNameUsingGET
 * url: getNameUsingGETURL
 * method: getNameUsingGET_TYPE
 * raw_url: getNameUsingGET_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getNameUsingGET = function(parameters = {}) {
    return rentapi.getNameUsingGET(parameters);
}

/**
 * 修改商户密码
 * request: updtpassUsingPUT
 * url: updtpassUsingPUTURL
 * method: updtpassUsingPUT_TYPE
 * raw_url: updtpassUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param password - 密码
 */
export const resetMerchantPsd = function(parameters = {}) {
    return rentapi.updtpassUsingPUT(parameters);
}

/**
 * 修改商户状态
 * request: updateUsingPUT_8
 * url: updateUsingPUT_8URL
 * method: updateUsingPUT_8_TYPE
 * raw_url: updateUsingPUT_8_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateMerchantStatus = function(parameters = {}) {
    return rentapi.updateUsingPUT_8(parameters);
}

/**
 * 添加店铺
 * request: addUsingPOST_9
 * url: addUsingPOST_9URL
 * method: addUsingPOST_9_TYPE
 * raw_url: addUsingPOST_9_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const addUsingPOST_9 = function(parameters = {}) {
    return rentapi.addUsingPOST_9(parameters);
}

/**
 * 修改店铺状态为空置
 * request: emptyUsingPOST_2
 * url: emptyUsingPOST_2URL
 * method: emptyUsingPOST_2_TYPE
 * raw_url: emptyUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const emptyUsingPOST_2 = function(parameters = {}) {
    return rentapi.emptyUsingPOST_2(parameters);
}

/**
 * 修改店铺状态为失效
 * request: invalidUsingPOST_2
 * url: invalidUsingPOST_2URL
 * method: invalidUsingPOST_2_TYPE
 * raw_url: invalidUsingPOST_2_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键id
 */
export const invalidUsingPOST_2 = function(parameters = {}) {
    return rentapi.invalidUsingPOST_2(parameters);
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
    return rentapi.auditListUsingGET_2(parameters);
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
    return rentapi.auditListpgUsingGET_2(parameters);
}

/**
 * 查询店铺列表
 * request: listUsingGET_14
 * url: listUsingGET_14URL
 * method: listUsingGET_14_TYPE
 * raw_url: listUsingGET_14_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param shopCode - 店铺编码
 * @param shopName - 店铺名称
 * @param merchantId - 商户编号
 * @param status - 店铺状态
 */
export const listUsingGET_14 = function(parameters = {}) {
    return rentapi.listUsingGET_12(parameters);
}

/**
 * 查询店铺列表
 * request: listUsingGET_13
 * url: listUsingGET_13URL
 * method: listUsingGET_13_TYPE
 * raw_url: listUsingGET_13_RAW_URL
 * @param token - header中token字段
 * @param ids - 住键List
 */
export const listUsingGET_13 = function(parameters = {}) {
    return rentapi.listUsingGET_12(parameters);
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
    return rentapi.listpgUsingGET_5(parameters);
}

/**
 * 查询店铺下拉列表
 * request: getByStatusUsingPOST
 * url: getByStatusUsingPOSTURL
 * method: getByStatusUsingPOST_TYPE
 * raw_url: getByStatusUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param status - 状态id
 */
export const getByStatusUsingPOST = function(parameters = {}) {
    return rentapi.getByStatusUsingPOST(parameters);
}

/**
 * 获取店铺详情
 * request: detailUsingGET_7
 * url: detailUsingGET_7URL
 * method: detailUsingGET_7_TYPE
 * raw_url: detailUsingGET_7_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const detailUsingGET_7 = function(parameters = {}) {
    return rentapi.detailUsingGET_7(parameters);
}

/**
 * 编辑店铺
 * request: updateUsingPUT_11
 * url: updateUsingPUT_11URL
 * method: updateUsingPUT_11_TYPE
 * raw_url: updateUsingPUT_11_RAW_URL
 * @param token - header中token字段
 * @param request - request
 */
export const updateUsingPUT_11 = function(parameters = {}) {
    return rentapi.updateUsingPUT_11(parameters);
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
    return rentapi.deleteUsingDELETE_6(parameters);
}

/**
 * 获取店铺详情
 * request: getByIdUsingGET_3
 * url: getByIdUsingGET_3URL
 * method: getByIdUsingGET_3_TYPE
 * raw_url: getByIdUsingGET_3_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getByIdUsingGET_3 = function(parameters = {}) {
    return rentapi.getByIdUsingGET_3(parameters);
}

/**
 * 获取店铺名称
 * request: getNameUsingGET_1
 * url: getNameUsingGET_1URL
 * method: getNameUsingGET_1_TYPE
 * raw_url: getNameUsingGET_1_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 */
export const getNameUsingGET_1 = function(parameters = {}) {
    return rentapi.getNameUsingGET_1(parameters);
}

/**
 * 修改店铺状态
 * request: updateUsingPUT_10
 * url: updateUsingPUT_10URL
 * method: updateUsingPUT_10_TYPE
 * raw_url: updateUsingPUT_10_RAW_URL
 * @param token - header中token字段
 * @param id - 主键id
 * @param status - 状态
 */
export const updateUsingPUT_10 = function(parameters = {}) {
    return rentapi.updateUsingPUT_10(parameters);
}

/**
 * 单元、广告位、写字楼、场地添加
 * request: addUsingPOST_10
 * url: addUsingPOST_10URL
 * method: addUsingPOST_10_TYPE
 * raw_url: addUsingPOST_10_RAW_URL
 * @param token - header中token字段
 * @param param - param
 */
export const addUsingPOST_10 = function(parameters = {}) {
    return rentapi.addUsingPOST_10(parameters);
}

/**
 * 单元、广告位、写字楼、场地批量审核
 * request: updateStatusUsingPOST
 * url: updateStatusUsingPOSTURL
 * method: updateStatusUsingPOST_TYPE
 * raw_url: updateStatusUsingPOST_RAW_URL
 * @param token - header中token字段
 * @param ids - 主键集合
 */
export const updateStatusUsingPOST = function(parameters = {}) {
    return rentapi.updateStatusUsingPOST(parameters);
}

/**
 * 单元、广告位、写字楼、场地列表
 * request: listUsingGET_15
 * url: listUsingGET_15URL
 * method: listUsingGET_15_TYPE
 * raw_url: listUsingGET_15_RAW_URL
 * @param token - header中token字段
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param code - 单元号
 * @param buildId - 楼宇ID
 * @param floorId - 楼层ID
 * @param type - 类型(1表示店铺单元，2表示广告位，3表示场地，4表示写字楼)
 * @param status - 状态
 */
export const listUsingGET_15 = function(parameters = {}) {
    return rentapi.listUsingGET_13(parameters);
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
    return rentapi.selectByIdUsingGET_3(parameters);
}

/**
 * 单元、广告位、写字楼、场地修改
 * request: updateUsingPUT_12
 * url: updateUsingPUT_12URL
 * method: updateUsingPUT_12_TYPE
 * raw_url: updateUsingPUT_12_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 * @param param - param
 */
export const updateUsingPUT_12 = function(parameters = {}) {
    return rentapi.updateUsingPUT_12(parameters);
}

/**
 * 单元、广告位、写字楼、场地删除
 * request: deleteUsingDELETE_7
 * url: deleteUsingDELETE_7URL
 * method: deleteUsingDELETE_7_TYPE
 * raw_url: deleteUsingDELETE_7_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 */
export const deleteUsingDELETE_7 = function(parameters = {}) {
    return rentapi.deleteUsingDELETE_7(parameters);
}

/**
 * 合同下拉列表基础数据
 * request: baseDataOptionsUsingGET
 * url: baseDataOptionsUsingGETURL
 * method: baseDataOptionsUsingGET_TYPE
 * raw_url: baseDataOptionsUsingGET_RAW_URL
 * @param token - header中token字段
 */
export const baseDataOptionsUsingGET = function(parameters = {}) {
    return rentapi.baseDataOptionsUsingGET(parameters);
}
/**
 * 取消/失效
 * request: updateStatusUsingPUT
 * url: updateStatusUsingPUTURL
 * method: updateStatusUsingPUT_TYPE
 * raw_url: updateStatusUsingPUT_RAW_URL
 * @param token - header中token字段
 * @param id - 主键
 * @param stauts - stauts
 */
export const updateCancelFailure = function(parameters = {}) {
    return rentapi.updateStatusUsingPUT(parameters);
}
