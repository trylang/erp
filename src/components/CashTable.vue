<template>
  <el-form class="cash_table" :model="cash" :rules="rules" ref="ruleForm">
    <p>
      <span>{{cash.title}}</span>
      <strong v-if="type==='text'">{{cash.money}}</strong>
      <el-form-item prop="money">
        <el-input v-if="type==='input'" type="text" @blur="paramFun" v-model="cash.money" placeholder="请输入金额"></el-input>
      </el-form-item>
    </p>
    <textarea v-model="cash.remark" name="" id="" rows="3" @blur="paramFun" placeholder="请输入备注"></textarea>                       
  </el-form>
</template>

<script>
export default {
  name: "cash-table",
  props: ["cash", "type"],
  data() {
    var checkMoney = (rule, value, callback) => {
      setTimeout(() => {
        if (isNaN(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 0) {
            callback(new Error("请输入大于0的数值"));
          } else {
            callback();
          }
        }
      }, 200);
    };
    return {
      rules: {
        money: [{ validator: checkMoney, trigger: "blur" }]
      }
    };
  },
  methods: {
    paramFun() {
      this.$emit("cashTableParam", {
        title: this.cash.title,
        money: this.cash.money,
        remark: this.cash.remark
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
    input {
      border: 0;
      border-bottom: 1px solid #eee;
      padding-left: 0.5rem;
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
</style>

