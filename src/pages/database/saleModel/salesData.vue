<template>
  <con-head title="销售数据">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入销售单号" v-model="query.settleGroupName" @keyup.enter="getAccountGroups()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="12" :offset="3">
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
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
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
          label: "销售单号",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "商户名称",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "店铺名称",
          type: "text",
          name: "remark"
        },
        {
          label: "收银机",
          type: "text",
          name: "remark"
        },
        {
          label: "销售时间",
          type: "text",
          name: "remark"
        },
        {
          label: "货品数量",
          type: "text",
          name: "remark"
        },
        {
          label: "销售总额",
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