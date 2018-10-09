<template>
  <div>
    <erp-details :header="header" :details="details"></erp-details>
  </div>
</template>

<script>
import erpDetails from "@/components/Details";
export default {
  components: {
    erpDetails
  },
  data() {
    return {
      header: {
        title: "保证金收取详情",
        content: [
          {
            label: "收款单号",
            name: "receiptNumber",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "合同号",
            name: "contractCode",
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
            label: "店铺号",
            name: "shopCode",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "店铺名称",
            name: "shopName",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "收款金额",
            name: "totalAmount",
            left_span: 2,
            right_span: 18,
            type: "fmoney"
          },
          {
            label: "收款时间",
            name: "commitDate",
            left_span: 2,
            right_span: 18,
            type: "text"
            // filter: "yyyy-MM-dd"
          },
          {
            label: "阶段",
            name: "stage",
            left_span: 2,
            right_span: 18,
            type: "status",
            option: {
              0: "意向",
              1: "正式"
            }
          },
          {
            label: "状态",
            name: "status",
            left_span: 2,
            right_span: 18,
            type: "status",
            option: {
              0: "新增",
              1: "已确认",
              2: "取消"
            }
          },
          {
            label: "收款方式",
            name: "methods",
            left_span: 2,
            right_span: 18,
            type: "table",
            table: [
              {
                label: "收款方式",
                name: "paymentName",
                type: "text"
              },
              {
                label: "收款金额",
                name: "receivedAmount",
                type: "fmoney"
              },
              {
                label: "收款日期",
                name: "receivedDate",
                type: "text"
              },
              {
                label: "备注",
                name: "remark",
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
    fetchData(id) {
        this.$api.financeapi.detailUsingGET_3({ receiptNumber: id }).then(returnObj => {
            if (returnObj.data.status === 200) {
                let data = returnObj.data.data;
                data.list = data.list;
                this.details = data;
            }
      });
    }
  }
};
</script>
