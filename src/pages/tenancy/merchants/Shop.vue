<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/shop" v-if="shop">店铺管理</router-link>
                <router-link to="/inner/shopaudit" v-if="shopaudit">店铺审核</router-link>
            </div>
            <router-link to="/inner/addshop/0" class="el-button el-icon-plus" slot="append" @click.native="addShopStatus()"><span>添加</span></router-link>
            <el-button type="primary" slot="append" @click="exportHandler()">导出</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺号/名称" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
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
                            <el-select v-model="merchantValue" placeholder="请选择" filterable clearable class="dialogselect" @change="merchantSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in merchantOptions"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
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
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <router-link :to="'/inner/addshop/'+scope.row.id" class="btn_text" v-if="scope.row.status != 5" @click.native="getShopStatus(scope.row.status)">编辑</router-link>
                            <button class="btn_text" @click="deleteListData(scope.row.id)" v-if="scope.row.status == 0 || scope.row.status == 2">删除</button>
                            <button class="btn_text" @click="cancelListData(scope.row.id)" v-if="scope.row.status == 1">取消</button>
                            <button class="btn_text" v-if="scope.row.status == 6">失效</button>
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
        name: "index",
        data(){
            return{
                loading: false,
                dataList:[],
                searchText:'',
                merchantValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                merchantOptions:[],
                columnData:[
                    { prop: 'shopCode', label: '店铺号'},
                    { prop: 'shopName', label: '名称' },
                    { prop: 'shopMainBrandName', label: '主品牌' },
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopTypeName', label: '数据类型' },
                    { prop: 'floorStr', label: '楼层' },
                    { prop: 'centerCollectingOrNotStr', label: '中央收银' },
                    { prop: 'shopRegionName', label: '店铺区域' },
                    { prop: 'rentArea', label: '店铺面积(㎡)' },
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
                }]
            }
        },
        mounted(){
            this.getMerchantList();
        },
        computed:{
            shop(){
                return this.$root.menus.indexOf('/inner/shop') >= 0;
            },
            shopaudit(){
                return this.$root.menus.indexOf('/inner/shopaudit') >= 0;
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
            addShopStatus(){
                localStorage.setItem('shopStatusNum','')
            },
            getShopStatus(statusNum){
                localStorage.setItem('shopStatusNum',statusNum)
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.listpgUsingGET_5({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    shopCode:this.searchText,
                    shopName:this.searchText,
                    merchantId:this.merchantValue,
                    status:this.statusId
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
            exportHandler() {
                if (this.dataList.length > 0) {
                    this.loading = true;
                    this.$api.rentapi.exportShopToExcel({
                        shopCode:this.searchText,
                        shopName:this.searchText,
                        merchantId:this.merchantValue,
                        status:this.statusId
                    }).then(res => {
                        this.loading = false;
                        let eleLink = document.createElement('a');
                        eleLink.href = res.data.data;
                        eleLink.target = '_new';
                        eleLink.click();
                    })
                }
            },
            async getMerchantList(){
                await this.$api.rentapi.doweListUsingGET({
                    type:4
                }).then(res=>{
                    this.merchantOptions = res.data.data;
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
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                })
            },
            async cancelListData(id) {
                this.$confirm('您确定继续当前操作？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.updateUsingPUT_10({
                        id:id,
                        status: 2
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
            merchantSelect(){
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