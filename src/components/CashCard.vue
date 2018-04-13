<template>
  <el-row class="cards_row" :gutter="70" type="flex" justify="center">
		<el-col class="card_col" :span="7" v-for="(item, index) in cash" :key="index">
			<div class="erp_card">
				<span class="card_text">{{item.name}}</span>
				<strong><label v-if="!notCash">￥</label>{{item.id}}</strong>
			</div>
		</el-col>
	</el-row>
</template>

<script>
export default {
  name: "cash-card",
  props: ["cash", "notCash"]
};
</script>

<style lang="scss" scoped>
$cardsDeepColor: (
  #457fcf,
  #45cfca,
  #ff5400
);

.cards_row {
  margin-top: 2rem;
  .erp_card {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    span {
      font-size: 1rem;
    }
    strong {
      padding-top: 0.5rem;
      font-size: 1.6rem;
    }
  }

  @for $i from 1 through length($cardsDeepColor) {
    .card_col:nth-of-type(#{$i}) {
      .erp_card {
        border: 1px solid rgba(nth($cardsDeepColor, $i), 0.1);
        span {
          color: rgba(nth($cardsDeepColor, $i), 0.5);
        }
        strong {
          color: nth($cardsDeepColor, $i);
        }
      }
    }
  }
}
</style>

