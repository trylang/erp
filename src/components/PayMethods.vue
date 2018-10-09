<template>
  <div class="pay">
    <header>
      <span v-if="type ==='singleSelected'">待收费：<strong>{{isNumber(needBillInfo.amountReceived)?(needBillInfo.amountReceived.toFixed(2)):needBillInfo.amountReceived | fmoney}}</strong></span> 
      <span v-if="type ==='mulSelected'">待收费：<strong>{{isNumber(needItemInfo.owed)?(needItemInfo.owed).toFixed(2):needItemInfo.owed | fmoney}}</strong></span> 
    </header>
    <section class="dialogbox" style="padding:0;">
      <div class="pay_time dialoginput">
        <span>收款日期</span>
        <el-date-picker
          class="inputtext"
          v-model="dialog.param.createDate"
          :picker-options="pickerOptions"
          value-format="yyyy-MM-dd"
          type="date">
        </el-date-picker>
      </div>
      <!-- 一次性收取 -->
      <div v-if="type ==='singleSelected'" class="pay_methods">
        <span>类型</span>
        <ul>
          <li v-for="(item, index) in methods" :key="index" 
          :class="{active: item.id === variables.isActive}" 
          @click="selectPaymentWayType(item)">{{item.label}}</li>
        </ul>
      </div>
      <div v-if="type ==='singleSelected' && variables.isActive==='prepaid'" class="pay_content">
        <span>账户余额</span>
        <strong>{{needBillInfo.bankBalance | fmoney}}</strong>
        <cash-table slot="cash" type="text" :cash="payMethods.cash" @cashTableParam="getsingleCashParam"></cash-table>
      </div>

      <!-- 部分收取 or tab现金 -->
      <div v-if="type ==='mulSelected'? true : variables.isActive==='cash'" class="pay_content">
        <!-- 预付款 -->
        <small-collection v-if="type==='mulSelected'" :title="variables.title1">
          <p class="prepay_content" slot="btn">
            <span>预付款</span>
            <strong>{{needBillInfo.bankBalance | fmoney}}</strong>
          </p>
          <cash-table slot="cash" type="input" :cash="payMethods.cash" @cashTableParam="getmulSelectCashParam"></cash-table>
        </small-collection>        
        <!-- 多选 现金选择 -->
        <small-collection v-if="type ==='mulSelected'" :title="variables.title">
          <ul slot="cash" class="cash_methods"> 
            <li v-for="(item, index) in payMethods.icons" :class="{active: item.isChecked}" :key="index" @click="mulSelected(item, $event, 'mul')">
              <!-- <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i> -->
              <span>{{item.label}}</span>
            </li>
          </ul>
          <ul slot="cash">
            <li :is="item.component" :type="item.prop.type" :cash="item.prop.cash" @cashTableParam="getmulSelectCashParam" v-for="(item, index) in components" :key="index"></li>
          </ul>        
          <!-- <cash-table slot="cash" :cash="payMethods.cash"></cash-table> -->
          <!-- <div slot="cash" class="cash_store"  @click="haha()">
            <el-checkbox v-model="variables.checked"></el-checkbox>
            <span>存入找零：</span><strong>￥1,000</strong>
          </div> -->
        </small-collection>

        <!-- Tab单选 -->
        <small-collection v-if="type ==='singleSelected'" :title="variables.title">
          <!-- 单选 -->
          <ul slot="cash" class="cash_methods">
            <li v-for="(item, index) in payMethods.icons" :key="index" :class="{active: item.label === variables.isSelected}"
                @click="mulSelected(item, $event, 'single')">
              <!-- <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i> -->
              <span>{{item.label}}</span>
            </li>
          </ul>
          <cash-table v-if="payMethods.icons.length>0" slot="cash" type="text" :cash="payMethods.cash" @cashTableParam="getsingleCashParam"></cash-table>
          <!-- <div slot="cash" class="cash_store"  @click="haha()">
            <el-checkbox v-model="variables.checked"></el-checkbox>
            <span>存入找零：</span><strong>￥1,000</strong>
          </div> -->
        </small-collection>
      </div>
    </section>
  </div>
