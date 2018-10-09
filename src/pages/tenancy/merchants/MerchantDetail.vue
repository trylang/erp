<template>
  <div class="savebox">
    <div class="savecont">
        <erp-details :header="header" :noGoback="true" :details="details"></erp-details>
        <br>
        <erp-details :header="headerA" :noGoback="true" :details="detailsA"></erp-details>
        <br>     
        <erp-details :header="headerT" :noGoback="true" :details="detailsT"></erp-details>
    </div>
    <div class="savebtn"><button @click="returnHandler">返回</button></div>
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
        title: "商户详情",
        content: [
          {
            label: "商户名称：",
            name: "merchantName",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "英文名称：",
            name: "merchantEnglishName",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "商户类型：",
            name: "enumMerchantType",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "商户性质：",
            name: "enumMerchantNature",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "公司名称：",
            name: "companyName",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "地址：",
            name: "adress",
            left_span: 3,
            right_span: 18,
            type: "text"
          }
        ]
      },
      headerA: {
        title: "联系人",
        content: [
          {
            label: "联系人：",
            name: "responsiblePerson",
            left_span: 3,
            right_span: 3,
            type: "text"
          },
          {
            label: "联系电话：",
            name: "contactNumber",
            left_span: 3,
            right_span: 3,
            type: "text"
          },
          {
            label: "传真：",
            name: "fax",
            left_span: 3,
            right_span: 3,
            type: "text"
          }
        ]
      },
      headerT: {
        title: "证件信息",
        content: [
          {
            label: "营业执照编号：",
            name: "businessLicenseNumber",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "营业执照：",
            name: "businessLicenseImg",
            left_span: 3,
            right_span: 18,
            type: "moreImgs",
            url: "url"
          },
          {
            label: "经营许可证号：",
            name: "businessPermitNumber",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "经营许可证：",
            name: "businessPermitImg",
            left_span: 3,
            right_span: 18,
            type: "moreImgs",
            url: "url"
          },
          {
            label: "商标注册证件号：",
            name: "trademarkRegistrationNumber",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "商标注册证件：",
            name: "trademarkRegistrationImg",
            left_span: 3,
            right_span: 18,
            type: "moreImgs",
            url: "url"
          },
          {
            label: "法人身份证号：",
            name: "legalPersonId",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "法人身份证：",
            name: "legalPersonIdImg",
            left_span: 3,
            right_span: 18,
            type: "moreImgs",
            url: "url"
          },
          {
            label: "其他证件号：",
            name: "otherCertificate",
            left_span: 3,
            right_span: 18,
            type: "text"
          },
          {
            label: "其他证件：",
            name: "otherCertificateImg",
            left_span: 3,
            right_span: 18,
            type: "moreImgs",
            url: "url"
          }
        ]
      },
      details: {},
      detailsA: [],
      detailsT: {}
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
      this.$api.rentapi.detailUsingGET_6({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          let data = returnObj.data.data;
          this.details = data;
          this.detailsA = data.contactLstParams || [];
          this.detailsT = data;
        }
      });
    },
    returnHandler() {
      this.$router.push("/inner/merchants");
    }
  }
};
</script>