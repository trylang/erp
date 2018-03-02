<template>
  <div>
    <con-head title="租赁保证金收取">
      <el-button type="primary" slot="append" @click="dialog.dialogVisible = true, dialog.param={id: ''}">收取</el-button>
      <el-row slot="preappend">
        <el-col :span="9">
          <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.name" placeholder="商户名称" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="9" :offset="6">
          <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.name" placeholder="商铺" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </con-head>
    
    <blank-head slot="preappend" title="店铺租赁保证金">
      <cash-card :cash="[{name:'haha', id:1000}, {name: 'lalaalal', id:2000}, {name: 'enenen', id:3000}]"></cash-card>
    </blank-head>
  
    <erp-table :header="header" :content="content"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改保证金': '保证金收取'" :dialog="dialog"></erp-dialog>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import blankHead from "../../../components/BlankHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import cashCard from "../../../components/CashCard";

export default {
  name: "account-group",
  components: {
    conHead,
    blankHead,
    erpTable,
		erpDialog,
		cashCard
  },
  data() {
    return {
      header: [
        {
          label: "编码",
          type: "text",
          name: "id"
        },
        {
          label: "名称",
          type: "text",
          name: "name"
        },
        {
          label: "备注",
          type: "text",
          name: "desc"
        },
        {
          label: "更新时间",
          name: "update_time",
          type: "time",
          filter: "yyyy-MM-dd hh:mm:ss.S"
        },
        {
          label: "操作",
          name: "operations",
          type: "buttons",
          style: {
            width: "130px"
          },
          operations: [
            {
              label: "编辑",
              name: "edit",
              type: "",
              style: {
                color: "#902323"
              },
              class: "edit",
              click: item => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              style: {
                color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.deleteDialog(item, data);
              }
            }
          ]
        }
      ],
      dialog: {
        models: [
          {
            label: "收款方式",
            name: "id",
            type: "select",
            options: [
              {
                id: "1",
                label: "工商银行"
              },
              {
                id: "2",
                label: "招商银行"
              },
              {
                id: "3",
                label: "中信银行"
              }
            ],
            placeholder: ""
          },
          {
            label: "收款金额",
            name: "name",
            type: "text",
            placeholder: "请输入收款金额"
          },
          {
            label: "备注",
            name: "desc",
            type: "textarea",
            placeholder: "请输入..."
          }
        ],
        dialogVisible: false,
        param: {
          id: "",
          name: "",
          desc: ""
        },
        options: [
          {
            label: "确 定",
            name: "submit",
            type: "primary",
            disabledFun: () => {
              return Object.values(this.dialog.param).some(item => {
                console.log(item);
                return item === (undefined || "");
              });
            },
            click: () => {
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
      selects: {
        shops: [
          {
            id: 1,
            label: "商铺1"
          },
          {
            id: 2,
            label: "商铺2"
          }
        ],
        expenses: [
          {
            id: 11,
            label: "费用11"
          },
          {
            id: 22,
            label: "费用22"
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
      query: {
        name: ""
      }
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    statusHandler(status) {
      this.selects.status.forEach(function(obj) {
        obj.isStatus = false;
      });
      status.isStatus = !status.isStatus;
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id) {
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
