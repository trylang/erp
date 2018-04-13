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
        title: "免租详情",
        content: [
          {
            label: "费用单号",
            name: "costNo",
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
            label: "结算组别",
            name: "settleGroupName",
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
            name: "shopName",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "录入日期",
            name: "updateDate",
            left_span: 2,
            right_span: 18,
            type: "text"
            // filter: "yyyy-MM-dd"
          },
          {
            label: "状态",
            name: "status",
            left_span: 2,
            right_span: 18,
            type: "status",
            option: {
              10: "新增",
              20: "已确认",
              30: "已取消"
            }
          },
          {
            label: "调整内容",
            name: "methods",
            left_span: 2,
            right_span: 18,
            type: "table",
            table: [
              {
                label: "费用项目",
                name: "costItemName",
                type: "text"
              },
              {
                label: "免租类型",
                name: "reduceTypeName",
                type: "text",
                option: {
                  "10": "指定金额",
                  "20": "全免",
                  "30": "比例"
                }
              },
              {
                label: "免租金额",
                name: "amount",
                type: "text"
              },
              {
                label: "费用日期",
                name: "expenseDate",
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
        this.$api.financeapi.detailUsingGET_6({ id }).then(returnObj => {
            if (returnObj.data.status === 200) {
                let data = returnObj.data.data;
                data.list = data.itemDetailVoList;
                this.details = data;
            }
      });
    }
  }
};
</script>
