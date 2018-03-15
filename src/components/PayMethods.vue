<template>
  <div class="pay">
    <header>
      <span>待收费：<strong>￥20,000</strong></span> 
    </header>
    <section>
      <div class="pay_time dialoginput pay_date_picker">
        <span>收款日期</span>
        <el-date-picker
          v-model="value1"
          type="date">
        </el-date-picker>
      </div>
      <!-- 一次性收取 -->
      <div v-if="type ==='singleSelected'" class="pay_methods">
        <span>类型</span>
        <ul>
          <li v-for="(item, index) in methods" :key="index" :class="{active: item.id === variables.isActive}" @click="variables.isActive = item.id">{{item.label}}</li>
        </ul>
      </div>
      <div v-if="type ==='singleSelected' && variables.isActive==='prepaid'" class="pay_content">
        <span>账户余额</span>
        <strong>￥20,000</strong>
        <cash-table slot="cash" type="text" :cash="payMethods.cash"></cash-table>
      </div>

      <!-- 部分收取 or tab现金 -->
      <div v-if="type ==='mulSelected'? true : variables.isActive==='cash'" class="pay_content">
        <!-- 预付款 -->
        <small-collection v-if="type==='mulSelected'" :title="variables.title1">
          <p class="prepay_content" slot="btn">
            <span>预付款</span>
            <strong>{{payMethods.cash.money}}</strong>
          </p>
          <cash-table slot="cash" type="input" :cash="payMethods.cash"></cash-table>
        </small-collection>        
        <!-- 多选 现金选择 -->
        <small-collection v-if="type ==='mulSelected'" :title="variables.title">
          <ul slot="cash" class="cash_methods">            
            <li v-for="(item, index) in payMethods.icons" :key="index" @click="mulSelected(item, $event)">
              <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i>
              <span>{{item.label}}</span>
            </li>
          </ul>
          <ul slot="cash">
            <li :is="item.component" :type="item.prop.type" :cash="item.prop.cash" v-for="(item, index) in components" :key="index"></li>
          </ul>        
          <!-- <cash-table slot="cash" :cash="payMethods.cash"></cash-table> -->
          <div slot="cash" class="cash_store"  @click="haha()">
            <el-checkbox v-model="variables.checked"></el-checkbox>
            <span>存入找零：</span><strong>￥1,000</strong>
          </div>
        </small-collection>

        <!-- Tab单选 -->
        <small-collection v-if="type ==='singleSelected'" :title="variables.title">
          <!-- 单选 -->
          <ul slot="cash" class="cash_methods">
            <li v-for="(item, index) in payMethods.icons" :key="index" :class="{active: item.id === variables.isSelected}"
                @click="variables.isSelected = item.id; payMethods.cash.title = item.label">
              <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i>
              <span>{{item.label}}</span>
            </li>
          </ul>
          <cash-table slot="cash" type="input" :cash="payMethods.cash"></cash-table>
          <div slot="cash" class="cash_store"  @click="haha()">
            <el-checkbox v-model="variables.checked"></el-checkbox>
            <span>存入找零：</span><strong>￥1,000</strong>
          </div>
        </small-collection>
      </div>
    </section>
  </div>
</template>

<script>
import SmallCollection from "@/components/SmallCollection";
import CashTable from "@/components/CashTable";
import { getPayMethods } from "@/utils/rest/local";
export default {
  name: "pay-methods",
  props: ["data", "type"],
  components: {
    SmallCollection,
    CashTable
  },
  data() {
    return {
      methods: [
        {
          id: "prepaid",
          label: "预存款"
        },
        {
          id: "cash",
          label: "现金/银行卡"
        }
      ],
      payMethods: {
        icons: [],
        cash: {
          title: '预付款',
          money: '23232'
        }
      },
      variables: {
        isActive: "prepaid",
        isSelected: "xianjin",
        checked: false,
        title: {
          label: this.type === 'mulSelected' ? "其他方式（多选）" : "收款方式",
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
      value1: "",
      components: []
    };
  },
  methods: {
    mulSelected(item, $event) {      
      if ($event.target.localName == 'span' || $event.target.localName == 'i') {
        if ($event.target.parentElement.localName == 'li' && $event.target.parentElement.className.indexOf("active") == -1) {
          $event.target.parentElement.className = "active";
          item.isChecked = true;
          item.title = item.label,
          item.money = '';
          this.add(item);
        } else if ($event.target.parentElement.localName == 'li' && $event.target.parentElement.className.indexOf("active") >= 0) {
          $event.target.parentElement.className = "";
          item.isChecked = false;
          item.title = item.label,
          item.money = '';
          this.delete(item);
        }
      }
      if ($event.target.localName == 'li' && $event.target.className.indexOf("active") == -1) {
        $event.target.className = "active";
        item.isChecked = true;
        item.title = item.label,
        item.money = '';
        this.add(item);
      } else if ($event.target.localName == 'li' && $event.target.className.indexOf("active") >= 0) {
        $event.target.className = "";
        item.isChecked = false;
        item.title = item.label,
        item.money = '';
        this.delete(item);
      }
    },
    add(prop) {
      this.components.push({
        'component': CashTable,
        'prop': {
          cash: prop,
          type: 'input'
        }
      });
    },
    delete(prop){
      const index = this.components.findIndex(item => {
        return item.prop.cash.id === prop.id
      });
      this.components.splice(index, 1);
    },
    haha() {
      console.log(this.payMethods.icons)
    },
    async getIconList() {
      const local = await getPayMethods();
      local.icons.forEach(item => item.isChecked = false);
      this.payMethods.icons =  local.icons;
    }
  },
  created() {
    this.getIconList();
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
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
    }
    .pay_methods {
      margin: 1.5rem 0;
      display: flex;
      ul {
        width: 13rem;
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
        border: 1px solid #bbd0ed;
        padding: .3rem 0;
        border-radius: 5px;
        span {
          margin-left: 1rem;
          color: #457fcf;
        }
        strong {
          margin-left: .5rem;
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

