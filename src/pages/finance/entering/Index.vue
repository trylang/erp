<template>
  <con-head title="不规则费用录入">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true,
      dialog.param={costItemId: '', amount: '', expenseDate: ''}" :disabled="!!(!query.contractId||!query.settleGroupId)">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户" class="dialogselect" @change="checkUserHandler(query.merchantId)" :disabled="!!this.$route.query.merchantId">
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :label="item.merchantName"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.contractId" :disabled="!!this.$route.query.contractId" placeholder="合同" class="dialogselect" @change="checkHetongHandler(query.contractId)">
              <el-option
                v-for="item in selects.contracts"
                :key="item.id"
                :label="item.contractCode"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">结算组别</span>
            <el-select v-model="query.settleGroupId" :disabled="!!this.$route.query.settleGroupId" placeholder="结算组别" class="dialogselect" @change="checkjsHandler(query.settleGroupId)">
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
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage"  @pageSize="getpageSize"></erp-table>
    <el-row>
      <el-col :span="2" :offset="22">
        <el-button type="primary" @click="addEntering">提交</el-button>
      </el-col>
    </el-row>
    <erp-dialog 
      :title.sync="dialog.param.itemId? '修改不规则费用': '添加不规则费用'" 
      :dialog.sync="dialog"     
      ></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryCost, queryContract } from "@/utils/rest/financeAPI";
