<template>
    <div>
        <con-head title="用户管理">
            <router-link to="/system/adduser/0" class="el-button el-icon-plus" slot="append"><span>添加</span></router-link>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model.trim="searchText" @keyup.enter="getUserList(1)"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <table class="el-table table_box">
                    <thead class="table_header">
                        <tr>
                            <th><div class="cell">用户名</div></th>
                            <th><div class="cell">姓名</div></th>
                            <th><div class="cell">性别</div></th>
                            <th><div class="cell">手机号</div></th>
                            <th><div class="cell">部门</div></th>
                            <th><div class="cell">职位</div></th>
                            <th><div class="cell">角色</div></th>
                            <th width="190"><div class="cell">操作</div></th>
                            <th class="gutter" style="width: 0px;"></th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList != null">
                        <tr v-for="userlist in dataList">
                            <td><div class="cell"><router-link :to="'/system/UserInfo/'+userlist.id" class="btn_text">{{userlist.username}}</router-link></div></td>
                            <td><div class="cell" v-text="userlist.realname"></div></td>
                            <td><div class="cell" v-text="userlist.sex==1?'男':'女'"></div></td>
                            <td><div class="cell" v-text="userlist.mobile"></div></td>
                            <td><div class="cell" v-text="userlist.department == null?'':userlist.department.departmentName"></div></td>
                            <td><div class="cell" v-text="userlist.position == null?'':userlist.position.positionName"></div></td>
                            <td><div class="cell" v-for="rolename in userlist.roleSet">{{rolename.roleName}}</div></td>
                            <td>
                                <div class="cell">
                                    <router-link :to="'/system/adduser/'+userlist.id" class="btn_text">编辑</router-link>
                                    <button class="btn_text" @click="dialogData(userlist.id)">重置密码</button>
                                    <button class="btn_text" :style="userlist.forbidden == false?'color:#ff5400':''" @click="userStutas(userlist.forbidden,userlist.id)">{{userlist.forbidden == false?'禁用':'启用'}}</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="el-table__empty-block" v-if="dataList == null">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getUserList" style="margin-bottom:30px;padding: 0 20px;"></rt-page>
        </con-head>
        <el-dialog
                title="重置密码"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">重置密码</span>
                    <input class="inputtext" type="password" placeholder="请输入新密码" v-model="passwordCont">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="resetPassword()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    export default {
        name: "user",
        data(){
            return{
                dialogVisible:false,
                dataList:[],
                searchText:'',
                userid:'',
                passwordCont:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0
            }
        },
        created(){
        },
        mounted(){
            //this.getUserList();
        },
        watch:{
            searchText() {
                this.$delay(() => {
                    this.getUserList(1);
                }, 1000);
            }
        },
        methods:{
            async getUserList(pageNum,pageSize){
                await this.$api.systemapi.listUsingGET_9({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    name:this.searchText
                }).then(res=>{
                    this.dataList = res.data.data;
                    this.total = Number(res.data.data.total);
                })
            },
            handleClose(){
                this.dialogVisible = false;
            },
            dialogData(id){
                this.userid = id;
                this.dialogVisible = true;
            },
            async resetPassword(){
                await this.$api.systemapi.resetPasswordUsingPUT_7({
                    userId:this.userid,
                    password:this.passwordCont
                }).then(res=>{
                    if(res.data.code == 200){
                        this.$message.success(res.data.msg);
                    }else{
                        this.$message.error(res.data.msg);
                    }
                });
            },
            async userStutas(userstate,userid){
                if(userstate == false) {
                    await this.$api.systemapi.setForbiddenUsingGET({
                        id: userid
                    }).then(res => {
                        if(res.data.code == 200){
                            this.$message.success(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                        this.getUserList();
                    });
                }else{
                    await this.$api.systemapi.setUnForbiddenUsingGET({
                        id: userid
                    }).then(res => {
                        if(res.data.code == 200){
                            this.$message.success(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                        this.getUserList();
                    });
                }
            }
        },
        components:{
            ConHead,
            RtPage
        }
    }
</script>

<style scoped>

</style>