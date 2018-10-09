<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/unit" v-if="unit">单元管理</router-link>
                <router-link to="/inner/unitaudit" v-if="unitaudit">单元审核</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入单元号" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">楼层</span>
                            <el-select v-model="floorValue" placeholder="请选择" filterable clearable class="dialogselect" @change="floorSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in floorOptions"
                                        :key="item.id"
                                        :label="item.floorName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
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
                            label="更新时间"
                            width="150"
                            slot="operation">
                        <template slot-scope="scope">
                            {{scope.row.updateDateLong | formatDate('yyyy-MM-dd hh:mm:ss')}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="getUnitInfo(scope.row.id,scope.row.status)" v-if="scope.row.status == 0 || scope.row.status == 2 || scope.row.status == 6">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">删除</button>
                            <button class="btn_text" v-if="scope.row.status == 1" @click="cancelFailure(scope.row.id,2)">取消</button>
                            <button class="btn_text" v-if="scope.row.status == 6" @click="cancelFailure(scope.row.id,5)">失效</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listId?'编辑单元':'添加单元'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">单元号</span>
                    <input class="inputtext" type="text" placeholder="请输入单元号" v-model="unitInfoData.unitCode" :readonly="isStatus">
                </div>
                <div class="dialoginput">
                    <span class="inputname">购物中心</span>
                    <el-select v-model="unitInfoData.marketId" placeholder="请选择" filterable clearable class="dialogselect" disabled>
                        <el-option
                                v-for="item in marketOptions"
                                :key="item.id"
                                :label="item.marketName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼宇</span>
                    <el-select v-model="unitInfoData.buildId" placeholder="请选择" filterable clearable class="dialogselect" disabled>
                        <el-option
                                v-for="item in buildOptions"
                                :key="item.id"
                                :label="item.buildName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼层</span>
                    <el-select v-model="unitInfoData.floorId" placeholder="请选择" filterable clearable class="dialogselect" :disabled="isStatus">
                        <el-option
                                v-for="item in floorOptions"
                                :key="item.id"
                                :label="item.floorName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">建筑面积</span>
                    <input class="inputtext" type="text" placeholder="请输入建筑面积" v-model="unitInfoData.area">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">使用面积</span>
                    <input class="inputtext" type="text" placeholder="请输入使用面积" v-model="unitInfoData.useArea">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填" v-model="unitInfoData.remark"  :readonly="isStatus"></textarea>
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
        name: "unit",
        data(){
            return{
                loading: false,
                dialogVisible:false,
                listId:'',
                unitInfoData:{
                    advertisingStandard: '',
                    area: '',
                    buildId: '',
                    floorId: '',
                    marketId: this.$userInfo.marketId,
                    remark: '',
                    rentAdvertisingTypeId: '',
                    type: 0,
                    unitCode: '',
                    useArea: ''
                },
                marketOptions:[{
                    marketName:this.$userInfo.marketName,
                    id:this.$userInfo.marketId
                }],
                buildOptions:[],
                dataList:[],
                searchText:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { prop: 'unitCode', label: '单元号'},
                    { prop: 'buildName', label: '楼宇' },
                    { prop: 'floorName', label: '楼层'},
                    { prop: 'area', label: '建筑面积'},
                    { prop: 'useArea', label: '使用面积' },
                    { prop: 'statusName', label: '状态' },
                    { prop: 'remark', label: '备注'},
                    { prop: 'updateUser', label: '操作人'}
                ],
                floorOptions:[],
                floorValue:'',
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
                    name:"预定",
                    isStatus:false,
                    id:3
                },{
                    name:"使用中",
                    isStatus:false,
                    id:4
                },{
                    name:"取消",
                    isStatus:false,
                    id:2
                },{
                    name:"失效",
                    isStatus:false,
                    id:5
                },{
                    name:"空置",
                    isStatus:false,
                    id:6
                }],
                statusId:'',
                isStatus:false,
                multipleSelection:[]
            }
        },
        mounted(){
            this.getBuildList();     
        },
        computed:{
            unit(){
                return this.$root.menus.indexOf('/inner/unit') >= 0;
            },
            unitaudit(){
                return this.$root.menus.indexOf('/inner/unitaudit') >= 0;
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
                this.listId = '';
                this.dialogVisible = true;
                this.isStatus = false;
                this.unitInfoData={
                    advertisingStandard: '',
                        area: '',
                        buildId: this.unitInfoData.buildId,
                        floorId: '',
                        marketId: this.$userInfo.marketId,
                        remark: '',
                        rentAdvertisingTypeId: '',
                        type: 0,
                        unitCode: '',
                        useArea: ''
                }
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async submitFormData(){
                this.loading = true;
                if(this.listId == '') {
                    await this.$api.rentapi.addUsingPOST_10({
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.dialogVisible = false;
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    await this.$api.rentapi.updateUsingPUT_12({
                        id:this.listId,
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.dialogVisible = false;
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async getUnitInfo(id,status){
                if(status == 6){
                    this.isStatus = true;
                }else{
                    this.isStatus = false;
                }
                this.dialogVisible = true;
                this.listId = id;
                this.$api.rentapi.selectByIdUsingGET_3({
                    id: id
                }).then(res => {
                    this.unitInfoData = res.data.data;
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
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.listUsingGET_15({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    code:this.searchText,
                    buildId:'',
                    floorId:this.floorValue,
                    type:0,
                    status:this.statusId,
                    states:''
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
            async getBuildList(){
                await this.$api.rentapi.listUsingGET_4().then(res=>{
                    this.buildOptions = res.data.data;
                    res.data.data.forEach(item => {
                        if (item.buildName == '商场') {
                            this.unitInfoData.buildId = item.id;
                        }
                    })
                    this.getFloorList();
                })
            },
            async getFloorList(){
                await this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId: this.unitInfoData.buildId
                }).then(res=>{
                    this.floorOptions = res.data.data;
                })
            },
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.deleteUsingDELETE_7({
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
            async cancelFailure(id,stauts){
                this.$confirm('您确定继续当前操作？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.updateCancelFailure({
                        id: id,
                        stauts: stauts
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
            floorSelect(){
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
    .btn{
        padding: 0 20px;
    }
    .btn button{
        background: #457fcf;
        border: none;
        color: #fff;
        padding: 5px 28px;
        border-radius: 15px;
        cursor: pointer;
    }
</style>