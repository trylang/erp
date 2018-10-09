<template>
  <con-head title="项目税率应用">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={costItemId:'', costType:'', rateId:'', validDate:''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入费用项目编码" v-model="query.costItemCode" @keyup.enter="getTaxRate2cost"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @pageSize="getpageSize" @currentPage="getCurrentPage"></erp-table>
    <erp-dialog v-loading="dialog.loading" :title="dialog.param.id>0? '修改项目税率应用': '添加项目税率应用'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import { formatDate } from "@/utils/filter";
import {
  queryCost,
  queryTaxRate,
  queryDicsByCode,
  queryCostType
} from "@/utils/rest/financeAPI";
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
      header: [
        {
          label: "编码",
          type: "text",
          name: "costItemCode"
        },
        {
          label: "名称",
          type: "text",
          name: "costItemName"
        },
        {
          label: "结算组别",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "费用类型",
          type: "text",
          name: "costTypeName"
        },
        {
          label: "物业类型",
          type: "text",
          name: "propertyTypeName"
        },
        {
          label: "税码",
          type: "text",
          name: "rateCode"
        },
        {
          label: "税率",
          type: "text",
          name: "rateStr"
        },
        {
          label: "有效期",
          name: "validDateRange",
          type: "text",
          filter: "yyyy/MM/dd"
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
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: item => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
                this.getCostItemByCostType(item.costType)
              }
            },
            {
              label: "删除",
              name: "delete",
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
        models: [
          {
            label: "税码",
            valueLabel: "rateFullLabel",
            name: "rateId",
            type: "select",
            value: "id",
            options: [],
            placeholder: "请输入税码"
          },
          {
            label: "费用类型",
            valueLabel: "text",
            name: "costType",
            type: "select",
            value: "value",
            options: [],
            placeholder: "请选择费用类型",
            async event(costType) {
              const param = {
                costType,
                pageSize: 200000
              };
              await _this.$api.financeapi.listUsingGET_7(param).then(res => {
                if (res.data.status === 200) {
                  _this.dialog.models[2].options = res.data.data.list;
                }
              });
            }
          },
          {
            label: "费用项目",
            valueLabel: "costItemName",
            name: "costItemId",
            type: "select",
            value: "id",
            options: [],
            placeholder: "请选择费用项目"
          },
          {
            label: "生效日期",
            name: "validDate",
            type: "date",
            placeholder: "请选择生效时间"
          }
        ],
        dialogVisible: false,
        loading: false,        
        param: {
          id: ""
        },
        options: [
          {
            label: "确 定",
            name: "submit",
            type: "primary",
            disabledFun: param => {
              return Object.values(param).some(item => {
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
      query: {
        costItemId: "",
        costType: "",
        rateId: "",
        validDate: ""
      },
      selects: {
        cost: []
      }
    };
  },
  methods: {
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getTaxRate2cost();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getTaxRate2cost();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      this.dialog.loading = true;
      if (this.dialog.param.id > 0) {
        // 修改
        this.editTaxRate2cost(this.dialog.param);
      } else {
        // 新增
        this.addTaxRate2cost(this.dialog.param);
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该税率应用, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteTaxRate2cost(item);
        });
    },
    async getCostItemByCostType(costType) {
      if (costType >= 0) {
        const param = {
          costType,
          pageSize: 200000
        };
        await this.$api.financeapi.listUsingGET_7(param).then(res => {
          if (res.data.status === 200) {
            this.dialog.models[2].options = res.data.data.list;
          }
        });
      }
    },
    async getTaxRate2cost(page = {}, callback) {
      const params = {
        costItemCode: this.query.costItemCode,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.listUsingGET_6(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
          data.data.list.forEach(item => {
            let validTime =
              formatDate(item.validStartDate, "yyyy/MM/dd") +
              "~" +
              (item.validEndDate
                ? formatDate(item.validEndDate, "yyyy/MM/dd")
                : "");
            item.validDateRange = validTime;
            item.rateStr = item.rate + '%';
          });
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async addTaxRate2cost(param) {
      await this.$api.financeapi
        .addUsingPOST({ request: param })
        .then(returnObj => {
          if (returnObj.data.status === 200) {
            this.getTaxRate2cost({}, () => {
              $message("success", "添加成功!");
              this.dialog.dialogVisible = false;
              this.dialog.loading = false;
            });
          } else {
              this.dialog.loading = false;
            $message("error", returnObj.data.msg);
          }
        });
    },
    async editTaxRate2cost(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_3(params).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.getTaxRate2cost({}, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
            this.dialog.loading = false;
          });
        } else {
            this.dialog.loading = false;
          $message("error", returnObj.data.msg);
        }
      });
    },
    async deleteTaxRate2cost(item) {
      const param = {
        id: item.id
      };
      this.$api.financeapi.updateUsingDELETE(param).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.getTaxRate2cost({}, () => {
            $message("success", "删除成功");
          });
        } else {
          $message("error", res.data.msg);
          return data.message;
        }
      });
    },
    async init() {
      let [cost, taxRate, costType] = await Promise.all([
        queryCost(),
        queryTaxRate(),
        queryCostType()
      ]);
      this.selects.cost = cost.data;
      this.selects.taxRateJson = taxRate.json;
      await this.getTaxRate2cost();
      taxRate.data.forEach(item => {
        item.rateFullLabel = item.rateCode + "（" + item.rate + "%" + "）";
      });
      this.dialog.models[0].options = taxRate.data;
      this.dialog.models[1].options = costType.data.cost_type;
    }
  },
  watch:{
    'query.costItemCode': function(){
      this.$delay(()=>{
          this.getTaxRate2cost();
      },300)
    }
  },
  created() {
    this.init();
  }
};
</script>

<style scoped>

</style>