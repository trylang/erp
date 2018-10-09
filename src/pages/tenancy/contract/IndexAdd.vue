<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <template>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="1 合同主体" name="1">
                    <blank-head title="合同信息"></blank-head>
                    <div class="commonbox">
                        <el-row class="dialogbox">
                            <el-col :span="10">
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">合同分类</span>
                                    <el-select v-model="mainData.contractType" placeholder="请选择" filterable clearable class="dialogselect">
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
                                    <el-select v-model="mainData.rateType" placeholder="请选择" filterable clearable class="dialogselect" @change="rateNumber()">
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
                                    <el-select v-model="mainData.merchantId" placeholder="请选择" filterable clearable @change="selectMerchant(mainData.merchantId)" class="dialogselect">
                                        <el-option
                                                v-for="item in merchantOptions"
                                                :key="item.id"
                                                :label="item.name"
                                                :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname">品牌</span>
                                    <el-select v-model="mainData.brandId" placeholder="请选择" filterable clearable class="dialogselect">
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
                                    <el-select v-model="mainData.operationMode" placeholder="请选择" filterable clearable class="dialogselect">
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
                                    <el-select v-model="mainData.propertyType" placeholder="请选择" filterable clearable disabled class="dialogselect">
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
                                            v-model="mainData.openingDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
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
                                            class="inputtext"
                                            v-model="mainData.decorationStartDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选填">
                                    </el-date-picker>
                                    ~
                                    <el-date-picker
                                            class="inputtext"
                                            v-model="mainData.decorationEndDate"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            @change="cycleChange()"
                                            placeholder="选填">
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
                                            placeholder="请输入失效日期">
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
                                    <div class="listcont contractcont" v-for="(UnitItem,index) in unitListPush">
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
                                            <button class="btn_text" @click="delUnitItem(UnitItem,UnitItem.unitId)">删除</button>
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
                                                <p>第{{index+1}}阶段</p>
                                            </div>
                                            <div class="listcolum columbox" style="padding: 0 20px;">
                                                <div class="dialoginput">
                                                    <el-date-picker
                                                            class="inputtext"
                                                            style="width:50%;margin:0;"
                                                            v-model="rentlists.periodStartDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            placeholder="开始日期">
                                                    </el-date-picker>
                                                    ~
                                                    <el-date-picker
                                                            class="inputtext"
                                                            style="width:50%;margin:0;"
                                                            v-model="rentlists.periodEndDate"
                                                            type="date"
                                                            value-format="yyyy-MM-dd"
                                                            placeholder="结束日期">
                                                    </el-date-picker>
                                                </div>
                                            </div>
                                            <div class="listcolum columbox intentbox" style="padding: 0 20px;">
                                                <div class="columboxinput">
                                                    <span class="inputname">保底租金</span>
                                                    <input class="inputtext" type="text" placeholder="请输入保底租金" v-model="rentlists.endRent" v-limitNum>
                                                    <span class="rightcompany">元</span>
                                                </div>
                                            </div>
                                            <div class="listcolum columbox intentbox" style="padding: 0 20px;">
                                                <div class="columboxinput">
                                                    <span class="inputname">抽成比例</span>
                                                    <input class="inputtext" type="text" placeholder="请输入抽成比例" v-model="rentlists.drawRate" v-limitNum>
                                                    <span class="rightcompany">%</span>
                                                </div>
                                            </div>
                                            <div class="deletebtn">
                                                <button class="btn_text" @click="delRentItem(rentlists.id, rentlists)" style="margin: 0 0 0 15px;">删除</button>
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
                                    <input class="inputtext" type="text" placeholder="请输入物业管理费" v-model="costData.propertyManageFee == null?0:costData.propertyManageFee">
                                    <span class="rightcompany">元</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">推广费</span>
                                    <input class="inputtext" type="text" placeholder="请输入推广费" v-model="costData.promotFee == null?0:costData.promotFee">
                                    <span class="rightcompany">元</span>
                                </div>
                                <div class="dialoginput">
                                    <span class="inputname inputnameWidth">库房费</span>
                                    <input class="inputtext" type="text" placeholder="请输入库房费" v-model="costData.houseFee == null?0:costData.houseFee">
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
                                    <input class="inputtext" type="number" placeholder="
 请输入诚意金金额" v-model="sincerityMoneyData.sincerityMoney==null?0:sincerityMoneyData.sincerityMoney">
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
                                            <div class="uploadtitle">文件上传<span>（图片建议尺寸：620像素×877像素，仅支持.jpg .jpeg.png格式图片，大小不超过1M 文档仅支持.word.pdf.txt格式，大小不超过100M）</span></div>
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :action="this.$downLoadUrl+'/rent/intent/contract/uploads'"
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
                                                    <span class="spantopR"><i class="el-icon-close"></i></span>
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
            </el-tabs>
        </template>
        <el-dialog
                :visible.sync="dialogVisible"
                :before-close="cancelUnit"
                custom-class="contractdialog">
            <div class="searchbox">
                <input type="text" placeholder="请输入单元号" v-model.trim="searchText" @keyup.enter="getUnitDataList()"><i class="iconfont icon-sousuo"></i>
            </div>
            <div class="dialogbox">
                <div class="floorsearchlist">
                    <ul v-if="buildList.length > 0">
                        <li :style="buildType == buildList[0].id?'color:#457fcf':''" @click="getFloorList(buildList[0].id,1)" v-if="propertyTypeNum == 0 || propertyTypeNum == 2 || propertyTypeNum == 3">{{buildList[0].buildName}}</li>
                        <li :style="buildType == buildList[1].id?'color:#457fcf':''" @click="getFloorList(buildList[1].id,2)" v-if="propertyTypeNum == 1 || propertyTypeNum == 2 || propertyTypeNum == 3">{{buildList[1].buildName}}</li>
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
                            <el-checkbox  :label="unitlist.id" v-for="(unitlist,index) in unitDataListShop" 
                            :key="index">{{unitlist.unitCode}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <el-col :span="24" v-if="this.tabIndex == 2">
                        <el-checkbox-group
                                v-model="checkedUnit">
                            <el-checkbox v-for="(unitlist,index) in unitDataListOffice"
                             :label="unitlist.id" :key="index">{{unitlist.unitCode}}</el-checkbox>
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
                loading: false,
                isShow: false,
                searchText:'',
                buildTypeShop:'',
                buildTypeOffice:'',
                buildType:'',
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
                unitListPush: [],
                unitDataListShop:[],
                unitDataListOffice:[],
                checkedUnit:[],
                checkedUnitList:[],
                unitData:{
                    contractId: 0,
                    contractCode: '',
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
                    propertyManageFee:0,
                    promotFee:0,
                    houseFee:0,
                    sincerityMoney:'',
                    id:0
                },
                sincerityMoneyData:{
                    propertyManageFee:'',
                    promotFee:'',
                    houseFee:'',
                    sincerityMoney:0,
                    id:0
                },
                fileListData:[],
                imageUrlList:[],
                unitListAry: [],
                contractId:'',
                contractCode:'',
                tenancyTermNum:'0个月0天',
                cycleNum:'0个月0天',
                isStep:'1',
                propertyTypeNum:'',
                headers: {
                    token: localStorage.getItem('erp_token')
                },
                buildList:[],
                tabIndex:1
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
            if(this.$route.params.contractId != 0) {
                this.getFileData();
            }
            this.getBaseDataOptions();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    if(this.buildType == this.buildList[0].id){
                        this.getUnitDataListShop(this.buildTypeShop);
                    }else{
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }
                },300)
            }
        },
        methods: {
            selectMerchant(merchantId) {
                let merchant = this.merchantOptions.find(item => {
                    return item.id == merchantId;
                });
                let property = this.propertyOptions.find(item => {
                    return item.value == merchant.propertyType;
                });
                this.mainData.propertyType = property.value;
                this.propertyTypeNum = property.value;
            },
            //获取单元的弹框列表
            changeFloorUnit(id){
                this.floorId = id;
                if(this.buildType == this.buildList[0].id){
                    this.getUnitDataListShop(this.buildTypeShop);
                }else{
                    this.getUnitDataListOffice(this.buildTypeOffice);
                }
            },
            async getMerchantList(){
                await this.$api.rentapi.doweListUsingGET({
                    type:4
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
            async getUnitDataListShop(typeNum){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:'1',
                    pageSize:'200000',
                    code:this.searchText,
                    buildId:this.buildTypeShop,
                    floorId:this.floorId,
                    type:this.mainData.propertyType,
                    status:1,
                    states:''
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
                    type:this.mainData.propertyType,
                    status:1,
                    states:''
                }).then(res=>{
                    this.unitDataListOffice = res.data.data.list;
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
            async getBuildList(){
                await this.$api.rentapi.listUsingGET_4().then(res=>{
                    this.buildList = res.data.data;
                    if (this.mainData.propertyType == 0) {
                        this.buildTypeShop = res.data.data[0].id;
                        this.buildType = res.data.data[0].id;
                        this.getFloorList(this.buildType,1);
                        this.getUnitDataListShop(this.buildTypeShop);
                    }else if(this.mainData.propertyType == 1){
                        this.buildTypeOffice = res.data.data[1].id;
                        this.buildType = res.data.data[1].id;
                        this.getFloorList(this.buildType,2);
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }else{
                        this.buildTypeShop = res.data.data[0].id;
                        this.buildTypeOffice = res.data.data[1].id;
                        this.buildType = res.data.data[0].id;
                        this.getFloorList(this.buildType,1);
                        this.getUnitDataListShop(this.buildTypeShop);
                        this.getUnitDataListOffice(this.buildTypeOffice);
                    }
                })
            },
            addItem(){
                this.propertyTypeNum = this.mainData.propertyType;
                this.dialogVisible = true;
                this.getBuildList();
            },
            cancelUnit(){
                this.dialogVisible = false;
                this.checkedUnit = this.unitListPush.map(item=>{
                    if(item.unitId) {
                        return item.unitId;
                    }else{
                        return item.id;
                    }
                });
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
                this.loading = true;
                if(this.$route.params.contractId != 0) {
                    this.mainData.id = this.$route.params.contractId;
                    await this.$api.rentapi.editUsingPUT({
                        param : this.mainData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    await this.$api.rentapi.addUsingPOST_7({
                        request : this.mainData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.unitData.contractId = res.data.data.data.contractId;
                            this.unitData.contractCode = res.data.data.data.contractCode;
                            this.contractId = res.data.data.data.contractId;
                            this.contractCode = res.data.data.data.contractCode;
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async addShopUnit(){
                this.loading = true;
                if(this.$route.params.contractId != 0) {
                    this.unitData.unitIds = this.checkedUnit;
                    this.unitData.contractId = this.$route.params.contractId;
                }else{
                    this.unitData.unitIds = this.checkedUnit;
                    this.unitData.contractId = this.contractId;
                    /*await this.$api.rentapi.addShopUnitUsingPOST_1({
                        request: this.unitData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.nextNum();
                            this.getUnitInfo();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })*/
                }
                await this.$api.rentapi.updateShopUnitUsingPUT_1({
                    request: this.unitData
                }).then(res => {
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.$message.success(res.data.msg);
                        this.dialogVisible = false;
                        this.nextNum();
                        this.getUnitInfo();
                    } else {
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                })
            },
            async addRentData(){
                this.loading = true;
                if(this.$route.params.contractId != 0) {
                    this.rentList.forEach(item=>{
                        item.contractId = this.$route.params.contractId
                    });
                    await this.$api.rentapi.updateRentOrCostUsingPUT_1({
                        request: this.rentList
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else {
                    await this.$api.rentapi.addRentOrCostUsingPOST_2({
                        request: {list:this.rentList}
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async addCostData(){
                this.loading = true;
                if(this.$route.params.contractId != 0) {
                    this.costData.id = this.$route.params.contractId;
                    await this.$api.rentapi.updateRentOrCostUsingPOST({
                        request: this.costData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.costData.id = this.contractId;
                    await this.$api.rentapi.addRentOrCostUsingPOST_1({
                        request: this.costData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async addBondData(){
                let sincerityMoney = this.sincerityMoneyData.sincerityMoney + '';
                if (!sincerityMoney || sincerityMoney.indexOf('e') >= 0) {
                    this.$message.info('请输入数字');
                    return;
                }
                if (parseFloat(sincerityMoney) < 0 || parseFloat(sincerityMoney) > 999999999) {
                    this.$message.info('请输入大于等于0，小于10位数的正数');
                    return;
                }
                if (sincerityMoney.indexOf('.') >=0 && sincerityMoney.split('.')[1].length > 2) {
                    this.$message.info('请输入小于三位小位数的正数');
                    return;
                }
                this.loading = true;
                if(this.$route.params.contractId != 0) {
                    this.sincerityMoneyData.id = this.$route.params.contractId;
                    await this.$api.rentapi.updateSincerityMoneyUsingPOST({
                        request: this.sincerityMoneyData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.sincerityMoneyData.id = this.contractId;
                    await this.$api.rentapi.addSincerityMoneyUsingPOST({
                        request: this.sincerityMoneyData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.nextNum();
                        } else {
                            this.loading = false;
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
                    this.getFileData();
                }
            },
            async delUnitItem(unitItem,id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if(id) {
                        this.$api.rentapi.intentContractUpdateStatusToEmpety({
                            id: id,
                            contractCode:this.contractCode
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.$message.success(res.data.msg);
                                let index = this.checkedUnit.indexOf(id);
                                if (index !== -1) {
                                    this.checkedUnit.splice(index, 1)
                                }
                                let _index = this.unitListPush.indexOf(unitItem)
                                if (_index !== -1) {
                                    this.unitListPush.splice(_index, 1)
                                };
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }else {
                        let index = this.checkedUnit.indexOf(unitItem.id);
                        if (index !== -1) {
                            this.checkedUnit.splice(index, 1)
                        }
                        let _index = this.unitListPush.indexOf(unitItem)
                        if (_index !== -1) {
                            this.unitListPush.splice(_index, 1)
                        };
                    }
                });
            },
            async delRentItem(id,rentItem){
                if(id) {
                    this.$confirm('是否删除该条数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$api.rentapi.delRentTemsUsingPUT({
                            rentTermsId: id
                        }).then(res => {
                            if (res.data.status == 200) {
                                let index = this.rentList.indexOf(rentItem);
                                if (index !== -1) {
                                    this.rentList.splice(index, 1)
                                }
                                this.$message.success(res.data.msg);
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        });
                    });
                }else {
                    let index = this.rentList.indexOf(rentItem);
                    if (index !== -1) {
                        this.rentList.splice(index, 1)
                    }
                }
            },

            async getContractInfo(){
                if(this.$route.params.contractId != 0) {
                    await this.$api.rentapi.detailUsingGET_5({
                        id: this.$route.params.contractId
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.mainData = res.data.data;
                            this.contractCode = res.data.data.contractCode;
                            this.unitData.contractId = res.data.data.contractId;
                            this.unitData.contractCode = res.data.data.contractCode;
                            this.propertyTypeNum = res.data.data.propertyType;
                            this.tenancyTermNum = (res.data.data.validMonth==null?0:res.data.data.validMonth)+'个月'+(res.data.data.validDay==null?0:res.data.data.validDay)+'天';
                            this.cycleNum = (res.data.data.decorationMonth==null?0:res.data.data.decorationMonth)+'个月'+(res.data.data.decorationDay==null?0:res.data.data.decorationDay)+'天';
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
                        this.unitListPush = res.data.data;
                        this.unitListAry =  res.data.data;
                        this.checkedUnit = res.data.data.map(item => item.unitId);
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
            async getFileData(){
                if(this.$route.params.contractId != 0) {
                    this.contractId = this.$route.params.contractId;
                }
                await this.$api.rentapi.getIntentFile({
                    id: this.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.fileListData = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            async handleUnit(){
                this.dialogVisible = false;
                this.unitData.unitIds = this.checkedUnit;
                this.unitListPush = [];
                this.unitListPush = [...this.unitListPush,...this.unitListAry];
                this.unitDataList = [...this.unitDataListShop,...this.unitDataListOffice];
                this.unitListPush = [];
                this.checkedUnit.forEach(item => {
                    this.unitDataList.map(__item => {
                        if (__item.id == item) {
                            this.unitListPush.push(__item);
                        }
                    });
                });
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
            rateNumber(){
                this.mainData.rate = 0;
            }
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>
    .intentbox {
        padding: 0 30px;
    }
    .intentbox .columboxinput .inputname {
        width: 150px;
    }
</style>