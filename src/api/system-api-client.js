import * as systemapi from './swaggerAPI/system-api-client'
/*==========================================================
 *                    ERP-系统管理API.
 ==========================================================*/
/**
 * 物理删除部门信息
 * request: deletePhyUsingDELETE
 * url: deletePhyUsingDELETEURL
 * method: deletePhyUsingDELETE_TYPE
 * raw_url: deletePhyUsingDELETE_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE = function(parameters = {}) {
    return systemapi.deletePhyUsingDELETE(parameters);
}

/**
 * 删除部门信息
 * request: deleteUsingDELETE
 * url: deleteUsingDELETEURL
 * method: deleteUsingDELETE_TYPE
 * raw_url: deleteUsingDELETE_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE = function(parameters = {}) {
    return systemapi.deleteUsingDELETE(parameters);
}

/**
 * 查询部门列表
 * request: listUsingGET
 * url: listUsingGETURL
 * method: listUsingGET_TYPE
 * raw_url: listUsingGET_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 部门名称或编码
 */
export const listUsingGET = function(parameters = {}) {
    return systemapi.listUsingGET(parameters);
}

/**
 * 根据ID获取部门信息
 * request: byIdUsingGET
 * url: byIdUsingGETURL
 * method: byIdUsingGET_TYPE
 * raw_url: byIdUsingGET_RAW_URL
 * @param id - 部门Id
 */
export const byIdUsingGET = function(parameters = {}) {
    return systemapi.byIdUsingGET(parameters);
}

/**
 * 新增部门信息
 * request: saveUsingPOST
 * url: saveUsingPOSTURL
 * method: saveUsingPOST_TYPE
 * raw_url: saveUsingPOST_RAW_URL
 * @param request - 部门信息主体
 */
export const saveUsingPOST = function(parameters = {}) {
    return systemapi.saveUsingPOST(parameters);
}

/**
 * 上级ID不可改
 * request: updateUsingPOST
 * url: updateUsingPOSTURL
 * method: updateUsingPOST_TYPE
 * raw_url: updateUsingPOST_RAW_URL
 * @param request - 部门信息主体
 */
export const updateUsingPOST = function(parameters = {}) {
    return systemapi.updateUsingPOST(parameters);
}

/**
 * 查询可用选项列表
 * request: availItemListUsingGET
 * url: availItemListUsingGETURL
 * method: availItemListUsingGET_TYPE
 * raw_url: availItemListUsingGET_RAW_URL
 * @param code - 字典类型编码
 */
export const availItemListUsingGET = function(parameters = {}) {
    return systemapi.availItemListUsingGET(parameters);
}

/**
 * 启用禁用选项
 * request: availItemUsingPUT
 * url: availItemUsingPUTURL
 * method: availItemUsingPUT_TYPE
 * raw_url: availItemUsingPUT_RAW_URL
 * @param id - id
 * @param state - 启用/禁用
 */
export const availItemUsingPUT = function(parameters = {}) {
    return systemapi.availItemUsingPUT(parameters);
}

/**
 * 查询所有选项列表（可用和不可用）
 * request: itemListUsingGET
 * url: itemListUsingGETURL
 * method: itemListUsingGET_TYPE
 * raw_url: itemListUsingGET_RAW_URL
 * @param code - 字典类型编码
 */
export const itemListUsingGET = function(parameters = {}) {
    return systemapi.itemListUsingGET(parameters);
}

/**
 * 添加选项
 * request: itemSaveUsingPOST
 * url: itemSaveUsingPOSTURL
 * method: itemSaveUsingPOST_TYPE
 * raw_url: itemSaveUsingPOST_RAW_URL
 * @param request - request
 * @param  -
 */
export const itemSaveUsingPOST = function(parameters = {}) {
    return systemapi.itemSaveUsingPOST(parameters);
}

/**
 * 交换排序
 * request: itemSortExchangeUsingPUT
 * url: itemSortExchangeUsingPUTURL
 * method: itemSortExchangeUsingPUT_TYPE
 * raw_url: itemSortExchangeUsingPUT_RAW_URL
 * @param sid - 第一个主键
 * @param fseq - 第一个排序值
 * @param tid - 第二个主键
 * @param sseq - 第二个排序值
 */
