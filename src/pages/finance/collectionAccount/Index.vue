<template>
  <con-head title="收款账户">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={bankAccount:'', openingBank:'', settleGroupId:'', shoppingCenterId: '123'}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入开户行" v-model="query.name"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改收款账户': '添加收款账户'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import { queryAccountGroup, queryCollectList } from '@/utils/rest/financeAPI';
import { _replace } from '@/utils';
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
          name: "openingBank"
        },
        {
          label: "银行账户",
          type: "text",
          name: "bankAccount"
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
          name: 'openingBank',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '银行账户',
          name: 'bankAccount',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '结算组别',
          name: 'settleGroupId',
          type: 'select',
          value: 'id',
          valueLabel: 'settleGroupName',
          options: [],
          placeholder: '请选择结算组别'
        }],
        dialogVisible: false,
        param: {
          bankAccount: "",
          openingBank: "",
          settleGroupId: "",
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
      content: [],
      query: {
        name: ""
      },
      // options: {
      //   accountGroup: []
      // }
    };
  },
  mounted() {
  },
  methods: {
    getCurrentPage(page) {
      this.getAccountGroups(page);
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id >=0) {
        // 修改
        this.editCollectAccount(this.dialog.param);
        
      } else {
        // 新增
        this.addCollectAccount(this.dialog.param);
       
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
    },
    getCollectAccount(query) {
      queryCollectList(query).then(v => {
        this.content = v.list;
      });
    },
    async addCollectAccount(param) {
      await this.$api.financeapi.addUsingPOST_4({ param }).then(returnObj => {
        if(returnObj.data.code === 200) {
          this.content.unshift(returnObj.data.data);
          $message("success", "添加成功!");
          this.dialog.dialogVisible = false;
        } else {
          $message("error", "添加失败!");
        }       
      });
    },
    async editCollectAccount(param) {
      let params = {
        id: param.id,
        param: param
      };
      const that = this;
      await this.$api.financeapi.updateUsingPUT_8(params).then(returnObj => {
        if(returnObj.data.code === 200) {
          console.log( returnObj.data.data)
          _replace('id', that.content, returnObj.data.data);
          $message("success", "修改成功!");
          this.dialog.dialogVisible = false;
        } else {
          $message("error", "修改失败!");
        }       
      });
    },
    async init () {
      let [accountGroup] = await Promise.all([queryAccountGroup()]);
      console.log(accountGroup);
      this.dialog.models[this.dialog.models.length-1].options = accountGroup.data.list.length >= 0 ? accountGroup.data.list : [];
    }
  },
  computed: {},
  created() {
    this.getCollectAccount();
    this.init();
  }
};
</script>

<style scoped>

</style>