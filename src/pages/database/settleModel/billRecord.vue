<template>
    <div v-loading.fullscreen="loading">
        <con-head title="账单调整维护记录表">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchinput">
                        <span class="inputname inputnameauto" style="width: 100px;">日期：</span>
                        <el-date-picker
                                v-model="startDateData"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="startpickerOptions"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                        ~
                        <el-date-picker
                                v-model="endDateData"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="endpickerOptions"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="9" :offset="2">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">合同：</span>
                        <el-select v-model="contractCode" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
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
            <rt-page ref="page" :cur="pageNum" :total="total" :pageSize="20" @change="pageHandler" style="margin-bottom:30px"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    import { reExport } from '@/utils/'
    export default {
        name: "index",
        data(){
            return{
                loading: false,
                dialogVisible:false,
                contractCode: '',
                searchData: [],
                contractOptions: [],
                datalist:[],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                showBtn: true,
                columnData:[
                    { prop: 'adjustNumber', label: '调整单号'},
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'settleNumber', label: '结算单号' },
                    { prop: 'settleGroupName', label: '结算组别' },
                    { prop: 'costItemName', label: '费用项目' },
                    { prop: 'adjustAmount', label: '调整金额', format: 'fmoney' },
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'adjustDate', label: '操作时间' }
                ],
                startDateData:'',
                endDateData:'',
                startpickerOptions:{
                    disabledDate: (time) => {
                        if (this.endDateData != '' || this.endDateData != null) {
                            let oneYear = 365 * 24 * 3600 * 1000;
                            let oneYearNum = (new Date(this.endDateData)).getTime() - oneYear;
                            return time.getTime() < oneYearNum;
                        }
                    }
                },
                endpickerOptions:{
                    disabledDate: (time) => {
                        if (this.startDateData != '' || this.startDateData != null) {
                            let oneYear = 365 * 24 * 3600 * 1000;
                            let oneYearNum = (new Date(this.startDateData)).getTime() + oneYear;
                            if(oneYearNum > oneYear) {
                                return time.getTime() > oneYearNum;
                            }
                        }
                    }
                }
            }
        },
        mounted(){
            this.getContractList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                if(this.startDateData && this.endDateData){
                    this.loading = true;
                    let params = {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        startTime: this.startDateData,
                        endTime: this.endDateData,
                        contractCode: this.contractCode,
                    }
                    this.$api.reportapi.listUsingGET(params).then(res=>{
                        if(res.data.status === 200){
                            this.datalist = res.data.data.list;
                            if(this.datalist.length>0){
                                this.showBtn = false;
                            }
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
                }else{
                    this.datalist = [];
                    this.total = 0;
                }
            },
            getContractList(){
                this.$api.reportapi.selectAllUsingGET().then(res=>{//合同
                    this.contractOptions = res.data.data;
                })
            },
            exportHandler(){
                reExport(this, 'showBtn', true); 
                let params = {
                    // pageNum: this.pageNum,
                    // pageSize: this.$refs.page.pageSize,
                    startTime: this.startDateData,
                    endTime: this.endDateData,
                    contractCode: this.contractCode
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.exportAdjustMaintainRecordUsingGET(params).then(res=>{
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    })
                }
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