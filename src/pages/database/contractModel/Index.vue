<template>
    <div v-loading.fullscreen="loading">
        <con-head title="合同统计">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchinput searchdatepicker">
                        <span class="inputname inputnameauto">合同时间：</span>
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
                <!--<el-col :span="2"><span class="erpsearchbtn" @click="pageHandler(1,pageSize)">查询</span></el-col>-->
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
                status: '',
                pageNum: Number(this.$route.params.pageId)||1,
                // pageSize: 20,
                total: 0,
                exportPageSize: 0,
                showBtn: true,
                selects: {
                    status: [],
                },
                columnData:[
                    { prop: 'merchantCode', label: '商户号'},
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'propertyType', label: '物业性质' },
                    { prop: 'brandName', label: '品牌' },
                    { prop: 'status', label: '合同状态' },
                    { prop: 'businessName', label: '业态' },
                    { prop: 'floorCode', label: '楼层' },
                    { prop: 'areanum', label: '签约面积(m²)' },
                    { prop: 'showStartAndEndDate', label: '合同有效期' },
                    { prop: 'berth', label: '单元' }
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
            this.$api.reportapi.listUsingGET_4({flag: 1}).then(res=>{//物业性质 1
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
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                // this.exportPageSize = pageSize;
                if(this.startDateData && this.endDateData){
                    this.loading = true;
                    let params = {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        propertyNature: this.status,
                        startDate: this.startDateData,
                        endDate: this.endDateData
                    }
                    this.$api.reportapi.signUsingPOST({request: params}).then(res=>{
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
            exportHandler(){
                reExport(this, 'showBtn', true); // true是不能点的值
                let params = {
                    // pageNum: this.pageNum,
                    // pageSize: this.exportPageSize,
                    propertyNature: this.status,
                    startDate: this.startDateData,
                    endDate: this.endDateData
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.poiContractUsingPOST({request: params}).then(res=>{
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