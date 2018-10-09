<template>
    <el-row>
        <el-col style="text-align:right;">
            <el-pagination
              @size-change="sizeHandler"
              @current-change="currentHandler"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="newPageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script>
  export default{
    props: {
        pageSize: {
          type: Number,
          default: 10
        },
        cur: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
    },
    data() {
        return{
            // pageSize: 10,
            newPageSize: this.pageSize ? this.pageSize : 10,
            currentPage: this.cur,
            curPageInterpolation: this.startPage,
            pageSizes: function() {
              // return !this.customPageSizes ? [10, 20, 30] : this.customPageSizes;
            },
        }
    },
    mounted(){
        this.$emit('change', this.currentPage, this.pageSize);
    },
    methods: {
        sizeHandler(val) {
            this.newPageSize = val;
            this.$emit('change', this.currentPage, this.newPageSize);
        },
        currentHandler(val) {
            this.currentPage = val;
            this.$emit('change', this.currentPage, this.newPageSize);
        }
    }
  }
</script>

<style scoped>
  .el-pagination{
    margin-top: 15px;
  }
</style>