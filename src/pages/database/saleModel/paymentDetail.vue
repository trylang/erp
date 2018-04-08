<template>
  <con-head title="店铺付款方式明细表">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="daterange"
						range-separator="~"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
        </div>
      </el-col>
			<el-col :span="9" :offset="3">
        <div class="searchselect">
					<span class="inputname">店铺</span>
					<el-select v-model="query.settleGroupId" clearable @change="getCost()" placeholder="店铺" class="dialogselect">
						<el-option
							v-for="item in selects.accounts"
							:key="item.id"
							:label="item.settleGroupName"
							:value="item.id">
						</el-option>
					</el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" :ifScroll="true" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";

import { queryAccountGroups } from "@/utils/rest/financeAPI";
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
          label: "日期",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "店铺号",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "店铺名称",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "品牌",
          type: "text",
          name: "remark"
        },
        {
          label: "销售总计",
          type: "text",
          name: "remark"
        },
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
          label: "积分",
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
      content: [],
      selects: {
        accounts: []
      },
      query: {
        settleGroupName: ""
      }
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(pageNum) {
      this.getAccountGroups({ pageNum });
    },
    getpageSize(pageSize) {
      this.getAccountGroups({ pageSize });
    },
    async getAccountGroups(page = {}, callback) {
      let params = {
        settleGroupName: this.query.settleGroupName,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_11(params).then(res => {
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
  computed: {},
  created() {
    this.getAccountGroups();
  }
};
</script>

<style scoped>

</style>