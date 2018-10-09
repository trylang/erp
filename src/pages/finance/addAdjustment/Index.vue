<template>
  <con-head title="结算单调整">
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入结算单号/合同号" v-model="query.filterName" @keyup.enter="filterTree(query.filterName)"><i class="iconfont icon-sousuo"></i>
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
            <span slot-scope="{ node, data }">
              <el-tooltip class="item" effect="dark" :content="node.label" placement="right-end">
                <span>{{ node.label }}</span>
              </el-tooltip> 
            </span>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="erp_container adjustTable">
          <el-row v-if="content.detail.latestSalesAmount != 0" class="newSale">
            <el-col :span="5">
              <span>最新销售额</span>
              <h4 style="color: #457fcf">{{content.detail.latestSalesAmount | fmoney}}</h4>
            </el-col>   
            <el-col :span="2">
              <div class="vertical"></div>
            </el-col>         
            <el-col :span="5">
              <span>本次差额</span>
              <h4 style="color: #666">{{content.detail.salesDiff | fmoney}}</h4>
            </el-col>
            <el-col :span="7" :offset="5">
              <button class="global-btn" style="width: 7.5rem;" @click="getLastestDetail">获取最新销售额</button>
            </el-col>
          </el-row>
          <erp-table :header="header" :content="content" :noPage="true">
            <tr v-if="content.list.length>0" class="last_tr" slot="lastTr">
              <td colspan="4"><div class="cell font12"><span>总计</span></div></td>
              <td><div class="cell font12"><span>{{content.detail.total | fmoney}}</span></div></td>
              <td><div class="cell font12"><span></span></div></td>
              <td><div class="cell font12"><span></span></div></td>
            </tr>
          </erp-table>
          <el-button class="adjustBtn" type="primary" @click="addCostAdjust" :disabled="!this.query.billId">提交</el-button>
        </div>
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

