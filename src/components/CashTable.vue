<template>
  <div class="cash_table">
    <p>
      <span>{{cash.title}}</span>
      <strong>{{cash.money}}</strong>
    </p>
    <textarea name="" id="" rows="3" placeholder="请输入备注"></textarea>                       
  </div>
</template>

<script>
export default {
  name: "cash-table",
  props: ["cash"]
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

