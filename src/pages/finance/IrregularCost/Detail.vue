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
        title: "费用详情",
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
            name: "createDate",
            left_span: 2,
            right_span: 5,
            type: "text",
          },
          {
            label: "金额",
            name: "sum",
            left_span: 2,
            right_span: 18,
            type: "fmoney"
          },
          {
            label: "状态",
            name: "statusText",
            left_span: 2,
            right_span: 5,
            type: "text",
            option: {
              10: "新增",
              20: "已确认",
              30: "取消"
            }
          },
          {   
            label: "费用项目",
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
                label: "收款金额",
                name: "amount",
                type: "fmoney"
              },
              {
                label: "费用日期",
                name: "cycleDate",
                type: "text",
                filter: "yyyy-MM-dd"
              },
              {
                label: "生成结算单",
                name: "generatedValue",
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
    async fetchData(id) {
      await this.$api.financeapi.detailUsingGET_4({id}).then(returnObj => {        
        if(returnObj.data.status === 200) {
          let data = returnObj.data.data;
          data.list = data.itemDetailVoList;
          this.details = data;
        }
      });
    }
  }
};
</script>
