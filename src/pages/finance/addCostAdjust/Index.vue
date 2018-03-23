<template>
  <con-head title="免租">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={amount: '', costItemId: '', expenseDate: '', reduceType: ''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.name" placeholder="商户" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.contractId" placeholder="合同" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="searchselect">
          <span class="inputname">结算组别</span>
          <el-select v-model="query.settleGroupId" placeholder="结算组别" class="dialogselect">
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
        <el-button type="primary" @click="addCostAdjust">提交</el-button>
      </el-col>
    </el-row>
    <erp-dialog :title="dialog.param.id? '修改费用调整': '添加费用调整'" :dialog="dialog"></erp-dialog>
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
          type: "text",
          name: "expenseDate"
        },
        {
          label: "备注",
          type: "text",
          name: "desc"
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
        },{
          label: '收款金额',
          name: 'amount',
          type: 'text',
          placeholder: '请填写收款金额'
        }, {
          label: '费用日期',
          name: 'expenseDate',
          type: 'date',
          placeholder: '请选择费用日期'
        },{
          label: '备注',
          name: 'remark',
          type: 'textarea',
          placeholder: '请填写备注'
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
        accountGroup: [],
        expenses: [{
          id: 11,
          label: '费用11'
        }, {
          id: 22,
          label: '费用22'
        }]
      },
      query: {
        name: ""
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
      if (this.dialog.param.itemId) {
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
          this.deleteItem(item.itemId);
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    addItem(param) {
      this.content.list.unshift(param);
      this.dialog.dialogVisible = false;
    },
    editItem(param) {
      _replace('itemId', this.content.list, param);
      this.dialog.dialogVisible = false;
    },
    deleteItem(param) {
      _remove('itemId', param, this.content.list);
    },
    async getaddCostAdjust(pageNum, callback) {
      const params = {
        pageNum
      };
      this.$api.financeapi.listUsingGET_27(params).then(res => {
        const data = res.data;
        if (data.code === 200) {
          const Ajson = this.selects.accountGroupJson;
          const Pjson = this.selects.propertyTypeJson;
          data.data.list.forEach(item => {
            item.settleGroupLabel = Ajson[item.settleGroupId]
              ? Ajson[item.settleGroupId].settleGroupName
              : "";
            item.propertyTypeLabel = Pjson[item.propertyType]
              ? Pjson[item.propertyType].label
              : "";
          });
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async addaddCostAdjust() {
      const param = {
        // id: 1,
        contractId: this.query.contractId,
        settleGroupId: this.query.settleGroupId,
        item: this.content.list
      }
      await this.$api.financeapi.saveUsingPOST_6({param}).then(returnObj => {
        if (returnObj.data.code === 200) {
          $message("success", "提交成功!");
          this.$router.push({path: '/finance/costAdjust'});
          // this.getCost(0, () => {
          //   $message("success", "修改成功!");
          //   this.dialog.dialogVisible = false;
          // });
        } else {
          $message("error", "修改失败!");
        }
      });
      
    },
    async init() {
      let [accountGroup, merchants] = await Promise.all([queryAccountGroup()]);
      // this.selects.accountGroupJson = accountGroup.json;
      this.selects.accountGroup = accountGroup.data.list;
      // this.selects.merchants = merchant;
      // console.log(merchants);
      // this.selects.propertyTypeJson = _changeJson(this.selects.shops, "id");
      // await this.getEntering();
      // this.dialog.models[2].options = accountGroup.data.list;
      // this.dialog.models[3].options = this.selects.expenses;
      // this.dialog.models[4].options = this.selects.shops;
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