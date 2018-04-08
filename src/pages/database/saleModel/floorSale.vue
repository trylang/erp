<template>
  <con-head title="业态楼层销售">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="date"
						placeholder="选择日期">
					</el-date-picker>
        </div>
      </el-col>
			<el-col :span="9" :offset="6">
        <div class="searchselect">
					<span class="inputname">楼层：</span>
					<el-select v-model="query.settleGroupId" clearable @change="getCost()" placeholder="楼层" class="dialogselect">
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
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
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
          label: "楼层/业态",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "签约面积",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "总面积",
          type: "text",
          name: "remark"
        },
        {
          label: "销售总额",
          type: "text",
          name: "remark"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "remark"
        },
        {
          label: "客单价",
          type: "text",
          name: "remark"
        },
        {
          label: "签约面积坪效",
          type: "text",
          name: "remark"
				},
				{
          label: "总面积坪效",
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