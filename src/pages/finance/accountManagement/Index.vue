<template>
  <con-head tab="tab" v-loading.fullscreen="loading" >
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/accountManagement" v-if="accountManagement">结算单管理</router-link>
        <router-link to="/finance/accountManagementAudit" v-if="accountManagementAudit">结算单审核</router-link>
        <router-link to="/finance/accountManagementPublish" v-if="accountManagementPublish">结算单发布</router-link>
    </div>
    <!-- <el-button type="primary" slot="append" v-if=" variables.showCancel" @click="cancelBill">取消</el-button> -->
    <el-button type="primary" slot="append" @click="printContent">打印</el-button>          
    <el-button type="primary" slot="append" v-if="variables.showDelete" @click="deleteBill">删除</el-button>
    <section slot="preappend" v-if="variables.isActive === 'first'">
      <el-row>
        <el-col :span="7">
          <div class="searchbox">
            <input type="text" placeholder="请输入结算单号" v-model="query.settleNo" @keyup.enter="getAccountManagement()"><i class="iconfont icon-sousuo"></i>
          </div>
        </el-col>
        <el-col :span="7" :offset="1">
          <div class="searchselect">
            <span class="inputname inputnameauto">物业性质</span>
            <el-select v-model="query.propertyType" @change="getAccountGroupByType(query.propertyType), getAccountManagement()" filterable clearable placeholder="物业性质" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.label"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="7" :offset="1">
          <div class="searchselect">
              <span class="inputname">结算组别</span>
              <el-select v-model="query.settleGroupId" @change="getAccountManagement" filterable clearable placeholder="结算组别" class="dialogselect">
                <el-option
                  v-for="item in selects.accountGroup"
                  :key="item.id"
                  :label="item.settleGroupName"
                  :value="item.id">
                </el-option>
              </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row>         
        <el-col :span="7">
          <div class="searchselect">
              <span class="inputname inputnameauto">商户</span>
              <el-select v-model="query.merchantId" @change="query.contractCode='', getAccountManagement(),getMerchantId()" filterable clearable placeholder="商户名称" class="dialogselect">
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
        <el-col :span="7" :offset="1">
          <div class="searchselect">
              <span class="inputname inputnameauto">合同</span>
              <el-select v-model="query.contractCode" @change="getAccountManagement()" filterable clearable class="dialogselect">
                <el-option label="全部" value=""></el-option>
                <el-option
                  v-for="item in selects.contracts"
                  :key="item.id"
                  :label="item.contractAndShop"
                  :value="item.contractCode">
                </el-option>
              </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="texttitle">
          <span class="inputname">状态：</span>
          <div class="line-nav">
              <a href="javascript:void(0)" v-for="(status, index) in selects.status"
              :key="index" 
              :class="{active:status.isStatus}" 
              @click="statusHandler(status)">{{status.label}}</a>
          </div>
      </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <account-tree :createTree="createTree" :header="header" :content="content"></account-tree>  
      </el-row>
    </section>
  </con-head>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import AccountTree from "../../../components/AccountTree";
import { formatTree } from '@/utils';
import {
  queryAccountGroup,
  queryMerchant,
  queryContract,
  queryMerchantContract
} from "@/utils/rest/financeAPI";


