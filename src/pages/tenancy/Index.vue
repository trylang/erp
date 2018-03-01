<template>
    <div>
        <con-head title="楼宇类型">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text">编辑</button>
                            <button class="btn_text">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
        </con-head>
        <el-dialog
                title="添加楼宇类型"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import PageContent from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                add:{
                    number:"",
                    name:""
                },
                columnData:[
                    { prop: 'number', label: '编码'},
                    { prop: 'name', label: '名称' },
                    { prop: 'datetime', label: '更新时间' }
                ]
            }
        },
        mounted(){
            this.getbuilding();
        },
        methods:{
            handleClose(){
                this.dialogVisible = false;
            },
            async getbuilding(){
                let list = await this.$api.getBuiding();
                this.datalist = list;
            },
            async addbuilding(){
                let params = {
                    number:this.add.number,
                    name:this.add.name,
                    datetime:'2017-12-03 16:05:09'
                };
                await this.$api.addBuilding(params);
                this.getbuilding();
            }
        },
        components:{
            ConHead,
            PageContent,
            DataTable
        }
    }
</script>

<style scoped>

</style>