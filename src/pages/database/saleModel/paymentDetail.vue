<template>
  <con-head title="店铺付款方式明细表">
    <el-button type="primary" slot="append" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="daterange"
            @change="getList"
						range-separator="~"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
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
    <erp-table v-if="header.length>0" :header="header" :content="content" :ifScroll="false" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
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
      afterTitles: [
        {
          label: "内卡",
          type: "text",
          name: "remark"
				},
				{
          label: "支付宝",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "微信",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "现金",
          type: "text",
          name: "remark"
        },
        {
          label: "外卖",
          type: "text",
          name: "remark"
        },
        {
          label: "资和信卡",
          type: "text",
          name: "remark"
				},
				{
          label: "U悦买单",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "积分支付",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "其他",
          type: "text",
          name: "remark"
        },
        {
          label: "团购卡",
          type: "text",
          name: "remark"
        },
        {
          label: "翼支付",
          type: "text",
          name: "remark"
        }
      ],
      header: [{
          label: "日期",
          type: "text",
          name: "date"
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
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "销售总计",
          type: "text",
          name: "salesSumOfADay"
        },],
      content: [],
      selects: {
        shops: []
      },
      query: {}
    };
  },
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
      console.log(params);
      if(params.startDate && params.endDate){
        this.$api.reportapi.shopPaymentDetailListUsingGET(params).then(res => {
          const data = res.data;
          if (data.status === 200) {
            this.content = data.data;
            if (callback) callback();
          } else {
            return data.message;
          }
        });
      }
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
            this.$api.reportapi.exportShopPaymentDetailListUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
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
  }
};
</script>

<style scoped>

</style>