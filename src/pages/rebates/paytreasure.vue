<template>
  <item-tab :tabs="tabs">
    <el-button slot="buttton_first" type="primary" @click="exportList">导出</el-button>
    <el-button slot="buttton_second" type="primary" @click="exportetail">导出</el-button>
    <div slot="content_first">
      <el-row>
        <el-col :span="11">
          <div class="searchselect">
            <span class="inputname">店铺范围：</span>
            <el-select v-model="query.shopCodeFrom" clearable filterable @change="getetail" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.shopCode"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
            <span>~</span>
            <el-select v-model="query.shopCodeTo" clearable filterable @change="getList" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.shopCode"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12" :offset="1">
          <div class="searchselect">
            <span class="inputname">交易时间：</span>
            <el-date-picker
              @change="getList"
              v-model="query.time"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <erp-table :header="header" :content="content" @currentPage="getListCurrentPage" @pageSize="getListpageSize"></erp-table>
      </el-row>
    </div>
    <div slot="content_second">
      <el-row>
        <el-col :span="10">
          <div class="searchselect">
            <span class="inputname">店铺范围：</span>
            <el-select v-model="query2.shopCodeFrom" clearable filterable @change="getListDetail" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :label="item.merchantName"
                :value="item.id">
              </el-option>
            </el-select>
            <span>~</span>
            <el-select v-model="query2.shopCodeTo" clearable filterable @change="getListDetail" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :label="item.merchantName"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12" :offset="2">
          <div class="searchselect">
            <span class="inputname">交易时间：</span>
            <el-date-picker
              @change="getListDetail"
              v-model="query2.time"
              type="daterange"
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
      <el-row :gutter="20">
        <erp-table :header="header2" :content="content2" @currentPage="getDetailCurrentPage" @pageSize="getDetailpageSize"></erp-table>
      </el-row>
    </div>
  </item-tab>
</template>

<script>
import { $message } from "../../utils/notice";
import erpTable from "../../components/Table";
import itemTab from "../../components/ItemTab";
import { formatTree } from "@/utils";
import { queryShop } from "@/utils/rest/financeAPI";

export default {
  name: "account-group",
  components: {
    erpTable,
    itemTab
  },
  data() {
    return {
      header: [
        {
          label: "店铺号",
          type: "text",
          name: "shopCode",
        },
        {
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "支付类型",
          type: "text",
          name: "payType"
        },
        {
          label: "购买金额",
          type: "text",
          name: "paymentAmout"
        },
        {
          label: "手续费（支付宝）",
          type: "text",
          name: "feeAlipay"
        },
        {
          label: "手续费（商场）",
          type: "text",
          name: "feeMarket"
        },
        {
          label: "手续费（合计）",
          type: "text",
          name: "feeTotal"
        },
        {
          label: "租户返款",
          name: "refundAmount",
          type: "text",
          // filter: "yyyy-MM-dd hh:mm:ss.S"
        }
      ],
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
          name: "payType"
        },
        {
          label: "交易金额",
          type: "text",
          name: "paymentAmout"
        },
        {
          label: "手续费（支付宝）",
          type: "text",
          name: "feeAlipay"
        },
        {
          label: "手续费（商场）",
          type: "text",
          name: "feeMarket"
        },
        {
          label: "手续费（合计）",
          type: "text",
          name: "feeTotal"
        },
        {
          label: "租户返款",
          name: "refundAmount",
          type: "text",
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
          name: "tradeType"
        }
      ],
      content: [],
      content2: [],
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
      query: {},
      query2: {},
      tabs: [
        {
          id: "first",
          label: "支付宝账单"
        },
        {
          id: "second",
          label: "支付宝账单明细"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    exportList() {
      console.log('list');
    },
    exportetail() {
      console.log('detail');
    },
    getListCurrentPage(pageNum) {
      this.getList({ pageNum });
    },
    getListpageSize(pageSize) {
      this.getList({ pageSize });
    },
    getDetailCurrentPage(pageNum) {
      this.getListDetail({ pageNum });
    },
    getDetailpageSize(pageSize) {
      this.getListDetail({ pageSize });
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
    // 列表
    async getList(page={}) {
      this.query.tradeDateFrom = this.query.time ? this.query.time[0]: '';
      this.query.tradeDateTo = this.query.time ? this.query.time[1]: '';
      this.query.pageNum = page.pageNum;
      this.query.pageSize = page.pageSize;
      console.log(this.query);
      await this.$api.financeapi.manageListUsingGET(this.query).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.content = returnObj.data.data;
        }
      });
    },

    // 明细列表
    async getListDetail(page={}) {
      this.query2.tradeDateFrom = this.query2.time ? this.query2.time[0]: '';
      this.query2.tradeDateTo = this.query2.time ? this.query2.time[1]: '';
      this.query2.pageNum = page.pageNum;
      this.query2.pageSize = page.pageSize;
      console.log(this.query2);
       await this.$api.financeapi.manageListUsingGET(this.query2).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.content2 = returnObj.data.data;
        }
      });
    },

    async init() {
      let [shop] = await Promise.all([
        queryShop()
      ]);
      this.selects.shops = shop.data || [];
      await this.getList();
      await this.getListDetail();
    }
  },
  computed: {},
  created() {
    this.init();
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