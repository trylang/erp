<template>
  <div>
    <con-head title="结算单收款">
      <!-- <el-button type="primary" slot="append" @click="linkTo('collectMoney')">收取</el-button> -->
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
              node-key="id"
              default-expand-all
              highlight-current
              :default-checked-keys="query.routerIds" 
              :props="defaultProps"
              @node-click="handleCheckChange"
              >
              <span slot-scope="{ node, data }">
              <el-tooltip class="item" effect="dark" :content="node.label" placement="right-end">
                <span>{{ node.label }}</span>
              </el-tooltip> 
            </span>
            </el-tree>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="marg_top_3rem">
            <el-tabs class="collect_money_tabs" v-model="tabs.name" @tab-click="tabsClick" type="border-card">
              <el-tab-pane label="一次性全部收取" :disabled="tabs.allDisabled"  name="all">
                <el-row v-if="query.billId && content" class="all_tab_head">
                  <el-col :span="19">
                    <p class="all_info">共 <span>{{content.size}}</span> 项，合计 <strong>{{content.amountReceived | fmoney}}</strong></p>
                  </el-col>
                  <el-col :span="5" v-if="!content.item.length==0">
                    <el-button class="global-btn" @click="dialogVisible = true"><i class="iconfont icon-shoukuan" style="margin-right:.5rem"></i>收款</el-button>
                  </el-col>
                </el-row>
                <el-row v-if="query.billId && content" class="tab_content" :gutter="8">
                  <el-col :span="12" v-for="(item, index) in content.item" :key="index">
                    <small-collection :title="item.title">
                      <div slot="cash" class="cash_item">
                        <p><span style="font-size: 12px;">周期</span><strong style="font-size:12px; font-weight: 500;">{{item.period}}</strong></p>
                        <p><span>应收金额</span><strong>{{item.amountReceivable | fmoney}}</strong></p>
                        <p><span>已收金额</span><strong>{{item.amountReceived | fmoney}}</strong></p>
                        <p><span>本次收款</span><strong>{{item.currentMoney | fmoney}}</strong></p>
                        <p><span>未收金额</span><strong>{{item.owed | fmoney}}</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="部分收取" :disabled="tabs.partDisabled" name="part">
                <el-row v-if="query.billId && content" class="tab_content" :gutter="8">
                  <el-col :span="12" v-for="(item, index) in content.item" :key="index">
                    <small-collection :title="item.title">
                      <el-button v-if="item.amountReceivable !== 0" slot="btn" class="global-btn small-btn white-btn" icon="el-icon-plus" @click="mul_collect_btn(item)">收费</el-button>
                      <div slot="cash" class="cash_item">
                        <p><span style="font-size: 12px;">周期</span><strong style="font-size:12px; font-weight: 500;">{{item.period}}</strong></p>
                        <p><span>应收金额</span><strong>{{item.amountReceivable | fmoney}}</strong></p>
                        <p><span>已收金额</span><strong>{{item.amountReceived | fmoney}}</strong></p>
                        <p><span>本次收款</span><strong>{{item.currentMoney | fmoney}}</strong></p>
                        <p><span>未收金额</span><strong>{{item.owed | fmoney}}</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                  
                  <el-col :span="2" :offset="21" v-if="!content.item.length==0">
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
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="42%">
      <pay-methods type="singleSelected" @singleParam="getDialogParam" :needBillInfo="query.needBillInfo" :dialog="dialog"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="singleConfirm" v-loading.fullscreen="loading">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="收费"
      :visible.sync="part_dialogVisible"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="42%">
      <pay-methods type="mulSelected" @mulSelectParam="get_Mul_DialogParam" :needBillInfo="query.needBillInfo" :needItemInfo="query.needItemInfo" :dialog="dialog" :isEdit="isEdit"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeMulConfirm(query.needItemInfo)">取 消</el-button>
        <el-button type="primary" @click="mulConfirm(query.needItemInfo)">确 定</el-button>
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
import { queryDicsByCode } from "@/utils/rest/financeAPI";
import { formatTree, filterTree, _changeJson } from "@/utils";

