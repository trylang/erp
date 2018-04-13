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
                                    v-for="item in contractOptions"
                                    :key="item.id"
                                    :label="item.show"
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
                contractOptions: [],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                columnData:[
                    { prop: 'merchantCode', label: '商户号'},
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'brandName', label: '品牌' },
                    { prop: 'costItem', label: '费用项目' },
                    { prop: 'showStartAndEndDate', label: '阶段时间' },
                    { prop: 'fixedInfo', label: '固租信息' },
                    { prop: 'extractType', label: '抽成类型' },
                    { prop: 'extractPrpo', label: '抽成比例' }
                ],
            }
        },
        mounted(){
            this.$api.reportapi.selectUsingGET().then(res=>{//合同
                this.contractOptions = res.data.data;
            })
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    startDate: this.searchData[0],
                    endDate: this.searchData[1],
                    contractId: this.contractId
                }
                if(this.searchData.length > 0 && this.contractId){
                    this.$api.reportapi.shopUsingPOST({request: params}).then(res=>{
                        if(res.data.status === 200){
                            this.datalist = res.data.data.list;
                            this.total = Number(res.data.data.total);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    })
                }
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