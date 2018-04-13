<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/site">场地管理</router-link>
                <router-link to="/inner/siteaudit">场地审核</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">楼层</span>
                            <el-select v-model="floorValue" placeholder="请选择" class="dialogselect" @change="floorSelect()">
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
                            <button class="btn_text" @click="getUnitInfo(scope.row.id)" v-if="scope.row.status == 0">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)" v-if="scope.row.status == 0">删除</button>
                            <button class="btn_text" v-if="scope.row.status == 1" @click="cancelFailure(scope.row.id,2)">取消</button>
                            <button class="btn_text" v-if="scope.row.status == 6" @click="cancelFailure(scope.row.id,5)">失效</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                title="添加场地"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入编号" v-model="unitInfoData.unitCode">
                </div>
                <div class="dialoginput">
                    <span class="inputname">购物中心</span>
                    <el-select v-model="unitInfoData.marketId" placeholder="请选择" class="dialogselect" disabled>
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
                    <el-select v-model="unitInfoData.buildId" placeholder="请选择" class="dialogselect" disabled>
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
                    <el-select v-model="unitInfoData.floorId" placeholder="请选择" class="dialogselect">
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
                    <textarea class="textareabox" placeholder="选填" v-model="unitInfoData.remark"></textarea>
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
        name: "site",
        data(){
            return{
                dialogVisible:false,
                dataList:[],
                searchText:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                listId:'',
                columnData:[
                    { prop: 'unitCode', label: '编码'},
                    { prop: 'buildName', label: '楼宇' },
                    { prop: 'floorName', label: '楼层'},
                    { prop: 'area', label: '建筑面积'},
                    { prop: 'useArea', label: '使用面积' },
                    { prop: 'statusName', label: '状态' },
                    { prop: 'remark', label: '备注'}
                ],
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
                    name:"空置",
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
                }],
                statusId:'',
                multipleSelection:[],
                unitInfoData:{
                    advertisingStandard: '',
                    area: '',
                    buildId: 1,
                    floorId: '',
                    marketId: 1,
                    remark: '',
                    rentAdvertisingTypeId: '',
                    type: 2,
                    unitCode: '',
                    useArea: ''
                },
                marketOptions:[{
                    marketName:'朝阳大悦城',
                    id:1
                }],
                buildOptions:[{
                    buildName:'商场',
                    id:1
                }],
                floorOptions:[],
                statesId:'',
            }
        },
        mounted(){
            this.getFloorList();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            handleOpen(){
                this.dialogVisible = true;
                this.unitInfoData={
                    advertisingStandard: '',
                    area: '',
                    buildId: 1,
                    floorId: '',
                    marketId: 1,
                    remark: '',
                    rentAdvertisingTypeId: '',
                    type: 2,
                    unitCode: '',
                    useArea: ''
                }
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                if(status.id == 1){
                    this.statesId = [1,6],
                        this.statusId = '';
                }else{
                    this.statesId = '';
                    this.statusId = status.id;
                }
                this.getDataList(1);
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    code:this.searchText,
                    buildId:'',
                    floorId:this.floorValue,
                    type:2,
                    status:this.statusId,
                    states:this.statesId
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async getFloorList(){
                await this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId:1
                }).then(res=>{
                    this.floorOptions = res.data.data;
                })
            },
            async submitFormData(){
                let regExp = /^[0-9]*$/;
                if(!regExp.test(this.unitInfoData.area) || !regExp.test(this.unitInfoData.useArea)){
                    this.$message.error('建筑面积使用面积格式不正确');
                    return false;
                }else if(this.unitInfoData.area<=0 || this.unitInfoData.useArea<=0){
                    this.$message.error('建筑面积和使用面积不能小于0');
                    return false;
                }else if(parseInt(this.unitInfoData.area) < parseInt(this.unitInfoData.useArea)){
                    this.$message.error('建筑面积不能小于使用面积');
                    return false;
                }
                if(this.listId == '') {
                    await this.$api.rentapi.addUsingPOST_10({
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    await this.$api.rentapi.updateUsingPUT_12({
                        id:this.listId,
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getUnitInfo(id){
                this.dialogVisible = true;
                this.listId = id;
                this.unitInfoData={
                    advertisingStandard: '',
                    area: '',
                    buildId: 1,
                    floorId: '',
                    marketId: 1,
                    remark: '',
                    rentAdvertisingTypeId: '',
                    type: 2,
                    unitCode: '',
                    useArea: ''
                }
                this.$api.rentapi.selectByIdUsingGET_3({
                    id: id
                }).then(res => {
                    this.unitInfoData = res.data.data;
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
                            this.getDataList(1);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                })
            },
            async cancelFailure(id,stauts){
                await this.$api.rentapi.updateCancelFailure({
                    id:id,
                    stauts:stauts
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.getDataList(1);
                        this.$message.success(res.data.msg);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            floorSelect(){
                this.getDataList(1);
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