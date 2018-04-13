<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput" style="border: none">
                                    <span class="inputname inputnameWidth">版本号：{{mainData.version}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">意向合同</span>
                                    <el-select v-model="mainData.intentionContractId" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in intentionOptions"
                                                :key="item.id"
                                                :label="item.contractCode+'（'+item.merchantName+'）'"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select v-model="mainData.contractType" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in typeOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <el-select v-model="mainData.rateType" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in rateTypeOptions"
                                                :key="item.id"
                                                :label="item.rateTypeName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext">
                                    <div class="inputname">税率</div>
                                    <input class="middleinput" type="text" placeholder="0"  v-model="mainData.rate" :disabled="mainData.rateType == '0'">
                                    <span class="rightcompany">%</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="mainData.description"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="商户信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname">商户</span>
                                    <el-select v-model="mainData.merchantId" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in merchantOptions"
                                                :key="item.id"
                                                :label="item.merchantName+'（'+item.merchantCode+'）'"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">店铺</span>
                                    <el-select v-model="shopBrand" value-key="id" placeholder="请选择" class="dialogselect" @change="selectshopBrand()">
                                        <el-option
                                                v-for="item in shopOptions"
                                                :key="item.id"
                                                :label="item.shopName+'（'+item.shopCode+'）'"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">品牌</span>
                                    <span class="dialogtext">{{mainBrandName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 2 || this.$route.params.prototypeId == 3">
                                    <span class="inputname">品牌</span>
                                    <el-select v-model="mainData.mainBrandId" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in brandOptions"
                                                :key="item.id"
                                                :label="item.brandName+'（'+item.brandCode+'）'"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">经营方式</span>
                                    <el-select v-model="mainData.operationMode" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in operationOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">结算等级</span>
                                    <el-select v-model="mainData.settleLevel" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in settleLevelOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">收银模式</span>
                                    <el-select v-model="mainData.cashierMode" placeholder="请选择" class="dialogselect" disabled>
                                        <el-option
                                                v-for="item in cashierModeOptions"
                                                :key="item.id"
                                                :label="item.cashierName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">免租期</span>
                                    <input class="inputtext" type="text" placeholder="请输入免租期" v-model="mainData.rentFreeNumber">
                                    <span class="dialogtext">天</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="时间条款"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同有效期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.validStartDate"
                                            type="date"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.validEndDate"
                                            type="date"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">合同租期：0个月</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">交铺日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.pavingDate"
                                            type="date"
                                            placeholder="请输入交铺日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">开业日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.openingDate"
                                            type="date"
                                            placeholder="请输入开业日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 1">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">入住日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.enterDate"
                                            type="date"
                                            placeholder="请输入入住日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1 || this.$route.params.prototypeId == 2">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">装修周期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.decorationStartDate"
                                            type="date"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.decorationEndDate"
                                            type="date"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">周期：0个月</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">起租日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.rentStartDate"
                                            type="date"
                                            placeholder="请输入起租日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">签约日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.signDate"
                                            type="date"
                                            placeholder="请输入签约日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">备注</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="mainData.remark"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="2 单元信息" name="2">
                    <blank-head title="租赁单元"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox contracthead" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum contractlist" v-if="this.$route.params.prototypeId == 0">
                                            <span>店铺</span>
                                            <p>{{shopName}}</p>
                                        </div>
                                        <div class="listcolum contractlist" v-if="this.$route.params.prototypeId != 0">
                                            <span v-if="this.$route.params.prototypeId == 1">写字楼</span>
                                            <span v-if="this.$route.params.prototypeId == 2">场地</span>
                                            <span v-if="this.$route.params.prototypeId == 3">广告位</span>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                建筑面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" label="0" @change="radioChange()">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>{{unitData.area}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" label="1" @change="radioChange()">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>{{unitData.useArea}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>计租面积</span>
                                            <p>{{unitData.rentArea}}</p>
                                        </div>
                                        <div class="deletebtn"></div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(UnitItem,index) in checkedUnit">
                                        <div class="listcolum contractlist">
                                            <span>单元号</span>
                                            <p>{{UnitItem.unitCode}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>建筑面积</span>
                                            <p>{{UnitItem.area}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>使用面积</span>
                                            <p>{{UnitItem.useArea}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>楼层</span>
                                            <p>{{UnitItem.floorName}}</p>
                                        </div>
                                        <div class="deletebtn">
                                            <button data-v-4d27413a="" class="btn_text">删除</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加单元</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="外摆面积" v-if="this.$route.params.prototypeId == 0"></blank-head>
                    <div class="commonbox" v-if="this.$route.params.prototypeId == 0">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname">外摆面积</span>
                                    <input class="inputtext" type="text" placeholder="选填" v-model="unitData.swingArea">
                                    <span class="dialogtext">㎡</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" name="3">
                    <blank-head title="合同租金条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <div class="addContractBtn"><button class="btn_text" @click="addClickRentInfo(31)">添加</button></div>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="rentDataList" :colConfigs="rentcolumnData" @tableclickemit="rentChildData">
                                    <el-table-column
                                            label="操作"
                                            width="110"
                                            slot="operation">
                                        <template slot-scope="scope">
                                            <button class="btn_text" @click="getRentInfo(scope.row.id,31)">编辑</button>
                                            <button class="btn_text" @click="deleteDataList(scope.row.id)">删除</button>
                                        </template>
                                    </el-table-column>
                                </data-table>
                                <rt-page ref="page" :cur="pageNum" :total="total" @change="rentDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==31">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <el-select v-model="costTypeData" value-key="id" placeholder="请选择" class="dialogselect" @change="costTypeSelect()">
                                        <el-option
                                                v-for="item in costTypeOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select v-model="costItemData" value-key="id" placeholder="请选择" class="dialogselect" @change="costItemSelect()">
                                        <el-option
                                                v-for="item in costItemDataList"
                                                :key="item.id"
                                                :label="item.costItemName"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputname">{{settleGroupname}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select v-model="rentData[0].settleType" placeholder="请选择" class="dialogselect" @change="settleTypeSelect()">
                                        <el-option
                                                v-for="item in settleOptions"
                                                :key="item.id"
                                                :label="item.settleItemName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="rentData[0].settleUnit" class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="10">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">提前</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in countOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate">
                                    <span class="rightcompany">‰</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24" class="renttitle">
                                <span class="h3">■ 条款阶段划分</span>
                            </el-col>
                            <el-col :span="24">
                                <div class="stagebox" v-for="(stageList,index) in rentData[0].contractRentTermsPeriodParamList">
                                    <div class="stageboxtitle">{{index+1}}阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="stageList.startDate"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="stageList.endDate"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist" v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="stageList.fixedType" placeholder="请选择" class="dialogselect" @focus="typeFocus(0)">
                                                        <el-option
                                                                v-for="item in stageOption"
                                                                :key="item.value"
                                                                :label="item.text"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 0 || stageList.fixedType == 3">
                                                <div class="rentcontent">
                                                    <span class="inputname">固定金额</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.fixedAmount">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                            <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                <div class="rentcontent">
                                                    <span class="inputname">面积</span>
                                                    <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea">
                                                    <span class="rightcompany">㎡</span>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                <template>
                                                    <el-checkbox v-model="stageList.outsideArea" :true-label="unitData.swingArea+''"  class="stagelineheight">增加外摆面积（{{unitData.swingArea}}㎡）</el-checkbox>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2">
                                                    <span class="inputname">单价</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.price">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div class="stagelist" v-show="rentData[0].settleType == 1 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">抽成类型</span>
                                                    <el-select v-model="stageList.percentType" placeholder="请选择" class="dialogselect" @focus="ctypeFocus(1)" @change="ctypeChange(stageList.percentType)">
                                                        <el-option
                                                                v-for="item in cstageOption"
                                                                :key="item.value"
                                                                :label="item.text"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent" v-show="stageList.percentType == 6">
                                                    <span class="inputname">抽成比例</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent">
                                                    <span class="rightcompany">%</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 7 || stageList.percentType == 8">
                                            <div class="stagesaletitle">销售额分段（单位/元）</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="flexwidth" v-if="index == 0">{{percentlist.startAmount}}</div>
                                                <div class="flexwidth" v-if="index != 0" style="flex:1">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount">
                                                    </div>
                                                </div>
                                                <div class="salelistwidth">至</div>
                                                <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                <div class="flexwidth" style="flex:1">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount">
                                                    </div>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPercentList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 9">
                                            <div class="stagesaletitle">货品组别</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="rentcontent" style="margin-left: 20px;">
                                                    <el-select v-model="percentlist.goodsTypeId" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in goodsTypeOption"
                                                                :key="item.id"
                                                                :label="item.goodsTypeName"
                                                                :value="item.id">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addGoodsList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 10">
                                            <div class="stagesaletitle">支付方式</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="rentcontent" style="margin-left: 20px;">
                                                    <el-select v-model="percentlist.paymentWay" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in paymentWayOption"
                                                                :key="item.id"
                                                                :label="item.name"
                                                                :value="item.id">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPayList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button @click="deleteStageBox(stageList)">删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addStageList()">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" name="4">
                    <blank-head title="合同费用条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <div class="addContractBtn"><button class="btn_text" @click="addClickRentInfo(41)">添加</button></div>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="costDataList" :colConfigs="rentcolumnData" @tableclickemit="rentChildData">
                                    <el-table-column
                                            label="操作"
                                            width="110"
                                            slot="operation">
                                        <template slot-scope="scope">
                                            <button class="btn_text" @click="getRentInfo(scope.row.id,41)">编辑</button>
                                            <button class="btn_text" @click="deleteDataList(scope.row.id)">删除</button>
                                        </template>
                                    </el-table-column>
                                </data-table>
                                <rt-page ref="page" :cur="pageNum" :total="total" @change="costDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==41">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <el-select v-model="costTypeData" value-key="id" placeholder="请选择" class="dialogselect" @change="costTypeSelect()">
                                        <el-option
                                                v-for="item in costTypeOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select v-model="costItemData" value-key="id" placeholder="请选择" class="dialogselect" @change="costItemSelect()">
                                        <el-option
                                                v-for="item in costItemDataList"
                                                :key="item.id"
                                                :label="item.costItemName"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputname">{{settleGroupname}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select v-model="rentData[0].settleType" placeholder="请选择" class="dialogselect" @change="settleTypeSelect()">
                                        <el-option
                                                v-for="item in settleOptions"
                                                :key="item.id"
                                                :label="item.settleItemName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="rentData[0].settleUnit" class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="10">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">提前</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in countOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate">
                                    <span class="rightcompany">‰</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24" class="renttitle">
                                <span class="h3">■ 条款阶段划分</span>
                            </el-col>
                            <el-col :span="24">
                                <div class="stagebox" v-for="(stageList,index) in rentData[0].contractRentTermsPeriodParamList">
                                    <div class="stageboxtitle">{{index+1}}阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="stageList.startDate"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="stageList.endDate"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist" v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="stageList.fixedType" placeholder="请选择" class="dialogselect" @focus="typeFocus(0)">
                                                        <el-option
                                                                v-for="item in stageOption"
                                                                :key="item.value"
                                                                :label="item.text"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 2"></div>
                                            <div v-show="stageList.fixedType == 0 || stageList.fixedType == 3">
                                                <div class="rentcontent">
                                                    <span class="inputname">固定金额</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.fixedAmount">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                            <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                <div class="rentcontent">
                                                    <span class="inputname">面积</span>
                                                    <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea">
                                                    <span class="rightcompany">㎡</span>
                                                </div>
                                            </div>
                                            <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                <template>
                                                    <el-checkbox v-model="stageList.outsideArea" :true-label="unitData.swingArea+''"  class="stagelineheight">增加外摆面积（{{unitData.swingArea}}㎡）</el-checkbox>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2">
                                                    <span class="inputname">单价</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.price">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div class="stagelist" v-show="rentData[0].settleType == 1 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">抽成类型</span>
                                                    <el-select v-model="stageList.percentType" placeholder="请选择" class="dialogselect" @focus="ctypeFocus(1)" @change="ctypeChange(stageList.percentType)">
                                                        <el-option
                                                                v-for="item in cstageOption"
                                                                :key="item.value"
                                                                :label="item.text"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent" v-show="stageList.percentType == 6">
                                                    <span class="inputname">抽成比例</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent">
                                                    <span class="rightcompany">%</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 7 || stageList.percentType == 8">
                                            <div class="stagesaletitle">销售额分段（单位/元）</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="flexwidth" v-if="index == 0">{{percentlist.startAmount}}</div>
                                                <div class="flexwidth" v-if="index != 0" style="flex:1">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount">
                                                    </div>
                                                </div>
                                                <div class="salelistwidth">至</div>
                                                <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                <div class="flexwidth" style="flex:1">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount">
                                                    </div>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPercentList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 9">
                                            <div class="stagesaletitle">货品组别</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="rentcontent" style="margin-left: 20px;">
                                                    <el-select v-model="percentlist.goodsTypeId" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in goodsTypeOption"
                                                                :key="item.id"
                                                                :label="item.goodsTypeName"
                                                                :value="item.id">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addGoodsList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                        <div class="stagesale" v-show="stageList.percentType == 10">
                                            <div class="stagesaletitle">支付方式</div>
                                            <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                <div class="addlistnumber">{{index+1}}</div>
                                                <div class="rentcontent" style="margin-left: 20px;">
                                                    <el-select v-model="percentlist.paymentWay" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in paymentWayOption"
                                                                :key="item.id"
                                                                :label="item.name"
                                                                :value="item.id">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPayList(index,percentlist,stageList)">追加阶段</el-button></div>
                                                <div class="salelistdel" v-if="index != 0"><button class="btn_text">删除</button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button @click="deleteStageBox(stageList)">删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addStageList()">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="5 保证金" name="5">
                    <blank-head title="店铺租赁保证金"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname">应收金额</span>
                                    <input class="inputtext" type="text" placeholder="
 请输入应收金额" v-model.trim="bondValue">
                                </div>
                            </el-col>
                        </el-row>
                        <div class="commonbox">
                            <el-row class="dialogbox">
                                <el-col :span="10">
                                    <div class="titleStyle">履约保证金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{depositNum}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥0</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥0</span></div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="titleStyle">诚意金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{sincerityMoney}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥0</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥0</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <!--<blank-head title="履约保证金"></blank-head>
                    <div class="bondcont">
                        <div class="bondconta">
                            <span>应收金额</span>
                            <span class="money">¥30,000</span>
                        </div>
                        <div class="bondcontb">
                            <span>已收金额</span>
                            <span class="money">¥20,000</span>
                        </div>
                        <div class="bondcontc">
                            <span>未收金额</span>
                            <span class="money">¥10,000</span>
                        </div>
                    </div>-->
                </el-tab-pane>
                <el-tab-pane label="6 附件上传" name="6">
                    <blank-head title="合同附件"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum">
                                            <div class="uploadtitle">文件上传<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                                            <div class="uploadlist">
                                                <div class="avatar-uploader">
                                                    <label class="el-upload el-upload--text">
                                                        <i class="el-icon-plus avatar-uploader-icon"></i>
                                                        <div class="el-upload__text">点击添加图片</div>
                                                        <input type="file" name="file" multiple="multiple" class="el-upload__input" ref="fileUpload" @change="addFileData()">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listcont contractcont">
                                        <div class="listcolum">
                                            <div class="uploadtitle">2018-12-21</div>
                                            <div class="uploadlist">
                                                <div class="uploadfile">
                                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520426027148&di=e9172a2c88f976b30f1c751f4473edc8&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20150805%2F87%2F7582706754612447311.jpg" alt="">
                                                    <span class="spantopL"></span>
                                                    <span class="spantopLname">1</span>
                                                    <span class="spantopR"><i class="el-icon-close"></i></span>
                                                    <span class="spanbottom">重新上传</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="7 历史版本" name="7" v-if="this.$route.params.contractId != 0">
                    <blank-head title="合同历史版本"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont listhistory" v-for="(queryLis,index) in queryLogList">
                                        <div class="historydate">
                                            <span>2017-10-10 12:23</span>
                                            <router-link to="">>查看完整合同</router-link>
                                        </div>
                                        <div class="historyversion">
                                            <span>合同版本：3</span>
                                            <span class="revisecont">合同变更</span>
                                        </div>
                                        <div class="historycont">
                                            <ul>
                                                <li>1.增加了一个费用项目（网络端口费）</li>
                                                <li>2.增加了一个费用项目（网络端口费）</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </template>
        <el-dialog
                :visible.sync="dialogVisible"
                custom-class="contractdialog">
            <div class="searchbox">
                <input type="text" placeholder="请输入单元号" v-model.trim="searchText" @keyup.enter="getUnitDataList()"><i class="iconfont icon-sousuo"></i>
            </div>
            <div class="dialogbox">
                <div class="floorsearchlist">
                    <ul>
                        <li>全部</li>
                        <li>F1</li>
                        <li>F2</li>
                        <li>F3</li>
                    </ul>
                </div>
                <el-row>
                    <el-col :span="4" v-for="(unitlist,index) in unitDataList" :key="index">
                        <el-checkbox-group
                                v-model="checkedUnit"
                                @change="unitSelect()">
                            <el-checkbox  :label="unitlist" :key="unitlist.unitCode">{{unitlist.unitCode}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleUnit()">取 消</el-button>
                <el-button type="primary" @click="handleUnit()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="savebtn">
            <button @click="historyGo()">返回</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "contract1",
        data() {
            return {
                activeName: '0',
                dialogVisible:false,
                isShow: false,
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                mainData:{
                    cashierMode: 0,
                    contractType: '',
                    decorationEndDate: '',
                    decorationStartDate: '',
                    description: '',
                    enterDate: '',
                    id: null,
                    intentionContractId: '',
                    mainBrandId: '',
                    merchantId: '',
                    openingDate: '',
                    operationMode: '',
                    pavingDate: '',
                    propertyType: this.$route.params.prototypeId,
                    rate: '',
                    rateType: '',
                    remark: '',
                    rentFreeNumber: '',
                    rentStartDate: '',
                    settleLevel: '',
                    shopId: '',
                    signDate: '',
                    validEndDate: '',
                    validStartDate: '',
                    version: 1
                },
                unitData:{
                    area: 0,
                    contractCode:'',
                    contractId: '',
                    propertyType: this.$route.params.prototypeId,
                    rentArea: 0,
                    rentWay: '',
                    shopId: '',
                    swingArea: 0,
                    unitIds: [],
                    useArea: 0
                },
                mainBrandName:'',
                intentionOptions:[],
                typeOptions:[],
                rateTypeOptions:[{
                    rateTypeName:'不含税',
                    id:0
                },{
                    rateTypeName:'价内税',
                    id:1
                },{
                    rateTypeName:'价外税',
                    id:2
                }],
                merchantOptions:[],
                shopOptions:[],
                operationOptions:[],
                settleLevelOptions:[],
                cashierModeOptions:[{
                    cashierName:'不上缴营业款',
                    id:0
                }],
                costTypeData:'',
                unitDataList:[],
                checkedUnit:[],
                searchText:'',
                shopBrand:'',
                rentDataList:[],
                costDataList:[],
                rentcolumnData:[
                    { prop: 'costItem', label: '费用项目', click:'1'},
                    { prop: 'startDate', label: '起止时间' },
                    { prop: 'endDate', label: '' },
                    { prop: 'cycleTotal', label: '结算周期' },
                    { prop: 'settleGroup', label: '结算组别' },
                    { prop: 'lateFee', label: '滞纳金' },
                    { prop: 'rentMoney', label: '条款金额' }
                ],
                stepNumber:0,
                rentData:[{
                    advanceDay: "",
                    advanceMonth: "",
                    contractId: null,
                    contractRentTermsPeriodParamList: [
                        {
                            contractPeriodPercentParamList: [
                                {
                                    endAmount: '',
                                    goodsTypeId: '',
                                    paymentWay: '',
                                    percent: '',
                                    percentVersion: 1,
                                    startAmount: '0'
                                }
                            ],
                            fixedType: '',
                            endDate: "",
                            fixedAmount: '',
                            fixedArea: '',
                            percent:'',
                            percentType: '',
                            outsideArea: '',
                            period: '',
                            periodVersion: 1,
                            rentMoney:'',
                            price: '',
                            startDate: ""
                        }
                    ],
                    costItemId: '',
                    costType: '',
                    countType: '',
                    id: null,
                    lateFeeRate: '',
                    lateFeeStartDate: "",
                    remark: "",
                    highOrLow: '',
                    settleCycle: "",
                    settleGroupId: '',
                    settleType: '',
                    settleUnit: 1,
                    termsVersion: 1,
                    type: 0
                }],
                costTypeOptions:[{
                    name:'固定费用',
                    id:0
                },{
                    name:'抽成费用',
                    id:1
                },{
                    name:'不规则费用',
                    id:2
                }],
                costItemDataList:[],
                settleGroupname:'',
                costItemData:'',
                settleOptions:[{
                        settleItemName:'固定费用',
                        id:0
                    },
                    {
                        settleItemName:'抽成费用',
                        id:1
                    },{
                        settleItemName:'抽成比高',
                        id:2
                    },{
                        settleItemName:'抽成比低',
                        id:3
                }],
                dateoption:[{
                    name: '年',
                    id:2
                }, {
                    name: '月',
                    id:1
                }, {
                    name: '日',
                    id:0
                }],
                countOptions:[{
                    name:'千分比',
                    id:0
                }],
                stageOption:[],
                cstageOption:[],
                paymentWayOption:[{
                    name:'微信',
                    id:0
                },{
                    name:'支付宝',
                    id:1
                },{
                    name:'银行',
                    id:2
                },{
                    name:'其他',
                    id:3
                }],
                goodsTypeOption:[],
                sincerityMoney:0,
                rentArrayList:[],
                bondValue:0,
                depositNum:0,
                shopName:'',
                formData:'',
                contractId:'',
                contractCode:'',
                queryLogList:[],
                brandOptions:[],
                rentArea:''
            };
        },
        mounted(){
            this.getIntentionList();
            this.getMerchantList();
            this.getShopList();
            this.getBrandList();
            setTimeout(()=>{
                this.stepNumber = localStorage.getItem('step')
                this.activeName = localStorage.getItem('activeName')
            },0);
            if(this.$route.params.contractId != 0){
                this.getRentDataList(1);
                this.getCostDataList(1);
                //this.getContractInfo();
            }
            this.getGoodsTypeList();
            this.getContractInfoData();
            this.getBaseDataOptions();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getUnitDataList();
                },300)
            },
            bondValue(){
                this.depositNum = parseInt(this.bondValue)-parseInt(this.sincerityMoney)
            }
        },
        methods: {
            //获取添加合同选项的下拉列表
            async getIntentionList(){
                await this.$api.rentapi.getListForPageUsingGET_1({
                    propertyType:this.$route.params.prototypeId
                }).then(res=>{
                    this.intentionOptions = res.data.data.list;
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_12({
                    status:1
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async getShopList(){
                await this.$api.rentapi.listUsingGET_14({
                    status:1
                }).then(res=>{
                    this.shopOptions = res.data.data;
                })
            },
            async getBrandList(){
                await this.$api.rentapi.listUsingGET_3({
                    status:1
                }).then(res=>{
                    this.brandOptions = res.data.data;
                })
            },
            async getGoodsTypeList(){
                await this.$api.rentapi.listUsingGET_10().then(res=>{
                    this.goodsTypeOption = res.data.data;
                })
            },
            async getBaseDataOptions(){
                await this.$api.rentapi.baseDataOptionsUsingGET().then(res=>{
                    this.typeOptions = res.data.data.contract_type;
                    this.operationOptions = res.data.data.operation_mode;
                    this.settleLevelOptions = res.data.data.settle_level;
                })
            },
            //根据店铺自动选择品牌
            selectshopBrand(){
                this.mainData.mainBrandId = this.shopBrand.shopMainBrandId;
                this.mainBrandName = this.shopBrand.shopMainBrandName;
                this.mainData.shopId = this.shopBrand.id;
            },
            //下一步的序号
            nextNum(){
                if(this.$route.params.contractId == 0) {
                    this.activeName = parseInt(this.activeName) + 1 + '';
                    localStorage.setItem('activeName', this.activeName);
                    localStorage.setItem('step', 0);
                    this.stepNumber = 0;
                    console.log(this.activeName)
                    if (this.activeName == '6') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                }else{
                    this.activeName = parseInt(this.activeName) + 1 + '';
                    localStorage.setItem('activeName', this.activeName);
                    localStorage.setItem('step', 0);
                    this.stepNumber = 0;
                    console.log(this.activeName)
                    if (this.activeName == '7') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                }
            },
            //根据步骤序号添加合同
            submitnNext(number) {
                console.log(this.mainData)
                switch (this.activeName) {
                    case '1':
                        if(this.$route.params.delayChange != 1) {
                            this.addContract();
                        }else{
                            this.delaySubjectInfo();
                        }
                        break;
                    case '2':
                        this.addShopUnit();
                        break;
                    case '3':
                        this.nextNum();
                        break;
                    case '4':
                        this.nextNum();
                        break;
                    case '5':
                        this.addBondData();
                        break;
                    case '6':
                        //this.addFileUpload();
                        this.nextNum();
                        break;
                };
            },
            //添加合同的方法
            async addContract(){
                if(this.$route.params.contractId != 0) {
                    this.mainData.id = this.$route.params.contractId;
                }
                await this.$api.rentapi.addUsingPOST_3({
                    request: this.mainData
                }).then(res => {
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.unitData.contractId = res.data.data.contractId;
                        if(this.$route.params.prototypeId == 0){
                            this.unitData.shopId = res.data.data.shopId;
                        }
                        this.unitData.contractCode = res.data.data.contractCode;
                        this.rentData[0].contractId = res.data.data.contractId;
                        this.shopName =  res.data.data.shopName;
                        this.contractId = res.data.data.contractId;
                        this.contractCode = res.data.data.contractCode;
                        this.nextNum();
                        this.getContractInfo();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async addShopUnit(){
                if(this.$route.params.contractId != 0){
                    this.unitData.contractId = this.$route.params.contractId;
                    this.unitData.unitIds = this.checkedUnit;
                }
                await this.$api.rentapi.addShopUnitUsingPOST({
                    request:this.unitData
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.nextNum();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async addRentData(typeNum){
                this.rentData[0].type = typeNum;
                if(this.$route.params.delayChange != 0){
                    this.changeRentCostInfo();
                }else {
                    if(this.rentData.id == null) {
                        await this.$api.rentapi.addRentOrCostUsingPOST({
                            paramList: this.rentData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.$message.success(res.data.msg);
                                if (typeNum == 0) {
                                    this.getRentDataList(1);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 3);
                                    localStorage.setItem('step', 0);
                                } else {
                                    this.getCostDataList(1);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 4);
                                    localStorage.setItem('step', 0);
                                }
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }else{
                        await this.$api.rentapi.updateRentOrCostUsingPUT({
                            paramList: this.rentData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.$message.success(res.data.msg);
                                if (typeNum == 0) {
                                    this.getRentDataList(1);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 3);
                                    localStorage.setItem('step', 0);
                                } else {
                                    this.getCostDataList(1);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 4);
                                    localStorage.setItem('step', 0);
                                }
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }
                }
            },
            async addBondData(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.addBondUsingPOST({
                    request :{
                        bond: parseInt(this.bondValue),
                        contractId: this.contractId,
                        contractCode:this.contractCode,
                    }
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.nextNum()
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async addFileUpload(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.uploadsUsingPOST({
                    //$config:{ headers: { 'Content-Type':'multipart/form-data'}},
                    /*request: {
                        file: this.formData,
                        contractId: this.$route.params.contractId,
                        type: 0
                    }*/
                    file: [240],
                    contractId: this.contractId,
                    type: 0
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        //this.getFileInfo();
                        this.nextNum();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            addFileData(){
                this.formData= new FormData();
                for(let i=0;i<this.$refs.fileUpload.files.length;i++){
                    this.formData.append('formfiles',this.$refs.fileUpload.files[i]);
                }
            },
            //获取合同信息
            async getContractInfoData(){
                if(this.$route.params.contractId != 0){
                    await this.$api.rentapi.getContractMainBodyUsingGET({
                        contractId: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.mainData = res.data.data;
                            this.unitData.contractId = res.data.data.contractId;
                            if(this.$route.params.prototypeId == 0){
                                this.unitData.shopId = res.data.data.shopId;
                            }
                            this.shopName =  res.data.data.shopName;
                            this.rentData[0].contractId = res.data.data.contractId;
                            this.mainBrandName = res.data.data.brandName;
                            this.contractCode = res.data.data.contractCode;
                            this.shopBrand = {
                                id: res.data.data.shopId,
                                shopName:res.data.data.shopName
                            };
                            this.mainData.shopId = res.data.data.shopId;
                            this.shopOptions.push({
                                id: res.data.data.shopId,
                                shopName:res.data.data.shopName
                            });
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                    await this.$api.rentapi.getContractUnitInformationUsingGET({
                        contractCode : this.contractCode
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.unitData = res.data.data.rentShop;
                            this.checkedUnit = res.data.data.rentUnitList
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    await this.$api.rentapi.getContractBondInfoUsingGET({
                        contractCode : this.contractCode
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.unitData = res.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    await this.$api.rentapi.fileUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            //this.mainData = res.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    //历史详情
                    await this.$api.rentapi.queryLogUsingGET({
                        contractCode: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.queryLogList = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            //上传附件回调
            async getFileInfo(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.fileUsingGET({
                    id: this.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        //this.mainData = res.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            //获取单元的弹框列表
            async getUnitDataList(){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:'1',
                    pageSize:'200000',
                    code:'',
                    buildId:'',
                    floorId:'',
                    type:1,
                    status:''
                }).then(res=>{
                    this.unitDataList = res.data.data.list;
                })
            },
            addItem(){
                this.dialogVisible = true;
                this.getUnitDataList();
            },
            handleUnit(){
                this.dialogVisible = false;
            },
            unitSelect(){
                this.unitData.unitIds = this.checkedUnit.map(item=>{
                    return item.id;
                });
                this.unitData.area = this.checkedUnit.reduce(function(prev, cur){
                    return prev + cur.area;
                },0);
                this.unitData.useArea = this.checkedUnit.reduce(function(prev, cur){
                    return prev + cur.useArea;
                },0);
            },
            radioChange(){
                if(this.unitData.rentWay == '0'){
                    this.rentArea = this.unitData.area;
                    this.unitData.rentArea = this.unitData.area;
                }else{
                    this.unitData.rentArea = this.unitData.useArea;
                    this.rentArea = this.unitData.useArea;
                }
            },
            //切换到添加
            addClickRentInfo(stepNum){
                this.stepNumber = stepNum;
                localStorage.setItem('step',stepNum);
            },
            //获取租金和费用的列表
            async getRentDataList(pageNum,pageSize){
                if(this.$route.params.contractId != 0){
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.getRentListUsingGET({
                    pageNum: pageNum,
                    pageSize: 20,
                    contractId: this.contractId,
                    type: 0
                }).then(res => {
                    this.rentDataList = res.data.data.list;
                })
            },
            async getCostDataList(pageNum,pageSize){
                if(this.$route.params.contractId != 0){
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.getRentListUsingGET({
                    pageNum: pageNum,
                    pageSize: 20,
                    contractId: this.contractId,
                    type: 1
                }).then(res => {
                    this.costDataList = res.data.data.list;
                })
            },
            //点击切换到租金和费用的详情
            async getRentInfo(id,stepNum){
                this.stepNumber = stepNum;
                localStorage.setItem('step',stepNum);
                await this.$api.rentapi.getContractFormalRentTermsUsingGET({
                    contractFormalRentTermsId: id
                }).then(res => {
                    this.rentData = res.data.data;
                })
            },
            async rentChildData(data){
                console.log(data);
                if(this.activeName == 3){
                    this.stepNumber = 31;
                    localStorage.setItem('step', 31);
                }else {
                    this.stepNumber = 41;
                    localStorage.setItem('step', 41);
                }
                await this.$api.rentapi.getContractFormalRentTermsUsingGET({
                    contractFormalRentTermsId : data.id
                }).then(res => {
                    this.rentData = res.data.data.list;
                })
            },
            //删除租金和费用
            async deleteDataList(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.delRentOrCostUsingPUT({
                        rentTermsId : id
                    }).then(res => {
                        if (res.data.status == 200) {
                            if(this.activeName == 3) {
                                this.getRentDataList(1);
                            }else {
                                this.getCostDataList(1);
                            }
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                })
            },
            //点击序号切换显示
            handleClick() {
                localStorage.setItem('activeName', this.activeName);
                localStorage.setItem('step',0);
                this.stepNumber = 0;
                if(this.$route.params.contractId == 0) {
                    if (this.activeName == '6') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                }else {
                    if (this.activeName == '7') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                }
            },
            //根据费用类型获取费用项目和显示不同的结算方式
            async costTypeSelect(){
                await this.$api.financeapi.selectByCostTypeUsingGET({
                    costType:this.costTypeData.id
                }).then(res=>{
                    this.costItemDataList = res.data.data;
                });
                this.rentData[0].costType = this.costTypeData.id;
                this.rentData[0].settleType = '';
                if(this.costTypeData.id == 1){
                    this.settleOptions=[{
                        settleItemName:'抽成费用',
                        id:1
                    },{
                        settleItemName:'抽成比高',
                        id:2
                    },{
                        settleItemName:'抽成比低',
                        id:3
                    }]
                }else{
                    this.settleOptions=[{
                        settleItemName:'固定费用',
                        id:0
                    }]
                }

            },
            async costItemSelect(){
                this.rentData[0].costItemId = this.costItemData.id;
                this.rentData[0].settleGroupId = this.costItemData.settleGroupId;
                await this.$api.financeapi.selectByIdUsingGET_4({
                    id:this.costItemData.settleGroupId
                }).then(res=>{
                    this.settleGroupname = res.data.data.settleGroupName;
                });
            },
            settleTypeSelect(){
                this.rentData[0].highOrLow = this.rentData[0].settleType;
            },
            //添加阶段及删除阶段
            addStageList(){
                this.rentData[0].contractRentTermsPeriodParamList.push({
                    contractPeriodPercentParamList: [
                        {
                            endAmount: '',
                            goodsTypeId: '',
                            paymentWay: '',
                            percent: '',
                            percentVersion: '',
                            startAmount: '0'
                        }
                    ],
                    fixedType: '',
                    endDate: '',
                    fixedAmount: '',
                    fixedArea: '',
                    percentType: '',
                    outsideArea: '',
                    period: '',
                    periodVersion: '',
                    price: '',
                    startDate: ""
                })
            },
            deleteStageBox(stageItem,id){
                if(id){

                }else{
                    let index = this.rentData[0].contractRentTermsPeriodParamList.indexOf(stageItem)
                    if (index !== -1) {
                        this.rentData[0].contractRentTermsPeriodParamList.splice(index, 1)
                    }
                }
            },
            //添加销售额分段
            addPercentList(_index,_percentlist,_stageList){
                if(_percentlist.startAmount == '' || _percentlist.endAmount == '' || _percentlist.percent == '') {
                    this.$message.error('阶段不能为空');
                }else{
                    _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                        endAmount: '',
                        goodsTypeId: '',
                        paymentWay: '',
                        percent: '',
                        percentVersion: '',
                        startAmount: ''
                    });
                }
            },
            addGoodsList(_index,_percentlist,_stageList){
                if(_percentlist.goodsTypeId == '' || _percentlist.percent == '') {
                    this.$message.error('阶段不能为空');
                }else{
                    _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                        endAmount: '',
                        goodsTypeId: '',
                        paymentWay: '',
                        percent: '',
                        percentVersion: '',
                        startAmount: ''
                    });
                }
            },
            addPayList(_index,_percentlist,_stageList){
                if(_percentlist.paymentWay == '' || _percentlist.percent == '') {
                    this.$message.error('阶段不能为空');
                }else{
                    _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                        endAmount: '',
                        goodsTypeId: '',
                        paymentWay: '',
                        percent: '',
                        percentVersion: '',
                        startAmount: ''
                    });
                }
            },
            //获取固定类型及抽成类型的下拉数据
            async typeFocus(typeNum){
                await this.$api.rentapi.getFixedPercentTypeUsingGET({
                    settleType:typeNum
                }).then(res=>{
                    this.stageOption = res.data.data;
                });
            },
            async ctypeFocus(typeNum){
                await this.$api.rentapi.getFixedPercentTypeUsingGET({
                    settleType:typeNum
                }).then(res=>{
                    this.cstageOption = res.data.data;
                });
            },
            ctypeChange(percentType){
            },
            //获取保证金的应收诚意金
            /*async getContractInfo(){
                await this.$api.rentapi.getContractBondInfoUsingGET({
                    contractCode : this.contractCode
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.sincerityMoney = res.data.sincerityMoney;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },*/

            //合同变更和延期
            async delaySubjectInfo(){   //合同主体
                await this.$api.rentapi.changeSubjectUsingPOST({
                    param : this.mainData
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.nextNum();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async changeRentCostInfo(){   //合同租务财务
                await this.$api.rentapi.changTermsUsingPOST({
                    logMap : {
                        delId:[],
                        paramList:this.rentData,
                        putId:[]
                    }
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.nextNum();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            historyGo(){
                this.$router.go(-1)
            }
        },
        components: {
            BlankHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>
    .titleStyle{
        font-size: 14px;
        color: #353c5f;
        margin: 40px 0 30px 0;
    }
    .bondconta{
        margin-bottom: 10px;
    }
    .bondconta span{
        color: #457fcf;
        font-weight: bold;
    }
    .bondcontb{
        margin-bottom: 10px;
    }
    .bondcontb span{
        color: #45cfca;
        font-weight: bold;
    }
    .bondcontc{
        margin-bottom: 10px;
    }
    .bondcontc span{
        color: #ff5400;
        font-weight: bold;
    }
</style>