import { _changeJson, _replace, _remove, _uuid } from "@/utils";
import { formatDate } from "@/utils/filter";

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
          filter: "yyyy-MM-dd"
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
              click: item => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                if (this.$route.query.settleGroupId && item.id) {                  
                  this.checkjsHandler(this.$route.query.settleGroupId, ()=>{
                    this.dialog.dialogVisible = true;
                  });
                } else {
                  this.dialog.dialogVisible = true;
                }
                               
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
        models: [
          {
            label: "费用项目",
            name: "costItemId",
            type: "select",
            value: "id",
            valueLabel: "costItemName",
            options: [],
            placeholder: "请输入费用项目"
          },
          {
            label: "收款金额",
            name: "amount",
            type: "text",
            placeholder: "请输入收款金额"
          },
          {
            label: "费用日期",
            name: "expenseDate",
            type: "date",
            placeholder: "请选择费用日期"
          },
          {
            label: "备注",
            name: "remark",
            type: "textarea",
            placeholder: "请填写备注"
          }
        ],
        dialogVisible: false,
        param: {
          itemId: "",
          costItemId: "",
          amount: "",
          expenseDate: ""
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
        merchants: [], //商户
        accountGroup: [], // 结算组别
        contracts: [], // 合同
        queryCost: {} // 项目组别
      },
      query: {
        contractId: "",
        settleGroupId: "",
        item: [],
        merchantId: "",
        cycleId: ""
      }
    };
  },
  mounted() {
    this.$api.rentapi
      .listUsingGET_12({
          status:1
      })
      .then(res => {
        //商户列表 status:1 已确定状态没加
        this.selects.merchants = res.data.data;
      })
      .catch(res => {
        this.$message.error(res.data.msg);
      });
  },
  methods: {
    checkUserHandler(id) {
      //根据商户id查询 合同列表
      this.$api.rentapi
        .getListForPageUsingGET({ merchantId: id })
        .then(res => {
          this.selects.contracts = res.data.data.list;
        })
        .catch(res => {
          this.$message.error(res.data.msg);
        });
    },
    checkHetongHandler(id) {
      //根据合同id查询 结算组别列表
      this.$api.rentapi
        .getIrregularCostInfoUsingGET({ contractId: id, settleGroupId: -1 })
        .then(res => {
          if (res.data.data.settleGroups) {
            this.selects.accountGroup = res.data.data.settleGroups;
          }
        })
        .catch(res => {
          this.$message.error(res.data.msg);
        });
    },
    checkjsHandler(id, cb) {
      this.$api.rentapi
        .getIrregularCostInfoUsingGET({
          contractId: this.query.contractId,
          settleGroupId: id
        })
        .then(res => {
          this.dialog.models[0].options =
            res.data.data.settleGroups[0].costItems;
            if(cb) cb();
        })
        .catch(res => {
          this.$message.error(res.data.msg);
        });
    },
    getCurrentPage(pageNum) {
      this.getEntering({ pageNum });
    },
    getpageSize(pageSize) {
      this.getEntering({ pageSize });
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      this.dialog.param.costItemName = this.selects.queryCost[
        this.dialog.param.costItemId
      ].costItemName;
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
      const expenseDate = formatDate(param.expenseDate, "yyyy-MM-dd");
      this.getCycleId(
        {
          contractId: this.query.contractId,
          costItemId: param.costItemId,
          expenseDate
        },
        (res) => {
          const data = res.data.data;
          param.cycleId = data.id; //cycleId：结算周期返回的id
          param.expenseDate = `${expenseDate}(${data.beginDate}~${
            data.endDate
          })`;
          this.content.list.unshift(param);
          this.dialog.dialogVisible = false;
        }
      );
    },
    editItem(param) {
      const expenseDate = formatDate(param.expenseDate, "yyyy-MM-dd");
      this.getCycleId(
        {
          contractId: this.query.contractId,
          costItemId: param.costItemId,
          expenseDate
        },
        (res) => {
          const data = res.data.data;
          param.cycleId = data.id; //cycleId：结算周期返回的id
          param.expenseDate = `${expenseDate}(${data.beginDate}~${
            data.endDate
          })`;
          if (param.id) {
            _replace("itemId", this.content.list, param);
          } else {
            _replace("id", this.content.list, param);
          }
          this.dialog.dialogVisible = false;
        }
      );
    },
    deleteItem(param) {
      if (param.id) {
        _remove("id", param.id, this.content.list);
      } else {
        _remove("itemId", param.itemId, this.content.list);
      }
    },
    async getEntering(page = {}, callback) {
      if (!this.$route.query.id) return;
      const params = {
        id: this.$route.query.id,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_13(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
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
    //结算周期接口 返回cycleId
    async getCycleId(param, callback) {
      this.$api.rentapi.cycleUsingGET(param).then(res => {
        if (res.data.status === 200) {
          if (callback) callback(res);
        } else {
          $message('error', res.data.msg);
        }        
      });
    },
    async addEntering() {
      this.content.list.forEach(item => {
        item.replaceExpenseDate = item.expenseDate;
        item.expenseDate = item.expenseDate.replace(/(\(\d+-\d+-\d+~\d+-\d+-\d+\))/, '');
      });
      const param = {
        contractId: this.query.contractId,
        settleGroupId: this.query.settleGroupId,
        item: this.content.list
      };
      const apiFunc = (api, param) => {
        this.$api.financeapi[api](param).then(returnObj => {
          if (returnObj.data.status === 200) {
            $message("success", "提交成功!");
            this.$router.push({ path: "/finance/irregularCost" });
          } else {
            this.content.list.forEach(item => {
              item.expenseDate = item.replaceExpenseDate;
            });
            $message("error", returnObj.data.msg);
          }
        });
      };

      if (this.$route.query.id) {
        param.id = this.$route.query.id;
        await apiFunc("updateUsingPUT_8", {param});
      } else {
        let request = {
          request: param
        };
        await apiFunc("saveUsingPOST_3", request);
      }
    },
    async editEntering(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_9(params).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.getCost(0, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", returnObj.data.msg);
        }
      });
    },
    async deleteEntering(item) {
      const param = {
        id: item.id
      };
      this.$api.financeapi.delUsingDELETE_3(param).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.getCost(0, () => {
            $message("success", "删除成功");
          });
        } else {
          $message("error", data.msg);
        }
      });
    },
    async queryContracts(param) {
      await queryContract({ merchantId: this.query.merchantId || param }).then(res => {
        this.selects.contracts = res.data.list;
      });
    },
    async getCyclePeriod(params, callback) {
      const param = {
        contractId: this.query.contractId,
        costItemId: params.costItemId,
        expenseDate: params.expenseDate
      };
      this.$api.rentapi.cycleUsingGET(param).then(res => {
        if (callback) callback();
      });
    },
    async init() {
      let [cost] = await Promise.all([queryCost()]);
      this.selects.queryCost = cost.json;
      if (!this.$route.query.id) return;
      this.query.merchantId = this.$route.query.merchantId;
      this.query.contractId = this.$route.query.contractId;
      this.query.settleGroupId = this.$route.query.settleGroupId;
      await this.getEntering();      
      
      await this.queryContracts(this.$route.query.merchantId);
      await this.checkHetongHandler(this.$route.query.contractId);
      await this.checkjsHandler(this.$route.query.settleGroupId);
    }
  },
  computed: {},
  watch: {
    $route: "init"
  },
  created() {
    this.init();
  }
};

</script>

<style scoped>

</style>