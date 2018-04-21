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
                                    <div clearable :disabled="delayChange == 2 || delayChange == 1" placeholder="选填" class="dialogtext rightcompany">{{mainData.intentionContractCode ? mainData.intentionContractCode : '' +'('+mainData.intentionContractMerchantName ? mainData.intentionContractMerchantName : '' +')'}}</div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <div clearable :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogtext rightcompany">{{mainData.contractTypeName}}</div>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <div clearable :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogtext rightcompany">{{mainData.rateTypeName}}</div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext">
                                    <div class="inputname">税率</div>
                                    <div class="middleinput" type="text" placeholder="0"  v-model="mainData.rate" :disabled="delayChange == 2 || delayChange == 1"></div>
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
                                    <textarea class="textareabox" v-model="mainData.description" :disabled="delayChange == 2 || delayChange == 1" readonly></textarea>
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
                                    <span class="dialogtext">{{mainData.merchantName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">店铺</span>
                                    <span class="dialogtext">{{mainData.shopName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">品牌</span>
                                    <span class="dialogtext">{{mainData.brandName}}</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">经营方式</span>
                                    <span class="dialogtext">{{mainData.operationModeName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">结算等级</span>
                                    <span class="dialogtext">{{mainData.settleLevelName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">收银模式</span>
                                    <span class="dialogtext">{{mainData.cashierModeName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">免租期</span>
                                    <input class="inputtext" type="text" placeholder="请输入免租期" :disabled="delayChange == 2 || delayChange == 1" v-model="mainData.rentFreeNumber" readonly>
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
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.validStartDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.validEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="tenancyTerm()"
                                            :disabled="delayChange == 2"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">合同租期：{{mainData.validCycle}}</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">交铺日期</span>
                                    <el-date-picker
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.pavingDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
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
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.openingDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
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
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.enterDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
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
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.decorationStartDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.decorationEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="cycleChange()"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">周期：{{mainData.decorationCycle}}</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">起租日期</span>
                                    <el-date-picker
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.rentStartDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
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
                                            readonly
                                            class="inputtext"
                                            v-model="mainData.signDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
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
                                    <textarea class="textareabox" placeholder="选填" v-model="mainData.remark" :disabled="delayChange == 2 || delayChange == 1" readonly></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="'2 '+stepName+'信息'" :disabled="isStep<2 && this.$route.params.contractId ==0" name="2">
                    <blank-head :title="'租赁'+stepName"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24" v-if="this.$route.params.prototypeId != 3">
                                <div class="listbox contracthead" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum contractlist" v-if="this.$route.params.prototypeId == 0">
                                            <span>店铺</span>
                                            <p>{{shopName}}</p>
                                        </div>
                                        <div class="listcolum contractlist" v-if="this.$route.params.prototypeId != 0">
                                            <span>{{stepName}}</span>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                建筑面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="delayChange == 2 || delayChange == 1 || unitData.rentWay == '1'" label="0">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>{{unitData.area}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="delayChange == 2 || delayChange == 1 || unitData.rentWay == '0'" label="1">计租</el-radio>
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
                            <el-col :span="24" v-if="this.$route.params.prototypeId != 3">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(UnitItem,index) in unitListPush">
                                        <div class="listcolum contractlist">
                                            <span>{{stepName}}号</span>
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
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="24" v-if="this.$route.params.prototypeId == 3">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(UnitItem,index) in unitListPush">
                                        <div class="listcolum contractlist">
                                            <span>{{stepName}}号</span>
                                            <p>{{UnitItem.unitCode}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>规格</span>
                                            <p>{{UnitItem.advertisingStandard}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>楼层</span>
                                            <p>{{UnitItem.floorName}}</p>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="外摆面积" v-if="this.$route.params.prototypeId == 0"></blank-head>
                    <div class="commonbox" v-if="this.$route.params.prototypeId == 0">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname">外摆面积</span>
                                    <input class="inputtext" type="text" placeholder="选填" :disabled="delayChange == 2" v-model="unitData.swingArea" readonly>
                                    <span class="dialogtext">㎡</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" :disabled="isStep<3 && this.$route.params.contractId ==0" name="3">
                    <blank-head title="合同租金条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="rentDataList" :colConfigs="rentcolumnData" @tableclickemit="rentChildData">
                                </data-table>
                                <rt-page ref="page" :cur="pageNum" :total="total1" @change="rentDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==31">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <span class="inputname">{{rentData[0].costTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <span class="dialogtext">{{rentData[0].costItemName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputname">{{rentData[0].settleGroupName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <span class="inputname">{{rentData[0].settleTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle" readonly>
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="rentData[0].settleUnit" clearable class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.value"
                                                    :label="item.name"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="10">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">提前</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth" readonly>
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay" readonly>
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate" readonly>
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" clearable placeholder="选填" class="dialogselect" readonly>
                                        <el-option
                                                v-for="item in countOptions"
                                                :key="item.value"
                                                :label="item.name"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent" v-if="rentData[0].countType == 0">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate" readonly>
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" placeholder="请输入金额" v-model="rentData[0].lateFee" readonly>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark" readonly></textarea>
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
                                                            readonly
                                                            class="inputtext"
                                                            v-model="stageList.startDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <el-date-picker
                                                            readonly
                                                            class="inputtext"
                                                            v-model="stageList.endDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList.startDate,stageList.endDate)"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：{{stageList.periodCycle}}</div>
                                            </div>
                                        </div>
                                        <div v-if="costTypeData.value != 2">
                                            <div class="stagelist" v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定类型</span>
                                                        <span class="inputname">{{stageList.fixedTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.fixedAmount" readonly>
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea" readonly>
                                                        <span class="rightcompany">㎡</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <template>
                                                        <el-checkbox v-model="stageList.outsideArea" :true-label="unitData.swingArea"  class="stagelineheight">增加外摆面积（{{unitData.swingArea}}㎡）</el-checkbox>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.price" readonly>
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
                                                        <span class="inputname">{{stageList.percentTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.percentType == 6">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent" readonly>
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
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 9">
                                                <div class="stagesaletitle">货品组别</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.goodsTypeId" clearable placeholder="请选择" class="dialogselect">
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
                                                    <div class="salelistdel" v-if="index != 0"><button class="btn_text"  @click="deleteGoodsList(index,percentlist,stageList)">删除</button></div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 10">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.paymentWay" clearable placeholder="请选择" class="dialogselect">
                                                            <el-option
                                                                    v-for="item in paymentWayOption"
                                                                    :key="item.value"
                                                                    :label="item.text"
                                                                    :value="item.value">
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
                                                    <div class="salelistdel" v-if="index != 0"><button class="btn_text"  @click="deletePayList(index,percentlist,stageList)">删除</button></div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" :disabled="isStep<3 && this.$route.params.contractId ==0" name="4">
                    <blank-head title="合同费用条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="costDataList" :colConfigs="rentcolumnData" @tableclickemit="rentChildData">
                                </data-table>
                                <rt-page ref="page" :cur="pageNum" :total="total2" @change="costDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==41">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <span class="inputname">{{rentData[0].costTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <span class="dialogtext">{{rentData[0].costItemName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputname">{{rentData[0].settleGroupName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <span class="inputname">{{rentData[0].settleTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle" readonly>
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="rentData[0].settleUnit" clearable class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.value"
                                                    :label="item.name"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="10">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">提前</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth" readonly>
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay" readonly>
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate" readonly>
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" clearable placeholder="选填" class="dialogselect" readonly>
                                        <el-option
                                                v-for="item in countOptions"
                                                :key="item.value"
                                                :label="item.name"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent" v-if="rentData[0].countType == 0">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate" readonly>
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" placeholder="请输入金额" v-model="rentData[0].lateFee" readonly>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark" readonly></textarea>
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
                                                            readonly
                                                            class="inputtext"
                                                            v-model="stageList.startDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <el-date-picker
                                                            readonly
                                                            class="inputtext"
                                                            v-model="stageList.endDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList.startDate,stageList.endDate)"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：{{stageList.periodCycle}}</div>
                                            </div>
                                        </div>
                                        <div v-if="costTypeData.value != 2">
                                            <div class="stagelist" v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定类型</span>
                                                        <span class="inputname">{{stageList.fixedTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.fixedAmount" readonly>
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea" readonly>
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
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.price" readonly>
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
                                                        <span class="inputname">{{stageList.percentTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.percentType == 6">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent" readonly>
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
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 9">
                                                <div class="stagesaletitle">货品组别</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.goodsTypeId" clearable placeholder="请选择" class="dialogselect">
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
                                                    <div class="salelistdel" v-if="index != 0"><button class="btn_text"  @click="deleteGoodsList(index,percentlist,stageList)">删除</button></div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 10">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.paymentWay" clearable placeholder="请选择" class="dialogselect">
                                                            <el-option
                                                                    v-for="item in paymentWayOption"
                                                                    :key="item.value"
                                                                    :label="item.text"
                                                                    :value="item.value">
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
                                                    <div class="salelistdel" v-if="index != 0"><button class="btn_text"  @click="deletePayList(index,percentlist,stageList)">删除</button></div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="5 保证金" :disabled="isStep<5 && this.$route.params.contractId ==0" name="5">
                    <blank-head title="店铺租赁保证金"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname">应收金额</span>
                                    <input class="inputtext" type="number" placeholder=" 请输入应收金额" v-model.trim="bondValue" :disabled="delayChange == 2 || delayChange == 1" readonly>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="commonbox">
                            <el-row class="dialogbox">
                                <el-col :span="10">
                                    <div class="titleStyle">履约保证金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{lvyue.receivableAmountVO}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥{{lvyue.receivedAmountVO}}</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥{{lvyue.restAmountVO}}</span></div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="titleStyle">诚意金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{chengyi.receivableAmountVO}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥{{chengyi.receivedAmountVO}}</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥{{chengyi.restAmountVO}}</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="6 附件上传" :disabled="isStep<6 && this.$route.params.contractId ==0" name="6">
                    <blank-head title="合同附件"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum" v-for="fileList in fileListData">
                                            <div class="uploadtitle">{{fileList.dateDay}}</div>
                                            <div class="uploadlist">
                                                <div class="uploadfile" v-for="(imageList,index) in fileList.attachmentVos">
                                                    <img :src="imageList.filePath+imageList.fileSaveName" alt="">
                                                    <span class="spantopL"></span>
                                                    <span class="spantopLname">{{index+1}}</span>
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
                <el-tab-pane label="7 历史版本" :disabled="isStep<7 && this.$route.params.contractId ==0" name="7" v-if="this.$route.params.contractId != 0">
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
                <div class="floorsearchlist" style="padding-bottom: 0px;">
                    <ul>
                        <li :style="buildType == 1?'color:#457fcf':''" @click="getFloorList(1)">商场</li>
                        <li :style="buildType == 2?'color:#457fcf':''" @click="getFloorList(2)">写字楼</li>
                    </ul>
                </div>
                <div class="floorsearchlist">
                    <ul>
                        <li @click="changeFloorUnit(null)">全部</li>
                        <li v-for="floorlist in floorListData" @click="changeFloorUnit(floorlist.id)">{{floorlist.floorName}}</li>
                    </ul>
                </div>
                <el-row>
                    <el-col :span="24">
                        <el-checkbox-group
                                v-model="checkedUnit">
                            <el-checkbox v-for="(unitlist,index) in unitDataList" :label="unitlist.id" :key="index" @change="unitChange(unitlist.id)">{{unitlist.unitCode}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleUnitClose()">取 消</el-button>
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
                total1: 0,
                total2: 0,
                mainData:{
                    cashierMode: '',
                    contractType: '',
                    decorationEndDate: '',
                    decorationStartDate: '',
                    description: '',
                    enterDate: '',
                    id: null,
                    intentionContractId: '',
                    brandId: '',
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
                    siteId:'',
                    swingArea: 0,
                    unitIds: [],
                    useArea: 0
                },
                mainBrandName:'',
                intentionOptions:[],
                typeOptions:[],
                rateTypeOptions:[],
                merchantOptions:[],
                shopOptions:[],
                operationOptions:[],
                settleLevelOptions:[],
                cashierModeOptions:[],
                costTypeData:'',
                unitDataList:[],
                checkedUnit:[],
                searchText:'',
                shopBrand:'',
                rentDataList:[],
                costDataList:[],
                rentcolumnData:[
                    { prop: 'costItem', label: '费用项目', click:'click', param:'id'},
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
                            percentRentMoney:'',
                            fixedRentMoney:'',
                            price: '',
                            startDate: "",
                            phaseCycleNum:'0个月0天'
                        }
                    ],
                    costItemId: '',
                    costType: '',
                    countType: '',
                    id: null,
                    lateFeeRate: '',
                    lateFee:'',
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
                costTypeOptions:[],
                costItemDataList:[],
                settleGroupname:'',
                costItemData:'',
                settleOptions:[],
                dateoption:[{
                    name: '年',
                    value:2
                }, {
                    name: '月',
                    value:1
                }, {
                    name: '日',
                    value:0
                }],
                countOptions:[{
                    name:'千分比',
                    value:0
                },{
                    name:'金额',
                    value:1
                }],
                stageOption:[],
                cstageOption:[],
                paymentWayOption:[],
                goodsTypeOption:[],
                rentArrayList:[],
                bondValue:0,
                depositNum:0,
                shopName:'',
                formData:'',
                contractId:'',
                contractCode:'',
                queryLogList:[],
                brandOptions:[],
                rentArea:'',
                fileListData:[],
                isStep:'1',
                tenancyTermNum:'0个月0天',
                cycleNum:'0个月0天',
                unitListPush:[],
                chengyi:{
                    receivableAmountVO:null,
                    receivedAmountVO:null,
                    restAmountVO:null
                },
                lvyue:{
                    receivableAmountVO:null,
                    receivedAmountVO:null,
                    restAmountVO:null
                },
                delayChange: '',
                buildType:1,
                floorListData:[],
                floorId:null
            };
        },
        mounted(){
            this.getIntentionList();
            this.getMerchantList();
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
            if (this.$route.params.delayChange != 0) {
                this.delayChange = this.$route.params.delayChange;
            }
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getUnitDataList();
                },300)
            },
            bondValue(){
                if(!this.chengyi.receivableAmountVO) this.chengyi.receivableAmountVO = 0;
                if(!this.lvyue.receivableAmountVO) this.lvyue.receivableAmountVO = 0;
                if(this.bondValue == null) this.bondValue = 0;
                this.lvyue.receivableAmountVO = parseFloat(this.bondValue)-parseFloat(this.chengyi.receivableAmountVO)
            }
        },
        computed:{
            stepName(){
                switch (this.$route.params.prototypeId){
                    case '0':
                        return '单元'
                        break;
                    case '1':
                        return '写字楼'
                        break;
                    case '2':
                        return '场地'
                        break;
                    case '3':
                        return '广告位'
                        break;
                }
            }
        },
        methods: {
            //获取添加合同选项的下拉列表
            async getIntentionList(){
                await this.$api.rentapi.getListForPageByPropertyTypeUsingGET({
                    propertyType:this.$route.params.prototypeId
                }).then(res=>{
                    this.intentionOptions = res.data.data.list;
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.getMerchantOption({
                    type:this.$route.params.prototypeId
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            merchantSelect(){
                this.getShopList(this.mainData.merchantId);
            },
            async getShopList(merchantId){
                let that = this;
                await this.$api.rentapi.getMerchantShopOption({
                    merchantId:merchantId
                }).then(res=>{
                    if (that.shopBrand.id) {
                        res.data.data.push({
                            value: that.shopBrand.id,
                            text: that.shopBrand.shopName,
                            code: '',
                            child: []
                        });
                    }
                    that.shopOptions = res.data.data;
                    that.shopBrand = {
                        value: that.shopBrand.id,
                        text: that.shopBrand.shopName,
                        code: '',
                        child: []
                    };
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
                    this.rateTypeOptions = res.data.data.rate_type;
                    this.cashierModeOptions = res.data.data.cashier_mode;
                    this.costTypeOptions = res.data.data.cost_type;
                    this.settleOptions = res.data.data.settle_type;
                    this.paymentWayOption = res.data.data.payment_way;
                })
            },
            selectIntentContract(){

            },
            //根据店铺自动选择品牌
            selectshopBrand(){
                this.mainData.shopId = this.shopBrand.value;
                this.mainData.brandId = this.shopBrand.child[0].value;
                this.mainBrandName = this.shopBrand.child[0].text;
            },
            //下一步的序号
            nextNum(){
                if(this.$route.params.contractId == 0) {
                    this.isStep = parseInt(this.activeName) + 1 + '';
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
                        this.mainData.id = res.data.data.contractId;
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
                        if(this.$route.params.contractId != 0) {
                            this.getContractInfo();
                        }
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async addShopUnit(){
                if(this.$route.params.contractId != 0){
                    this.unitData.contractId = this.$route.params.contractId;
                    this.unitData.propertyType = this.$route.params.prototypeId
                    this.unitData.contractCode = this.contractCode;
                    this.unitData.unitIds = this.checkedUnit;
                    await this.$api.rentapi.updateShopUnitUsingPUT({
                        request:this.unitData
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
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
                };
            },
            async addRentData(typeNum){
                this.rentData[0].type = typeNum;
                if(this.$route.params.delayChange != 0){
                    this.changeRentCostInfo();
                }else {
                    if(this.rentData[0].id == null) {
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
                let bondValue = parseFloat(this.bondValue);
                if (!this.bondValue || this.bondValue.indexOf('e') >= 0) {
                    this.$message.info('请输入数字');
                    return;
                }
                if (bondValue < 0 || bondValue > 999999999) {
                    this.$message.info('请输入大于等于0，小于9位数的正数');
                    return;
                }
                if (this.bondValue.indexOf('.') >=0 && this.bondValue.split('.')[1].length > 2) {
                    this.$message.info('请输入小于三位小位数的正数');
                    return;
                }
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.addBondUsingPOST({
                    request :{
                        bond: bondValue,
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
            async addFileUpload(event){
                console.log(event)
                document.getElementById('registSubmit').submit();
                this.getFileInfo();
            },
            //获取详细信息
            async getContractInfoData(){
                if(this.$route.params.prototypeId == 0){
                    this.mainData.cashierMode = 0;
                }
                if(this.$route.params.contractId != 0){
                    await this.$api.rentapi.getContractMainBodyUsingGET({
                        contractId: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.mainData = res.data.data;
                            this.unitData.contractId = res.data.data.contractId;
                            this.unitData.contractCode = res.data.data.contractCode;
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
                            this.merchantSelect();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
                    await this.$api.rentapi.getContractUnitInformationUsingGET({
                        contractCode : this.contractCode
                    }).then(res => {
                        if (res.data.status == 200) {
                            if (this.$route.params.prototypeId == 0) {
                                if(res.data.data.rentShop != null) {
                                    this.unitData = res.data.data.rentShop;
                                    this.unitData.rentWay = res.data.data.rentShop.rentWay + '';
                                    this.unitData.shopId = res.data.data.rentShop.id;
                                }
                            } else {
                                if(res.data.data.rentSite != null) {
                                    this.unitData = res.data.data.rentSite;
                                    this.unitData.rentWay = res.data.data.rentSite.rentWay + '';
                                    this.unitData.siteId = res.data.data.rentSite.id;
                                }
                            }
                            if(res.data.data.rentUnitList != null) {
                                this.unitListPush = res.data.data.rentUnitList
                                this.checkedUnit = res.data.data.rentUnitList.map(item => {
                                    return item.id;
                                });
                            }
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    await this.$api.rentapi.getContractBondInfoUsingGET({
                        contractCode : this.contractCode
                    }).then(res => {
                        if (res.data.status == 200) {
                            if(res.data.data != null) {
                                this.bondValue = res.data.data.contractBond;
                                this.chengyi = res.data.data.chengyi;
                                this.lvyue = res.data.data.lvyue;
                            }
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    //获取附件
                    await this.$api.rentapi.fileUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.fileListData = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    });
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
            //获取上传附件列表
            async getFileInfo(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.fileUsingGET({
                    id: this.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.fileListData = res.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            //获取单元的弹框列表
            changeFloorUnit(id){
                this.floorId = id;
                this.getUnitDataList();
            },
            async getUnitDataList(){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:'1',
                    pageSize:'200000',
                    code:this.searchText,
                    buildId:this.buildType,
                    floorId:this.floorId,
                    type:this.$route.params.prototypeId,
                    status:1,
                    states:''
                }).then(res=>{
                    this.unitDataList = res.data.data.list;
                })
            },
            addItem(){
                this.dialogVisible = true;
                this.getFloorList(1);
                this.getUnitDataList(null);
            },
            handleUnitClose(){
                this.dialogVisible = false;
            },
            handleUnit(){
                this.dialogVisible = false;
                this.unitData.unitIds = this.checkedUnit;
                this.unitListPush = [];
                this.checkedUnit.forEach(item => {
                    this.unitDataList.map(__item => {
                        if (__item.id == item) {
                            this.unitListPush.push(__item);
                        }
                    });
                });
                this.unitData.area = this.unitListPush.reduce(function(prev, cur){
                    return prev + cur.area;
                },0);
                this.unitData.useArea = this.unitListPush.reduce(function(prev, cur){
                    return prev + cur.useArea;
                },0);
            },
            unitChange(id){
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
            async getFloorList(typeNum){
                this.floorId = null;
                this.buildType = typeNum;
                await this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId : typeNum
                }).then(res => {
                    if (res.data.status == 200) {
                        this.floorListData = res.data.data;
                        this.getUnitDataList();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            //删除单元列表
            async deleteUnitList(unitItem){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let index = this.unitListPush.indexOf(unitItem)
                    if (index !== -1) {
                        this.unitListPush.splice(index, 1)
                    }
                })
            },
            //切换到添加
            addClickRentInfo(stepNum){
                this.stepNumber = stepNum;
                localStorage.setItem('step',stepNum);
                let contractId = this.rentData[0].contractId;
                this.rentData = [{
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
                            startDate: "",
                            phaseCycleNum:'0个月0天'
                        }
                    ],
                    costItemId: '',
                    costType: '',
                    countType: '',
                    id: null,
                    lateFeeRate: '',
                    lateFee:'',
                    lateFeeStartDate: "",
                    remark: "",
                    highOrLow: '',
                    settleCycle: "",
                    settleGroupId: '',
                    settleType: '',
                    settleUnit: 1,
                    termsVersion: 1,
                    type: 0
                }];
                if (contractId) this.rentData[0].contractId = contractId;
                this.costTypeData = {value: ''};
                this.costItemData = {id: ''};
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
                    this.rentData = [res.data.data];
                    this.costTypeData = {value:res.data.data.costType};
                    this.costItemData = {id:res.data.data.costItemId};
                    this.rentData[0].settleGroupId = res.data.data.settleGroupId;
                    this.settleGroupname = res.data.data.settleGroupName;
                    this.updateCostTypeSelect();
                    this.rentData[0].settleType = res.data.data.settleType;
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
                    contractFormalRentTermsId : data
                }).then(res => {
                    this.rentData = [res.data.data];
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
            handleClick(tab, event) {
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
                this.rentData[0].settleType = '';
                await this.$api.financeapi.selectByCostTypeUsingGET({
                    costType:this.costTypeData.value,
                    propertyType: this.$route.params.prototypeId
                }).then(res=>{
                    this.costItemDataList = res.data.data;
                });
                this.rentData[0].costType = this.costTypeData.value;
                if(this.costTypeData.value == 1){
                    this.settleOptions=[{
                        text:'抽成费用',
                        value:1
                    },{
                        text:'抽成比高',
                        value:2
                    },{
                        text:'抽成比低',
                        value:3
                    }]
                }else{
                    this.settleOptions=[{
                        text:'固定费用',
                        value:0
                    }]
                }

            },
            async updateCostTypeSelect(){
                await this.$api.financeapi.selectByCostTypeUsingGET({
                    costType:this.costTypeData.value,
                    propertyType: this.$route.params.prototypeId
                }).then(res=>{
                    this.costItemDataList = res.data.data;
                });
                this.rentData[0].costType = this.costTypeData.value;
                if(this.costTypeData.value == 1){
                    this.settleOptions=[{
                        text:'抽成费用',
                        value:1
                    },{
                        text:'抽成比高',
                        value:2
                    },{
                        text:'抽成比低',
                        value:3
                    }]
                }else{
                    this.settleOptions=[{
                        text:'固定费用',
                        value:0
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
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.startAmount == '' || item.endAmount == '' || item.percent == '' ) {
                        this.$message.error('阶段不能为空');
                        return;
                    }
                }
                _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                    endAmount: '',
                    goodsTypeId: '',
                    paymentWay: '',
                    percent: '',
                    percentVersion: '',
                    startAmount: ''
                });
            },
            //删除销售额分段
            deletePercentList(_index,_percentlist,_stageList) {
                _stageList.contractPeriodPercentParamList.splice(_index, 1);
            },
            addGoodsList(_index,_percentlist,_stageList){
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.goodsTypeId == '' || item.percent == '' ) {
                        this.$message.error('阶段不能为空');
                        return;
                    }
                }
                _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                    endAmount: '',
                    goodsTypeId: '',
                    paymentWay: '',
                    percent: '',
                    percentVersion: '',
                    startAmount: ''
                });
            },
            deleteGoodsList(_index,_percentlist,_stageList) {
                _stageList.contractPeriodPercentParamList.splice(_index, 1);
            },
            addPayList(_index,_percentlist,_stageList){
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.paymentWay == '' || item.percent == '' ) {
                        this.$message.error('阶段不能为空');
                        return;
                    }
                }
                _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                    endAmount: '',
                    goodsTypeId: '',
                    paymentWay: '',
                    percent: '',
                    percentVersion: '',
                    startAmount: ''
                });
            },
            deletePayList(_index,_percentlist,_stageList) {
                _stageList.contractPeriodPercentParamList.splice(_index, 1);
            },
            //获取固定类型及抽成类型的下拉数据
            async typeFocus(typeNum){
                await this.$api.rentapi.getFixedPercentTypeUsingGET({
                    propertyType:this.$route.params.prototypeId,
                    settleType:typeNum
                }).then(res=>{
                    this.stageOption = res.data.data;
                });
            },
            async ctypeFocus(typeNum){
                await this.$api.rentapi.getFixedPercentTypeUsingGET({
                    propertyType:this.$route.params.prototypeId,
                    settleType:typeNum
                }).then(res=>{
                    this.cstageOption = res.data.data;
                });
            },
            ctypeChange(_stageList){
                _stageList.contractPeriodPercentParamList = [
                    {
                        endAmount: '',
                        goodsTypeId: '',
                        paymentWay: '',
                        percent: '',
                        percentVersion: '',
                        startAmount: '0'
                    }
                ];
            },
            tenancyTerm(){
                this.tenancyTermNum = this.$dateNumber(this.mainData.validStartDate,this.mainData.validEndDate)
            },
            cycleChange(){
                this.cycleNum = this.$dateNumber(this.mainData.decorationStartDate,this.mainData.decorationEndDate)
            },
            phaseCycle(startDate,endDate){
                this.phaseCycleNum = this.$dateNumber(startDate,endDate)
            },
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