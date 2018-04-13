<template>
  <con-head title="销售数据">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入销售单号" v-model="query.orderCode" @keyup.enter="getList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="12" :offset="3">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="daterange"
            value-format="yyyy-MM-dd"
            @change="getList"
						range-separator="~"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">店铺</span>
            <el-select v-model="query.shopCode" clearable @change="getList()" placeholder="店铺" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.shopName"
                :value="item.shopCode">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";

import { queryShop } from "@/utils/rest/financeAPI";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable
  },
  data() {
    return {
      header: [
        {
          label: "销售单号",
          type: "text",
          name: "orderCode"
        },
        {
          label: "商户名称",
          type: "text",
          name: "merchantName"
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
          label: "收银机",
          type: "text",
          name: "posCode"
        },
        {
          label: "销售时间",
          type: "time",
          name: "orderTime",
          filter: "yyyy-MM-dd hh:mm:ss"
        },
        {
          label: "货品数量",
          type: "text",
          name: "goodsCount"
        },
        {
          label: "销售总额",
          type: "text",
          name: "amount"
        }
      ],
      content: [],
      selects: {
        shops: []
      },
      query: {}
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(pageNum) {
      this.getList({ pageNum });
    },
    getpageSize(pageSize) {
      this.getList({ pageSize });
    },
    async getList(page = {}, callback) {
      let params = {
        startDate: this.query.time ? this.query.time[0] : undefined,
        endDate: this.query.time ? this.query.time[1] : undefined,
        shopCode: this.query.shopCode,
        orderCode: this.query.orderCode,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      console.log(params)
      this.$api.reportapi.orderSalesDataListUsingGET(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async init() {
      let [shop] = await Promise.all([
        queryShop()
      ]);
      this.selects.shops = shop.data || [];
      await this.getList();
    }
  },
  computed: {},
  created() {
    this.init();
  }
};
</script>

<style scoped>

</style>