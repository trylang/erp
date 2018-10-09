<template>
  <con-head title="免租" v-loading="loading">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, edit = false,
      dialog.param={costItemId: '',reduceType: '',amount: '', expenseDate: ''}"  :disabled="!!(query.contractObj == {}||!query.settleGroupId)">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" placeholder="请选择商户" filterable clearable class="dialogselect" @change="checkUserHandler(query.merchantId)" :disabled="!!this.$route.query.merchantId">
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
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">合同</span>
            <el-select v-model="query.contractObj" value-key="contractCode" :disabled="!!this.$route.query.contractCode" placeholder="请选择合同" filterable clearable class="dialogselect" @change="checkHetongHandler(query.contractObj.contractCode, 'select')">
              <el-option
                v-for="item in selects.contracts"
                :key="item.contractCode"
                :label="item.contractAndShop"
                :value="item">
              </el-option>
            </el-select>
        </div>
      </el-col>
      </el-row>
      <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">结算组别</span>
            <el-select v-model="query.settleGroupId" :disabled="!!this.$route.query.settleGroupId" placeholder="请选择结算组别" filterable clearable class="dialogselect" @change="checkjsHandler(query.settleGroupId)">
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
    <erp-dialog :title="dialog.param.itemId || dialog.param.id? '修改免租项目': '增加免租项目'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryCost, queryContract } from "@/utils/rest/financeAPI";
import {
  _changeJson,
  _replace,
  _remove,
  _uuid,
  numberNotE,
  numMax10,
  numPartmax2
} from "@/utils";
import { formatDate, fmoney } from "@/utils/filter";

