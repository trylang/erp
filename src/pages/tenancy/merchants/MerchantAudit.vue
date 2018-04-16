<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/merchants">商户管理</router-link>
                <router-link to="/inner/merchantaudit">商户审核</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入名称" v-model.trim="searchName" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型</span>
                            <el-select v-model="typeValue" placeholder="请选择" class="dialogselect" @change="typeSelect()">
                                <el-option
                                        v-for="item in typeOptions"
                                        :key="item.id"
                                        :label="item.typeName"
                                        :value="item.id">
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
            <div class="btn"><button @click="auditbtn">确定</button></div>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData" @listSelected="childData">
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
                searchName:'',
                typeValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'merchantCode', label: '编码', link: '/inner/merchants/detail', param: 'id'},
                    { prop: 'merchantName', label: '名称' },
                    { prop: 'merchantEnglishName', label: '英文名称' },
                    { prop: 'enumMerchantType', label: '类型' },
                    { prop: 'enumMerchantNature', label: '商户性质' },
                    { prop: 'responsiblePerson', label: '联系人' },
                    { prop: 'enumInvestSoursStatus', label: '状态'},
                    { prop: 'updateDateStr', label: '更新时间' }
                ],
                typeOptions:[{
                    typeName:'商场',
                    id:0
                },{
                    typeName:'写字楼',
                    id:1
                },{
                    typeName:'广告位',
                    id:3
                },{
                    typeName:'场地',
                    id:2
                }],
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
                multipleSelection:[]
            }
        },
        mounted(){
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            },
            searchName(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.auditListpgUsingGET_1({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    merchantCode:this.searchText,
                    merchantName:this.searchName,
                    merchantEnglishName:'',
                    merchantType:this.typeValue,
                    status:this.statusId
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.id;
                this.getDataList(1);
            },
            typeSelect(){
                this.getDataList(1);
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                console.log(this.multipleSelection)
                await this.$api.rentapi.emptyUsingPOST_1({
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