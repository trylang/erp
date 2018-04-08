<template>
  <div class="account">
    <div class="circle"></div>
    <div class="account_tabs">
      <!-- 导航tab栏 -->
      <el-row>
        <el-col class="tab_item" v-for="(item, index) in tabs" :key="index" :span="4">
          <h3 :class="{active: item.id === variables.isActive}" @click="activeFunc(item)">{{item.label}}</h3>
        </el-col>
        <el-col class="btn_item" :offset="9" :span="6"
          v-if="variables.isActive === item.id"  v-for="(item) in tabs" :key="item.label">
          <slot :name="`buttton_${item.id}`"></slot>       
        </el-col>
      </el-row>
      <!-- tab当中的搜索框 -->
      <section class="tab1" v-if="variables.isActive === item.id"  v-for="(item) in tabs" :key="item.id">
        <slot :name="`content_${item.id}`"></slot>
      </section>
    
    </div>
  </div>
</template>
<script>
export default {
  name: "item-tab",
  components: {},
  props: ["tabs"],
  data() {
    return {
      variables: {
        isActive: ""
      }
    };
  },
  methods: {
    activeFunc(item) {
      this.variables.isActive = item.id;
    }
  },
  mounted() {
    this.variables.isActive = this.tabs ? this.tabs[0].id: '';
  }
};
</script>
<style lang="scss" scoped>
.account {
  padding: 10px 0;
  .account_tabs {
    padding: 0 1.2rem;
    .tab_item {
      h3 {
        color: #666;
        cursor: pointer;
        &.active {
          color: #353c5f;
          &::before {
            content: "";
            display: inline-block;
            width: 5px;
            height: 1.1rem;
            margin-right: 0.3rem;
            vertical-align: sub;
            background: #353c5f;
          }
        }
      }
    }
    .btn_item {
      text-align: right;
    }
  }
}
.circle {
  height: 25px;
  margin: 0 0 15px;
  background: url(../assets/yuan-long.png) left center repeat-x;
}
</style>

