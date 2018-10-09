<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/brandlibrary" v-if="brandlibrary">品牌库</router-link>
                <router-link to="/inner/brandapply" v-if="brandapply">品牌申请</router-link>
                <router-link to="/inner/brandapplyaudit" v-if="brandapplyaudit">品牌申请审核</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">申请</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入名称" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="texttitle">
                            <span class="inputname">状态：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" v-for="statuslist in statusData" :class="{active:statuslist.isStatus}" @click="statusHandler(statuslist)">{{statuslist.name}}</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">业态</span>
                            <el-select v-model="formatsValue" placeholder="请选择" filterable clearable class="dialogselect" @change="typeSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in formatsOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            width="130"
                            label="申请信息"
                            slot="operation">
                        <template slot-scope="scope">
                            <div>
                                <i class="iconfont icon-renyuan" style="font-size: 12px;"></i>
                                <span>{{scope.row.applyPerson}}</span>
                            </div>
                            <div>
                                <i class="iconfont icon-dianhuahm-copy" style="font-size: 12px;"></i>
                                <span>{{scope.row.applyTel}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="状态"
                            slot="operation">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status != 2">{{scope.row.statusName}}</div>
                            <div class="btn_text" v-if="scope.row.status == 2" @click="rebutReasonInfo(scope.row.id)" style="">{{scope.row.statusName}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="更新时间"
                            width="150"
                            slot="operation">
                        <template slot-scope="scope">
                            {{scope.row.updateDate | formatDate('yyyy-MM-dd hh:mm:ss')}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="getInfoData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listId?'修改申请':'申请品牌'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="addInfoData.brandName">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">所属商场</span>
                    <input class="inputtext" type="text" placeholder="" v-model="addInfoData.marketName" readonly>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">一级业态</span>
                    <el-select v-model="addInfoData.businessId" placeholder="请选择" filterable clearable class="dialogselect" @change="getBusinessTypeSList(addInfoData.businessId)">
                        <el-option
                                v-for="item in formatsOptions"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">二级业态</span>
                    <el-select v-model="addInfoData.businessIdSecondLevel" placeholder="请选择" filterable clearable class="dialogselect" @change="getBusinessTypeTList(addInfoData.businessIdSecondLevel)">
                        <el-option
                                v-for="item in formatsOptionsS"
                                :key="item.id"
                                :label="item.businessName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">三级业态</span>
                    <el-select v-model="addInfoData.businessIdThreeLevel" multiple placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="item in formatsOptionsT"
                                :key="item.id"
                                :label="item.businessName"
                                :value="item.businessName">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">国别</span>
                    <el-select v-model="addInfoData.countryId" placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="item in countryOptions"
                                :key="item.id"
                                :label="item.countryName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">申请人</span>
                    <input class="inputtext" type="text" placeholder="" v-model="addInfoData.applyPerson" readonly>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnamestyle">申请人电话</span>
                    <input class="inputtext" type="text" placeholder="请输入申请人电话" v-model="addInfoData.applyTel" maxlength="20">
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填" v-model="addInfoData.remark"></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitFormData()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="查看驳回"
            :visible.sync="dialogVisibleRebut"
            custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput noline">
                    <span class="inputname inputnameauto">驳回原因</span>
                    <textarea class="inputtext textareabox" style="border: 1px solid #e5e5e5;height:160px;" placeholder="" v-model="rebutReason" readonly></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="rebutReasonClose()">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                loading: false,
                dialogVisible:false,
                dialogVisibleRebut:false,
                dataList:[],
                searchText:'',
                formatsValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                addInfoData:{
                    brandName: '',
                    businessId: '',
                    businessIdSecondLevel: '',
                    businessIdThreeLevel: [],
                    countryId: '',
                    id: '',
                    applyPerson: this.$userInfo.userName,
                    applyTel: '',
                    marketName: this.$userInfo.marketName,
                    remark: ''
                },
                columnData:[
                    { prop: 'brandName', label: '名称' },
                    { prop: 'busNames', label: '一级业态' },
                    { prop: 'busSecondName', label: '二级业态' },
                    { prop: 'businessIdThreeLevel', label: '三级业态' },
                    { prop: 'country', label: '国别' },
                    { prop: 'marketName', label: '所属商场' }
                ],
                statusData:[{
                    name:"全部",
                    isStatus:true,
                    id:''
                },{
                    name:"新增",
                    isStatus:false,
                    id:0
                },{
                    name:"已确认",
                    isStatus:false,
                    id:1
                },{
                    name:"驳回",
                    isStatus:false,
                    id:2
                }],
                formatsOptions:[],
                formatsOptionsS:[],
                formatsOptionsT:[],
                countryOptions:[],
                rebutReason:'',
                listId:'',
            }
        },
        mounted(){
            this.getBusinessList();
            this.getCountryList();
        },
        computed:{
            brandlibrary(){
                return this.$root.menus.indexOf('/inner/brandlibrary') >= 0;
            },
            brandapply(){
                return this.$root.menus.indexOf('/inner/brandapply') >= 0;
            },
            brandapplyaudit(){
                return this.$root.menus.indexOf('/inner/brandapplyaudit') >= 0;
            }
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            }
        },
        methods:{
            handleOpen() {
                this.dialogVisible = true;
                this.addInfoData={
                    brandName: '',
                    businessId: '',
                    businessIdSecondLevel: '',
                    businessIdThreeLevel: [],
                    countryId: '',
                    id: '',
                    applyPerson: this.$userInfo.userName,
                    applyTel: '',
                    marketName: this.$userInfo.marketName,
                    remark: ''
                }
                this.listId = '';
                this.formatsOptionsS = [];
                this.formatsOptionsT = [];
            },
            handleClose(){
                this.dialogVisible = false;
            },
            rebutReasonClose(){
                this.rebutReason = '';
                this.dialogVisibleRebut = false;
                this.listId = '';
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.getBrandApplyList({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    brandName:this.searchText,
                    status:this.statusId,
                    businessId:this.formatsValue
                }).then(res=>{
                    if(res.data.status === 200){
                        this.dataList = res.data.data.list;
                        this.total = Number(res.data.data.total);
                        this.loading = false;
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.$message.error(res.data.msg);
                })
            },
            async getBusinessList(){
                await this.$api.rentapi.getOptionsUsingGET({level: 1}).then(res=>{
                    this.formatsOptions = res.data.data;
                })
            },
            getBusinessTypeSList(id){
                this.addInfoData.businessIdSecondLevel = '';
                this.addInfoData.businessIdThreeLevel = [];
                this.formatsOptionsS = [];
                this.formatsOptionsT = [];
                if(id) {
                    this.$api.rentapi.getListByPidUsingGET({pid: id}).then(res => {
                        this.formatsOptionsS = res.data.data;
                    })
                }
            },
            getBusinessTypeTList(id){
                this.addInfoData.businessIdThreeLevel = [];
                this.formatsOptionsT = [];
                if(id) {
                    this.$api.rentapi.getListByPidUsingGET({pid: id}).then(res => {
                        this.formatsOptionsT = res.data.data;
                    })
                }
            },
            async getCountryList(){
                await this.$api.rentapi.listUsingGET_2().then(res=>{
                    this.countryOptions = res.data.data;
                })
            },
            async submitFormData(){
                if(this.addInfoData.brandName == ''){
                    return this.$message.error('品牌名称不能为空');
                }
                if(this.addInfoData.businessId == ''){
                    return this.$message.error('一级业态不能为空');
                }
                if(this.addInfoData.businessIdSecondLevel == ''){
                    return this.$message.error('二级业态不能为空');
                }
                if(this.addInfoData.businessIdThreeLevel.length == 0){
                    return this.$message.error('三级业态不能为空');
                }
                if(this.addInfoData.countryId == ''){
                    return this.$message.error('国别不能为空');
                }
                this.loading = true;
                this.addInfoData.businessIdThreeLevel = this.addInfoData.businessIdThreeLevel.join(',');
                if(this.listId == '') {
                    await this.$api.rentapi.addBrandApply({
                        param: this.addInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1,this.pageSize);
                            this.dialogVisible = false;
                            this.loading = false;
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.addInfoData.id = this.listId;
                    await this.$api.rentapi.udpateBrandApplyInfo({
                        param: this.addInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1,this.pageSize);
                            this.dialogVisible = false;
                            this.loading = false;
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
                this.addInfoData.businessIdThreeLevel = this.addInfoData.businessIdThreeLevel.split(',');
            },
            async getInfoData(id){
                this.dialogVisible = true;
                this.listId = id;
                this.addInfoData={
                    brandName: '',
                    businessId: '',
                    businessIdSecondLevel: '',
                    businessIdThreeLevel: [],
                    countryId: '',
                    id: '',
                    applyPerson: '',
                    applyTel: '',
                    marketName: this.$userInfo.marketName,
                    remark: ''
                }
                this.$api.rentapi.getBrandApplyInfo({
                    id: id
                }).then(res => {
                    if (res.data.data.businessIdThreeLevel) {
                        this.getBusinessTypeSList(res.data.data.businessId);
                        this.getBusinessTypeTList(res.data.data.businessIdSecondLevel);
                        res.data.data.businessIdThreeLevel = res.data.data.businessIdThreeLevel.split(',');
                    }
                    this.addInfoData = res.data.data;
                })
            },
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.deleteBrandApply({
                        id:id
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                })
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.id;
                this.getDataList(1,this.pageSize);
            },
            typeSelect(){
                this.getDataList(1,this.pageSize);
            },
            async rebutReasonInfo(id){
                this.dialogVisibleRebut = true;
                this.listId = id;
                this.$api.rentapi.getBrandApplyInfo({
                    id: id
                }).then(res => {
                    this.rebutReason = res.data.data.rebutReason;
                })
            }
        },
        components:{
            ConHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>
    .line-nav{
        flex:1;
        line-height: 30px;
    }
    .line-nav a{
        margin: 0 10px;
        color: #666;
        font-weight: bold;
        height: 30px;
        text-decoration: none;
        display: inline-block;
    }
    .line-nav a.active{
        color: #457fcf;
        border-bottom: 2px solid #457fcf;
    }
    .inputnamestyle{
        width: 90px;
    }
</style>