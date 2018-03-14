<template>
    <el-table :data="tableData" stripe @selection-change="handleSelectionChange">
        <el-table-column
                v-for="{ prop, label, width, type, link, param, index } in colConfigs"
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-if="!link">
        </el-table-column>
        <el-table-column
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-else>
            <template slot-scope="scope">
                <router-link :to="link+'/'+scope.row[param]">{{ scope.row[prop] }}</router-link>
            </template>
        </el-table-column>
        <slot name="operation"></slot>
    </el-table>
</template>

<script>
    export default {
        name: "data-table",
        props:['tableData','colConfigs'],
        methods:{
            handleSelectionChange(val){
                this.$emit('listSelected',val);
            }
        }
    }
</script>

<style scoped>

</style>