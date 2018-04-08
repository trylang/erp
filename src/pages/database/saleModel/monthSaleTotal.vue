<template>
  <con-head title="月销售汇总">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">月份</span>
            <el-date-picker
              v-model="query.month"
              type="month"
              placeholder="选择月份">
            </el-date-picker>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">楼层</span>
            <el-select v-model="query.propertyType" @change="getCost()" placeholder="楼层" class="dialogselect">
              <el-option
                v-for="item in selects.accounts"
                :key="item.id"
                :value="item.id"
                :label="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">店铺</span>
            <el-select v-model="query.settleGroupId" @change="getCost()" placeholder="店铺" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.shopCode"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" ifScroll="true" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
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
    erpTable,
  },
  data() {
    return {
      header: [
        {
          label: "楼层",
          type: "text",
          name: "floorName"
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
          label: "销售额",
          type: "text",
          name: "salesAmount"
        },
        {
          label: "1日",
          type: "text",
          name: "remark"
        },
        {
          label: "2日",
          type: "text",
          name: "remark"
        },
        {
          label: "3日",
          type: "text",
          name: "remark"
        },
        {
          label: "4日",
          type: "text",
          name: "remark"
        },
        {
          label: "5日",
          type: "text",
          name: "remark"
        },
        {
          label: "6日",
          type: "text",
          name: "remark"
        },
        {
          label: "7日",
          type: "text",
          name: "remark"
        },
        {
          label: "8日",
          type: "text",
          name: "remark"
        },
        {
          label: "9日",
          type: "text",
          name: "remark"
        },
        {
          label: "10日",
          type: "text",
          name: "remark"
        },
        {
          label: "11日",
          type: "text",
          name: "remark"
        },
        {
          label: "12日",
          type: "text",
          name: "remark"
        },
        {
          label: "13日",
          type: "text",
          name: "remark"
        },
        {
          label: "14日",
          type: "text",
          name: "remark"
        },
        {
          label: "15日",
          type: "text",
          name: "remark"
        },
        {
          label: "16日",
          type: "text",
          name: "remark"
        },
        {
          label: "17日",
          type: "text",
          name: "remark"
        },
        {
          label: "18日",
          type: "text",
          name: "remark"
        },
        {
          label: "19日",
          type: "text",
          name: "remark"
        },
        {
          label: "20日",
          type: "text",
          name: "remark"
        },
        {
          label: "21日",
          type: "text",
          name: "remark"
        },
        {
          label: "22日",
          type: "text",
          name: "remark"
        },
        {
          label: "23日",
          type: "text",
          name: "remark"
        },
        {
          label: "24日",
          type: "text",
          name: "remark"
        },
        {
          label: "25日",
          type: "text",
          name: "remark"
        },
        {
          label: "26日",
          type: "text",
          name: "remark"
        },
        {
          label: "27日",
          type: "text",
          name: "remark"
        },
        {
          label: "28日",
          type: "text",
          name: "remark"
        },
        {
          label: "29日",
          type: "text",
          name: "remark"
        },
        {
          label: "30日",
          type: "text",
          name: "remark"
        },
        {
          label: "31日",
          type: "text",
          name: "remark"
        }
      ],
      content: [],
      selects: {
        shops: []
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
    },
    async init() {
      let [shop] = await Promise.all([queryShop()]);
      console.log(shop.data);
      this.selects.shops = shop.data;
      await this.getAccountGroups();
    }
  },
  computed: {},
  created() {
    this.init();
  }
};

// TODO: 查询字段没有对；
</script>

<style scoped>

</style>