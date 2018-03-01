<template>
    <div class="conhead">
        <div class="header" v-if="title">
            <el-row>
                <el-col :span="18" class="titletxt">
                    <span class="h3" v-html="title"></span>
                </el-col>
                <el-col :span="6" style="text-align: right;" class="titlebtn">
                    <slot name="append"></slot>
                </el-col>
            </el-row>
        </div>
        <div class="preappend">
            <slot name="preappend"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "con-head",
        props:['title']
    }
</script>

<style scoped>
    .conhead{
        padding: 10px 0;
    }
    .preappend{
        padding: 0 20px;
    }
    .header{
        margin: 0 20px;
    }
    .header .h3{
        color: #353c5f;
        border-left: 4px solid #353c5f;
        padding-left: 5px;
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }
</style>