import { queryCost, queryAvailByCode } from "@/utils/rest/financeAPI";
import { formatDate } from "@/utils/filter";
import { _changeJson, _replace, _remove, _uuid, formatTree, filterTree, numberNotE, numMax10, numPartmax2 } from "@/utils";

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
          name: "costItemName",
          style: {
            'padding': '5px 8px !important'
          }
        },
        {
          label: "日期范围（年/月/日）",
          type: "text",
          class: "font12",
          name: "range",
          style: {
            'text-align': 'center',
            'padding': '5px 8px !important'
          }
        },
        {
          label: "结算金额",
          type: "fmoney",
          class: "font12",
          name: "amountReceivable",
          style: {
            'padding': '5px 8px !important'
          }
        },{
          label: "本次调整",
          type: "fmoney",
          class: "font12",
          name: "adjustAmount",
          style: {
            'padding': '5px 8px !important'
          }
        },{
          label: "合计",
          type: "fmoney",
          class: "font12",
          name: "surplusAmount",
          style: {
            'padding': '5px 8px !important'
          }
        },{
          label: "调整类型",
          class: "font12",
          // type: "text",
          // name: "adjustTypeName",
          type: "selectText",
          name: "adjustTypeId",
          value: "id",
          valueLabel: 'name',
          option: {},
          style: {
            'padding': '5px 8px !important'
          }
        },
        {
          label: "操作",
          class: "font12",
          style: {
            'padding': '5px 8px !important'
          },
          name: "operations",
          type: "buttons",
          operations: [
            {
              label: "编辑",
              otherLabel: "调整",
              name: "status",
              type: "",
              style:{
                "font-size": '12px',
                "margin": 0
              },
              show: "showEdit",
              class: "edit",
              click: (item) => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            }
          ]
        }
      ],
      content: {
        detail: {
          latestSalesAmount: '',
          total: ''
        },
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
            value: "id",
            valueLabel: 'name',
            options: [],
            placeholder: "请选择费用类型"
          },
          {
            label: "调整金额",
            name: "adjustAmount",
            type: "number",
            placeholder: "请输入调整金额"
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
          // costItemId: "",
          // billCostItemId: "",
          // remark: "",
          // amountReceivable: ""
        },
        options: [
          {
            label: "确 定",
            name: "submit",
            type: "primary",
            disabledFun: param => {
              const selParams = {
                // adjustAmount: this.dialog.param.adjustAmount,
                adjustTypeId: this.dialog.param.adjustTypeId,
                // costItemId: this.dialog.param.costItemId,
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
      if (!this.dialog.param.adjustAmount) {
        $message('info','请输入本次调整金额');
        return;
      }
      if (!numMax10(Math.abs(this.dialog.param.adjustAmount))) {
        $message('info','请输入小于10位数的数字');
        return;
      }
      if (!numPartmax2(Math.abs(this.dialog.param.adjustAmount))) {
        $message('info','请输入小于三位小位数的数字');
        return;
      }
      this.dialog.param.surplusAmount = parseFloat((parseFloat(this.dialog.param.amountReceivable) + parseFloat(this.dialog.param.adjustAmount)).toFixed(2));
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
        });
    },
    editItem(param) {
      param.status = true;
      _replace('billCostItemId', this.content.list, param);  
      this.content.detail.total = this.content.list.filter(item => item.costItemId).reduce(function(pre, cur) {
        return pre + cur.surplusAmount;
      }, 0).toFixed(2);
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
    async getLastestDetail() {
      if (!this.query.billId) {
        $message('info', '请先选择结算单');
        return;
      }
      await this.$api.financeapi.latestSalesUsingGET({billId: this.query.billId}).then(res => {
        if (res.data.status === 200) {
          let list = res.data.data.items; 
          list.forEach(item => {
            if(item.costItemId) {
              // item.costItemName = this.select.cost[item.costItemId].costItemName;
              item.showEdit = true;
            } else {
              item.showEdit = false;
            }
            if (item.beginDate) {
              item.range = `${formatDate(item.beginDate, 'yyyy/MM/dd')}~${formatDate(item.endDate, 'yyyy/MM/dd')}`; 
            } else {
              item.range = '--';
            }    
          });
          this.content.list = list;
          this.content.detail = res.data.data;
        }
      });
    },
    // 根据结算单查询费用调整项目
    async getAdjustlistByAid(billId) {
      await this.$api.financeapi.getByBillIdUsingGET({billId}).then(res => {
        if (res.data.status === 200) {
          let list = res.data.data.items; 
          list.forEach(item => {
            item.status = false;
            if(item.costItemId) {
              // item.costItemName = this.select.cost[item.costItemId].costItemName; 
              item.showEdit = true;
            } else {
              item.showEdit = false;
            }
            if (item.beginDate) {
              item.range = `${formatDate(item.beginDate, 'yyyy/MM/dd')}~${formatDate(item.endDate, 'yyyy/MM/dd')}`; 
            } else {
              item.range = '--';
            } 
          });
          this.content.list = list;
          this.content.detail = res.data.data;
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
        adjustCostItems: this.content.list.filter(item => !!item.adjustAmount && item.showEdit)
      }
      if (billAdjustRequest.adjustCostItems.length == 0) {
        $message('info', '请调整费用金额');
        return;
      }
      const apiFunc = (api, billAdjustRequest) => {
        this.$api.financeapi[api]({billAdjustRequest}).then(returnObj => {
          if (returnObj.data.status === 200) {
            $message("success", "提交成功!");
            this.$router.push({path: '/finance/accountAdjust'});
          } else {
            $message("error", returnObj.data.msg);
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
          $message("error", returnObj.data.msg);
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
          $message("error", returnObj.data.msg);
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
    async init() {
      let [adjustTypes, cost] = await Promise.all([queryAvailByCode('0009'), queryCost()]);
      this.select.cost = cost.json;
      this.header[5].option = adjustTypes.idJson;
      this.dialog.models[0].options = cost.json;
      this.dialog.models[1].options = adjustTypes.data;
      await this.getAdjustTree();
      if (this.$route.query.settleNumber) this.filterTree(this.$route.query.settleNumber);
      if (this.$route.query.billId) await this.getAdjustlistByAid(this.$route.query.billId);     
    }
  },
  computed: {},
  watch: {
    'query.filterName' :function() {
      this.$delay(()=>{
        this.filterTree(this.query.filterName);
      },300)
    }
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
  .newSale {
    padding: 1.3rem 1.3rem 0;
    margin-bottom: -.5rem;
    .vertical {
      width: 1px;
      height: 2.2rem;
      background: #e6e2e2;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
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

.adjustTable {
  padding:0;
  position: relative;
  .adjustBtn {
    position: absolute;
    right: 0;
    bottom: -3rem;
  }
}
.marg_top_0 {
  margin-top: 0;
}
.padd_botton_0 {
  padding-bottom: 0 !important;
}
</style>