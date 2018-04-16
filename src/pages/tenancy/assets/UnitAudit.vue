<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/unit">单元管理</router-link>
                <router-link to="/inner/unitaudit">单元审核</router-link>
            </div>
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
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in dataFloorList"
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
            <div class="btn"><button @click="auditbtn">确定</button></div>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData" @listSelected="childData">
                    <el-table-column
                            label="更新时间"
                            width="150"
                            slot="operation">
                        <template slot-scope="scope">
                            {{scope.row.updateDateLong | formatDate('yyyy-MM-dd hh:mm:ss')}}
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
                    { type: 'selection', width:'50'},
                    { prop: 'unitCode', label: '单元号'},
                    { prop: 'buildName', label: '楼宇' },
                    { prop: 'floorName', label: '楼层'},
                    { prop: 'area', label: '建筑面积'},
                    { prop: 'useArea', label: '使用面积' },
                    { prop: 'statusName', label: '状态' },
                    { prop: 'remark', label: '备注'}
                ],
                dataFloorList:[],
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
                    name:"取消",
                    isStatus:false,
                    id:2
                }],
                statusId:'',
                statesId:[0,2],
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
                if(status.id === ''){
                    this.statesId = [0,2],
                    this.statusId = '';
                }else{
                    this.statesId = '';
                    this.statusId = status.id;
                }
                this.getDataList(1);
            },
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.listUsingGET_15({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    code:this.searchText,
                    buildId:'',
                    floorId:this.floorValue,
                    type:0,
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
                    this.dataFloorList = res.data.data;
                })
            },
            floorSelect(){
                this.getDataList(1);
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                console.log(this.multipleSelection)
                await this.$api.rentapi.updateStatusUsingPOST({
                    ids:this.multipleSelection
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.getDataList(1);
                    } else {
                        this.$message.error(res.data.msg);
                    }
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