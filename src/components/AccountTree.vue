<template>
  <section class="account_tree">
    <el-row>
      <el-col :span="10" class="not-print">
        <div class="erp_container">
          <el-tree
            :data="createTree"
            show-checkbox
            ref="tree"
            node-key="id"
            default-expand-all
            highlight-current
            :props="defaultProps"
            @check="handleCheckChange">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="14" class="full_width">
        <div class="erp_container" id="subOutputRank-print">
          <notice-template v-for="(detail, index) in details" :key="index" :header="header" :content="detail.item" :detail="detail"></notice-template>
        </div>
      </el-col>   
    </el-row>
  </section>
</template>

<script>
import NoticeTemplate from "@/components/NoticeTemplate";
import { $message } from "@/utils/notice";

// import print from '@/utils/directive/print';
export default {
  name: "account-tree",
  props: ["createTree", "header"],
  components: {
    NoticeTemplate
  },
  data() {
    return {
      detail: {},
      details: [],
      defaultProps: {
        children: "children",
        label: "label",
        title: {
          ifBorder: true,
          label: "POS租金"
        }
      }
    };
  },
  methods: {
    handleCheckChange(data, checked) {
      let checkedIds = [];
      checked.checkedNodes.forEach(item => {
        if (!item.children) {
          checkedIds.push(item.id);
        }
      });
      this.billDetailList(checkedIds);       
    },
    selectedIds() {
      if (this.$refs.tree) {
        const ids = [];
        const nodes = this.$refs.tree.getCheckedNodes();
        nodes.forEach(item => {
          if (!item.children) {
            ids.push(item.id);
          }
        });
        return ids;
      }
    },
    printBill() {
      let subOutputRankPrint = document.getElementById("subOutputRank-print");
      let newContent = subOutputRankPrint.innerHTML;
      let oldContent = document.body.innerHTML;
      document.body.innerHTML = newContent;
      window.print();
      window.location.reload();
      document.body.innerHTML = oldContent;
      return false;
    },
    async billDetailList(ids) {
      if (ids.length === 0) {
        this.details = [];
        return;
      };
      let asyncFuncList = [];
      ids.forEach(id => {
        asyncFuncList.push(this.billDetail(id));
      });
      this.details = await Promise.all(asyncFuncList);
    },
    async billDetail(id) {
      const res = await this.$api.financeapi.detailUsingGET_1({id});
      if (res.data.status === 200) {
        res.data.data.list = res.data.data.item;
        return res.data.data;
      };
    },
    async cancelBill(cb) {
      const id = this.selectedIds();
      if (!id) return;
      if (id.length <= 0) {
        $message("info", "请先选择结算单!");
        return;
      }
      await this.$api.financeapi.cancelUsingPUT_1({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          $message('success', '结算单取消成功！');
          if(cb) cb();
        }  else {
          $message('error', returnObj.data.msg);
        }
      });
    },
    async confirmBill(cb) {
      const id = this.selectedIds();
      if (!id) return;
      if (id.length <= 0) {
        $message("info", "请先选择结算单!");
        return;
      }
      await this.$api.financeapi.confirmUsingPUT_1({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          $message("success", "结算单确认成功!");
          if(cb) cb();
        }  else {
          $message('error', returnObj.data.msg);
        }
      });
    },
    async publishBill(cb) {
      const id = this.selectedIds();
      if (!id) return;
      if (id.length <= 0) {
        $message("info", "请先选择结算单!");
        return;
      }
      await this.$api.financeapi.publishUsingPUT({ id }).then(returnObj => {        
        if (returnObj.data.status === 200) {
          $message("success", "结算单发布成功");
          if(cb) cb();
        } else {
          $message('error', returnObj.data.msg);
        }
      });
    },
    async deleteBill(cb) {
      const id = this.selectedIds();
      if (!id) return;
      if (id.length <= 0) {
        $message("info", "请先选择结算单!");
        return;
      }
      await this.$api.financeapi.delUsingDELETE_2({ id }).then(returnObj => {
        if (returnObj.data.status === 200) {
          $message("success", "结算单删除成功!");
          if(cb) cb();
        } else {
          $message('error', returnObj.data.msg);
        }
      });
    }
  },
  mounted() {
    this.$root.eventEmit.$on("ACCOUNTTREE", (type, cb) => {
      this[type.type](cb);
    });
  }
};
</script>

<style lang="scss" scoped>
.account_tree {
  margin-top: 2rem;
  .erp_container {
    border: 1px solid #eee;
    padding: 1rem;
    margin: 0 0.6rem;
  }
}

// @media print {
//   .not-print {
//     display: none;
//   }
//   .full_width {
//     width: 100%;
//   }
// }
</style>





