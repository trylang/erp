<template>
    <div>
        <con-head title="商场及写字楼（应收）">
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
                            format="yyyy 年 M 月"
                            value-format="yyyy-M"
                            @change="pageHandler(1)">
                        </el-date-picker>
                        <span style="line-height: 30px;">~</span>
                        <el-date-picker
                            style="padding-left:30px;"
                            v-model="endMonth"
                            type="month"
                            placeholder="选择月"
                            format="yyyy 年 M 月"
                            value-format="yyyy-M"
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
            <!-- <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">费用项目：</span>
                        <el-select v-model="costItemIds" multiple placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                            <el-option
                                v-for="item in costItems"
                                :key="item.id"
                                :label="item.merchantName+'('+item.merchantCode+')'"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row> -->
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
                costItemIds: [],
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
                    { prop: 'years', label: '年度' },
                    { prop: 'months', label: '月份' },
                    { prop: 'settleNumber', label: '结算单号' },
                    { prop: 'costCode', label: '收费项编码' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'shopCode', label: '店铺编码' },
                    { prop: 'merchantCode', label: '商户编码' },
                    { prop: 'settleDate', label: '结算日期' },
                    { prop: 'settleRule', label: '结算规则' },
                    { prop: 'settleCost', label: '结算金额' },
                    { prop: 'notTallageCost', label: '未税金额' },
                    { prop: 'tallageCost', label: '税金' },
                    { prop: 'tallageCode', label: '税码' },
                    { prop: 'costNo', label: '免租单号' },
                    { prop: 'remark', label: '备注' },
                ]
            }
        },
        mounted(){
            // this.$api.rentapi.listUsingGET_14({status: 3}).then(res=>{//物业性质
            //     this.selects.status = res.data.data;
            //     this.selects.status = res.data.data.map(item=>{
            //         return {
            //             name: item.name,
            //             value: item.value,
            //             isStatus: false
            //         }
            //     });
            //     this.selects.status[0].isStatus = true;
            // })
            this.getMerchantList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                console.log(121,this.startMonth)
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    costItemIds: this.costItemIds,
                    propertyType: this.status,
                    startTime: this.startMonth,
                    endTime: this.endMonth,
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
            statusHandler(status){
                this.selects.status.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.status = status.value;
                this.pageHandler(1);
            },
            getMerchantList(){
                this.$api.rentapi.listUsingGET_12().then(res=>{//费用项目
                    this.costItems = res.data.data;
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