export const itemSortExchangeUsingPUT = function(parameters = {}) {
    return systemapi.itemSortExchangeUsingPUT(parameters);
}

/**
 * 更新选项
 * request: itemUpdateUsingPUT
 * url: itemUpdateUsingPUTURL
 * method: itemUpdateUsingPUT_TYPE
 * raw_url: itemUpdateUsingPUT_RAW_URL
 * @param id - 主键
 * @param request - request
 * @param  -
 */
export const itemUpdateUsingPUT = function(parameters = {}) {
    return systemapi.itemUpdateUsingPUT(parameters);
}

/**
 * 字典项详情
 * request: itemDetailUsingGET
 * url: itemDetailUsingGETURL
 * method: itemDetailUsingGET_TYPE
 * raw_url: itemDetailUsingGET_RAW_URL
 * @param id - 字典项主键
 */
export const itemDetailUsingGET = function(parameters = {}) {
    return systemapi.itemDetailUsingGET(parameters);
}

/**
 * 通过编码查询选项
 * request: optionUsingGET
 * url: optionUsingGETURL
 * method: optionUsingGET_TYPE
 * raw_url: optionUsingGET_RAW_URL
 * @param 编码 - code
 */
export const optionUsingGET = function(parameters = {}) {
    return systemapi.optionUsingGET(parameters);
}

/**
 * 字典类型列表
 * request: typeListUsingGET
 * url: typeListUsingGETURL
 * method: typeListUsingGET_TYPE
 * raw_url: typeListUsingGET_RAW_URL
 * @param nameOrCode - 编码或名称
 */
export const typeListUsingGET = function(parameters = {}) {
    return systemapi.typeListUsingGET(parameters);
}

/**
 * 物理删除购物中心信息
 * request: deletePhyUsingDELETE_1
 * url: deletePhyUsingDELETE_1URL
 * method: deletePhyUsingDELETE_1_TYPE
 * raw_url: deletePhyUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_1 = function(parameters = {}) {
    return systemapi.deletePhyUsingDELETE_1(parameters);
}

/**
 * 逻辑删除购物中心信息
 * request: deleteUsingDELETE_1
 * url: deleteUsingDELETE_1URL
 * method: deleteUsingDELETE_1_TYPE
 * raw_url: deleteUsingDELETE_1_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_1 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_1(parameters);
}

/**
 * 空参查询购物中心列表，实参按购物中心名称模糊查询
 * request: listUsingGET_1
 * url: listUsingGET_1URL
 * method: listUsingGET_1_TYPE
 * raw_url: listUsingGET_1_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 购物中心名称
 */
export const listUsingGET_1 = function(parameters = {}) {
    return systemapi.listUsingGET_1(parameters);
}

/**
 * 根据ID获取购物中心信息
 * request: byIdUsingGET_1
 * url: byIdUsingGET_1URL
 * method: byIdUsingGET_1_TYPE
 * raw_url: byIdUsingGET_1_RAW_URL
 * @param id - 购物中心Id
 */
export const byIdUsingGET_1 = function(parameters = {}) {
    return systemapi.byIdUsingGET_1(parameters);
}

/**
 * 新增购物中心信息
 * request: saveUsingPOST_1
 * url: saveUsingPOST_1URL
 * method: saveUsingPOST_1_TYPE
 * raw_url: saveUsingPOST_1_RAW_URL
 * @param request - 购物中心信息主体
 */
export const saveUsingPOST_1 = function(parameters = {}) {
    return systemapi.saveUsingPOST_1(parameters);
}

/**
 * 修改购物中心信息
 * request: updateUsingPOST_1
 * url: updateUsingPOST_1URL
 * method: updateUsingPOST_1_TYPE
 * raw_url: updateUsingPOST_1_RAW_URL
 * @param request - 购物中心信息主体
 */
