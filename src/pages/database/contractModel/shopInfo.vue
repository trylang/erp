<template>
    <div v-loading.fullscreen="loading">
        <con-head title="店铺租约信息">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="11">
                    <div class="searchinput searchdatepicker">
                        <span class="inputname inputnameauto">合同有效期：</span>
                        <el-date-picker
                                v-model="startDateData"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                        ~
                        <el-date-picker
                                v-model="endDateData"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="9" :offset="2">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">合同：</span>
                        <el-select v-model="contractId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
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
        data(){
            return{
                loading: false,
                datalist:[],
                searchData: [],
                contractId: '',
                contractOptions: [],
                pageNum: Number(this.$route.params.pageId)||1,
                // pageSize: 20,
                total: 0,
                showBtn: true,
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
                startDateData:'',
                endDateData:'',
                startpickerOptions:{
                    disabledDate: (time) => {
                        if (this.endDateData != '' || this.endDateData != null) {
                            let oneYear = 366 * 24 * 3600 * 1000;
                            let oneYearNum = (new Date(this.endDateData)).getTime() - oneYear;
                            return time.getTime() < oneYearNum;
                        }
                    }
                },
                endpickerOptions:{
                    disabledDate: (time) => {
                        if (this.startDateData != '' || this.startDateData != null) {
                            let oneYear = 366 * 24 * 3600 * 1000;
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
            this.$api.reportapi.selectUsingGET().then(res=>{//合同
                this.contractOptions = res.data.data;
            })
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
                        startDate: this.startDateData,
                        endDate: this.endDateData,
                        contractId: this.contractId
                    }
                    this.$api.reportapi.shopUsingPOST({request: params}).then(res=>{
                        if(res.data.status === 200){
                            // this.datalist = res.data.data.list.map(item=>{
                            //   item.showStartAndEndDate=item.showStartAndEndDate.replace(/\//g,'-')
                            //   return item
                            // });
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
                    this.datalist = [];
                    this.total = 0;
                }
            },
            exportHandler(){
                reExport(this, 'showBtn', true); 
                let params = {
                    // pageNum: this.pageNum,
                    // pageSize: this.$refs.page.pageSize,
                    contractId: this.contractId,
                    startDate: this.startDateData,
                    endDate: this.endDateData
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.poiUsingPOST({request: params}).then(res=>{
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
