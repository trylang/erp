<template>
  <div class="cash_table">
    <p>
      <span>{{cash.title}}</span>
      <strong v-if="type==='text'">{{cash.money}}</strong>
      <input v-if="type==='input'" type="number" v-model="cash.money" placeholder="请输入金额">
    </p>
    <textarea name="" id="" rows="3" placeholder="请输入备注"></textarea>                       
  </div>
</template>

<script>
export default {
  name: "cash-table",
  props: ["cash", "type"]
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
      padding-left: .5rem;
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

