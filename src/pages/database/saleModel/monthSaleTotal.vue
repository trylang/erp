<template>
    <con-head title="月销售汇总" v-loading.fullscreen="loading">
        <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
        <el-row slot="preappend">
            <el-col :span="9">
                <div class="searchinput">
                    <span class="inputname inputnameauto">月份</span>
                    <el-date-picker
                            value-format="yyyy-MM"
                            @change="getList()"
                            v-model="query.yearAndMonth"
                            type="month"
                            :picker-options="pickerOptions"
                            placeholder="选择月份">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="9" :offset="6">
                <div class="searchselect">
                    <span class="inputname inputnameauto">楼层</span>
                    <el-select v-model="query.floorId" @change="getList()" filterable clearable placeholder="请选择"
                               class="dialogselect">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                                v-for="item in selects.floors"
                                :key="item.id"
                                :value="item.id"
                                :label="item.floorName">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
        <el-row slot="preappend">
            <el-col :span="9">
                <div class="searchselect">
                    <span class="inputname inputnameauto">店铺</span>
                    <el-select v-model="query.shopCode" @change="getList()" filterable clearable placeholder="请选择"
                               class="dialogselect">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                                v-for="item in selects.shops"
                                :key="item.id"
                                :label="item.name"
                                :value="item.shopCode">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="9" :offset="6">
                <div class="texttitle">
                    <span class="inputname">类型：</span>
                    <div class="line-nav">
                        <a href="javascript:void(0)" v-for="statuslist in statusData" :key="statuslist.id" :class="{active:statuslist.isStatus}" @click="statusHandler(statuslist)">{{statuslist.name}}</a>
                    </div>
                </div>
            </el-col>
        </el-row>
        <erp-table :header="header.concat(everyDaymounts)" :content="content" ifScroll="true" @currentPage="getCurrentPage"
                   @pageSize="getpageSize">
            <tr class="last_tr" slot="lastTr" v-if="totalShow && content.list.length > 0">
                <td colspan="7"><div class="cell"><span>合计</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.totalAmount) : detail.totalAmount}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay1) : detail.amountDay1}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay2) : detail.amountDay2}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay3) : detail.amountDay3}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay4) : detail.amountDay4}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay5) : detail.amountDay5}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay6) : detail.amountDay6}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay7) : detail.amountDay7}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay8) : detail.amountDay8}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay9) : detail.amountDay9}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay10) : detail.amountDay10}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay11) : detail.amountDay11}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay12) : detail.amountDay12}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay13) : detail.amountDay13}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay14) : detail.amountDay14}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay15) : detail.amountDay15}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay16) : detail.amountDay16}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay17) : detail.amountDay17}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay18) : detail.amountDay18}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay19) : detail.amountDay19}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay20) : detail.amountDay20}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay21) : detail.amountDay21}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay22) : detail.amountDay22}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay23) : detail.amountDay23}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay24) : detail.amountDay24}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay25) : detail.amountDay25}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay26) : detail.amountDay26}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay27) : detail.amountDay27}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay28) : detail.amountDay28}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay29) : detail.amountDay29}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay30) : detail.amountDay30}}</span></div></td>
                <td><div class="cell"><span>{{query.penOrAmon == 1 ? fmoney(detail.amountDay31) : detail.amountDay31}}</span></div></td>
            </tr>
        </erp-table>
    </con-head>

</template>