export const updateUsingPOST_1 = function(parameters = {}) {
    return systemapi.updateUsingPOST_1(parameters);
}

/**
 * 添加新权限菜单按钮,并返回该按钮的信息
 * request: addUsingPOST
 * url: addUsingPOSTURL
 * method: addUsingPOST_TYPE
 * raw_url: addUsingPOST_RAW_URL
 * @param request - request
 * @param  -
 */
export const addUsingPOST = function(parameters = {}) {
    return systemapi.addUsingPOST(parameters);
}

/**
 * 删除菜单
 * request: deleteUsingDELETE_4
 * url: deleteUsingDELETE_4URL
 * method: deleteUsingDELETE_4_TYPE
 * raw_url: deleteUsingDELETE_4_RAW_URL
 * @param id - id
 * @param  -
 */
export const deleteUsingDELETE_4 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_4(parameters);
}

/**
 * 权限菜单列表
 * request: listUsingGET_7
 * url: listUsingGET_7URL
 * method: listUsingGET_7_TYPE
 * raw_url: listUsingGET_7_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 按钮名
 * @param  -
 */
export const listUsingGET_7 = function(parameters = {}) {
    return systemapi.listUsingGET_7(parameters);
}

/**
 * 更新权限菜单
 * request: updateUsingPUT
 * url: updateUsingPUTURL
 * method: updateUsingPUT_TYPE
 * raw_url: updateUsingPUT_RAW_URL
 * @param request - request
 * @param  -
 */
export const updateUsingPUT = function(parameters = {}) {
    return systemapi.updateUsingPUT(parameters);
}

/**
 * 删除通知
 * request: deletePhyUsingDELETE_2
 * url: deletePhyUsingDELETE_2URL
 * method: deletePhyUsingDELETE_2_TYPE
 * raw_url: deletePhyUsingDELETE_2_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_2 = function(parameters = {}) {
    return systemapi.deletePhyUsingDELETE_2(parameters);
}

/**
 * 查询通知列表
 * request: listUsingGET_2
 * url: listUsingGET_2URL
 * method: listUsingGET_2_TYPE
 * raw_url: listUsingGET_2_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param noticeName - 消息标题
 * @param merchantId - 商户id
 * @param noticeContent - 消息内容
 * @param createDate - 操作时间
 */
export const listUsingGET_2 = function(parameters = {}) {
    return systemapi.listUsingGET_2(parameters);
}

/**
 * ID
 * request: byIdUsingGET_2
 * url: byIdUsingGET_2URL
 * method: byIdUsingGET_2_TYPE
 * raw_url: byIdUsingGET_2_RAW_URL
 * @param id - 通知Id
 */
export const byIdUsingGET_2 = function(parameters = {}) {
    return systemapi.byIdUsingGET_2(parameters);
}

/**
 * 新增通知
 * request: saveUsingPOST_2
 * url: saveUsingPOST_2URL
 * method: saveUsingPOST_2_TYPE
 * raw_url: saveUsingPOST_2_RAW_URL
 * @param merchantIds - 关联商户id
 * @param noticeName - 标题
 * @param noticeContent - 通知内容
 * @param createDate -
 */
export const saveUsingPOST_2 = function(parameters = {}) {
    return systemapi.saveUsingPOST_2(parameters);
}

/**
 * 查询操作日志
 * request: listUsingGET_3
 * url: listUsingGET_3URL
 * method: listUsingGET_3_TYPE
 * raw_url: listUsingGET_3_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param userId - 操作人id
 * @param userName - 操作人姓名
 * @param operationLogTypeName - 操作类型名
 * @param operationLogTypeId - 操作类型id
 * @param operationDate - 操作时间_开始
 * @param createDate - 操作时间_结束
 */
export const listUsingGET_3 = function(parameters = {}) {
    return systemapi.listUsingGET_3(parameters);
}

/**
 * 查询所有操作类型
 * request: listUsingGET_4
 * url: listUsingGET_4URL
 * method: listUsingGET_4_TYPE
 * raw_url: listUsingGET_4_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param id -
 * @param operationLogTypeName -
 * @param remark -
 * @param createDate -
 */
