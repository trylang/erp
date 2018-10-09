<template>
  <con-head title="不规则费用录入" v-loading="loading">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, edit=false,
      dialog.param={costItemId: '', amount: '', expenseDate: ''}" :disabled="!!(query.contractObj == {}||!query.settleGroupId)">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户" filterable clearable class="dialogselect"
             :disabled="!!this.$route.query.merchantId"
             @change="checkUserHandler(query.merchantId)">
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
            <el-select v-model="query.contractObj"  
            placeholder="合同" class="dialogselect" value-key="contractCode" filterable clearable :disabled="!!this.$route.query.contractCode" @change="checkHetongHandler(query.contractObj.contractCode)">
              <el-option
                v-for="item in selects.contracts"
                :key="item.contractCode"
                :label="item.contractAndShop"
                :value="item">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">结算组别</span>
            <el-select v-model="query.settleGroupId" filterable clearable placeholder="结算组别" class="dialogselect" 
            :disabled="!!this.$route.query.settleGroupId" @change="checkjsHandler(query.contractObj.id, query.settleGroupId)">
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
      :title.sync="dialog.param.itemId || dialog.param.id? '修改不规则费用': '添加不规则费用'" 
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
import { _changeJson, _replace, _remove, _uuid, numberNotE, numMax10, numPartmax2 } from "@/utils";
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
      loading: false,
      edit: false,
      header: [
        {
          label: "费用项目",
          type: "text",
          name: "costItemName"
        },
        {
          label: "收款金额",
          type: "fmoney",
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
                this.edit = true;      
                this.dialog.dialogVisible = true;
                this.dialog.param = {};
                item.costItemId = parseInt(item.costItemId);
                Object.assign(this.dialog.param, item);
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
            value: "costItemId",
            valueLabel: "costItemName",
            options: [],
            placeholder: "请输入费用项目"
          },
          {
            label: "收款金额",
            name: "amount",
            type: "number",
            placeholder: "请输入收款金额"
          },
          {
            label: "费用日期",
            name: "expenseDate",
            type: "date",
            /*pickerOptions: {
              disabledDate(time) {
                return time.getTime() > Date.now();
              }
            },*/
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
          id: "",
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
        contractObj: {},
        contractCode: "",
        settleGroupId: "",
        item: [],
        merchantId: "",
        cycleId: ""
      }
    };
  },
  methods: {
    async checkUserHandler(id) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      //根据商户id查询 合同列表
      await this.$api.rentapi
        .listFormalUsingGET({ merchantId: id})
        .then(res => {
          this.selects.contracts = res.data.data;
          this.query.contractObj = {};
          this.query.settleGroupId = '';
          this.dialog.param.costItemId = '';
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
    async checkHetongHandler(id) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      //根据合同id查询 结算组别列表
      await this.$api.rentapi
        .getSettleGroupUsingGET({ contractCode: id})
        .then(res => {
          if (res.data.status === 200) {
            this.selects.accountGroup = res.data.data;
            this.query.settleGroupId = '';
            this.dialog.param.costItemId = '';
          }
        });
    },
    async checkjsHandler(contractId, settleGroupId, cb) {
      if (!this.$route.query.id) {
        this.content.list = [];
      }
      await this.$api.rentapi
        .getCostItemsUsingGET({
          contractId,
          settleGroupId,
          costType: 2
        })
        .then(res => {
          if (res.data.status === 200) {
            this.dialog.models[0].options =
              res.data.data;
            if (cb) cb();
          }         
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
      if (!this.dialog.param.expenseDate) {
        $message('info','请输入费用日期');
        return;
      }
      if (!numMax10(Math.abs(this.dialog.param.amount))) {
        $message('info','请输入小于10位数的数字');
        return;
      }
      if (!numPartmax2(Math.abs(this.dialog.param.amount))) {
        $message('info','请输入小于三位小位数的数字');
        return;
      }
      const itemsObj = _changeJson(this.dialog.models[0].options, 'costItemId');     
      this.dialog.param.amount = parseFloat(this.dialog.param.amount);
      this.dialog.param.costItemName = itemsObj[
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
      this.$confirm("此操作将永久删除该费用录入, 是否继续?", "提示", {
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
          $message("error", res.data.msg);
        }
      });
    },
    async addEntering() {
      if (!this.query.contractObj.contractCode) {
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
            this.$router.push({ path: "/finance/irregularCost" });
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
        await apiFunc("updateUsingPUT_8", { param });
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
    async getCyclePeriod(params, callback) {
      const param = {
        contractCode: this.query.contractCode,
        costItemId: params.costItemId,
        expenseDate: params.expenseDate
      };
      this.$api.rentapi.cycleUsingGET(param).then(res => {
        if (callback) callback();
      });
    },
    async getMerchants() {
      await this.$api.rentapi
      .listForFormalUsingGET()
      .then(res => {
        this.selects.merchants = res.data.data;
      })
      .catch(res => {
        this.$message.error(res.data.msg);
      });
    },
    async init() {
      let [cost] = await Promise.all([queryCost()]);
      this.selects.queryCost = cost.json;
      const merchantId = parseInt(this.$route.query.merchantId);
      const contractCode = this.$route.query.contractCode;
      const contractId = parseInt(this.$route.query.contractId);
      const settleGroupId = parseInt(this.$route.query.settleGroupId);

      await this.getEntering();
      await this.getMerchants();
      if (!this.$route.query.id) return;
      await this.checkUserHandler(merchantId);
      await this.checkHetongHandler(contractCode);
      await this.checkjsHandler(contractId, settleGroupId);
            
      this.query.merchantId = merchantId;
      this.query.contractObj.contractCode = contractCode;
      this.query.contractObj.id = contractId;
      this.query.settleGroupId = settleGroupId;
    }
  },
  computed: {},
  watch: {
    $route: "init"
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>

</style>