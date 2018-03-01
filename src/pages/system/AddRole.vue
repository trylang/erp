<template>
    <div>
        <con-head title="创建角色"></con-head>
        <div class="dialogbox userbox">
            <div class="dialoginput">
                <span class="inputname">用户名</span>
                <input class="inputtext" type="text" placeholder="请输入用户名">
                <span>0/20</span>
            </div>
            <div class="dialoginput noline" style="flex-direction: column;">
                <div>
                    <span class="inputname">备注</span>
                    <span class="inputtext" style="line-height: 30px;color:#ccc;">(选填)</span>
                </div>
                <textarea class="textareabox"></textarea>
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
            <el-button type="primary" class="submitbtn">提交</el-button>
        </div>
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
    .userbox{
        width:50%;
        margin:30px 10px;
    }
    .textareabox{
        height: 60px;
        padding: 5px;
        line-height: 18px;
        border: 1px solid #e5e5e5;
        resize:none;
    }
    .submitbtn{
        padding: 6px 30px;
        float: right;
        margin-right: 10px;
        margin-top: 20px;
    }

    .treetitle{
        padding: 5px 10px;
    }
    .treecontent{
        border: 1px solid #e5e5e5;
        padding: 10px;
    }
</style>