export const listUsingGET_4 = function(parameters = {}) {
    return systemapi.listUsingGET_4(parameters);
}

/**
 * 物理删除职位信息
 * request: deletePhyUsingDELETE_3
 * url: deletePhyUsingDELETE_3URL
 * method: deletePhyUsingDELETE_3_TYPE
 * raw_url: deletePhyUsingDELETE_3_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_3 = function(parameters = {}) {
    return systemapi.deletePhyUsingDELETE_3(parameters);
}

/**
 * 逻辑删除职位信息
 * request: deleteUsingDELETE_2
 * url: deleteUsingDELETE_2URL
 * method: deleteUsingDELETE_2_TYPE
 * raw_url: deleteUsingDELETE_2_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_2 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_2(parameters);
}

/**
 * 空参查询列表，实参按名称或编号模糊查询
 * request: listUsingGET_5
 * url: listUsingGET_5URL
 * method: listUsingGET_5_TYPE
 * raw_url: listUsingGET_5_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 职位名称或编码
 */
export const listUsingGET_5 = function(parameters = {}) {
    return systemapi.listUsingGET_5(parameters);
}

/**
 * ID必填
 * request: queryPositionUsingGET
 * url: queryPositionUsingGETURL
 * method: queryPositionUsingGET_TYPE
 * raw_url: queryPositionUsingGET_RAW_URL
 * @param id - 部门Id
 */
export const queryPositionUsingGET = function(parameters = {}) {
    return systemapi.queryPositionUsingGET(parameters);
}

/**
 * ID必填
 * request: byIdUsingGET_3
 * url: byIdUsingGET_3URL
 * method: byIdUsingGET_3_TYPE
 * raw_url: byIdUsingGET_3_RAW_URL
 * @param id - 职位Id
 */
export const byIdUsingGET_3 = function(parameters = {}) {
    return systemapi.byIdUsingGET_3(parameters);
}

/**
 * 新增职位信息
 * request: saveUsingPOST_3
 * url: saveUsingPOST_3URL
 * method: saveUsingPOST_3_TYPE
 * raw_url: saveUsingPOST_3_RAW_URL
 * @param request - 职位信息主体
 */
export const saveUsingPOST_3 = function(parameters = {}) {
    return systemapi.saveUsingPOST_3(parameters);
}

/**
 * 上级ID不可修改，Pid只用于暂存数据
 * request: updateUsingPOST_2
 * url: updateUsingPOST_2URL
 * method: updateUsingPOST_2_TYPE
 * raw_url: updateUsingPOST_2_RAW_URL
 * @param request - 职位信息主体
 */
export const updateUsingPOST_2 = function(parameters = {}) {
    return systemapi.updateUsingPOST_2(parameters);
}

/**
 * 物理删除区域信息
 * request: deletePhyUsingDELETE_4
 * url: deletePhyUsingDELETE_4URL
 * method: deletePhyUsingDELETE_4_TYPE
 * raw_url: deletePhyUsingDELETE_4_RAW_URL
 * @param id - 主键
 */
export const deletePhyUsingDELETE_4 = function(parameters = {}) {
    return systemapi.deletePhyUsingDELETE_4(parameters);
}

/**
 * 逻辑删除区域信息
 * request: deleteUsingDELETE_3
 * url: deleteUsingDELETE_3URL
 * method: deleteUsingDELETE_3_TYPE
 * raw_url: deleteUsingDELETE_3_RAW_URL
 * @param id - 主键
 */
export const deleteUsingDELETE_3 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_3(parameters);
}

/**
 * 查询区域列表
 * request: listUsingGET_6
 * url: listUsingGET_6URL
 * method: listUsingGET_6_TYPE
 * raw_url: listUsingGET_6_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 区域名称或英文缩写
 */
export const listUsingGET_6 = function(parameters = {}) {
    return systemapi.listUsingGET_6(parameters);
}

