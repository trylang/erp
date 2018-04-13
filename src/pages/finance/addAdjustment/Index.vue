<template>
  <con-head title="结算单调整">
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入收款单号\合同号\账单号\票据号" v-model="query.filterName" @keyup.enter="filterTree(query.filterName)"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend" :gutter="20">
      <el-col :span="12">
        <div class="erp_container">
          <el-tree
            :data="createTree"
            ref="tree"
            default-expand-all
            highlight-current
            :props="defaultProps"
            node-key="id"
            :default-checked-keys="query.routerIds"                       
            @node-click="handleCheckChange">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="erp_container" style="padding:0;">
          <erp-table :header="header" :content="content" :noPage="true"></erp-table>
        </div>
      </el-col>   
    </el-row>
    <el-row>
      <el-col :span="2" :offset="22">
        <el-button type="primary" @click="addCostAdjust" :disabled="!this.query.billId">提交</el-button>
      </el-col>
    </el-row>
    <erp-dialog :title="'结算单调整'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryCost, queryDicsByCode } from "@/utils/rest/financeAPI";
import { _changeJson, _replace, _remove, _uuid, formatTree, filterTree } from "@/utils";

export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
  },
  data() {
    return {
      createTree: [],
      originalTree: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      header: [
        {
          label: "费用项目",
          type: "text",
          class: "font12",
          name: "costItemName"
        },
        {
          label: "结算金额",
          type: "text",
          class: "font12",
          name: "amountReceivable"
        },{
          label: "本次调整",
          type: "text",
          class: "font12",
          name: "adjustAmount"
        },{
          label: "剩余金额",
          type: "text",
          class: "font12",
          name: "surplusAmount"
        },{
          label: "调整类型",
          class: "font12",
          type: "selectText",
          name: "adjustTypeId",
          value: "value",
          valueLabel: 'name',
          option: {} 
        },
        {
          label: "操作",
          class: "font12",
          name: "operations",
          type: "buttons",
          operations: [
            {
              label: "调整",
              name: "edit",
              type: "",
              style:{
                "font-size": '12px',
                "margin": 0
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
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
            valueLabel: "costItemName",
            name: "costItemId",
            type: "word",
            value: 'id',
            options: {}
          },
          {
            label: "调整类型",
            name: "adjustTypeId",
            type: "select",
            value: "value",
            valueLabel: 'name',
            options: [],
            placeholder: "请选择费用类型"
          },
          {
            label: "调整金额",
            name: "adjustAmount",
            type: "text",
            placeholder: "请选择费用项目"
          },
          {
            label: "备注",
            name: "remark",
            type: "textarea",
            placeholder: "请输入..."
          }
        ],
        dialogVisible: false,
        param: {
          adjustAmount: "",
          adjustTypeId: "",
          costItemId: "",
          remark: "",
          amountReceivable: ""
        },
        options: [
          {
            label: "确 定",
            name: "submit",
            type: "primary",
            disabledFun: param => {
              const selParams = {
                adjustAmount: this.dialog.param.adjustAmount,
                adjustTypeId: this.dialog.param.adjustTypeId,
                costItemId: this.dialog.param.costItemId,
              };
              return Object.values(selParams).some(item => {
                return item === (undefined || "" || null);
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
      select: {
        adjustTypes: [],
        cost: {},
        adjustTypes: {}
      },
      query: {
        filterName: "",
        billId: "",
        routerIds: []
      }
    };
  },
  mounted() {},
  methods: {
    filterTree(name) {
      if (!name) this.createTree = this.originalTree;
      this.createTree = filterTree(this.originalTree, name);
    },
    selectedIds() {
      if (this.$refs.tree) {
        const ids = [];
        const nodes = this.$refs.tree.getCheckedNodes();
        nodes.forEach(item => {
          if (!item.children) {
            ids.push(item.id);
          }
        });
        return ids;
      }
    },
    handleCheckChange(data) {
      if (data.children) return;
      this.query.billId = data.id;
      this.getAdjustlistByAid(data.id);
    },
    getCurrentPage(pageNum) {
      this.getCostAdjust({pageNum});
    },
    getpageSize(pageSize) {
      this.getCostAdjust({pageSize});
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      this.dialog.param.surplusAmount = parseInt(this.dialog.param.amountReceivable) + parseInt(this.dialog.param.adjustAmount);
      this.editItem(this.dialog.param);
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该费用调整, 是否继续?", "提示", {
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
    editItem(param) {
      _replace('id', this.content.list, param);   
      this.dialog.dialogVisible = false;
    },
    deleteItem(param) {
      if (param.id) {
        _remove('id', param.id, this.content.list);
      } else {
        _remove('itemId', param.itemId, this.content.list);
      }
    },
    // 获取树
    async getAdjustTree() {
      await this.$api.financeapi.getTreeUsingGET({}).then(res => {
        if(res.data.status === 200) {
          this.createTree = formatTree(res.data.data, {onlyChild: true});
          Object.assign(this.originalTree, this.createTree);
        }        
      })
    },
    // 根据结算单查询费用调整项目
    async getAdjustlistByAid(billId) {
      await this.$api.financeapi.getByBillIdUsingGET({billId}).then(res => {
        if (res.data.status === 200) {
          res.data.data.forEach(item => {
            item.costItemName = this.select.cost[item.costItemId].costItemName; 
          });
          this.content.list = res.data.data;
        }
      })
    },
    async getCostAdjust(page={}, callback) {
      if(!this.$route.query.id) return;
      const params = {
        id: this.$route.query.id,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_1(params).then(res => {
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
    async addCostAdjust() {
      const billAdjustRequest = {
        billId: this.$route.query.id ? this.$route.query.id : this.query.billId,
        adjustCostItems: this.content.list.filter(item => !!item.adjustAmount)
      }
      const apiFunc = (api, billAdjustRequest) => {
        this.$api.financeapi[api]({billAdjustRequest}).then(returnObj => {
          if (returnObj.data.status === 200) {
            $message("success", "提交成功!");
            this.$router.push({path: '/finance/accountAdjust'});
          } else {
            $message("error", "修改失败!");
          }
        });
      };

      await apiFunc('saveUsingPOST_1', billAdjustRequest);  
    },
    async editCostAdjust(param) {
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
    async deleteCostAdjust(item) {
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
    async queryContracts(param) {
      await queryContract({merchantId: this.dialog.param.merchantId}).then(res => {
        this.selects.contracts = res.data.list;
      })
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
    async init(routeId) {
      let [adjustTypes, cost] = await Promise.all([queryDicsByCode('0009'), queryCost()]);
      this.select.cost = cost.json;
      this.select.adjustTypes = adjustTypes.json;
      this.header[4].option = adjustTypes.json;
      console.log(this.header[4].option)
      this.dialog.models[0].options = cost.json;
      this.dialog.models[1].options = adjustTypes.data;
      await this.getAdjustTree();
      if (routeId) await this.getAdjustlistByAid(routeId);
    }
  },
  computed: {},
  watch: {
    '$route': 'init'
  },
  mounted() {
    this.init();
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$route.query.billId) {
        vm.query.billId = vm.$route.query.billId;
        vm.query.routerIds = [];
        vm.query.routerIds.push(parseInt(vm.$route.query.billId));
        vm.init(vm.$route.query.billId);
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.erp_container {
  margin-top: 3rem;
  padding: 1.4rem 1rem;
  border: 1px solid #e6e6e6;
  .cash_detail {
    .detail_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.3rem 0;
      &::before {
        content: "";
        width: 2px;
        height: 2rem;
        background: #e5e5e5;
      }
      .detail_left {
        flex: 1;
        margin-left: 0.5rem;
        display: flex;
        span {
          flex: 1;
        }
      }
      .detail_right a {
        text-decoration: none;
        color: #457fcf;
        font-weight: 600;
      }
    }
  }
  .rent_money {
    display: inline-block;
    margin-top: 0.8rem;
  }
  .rent_btns {
    padding-bottom: 1rem;
  }
  .rent_area,
  .rent_btns {
    margin-top: 1rem;
  }
}
.marg_top_0 {
  margin-top: 0;
}
.padd_botton_0 {
  padding-bottom: 0 !important;
}
</style>