</template>

<script>
import SmallCollection from "@/components/SmallCollection";
import CashTable from "@/components/CashTable";
import { _changeJson, _replace } from "@/utils";
import { getPayMethods } from "@/utils/rest/local";
import { queryAvailByCode } from "@/utils/rest/financeAPI";

export default {
  name: "pay-methods",
  props: ["needBillInfo", "needItemInfo", "dialog", "type", "isEdit"],
  components: {
    SmallCollection,
    CashTable
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      methods: [
        {
          id: "prepaid",
          value: 11,
          label: "预付款"
        },
        {
          id: "cash",
          value: 20,
          label: "现金/银行卡"
        }
      ],
      payMethods: {
        icons: [],
        iconsJson: {},
        cash: {
          title: "预付款",
          money: "",
          remark: ""
        }
      },
      variables: {
        isActive: "prepaid",
        isSelected: this.needBillInfo.paymentWayTypeName ? (this.needBillInfo.paymentWayTypeName) : (this.payMethods && this.payMethods.icons.length > 0 ?  this.payMethods.icons[0].name : ''),
        checked: false,
        title: {
          label: this.type === "mulSelected" ? "其他方式（多选）" : "收款方式",
          title_style: {
            "font-size": ".9rem"
          },
          ifIcon: false,
          ifBorder: false
        },
        title1: {
          label: "预付款方式",
          title_style: {
            "font-size": ".9rem"
          },
          ifIcon: false,
          ifBorder: false
        }
      },
      icons: [
        {
          id: "xianjin",
          icon: "icon-xianjin",
          label: "现金",
          color: "#457fcf"
        },
        {
          id: "gongshang",
          icon: "icon-gongshang",
          label: "工商银行",
          color: "#e60012"
        },
        {
          id: "jianshe",
          icon: "icon-jianshe",
          label: "建设银行",
          color: "#003b90"
        },
        {
          id: "nongye",
          icon: "icon-nongye",
          label: "农业银行",
          color: "#368972"
        },
        {
          id: "zhaoshang",
          icon: "icon-zhaoshang",
          label: "招商银行",
          color: "#a61f23"
        },
        {
          id: "huaxia",
          icon: "icon-huaxia",
          label: "华夏银行",
          color: "#e60012"
        },
        {
          id: "youzheng",
          icon: "icon-youzheng",
          label: "邮政银行",
          color: "#007f3e"
        }
      ],
      components: [],
      mul_one_params: {
        payType: {} // 一条结算组别下的结算方式对象
      }
    };
  },
  methods: {
    isNumber(n) {  
      return !isNaN(parseFloat(n)) && isFinite(n);  
    },
    initParam(isEdit, needItemInfo) {
      this.mul_one_params.payType = isEdit ? needItemInfo.payType : {};
      if (isEdit) {
        this.variables = {
          isActive: "prepaid",
          isSelected: this.needBillInfo.paymentWayTypeName ? (this.needBillInfo.paymentWayTypeName) : (this.payMethods && this.payMethods.icons.length > 0 ?  this.payMethods.icons[0].name : ''),
          checked: false,
          title: {
            label: this.type === "mulSelected" ? "其他方式（多选）" : "收款方式",
            title_style: {
              "font-size": ".9rem"
            },
            ifIcon: false,
            ifBorder: false
          },
          title1: {
            label: "预付款方式",
            title_style: {
              "font-size": ".9rem"
            },
            ifIcon: false,
            ifBorder: false
          }
        };
        let keys = Object.keys(needItemInfo.payType);
        this.payMethods.icons.forEach(item => {
          if (keys.indexOf(item.value) >= 0) {
            item.isChecked = true;
          } else {
            item.isChecked = false;
          }
        });
        this.payMethods.cash = {
          title: "预付款",
          money: needItemInfo.payType[11] ? needItemInfo.payType[11].money : '',
          remark: needItemInfo.payType[11] ? needItemInfo.payType[11].remark : ''
        };

        this.components = [];
        for(let key in needItemInfo.payType) {
          if (key != '11') {
            this.components.push({
              component: CashTable,
              prop: {
                // cashTableParam: "getmulSelectCashParam",
                cash: needItemInfo.payType[key],
                type: "input"
              }
            });
          }    
        }
      } else {
        this.payMethods.icons.forEach(item => {
          item.isChecked = false;
        });
        this.payMethods.cash = {
          title: this.needBillInfo.paymentWayTypeName || "预付款",
          money: this.type === "singleSelected" ? (this.isNumber(this.needBillInfo.amountReceived) 
                                 ? (this.needBillInfo.amountReceived).toFixed(2) 
                                 : this.needBillInfo.amountReceived) : "",
          remark: ""
        };
        this.components = [];
        this.variables = {
          isActive: this.type === "singleSelected" ? (this.dialog.param.paymentWayType == 11 ? "prepaid" : "cash" ) : 'prepaid',
          isSelected: this.needBillInfo.paymentWayTypeName ? (this.needBillInfo.paymentWayTypeName) : (this.payMethods && this.payMethods.icons.length > 0 ?  this.payMethods.icons[0].name : ''),
          checked: false,
          title: {
            label: this.type === "mulSelected" ? "其他方式（多选）" : "收款方式",
            title_style: {
              "font-size": ".9rem"
            },
            ifIcon: false,
            ifBorder: false
          },
          title1: {
            label: "预付款方式",
            title_style: {
              "font-size": ".9rem"
            },
            ifIcon: false,
            ifBorder: false
          }
        };
      }
    },
    mulSelected(item, $event, type) {
      if ($event.target.localName == "span" || $event.target.localName == "i") {
        if (
          $event.target.parentElement.localName == "li" &&
          $event.target.parentElement.className.indexOf("active") == -1
        ) {               
          if (type == 'mul') {
            $event.target.parentElement.className = "active";    
            item.isChecked = true;
            (item.title = item.label), (item.money = ""), (item.remark = "");
            this.add(item);
          } else if (type == 'single') {
            this.variables.isSelected = item.name;
            this.payMethods.cash.title = item.name;
            this.$emit("singleParam", {
              key: "paymentWayType",
              value: item.value
            });
          }
          
        } else if (
          $event.target.parentElement.localName == "li" &&
          $event.target.parentElement.className.indexOf("active") >= 0
        ) {          
          if (type == 'mul') {
            $event.target.parentElement.className = "";
            item.isChecked = false;
            (item.title = item.label), (item.money = ""), (item.remark = "");
            this.delete(item);
          } else if (type == 'single') {
            this.payMethods.cash.title = item.name;
            this.$emit("singleParam", {
              key: "paymentWayType",
              value: ""
            });
          }         
        }
      }
      if (
        $event.target.localName == "li" &&
        $event.target.className.indexOf("active") == -1
      ) {        
        if (type == 'mul') {
          $event.target.className = "active";
          item.isChecked = true;
          (item.title = item.label), (item.money = ""), (item.remark = "");
          this.add(item);
        } else if (type == 'single') {          
          this.variables.isSelected = item.name;
          this.$emit("singleParam", {
            key: "paymentWayType",
            value: item.value
          });
        }

      } else if (
        $event.target.localName == "li" &&
        $event.target.className.indexOf("active") >= 0
      ) {            
        if (type == 'mul') {
          item.isChecked = false;
          $event.target.className = "";    
          (item.title = item.label), (item.money = ""), (item.remark = "");
          this.delete(item);
        } else if (type == 'single') {
            this.variables.isSelected = "";
            this.$emit("singleParam", {
              key: "paymentWayType",
              value: ""
            });
          }
      }
    },
    // 一次收取选择时间
    selectDate() {
      this.$emit("singleParam", {
        key: "collectionDate",
        value: this.dialog.param.createDate
      });
    },
    // 一次收取选择收款方式
    selectPaymentWayType(item) {
      this.variables.isActive = item.id;
      if (item.id === 'cash') {
        this.variables.isSelected = this.needBillInfo.paymentWayTypeName ? (this.needBillInfo.paymentWayTypeName) : (this.payMethods && this.payMethods.icons.length > 0 ?  this.payMethods.icons[0].name : ''),
        this.payMethods.cash.title = this.needBillInfo.paymentWayTypeName ? (this.needBillInfo.paymentWayTypeName) : (this.payMethods && this.payMethods.icons.length > 0 ?  this.payMethods.icons[0].name : ''),
        this.$emit("singleParam", {
          key: "paymentWayType",
          value: this.payMethods.icons.length > 0 ? this.payMethods.iconsJson[this.payMethods.icons[0].name].value : ''
        });
      } else {
        this.payMethods.cash.title = '预付款';
        this.$emit("singleParam", {
          key: "paymentWayType",
          value: 11
        });
      }
    },
    // payType
    single_cash_methods(item) {
      this.variables.isSelected = item.id;
      this.payMethods.cash.title = item.label;
      this.$emit("singleParam", {
        key: "payType",
        value: item.value
      });
    },
    // 一次发送remark
    getsingleCashParam(param) {
      this.$emit("singleParam", {
        key: "remark",
        value: param.remark
      });
    },
    // 部分收取 发送remark
    getmulSelectCashParam(param) {
      let one_param = {
        title: param.title,
        code: this.payMethods.iconsJson[param.title].value,
        remark: param.remark,
        money: param.money
      };
      if (!param.money) {
        delete this.mul_one_params.payType[one_param.code];
      } else {
        this.mul_one_params.payType[one_param.code] = one_param; // 发送remark
      }      
      this.mul_one_params.collectionDate = this.dialog.param.createDate; // 发送本次收款时间
      this.mul_one_params.costItemId = this.needItemInfo.id; // 发送本次结算项id
      this.$emit("mulSelectParam", {
        id: this.needItemInfo.id,
        param: this.mul_one_params
      });
    },
    add(prop) {
      this.components.push({
        component: CashTable,
        prop: {
          // cashTableParam: "getmulSelectCashParam",
          cash: prop,
          type: "input"
        }
      });
    },
    delete(prop) {
      let index;
      if (this.isEdit) {
        index = this.components.findIndex(item => {
          return item.prop.cash.code === prop.value;
        });
      } else {
        index = this.components.findIndex(item => {
          return item.prop.cash.id === prop.id;
        });
      }
      this.components.splice(index, 1);
      this.getmulSelectCashParam(prop);
    },
    async getIconList() {
      // let [local] = await Promise.all([getPayMethods()]);
      // local.icons.forEach(item => (item.isChecked = false));
      // this.payMethods.icons = local.icons;
      //this.icons.forEach(item => (item.isChecked = false));
      //this.payMethods.icons = this.icons;
    },
    // 通过code获取银行信息
    async getBanks() {
      await queryAvailByCode("0007").then(res => {
        const json = _changeJson(this.icons, "label");
        res.data.forEach(item => {
          item.label = item.name;
          item.icon = json[item.name] && json[item.name].icon ? json[item.name].icon : '';
          item.color = json[item.name] && json[item.name].color ? json[item.name].color : '';
          item.isChecked = false;
        });
        this.payMethods.icons = res.data;
        const data = res.data.concat({
          name: "预付款",
          label: "预付款",
          value: 11
        });
        this.payMethods.iconsJson = _changeJson(data, "label");
      });
    },
    async init() {
      await this.getBanks();
      await this.initParam(this.isEdit, this.needItemInfo);      
    }
  },
  updated() {
    if (this.type === "singleSelected") {
      this.payMethods.cash.money = this.isNumber(this.needBillInfo.amountReceived) 
                                 ? (this.needBillInfo.amountReceived).toFixed(2) 
                                 : this.needBillInfo.amountReceived;
    }
  },
  mounted() {
    if (this.type === "singleSelected") {
      this.dialog.param.paymentWayType =  this.needBillInfo.payType ? this.needBillInfo.paymentWayType : 11; // 初始化 付款类型 为预付款
      this.payMethods.cash.money = this.isNumber(this.needBillInfo.amountReceived) 
                                 ? (this.needBillInfo.amountReceived).toFixed(2) 
                                 : this.needBillInfo.amountReceived;
    }
    this.$root.eventEmit.$on("INITIAL_PARAM", type => {
      this.initParam();
    });
    this.$root.eventEmit.$on("EDIT_PARAM", info => {
      if (!info.needItemInfo.payType) info.needItemInfo.payType = [];
      let pay_methods = Object.keys(info.needItemInfo.payType);  // key:code
      let pay_methods_value = [];
      pay_methods.forEach(code => {
        pay_methods_value.push(info.needItemInfo.payType[code]);
      });    
      // let pay_methods_value = Object.values(info.needItemInfo.payType);      
      this.payMethods.icons.forEach(item => {
         item.isChecked = pay_methods.includes(item.value) ? true : false; 
      });
      this.dialog.param.createDate = info.collectionDate;
      if (info.needItemInfo.payType["11"]) {
        this.payMethods.cash = info.needItemInfo.payType["11"]; // 预付款
      } 
      this.components = [];
      let componentCashs = pay_methods_value.filter(
        item => item.code != 11
      );
      componentCashs.forEach(prop => {
        this.components.push({
          component: CashTable,
          prop: {
            // cashTableParam: "getmulSelectCashParam",
            cash: prop,
            type: "input"
          }
        });
      });
    });
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.pay {
  header {
    height: 2.4rem;
    margin: 0 -2.18rem;
    background: #ffeee5;
    display: flex;
    justify-content: flex-end;
    span {
      line-height: 2.4rem;
      margin-right: 3rem;
      strong {
        color: #ff5400;
      }
    }
  }
  section {
    margin: 0 0.5rem;
    .pay_time {
      margin: 1.5rem 0;
      // display: flex;
      // justify-content: space-between;
      // border-bottom: 1px solid #eee;
      span {
        display: inline-block;
        width: 6rem;
      }
    }
    .pay_methods {
      margin: 1.5rem 0;
      display: flex;
      ul {
        width: 13.8rem;
        height: 2.4rem;
        line-height: 2.4rem;
        margin-left: 4.5rem;
        display: flex;
        border: 1px solid #a2bfe7;
        li {
          flex: 1;
          text-align: center;
          cursor: pointer;
          &:focus,
          &.active {
            background: #457fcf;
            color: #fff;
          }
        }
      }
    }
    .pay_content {
      strong {
        color: #457fcf;
        font-size: 1rem;
        margin-left: 2.2rem;
      }
      .prepay_content {
        // border: 1px solid #bbd0ed;
        padding: 0.3rem 0;
        border-radius: 5px;
        display: flex;
        justify-content: flex-end;
        span {
          // color: #457fcf;
          color: #999;
        }
        strong {
          // flex: 1;
          font-weight: 500;
          color: #333;
          text-align: right;
          margin-left: 0.5rem;
        }
      }
      .cash_store {
        strong {
          color: #ff8a59;
        }
      }
      .cash_methods {
        display: flex;
        flex-wrap: wrap;
        li {
          position: relative;
          width: 6rem;
          height: 2.4rem;
          line-height: 2.4rem;
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin-right: 0.8rem;
          margin-bottom: 0.8rem;
          border: 1px solid #e6e6e6;
          border-radius: 5px;
          cursor: pointer;
          &::after {
            content: "";
            width: 0;
            height: 0;
            transform: rotate(90deg);
            border-width: 0.6rem;
            border-color: #457fcf transparent transparent #457fcf;
            border-style: solid;
            border-top-left-radius: 5px;
            position: absolute;
            right: -1px;
            top: -1px;
            visibility: hidden;
          }
          &::before {
            content: "\2714";
            position: absolute;
            z-index: 30;
            right: 1px;
            top: -15px;
            color: #fff;
            font-size: 10px;
            -webkit-transform: rotate(45deg);
            transform: rotate(15deg);
            visibility: hidden;
          }
          &.active {
            border: 1px solid #b5ccec;
            &::before,
            &::after {
              visibility: visible;
            }
          }
          i {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}
</style>

