<template>
    <div v-loading.fullscreen="loading">
        <con-head title="商场及写字楼（已收）">
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
                <el-col :span="11" :offset="2">
                    <div class="searchinput searchdatepicker">
                        <span class="inputname inputnameauto">收款日期：</span>
                        <el-date-picker
                                v-model="receiptStartDate"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                        ~
                        <el-date-picker
                                v-model="receiptEndDate"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row slot="preappend">
                <el-col :span="10">
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
                <el-col :span="11" :offset="2">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">费用项目：</span>
                        <el-select v-model="costItemId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
                            <el-option label="全部" value=""></el-option>
                            <el-option
                                v-for="item in costItems"
                                :key="item.id"
                                :label="item.name"
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
                receiptStartDate:'',
                receiptEndDate:'',
                lastDay: '',
                costItemId: '',
                datalist:[],
                costItems: [],
                status: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                showBtn: true,
                selects:{
                    status:[
                        {
                            isStatus:true,
                            name: '全部',
                            value: 0
                        }, 
                        {
                            isStatus:false,
                            name: '商铺',
                            value: 1
                        },
                        {
                            isStatus:false,
                            name: '写字楼',
                            value: 4
                        }
                    ]
                },
                columnData:[
                    { prop: 'marketCode', label: '单位'},
                    { prop: 'year', label: '年度' },
                    { prop: 'month', label: '月份' },
                    { prop: 'settleNumber', label: '结算单号' },
                    { prop: 'noNumber', label: '预收款单号' },
                    { prop: 'deail', label: '核销单号' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'shopCode', label: '店铺编码' },
                    { prop: 'merchantCode', label: '商户编码' },
                    { prop: 'costItemCode', label: '收费项编码' },
                    { prop: 'showUpdateTime', label: '收款日期' },
                    { prop: 'payType', label: '收款方式' },
                    { prop: 'settleGroupCode', label: '结算规则' },
                    { prop: 'totalAmount', label: '收款金额', format: 'fmoney' },
                    { prop: 'noRate', label: '未税金额', format: 'fmoney' },
                    { prop: 'rateMony', label: '税金', format: 'fmoney' },
                    { prop: 'rateCode', label: '税码' },
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
            this.$api.reportapi.listUsingGET_4({flag: 3}).then(res=>{//物业性质
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
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                if(this.startMonth && this.endMonth){
                    //计算月份最后一天
                    let endMonth = this.endMonth.split('-');
                    let new_year = endMonth[0];
                    let new_month = endMonth[1]++;
                    if(endMonth[1]>12){
                        new_month -=12;    //月份减
                        new_year++;      //年份增
                    }
                    let new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天
                    this.lastDay = new Date(new_date.getTime()-1000*60*60*24).getDate();//获取当月最后一天日期
                    this.loading = true;
                    let params = {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        id: this.costItemId,
                        propertyNature: this.status,
                        startDate: this.startMonth+'-01',
                        endDate: this.endMonth+'-'+this.lastDay,
                        receiptStartDate:this.receiptStartDate,
                        receiptEndDate:this.receiptEndDate
                    }
                    this.$api.reportapi.queryAlreadyUsingPOST({query : params}).then(res=>{
                        if(res.data.status === 200){
                            this.loading = false;
                            this.datalist = res.data.data.list;
                            if(this.datalist.length>0){
                                this.showBtn = false;
                            }
                            this.total = Number(res.data.data.total);
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                        this.$message.error(res.data.msg);
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
                this.getMerchantList(status.value);
            },
            getMerchantList(status){
                this.$api.reportapi.getCostItemUsingGET({flag: status}).then(res=>{//根据物业性质查询 费用项目
                    this.costItems = res.data.data;
                })
            },
            exportHandler(){
                reExport(this, 'showBtn', true); 
                let params = {
                    // pageNum: this.pageNum,
                    // pageSize: this.$refs.page.pageSize,
                    id: this.costItemId,
                    propertyNature: this.status,
                    startDate: this.startMonth+'-01',
                    endDate: this.endMonth+'-'+this.lastDay,
                    receiptStartDate:this.receiptStartDate,
                    receiptEndDate:this.receiptEndDate
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.exportPayTypeInfoForAlreadyUsingPOST({query: params}).then(res=>{
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