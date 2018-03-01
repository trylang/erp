<template>
  <div>
    <h3 class="sleeping_rent">{{title}}</h3>
    <div class="rent_container">
      <p class="rent_cash">
        <span class="rent_item">应收账款 <strong>￥20,000</strong></span>
        <span class="rent_item">已收账款 <strong>￥50,000</strong></span>
        <span class="rent_item">未收账款 <strong>￥10,000</strong></span>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'small-collect',
    props: ['title', 'data']
  }
</script>

<style lang="scss" scoped>

$cardsDeepColor: (
  #457fcf,
  #45cfca,
  #ff5400
);

.sleeping_rent {
    margin: 1.6rem 0;
    &::before {
      content: "";
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.5rem;
      background: #353c5f;
      vertical-align: baseline;
      display: inline-block;
    }
  }
  .rent_container {
    .rent_cash {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
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
    .rent_area, .rent_btns {
      margin-top: 1rem;
    }
  }

  @for $i from 1 through length($cardsDeepColor) {
  .rent_item:nth-of-type(#{$i}) {
    strong {
      color: nth($cardsDeepColor, $i);
    }
  }
}
</style>

