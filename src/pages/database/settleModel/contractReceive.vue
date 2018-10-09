<template>
    <div v-loading.fullscreen="loading">
        <con-head title="合同预收记录">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchinput">
                        <span class="inputname inputnameauto" style="width: 100px;">日期：</span>
                        <el-date-picker
                            v-model="startMonth"
                            type="month"
                            placeholder="选择月"
                            value-format="yyyy-MM"
                            :picker-options="startPickerOptions"
                            @change="pageHandler(1,pageSize)">
                        </el-date-picker>
                        <span style="line-height: 30px;">~</span>
                        <el-date-picker
                            v-model="endMonth"
                            type="month"
                            placeholder="选择月"
                            value-format="yyyy-MM"
                            :picker-options="endPickerOptions"
                            @change="pageHandler(1,pageSize)">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="10" :offset="2">
                    <div class="texttitle">
                        <span class="inputname">物业性质：</span>
                        <div class="line-nav">
                            <a href="javascript:void(0)"
                               v-for="status in selects.status"
                               :key="status.value"
                               :class="{active:status.isStatus}"
                               @click="statusHandler(status)">{{status.name}}
                            </a>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">商户：</span>
                        <el-select v-model="merchantId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
                            <el-option label="全部" value=""></el-option>
                            <el-option
                                    v-for="item in merchantOptions"
                                    :key="item.id"
                                    :label="item.merchantName+'（'+item.merchantCode+'）'"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="10" :offset="2">
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
            <rt-page ref="page" v-show="datalist.length>0" :cur="pageNum" :total="total" :pageSize="20" @change="pageHandler" style="margin-bottom:30px"></rt-page>
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
                startMonth: '',
                endMonth: '',
                merchantId: '',
                contractCode: '',
                datalist:[],
                merchantOptions: [],
                contractOptions: [],
                status: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                showBtn: true,
                selects:{
                    status:[]
                },
                columnData:[
                    { prop: 'marketCode', label: '单位'},
                    { prop: 'receivedYear', label: '年度' },
                    { prop: 'receivedMonth', label: '月份' },
                    { prop: 'receiptNumber', label: '预收单号' },
                    { prop: 'contractCode', label: '合同编码' },
                    { prop: 'shopCode', label: '店铺编码' },
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'merchantCode', label: '商户编码' },
                    { prop: 'receivedDate', label: '收款日期' },
                    { prop: 'receivedAmount', label: '预收金额', format: 'fmoney'}
                ],
                lastData: [
                    { prop: 'totalAmountReceivable', label: '应收合计', format: 'fmoney'}
                ],
                startPickerOptions: {
                    disabledDate: (time) => {
                        if (this.endMonth) {
                            let oneYear = 11 * 30 * 24 * 3600 * 1000;
                            let oneYearNum = (new Date(this.endMonth)).getTime();
                            return time.getTime() < oneYearNum - oneYear || time.getTime() > oneYearNum
                        }
                    }
                },
                endPickerOptions: {
                    disabledDate: (time) => {
                        if (this.startMonth) {
                            let oneYear = 12 * 30 * 24 * 3600 * 1000;
                            let oneYearNum = (new Date(this.startMonth)).getTime();
                            return time.getTime() > oneYearNum + oneYear || time.getTime() < oneYearNum
                        }
                    }
                }
            }
        },
        mounted(){
            this.$api.reportapi.listUsingGET_4({flag: 1}).then(res=>{//物业性质
                this.selects.status = res.data.data;
                this.selects.status = res.data.data.map(item=>{
                    return {
                        name: item.name,
                        value: item.value,
                        isStatus: false
                    }
                });
                this.selects.status[0].isStatus = true;
            })
            this.getMerchantList();
            this.getContractList();
        },
        methods:{
            getSummaries(param) {
                this.$api.reportapi.listSumUsingGET(param).then(res=>{
                    if (res.data.status === 200) {
                        let dataTotal = res.data.data;
                        let data = {
                            contractCode: '合计',
                            salesAmount: dataTotal.salesAmount,
                            totalAmountReceivable: dataTotal.totalAmount
                        };
                        dataTotal.itemList.forEach(item => {
                            data[item.costItemName] = item.publicAmount;
                        });
                        if (JSON.stringify(this.datalist[this.datalist.length -1]).indexOf(data.contractCode) < 0) {
                            this.datalist.push(data);
                        }
                        
                    }
                });
            },
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                if(this.startMonth && this.endMonth){
                    this.loading = true;
                    let params = {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        merchantId: this.merchantId,
                        contractCode: this.contractCode,
                        propertyType: this.status,
                        startDate: this.startMonth,
                        endDate: this.endMonth
                    }
                    this.$api.reportapi.contractReceiveList(params).then(res=>{
                        if(res.data.status === 200){
                            this.total = Number(res.data.data.total);
                            this.datalist = res.data.data.list;
                            if(this.datalist.length>0){
                                this.showBtn = false;
                            }
                            this.loading = false;
                            /*if (res.data.data.isLastPage) {
                                this.getSummaries(params);
                            }*/
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                        //this.$message.error(res.data.msg);
                    })
                }else{
                    if (!this.startMonth && !this.endMonth) {
                        this.$message.info('请先选择开始时间和结束时间');
                    }
                    this.datalist = [];
                    this.total = 0;
                }
            },
            statusHandler(status){
                this.selects.status.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.status = status.value;
                this.pageHandler(1,this.pageSize);
            },
            getMerchantList(){
                this.$api.reportapi.merchantlistUsingGET().then(res=>{//商户结算（已收）里的商户接口
                    this.merchantOptions = res.data.data;
                })
            },
            getContractList(){
                this.$api.reportapi.selectAllUsingGET().then(res=>{//合同
                    this.contractOptions = res.data.data;
                })
            },
            exportHandler(){
                reExport(this, 'showBtn', true);
                let params = {
                    merchantId: this.merchantId,
                    contractCode: this.contractCode,
                    propertyType: this.status,
                    startDate: this.startMonth,
                    endDate: this.endMonth
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.exportContractReceiveList(params).then(res=>{
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