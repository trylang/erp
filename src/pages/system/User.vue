<template>
    <div>
        <con-head title="用户管理">
            <el-button type="primary" icon="el-icon-plus" slot="append"><router-link to="/system/adduser">添加</router-link></el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="190"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text">编辑</button>
                            <button class="btn_text">重置密码</button>
                            <button class="btn_text">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import PageContent from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "user",
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                add:{
                    number:"",
                    name:""
                },
                value: '',
                options: [{
                    value: '中粮集团'
                }, {
                    value: '中粮中粮'
                }, {
                    value: '中粮公司'
                }],
                columnData:[
                    { prop: 'number', label: '用户名'},
                    { prop: 'name', label: '姓名' },
                    { prop: 'superior1', label: '性别' },
                    { prop: 'number', label: '手机号' },
                    { prop: 'name', label: '部门' },
                    { prop: 'name', label: '职位' },
                    { prop: 'name', label: '角色' }
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