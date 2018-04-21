<template>
  <con-head title="税率设置">
    <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialog.dialogVisible = true, dialog.param={rate: '', rateCode: '', validDate: ''}">添加</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchbox">
            <input type="text" placeholder="请输入税码" v-model="query.rateCode" @keyup.enter="getTaxRates()"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog :title="dialog.param.id? '修改税码': '添加税码'" :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import { formatDate } from "@/utils/filter";
import { onlyNumWord } from "@/utils";
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
          label: "税码",
          type: "text",
          name: "rateCode"
        },
        {
          label: "税率",
          type: "text",
          name: "rateStr"
        },
        {
          label: "有效期",
          name: "validDateRange",
          type: "text",
          filter: "yyyy-MM-dd hh:mm:ss.S"
        },
        {
          label: "说明",
          type: "text",
          name: "description"
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
      content: [],
      dialog: {
        models: [{
          label: '税码',
          name: 'rateCode',
          type: 'text',
          placeholder: '请输入税码'
        }, {
          label: '税率',
          name: 'rate',
          type: 'text',
          slot: '%',
          placeholder: '请输入税率'
        }, {
          label: '有效期',
          name: 'validDate',
          type: 'date',
          placeholder: '请输入有效期'
        }, {
          label: '说明（选填）',
          name: 'description',
          type: 'textarea',
          placeholder: '请输入说明'
        }],
        dialogVisible: false,
        param: {
          id: "",
          rateCode: "",
          rate: "",
          validDate: ""
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
        rateCode: ""
      }
    };
  },
  methods: {
    getCurrentPage(pageNum) {
      this.getTaxRates({pageNum});
    },
    getpageSize(pageSize) {
      this.getTaxRates({pageSize});
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      if (!onlyNumWord(this.dialog.param.rateCode)) {
        $message('info','只能输入数字和字母');
        return;
      }
      if (this.dialog.param.id) {
        // 修改
        this.editTaxRates(this.dialog.param);
      } else {
        // 新增
        this.addTaxRates(this.dialog.param);
      }
    },
    deleteDialog: function(item) {
      this.$confirm("此操作将永久删除该税率设置, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.deleteTaxRates(item);
      });
    },
    async getTaxRates(page={}, callback) {
      const param = {
        pageNum: page.pageNum,
        pageSize: page.pageSize,
        rateCode: this.query.rateCode
      };
      this.$api.financeapi.listUsingGET_9(param).then(res => {
        const data = res.data;
        if(data.status === 200) {
          data.data.list.forEach(item => {
            let validTime = formatDate(item.validDateStart, 'yyyy/MM/dd') +'~'+ (item.validDateEnd ? formatDate(item.validDateEnd, 'yyyy/MM/dd') : '' );
            item.validDateRange = validTime;
            item.validDate = item.validDateStart;
            item.rateStr = item.rate + '%';
          });
          this.content = data.data;
        } else {
          return data.message;
        }
        if (callback) callback();
      })
    },
    async addTaxRates(param) {
      let params = {
        request : param
      };
      await this.$api.financeapi.addUsingPOST_2(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getTaxRates({}, () => {
            $message("success", "添加成功!");
            this.dialog.dialogVisible = false;
          });          
        } else {
          $message("error", "添加失败!");
        }       
      });
    },
    async editTaxRates(param) {
      let params = {
        id: param.id,
        param: param
      };
      const that = this;
      await this.$api.financeapi.updateUsingPUT_5(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getTaxRates({}, () => {
            // TODO: 重新查列表，需要带参数，这里还没弄
            $message("success", "修改成功!");
            that.dialog.dialogVisible = false;
          });
        } else {
          $message("error", "修改失败!");
        }       
      });
    },
    async deleteTaxRates(param) {
      let params = {
        id: param.id
      };
      const that = this;
      await this.$api.financeapi.deleteUsingDELETE_2(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getTaxRates({}, () => {
            // TODO: 重新查列表，需要带参数，这里还没弄
            $message("success", "删除成功!");
            that.dialog.dialogVisible = false;
          });          
        } else {
          $message("error", "删除失败!");
        }       
      });
    }
  },
  watch:{
    'query.rateCode': function(){
      this.$delay(()=>{
          this.getTaxRates();
      },300)
    }
  },
  created() {
    this.getTaxRates();
  }
};
</script>

<style scoped>

</style>