<template>
  <div :class="{border: title.ifBorder}">
    <el-row class="card_header">
      <el-col :span="15">
        <h3 :style="title.title_style" class="sleeping_rent">{{title.label}}<i v-if="title.ifIcon===true" class="iconfont icon-cir-qian icon-qian"></i></h3>
      </el-col>
      <el-col :span="9" style="text-align: right; padding-right: .5rem;">
        <slot name="btn"></slot>
      </el-col>
    </el-row>
    <div class="rent_container" v-if="data&&data.three_card">
      <p class="rent_cash">
        <span class="rent_item">应收账款 <strong>￥20,000</strong></span>
        <span class="rent_item">已收账款 <strong>￥50,000</strong></span>
        <span class="rent_item">未收账款 <strong>￥10,000</strong></span>
      </p>
    </div>
    <slot name="cash"></slot>
  </div>
</template>

<script>
  export default {
    name: 'small-collect',
    props: ['title', 'data']
  }
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #eee;
}
$cardsDeepColor: (
  #457fcf,
  #45cfca,
  #ff5400
);

.card_header {
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
  h3 {
    color: #353c5f;
  }
}
.sleeping_rent {
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

@media print {
  .sleeping_rent {
    -webkit-print-color-adjust: exact;  
  }
}

.icon-qian {
  color: nth($cardsDeepColor, 3);
  padding-left: .3rem
}

</style>

