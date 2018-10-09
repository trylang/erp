<template>
  <con-head title="合同费用项目">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={costItemCode:'', costItemName:'', settleGroupId: '', costType:'',propertyType:''}, dialog.models[0].type = 'text';">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入合同费用项目编码" v-model="query.costItemCodeOrName" @keyup.enter="getCost()"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">结算组别</span>
            <el-select v-model="query.settleGroupId" @change="getCost()" filterable clearable placeholder="结算组别" class="dialogselect">
              <el-option label="全部" value=""></el-option>
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
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname inputnameauto">费用类型</span>
            <el-select v-model="query.costType" @change="getCost()" filterable clearable placeholder="费用类型" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.costType"
                :key="item.id"
                :label="item.text"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">物业性质</span>
            <el-select v-model="query.propertyType" @change="getCost()" filterable clearable placeholder="商铺" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :value="item.id"
                :label="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog v-loading="dialog.loading" :title="dialog.param.id? '修改合同费用': '添加合同费用'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryAccountGroup, queryDicsByCode,queryCostType } from "@/utils/rest/financeAPI";
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
          name: "costTypeName"
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
          filter: "yyyy-MM-dd hh:mm:ss"
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
                this.dialog.models[0].type = 'onlyword';
                this.getAccountGroupByType(item.propertyType);
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
            label: "物业性质",
            name: "propertyType",
            valueLabel: "label",
            value: "id",
            type: "select",
            options: [],
            placeholder: "请选择物业性质",
            event: (item) => {
              this.getAccountGroupByType(item);
              this.dialog.param.settleGroupId = '';
            }
          },
          {
            label: "结算组别",
            valueLabel: "settleGroupName",
            name: "settleGroupId",
            value: "id",
            type: "select",
            options: [],
            event: (item) => {},
            placeholder: "请选择组别"
          },
          {
            label: "费用类型",
            valueLabel: "text",
            name: "costType",
            type: "select",
            value: "value",
            options: [],
            placeholder: "请选择合同费用类型"
          }
        ],
        dialogVisible: false,
        loading: false,
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
        accountGroup: [],
        accountGroupJson: {},
        propertyTypeJson: {},
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
        costType: []
      },
      query: {}
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getCost();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getCost();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      this.dialog.loading = true;
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
          if (data.status === 200) {
            this.getCost({}, () => {
              $message("success", "删除成功");
            });
          } else {
            $message("error", data.msg);
          }
        });
      });
    },
    async getCost( param = {}, callback) {
      const params = {
        costItemCodeOrName: this.query.costItemCodeOrName,
        settleGroupId: this.query.settleGroupId,
        costType: this.query.costType,
        propertyType: this.query.propertyType,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.listUsingGET_7(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
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
      await this.$api.financeapi.addUsingPOST_1({ request: param }).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.getCost({}, () => {
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
    async editCost(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_4(params).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.getCost({}, () => {
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
    // 根据物业类型过滤结算组别
    async getAccountGroupByType(type) {
      await this.$api.financeapi.selectGroupsUsingGET({propertyTypeId: type}).then(res => {
        if (res.data.status === 200) {
          this.dialog.models[3].options = res.data.data;
        }
      })
    },
    async init() {
      let [accountGroup, costType] = await Promise.all([queryAccountGroup(),queryCostType()]);
      this.selects.accountGroupJson = accountGroup.json;
      this.selects.costType = costType.data.cost_type;
      this.selects.propertyTypeJson = _changeJson(this.selects.shops, "id");
      await this.getCost();
      this.selects.accountGroup = accountGroup.data;
      this.dialog.models[4].options = this.selects.costType;
      this.dialog.models[2].options = this.selects.shops;
    }
  },
  computed: {},
  watch:{
    'query.costItemCodeOrName': function(){
      this.$delay(()=>{
          this.getCost();
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