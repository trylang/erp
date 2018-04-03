<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/unit">单元管理</router-link>
                <router-link to="/inner/unitaudit">单元审核</router-link>
            </div>
            <router-link to="/inner/addunit/0" class="el-button el-icon-plus" slot="append"><span>添加</span></router-link>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入单元号" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
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
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <router-link :to="'/inner/addunit/'+scope.row.id" class="btn_text">编辑</router-link>
                            <button class="btn_text" @click="deleteListData(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
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
                dataList:[],
                searchText:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                columnData:[
                    { prop: 'unitCode', label: '单元号'},
                    { prop: 'buildName', label: '楼宇' },
                    { prop: 'floorName', label: '楼层'},
                    { prop: 'area', label: '建筑面积'},
                    { prop: 'useArea', label: '使用面积' },
                    { prop: 'statusName', label: '状态' },
                    { prop: 'remark', label: '备注'},
                    { prop: 'updateDateLong', label: '更新时间', width:'180'}
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
                    name:"空置",
                    isStatus:false,
                    id:1
                },{
                    name:"预定",
                    isStatus:false,
                    id:2
                },{
                    name:"使用中",
                    isStatus:false,
                    id:3
                },{
                    name:"取消",
                    isStatus:false,
                    id:4
                },{
                    name:"失效",
                    isStatus:false,
                    id:5
                }],
                statusId:'',
                multipleSelection:[]
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
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.id;
                this.getDataList(1);
            },
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    code:this.searchText,
                    buildId:'',
                    floorId:this.floorValue,
                    type:1,
                    status:this.statusId
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
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.deleteUsingDELETE_6({
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