<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/brand" v-if="brand">品牌管理</router-link>
                <router-link to="/inner/brandaudit" v-if="brandaudit">品牌审核</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入名称" v-model.trim="searchName" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
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
                    <el-col :span="9" :offset="6">
                        <div class="texttitle">
                            <span class="inputname">状态：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" v-for="statuslist in statusData" :class="{active:statuslist.isStatus}" @click="statusHandler(statuslist)">{{statuslist.name}}</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="getInfoData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">删除</button>
                            <button class="btn_text" v-if="scope.row.status == 1" @click="cancelBrand(scope.row.id,2)">取消</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listId?'编辑品牌':'添加品牌'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="addInfoData.brandName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">一级业态</span>
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
                    <span class="inputname">二级业态</span>
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
                    <span class="inputname">三级业态</span>
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
                    <span class="inputname">国别</span>
                    <el-select v-model="addInfoData.countryId" placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="item in countryOptions"
                                :key="item.id"
                                :label="item.countryName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitFormData()">确 定</el-button>
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
                dataList:[],
                searchText:'',
                searchName:'',
                formatsValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                addInfoData:{
                    brandCode: '',
                    brandName: '',
                    businessId: '',
                    businessIdSecondLevel: '',
                    businessIdThreeLevel: [],
                    countryId: '',
                    id: '',
                    remark: ''
                },
                columnData:[
                    { prop: 'brandCode', label: '编码'},
                    { prop: 'brandName', label: '名称' },
                    { prop: 'busNames', label: '一级业态' },
                    { prop: 'busSecondName', label: '二级业态' },
                    { prop: 'businessIdThreeLevel', label: '三级业态' },
                    { prop: 'countryName', label: '国别' },
                    { prop: 'investSoursStatus', label: '状态' },
                    { prop: 'updateDateStr', label: '更新时间' }
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
                    name:"取消",
                    isStatus:false,
                    id:2
                }],
                formatsOptions:[],
                formatsOptionsS:[],
                formatsOptionsT:[],
                countryOptions:[],
                listId:''
            }
        },
        mounted(){
            this.getBusinessList();
            this.getCountryList();
        },
        computed:{
            brand(){
                return this.$root.menus.indexOf('/inner/brand') >= 0;
            },
            brandaudit(){
                return this.$root.menus.indexOf('/inner/brandaudit') >= 0;
            }
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            },
            searchName(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            }
        },
        methods:{
            handleOpen() {
                this.dialogVisible = true;
                this.addInfoData={
                    brandCode: '',
                    brandName: '',
                    businessId: '',
                    businessIdSecondLevel: '',
                    businessIdThreeLevel: [],
                    countryId: '',
                    id: '',
                    remark: ''
                }
                this.listId = '';
                this.formatsOptionsS = [];
                this.formatsOptionsT = [];
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.listpgUsingGET({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    brandCode:this.searchText,
                    brandName:this.searchName,
                    status:this.statusId,
                    businessId:this.formatsValue
                }).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.countryName = item.country?item.country.countryName:''
                        });
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
                    await this.$api.rentapi.addUsingPOST_1({
                        request: this.addInfoData
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
                    await this.$api.rentapi.updateUsingPUT_3({
                        request: this.addInfoData
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
                    brandCode: '',
                    brandName: '',
                    businessId: '',
                    countryId: '',
                    id: '',
                    remark: ''
                }
                this.$api.rentapi.detailUsingGET_1({
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
                    this.$api.rentapi.deleteUsingDELETE_1({
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
            async cancelBrand(id,status){
                this.$confirm('您确定继续当前操作？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.updateBrandStatus({
                        id: id,
                        status: status
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                });
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
</style>