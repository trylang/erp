<template>
  <section class="account_tree">
    <el-row>
      <el-col :span="10" class="not-print">
        <div class="erp_container">
          <el-tree
            :data="data2"
            show-checkbox
            default-expand-all
            highlight-current
            :props="defaultProps"
            @check-change="handleCheckChange">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="14" class="full_width">
        <div class="erp_container" @print="selectedPrint">
          <notice-template :header="header" :content="content"></notice-template>
        </div>
      </el-col>   
    </el-row>
  </section>
</template>

<script>
import NoticeTemplate from "@/components/NoticeTemplate";
export default {
  name: "account-tree",
  props: ["tree", "header", "content"],
  components: {
    NoticeTemplate
  },
  data() {
    return {
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
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
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    selectedPrint() {
      let subOutputRankPrint = document.getElementById('subOutputRank-print');  
      console.log(subOutputRankPrint.innerHTML);  
      let newContent =subOutputRankPrint.innerHTML;  
      let oldContent = document.body.innerHTML;  
      document.body.innerHTML = newContent;  
      window.print();  
      window.location.reload();  
      document.body.innerHTML = oldContent;  
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .account_tree {
    margin-top: 2rem;
    .erp_container {
      border: 1px solid #eee;
      padding: 1rem;
      margin: 0 .6rem;
    }
  }

  @media print {
    .not-print {
      display: none;
    }
    .full_width {
      width: 100%;
    }
  }
</style>



