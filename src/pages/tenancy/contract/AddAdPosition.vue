<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同号</span>
                                    <input class="inputtext" type="text" placeholder="请输入合同号">
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">版本号：1</div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">意向合同</span>
                                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="dialoginput dialogtext">
                                    <div class="inputname">税率</div>
                                    <input class="middleinput" type="text" placeholder="0">
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
                                    <textarea class="textareabox" placeholder="选填"></textarea>
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
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">店铺</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">品牌</span>
                                    <span class="dialogtext">only、jack jones</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">经营方式</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">结算等级</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">收银模式</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">免租期</span>
                                    <input class="inputtext" type="text" placeholder="请输入免租期">
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
                                            v-model="datevalue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填">
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
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="选填">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">开业日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="onedatevalue"
                                            type="date"
                                            placeholder="选填">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">装修周期</span>
                                    <el-date-picker
                                            style="height: 32px;"
                                            class="inputtext"
                                            v-model="datevalue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填">
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
                                            v-model="onedatevalue"
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
                                            v-model="onedatevalue"
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
                                    <textarea class="textareabox" placeholder="选填"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="2 意向单元" name="2">
                    <blank-head title="租赁单元"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <!--<el-col :span:="24">
                                <div></div>
                            </el-col>-->
                            <el-col :span="24">
                                <div class="listbox contracthead" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum contractlist">
                                            <span>店铺</span>
                                            <p>only/Jack&Jones</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                建筑面积
                                                <template>
                                                    <el-radio v-model="radio" label="rent1">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>117.98㎡</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="radio" label="rent2">计租</el-radio>
                                                </template>
                                            </span>
                                            <p>117.98㎡</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>计租面积</span>
                                            <p>117.98㎡</p>
                                        </div>
                                        <div class="deletebtn"></div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(lists,index) in list">
                                        <div class="listcolum contractlist">
                                            <span>单元号</span>
                                            <p>{{lists.name}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>建筑面积</span>
                                            <p>{{lists.number}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>使用面积</span>
                                            <p>{{lists.number}}</p>
                                        </div>
                                        <div class="listcolum contractlist">
                                            <span>楼层</span>
                                            <p>{{lists.name}}</p>
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
                    <blank-head title="外摆面积"></blank-head>
                    <div class="commonbox">
                        <el-row>
                            <el-col :span="10" class="dialogbox">
                                <div class="dialoginput">
                                    <span class="inputname">外摆面积</span>
                                    <input class="inputtext" type="text" placeholder="选填">
                                    <span class="dialogtext">㎡</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" name="3">
                    <blank-head title="合同租金条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="datalist" :colConfigs="columnData" @tableclickemit="rentChildData">
                                    <el-table-column
                                            label="操作"
                                            width="110"
                                            slot="operation">
                                        <template slot-scope="scope">
                                            <button class="btn_text">编辑</button>
                                            <button class="btn_text">删除</button>
                                        </template>
                                    </el-table-column>
                                </data-table>

                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==31">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="datevalue" class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.value"
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
                                        <input class="inputtext inputtextNarrow" type="text" value="1">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" value="1">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例">
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
                                    <textarea class="textareabox" placeholder="选填"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24" class="renttitle">
                                <span class="h3">■ 条款阶段划分</span>
                            </el-col>
                            <el-col :span="24">
                                <div class="stagebox">
                                    <div class="stageboxtitle">1阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="onedatevalue"
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
                                                            v-model="onedatevalue"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in options"
                                                                :key="item.value"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定金额</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button>删除</button></span>
                                    </div>
                                </div>
                                <div class="stagebox">
                                    <div class="stageboxtitle">2阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="onedatevalue"
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
                                                            v-model="onedatevalue"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in options"
                                                                :key="item.value"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">面积</span>
                                                    <input class="inputtext" type="text" placeholder="请输入面积">
                                                    <span class="rightcompany">㎡</span>
                                                </div>
                                            </div>
                                            <div>
                                                <template>
                                                    <el-radio v-model="radio" label="rent1"  class="stagelineheight">增加外摆面积（45m2）</el-radio>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">单价</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button>删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" name="4">
                    <blank-head title="合同费用条款"></blank-head>
                    <div class="commonbox" v-show="stepNumber==0">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <data-table :tableData="datalist" :colConfigs="columnData" @tableclickemit="childData">
                                    <el-table-column
                                            label="操作"
                                            width="110"
                                            slot="operation">
                                        <template slot-scope="scope">
                                            <button class="btn_text">编辑</button>
                                            <button class="btn_text">删除</button>
                                        </template>
                                    </el-table-column>
                                </data-table>

                            </el-col>
                        </el-row>
                    </div>
                    <div class="commonbox" v-show="stepNumber==41">
                        <el-row class="dialogbox">
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">费用类型</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">费用项目</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">结算组别</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">结算方式</span>
                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <el-col :span="16">
                                    <div class="rentcontent">
                                        <span class="inputname">结算周期</span>
                                        <input class="inputtext" type="text" placeholder="周期数">
                                    </div>
                                </el-col>
                                <el-col :span="6" :offset="2">
                                    <div class="rentcontent">
                                        <el-select v-model="datevalue" class="dialogselect">
                                            <el-option
                                                    v-for="item in dateoption"
                                                    :key="item.value"
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
                                        <input class="inputtext inputtextNarrow" type="text" value="1">
                                        <span class="rightcompany">月</span>
                                    </div>
                                </el-col>
                                <el-col :span="13" :offset="1">
                                    <div class="rentcontent">
                                        <span class="inputname inputnameNarrow">第</span>
                                        <input class="inputtext inputtextNarrow" type="text" value="1">
                                        <span class="rightcompany">日后结算</span>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col :span="6">
                                <div class="rentcontent">
                                    <span class="inputname inputnameWidth">滞纳金起算日</span>
                                    <input class="inputtext" type="text" placeholder="请输入起算日">
                                    <span class="rightcompany">日</span>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname">计算方式</span>
                                    <el-select v-model="value" placeholder="选填" class="dialogselect">
                                        <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="6" :offset="3">
                                <div class="rentcontent">
                                    <span class="inputname inputnameCenter">滞纳金比例</span>
                                    <input class="inputtext" type="text" placeholder="请输入比例">
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
                                    <textarea class="textareabox" placeholder="选填"></textarea>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
                            <el-col :span="24" class="renttitle">
                                <span class="h3">■ 条款阶段划分</span>
                            </el-col>
                            <el-col :span="24">
                                <div class="stagebox">
                                    <div class="stageboxtitle">1阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="onedatevalue"
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
                                                            v-model="onedatevalue"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in options"
                                                                :key="item.value"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定金额</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">抽成类型</span>
                                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in options"
                                                                :key="item.value"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div class="stagesale">
                                            <div class="stagesaletitle">销售额分段（单位/元）</div>
                                            <div class="stagesalelist">
                                                <div class="addlistnumber">1</div>
                                                <div class="flexwidth">0</div>
                                                <div class="salelistwidth">至</div>
                                                <div class="flexwidth">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" value="5000.00">
                                                    </div>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addItem">追加阶段</el-button></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                            <div class="stagesalelist">
                                                <div class="addlistnumber">1</div>
                                                <div class="flexwidth">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" value="5000.00">
                                                    </div>
                                                </div>
                                                <div class="salelistwidth">至</div>
                                                <div class="flexwidth">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" value="10000.00">
                                                    </div>
                                                </div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"><el-button icon="el-icon-plus" @click="addItem">追加阶段</el-button></div>
                                                <div class="salelistdel"><button class="btn_text">删除</button></div>
                                            </div>
                                            <div class="stagesalelist">
                                                <div class="addlistnumber">1</div>
                                                <div class="flexwidth">
                                                    <div class="rentcontent">
                                                        <input class="inputtext lineheight" type="text" placeholder="金额" value="10000.00">
                                                    </div>
                                                </div>
                                                <div class="salelistwidth">至</div>
                                                <div class="flexwidth">以上</div>
                                                <div class="saleselect">
                                                    <div class="rentcontent">
                                                        <span class="inputname">抽成比例</span>
                                                        <input class="inputtext" type="text" placeholder="比例">
                                                        <span class="rightcompany">%</span>
                                                    </div>
                                                </div>
                                                <div class="salelistadd"></div>
                                                <div class="salelistdel"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button>删除</button></span>
                                    </div>
                                </div>
                                <div class="stagebox">
                                    <div class="stageboxtitle">2阶</div>
                                    <div class="stagecontent">
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">起始日期</span>
                                                    <el-date-picker
                                                            class="inputtext"
                                                            v-model="onedatevalue"
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
                                                            v-model="onedatevalue"
                                                            type="date"
                                                            placeholder="请选择">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="stagelineheight">阶段周期：12个月1天</div>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">固定类型</span>
                                                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                                        <el-option
                                                                v-for="item in options"
                                                                :key="item.value"
                                                                :value="item.value">
                                                        </el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">面积</span>
                                                    <input class="inputtext" type="text" placeholder="请输入面积">
                                                    <span class="rightcompany">㎡</span>
                                                </div>
                                            </div>
                                            <div>
                                                <template>
                                                    <el-radio v-model="radio" label="rent1"  class="stagelineheight">增加外摆面积（45m2）</el-radio>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="stagelist">
                                            <div>
                                                <div class="rentcontent">
                                                    <span class="inputname">单价</span>
                                                    <input class="inputtext" type="text" placeholder="请输入比例">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stageaction">
                                        <span><button>修改</button></span>
                                        <span><button>删除</button></span>
                                    </div>
                                </div>
                                <div class="rentbutton stagebutton"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
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
 请输入应收金额">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <blank-head title="履约保证金"></blank-head>
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
                    </div>
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
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload">
                                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                    <div class="el-upload__text">点击添加图片</div>
                                                </el-upload>
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
                <el-tab-pane label="7 历史版本" name="7">
                    <blank-head title="合同历史版本"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont listhistory" v-for="(lists,index) in list">
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
        <div class="savebtn" v-show="!isShow">
            <button @click="next()">保存并下一步</button>
        </div>
        <div class="savebtn" v-show="isShow">
            <button>保存</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "contract1",
        data() {
            return {
                activeName2: '1',
                isShow: false,
                datevalue:'月',
                dateoption:[{
                    value: '年'
                }, {
                    value: '月'
                }, {
                    value: '日'
                }],
                onedatevalue:'',
                radio: '',
                list:[{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                },{
                    name:'B1-40B',
                    number:'117.98㎡',
                }],
                columnData:[
                    { prop: 'costItem', label: '费用项目', click:'1'},
                    { prop: 'startDate', label: '起止时间' },
                    { prop: 'cycleTotal', label: '结算周期' },
                    { prop: 'settleGroup', label: '结算组别' },
                    { prop: 'lateFee', label: '滞纳金' },
                    { prop: 'rentMoney', label: '条款金额' }
                ],
                datalist:[],
                stepNumber:0,
                datevalue:'月'
            };
        },
        mounted(){
            this.getbuilding();
            setTimeout(()=>{
                this.stepNumber = localStorage.getItem('step')
                this.activeName2 = localStorage.getItem('activeName2')
            },0);
        },
        methods: {
            next(number) {
                this.activeName2 = parseInt(this.activeName2) + 1 + '';
                localStorage.setItem('activeName2', this.activeName2);
                localStorage.setItem('step',0);
                this.stepNumber = 0;
                console.log(this.activeName2)
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            handleClick() {
                localStorage.setItem('activeName2', this.activeName2);
                localStorage.setItem('step',0);
                this.stepNumber = 0;
                if (this.activeName2 == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            async getbuilding(){
                let list = await this.$api.getBuiding();
                this.datalist = list;
            },
            rentChildData(data){
                console.log(data);
                this.stepNumber = 31;
                localStorage.setItem('step',31);
            },
            childData(data){
                console.log(data);
                this.stepNumber = 41;
                localStorage.setItem('step',41);
            }
        },
        components: {
            BlankHead,
            DataTable
        }
    }
</script>

<style scoped>

</style>
