<template>
    <div class="pagecontent">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, jumper, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "pagination"
    }
</script>

<style scoped>
    .pagecontent{
        text-align: center;
        padding: 20px 0;
    }
</style>