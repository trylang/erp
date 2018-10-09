<template>
    <el-table :data="tableData" stripe @selection-change="handleSelectionChange">
        <el-table-column
                v-for="{ prop, label, width, type, link, param, click, index, format } in colConfigs"
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-if="!link && !click && type !== 'selection'">
                <template slot-scope="scope">
                    <span v-if="format">{{ scope.row[prop] | fmoney }}</span>
                    <span v-else>{{ scope.row[prop] }}</span>
                </template>
        </el-table-column>
        <el-table-column
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-else-if="type == 'selection'">
        </el-table-column>
        <el-table-column
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-else-if="click">
            <template slot-scope="scope">
                <div @click="tableclick(scope.row[param])" class="clickstyle">{{scope.row[prop]}}</div>
            </template>
        </el-table-column>
        <el-table-column
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-else-if="format">
            <template slot-scope="scope">
                 <span>{{ scope.row[prop] | fmoney }}</span>
            </template>
        </el-table-column>
        <el-table-column
                :key="index"
                :prop="prop"
                :label="label"
                :width="width"
                :type="type"
                v-else-if="link">
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
            },
            tableclick(val){
                this.$emit('tableclickemit',val);
            }
        }
    }
</script>

<style scoped>
    .clickstyle{
        color:#457fcf;
        cursor: pointer;
    }
</style>