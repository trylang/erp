<template>
  <div>
    <con-head title="结算单收款">
      <el-button type="primary" slot="append" @click="linkTo('collectMoney')">收取</el-button>
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
              node-key="id"
              default-expand-all
              highlight-current
              :default-checked-keys="query.routerIds" 
              :props="defaultProps"
              @node-click="handleCheckChange"
              >
            </el-tree>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="marg_top_3rem">
            <el-tabs class="collect_money_tabs" v-model="tabs.name" @tab-click="tabsClick" type="border-card">
              <el-tab-pane label="一次性全部收取" name="all">
                <el-row v-if="query.billId" class="all_tab_head">
                  <el-col :span="19">
                    <p class="all_info">共 <span>{{content.size}}</span> 项，合计 <strong>{{content.amountReceivable}}</strong></p>
                  </el-col>
                  <el-col :span="5">
                    <el-button class="global-btn" @click="dialogVisible = true"><i class="iconfont icon-shoukuan" style="margin-right:.5rem"></i>收款</el-button>
                  </el-col>
                </el-row>
                <el-row v-if="query.billId" class="tab_content" :gutter="8">
                  <el-col :span="12" v-for="(item, index) in content.item" :key="index">
                    <small-collection :title="item.title">
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>{{item.amountReceivable}}</strong></p>
                        <p><span>已收金额</span><strong>{{item.amountReceived}}</strong></p>
                        <p><span>本次收款</span><strong>{{item.currentMoney}}</strong></p>
                        <p><span>未收金额</span><strong>{{item.owed}}</strong></p>
                      </div>
                      
                      
                    </small-collection>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="部分收取" name="part">
                <el-row v-if="query.billId" class="tab_content" :gutter="8">
                  <el-col :span="12" v-for="(item, index) in content.item" :key="index">
                    <small-collection :title="item.title">
                      <el-button slot="btn" class="global-btn small-btn white-btn" icon="el-icon-plus" @click="mul_collect_btn(item)">收费</el-button>
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>{{item.amountReceivable}}</strong></p>
                        <p><span>已收金额</span><strong>{{item.amountReceived}}</strong></p>
                        <p><span>本次收款</span><strong>{{item.currentMoney}}</strong></p>
                        <p><span>未收金额</span><strong>{{item.owed}}</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                  
                  <el-col :span="2" :offset="21">
                    <el-button type="primary" @click="mulSubmit">提交</el-button>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>   
      </el-row>
    </con-head>
    <el-dialog
      title="收费"
      :visible.sync="dialogVisible"
      width="42%">
      <pay-methods type="singleSelected" @singleParam="getDialogParam" :needBillInfo="query.needBillInfo" :dialog="dialog"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="singleConfirm">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="收费"
      :visible.sync="part_dialogVisible"
      width="42%">
      <pay-methods type="mulSelected" @mulSelectParam="get_Mul_DialogParam" :needBillInfo="query.needBillInfo" :needItemInfo="query.needItemInfo" :dialog="dialog"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="part_dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="mulConfirm(query.needItemInfo)" >确 定</el-button>
      </span>
    </el-dialog>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import conHead from "../../../components/ConHead";
import { $message } from "../../../utils/notice";
import smallCollection from "../../../components/SmallCollection";
import PayMethods from "@/components/PayMethods";
import { formatTree, filterTree } from "@/utils";

