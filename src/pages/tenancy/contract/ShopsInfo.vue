<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameauto">版本号：{{mainData.version}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameWidth">意向合同：</span>
                                    <span class="dialogtext rightcompany">{{mainData.intentionContractCode ? mainData.intentionContractCode : ''}}{{mainData.intentionContractMerchantName ? '（'+mainData.intentionContractMerchantName+'）' : ''}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameWidth">合同分类：</span>
                                    <span class="dialogtext rightcompany">{{mainData.contractTypeName}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameWidth">合同类型：</span>
                                    <span class="dialogtext rightcompany">{{mainData.contractKindName}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameWidth">销售计税类型：</span>
                                    <span class="dialogtext rightcompany">{{mainData.rateTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext htinfoinput">
                                    <span class="inputname">税率：</span>
                                    <span class="middleinput">{{mainData.rate}}</span>
                                    <span class="rightcompany">%</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname inputnameWidth">合同说明：</span>
                                    <span class="dialogtext rightcompany">{{mainData.description}}</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="商户信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">商户：</span>
                                    <span class="dialogtext">{{mainData.merchantCode+'('+mainData.merchantName+')'}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">店铺：</span>
                                    <span class="dialogtext">{{mainData.shopCode+'('+mainData.shopName+')'}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 2 || this.$route.params.prototypeId == 3">
                                    <span class="inputname">品牌：</span>
                                    <span class="dialogtext">{{mainData.brandName}}</span>
                                </div>
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">经营方式：</span>
                                    <span class="dialogtext">{{mainData.operationModeName}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 1">
                                    <span class="inputname">店铺号：</span>
                                    <span class="dialogtext">{{mainData.siteCode}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">结算等级：</span>
                                    <span class="dialogtext">{{mainData.settleLevelName}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">收银模式：</span>
                                    <span class="dialogtext">{{mainData.cashierModeName}}</span>
                                </div>
                                <div class="dialoginput htinfoinput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">免租期：</span>
                                    <span class="dialogtext">{{mainData.rentFreeNumber}}</span>
                                    <span class="dialogtext">天</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="时间条款"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">合同有效期：</span>
                                    <span class="dialogtext">{{mainData.validStartDate}}</span>
                                    <span class="rightcompany">~</span>
                                    <span class="dialogtext rightcompany">{{mainData.validEndDate}}</span>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">合同租期：{{mainData.validCycle}}</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">交铺日期：</span>
                                    <span class="dialogtext">{{mainData.pavingDate}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">开业日期：</span>
                                    <span class="dialogtext">{{mainData.openingDate}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 1">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">入住日期：</span>
                                    <span class="dialogtext">{{mainData.enterDate}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1 || this.$route.params.prototypeId == 2">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">装修周期：</span>
                                    <span class="dialogtext">{{mainData.decorationStartDate}}</span>
                                    <span class="rightcompany">~</span>
                                    <span class="dialogtext rightcompany">{{mainData.decorationEndDate}}</span>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">周期：{{mainData.decorationCycle}}</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">起租日期：</span>
                                    <span class="dialogtext">{{mainData.rentStartDate}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">签约日期：</span>
                                    <span class="dialogtext">{{mainData.signDate}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="15">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">备注：</span>
                                    <span class="dialogtext">{{mainData.remark}}</span>
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
                                            <p style="max-width: 240px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{shopName}}</p>
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
                                            <p>{{unitData.area.toFixed(2)}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="delayChange == 2 || delayChange == 1 || unitData.rentWay == '0'" label="1">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>{{unitData.useArea.toFixed(2)}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>计租面积</span>
                                            <p>{{unitData.rentArea.toFixed(2)}}</p>
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
                            <el-col :span="24" v-if="unitChangeHistory.length != 0">
                                <div class="changehistorybtn" @click="changeHistory">查看变更历史></div>
                                <table class="table_content" cellspacing="0" cellpadding="0" border="0" v-show="isChangeHistory">
                                    <thead>
                                       <tr>
                                           <th>版本号</th>
                                           <th>单元号</th>
                                           <th v-if="$route.params.prototypeId != 3">建筑面积<p>（变更前）</p></th>
                                           <th v-if="$route.params.prototypeId != 3">建筑面积<p>（变更后）</p></th>
                                           <th v-if="$route.params.prototypeId != 3">使用面积<p>（变更前）</p></th>
                                           <th v-if="$route.params.prototypeId != 3">使用面积<p>（变更后）</p></th>
                                           <th v-if="$route.params.prototypeId == 3">规格<p>（变更前）</p></th>
                                           <th v-if="$route.params.prototypeId == 3">规格<p>（变更后）</p></th>
                                           <th>变更时间</th>
                                           <th>变更人</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="changeHistoryData in unitChangeHistory">
                                            <td>{{changeHistoryData.contractVersion}}</td>
                                            <td>{{changeHistoryData.unitCode}}</td>
                                            <td v-if="$route.params.prototypeId != 3">{{changeHistoryData.prevBuildArea}}</td>
                                            <td v-if="$route.params.prototypeId != 3">{{changeHistoryData.currentBuildArea}}</td>
                                            <td v-if="$route.params.prototypeId != 3">{{changeHistoryData.prevUseArea}}</td>
                                            <td v-if="$route.params.prototypeId != 3">{{changeHistoryData.currentUseArea}}</td>
                                            <td v-if="$route.params.prototypeId == 3">{{changeHistoryData.prevAdverStandard}}</td>
                                            <td v-if="$route.params.prototypeId == 3">{{changeHistoryData.curAdverStandard}}</td>
                                            <td>{{changeHistoryData.updateDate}}</td>
                                            <td>{{changeHistoryData.operatorName}}</td>
                                        </tr>
                                        <tr v-show="isLoadBtn == false">
                                            <td style="border-bottom: none;" align="center" colspan="8"><div class="loadmore" @click="getLoadMore()">加载更多</div></td>
                                        </tr>
                                        <tr v-show="isLoadBtn == true">
                                            <td style="border-bottom: none;" align="center" colspan="8"><div class="loadmore">没有更多数据</div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="外摆面积" v-if="this.$route.params.prototypeId == 0"></blank-head>
                    <div class="commonbox" v-if="this.$route.params.prototypeId == 0">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">外摆面积</span>
                                    <span class="dialogtext">{{unitData.swingArea}}</span>
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
                                <rt-page ref="page" :cur="pageNum" :total="total1" :pageSize="20" @change="getRentDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==31">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <span class="inputtext lineheight">{{rentData[0].costTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <span class="inputtext lineheight">{{rentData[0].costItemName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputtext lineheight">{{rentData[0].settleGroupName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <span class="inputtext lineheight">{{rentData[0].settleTypeName}}</span>
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
                                        <el-select v-model="rentData[0].settleUnit" clearable class="dialogselect" disabled>
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
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFeeStartDate" readonly>
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" clearable placeholder="" class="dialogselect" readonly disabled>
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
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFeeRate" readonly>
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFee" readonly>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" v-model="rentData[0].remark" readonly></textarea>
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
                                                    <span class="dialogtext rightcompany">{{stageList.startDate}}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <span class="dialogtext rightcompany">{{stageList.endDate}}</span>
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
                                                        <span class="inputtext lineheight">{{stageList.fixedTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" v-model="stageList.fixedAmount" readonly>
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div style="display: none;">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" v-model="stageList.fixedArea" readonly>
                                                        <span class="rightcompany">㎡</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <template>
                                                        <el-checkbox v-model="stageList.outsideAreaOrNot"  class="stagelineheight" disabled>增加外摆面积（{{stageList.outsideArea}}㎡）</el-checkbox>
                                                    </template>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5"></div>
                                            </div>
                                            <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" v-model="stageList.price" readonly>
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
                                                        <span class="inputtext lineheight">{{stageList.percentTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.percentType == 6">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" v-model="stageList.percent" readonly>
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
                                                            <input class="inputtext lineheight" type="text" v-model="percentlist.startAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" v-model="percentlist.endAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
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
                                                        <el-select v-model="percentlist.goodsTypeId" clearable placeholder="" class="dialogselect" disabled>
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
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 10">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.paymentWay" clearable placeholder="" class="dialogselect" disabled>
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
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
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
                                <rt-page ref="page" :cur="pageNum" :total="total2" :pageSize="20" @change="getCostDataList" style="margin-bottom:30px"></rt-page>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==41">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <span class="inputtext lineheight">{{rentData[0].costTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <span class="inputtext lineheight">{{rentData[0].costItemName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <span class="inputtext lineheight">{{rentData[0].settleGroupName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <span class="inputtext lineheight">{{rentData[0].settleTypeName}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" v-model="rentData[0].settleCycle" readonly>
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="rentData[0].settleUnit" clearable class="dialogselect" disabled>
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
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFeeStartDate" readonly>
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="rentData[0].countType" clearable placeholder="" class="dialogselect" readonly disabled>
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
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFeeRate" readonly>
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" v-model="rentData[0].lateFee" readonly>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" v-model="rentData[0].remark" readonly></textarea>
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
                                                    <span class="dialogtext rightcompany">{{stageList.startDate}}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">截止日期</span>
                                                    <span class="dialogtext rightcompany">{{stageList.endDate}}</span>
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
                                                        <span class="inputtext lineheight">{{stageList.fixedTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" v-model="stageList.fixedAmount" readonly>
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div style="display: none;">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" v-model="stageList.fixedArea" readonly>
                                                        <span class="rightcompany">㎡</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <template>
                                                        <el-checkbox v-model="stageList.outsideAreaOrNot"  class="stagelineheight" disabled>增加外摆面积（{{stageList.outsideArea}}㎡）</el-checkbox>
                                                    </template>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5"></div>
                                            </div>
                                            <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" v-model="stageList.price" readonly>
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
                                                        <span class="inputtext lineheight">{{stageList.percentTypeName}}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.percentType == 6">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" v-model="stageList.percent" readonly>
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
                                                            <input class="inputtext lineheight" type="text" v-model="percentlist.startAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <!--<div class="flexwidth" v-if="index == stageList.contractPeriodPercentParamList.length-1">以上</div>-->
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" v-model="percentlist.endAmount" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
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
                                                        <el-select v-model="percentlist.goodsTypeId" clearable class="dialogselect" disabled>
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
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistdel"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-show="stageList.percentType == 10">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select v-model="percentlist.paymentWay" clearable placeholder="" class="dialogselect" disabled>
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
                                                            <input class="inputtext" type="text" v-model="percentlist.percent" readonly>
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
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
                                <div class="dialoginput htinfoinput">
                                    <span class="inputname">应收金额</span>
                                    <span class="dialogtext rightcompany">{{bondValue}}</span>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="commonbox">
                            <el-row class="dialogbox">
                                <el-col :span="10">
                                    <div class="titleStyle">履约保证金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{lvyue.receivableAmountVO < 0?0:lvyue.receivableAmountVO.toFixed(2)}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥{{lvyue.receivedAmountVO.toFixed(2)}}</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥{{lvyue.restAmountVO.toFixed(2)}}</span></div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="titleStyle">诚意金</div>
                                    <div class="bondconta">应收金额：<span class="money">¥{{chengyi.receivableAmountVO.toFixed(2)}}</span></div>
                                    <div class="bondcontb">已收金额：<span class="money">¥{{chengyi.receivedAmountVO.toFixed(2)}}</span></div>
                                    <div class="bondcontc">未收金额：<span class="money">¥{{chengyi.restAmountVO.toFixed(2)}}</span></div>
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
                                            <span>{{queryLis.showUpdateDatetime}}</span>
                                            <router-link :to="'/inner/shopsinfo/'+$route.params.prototypeId+'/'+queryLis.contractId" @click.native="activeNameSwitch">>查看完整合同</router-link>
                                        </div>
                                        <div class="historyversion">
                                            <span>合同版本：{{queryLis.contractVersion}}</span>
                                            <span class="revisecont">{{queryLis.showDoType}}</span>
                                        </div>
                                        <div class="historycont" v-if="queryLis.doType == 40">
                                            <ul>
                                                <li>1.增加【退租日期】:{{queryLis.stopDate}}</li>
                                                <li>2.增加【退租性质】:{{queryLis.stopTypeText}}</li>
                                                <li>3.增加【原因】:{{queryLis.stopReason}}</li>
                                            </ul>
                                        </div>
                                        <div class="historycont">
                                            <ul>
                                                <li v-for="(logDetails,index) in queryLis.logDetailsList">{{index+1}}.{{logDetails.showLogContentAction}}{{logDetails.logContentValue}}</li>
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
        <div class="savebtn" v-if="stepNumber == 0">
            <button @click="backlist()">返回</button>
        </div>
        <div class="savebtn" v-if="stepNumber != 0">
            <button @click="backRentCost()">返回</button>
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
                rentPageSize: 20,
                costPageSize: 20,
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
                    { prop: 'time', label: '起止时间' },
                    // { prop: 'endDate', label: '' },
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
                    receivableAmountVO:0,
                    receivedAmountVO:0,
                    restAmountVO:0
                },
                lvyue:{
                    receivableAmountVO:0,
                    receivedAmountVO:0,
                    restAmountVO:0
                },
                delayChange: '',
                buildType:1,
                floorListData:[],
                floorId:null,
                unitChangeHistory:[],
                isChangeHistory:false,
                unitPageNum:1,
                isLoadBtn:false
            };
        },
        mounted(){
            setTimeout(()=>{
                this.stepNumber = localStorage.getItem('step')
                this.activeName = localStorage.getItem('activeName')
            },0);
            this.getContractInfoData();
            this.getBaseDataOptions();
        },
        watch:{
            bondValue(){
                if(!this.chengyi.receivableAmountVO) this.chengyi.receivableAmountVO = 0;
                if(!this.lvyue.receivableAmountVO) this.lvyue.receivableAmountVO = 0;
                if(this.bondValue == null) this.bondValue = 0;
                this.lvyue.receivableAmountVO = parseFloat(this.bondValue)-parseFloat(this.chengyi.receivableAmountVO)
            },
            '$route' (to, from) {
                this.activeNameSwitch();
                setTimeout(()=>{
                    this.stepNumber = localStorage.getItem('step')
                    this.activeName = localStorage.getItem('activeName')
                },0);
                this.getContractInfoData();
                this.getBaseDataOptions();
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
            //获取详细信息
            async getContractInfoData(){
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
                this.getUnitChangeHistoryList();
                await this.$api.rentapi.getContractBondInfoUsingGET({
                    contractCode : this.contractCode
                }).then(res => {
                    if (res.data.status == 200) {
                        if(res.data.data != null) {
                            this.bondValue = res.data.data.contractBond;
                            this.chengyi = res.data.data.chengyi;
                            this.lvyue = res.data.data.lvyue;
                            if(!this.chengyi.receivableAmountVO){
                                this.chengyi.receivableAmountVO = 0;
                            }
                            if(!this.chengyi.receivedAmountVO){
                                this.chengyi.receivedAmountVO = 0;
                            }
                            if(!this.chengyi.restAmountVO){
                                this.chengyi.restAmountVO = 0;
                            }
                            if(!this.lvyue.receivableAmountVO){
                                this.lvyue.receivableAmountVO = 0;
                            }
                            if(!this.lvyue.receivedAmountVO){
                                this.lvyue.receivedAmountVO = 0;
                            }
                            if(!this.lvyue.restAmountVO){
                                this.lvyue.restAmountVO = 0;
                            }
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
                    contractCode: this.contractCode
                }).then(res => {
                    if (res.data.status == 200) {
                        this.queryLogList = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            getLoadMore(){
                this.$delay(()=>{
                    this.unitPageNum += 1;
                    this.getUnitChangeHistoryList();
                },300)
            },
            activeNameSwitch(){
                this.activeName = '1';
                this.stepNumber = 0;
                localStorage.setItem('activeName',1);
                localStorage.setItem('step',0);
            },
            async getUnitChangeHistoryList(){
                await this.$api.rentapi.getUnitChangeHistory({
                    param:{
                        contractCode: this.contractCode,
                        pageNum: this.unitPageNum,
                        pageSize: 1
                    },
                }).then(res => {
                    if (res.data.status == 200) {
                        if(this.unitPageNum == 1){
                            this.unitChangeHistory = res.data.data.list
                        }else{
                            this.unitChangeHistory = [...this.unitChangeHistory,...res.data.data.list];
                        }
                        if(this.unitPageNum >= res.data.data.pages){
                            this.isLoadBtn = true;
                        }
                    }else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async getBaseDataOptions(){
                await this.$api.rentapi.baseDataOptionsUsingGET().then(res=>{
                    this.paymentWayOption = res.data.data.payment_way;
                })
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
            //获取租金和费用的列表
            async getRentDataList(pageNum,pageSize){
                this.rentPageSize = pageSize;
                if(this.$route.params.contractId != 0){
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.contractOldVersion({
                    pageNum: pageNum,
                    pageSize: this.rentPageSize,
                    contractId: this.contractId,
                    type: 0
                }).then(res => {
                    res.data.data.list.forEach(item => {
                        item.time = item.startDate.replace(/\-/g,'/') +'~'+ item.endDate.replace(/\-/g,'/');
                    });
                    this.rentDataList = res.data.data.list;
                    this.total1 = res.data.data.total;
                })
            },
            async getCostDataList(pageNum,pageSize){
                this.costPageSize = pageSize;
                if(this.$route.params.contractId != 0){
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.contractOldVersion({
                    pageNum: pageNum,
                    pageSize: this.costPageSize,
                    contractId: this.contractId,
                    type: 1
                }).then(res => {
                    res.data.data.list.forEach(item => {
                        item.time = item.startDate.replace(/\-/g,'/') +'~'+ item.endDate.replace(/\-/g,'/');
                    });
                    this.costDataList = res.data.data.list;
                    this.total2 = res.data.data.total;
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
                    this.costTypeData = {value:res.data.data.costType};
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
            backlist(){
                switch (this.$route.params.prototypeId){
                    case '0':
                        return this.$router.push('/inner/shops/0');
                        break;
                    case '1':
                        return this.$router.push('/inner/coffice/1');
                        break;
                    case '2':
                        return this.$router.push('/inner/field/2');
                        break;
                    case '3':
                        return this.$router.push('/inner/adposition/3');
                        break;
                }
            },
            //变更历史切换
            changeHistory(){
                if(this.isChangeHistory){
                    this.isChangeHistory = false;
                }else {
                    this.isChangeHistory = true;
                }
            },
            backRentCost(){
                this.stepNumber = 0;
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
    .changehistorybtn{
        color:#457fcf;
        margin-top: 30px;
        cursor: pointer;
    }
    .table_content{
        width:100%;
        margin-top: 20px;
    }
    .table_content thead th{
        border-bottom: 1px solid #e5e5e5;
        padding: 10px 0;
        color: #666;
    }
    .table_content tbody td{
        border-bottom: 1px solid #e5e5e5;
        line-height: 40px;
        color: #666;
        text-align: center;
    }
    .loadmore{
        padding: 10px 0;
        cursor: pointer;
    }
</style>