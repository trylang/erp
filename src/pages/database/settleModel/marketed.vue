<template>
    <div>
        <con-head title="商场及写字楼（已收）">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchinput">
                        <span class="inputname inputnameauto" style="width: 100px;">日期：</span>
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
                <el-col :span="9">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">费用项目：</span>
                        <el-select v-model="costItemId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
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
                costItemId: '',
                datalist:[],
                costItems: [],
                status: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
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
                    { prop: 'units', label: '单位'},
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
                    { prop: 'totalAmount', label: '收款金额' },
                    { prop: 'noRate', label: '未税金额' },
                    { prop: 'rateMony', label: '税金' },
                    { prop: 'rateCode', label: '税码' },
                ]
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
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    id: this.costItemId,
                    propertyNature: this.status,
                    startDate: this.startMonth+'-01',
                    endDate: this.endMonth+'-01'
                }
                if(this.startMonth && this.endMonth){
                    this.$api.reportapi.queryAlreadyUsingPOST({request: params}).then(res=>{
                        if(res.data.status === 200){
                            this.datalist = res.data.data.list;
                            this.total = Number(res.data.data.total);
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
                this.getMerchantList(status.value);
            },
            getMerchantList(status){
                this.$api.reportapi.getCostItemUsingGET({flag: status}).then(res=>{//根据物业性质查询 费用项目
                    this.costItems = res.data.data;
                })
            },
            exportHandler(){
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.$refs.page.pageSize,
                    id: this.costItemId,
                    propertyNature: this.status,
                    startDate: this.startMonth+'-01',
                    endDate: this.endMonth+'-01'
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.exportPayTypeInfoForAlreadyUsingPOST({request: params}).then(res=>{
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