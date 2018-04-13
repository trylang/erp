<template>
  <con-head title="店铺业态销售汇总表">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
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
			<el-col :span="11" :offset="1">
          <div class="searchselect">
            <span class="inputname">店铺范围：</span>
            <el-select v-model="query.startCode" clearable filterable @change="getList" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
            <span>~</span>
            <el-select v-model="query.endCode" clearable filterable @change="getList" placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.shopCode"
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
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "一级业态",
          type: "text",
          name: "businessTypeName"
        },
        {
          label: "二级业态",
          type: "text",
          name: "businessTypeNameTwo"
				},
				{
          label: "三级业态",
          type: "text",
          name: "businessTypeNameThr"
				},
				{
          label: "销售额",
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
      if (!this.query.time) {
        $message('info', '请选择时间段');
        return;
      }
      let params = {
        startDate: this.query.time ? this.query.time[0] : '',
        endDate: this.query.time ? this.query.time[1] : '',
        startCode: this.query.startCode,
        endCode: this.query.endCode,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      console.log(params);
      this.$api.reportapi.shopBusinessTypeSalesListUsingGET(params).then(res => {
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