/**
 * 根据ID获取区域信息
 * request: byIdUsingGET_4
 * url: byIdUsingGET_4URL
 * method: byIdUsingGET_4_TYPE
 * raw_url: byIdUsingGET_4_RAW_URL
 * @param id - 区域Id
 */
export const byIdUsingGET_4 = function(parameters = {}) {
    return systemapi.byIdUsingGET_4(parameters);
}

/**
 * 树形展示区域信息
 * request: queryTreeUsingGET
 * url: queryTreeUsingGETURL
 * method: queryTreeUsingGET_TYPE
 * raw_url: queryTreeUsingGET_RAW_URL
 */
export const queryTreeUsingGET = function(parameters = {}) {
    return systemapi.queryTreeUsingGET(parameters);
}

/**
 * 新增区域信息
 * request: saveUsingPOST_4
 * url: saveUsingPOST_4URL
 * method: saveUsingPOST_4_TYPE
 * raw_url: saveUsingPOST_4_RAW_URL
 * @param request - 区域信息主体
 */
export const saveUsingPOST_4 = function(parameters = {}) {
    return systemapi.saveUsingPOST_4(parameters);
}

/**
 * 修改区域信息
 * request: updateUsingPOST_3
 * url: updateUsingPOST_3URL
 * method: updateUsingPOST_3_TYPE
 * raw_url: updateUsingPOST_3_RAW_URL
 * @param request - 区域信息主体
 */
export const updateUsingPOST_3 = function(parameters = {}) {
    return systemapi.updateUsingPOST_3(parameters);
}

/**
 * 参数应该和SysRole实体的属性一一对应，但不应该有id属性
 * request: addUsingPOST_1
 * url: addUsingPOST_1URL
 * method: addUsingPOST_1_TYPE
 * raw_url: addUsingPOST_1_RAW_URL
 * @param role - Role角色实体
 */
export const addUsingPOST_1 = function(parameters = {}) {
    return systemapi.addUsingPOST_1(parameters);
}

/**
 * 删除角色
 * request: deleteUsingDELETE_5
 * url: deleteUsingDELETE_5URL
 * method: deleteUsingDELETE_5_TYPE
 * raw_url: deleteUsingDELETE_5_RAW_URL
 * @param roleId - 要被删除的角色的ID
 * @param  -
 */
export const deleteUsingDELETE_5 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_5(parameters);
}

/**
 * 角色详情。查询出的角色、系统中全部的权限菜单和该角色所拥有的权限菜单
 * request: selectAllMenusForUpdateUsingGET
 * url: selectAllMenusForUpdateUsingGETURL
 * method: selectAllMenusForUpdateUsingGET_TYPE
 * raw_url: selectAllMenusForUpdateUsingGET_RAW_URL
 * @param roleId - 角色的ID
 */
export const selectAllMenusForUpdateUsingGET = function(parameters = {}) {
    return systemapi.selectAllMenusForUpdateUsingGET(parameters);
}

/**
 * 查询角色
 * request: listUsingGET_8
 * url: listUsingGET_8URL
 * method: listUsingGET_8_TYPE
 * raw_url: listUsingGET_8_RAW_URL
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 * @param name - 角色名字，或者角色描述
 */
export const listUsingGET_8 = function(parameters = {}) {
    return systemapi.listUsingGET_8(parameters);
}

/**
 * 角色的权限菜单列表
 * request: selectMenusUsingGET
 * url: selectMenusUsingGETURL
 * method: selectMenusUsingGET_TYPE
 * raw_url: selectMenusUsingGET_RAW_URL
 * @param roleId - roleId
 */
export const selectMenusUsingGET = function(parameters = {}) {
    return systemapi.selectMenusUsingGET(parameters);
}

/**
 * 参数应该和SysRole实体的属性一一对应，要有id属性
 * request: updateUsingPUT_1
 * url: updateUsingPUT_1URL
 * method: updateUsingPUT_1_TYPE
 * raw_url: updateUsingPUT_1_RAW_URL
 * @param role - role
 */
export const updateUsingPUT_1 = function(parameters = {}) {
    return systemapi.updateUsingPUT_1(parameters);
}