export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
  },
  data() {
    const _this = this;
    return {
      loading: false,
      edit: false,
      header: [
        {
          label: "费用项目",
          type: "text",
          name: "costItemName"
        },
        {
          label: "免租类型",
          type: "status",
          name: "reduceType",
          option: {
            10: "指定金额",
            20: "全免",
            30: "比例"
          }
        },
        {
          label: "免租金额",
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
              label: "修改",
              name: "edit",
              type: "",
              class: "edit",
              click: item => {
                this.edit = true;
                this.dialog.param = {};
                item.costItemId = parseInt(item.costItemId);
                if (item.reduceType == 30) item.amount = item.amount.slice(0, item.amount.length -1);
                Object.assign(this.dialog.param, item);
                if (this.$route.query.settleGroupId && item.id) {
                  this.checkjsHandler(this.$route.query.settleGroupId, () => {
                    this.dialog.dialogVisible = true;
                  });
                } else {
                  this.dialog.dialogVisible = true;
                }
                this.dialog.models[1].event(item.reduceType);
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
            label: "免租类型",
            name: "reduceType",
            type: "select",
            value: "id",
            valueLabel: "settleGroupName",
            options: [
              { id: 10, settleGroupName: "指定金额" },
              { id: 20, settleGroupName: "全免" },
              { id: 30, settleGroupName: "比例" }
            ],
            placeholder: "请选择免租类型",
            event(reduceType) {
              if (reduceType == 20) {
                if (_this.dialog.models.length == 5) {
                   _this.dialog.models.splice(3, 1);
                }else  if (_this.dialog.models.length == 4) {
                  _this.dialog.models.splice(3, 0);                  
                }
                _this.dialog.param.amount = null;
              } else if (reduceType == 10) {
                if (_this.dialog.models.length == 5) {
                  _this.dialog.models.splice(3, 1, {
                    label: "免租金额",
                    name: "amount",
                    type: "number",
                    placeholder: "请输入免租金额"
                  });
                } else if (_this.dialog.models.length == 4) {
                  _this.dialog.models.splice(3, 0, {
                    label: "免租金额",
                    name: "amount",
                    type: "number",
                    placeholder: "请输入免租金额"
                  });
                }
              } else if (reduceType == 30) {
                if (_this.dialog.models.length == 5) {
                  _this.dialog.models.splice(3, 1, {
                    label: "免租比例",
                    name: "amount",
                    type: "number",
                    placeholder: "请输入免租比例",
                    slot: "%"
                  });
                } else if (_this.dialog.models.length == 4) {
                  _this.dialog.models.splice(3, 0, {
                    label: "免租比例",
                    name: "amount",
                    type: "number",
                    placeholder: "请输入免租比例",
                    slot: "%"
                  });
                }
              }
            }
          },
          {
            label: "费用日期",
            name: "expenseDate",
            type: "date",
            // pickerOptions: {
            //   disabledDate(time) {
            //     return time.getTime() > Date.now();
            //   }
            // },
            placeholder: "请选择费用日期"
          },
          {
            label: "免租金额",
            name: "amount",
            type: "number",
            placeholder: "请输入免租金额"
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
          id: "",
          userId: "",
          costItemId: "",
          reduceType: "",
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
        contracts: [], //合同
        queryCost: []
      },
      query: {
        contractObj: {},
        contractId: "",
        settleGroupId: "",
        merchantId: "",
        item: [],
        cycleId: ""
      }
    };
  },
  mounted() {
    this.query.merchantId = this.querys.merchantId;
    this.query.contractObj.id = parseInt(this.querys.contractId);
    this.query.contractObj.contractCode = this.querys.contractCode;
    this.query.settleGroupId = this.querys.settleGroupId;
    this.$api.rentapi
      .listForFormalUsingGET()
      .then(res => {
        this.selects.merchants = res.data.data;
      })
      .catch(res => {
        this.$message.error(res.data.msg);
      });
    this.init();
  },
  methods: {
    checkUserHandler(id) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      //根据商户id查询 合同列表
      this.$api.rentapi
        .listFormalUsingGET({ merchantId: id })
        .then(res => {
          this.selects.contracts = res.data.data;
          this.query.contractObj = {};
          this.query.settleGroupId = "";
          this.dialog.param.costItemId = "";
            if(this.$route.query.contractCode){
                res.data.data.map(item=>{
                    if(item.contractCode == this.$route.query.contractCode){
                        this.query.contractObj = item;
                    }
                })
            }
        })
        .catch(res => {
          this.$message.error(res.data.msg);
        });
    },
    checkHetongHandler(id, type) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      //根据合同id查询 结算组别列表
      this.$api.rentapi
        .getIrregularCostInfoUsingGET({ contractCode: id, settleGroupId: -1 })
        .then(res => {
          if (res.data.data && res.data.data.settleGroups) {
            this.selects.accountGroup = res.data.data.settleGroups;
            if (type == "select") {
              this.query.settleGroupId = "";
              this.dialog.param.costItemId = "";
            }
          }
        });
    },
    checkjsHandler(id, cb) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      this.$api.rentapi
        .getIrregularCostInfoUsingGET({
          contractCode: this.query.contractObj.contractCode,
          settleGroupId: id
        })
        .then(res => {
          this.dialog.models[0].options =
            res.data.data.settleGroups[0].costItems;
          if (cb) cb();
        });
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (!this.dialog.param.expenseDate) {
        $message('info','请输入费用日期');
        return;
      }
      if (!numMax10(this.dialog.param.amount)) {
        $message("info", "请输入大于等于0，小于10位数的正数");
        return;
      }
      if (!numPartmax2(this.dialog.param.amount)) {
        $message("info", "请输入小于三位小位数的正数");
        return;
      }
      this.dialog.param.amount = this.dialog.param.amount == null || '' || undefined ?  null : parseFloat(this.dialog.param.amount);
      this.dialog.param.costItemName = this.selects.queryCost[
        this.dialog.param.costItemId
      ].costItemName;
      if ((this.dialog.param.id || this.dialog.param.itemId) && this.edit) {
        // 修改
        this.editItem(this.dialog.param);
      } else {
        // 新增
        this.dialog.param.itemId = _uuid();
        this.addItem(this.dialog.param);
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该数据，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteItem(item);
        });
    },
    addItem(param) {
      const expenseDate = formatDate(param.expenseDate, "yyyy-MM-dd");
      this.getCycleId(
        {
          contractCode: this.query.contractObj.contractCode,
          costItemId: param.costItemId,
          expenseDate
        },
        res => {
          const data = res.data.data;
          param.cycleId = data.id; //cycleId：结算周期返回的id
          param.expenseDate = `${expenseDate}(${data.beginDate}~${
            data.endDate
          })`;
          if (param.reduceType == 30) param.amount = param.amount + '%';
          if (param.reduceType == 10) param.amount = fmoney(param.amount);
          if (param.reduceType == 20) param.amount = '';
          this.content.list.unshift(param);
          this.dialog.dialogVisible = false;
        }
      );
    },
    editItem(param) {
      const expenseDate = formatDate(param.expenseDate, "yyyy-MM-dd");
      this.getCycleId(
        {
          contractCode: this.query.contractObj.contractCode,
          costItemId: param.costItemId,
          expenseDate
        },
        res => {
          const data = res.data.data;
          param.cycleId = data.id; //cycleId：结算周期返回的id
          param.expenseDate = `${expenseDate}(${data.beginDate}~${
            data.endDate
          })`;
          if (param.reduceType == 30) param.amount = param.amount + '%';
          if (param.reduceType == 10) param.amount = fmoney(param.amount);
          if (param.reduceType == 20) param.amount = '';
          if (param.id) {
            _replace("id", this.content.list, param);
          } else {
            _replace("itemId", this.content.list, param);
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
    async getCycleId(param, callback) {
      this.$api.rentapi.cycleUsingGET(param).then(res => {
        if (res.data.status === 200) {
          if (callback) callback(res);
        } else {
          $message("error", res.data.msg);
        }
      });
    },
    async queryContracts(param) {
      await queryContract({ merchantId: this.query.merchantId }).then(res => {
        this.selects.contracts = res.data.list;
      });
    },
    async getEntering(page = {}, callback) {
      if (!this.$route.query.id) return;
      const params = {
        id: this.$route.query.id,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_17(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
          data.data.list.forEach(item => {
            item.expenseDate = item.cycleDate;
            if (item.reduceType == 30) item.amount = item.amount + '%';
            if (item.reduceType == 10) item.amount = fmoney(item.amount);
            if (item.reduceType == 20) item.amount = '';
          });
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async addEntering() {
      if (!this.query.contractObj.id) {
        $message("info", '请先选择合同');
        return;
      }
      this.loading = true;
      this.content.list.forEach(item => {
        item.replaceExpenseDate = item.expenseDate;
        item.expenseDate = item.expenseDate.replace(
          /(\(\d+-\d+-\d+~\d+-\d+-\d+\))/,
          ""
        );

        if (item.amount != null || '' || undefined) {
          item.amount = item.amount + '';
          if (item.amount.indexOf('%') >= 0) item.amount = item.amount.slice(0, item.amount.length -1);
        }
        
      });
      const param = {
        contractId: this.query.contractObj.id,
        contractCode: this.query.contractObj.contractCode,
        settleGroupId: this.query.settleGroupId,
        item: this.content.list
      };

      const apiFunc = (api, param) => {
        this.$api.financeapi[api](param).then(returnObj => {
          if (returnObj.data.status === 200) {
            $message("success", "提交成功!");
            this.$router.push({ path: "/finance/rentFree" });
            this.loading = false;
          } else {
              this.loading = false;
            this.content.list.forEach(item => {
              item.expenseDate = item.replaceExpenseDate;
            });
            $message("error", returnObj.data.msg);
          }
        });
      };

      if (this.$route.query.id) {
        param.id = this.$route.query.id;
        await apiFunc("updateUsingPUT_11", { id: param.id, param: param });
      } else {
        await apiFunc("saveUsingPOST_6", { request: param });
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
          $message("error", "删除失败");
          return data.message;
        }
      });
    },
    async init() {
      let _this = this;
      let [cost] = await Promise.all([queryCost()]);
      this.selects.queryCost = cost.json;
      if (!this.$route.query.id) return;
      await this.getEntering();
      await this.checkUserHandler(this.$route.query.merchantId);
      await this.checkHetongHandler(this.$route.query.contractCode);
      await this.checkjsHandler(this.$route.query.settleGroupId, function() {
        _this.query.merchantId = parseInt(_this.$route.query.merchantId);
        _this.query.contractObj.id = parseInt(_this.$route.query.contractId);
        _this.query.contractObj.contractCode = _this.$route.query.contractCode;
        _this.query.settleGroupId = parseInt(_this.$route.query.settleGroupId);
      });  
    }
  },
  computed: {
    querys() {
      return this.$route.query;
    }
  },
  watch: {
    $route: "getEntering"
  }
};
</script>

<style scoped>

</style>