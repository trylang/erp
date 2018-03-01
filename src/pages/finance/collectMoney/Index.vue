<template>
  <con-head title="结算单收款">
    <el-button type="primary" slot="append" @click="linkTo('collectMoney')">收取</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入收款单号\合同号\账单号\票据号" v-model="query.name"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend" :gutter="20">
      <el-col :span="12">
        <div class="erp_container">
          <el-tree
            :data="data2"
            show-checkbox
            default-expand-all
            highlight-current
            :props="defaultProps"
            @check-change="handleCheckChange">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="erp_container">
          <el-radio v-for="item in selects.methods" :key="item.id" v-model="params.name" :label="item.id">{{item.label}}</el-radio>
          <small-collection title="固定租金">
            <ul class="cash_detail">
              <li class="detail_item">
                <div class="detail_left">
                  <span>工商银行123343</span>
                  <span>收款金额 ￥20,000</span>
                  <span>备注：哈哈哈哈</span>
                </div>
                <div class="detail_right">
                  <a href="javascript:void(0)">修改</a>
                  <a href="javascript:void(0)">删除</a>
                </div>
              </li>
              <li class="detail_item">
                <div class="detail_left">
                  <span>工商银行123</span>
                  <span>收款金额 ￥20,000</span>
                  <span>备注：哈哈哈哈</span>
                </div>
                <div class="detail_right">
                  <a href="#">修改</a>
                  <a href="#">删除</a>
                </div>
              </li>
            </ul>
            <el-row class="rent_input">
              <el-col :span="10" class="searchselect marg_top_0">
                <el-select v-model="params.bank" placeholder="请选择银行" class="dialogselect">
                  <el-option
                    v-for="item in selects.banks"
                    :key="item.id"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="10" :offset="2" class="searchbox marg_top_0" style="width:auto;">
                <input type="text" placeholder="请输入名称" v-model="params.name"><i class="iconfont">元</i>
              </el-col>
              <el-col :span="24" class="rent_area">
                <el-input type="textarea" placeholder="请输入备注" v-model="params.desc"></el-input>
              </el-col>
            </el-row>
            <el-row class="rent_btns">
              <button class="global-btn">继续收取</button>
              <button class="global-btn">核销预付款</button>		
            </el-row>
          </small-collection>
          <small-collection title="POS租金">
            <el-row class="rent_input">
              <el-col :span="10">
                <span class="rent_money">收款金额 ￥20,000</span>
              </el-col>
              <el-col :span="10" :offset="2" class="searchbox marg_top_0" style="width:auto;">
                <input type="text" placeholder="请输入名称" v-model="params.name"><i class="iconfont">元</i>
              </el-col>
              <el-col :span="24" class="rent_area">
                <el-input type="textarea" placeholder="请输入备注" v-model="params.desc"></el-input>
              </el-col>
            </el-row>
            <el-row class="rent_btns padd_botton_0">
              <button class="global-btn">收取</button>
              <button class="global-btn">核销预付款</button>		
            </el-row>
          </small-collection>
        </div>
      </el-col>   
    </el-row>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import conHead from "../../../components/ConHead";
import smallCollection from '../../../components/SmallCollection';
export default {
  name: "account-group",
  components: {
    conHead,
    smallCollection
  },
  data() {
    return {
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      selects: {
        methods: [
          {
            id: 1,
            label: "一次性全部收取"
          },
          {
            id: 2,
            label: "部分收取"
          }
        ],
        banks: [
          {
            id: 11,
            label: "工商银行"
          },
          {
            id: 22,
            label: "建设银行"
          }
        ],
        status: [
          {
            isStatus: true,
            label: "全部"
          },
          {
            isStatus: false,
            label: "新增"
          },
          {
            isStatus: false,
            label: "已确认"
          },
          {
            isStatus: false,
            label: "取消"
          }
        ]
      },
      params: {
        name: 1,
        bank: ''
      },
      query: {
        name: ""
      }
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status) {
      this.selects.status.forEach(function(obj) {
        obj.isStatus = false;
      });
      status.isStatus = !status.isStatus;
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    ...mapActions(["getAccountGroups"]),
    queryList: function(query) {
      this.getAccountGroups(query);
    }
  },
  computed: {
    ...mapGetters({
      content: "accountGroups"
    })
  },
  created() {
    this.$store.dispatch("getAccountGroups");
  }
};
</script>

<style lang="scss" scoped>
.erp_container {
  margin-top: 3rem;
  padding: 1.4rem 1rem;
  border: 1px solid #e6e6e6;
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
  .rent_money {
    display: inline-block;
    margin-top: .8rem;
  }
  .rent_btns {
    padding-bottom: 1rem;
  }
  .rent_area, .rent_btns {
    margin-top: 1rem;
  }
  
}
.marg_top_0 {
  margin-top: 0;
}
.padd_botton_0 {
  padding-bottom: 0 !important;
}
</style>