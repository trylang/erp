<template>
  <con-head title="项目税率应用">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={costItemId:'', costType:'', rateId:'', validDate:''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入费用项目编码" v-model="query.costItemCode"><i class="iconfont icon-sousuo" @click="getTaxRate2cost"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage"></erp-table>
    <h1>{{dialog.param.id}}</h1>
    <erp-dialog :title="dialog.param.id>0? '修改项目税率应用': '添加项目税率应用'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryCost, queryTaxRate } from '@/utils/rest/financeAPI';
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
          label: "编码",
          type: "text",
          name: "costItemCode"
        },
        {
          label: "名称",
          type: "text",
          name: "costItemName"
        },{
          label: "结算组别",
          type: "text",
          name: "settleGroupName"
        },{
          label: "费用类型",
          type: "text",
          name: "costName"
        },{
          label: "物业类型",
          type: "text",
          name: "propertyTypeName"
        },{
          label: "税码",
          type: "text",
          name: "rateCode"
        },{
          label: "税率",
          type: "text",
          name: "rate"
        },
        {
          label: "有效期",
          name: "validStartDate",
          type: "time",
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
              click: (item) => {
                
                Object.assign(this.dialog.param, item);
                console.log(this.dialog.param)
                this.dialog.dialogVisible = true;
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
        models: [{
          label: '税码',
          valueLabel: 'rateFullLabel',
          name: 'rateId',
          type: 'select',
          value: 'id',
          options: [],
          placeholder: '请输入税码'
        }, {
          label: '费用类型',
          valueLabel: 'label',
          name: 'costType',
          type: 'select',
          value: 'id',
          options: [{id:1, label:'haha'}, {id:12, label:'heihie'}, {id:3, label:'enen'}],
          placeholder: '请选择费用类型',
          event: (costType) => {
            console.log(costType);
            // this.dialog.models[2].options = [];
          }
        }, {
          label: '费用项目',
          valueLabel: 'costItemName',
          name: 'costItemId',
          type: 'select',
          value: 'id',
          options: [],
          placeholder: '请选择费用项目'
        }, {
          label: '生效日期',
          name: 'validDate',
          type: 'date',
          placeholder: '请选择生效时间'
        }],
        dialogVisible: false,
        param: {},
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: (param) => {
            return Object.values(param).some(item => {
              return item === (undefined || "");
            });
          },
          click: () => {
            console.log(this.dialog.param);
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
      query: {
        costItemId:'', 
        costType:'', 
        rateId:'', 
        validDate:''
      },
      selects: {
        costJson: {},
        taxRateJson: {},
      }
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(page) {
      this.getTaxRate2cost(page);
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
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
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    async getTaxRate2cost(pageNum, callback) {
      const params = {
        costItemCode: this.query.costItemCode,
        pageNum
      };
      this.$api.financeapi.listUsingGET_3(params).then(res => {
        const data = res.data;
        if (data.code === 200) {
          const Ajson = this.selects.accountGroupJson;
          // data.data.list.forEach(item => {
          //   item.settleGroupLabel = Ajson[item.settleGroupId]
          //     ? Ajson[item.settleGroupId].settleGroupName
          //     : "";
          // });
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    },
    async addTaxRate2cost(param) {
      await this.$api.financeapi.addUsingPOST_1({ param }).then(returnObj => {
        if (returnObj.data.code === 200) {
          this.getTaxRate2cost(0, () => {
            $message("success", "添加成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", "添加失败!");
        }
      });
    },
    async editTaxRate2cost(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_2(params).then(returnObj => {
        if (returnObj.data.code === 200) {
          this.getTaxRate2cost(0, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", "修改失败!");
        }
      });
    },
    async deleteTaxRate2cost(item) {
      const param = {
        id: item.id
      };
      this.$api.financeapi.updateUsingDELETE(param).then(res => {
        const data = res.data;
        if (data.code === 200) {
          this.getTaxRate2cost(0, () => {
            $message("success", "删除成功");
          });
        } else {
          $message("error", "删除失败");
          return data.message;
        }
      });
    },
    async init() {
      let [cost, taxRate] = await Promise.all([queryCost(), queryTaxRate()]);
      this.selects.costJson = cost.json;
      this.selects.taxRateJson = taxRate.json;
      await this.getTaxRate2cost();
      taxRate.data.list.forEach(item => {
        item.rateFullLabel = item.rateCode +"（" + item.rate + "）";
      });
      this.dialog.models[0].options = taxRate.data.list;
      this.dialog.models[2].options = cost.data.list;
      // this.dialog.models[4].options = this.selects.shops;
    }
  },
  computed: {},
  watch: {
    'dialog': function(old) {
      console.log(old);
    }
  },
  created() {
    this.init();
  }
};

// TODO: 1. 需要根据费用类型联动选择费用项目
</script>

<style scoped>

</style>