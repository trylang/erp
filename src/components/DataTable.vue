<template>
    <el-table :data="tableData" stripe>
        <el-table-column
                v-for="{ prop, label, width, index } in colConfigs"
                :key="index"
                :prop="prop"
                :label="label"
                :width="width">
        </el-table-column>
        <slot name="operation"></slot>
    </el-table>
</template>

<script>
    export default {
        name: "data-table",
        props:['tableData','colConfigs']
    }
</script>

<style scoped>

</style>