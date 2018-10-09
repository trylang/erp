<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/brand" v-if="brand">品牌管理</router-link>
                <router-link to="/inner/brandaudit" v-if="brandaudit">品牌审核</router-link>
            </div>
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
                loading: false,
                dataList:[],
                searchText:'',
                searchName:'',
                formatsValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'brandCode', label: '编码'},
                    { prop: 'brandName', label: '名称' },
                    { prop: 'busNames', label: '一级业态' },
                    { prop: 'busSecondName', label: '二级业态' },
                    { prop: 'businessIdThreeLevel', label: '三级业态' },
                    { prop: 'investSoursStatus', label: '状态' },
                    { prop: 'countryName', label: '国别' },
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
                    id:2
                }],
                formatsOptions:[],
                countryOptions:[],
                multipleSelection:[]
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
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.auditListpgUsingGET({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    brandCode:this.searchText,
                    brandName:this.searchName,
                    status:this.statusId,
                    businessId:this.formatsValue
                }).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.countryName = item.country.countryName
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
            async getCountryList(){
                await this.$api.rentapi.listUsingGET_2().then(res=>{
                    this.countryOptions = res.data.data;
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
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                await this.$api.rentapi.emptyUsingPOST({
                    ids:this.multipleSelection
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.getDataList(1,this.pageSize);
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