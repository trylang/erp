<template>
    <div v-loading.fullscreen="loading">
        <con-head title="用户管理">
            <router-link to="/system/adduser/0" class="el-button el-icon-plus" slot="append"><span>添加</span></router-link>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model.trim="searchText" @keyup.enter="getUserList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
                <el-col :span="9" :offset="6">
                    <div class="searchselect">
                        <span class="inputname inputnameauto">部门</span>
                        <el-select v-model="departmentId" placeholder="请选择" filterable clearable class="dialogselect" @change="departmentChange()">
                            <el-option label="全部" value=""></el-option>
                            <el-option
                                    v-for="item in departmentOptions"
                                    :key="item.id"
                                    :label="item.departmentName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
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
                            <th><div class="cell">状态</div></th>
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
                            <td><div class="cell" v-for="item in userlist.roleSet">{{item.roleName}}</div></td>
                            <td><div class="cell" v-text="userlist.forbiddenText"></div></td>
                            <td>
                                <div class="cell">
                                    <router-link :to="'/system/adduser/'+userlist.id" class="btn_text">编辑</router-link>
                                    <button class="btn_text" @click="dialogData(userlist,userlist.id)">重置密码</button>
                                    <button class="btn_text" :style="userlist.forbidden == false?'color:#ff5400':''" @click="userStutas(userlist.forbidden,userlist.id)">{{userlist.forbidden == false?'禁用':'启用'}}</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="el-table__empty-block" v-if="dataList.length<=0">
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
                    <span class="inputname">新密码</span>
                    <input class="inputtext" type="password" placeholder="请输入新密码" v-model="newPassword">
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="min-width: 92px;">确认新密码</span>
                    <input class="inputtext" type="password" placeholder="请输入新密码" v-model="confirmNewPassword">
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
                loading: true,
                dialogVisible:false,
                dataList:[],
                searchText:'',
                userid:'',
                newPassword:'',
                confirmNewPassword:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                departmentId:'',
                departmentOptions:''
            }
        },
        created(){
        },
        mounted(){
            //this.getUserList();
            this.getDepartment();
        },
        watch:{
            searchText() {
                this.$delay(() => {
                    this.getUserList(1,this.pageSize);
                }, 1000);
            }
        },
        methods:{
            async getUserList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.systemapi.listUsingGET_9({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    name:this.searchText,
                    departmentId:this.departmentId
                }).then(res=>{
                    if(res.data.status === 200){
                        this.loading = false;
                        this.dataList = res.data.data.list;
                        this.dataList.forEach(item=>{
                            item.forbiddenText = item.forbidden==true?'禁用':'启用'
                        })
                        this.total = Number(res.data.data.total);
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                })
            },
            handleClose(){
                this.dialogVisible = false;
            },
            dialogData(userlist,id){
                if(id){
                    this.userid = id;
                }
                this.dialogVisible = true;
            },
            async getDepartment(){
                this.$api.systemapi.listUsingGET().then(res=>{
                    if(res.data.status === 200){
                        this.departmentOptions = res.data.data.list;
                    }
                });
            },
            async resetPassword(){
                if(this.newPassword && this.confirmNewPassword){
                    await this.$api.systemapi.adminResetPasswordUsingPUT({
                        newPassword: this.newPassword,
                        repeatNewPassword: this.confirmNewPassword,
                        validationCode: '123456',
                        userId: this.userid
                    }).then(res=>{
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.getUserList(1,this.pageSize);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    });
                }else{
                    this.$message.error('密码不能为空！');
                }
                
            },
            async userStutas(userstate,userid){
                this.$confirm('您确定继续当前操作？', '提示', {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {
                    if(userstate == false) {
                    this.$api.systemapi.setForbiddenUsingGET({
                        id: userid
                    }).then(res => {
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                        this.getUserList(1,this.pageSize);
                    });
                }else{
                    this.$api.systemapi.setUnForbiddenUsingGET({
                        id: userid
                    }).then(res => {
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                        this.getUserList(1,this.pageSize);
                    });
                }
                }).catch(_ => {});
                
            },
            departmentChange(){
                this.getUserList(1,this.pageSize);
            }
        },
        components:{
            ConHead,
            RtPage
        }
    }
</script>

<style scoped>
    .gray{
        color: #606266;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    table tbody tr{
        background-color: #fff;
    }
    table tbody tr:hover{
        background-color: #f5f7fa;
    }
    table tbody tr:nth-of-type(2n){
        width: 100%;
        background-color: #FAFAFA;
    }
</style>