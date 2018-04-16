<template>
    <div>
        <con-head title="合同结算统计报表">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchinput">
                        <span class="inputname inputnameauto" style="width: 100px;">结算月：</span>
                        <el-date-picker
                            style="padding-left:30px;"
                            v-model="startMonth"
                            type="month"
                            placeholder="选择月"
                            format="yyyy 年 MM 月"
                            value-format="yyyy-MM"
                            @change="pageHandler(1)">
                        </el-date-picker>
                        <span style="line-height: 30px;">~</span>
                        <el-date-picker
                            style="padding-left:30px;"
                            v-model="endMonth"
                            type="month"
                            placeholder="选择月"
                            format="yyyy 年 MM 月"
                            value-format="yyyy-MM"
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
            <el-row slot="preappend">
                <el-col :span="9">
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
                startMonth: '',
                endMonth: '',
                contractCode: '',
                datalist:[],
                contractOptions: [],
                status: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                selects:{
                    status:[]
                },
                columnData:[
                    { prop: 'contractCode', label: '合同号'},
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'merchantCode', label: '商户号' },
                    { prop: 'merchantName', label: '商户名' },
                    { prop: 'brandName', label: '品牌' },
                    { prop: 'propertyType', label: '物业性质' },
                    { prop: 'settleDate', label: '结算月' },
                    { prop: 'settleNumber', label: '结算单号' },
                    { prop: 'sales', label: '销售额' },
                    { prop: 'totalAmount', label: '应收合计'}
                ],
                afterData: [
                    // {prop: 'posRent', label: 'POS租金'},
                    // {prop: 'fixationRent', label: '固定租金'},
                    // {prop: 'generalizeCost', label: '推广费'},
                    // {prop: 'estateManagementCost', label: '物业管理费'},
                    // {prop: 'telephoneLineCost', label: '电话线路维护费'},
                    // {prop: 'airConditionerAddtimeCost', label: '加时空调费'},
                    // {prop: 'networkPortMaintenanceCost', label: '网络端口维护费'},
                    // {prop: 'posRentDiffCost', label: 'POS租金补差'},
                    // {prop: 'generalizeDiffCost', label: '推广费用补差'},
                    // {prop: 'totalAmount', label: '应收合计'},
                ],
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
            // if(this.afterData.length > 0){
            //     this.columnData = this.columnData.concat(this.afterData);
            // }
            this.getContractList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    contractCode: this.contractCode,
                    propertyType: this.status,
                    startMonth: this.startMonth,
                    endMonth: this.endMonth,
                }
                if(this.startMonth && this.endMonth){
                    this.$api.reportapi.listUsingGET_5(params).then(res=>{
                        if(res.data.status === 200){
                            this.total = Number(res.data.data.total);
                            this.afterData = [];
                            this.columnData = this.columnData.slice(0, 11);
                            if (res.data.data.list.length > 0) {
                                res.data.data.list[0].someList.forEach(item => {
                                    this.afterData.push({
                                        prop: item.costItemName,
                                        label: item.costItemName,
                                        value: item.publicAmount
                                    });
                                });
                                res.data.data.list.forEach(item => {
                                    this.afterData.forEach(item1 => {
                                        item[item1.prop] = item1.value
                                    });
                                });
                            }
                            this.datalist = res.data.data.list;
                            this.columnData = this.columnData.concat(this.afterData);
                            console.log(1,this.afterData)
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    })
                }
            },
            statusHandler(status){
                this.selects.status.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.status = status.value;
                this.pageHandler(1);
            },
            getContractList(){
                this.$api.reportapi.selectUsingGET().then(res=>{//合同
                    this.contractOptions = res.data.data;
                })
            },
            exportHandler(){
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.$refs.page.pageSize,
                    contractCode: this.contractCode,
                    propertyType: this.status,
                    startMonth: this.startMonth,
                    endMonth: this.endMonth
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.exportContractSettlementStatisticsUsingGET({params}).then(res=>{
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