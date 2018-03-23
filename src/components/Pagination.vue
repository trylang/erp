<template>
    <el-row>
        <el-col style="text-align:right;">
            <el-pagination
              @size-change="sizeHandler"
              @current-change="currentHandler"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script>
  export default{
    props: {
        cur: {
            type: Number,
            default: 1
      },
        total: {
            type: Number,
            default: 0
      }
    },
    data() {
        return{
            pageSize: 10,
            currentPage: this.cur,
            curPageInterpolation: this.startPage,
        }
    },
    mounted(){
        this.$emit('change', this.currentPage, this.pageSize);
    },
    methods: {
        sizeHandler(val) {
            this.pageSize = val;
            this.$emit('change', 1, this.pageSize);
        },
        currentHandler(val) {
            this.currentPage = val;
            this.$emit('change', this.currentPage, this.pageSize);
        }
    }
  }
</script>

<style scoped>
  .el-pagination{
    margin-top: 15px;
  }
</style>