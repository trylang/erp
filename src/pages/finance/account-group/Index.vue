<template>
  <con-head title="结算组别">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, 
    dialog.param={settleGroupCode:'',propertyTypeId:'', settleGroupName:''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入名称" v-model="query.settleGroupName" @keyup.enter="getAccountGroups()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改结算组别': '添加结算组别'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";

import { queryAccountGroups } from '@/utils/rest/financeAPI';
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
          label: "编码",
          type: "text",
          name: "settleGroupCode"
        },
        {
          label: "名称",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "物业性质",
          type: "text",
          name: "propertyTypeName"
        },
        {
          label: "备注",
          type: "text",
          name: "remark"
        },
        {
          label: "更新时间",
          name: "updateDate",
          type: "time",
          filter: "yyyy-MM-dd hh:mm:ss"
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
              name: "",
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
              label: "禁用",
              otherLabel: "启用",
              name: "status",
              type: "",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.disableDialog(item, data);
              }
            }
          ]
        }
      ],
      content: [],
      dialog: {
        models: [{
          label: '编码',
          name: 'settleGroupCode',
          type: 'text',
          placeholder: '请输入编号'
        }, {
          label: '名称',
          name: 'settleGroupName',
          type: 'text',
          placeholder: '请输入名称'
        }, {
          label: '物业性质',
          name: 'propertyTypeId',
          valueLabel: "label",
          value: 'id',
          type: 'select',
          options: [{id: 0, label: '商铺'}, {id: 1, label: '写字楼'}, {id: 2, label: '场地'}, {id: 3, label: '广告位'}],
          placeholder: '请输入物业性质'
        }, {
          label: '备注',
          name: 'remark',
          type: 'text',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        param: {
          id: "",
          settleGroupCode: "",
          settleGroupName: "",
          propertyTypeId: "",
          remark: ""
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: () => {
            return Object.values(this.dialog.param).some(item => {
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
      query: {
        settleGroupName: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    getCurrentPage(pageNum) {
      this.getAccountGroups({pageNum});
    },
    getpageSize(pageSize) {
      this.getAccountGroups({pageSize});
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (this.dialog.param.id) {
        // 修改
        this.editAccountGroup(this.dialog.param);
      } else {
        // 新增
        this.addAccountGroup(this.dialog.param);
      }
    },
    disableDialog: function(item) {
      this.$confirm(`操作将${item.status === true ? '禁止' : '开启' }该结算组别, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        const request = {
          id: item.id,
          status: item.status === true ? false : true
        };
        this.$api.financeapi.updateUsingDELETE_3({request}).then(res => {
          const data = res.data;
          if(data.status === 200) {
            item.status = (item.status === true ? false : true);
            $message("success", item.status ? "启用成功!" : "禁用成功!");
          } else {
            $message("error",  res.data.msg);
          }
        })
      })
    },
    async getAccountGroups(page={}, callback) {
      let params = {
        settleGroupName: this.query.settleGroupName,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_11(params).then(res => {
        const data = res.data;
        if(data.status === 200) {
          this.content = data.data;
          if(callback) callback();
        } else {
          return data.message;
        }
      })
    },
    async addAccountGroup(param) {
      let params = {
        request : this.dialog.param
      };
      await this.$api.financeapi.addUsingPOST_4(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getAccountGroups({}, () => {
            $message("success", "添加成功!");
            this.dialog.dialogVisible = false;
          });         
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async editAccountGroup(param) {
      let params = {
        id: param.id,
        param: param
      };
      await this.$api.financeapi.updateUsingPUT_7(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getAccountGroups({}, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
          });
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    }
  },
  watch:{
    'query.settleGroupName': function(){
      this.$delay(()=>{
          this.getAccountGroups();
      },300)
    }
  },
  computed: { },
  created() {
    this.getAccountGroups();
  }
};
</script>

<style scoped>

</style>