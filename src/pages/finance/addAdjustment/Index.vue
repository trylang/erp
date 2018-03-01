<template>
  <con-head title="结算单调整">
    <el-button type="primary" slot="append" @click="linkTo('collectMoney')">提交</el-button>
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
        <div class="erp_container" style="padding:0;">
          <erp-table :header="header" :content="content"></erp-table>
        </div>
      </el-col>   
    </el-row>
    <erp-dialog :title="dialog.param.id? '修改结算单调整': '添加结算单调整'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
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
      header: [
        {
          label: "费用调整",
          type: "text",
          class: "font12",
          name: "id"
        },
        {
          label: "结算金额",
          type: "text",
          class: "font12",
          name: "name"
        },{
          label: "本次调整",
          type: "text",
          class: "font12",
          name: "name"
        },{
          label: "剩余金额",
          type: "text",
          class: "font12",
          name: "name"
        },{
          label: "调整",
          class: "font12",
          type: "text",
          name: "name"
        },
        {
          label: "操作",
          class: "font12",
          name: "operations",
          type: "buttons",
          operations: [
            {
              label: "编辑",
              name: "edit",
              type: "",
              style:{
                "font-size": '12px',
                "margin": 0
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            }
          ]
        }
      ],
      dialog: {
        models: [
          {
            label: "税码",
            name: "shui",
            type: "select",
            value: "id",
            options: [
              { id: 1, label: "haha" },
              { id: 12, label: "heihie" },
              { id: 3, label: "enen" }
            ],
            placeholder: "请输入税码"
          },
          {
            label: "费用类型",
            name: "cost",
            type: "select",
            value: "id",
            options: [
              { id: 1, label: "haha" },
              { id: 12, label: "heihie" },
              { id: 3, label: "enen" }
            ],
            placeholder: "请选择费用类型"
          },
          {
            label: "费用项目",
            name: "cost1",
            type: "select",
            value: "id",
            options: [
              { id: 1, label: "haha" },
              { id: 12, label: "heihie" },
              { id: 3, label: "enen" }
            ],
            placeholder: "请选择费用项目"
          },
          {
            label: "生效日期",
            name: "daterange",
            type: "daterange",
            placeholder: "请选择费用项目"
          }
        ],
        dialogVisible: false,
        param: {
          shui: "",
          cost: "",
          cost1: "",
          daterange: ""
        },
        options: [
          {
            label: "确 定",
            name: "submit",
            type: "primary",
            disabledFun: param => {
              return Object.values(param).some(item => {
                return item === (undefined || "");
              });
            },
            click: () => {
              console.log(this.dialog.param);
              this.confirmDialog();
            }
          },
          {
            label: "取 消",
            name: "edit",
            type: "",
            click: () => {
              this.cancelDialog();
            }
          }
        ]
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
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id >= 0) {
        // 修改
        this.dialog.dialogVisible = false;
        this.$store
          .dispatch("updateAccountGroup", {
            id: this.dialog.param.id,
            param: this.dialog.param
          })
          .then(() => {
            $message("success", "修改成功!");
          })
          .catch(error => {
            $message(
              "error",
              !error.message ? "无法修改，请重试!" : error.message
            );
          });
      } else {
        // 新增
        if (this.dialog.param.id && this.dialog.param.name) {
          this.dialog.dialogVisible = false;
          this.$store
            .dispatch("addAccountGroup", this.dialog.param)
            .then(() => {
              $message("success", "添加成功!");
            })
            .catch(error => {
              $message(
                "error",
                !error.message ? "无法添加，请重试!" : error.message
              );
            });
        }
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该结算组别, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store
            .dispatch("delAccountGroup", item.id)
            .then(() => {
              $message("success", "删除成功!");
            })
            .catch(() => {
              $message("error", "无法删除，请重试!");
            });
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
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
    margin-top: 0.8rem;
  }
  .rent_btns {
    padding-bottom: 1rem;
  }
  .rent_area,
  .rent_btns {
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