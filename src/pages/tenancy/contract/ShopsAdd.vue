<template>
    <div class="savebox" v-loading.fullscreen="loading">
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
                                    <el-select filterable clearable v-model="intentionContractData" :disabled="delayChange == 2 || delayChange == 1" placeholder="选填" value-key="id" class="dialogselect" @change="selectIntentContract">
                                        <el-option
                                                v-for="item in intentionOptions"
                                                :key="item.id"
                                                :label="item.contractCode+'('+item.merchantName+')'"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select filterable clearable v-model="mainData.contractType" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect">
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
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同类型</span>
                                    <el-select filterable clearable v-model="mainData.contractKind" :disabled="delayChange == 2 || delayChange == 1" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in kindOptions"
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
                                    <el-select filterable clearable v-model="mainData.rateType" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect" @change="rateNumber()">
                                        <el-option
                                                v-for="item in rateTypeOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext">
                                    <div class="inputname">税率</div>
                                    <input class="middleinput" type="text" placeholder="0"  v-model="mainData.rate" :disabled="mainData.rateType == '0' || delayChange == 2 || delayChange == 1">
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
                                    <textarea class="textareabox" placeholder="选填" v-model="mainData.description" :disabled="delayChange == 2 || delayChange == 1"></textarea>
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
                                    <el-select filterable clearable v-model="mainData.merchantId" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect" @change="merchantSelect(),clearBranddata()">
                                        <el-option
                                                v-for="item in merchantOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">店铺</span>
                                    <el-select filterable clearable v-model="shopBrand" value-key="value" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect" @change="selectshopBrand()">
                                        <el-option
                                                v-for="item in shopOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item">
                                        </el-option>
                                        <!-- <el-option value="">
                                            <router-link to="/inner/addshop/0" style="color:#457fcf; text-decoration: none;display: block;">添加</router-link>
                                        </el-option> -->
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">品牌</span>
                                    <span class="dialogtext">{{mainBrandName}}</span>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 2 || this.$route.params.prototypeId == 3">
                                    <span class="inputname">品牌</span>
                                    <el-select filterable clearable v-model="mainData.brandId" :disabled="delayChange == 2 || delayChange == 1" :placeholder="this.$route.params.prototypeId == 2?'请选择':'选填'" class="dialogselect">
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
                                    <el-select filterable clearable v-model="mainData.operationMode" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect">
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
                                    <el-select filterable clearable v-model="mainData.settleLevel" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect">
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
                                    <el-select filterable clearable v-model="mainData.cashierMode" :disabled="delayChange == 2 || delayChange == 1" placeholder="请选择" class="dialogselect" disabled>
                                        <el-option
                                                v-for="item in cashierModeOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                    <span class="inputname">免租期</span>
                                    <input class="inputtext" type="text" placeholder="请输入免租期" :disabled="delayChange == 2 || delayChange == 1" v-model="mainData.rentFreeNumber" v-limitNum>
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
                                            value-format="yyyy-MM-dd"
                                            @change="tenancyTerm()"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
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
                                            class="inputtext"
                                            v-model="mainData.openingDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="选填">
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
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="选填">
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
                                            value-format="yyyy-MM-dd"
                                            @change="cycleChange()"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="选填">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.decorationEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="cycleChange()"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="选填">
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
                                            class="inputtext"
                                            v-model="mainData.signDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            :disabled="delayChange == 2 || delayChange == 1"
                                            placeholder="选填">
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
                                    <textarea class="textareabox" placeholder="选填" v-model="mainData.remark" :disabled="delayChange == 2 || delayChange == 1"></textarea>
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
                                                    <el-radio v-model="unitData.rentWay" :disabled="delayChange == 2 || delayChange == 1" label="0" @change="radioChange()">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>{{unitData.area.toFixed(2)}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="delayChange == 2 || delayChange == 1" label="1" @change="radioChange()">计租</el-radio>
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
                                    <div class="deletebtn">
                                        <button data-v-4d27413a="" class="btn_text" @click="deleteUnitList(UnitItem,UnitItem.id)" :disabled="delayChange == 2 || delayChange == 1">删除</button>
                                    </div>
                                </div>
                            </div>
                            <div class="listcont"><el-button icon="el-icon-plus" :disabled="delayChange == 2 || delayChange == 1" @click="addItem">继续添加</el-button></div>
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
                                        <div class="deletebtn">
                                            <button data-v-4d27413a="" class="btn_text" @click="deleteUnitList(UnitItem,UnitItem.id)" :disabled="delayChange == 2 || delayChange == 1">删除</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="listcont"><el-button icon="el-icon-plus" @click="addItem" :disabled="delayChange == 2 || delayChange == 1">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="外摆面积" v-if="this.$route.params.prototypeId == 0"></blank-head>
                    <div class="commonbox" v-if="this.$route.params.prototypeId == 0">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname">外摆面积</span>
                                    <input class="inputtext" type="text" placeholder="选填" :disabled="delayChange == 2 || delayChange == 1" v-model="unitData.swingArea">
                                    <span class="dialogtext">㎡</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" :disabled="isStep<3 && this.$route.params.contractId ==0" name="3">
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
                                            <button class="btn_text" @click="getRentInfo(scope.row,scope.row.id,31)">编辑</button>
                                            <button class="btn_text" @click="deleteDataList(scope.row,scope.row.id)">删除</button>
                                        </template>
                                    </el-table-column>
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
                                    <el-select filterable clearable v-model="costTypeData" placeholder="请选择" class="dialogselect" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo" @change="costTypeSelect()" style="height:30px;">
                                        <el-option
                                                v-for="item in costTypeOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select filterable clearable v-model="costItemData" value-key="id" placeholder="请选择" class="dialogselect" @change="costItemSelect()" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                    <span class="inputtext" style="line-height: 40px;">{{settleGroupname}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select filterable clearable v-model="rentData[0].settleType" placeholder="请选择" class="dialogselect" @change="settleTypeSelect()" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <el-option
                                                v-for="item in settleOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select filterable clearable v-model="rentData[0].settleUnit" class="dialogselect" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate" v-limitNum :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select filterable clearable v-model="rentData[0].countType" placeholder="选填" class="dialogselect" @change="changeCountType" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" placeholder="请输入金额" v-model="rentData[0].lateFee" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo"></textarea>
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
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList)"
                                                            :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo"
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
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList)"
                                                            @focus="getGenDate(stageList)"
                                                            :picker-options="pickerOptions"
                                                            :disabled="index != listIndex || stageList.generated == 30 || isRentCostInfo"
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
                                                        <el-select filterable clearable v-model="stageList.fixedType" placeholder="请选择" class="dialogselect" @focus="typeFocus(0)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <el-option
                                                                    v-for="item in stageOption"
                                                                    :key="item.value"
                                                                    :label="item.text"
                                                                    :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" placeholder="请输入金额" v-model="stageList.fixedAmount" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div style="display: none;">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea" readonly :disabled="stageList.generated != 10">
                                                        <span class="rightcompany">㎡</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <template>
                                                        <el-checkbox v-model="stageList.outsideAreaOrNot" class="stagelineheight" v-show="mainData.propertyType == 0" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">增加外摆面积（{{unitData.swingArea}}㎡）</el-checkbox>
                                                    </template>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5"></div>
                                            </div>
                                            <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" placeholder="请输入单价" v-model="stageList.price" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
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
                                                        <el-select filterable clearable v-model="stageList.percentType" placeholder="请选择" class="dialogselect" @focus="ctypeFocus(1)" @change="ctypeChange(stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
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
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 7 && costTypeData.value == 1 && rentData[0].settleType !='' || stageList.percentType == 8 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">销售额分段（单位/元）</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="flexwidth" v-if="_index == 0">{{percentlist.startAmount}}</div>
                                                    <div class="flexwidth" v-if="_index != 0" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount" @change="startAmountTwoNum(percentlist)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount" @change="endAmountTwoNum(percentlist)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPercentList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text" @click="deletePercentList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 9 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">货品组别</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select filterable clearable v-model="percentlist.goodsTypeId" placeholder="请选择" class="dialogselect" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo" @change="goodsTypeChange(_index,percentlist,stageList)">
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
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addGoodsList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text"  @click="deleteGoodsList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 10 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select filterable clearable v-model="percentlist.paymentWay" placeholder="请选择" class="dialogselect" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo" @change="payListChange(_index,percentlist,stageList)">
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
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPayList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text"  @click="deletePayList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span v-show="index != listIndex" v-if="isRentCostInfo == false"><button @click="editListData(index)" :disabled="stageList.generated == 30 || isRentCostInfo">修改</button></span>
                                        <span v-show="index == listIndex" v-if="isRentCostInfo == false"><button @click="saveListData(index)" :disabled="stageList.generated == 30 || isRentCostInfo">保存</button></span>
                                        <span v-if="isRentCostInfo == false"><button @click="deleteStageBox(stageList,index)" :disabled="stageList.generated != 10 || isRentCostInfo">删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addStageList()" v-if="isRentCostInfo == false">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" :disabled="isStep<3 && this.$route.params.contractId ==0" name="4">
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
                                            <button class="btn_text" @click="getRentInfo(scope.row,scope.row.id,41)">编辑</button>
                                            <button class="btn_text" @click="deleteDataList(scope.row,scope.row.id)">删除</button>
                                        </template>
                                    </el-table-column>
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
                                    <el-select filterable clearable v-model="costTypeData" placeholder="请选择" class="dialogselect" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo" @change="costTypeSelect()" style="height:30px;">
                                        <el-option
                                                v-for="item in costTypeOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select filterable clearable v-model="costItemData" value-key="id" placeholder="请选择" class="dialogselect" @change="costItemSelect()" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                    <span class="inputtext" style="line-height: 40px;">{{settleGroupname}}</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select filterable clearable v-model="rentData[0].settleType" placeholder="请选择" class="dialogselect" @change="settleTypeSelect()" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <el-option
                                                v-for="item in settleOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数" v-model="rentData[0].settleCycle" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select filterable clearable v-model="rentData[0].settleUnit" class="dialogselect" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceMonth" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" v-model="rentData[0].advanceDay" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日" v-model="rentData[0].lateFeeStartDate" v-limitNum :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select filterable clearable v-model="rentData[0].countType" placeholder="选填" class="dialogselect" @change="changeCountType" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
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
                                    <input class="inputtext" type="text" placeholder="请输入比例" v-model="rentData[0].lateFeeRate" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                    <span class="rightcompany">‰</span>
                                </div>
                                <div class="rentcontent" v-if="rentData[0].countType == 1">
                                    <span class="inputname inputnameCenter">滞纳金金额</span>
                                    <input class="inputtext" type="text" placeholder="请输入金额" v-model="rentData[0].lateFee" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo">
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="dialoginput noline" style="flex-direction: column;">
                                    <div>
                                        <span class="inputname">合同说明</span>
                                    </div>
                                    <textarea class="textareabox" placeholder="选填" v-model="rentData[0].remark" :disabled="rentData[0].generated == 20 || rentData[0].generated == 30 || isRentCostInfo"></textarea>
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
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList)"
                                                            :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo"
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
                                                            value-format="yyyy-MM-dd"
                                                            @change="phaseCycle(stageList)"
                                                            @focus="getGenDate(stageList)"
                                                            :picker-options="pickerOptions"
                                                            :disabled="index != listIndex || stageList.generated == 30 || isRentCostInfo"
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
                                                        <el-select filterable clearable v-model="stageList.fixedType" placeholder="请选择" class="dialogselect" @focus="typeFocus(0)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <el-option
                                                                    v-for="item in stageOption"
                                                                    :key="item.value"
                                                                    :label="item.text"
                                                                    :value="item.value">
                                                            </el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0">
                                                    <div class="rentcontent">
                                                        <span class="inputname">固定金额</span>
                                                        <input class="inputtext" type="text" placeholder="请输入金额" v-model="stageList.fixedAmount" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        <span class="rightcompany">元</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 0 || stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div v-show="stageList.fixedType == 2 || stageList.fixedType == 3"></div>
                                                <div style="display: none;">
                                                    <div class="rentcontent">
                                                        <span class="inputname">面积</span>
                                                        <input class="inputtext" type="text" placeholder="请输入面积" v-model="stageList.fixedArea" readonly :disabled="stageList.generated != 10">
                                                        <span class="rightcompany">㎡</span>
                                                    </div>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5">
                                                    <template>
                                                        <el-checkbox v-model="stageList.outsideAreaOrNot" class="stagelineheight" v-show="mainData.propertyType == 0" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">增加外摆面积（{{unitData.swingArea}}㎡）</el-checkbox>
                                                    </template>
                                                </div>
                                                <div v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5"></div>
                                            </div>
                                            <div class="stagelist"  v-show="rentData[0].settleType == 0 || rentData[0].settleType == 2 || rentData[0].settleType == 3">
                                                <div>
                                                    <div class="rentcontent" v-show="stageList.fixedType == 1 || stageList.fixedType == 4 || stageList.fixedType == 5 || stageList.fixedType == 2 || stageList.fixedType == 3">
                                                        <span class="inputname">单价</span>
                                                        <input class="inputtext" type="text" placeholder="请输入单价" v-model="stageList.price" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
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
                                                        <el-select filterable clearable v-model="stageList.percentType" placeholder="请选择" class="dialogselect" @focus="ctypeFocus(1)" @change="ctypeChange(stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
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
                                                        <input class="inputtext" type="text" placeholder="请输入比例" v-model="stageList.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 7 && costTypeData.value == 1 && rentData[0].settleType !='' || stageList.percentType == 8 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">销售额分段（单位/元）</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="flexwidth" v-if="_index == 0">{{percentlist.startAmount}}</div>
                                                    <div class="flexwidth" v-if="_index != 0" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.startAmount" @change="startAmountTwoNum(percentlist)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        </div>
                                                    </div>
                                                    <div class="salelistwidth">至</div>
                                                    <div class="flexwidth" style="flex:1">
                                                        <div class="rentcontent">
                                                            <input class="inputtext lineheight" type="text" placeholder="金额" v-model="percentlist.endAmount" @change="endAmountTwoNum(percentlist)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                        </div>
                                                    </div>
                                                    <div class="saleselect">
                                                        <div class="rentcontent">
                                                            <span class="inputname">抽成比例</span>
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPercentList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text" @click="deletePercentList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 9 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">货品组别</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select filterable clearable v-model="percentlist.goodsTypeId" placeholder="请选择" class="dialogselect" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo" @change="goodsTypeChange(_index,percentlist,stageList)">
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
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addGoodsList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text"  @click="deleteGoodsList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                            <div class="stagesale" v-if="stageList.percentType == 10 && costTypeData.value == 1 && rentData[0].settleType !=''">
                                                <div class="stagesaletitle">支付方式</div>
                                                <div class="stagesalelist" v-for="(percentlist,_index) in stageList.contractPeriodPercentParamList">
                                                    <div class="addlistnumber">{{_index+1}}</div>
                                                    <div class="rentcontent" style="margin-left: 20px;">
                                                        <el-select filterable clearable v-model="percentlist.paymentWay" placeholder="请选择" class="dialogselect" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo" @change="payListChange(_index,percentlist,stageList)">
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
                                                            <input class="inputtext" type="text" placeholder="比例" v-model="percentlist.percent" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">
                                                            <span class="rightcompany">%</span>
                                                        </div>
                                                    </div>
                                                    <div class="salelistadd"><el-button icon="el-icon-plus" @click="addPayList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">追加阶段</el-button></div>
                                                    <div class="salelistdel" v-if="_index != 0"><button class="btn_text"  @click="deletePayList(_index,percentlist,stageList)" :disabled="index != listIndex || stageList.generated != 10 || isRentCostInfo">删除</button></div>
                                                    <div class="salelistdel" v-if="_index == 0"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span v-show="index != listIndex" v-if="isRentCostInfo == false"><button @click="editListData(index)" :disabled="stageList.generated == 30 || isRentCostInfo">修改</button></span>
                                        <span v-show="index == listIndex" v-if="isRentCostInfo == false"><button @click="saveListData(index)" :disabled="stageList.generated == 30 || isRentCostInfo">保存</button></span>
                                        <span v-if="isRentCostInfo == false"><button @click="deleteStageBox(stageList,index)" :disabled="stageList.generated != 10 || isRentCostInfo">删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addStageList()" v-if="isRentCostInfo == false">继续添加</el-button></div>
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
                                    <input class="inputtext" type="number" placeholder=" 请输入应收金额" v-model.trim="bondValue" :disabled="delayChange == 2 || delayChange == 1">
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
                                        <div class="listcolum">
                                            <div class="uploadtitle">文件上传<span>（图片建议尺寸：620像素×877像素，仅支持.jpg .jpeg.png格式图片，大小不超过1M
