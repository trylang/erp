<template>
  <con-head tab="tab">
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/accountAdjust" v-if="accountAdjust">结算单调整管理</router-link>
        <router-link to="/finance/accountAdjustAudit" v-if="accountAdjustAudit">结算单调整审核</router-link>
    </div>
    <el-button type="primary" slot="append" @click="linkTo('accountAdjust/addAdjustment')">调整</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
          <input type="text" placeholder="请输入结算单号/合同号" v-model="query.settleNo" @keyup.enter="getCostAdjust"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" @change="query.contractCode='',getCostAdjust(), getMerchantId()" filterable clearable placeholder="商户名称" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :value="item.id"
                :label="item.merchantName">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="texttitle">
            <span class="inputname">状态：</span>
            <div class="line-nav">
                <a href="javascript:void(0)" v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}" @click="statusHandler(status)">{{status.label}}</a>
            </div>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">合同</span>
            <el-select v-model="query.contractCode" @change="getCostAdjust" placeholder="合同" filterable clearable class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.contracts"
                :key="item.contractCode"
                :label="item.contractAndShop"
                :value="item.contractCode">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>

    <erp-dialog :title="dialog.param.id? '修改结算组别': '添加结算组别'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import { queryMerchant, queryContract, queryMerchantContract } from "@/utils/rest/financeAPI";

export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
  },
  data() {
    return {
      header: [
        // {
        //   label: "",
        //   name: "checked",
        //   type: "checkbox"
        // },
        {
          label: "结算单号",
          type: "text",
          type: "link",
          basehref: "#/finance/accountAdjust/detail/",
          urlId: 'id',
          name: "settleNumber"
        },
        {
          label: "合同号",
          type: "text",
          name: "contractCode"
        },        
        {
          label: "商户名称",
          type: "text",
          name: "merchantName"
        },
        {
          label: "店铺名称",
          type: "text",
          name: "shopName"
        },
        {
          label: "调整日期",
          name: "adjustDate",
          type: "time",
          filter: "yyyy-MM-dd"
        },
        {
          label: "状态",
          type: "status",
          name: "status",
          option: {
            '10': '新增',
            '20': '已确认',
            '30': '取消',
          }
        },
        {
          label: "操作",
          name: "operations",
          type: "buttons",
          style: {
            width: "130px"
          },
          operations: [
            {
              label: "编辑",
              name: "edit",
              show: "showEdit",
              type: "",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: function(item) {
                Object.assign(this.dialog.param, item);
                this.$router.push({path: '/finance/accountAdjust/addAdjustment', query: { billId: item.billId, settleNumber: item.settleNumber }})
              }.bind(this)
            },
            {
              label: "删除",
              name: "delete",
              show: "showEdit",
              type: "",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.deleteDialog(item, data);
              }
            },
            {
              label: "取消",
              show: "showCancel",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.cancelCostAdjust(item, data);
              }
            },
          ]
        }
      ],
      content: [],
      dialog: {
        param: {},
      },
      selects: {
        merchants: [],
        contracts: [],
        status: [{
          isStatus:true,
          id: '',
          label: '全部'
        }, {
          isStatus:false,
          id: 10,
          label: '新增'
        }, {
          isStatus:false,
          id: 20,
          label: '已确认'
        }, {
          isStatus:false,
          id: 30,
          label: '取消'
        }]
      },
      query: {
        settleNo: '',
        merchantId: '',
        contractCode: '',
        status: ''
      }
    };
  },
  mounted() {},
  computed:{
      accountAdjust(){
          return this.$root.menus.indexOf('/finance/accountAdjust') >= 0;
      },
      accountAdjustAudit(){
          return this.$root.menus.indexOf('/finance/accountAdjustAudit') >= 0;
      }
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
			status.isStatus = !status.isStatus;
      this.query.status = status.id;
      this.getCostAdjust();
    },
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getCostAdjust();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getCostAdjust();
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该数据，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteCostAdjust(item.id);
        });
    },
    filterIds() {
      const param = this.content.list.filter(item => {
        return item.checked === true;
      });
      let ids = [];
      param.forEach(item => {
        ids.push(item.id);
      });
      return ids;
    },
    batchConfirm() {
      if(this.filterIds().length == 0) return $message('info', '请选择费用单号');
      this.confirmCostAdjust(this.filterIds());
    },
    async getCostAdjust(page={}, callback) {
      let params = {
        settleNo: this.query.settleNo,
        merchantId: this.query.merchantId,
        contractCode: this.query.contractCode,
        status: this.query.status,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.manageListUsingGET_2(params).then(res => {
        const data = res.data;
        if(data.status === 200) {
          data.data.list.forEach(item => {
            item.checked = false;
            if (item.status === 10 || item.status === 30) {
              item.showEdit = true;
              item.showCancel = false;
            }
            if (item.status === 20) {
              item.showEdit = false;
              item.showCancel = true;
            }
          });
          this.content = data.data;
          if(callback) callback();
        } else {
          return data.message;
        }        
      })
    },
    async confirmCostAdjust(param) {
      await this.$api.financeapi.confirmUsingPUT_2({id: param}).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCostAdjust({}, () => {
            $message("success", "确认成功!");
          });  
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async deleteCostAdjust(param) {
      let params = {
        id: param
      };
      await this.$api.financeapi.delUsingDELETE_4(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCostAdjust({}, () => {
            $message("success", "删除成功!");
          });  
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async cancelCostAdjust(param) {
        this.$confirm("您确定继续当前操作？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          let params = {
            id: param.id
          }
        this.$api.financeapi.cancelUsingPUT_3(params).then(returnObj => {
            if(returnObj.data.status === 200) {
              this.getCostAdjust({}, () => {
                $message("success", "取消成功!");
              });
            } else {
              $message("error", returnObj.data.msg);
            }       
          })
            .catch(res => {
              this.$message.error(res.data.msg);
            });
        })
    },
    async getMerchantId(){
      this.$api.rentapi
        .getContractShopByMerchantUsingGET({ merchantId: this.query.merchantId })
        .then(res => {
          this.selects.contracts = res.data.data;
        });
    },
    async init() {
      let [merchants, merchantsContracts] = await Promise.all([
        queryMerchant(), queryMerchantContract()
      ]);
      this.selects.merchants = merchants.data;
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
      await this.getCostAdjust();
    }
  },
  watch:{
    'query.settleNo': function(){
      this.$delay(()=>{
          this.getCostAdjust();
      },300)
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
    .line-nav{
        flex:1;
        line-height: 30px;
    }
    .line-nav a{
        margin: 0 10px;
        color: #666;
        font-weight: bold;
        height: 30px;
        text-decoration: none;
        display: inline-block;
    }
    .line-nav a.active{
        color: #457fcf;
        border-bottom: 2px solid #457fcf;
    }
		.global-block {
			margin-top: 1rem;
		}
		
</style>