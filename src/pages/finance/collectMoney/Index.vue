<template>
  <div>
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
          <div class="marg_top_3rem">
            <el-tabs class="collect_money_tabs" v-model="params.name" type="border-card">
              <el-tab-pane label="一次性全部收取" name="all">
                <el-row class="all_tab_head">
                  <el-col :span="19">
                    <p class="all_info">共 <span>6</span> 项，合计 <strong>$231.000.00</strong></p>
                  </el-col>
                  <el-col :span="5">
                    <el-button class="global-btn" @click="dialogVisible = true"><i class="iconfont icon-shoukuan" style="margin-right:.5rem"></i>收款</el-button>
                  </el-col>
                </el-row>
                <el-row class="tab_content" :gutter="8">
                  <el-col :span="12">
                    <small-collection :title="defaultProps.title">
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>￥50,000.00</strong></p>
                        <p><span>已收金额</span><strong>￥40,000.00</strong></p>
                        <p><span>未收金额</span><strong>￥10,000.00</strong></p>
                      </div>
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
                      
                    </small-collection>
                  </el-col>
                  <el-col :span="12">
                    <small-collection :title="defaultProps.title">
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>￥50,000.00</strong></p>
                        <p><span>已收金额</span><strong>￥40,000.00</strong></p>
                        <p><span>未收金额</span><strong>￥10,000.00</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="部分收取" name="part">
                <el-row class="tab_content" :gutter="8">
                  <el-col :span="12">
                    <small-collection :title="defaultProps.title">
                      <el-button slot="btn" class="global-btn small-btn white-btn" icon="el-icon-plus" @click="part_dialogVisible = true">收款</el-button>
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>￥50,000.00</strong></p>
                        <p><span>已收金额</span><strong>￥40,000.00</strong></p>
                        <p><span>未收金额</span><strong>￥10,000.00</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                  <el-col :span="12">
                    <small-collection :title="defaultProps.title">
                      <el-button slot="btn" class="global-btn small-btn white-btn" icon="el-icon-plus" @click="part_dialogVisible = true">收款</el-button>
                      <div slot="cash" class="cash_item">
                        <p><span>应收金额</span><strong>￥50,000.00</strong></p>
                        <p><span>已收金额</span><strong>￥40,000.00</strong></p>
                        <p><span>未收金额</span><strong>￥10,000.00</strong></p>
                      </div>
                    </small-collection>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>   
      </el-row>
    </con-head>
    <el-dialog
      title="收费"
      :visible.sync="dialogVisible"
      width="42%"
      :before-close="handleClose">
      <pay-methods type="singleSelected"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="收费"
      :visible.sync="part_dialogVisible"
      width="42%"
      :before-close="handleClose">
      <pay-methods type="mulSelected"></pay-methods>
      <span slot="footer" class="dialog-footer">
        <el-button @click="part_dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="part_dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import conHead from "../../../components/ConHead";
import smallCollection from "../../../components/SmallCollection";
import PayMethods from "@/components/PayMethods";
export default {
  name: "account-group",
  components: {
    conHead,
    smallCollection,
    PayMethods
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
        label: "label",
        title: {
          ifBorder: true,
          label: 'POS租金'
        }
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
        name: "all",
        bank: ""
      },
      query: {
        name: ""
      },
      dialogVisible: false,
      part_dialogVisible: false
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
$cardsDeepColor: (
  #457fcf,
  #45cfca,
  #ff5400,
  #666666,
  #e6e6e6,
  #f9fcff
);

.erp_container {
  margin-top: 3rem;
  padding: 1.4rem 1rem;
  border: 1px solid nth($cardsDeepColor, 5);
}

.all_tab_head {
  padding-top: 1rem;
  .all_info {
    height: 2rem;
    line-height: 2rem;
    span {
      color: #457fcf;
    }
    strong {
      color: #ff5400;
    }
  }
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
.rent_money {
  display: inline-block;
  margin-top: 0.8rem;
}
.rent_btns {
  padding-bottom: 1rem;
}
.rent_area,
.rent_btns {
  margin-top: 1rem;
}

.tab_content {
  margin-top: 1rem;
  .cash_item {
    padding: 0 1rem;
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: .3rem;
    }
    p > span {
      color:nth($cardsDeepColor, 4)
    }
    p:nth-of-type(1) > strong {
      color: nth($cardsDeepColor, 4)
    }
    p:nth-of-type(2) > strong {
      color: nth($cardsDeepColor, 1)
    }
    p:nth-of-type(3) {
      margin: .5rem -1rem 0;
      padding: .5rem 1rem;
      border-top: 1px dashed nth($cardsDeepColor, 5);
      background: nth($cardsDeepColor, 6);
      strong {
        color: nth($cardsDeepColor, 3);       
      }
    }
  }
}

.marg_top_0 {
  margin-top: 0;
}

.marg_top_3rem {
  margin-top: 3rem;
}
.padd_botton_0 {
  padding-bottom: 0 !important;
}

.white-btn {
  background: #fff;
  border: 1px solid nth($cardsDeepColor, 1);
  color:nth($cardsDeepColor, 1);
}
</style>