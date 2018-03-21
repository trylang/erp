<template>
    <div>
        <con-head title="用户管理">
            <router-link to="/system/adduser" class="el-button el-icon-plus" slot="append"><span>添加</span></router-link>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
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
    //import { listUsingGET_9 } from '../../api/system-api-client'
    export default {
        name: "user",
        data(){
            return{
                dialogVisible:false,
                dataList:[],
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
                    { prop: 'realname', label: '用户名', link:'/system/userinfo', param:'id'},
                    { prop: 'realname', label: '姓名'},
                    { prop: 'realname', label: '性别'},
                    { prop: 'realname', label: '手机号'},
                    { prop: 'realname', label: '部门'},
                    { prop: 'realname', label: '职位'},
                    { prop: 'realname', label: '角色'}
                ]
            }
        },
        created(){
            this.getUserList();
        },
        mounted(){
        },
        methods:{
            handleClose(){
                this.dialogVisible = false;
            },
            async getUserList(){
                await this.$api.systemapi.listUsingGET_9({
                    pageNum:1,
                    pageSize:10,
                    name:''
                }).then(res=>{
                    this.dataList = res.data.data;
                    console.log(res.data.data)
                })
            }
            /*async addbuilding(){
                let params = {
                    number:this.add.number,
                    name:this.add.name,
                    datetime:'2017-12-03 16:05:09'
                };
                await this.$api.addBuilding(params);
                this.getbuilding();
            }*/
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