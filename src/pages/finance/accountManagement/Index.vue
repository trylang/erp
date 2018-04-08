<template>
  <div class="account">
    <div class="circle"></div>
    <div class="account_tabs">
      <!-- 导航tab栏 -->
      <el-row>
        <el-col class="tab_item" v-for="(item, index) in tabs" :key="index" :span="3">
          <h3 :class="{active: item.id === variables.isActive}" @click="activeFunc(item)">{{item.label}}</h3>
        </el-col>
        <el-col class="btn_item" :offset="9" :span="6">
          <!-- <el-button type="primary" v-if="variables.isActive === 'first'" @click="cancelBill">取消确认</el-button> -->
          <el-button v-if="variables.isActive === 'second'" type="primary" @click="confirmBill">确认</el-button>
          <el-button v-if="variables.isActive === 'third'" type="primary" @click="publishBill">发布</el-button>
          <el-button type="primary" @click="printContent">打印</el-button>          
          <el-button type="primary" v-if="variables.isActive === 'first'" @click="deleteBill">删除</el-button>         
        </el-col>
      </el-row>
      <!-- tab1当中的搜索框 -->
      <section class="tab1" v-if="variables.isActive === 'first'">
        <el-row>
          <el-col :span="9">
            <div class="searchbox">
              <input type="text" placeholder="请输入结算单号" v-model="query.settleNo" @keyup.enter="getAccountManagement"><i class="iconfont icon-sousuo"></i>
            </div>
          </el-col>
          <el-col :span="9" :offset="6">
            <div class="searchselect">
                <span class="inputname">商户</span>
                <el-select v-model="query.merchantId" @change="getAccountManagement" placeholder="商户名称" class="dialogselect">
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
        <el-row>
          <el-col :span="9">
            <div class="searchselect">
                <span class="inputname">结算组别</span>
                <el-select v-model="query.settleGroupId" @change="getAccountManagement" placeholder="结算组别" class="dialogselect">
                  <el-option
                    v-for="item in selects.accountGroup"
                    :key="item.id"
                    :label="item.settleGroupName"
                    :value="item.id">
                  </el-option>
                </el-select>
            </div>
          </el-col>
          <el-col :span="9" :offset="6">
            <div class="searchselect">
                <span class="inputname">合同</span>
                <el-select v-model="query.contractId" @change="getAccountManagement" placeholder="合同名称" class="dialogselect">
                  <el-option
                    v-for="item in selects.contracts"
                    :key="item.id"
                    :label="item.contractCode"
                    :value="item.id">
                  </el-option>
                </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9">
            <div class="searchselect">
              <span class="inputname">结算日</span>
              <el-date-picker
                v-model="query.settleDate"
                @change="getAccountManagement"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期">
              </el-date-picker>                
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <account-tree :createTree="createTree" :header="header" :content="content"></account-tree>  
        </el-row>
      </section>
    <!-- tab2当中的内容 --> 
      <section class="tab2" v-if="variables.isActive === 'second'">
        <el-row>
          <el-col :span="9">
            <div class="searchbox">
              <input type="text" placeholder="请输入商户号/合同号/结算单号" v-model="query.settleNo" @keyup.enter="getAccountConfirm"><i class="iconfont icon-sousuo"></i>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <account-tree :createTree="createTree" :header="header" :content="content"></account-tree>  
        </el-row>
      </section>
    <!-- tab3当中的内容 -->  
      <section class="tab3" v-if="variables.isActive === 'third'">
        <el-row>
          <el-col :span="9">
            <div class="searchbox">
              <input type="text" placeholder="请输入商户号/合同号/结算单号" v-model="query.settleNo" @keyup.enter="getAccountPulish"><i class="iconfont icon-sousuo"></i>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <account-tree :createTree="createTree" :header="header" :content="content"></account-tree>  
        </el-row>
      </section>
    </div>
  </div>
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
  queryContract
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
      header: [
        {
          label: "收费项目",
          type: "text",
          name: "id",
          style: {
            "background": "#fff",
            "border-bottom": "1px solid #e4e4e4"
          }
        },
        {
          label: "日期范围（年/月/日）",
          name: "update_time",
          type: "time",
          filter: "yyyy-MM-dd hh:mm:ss.S",
          style: {
            "background": "#fff",
            "border-bottom": "1px solid #e4e4e4"
          }
        },
        {
          label: "金额（元）",
          type: "text",
          name: "name",
          style: {
            "background": "#fff",
            "border-bottom": "1px solid #e4e4e4"
          }
        },
        {
          label: "备注",
          type: "text",
          name: "desc",
          style: {
            "background": "#fff",
            "border-bottom": "1px solid #e4e4e4"
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
        contracts: []
      },
      query: {
        id: []
      },
      variables: {
        isActive: "first"
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
  methods: {
    initParam() {
      this.query = {
        settleNo: "",
        merchantId: "",
        contractId: "",
        settleGroupId: "",
        settleDate: "",
      }
    },
    handleClick() {},
    activeFunc(item) {
      this.variables.isActive = item.id;
      this.initParam();
      if (item.id === 'first') this.getAccountManagement();
      else if (item.id === 'second') this.getAccountConfirm();
      else if (item.id === 'third') this.getAccountPulish();
    },
    printContent() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'printBill'});
    },
    cancelBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'cancelBill'});
    },
    confirmBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'confirmBill'});
    },
    publishBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'publishBill'});
    },
    deleteBill() {
      this.$root.eventEmit.$emit('ACCOUNTTREE', {type: 'deleteBill'});
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
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    // 结算单管理
    async getAccountManagement() {
      const param = {
        settleNo: this.query.settleNo,
        merchantId: this.query.merchantId,
        contractId: this.query.contractId,
        settleGroupId: this.query.settleGroupId,
        settleDate: this.query.settleDate,
      };
      await this.$api.financeapi.manageListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
        }        
      });
    },
    // 结算单确认
    async getAccountConfirm() {
      const param = {
        settleNo: this.query.settleNo,
      };
      await this.$api.financeapi.confirmListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          console.log(returnObj);
          $message('success', '结算单确认成功！');
          // this.createTree = formatTree(returnObj.data.data);
        }  
      });
    },
    // 结算单发布
    async getAccountPulish() {
      const param = {
        settleNo: this.query.settleNo,
      };
      await this.$api.financeapi.publishListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          console.log(returnObj);
          $message('success', '结算单发布成功！');
          // this.createTree = formatTree(returnObj.data.data);
        }  
      });
    },
    async init() {
      this.initParam();
      let [accountGroup, merchants, contracts] = await Promise.all([
        queryAccountGroup(),
        queryMerchant(),
        queryContract()
      ]);
      this.selects.accountGroup = accountGroup.data.list;
      this.selects.merchants = merchants.data.list;
      this.selects.contracts = contracts.data.list;
      await this.getAccountManagement();
    }
  },
  computed: {},
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
</style>