文档仅支持.word.pdf.txt格式，大小不超过100M）</span></div>
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :disabled="delayChange != 0"
                                                    :action="this.$downLoadUrl+'/rent/contract/uploads'"
                                                    :data="{type: 0,contractId:contractId}"
                                                    :headers="headers"
                                                    :show-file-list="false"
                                                    :before-upload="addFileUploadBefore"
                                                    :on-error="addFileUploadError"
                                                    :on-success="addFileUploadSuccess">
                                                <i class="el-icon-plus avatar-uploader-icon"></i>
                                                <div class="el-upload__text">点击添加附件</div>
                                            </el-upload>
                                        </div>
                                    </div>
                                    <div class="listcont contractcont" style="flex-direction: column" v-if="this.$route.params.contractId != 0 || this.fileListData.length != 0">
                                        <div class="listcolum" v-for="fileList in fileListData">
                                            <div class="uploadtitle">{{fileList.dateDay}}</div>
                                            <div class="uploadlist">
                                                <div class="uploadfile" v-for="(imageList,index) in fileList.attachmentVos">
                                                    <img :src="imageList.fileType == '.PNG'||imageList.fileType == '.JPG'||imageList.fileType == '.JPEG'?imageList.filePath+imageList.fileSaveName:imageList.fileType == '.DOCX'?require('../../../assets/iconword.png'):require('../../../assets/iconqita.png')" alt="">
                                                    <span class="spantopL"></span>
                                                    <span class="spantopLname">{{index+1}}</span>
                                                    <span class="spantopR" @click="delFileList(imageList.id)" v-show="delayChange == 0"><i class="el-icon-close"></i></span>
                                                    <span class="spanbottom" style="display: none">重新上传</span>
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
                                            <router-link :to="'/inner/shopsinfo/'+$route.params.prototypeId+'/'+queryLis.contractId">>查看完整合同</router-link>
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
        <el-dialog
                :visible.sync="dialogVisible"
                :before-close="handleUnitClose"
                custom-class="contractdialog">
            <div class="searchbox">
                <input type="text" :placeholder="'请输入'+stepName+'号'" v-model.trim="searchText" @keyup.enter="getUnitDataList()"><i class="iconfont icon-sousuo"></i>
            </div>
            <div class="dialogbox">
                <div class="floorsearchlist" style="padding-bottom: 0px;">
                    <ul v-if="buildList.length > 0">
                        <li :style="buildType == scBuildId?'color:#457fcf':''" @click="getFloorList(scBuildId,1)" v-if="$route.params.prototypeId == 0 || $route.params.prototypeId == 2 || $route.params.prototypeId == 3">{{scBuildName}}</li>
                        <li :style="buildType == xzlBuildId?'color:#457fcf':''" @click="getFloorList(xzlBuildId,2)" v-if="$route.params.prototypeId == 1 || $route.params.prototypeId == 2 || $route.params.prototypeId == 3">{{xzlBuildName}}</li>
                    </ul>
                </div>
                <div class="floorsearchlist">
                    <ul>
                        <li @click="changeFloorUnit(null)">全部</li>
                        <li v-for="floorlist in floorListData" @click="changeFloorUnit(floorlist.id)">{{floorlist.floorCode}}</li>
                    </ul>
                </div>
                <el-row>
                    <el-col :span="24" v-if="this.tabIndex == 1">
                        <el-checkbox-group
                                v-model="checkedUnit">
                            <el-checkbox v-for="(unitlist,index) in unitDataListShop" :label="unitlist.id" :key="index">{{unitlist.unitCode}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <el-col :span="24" v-if="this.tabIndex == 2">
                        <el-checkbox-group
                                v-model="checkedUnit">
                            <el-checkbox v-for="(unitlist,index) in unitDataListOffice" :label="unitlist.id" :key="index">{{unitlist.unitCode}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleUnitClose()">取 消</el-button>
                <el-button type="primary" @click="handleUnit()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="savebtn" v-show="stepNumber == 31 && backStatus == false">
            <button @click="addRentData(0)" :disabled="flag">提交</button>
        </div>
        <div class="savebtn" v-show="stepNumber == 41 && backStatus == false">
            <button @click="addRentData(1)" :disabled="flag">提交</button>
        </div>
        <div class="savebtn" v-show="backStatus">
            <button @click="rentOrCostBack()">返回</button>
        </div>
        <div class="savebtn" v-show="!isShow && stepNumber != 31 && stepNumber != 41">
            <button @click="submitnNext()" :disabled="flag">保存并下一步</button>
        </div>
        <div class="savebtn" v-show="isShow">
            <button @click="backlist()">保存</button>
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
                loading: false,
                pageNum: Number(this.$route.params.pageId)||1,
                total1: 0,
                total2: 0,
                rentPageSize: 20,
                costPageSize: 20,
                mainData:{
                    cashierMode: '',
                    contractType: '',
                    contractKind:'',
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
                    rentFreeNumber: 0,
                    rentStartDate: '',
                    settleLevel: '',
                    shopId: '',
                    signDate: '',
                    validEndDate: '',
                    validStartDate: '',
                    validCycle:'0个月0天',
                    decorationCycle:'0个月0天',
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
                kindOptions:[],
                rateTypeOptions:[],
                merchantOptions:[],
                shopOptions:[],
                operationOptions:[],
                settleLevelOptions:[],
                cashierModeOptions:[],
                costTypeData:'',
                unitDataList:[],
                unitDataListShop:[],
                unitDataListOffice:[],
                checkedUnit:[],
                searchText:'',
                shopBrand:'',
                rentDataList:[],
                costDataList:[],
                rentcolumnData:[
                    { prop: 'costItem', label: '费用项目', click:'click', param:'id'},
                    { prop: 'time', label: '起止时间' },
                    { prop: 'cycleTotal', label: '结算周期' },
                    { prop: 'settleGroup', label: '结算组别' },
                    { prop: 'lateFee', label: '滞纳金' },
                    { prop: 'rentMoney', label: '条款金额' }
                ],
                stepNumber:0,
                rentData:[{
                    advanceDay: 0,
                    advanceMonth: 0,
                    contractId: '',
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
                            generated:10,
                            percent:'',
                            percentType: '',
                            outsideArea: '',
                            outsideAreaOrNot:false,
                            period: '',
                            periodVersion: 1,
                            percentRentMoney:'',
                            fixedRentMoney:'',
                            price: '',
                            startDate: "",
                            periodCycle:'0个月0天'
                        }
                    ],
                    costItemId: '',
                    costType: '',
                    countType: '',
                    generated:'',
                    id: '',
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
                unitListPush:[],
                chengyi:{
                    receivableAmountVO: 0,
                    receivedAmountVO: 0,
                    restAmountVO: 0
                },
                lvyue:{
                    receivableAmountVO: 0,
                    receivedAmountVO: 0,
                    restAmountVO: 0
                },
                delayChange: '',
                buildTypeShop:'',
                buildTypeOffice:'',
                buildType:'',
                floorListData:[],
                floorId:null,
                intentionContractData:'',
                unitListAry:[],
                imageUrlList:[],
                listIndex:'',
                buttonNum:1,
                flag:false,
                disabled:false,
                isisdisabled:'',
                headers: {
                    token: localStorage.getItem('erp_token')
                },
                infoMerchantId:'',
                infoShopBrand:'',
                backStatus:false,
                isRentCostInfo:false,
                buildList:[],
                tabIndex:1,
                timeDate:'',
                pickerOptions: {
                    disabledDate: (time) => {
                        return time.getTime() < new Date(this.timeDate).getTime();
                    }
                },
                scBuildId:'',
                xzlBuildId:'',
                scBuildName:'',
                xzlBuildName:''
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
                this.getRentDataList(1,this.rentPageSize);
                this.getCostDataList(1,this.costPageSize);
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
                    if(this.buildType == this.scBuildId){
                        this.getUnitDataListShop(this.buildTypeShop);
                    }else{
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }
                },300)
            },
            bondValue(){
                if(this.bondValue == null) this.bondValue = 0;
                if (!this.bondValue) {
                    this.lvyue.receivableAmountVO = 0 - parseFloat(this.chengyi.receivableAmountVO);
                } else {
                    this.lvyue.receivableAmountVO = parseFloat(this.bondValue)-parseFloat(this.chengyi.receivableAmountVO);
                }
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
                await this.$api.rentapi.doweListUsingGET({
                    type:this.$route.params.prototypeId
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            merchantSelect(){
                this.getShopList(this.mainData.merchantId);
            },
            clearBranddata(){
                this.shopOptions = [];
                this.mainData.shopId = null;
                this.shopBrand = '';
                this.mainData.brandId = '';
                this.mainBrandName = '';
                this.intentionContractData = '';
            },
            async getShopList(merchantId){
                let that = this;
                await this.$api.rentapi.getMerchantShopOption({
                    merchantId:merchantId
                }).then(res=>{
                    if (that.shopBrand.value) {
                        res.data.data.push({
                            value: that.shopBrand.value,
                            text: that.shopBrand.text,
                            code: '',
                            child: that.shopBrand.child
                        });
                    }else if(merchantId == that.infoMerchantId){
                        res.data.data.push({
                            value: that.infoShopBrand.value,
                            text: that.infoShopBrand.text,
                            code: '',
                            child: that.infoShopBrand.child
                        });
                    }
                    that.shopOptions = res.data.data;
                    that.shopBrand = {
                        value: that.shopBrand.value,
                        text: that.shopBrand.text,
                        code: '',
                        child: that.shopBrand.child
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
                await this.$api.rentapi.treeUsingGET_1().then(res=>{
                    this.goodsTypeOption = res.data.data;
                })
            },
            async getBaseDataOptions(){
                await this.$api.rentapi.baseDataOptionsUsingGET().then(res=>{
                    this.typeOptions = res.data.data.contract_type;
                    this.kindOptions = res.data.data.contract_kind;
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
                this.mainData.intentionContractId = this.intentionContractData.id;
                this.mainData.merchantId = this.intentionContractData.merchantId;
                this.shopOptions = [];
                this.mainData.shopId = null;
                this.shopBrand = '';
                this.mainData.brandId = null;
                this.mainBrandName = null;
                if(this.mainData.merchantId) {
                    this.merchantSelect();
                }
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
                    if (this.activeName == '7') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
                }
            },
            //根据步骤序号添加合同
            submitnNext(number) {
                switch (this.activeName) {
                    case '1':
                        if(this.$route.params.delayChange == 0) {
                            this.addContract();
                        }else if(this.$route.params.delayChange == 1){
                            this.delaySubjectInfo();
                        }else{
                            this.nextNum();
                        }
                        break;
                    case '2':
                        if(this.$route.params.delayChange != 0){
                            this.nextNum();
                        }else {
                            this.addShopUnit();
                        }
                        break;
                    case '3':
                        if(this.$route.params.delayChange != 0){
                            this.changeRentCostInfo();
                        }else {
                            this.nextNum();
                        }
                        break;
                    case '4':
                        if(this.rentDataList.length == 0 && this.costDataList.length == 0){
                            this.$message.error('租金条款或费用条款不能为空');
                        }else {
                            if(this.$route.params.delayChange != 0){
                                this.changeRentCostInfo();
                            }else {
                                this.nextNum();
                            }
                        }
                        break;
                    case '5':
                        if(this.$route.params.delayChange != 0){
                            this.nextNum();
                        }else {
                            this.addBondData();
                        }
                        break;
                    case '6':
                        this.nextNum();
                        break;
                };
            },
            //添加合同的方法
            async addContract(){
                this.loading = true;
                this.flag = true;
                if(this.$route.params.contractId != 0) {
                    this.mainData.id = this.$route.params.contractId;
                }
                await this.$api.rentapi.addUsingPOST_3({
                    request: this.mainData
                }).then(res => {
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.flag = false;
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
                            this.getContractInfoData();
                        }else{
                            this.getContractBondInfo(res.data.data.contractCode);
                        }
                    } else {
                        this.loading = false;
                        this.flag = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                })
            },
            async addShopUnit(){
                this.loading = true;
                this.flag = true;
                if(this.$route.params.contractId != 0){
                    this.unitData.contractId = this.$route.params.contractId;
                    this.unitData.propertyType = this.$route.params.prototypeId
                    this.unitData.contractCode = this.contractCode;
                }
                this.unitData.unitIds = this.checkedUnit;
                await this.$api.rentapi.updateShopUnitUsingPUT({
                    request:this.unitData
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.flag = false;
                        this.$message.success(res.data.msg);
                        this.getShopUnit();
                        this.nextNum();
                    } else {
                        this.loading = false;
                        this.flag = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                })
                /*else{
                    await this.$api.rentapi.addShopUnitUsingPOST({
                        request:this.unitData
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.flag = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.flag = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                };*/
            },
            async addRentData(typeNum){
                this.rentData[0].type = typeNum;
                this.loading = true;
                this.flag = true;
                if(this.$route.params.delayChange != 0){
                    await this.$api.rentapi.postTermSingleSava({
                        param:this.rentData
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.flag = false;
                            if (typeNum == 0) {
                                this.getRentDataList(1,this.rentPageSize);
                                this.stepNumber = 0;
                                localStorage.setItem('activeName', 3);
                                localStorage.setItem('step', 0);
                            } else {
                                this.getCostDataList(1,this.costPageSize);
                                this.stepNumber = 0;
                                localStorage.setItem('activeName', 4);
                                localStorage.setItem('step', 0);
                            }
                            this.$message.success(res.data.msg);
                        } else {
                            this.loading = false;
                            this.flag = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else {
                    if(this.rentData[0].id == '') {
                        await this.$api.rentapi.addRentOrCostUsingPOST({
                            paramList: this.rentData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.loading = false;
                                this.flag = false;
                                this.$message.success(res.data.msg);
                                if (typeNum == 0) {
                                    this.getRentDataList(1,this.rentPageSize);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 3);
                                    localStorage.setItem('step', 0);
                                } else {
                                    this.getCostDataList(1,this.costPageSize);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 4);
                                    localStorage.setItem('step', 0);
                                }
                            } else {
                                this.loading = false;
                                this.flag = false;
                                this.$message.error(res.data.msg);
                            }
                        }).catch(res=>{
                            this.loading = false;
                        })
                    }else{
                        await this.$api.rentapi.updateRentOrCostUsingPUT({
                            paramList: this.rentData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.loading = false;
                                this.flag = false;
                                this.$message.success(res.data.msg);
                                if (typeNum == 0) {
                                    this.getRentDataList(1,this.rentPageSize);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 3);
                                    localStorage.setItem('step', 0);
                                } else {
                                    this.getCostDataList(1,this.costPageSize);
                                    this.stepNumber = 0;
                                    localStorage.setItem('activeName', 4);
                                    localStorage.setItem('step', 0);
                                }
                            } else {
                                this.loading = false;
                                this.flag = false;
                                this.$message.error(res.data.msg);
                            }
                        }).catch(res=>{
                            this.loading = false;
                        })
                    }
                }
            },
            async addBondData(){
                let bondValue = parseFloat(this.bondValue);
                this.bondValue = this.bondValue + '';
                if (!this.bondValue || this.bondValue.indexOf('e') >= 0) {
                    this.$message.info('请输入数字');
                    return;
                }
                if (bondValue < 0 || bondValue > 999999999) {
                    this.$message.info('请输入大于等于0，小于10位数的正数');
                    return;
                }
                if (this.bondValue.indexOf('.') >=0 && this.bondValue.split('.')[1].length > 2) {
                    this.$message.info('请输入小于三位小位数的正数');
                    return;
                }
                this.loading = true;
                this.flag = true;
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                    await this.$api.rentapi.updateBondInfo({
                        request: {
                            bond: bondValue,
                            contractId: this.contractId,
                            contractCode: this.contractCode,
                        }
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.flag = false;
                            this.$message.success(res.data.msg);
                            this.nextNum()
                        } else {
                            this.loading = false;
                            this.flag = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else {
                    await this.$api.rentapi.addBondUsingPOST({
                        request: {
                            bond: bondValue,
                            contractId: this.contractId,
                            contractCode: this.contractCode,
                        }
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.flag = false;
                            this.$message.success(res.data.msg);
                            this.nextNum()
                        } else {
                            this.loading = false;
                            this.flag = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            addFileUploadBefore(){
                this.loading = true;
            },
            addFileUploadError(){
                this.loading = false;
            },
            addFileUploadSuccess(res) {
                if(res.status == 200) {
                    this.loading = false;
                    this.getContractFileInfo();
                }
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
                                value: res.data.data.shopId,
                                text:res.data.data.shopCode+'('+res.data.data.shopName+')',
                                child:[{
                                    value: res.data.data.brandId,
                                    text:res.data.data.brandName
                                }]
                            };
                            this.infoShopBrand = {
                                value: res.data.data.shopId,
                                text:res.data.data.shopCode+'('+res.data.data.shopName+')',
                                child:[{
                                    value: res.data.data.brandId,
                                    text:res.data.data.brandName
                                }]
                            };
                            this.mainData.shopId = res.data.data.shopId;
                            if(res.data.data.intentionContractId != null && res.data.data.contractCode != null && res.data.data.merchantName != null) {
                                this.intentionOptions.push({
                                    id: res.data.data.intentionContractId,
                                    contractCode: res.data.data.intentionContractCode,
                                    merchantName: res.data.data.intentionContractMerchantName

                                });
                                this.intentionContractData = {
                                    id: res.data.data.intentionContractId
                                };
                            }
                            this.infoMerchantId = res.data.data.merchantId;
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
                                this.unitListAry =  res.data.data.rentUnitList;
                                this.checkedUnit = res.data.data.rentUnitList.map(item => {
                                    return item.id;
                                });
                            }
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    this.getContractBondInfo(this.contractCode);
                    //获取附件
                    this.getContractFileInfo();
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
                }
            },
            async getShopUnit(){
                await this.$api.rentapi.getContractUnitInformationUsingGET({
                    contractCode : this.contractCode
                }).then(res => {
                    if (res.data.status == 200) {
                        if (this.$route.params.prototypeId == 0) {
                            if(res.data.data.rentShop != null) {
                                //this.unitData = res.data.data.rentShop;
                                this.unitData.rentWay = res.data.data.rentShop.rentWay + '';
                                this.unitData.shopId = res.data.data.rentShop.id;
                            }
                        } else {
                            if(res.data.data.rentSite != null) {
                                //this.unitData = res.data.data.rentSite;
                                this.unitData.rentWay = res.data.data.rentSite.rentWay + '';
                                this.unitData.siteId = res.data.data.rentSite.id;
                            }
                        }
                        if(res.data.data.rentUnitList != null) {
                            this.unitListPush = res.data.data.rentUnitList
                            this.unitListAry =  res.data.data.rentUnitList;
                            this.checkedUnit = res.data.data.rentUnitList.map(item => {
                                return item.id;
                            });
                        }
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async getContractBondInfo(contractCode){
                await this.$api.rentapi.getContractBondInfoUsingGET({
                    contractCode : contractCode
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
            },
            async getContractFileInfo(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.fileUsingGET({
                    id: this.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.fileListData = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            //获取单元的弹框列表
            changeFloorUnit(id){
                this.floorId = id;
                if(this.buildType == this.scBuildId){
                    this.getUnitDataListShop(this.buildTypeShop);
                }else{
                    this.getUnitDataListOffice(this.buildTypeOffice);
                }
            },
            async getUnitDataListShop(typeNum){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:'1',
                    pageSize:'200000',
                    code:this.searchText,
                    buildId:this.buildTypeShop,
                    floorId:this.floorId,
                    type:this.$route.params.prototypeId,
                    status:'',
                    states:[1,6]
                }).then(res=>{
                     this.unitDataListShop = res.data.data.list;
                })
            },
            async getUnitDataListOffice(typeNum){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:'1',
                    pageSize:'200000',
                    code:this.searchText,
                    buildId:this.buildTypeOffice,
                    floorId:this.floorId,
                    type:this.$route.params.prototypeId,
                    status:'',
                    states:[1,6]
                }).then(res=>{
                    this.unitDataListOffice = res.data.data.list;
                })
            },
            async getBuildList(){
                await this.$api.rentapi.listUsingGET_4().then(res=>{
                    this.buildList = res.data.data;
                    res.data.data.forEach(item => {
                        if (item.buildName == '商场') {
                            this.scBuildId = item.id;
                            this.scBuildName = item.buildName;
                        }else{
                            this.xzlBuildId = item.id;
                            this.xzlBuildName = item.buildName;
                        }
                    });
                    if (this.$route.params.prototypeId == 0) {
                        this.buildTypeShop = this.scBuildId;
                        this.buildType = this.scBuildId;
                        this.getFloorList(this.buildType,1);
                        this.getUnitDataListShop(this.buildTypeShop);
                    }else if(this.$route.params.prototypeId == 1){
                        this.buildTypeOffice = this.xzlBuildId;
                        this.buildType = this.xzlBuildId;
                        this.getFloorList(this.buildType,2);
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }else{
                        this.buildTypeShop = this.scBuildId;
                        this.buildTypeOffice = this.xzlBuildId;
                        this.buildType = this.scBuildId;
                        this.getFloorList(this.buildType,1);
                        this.getUnitDataListShop(this.buildTypeShop);
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }
                })
            },
            addItem(){
                this.dialogVisible = true;
                this.getBuildList();
            },
            handleUnitClose(){
                this.dialogVisible = false;
                this.checkedUnit = this.unitListPush.map(item=>{
                    if(item.unitId) {
                        return item.unitId;
                    }else{
                        return item.id;
                    }
                });
            },
            handleUnit(){
                this.dialogVisible = false;
                this.unitData.unitIds = this.checkedUnit;
                this.unitListPush = [];
                this.unitListPush = [...this.unitListPush,...this.unitListAry];
                this.unitDataList = [...this.unitDataListShop,...this.unitDataListOffice];
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
                if(this.unitData.rentWay == '0'){
                    this.unitData.rentArea = this.unitData.area;
                }else if(this.unitData.rentWay == '1'){
                    this.unitData.rentArea = this.unitData.useArea;
                }
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
            async getFloorList(typeNum,tabNum){
                this.floorId = null;
                this.buildType = typeNum;
                await this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId : typeNum
                }).then(res => {
                    if (res.data.status == 200) {
                        this.floorListData = res.data.data;
                        this.tabIndex = tabNum;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            //删除单元列表
            async deleteUnitList(unitItem,id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.contractUpdateStatusToEmpety({
                        id : id,
                        contractCode:this.contractCode
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                    let index = this.unitListPush.indexOf(unitItem)
                    if (index !== -1) {
                        this.unitListPush.splice(index, 1)
                    };
                    if(this.unitListPush.length == 0){
                        this.unitData.area = 0;
                        this.unitData.useArea = 0;
                        this.unitData.rentArea = 0;
                        this.unitData.rentWay = '';
                        this.unitData.unitIds = [];
                    }
                    let _index = this.checkedUnit.indexOf(unitItem.id)
                    if (_index !== -1) {
                        this.checkedUnit.splice(_index, 1)
                    };
                    this.unitData.area = this.unitListPush.reduce(function(prev, cur){
                        return prev + cur.area;
                    },0);
                    this.unitData.useArea = this.unitListPush.reduce(function(prev, cur){
                        return prev + cur.useArea;
                    },0);
                    if(this.unitData.rentWay == '0'){
                        this.unitData.rentArea = this.unitData.area;
                    }else if(this.unitData.rentWay == '1'){
                        this.unitData.rentArea = this.unitData.useArea;
                    }
                })
            },
            //切换到添加
            addClickRentInfo(stepNum){
                this.stepNumber = stepNum;
                localStorage.setItem('step',stepNum);
                let contractId = this.rentData[0].contractId;
                this.rentData = [{
                    advanceDay: 0,
                    advanceMonth: 0,
                    contractId: '',
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
                            generated:10,
                            percent:'',
                            percentType: '',
                            outsideArea: '',
                            outsideAreaOrNot:false,
                            period: '',
                            periodVersion: 1,
                            rentMoney:'',
                            price: '',
                            startDate: "",
                            periodCycle:'0个月0天'
                        }
                    ],
                    costItemId: '',
                    costType: '',
                    countType: '',
                    id: '',
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
                this.costItemDataList = [];
                this.settleOptions = [];
                this.settleGroupname = '';
                if (contractId) this.rentData[0].contractId = contractId;
                this.costTypeData = {value: ''};
                this.costItemData = {id: ''};
                this.rentData[0].contractRentTermsPeriodParamList[0].fixedArea = this.unitData.rentArea;
                this.rentData[0].contractRentTermsPeriodParamList[0].outsideArea = this.unitData.swingArea;
                this.listIndex =this.rentData[0].contractRentTermsPeriodParamList.length-1;
            },
            //获取租金和费用的列表
            async getRentDataList(pageNum,pageSize){
                this.rentPageSize = pageSize;
                if(this.$route.params.contractId != 0){
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.getRentListUsingGET({
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
                await this.$api.rentapi.getRentListUsingGET({
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
            async getRentInfo(scopeRowData,id,stepNum){
                if(scopeRowData.generated != 30) {
                    this.stepNumber = stepNum;
                    localStorage.setItem('step', stepNum);
                    await this.$api.rentapi.getContractFormalRentTermsUsingGET({
                        contractFormalRentTermsId: id
                    }).then(res => {
                        this.rentData = [res.data.data];
                        this.costTypeData = {value: res.data.data.costType};
                        this.costItemData = {id: res.data.data.costItemId};
                        this.rentData[0].settleGroupId = res.data.data.settleGroupId;
                        this.settleGroupname = res.data.data.settleGroupName;
                        this.updateCostTypeSelect();
                        this.rentData[0].settleType = res.data.data.settleType;
                        this.typeFocus(0)
                        this.ctypeFocus(0)
                        this.typeFocus(1)
                        this.ctypeFocus(1)
                    });
                    this.listIndex = this.rentData[0].contractRentTermsPeriodParamList.length - 1;
                }else{
                    this.$message.error('条款已全部生成，不能被编辑');
                }
            },
            async rentChildData(data){
                if(this.activeName == 3){
                    this.stepNumber = 31;
                    localStorage.setItem('step', 31);
                }else {
                    this.stepNumber = 41;
                    localStorage.setItem('step', 41);
                }
                this.isRentCostInfo = true;
                this.backStatus = true;
                await this.$api.rentapi.getContractFormalRentTermsUsingGET({
                    contractFormalRentTermsId : data
                }).then(res => {
                    this.rentData = [res.data.data];
                    this.costTypeData = {value:res.data.data.costType};
                    this.costItemData = {id:res.data.data.costItemId};
                    this.rentData[0].settleGroupId = res.data.data.settleGroupId;
                    this.settleGroupname = res.data.data.settleGroupName;
                    this.updateCostTypeSelect();
                    this.rentData[0].settleType = res.data.data.settleType;
                    this.typeFocus(0)
                    this.ctypeFocus(0)
                    this.typeFocus(1)
                    this.ctypeFocus(1)
                })
            },
            rentOrCostBack(){
                this.isRentCostInfo = false;
                this.backStatus = false;
                this.stepNumber = 0;
                localStorage.setItem('step', 0);
            },
            //删除租金和费用
            async deleteDataList(delayChangeData,id){
                if(this.$route.params.delayChange != 0) {
                    if(delayChangeData.generated == 10) {
                        this.$confirm('是否删除该条数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$api.rentapi.termDelListData({
                                id: id
                            }).then(res => {
                                if (res.data.status == 200) {
                                    if (this.activeName == 3) {
                                        this.getRentDataList(1, this.rentPageSize);
                                    } else {
                                        this.getCostDataList(1, this.costPageSize);
                                    }
                                    this.$message.success(res.data.msg);
                                } else {
                                    this.$message.error(res.data.msg);
                                }
                            });
                        });
                    }else{
                        this.$message.error('条款已生成，不能被删除');
                    }
                }else {
                    this.$confirm('是否删除该条数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$api.rentapi.delRentOrCostUsingPUT({
                            rentTermsId: id
                        }).then(res => {
                            if (res.data.status == 200) {
                                if (this.activeName == 3) {
                                    this.getRentDataList(1,this.rentPageSize);
                                } else {
                                    this.getCostDataList(1,this.costPageSize);
                                }
                                this.$message.success(res.data.msg);
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        });
                    })
                }
            },
            //点击序号切换显示
            handleClick(tab, event) {
                localStorage.setItem('activeName', this.activeName);
                localStorage.setItem('step',0);
                this.stepNumber = 0;
                this.isRentCostInfo = false;
                this.backStatus = false;
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
                if(this.activeName == '3' && this.$route.params.delayChange != 0){
                    this.getRentDataList(1,this.rentPageSize);
                }
                if(this.activeName == '4' && this.$route.params.delayChange != 0){
                    this.getCostDataList(1,this.costPageSize);
                }
            },
            //根据费用类型获取费用项目和显示不同的结算方式
            async costTypeSelect(){
                this.rentData[0].settleType = '';
                this.costItemData = '';
                this.settleGroupname = '';
                this.rentData[0].costItemId = null;
                this.rentData[0].settleGroupId = null;
                this.rentData[0].contractRentTermsPeriodParamList.forEach(item=>{
                    item.fixedType = '';
                });
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
                    fixedArea: this.unitData.rentArea,
                    generated:10,
                    percentType: '',
                    outsideArea: this.unitData.swingArea,
                    outsideAreaOrNot:false,
                    period: '',
                    periodVersion: '',
                    price: '',
                    startDate: "",
                    periodCycle:'0个月0天'
                });
                this.listIndex = this.rentData[0].contractRentTermsPeriodParamList.length-1;
            },
            deleteStageBox(stageItem,_index){
                this.listIndex = _index-1;
                if(_index == this.rentData[0].contractRentTermsPeriodParamList.length-1){
                    let index = this.rentData[0].contractRentTermsPeriodParamList.indexOf(stageItem)
                    if (index !== -1) {
                        this.rentData[0].contractRentTermsPeriodParamList.splice(index, 1)
                    }
                }else{
                    this.$message.error('此阶段不能删除，请先删除最后一个阶段');
                }
            },
            //添加销售额分段
            startAmountTwoNum(_percentlist){
                if(_percentlist.startAmount != ''){
                    _percentlist.startAmount = parseFloat(_percentlist.startAmount).toFixed(2);
                }
            },
            endAmountTwoNum(_percentlist){
                if(_percentlist.endAmount != ''){
                    _percentlist.endAmount = parseFloat(_percentlist.endAmount).toFixed(2);
                }
            },
            addPercentList(_index,_percentlist,_stageList){
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.startAmount === '' || item.endAmount === '' || item.percent === '' ) {
                      this.$message.error('金额和比例不能为空');
                      return;
                    }
                }
                if(Number(_percentlist.endAmount) <= Number(_percentlist.startAmount)){
                    this.$message.error('结束金额不能小于开始金额');
                    return;
                };
                _stageList.contractPeriodPercentParamList.splice(_index + 1, 0, {
                    endAmount: '',
                    goodsTypeId: '',
                    paymentWay: '',
                    percent: '',
                    percentVersion: '',
                    startAmount: ''
                });
            },
            addGoodsList(_index,_percentlist,_stageList){
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.goodsTypeId === '' || item.percent === '' ) {
                        this.$message.error('货品组别和比例不能为空');
                        return;
                    }
                    if(i != 0) {
                        if (_percentlist.goodsTypeId == _stageList.contractPeriodPercentParamList[i - 1].goodsTypeId) {
                            this.$message.error('货品组别不能重复');
                            return;
                        }
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
            addPayList(_index,_percentlist,_stageList){
                for(let i = 0; i < _stageList.contractPeriodPercentParamList.length; i++) {
                    let item = _stageList.contractPeriodPercentParamList[i];
                    if(item.paymentWay === '' || item.percent === '' ) {
                        this.$message.error('阶段不能为空');
                        return;
                    }
                    if(i != 0) {
                        if (_percentlist.paymentWay == _stageList.contractPeriodPercentParamList[i - 1].paymentWay) {
                            this.$message.error('支付方式不能重复');
                            return;
                        }
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
            goodsTypeChange(_index,_percentlist,_stageList){
                _stageList.contractPeriodPercentParamList.map((item,index)=> {
                    if (_index != index){
                        if (item.goodsTypeId == _percentlist.goodsTypeId) {
                            this.$message.error('货品组别不能重复');
                            _percentlist.goodsTypeId = '';
                        }
                    }
                })
            },
            payListChange(_index,_percentlist,_stageList){
                _stageList.contractPeriodPercentParamList.map((item,index)=> {
                    if (_index != index){
                        if (item.paymentWay == _percentlist.paymentWay) {
                            this.$message.error('支付方式不能重复');
                            _percentlist.paymentWay = '';
                        }
                    }
                })
            },
            //删除销售额分段
            deletePercentList(_index,_percentlist,_stageList) {
                _stageList.contractPeriodPercentParamList.splice(_index, 1);
            },
            deleteGoodsList(_index,_percentlist,_stageList) {
                _stageList.contractPeriodPercentParamList.splice(_index, 1);
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
                this.mainData.validCycle = this.$dateNumber(this.mainData.validStartDate,this.mainData.validEndDate)
            },
            cycleChange(){
                this.mainData.decorationCycle = this.$dateNumber(this.mainData.decorationStartDate,this.mainData.decorationEndDate)
            },
            phaseCycle(stageList){
                stageList.periodCycle = this.$dateNumber(stageList.startDate,stageList.endDate)
                this.rentData[0].contractRentTermsPeriodParamList
            },
            getGenDate(stageList){
                this.timeDate = stageList.genDate;
            },
            //合同变更和延期
            async delaySubjectInfo(){   //合同主体
                this.loading = true;
                await this.$api.rentapi.changeSubjectUsingPOST({
                    param : this.mainData
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.$message.success(res.data.msg);
                        this.nextNum();
                        this.getRentDataList(1,this.rentPageSize);
                        this.getCostDataList(1,this.costPageSize);
                    } else {
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                })
            },
            async changeRentCostInfo(){   //合同租金费用
                this.loading = true;
                await this.$api.rentapi.changTermsUsingPOST({
                    contractId : this.$route.params.contractId
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.$message.success(res.data.msg);
                        this.nextNum();
                        this.$router.push('/inner/addshops/'+res.data.data+'/'+this.$route.params.prototypeId+'/'+this.$route.params.delayChange)
                        this.contractId = res.data.data?res.data.data:this.$route.params.contractId;
                        this.getRentDataList(1,this.rentPageSize);
                        this.getCostDataList(1,this.costPageSize);
                    } else {
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.$message.error(res.Error);
                });
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
            changeCountType(){
                if(this.rentData[0].countType == 0){
                    this.rentData[0].lateFee=''
                }else{
                    this.rentData[0].lateFeeRate=''
                }
            },
            editListData(_index){
                if(_index != this.listIndex) {
                    this.listIndex = _index;
                    this.buttonNum = 2;
                }
            },
            saveListData(){
                this.listIndex =this.rentData[0].contractRentTermsPeriodParamList.length-1;
                this.buttonNum = 1;
            },
            rateNumber(){
                this.mainData.rate = 0;
            },
            async delFileList(id){
                if(this.$route.params.delayChange == 0) {
                    this.$confirm('是否删除该条数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$api.rentapi.deleteContractImg({
                            id: id
                        }).then(res => {
                            if (res.data.status === 200) {
                                this.getContractFileInfo();
                                this.$message.success(res.data.msg);
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    });
                };
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