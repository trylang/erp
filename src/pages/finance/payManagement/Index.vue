<template>
  <con-head tab="tab">
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/payManagement" v-if="payManagement">收款管理</router-link>
        <router-link to="/finance/payManagementAudit" v-if="payManagementAudit">收款审核</router-link>
    </div>
    <el-button type="primary" slot="append" @click="linkTo('payManagement/collectMoney')">收取</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入收款单号/结算单号" v-model="query.receiptId" @keyup.enter="getReceptList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" @change="query.contractId = '', getReceptList(), getMerchantId()" filterable clearable placeholder="商户名称" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :label="item.merchantName"
                :value="item.id">
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
            <el-select v-model="query.contractId" @change="getReceptList" filterable clearable placeholder="" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.contracts"
                :key="item.id"
                :label="item.contractAndShop"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
Number.prototype.toPct = function(digits){
  return this.toFixed(digits||0);
}
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
          label: "收款单号",
          linkStyle: {color: "#457fcf"},
          type: 'link',
          basehref: '#/finance/payManagement/id/',
          urlId: 'id',
          name: "receiptCode"
        },
        {
          label: "合同号",
          type: "text",
          name: "contractNumber"
        },
        {
          label: "结算单号",
          type: "text",
          name: "settleNumber"
        },
        {
          label: "商户",
          type: "text",
          name: "merchantName"
        },
        {
          label: "应收金额",
          type: "fmoney",
          name: "amountReceivable"
        },
        {
          label: "已收金额",
          type: "fmoney",
          name: "amountReceived"
        },
        {
          label: "未收金额",
          type: "fmoney",
          name: "uncollectedMony"
        },
        {
          label: "收款日期",
          name: "createDate",
          type: "text"
        },
        {
          label: "状态",
          type: "status",
          name: "receiptStatus",
          option: {
            0: '新增',
            1: '已确认',
            2: '取消',
          }
        },
        {
          label: "操作",
          name: "operations",
          type: "buttons",
          style: {
            // width: "130px"
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
                this.$router.push({path: '/finance/payManagement/collectMoney', query: { id: item.id, financeId: item.financeId, receiptType: item.receiptType, settleNumber: item.settleNumber, shopId: item.shopId, merchantId: item.merchantId, contractId: item.contractId, merchantName: item.merchantName}})
              }.bind(this)
            },
            {
              label: "取消",
              show: "showCancel",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.cancelRecept(item, data);
              }
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
            }
          ]
        }
      ],
      content: [],
      dialog: {
        models: [{
          label: '编码',
          name: 'id',
          type: 'text',
          placeholder: '请输入编号'
        }, {
          label: '名称',
          name: 'name',
          type: 'text',
          placeholder: '请输入名称'
        }, {
          label: '备注',
          name: 'desc',
          type: 'text',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        param: {
          id: "",
          name: "",
          desc: ""
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: () => {
            return Object.values(this.dialog.param).some(item => {
              return item === (undefined || "");
            });
          },
          click: () => {
            this.confirmDialog();
          }
        }, {
          label: "取 消",
          name: "edit",
          type: "",
          click: () => {
            this.cancelDialog();
          }
        }]
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
          id: 0,
          label: '新增'
        }, {
          isStatus:false,
          id: 1,
          label: '已确认'
        }, {
          isStatus:false,
          id: 2,
          label: '取消'
        }]
      },
      query: {
        receiptId: "",
        merchantId: "",
        contractId: "",
        status: ""
      }
    };
  },
  mounted() {},
  computed:{
      payManagement(){
          return this.$root.menus.indexOf('/finance/payManagement') >= 0;
      },
      payManagementAudit(){
          return this.$root.menus.indexOf('/finance/payManagementAudit') >= 0;
      }
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getReceptList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getReceptList();
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
      status.isStatus = !status.isStatus;
      this.query.status = status.id;
      this.getReceptList();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该数据，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteRecept(item);
        })
        .catch(_ => {});
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
      this.confirmRecept(this.filterIds());
    },
    async getReceptList(page={}, callback) {
      let params = {
        receiptId: this.query.receiptId,
        merchantId: this.query.merchantId,
        contractId: this.query.contractId,
        status: this.query.status,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.manageListUsingGET_1(params).then(res => {
        const data = res.data;
        if(data.status === 200) {
          data.data.list.forEach(item => {
            item.checked = false;
            // item.owed = Number((item.amountReceivable - item.amountReceived).toPct(2));
            if (item.receiptStatus === 0 || 2) {
              item.showEdit = true;
              item.showCancel = false;
            }
            if (item.receiptStatus === 1) {
              item.showEdit = false;
              item.showCancel = true;
            }
          });
          this.content = data.data;
          if(callback) callback();
        } else {
          return data.message;
        }        
      });
    },
    async confirmRecept(param) {
      let params = {
        id: param
      };
      await this.$api.financeapi.confirmUsingPOST(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getReceptList({}, () => {
            $message("success", "确认成功!");
          });  
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async deleteRecept(param) {
      let params = {
        id: param.id
      };
      await this.$api.financeapi.delUsingDELETE_3(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getReceptList({}, () => {
            $message("success", "删除成功!");
          });  
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async cancelRecept(param) {
        this.$confirm("您确定继续当前操作？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          let params = {
              id: param.id
            }
            this.$api.financeapi.cancelUsingPUT_2(params).then(returnObj => {
              if(returnObj.data.status === 200) {
                this.getReceptList({}, () => {
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
      let [merchantsContracts] = await Promise.all([queryMerchantContract(this.query.merchantId)]);
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
    },
    async init() {
      let [merchants, merchantsContracts] = await Promise.all([
        queryMerchant(), queryMerchantContract()
      ]);
      this.selects.merchants = merchants.data;
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
      await this.getReceptList();
    }
  },
  watch:{
    'query.receiptId': function(){
      this.$delay(()=>{
          this.getReceptList();
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
			.global-btn {
				width: 5.6rem;
				height: 2rem;
				margin-right: .5rem;
				border-width: 0;
				border-radius: 2rem;
				cursor: pointer;
				background: #457fcf;
				color: #fff;
				&:hover {
					background: #4a92e4;
				}
			}
		}
		
</style>