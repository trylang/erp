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
                                    <span class="inputname inputnameWidth">销售计税类型</span>
                                    <el-select v-model="mainData.rateType" placeholder="请选择" class="dialogselect">
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
                                    <el-select v-model="mainData.merchantId" placeholder="请选择" @change="selectMerchant(mainData.merchantId)" class="dialogselect">
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
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">物业性质</span>
                                    <el-select v-model="mainData.propertyType" placeholder="请选择" disabled class="dialogselect">
                                        <el-option
                                                v-for="item in propertyOptions"
                                                :key="item.value"
                                                :label="item.text"
                                                :value="item.value">
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
                                            value-format="yyyy-MM-dd"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.validEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="tenancyTerm()"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">合同租期：{{tenancyTermNum}}</div>
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
                                            value-format="yyyy-MM-dd"
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
                                            value-format="yyyy-MM-dd"
                                            placeholder="开始日期">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.decorationEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="cycleChange()"
                                            placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="14">
                                <div class="dialogtext">周期：{{cycleNum}}</div>
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
                                            value-format="yyyy-MM-dd"
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
                <el-tab-pane label="2 意向单元" name="2" :disabled="isStep<2 && this.$route.params.contractId ==0">
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
                                            <button class="btn_text" @click="delUnitItem(UnitItem)">删除</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="listcont"><el-button icon="el-icon-plus" @click="addItem">继续添加</el-button></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="3 租金条款" name="3" :disabled="isStep<3 && this.$route.params.contractId ==0">
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
                                                        value-format="yyyy-MM-dd"
                                                        placeholder="开始日期">
                                                </el-date-picker>
                                                ~
                                                <el-date-picker
                                                        class="inputtext"
                                                        v-model="rentlists.periodEndDate"
                                                        type="date"
                                                        value-format="yyyy-MM-dd"
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
                <el-tab-pane label="4 费用条款" name="4" :disabled="isStep<4 && this.$route.params.contractId ==0">
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
                <el-tab-pane label="5 诚意金" name="5" :disabled="isStep<5 && this.$route.params.contractId ==0">
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
                <el-tab-pane label="6 附件上传" name="6" :disabled="isStep<6 && this.$route.params.contractId ==0">
                    <blank-head title="合同附件"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="24">
                                <div class="listbox" style="margin: 0;">
                                    <div class="listcont contractcont">
                                        <div class="listcolum">
                                            <div class="uploadtitle">文件上传<span>（图片仅支持jpg、jpeg、png格式，大小不超过1M）</span></div>
                                             <form action="/api/rent/contract/uploads" method="post" enctype="multipart/form-data" id="registSubmit" target="rfFrame">
                                                <div class="uploadlist">
                                                    <div class="avatar-uploader">
                                                        <label class="el-upload el-upload--text">
                                                            <i class="el-icon-plus avatar-uploader-icon"></i>
                                                            <div class="el-upload__text">点击添加图片</div>
                                                            <input type="file" name="file" multiple="multiple" class="el-upload__input" @change.prevent="addFileUpload($event)">
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="text" name="contractId" class="el-upload__input" :value="contractId" style="display:none;">
                                                <input type="text" name="type" class="el-upload__input" value="0" style="display:none;">
                                            </form>
                                            <iframe id="rfFrame" name="rfFrame" src="about:blank" style="display:none;"></iframe>
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
                            <el-checkbox  :label="unitlist" v-for="(unitlist,index) in unitDataList" 
                            :key="index">{{unitlist.unitCode}}</el-checkbox>
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
            <button @click="historyGo()">保存</button>
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
                buildType: '',
                floorListData: '',
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
                    rate: '',
                    rateType: "",
                    remark: "",
                    signDate: "",
                    sincerityMoney: 0,
                    validEndDate: "",
                    validStartDate: "",
                    version: ""
                },
                typeOptions:[],
                rateTypeOptions:[],
                merchantOptions:[],
                brandOptions:[],
                operationOptions:[],
                propertyOptions:[],
                unitDataList:[],
                checkedUnit:[],
                checkedUnitList:[],
                unitData:{
                    contractId: 0,
                    propertyType: 0,
                    siteId: null,
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
                contractId:'',
                tenancyTermNum:'0个月0天',
                cycleNum:'0个月0天',
                isStep:'1',
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
            this.getpPropertyList();
            this.getContractInfo();
            this.getUnitInfo();
            this.getRentTermsInfo();
            this.getCostInfo();
            this.getBondInfo();
            this.getBaseDataOptions();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getUnitDataList();
                },300)
            }
        },
        methods: {
            selectMerchant(merchantId) {
                let merchant = this.merchantOptions.find(item => {
                    return item.id == merchantId;
                });
                let property = this.propertyOptions.find(item => {
                    return item.value == merchant.merchantType;
                });
                this.mainData.propertyType = property.value;
            },
            //获取单元的弹框列表
            changeFloorUnit(id){
                this.floorId = id;
                this.getUnitDataList();
            },
            async addFileUpload(event){
                console.log(event)
                document.getElementById('registSubmit').submit();
                this.getFileInfo();
            },
            async getFileInfo() {
                // 获取附件信息，现没有这个接口
            },
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_12({
                    status:1
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async getBrandList(){
                await this.$api.rentapi.listUsingGET_3({
                    status:1
                }).then(res=>{
                    this.brandOptions = res.data.data;
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
                    code:this.searchText,
                    buildId:this.buildType,
                    floorId:this.floorId,
                    type: this.mainData.propertyType,
                    status:1,
                    states:''
                }).then(res=>{
                    this.unitDataList = res.data.data.list;
                })
            },
            async getBaseDataOptions(){
                await this.$api.rentapi.baseDataOptionsUsingGET().then(res=>{
                    this.typeOptions = res.data.data.contract_type;
                    this.operationOptions = res.data.data.operation_mode;
                    this.settleLevelOptions = res.data.data.settle_level;
                    this.rateTypeOptions = res.data.data.rate_type;
                    this.propertyOptions = res.data.data.property_type;
                })
            },
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
                    if (this.activeName == '6') {
                        this.isShow = true;
                    } else {
                        this.isShow = false;
                    }
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
                this.getFloorList(1);
            },
            cancelUnit(){
                this.dialogVisible = false;
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
            async handleUnit(){
                let unitIds = this.checkedUnit.map(item => {
                    return item.id;
                });
                this.unitData.unitIds = unitIds;
                if(this.$route.params.contractId != 0) {
                    this.unitData.contractId = this.$route.params.contractId;
                    await this.$api.rentapi.updateShopUnitUsingPUT_1({
                        request: this.unitData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.getUnitInfo();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.unitData.contractId = this.contractId;
                    await this.$api.rentapi.addShopUnitUsingPOST_1({
                        request: this.unitData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.getUnitInfo();
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })                   
                }
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
                            this.contractId = res.data.data.data.contractId;
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
                    this.nextNum();
                    
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

            async delUnitItem(unitItem){
                await this.$api.rentapi.delShopUnitUsingPUT({
                    intentUnitId : unitItem.id
                }).then(res => {
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.getUnitInfo();
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
                let contractId = this.$route.params.contractId && (this.$route.params.contractId != 0)  ? this.$route.params.contractId : this.contractId; 
                if (!contractId) return;
                this.isStep = parseInt(this.activeName) + 1 + '';
                await this.$api.rentapi.unitDetailUsingGET({
                    id: contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.checkedUnitList = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
              
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
            },
            historyGo(){
                this.$router.go(-1)
            },
            tenancyTerm(){
                this.tenancyTermNum = this.$dateNumber(this.mainData.validStartDate,this.mainData.validEndDate)
            },
            cycleChange(){
                this.cycleNum = this.$dateNumber(this.mainData.decorationStartDate,this.mainData.decorationEndDate)
            },
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>

</style>