<script>
    import {$message} from "../../../utils/notice";
    import conHead from "../../../components/ConHead";
    import erpTable from "../../../components/Table";
    import {saleQueryShop, queryFloor} from "@/utils/rest/financeAPI";
    import {reExport} from '@/utils/'
    import {fmoney} from '@/utils/filter'
    export default {
        name: "account-group",
        components: {
            conHead,
            erpTable,
        },
        data() {
            return {
                everyDaymounts: [{
                        label: "1日",
                        type: "fmoney",
                        name: "amountDay1"
                    },
                    {
                        label: "2日",
                        type: "fmoney",
                        name: "amountDay2"
                    },
                    {
                        label: "3日",
                        type: "fmoney",
                        name: "amountDay3"
                    },
                    {
                        label: "4日",
                        type: "fmoney",
                        name: "amountDay4"
                    },
                    {
                        label: "5日",
                        type: "fmoney",
                        name: "amountDay5"
                    },
                    {
                        label: "6日",
                        type: "fmoney",
                        name: "amountDay6"
                    },
                    {
                        label: "7日",
                        type: "fmoney",
                        name: "amountDay7"
                    },
                    {
                        label: "8日",
                        type: "fmoney",
                        name: "amountDay8"
                    },
                    {
                        label: "9日",
                        type: "fmoney",
                        name: "amountDay9"
                    },
                    {
                        label: "10日",
                        type: "fmoney",
                        name: "amountDay10"
                    },
                    {
                        label: "11日",
                        type: "fmoney",
                        name: "amountDay11"
                    },
                    {
                        label: "12日",
                        type: "fmoney",
                        name: "amountDay12"
                    },
                    {
                        label: "13日",
                        type: "fmoney",
                        name: "amountDay13"
                    },
                    {
                        label: "14日",
                        type: "fmoney",
                        name: "amountDay14"
                    },
                    {
                        label: "15日",
                        type: "fmoney",
                        name: "amountDay15"
                    },
                    {
                        label: "16日",
                        type: "fmoney",
                        name: "amountDay16"
                    },
                    {
                        label: "17日",
                        type: "fmoney",
                        name: "amountDay17"
                    },
                    {
                        label: "18日",
                        type: "fmoney",
                        name: "amountDay18"
                    },
                    {
                        label: "19日",
                        type: "fmoney",
                        name: "amountDay19"
                    },
                    {
                        label: "20日",
                        type: "fmoney",
                        name: "amountDay20"
                    },
                    {
                        label: "21日",
                        type: "fmoney",
                        name: "amountDay21"
                    },
                    {
                        label: "22日",
                        type: "fmoney",
                        name: "amountDay22"
                    },
                    {
                        label: "23日",
                        type: "fmoney",
                        name: "amountDay23"
                    },
                    {
                        label: "24日",
                        type: "fmoney",
                        name: "amountDay24"
                    },
                    {
                        label: "25日",
                        type: "fmoney",
                        name: "amountDay25"
                    },
                    {
                        label: "26日",
                        type: "fmoney",
                        name: "amountDay26"
                    },
                    {
                        label: "27日",
                        type: "fmoney",
                        name: "amountDay27"
                    },
                    {
                        label: "28日",
                        type: "fmoney",
                        name: "amountDay28"
                    },
                    {
                        label: "29日",
                        type: "fmoney",
                        name: "amountDay29"
                    },
                    {
                        label: "30日",
                        type: "fmoney",
                        name: "amountDay30"
                    },
                    {
                        label: "31日",
                        type: "fmoney",
                        name: "amountDay31"
                    }],
                header: [
                    {
                        label: "楼层",
                        type: "text",
                        name: "floorName"
                    },
                    {
                        label: "店铺号",
                        type: "text",
                        name: "shopCode"
                    },
                    {
                        label: "店铺名称",
                        type: "text",
                        name: "shopName"
                    },
                    {
                        label: "店铺面积",
                        type: "text",
                        name: "rentArea"
                    },
                    {
                        label: "一级业态",
                        type: "text",
                        name: "businessTypeName"
                    },
                    {
                        label: "二级业态",
                        type: "text",
                        name: "businessType2Name"
                    },
                    {
                        label: "三级业态",
                        type: "text",
                        name: "businessType3Name"
                    },
                    {
                        label: "销售额",
                        type: "fmoney",
                        name: "totalAmount"
                    },
                ],
                statusData: [{
                    name: "交易销售",
                    isStatus: true,
                    id: 1
                }, {
                    name: "交易笔数",
                    isStatus: false,
                    id: 2
                }],
                query: {
                    floorId: '',
                    shopCode: '',
                    penOrAmon:1
                },
                content: [],
                selects: {
                    shops: [],
                    floors: []
                },
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now() - 8.64e6
                    }
                },
                detail:'',
                totalShow:true,
                showBtn: true,
                loading: false,
            };
        },
        mounted() {
        },
        methods: {
            fmoney,
            getCurrentPage(pageNum) {
                this.query.pageNum = pageNum;
                this.getList();
            },
            getpageSize(pageSize) {
                this.query.pageSize = pageSize;
                this.getList();
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.query.penOrAmon = status.id;
                if (status.id == 2) {
                    this.header[7] = {
                        label: "总笔数",
                        type: "text",
                        name: "totalAmount"
                    };
                    this.everyDaymounts.forEach(item => item.type = 'text');
                } else {
                    this.header[7] = {
                        label: "销售额",
                        type: "fmoney",
                        name: "totalAmount"
                    };
                    this.everyDaymounts.forEach(item => item.type = 'fmoney');
                }
                
                this.getList();
            },
            async getList(page = {}, callback) {
                if (this.query.yearAndMonth) {
                    this.totalShow = false;
                    this.loading = true;
                    this.$api.reportapi.monthSalesListUsingGET(this.query).then(res => {
                        const data = res.data;
                        if (data.status === 200) {
                            this.content = data.data;
                            if (this.content.list.length > 0) {
                                this.showBtn = false;
                            }
                            if (data.data.isLastPage) {
                                this.$api.reportapi.getMonthSalesSum(this.query).then(returnObj => {
                                    if (returnObj.data.status === 200) {
                                        this.detail = returnObj.data.data;
                                        this.totalShow = true;
                                    }
                                });
                            }else{
                                this.totalShow = false;
                            }
                            if (callback) callback();
                            this.loading = false;
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res => {
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    });
                } else {
                    this.content.list = [];
                }
            },
            exportHandler() {
                let params = {
                    yearAndMonth:this.query.yearAndMonth,
                    floorId: this.query.floorId,
                    shopCode: this.query.shopCode,
                    penOrAmon:this.query.penOrAmon
                };
                if (this.content.list.length > 0) {
                    reExport(this, 'showBtn', true);
                    this.$api.reportapi.exportMmonthSalesListUsingGET(params).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                        }
                    }).catch(res => {
                        this.$message.error(res.data.msg);
                    })
                }
            },
            async init() {
                let [shop, floor] = await Promise.all([saleQueryShop(), queryFloor()]);
                this.selects.shops = shop.data;
                this.selects.floors = floor.data;
                await this.getList();
            }
        },
        computed: {},
        created() {
            this.init();
            this.content.list = [];
        }
    };

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