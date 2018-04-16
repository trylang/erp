<template>
  <con-head title="月销售汇总">
    <el-button type="primary" slot="append"  @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">月份</span>
            <el-date-picker
              value-format="yyyy-MM"
              @change="getList()"
              v-model="query.yearAndMonth"
              type="month"
              placeholder="选择月份">
            </el-date-picker>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">楼层</span>
            <el-select v-model="query.floor" @change="getList()" placeholder="楼层" class="dialogselect">
              <el-option
                v-for="item in selects.floors"
                :key="item.id"
                :value="item.id"
                :label="item.floorName">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">店铺</span>
            <el-select v-model="query.shopCode" @change="getList()" placeholder="店铺" class="dialogselect">
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
    <erp-table :header="header" :content="content" ifScroll="true" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";

import { queryShop, queryFloor } from "@/utils/rest/financeAPI";
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
          name: "totalAmount"
        },
        {
          label: "1日",
          type: "text",
          name: "amountDay1"
        },
        {
          label: "2日",
          type: "text",
          name: "amountDay2"
        },
        {
          label: "3日",
          type: "text",
          name: "amountDay3"
        },
        {
          label: "4日",
          type: "text",
          name: "amountDay4"
        },
        {
          label: "5日",
          type: "text",
          name: "amountDay5"
        },
        {
          label: "6日",
          type: "text",
          name: "amountDay6"
        },
        {
          label: "7日",
          type: "text",
          name: "amountDay7"
        },
        {
          label: "8日",
          type: "text",
          name: "amountDay8"
        },
        {
          label: "9日",
          type: "text",
          name: "amountDay9"
        },
        {
          label: "10日",
          type: "text",
          name: "amountDay10"
        },
        {
          label: "11日",
          type: "text",
          name: "amountDay11"
        },
        {
          label: "12日",
          type: "text",
          name: "amountDay12"
        },
        {
          label: "13日",
          type: "text",
          name: "amountDay13"
        },
        {
          label: "14日",
          type: "text",
          name: "amountDay14"
        },
        {
          label: "15日",
          type: "text",
          name: "amountDay15"
        },
        {
          label: "16日",
          type: "text",
          name: "amountDay16"
        },
        {
          label: "17日",
          type: "text",
          name: "amountDay17"
        },
        {
          label: "18日",
          type: "text",
          name: "amountDay18"
        },
        {
          label: "19日",
          type: "text",
          name: "amountDay19"
        },
        {
          label: "20日",
          type: "text",
          name: "amountDay20"
        },
        {
          label: "21日",
          type: "text",
          name: "amountDay21"
        },
        {
          label: "22日",
          type: "text",
          name: "amountDay22"
        },
        {
          label: "23日",
          type: "text",
          name: "amountDay23"
        },
        {
          label: "24日",
          type: "text",
          name: "amountDay24"
        },
        {
          label: "25日",
          type: "text",
          name: "amountDay25"
        },
        {
          label: "26日",
          type: "text",
          name: "amountDay26"
        },
        {
          label: "27日",
          type: "text",
          name: "amountDay27"
        },
        {
          label: "28日",
          type: "text",
          name: "amountDay28"
        },
        {
          label: "29日",
          type: "text",
          name: "amountDay29"
        },
        {
          label: "30日",
          type: "text",
          name: "amountDay30"
        },
        {
          label: "31日",
          type: "text",
          name: "amountDay31"
        }
      ],
      content: [],
      selects: {
        shops: [],
        floors: []
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
      this.query.pageNum = page.pageNum;
      this.query.pageSize = page.pageSize;
      this.$api.reportapi.monthSalesListUsingGET(this.query).then(res => {
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
        if(this.content.list.length>0){
            this.$api.reportapi.exportMmonthSalesListUsingGET(this.query).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }
    },
    async init() {
      let [shop, floor] = await Promise.all([queryShop(), queryFloor()]);
      this.selects.shops = shop.data;
      this.selects.floors = floor.data;
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