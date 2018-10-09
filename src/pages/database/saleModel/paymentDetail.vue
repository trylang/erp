<template>
  <con-head title="店铺付款方式明细表" v-loading.fullscreen="loading">
    <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchinput searchdatepicker">
          <span class="inputname inputnameauto">销售日期：</span>
            <el-date-picker
                    v-model="query.startDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="startpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            ~
            <el-date-picker
                    v-model="query.endDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="endpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
      </el-col>
			<el-col :span="11" :offset="1">
        <div class="searchselect">
          <span class="inputname inputnameauto">店铺区间：</span>
          <el-select v-model="query.startCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
            <el-option
              v-for="item in selects.shops"
              :key="item.id"
              :label="item.shopCode"
              :value="item.shopCode">
            </el-option>
          </el-select>
          <span>~</span>
          <el-select v-model="query.endCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
            <el-option
              v-for="item in selects.shops"
              :key="item.id"
              :label="item.shopCode"
              :value="item.shopCode">
            </el-option>
          </el-select>
        </div>
      </el-col>
        <el-col :span="2"><span class="erpsearchbtn" @click="getList">查询</span></el-col>
    </el-row>
    <erp-table v-if="header.length>0" :header="header" :content="content" :ifScroll="false" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import { reExport } from '@/utils/'
import { saleQueryShop } from "@/utils/rest/financeAPI";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable
  },
  data() {
    return {
      afterTitles: [
    //     {
    //       label: "内卡",
    //       type: "text",
    //       name: "remark"
				// },
				// {
    //       label: "支付宝",
    //       type: "text",
    //       name: "settleGroupCode"
    //     },
    //     {
    //       label: "微信",
    //       type: "text",
    //       name: "settleGroupName"
    //     },
    //     {
    //       label: "现金",
    //       type: "text",
    //       name: "remark"
    //     },
    //     {
    //       label: "外卖",
    //       type: "text",
    //       name: "remark"
    //     },
    //     {
    //       label: "资和信卡",
    //       type: "text",
    //       name: "remark"
				// },
				// {
    //       label: "U悦买单",
    //       type: "text",
    //       name: "settleGroupCode"
    //     },
    //     {
    //       label: "积分支付",
    //       type: "text",
    //       name: "settleGroupName"
    //     },
    //     {
    //       label: "其他",
    //       type: "text",
    //       name: "remark"
    //     },
    //     {
    //       label: "团购卡",
    //       type: "text",
    //       name: "remark"
    //     },
    //     {
    //       label: "翼支付",
    //       type: "text",
    //       name: "remark"
    //     }
      ],
      header: [{
          label: "日期",
          type: "text",
          name: "orderDate"
        },{
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
          label: "店铺区域",
          type: "text",
          name: "shopRegionName"
        },
        {
          label: "合同类型",
          type: "text",
          name: "contractKindName"
        }, 
        {
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "销售总计",
          type: "fmoney",
          name: "amount"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "dayTradeCount"
        }
        ],
      content: [],
      selects: {
        shops: []
      },
      query: {
          startDateData:'',
          endDateData:''
      },
      showBtn: true,
      loading: false,
        startpickerOptions:{
            disabledDate: (time) => {
                if (this.query.endDateData != '' || this.query.endDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.endDateData)).getTime() - oneYear;
                    return time.getTime() < oneYearNum;
                }
            }
        },
        endpickerOptions:{
            disabledDate: (time) => {
                if (this.query.startDateData != '' || this.query.startDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.startDateData)).getTime() + oneYear;
                    if(oneYearNum > oneYear) {
                        return time.getTime() > oneYearNum;
                    }
                }
            }
        }
    };
  },
  methods: {
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getList();
    },
    async getList(page = {}, callback) {
      let params = {
        startDate: this.query.startDateData ? this.query.startDateData : '',
        endDate: this.query.endDateData ? this.query.endDateData : '',
        startCode: this.query.startCode,
        endCode: this.query.endCode,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      if(params.startDate && params.endDate){
        this.loading = true;
        this.$api.reportapi.shopPayListUsingGET(params).then(returnObj => {
          if (returnObj.data.status === 200) {
            this.$api.reportapi.shopPaymentDetailListUsingGET(params).then(res => {
            const data = res.data;
            if (data.status === 200) {
              this.afterTitles = [];
              this.header = this.header.slice(0, 8);
              if (res.data.data.list.length > 0) {
                  returnObj.data.data.forEach(item => {
                      this.afterTitles.push({
                        label: item.name,
                        type: "fmoney",
                        name: item.name
                      });
                    });

                  function format(data) {
                    data.wayAndAmountList.forEach(item => {
                      data[item.name] = item.amount;
                    });
                    returnObj.data.data.forEach(item => {
                      if (!data[item.name] && data[item.name] != 0) {
                        data[item.name] = 0;
                      }
                    });
                  }

                  res.data.data.list.forEach(item => {
                    format(item);
                  });
              }
              this.content = res.data.data;
              if(this.content.list.length>0){
                  this.showBtn = false;
              }
              this.header = this.header.concat(this.afterTitles);
              if (callback) callback();
              this.loading = false;
            } else {
              this.loading = false;
              this.$message.error(res.data.msg);
            }
            }).catch(res=>{
                this.loading = false;
                this.$message.error(res.data.msg);
            });
          }
        }); 
      }else{
        this.content.list = [];
      }
    },
    exportHandler(){
        reExport(this, 'showBtn', true);
        let params = {
            startDate: this.query.startDateData ? this.query.startDateData : '',
            endDate: this.query.endDateData ? this.query.endDateData : '',
            startCode: this.query.startCode,
            endCode: this.query.endCode,
            // pageNum: this.query.pageNum,
            // pageSize: this.query.pageSize
        };
        if(this.content.list.length>0 && params.startDate && params.endDate){
            this.$api.reportapi.exportShopPaymentDetailListUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }else{
            this.content.list = [];
        }
    },
    async init() {
      this.header = this.header.concat(this.afterTitles);
      let [shop] = await Promise.all([
        saleQueryShop()
      ]);
      this.selects.shops = shop.data || [];
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

</style>