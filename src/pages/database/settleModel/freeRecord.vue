<template>
    <div>
        <con-head title="免租维护记录表">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchinput">
                        <span class="inputname inputnameauto" style="width: 100px;">日期：</span>
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
                        <el-select v-model="contractCode" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                            <el-option label="全部" value=""></el-option>
                            <el-option
                                    v-for="item in contractOptions"
                                    :key="item.id"
                                    :label="item.show"
                                    :value="item.code">
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
        name: "index",
        data(){
            return{
                dialogVisible:false,
                contractCode: '',
                searchData: [],
                contractOptions: [],
                datalist:[],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                columnData:[
                    { prop: 'costNo', label: '免租单号'},
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'settleGroupName', label: '结算组别' },
                    { prop: 'costItemName', label: '费用项目' },
                    { prop: 'sum', label: '免租金额' },
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName   ', label: '店铺名称' },
                    { prop: 'createTime', label: '操作时间' },
                ]
            }
        },
        mounted(){
            this.getContractList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    startTime: this.searchData[0],
                    endTime: this.searchData[1],
                    contractCode: this.contractCode,
                }
                this.$api.systemapi.listUsingGET_6(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            getContractList(){
                this.$api.rentapi.getListForPageUsingGET().then(res=>{//已确认过的合同
                    this.contractOptions = res.data.data;
                })
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

</style>