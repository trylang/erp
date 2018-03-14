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
      <div class="pay_methods">
        <span>类型</span>
        <ul>
          <li v-for="(item, index) in methods" :key="index" :class="{active: item.id === variables.isActive}" @click="variables.isActive = item.id">{{item.label}}</li>
        </ul>
      </div>
      <div v-if="variables.isActive==='prepaid'" class="pay_content">
        <span>账户余额</span>
        <strong>￥20,000</strong>
        <div class="cash_table">
          <p>
            <span>预存款</span>
            <strong>￥20,000</strong>
          </p>
          <textarea name="" id="" rows="3" placeholder="请输入备注"></textarea>
        </div>
      </div>
      <div v-if="variables.isActive==='cash'" class="pay_content">
        <small-collection :title="variables.title">
          <ul slot="cash" class="cash_methods">
            <li class="active">
              <i class="iconfont icon-xianjin" style="{color: #457fcf}"></i>
              <span>现金</span>
            </li>
            <li v-for="(item, index) in payMethods.icons" :key="index">
              <i class="iconfont" :class="item.icon" :style="{color: item.color}"></i>
              <span>{{item.label}}</span>
            </li>
          </ul>
        </small-collection>
      </div>
    </section>
  </div>
</template>

<script>
import SmallCollection from "@/components/SmallCollection";
import { getPayMethods } from "@/utils/rest/local";
export default {
  name: "pay-methods",
  props: ["data"],
  components: {
    SmallCollection
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
        icons: []
      },
      variables: {
        isActive: "prepaid",
        title: {
          label: "收款方式",
          title_style: {
            "font-size": ".9rem"
          },
          ifIcon: false,
          ifBorder: false
        }
      },
      value1: ""
    };
  },
  methods: {
    async getIconList() {
      const local = await getPayMethods();
      this.payMethods.icons = local.icons;
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
      .cash_table {
        margin: 1.5rem 0;
        border: 0.8rem solid #f5f5f5;
        p {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          border-bottom: 0.8rem solid #f5f5f5;
          strong {
            color: #666;
          }
        }
        textarea {
          width: 100%;
          border: none;
          padding: 0.5rem;
          font-family: inherit;
          resize: none;
          overflow-x: hidden;
          overflow-y: hidden;
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
            visibility:hidden;
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
            visibility:hidden;
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

