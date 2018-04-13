<template>
  <con-head title="账单处理任务">
    <cash-card notCash="true" :cash="[{name:'处理结算单总数', id:this.content.totalCount}, {name: '成功处理结算单数', id:this.content.successCount}, {name: '失败结算单数', id:this.content.failCount}]"></cash-card>    
    <erp-table :header="header" :content="content"></erp-table>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import cashCard from "../../../components/CashCard";
import erpTable from "../../../components/Table";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    cashCard,
  },
  data() {
    return {
      header: [
        {
          label: "商户",
          type: "text",
          name: "merchantName"
        },
        {
          label: "合同",
          type: "text",
          name: "contractName",
          // filter: "yyyy-MM-dd hh:mm:ss"
        },
        {
          label: "结算组别",
          name: "settleGroupIdName",
          type: "text",
        },
        {
          label: "结算月",
          name: "cycle",
          type: "text"
        },
        {
          label: "失败原因",
          name: "failReason",
          type: "text"
        },
      ],
      content: {
        list: []
      },
      dialog: {
        models: [{
          label: '编码',
          name: 'id',
          type: 'text',
          placeholder: '请输入编号'
        }, {
          label: '名称',
          name: 'name',
          type: 'text',
          placeholder: '请输入名称'
        }, {
          label: '备注',
          name: 'desc',
          type: 'text',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        param: {
          id: "",
          name: "",
          desc: ""
        },
        options: [{
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
        }, {
          label: "取 消",
          name: "edit",
          type: "",
          click: () => {
            this.cancelDialog();
          }
        }]
      },
    };
  },
  methods: {
    async getBillList() {
      if(!this.$route.params.id) return;
      await this.$api.financeapi.resultUsingGET({id: this.$route.params.id}).then(res => {
        if (res.data.status === 200) {
          this.content = res.data.data;
          this.content.list = res.data.data.item;
        } else {
          $message('error', res.data.msg);
        }
      })
    }
  },
  computed: {},
  created() {
    this.getBillList();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getBillList'
  },
};
</script>

<style lang="scss" scoped>
.line-nav{
    flex:1;
    line-height: 30px;
}
.line-nav a{
    margin: 0 10px;
    color: #666;
    font-weight: bold;
    height: 30px;
    text-decoration: none;
    display: inline-block;
}
.line-nav a.active{
    color: #457fcf;
    border-bottom: 2px solid #457fcf;
}
.global-block {
  margin-top: 1rem;
}
		
</style>