<template>
  <div v-loading.fullscreen="loading">
    <con-head tab="tab">
        <div slot="appendtab" class="tabmenu">
            <router-link to="/rebates/paytreasure" v-if="paytreasure">支付宝账单</router-link>
            <router-link to="/rebates/paytreasureDetailed" v-if="paytreasureDetailed">支付宝账单明细</router-link>
        </div>
        <el-button type="primary" slot="append" :disabled="showBtnT" @click="exportetail">导出</el-button>
        <div slot="preappend">
          <el-row>
            <el-col :span="10">
              <div class="searchselect">
                <span class="inputname">店铺范围：</span>
                <el-select v-model="query2.shopCodeFrom" clearable filterable @change="getListDetail" placeholder="请输入店铺号" class="dialogselect">
                  <el-option
                    v-for="item in selects.shops"
                    :key="item.shopCode"
                    :label="item.shopCode"
                    :value="item.shopCode">
                  </el-option>
                </el-select>
                <span>~</span>
                <el-select v-model="query2.shopCodeTo" clearable filterable @change="getListDetail" placeholder="请输入店铺号" class="dialogselect">
                  <el-option
                    v-for="item in selects.shops"
                    :key="item.shopCode"
                    :label="item.shopCode"
                    :value="item.shopCode">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12" :offset="2">
              <div class="searchinput">
                <span class="inputname inputnameauto">交易时间：</span>
                <el-date-picker
                  @change="getListDetail"
                  v-model="query2.time"
                  type="daterange"
                  value-format="yyyy-MM-dd"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="11">
              <div class="texttitle">
                <span class="inputname">方式：</span>
                <div class="line-nav">
                  <a href="javascript:void(0)" 
                    v-for="method in selects.methods" 
                    :key="method.id" 
                    :class="{active:method.isStatus}" 
                    @click="methodsHandler(method)">{{method.label}}</a>
                </div>
              </div>
            </el-col>
        </el-row>
      </div>
    </con-head>
    <con-head>
        <div class="mainbox" style="padding: 15px 10px;">
            <el-row :gutter="20">
                <erp-table :header="header2" :content="content2" @currentPage="getDetailCurrentPage" @pageSize="getDetailpageSize">
                  <tr class="last_tr" slot="lastTr" v-if="this.detail2.hasDetail === 200 && content2.list.length > 0">
                    <td colspan="5"><div class="cell"><span>合计</span></div></td>           
                    <td><div class="cell"><span>{{detail2.paymentAmount}}</span></div></td>
                    <td><div class="cell"><span>{{detail2.fee}}</span></div></td>
                    <td><div class="cell"><span>{{detail2.feeMarket}}</span></div></td>
                    <td><div class="cell"><span>{{detail2.feeTotal}}</span></div></td>
                    <td><div class="cell"><span>{{detail2.refundAmount}}</span></div></td>
                    <td><div class="cell"><span></span></div></td>
                    <td><div class="cell"><span></span></div></td>
                  </tr> 
                </erp-table>
              </el-row>
        </div>
    </con-head>
  </div>
</template>

<script>
import { $message } from "../../utils/notice";
import erpTable from "../../components/Table";
import ConHead from '../../components/ConHead'
import { reExport } from "@/utils";
import { saleTQueryShop } from "@/utils/rest/financeAPI";

