<template>
    <div>
        <con-head title="合同统计">
            <el-button type="primary" slot="append" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchinput">
                        <span class="inputname inputnameauto">操作时间：</span>
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
                    <div class="texttitle">
                        <span class="inputname">物业性质：</span>
                        <div class="line-nav">
                            <a href="javascript:void(0)" 
                                v-for="status in selects.status" 
                                :key="status.id" 
                                :class="{active:status.isStatus}" 
                                @click="statusHandler(status)">{{status.label}}
                            </a>
                        </div>
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
                    { prop: 'pname', label: '物业性质' },
                    { prop: 'pname', label: '品牌' },
                    { prop: 'pname', label: '合同状态' },
                    { prop: 'pname', label: '业态' },
                    { prop: 'pname', label: '楼层' },
                    { prop: 'pname', label: '签约面积' },
                    { prop: 'showUpdateDate', label: '合同有效期' },
                    { prop: 'pname', label: '铺位' }
                ]
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