export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog,
    AccountTree
  },
  data() {
    return {
      createTree: [],
      loading: false,
      header: [
        {
          label: "收费项目",
          type: "text",
          name: "costItemName",
          class: "font12",
          style: {
            'padding': '5px 8px !important'
          }
        },
        {
          label: "日期范围（年/月/日）",
          name: "period",
          type: "text",
          class: "font12",
          style: {
            'text-align': 'center',
            'padding': '5px 8px !important'
          }
        },
        {
          label: "金额（元）",
          type: "fmoney",
          name: "originalAmount",
          class: "font12",
          style: {
            'padding': '5px 8px !important'
          }
        },
        {
          label: "调整金额（元）",
          type: "fmoney",
          name: "adjustAmount",
          class: "font12",
          style: {
            'padding': '5px 8px !important'
          }
        },
        {
          label: "备注",
          type: "text",
          name: "remark",
          class: "font12",
          style: {
            'padding': '5px 8px !important'
          }
        }],
      content: [],
      dialog: {
        models: [
          {
            label: "编码",
            name: "id",
            type: "text",
            placeholder: "请输入编号"
          },
          {
            label: "名称",
            name: "name",
            type: "text",
            placeholder: "请输入名称"
          },
          {
            label: "备注",
            name: "desc",
            type: "text",
            placeholder: "请输入备注"
          }
        ],
        dialogVisible: false,
        param: {
          id: "",
          name: "",
          desc: ""
        },
        options: [
          {
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
          },
          {
            label: "取 消",
            name: "edit",
            type: "",
            click: () => {
              this.cancelDialog();
            }
          }
        ]
      },
      selects: {
        accountGroup: [],
        merchants: [],
        contracts: [],
        shops: [
          {
            id: 0,
            label: "商铺"
          },
          {
            id: 2,
            label: "场地"
          },
          {
            id: 3,
            label: "广告位"
          },
          {
            id: 1,
            label: "写字楼"
          }
        ],
        status: [{
          isStatus:true,
          id: '',
          label: '全部'
        }, {
          isStatus:false,
          id: ['auditState',10],
          label: '新增'
        }, {
          isStatus:false,
          id: ['auditState',20],
          label: '已确认'
        }, {
          isStatus:false,
          id: ['auditState',30],
          label: '取消'
        }, {
          isStatus:false,
          id: ['auditState',40],
          label: '已发布'
        }, {
          isStatus:false,
          id: ['receiptState',30],
          label: '已付款'
        }, {
          isStatus:false,
          id: ['receiptState',20],
          label: '部分付款'
        }]
      },
      query: {
        id: []
      },
      variables: {
        isActive: "first",
        showDelete: false,
        showCancel: false
      },
      tabs: [
        {
          id: "first",
          label: "结算单管理"
        },
        {
          id: "second",
          label: "结算单确认"
        },
        {
          id: "third",
          label: "结算单发布"
        }
      ]
    };
  },
  mounted() {},
  computed:{
      accountManagement(){
          return this.$root.menus.indexOf('/finance/accountManagement') >= 0;
      },
      accountManagementAudit(){
          return this.$root.menus.indexOf('/finance/accountManagementAudit') >= 0;
      },
      accountManagementPublish(){
          return this.$root.menus.indexOf('/finance/accountManagementPublish') >= 0;
      }
  },
  methods: {
    initParam() {
      this.query = {
        settleNo: "",
        merchantId: "",
        contractCode: "",
        settleGroupId: "",
        status: "",
      }
    },
    statusHandler(status) {
      this.selects.status.forEach(item => {
        item.isStatus = false;
      });
      status.isStatus = !status.isStatus;
      this.query.status = status.id;
      this.getAccountManagement();
    },
    activeFunc(item) {
      this.variables.isActive = item.id;
      this.initParam();
      if (item.id === 'first') this.getAccountManagement();
      else if (item.id === 'second') this.getAccountConfirm();
      else if (item.id === 'third') this.getAccountPulish();
    },
    printContent() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'printBill'}, () => {
        this.getAccountManagement();
      });
    },
    cancelBill() {
      this.$confirm("您确定继续当前操作？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'cancelBill'}, () => {
          this.getAccountManagement();
        });
      })
      .catch(_ => {});
      
    },
    confirmBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'confirmBill'}, () => {
        this.getAccountConfirm();
      });
    },
    publishBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'publishBill'}, () => {
        this.getAccountPulish();
      });
    },
    deleteBill() {
      this.$confirm("是否删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      .then(() => {
        this.loading = true;
        this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'deleteBill'}, (returnObj) => {
          if (returnObj.data.status === 200) {
            this.getAccountManagement();
            $message("success", "结算单删除成功!");
          } else {
            $message('error', returnObj.data.msg);
          }         
          this.loading = false;
        });
      })
      .catch(_ => {
          this.loading = false;
      });
    }, 
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id) {
        // 修改
        this.dialog.dialogVisible = false;
        this.$store
          .dispatch("updateAccountGroup", {
            id: this.dialog.param.id,
            param: this.dialog.param
          })
          .then(() => {
            $message("success", "修改成功!");
          })
          .catch(error => {
            $message(
              "error",
              !error.message ? "无法修改，请重试!" : error.message
            );
          });
      } else {
        // 新增
        if (this.dialog.param.id && this.dialog.param.name) {
          this.dialog.dialogVisible = false;
          this.$store
            .dispatch("addAccountGroup", this.dialog.param)
            .then(() => {
              $message("success", "添加成功!");
            })
            .catch(error => {
              $message(
                "error",
                !error.message ? "无法添加，请重试!" : error.message
              );
            });
        }
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该结算组别, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store
            .dispatch("delAccountGroup", item.id)
            .then(() => {
              $message("success", "删除成功!");
            })
            .catch(() => {
              $message("error", "无法删除，请重试!");
            });
        });
    },
    // 结算单管理
    async getAccountManagement() {  
      const param = {
        propertyType: this.query.propertyType,
        settleNo: this.query.settleNo,
        merchantId: this.query.merchantId,
        contractCode: this.query.contractCode,
        settleGroupId: this.query.settleGroupId,
      };
      param[this.query.status[0]] = this.query.status[1];
      await this.$api.financeapi.manageListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
        }
      });
    },
    // 结算单确认
    async getAccountConfirm() {
      const param = {
        settleNo: this.query.settleNo1,
      };
      await this.$api.financeapi.confirmListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
        }  
      });
    },
    // 结算单发布
    async getAccountPulish() {
      const param = {
        settleNo: this.query.settleNo2,
      };
      await this.$api.financeapi.publishListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
        }  
      });
    },
    async getMerchantId(){
      this.query.contractId = '';
      let [merchantsContracts] = await Promise.all([queryMerchantContract(this.query.merchantId)]);
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
    },
    // 根据物业类型过滤结算组别
    async getAccountGroupByType(type) {
      this.query.settleGroupId = "";
      if (type === '' || type === undefined) return;     
      await this.$api.financeapi.selectGroupsUsingGET({propertyTypeId: type}).then(res => {
        if (res.data.status === 200) {
          this.selects.accountGroup = res.data.data;
        }
      })
    },
    async init() {
      this.initParam();
      let [merchants, merchantsContracts] = await Promise.all([
        queryMerchant(), queryMerchantContract()
      ]);
      this.selects.merchants = merchants.data;
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
    }
  },
  watch: {
    'query.settleNo': function() {
      this.$delay(()=>{
        this.getAccountManagement();
      },300)
    },
  },
  mounted() {
    this.$root.eventEmit.$on("SELECTTREE", (res) => {
      if (res.param.length == 0) {
        this.variables.showDelete = false;
        this.variables.showCancel = false;
        return;
      }
      const ifDetete = res.param.some(item => {
        return item.auditState == 10 || item.auditState == 30;
      });
      const ifCancel = res.param.some(item => {
        return item.auditState == 20 || item.auditState == 40;
      });
      if (ifDetete && !ifCancel) {
        this.variables.showDelete = true;
        this.variables.showCancel = false;
      } else if (ifCancel && !ifDetete) {
        this.variables.showCancel = true;
        this.variables.showDelete = false;
      } else {
        this.variables.showCancel = true;
        this.variables.showDelete = true;
      }
    });
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.account {
  padding: 10px 0;
  .account_tabs {
    padding: 0 1.2rem;
    .tab_item {
      h3 {
        color: #666;
        cursor: pointer;
        &.active {
          color: #353c5f;
          &::before {
            content: "";
            display: inline-block;
            width: 5px;
            height: 1.1rem;
            margin-right: 0.3rem;
            vertical-align: sub;
            background: #353c5f;
          }
        }
      }
    }
    .btn_item {
      text-align: right;
    }
  }
}
.circle {
  height: 25px;
  margin: 0 0 15px;
  background: url(../../../assets/yuan-long.png) left center repeat-x;
}
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
</style>