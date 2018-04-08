<template>
    <div>
        <con-head title="店铺租约信息">
            <el-button type="primary" slot="append" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchinput">
                        <span class="inputname inputnameauto">合同有效期：</span>
                        <el-date-picker
                            v-model="searchData"
                            type="daterange"
                            range-separator="~"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            @change="pageHandler(1)">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="9" :offset="2">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">合同：</span>
                        <el-select v-model="contractId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                            <el-option label="全部" value=""></el-option>
                            <el-option
                                    v-for="item in contracts"
                                    :key="item.id"
                                    :label="item.contractCode"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData"></data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="pageHandler" style="margin-bottom:30px"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        data(){
            return{
                datalist:[],
                searchData: [],
                contractId: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                selects: {
                    status: [
                        {
                            isStatus:true,
                            label: '全部',
                            id: ''
                        }, 
                        {
                            isStatus:false,
                            label: '商铺',
                            id: 0
                        }, 
                        {
                            isStatus:false,
                            label: '场地',
                            id: 1
                        }, 
                        {
                            isStatus:false,
                            label: '广告位',
                            id: 2
                        }, 
                        {
                            isStatus:false,
                            label: '写字楼',
                            id: 3
                        }
                    ],
                },
                columnData:[
                    { prop: 'regionCode', label: '商户号'},
                    { prop: 'regionName', label: '商户名称' },
                    { prop: 'regionEnglishName', label: '店铺号' },
                    { prop: 'pname', label: '店铺名称' },
                    { prop: 'pname', label: '合同号' },
                    { prop: 'pname', label: '品牌' },
                    { prop: 'pname', label: '费用项目' },
                    { prop: 'showUpdateDate', label: '合同有效期' },
                    { prop: 'pname', label: '固租信息' },
                    { prop: 'pname', label: '抽成类型' },
                    { prop: 'pname', label: '抽成比例' }
                ],
                contracts: [{id:1,contractCode:'121223213'}]
            }
        },
        mounted(){

        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    name: this.searchName
                }
                this.$api.systemapi.listUsingGET_6(params).then(res=>{
                    this.datalist = res.data.data.list;
                    this.total = Number(res.data.data.total);
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            statusHandler(status){
                this.selects.status.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.status = status.id;
                this.pageHandler(1);
            },
            exportHandler(){

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