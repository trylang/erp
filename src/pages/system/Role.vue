<template>
    <div>
        <con-head title="角色管理">
            <router-link to="/system/addrole/0" class="el-button el-icon-plus" slot="append"><span>添加</span></router-link>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model="searchText" @keyup.enter="getRoleList(1)"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <table class="el-table table_box">
                    <thead class="table_header">
                        <tr>
                            <th><div class="cell">角色名称</div></th>
                            <th><div class="cell">描述</div></th>
                            <th width="190"><div class="cell">操作</div></th>
                            <th class="gutter" style="width: 0px;"></th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList != null">
                    <tr v-for="userlist in dataList">
                        <td><div class="cell" v-text="userlist.roleName"></div></td>
                        <td><div class="cell" v-text="userlist.description"></div></td>
                        <td>
                            <div class="cell">
                                <router-link :to="'/system/addrole/'+userlist.id" class="btn_text">编辑</router-link>
                                <button class="btn_text" @click="deleteRole(userlist.id)">删除</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="el-table__empty-block" v-if="dataList == null">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getRoleList" style="margin-bottom:30px;padding: 0 20px;"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "role",
        data(){
            return{
                dataList:[],
                searchText:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0
            }
        },
        mounted(){
            //this.getRoleList();
        },
        watch:{
            searchText() {
                this.$delay(() => {
                    this.getRoleList(1);
                }, 1000);
            }
        },
        methods:{
            async getRoleList(pageNum,pageSize){
                await this.$api.systemapi.listUsingGET_8({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    name:this.searchText
                }).then(res=>{
                    this.dataList = res.data.data;
                    this.total = Number(res.data.data.total);
                })
            },
            async deleteRole(rId){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.systemapi.deleteUsingDELETE_5({
                        roleId:rId
                    }).then(res=>{
                        if(res.data.code == 200){
                            this.getRoleList();
                            this.$message.success(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    });
                }).catch(() => {});
            }
        },
        components:{
            ConHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>

</style>