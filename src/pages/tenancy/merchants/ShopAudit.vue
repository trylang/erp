<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/shop">店铺管理</router-link>
                <router-link to="/inner/shopaudit">店铺审核</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码/名称" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="10" :offset="5">
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
                            <span class="inputname inputnameauto">商户</span>
                            <el-select v-model="merchantValue" placeholder="请选择" class="dialogselect" @change="shopSelect()">
                                <el-option
                                        v-for="item in merchantOptions"
                                        :key="item.id"
                                        :label="item.merchantName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
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
                merchantValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                merchantOptions:[],
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'shopCode', label: '编码'},
                    { prop: 'shopName', label: '名称' },
                    { prop: 'shopBrandNames', label: '经营品牌'},
                    { prop: 'shopMainBrandName', label: '主品牌' },
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopTypeName', label: '数据类型' },
                    { prop: 'floorStr', label: '楼层' },
                    { prop: 'centerCollectingOrNotStr', label: '中央收银' },
                    { prop: 'statusStr', label: '状态'},
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
                    name:"取消",
                    isStatus:false,
                    id: 2
                }],
                multipleSelection:[]
            }
        },
        mounted(){
            this.getMerchantList();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.auditListpgUsingGET_2({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    shopCode:this.searchText,
                    shopName:this.searchText,
                    merchantId:this.shopValue,
                    status:this.statusId
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_12({
                    pageNum:'',
                    pageSize:'',
                    merchantCode:'',
                    merchantName:'',
                    merchantEnglishName:'',
                    merchantType:'',
                    status:''
                }).then(res=>{
                    this.merchantOptions = res.data.data;
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
            shopSelect(){
                this.getDataList(1);
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                console.log(this.multipleSelection)
                await this.$api.rentapi.emptyUsingPOST_2({
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