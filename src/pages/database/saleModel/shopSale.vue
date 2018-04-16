<template>
  <con-head title="店铺销售报表（按日期段）">
    <el-button type="primary" slot="append" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="daterange"
            @change="getList"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
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

import { saleQueryShop } from "@/utils/rest/financeAPI";
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
          label: "销售日期",
          type: "text",
          name: "time"
        },
        {
          label: "销售额（元）",
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
        startDate: this.query.time ? this.query.time[0] : '',
        endDate: this.query.time ? this.query.time[1] : '',
        startCode: this.query.startCode,
        endCode: this.query.endCode,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      if (!this.query.time) {
        $message('info', '请先选择时间段');
        return;
      }
      console.log(params);
      this.$api.reportapi.shopUsingPOST_1(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    exportHandler(){
        let params = {
            startDate: this.query.time ? this.query.time[0] : '',
            endDate: this.query.time ? this.query.time[1] : '',
            startCode: this.query.startCode,
            endCode: this.query.endCode,
            // pageNum: page.pageNum,
            // pageSize: page.pageSize
        };
        if(this.content.list.length>0 && params.startDate && params.endDate){
            this.$api.reportapi.exportShopDaySalesListUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }
    },
    async init() {
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
  }
};
</script>

<style scoped>

</style>