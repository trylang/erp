<template>
  <con-head title="收款账户">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, dialog.param={shui:'', cost:'', cost1:'', daterange:''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入开户行" v-model="query.name"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改收款账户': '添加收款账户'" :dialog="dialog"></erp-dialog>
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
      header: [
        {
          label: "开户行",
          type: "text",
          name: "id"
        },
        {
          label: "银行账户",
          type: "text",
          name: "name"
        },{
          label: "购物中心",
          type: "text",
          name: "name"
        },{
          label: "结算组别",
          type: "text",
          name: "name"
        },
        {
          label: "有效期",
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
                // color: "#902323"
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              style: {
                // color: "#093216"
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
        models: [{
          label: '开户行',
          name: 'shui',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '银行账户',
          name: 'cost',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '结算组别',
          name: 'cost1',
          type: 'select',
          value: 'id',
          options: [{id:1, label:'haha'}, {id:12, label:'heihie'}, {id:3, label:'enen'}],
          placeholder: '请选择结算组别'
        }],
        dialogVisible: false,
        param: {
          shui: "",
          cost: "",
          cost1: "",
          daterange: ""
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: (param) => {
            return Object.values(param).some(item => {
              return item === (undefined || "");
            });
          },
          click: () => {
            console.log(this.dialog.param);
            this.confirmDialog();
          }
        }, {
          label: "取 消",
          name: "edit",
          type: "",
          click: () => {
            this.cancelDialog();
          }
        }]
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
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id >=0) {
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
            $message("error", !error.message? "无法修改，请重试!" : error.message);
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
              $message("error", !error.message? "无法添加，请重试!" : error.message);
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

<style scoped>

</style>