export default {
  name: "account-group",
  components: {
    conHead,
    smallCollection,
    PayMethods
  },
  data() {
    return {
      createTree: [],
      originalTree: [],
      content: {
        item: []
      },
      defaultProps: {
        children: "children",
        label: "label"
      },
      selects: {
        methods: [
          {
            id: 1,
            label: "一次性全部收取"
          },
          {
            id: 2,
            label: "部分收取"
          }
        ],
        banks: [
          {
            id: 11,
            label: "工商银行"
          },
          {
            id: 22,
            label: "建设银行"
          }
        ],
        status: [
          {
            isStatus: true,
            label: "全部"
          },
          {
            isStatus: false,
            label: "新增"
          },
          {
            isStatus: false,
            label: "已确认"
          },
          {
            isStatus: false,
            label: "取消"
          }
        ]
      },
      tabs: {
        // 点击标签切换 一次性和部分收款
        name: "all",
        bank: ""
      },
      query: {
        filterName: "",
        financeId: "",
        routerIds: [],
        needBillInfo: {}, // 结算单相关数据，以及一次性收款中得总欠款，以及店铺预存款信息
        needItemInfo: {}, // 部分收款中要显示的数据
        mul_total_params: [] //多选提交时候的所有数据
      },
      dialog: {
        param: {}
      },
      dialogVisible: false,
      part_dialogVisible: false,
      total_bill_Info: {}
    };
  },
  mounted() {},
  methods: {
    initParams() {
      return (this.dialog.param = {
        id: "",
        costItemIdList: [], //一个/多个 费用项的Id集合
        financeId: "", // 结算单id
        contractId: "", // 合同id
        merchantName: "", // 商户名称
        amountReceived: "", // 实际收款金额
        createDate: "", // 一次性收款日期
        remark: "", // 备注
        paymentWayType: "", // 付款类型
        payType: "", // 非预存款方式时 收款方式（现金22/各种银行卡33）
        payTypeAndmony: {}, // 收款信息map (多选)
        collectionDate: "", // 收款日期
        costItemId: "" // 单个费用项详情id
      });
    },
    linkTo(path) {
      this.$router.push({ path });
    },
    tabsClick(tab, event) {
      this.initParams();
    },
    // 部分收款 按钮
    mul_collect_btn(item) {
      this.part_dialogVisible = true;
      this.query.needItemInfo = item;
      if (!item.customId) {
        item.customId = item.id;
        this.initParams();
        this.$root.eventEmit.$emit("INITIAL_PARAM", { type: "add" });
      } else {
        this.$root.eventEmit.$emit("EDIT_PARAM", {
          needItemInfo: item,
          collectionDate: this.total_bill_Info[item.id].collectionDate
        });
      }
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
    filterTree(name) {
      if (!name) this.createTree = this.originalTree;
      this.createTree = filterTree(this.originalTree, name);
    },
    getDialogParam(param) {
      this.dialog.param[param.key] = param.value;
    },
    // 点击remark发送数据的方法
    get_Mul_DialogParam(param) {
      Object.assign(this.total_bill_Info[param.id], param.param);
    },
    async singleConfirm() {
      if (!this.dialog.param.createDate) {
        $message("info", "请选选择收款日期");
        return;
      }
      if (this.dialog.param.paymentWayType === 11) {
        // 预存款方式
        if (
          this.query.needBillInfo.bankBalance <
          this.query.needBillInfo.amountReceived
        ) {
          $message("info", "预存款不足，请换种付款方式");
          return;
        }
      }
      this.dialog.param.costItemIdList = this.content.item.map(item => item.id);
      let total_owed = parseInt(this.query.needBillInfo.amountReceived);
      let param = {
        amountReceived: total_owed.toFixed(2),
        costItemIdList: this.dialog.param.costItemIdList,
        financeId: this.query.needBillInfo.id,
        contractId: this.query.needBillInfo.contractId,
        merchantName: this.query.needBillInfo.merchantName,
        amountReceived: this.query.needBillInfo.amountReceived,
        createDate: this.dialog.param.createDate,
        remark: this.dialog.param.remark,
        receiptType: 11, // 收款类型（一次性11/多次22）
        paymentWayType: this.dialog.param.paymentWayType,
        payType: ""
      };

      await this.$api.financeapi.oneOffSaveUsingPOST({ param }).then(res => {
        if (res.data.status === 200) {
          $message("success", "收款成功");
          this.content.item.forEach(item => {
            item.currentMoney = item.owed;
            item.owed = 0;
            item.amountReceived = item.amountReceivable;
          });
          this.dialogVisible = false;
        } else {
          $message("error", returnObj.data.msg);
        }
      });
    },
    // 多选中确定按钮操作
    mulConfirm(param) {
      const item_param = this.total_bill_Info[param.id];
      const bankBalance = this.query.needBillInfo.bankBalance;
      if (!this.dialog.param.createDate) {
        $message("info", "请选择收款日期");
        return;
      }
      if (!item_param.payType) {
        $message("info", "请选择收款方式及金额");
        return;
      }

      if (
        item_param.payType["11"] &&
        item_param.payType["11"].money > bankBalance
      ) {
        $message("info", "支付金额大于预存款，请重新输入");
        return;
      }

      let currentMoney = 0;
      let payTypeAndmony = [];
      let item_payType_ary = Object.values(item_param.payType);
      let ifNaN = item_payType_ary.some(item => {
        return isNaN(item.money);
      });
      if (ifNaN) {
        $message("info", "支付金额需填写数值，请重新输入");
        return;
      }
      item_payType_ary.forEach(item => {
        if (!item.money) item.money = 0;
        currentMoney += parseInt(item.money);
        payTypeAndmony.push({
          remark: item.remark,
          money: item.money,
          code: item.code
        });
      });
      // 计算本次收款总和
      this.total_bill_Info[param.id].currentMoney = currentMoney;

      console.log(item_param.currentMoney);
      if (item_param.currentMoney > item_param.owed) {
        $message("info", "支付金额大于欠款，请重新输入");
        return;
      }

      if (currentMoney > param.owed) {
        $message("info", "缴费金额应小于等于应收金额");
        return;
      }
      this.query.needItemInfo.payTypeAndmony = payTypeAndmony;
      this.total_bill_Info[param.id].payTypeAndmony = payTypeAndmony;
      this.total_bill_Info[
        param.id
      ].contractId = this.query.needBillInfo.contractId;
      this.total_bill_Info[
        param.id
      ].financeId = this.query.needBillInfo.financeId;
      this.total_bill_Info[
        param.id
      ].merchantName = this.query.needBillInfo.merchantName;
      this.content.item.forEach(item => {
        if (item.id === param.id) {
          item.currentMoney = currentMoney;
          item.owed = item.owed - currentMoney;
          item.amountReceived = item.amountReceived + currentMoney;
        }
      });
      this.part_dialogVisible = false;
    },
    
    // 多选中提交按钮操作
    async mulSubmit() {
      let ary = Object.values(this.total_bill_Info).filter(
        item => !!item.payType
      );
      if (!this.$route.query.financeId) {
        ary.forEach(item => {
          delete item.id;
        });
      }
      // console.log('mul', ary);
      await this.$api.financeapi
        .manyOffSaveUsingPOST({ paramList: ary })
        .then(res => {
          if (res.data.status === 200) {
            $message("success", "收款成功");
            console.log(res.data.data);
          }
        });
    },
    async handleCheckChange(data) {
      if (data.children) return;
      let billId = "";
      if (this.$route.query.financeId) {
        billId = this.$route.query.financeId;
      } else {
        billId = data.id;
      }
      this.query.needBillInfo = data;
      this.query.billId = billId;
      // 获取收款详情及确认金额
      let [content, bankBalance] = await Promise.all([
        this.getBilllistByAid(billId),
        this.getBankBalance(data.shopId)
      ]);
      this.content = content;
      this.query.needBillInfo.bankBalance = bankBalance;
      this.query.needBillInfo.financeId = billId;
    },
    // 获取树
    async getBillsTree() {
      await this.$api.financeapi.billTreeUsingGET({}).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data, {
            onlyChild: true
          });
          Object.assign(this.originalTree, this.createTree);
        }
      });
    },
    // 根据结算单查询收款详情
    async getBilllistByAid(id) {
      const res = await this.$api.financeapi.queryCostUsingGET({ id });
      this.query.needBillInfo.amountReceived = 0;
      if (res.data.status === 200) {
        res.data.data.item.forEach(item => {
          // 一次性收款总数
          this.query.needBillInfo.amountReceived += parseInt(item.owed);
          this.total_bill_Info[item.id] = item; // 部分收取中每项结算组别下的详情
          item.title = {
            ifBorder: true,
            label: item.costItemName
          };
        });
        return res.data.data;
      }
    },
    // 根据店铺id查询预存款余额
    async getBankBalance(shopId) {
      const param = {
        billId: this.query.billId,
        shopId: shopId
      };
      const res = await this.$api.financeapi.amountReceivedAllUsingPOST({
        param
      });
      if (res.data.status === 200) {
        return res.data.data;
      }
    },
    async init() {
      this.initParams();
      await this.getBillsTree();
    }
  },
  computed: {},
  created() {
    this.init();
    if (this.$route.query.financeId) {
      const routerParam = {
        financeId: this.$route.query.financeId,
        merchantName: this.$route.query.merchantName,
        contractId: this.$route.query.contractId,
        shopId: this.$route.query.shopId
      };
      this.handleCheckChange(routerParam);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$route.query.financeId) {
        vm.query.financeId = vm.$route.query.financeId;
        vm.query.needBillInfo.merchantId = vm.$route.query.merchantId;
        vm.query.routerIds = [];
        vm.query.routerIds.push(parseInt(vm.$route.query.financeId));
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$cardsDeepColor: (
  #457fcf,
  #45cfca,
  #ff5400,
  #666666,
  #e6e6e6,
  #f9fcff
);

.erp_container {
  margin-top: 3rem;
  padding: 1.4rem 1rem;
  border: 1px solid nth($cardsDeepColor, 5);
}
.all_tab_head {
  padding-top: 1rem;
  .all_info {
    height: 2rem;
    line-height: 2rem;
    span {
      color: #457fcf;
    }
    strong {
      color: #ff5400;
    }
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
.tab_content {
  margin-top: 1rem;
  .cash_item {
    padding: 0 1rem;
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.3rem;
    }
    p > span {
      color: nth($cardsDeepColor, 4);
    }
    p:nth-of-type(1) > strong {
      color: nth($cardsDeepColor, 4);
    }
    p:nth-of-type(2) > strong {
      color: nth($cardsDeepColor, 1);
    }
    p:nth-of-type(4) {
      margin: 0.5rem -1rem 0;
      padding: 0.5rem 1rem;
      border-top: 1px dashed nth($cardsDeepColor, 5);
      background: nth($cardsDeepColor, 6);
      strong {
        color: nth($cardsDeepColor, 3);
      }
    }
  }
}
.marg_top_0 {
  margin-top: 0;
}
.marg_top_3rem {
  margin-top: 3rem;
}
.padd_botton_0 {
  padding-bottom: 0 !important;
}
.white-btn {
  background: #fff;
  border: 1px solid nth($cardsDeepColor, 1);
  color: nth($cardsDeepColor, 1);
}
</style>