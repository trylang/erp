<template>
  <div>
    <erp-details :header="header" :details="details"></erp-details>
  </div>
</template>

<script>
import erpDetails from "@/components/Details";
import { getPayManagementById } from "@/utils/rest/finance";
export default {
  name: "payManagement",
  components: {
    erpDetails
  },
  data() {
    return {
      header: {
        title: "费用调整详情",
        content: [
          {
            label: "调整单号",
            name: "adjustNumber",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "合同号",
            name: "contractCode",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "结算单号",
            name: "settleNumber",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "商户名称",
            name: "merchantName",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "店铺名称",
            name: "shopName",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "调整日期",
            name: "adjustDate",
            left_span: 6,
            right_span: 5,
            type: "text"
          },
          {
            label: "状态",
            name: "statusName",
            left_span: 6,
            right_span: 18,
            type: "text",
            option: {
              '1': '新增',
              '2': '已修改'
            }
          },
          {   
            label: "调整内容",
            name: "methods",
            left_span: 6,
            right_span: 18,
            type: "table",
            table: [
              {
                label: "费用项目",
                name: "costItemName",
                type: "text"
              },
              {
                label: "结算金额",
                name: "amountReceivable",
                type: "text"
              },
              {
                label: "本次调整",
                name: "adjustAmount",
                type: "text"
              },
              {
                label: "剩余金额",
                name: "surplusAmount",
                type: "text"
              },
              {
                label: "调整类型",
                name: "adjustTypeName",
                type: "text"
              }
            ]
          }
        ]
      },
      details: {}
    };
  },
  created() {
    this.fetchData(this.$route.params.id);
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData(id) {
      await this.$api.financeapi.getDetailUsingGET({id}).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.details = returnObj.data.data;
          console.log(this.details);
        }        
      });
    }
  }
};
</script>
