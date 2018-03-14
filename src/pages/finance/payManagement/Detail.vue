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
            name: "id",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "合同号",
            name: "id",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "票据号",
            name: "id",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "商户名称",
            name: "name",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "店铺名称",
            name: "name",
            left_span: 6,
            right_span: 18,
            type: "text"
          },
          {
            label: "收款金额",
            name: "name",
            left_span: 6,
            right_span: 5,
            type: "text"
          },
          {
            label: "未收金额",
            name: "name",
            left_span: 6,
            right_span: 5,
            type: "text"
          },
          {
            label: "收款日期",
            name: "update_time",
            left_span: 6,
            right_span: 18,
            type: "time",
            filter: "yyyy-MM-dd"
          },
          {
            label: "状态",
            name: "state",
            left_span: 6,
            right_span: 18,
            type: "status",
            option: {
              '1': '新增',
              '2': '已修改'
            }
          },
          {   
            label: "收款方式",
            name: "methods",
            left_span: 6,
            right_span: 18,
            type: "table",
            table: [
              {
                label: "收款方式",
                name: "id",
                type: "text"
              },
              {
                label: "收款金额",
                name: "money",
                type: "text"
              },
              {
                label: "备注",
                name: "desc",
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
    fetchData(id) {
      getPayManagementById(id).then(returnObj => {
        this.details = returnObj;
      });
    }
  }
};
</script>
