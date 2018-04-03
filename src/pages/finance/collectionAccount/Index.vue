<template>
  <con-head title="收款账户">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
      dialog.param={bankAccount:'', openingBank:'', settleGroupId:'', shoppingCenterId: '123'}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入开户行" v-model="query.openingBank" @keyup.enter="getCollectAccount()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
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
          name: "shoppingCenterName"
        },{
          label: "结算组别",
          type: "text",
          name: "settleGroupLabel"
        },
        {
          label: "更新时间",
          name: "updateDate",
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
          label: '开户名称',
          name: 'receiptName',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '开户银行',
          name: 'openingBank',
          type: 'text',
          placeholder: '请输入...'
        }, {
          label: '开户账号',
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
        }, {
          label: '购物中心',
          name: 'shop',
          type: 'select',
          value: 'id',
          valueLabel: 'label',
          options: [{id: 1, label: '西单大悦城'}],
          placeholder: '请选择购物中心'
        }],
        dialogVisible: false,
        param: {
          id: 0,
          bankAccount: "",
          receiptName: "",
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
      selects: {
        accountGroupJson: {}
      },
      query: {
        openingBank: ''
      }
    };
  },
  mounted() {
  },
  methods: {
    getCurrentPage(pageNum) {
      this.getCollectAccount({pageNum});
    },
    getpageSize(pageSize) {
      this.getCollectAccount({pageSize});
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
      this.$confirm("此操作将永久删除该收款账户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const that = this;
          const param = {
            id: item.id
          };
          this.$api.financeapi.updateUsingDELETE_2(param).then(res => {
            const data = res.data;
            if(data.status === 200) {
              this.getCollectAccount({}, () => {
                $message("success", "删除成功");
              })
            } else {
              $message("error",  "删除失败");
              return data.message;
            }
          });  
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    getCollectAccount(page={}, callback) {
      const param = {
        openingBank: this.query.openingBank,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_10(param).then(v => {
        const Ajson = this.selects.accountGroupJson;
        v.data.data.list.forEach(item => {
          item.settleGroupLabel = Ajson[item.settleGroupId] ? Ajson[item.settleGroupId].settleGroupName : '';
        });
        this.content = v.data.data;
        if (callback) callback();
      });
    },
    async addCollectAccount(param) {
      await this.$api.financeapi.addUsingPOST_3({request: param }).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCollectAccount({}, () => {
            $message("success", "添加成功!");
            this.dialog.dialogVisible = false;           
          });
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
      await this.$api.financeapi.updateUsingPUT_6(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCollectAccount({}, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;            
          });          
        } else {
          $message("error", "修改失败!");
        }       
      });
    },
    async init () {      
      let [accountGroup] = await Promise.all([queryAccountGroup()]);
      this.selects.accountGroupJson = accountGroup.json;
      this.dialog.models[this.dialog.models.length-2].options = accountGroup.data.list.length >= 0 ? accountGroup.data.list : [];
      await this.getCollectAccount({});
    }
  },
  computed: {},
  created() {    
    this.init();
  }
};

// TODO: 后台删除没有真删除；
</script>

<style scoped>

</style>