export default {
  name: "account-group",
  components: {
    erpTable,
    ConHead
  },
  data() {
    return {
      header2: [
        {
          label: "交易日期",
          type: "text",
          name: "tradeDate"
        },
        {
          label: "买家账号",
          type: "text",
          name: "buyerAccount"
        },
        {
          label: "店铺号",
          type: "text",
          name: "shopCode"
        },
        {
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "支付类型",
          type: "text",
          name: "payTypeText"
        },
        {
          label: "交易金额",
          type: "fmoney",
          name: "paymentAmount"
        },
        {
          label: "手续费（支付宝）",
          type: "fmoney",
          name: "fee"
        },
        {
          label: "手续费（商场）",
          type: "fmoney",
          name: "feeMarket"
        },
        {
          label: "手续费（合计）",
          type: "fmoney",
          name: "feeTotal"
        },
        {
          label: "租户返款",
          name: "refundAmount",
          type: "fmoney",
          // filter: "yyyy-MM-dd hh:mm:ss.S"
        },
        {
          label: "流水号",
          type: "text",
          name: "serialNum"
        },
        {
          label: "交易方式",
          type: "text",
          name: "tradeTypeText"
        }
      ],
      content2: [],
      detail2: {
        hasDetail: ''
      },
      selects: {
        shops: [],
        cards: [
          {
            isStatus: true,
            label: "全部",
            id: ""
          },
          {
            isStatus: false,
            label: "卡内",
            id: 0
          },
          {
            isStatus: false,
            label: "卡外",
            id: 1
          }
        ],
        methods: [
          {
            isStatus: true,
            label: "全部",
            id: ""
          },
          {
            isStatus: false,
            label: "销售",
            id: 0
          },
          {
            isStatus: false,
            label: "退款",
            id: 1
          }
        ]
      },
      query2: {
        channel: 1
      },
      showBtnT: true,
      loading: false,
    };
  },
  mounted() {},
  computed:{
    paytreasure(){
        return this.$root.menus.indexOf('/rebates/paytreasure') >= 0;
    },
    paytreasureDetailed(){
        return this.$root.menus.indexOf('/rebates/paytreasureDetailed') >= 0;
    }
  },
  methods: {
    exportetail() {
      reExport(this, 'showBtnT', true);
      let params = {
            pageNum: this.query2.pageNum,
            pageSize: this.query2.pageSize,
            channel: 1,
            shopCodeFrom: this.query2.shopCodeFrom,
            shopCodeTo: this.query2.shopCodeTo,
            tradeDateFrom: this.query2.tradeDateFrom,
            tradeDateTo: this.query2.tradeDateTo,
            tradeType: this.query2.tradeType
        }
        if(this.content2.list.length>0){
            this.$api.refundapi.detailToExcelUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }
    },
    getDetailCurrentPage(pageNum) {
      this.query2.pageNum = pageNum;
      this.getListDetail();
    },
    getDetailpageSize(pageSize) {
      this.query2.pageSize = pageSize;
      this.getListDetail();
    },
    statusHandler(status) {
      this.selects.cards.forEach(function(obj) {
        obj.isStatus = false;
      });
      status.isStatus = !status.isStatus;
      this.query2.cardType = status.id;
      this.getListDetail();
    },
    methodsHandler(method) {
      this.selects.methods.forEach(function(obj) {
        obj.isStatus = false;
      });
      method.isStatus = !method.isStatus;
      this.query2.tradeType = method.id;
      this.getListDetail();
    },
    // 明细列表
    async getListDetail(page={}) {
      this.query2.tradeDateFrom = this.query2.time ? this.query2.time[0]: '';
      this.query2.tradeDateTo = this.query2.time ? this.query2.time[1]: '';
      if(!this.query2.tradeDateFrom) {
          this.$message.info('请选择时间范围!');
          this.content2.list = [];
          this.detail2 = {};
          return;
      } 
      if(this.query2.shopCodeTo && !this.query2.shopCodeFrom) {
          this.$message.info('请选择店铺开始范围!');
          return;
      }
      if(this.query2.shopCodeFrom && !this.query2.shopCodeTo) {
          this.$message.info('请选择店铺结束范围!');
          return;
      }
      this.loading = true;
       await this.$api.refundapi.getDetailListForPageUsingGET(this.query2).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.content2 = returnObj.data.data;
          if(this.content2.list.length > 0){
              this.showBtnT = false;
          }else{
              this.showBtnT = true;
          }
          if (returnObj.data.data.isLastPage) {
            this.$api.refundapi.billDetailTotalUsingGET(this.query2).then(returnObj => {
              if (returnObj.data.status === 200) {             
                this.detail2 = returnObj.data.data;
                this.detail2.hasDetail = 200;
              }
            });
          } else {            
            this.detail2.hasDetail = '';
          }
          this.loading = false;
        }else{
            this.loading = false;
            this.$message.error(res.data.msg);
        }
      }).catch(res=>{
            this.loading = false;
            this.$message.error(res.data.msg);
        });;
    },

    async init() {
      let [shop] = await Promise.all([
        saleTQueryShop()
      ]);
      this.selects.shops = shop.data || [];
    }
  },
  created() {
    this.init();
    this.content2.list = [];
  }
};
</script>

<style lang="scss" scoped>
.line-nav {
  flex: 1;
  line-height: 30px;
}
.line-nav a {
  margin: 0 10px;
  color: #666;
  font-weight: bold;
  height: 30px;
  text-decoration: none;
  display: inline-block;
}
.line-nav a.active {
  color: #457fcf;
  border-bottom: 2px solid #457fcf;
}
</style>