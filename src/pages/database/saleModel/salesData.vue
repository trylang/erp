<template>
  <con-head title="销售数据" v-loading.fullscreen="loading">
    <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入单号" v-model="query.orderCode" @keyup.enter="getList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="12" :offset="3">
        <div class="searchinput searchdatepicker">
          <span class="inputname inputnameauto">销售日期：</span>
            <el-date-picker
                    v-model="query.startDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="startpickerOptions"
                    @change="getList()"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            ~
            <el-date-picker
                    v-model="query.endDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="endpickerOptions"
                    @change="getList()"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">店铺</span>
            <el-select v-model="query.shopCode" clearable @change="getList()" filterable clearable placeholder="请选择" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.name"
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
import { reExport } from '@/utils/'

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
          type: "fmoney",
          name: "amount"
        }
      ],
      content: [],
      selects: {
        shops: []
      },
      query: {
          shopCode: '',
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
  watch:{
      'query.orderCode': function(){
          this.$delay(()=>{
              this.getList();
          },300)
      }
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
        shopCode: this.query.shopCode,
        orderCode: this.query.orderCode,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      if(params.startDate && params.endDate){
        this.loading = true;
        this.$api.reportapi.orderSalesDataListUsingGET(params).then(res => {
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
          });;
      }else{
        this.content.list = [];
      }
    },
    exportHandler(){
        reExport(this, 'showBtn', true);
        let params = {
          startDate: this.query.startDateData ? this.query.startDateData : undefined,
          endDate: this.query.endDateData ? this.query.endDateData : undefined,
          shopCode: this.query.shopCode,
          orderCode: this.query.orderCode,
          // pageNum: this.query.pageNum,
          // pageSize: this.query.pageSize
        };
        if(this.content.list.length>0){
            this.$api.reportapi.exportOrderSalesDataListUsingGET(params).then(res=>{
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