<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/intention">合同管理</router-link>
                <router-link to="/inner/intentionaudit">合同确认</router-link>
            </div>
            <router-link class="el-button" icon="el-icon-plus" slot="append" to="/inner/addcontract/0">录入</router-link>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入合同号" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">商户</span>
                            <el-select v-model="merchantValue" placeholder="请选择" class="dialogselect" @change="merchantSelect()">
                                <el-option label="全部" value=""></el-option>
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
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">品牌</span>
                            <el-select v-model="brandValue" placeholder="请选择" class="dialogselect" @change="brandSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in brandOptions"
                                        :key="item.id"
                                        :label="item.brandName"
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
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <router-link :to="'/inner/addcontract/'+scope.row.id" class="btn_text" @click="activeNameSwitch()" v-if="scope.row.status == 10 || scope.row.status == 20">编辑</router-link>
                            <button class="btn_text" v-if="scope.row.status == 10 || scope.row.status == 20" @click="deleteContract(scope.row.id)">删除</button>
                            <button class="btn_text" v-if="scope.row.status == 30" @click="cancelContract(scope.row.id)">取消</button>
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
                dataList:[],
                searchText:'',
                merchantValue:'',
                brandValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                merchantOptions:[],
                brandOptions:[],
                statusData:[{
                    name:"全部",
                    isStatus:true,
                    id:''
                },{
                    name:"新增",
                    isStatus:false,
                    id:10
                },{
                    name:"已确认",
                    isStatus:false,
                    id:30
                },{
                    name:"取消",
                    isStatus:false,
                    id:20
                }],
                columnData:[
                    { prop: 'contractCode', label: '合同号',link:'/inner/indexinfo/0',param:'id'},
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'brandName', label: '经营品牌' },
                    { prop: 'propertyType', label: '物业性质' },
                    { prop: 'signDate', label: '签约日期' },
                    { prop: 'validDate', label: '合同有效期' },
                    { prop: 'statusText', label: '状态' }
                ]
            }
        },
        mounted(){
            this.getMerchantList();
            this.getBrandList();
            this.activeNameSwitch();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            activeNameSwitch(){
                localStorage.setItem('activeName',1)
            },
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.getListForPageUsingGET_1({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    contractCode:this.searchText,
                    merchantId:this.merchantValue,
                    brandId:this.brandValue,
                    status:this.statusId
                }).then(res=>{
                    res.data.data.list.forEach(item => {
                        item.validDate = item.validStartDate + '~' + item.validEndDate;
                    }); 
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_12({
                    status:1
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
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.id;
                this.getDataList(1);
            },
            merchantSelect(){
                this.getDataList(1);
            },
            brandSelect(){
                this.getDataList(1);
            },
            async deleteContract(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.delUsingPUT_1({
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
            async cancelContract(id){
                this.$confirm('是否取消该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.cancelUsingPUT_1({
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
