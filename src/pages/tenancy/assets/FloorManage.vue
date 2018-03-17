<template>
    <div>
        <con-head title="楼宇管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
            <el-button type="primary" slot="append">修改</el-button>
            <el-button type="primary" slot="append">删除</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <el-tree
                        :data="data"
                        :props="defaultProps"
                        :highlight-current=true
                        @node-click="handleNodeClick"
                        :expand-on-click-node="false"
                        class="treestyle"
                ></el-tree>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    export default {
        name: "floor-manage",
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods:{
            handleNodeClick(data){
                console.log(data)
            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>

</style>