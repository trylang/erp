<template>
  <con-head title="店铺销售报表（按日期段）" v-loading.fullscreen="loading">
    <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchinput searchdatepicker">
          <span class="inputname inputnameauto">销售日期：</span>
            <el-date-picker
                    v-model="query.startDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="startpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            ~
            <el-date-picker
                    v-model="query.endDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="endpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
      </el-col>
			<el-col :span="11" :offset="1">
        <div class="searchselect">
          <span class="inputname inputnameauto">店铺区间：</span>
          <el-select v-model="query.startCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
            <el-option
              v-for="item in selects.shops"
              :key="item.id"
              :label="item.shopCode"
              :value="item.shopCode">
            </el-option>
          </el-select>
          <span>~</span>
          <el-select v-model="query.endCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
            <el-option
              v-for="item in selects.shops"
              :key="item.id"
              :label="item.shopCode"
              :value="item.shopCode">
            </el-option>
          </el-select>
        </div>
      </el-col>
        <el-col :span="2"><span class="erpsearchbtn" @click="getList">查询</span></el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import { reExport } from '@/utils/'
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
          label: "店铺区域",
          type: "text",
          name: "shopRegionName"
        },
        {
          label: "店铺面积",
          type: "text",
          name: "rentArea"
        },
        {
          label: "合同类型",
          type: "text",
          name: "contractKindName"
        },        
        {
          label: "品牌",
          type: "text",
          name: "mainBrandName"
        },
        {
          label: "一级业态",
          type: "text",
          name: "businessTypeName"
        },
        {
          label: "二级业态",
          type: "text",
          name: "businessType2Name"
        },
        {
          label: "三级业态",
          type: "text",
          name: "businessType3Name"
        },
        {
          label: "销售日期",
          type: "text",
          name: "orderDate"
        },
        {
          label: "销售额（元）",
          type: "fmoney",
          name: "amount"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "dayTradeCount"
        }
      ],
      content: [],
      selects: {
        shops: []
      },
      query: {
          startDateData:'',
          endDateData:''
      },
      showBtn: true,
      loading: false,
        startpickerOptions:{
            disabledDate: (time) => {
                if (this.query.endDateData != '' || this.query.endDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.endDateData)).getTime() - oneYear;
                    return time.getTime() < oneYearNum;
                }
            }
        },
        endpickerOptions:{
            disabledDate: (time) => {
                if (this.query.startDateData != '' || this.query.startDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.startDateData)).getTime() + oneYear;
                    if(oneYearNum > oneYear) {
                        return time.getTime() > oneYearNum;
                    }
                }
            }
        }
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getList();
    },
    async getList(page = {}, callback) {
      let params = {
          startDate: this.query.startDateData ? this.query.startDateData : undefined,
          endDate: this.query.endDateData ? this.query.endDateData : undefined,
        startCode: this.query.startCode,
        endCode: this.query.endCode,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      if (!this.query.startDateData && !this.query.endDateData) {
        // $message('info', '请先选择时间段');
        this.content.list = [];
        return;
      }else{
        this.loading = true;
        this.$api.reportapi.shopUsingPOST_1(params).then(res => {
          const data = res.data;
          if (data.status === 200) {
            this.content = data.data;
            if(this.content.list.length>0){
                this.showBtn = false;
            }
            if (callback) callback();
            this.loading = false;
          } else {
            this.loading = false;
            this.$message.error(res.data.msg);
          }
        }).catch(res=>{
          this.loading = false;
          this.$message.error(res.data.msg);
        });
      }
    },
    exportHandler(){
        reExport(this, 'showBtn', true);
        let params = {
            startDate: this.query.startDateData ? this.query.startDateData : undefined,
            endDate: this.query.endDateData ? this.query.endDateData : undefined,
            startCode: this.query.startCode,
            endCode: this.query.endCode,
            // pageNum: this.query.pageNum,
            // pageSize: this.query.pageSize
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
    this.content.list = [];
  }
};
</script>

<style scoped>

</style>