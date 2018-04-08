<template>
    <div class="savebox">
        <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select v-model="mainData.contractType" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in typeOptions"
                                                :key="item.id"
                                                :label="item.typeName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="dialogbox">
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
                                    <input class="middleinput" type="text" placeholder="0"  v-model="mainData.rate">
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
                                <div class="dialoginput">
                                    <span class="inputname">品牌</span>
                                    <el-select v-model="mainData.brandId" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in brandOptions"
                                                :key="item.id"
                                                :label="item.brandName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">经营方式</span>
                                    <el-select v-model="mainData.operationMode" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in operationOptions"
                                                :key="item.id"
                                                :label="item.operationName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">物业性质</span>
                                    <el-select v-model="mainData.propertyType" placeholder="请选择" class="dialogselect">
                                        <el-option
                                                v-for="item in propertyOptions"
                                                :key="item.id"
                                                :label="item.propertyName"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
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
                                    <!--<el-date-picker
                                            class="inputtext"
                                            v-model="dateValue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填"
                                            @change="dateValueSelect()">
                                    </el-date-picker>-->
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
                        <el-row class="dialogbox">
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
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">装修周期</span>
                                    <!--<el-date-picker
                                            style="height: 32px;"
                                            class="inputtext"
                                            v-model="mainData.datevalue"
                                            type="daterange"
                                            range-separator="~"
                                            start-placeholder="选填"
                                            end-placeholder="选填">
                                    </el-date-picker>-->
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
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">失效日期</span>
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.invalidDate"
                                            type="date"
                                            placeholder="请输入起租日期">
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
                <el-tab-pane label="2 意向单元" name="2">
                    <blank-head title="租赁单元"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont" v-for="(UnitItem,index) in checkedUnitList">
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
                                            <button class="btn_text" @click="delUnitItem(UnitItem.unitId,UnitItem)">删除</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加单元</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" name="3">
                    <blank-head title="合同租金条款"></blank-head>
                    <div class="commonbox">
                            <el-row class="dialogbox">
                                <el-col :span="24">
                                    <div class="listbox" style="margin: 0;">
                                        <div class="listcont" v-for="(rentlists,index) in rentList">
                                            <div class="">
                                                <p>第一阶段</p>
                                            </div>
                                            <div class="listcolum columbox">
                                                <el-date-picker
                                                        class="inputtext"
                                                        v-model="rentlists.periodStartDate"
                                                        type="date"
                                                        placeholder="开始日期">
                                                </el-date-picker>
                                                ~
                                                <el-date-picker
                                                        class="inputtext"
                                                        v-model="rentlists.periodEndDate"
                                                        type="date"
                                                        placeholder="结束日期">
                                                </el-date-picker>
                                            </div>
                                            <div class="listcolum columbox">
                                                <div class="columboxinput">
                                                    <span class="inputname">保底租金</span>
                                                    <input class="inputtext" type="text" placeholder="请输入保底租金" v-model="rentlists.endRent">
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div class="listcolum columbox">
                                                <div class="columboxinput">
                                                    <span class="inputname">抽成比例</span>
                                                    <input class="inputtext" type="text" placeholder="请输入抽成比例" v-model="rentlists.drawRate">
                                                    <span class="rightcompany">%</span>
                                                </div>
                                            </div>
                                            <div class="deletebtn">
                                                <button class="btn_text" @click="delRentItem(rentlists.id,rentlists)">删除</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="listcont"><el-button icon="el-icon-plus" @click="addRentItem">继续添加</el-button></div>
                                </el-col>
                            </el-row>
                        </div>
                </el-tab-pane>
                <el-tab-pane label="4 费用条款" name="4">
                    <blank-head title="合同费用条款"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">物业管理费</span>
                                    <input class="inputtext" type="text" placeholder="请输入物业管理费" v-model="costData.propertyManageFee">
                                    <span class="rightcompany">元</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">推广费</span>
                                    <input class="inputtext" type="text" placeholder="请输入推广费" v-model="costData.promotFee">
                                    <span class="rightcompany">元</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">库房费</span>
                                    <input class="inputtext" type="text" placeholder="请输入库房费" v-model="costData.houseFee">
                                    <span class="rightcompany">元</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="5 诚意金" name="5">
                    <blank-head title="诚意金"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname">诚意金</span>
                                    <input class="inputtext" type="text" placeholder="
 请输入诚意金金额" v-model="sincerityMoneyData.sincerityMoney">
                                    <span class="rightcompany">元</span>
                                </div>
                            </el-col>
                        </el-row>
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
                                                        :show-file-list="false">
                                                    <i class="el-icon-plus avatar-uploader-icon"></i>
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
                <el-button @click="cancelUnit()">取 消</el-button>
                <el-button type="primary" @click="handleUnit()">确 定</el-button>
            </span>
        </el-dialog>
        <div class="savebtn" v-show="!isShow">
            <button @click="submitnNext()">保存并下一步</button>
        </div>
        <div class="savebtn" v-show="isShow">
            <button>保存</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'

    export default {
        name: "contract1",
        data() {
            return {
                activeName: '0',
                dialogVisible:false,
                isShow: false,
                searchText:'',
                mainData:{
                    brandId: "",
                    contractCode: "",
                    contractType: "",
                    decorationEndDate: "",
                    decorationStartDate: "",
                    description: "",
                    houseFee: 0,
                    id: null,
                    invalidDate: "",
                    merchantId: "",
                    openingDate: "",
                    operationMode: "",
                    pavingDate: "",
                    promotFee: 0,
                    propertyManageFee: 0,
                    propertyType: "",
                    rate: 0,
                    rateType: "",
                    remark: "",
                    signDate: "",
                    sincerityMoney: 0,
                    validEndDate: "",
                    validStartDate: "",
                    version: ""
                },
                typeOptions:[{
                    typeName:'比高',
                    id:0
                },{
                    typeName:'抽成',
                    id:1
                },{
                    typeName:'固定',
                    id:2
                }],
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
                brandOptions:[],
                operationOptions:[{
                    operationName:'自营',
                    id:0
                },{
                    operationName:'代销',
                    id:1
                },{
                    operationName:'专柜',
                    id:2
                },{
                    operationName:'租赁',
                    id:3
                },{
                    operationName:'联营',
                    id:4
                }],
                propertyOptions:[{
                    propertyName:'商铺',
                    id:0
                },{
                    propertyName:'写字楼',
                    id:1
                },{
                    propertyName:'场地',
                    id:2
                },{
                    propertyName:'广告位',
                    id:3
                }],
                unitDataList:[],
                checkedUnit:[],
                checkedUnitList:[],
                unitData:{
                    contractId: 0,
                    propertyType: 0,
                    siteId: 0,
                    unitIds: []
                },
                rentList:[],
                rentData:{
                    contractId:0,
                    drawRate: 0,
                    endRent: 0,
                    id: 0,
                    period: 0,
                    periodEndDate: "",
                    periodStartDate: ""
                },
                costData:{
                    propertyManageFee:'',
                    promotFee:'',
                    houseFee:'',
                    sincerityMoney:'',
                    id:0
                },
                sincerityMoneyData:{
                    propertyManageFee:'',
                    promotFee:'',
                    houseFee:'',
                    sincerityMoney:'',
                    id:0
                },
                contractId:''
            };
        },
        created(){
            setTimeout(()=>{
                this.activeName = localStorage.getItem('activeName')
            },0);
        },
        mounted(){
            this.getMerchantList();
            this.getBrandList();
            this.getOperationList();
            this.getpPropertyList();
            this.getContractInfo();
            this.getUnitInfo();
            this.getRentTermsInfo();
            this.getCostInfo();
            this.getBondInfo();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getUnitDataList();
                },300)
            }
        },
        methods: {
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_11({
                    status:1
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async getBrandList(){
                await this.$api.rentapi.listUsingGET_3().then(res=>{
                    this.brandOptions = res.data.data;
                })
            },
            async getOperationList(){
                await this.$api.rentapi.getListForPageUsingGET_1({
                    propertyType:this.$route.params.prototypeId
                }).then(res=>{
                    this.intentionOptions = res.data.data.list;
                })
            },
            async getpPropertyList(){
                await this.$api.rentapi.getListForPageUsingGET_1({
                    propertyType:this.$route.params.prototypeId
                }).then(res=>{
                    this.intentionOptions = res.data.data.list;
                })
            },
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
            nextNum(){
                this.activeName = parseInt(this.activeName) + 1 + '';
                localStorage.setItem('activeName', this.activeName);
                if (this.activeName == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            handleClick() {
                localStorage.setItem('activeName', this.activeName);
                if (this.activeName == '6') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            submitnNext() {
                switch (this.activeName) {
                    case '1':
                        this.addContract();
                        break;
                    case '2':
                        this.addShopUnit();
                        break;
                    case '3':
                        this.addRentData();
                        break;
                    case '4':
                        this.addCostData();
                        break;
                    case '5':
                        this.addBondData();
                        break;
                    case '6':
                        this.addFileData();
                        break;
                };
            },
            addItem(){
                this.dialogVisible = true;
                this.getUnitDataList();
            },
            cancelUnit(){
                this.dialogVisible = false;
            },
            async handleUnit(){
                this.checkedUnit.forEach(item=>{
                    this.checkedUnitList.push(item);
                });
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.updateShopUnitUsingPUT_1({
                        request: this.unitData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.dialogVisible = false;
                }
            },
            unitSelect(){
                this.unitData.unitIds = this.checkedUnit.map(item=>{
                    return item.id;
                });
            },
            addRentItem(){
                if(this.$route.params.contractId != 0) {
                    this.rentData = {
                        contractId:this.$route.params.contractId,
                        drawRate: 0,
                        endRent: 0,
                        id: 0,
                        period: 0,
                        periodEndDate: "",
                        periodStartDate: ""
                    }
                }else{
                    this.rentData = {
                        contractId:this.contractId,
                        drawRate: 0,
                        endRent: 0,
                        id: 0,
                        period: 0,
                        periodEndDate: "",
                        periodStartDate: ""
                    }
                }
                this.rentList.push(this.rentData);
            },
            async addContract(){
                if(this.$route.params.contractId != 0) {
                    this.mainData.id = this.$route.params.contractId;
                    await this.$api.rentapi.editUsingPUT({
                        param : this.mainData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    await this.$api.rentapi.addUsingPOST_7({
                        request : this.mainData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.contractId = res.data.data;
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async addShopUnit(){
                if(this.$route.params.contractId != 0) {
                    this.unitData.contractId = this.$route.params.contractId;
                    this.unitData.unitIds = this.checkedUnit;
                    this.nextNum();
                }else {
                    this.unitData.contractId = this.contractId;
                    await this.$api.rentapi.addShopUnitUsingPOST_1({
                        request: this.unitData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async addRentData(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.updateRentOrCostUsingPUT_1({
                        request: this.rentList
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else {
                    await this.$api.rentapi.addRentOrCostUsingPOST_2({
                        request: this.rentList
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async addCostData(){
                if(this.$route.params.contractId != 0) {
                    this.costData.id = this.$route.params.contractId;
                    await this.$api.rentapi.updateRentOrCostUsingPOST({
                        request: this.costData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.costData.id = this.contractId;
                    await this.$api.rentapi.addRentOrCostUsingPOST_1({
                        request: this.costData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async addBondData(){
                if(this.$route.params.contractId != 0) {
                    this.sincerityMoneyData.id = this.$route.params.contractId;
                    await this.$api.rentapi.updateSincerityMoneyUsingPOST({
                        request: this.sincerityMoneyData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.sincerityMoneyData.id = this.contractId;
                    await this.$api.rentapi.addSincerityMoneyUsingPOST({
                        request: this.sincerityMoneyData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async addFileData(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.uploadsFileUsingPOST({
                    $config:{ headers: { 'Content-Type':'multipart/form-data'}},
                    /*file:this.formData,
                    contractId:this.$route.params.contractId,
                    type:0*/
                    file:[240],
                    contractId:this.contractId,
                    type:0
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.getFileInfo();
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },

            async delUnitItem(id,unitItem){
                console.log(id)
                await this.$api.rentapi.delShopUnitUsingPUT({
                    intentUnitId : id
                }).then(res => {
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
                let index = this.checkedUnit.indexOf(unitItem);
                if (index !== -1) {
                    this.checkedUnit.splice(index, 1)
                }
            },
            async delRentItem(id,rentItem){
                await this.$api.rentapi.delRentTemsUsingPUT({
                    rentTermsId : id
                }).then(res => {
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
                let index = this.rentList.indexOf(rentItem);
                if (index !== -1) {
                    this.rentList.splice(index, 1)
                }
            },

            async getContractInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.detailUsingGET_5({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.mainData = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getUnitInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.unitDetailUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.checkedUnitList = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getRentTermsInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.rentTermsdetailUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.rentList = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getCostInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.costDetailUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.costData = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getBondInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.bondDetailUsingGET({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.sincerityMoneyData = res.data.data;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            }
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>

</style>