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
        title: "收款详情",
        content: [
          {
            label: "收款单号",
            name: "receiptCode",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "合同号",
            name: "contractNumber",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "结算单号",
            name: "settleNumber",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "商户名称",
            name: "merchantName",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "店铺名称",
            name: "name",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "应收金额",
            name: "amountReceivable",
            left_span: 2,
            right_span: 5,
            type: "text"
          },
          {
            label: "已收金额",
            name: "amountReceived",
            left_span: 2,
            right_span: 5,
            type: "text"
          },
          {
            label: "未收金额",
            name: "name",
            left_span: 2,
            right_span: 5,
            type: "text"
          },
          {
            label: "收款日期",
            name: "createDate",
            left_span: 2,
            right_span: 18,
            type: "text"
            // filter: "yyyy-MM-dd"
          },
          {
            label: "状态",
            name: "receiptStatus",
            left_span: 2,
            right_span: 18,
            type: "status",
            option: {
              0: "新增",
              1: "已确认",
              2: "已取消"
            }
          },
          {
            label: "收款形式",
            name: "receiptTypeText",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "费用项目及收费方式",
            name: "methods",
            left_span: 2,
            right_span: 18,
            type: "table",
            table: [
              {
                label: "费用项目",
                name: "financeCostId",
                type: "text"
              },
              {
                label: "收款方式",
                name: "receiptType",
                type: "text",
                option: {
                  "1": "预存",
                  "2": "现金",
                  "3": "各种银行"
                }
              },
              {
                label: "收款金额",
                name: "receiptMony",
                type: "text"
              },
              {
                label: "备注",
                name: "remarks",
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
    this.fetchData(this.$route.params.payManagement_id);
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData(id) {
      await this.$api.financeapi.byIdUsingGET({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          let data = returnObj.data.data;
          data.list = data.billRrecord;
          this.details = data;
        }
      });
    }
  }
};
</script>