export default {
  name: "account-group",
  components: {
    conHead,
    smallCollection,
    PayMethods
  },
  data() {
    return {
      loading: false,
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
        bank: "",
        allDisabled: false,
        partDisabled: false
      },
      query: {
        filterName: "",
        financeId: "",
        routerIds: [],
        needBillInfo: {
          bankBalance: 0,
          amountReceived: 0
        }, // 结算单相关数据，以及一次性收款中得总欠款，以及店铺预存款信息
        needItemInfo: {}, // 部分收款中要显示的数据
        mul_total_params: [] //多选提交时候的所有数据
      },
      dialog: {
        param: {
          paymentWayType: ''
        }
      },
      isEdit: false,
      dialogVisible: false,
      part_dialogVisible: false,
      total_bill_Info: {}
    };
  },
  mounted() {},
  methods: {
    initParams(payTypeAndmony) {
      return (this.dialog.param = {
        id: "",
        costItemIdList: [], //一个/多个 费用项的Id集合
        financeId: "", // 结算单id
        contractId: "", // 合同id
        merchantName: "", // 商户名称
        amountReceived: "", // 实际收款金额
        createDate: new Date(), // 一次性收款日期
        remark: "", // 备注
        paymentWayType: "", // 付款类型
        payType: "", // 非预存款方式时 收款方式（现金22/各种银行卡33）
        payTypeAndmony: payTypeAndmony || {}, // 收款信息map (多选)
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
    // 多选种确定关闭按钮
    closeMulConfirm(item) {
      this.part_dialogVisible = false;
      if (!item.currentMoney) item.currentMoney = 0;
      if (this.$route.query.id) {       
        item.amountReceived = parseFloat(item.amountReceived) + parseFloat(item.currentMoney);
        let number = Number(item.amountReceivable - item.amountReceived).toFixed(2);
        item.owed = Number(number);
      } else {
        item.amountReceived = parseFloat(item.amountReceived) + parseFloat(item.currentMoney);
        let number = Number(item.amountReceivable - item.amountReceived).toFixed(2);
        item.owed = Number(number);
      }
    },
    // 部分收款 按钮
    mul_collect_btn(item) {
      this.part_dialogVisible = true;
      if (this.$route.query.id) {
        item.amountReceived = (parseFloat(item.amountReceived) - parseFloat(item.currentMoney)).toFixed(2);
        item.owed = parseFloat((item.amountReceivable - item.amountReceived).toFixed(2));
      }
      this.query.needItemInfo = item;
      if (!item.customId) {
        item.customId = item.id;
        this.initParams();
        if (this.$route.query.id) {
          this.isEdit = true;
          this.dialog.param.createDate = item.collectionDate;
        } else {
          this.isEdit = false;
          this.$root.eventEmit.$emit("INITIAL_PARAM", { type: "add" });
        }        
      } else {
        if (!item.currentMoney) item.currentMoney = 0;
        if (!this.$route.query.id) {
          item.amountReceived = (parseFloat(item.amountReceived) - parseFloat(item.currentMoney)).toFixed(2);
          item.owed = parseFloat(item.owed) + parseFloat(item.currentMoney);
        }       
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
      if (!this.dialog.param.paymentWayType) this.dialog.param.paymentWayType = 11;
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
      let total_owed = parseFloat(this.query.needBillInfo.amountReceived);
      let param = {
        amountReceived: Number(total_owed.toFixed(2)),
        costItemIdList: this.dialog.param.costItemIdList,
        financeId: this.query.needBillInfo.id || this.$route.query.financeId,
        contractId: this.query.needBillInfo.contractId,
        merchantName: this.query.needBillInfo.merchantName,
        // amountReceived: this.query.needBillInfo.amountReceived,
        createDate: this.dialog.param.createDate,
        remark: this.dialog.param.remark,
        receiptType: 11, // 收款类型（一次性11/多次22）
        paymentWayType: this.dialog.param.paymentWayType,
        payType: "",
        id: this.$route.query.id
      };
      this.loading = true;
      await this.$api.financeapi.oneOffSaveUsingPOST({ param }).then(res => {
        if (res.data.status === 200) {
          $message("success", "收款成功");
          this.content.item.forEach(item => {
            item.currentMoney = item.owed;
            item.owed = 0;
            item.amountReceived = item.amountReceivable;
          });
          this.dialogVisible = false;
          this.loading = false;
          this.$router.push({path: '/finance/payManagement'});
        } else {
          $message("error", res.data.msg);
          this.loading = false;
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
        Number(item_param.payType["11"].money) < 0
      ) {
        $message("info", "预付款需大于等于零，请重新输入");
        return;
      }

      if (
        item_param.payType["11"] &&
        Number(item_param.payType["11"].money) > bankBalance
      ) {
        $message("info", "支付金额大于预付款，请重新输入");
        return;
      }

      let currentMoney = 0;
      let payTypeAndmony = [];

      let item_payCode_ary = Object.keys(item_param.payType);
      let item_payType_ary = [];
      item_payCode_ary.forEach(code => {
        // 预付款为0时，也不能输入0
        if (code != '11' || (code == '11' && bankBalance > 0)) {
          item_payType_ary.push(item_param.payType[code]);
        }
      });

      let ifNaN = item_payType_ary.some(item => {
        return isNaN(item.money);
      });
      if (ifNaN) {
        $message("info", "支付金额需填写数值，请重新输入");
        return;
      }

      let if0 = item_payType_ary.some(item => {
        return item.money == 0;
      });
      if (if0) {
        $message("info", "支付金额不能为0");
        return;
      }

      item_payType_ary.forEach(item => {
        if (!item.money) item.money = 0;
        currentMoney += parseFloat(item.money);
        payTypeAndmony.push({
          remark: item.remark,
          money: item.money,
          code: item.code
        });
      });
      
      // 计算本次收款总和
      this.total_bill_Info[param.id].currentMoney = currentMoney;

      if (param.owed >= 0 && (currentMoney > param.owed)) {
        $message("info", "缴费金额应小于等于应收金额");
        return;
      }
      if (param.owed < 0 && (currentMoney >= 0 || (currentMoney < 0 &&  currentMoney < param.owed))) {
        $message("info", "缴费金额不能超过应收金额");
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
      this.total_bill_Info[
        param.id
      ].receiptType = 22;

      if (this.$route.query.id) {
        this.total_bill_Info[
          param.id
        ].collectionDate = this.dialog.param.createDate;
        this.content.item.forEach(item => {
          if (item.id === param.id) {
            item.currentMoney = currentMoney;
            item.amountReceived = ((Number(item.amountReceived) + Number(currentMoney))).toFixed(2);
            item.owed = parseFloat((item.amountReceivable - item.amountReceived).toFixed(2));
            item.editInitMoneyObjs.editCurrentMoney = currentMoney;
          }
        });
      } else {
        this.content.item.forEach(item => {
          if (item.id === param.id) {
            item.currentMoney = currentMoney;
            item.owed = parseFloat((item.owed - currentMoney).toFixed(2));
            item.amountReceived = parseFloat((Number(item.amountReceived) + currentMoney).toFixed(2));
          }
        });
      }
      this.part_dialogVisible = false;
    },
    
    // 多选中提交按钮操作
    async mulSubmit() {
      let ary = Object.values(this.total_bill_Info).filter(
        item => !!item.payType
      );

      if (ary.length == 0) {
        $message("info", "请输入收费项");
        return;
      }
      
      // 不允许单项输入0
      let ifSubmit = ary.some(item => {
        return item.currentMoney == 0 && item.amountReceivable != 0;
      });
      if (ifSubmit) {
        $message('info', '收款项不能为0');
        return;
      }

      if (!this.$route.query.financeId) {
        ary.forEach(item => {
          delete item.id;
        });
      } else {
        ary.forEach(item => {
          item.id = item.ppid;
        });
      }
      this.loading = true;
      await this.$api.financeapi
        .manyOffSaveUsingPOST({ paramList: ary })
        .then(res => {
          if (res.data.status === 200) {
            $message("success", "收款成功");
            this.loading = false;
            this.$router.push({path: '/finance/payManagement'});
          } else {
            this.loading = false;
            $message("error", res.data.msg);
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
      this.query.billId = billId;
      let [content, bankBalance] = await Promise.all([
        this.getDetail(billId),
        this.getBankBalance(data.contractId)
      ]);
      this.content = content;
      this.query.needBillInfo = data;
      this.query.needBillInfo.amountReceived = content.amountReceived;
      this.query.needBillInfo.bankBalance = bankBalance;
      this.query.needBillInfo.financeId = billId;
      if (this.$route.query.id) { // 一次性收款得编辑
        this.dialog.param.createDate = content.singleDetail.billRrecord[0].createDate;
        this.query.needBillInfo.payType = content.item[0].payType;
        this.query.needBillInfo.payTypeAndmony = content.item[0].payTypeAndmony;
        this.query.needBillInfo.paymentWayType = Object.keys(this.query.needBillInfo.payType)[0]; // 初始化 付款类型 为预付款        
        this.query.needBillInfo.paymentWayTypeName = this.query.needBillInfo.payType[this.query.needBillInfo.paymentWayType].title; // 初始化 付款类型 为预付款
        this.query.needBillInfo.paymentWayTypeMoney = content.singleDetail.amountReceived; // 初始化 付款类型 为预付款
        this.query.needBillInfo.amountReceived = content.singleDetail.amountReceived;
      }
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
    async getBilllistByAid(id, flag=0) {
      const res = await this.$api.financeapi.queryCostUsingGET({ id, flag });
      // this.query.needBillInfo.amountReceived = 0;
      if (res.data.status === 200) {
        let sum = 0;
        res.data.data.item.forEach(item => {
          item.period = item.period ? item.period.replace(/-/g, '/') : '--';       
          // 一次性收款总数
          // this.query.needBillInfo.amountReceived += parseFloat(item.owed);
          sum += parseFloat(item.owed);
          this.total_bill_Info[item.id] = item; // 部分收取中每项结算组别下的详情
          item.title = {
            ifBorder: true,
            label: item.costItemName
          };
        });
        res.data.data.amountReceived = parseFloat(sum.toFixed(2));
        return res.data.data;
      }
    },
    // 编辑时调用详情
    async getDetailById(id, financeId) {
      const res = await this.$api.financeapi.byIdUsingGET({ id });
      if (res.data.status === 200) {
        return res.data.data;
      };
    },
    // 获取银行收款方式
    async getBanks() {
      const res = await this.$api.systemapi.itemListUsingGET({code: "0007"});
      if (res.data.status === 200) {
        const data = res.data.data.concat({
          name: "预付款",
          value: 11
        });
        return _changeJson(data, "value");
      }
    },
    async getDetail(financeId) {
      if (this.$route.query.id) {
        let [banks, detail, list] = await Promise.all([
          this.getBanks(),
          this.getDetailById(this.$route.query.id),
          this.getBilllistByAid(financeId, 1),         
        ]);
        let obj = {}; // key:financeCostId; value: id;
        let payType = {}; // 编辑时存储的收款方式
        let editInitMoneyObjs = {}; // 编辑时用于记录本次收款，便于计算
        detail.billRrecord.forEach(item => {
          if (!obj[item.financeCostId]) {
            obj[item.financeCostId] = [];
          }
          if (!payType[item.financeCostId]) {
            payType[item.financeCostId] = {};
          }
          if (!editInitMoneyObjs[item.financeCostId]) {
            editInitMoneyObjs[item.financeCostId] = {};
          }
          // obj[item.financeCostId].push(item);
          obj[item.financeCostId].push({
            remark: item.remarks,
            code: item.receiptType,
            money: item.receiptMony,
          })
          payType[item.financeCostId][item.receiptType] = {
            remark: item.remarks,
            code: item.receiptType,
            money: item.receiptMony,
            title: banks[item.receiptType].name
          }
          editInitMoneyObjs[item.financeCostId][item.receiptType] = {
            remark: item.remarks,
            code: item.receiptType,
            money: item.receiptMony,
            editInitMoney: item.receiptMony,
            title: banks[item.receiptType].name 
          }

        });
        let detailIds = detail.billRrecord.map(item => item.financeCostId);
        let content = list.item.filter(item => {         
          return detailIds.indexOf(item.id) >= 0; 
        });
        content.forEach(item => {
          item.period = item.period ? item.period.replace(/-/g, '/') : '--';       
          item.pid = this.$route.query.id;
          item.payTypeAndmony = obj[item.id];
          item.payType = payType[item.id];
          item.editInitMoneyObjs = editInitMoneyObjs[item.id];
          let currentMoney = item.payTypeAndmony.reduce(function(total, num) {
            return total + Number(num.money);
          }, 0);
          item.currentMoney = currentMoney;
          item.editInitMoneyObjs.editCurrentMoney = currentMoney;
          
          item.collectionDate = detail.billRrecord.find(detailItem => {
            return item.id === detailItem.financeCostId;
          }).createDate;
          console.log(item.collectionDate)
          item.costItemId = item.id;
          item.financeId = financeId;
        });
        list.item = content;
        list.singleDetail = detail;
        return list;
      } else {
        return this.getBilllistByAid(financeId);
      }
    },
    // 根据店铺id查询预存款余额
    async getBankBalance(contractId) {
      const param = {
        billId: this.query.billId,
        contractId: contractId
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
      if (this.$route.query.settleNumber) {
        this.filterTree(this.$route.query.settleNumber);
      }
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
  watch: {
    'query.filterName': function() {
      this.$delay(()=>{
        this.filterTree(this.query.filterName);
      },300)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$route.query.financeId) {
        vm.query.financeId = vm.$route.query.financeId;
        vm.query.needBillInfo.merchantId = vm.$route.query.merchantId;
        vm.query.routerIds = [];
        vm.query.routerIds.push(parseFloat(vm.$route.query.financeId));
      }
      if (vm.$route.query.receiptType == 11) {
        vm.tabs.allDisabled = false;
        vm.tabs.partDisabled = true;
        vm.tabs.name = 'all';
      } else if (vm.$route.query.receiptType == 22) {
        vm.tabs.allDisabled = true;
        vm.tabs.partDisabled = false;
        vm.tabs.name = 'part';
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
    p:nth-of-type(2) > strong {
      color: nth($cardsDeepColor, 4);
    }
    p:nth-of-type(3) > strong {
      color: nth($cardsDeepColor, 1);
    }
    p:nth-of-type(5) {
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