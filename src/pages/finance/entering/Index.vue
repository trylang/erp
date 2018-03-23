<template>
  <con-head title="不规则费用录入">
    <h1>{{dialog.param.contractId}}</h1>
    <h1>{{dialog.param.settleGroupId}}</h1>
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true,
      dialog.param={costItemId: '', amount: '', expenseDate: ''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="dialog.param.haha" placeholder="商户" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :label="item.label"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.contractId" :disabled="!!this.$route.query.contractId" placeholder="合同" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.label"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">结算组别</span>
            <el-select v-model="query.settleGroupId" :disabled="!!this.$route.query.settleGroupId" placeholder="结算组别" class="dialogselect">
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
    <erp-table :header="header" :content="content"></erp-table>
    <el-row>
      <el-col :span="2" :offset="22">
        <el-button type="primary" @click="addEntering">提交</el-button>
      </el-col>
    </el-row>
    <erp-dialog :title="dialog.param.itemId? '修改不规则费用': '添加不规则费用'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryAccountGroup, queryMerchant } from "@/utils/rest/financeAPI";
import { _changeJson, _replace, _remove, _uuid } from "@/utils";

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
        {
          label: "费用项目",
          type: "text",
          name: "costItemName"
        },
        {
          label: "收款金额",
          type: "text",
          name: "amount"
        },
        {
          label: "费用日期",
          name: "expenseDate",
          type: "text",
          filter: "yyyy-MM-dd hh:mm:ss.S"
        },
        {
          label: "备注",
          type: "text",
          name: "remark"
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
              type: "",
              class: "edit",
              click: (item) => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              class: "delete",
              click: (item, data) => {
                this.deleteDialog(item, data);
              }
            }
          ]
        }
      ],
      content: {
        list: []
      },
      dialog: {
        models: [{
          label: '费用项目',
          name: 'costItemId',
          type: 'text',
          placeholder: '请输入费用项目'
        }, {
          label: '收款金额',
          name: 'amount',
          type: 'text',
          placeholder: '请输入收款金额'
        }, {
          label: '费用日期',
          name: 'expenseDate',
          type: 'date',
          placeholder: '请选择费用日期'
        }, {
          label: '备注',
          name: 'remark',
          type: 'textarea',
          placeholder: '请填写备注'
        }],       
        dialogVisible: false,
        param: {
          itemId: 1,
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
        merchants: [], //商户
        accountGroup: [], // 结算组别
        shops: [{
          id: 1,
          label: '商铺1'
        }, {
          id: 2,
          label: '商铺2'
        }],
        expenses: [{
          id: 11,
          label: '费用11'
        }, {
          id: 22,
          label: '费用22'
        }]
      },
      query: {
        contractId: '',
        settleGroupId: '',
        item: []
      }
    };
  },
  mounted() {},
  methods: {
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id || this.dialog.param.itemId) {
        // 修改
        this.editItem(this.dialog.param);        
      } else {
        // 新增
        this.dialog.param.itemId = _uuid();
        this.addItem(this.dialog.param);
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该费用录入, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteItem(item);
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    addItem(param) {
      //TODO: 调用账单周期的接口地方，返回cycleId
      param.cycleId = 2;
      this.content.list.unshift(param);
      this.dialog.dialogVisible = false;
    },
    editItem(param) {
      if (param.id) {
        _replace('itemId', this.content.list, param);
      } else {
        _replace('id', this.content.list, param);
      }     
      this.dialog.dialogVisible = false;
    },
    deleteItem(param) {
      if (param.id) {
        _remove('id', param.id, this.content.list);
      } else {
        _remove('itemId', param.itemId, this.content.list);
      }
    },
    async getEntering(pageNum, callback) {
      const params = {
        id: this.$route.query.id,
        pageNum
      };
      this.$api.financeapi.listUsingGET_13(params).then(res => {
        const data = res.data;
        if (data.code === 200) {
          data.data.list.forEach(item => {
            item.expenseDate = item.cycleDate;
          });    
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async addEntering() {
      const param = {
        contractId: this.query.contractId,
        settleGroupId: this.query.settleGroupId,
        item: this.content.list
      }
      const apiFunc = (api, param) => {
        this.$api.financeapi[api]({param}).then(returnObj => {
          if (returnObj.data.code === 200) {
            $message("success", "提交成功!");
            this.$router.push({path: '/finance/irregularCost'});
          } else {
            $message("error", "修改失败!");
          }
        });
      };

      if (this.$route.query.id) {
        param.id = this.$route.query.id;
        await apiFunc('updateUsingPUT_8', param);
      } else {
        await apiFunc('saveUsingPOST_3', param);
      }      
    },
    async editEntering(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_9(params).then(returnObj => {
        if (returnObj.data.code === 200) {
          this.getCost(0, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", "修改失败!");
        }
      });
    },
    async deleteEntering(item) {
      const param = {
        id: item.id
      };
      this.$api.financeapi.delUsingDELETE_3(param).then(res => {
        const data = res.data;
        if (data.code === 200) {
          this.getCost(0, () => {
            $message("success", "删除成功");
          });
        } else {
          $message("error", "删除失败");
          return data.message;
        }
      });
    },
    async init() {
      let [accountGroup, merchants] = await Promise.all([queryAccountGroup()]);
      this.selects.accountGroup = accountGroup.data.list;
      // this.selects.merchants = merchant;
      // console.log(merchants);
      if (!this.$route.query.id) return;
      await this.getEntering();
      this.query.contractId = this.$route.query.contractId;
      this.query.merchantId = this.$route.query.merchantId;
      this.query.settleGroupId = this.$route.query.settleGroupId;
    }
  },
  computed: {},
  watch: {
    '$route': 'getEntering'
  },
  created() {
    this.init();
  }
};

// TODO: 1. 租务接口的商户和合同列表接口没有； 2. 点添加确定时，需要调用租务接口（账单周期接口，返回cycleId）；
</script>

<style scoped>

</style>