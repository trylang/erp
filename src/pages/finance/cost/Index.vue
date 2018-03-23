<template>
  <con-head title="合同费用项目">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={costItemCode:'', costItemName:'', settleGroupId: '', costType:'',propertyType:''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入合同费用项目编码" v-model="query.costItemCodeOrName"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">结算组别</span>
            <el-select v-model="query.settleGroupId" placeholder="结算组别" class="dialogselect">
              <el-option
                v-for="item in dialog.models[2].options"
                :key="item.id"
                :value="item.settleGroupName">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">费用类型</span>
            <el-select v-model="query.costType" placeholder="费用类型" class="dialogselect">
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
            <span class="inputname">物业性质</span>
            <el-select v-model="query.propertyType" placeholder="商铺" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改合同费用组别': '添加合同费用组别'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryAccountGroup } from "@/utils/rest/financeAPI";
import { _changeJson } from "@/utils";

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
        },
        {
          label: "结算组别",
          type: "text",
          name: "settleGroupLabel"
        },
        {
          label: "费用类型",
          type: "text",
          name: "costType"
        },
        {
          label: "物业类型",
          type: "text",
          name: "propertyTypeLabel"
        },
        {
          label: "更新时间",
          name: "updateDate",
          type: "time",
          filter: "yyyy-MM-dd hh:mm:ss.S"
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
              // style: {
              //   color: "#902323"
              // },
              class: "edit",
              click: item => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              // style: {
              //   color: "#093216"
              // },
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
            label: "编码",
            name: "costItemCode",
            type: "text",
            placeholder: "请输入编码"
          },
          {
            label: "名称",
            name: "costItemName",
            type: "text",
            placeholder: "请输入名称"
          },
          {
            label: "结算组别",
            valueLabel: "settleGroupName",
            name: "settleGroupId",
            value: "id",
            type: "select",
            options: [],
            event: (item) => {
              console.log(item);
            },
            placeholder: "请选择组别"
          },
          {
            label: "费用类型",
            valueLabel: "label",
            name: "costType",
            type: "select",
            value: "id",
            options: [],
            placeholder: "请选择合同费用类型"
          },
          {
            label: "物业性质",
            name: "propertyType",
            valueLabel: "label",
            value: "id",
            type: "select",
            options: [],
            placeholder: "请选择物业性质"
          }
        ],
        dialogVisible: false,
        param: {
          costItemCode: '',
          costItemName: '',
          costType: '',
          propertyType: '',
          settleGroupId: ''
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
        accountGroupJson: {},
        propertyTypeJson: {},
        shops: [
          {
            id: 0,
            label: "商铺"
          },
          {
            id: 1,
            label: "场地"
          },
          {
            id: 2,
            label: "广告位"
          },
          {
            id: 3,
            label: "写字楼"
          }
        ],
        expenses: [
          {
            id: 11,
            label: "合同费用11"
          },
          {
            id: 22,
            label: "合同费用22"
          }
        ]
      },
      query: {}
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(page) {
      this.getCost(page);
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id) {
        // 修改
        this.editCost(this.dialog.param);
      } else {
        // 新增
        this.addCost(this.dialog.param);
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该合同费用项目, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const param = {
          id: item.id
        };
        this.$api.financeapi.updateUsingDELETE_1(param).then(res => {
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
      });
    },
    async getCost(pageNum, callback) {
      const params = {
        costItemCodeOrName: this.query.costItemCodeOrName,
        settleGroupId: this.query.settleGroupId,
        costType: this.query.costType,
        propertyType: this.query.propertyType,
        pageNum
      };
      this.$api.financeapi.listUsingGET_21(params).then(res => {
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
    async addCost(param) {
      await this.$api.financeapi.addUsingPOST_2({ param }).then(returnObj => {
        if (returnObj.data.code === 200) {
          this.getCost(0, () => {
            $message("success", "添加成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", "添加失败!");
        }
      });
    },
    async editCost(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_3(params).then(returnObj => {
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
    async init() {
      let [accountGroup] = await Promise.all([queryAccountGroup()]);
      this.selects.accountGroupJson = accountGroup.json;
      this.selects.propertyTypeJson = _changeJson(this.selects.shops, "id");
      await this.getCost();
      this.dialog.models[2].options = accountGroup.data.list;
      this.dialog.models[3].options = this.selects.expenses;
      this.dialog.models[4].options = this.selects.shops;
    }
  },
  computed: {},
  created() {
    this.init();
  }
};
// TODO: 1. 查询接口没有测；2. 费用类型没有查字典；3. 修改时候没办法实时变化数据
</script>

<style scoped>

</style>