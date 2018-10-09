<template>
    <div v-loading.fullscreen="loading">
        <con-head title="合同面积变更记录">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="11">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入单元号/操作人" v-model.trim="orderCode" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
                <el-col :span="10" :offset="2">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">合同：</span>
                        <el-select v-model="contractId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
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
            <el-row slot="preappend">
                <el-col :span="11">
                    <div class="searchinput searchdatepicker">
                        <span class="inputname inputnameauto">操作时间：</span>
                        <el-date-picker
                                v-model="startDateData"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                :picker-options="startpickerOptions"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
                        ~
                        <el-date-picker
                                v-model="endDateData"
                                type="date"
                                placeholder="选择日期"
                                @change="pageHandler(1,pageSize)"
                                :picker-options="endpickerOptions"
                                value-format="yyyy-MM-dd">
                        </el-date-picker>
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
                //pageSize: 10,
                total: 0,
                showBtn: true,
                columnData:[
                    { prop: 'unitCode', label: '单元号'},
                    { prop: 'shopInfo', label: '店铺信息' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'showFloorBuild', label: '楼宇/楼层' },
                    { prop: 'prevBuildArea', label: '建筑面积（m²）（变更前）', width:140},
                    { prop: 'currentBuildArea', label: '建筑面积（m²）（变更后）', width:140},
                    { prop: 'prevUseArea', label: '使用面积（m²）（变更前）', width:140},
                    { prop: 'currentUseArea', label: '使用面积（m²）（变更后）', width:140},
                    { prop: 'operatorName', label: '操作人' },
                    { prop: 'updateDate', label: '操作时间' }
                ],
                startDateData:'',
                endDateData:'',
                orderCode:'',
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
        watch: {
            orderCode(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
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
                if(this.startDateData && this.endDateData || this.orderCode || this.contractId){
                    this.loading = true;
                    let params = {
                        codeOrName: this.orderCode,
                        contractCode: this.contractId,
                        endDate: this.endDateData,
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        startDate: this.startDateData
                    }
                    this.$api.reportapi.unitChangeQueryList({request: params}).then(res=>{
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
                    codeOrName: this.orderCode,
                    contractCode: this.contractId,
                    endDate: this.endDateData,
                    startDate: this.startDateData
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.unitChangeExportList({request: params}).then(res=>{
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
