<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="创建角色"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">用户名</span>
                    <input class="inputtext" type="text" placeholder="请输入用户名">
                    <span class="textcount">0/20</span>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填"></textarea>
                    <span class="textcount">0/20</span>
                </div>
                <div class="treetitle">功能权限</div>
                <div class="treecontent">
                    <el-tree
                            :data="data2"
                            show-checkbox
                            node-key="id"
                            :props="defaultProps">
                    </el-tree>
                </div>
                </el-col>
            </el-row>
        </div>
        <div class="savebtn"><button>提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "add-role",
        data() {
            return {
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>
    .treetitle{
        padding: 5px 10px;
    }
    .treecontent{
        border: 1px solid #e5e5e5;
        padding: 10px;
    }
</style>