/**
 * 添加新用户,并返回该用户的信息
 * request: addUsingPOST_2
 * url: addUsingPOST_2URL
 * method: addUsingPOST_2_TYPE
 * raw_url: addUsingPOST_2_RAW_URL
 * @param newUser - 新添加用户的信息，角色ID不能少
 */
export const addUsingPOST_2 = function(parameters = {}) {
    return systemapi.addUsingPOST_2(parameters);
}

/**
 * 删除用户
 * request: deleteUsingDELETE_6
 * url: deleteUsingDELETE_6URL
 * method: deleteUsingDELETE_6_TYPE
 * raw_url: deleteUsingDELETE_6_RAW_URL
 * @param userId - userId
 */
export const deleteUsingDELETE_6 = function(parameters = {}) {
    return systemapi.deleteUsingDELETE_6(parameters);
}

/**
 * 设置禁用用户
 * request: setForbiddenUsingGET
 * url: setForbiddenUsingGETURL
 * method: setForbiddenUsingGET_TYPE
 * raw_url: setForbiddenUsingGET_RAW_URL
 * @param id - id
 */
export const setForbiddenUsingGET = function(parameters = {}) {
    return systemapi.setForbiddenUsingGET(parameters);
}

/**
 * 根据用户ID查询用户
 * request: getByIdUsingGET
 * url: getByIdUsingGETURL
 * method: getByIdUsingGET_TYPE
 * raw_url: getByIdUsingGET_RAW_URL
 * @param userId - userId
 */
export const getByIdUsingGET = function(parameters = {}) {
    return systemapi.getByIdUsingGET(parameters);
}

/**
 * 系统用户列表
 * request: listUsingGET_9
 * url: listUsingGET_9URL
 * method: listUsingGET_9_TYPE
 * raw_url: listUsingGET_9_RAW_URL
 * @param name - 用户名称
 * @param pageNum - 页码
 * @param pageSize - 每页显示数量
 */
export const listUsingGET_9 = function(parameters = {}) {
    return systemapi.listUsingGET_9(parameters);
}

/**
 * 登录系统
 * request: loginUsingPOST
 * url: loginUsingPOSTURL
 * method: loginUsingPOST_TYPE
 * raw_url: loginUsingPOST_RAW_URL
 * @param request - request
 */
export const loginUsingPOST = function(parameters = {}) {
    return systemapi.loginUsingPOST(parameters);
}

/**
 * 退出系统
 * request: logoutUsingGET
 * url: logoutUsingGETURL
 * method: logoutUsingGET_TYPE
 * raw_url: logoutUsingGET_RAW_URL
 */
export const logoutUsingGET = function(parameters = {}) {
    return systemapi.logoutUsingGET(parameters);
}

/**
 * 重置密码
 * request: resetPasswordUsingPUT
 * url: resetPasswordUsingPUTURL
 * method: resetPasswordUsingPUT_TYPE
 * raw_url: resetPasswordUsingPUT_RAW_URL
 * @param userId - userId
 * @param password - password
 */
export const resetPasswordUsingPUT = function(parameters = {}) {
    return systemapi.resetPasswordUsingPUT(parameters);
}

/**
 * 解禁用户
 * request: setUnForbiddenUsingGET
 * url: setUnForbiddenUsingGETURL
 * method: setUnForbiddenUsingGET_TYPE
 * raw_url: setUnForbiddenUsingGET_RAW_URL
 * @param id - id
 * @param  -
 */
export const setUnForbiddenUsingGET = function(parameters = {}) {
    return systemapi.setUnForbiddenUsingGET(parameters);
}

/**
 * 更新用户的信息，并返回
 * request: updateUsingPUT_2
 * url: updateUsingPUT_2URL
 * method: updateUsingPUT_2_TYPE
 * raw_url: updateUsingPUT_2_RAW_URL
 * @param request - request
 */
export const updateUsingPUT_2 = function(parameters = {}) {
    return systemapi.updateUsingPUT_2(parameters);
}