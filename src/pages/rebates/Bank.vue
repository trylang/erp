<template>
  <div v-loading.fullscreen="loading">
    <con-head tab="tab">
        <div slot="appendtab" class="tabmenu">
          <router-link to="/rebates/bank" v-if="bank">银行账单</router-link>
          <router-link to="/rebates/bankDetailed" v-if="bankDetailed">银行账单明细</router-link>
        </div>
        <el-button type="primary" slot="append" :disabled="showBtn" @click="exportList">导出</el-button>
        <div slot="preappend">
          <el-row>
            <el-col :span="11">
              <div class="searchselect">
                <span class="inputname">店铺范围：</span>
                <el-select v-model="query.shopCodeFrom" clearable filterable @change="getList" placeholder="请输入店铺号" class="dialogselect">
                  <el-option
                    v-for="item in selects.shops"
                    :key="item.shopCode"
                    :label="item.shopCode"
                    :value="item.shopCode">
                  </el-option>
                </el-select>
                <span>~</span>
                <el-select v-model="query.shopCodeTo" clearable filterable @change="getList" placeholder="请输入店铺号" class="dialogselect">
                  <el-option
                    v-for="item in selects.shops"
                    :key="item.shopCode"
                    :label="item.shopCode"
                    :value="item.shopCode">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12" :offset="1">
              <div class="searchinput">
                <span class="inputname inputnameauto">交易时间：</span>
                <el-date-picker
                  @change="getList"
                  v-model="query.time"
                  value-format="yyyy-MM-dd"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
    </con-head>
    <con-head>
        <div class="mainbox" style="padding: 15px 10px;">
            <el-row :gutter="20">
                <erp-table :header="header" :content="content" @currentPage="getListCurrentPage" @pageSize="getListpageSize">
                  <tr class="last_tr" slot="lastTr" v-if="this.detail.hasDetail === 200 && content.list.length > 0">
                    <td colspan="2"><div class="cell"><span>合计</span></div></td>           
                    <td><div class="cell"><span>{{detail.paymentAmount}}</span></div></td>
                    <td><div class="cell"><span>{{detail.fee}}</span></div></td>
                    <td><div class="cell"><span>{{detail.feeMarket}}</span></div></td>
                    <td><div class="cell"><span>{{detail.feeTotal}}</span></div></td>
                    <td><div class="cell"><span>{{detail.refundAmount}}</span></div></td>
                  </tr>		  
                </erp-table>
            </el-row>
        </div>
    </con-head>
  </div>
</template>

<script>
import { $message } from "../../utils/notice";
import erpTable from "../../components/Table";
import ConHead from '../../components/ConHead'
import { formatTree, reExport } from "@/utils";
import { saleTQueryShop } from "@/utils/rest/financeAPI";

export default {
  name: "account-group",
  components: {
    erpTable,
    ConHead
  },
  data() {
    return {
      header: [
        {
          label: "店铺号",
          type: "text",
          name: "shopCode",
        },
        {
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "购买金额",
          type: "fmoney",
          name: "paymentAmount"
        },
        {
          label: "手续费（银行）",
          type: "fmoney",
          name: "fee"
        },
        {
          label: "手续费（商场）",
          type: "fmoney",
          name: "feeMarket"
        },
        {
          label: "手续费（合计）",
          type: "fmoney",
          name: "feeTotal"
        },
        {
          label: "租户返款",
          name: "refundAmount",
          type: "fmoney",
          // filter: "yyyy-MM-dd hh:mm:ss.S"
        }
      ],
      content: [],
      detail: {
        hasDetail: ''
      },
      selects: {
        shops: [],
      },
      query: {
        channel: 2
      },
      showBtn: true,
      loading: false,
    };
  },
  mounted() {},
  computed:{
    bank(){
        return this.$root.menus.indexOf('/rebates/bank') >= 0;
    },
    bankDetailed(){
        return this.$root.menus.indexOf('/rebates/bankDetailed') >= 0;
    }
  },
  methods: {
    exportList() {
      reExport(this, 'showBtn', true);
      let params = {
          pageNum: this.query.pageNum,
          pageSize: this.query.pageSize,
          channel: 2,
          shopCodeFrom: this.query.shopCodeFrom,
          shopCodeTo: this.query.shopCodeTo,
          tradeDateFrom: this.query.tradeDateFrom,
          tradeDateTo: this.query.tradeDateTo
      }
      if(this.content.list.length>0){
          this.$api.refundapi.toExcelUsingGET_1(params).then(res=>{
              if(res.data.status == 200){
                  this.$message.success(res.data.msg);
              }
          }).catch(res=>{
              this.$message.error(res.data.msg);
          })
      }
    },
    getListCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getList();
    },
    getListpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getList();
    },
    // 列表
    async getList(page={}) {
        this.query.tradeDateFrom = this.query.time ? this.query.time[0]: '';
        this.query.tradeDateTo = this.query.time ? this.query.time[1]: '';
        this.query.pageNum = this.query.pageNum;
        this.query.pageSize = this.query.pageSize;
        if(!this.query.tradeDateFrom) {
            this.$message.info('请选择时间范围!');
            this.content.list = [];
            return;
        }
        if(this.query.shopCodeTo && !this.query.shopCodeFrom) {
            this.$message.info('请选择店铺开始范围!');
            return;
        }
        if(this.query.shopCodeFrom && !this.query.shopCodeTo) {
            this.$message.info('请选择店铺结束范围!');
            return;
        }
        this.loading = true;
        await this.$api.refundapi.getListForPageUsingGET_1(this.query).then(returnObj => {
            if (returnObj.data.status === 200) {
                this.content = returnObj.data.data;
                if(this.content.list.length > 0){
                    this.showBtn = false;
                }else{
                    this.showBtn = true;
                }
                if (returnObj.data.data.isLastPage) {
                  this.$api.refundapi.billTotalUsingGET_1(this.query).then(returnObj => {
                    if (returnObj.data.status === 200) {             
                      this.detail = returnObj.data.data;
                      this.detail.hasDetail = 200;
                    }
                  });
                } else {            
                  this.detail.hasDetail = '';
                }
                this.loading = false;
            }else{
                this.loading = false;
                this.$message.error(res.data.msg);
            }
        }).catch(res=>{
            this.loading = false;
            this.$message.error(res.data.msg);
        });
        
    },

    async init() {
      let [shop] = await Promise.all([
        saleTQueryShop()
      ]);
      this.selects.shops = shop.data || [];
    }
  },
  created() {
    this.init();
    this.content.list = [];
  }
};
</script>

<style lang="scss" scoped>
.line-nav {
  flex: 1;
  line-height: 30px;
}
.line-nav a {
  margin: 0 10px;
  color: #666;
  font-weight: bold;
  height: 30px;
  text-decoration: none;
  display: inline-block;
}
.line-nav a.active {
  color: #457fcf;
  border-bottom: 2px solid #457fcf;
}
</style>