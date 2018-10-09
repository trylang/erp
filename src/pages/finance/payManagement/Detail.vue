<template>
  <div>
    <erp-details :header="header" :details="details"></erp-details>
  </div>
</template>

<script>
import erpDetails from "@/components/Details";
import { queryDicsByCode } from "@/utils/rest/financeAPI";

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
            name: "shopName",
            left_span: 2,
            right_span: 18,
            type: "text"
          },
          {
            label: "应收金额",
            name: "amountReceivable",
            left_span: 2,
            right_span: 5,
            type: "fmoney"
          },
          {
            label: "已收金额",
            name: "amountReceived",
            left_span: 2,
            right_span: 5,
            type: "fmoney"
          },
          {
            label: "未收金额",
            name: "owed",
            left_span: 2,
            right_span: 5,
            type: "fmoney"
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
              2: "取消"
            }
          },
          {
            label: "收款形式",
            name: "showReceiptType",
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
                name: "costItemName",
                type: "text"
              },
              {
                label: "日期范围",
                name: "period",
                type: "text"
              },
              {
                label: "收款方式",
                name: "receiptType",
                type: "status",
                option: {}
                // option: {
                //   "1": "预存",
                //   "2": "现金",
                //   "3": "各种银行"
                // }
              },
              {
                label: "收款日期",
                name: "createDate",
                type: "text"
              },
              {
                label: "收款金额",
                name: "receiptMony",
                type: "fmoney"
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
      details: {},
    };
  },
  created() {
    this.fetchData(this.$route.params.payManagement_id);
    this.getDic();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async getDic() {
      await queryDicsByCode('0007').then(res => {
        let option = {};
        res.data.forEach(item => {
          option[item.value] = item.name;
        });
        option['11'] = '预存款';
        option['22'] = '现金';
        option['33'] = '银行卡';
        this.header.content[this.header.content.length-1].table[2].option = option;
      })
    },
    async fetchData(id) {
      await this.$api.financeapi.byIdUsingGET({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          let data = returnObj.data.data;
          data.owed = (data.amountReceivable - data.amountReceived).toFixed(2);
          data.billRrecord.forEach(item => {
            item.period = item.period ? item.period.replace(/-/g, '/') : '--';       
          });
          data.list = data.billRrecord;
          this.details = data;
        }
      });
    }
  }
};
</script>
